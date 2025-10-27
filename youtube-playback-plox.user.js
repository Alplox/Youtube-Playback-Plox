// ==UserScript==
// @namespace    youtube-playback-plox
// @homepage     https://github.com/Alplox/Youtube-Playback-Plox
// @supportURL   https://github.com/Alplox/Youtube-Playback-Plox/issues
// @version      0.0.5
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
// @description:de  Speichert und setzt den Fortschritt von YouTube-Videos automatisch fort, ohne dass eine Anmeldung erforderlich ist.

// @name:it      YouTube Riproduzione Plox
// @description:it  Salva e riprende automaticamente la riproduzione dei video su YouTube senza bisogno di accedere.

// @name:pt      YouTube Reprodução Plox
// @description:pt  Salva e retoma automaticamente o progresso da reprodução de vídeos no YouTube sem precisar fazer login.

// @name:ru      YouTube Воспроизведение Plox
// @description:ru  Автоматически сохраняет и возобновляет прогресс воспроизведения видео на YouTube без входа в аккаунт.

// @name:zh      YouTube 播放 Plox
// @description:zh  自动保存并恢复 YouTube 视频的播放进度，无需登录。

// @name:ja      YouTube 再生 Plox
// @description:ja  YouTube の動画再生の進行状況を自動で保存・再開します。ログインは不要です。

// @name:ko      YouTube 재생 Plox
// @description:ko  YouTube 동영상 재생 진행 상황을 자동으로 저장하고 이어서 재생합니다. 로그인 불필요.

// @name:ar      يوتيوب بلايباك Plox
// @description:ar  يقوم بحفظ واستئناف تقدم تشغيل الفيديوهات على يوتيوب تلقائيًا دون الحاجة لتسجيل الدخول.

// @name:hi      YouTube प्लेबैक Plox
// @description:hi  YouTube पर वीडियो प्लेबैक की प्रगति को स्वचालित रूप से सहेजें और पुनः प्रारंभ करें, लॉगिन की आवश्यकता नहीं। 

// @name:bn      YouTube প্লেব্যাক Plox
// @description:bn  YouTube ভিডিও প্লেব্যাকের অগ্রগতি স্বয়ংক্রিয়ভাবে সংরক্ষণ এবং পুনরায় শুরু করুন, লগইনের প্রয়োজন নেই। 

// @name:vi      YouTube Phát lại Plox
// @description:vi  Tự động lưu và tiếp tục tiến trình phát video trên YouTube mà không cần đăng nhập.

// @name:id      YouTube Pemutaran Plox
// @description:id  Menyimpan dan melanjutkan kemajuan pemutaran video di YouTube secara otomatis tanpa perlu login.

// @name:tr      YouTube Oynatma Plox
// @description:tr  YouTube'daki video oynatma ilerlemesini otomatik olarak kaydeder ve devam ettirir, giriş yapmaya gerek yok.

// @name:pl      YouTube Odtwarzanie Plox
// @description:pl  Automatycznie zapisuje i wznawia postęp odtwarzania wideo na YouTube bez logowania.

// @name:nl      YouTube Afspelen Plox
// @description:nl  Slaat automatisch de voortgang van video's op YouTube op en hervat deze zonder in te loggen.

// @name:sv      YouTube Uppspelning Plox
// @description:sv  Sparar och återupptar automatiskt videoframsteg på YouTube utan att behöva logga in.

// @name:da      YouTube Afspilning Plox
// @description:da  Gemmer og genoptager automatisk videoafspilning på YouTube uden at logge ind.

// @name:no      YouTube Avspilling Plox
// @description:no  Lagrer og gjenopptar automatisk videofremdrift på YouTube uten å logge inn.

// @name:fi      YouTube Toisto Plox
// @description:fi  Tallentaa ja jatkaa automaattisesti YouTube-videoiden toistopistettä ilman kirjautumista.

// @name:hu      YouTube Lejátszás Plox
// @description:hu  Automatikusan menti és folytatja a YouTube-videók lejátszási előrehaladását bejelentkezés nélkül.

// @name:cs      YouTube Přehrávání Plox
// @description:cs  Automaticky ukládá a obnovuje postup přehrávání videí na YouTube bez nutnosti přihlášení.

// @name:sk      YouTube Prehrávanie Plox
// @description:sk  Automaticky ukladá a obnovuje priebeh prehrávania videí na YouTube bez potreby prihlásenia.

// @name:ro      YouTube Redare Plox
// @description:ro  Salvează și reia automat progresul redării videoclipurilor pe YouTube fără a fi nevoie să te conectezi.

// @name:bg      YouTube Възпроизвеждане Plox
// @description:bg  Автоматично записва и възобновява прогреса на видеото в YouTube без нужда от вход.

// @name:hr      YouTube Reprodukcija Plox
// @description:hr  Automatski sprema i nastavlja napredak reprodukcije videozapisa na YouTubeu bez prijave.

// @name:sl      YouTube Predvajanje Plox
// @description:sl  Samodejno shrani in nadaljuje napredek predvajanja videoposnetkov na YouTubu brez prijave.

// @name:sr      YouTube Репродукција Plox
// @description:sr  Аутоматски чува и наставља напредак репродукције видео записа на YouTube-у без пријављивања.

// @name:lt      YouTube Grotuvas Plox
// @description:lt  Automatiškai išsaugo ir atnaujina YouTube vaizdo įrašų atkūrimo pažangą be prisijungimo.

// @name:lv      YouTube Atskaņošana Plox
// @description:lv  Automātiski saglabā un atsāk video atskaņošanas progresu YouTube bez pieteikšanās.

// @name:uk      YouTube Відтворення Plox
// @description:uk  Автоматично зберігає та відновлює прогрес відтворення відео на YouTube без входу в акаунт.

// @name:el      YouTube Αναπαραγωγή Plox
// @description:el  Αποθηκεύει και συνεχίζει αυτόματα την πρόοδο αναπαραγωγής βίντεο στο YouTube χωρίς να χρειάζεται σύνδεση.

// @name:th      YouTube เล่นต่อ Plox
// @description:th  บันทึกและเล่นต่อความคืบหน้าของวิดีโอบน YouTube โดยอัตโนมัติ โดยไม่ต้องเข้าสู่ระบบ.

// @name:ms      YouTube Main Semula Plox
// @description:ms  Menyimpan dan menyambung semula kemajuan main balik video di YouTube secara automatik tanpa perlu log masuk.

// @name:sw      YouTube Uchezesha Plox
// @description:sw  Hifadhi na endelea kwa kiotomatiki maendeleo ya uchezaji wa video kwenye YouTube bila kuingia.

// @name:fa      پخش یوتیوب Plox
// @description:fa  پیشرفت پخش ویدیوها در یوتیوب را به صورت خودکار ذخیره و ادامه می‌دهد بدون نیاز به ورود.

// @name:he      YouTube השמעה Plox
// @description:he  שומר ומחדש אוטומטית את התקדמות הניגון של סרטונים ביוטיוב ללא צורך בהתחברות.

// @name:ta      YouTube பிளேபாக் Plox
// @description:ta  YouTube வீடியோக்களின் பிளேபாக் முன்னேற்றத்தை தானாகச் சேமித்து மீண்டும் தொடங்கும், உள்நுழைவு தேவையில்லை.

// @name:am      የYouTube ተጫዋች Plox
// @description:am  በYouTube ላይ የቪዲዮ መጫወቻ እድገትን በራሱ ያስቀምጣል እና ያቀጥላል በመግባት ያስፈልጋል።

// @name:ha      YouTube Playback Plox
// @description:ha  Ajiye kuma ci gaba da ci gaban kallon bidiyo a YouTube ta atomatik ba tare da shiga ba.

// @name:ur      YouTube پلے بیک Plox
// @description:ur  YouTube پر ویڈیوز کی پلے بیک کی پیش رفت کو خودکار طریقے سے محفوظ اور دوبارہ شروع کریں، لاگ ان کی ضرورت نہیں۔ 

// @name:te      YouTube ప్లేబ్యాక్ Plox
// @description:te  YouTube వీడియో ప్లేబ్యాక్ పురోగతిని ఆటోమేటిక్‌గా సేవ్ చేసి, తిరిగి ప్రారంభిస్తుంది, లాగిన్ అవసరం లేదు.

// @name:mr      YouTube प्लेबॅक Plox
// @description:mr  YouTube व्हिडिओ प्लेबॅक प्रगती आपोआप जतन करते आणि पुन्हा सुरू करते, लॉगिन आवश्यक नाही.

// @name:tl      YouTube Playback Plox
// @description:tl  Awtomatikong ini-save at ipinagpapatuloy ang progreso ng video playback sa YouTube nang hindi nagla-log in.

// @name:my      YouTube ဖလေ့ဘက် Plox
// @description:my  YouTube ဗီဒီယိုဖလေ့ဘက် တိုးတက်မှုကို အလိုအလျောက် သိမ်းဆည်းပြီး ထပ်မံစတင်နိုင်သည်။ ဝင်ရောက်ရန် မလိုအပ်ပါ။

// @name:yue      YouTube 播放 Plox
// @description:yue  自動儲存及繼續 YouTube 影片播放進度，無需登入。

// @name:ca      YouTube Reproducció Plox
// @description:ca  Desa i reprèn automàticament el progrés de reproducció de vídeos a YouTube sense necessitat d'iniciar sessió.

