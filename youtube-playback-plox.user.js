// ==UserScript==
// @namespace    youtube-playback-plox
// @homepage     https://github.com/Alplox/Youtube-Playback-Plox
// @version      0.0.2
// @author       Alplox
// @match        https://www.youtube.com/*
// @name         YouTube Playback Plox
// @description  Guarda y retoma automáticamente el progreso de videos en YouTube sin necesidad de iniciar sesión.

// @name:en      YouTube Playback Plox
// @description:en  Automatically saves and resumes video playback progress on YouTube without needing to log in.

// @name:es      YouTube Reproducción Plox
// @description:es  Guarda y retoma automáticamente el progreso de videos en YouTube sin necesidad de iniciar sesión.

// @name:fr      YouTube Lecture Plox
// @description:fr  Enregistre et reprend automatiquement la progression de la lecture des vidéos sur YouTube sans avoir besoin de se connecter.

// @name:de      YouTube Wiedergabe Plox
// @description:de  Speichert und setzt den Wiedergabefortschritt von Videos auf YouTube automatisch fort, ohne dass eine Anmeldung erforderlich ist.

// @name:it      YouTube Riproduzione Plox
// @description:it  Salva e riprende automaticamente il progresso di riproduzione dei video su YouTube senza bisogno di effettuare l'accesso.

// @name:pt      YouTube Reprodução Plox
// @description:pt  Salva e retoma automaticamente o progresso de reprodução de vídeos no YouTube sem necessidade de login.

// @name:ru      YouTube Воспроизведение Plox
// @description:ru  Автоматически сохраняет и возобновляет прогресс воспроизведения видео на YouTube без необходимости входа в систему.

// @name:zh      YouTube 播放进度 Plox
// @description:zh  自动保存并恢复YouTube视频的播放进度，无需登录。

// @name:ja      YouTube 再生進捗 Plox
// @description:ja  YouTubeでの動画再生の進行状況を自動的に保存および再開し、ログインの必要はありません。

// @name:ko      YouTube 재생 진행 Plox
// @description:ko  YouTube에서 동영상 재생 진행 상황을 자동으로 저장하고 로그인 없이 재개합니다。

// @name:ar      YouTube تقدم التشغيل Plox
// @description:ar  يحفظ ويستأنف تلقائيًا تقدم تشغيل الفيديو على YouTube دون الحاجة إلى تسجيل الدخول.

// @name:hi      YouTube प्लेबैक Plox
// @description:hi  YouTube पर वीडियो प्लेबैक प्रगति को स्वचालित रूप से सहेजता है और पुनः आरंभ करता है बिना लॉग इन किए।

// @name:bn      YouTube প্লেব্যাক Plox
// @description:bn  YouTube-এ ভিডিও প্লেব্যাক অগ্রগতি স্বয়ংক্রিয়ভাবে সংরক্ষণ এবং পুনরায় শুরু করে লগইন ছাড়াই।

// @name:vi      YouTube Phát lại Plox
// @description:vi  Tự động lưu và tiếp tục tiến trình phát video trên YouTube mà không cần đăng nhập.

// @name:id      YouTube Pemutaran Plox
// @description:id  Secara otomatis menyimpan dan melanjutkan kemajuan pemutaran video di YouTube tanpa perlu masuk.

// @name:tr      YouTube Oynatma Plox
// @description:tr  YouTube'da video oynatma ilerlemesini otomatik olarak kaydeder ve oturum açmadan devam ettirir.

// @name:pl      YouTube Odtwarzanie Plox
// @description:pl  Automatycznie zapisuje i wznawia postęp odtwarzania wideo na YouTube bez konieczności logowania.

// @name:nl      YouTube Afspelen Plox
// @description:nl  Slaat automatisch de voortgang van videoweergave op YouTube op en hervat deze zonder in te loggen.

// @name:sv      YouTube Uppspelning Plox
// @description:sv  Sparar och återupptar automatiskt videouppspelningsframsteg på YouTube utan att behöva logga in.

// @name:da      YouTube Afspilning Plox
// @description:da  Gemmer og genoptager automatisk videofremskridt på YouTube uden at skulle logge ind.

// @name:no      YouTube Avspilling Plox
// @description:no  Lagrer og gjenopptar automatisk videofremdrift på YouTube uten å måtte logge inn.

// @name:fi      YouTube Toisto Plox
// @description:fi  Tallentaa ja jatkaa automaattisesti videon toiston etenemistä YouTubessa ilman kirjautumista.

// @name:hu      YouTube Lejátszás Plox
// @description:hu  Automatikusan menti és folytatja a videólejátszás előrehaladását a YouTube-on bejelentkezés nélkül.

// @name:cs      YouTube Přehrávání Plox
// @description:cs  Automaticky ukládá a obnovuje průběh přehrávání videí na YouTube bez nutnosti přihlášení.

// @name:sk      YouTube Prehrávanie Plox
// @description:sk  Automaticky ukladá a obnovuje priebeh prehrávania videí na YouTube bez nutnosti prihlásenia.

