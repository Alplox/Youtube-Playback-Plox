// ==UserScript==
// @name         YouTube Playback Plox
// @namespace    youtube-playback-plox
// @version      0.0.1
// @description  Guarda y retoma automáticamente el progreso de videos en YouTube sin necesidad de iniciar sesión.
// @author       Alplox
// @match        https://www.youtube.com/*
// @match        https://www.youtu.be/*
// @match        https://www.youtube-nocookie.com/*
// @icon         https://raw.githubusercontent.com/Alplox/StartpagePlox/refs/heads/main/assets/favicon/favicon.ico
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @run-at       document-end
// @license      MIT
// @downloadURL  https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/youtube-playback-plox.user.js
// @updateURL    https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/youtube-playback-plox.meta.js
// ==/UserScript==

(() => {
    'use strict';

    // ────────────────
    // 📦 Config
    // MARK: 📦 Config
    // ────────────────

    const CONFIG = {
        /** Diferencia mínima (en segundos) para considerar un cambio de posición como válido */
        minSeekDiff: 1.5,

        /** Días de expiración para diferentes tipos de videos */
        expireDays: {
            regular: 30,
            short: 1,
            preview: 10 / (24 * 60), // 10 minutos en días
        },

        /** Tiempo desde el final del video (en segundos) para considerarlo como "finalizado" */
        staticFinishSec: 90,

        /** Prefijo para claves en localStorage */
        storagePrefix: 'YT_PLAYBACK_PLOX_',

        /** Clave para guardar configuraciones del usuario en GM_* */
        userSettingsKey: 'YT_PLAYBACK_PLOX_userSettings',

        /** Valores predeterminados para configuraciones del usuario */
        defaultSettings: {
            showNotifications: true,
            minSecondsBetweenSaves: 10,
            showFloatingButtons: false
        },

        /** Clave para guardar filtros del usuario en GM_* */
        userFiltersKey: 'YT_PLAYBACK_PLOX_userFilters',

        /** Valores predeterminados para filtros del usuario */
        defaultFilters: {
            orderBy: "recent",
            filterBy: "all",
            searchQuery: ""
        }
    };

    // ────────────────
    // 🎨 Styles
    // MARK: 🎨 Styles
    // ────────────────

    function injectStyles() {
        if (document.getElementById('youtube-playback-plox-styles')) return; // evitar duplicados

        const style = document.createElement('style');
        style.id = 'youtube-playback-plox-styles';
        style.textContent = `
:root {
  /* Paleta base */
  --color-bg: #fff;
  --color-text: #222;
  --color-muted: #555;
  --color-light: #888;
  --color-link: #065fd4;
  --color-danger: #dc2626;
  --color-success: #16a34a;
  --color-success-dark: #15803d;
  --color-overlay: rgba(0, 0, 0, 0.4);
  --color-toast: #333;
  --color-primary: #2563eb;
  --color-primary-dark: #1e40af;
  --color-border: #ccc;

  /* Tipografía */
  --font-base: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  /* Espaciado */
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;

  /* Sombra */
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.2);
  --shadow-modal: 0 4px 16px rgba(0, 0, 0, 0.25);

  /* Z-index */
  --z-overlay: 9999;
  --z-modal: 10000;
}

/* =========================
   Contenedores y Overlays
========================= */

.ypp-overlay,
.ypp-modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: var(--color-overlay);
  z-index: var(--z-overlay);
}

.ypp-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--color-bg);
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  padding: var(--spacing-lg);
  z-index: var(--z-modal);
  width: 450px;
  max-height: 70vh;
  overflow-y: auto;
  font-family: var(--font-base);
  color: var(--color-text);
}

/* =========================
   Header, Footer, Layout
========================= */

.ypp-header,
.ypp-modalHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.ypp-footer {
  position: sticky;
  bottom: 0;
  background: var(--color-bg);
  padding: var(--spacing-md);
  margin-top: var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  border-top: 2px solid var(--color-border);
  z-index: 10;
}

.ypp-settingsContent {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  max-height: 60vh;
  overflow-y: auto;
}

.ypp-btnGroup {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

/* =========================
   Tipografía
========================= */

.ypp-emptyMsg {
  text-align: center;
  color: #666;
}

.ypp-playlistTitle {
  margin: var(--spacing-md) 0 var(--spacing-sm);
  color: var(--color-muted);
}

.ypp-titleLink {
  font-weight: 600;
  font-size: 1.4rem;
  color: var(--color-link);
  text-decoration: none;
  display: block;
  margin-bottom: 2px;
}

.ypp-titleLink:hover {
  text-decoration: underline;
}

.ypp-author,
.ypp-views {
  font-size: 1.1rem;
  color: var(--color-muted);
}

.ypp-timestamp,
.ypp-progressInfo {
  font-size: 1.3rem;
  margin-top: 4px;
}

.ypp-timestamp {
  color: var(--color-muted);
}

.ypp-progressInfo {
  color: red;
}

/* =========================
   Video List
========================= */

.ypp-videoWrapper {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: var(--spacing-sm);
}

.ypp-thumb {
  width: 90px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: var(--spacing-sm);
  flex-shrink: 0;
}

.ypp-infoDiv {
  flex-grow: 1;
}

/* =========================
   Botones
========================= */

.ypp-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em 1em;
  font-weight: 500;
  color: var(--color-bg);
  background-color: var(--color-muted);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-text);
  }
}

.ypp-btn-outlined {
  background: transparent;
  border: 1px solid currentColor;
  color: var(--color-primary);

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-bg);
  }
}

.ypp-btn-delete {
  background-color: transparent;

  &:hover {
    background-color: var(--color-danger);
    color: var(--color-bg);
  }
}

.ypp-save-button {
  background-color: var(--color-success);

  &:hover {
    background-color: var(--color-success-dark);
  }
}

/* =========================
   Toasts
========================= */

.ypp-toast-container {
  position: fixed;
  top: var(--spacing-md);
  right: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: var(--z-overlay);
}

.ypp-toast {
  background: var(--color-toast);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-size: 14px;
}

.ypp-toast.persistent {
  background: var(--color-muted);
}

/* =========================
   Modal
========================= */

.ypp-modalBox {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: var(--spacing-lg);
  color: var(--color-text);
  max-width: 400px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: var(--shadow-modal);
}

.ypp-modalTitle {
  font-weight: 600;
  color: #111;
}

.ypp-modalBody {
  font-size: 1.4rem;
}

/* =========================
   Inputs y Forms
========================= */

.ypp-label {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
}

.ypp-input {
  width: 100%;
  padding: 6px 8px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  margin-top: 5px;
}

.ypp-input-small {
  width: 60px;
}

/* =========================
   Floating Button
========================= */

.ypp-floatingBtnContainer {
  position: fixed;
  bottom: var(--spacing-md);
  right: var(--spacing-md);
  z-index: var(--z-overlay);
  display: flex;
  gap: 10px;
}
`;
        document.head.appendChild(style);
    }

    // ────────────────
    // 💾 Storage + Settings
    // MARK: 💾 Storage + Settings
    // ────────────────

    const Storage = {
        /**
         * Obtiene un valor del almacenamiento local.
         * @param {string} key - Clave sin prefijo.
         * @returns {any|null} - Valor parseado o null si no existe.
         */
        get(key) {
            try {
                const raw = localStorage.getItem(`${CONFIG.storagePrefix}${key}`);
                return raw ? JSON.parse(raw) : null;
            } catch (error) {
                console.error(`Storage.get: Error al parsear la clave "${key}"`, error);
                return null;
            }
        },

        /**
         * Establece un valor en el almacenamiento local.
         * @param {string} key - Clave sin prefijo.
         * @param {any} value - Valor a almacenar (se serializa).
         */
        set(key, value) {
            try {
                const serialized = JSON.stringify(value);
                localStorage.setItem(`${CONFIG.storagePrefix}${key}`, serialized);
            } catch (error) {
                console.error(`Storage.set: Error al guardar la clave "${key}"`, error);
            }
        },

        /**
         * Elimina una clave del almacenamiento local.
         * @param {string} key - Clave sin prefijo.
         */
        del(key) {
            try {
                localStorage.removeItem(`${CONFIG.storagePrefix}${key}`);
            } catch (error) {
                console.error(`Storage.del: Error al eliminar la clave "${key}"`, error);
            }
        },

        /**
         * Devuelve todas las claves (sin prefijo) almacenadas con el prefijo definido.
         * @returns {string[]} - Lista de claves sin prefijo.
         */
        keys() {
            return Object.keys(localStorage)
                .filter((fullKey) => fullKey.startsWith(CONFIG.storagePrefix))
                .map((fullKey) => fullKey.slice(CONFIG.storagePrefix.length));
        }
    };

    const Settings = {
        /**
         * Obtiene la configuración del usuario desde el almacenamiento.
         * Fusiona con los valores predeterminados.
         * @returns {Promise<Object>} Configuración completa del usuario.
         */
        async get() {
            try {
                const raw = await GM_getValue(CONFIG.userSettingsKey, null);
                const parsed = raw ? JSON.parse(raw) : {};
                return { ...CONFIG.defaultSettings, ...parsed };
            } catch (error) {
                console.error('Error al cargar configuración del usuario:', error);
                return { ...CONFIG.defaultSettings };
            }
        },

        /**
         * Guarda la configuración del usuario en el almacenamiento.
         * @param {Object} settings - Objeto de configuración del usuario.
         * @returns {Promise<void>}
         */
        async set(settings) {
            try {
                const serialized = JSON.stringify(settings);
                await GM_setValue(CONFIG.userSettingsKey, serialized);
            } catch (error) {
                console.error('Error al guardar configuración del usuario:', error);
            }
        }
    };

    // ────────────────
    // 🔧 Utils
    // MARK: 🔧 Utils
    // ────────────────
    /**
     * Formatea un tiempo en segundos a formato "mm:ss" o "hh:mm:ss" si es necesario.
     * @param {number} seconds - Tiempo en segundos.
     * @returns {string} - Tiempo formateado.
     */
    const formatTime = (seconds) => {
        const iso = new Date(seconds * 1000).toISOString();
        const time = iso.slice(11, 19); // hh:mm:ss
        return time.startsWith('00:') ? time.slice(3) : time;
    };

    /**
        * Crea un elemento HTML con clase, texto o HTML interno.
        * 
        * @param {string} tag - Nombre de la etiqueta HTML a crear.
        * @param {Object} options - Opciones para configurar el elemento.
        * @param {string} [options.className] - Clase CSS para el elemento.
        * @param {string} [options.id] - ID a asignar al elemento.
        * @param {string} [options.text] - Texto plano a asignar al elemento.
        * @param {string} [options.html] - HTML crudo a asignar al elemento.
        * @returns {HTMLElement} Elemento creado.
        */
    function createElement(tag, {
        className = '',
        id = '',
        text = '',
        html = '',
        onClickEvent = null,
        atribute = {},
        props = {}
    } = {}) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (id) el.id = id;
        if (text) el.textContent = text;
        if (html) el.innerHTML = html;
        if (onClickEvent && typeof onClickEvent === 'function') el.addEventListener('click', onClickEvent);

        // Atributos HTML (como title, type, etc.)
        if (atribute && typeof atribute === 'object') {
            Object.entries(atribute).forEach(([k, v]) => el.setAttribute(k, v));
        }

        // Propiedades DOM reales (como checked, disabled, value...)
        if (props && typeof props === 'object') {
            Object.entries(props).forEach(([k, v]) => {
                if (k in el) el[k] = v;
            });
        }

        return el;
    }

    // Mapa débil para asociar cada toast con su timeout
    const toastTimeouts = new WeakMap();

    /**
     * Muestra un mensaje tipo "toast" en pantalla.
     * - Si es un toast "persistente" (ej: guardado), se reutiliza siempre el mismo.
     * - Si no, se crean toasts independientes en stack.
     * @param {string} message - Texto a mostrar.
     * @param {number} duration - Tiempo en milisegundos que se muestra el mensaje.
     * @param {object} options - Config extra (ej: { persistent: true })
     */
    const showToast = (message, duration = 2500, options = {}) => {
        let container = document.querySelector('.ypp-toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'ypp-toast-container';
            document.body.appendChild(container);

            const updateVisibility = () => {
                const isFullscreen = !!document.fullscreenElement;
                container.style.display = isFullscreen ? 'none' : 'flex';
            };

            document.addEventListener('fullscreenchange', updateVisibility);
            window.addEventListener('yt-navigate-finish', updateVisibility);

            updateVisibility();
        }

        let toast;

        if (options.persistent) {
            // Buscar si ya existe un toast persistente
            toast = container.querySelector('.ypp-toast.persistent');
            if (!toast) {
                toast = document.createElement('div');
                toast.className = 'ypp-toast persistent';
                container.appendChild(toast);
                requestAnimationFrame(() => (toast.style.opacity = '1'));
            }
            // Actualizar texto sin reiniciar animación
            toast.textContent = message;

            // Reiniciar timeout de ocultado
            const prevTimeout = toastTimeouts.get(toast);
            if (prevTimeout) clearTimeout(prevTimeout);

            const timeoutId = setTimeout(() => {
                toast.style.opacity = '0';
                toast.addEventListener('transitionend', () => toast.remove(), { once: true });
                toastTimeouts.delete(toast);
            }, duration);

            toastTimeouts.set(toast, timeoutId);
        } else {
            // Toast normal (se apila)
            toast = document.createElement('div');
            toast.className = 'ypp-toast';
            toast.textContent = message;
            container.appendChild(toast);

            requestAnimationFrame(() => (toast.style.opacity = '1'));

            const timeoutId = setTimeout(() => {
                toast.style.opacity = '0';
                toast.addEventListener('transitionend', () => toast.remove(), { once: true });
                toastTimeouts.delete(toast);
            }, duration);

            toastTimeouts.set(toast, timeoutId);
        }
    };


    /** 
     * * Crea un modal con título, contenido y funcionalidad de cierre.
     * * @param {string} [title] - Título del modal.
     * * @param {string|HTMLElement} [content] - Contenido HTML o string.
     * * @returns {Object} - Objeto con referencias al host, contenido y función de cierre.
     * */
    function createModal(title = '', content = '') {
        const closeModal = () => {
            overlay.remove();
            document.body.style.overflow = ''; // ♻️ Restaura scroll
        };

        const overlay = createElement('div', {
            className: 'ypp-modalOverlay',
            atribute: { 'aria-modal': 'true', role: 'dialog' },
            onClickEvent: (e) => {
                if (e.target === overlay) closeModal(); // Cerrar al hacer clic fuera del modal
            }
        });
        const modal = createElement('div', { className: 'ypp-modalBox' });
        const header = createElement('div', { className: 'ypp-modalHeader' });
        const titleEl = createElement('h3', { className: 'ypp-modalTitle', text: title });

        const closeBtn = createElement('button', {
            className: 'ypp-btn',
            text: '✖',
            atribute: { 'aria-label': 'Cerrar', title: 'Cerrar', type: 'button'},
            onClickEvent: closeModal
        });

        header.appendChild(titleEl);
        header.appendChild(closeBtn);

        const body = createElement('div', { className: 'ypp-modalBody' });

        typeof content === 'string' ? body.innerHTML = content.replace(/\u200B/g, '') : body.appendChild(content);

        modal.appendChild(header);
        modal.appendChild(body);
        overlay.appendChild(modal);

        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden'; // 🚫 Desactiva scroll del fondo

        return {
            host: overlay,
            content: modal,
            close: closeModal,
        };
    }
    // ────────────────

    // 🔔 Notificaciones
    /* // @grant        GM_notification */
    /* function mostrarNotificacion(titulo, mensaje) {
        GM_notification({
            title: titulo,
            text: mensaje,
            timeout: 5000, // Opcional: tiempo en milisegundos antes de que la notificación desaparezca
            onclick: function () {
                window.focus();  // Al hacer clic, vuelve a poner el foco en la ventana
            }
        });
    }
    mostrarNotificacion("Hola", "Este es un mensaje de prueba."); */

    // Variables para controlar notificaciones de guardado
    let lastNotifyTimestamp = 0;
    let cachedSettings = null;

    async function handleNotification(timestamp) {
        if (!cachedSettings) {
            cachedSettings = await Settings.get();
        }

        if (!cachedSettings.showNotifications) return;

        const now = Date.now();
        if (now - lastNotifyTimestamp < cachedSettings.minSecondsBetweenSaves * 1000) return;

        lastNotifyTimestamp = now;
        showToast(`💾 Progreso guardado: ${formatTime(timestamp)}`, 2500, { persistent: true });
    }

    // ────────────────
    // 🔧 Helpers
    // MARK: 🔧 Helpers
    // ────────────────

    // Extrae información relevante del video actual
    function getVideoInfo(player, vid) {
        const vd = player.getVideoData() || {};
        const title = vd.title || vid;
        const author = vd.author || 'Desconocido';
        const duration = player.getDuration?.() || 0;

        // Thumbnail seguro
        let thumb = `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`;
        if (vd.thumbnail_url && typeof vd.thumbnail_url === 'object' && vd.thumbnail_url.url) {
            thumb = vd.thumbnail_url.url;
        }

        // Views con limpieza simple
        const viewsEl = document.querySelector('.view-count');
        let views = 'N/A';
        if (viewsEl) {
            // Ejemplo: "1,234,567 vistas" o "1.2M views"
            views = viewsEl.textContent.trim();
        }

        const savedAt = Date.now();

        return { title, author, thumb, views, savedAt, duration };
    }

    const updateStatus = (player, videoEl, type, plId) => {
        const vid = player.getVideoData()?.video_id;
        if (!vid) return;

        const currentTime = videoEl.currentTime;
        const duration = videoEl.duration;

        // Validaciones básicas
        if (!duration || isNaN(currentTime) || currentTime < 0.5 || !isFinite(duration)) return;

        const finishThreshold = Math.min(duration * 0.01, CONFIG.staticFinishSec);
        const isFinished = duration - currentTime < finishThreshold;

        const now = Date.now();
        const info = getVideoInfo(player, vid);

        // Helper para guardar o borrar datos de video
        function saveOrDelete(key, data) {
            if (data) Storage.set(key, data);
            else Storage.del(key);
        }

        if (plId) {
            const playlist = Storage.get(plId) || { lastWatchedVideoId: '', videos: {} };

            if (isFinished) {
                delete playlist.videos[vid];
            } else {
                playlist.videos[vid] = { timestamp: currentTime, lastUpdated: now, videoType: 'playlist', ...info };
            }

            playlist.lastWatchedVideoId = vid;

            // Si no hay videos en la playlist, eliminar storage
            saveOrDelete(plId, Object.keys(playlist.videos).length ? playlist : null);
        } else {
            saveOrDelete(vid, isFinished ? null : { timestamp: currentTime, lastUpdated: now, videoType: type, ...info });
        }

        handleNotification(currentTime);
    };

    const resumePlayback = async (player, vid, videoEl, inPlaylist, plId, fromPlId) => {
        // Determinar la clave para obtener datos almacenados (playlist o video individual)
        const key = inPlaylist ? plId : vid;
        const data = Storage.get(key);
        if (!data) return;

        // Obtener el último tiempo guardado del video (según si está en playlist o no)
        let lastTime = inPlaylist ? data.videos?.[vid]?.timestamp : data.timestamp;
        let resumeId = vid;

        // Si está en playlist y hay un video diferente al actual que se debería reanudar
        if (
            inPlaylist &&
            data.lastWatchedVideoId &&
            vid !== data.lastWatchedVideoId &&
            plId !== fromPlId
        ) {
            resumeId = data.lastWatchedVideoId;
            lastTime = data.videos?.[resumeId]?.timestamp;

            // Obtener playlist y reproducir el video correcto si existe
            const playlist = player.getPlaylist?.();
            const idx = playlist?.indexOf(resumeId);
            if (idx !== undefined && idx >= 0) {
                player.playVideoAt(idx);
            }
        } else if (lastTime) {
            // Si no es el caso anterior, aplicar seek para reanudar en el tiempo guardado
            await applySeek(player, videoEl, lastTime);
        }
    };

    // Variables para manejar el listener activo y la última playlist procesada
    let activeCleanup = null;
    let lastPlaylistId = null;

    const processVideo = (container, player, videoEl) => {
        // Limpiar event listener anterior si existe
        if (activeCleanup) activeCleanup();

        // Extraer parámetros relevantes de la URL actual
        const url = new URL(location.href);
        const vid = url.searchParams.get('v') || player.getVideoData()?.video_id;
        const plId = url.searchParams.get('list');
        if (!vid) return;

        // Determinar tipo de video
        const type = url.pathname.startsWith('/shorts/')
            ? 'short'
            : container.id === /* 'inline-player' */ 'video-preview' // ID actualizado para previews
                ? 'preview'
                : 'regular';

        let attempted = false;

        // Manejador para actualizar el estado o reanudar la reproducción
        const handler = () => {
            if (!attempted) {
                attempted = true;
                resumePlayback(player, vid, videoEl, Boolean(plId), plId, lastPlaylistId);
            } else {
                updateStatus(player, videoEl, type, plId);
            }
        };

        videoEl.addEventListener('timeupdate', handler);

        // Guardar función para limpiar el listener en el futuro
        activeCleanup = () => videoEl.removeEventListener('timeupdate', handler);

        // Actualizar última playlist procesada
        lastPlaylistId = plId;
    };

    // ────────────────
    // ⏯ Seek
    // MARK: ⏯ Seek
    // ────────────────

    // Tiempo máximo para esperar al evento 'seeked' (en ms)
    const SEEK_TIMEOUT = 1500; // ms

    // Función para aplicar seek con espera y manejo de errores
    const applySeek = async (player, videoEl, time) => {
        if (!player || !videoEl) return;
        if (typeof time !== 'number' || isNaN(time)) return;

        const current = player.getCurrentTime();
        if (Math.abs(current - time) <= CONFIG.minSeekDiff) return; // no seek necesario

        await new Promise((resolve) => {
            const onSeeked = () => {
                clearTimeout(timeoutId);
                videoEl.removeEventListener('seeked', onSeeked);
                resolve();
            };

            const timeoutId = setTimeout(() => {
                videoEl.removeEventListener('seeked', onSeeked);
                resolve();
            }, SEEK_TIMEOUT);

            videoEl.addEventListener('seeked', onSeeked, { once: true });

            try {
                player.seekTo(time, true);
            } catch (error) {
                clearTimeout(timeoutId);
                videoEl.removeEventListener('seeked', onSeeked);
                resolve();
            }
        });

        showToast(`⏯ Retomado en ${formatTime(time)}`);
    };

    // ────────────────
    // 📂 Video List
    // MARK: 📂 Video List
    // ────────────────

    // Crea selectores de orden
    function createSortSelector(currentValue, onChange) {
        const wrapper = document.createElement('div');

        const label = createElement('label', { className: 'ypp-label', text: 'Ordenar por:', atribute: { for: 'sort-selector' } });

        const select = createElement('select', {
            className: 'ypp-input', id: 'sort-selector', html: `
        <option value="recent" ${currentValue === 'recent' ? 'selected' : ''}>📅 Más recientes</option>
        <option value="oldest" ${currentValue === 'oldest' ? 'selected' : ''}>📆 Más antiguos</option>
        <option value="title" ${currentValue === 'title' ? 'selected' : ''}>🔤 Título (A-Z)</option>`
        });

        select.onchange = () => onChange(select.value);

        label.appendChild(select);
        wrapper.appendChild(label);
        return wrapper;
    }

    function createFilterSelector(currentValue, onChange) {
        const wrapper = document.createElement('div');

        const label = createElement('label', { className: 'ypp-label', text: 'Filtrar por tipo:', atribute: { for: 'filter-selector' } });


        const select = createElement('select', {
            className: 'ypp-input', id: 'filter-selector', html: `
        <option value="all" ${currentValue === 'all' ? 'selected' : ''}>🔎 Todos</option>
        <option value="regular" ${currentValue === 'regular' ? 'selected' : ''}>▶️ Videos</option>
        <option value="short" ${currentValue === 'short' ? 'selected' : ''}>📱 Shorts</option>
        <option value="preview" ${currentValue === 'preview' ? 'selected' : ''}>🔍 Previews</option>
        <option value="playlist" ${currentValue === 'playlist' ? 'selected' : ''}>📁 Playlists</option>`
        });

        select.onchange = () => onChange(select.value);


        label.appendChild(select);
        wrapper.appendChild(label);
        return wrapper;
    }

    function createSearchInput(currentValue, onChange) {
        const wrapper = createElement('div');
        const input = createElement('input', { className: 'ypp-input', id: 'search-input' });
        input.type = 'text';
        input.placeholder = '🔍 Buscar por título o autor...';
        input.value = currentValue;


        input.addEventListener('input', () => {
            onChange(input.value.trim());
        });

        wrapper.appendChild(input);
        return wrapper;
    }

    // Guarda los filtros del usuario en almacenamiento
    async function saveFilters(newValues) {
        const currentRaw = await GM_getValue(CONFIG.userFiltersKey, '{}');
        const current = JSON.parse(currentRaw);
        const updated = { ...current, ...newValues };
        await GM_setValue(CONFIG.userFiltersKey, JSON.stringify(updated));
    }

    async function getSavedFilters() {
        const raw = await GM_getValue(CONFIG.userFiltersKey, '{}');
        try {
            const saved = raw ? JSON.parse(raw) : {};
            const merged = { ...CONFIG.defaultFilters, ...saved };
            return merged;
        } catch (e) {
            console.warn('Error parsing saved filters:', e);
            return { ...CONFIG.defaultFilters };
        }
    }

    // Crear entrada de video en la lista
    let videosOverlay = null;
    let videosContainer = null;
    let listContainer = null;

    let currentOrderBy, currentFilterBy, currentSearchQuery;

    function updateVideoList() {
        const keys = Storage.keys().filter(k =>
            !k.startsWith('userSettings')
        );

        // Limpiar lista vieja
        listContainer.innerHTML = '';

        if (keys.length === 0) {
            const p = createElement('p', { className: 'ypp-emptyMsg', text: 'No hay videos guardados.' });
            listContainer.appendChild(p);
            return;
        }

        // Filtrado, búsqueda y orden según los filtros actuales
        let keyDataPairs = keys
            .map(k => [k, Storage.get(k)])
            .filter(([, d]) => !!d)
            .filter(([, d]) => {
                if (currentFilterBy === 'playlist') return !!d.videos;
                if (currentFilterBy === 'all') return true;
                return d.videoType === currentFilterBy;
            })
            .filter(([, d]) => {
                if (!currentSearchQuery) return true;
                const query = currentSearchQuery.toLowerCase();
                if (d.videos) {
                    return Object.values(d.videos).some(v =>
                        (v.title || '').toLowerCase().includes(query) ||
                        (v.author || '').toLowerCase().includes(query)
                    );
                } else {
                    return (d.title || '').toLowerCase().includes(query) ||
                        (d.author || '').toLowerCase().includes(query);
                }
            });

        const getSortValue = (key, data) => {
            if (currentOrderBy === 'title') return (data.title || key).toLowerCase();
            if (currentOrderBy === 'oldest') return data.savedAt || 0;
            return -(data.savedAt || 0); // recent
        };

        keyDataPairs.sort((a, b) => {
            const valA = getSortValue(a[0], a[1]);
            const valB = getSortValue(b[0], b[1]);
            if (typeof valA === 'string') return valA.localeCompare(valB);
            return valA - valB;
        });

        for (const [key, data] of keyDataPairs) {
            if (data.videos) {
                const h3 = createElement('h3', { className: 'ypp-playlistTitle', text: `📁 Playlist: ${key}` });
                listContainer.appendChild(h3);

                const videosSorted = Object.entries(data.videos)
                    .filter(([, v]) => {
                        if (currentFilterBy !== 'all' && currentFilterBy !== 'playlist' && v.videoType !== currentFilterBy) return false;
                        if (!currentSearchQuery) return true;
                        const q = currentSearchQuery.toLowerCase();
                        return (v.title || '').toLowerCase().includes(q) || (v.author || '').toLowerCase().includes(q);
                    })
                    .sort(([, a], [, b]) => {
                        const valA = getSortValue('', a);
                        const valB = getSortValue('', b);
                        return typeof valA === 'string' ? valA.localeCompare(valB) : valA - valB;
                    });

                for (const [videoId, info] of videosSorted) {
                    listContainer.appendChild(createVideoEntry(videoId, info, key));
                }
            } else {
                listContainer.appendChild(createVideoEntry(key, data, null));
            }
        }
    }

    function closeModalVideos() {
        if (videosOverlay) {
            videosOverlay.remove();
            videosOverlay = null;
            videosContainer.remove();
            videosContainer = null;
            listContainer.remove();
            listContainer = null;
            document.body.style.overflow = ''; // ♻️ Restaura scroll
        }
    }

    const createFloatingButtons = async () => {
        const settings = await Settings.get();
        if (!settings.showFloatingButtons) return;

        const wrapper = createElement('div', { className: 'ypp-floatingBtnContainer' });
        const btnConfig = createElement('div', { className: 'ypp-btn', text: '⚙️ YT Playback Plox', onClickEvent: showSettingsUI });

        wrapper.appendChild(btnConfig);
        document.body.appendChild(wrapper);

        // Ocultar en modo teatro o fullscreen
        const updateVisibility = () => {
            const isFullscreen = !!document.fullscreenElement;
            wrapper.style.display = isFullscreen ? 'none' : 'flex';
        };

        document.addEventListener('fullscreenchange', updateVisibility);
        window.addEventListener('yt-navigate-finish', updateVisibility);

        updateVisibility();
    };

    function syncUIWithCurrentFilters() {
        // Actualizar los selectores e input en el modal si existen
        const sortSelect = document.getElementById('sort-selector');
        const filterSelect = document.getElementById('filter-selector');
        const searchInput = document.getElementById('search-input');

        if (sortSelect) sortSelect.value = currentOrderBy;
        if (filterSelect) filterSelect.value = currentFilterBy;
        if (searchInput) searchInput.value = currentSearchQuery;
    }


    // ────────────────
    // 👀 Show saved videos
    // MARK: 👀 Show saved
    // ────────────────

    async function showSavedVideosList() {
        if (!videosOverlay) {
            const saved = await getSavedFilters();

            currentOrderBy = saved.orderBy ?? CONFIG.defaultFilters.orderBy;
            currentFilterBy = saved.filterBy ?? CONFIG.defaultFilters.filterBy;
            currentSearchQuery = saved.searchQuery ?? CONFIG.defaultFilters.searchQuery;

            videosOverlay = createElement('div', { className: 'ypp-overlay' });

            videosContainer = createElement('div', { className: 'ypp-container' });
            if (!videosContainer) {
                console.error("Failed to create videosContainer");
                return;
            }

            listContainer = createElement('div', { id: 'video-list-container' });

            const header = createElement('div', { className: 'ypp-header' });
            const title = createElement('h2', { text: 'YouTube Playback Plox' });

            const closeBtn = createElement('button', {
                className: 'ypp-btn',
                text: '✖',
                atribute: { 'aria-label': 'Cerrar' },
                onClickEvent: closeModalVideos
            });

            header.appendChild(title);
            header.appendChild(closeBtn);

            videosContainer.appendChild(header);

            // Añadir selectores e input con manejadores para actualizar filtros y lista
            videosContainer.appendChild(createSortSelector(currentOrderBy, async (selected) => {
                currentOrderBy = selected;
                await saveFilters({ orderBy: selected });
                updateVideoList();
            }));

            videosContainer.appendChild(createFilterSelector(currentFilterBy, async (selected) => {
                currentFilterBy = selected;
                await saveFilters({ filterBy: selected });
                updateVideoList();
            }));

            videosContainer.appendChild(createSearchInput(currentSearchQuery, async (query) => {
                currentSearchQuery = query;
                await saveFilters({ searchQuery: query });
                updateVideoList();
            }));


            // Footer
            const footer = createElement('div', { className: 'ypp-footer' });

            const exportDataToFile = () => {
                const exportData = {};

                const keys = Storage.keys().filter(k =>
                    !k.startsWith('userSettings')
                );

                keys.forEach(k => {
                    const data = Storage.get(k);
                    if (data) exportData[k] = data;
                });

                const blob = new Blob(
                    [JSON.stringify(exportData, null, 2)],
                    { type: 'application/json' }
                );

                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'youtube-playback-plox-backup.json';
                document.body.appendChild(a);
                a.click();
                a.remove();
                URL.revokeObjectURL(url);

                showToast('📤 Datos exportados');
            };

            const importDataFromFile = () => {
                // Reutilizar el input si ya existe
                let inputFile = document.getElementById('ypp-import-file');
                if (!inputFile) {
                    inputFile = createElement('input', {
                        id: 'ypp-import-file',
                        atribute: {
                            type: 'file'
                        },
                        props: {
                            accept: 'application/json'
                        }
                    });

                    inputFile.addEventListener('change', async (e) => {
                        const file = e.target.files[0];
                        if (!file) return;

                        try {
                            const text = await file.text();
                            const importedData = JSON.parse(text);

                            if (typeof importedData !== 'object' || importedData === null) {
                                throw new Error('Formato no válido');
                            }

                            let count = 0;
                            for (const [key, value] of Object.entries(importedData)) {
                                Storage.set(key, value);
                                count++;
                            }

                            showToast(`📥 Importados ${count} elementos`);
                            closeModalVideos();
                            showSavedVideosList();
                        } catch (err) {
                            console.error('Error al importar datos:', err);
                            showToast('⚠️ Error al importar. Asegúrate de que el archivo sea válido.');
                        } finally {
                            inputFile.value = ''; // Permitir seleccionar el mismo archivo de nuevo
                        }
                    });
                    document.body.appendChild(inputFile);
                }
                inputFile.click();
            };

            const btnExport = createElement('button', { className: 'ypp-btn', text: '📤 Exportar', onClickEvent: exportDataToFile });
            const btnImport = createElement('button', { className: 'ypp-btn', text: '📥 Importar', onClickEvent: importDataFromFile });

            footer.appendChild(btnExport);
            footer.appendChild(btnImport);

            videosContainer.appendChild(listContainer);
            videosContainer.appendChild(footer);

            videosOverlay.addEventListener('click', closeModalVideos);

            document.body.appendChild(videosOverlay);
            document.body.appendChild(videosContainer);
        } else {
            syncUIWithCurrentFilters();
        }
        updateVideoList();
    }

    // ────────────────
    // 🔏 Create video entry
    // MARK: 🔏 Create entry
    // ────────────────

    function createVideoEntry(videoId, info, playlistKey = null) {
        const videoTime = formatTime(info.timestamp || 0);
        const duration = info.duration || 0;
        const watched = info.timestamp || 0;
        const remaining = Math.max(duration - watched, 0);
        const percent = duration ? Math.min(100, Math.round((watched / duration) * 100)) : null;
        const wrapper = createElement('div', { className: 'ypp-videoWrapper' });

        // Miniatura
        const thumb = createElement('img', {
            className: 'ypp-thumb',
            atribute: {
                title: info.title || videoId,
                loading: 'lazy',
                alt: info.title || 'Miniatura',
                src: info.thumb || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
            },
            props: { draggable: false }
        });

        wrapper.appendChild(thumb);

        // Info
        const infoDiv = createElement('div', { className: 'ypp-infoDiv' });

        const titleLink = createElement('a', {
            className: 'ypp-titleLink', text: info.title || videoId,
            atribute: {
                title: info.title || videoId,
                href: `https://www.youtube.com/watch?v=${videoId}${playlistKey ? '&list=' + playlistKey : ''}`
            },
            props: { target: '_blank', rel: 'noopener noreferrer' }
        });


        const author = createElement('div', { className: 'ypp-author', text: info.author || 'Desconocido' });
        const views = createElement('div', { className: 'ypp-views', text: info.views || 'N/A' });
        const timestamp = createElement('div', { className: 'ypp-timestamp', text: `Progreso: ${videoTime}` });

        infoDiv.appendChild(titleLink);
        infoDiv.appendChild(author);
        infoDiv.appendChild(views);
        infoDiv.appendChild(timestamp);

        if (percent !== null) {
            const progressInfo = createElement('div', { className: 'ypp-progressInfo', text: `📊 ${percent}% visto (${formatTime(remaining)} restantes)` });
            infoDiv.appendChild(progressInfo);
        }

        wrapper.appendChild(infoDiv);

        // Botón de borrar
        const btnDelete = createElement('button', {
            className: 'ypp-btn ypp-btn-delete',
            atribute: { title: 'Eliminar entrada' },
            text: '🗑️',
            onClickEvent: () => {
                if (playlistKey) {
                    const playlist = Storage.get(playlistKey);
                    if (playlist?.videos?.[videoId]) {
                        delete playlist.videos[videoId];
                        Object.keys(playlist.videos).length
                            ? Storage.set(playlistKey, playlist)
                            : Storage.del(playlistKey);
                    }
                } else {
                    Storage.del(videoId);
                }

                showToast('🗑️ Entrada eliminada');
                showSavedVideosList(); // recarga
            }
        });

        wrapper.appendChild(btnDelete);
        return wrapper;
    }

    // ────────────────
    // showSettingsUI
    //  MARK: showSettingsUI
    // ────────────────

    async function showSettingsUI() {
        // Prevenir múltiples instancias del modal
        if (document.querySelector('.settings-modal')) {
            return;
        }

        closeModalVideos(); // Cerrar lista de videos si está abierta

        const settings = await Settings.get();
        const content = createElement('div', { className: 'ypp-settingsContent' });

        // Grupo: Mostrar notificaciones de guardado
        const notifGroup = createElement('div');
        const notifLabel = createElement('label', {
            className: 'ypp-label', text: 'Mostrar notificaciones de guardado', atribute: { for: 'toggleNotif', },
        });

        const toggleNotif = createElement('input', {
            id: 'toggleNotif',
            atribute: { title: 'Mostrar notificaciones de guardado', for: 'toggleNotif', type: 'checkbox' },
            props: { checked: settings.showNotifications }
        });

        notifLabel.appendChild(toggleNotif);
        notifGroup.appendChild(notifLabel);
        content.appendChild(notifGroup);

        // Grupo: Intervalo entre guardados
        const intervalGroup = document.createElement('div');

        const intervalLabel = createElement('label', {
            className: 'ypp-label',
            text: 'Intervalo segundos mínimos entre guardados: ',
            atribute: { for: 'interval' }
        });

        const intervalInput = createElement('input', {
            className: 'ypp-input ypp-input-small',
            id: 'interval',
            atribute: { title: 'Segundos', min: '1', type: 'number' },
            props: { value: settings.minSecondsBetweenSaves }
        });

        intervalLabel.appendChild(intervalInput);
        intervalGroup.appendChild(intervalLabel);
        content.appendChild(intervalGroup);

        // Grupo: Mostrar boton flotante
        const buttonsGroup = document.createElement('div');

        const buttonsLabel = createElement('label', {
            className: 'ypp-label',
            atribute: {
                title: 'Mostrar boton flotante', for: 'toggleButtons'
            },
            text: ' Mostrar boton flotante'
        });

        const toggleButtons = createElement('input', {
            id: 'toggleButtons',
            atribute: {
                title: 'Mostrar boton flotante',
                type: 'checkbox'
            },
            props: {
                checked: settings.showFloatingButtons
            }
        });

        buttonsLabel.appendChild(toggleButtons);
        buttonsGroup.appendChild(buttonsLabel);
        content.appendChild(buttonsGroup);


        const buttonGroup = createElement('div', { className: 'ypp-btnGroup' });

        const saveBtn = createElement('button', {
            className: 'ypp-btn ypp-save-button',
            id: 'saveBtn',
            text: 'Guardar',
            onClickEvent: async () => {
                const newSettings = {
                    showNotifications: toggleNotif.checked,
                    minSecondsBetweenSaves: Math.max(1, parseInt(intervalInput.value, 10)),
                    showFloatingButtons: toggleButtons.checked,
                };
                await Settings.set(newSettings);
                showToast('✅ Configuración guardada');
                location.reload();
            }
        });

        // Botón Ver videos guardados
        const viewBtn = createElement('button', {
            className: 'ypp-btn ypp-btn-outlined',
            id: 'viewSavedBtn',
            text: '📼 Ver videos guardados',
            onClickEvent: () => {
                host.remove();
                showSavedVideosList();
            }
        });

        buttonGroup.appendChild(viewBtn);
        buttonGroup.appendChild(saveBtn);
        content.appendChild(buttonGroup);

        const { host } = createModal('⚙️ Configuración', content);
        host.classList.add('settings-modal');
    }

    // ────────────────
    // GM_registerMenuCommand
    //  MARK: GM_registerMenuCommand
    // ────────────────

    GM_registerMenuCommand('⚙️ Configuración', showSettingsUI);
    GM_registerMenuCommand('📋 Ver videos guardados', showSavedVideosList);

    // ────────────────
    // Init
    //  MARK: Init
    // ────────────────

    const init = () => {
        injectStyles();
        const observePlayer = () => {
            const selectors = ['#movie_player', '#shorts-player'];

            const containers = selectors
                .map(selector => document.querySelector(selector))
                .filter(Boolean);

            for (const container of containers) {
                const videoEl = container.querySelector('video');
                // En algunos casos, player puede estar en container.player_ o ser el container mismo
                const player = container.player_ || container;
                if (player && videoEl) {
                    processVideo(container, player, videoEl);
                }
            }
        };

        observePlayer();
        createFloatingButtons();
        // Escuchar evento personalizado que YouTube dispara al navegar internamente
        window.addEventListener('yt-navigate-finish', observePlayer);
    };

    init();

    // ────────────────
    // Código experimental para guardar avances desde previews de miniaturas homepage
    //  MARK: Código experimental
    // ────────────────

    /* const init = () => {
      injectStyles();
    
      // Detecta players principales
      const observePlayer = () => {
        const selectors = ['#movie_player', '#shorts-player', '#inline-player'];
        selectors.forEach(sel => {
          const container = document.querySelector(sel);
          if (!container) return;
          const videoEl = container.querySelector('video');
          const player = container.player_ || container;
          if (player && videoEl) {
            processVideo(container, player, videoEl);
          }
        });
      };
    
      // Detecta previews en miniaturas
      const hookThumbnails = () => {
        document.querySelectorAll('ytd-thumbnail').forEach(thumbnail => {
          if (thumbnail.dataset.hooked) return;
          thumbnail.dataset.hooked = 'true';
    
          thumbnail.addEventListener('mouseenter', () => {
            // Buscar video en DOM normal
            let videoEl = thumbnail.querySelector('video');
            // Buscar en shadowRoot si existe
            if (!videoEl && thumbnail.shadowRoot) {
              videoEl = thumbnail.shadowRoot.querySelector('video');
            }
            if (videoEl) {
              console.log('Preview detectada:', videoEl);
              processVideo(thumbnail, thumbnail, videoEl);
            }
          });
        });
      };
    
      // Observer global para detectar nuevos thumbnails o videos
      const observer = new MutationObserver(() => {
        hookThumbnails();
        document.querySelectorAll('ytd-thumbnail video').forEach(videoEl => {
          if (!videoEl.dataset.processed) {
            videoEl.dataset.processed = 'true';
            console.log('Preview detectada (observer):', videoEl);
            processVideo(videoEl.closest('ytd-thumbnail') || document.body, videoEl, videoEl);
          }
        });
      });
      observer.observe(document.body, { childList: true, subtree: true });
    
      observePlayer();
      hookThumbnails();
      createFloatingButtons();
    
      window.addEventListener('yt-navigate-finish', () => {
        observePlayer();
        hookThumbnails();
      });
    };
    
    init(); */
})();