// @name:zu      YouTube Playback Plox
// @description:zu  Igcina futhi uqhubeke ngokuzenzakalelayo nokuqhubeka kwevidiyo ku-YouTube ngaphandle kokungena.

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

// ────────────────
// 🔍 SISTEMA DE LOGGING
// MARK: 🔍 SISTEMA DE LOGGING
// ────────────────

(function () {
    'use strict';

    // 1. Determinar si el modo debug está activo
    const DEBUG = false; // Cambiar a 'false' para desactivar los logs de depuración en producción

    // 2. Crear el objeto del logger en el ámbito global (window)
    window.MyScriptLogger = {
        log: (context, ...args) => {
            if (DEBUG) {
                console.log(`%c[${context}]`, 'color: #6a9955;', ...args);
            }
        },
        warn: (context, ...args) => {
            if (DEBUG) {
                console.warn(`%c[${context}]`, 'color: #ce9178; font-weight: bold;', ...args);
            }
        },
        error: (context, ...args) => {
            // Los errores siempre se muestran
            console.error(`%c[${context}]`, 'color: #f44747; font-weight: bold;', ...args);
        }
    };

})();

// Atajo para no tener que escribir window.MyScriptLogger cada vez
const { log, warn, error: conError } = window.MyScriptLogger;

// --- INICIO CARGA LÓGICA PRINCIPAL DEL USERSCRIPT ---