// @name:ro      YouTube Redare Plox
// @description:ro  Salvează și reia automat progresul redării videoclipurilor pe YouTube fără a fi nevoie să te conectezi.

// @name:bg      YouTube Възпроизвеждане Plox
// @description:bg  Автоматично запазва и възобновява напредъка на възпроизвеждането на видеоклипове в YouTube без нужда от вход.

// @name:hr      YouTube Reprodukcija Plox
// @description:hr  Automatski sprema i nastavlja napredak reprodukcije videozapisa na YouTubeu bez potrebe za prijavom.

// @name:sl      YouTube Predvajanje Plox
// @description:sl  Samodejno shrani in nadaljuje napredek predvajanja videoposnetkov na YouTubu brez prijave.

// @name:sr      YouTube Репродукција Plox
// @description:sr  Аутоматски чува и наставља напредак репродукције видео записа на YouTube-у без пријављивања.

// @name:lt      YouTube Atkūrimas Plox
// @description:lt  Automatiškai išsaugo ir tęsia „YouTube“ vaizdo įrašų atkūrimo eigą be prisijungimo.

// @name:lv      YouTube Atskaņošana Plox
// @description:lv  Automātiski saglabā un turpina YouTube videoklipu atskaņošanas progresu bez pierakstīšanās.

// @name:uk      YouTube Відтворення Plox
// @description:uk  Автоматично зберігає та відновлює прогрес відтворення відео на YouTube без необхідності входу в систему.

// @name:el      YouTube Αναπαραγωγή Plox
// @description:el  Αποθηκεύει και συνεχίζει αυτόματα την πρόοδο αναπαραγωγής βίντεο στο YouTube χωρίς να απαιτείται σύνδεση.

// @name:th      YouTube เล่นซ้ำ Plox
// @description:th  บันทึกและดำเนินการต่อความคืบหน้าในการเล่นวิดีโอบน YouTube โดยอัตโนมัติ โดยไม่ต้องเข้าสู่ระบบ.

// @name:ms      YouTube Pemutaran Plox
// @description:ms  Menyimpan dan meneruskan secara automatik kemajuan main balik video di YouTube tanpa perlu log masuk.

// @name:sw      YouTube Uchezaji Plox
// @description:sw  Huhifadhi na kuendelea kiotomatiki maendeleo ya uchezaji wa video kwenye YouTube bila kuhitaji kuingia akaunti.

// @name:fa      YouTube پخش Plox
// @description:fa  به‌ طور خودکار پیشرفت پخش ویدیوها در YouTube را ذخیره و ادامه می‌دهد، بدون نیاز به ورود به حساب کاربری.

// @name:he      YouTube הפעלה Plox
// @description:he  שומר ומחדש אוטומטית את התקדמות ההפעלה של סרטונים ב-YouTube ללא צורך בהתחברות.

// @name:ta      YouTube பிளேபேக் Plox
// @description:ta  YouTube-இல் வீடியோக்களின் பிளேபேக் முன்னேற்றத்தை தானாக சேமித்து, உள்நுழையாமல் தொடர்கிறது.

// @icon         https://raw.githubusercontent.com/Alplox/StartpagePlox/refs/heads/main/assets/favicon/favicon.ico
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
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
            live: 0.1, // Los directos no se guardan mucho tiempo
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
            showFloatingButtons: false,
            saveRegularVideos: true, // Por defecto, guardar videos regulares
            saveShorts: false, // Por defecto, no guardar Shorts
            saveLiveStreams: false, // Por defecto, no guardar directos
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
  --color-playlist-bg: #f0f8ff; /* Fondo sutil para items de playlist */

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
  padding: 0; /* Padding manejado por hijos */
  z-index: var(--z-modal);
  width: 550px; /* Un poco más ancho para los nuevos botones */
  max-height: 80vh;
  display: flex;
  flex-direction: column;
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
  padding: var(--spacing-sm);
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0; /* No encoger */
}

.ypp-filters {
  padding: var(--spacing-md) var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  flex-shrink: 0; /* No encoger */
}

.ypp-footer {
  padding: var(--spacing-md) var(--spacing-lg);
  border-top: 2px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  z-index: 10;
  flex-shrink: 0; /* No encoger */
}

#video-list-container {
  flex-grow: 1; /* Ocupar el espacio restante */
  overflow-y: auto; /* Hacer scrollable solo esta parte */
  padding: var(--spacing-md) var(--spacing-lg);
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
  cursor: pointer;
  text-decoration: none;
  display: block;
}

