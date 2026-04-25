// ==UserScript==
// @name         YouTube Helper API - Tester
// @match        *://*.youtube.com/*
// @run-at       document-idle
// @require      https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/YT-HELPER-PLOX/YouTube-Helper-API.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let lastVideoId = null;

    const checkApi = setInterval(() => {
        if (window.__YT_HELPER_API__?.status === 'initialized') {
            clearInterval(checkApi);
            const api = window.__YT_HELPER_API__.instance;

            console.log('%c✅ [Tester] YouTube Helper API lista!', 'color: #28a745; font-weight: bold; font-size: 14px;');

            // 1. Escuchar el evento de video listo (SPA Navigation)
            api.eventTarget.addEventListener('yt-helper-api-ready', (e) => {
                // A veces YouTube dispara el evento sin ID todavía. Lo ignoramos.
                if (!e.detail.video.id) return;

                // Evitar loguear el mismo video dos veces seguidas (doble disparo de YT)
                if (e.detail.video.id === lastVideoId) {
                    console.log('%c⏩ [Tester] Mismo video, actualización tardía (ignorando log duplicado)', 'color: #6c757d;');
                    return;
                }

                lastVideoId = e.detail.video.id;

                const v = e.detail.video;
                const p = e.detail.player;
                const pg = e.detail.page;

                console.group('%c🎬 [Tester] Nuevo Video Detectado', 'color: #007bff; font-weight: bold;');

                // --- Info Básica ---
                console.log('📌 Título:', v.title);
                console.log('🆔 ID:', v.id);
                console.log('📺 Canal:', v.channel, `(ID: ${v.channelId})`);

                // --- Estadísticas y Metadatos ---
                console.log('⏱️ Duración:', v.lengthSeconds + 's', '| 👁️ Vistas:', v.viewCount, '| 👍 Likes:', v.likeCount);
                console.log('🔴 En Vivo:', v.isCurrentlyLive, '| 📡 Contenido Live/VOD:', v.isLiveOrVodContent, '| 👨‍👩‍👧 Familiar:', v.isFamilySafe);
                console.log('📅 Subido:', v.rawUploadDate || 'N/A', '| Publicado:', v.rawPublishDate || 'N/A');

                // --- Estado del Player ---
                console.log('🖥️ Pantalla Completa:', p.isFullscreen, '| 🎭 Teatro:', p.isTheater, '| 📺 Anuncio Reproduciéndose:', p.isPlayingAds);

                // --- Idiomas y Doblaje ---
                console.log('🌐 Idioma Reproduciéndose:', v.playingLanguage || 'Default', '| 🌍 Idioma Original:', v.originalLanguage || 'N/A', '| 🤖 Auto-Doblado:', v.isAutoDubbed);

                // --- Contexto de Reproducción ---
                console.log('📄 Tipo de Página:', pg.type, '| ⏱️ Tiempo Especificado (t=):', v.isTimeSpecified, '| 📜 En Playlist:', v.isInPlaylist, `(ID: ${v.playlistId || 'N/A'})`);

                // --- Datos pesados (Logueados como objetos colapsables para inspeccionar) ---
                console.log('🖼️ Thumbnails:', v.thumbnails);
                // console.log('📝 Descripción:', v.rawDescription); // Descomenta si quieres ver la descripción completa

                console.groupEnd();

                // Prueba de sanidad de memoria
                const hasDomInSnapshot = e.detail.player.videoElement !== null || e.detail.player.playerObject !== null;
                if (hasDomInSnapshot) {
                    console.error('%c🚨 [Tester] FUGA DETECTADA: El snapshot contiene referencias DOM!', 'color: red; font-weight: bold;');
                } else {
                    console.log('%c🛡️ [Tester] Memoria segura: Snapshot sin DOM', 'color: #28a745;');
                }
            });

            // 2. Escuchar eventos de reproducción
            api.eventTarget.addEventListener('yt-helper-api-current-video-play', () => {
                console.log('%c▶️ [Tester] Play', 'color: #17a2b8;');
            });
            api.eventTarget.addEventListener('yt-helper-api-current-video-pause', () => {
                console.log('%c⏸️ [Tester] Pause', 'color: #ffc107;');
            });

            // 3. Escuchar detección de anuncios
            api.eventTarget.addEventListener('yt-helper-api-ad-detected', (e) => {
                console.log('%c📺 [Tester] Anuncio detectado!', 'color: #ce00a8; font-weight: bold;', e.detail);
            });

            // 4. Escuchar cambio de idioma (Auto-dub)
            api.eventTarget.addEventListener('yt-helper-api-playback-language-updated', (e) => {
                if (!e.detail.isInit) { // No loguear el idioma inicial, solo los cambios
                    console.log('%c🌐 [Tester] Idioma cambiado a:', 'color: #17a2b8;', e.detail.playingLanguage, '| Auto-dubbed:', e.detail.isAutoDubbed);
                }
            });

            // 5. Escuchar cambios en el Chat (Solo si estás en un directo)
            api.eventTarget.addEventListener('yt-helper-api-chat-state-updated', (e) => {
                console.log('%c💬 [Tester] Estado del chat actualizado:', 'color: #6c757d;', 'Colapsado:', e.detail.isCollapsed);
            });

            // 6. Prueba silenciosa del Proxy (GC Pressure test)
            setInterval(() => {
                if (api.player.api) {
                    const time = api.apiProxy.getCurrentTime();
                    void time; // Solo para corroborar que no crashea
                }
            }, 2000);

        }
    }, 500);
})();