(() => {
    'use strict';

    // ────────────────
    // 🌐 Carga de Traducciones
    // MARK: 🌐 Carga de Traducciones
    // ────────────────

    // URL del archivo de traducciones
    const TRANSLATIONS_URL = 'https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/translations.json';
    const TRANSLATIONS_URL_BACKUP = 'https://cdn.jsdelivr.net/gh/Alplox/Youtube-Playback-Plox@refs/heads/main/translations.json';

    // Variables globales para las traducciones
    let TRANSLATIONS = {};
    let LANGUAGE_FLAGS = {};

    // Traducciones básicas de fallback en caso de error
    const FALLBACK_TRANSLATIONS = {
        es: {
            // UI General
            settings: "Configuración",
            savedVideos: "Ver videos guardados",
            close: "Cerrar",
            save: "Guardar",
            cancel: "Cancelar",
            delete: "Eliminar",
            undo: "Deshacer",

            // Configuración
            enableSavingFor: "Activar guardado para",
            regularVideos: "Videos regulares",
            shorts: "Shorts",
            liveStreams: "Directos (Livestreams)",
            showNotifications: "Mostrar notificaciones de guardado",
            minSecondsBetweenSaves: "Intervalo segundos mínimos entre guardados",
            showFloatingButton: "Mostrar botón flotante",
            language: "Idioma",
            alertStyle: "Estilo de alertas en la barra de reproducción",
            alertIconText: "Icono + Texto",
            alertIconOnly: "Solo Icono",
            alertTextOnly: "Solo Texto",
            alertHidden: "Oculto",

            // Lista de videos
            noSavedVideos: "No hay videos guardados.",
            sortBy: "Ordenar por",
            mostRecent: "Más recientes",
            oldest: "Más antiguos",
            titleAZ: "Título (A-Z)",
            filterByType: "Filtrar por tipo",
            all: "Todos",
            videos: "Videos",
            playlist: "Playlist",
            searchByTitleOrAuthor: "Buscar por título o autor...",
            export: "Exportar",
            import: "Importar",

            // Notificaciones
            progressSaved: "Progreso guardado",
            dataExported: "Datos exportados",
            itemsImported: "Importados {count} elementos",
            importError: "Error al importar. Asegúrate de que el archivo sea válido.",
            configurationSaved: "Configuración guardada",
            startTimeSet: "Tiempo de inicio establecido en",
            fixedTimeRemoved: "Tiempo fijo eliminado.",
            itemDeleted: "eliminado.",

            // Video Entry
            progress: "Progreso",
            alwaysStartFrom: "Siempre desde",
            resumedAt: "Reanudado en",
            locked: "🔒",
            percentWatched: "% visto",
            remaining: "restantes",
            setStartTime: "Establecer tiempo de inicio",
            changeOrRemoveStartTime: "Siempre empezar en {time} (Click para cambiar o eliminar)",
            enterStartTime: "Introduce el tiempo de inicio que siempre quieres usar (ejemplo: 1:23)",
            enterStartTimeOrEmpty: "Introduce el tiempo de inicio que siempre quieres usar (ejemplo: 1:23) o deja vacío para eliminar",
            deleteEntry: "Eliminar entrada",

            // Otros
            youtubePlaybackPlox: "YouTube Playback Plox",
            playlistPrefix: "Playlist",
            unknown: "Desconocido",
            notAvailable: "N/A"
        },

        en: {
            // UI General
            settings: "Settings",
            savedVideos: "View saved videos",
            close: "Close",
            save: "Save",
            cancel: "Cancel",
            delete: "Delete",
            undo: "Undo",

            // Config
            enableSavingFor: "Enable saving for",
            regularVideos: "Regular videos",
            shorts: "Shorts",
            liveStreams: "Live streams",
            showNotifications: "Show save notifications",
            minSecondsBetweenSaves: "Minimum seconds between saves",
            showFloatingButton: "Show floating button",
            language: "Language",
            alertStyle: "Alert style in playback bar",
            alertIconText: "Icon + Text",
            alertIconOnly: "Icon Only",
            alertTextOnly: "Text Only",
            alertHidden: "Hidden",

            // Video list
            noSavedVideos: "No saved videos.",
            sortBy: "Sort by",
            mostRecent: "Most recent",
            oldest: "Oldest",
            titleAZ: "Title (A-Z)",
            filterByType: "Filter by type",
            all: "All",
            videos: "Videos",
            playlist: "Playlist",
            searchByTitleOrAuthor: "Search by title or author...",
            export: "Export",
            import: "Import",

            // Notifications
            progressSaved: "Progress saved",
            dataExported: "Data exported",
            itemsImported: "Imported {count} items",
            importError: "Error importing. Make sure the file is valid.",
            configurationSaved: "Configuration saved",
            startTimeSet: "Start time set to",
            fixedTimeRemoved: "Fixed time removed.",
            itemDeleted: "deleted.",

            // Video Entry
            progress: "Progress",
            alwaysStartFrom: "Always start from",
            resumedAt: "Resumed at",
            locked: "🔒",
            percentWatched: "% watched",
            remaining: "remaining",
            setStartTime: "Set start time",
            changeOrRemoveStartTime: "Always start from {time} (Click to change or remove)",
            enterStartTime: "Enter the start time you always want to use (example: 1:23)",
            enterStartTimeOrEmpty: "Enter the start time you always want to use (example: 1:23) or leave empty to remove",
            deleteEntry: "Delete entry",

            // Other
            youtubePlaybackPlox: "YouTube Playback Plox",
            playlistPrefix: "Playlist",
            unknown: "Unknown",
            notAvailable: "N/A"
        },

        fr: {
            // UI General
            settings: "Paramètres",
            savedVideos: "Voir les vidéos enregistrées",
            close: "Fermer",
            save: "Enregistrer",
            cancel: "Annuler",
            delete: "Supprimer",
            undo: "Annuler",

            // Config
            enableSavingFor: "Activer la sauvegarde pour",
            regularVideos: "Vidéos régulières",
            shorts: "Shorts",
            liveStreams: "Diffusions en direct",
            showNotifications: "Afficher les notifications de sauvegarde",
            minSecondsBetweenSaves: "Secondes minimales entre les sauvegardes",
            showFloatingButton: "Afficher le bouton flottant",
            language: "Langue",
            alertStyle: "Style d'alerte dans la barre de lecture",
            alertIconText: "Icône + Texte",
            alertIconOnly: "Icône uniquement",
            alertTextOnly: "Texte uniquement",
            alertHidden: "Masqué",

            // Video list
            noSavedVideos: "Aucune vidéo enregistrée.",
            sortBy: "Trier par",
            mostRecent: "Plus récent",
            oldest: "Plus ancien",
            titleAZ: "Titre (A-Z)",
            filterByType: "Filtrer par type",
            all: "Tous",
            videos: "Vidéos",
            playlist: "Playlist",
            searchByTitleOrAuthor: "Rechercher par titre ou auteur...",
            export: "Exporter",
            import: "Importer",

            // Notifications
            progressSaved: "Progrès enregistré",
            dataExported: "Données exportées",
            itemsImported: "{count} éléments importés",
            importError: "Erreur lors de l'importation. Assurez-vous que le fichier est valide.",
            configurationSaved: "Configuration enregistrée",
            startTimeSet: "Heure de début définie à",
            fixedTimeRemoved: "Heure fixe supprimée.",
            itemDeleted: "supprimé.",

            // Video Entry
            progress: "Progrès",
            alwaysStartFrom: "Toujours commencer à",
            resumedAt: "Repris à",
            locked: "🔒",
            percentWatched: "% regardé",
            remaining: "restant",
            setStartTime: "Définir l'heure de début",
            changeOrRemoveStartTime: "Toujours commencer à {time} (Cliquez pour changer ou supprimer)",
            enterStartTime: "Entrez l'heure de début que vous souhaitez toujours utiliser (exemple: 1:23)",
            enterStartTimeOrEmpty: "Entrez l'heure de début que vous souhaitez toujours utiliser (exemple: 1:23) ou laissez vide pour supprimer",
            deleteEntry: "Supprimer l'entrée",

            // Other
            youtubePlaybackPlox: "YouTube Playback Plox",
            playlistPrefix: "Playlist",
            unknown: "Inconnu",
            notAvailable: "N/A"
        }
    };

    const FALLBACK_FLAGS = {
        es: '🇪🇸', // Español
        en: '🇬🇧', // Inglés (Reino Unido)
        fr: '🇫🇷', // Francés
    };

    // Función para cargar las traducciones desde el archivo JSON externo
    async function loadTranslations() {
        return new Promise((resolve) => {
            // Función para intentar cargar desde una URL específica
            function tryLoadFromUrl(url, isSecondAttempt = false) {
                GM_xmlhttpRequest({
                    method: 'GET',
                    url: url,
                    timeout: 5000,
                    onload: function (response) {
                        try {
                            const data = JSON.parse(response.responseText);

                            if (data.LANGUAGE_FLAGS && Object.keys(data.LANGUAGE_FLAGS).length > 0 &&
                                data.TRANSLATIONS && Object.keys(data.TRANSLATIONS).length > 0) {
                                log('loadTranslations', 'Traducciones externas cargadas correctamente desde: ' + url);
                                resolve(data);
                            } else {
                                if (!isSecondAttempt) {
                                    warn('loadTranslations', 'No se pudieron cargar las traducciones desde el primer enlace, intentando con el segundo...');
                                    tryLoadFromUrl(TRANSLATIONS_URL_BACKUP, true);
                                } else {
                                    warn('loadTranslations', 'No se pudieron cargar las traducciones desde ningún enlace, usando fallback');
                                    resolve({
                                        LANGUAGE_FLAGS: FALLBACK_FLAGS,
                                        TRANSLATIONS: FALLBACK_TRANSLATIONS
                                    });
                                }
                            }
                        } catch (error) {
                            conError('loadTranslations', 'Error al procesar el archivo de traducciones desde ' + url + ':', error);
                            if (!isSecondAttempt) {
                                warn('loadTranslations', 'Intentando con el segundo enlace de traducciones...');
                                tryLoadFromUrl(TRANSLATIONS_URL_BACKUP, true);
                            } else {
                                resolve({
                                    LANGUAGE_FLAGS: FALLBACK_FLAGS,
                                    TRANSLATIONS: FALLBACK_TRANSLATIONS
                                });
                            }
                        }
                    },
                    onerror: function (error) {
                        conError('loadTranslations', 'Error al cargar el archivo de traducciones desde ' + url + ':', error);
                        if (!isSecondAttempt) {
                            warn('loadTranslations', 'Intentando con el segundo enlace de traducciones...');
                            tryLoadFromUrl(TRANSLATIONS_URL_BACKUP, true);
                        } else {
                            resolve({
                                LANGUAGE_FLAGS: FALLBACK_FLAGS,
                                TRANSLATIONS: FALLBACK_TRANSLATIONS
                            });
                        }
                    },
                    ontimeout: function () {
                        conError('loadTranslations', 'Timeout al cargar el archivo de traducciones desde ' + url);
                        if (!isSecondAttempt) {
                            warn('loadTranslations', 'Intentando con el segundo enlace de traducciones...');
                            tryLoadFromUrl(TRANSLATIONS_URL_BACKUP, true);
                        } else {
                            resolve({
                                LANGUAGE_FLAGS: FALLBACK_FLAGS,
                                TRANSLATIONS: FALLBACK_TRANSLATIONS
                            });
                        }
                    }
                });
            }

            // Iniciar el proceso con el primer enlace
            tryLoadFromUrl(TRANSLATIONS_URL);
        });
    }

    // ────────────────
    // 📦 Config
    // MARK: 📦 Config
    // ────────────────

    const CONFIG = {
        /** Diferencia mínima (en segundos) para considerar un cambio de posición como válido */
        minSeekDiff: 1.5,

        /** Tiempo desde el final del video (en segundos) para considerarlo como "finalizado" */
        staticFinishSec: 90,

        /** Prefijo para claves en localStorage */
        storagePrefix: 'YT_PLAYBACK_PLOX_',

        /** Enumeración de estilos de alerta */
        alertStylesSettings: {
            icon_only: 'iconOnly',
            text_only: 'textOnly',
            icon_and_text: 'iconText',
            no_icon_no_text: 'hidden'
        },

        /** Clave para guardar configuraciones del usuario en GM_* */
        userSettingsKey: 'YT_PLAYBACK_PLOX_userSettings',

        /** Valores predeterminados para configuraciones del usuario */
        defaultSettings: {
            showNotifications: true,
            minSecondsBetweenSaves: 1,
            showFloatingButtons: false,
            saveRegularVideos: true, // Por defecto, guardar videos regulares
            saveShorts: false, // Por defecto, no guardar Shorts
            saveLiveStreams: false, // Por defecto, no guardar directos
            language: 'es', // Idioma predeterminado
            alertStyle: 'iconText', // Estilo de alerta predeterminado
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
    // 🌐 Funciones de traducción
    // MARK: 🌐 Funciones de traducción
    // ────────────────

    let currentLanguage = 'es'; // Idioma predeterminado

    // Función para obtener el texto traducido
    function t(key, params = {}) {
        if (!TRANSLATIONS[currentLanguage] || !TRANSLATIONS[currentLanguage][key]) {
            // Si no hay traducción, intentar con inglés
            if (TRANSLATIONS.en && TRANSLATIONS.en[key]) {
                return replaceParams(TRANSLATIONS.en[key], params);
            }
            // Si no hay ni en inglés, devolver la clave
            return key;
        }
        return replaceParams(TRANSLATIONS[currentLanguage][key], params);
    }

    // Función para reemplazar parámetros en las traducciones
    function replaceParams(text, params) {
        if (!text || typeof text !== 'string') return text;
        return text.replace(/{(\w+)}/g, (match, param) => {
            return params[param] !== undefined ? params[param] : match;
        });
    }

    // Función para cambiar el idioma
    async function setLanguage(lang) {
        if (!TRANSLATIONS[lang]) {
            warn('setLanguage', `Language '${lang}' not supported`);
            return false;
        }

        currentLanguage = lang;

        // Guardar preferencia de idioma
        const settings = await Settings.get();
        settings.language = lang;
        await Settings.set(settings);

        return true;
    }

    // Función para detectar el idioma del navegador
    function detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0]; // Obtener solo el código de idioma principal

        // Verificar si el idioma está soportado
        if (TRANSLATIONS[langCode]) return langCode;

        // Si no, devolver el idioma predeterminado
        return CONFIG.defaultSettings.language;
    }

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
  flex-shrink: 0;
}

.ypp-filters {
  padding: var(--spacing-md) var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  flex-shrink: 0;
}

.ypp-footer {
  padding: var(--spacing-md) var(--spacing-lg);
  border-top: 2px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  z-index: 10;
  flex-shrink: 0;
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
    width: 32px;
    height: 32px;
    flex-shrink: 0;
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

/* =========================
   Selector de Idioma con Banderas
========================= */

.ypp-language-selector {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ypp-language-flag {
  font-size: 1.2em;
  margin-right: 5px;
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
                conError('Storage', `Storage.get: Error al parsear la clave "${key}"`, error);
                return null;
            }
        },
        set(key, value) {
            try {
                const serialized = JSON.stringify(value);
                localStorage.setItem(`${CONFIG.storagePrefix}${key}`, serialized);
            } catch (error) {
                conError('Storage', `Storage.set: Error al guardar la clave "${key}"`, error);
            }
        },
        del(key) {
            try {
                localStorage.removeItem(`${CONFIG.storagePrefix}${key}`);
            } catch (error) {
                conError('Storage', `Storage.del: Error al eliminar la clave "${key}"`, error);
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
                conError('Settings', 'Error al cargar configuración del usuario:', error);
                return { ...CONFIG.defaultSettings };
            }
        },
        async set(settings) {
            try {
                const serialized = JSON.stringify(settings);
                await GM_setValue(CONFIG.userSettingsKey, serialized);
            } catch (error) {
                conError('Settings', 'Error al guardar configuración del usuario:', error);
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

    // Función para asignar HTML de forma segura para compatibilidad con Trusted Types (Chrome)
    function setInnerHTML(element, html) {
        if (window.trustedTypes && window.trustedTypes.createPolicy) {
            try {
                const policy = window.trustedTypes.createPolicy('youtube-playback-plox', {
                    createHTML: (string) => string
                });
                element.innerHTML = policy.createHTML(html);
            } catch (e) {
                // Si la creación de la política falla, usar innerHTML directamente
                element.innerHTML = html;
            }
        } else {
            // Si TrustedHTML no está soportado, usar innerHTML
            element.innerHTML = html;
        }
    }

    // Función para crear elementos con opciones
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
        if (html) setInnerHTML(el, html);
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
    // 📢 Time Display
    // MARK: 📢 Time Display
    // ────────────────

    let timeDisplay;

    // Inicializa la visualización de tiempo en la barra de reproducción
    function initTimeDisplay() {
        const timeContainer = document.querySelector('.ytp-time-contents');
        log('initTimeDisplay', 'timeContainer encontrado:', timeContainer);
        if (!timeContainer || timeDisplay) return;

        timeDisplay = document.createElement('span');
        Object.assign(timeDisplay.style, {
            display: 'inline-block',
            marginLeft: '10px',
            color: '#0f9d58',
            fontWeight: 'bold'
        });
        timeContainer.appendChild(timeDisplay);

        log('initTimeDisplay', 'Creada visualización de tiempo en la barra de reproducción');
    }

    /**
    * Actualiza el mensaje en la barra de reproducción
    * @param {string} message - Mensaje a mostrar
    * @param {number} duration - Duración de mensajes temporales
    * @param {object} options - Opciones: keep
    */
    function updatePlaybackBarMessage(message, duration = 2500, options = {}) {
        log('updatePlaybackBarMessage', 'Llamado con:', { message, duration, options });
        if (!timeDisplay) initTimeDisplay();

        if (options.keep) { // Mensaje fijo (Solo se cambia texto)
            timeDisplay.textContent = message;
            log('updatePlaybackBarMessage', 'Mensaje fijo en barra actualizado', message);
        } else { // Mensaje temporal
            timeDisplay.textContent = message;
            setTimeout(() => {
                if (timeDisplay && timeDisplay.textContent === message) {
                    timeDisplay.textContent = '';
                    log('updatePlaybackBarMessage', 'Mensaje temporal eliminado de la barra', message);
                }
            }, duration);
        }
    }

    // ───────────────
    // 🍞 Toasts 
    // MARK: 🍞 Toasts
    // ───────────────

    const toastTimeouts = new WeakMap();

    function createToastContainer() {
        let container = document.querySelector('.ypp-toast-container');
        if (!container) {
            container = createElement('div', { className: 'ypp-toast-container' });
            document.body.appendChild(container);

            const updateVisibility = () => {
                container.style.display = document.fullscreenElement ? 'none' : 'flex';
            };
            document.addEventListener('fullscreenchange', updateVisibility);
            window.addEventListener('yt-navigate-finish', updateVisibility);
            updateVisibility();
            log('createToastContainer', 'Contenedor de toasts creado');
        }
        return container;
    }

    function fadeAndRemoveToast(toast, duration) {
        const timeoutId = setTimeout(() => {
            toast.style.opacity = '0';
            toast.addEventListener('transitionend', () => toast.remove(), { once: true });
            toastTimeouts.delete(toast);
        }, duration);
        toastTimeouts.set(toast, timeoutId);
    }

    function showFloatingToast(message, duration = 2500, options = {}) {
        const container = createToastContainer();
        let toast;

        if (options.persistent) {
            // Reutiliza el mismo toast persistente
            toast = container.querySelector('.ypp-toast.persistent');
            if (!toast) {
                toast = createElement('div', { className: 'ypp-toast persistent' });
                container.appendChild(toast);
                requestAnimationFrame(() => (toast.style.opacity = '1'));
            } else {
                setInnerHTML(toast, ''); // Limpiar contenido previo
            }
        } else {
            // Crea un toast independiente para apilarse
            toast = createElement('div', { className: 'ypp-toast' });
            if (options.action) toast.classList.add('has-action');
            container.appendChild(toast);
            requestAnimationFrame(() => (toast.style.opacity = '1'));
        }

        // Contenido del toast
        const messageSpan = createElement('span', { text: message });
        toast.appendChild(messageSpan);

        if (options.action) {
            const actionBtn = createElement('button', {
                className: 'ypp-toast-action',
                text: options.action.label,
                onClickEvent: () => {
                    if (typeof options.action.callback === 'function') {
                        options.action.callback();
                    }
                    // Quita el toast tan pronto se haga clic en la acción
                    fadeAndRemoveToast(toast, 0);
                },
                atribute: { 'aria-label': options.action.label, type: 'button' }
            });
            toast.appendChild(actionBtn);
        }

        // Control del tiempo de vida
        if (!options.keep) fadeAndRemoveToast(toast, duration);

        log('showFloatingToast', 'Toast mostrado', { message, options });
    }

    // ────────────────
    // 🛠 Create Modal
    // MARK: 🛠 Create Modal
    // ────────────────

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
            atribute: { 'aria-label': t('close'), title: t('close'), type: 'button' },
            onClickEvent: closeModal
        });
        header.appendChild(titleEl);
        header.appendChild(closeBtn);
        const body = createElement('div', { className: 'ypp-modalBody' });
        if (typeof content === 'string') {
            setInnerHTML(body, content.replace(/\u200B/g, ''));
        } else {
            body.appendChild(content);
        }
        modal.appendChild(header);
        modal.appendChild(body);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
        return { host: overlay, content: modal, close: closeModal };
    }

    // ────────────────
    // 📢 Notify Seek or Progress
    // MARK: 📢 Notify Seek or Progress
    // ────────────────

    let cachedSettings = null;

    /**
     * Notifica al usuario sobre el progreso guardado o la posición de seek (reanudación)
     * @param {number} time - Tiempo en segundos
     * @param {string} context - 'seek' o 'progress'
     * @param {object} options - Opciones adicionales
     *      @param {boolean} options.isForced - Indica si el seek fue forzado
     *      @param {string} options.videoType - 'normal' o 'short'
     * 
     */
    function notifySeekOrProgress(time, context = 'progress', options = {}) {
        log('notifySeekOrProgress', 'Llamado con:', { time, context, options });
        if (!cachedSettings) {
            Settings.get().then((settings) => {
                cachedSettings = settings;
            })
                .catch((error) => {
                    conError('notifySeekOrProgress', 'Error al cargar configuración para notificaciones (usaran defaults):', error);
                    cachedSettings = CONFIG.defaultSettings;
                });
            log('notifySeekOrProgress', 'Cargando configuración para notificaciones...');
            return;
        }

        if (cachedSettings.showNotifications === false || cachedSettings.alertStyle === 'hidden') {
            log('notifySeekOrProgress', 'Notificaciones deshabilitadas o estilo oculto, no se muestra mensaje');
            return;
        }

        const { isForced = false, videoType = 'normal' } = options;
        const timeStr = formatTime(time);

        let icon = '';
        let text = '';

        // Preparar los textos según el contexto
        if (context === 'seek') {
            icon = isForced ? '⏱️📌 ' : '⏯';
            text = `${t(isForced ? 'alwaysStartFrom' : 'resumedAt')}: ${timeStr}`;
        } else {
            icon = '💾';
            text = `${t('progressSaved')}: ${timeStr}`;
        }

        // Aplicar estilo según alertStyle
        let message = '';
        switch (cachedSettings.alertStyle) {
            case 'iconOnly':
                message = `${icon} ${timeStr}`;
                break;
            case 'textOnly':
                message = text;
                break;
            case 'iconText':
            default:
                message = `${icon} ${text}`;
                break;
        }

        // Mostrar en toast o en barra de reproducción
        if (videoType === 'short') {
            showFloatingToast(message, 2500, { persistent: true, keep: true });
        } else {
            //remover toasts de shorts si existen
            const container = document.querySelector('.ypp-toast-container');
            if (container) {
                const toasts = container.querySelectorAll('.ypp-toast');
                toasts.forEach(toast => {
                    if (toast.textContent.includes('⏯') || toast.textContent.includes('⏱️📌') || toast.textContent.includes('💾')) {
                        toast.remove();
                    }
                });
            }

            const keep = context === 'seek'; // Mensaje fijo solo si es seek
            updatePlaybackBarMessage(message, 2500, { keep });
        }
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
                        conError('youtube.com/oembed', 'Error parsing playlist info:', e);
                        playlistNameCache.set(playlistId, playlistId);
                        resolve(playlistId);
                    }
                },
                onerror: function () {
                    conError('youtube.com/oembed', 'Error fetching playlist info');
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
        const author = vd.author || t('unknown');
        const duration = player.getDuration?.() || 0;
        let thumb = `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`;

        if (vd.thumbnail_url && typeof vd.thumbnail_url === 'object' && vd.thumbnail_url.url) {
            thumb = vd.thumbnail_url.url;
        }

        let views = t('notAvailable');
        const viewCount = document.querySelector('.view-count');
        if (viewCount) views = viewCount.textContent.trim();

        const savedAt = Date.now();

        log('getVideoInfo', 'Información del video obtenida:', { title, author, thumb, views, savedAt, duration });
        return { title, author, thumb, views, savedAt, duration };
    }

    const updateStatus = (player, videoEl, type, plId) => {
        const vid = player.getVideoData()?.video_id;
        if (!vid) return;

        const currentTime = videoEl.currentTime;
        const duration = videoEl.duration;
        if (!duration || isNaN(currentTime) || currentTime < 1 || !isFinite(duration)) return;

        const now = Date.now();
        const info = getVideoInfo(player, vid);
        const finishThreshold = Math.min(duration * 0.01, CONFIG.staticFinishSec);
        const isFinished = duration - currentTime < finishThreshold;

        function saveOrDelete(saveKey, saveData) {
            if (saveData) Storage.set(saveKey, saveData);
            else Storage.del(saveKey);
        }

        // Guardar progreso individual SIEMPRE bajo vid
        const singleData = isFinished ? null : {
            timestamp: currentTime,
            lastUpdated: now,
            videoType: type,
            ...info
        };
        saveOrDelete(vid, singleData);

        // Si existe plId (playlist normal o Mix), mantener también estructura de playlist
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
        }

        log('updateStatus', `Progreso ${isFinished ? 'eliminado' : 'guardado'} para video ${vid}:`, { currentTime, duration, isFinished, plId });
        notifySeekOrProgress(currentTime, 'progress', { videoType: type });
    };

    const resumePlayback = async (player, vid, videoEl, inPlaylist, plId, fromPlId, type) => {
        const isDynamicMix = plId && plId.startsWith('RD');
        const key = (inPlaylist && !isDynamicMix) ? plId : vid;
        const data = Storage.get(key);

        log('resumePlayback', 'Llamado con:', { vid, inPlaylist, plId, fromPlId, type, key, isDynamicMix, data });

        if (!data) {
            log('resumePlayback', '⚠️ No se encontró información para reanudar');
            return;
        }

        // Para Mixes RD, tratar como video suelto
        let lastTime, forceTime;
        if (isDynamicMix) {
            lastTime = data.timestamp;
            forceTime = data.forceResumeTime;
        } else {
            lastTime = inPlaylist ? data.videos?.[vid]?.timestamp : data.timestamp;
            forceTime = inPlaylist ? data.videos?.[vid]?.forceResumeTime : data.forceResumeTime;
        }

        const resumeId = vid;
        const timeToSeek = forceTime > 0 ? forceTime : lastTime;

        log('resumePlayback', `🎬 Reanudando video ${resumeId} en ${timeToSeek}s (forceTime: ${forceTime}, key: ${key})`);

        if (!timeToSeek || timeToSeek <= 1) {
            log('resumePlayback', '⏩ No hay tiempo válido para reanudar');
            return;
        }

        const waitForPlayer = () => {
            if (player.getDuration() > 0) {
                applySeek(player, videoEl, timeToSeek, {
                    bypassMinDiff: true,
                    isForced: forceTime > 0,
                    type
                });
            } else {
                setTimeout(waitForPlayer, 150);
            }
        };
        waitForPlayer();
    };

    // ────────────────
    // ▶ Process Video
    // MARK: ▶ Process Video
    // ────────────────

    let isPlayerSeeking = false; // Para mensaje persistente
    let currentPlayer = null;
    let currentVideoEl = null;
    let lastPlaylistId = null;

    let lastProcessedVideoId = null;
    let lastProcessedVideoType = null;

    let lastUrl = ''; // Rastrear la última URL procesada
    let lastSaveTime = 0; // Para controlar la frecuencia de guardado
    let lastResumeId = null;
    let currentlyProcessingVideoId = null;

    const processVideo = async (container, player, videoEl) => {
        if (!container || !player || !videoEl) {
            warn('processVideo', 'Container, player o videoEl no proporcionados. Abortando.');
            return;
        }

        const playerVid = player.getVideoData()?.video_id || container.getVideoData?.()?.video_id;
        if (!playerVid) {
            warn('processVideo', 'No se pudo obtener video_id del reproductor. Abortando.');
            return;
        }

        // Si ya estamos procesando este video, salimos para evitar duplicados.
        if (currentlyProcessingVideoId === playerVid) {
            log('processVideo', `El video ${playerVid} ya está siendo procesado. Ignorando.`);
            return;
        }

        // Marcamos este video como "en proceso"
        currentlyProcessingVideoId = playerVid;

        try {
            const currentUrl = location.href;
            const url = new URL(currentUrl);
            const urlVid = url.searchParams.get('v');
            const plId = url.searchParams.get('list');

            if (urlVid && urlVid !== playerVid) return;

            // Detectar tipo
            const isShort = url.pathname.startsWith('/shorts/') ||
                (container.id === 'shorts-player' && container.closest('ytd-reel-video-renderer')) ||
                (videoEl.classList.contains('reel-video-player-element') && container.closest('ytd-reel-video-renderer'));

            let type = 'regular';
            if (isShort) type = 'short';
            else if ((player.getDuration?.() || 0) === 0) type = 'live';

            // Revisar configuración
            if ((type === 'regular' && !cachedSettings.saveRegularVideos) ||
                (type === 'short' && !cachedSettings.saveShorts) ||
                (type === 'live' && !cachedSettings.saveLiveStreams)) {
                return;
            }

            // Evitar reanudar mismo short varias veces
            if (playerVid !== lastResumeId) {
                log('processVideo', 'Procesando video:', { playerVid, type, plId });
                const savedData = Storage.get(playerVid);
                if (savedData?.timestamp > 0) {
                    log('processVideo', 'Progreso guardado encontrado para este video:', savedData);
                    resumePlayback(player, playerVid, videoEl, Boolean(plId), plId, lastPlaylistId, type);
                    lastResumeId = playerVid;
                }
            }

            // Handler para guardar progreso
            const handler = () => {
                if (isPlayerSeeking) {
                    isPlayerSeeking = false;
                    if (timeDisplay) timeDisplay.textContent = '';
                }

                const now = Date.now();
                const minInterval = (cachedSettings.minSecondsBetweenSaves || 1) * 1000;
                if (now - lastSaveTime >= minInterval) {
                    updateStatus(player, videoEl, type, plId);
                    lastSaveTime = now;
                }
            };

            // Evitar duplicar listener
            videoEl.removeEventListener('timeupdate', handler);
            videoEl.addEventListener('timeupdate', handler);

            // Actualizar estados
            currentPlayer = player;
            currentVideoEl = videoEl;
            lastProcessedVideoId = playerVid;
            lastProcessedVideoType = type;
            lastUrl = currentUrl;
            lastPlaylistId = plId;

        } catch (error) {
            conError('processVideo', `Ocurrió un error inesperado al procesar el video ${playerVid}:`, error);
        } finally {
            // Usamos un timeout para limpiar el estado, asegurándonos de que el ID coincida
            // para no limpiar el estado de un video que empezó a procesarse más tarde.
            currentlyProcessingVideoId = null;
        }
    };

    // ────────────────
    // ⏯ Seek
    // MARK: ⏯ Seek
    // ────────────────

    const SEEK_TIMEOUT = 3000;

    const applySeek = async (player, videoEl, time, options = {}) => {
        const { bypassMinDiff = false, isForced = false, type = 'normal' } = options;

        log('applySeek', `Iniciando. Hacia: ${time}s, Forzado: ${isForced}, BypassMinDiff: ${bypassMinDiff}`);

        if (!player || !videoEl) {
            warn('applySeek', 'Player o videoEl no proporcionados. Abortando.');
            return;
        }
        if (typeof time !== 'number' || isNaN(time)) {
            warn('applySeek', 'Tiempo de seek inválido:', time, '. Abortando.');
            return;
        }

        // Evitar seeks innecesarios, PERO SOLO SI NO SE INDICA LO CONTRARIO
        if (!bypassMinDiff) {
            try {
                const current = player.getCurrentTime();
                const diff = Math.abs(current - time);
                if (diff <= CONFIG.minSeekDiff) {
                    log('applySeek', `Diferencia de tiempo (${diff}s) es mínima. Omitiendo seek.`);
                    return;
                }
                log('applySeek', `Diferencia de tiempo (${diff}s) es significativa. Procederá con el seek.`);
            } catch (e) {
                conError('applySeek', 'Error al obtener el tiempo actual:', e);
                return;
            }
        } else {
            log('applySeek', 'Seek con bypass activado. Omitiendo comprobación de diferencia mínima.');
        }

        // Seek asíncrono
        log('applySeek', 'Iniciando operación de seek asíncrona...');
        await new Promise((resolve) => {
            let timeoutId;
            const cleanup = () => {
                clearTimeout(timeoutId);
                videoEl.removeEventListener('seeked', onSeeked);
            };

            const onSeeked = () => {
                log('applySeek', 'Evento "seeked" recibido. Seek completado con éxito.');
                cleanup();
                resolve();
            };

            timeoutId = setTimeout(() => {
                warn('applySeek', `Timeout de ${SEEK_TIMEOUT}ms alcanzado. El evento 'seeked' no se disparó.`);
                cleanup();
                resolve();
            }, SEEK_TIMEOUT);

            videoEl.addEventListener('seeked', onSeeked, { once: true });

            try {
                log('applySeek', `Llamando a player.seekTo(${time}, true).`);
                player.seekTo(time, true);
            } catch (seekError) {
                conError('applySeek', 'Falló la ejecución de player.seekTo:', seekError);
                cleanup();
                resolve();
            }
        });

        // Mostrar mensaje en UI
        const videoType = type === 'short' ? 'short' : 'normal';
        notifySeekOrProgress(time, 'seek', { isForced, videoType });

        log('applySeek', 'applySeek completado.');
    };

    // ────────────────
    // 📂 Sort UI
    // MARK: 📂 Sort UI
    // ────────────────

    function createSortSelector(currentValue, onChange) {
        const wrapper = document.createElement('div');
        const label = createElement('label', { className: 'ypp-label', text: `${t('sortBy')} :`, atribute: { for: 'sort-selector' } });
        const select = createElement('select', {
            className: 'ypp-input', id: 'sort-selector', html: `
        <option value="recent" ${currentValue === 'recent' ? 'selected' : ''}>📅 ${t('mostRecent')}</option>
        <option value="oldest" ${currentValue === 'oldest' ? 'selected' : ''}>📆 ${t('oldest')}</option>
        <option value="title" ${currentValue === 'title' ? 'selected' : ''}>🔤 ${t('titleAZ')}</option>`
        });
        select.onchange = () => onChange(select.value);
        label.appendChild(select);
        wrapper.appendChild(label);
        return wrapper;
    }

    // ────────────────
    // 📂 Filters UI
    // MARK: 📂 Filters UI
    // ────────────────

    function createFilterSelector(currentValue, onChange) {
        const wrapper = document.createElement('div');
        const label = createElement('label', { className: 'ypp-label', text: `${t('filterByType')} :`, atribute: { for: 'filter-selector' } });
        const select = createElement('select', {
            className: 'ypp-input', id: 'filter-selector', html: `
        <option value="all" ${currentValue === 'all' ? 'selected' : ''}>🔎 ${t('all')}</option>
        <option value="regular" ${currentValue === 'regular' ? 'selected' : ''}>▶️ ${t('videos')}</option>
        <option value="short" ${currentValue === 'short' ? 'selected' : ''}>📱 ${t('shorts')}</option>
        <option value="live" ${currentValue === 'live' ? 'selected' : ''}>🔴 ${t('liveStreams')}</option>
        <option value="playlist" ${currentValue === 'playlist' ? 'selected' : ''}>📁 ${t('playlist')}</option>`
        });
        select.onchange = () => onChange(select.value);
        label.appendChild(select);
        wrapper.appendChild(label);
        return wrapper;
    }

    function createSearchInput(currentValue, onChange) {
        const wrapper = createElement('div');
        const input = createElement('input', {
            className: 'ypp-input',
            id: 'search-input',
            atribute: {
                'aria-label': t('searchByTitleOrAuthor'),
                title: t('searchByTitleOrAuthor'),
                placeholder: `🔍 ${t('searchByTitleOrAuthor')}`,
                type: 'text'
            }
        });
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
            warn('getSavedFilters', 'Error parsing saved filters:', e);
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
        setInnerHTML(listContainer, ''); // Limpiar contenido previo
        if (keys.length === 0) {
            const p = createElement('p', { className: 'ypp-emptyMsg', text: t('noSavedVideos') });
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
                        text: `📁 ${t('playlistPrefix')}: ${item.playlistTitle}`,
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
        }
        if (videosContainer) {
            videosContainer.remove();
            videosContainer = null;
        }
        if (listContainer) {
            listContainer.remove();
            listContainer = null;
        }
        document.body.style.overflow = '';
    }

    // ────────────────
    // 🔘 Floating Button
    // MARK: 🔘 Floating Button
    // ────────────────

    const createFloatingButtons = async () => {
        const settings = await Settings.get();

        if (!settings.showFloatingButtons) return;

        const wrapper = createElement('div', { className: 'ypp-floatingBtnContainer' });
        const btnConfig = createElement('div', { className: 'ypp-btn', text: `⚙️ ${t('youtubePlaybackPlox')}`, onClickEvent: showSettingsUI });
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

    // ────────────────
    // 📂 Show Saved Videos List
    // MARK: 📂 Show Saved Videos List
    // ────────────────

    async function showSavedVideosList() {
        if (!videosOverlay) {
            const saved = await getSavedFilters();

            currentOrderBy = saved.orderBy ?? CONFIG.defaultFilters.orderBy;
            currentFilterBy = saved.filterBy ?? CONFIG.defaultFilters.filterBy;
            currentSearchQuery = saved.searchQuery ?? CONFIG.defaultFilters.searchQuery;

            videosOverlay = createElement('div', { className: 'ypp-overlay' });
            videosContainer = createElement('div', { className: 'ypp-container' });
            listContainer = createElement('div', { id: 'video-list-container' });

            const header = createElement('div', { className: 'ypp-header' });
            const title = createElement('h2', { text: t('youtubePlaybackPlox') });
            const closeBtn = createElement('button', {
                className: 'ypp-btn',
                text: '✖',
                atribute: { 'aria-label': t('close') },
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
                showFloatingToast(`📤 ${t('dataExported')}`);
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
                            showFloatingToast(`📥 ${t('itemsImported', { count })}`);
                            closeModalVideos();
                            showSavedVideosList();
                        } catch (err) {
                            conError('importDataFromFile', 'Error al importar datos:', err);
                            showFloatingToast(`⚠️ ${t('importError')}`);
                        } finally {
                            inputFile.value = '';
                        }
                    });
                    document.body.appendChild(inputFile);
                }
                inputFile.click();
            };
            const btnExport = createElement('button', { className: 'ypp-btn', text: `📤 ${t('export')}`, onClickEvent: exportDataToFile });
            const btnImport = createElement('button', { className: 'ypp-btn', text: `📥 ${t('import')}`, onClickEvent: importDataFromFile });
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
        const author = createElement('div', { className: 'ypp-author', text: info.author || t('unknown') });
        const views = createElement('div', { className: 'ypp-views', text: info.views || t('notAvailable') });

        let timestampText = `${t('progress')} ${videoTime}`;
        if (info.forceResumeTime > 0) {
            timestampText = `⏱️ ${t('alwaysStartFrom')}: ${formatTime(info.forceResumeTime)} ${t('locked')}`;
        }
        const timestamp = createElement('div', { className: `ypp-timestamp ${info.forceResumeTime > 0 ? 'forced' : ''}`, text: timestampText });

        infoDiv.appendChild(titleLink);
        infoDiv.appendChild(author);
        infoDiv.appendChild(views);
        infoDiv.appendChild(timestamp);
        if (percent !== null) {
            const progressInfo = createElement('div', { className: 'ypp-progressInfo', text: `📊 ${percent}% ${t('percentWatched')} (${formatTime(remaining)} ${t('remaining')})` });
            infoDiv.appendChild(progressInfo);
        }
        wrapper.appendChild(infoDiv);

        const buttonContainer = createElement('div', { className: 'ypp-containerButtonsTime' });

        const btnForceTime = createElement('button', {
            className: 'ypp-btn ypp-btn-small',
            text: '⏱️',
            atribute: { title: info.forceResumeTime ? t('changeOrRemoveStartTime', { time: formatTime(info.forceResumeTime) }) : t('setStartTime') },
            onClickEvent: () => {
                const promptText = info.forceResumeTime
                    ? `${t('enterStartTimeOrEmpty')}:`
                    : `${t('enterStartTime')}:`;
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
                            showFloatingToast(`✅ ${t('startTimeSet')} ${formatTime(timeSec)}`);
                        } else {
                            delete playlist.videos[videoId].forceResumeTime;
                            showFloatingToast(`🔓 ${t('fixedTimeRemoved')}`);
                        }
                        Storage.set(playlistKey, playlist);
                    }
                } else {
                    const data = Storage.get(videoId);
                    if (data) {
                        if (timeSec > 0) {
                            data.forceResumeTime = timeSec;
                            showFloatingToast(`✅ ${t('startTimeSet')} ${formatTime(timeSec)}`);
                        } else {
                            delete data.forceResumeTime;
                            showFloatingToast(`🔓 ${t('fixedTimeRemoved')}`);
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
            atribute: { title: t('deleteEntry') },
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
                showFloatingToast(`🗑️ "${title}" ${t('itemDeleted')}`, 5000, {
                    action: {
                        label: t('undo'),
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

        // Selector de idioma
        const languageGroup = createElement('div');
        const languageLabel = createElement('label', {
            className: 'ypp-label',
            text: `${t('language')}:`,
            atribute: { for: 'language-selector' }
        });

        // Crear el selector con banderas
        const languageSelect = createElement('select', {
            className: 'ypp-input ypp-language-selector',
            id: 'language-selector',
            html: Object.keys(TRANSLATIONS).map(lang => {
                const flag = LANGUAGE_FLAGS[lang] || '🌐'; // Usar un emoji genérico si no hay bandera
                const langName = lang.toUpperCase();
                return `<option value="${lang}" ${settings.language === lang ? 'selected' : ''}>${flag} ${langName}</option>`;
            }).join('')
        });

        languageLabel.appendChild(languageSelect);
        languageGroup.appendChild(languageLabel);
        content.appendChild(languageGroup);

        // Selector de estilo de alerta
        const alertStyleGroup = createElement('div');
        const alertStyleLabel = createElement('label', {
            className: 'ypp-label',
            text: `${t('alertStyle')}:`,
            atribute: { for: 'alert-style-selector' }
        });

        const alertStyleSelect = createElement('select', {
            className: 'ypp-input',
            id: 'alert-style-selector',
            html: `
                <option value="iconText" ${settings.alertStyle === 'iconText' ? 'selected' : ''}>${t('alertIconText')}</option>
                <option value="iconOnly" ${settings.alertStyle === 'iconOnly' ? 'selected' : ''}>${t('alertIconOnly')}</option>
                <option value="textOnly" ${settings.alertStyle === 'textOnly' ? 'selected' : ''}>${t('alertTextOnly')}</option>
                <option value="hidden" ${settings.alertStyle === 'hidden' ? 'selected' : ''}>${t('alertHidden')}</option>
            `
        });
        alertStyleLabel.appendChild(alertStyleSelect);
        alertStyleGroup.appendChild(alertStyleLabel);
        content.appendChild(alertStyleGroup);

        const activationGroup = createElement('div');
        const activationLabel = createElement('div', { text: `${t('enableSavingFor')}:`, style: 'font-weight: bold; margin-bottom: 8px;' });
        activationGroup.appendChild(activationLabel);

        const types = [
            { key: 'saveRegularVideos', label: `▶️ ${t('regularVideos')}` },
            { key: 'saveShorts', label: `📱 ${t('shorts')}` },
            { key: 'saveLiveStreams', label: `🔴 ${t('liveStreams')}` }
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
            className: 'ypp-label', text: t('showNotifications'), atribute: { for: 'toggleNotif' },
        });
        const toggleNotif = createElement('input', {
            id: 'toggleNotif',
            atribute: { title: t('showNotifications'), for: 'toggleNotif', type: 'checkbox' },
            props: { checked: settings.showNotifications }
        });
        notifLabel.appendChild(toggleNotif);
        notifGroup.appendChild(notifLabel);
        content.appendChild(notifGroup);

        const intervalGroup = document.createElement('div');
        const intervalLabel = createElement('label', {
            className: 'ypp-label',
            text: `${t('minSecondsBetweenSaves')}: `,
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
            atribute: { title: t('showFloatingButton'), for: 'toggleButtons' },
            text: ` ${t('showFloatingButton')}`
        });
        const toggleButtons = createElement('input', {
            id: 'toggleButtons',
            atribute: { title: t('showFloatingButton'), type: 'checkbox' },
            props: { checked: settings.showFloatingButtons }
        });
        buttonsLabel.appendChild(toggleButtons);
        buttonsGroup.appendChild(buttonsLabel);
        content.appendChild(buttonsGroup);

        const buttonGroup = createElement('div', { className: 'ypp-btnGroup' });
        const saveBtn = createElement('button', {
            className: 'ypp-btn ypp-save-button',
            id: 'saveBtn',
            text: t('save'),
            onClickEvent: async () => {
                const newSettings = {
                    showNotifications: toggleNotif.checked,
                    minSecondsBetweenSaves: Math.max(1, parseInt(intervalInput.value, 10)),
                    showFloatingButtons: toggleButtons.checked,
                    saveRegularVideos: document.getElementById('saveRegularVideos').checked,
                    saveShorts: document.getElementById('saveShorts').checked,
                    saveLiveStreams: document.getElementById('saveLiveStreams').checked,
                    language: languageSelect.value,
                    alertStyle: alertStyleSelect.value,
                };
                await Settings.set(newSettings);
                await setLanguage(languageSelect.value);
                showFloatingToast(`✅ ${t('configurationSaved')}`);
                location.reload();
            }
        });
        const viewBtn = createElement('button', {
            className: 'ypp-btn ypp-btn-outlined',
            id: 'viewSavedBtn',
            text: `📼 ${t('savedVideos')}`,
            onClickEvent: () => {
                host.remove();
                showSavedVideosList();
            }
        });
        buttonGroup.appendChild(viewBtn);
        buttonGroup.appendChild(saveBtn);
        content.appendChild(buttonGroup);
        const { host } = createModal(`⚙️ ${t('settings')}`, content);
        host.classList.add('settings-modal');
    }

    // ───────────────
    // ⚙️ Menu Commands
    // MARK: ⚙️ Menu Commands
    // ────────────────

    // Función para registrar los comandos del menú con traducciones
    function registerMenuCommands() {
        GM_registerMenuCommand(`⚙️ ${t('settings')}`, showSettingsUI);
        GM_registerMenuCommand(`📋 ${t('savedVideos')}`, showSavedVideosList);
    }

    // ───────────────
    // 📢 Ad Monitor
    // MARK: 📢 Ad Monitor
    // ────────────────

    let isAdPlaying = false; // Bandera para indicar si hay un anuncio activo

    function createAdMonitor(container, { onAdStart, onAdEnd } = {}) {
        isAdPlaying = container.classList.contains('ad-showing');
        let observer = null;

        const start = () => {
            stop(); // Por si ya hay uno activo
            log('adMonitor', 'Iniciando monitoreo de anuncios.');

            observer = new MutationObserver(() => {
                const adNow = container.classList.contains('ad-showing');
                if (adNow !== isAdPlaying) {
                    isAdPlaying = adNow;
                    if (isAdPlaying) {
                        log('adMonitor', '⏹ Anuncio iniciado.');
                        onAdStart?.();
                    } else {
                        log('adMonitor', '✅ Anuncio finalizado.');
                        onAdEnd?.();
                    }
                }
            });

            observer.observe(container, { attributes: true, attributeFilter: ['class'] });
        };

        const stop = () => {
            if (observer) {
                observer.disconnect();
                observer = null;
                log('adMonitor', 'Monitoreo de anuncios detenido.');
            }
        };

        const getStatus = () => isAdPlaying;

        return { start, stop, getStatus };
    }

    // ────────────────
    // 🚀 Init
    // MARK: 🚀 Init
    // ────────────────

    const init = async () => {
        log('init', 'Iniciando carga de traducciones.');

        // Variable para rastrear si las traducciones externas se cargaron correctamente
        let externalTranslationsLoaded = false;

        try {
            const { LANGUAGE_FLAGS: loadedFlags, TRANSLATIONS: loadedTranslations } = await loadTranslations();
            // Verificar que las traducciones se cargaron correctamente
            // Comprobamos si hay más idiomas que en el fallback (es, en y fr)
            if (loadedTranslations && Object.keys(loadedTranslations).length > 3) {
                LANGUAGE_FLAGS = loadedFlags;
                TRANSLATIONS = loadedTranslations;
                externalTranslationsLoaded = true;
                log('init', 'Traducciones externas cargadas correctamente');
            } else {
                warn('init', 'Las traducciones externas no tienen suficientes idiomas, usando fallback');
                LANGUAGE_FLAGS = FALLBACK_FLAGS;
                TRANSLATIONS = FALLBACK_TRANSLATIONS;
            }
        } catch (error) {
            conError('init', 'Error al cargar traducciones:', error);
            LANGUAGE_FLAGS = FALLBACK_FLAGS;
            TRANSLATIONS = FALLBACK_TRANSLATIONS;
        }

        // Cargar configuración y establecer idioma
        cachedSettings = await Settings.get();
        await setLanguage(cachedSettings.language || detectBrowserLanguage());

        // Registrar comandos del menú con traducciones
        registerMenuCommands();

        injectStyles();

        // Variables para controlar el estado de inicialización
        let shortsInitialized = false;
        let regularPlayerInitialized = false;
        let lastUrl = location.href;
        let navigationTimeout = null;

        let isNavigating = false;
        let navigationDebounceTimeout = null;
        let playerCheckInterval = null;

        // Función para limpiar todos los observadores y estados
        const cleanup = () => {
            log('cleanup', 'Limpiando observadores y estados');

            // Limpiar intervalo de verificación del reproductor
            if (playerCheckInterval) {
                clearInterval(playerCheckInterval);
                playerCheckInterval = null;
                log('cleanup', 'Intervalo de verificación del reproductor limpiado');
            }

            if (navigationTimeout) {
                clearTimeout(navigationTimeout);
                navigationTimeout = null;
                log('cleanup', 'Timeout de navegación limpiado');
            }

            if (navigationDebounceTimeout) {
                clearTimeout(navigationDebounceTimeout);
                navigationDebounceTimeout = null;
                log('cleanup', 'Timeout de debounce de navegación limpiado');
            }

            // Resetear estados para evitar problemas al navegar de vuelta
            shortsInitialized = false;
            regularPlayerInitialized = false;
            currentlyProcessingVideoId = null;
            lastResumeId = null;
            lastProcessedVideoId = null;
            lastProcessedVideoType = null;
            lastPlaylistId = null;

            // Limpiar intervalo de verificación del reproductor (ahora usado para shorts)
            if (playerCheckInterval) {
                clearInterval(playerCheckInterval);
                playerCheckInterval = null;
                log('cleanup', 'Intervalo de sondeo de Shorts limpiado');
            }

            log('cleanup', 'Estados de inicialización reseteados');

            // Limpiar eventos del video anterior
            if (currentVideoEl) {
                currentVideoEl.removeEventListener('timeupdate', updateStatus);
                currentVideoEl = null;
            }

            currentPlayer = null;
            log('cleanup', 'Limpieza completa realizada');
        };


        // ────────────────
        // 🎥 Observer Regular Player
        // MARK: 🎥 Observer Regular Player
        // ────────────────

        function observePlayer() {
            if (location.pathname.startsWith('/shorts/')) {
                log('observePlayer', 'Página de Shorts detectada, deteniendo observación del reproductor regular.');
                return;
            }

            let attempts = 0;
            const maxAttempts = 40;
            const checkDelay = 500;
            let checkInterval = null;

            const selectors = ['#movie_player', '.html5-video-player', '.html5-video-container'];

            const findPlayer = () => {
                attempts++;
                log('observePlayer', `Intento ${attempts} de encontrar el reproductor de video.`);

                if (!location.pathname.startsWith('/watch')) {
                    log('observePlayer', 'No estamos en "/watch", deteniendo observación.');
                    stopChecking();
                    return false;
                }

                for (const selector of selectors) {
                    const container = document.querySelector(selector);
                    if (!container) continue;

                    const videoEl = container.querySelector('video');
                    if (!videoEl || videoEl.offsetWidth < 400) continue;

                    const player = getPlayerInstance(container);
                    if (player && videoEl.src) {
                        handleFoundPlayer(container, player, videoEl);
                        return true;
                    }
                }

                if (attempts >= 5) tryFallback();
                return false;
            };

            const getPlayerInstance = (container) => {
                if (window.yt?.player?.Application?.instances_?.length) {
                    return window.yt.player.Application.instances_.slice(-1)[0];
                }
                return container.player_ || container;
            };

            const handleFoundPlayer = (container, player, videoEl) => {
                log('handleFoundPlayer', 'Reproductor encontrado');

                if (!regularPlayerInitialized) {
                    log('init', 'Reproductor regular inicializado.');
                    regularPlayerInitialized = true;
                    shortsInitialized = false;
                }

                const adMonitor = createAdMonitor(container, {
                    onAdStart: () => log('⏸ Anuncio detectado, pausando acciones hasta que finalize.'),
                    onAdEnd: () => {
                        log('▶️ Anuncio finalizado, reanudando.')
                        processVideoAfterAd(player, videoEl, container);
                    }
                });

                adMonitor.start();

                // Si al iniciar el monitor ya no hay un anuncio, procesa el video.
                if (!adMonitor.getStatus()) { // O directamente: !container.classList.contains('ad-showing')
                    log('observePlayer', 'No hay anuncio al inicio, procesando video directamente.');
                    adMonitor.stop();
                    processVideoAfterAd(player, videoEl, container);
                }
            };

            const tryFallback = () => {
                const videos = document.querySelectorAll('video');
                for (const videoEl of videos) {
                    if (videoEl.offsetWidth < 400) continue;

                    if (videoEl.src?.includes('youtube.com') || videoEl.src?.includes('googlevideo.com')) {
                        log('tryFallback', 'Video encontrado mediante fallback.');
                        let container = findClosestContainer(videoEl);
                        if (container) {
                            const player = container.player_ || container;

                            const adMonitor = createAdMonitor(container, {
                                onAdStart: () => log('⏸ Anuncio detectado, pausando acciones (desde fallback) hasta que finalize.'),
                                onAdEnd: () => {
                                    clog('▶️ Anuncio finalizado, reanudando (desde fallback).')
                                    processVideoAfterAd(player, videoEl, container);
                                }
                            });

                            adMonitor.start();

                            // Si al iniciar el monitor ya no hay un anuncio, procesa el video.
                            if (!adMonitor.getStatus()) { // O directamente: !container.classList.contains('ad-showing')
                                log('observePlayer', 'No hay anuncio al inicio, procesando video directamente.');
                                adMonitor.stop();
                                processVideoAfterAd(player, videoEl, container);
                            }
                        }
                    }
                }
            };

            const findClosestContainer = (el) => {
                let depth = 0;
                while (el && el !== document.body && depth < 10) {
                    if (el.classList.contains('ad-showing')) return null;
                    if (
                        el.id === 'movie_player' ||
                        el.classList.contains('html5-video-player') ||
                        el.classList.contains('ytd-player')
                    ) return el;
                    el = el.parentElement;
                    depth++;
                }
                return null;
            };

            const tryAlternativePlayer = (container, videoEl) => {
                log('observePlayer', 'Intentando obtener el reproductor alternativo de YouTube.');
                const ytPlayer = window.yt?.player?.getPlayerByElement?.(videoEl);
                if (ytPlayer?.getVideoData) {
                    processVideo(container, ytPlayer, videoEl);
                } else {
                    const simplifiedPlayer = {
                        getVideoData: () => ({
                            video_id: new URL(videoEl.src || videoEl.currentSrc).searchParams.get('video_id') || 'unknown'
                        }),
                        getCurrentTime: () => videoEl.currentTime,
                        getDuration: () => videoEl.duration,
                        play: () => videoEl.play(),
                        pause: () => videoEl.pause()
                    };
                    processVideo(container, simplifiedPlayer, videoEl);
                }
            };

            function processVideoAfterAd(player, videoEl, container) {
                setTimeout(() => {
                    if (typeof player.getVideoData === 'function') {
                        processVideo(container, player, videoEl);
                    } else {
                        log('observePlayer', 'Reproductor no estándar, intentando alternativa.');
                        tryAlternativePlayer(container, videoEl);
                    }
                }, 300);
                stopChecking();
            }

            const stopChecking = () => {
                if (checkInterval) {
                    clearInterval(checkInterval);
                    checkInterval = null;
                }
            };

            // Observador del DOM 
            const observer = new MutationObserver(() => {
                if (findPlayer()) observer.disconnect();
            });

            observer.observe(document.body, { childList: true, subtree: true });

            // Fallback con polling por compatibilidad
            checkInterval = setInterval(() => {
                if (findPlayer()) observer.disconnect();
                else if (attempts >= maxAttempts) {
                    stopChecking();
                    observer.disconnect();
                    log('observePlayer', 'Tiempo agotado buscando el reproductor');
                }
            }, checkDelay);
        }

        // ────────────────
        // 📱 Shorts Observer
        // MARK: 📱 Shorts Observer
        // ────────────────

        // Función para observar cambios en los shorts (VERSIÓN CON SONDEO/POLLING)
        const observeShorts = () => {
            // Verificar si estamos en una página de shorts
            if (!location.pathname.startsWith('/shorts/')) {
                log('observeShorts', 'No estamos en una página de Shorts. Saliendo del observador.');
                shortsInitialized = false;
                return;
            }

            // Reutilizamos playerCheckInterval para el sondeo de shorts
            if (playerCheckInterval) {
                clearInterval(playerCheckInterval);
                playerCheckInterval = null;
            }

            log('init', 'Detectada página de Shorts, iniciando sondeo de reproductor.');
            shortsInitialized = true;
            regularPlayerInitialized = false;

            let lastSeenShortId = null;

            const checkForNewShort = () => {
                const activeShort = document.querySelector('ytd-reel-video-renderer[is-active]');
                if (!activeShort) return;

                const videoEl = activeShort.querySelector('video');
                if (!videoEl) return;

                // Intentar obtener el objeto del reproductor de forma robusta
                let player = null;
                if (window.yt && window.yt.player && window.yt.player.getPlayerByElement) {
                    player = window.yt.player.getPlayerByElement(videoEl);
                }

                if (!player) {
                    const shortPlayerEl = activeShort.querySelector('#shorts-player');
                    if (shortPlayerEl && typeof shortPlayerEl.getVideoData === 'function') {
                        player = shortPlayerEl;
                    }
                }

                if (player && !isAdPlaying) {
                    const videoData = player.getVideoData();
                    if (videoData && videoData.video_id && videoData.video_id !== lastSeenShortId) {
                        log('observeShorts', `Nuevo Short detectado por sondeo: ${videoData.video_id}`);
                        lastSeenShortId = videoData.video_id;
                        processVideo(activeShort, player, videoEl);
                    }
                }
            };

            // Verificar inmediatamente al cargar
            checkForNewShort();

            // Luego verificar periódicamente
            playerCheckInterval = setInterval(checkForNewShort, 300); // Revisar cada 300ms
        };

        const handleNavigation = () => {
            const currentUrl = location.href;
            if (currentUrl === lastUrl || isNavigating) return;

            isNavigating = true;
            log('handleNavigation', `Navegando a: ${currentUrl}`);

            if (navigationDebounceTimeout) clearTimeout(navigationDebounceTimeout);

            navigationDebounceTimeout = setTimeout(() => {
                cleanup();
                lastUrl = currentUrl;

                navigationTimeout = setTimeout(() => {
                    // Determinar qué tipo de página es y llamar al observador correcto.
                    // La lógica interna de cada observador se encargará de si debe actuar o no.
                    if (location.pathname.startsWith('/shorts/')) {
                        observeShorts();
                    } else {
                        observePlayer();
                    }

                    checkForPlaylist();
                    isNavigating = false;
                }, 300); // 300ms suele ser suficiente para que el DOM de YouTube se actualice
            }, 100);
        };

        // Función para verificar si hay una lista de reproducción en la URL
        const checkForPlaylist = () => {
            const url = new URL(location.href);
            const playlistId = url.searchParams.get('list');
            if (playlistId) {
                getCurrentPlaylistName();
            }
        };

        // Inicializar observadores para shorts y videos normales
        try {
            await Promise.all([
                Promise.resolve(observeShorts()),
                Promise.resolve(observePlayer()),
                Promise.resolve(createFloatingButtons()),
                Promise.resolve(initTimeDisplay())
            ]);

            log('init', 'Todas las funciones de inicialización completadas');
        } catch (error) {
            conError('init', 'Error durante la inicialización:', error);
        }

        // Escuchar eventos de navegación de YouTube
        window.addEventListener('yt-navigate-finish', () => {
            clearTimeout(navigationDebounceTimeout);
            navigationDebounceTimeout = setTimeout(handleNavigation, 50);
        });

        // Fallback: Escuchar cambios en el historial
        window.addEventListener('popstate', () => {
            clearTimeout(navigationDebounceTimeout);
            navigationDebounceTimeout = setTimeout(handleNavigation, 50);
        });

        // Limpiar todo cuando la página se descarga
        window.addEventListener('beforeunload', cleanup);
    };

    init();
})();