.ypp-playlistTitle:hover {
  text-decoration: underline;
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

.ypp-timestamp.forced {
    color: var(--color-primary-dark);
    font-weight: bold;
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

.ypp-videoWrapper.playlist-item {
  background-color: var(--color-playlist-bg);
  border-radius: 4px;
  padding: var(--spacing-sm);
  border: 1px solid #ddeeff;
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
  min-width: 0; /* Permite que el contenedor se encoja correctamente */
}

.ypp-containerButtonsTime {
    display: flex;
    gap: 5px;
    flex-shrink: 0;
    align-items: center;
    min-width: max-content;
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
  font-size: 1.2em;

  &:hover {
    background-color: var(--color-text);
  }
}

.ypp-btn-small {
    padding: 0.3em 0.6em;
    width: 32px; /* Tamaño fijo */
    height: 32px; /* Tamaño fijo */
    flex-shrink: 0; /* No encoger */
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
  color: var(--color-danger);

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
  display: flex;
  align-items: center;
  gap: 10px;
}

.ypp-toast.persistent {
  background: var(--color-muted);
}

.ypp-toast-action {
    background: var(--color-primary);
    border: none;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    margin-left: auto;
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
  font-size: large;
}

.ypp-modalBody {
  font-size: 1.4rem;
  padding: var(--spacing-sm) var(--spacing-md);
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
  padding: 6px 2px;
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
        get(key) {
            try {
                const raw = localStorage.getItem(`${CONFIG.storagePrefix}${key}`);
                return raw ? JSON.parse(raw) : null;
            } catch (error) {
                console.error(`Storage.get: Error al parsear la clave "${key}"`, error);
                return null;
            }
        },
        set(key, value) {
            try {
                const serialized = JSON.stringify(value);
                localStorage.setItem(`${CONFIG.storagePrefix}${key}`, serialized);
            } catch (error) {
                console.error(`Storage.set: Error al guardar la clave "${key}"`, error);
            }
        },
        del(key) {
            try {
                localStorage.removeItem(`${CONFIG.storagePrefix}${key}`);
            } catch (error) {
                console.error(`Storage.del: Error al eliminar la clave "${key}"`, error);
            }
        },
        keys() {
            return Object.keys(localStorage)
                .filter((fullKey) => fullKey.startsWith(CONFIG.storagePrefix))
                .map((fullKey) => fullKey.slice(CONFIG.storagePrefix.length));
        }
    };

    const Settings = {
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
    const formatTime = (seconds) => {
        const iso = new Date(seconds * 1000).toISOString();
        const time = iso.slice(11, 19);
        return time.startsWith('00:') ? time.slice(3) : time;
    };

    const parseTimeToSeconds = (timeStr) => {
        const parts = timeStr.split(':').map(Number);
        if (parts.length === 2) return parts[0] * 60 + parts[1];
        if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
        return 0;
    };

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
        if (atribute && typeof atribute === 'object') {
            Object.entries(atribute).forEach(([k, v]) => el.setAttribute(k, v));
        }
        if (props && typeof props === 'object') {
            Object.entries(props).forEach(([k, v]) => {
                if (k in el) el[k] = v;
            });
        }
        return el;
    }

    // ───────────────
    // 📢 Time Display (Player Bar)
    // MARK: 📢 Time Display
    // ────────────────
    let timeDisplay;
    let lastRenderedText = '';
    let isPlayerSeeking = false; // Flag para mensaje persistente

    function initTimeDisplay() {
        const timeContainer = document.querySelector('.ytp-time-contents');
        if (!timeContainer || timeContainer.contains(timeDisplay)) return;

        timeDisplay = document.createElement('span');
        timeDisplay.style.display = 'inline-block';
        timeDisplay.style.marginLeft = '10px';
        timeDisplay.style.color = '#0f9d58'; // Verde de YouTube
        timeDisplay.style.fontWeight = 'bold';
        timeContainer.appendChild(timeDisplay);
    }

    function checkAndRestoreTimeDisplay() {
        const timeContainer = document.querySelector('.ytp-time-contents');
        if (timeContainer && !timeContainer.contains(timeDisplay)) {
            initTimeDisplay();
        }
    }

    const toastTimeouts = new WeakMap();
    const showToast = (message, duration = 2500, options = {}) => {
        // Si el mensaje es persistente o tiene una acción, usar el sistema de toasts flotantes
        if (options.persistent || options.action) {
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
                toast = container.querySelector('.ypp-toast.persistent');
                if (!toast) {
                    toast = document.createElement('div');
                    toast.className = 'ypp-toast persistent';
                    container.appendChild(toast);
                    requestAnimationFrame(() => (toast.style.opacity = '1'));
                }
                toast.innerHTML = '';
                const messageSpan = document.createElement('span');
                messageSpan.textContent = message;
                toast.appendChild(messageSpan);

                if (options.action) {
                    const actionBtn = createElement('button', {
                        className: 'ypp-toast-action',
                        text: options.action.label,
                        onClickEvent: options.action.callback
                    });
                    toast.appendChild(actionBtn);
                }

                const prevTimeout = toastTimeouts.get(toast);
                if (prevTimeout) clearTimeout(prevTimeout);
                const timeoutId = setTimeout(() => {
                    toast.style.opacity = '0';
                    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
                    toastTimeouts.delete(toast);
                }, duration);
                toastTimeouts.set(toast, timeoutId);
            } else {
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
        } else {
            // Para mensajes no persistentes, mostrar en la barra de tiempo
            if (timeDisplay) {
                timeDisplay.textContent = message;
                lastRenderedText = message;

                setTimeout(() => {
                    if (timeDisplay && timeDisplay.textContent === message) {
                        timeDisplay.textContent = '';
                        lastRenderedText = '';
                    }
                }, duration);
            }
        }
    };

    function createModal(title = '', content = '') {
        const closeModal = () => {
            overlay.remove();
            document.body.style.overflow = '';
        };
        const overlay = createElement('div', {
            className: 'ypp-modalOverlay',
            atribute: { 'aria-modal': 'true', role: 'dialog' },
            onClickEvent: (e) => {
                if (e.target === overlay) closeModal();
            }
        });
        const modal = createElement('div', { className: 'ypp-modalBox' });
        const header = createElement('div', { className: 'ypp-modalHeader' });
        const titleEl = createElement('h3', { className: 'ypp-modalTitle', text: title });
        const closeBtn = createElement('button', {
            className: 'ypp-btn',
            text: '✖',
            atribute: { 'aria-label': 'Cerrar', title: 'Cerrar', type: 'button' },
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
        document.body.style.overflow = 'hidden';
        return { host: overlay, content: modal, close: closeModal };
    }

    let lastNotifyTimestamp = 0;
    let cachedSettings = null;
    async function handleNotification(timestamp) {
        if (!cachedSettings) cachedSettings = await Settings.get();
        if (!cachedSettings.showNotifications) return;
        const now = Date.now();
        if (now - lastNotifyTimestamp < cachedSettings.minSecondsBetweenSaves * 1000) return;
        lastNotifyTimestamp = now;
        showToast(`💾 Progreso guardado: ${formatTime(timestamp)}`, 2500);
    }

    // ────────────────
    // 🔧 Playlist Name Cache
    // MARK: 🔧 Playlist Name Cache
    // ────────────────
    const playlistNameCache = new Map();
    async function getPlaylistName(playlistId) {
        if (playlistNameCache.has(playlistId)) {
            return playlistNameCache.get(playlistId);
        }
        const url = new URL(location.href);
        const currentPlaylistId = url.searchParams.get('list');
        if (currentPlaylistId === playlistId) {
            const playlistTitleElement = document.querySelector(
                'ytd-playlist-panel-renderer #title span#text, ' +
                '#header .ytd-playlist-header-renderer h1 yt-formatted-string, ' +
                'ytd-browse[page-subtype="playlist"] ytd-playlist-header-renderer #title'
            );
            if (playlistTitleElement && playlistTitleElement.textContent) {
                const name = playlistTitleElement.textContent.trim();
                if (name) {
                    playlistNameCache.set(playlistId, name);
                    return name;
                }
            }
        }
        return new Promise((resolve) => {
            GM_xmlhttpRequest({
                method: 'GET',
                url: `https://www.youtube.com/oembed?url=https://www.youtube.com/playlist?list=${playlistId}&format=json`,
                onload: function (response) {
                    try {
                        const data = JSON.parse(response.responseText);
                        const name = data.title || playlistId;
                        playlistNameCache.set(playlistId, name);
                        resolve(name);
                    } catch (e) {
                        console.error('Error parsing playlist info:', e);
                        playlistNameCache.set(playlistId, playlistId);
                        resolve(playlistId);
                    }
                },
                onerror: function () {
                    console.error('Error fetching playlist info');
                    playlistNameCache.set(playlistId, playlistId);
                    resolve(playlistId);
                }
            });
        });
    }
    function getCurrentPlaylistName() {
        const url = new URL(location.href);
        const playlistId = url.searchParams.get('list');
        if (playlistId && !playlistNameCache.has(playlistId)) {
            getPlaylistName(playlistId);
        }
    }

    // ───────────────
    // 🔧 Helpers
    // MARK: 🔧 Helpers
    // ────────────────
    function getVideoInfo(player, vid) {
        const vd = player.getVideoData() || {};
        const title = vd.title || vid;
        const author = vd.author || 'Desconocido';
        const duration = player.getDuration?.() || 0;
        let thumb = `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`;
        if (vd.thumbnail_url && typeof vd.thumbnail_url === 'object' && vd.thumbnail_url.url) {
            thumb = vd.thumbnail_url.url;
        }
        const viewsEl = document.querySelector('.view-count');
        let views = 'N/A';
        if (viewsEl) {
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
        if (!duration || isNaN(currentTime) || currentTime < 1 || !isFinite(duration)) return;

        const key = plId || vid;
        const data = Storage.get(key);
        const hasFixedTime = (plId ? data?.videos?.[vid]?.forceResumeTime : data?.forceResumeTime) > 0;
        if (hasFixedTime) {
            return; // No guardar progreso ni notificar
        }



        const finishThreshold = Math.min(duration * 0.01, CONFIG.staticFinishSec);
        const isFinished = duration - currentTime < finishThreshold;
        const now = Date.now();
        const info = getVideoInfo(player, vid);
        function saveOrDelete(key, data) {
            if (data) Storage.set(key, data);
            else Storage.del(key);
        }
        if (plId) {
            const playlist = Storage.get(plId) || { lastWatchedVideoId: '', videos: {}, title: '' };
            if (isFinished) {
                delete playlist.videos[vid];
            } else {
                playlist.videos[vid] = { timestamp: currentTime, lastUpdated: now, videoType: 'playlist', ...info };
            }
            playlist.lastWatchedVideoId = vid;
            saveOrDelete(plId, Object.keys(playlist.videos).length ? playlist : null);

            if (!playlist.title) {
                getPlaylistName(plId).then(name => {
                    const updatedPlaylist = Storage.get(plId);
                    if (updatedPlaylist && !updatedPlaylist.title) {
                        updatedPlaylist.title = name;
                        Storage.set(plId, updatedPlaylist);
                    }
                });
            }
        } else {
            saveOrDelete(vid, isFinished ? null : { timestamp: currentTime, lastUpdated: now, videoType: type, ...info });
        }
        handleNotification(currentTime);
    };

    const resumePlayback = async (player, vid, videoEl, inPlaylist, plId, fromPlId) => {
        const key = inPlaylist ? plId : vid;
        const data = Storage.get(key);
        if (!data) return;

        let lastTime = inPlaylist ? data.videos?.[vid]?.timestamp : data.timestamp;
        let forceTime = inPlaylist ? data.videos?.[vid]?.forceResumeTime : data.forceResumeTime;

        let resumeId = vid;
        if (inPlaylist && data.lastWatchedVideoId && vid !== data.lastWatchedVideoId && plId !== fromPlId) {
            resumeId = data.lastWatchedVideoId;
            lastTime = data.videos?.[resumeId]?.timestamp;
            forceTime = data.videos?.[resumeId]?.forceResumeTime;
            const playlist = player.getPlaylist?.();
            const idx = playlist?.indexOf(resumeId);
            if (idx !== undefined && idx >= 0) {
                player.playVideoAt(idx);
            }
        } else {
            const waitForPlayer = () => {
                if (player.getDuration() > 0) {
                    const timeToSeek = forceTime > 0 ? forceTime : lastTime;
                    if (timeToSeek && timeToSeek > 1) {
                        applySeek(player, videoEl, timeToSeek, forceTime > 0);
                    }
                } else {
                    setTimeout(waitForPlayer, 100);
                }
            };
            waitForPlayer();
        }
    };

    let activeCleanup = null;
    let lastPlaylistId = null;
    let currentPlayer = null;
    let currentVideoEl = null;
    let isProcessing = false;

    const processVideo = (container, player, videoEl) => {
        if (isProcessing) return;
        isProcessing = true;

        if (activeCleanup) activeCleanup();

        currentPlayer = player;
        currentVideoEl = videoEl;

        const url = new URL(location.href);
        const urlVid = url.searchParams.get('v');
        const playerVid = player.getVideoData()?.video_id;
        const plId = url.searchParams.get('list');

        if (urlVid && urlVid !== playerVid) {
            isProcessing = false;
            return;
        }

        if (!playerVid) {
            isProcessing = false;
            return;
        }

        const duration = player.getDuration?.() || 0;
        let type = 'regular';
        if (url.pathname.startsWith('/shorts/')) type = 'short';
        else if (duration === 0 || !isFinite(duration)) type = 'live';

        if (
            (type === 'regular' && !cachedSettings.saveRegularVideos) ||
            (type === 'short' && !cachedSettings.saveShorts) ||
            (type === 'live' && !cachedSettings.saveLiveStreams)
        ) {
            isProcessing = false;
            return;
        }

        resumePlayback(player, playerVid, videoEl, Boolean(plId), plId, lastPlaylistId);

        const handler = () => {
            // Limpiar mensaje persistente si el usuario avanza
            if (isPlayerSeeking) {
                isPlayerSeeking = false;
                if (timeDisplay) {
                    timeDisplay.textContent = '';
                    lastRenderedText = '';
                }
            }
            updateStatus(player, videoEl, type, plId);
        };

        videoEl.addEventListener('timeupdate', handler);
        activeCleanup = () => videoEl.removeEventListener('timeupdate', handler);
        lastPlaylistId = plId;

        setTimeout(() => { isProcessing = false; }, 500);
    };

    // ────────────────
    // ⏯ Seek
    // MARK: ⏯ Seek
    // ────────────────
    // Tiempo máximo para esperar al evento 'seeked' (en ms)
    const SEEK_TIMEOUT = 1500;
    // Función para aplicar seek con espera y manejo de errores
    const applySeek = async (player, videoEl, time, isForced = false) => {
        if (!player || !videoEl) return;
        if (typeof time !== 'number' || isNaN(time)) return;
        const current = player.getCurrentTime();
        if (Math.abs(current - time) <= CONFIG.minSeekDiff) return;
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

        // Mostrar mensaje persistente en la barra de tiempo
        if (timeDisplay) {
            isPlayerSeeking = true; // Activarar flag
            const message = isForced ? `⏱️ Iniciando en tiempo fijo: ${formatTime(time)}` : `⏯ Retomado en ${formatTime(time)}`;
            timeDisplay.textContent = message;
            lastRenderedText = message;
        }
    };

    // ────────────────
    // 📂 Video List
    // MARK: 📂 Video List
    // ────────────────
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
        <option value="live" ${currentValue === 'live' ? 'selected' : ''}>🔴 Directos</option>
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
        input.addEventListener('input', () => onChange(input.value.trim()));
        wrapper.appendChild(input);
        return wrapper;
    }
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

    // ───────────────
    // 📂 Video List UI
    // MARK: 📂 Video List UI
    // ────────────────
    let videosOverlay = null;
    let videosContainer = null;
    let listContainer = null;
    let currentOrderBy, currentFilterBy, currentSearchQuery;

    function updateVideoList() {
        const keys = Storage.keys().filter(k => !k.startsWith('userSettings'));
        listContainer.innerHTML = '';
        if (keys.length === 0) {
            const p = createElement('p', { className: 'ypp-emptyMsg', text: 'No hay videos guardados.' });
            listContainer.appendChild(p);
            return;
        }

        let allItems = [];
        keys.forEach(key => {
            const data = Storage.get(key);
            if (!data) return;

            if (data.videos) {
                const playlistTitle = data.title || key;
                Object.entries(data.videos).forEach(([videoId, info]) => {
                    allItems.push({
                        type: 'playlist-video',
                        videoId,
                        info,
                        playlistKey: key,
                        playlistTitle
                    });
                });
            } else {
                allItems.push({
                    type: 'regular-video',
                    videoId: key,
                    info: data,
                    playlistKey: null
                });
            }
        });

        let filteredItems = allItems.filter(item => {
            if (currentFilterBy === 'playlist') return item.type === 'playlist-video';
            if (currentFilterBy === 'all') return true;
            return item.info.videoType === currentFilterBy;
        }).filter(item => {
            if (!currentSearchQuery) return true;
            const query = currentSearchQuery.toLowerCase();
            return (item.info.title || '').toLowerCase().includes(query) ||
                (item.info.author || '').toLowerCase().includes(query) ||
                (item.playlistTitle || '').toLowerCase().includes(query);
        });

        const getSortValue = (item) => {
            if (currentOrderBy === 'title') return (item.info.title || item.videoId).toLowerCase();
            if (currentOrderBy === 'oldest') return item.info.savedAt || 0;
            return -(item.info.savedAt || 0);
        };
        filteredItems.sort((a, b) => {
            const valA = getSortValue(a);
            const valB = getSortValue(b);
            if (typeof valA === 'string') return valA.localeCompare(valB);
            return valA - valB;
        });

        let lastRenderedPlaylistKey = null;
        filteredItems.forEach(item => {
            if (item.type === 'playlist-video') {
                if (item.playlistKey !== lastRenderedPlaylistKey) {
                    const h3 = createElement('a', {
                        className: 'ypp-playlistTitle',
                        text: `📁 Playlist: ${item.playlistTitle}`,
                        atribute: {
                            href: `https://www.youtube.com/playlist?list=${item.playlistKey}`,
                            target: '_blank',
                            rel: 'noopener noreferrer'
                        }
                    });
                    listContainer.appendChild(h3);
                    lastRenderedPlaylistKey = item.playlistKey;
                }
                listContainer.appendChild(createVideoEntry(item.videoId, item.info, item.playlistKey));
            } else {
                listContainer.appendChild(createVideoEntry(item.videoId, item.info, null));
            }
        });
    }

    function closeModalVideos() {
        if (videosOverlay) {
            videosOverlay.remove();
            videosOverlay = null;
            videosContainer.remove();
            videosContainer = null;
            listContainer.remove();
            listContainer = null;
            document.body.style.overflow = '';
        }
    }
    const createFloatingButtons = async () => {
        const settings = await Settings.get();
        if (!settings.showFloatingButtons) return;
        const wrapper = createElement('div', { className: 'ypp-floatingBtnContainer' });
        const btnConfig = createElement('div', { className: 'ypp-btn', text: '⚙️ YT Playback Plox', onClickEvent: showSettingsUI });
        wrapper.appendChild(btnConfig);
        document.body.appendChild(wrapper);
        const updateVisibility = () => {
            const isFullscreen = !!document.fullscreenElement;
            wrapper.style.display = isFullscreen ? 'none' : 'flex';
        };
        document.addEventListener('fullscreenchange', updateVisibility);
        window.addEventListener('yt-navigate-finish', updateVisibility);
        updateVisibility();
    };
    function syncUIWithCurrentFilters() {
        const sortSelect = document.getElementById('sort-selector');
        const filterSelect = document.getElementById('filter-selector');
        const searchInput = document.getElementById('search-input');
        if (sortSelect) sortSelect.value = currentOrderBy;
        if (filterSelect) filterSelect.value = currentFilterBy;
        if (searchInput) searchInput.value = currentSearchQuery;
    }
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

            const filtersContainer = createElement('div', { className: 'ypp-filters' });
            filtersContainer.appendChild(createSortSelector(currentOrderBy, async (selected) => {
                currentOrderBy = selected;
                await saveFilters({ orderBy: selected });
                updateVideoList();
            }));
            filtersContainer.appendChild(createFilterSelector(currentFilterBy, async (selected) => {
                currentFilterBy = selected;
                await saveFilters({ filterBy: selected });
                updateVideoList();
            }));
            filtersContainer.appendChild(createSearchInput(currentSearchQuery, async (query) => {
                currentSearchQuery = query;
                await saveFilters({ searchQuery: query });
                updateVideoList();
            }));
            videosContainer.appendChild(filtersContainer);

            videosContainer.appendChild(listContainer);

            const footer = createElement('div', { className: 'ypp-footer' });
            const exportDataToFile = () => {
                const exportData = {};
                const keys = Storage.keys().filter(k => !k.startsWith('userSettings'));
                keys.forEach(k => {
                    const data = Storage.get(k);
                    if (data) exportData[k] = data;
                });
                const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
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
                let inputFile = document.getElementById('ypp-import-file');
                if (!inputFile) {
                    inputFile = createElement('input', {
                        id: 'ypp-import-file',
                        atribute: { type: 'file' },
                        props: { accept: 'application/json' }
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
                            inputFile.value = '';
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
    // 📂 Video Entry
    // MARK: 📂 Video Entry
    // ────────────────
    function createVideoEntry(videoId, info, playlistKey = null) {
        const videoTime = formatTime(info.timestamp || 0);
        const duration = info.duration || 0;
        const watched = info.timestamp || 0;
        const remaining = Math.max(duration - watched, 0);
        const percent = duration ? Math.min(100, Math.round((watched / duration) * 100)) : null;
        const wrapper = createElement('div', { className: `ypp-videoWrapper ${playlistKey ? 'playlist-item' : ''}` });
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

        let timestampText = `Progreso: ${videoTime}`;
        if (info.forceResumeTime > 0) {
            timestampText = `⏱️ Siempre desde: ${formatTime(info.forceResumeTime)} 🔒`;
        }
        const timestamp = createElement('div', { className: `ypp-timestamp ${info.forceResumeTime > 0 ? 'forced' : ''}`, text: timestampText });

        infoDiv.appendChild(titleLink);
        infoDiv.appendChild(author);
        infoDiv.appendChild(views);
        infoDiv.appendChild(timestamp);
        if (percent !== null) {
            const progressInfo = createElement('div', { className: 'ypp-progressInfo', text: `📊 ${percent}% visto (${formatTime(remaining)} restantes)` });
            infoDiv.appendChild(progressInfo);
        }
        wrapper.appendChild(infoDiv);

        const buttonContainer = createElement('div', { className: 'ypp-containerButtonsTime' });

        const btnForceTime = createElement('button', {
            className: 'ypp-btn ypp-btn-small',
            text: '⏱️',
            atribute: { title: info.forceResumeTime ? `Siempre empezar en ${formatTime(info.forceResumeTime)} (Click para cambiar o eliminar)` : 'Establecer tiempo de inicio' },
            onClickEvent: () => {
                const promptText = info.forceResumeTime
                    ? `Introduce el tiempo de inicio que siempre quieres usar (ejemplo: 1:23) o deja vacío para eliminar:`
                    : `Introduce el tiempo de inicio que siempre quieres usar (ejemplo: 1:23 o 0:45):`;
                const timeStr = prompt(promptText, info.forceResumeTime ? formatTime(info.forceResumeTime) : '');

                if (timeStr === null) { // Usuario canceló
                    return;
                }

                const timeSec = parseTimeToSeconds(timeStr);

                if (playlistKey) {
                    const playlist = Storage.get(playlistKey);
                    if (playlist?.videos?.[videoId]) {
                        if (timeSec > 0) {
                            playlist.videos[videoId].forceResumeTime = timeSec;
                            showToast(`✅ Tiempo de inicio establecido en ${formatTime(timeSec)}`);
                        } else {
                            delete playlist.videos[videoId].forceResumeTime;
                            showToast('🔓 Tiempo fijo eliminado.');
                        }
                        Storage.set(playlistKey, playlist);
                    }
                } else {
                    const data = Storage.get(videoId);
                    if (data) {
                        if (timeSec > 0) {
                            data.forceResumeTime = timeSec;
                            showToast(`✅ Tiempo de inicio establecido en ${formatTime(timeSec)}`);
                        } else {
                            delete data.forceResumeTime;
                            showToast('🔓 Tiempo fijo eliminado.');
                        }
                        Storage.set(videoId, data);
                    }
                }
                updateVideoList();
            }
        });
        buttonContainer.appendChild(btnForceTime);

        const btnDelete = createElement('button', {
            className: 'ypp-btn ypp-btn-delete ypp-btn-small',
            atribute: { title: 'Eliminar entrada' },
            text: '🗑️',
            onClickEvent: () => {
                const title = info.title || videoId;
                const itemData = { videoId, info, playlistKey };

                const performDelete = () => {
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
                    updateVideoList();
                };

                const undoDelete = () => {
                    if (playlistKey) {
                        const playlist = Storage.get(playlistKey) || { lastWatchedVideoId: '', videos: {}, title: '' };
                        playlist.videos[videoId] = itemData.info;
                        Storage.set(playlistKey, playlist);
                    } else {
                        Storage.set(videoId, itemData.info);
                    }
                    updateVideoList();
                };

                performDelete();
                showToast(`🗑️ "${title}" eliminado.`, 5000, {
                    action: {
                        label: 'Deshacer',
                        callback: undoDelete
                    }
                });
            }
        });
        buttonContainer.appendChild(btnDelete);
        wrapper.appendChild(buttonContainer);

        return wrapper;
    }

    // ────────────────
    // ⚙️ Settings UI
    // MARK: ⚙️ Settings UI
    // ────────────────

    async function showSettingsUI() {
        if (document.querySelector('.settings-modal')) return;
        closeModalVideos();
        const settings = await Settings.get();
        const content = createElement('div', { className: 'ypp-settingsContent' });

        const activationGroup = createElement('div');
        const activationLabel = createElement('div', { text: 'Activar guardado para:', style: 'font-weight: bold; margin-bottom: 8px;' });
        activationGroup.appendChild(activationLabel);

        const types = [
            { key: 'saveRegularVideos', label: '▶️ Videos regulares' },
            { key: 'saveShorts', label: '📱 Shorts' },
            { key: 'saveLiveStreams', label: '🔴 Directos (Livestreams)' }
        ];

        types.forEach(type => {
            const group = createElement('div');
            const label = createElement('label', { className: 'ypp-label', text: type.label, atribute: { for: type.key } });
            const toggle = createElement('input', {
                id: type.key,
                atribute: { type: 'checkbox' },
                props: { checked: settings[type.key] }
            });
            label.appendChild(toggle);
            group.appendChild(label);
            activationGroup.appendChild(group);
        });
        content.appendChild(activationGroup);

        const notifGroup = createElement('div');
        const notifLabel = createElement('label', {
            className: 'ypp-label', text: 'Mostrar notificaciones de guardado', atribute: { for: 'toggleNotif' },
        });
        const toggleNotif = createElement('input', {
            id: 'toggleNotif',
            atribute: { title: 'Mostrar notificaciones de guardado', for: 'toggleNotif', type: 'checkbox' },
            props: { checked: settings.showNotifications }
        });
        notifLabel.appendChild(toggleNotif);
        notifGroup.appendChild(notifLabel);
        content.appendChild(notifGroup);

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

        const buttonsGroup = document.createElement('div');
        const buttonsLabel = createElement('label', {
            className: 'ypp-label',
            atribute: { title: 'Mostrar boton flotante', for: 'toggleButtons' },
            text: ' Mostrar boton flotante'
        });
        const toggleButtons = createElement('input', {
            id: 'toggleButtons',
            atribute: { title: 'Mostrar boton flotante', type: 'checkbox' },
            props: { checked: settings.showFloatingButtons }
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
                    saveRegularVideos: document.getElementById('saveRegularVideos').checked,
                    saveShorts: document.getElementById('saveShorts').checked,
                    saveLiveStreams: document.getElementById('saveLiveStreams').checked,
                };
                await Settings.set(newSettings);
                showToast('✅ Configuración guardada');
                location.reload();
            }
        });
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

    // ───────────────
    // ⚙️ Menu Commands
    // MARK: ⚙️ Menu Commands
    // ────────────────

    GM_registerMenuCommand('⚙️ Configuración', showSettingsUI);
    GM_registerMenuCommand('📋 Ver videos guardados', showSavedVideosList);


    // ────────────────
    // 🚀 Init
    // MARK: 🚀 Init
    // ────────────────

    const init = async () => {
        cachedSettings = await Settings.get();
        injectStyles();
        const observePlayer = () => {
            const selectors = ['#movie_player', '#shorts-player'];
            const containers = selectors.map(selector => document.querySelector(selector)).filter(Boolean);
            for (const container of containers) {
                const videoEl = container.querySelector('video');
                const player = container.player_ || container;
                if (player && videoEl) {
                    processVideo(container, player, videoEl);
                }
            }
        };

        const stopActivePlayback = () => {
            if (currentPlayer && currentVideoEl && !currentVideoEl.paused) {
                try {
                    currentVideoEl.pause();
                    currentPlayer.pauseVideo();
                } catch (e) {
                    console.error('Error al detener la reproducción activa:', e);
                }
            }
            if (activeCleanup) {
                activeCleanup();
                activeCleanup = null;
            }
            currentPlayer = null;
            currentVideoEl = null;
        };

        const checkForPlaylist = () => {
            const url = new URL(location.href);
            const playlistId = url.searchParams.get('list');
            if (playlistId) {
                getCurrentPlaylistName();
            }
        };

        observePlayer();
        createFloatingButtons();
        initTimeDisplay();

        window.addEventListener('yt-navigate-finish', () => {
            stopActivePlayback();
            setTimeout(observePlayer, 150);
            checkForPlaylist();
            checkAndRestoreTimeDisplay();
        });
    };
    init();
})();