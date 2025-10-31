// ==UserScript==
// @namespace    youtube-playback-plox
// @homepage     https://github.com/Alplox/Youtube-Playback-Plox
// @supportURL   https://github.com/Alplox/Youtube-Playback-Plox/issues
// @version      0.0.6-4
// @author       Alplox
// @match        https://www.youtube.com/*
// @name         YouTube Playback Plox
// @name:en-GB      YouTube Playback Plox
// @name:en-US      YouTube Playback Plox
// @name:es-ES      YouTube Reproducción Plox
// @name:fr-FR      YouTube Lecture Plox
// @name:de-DE      YouTube Wiedergabe Plox
// @name:it-IT      YouTube Riproduzione Plox
// @name:pt-PT      YouTube Reprodução Plox
// @name:nl-NL      YouTube Afspelen Plox
// @name:pl-PL      YouTube Odtwarzanie Plox
// @name:sv-SE      YouTube Uppspelning Plox
// @name:da-DK      YouTube Afspilning Plox
// @name:no-NO      YouTube Avspilling Plox
// @name:fi-FI      YouTube Toisto Plox
// @name:cs-CZ      YouTube Přehrávání Plox
// @name:sk-SK      YouTube Prehrávanie Plox
// @name:hu-HU      YouTube Lejátszás Plox
// @name:ro-RO      YouTube Redare Plox
// @name:bg-BG      YouTube Възпроизвеждане Plox
// @name:el-GR      YouTube Αναπαραγωγή Plox
// @name:sr-SP      YouTube Репродукција Plox
// @name:hr-HR      YouTube Reprodukcija Plox
// @name:sl-SI      YouTube Predvajanje Plox
// @name:lt-LT      YouTube Grotuvas Plox
// @name:lv-LV      YouTube Atskaņošana Plox
// @name:uk-UA      YouTube Відтворення Plox
// @name:ru-RU      YouTube Воспроизведение Plox
// @name:tr-TR      YouTube Oynatma Plox
// @name:ar-EG      يوتيوب بلايباك Plox
// @name:fa-IR      پخش یوتیوب Plox
// @name:he-IL      YouTube השמעה Plox
// @name:hi-IN      YouTube प्लेबैक Plox
// @name:bn-BD      YouTube প্লেব্যাক Plox
// @name:te-IN      YouTube ప్లేబ్యాక్ Plox
// @name:ta-IN      YouTube பிளேபாக் Plox
// @name:mr-IN      YouTube प्लेबॅक Plox
// @name:zh-CN      YouTube 播放 Plox
// @name:zh-TW      YouTube 播放 Plox
// @name:zh-HK      YouTube 播放 Plox
// @name:ja-JP      YouTube 再生 Plox
// @name:ko-KR      YouTube 재생 Plox
// @name:th-TH      YouTube เล่นต่อ Plox
// @name:vi-VN      YouTube Phát lại Plox
// @name:id-ID      YouTube Pemutaran Plox
// @name:ms-MY      YouTube Main Semula Plox
// @name:tl-PH      YouTube Playback Plox
// @name:my-MM      YouTube ဖလေ့ဘက် Plox
// @name:sw-KE      YouTube Uchezesha Plox
// @name:am-ET      የYouTube ተጫዋች Plox
// @name:ha-NP      YouTube Playback Plox
// @name:ur-PK      YouTube پلے بیک Plox
// @name:ca-ES      YouTube Reproducció Plox
// @name:zu-ZA      YouTube Playback Plox
// @name:yue-HK      YouTube 播放 Plox
// @name:es-419      YouTube Reproducción Plox
// @description  Guarda y retoma automáticamente el progreso de vídeos en YouTube sin necesidad de iniciar sesión.
// @description:en-GB  Automatically saves and resumes video playback progress on YouTube without needing to log in.
// @description:en-US  Automatically saves and resumes video playback progress on YouTube without needing to log in.
// @description:es-ES  Guarda y retoma automáticamente el progreso de vídeos en YouTube sin necesidad de iniciar sesión.
// @description:fr-FR  Enregistre et reprend automatiquement la progression de la lecture des vidéos sur YouTube sans avoir besoin de se connecter.
// @description:de-DE  Speichert und setzt den Fortschritt von YouTube-Videos automatisch fort, ohne dass eine Anmeldung erforderlich ist.
// @description:it-IT  Salva e riprende automaticamente la riproduzione dei video su YouTube senza bisogno di accedere.
// @description:pt-PT  Salva e retoma automaticamente o progresso da reprodução de vídeos no YouTube sem precisar fazer login.
// @description:nl-NL  Slaat automatisch de voortgang van video's op YouTube op en hervat deze zonder in te loggen.
// @description:pl-PL  Automatycznie zapisuje i wznawia postęp odtwarzania wideo na YouTube bez logowania.
// @description:sv-SE  Sparar och återupptar automatiskt videoframsteg på YouTube utan att behöva logga in.
// @description:da-DK  Gemmer og genoptager automatisk videoafspilning på YouTube uden at logge ind.
// @description:no-NO  Lagrer og gjenopptar automatisk videofremdrift på YouTube uten å logge inn.
// @description:fi-FI  Tallentaa ja jatkaa automaattisesti YouTube-videoiden toistopistettä ilman kirjautumista.
// @description:cs-CZ  Automaticky ukládá a obnovuje postup přehrávání videí na YouTube bez nutnosti přihlášení.
// @description:sk-SK  Automaticky ukladá a obnovuje priebeh prehrávania videí na YouTube bez potreby prihlásenia.
// @description:hu-HU  Automatikusan menti és folytatja a YouTube-videók lejátszási előrehaladását bejelentkezés nélkül.
// @description:ro-RO  Salvează și reia automat progresul redării videoclipurilor pe YouTube fără a fi nevoie să te conectezi.
// @description:bg-BG  Автоматично записва и възобновява прогреса на видеото в YouTube без нужда от вход.
// @description:el-GR  Αποθηκεύει και συνεχίζει αυτόματα την πρόοδο αναπαραγωγής βίντεο στο YouTube χωρίς να χρειάζεται σύνδεση.
// @description:sr-SP  Аутоматски чува и наставља напредак репродукције видео записа на YouTube-у без пријављивања.
// @description:hr-HR  Automatski sprema i nastavlja napredak reprodukcije videozapisa na YouTubeu bez prijave.
// @description:sl-SI  Samodejno shrani in nadaljuje napredek predvajanja videoposnetkov na YouTubu brez prijave.
// @description:lt-LT  Automatiškai išsaugo ir atnaujina YouTube vaizdo įrašų atkūrimo pažangą be prisijungimo.
// @description:lv-LV  Automātiski saglabā un atsāk video atskaņošanas progresu YouTube bez pieteikšanās.
// @description:uk-UA  Автоматично зберігає та відновлює прогрес відтворення відео на YouTube без входу в акаунт.
// @description:ru-RU  Автоматически сохраняет и возобновляет прогресс воспроизведения видео на YouTube без входа в аккаунт.
// @description:tr-TR  YouTube'daki video oynatma ilerlemesini otomatik olarak kaydeder ve devam ettirir, giriş yapmaya gerek yok.
// @description:ar-EG  يقوم بحفظ واستئناف تقدم تشغيل الفيديوهات على يوتيوب تلقائيًا دون الحاجة لتسجيل الدخول.
// @description:fa-IR  پیشرفت پخش ویدیوها در یوتیوب را به صورت خودکار ذخیره و ادامه می‌دهد بدون نیاز به ورود.
// @description:he-IL  שומר ומחדש אוטומטית את התקדמות הניגון של סרטונים ביוטיוב ללא צורך בהתחברות.
// @description:hi-IN  YouTube पर वीडियो प्लेबैक की प्रगति को स्वचालित रूप से सहेजें और पुनः प्रारंभ करें, लॉगिन की आवश्यकता नहीं। 
// @description:bn-BD  YouTube ভিডিও প্লেব্যাকের অগ্রগতি স্বয়ংক্রিয়ভাবে সংরক্ষণ এবং পুনরায় শুরু করুন, লগইনের প্রয়োজন নেই। 
// @description:te-IN  YouTube వీడియో ప్లేబ్యాక్ పురోగతిని ఆటోమేటిక్‌గా సేవ్ చేసి, తిరిగి ప్రారంభిస్తుంది, లాగిన్ అవసరం లేదు.
// @description:ta-IN  YouTube வீடியோக்களின் பிளேபாக் முன்னேற்றத்தை தானாகச் சேமித்து மீண்டும் தொடங்கும், உள்நுழைவு தேவையில்லை.
// @description:mr-IN  YouTube व्हिडिओ प्लेबॅक प्रगती आपोआप जतन करते आणि पुन्हा सुरू करते, लॉगिन आवश्यक नाही.
// @description:zh-CN  自动保存并恢复 YouTube 视频的播放进度，无需登录。
// @description:zh-TW  自動儲存及繼續 YouTube 影片播放進度，無需登入。
// @description:zh-HK  自動儲存及繼續 YouTube 影片播放進度，無需登入。
// @description:ja-JP  YouTube の動画再生の進行状況を自動で保存・再開します。ログインは不要です。
// @description:ko-KR  YouTube 동영상 재생 진행 상황을 자동으로 저장하고 이어서 재생합니다. 로그인 불필요.
// @description:th-TH  บันทึกและเล่นต่อความคืบหน้าของวิดีโอบน YouTube โดยอัตโนมัติ โดยไม่ต้องเข้าสู่ระบบ.
// @description:vi-VN  Tự động lưu và tiếp tục tiến trình phát video trên YouTube mà không cần đăng nhập.
// @description:id-ID  Menyimpan dan melanjutkan kemajuan pemutaran video di YouTube secara otomatis tanpa perlu login.
// @description:ms-MY  Menyimpan dan menyambung semula kemajuan main balik video di YouTube secara automatik tanpa perlu log masuk.
// @description:tl-PH  Awtomatikong ini-save at ipinagpapatuloy ang progreso ng video playback sa YouTube nang hindi nagla-log in.
// @description:my-MM  YouTube ဗီဒီယိုဖလေ့ဘက် တိုးတက်မှုကို အလိုအလျောက် သိမ်းဆည်းပြီး ထပ်မံစတင်နိုင်သည်။ ဝင်ရောက်ရန် မလိုအပ်ပါ။
// @description:sw-KE  Hifadhi na endelea kwa kiotomatiki maendeleo ya uchezaji wa video kwenye YouTube bila kuingia.
// @description:am-ET  በYouTube ላይ የቪዲዮ መጫወቻ እድገትን በራሱ ያስቀምጣል እና ያቀጥላል በመግባት ያስፈልጋል።
// @description:ha-NP  Ajiye kuma ci gaba da ci gaban kallon bidiyo a YouTube ta atomatik ba tare da shiga ba.
// @description:ur-PK  YouTube پر ویڈیوز کی پلے بیک کی پیش رفت کو خودکار طریقے سے محفوظ اور دوبارہ شروع کریں، لاگ ان کی ضرورت نہیں۔ 
// @description:ca-ES  Desa i reprèn automàticament el progrés de reproducció de vídeos a YouTube sense necessitat d'iniciar sessió.
// @description:zu-ZA  Igcina futhi uqhubeke ngokuzenzakalelayo nokuqhubeka kwevidiyo ku-YouTube ngaphandle kokungena.
// @description:yue-HK  自動儲存及繼續 YouTube 影片播放進度，無需登入。
// @description:es-419  Guarda y reanuda automáticamente el progreso de reproducción de videos en YouTube sin necesidad de iniciar sesión.
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

/* No ISO 639-1 + ISO 3166 
// @name:yue-HK + name:es-419
// @description:yue-HK + description:es-419
*/

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
    const FALLBACK_FLAGS = {
        "en-US": {
            "emoji": "🇺🇸",
            "code": "en-US",
            "name": "English (US)"
        },
        "es-ES": {
            "emoji": "🇪🇸",
            "code": "es-ES",
            "name": "Español"
        },
        "fr": {
            "emoji": "🇫🇷",
            "code": "fr",
            "name": "Français"
        }
    };

    const FALLBACK_TRANSLATIONS = {
        "en-US": {
            "settings": "Settings",
            "savedVideos": "View saved videos",
            "close": "Close",
            "save": "Save",
            "cancel": "Cancel",
            "delete": "Delete",
            "undo": "Undo",
            "enableSavingFor": "Enable saving for",
            "regularVideos": "Regular videos",
            "shorts": "Shorts",
            "liveStreams": "Live streams",
            "showNotifications": "Show save notifications",
            "minSecondsBetweenSaves": "Minimum seconds between saves",
            "showFloatingButton": "Show floating button",
            "language": "Language",
            "alertStyle": "Alert style in playback bar",
            "alertIconText": "Icon + Text",
            "alertIconOnly": "Icon Only",
            "alertTextOnly": "Text Only",
            "alertHidden": "Hidden",
            "noSavedVideos": "No saved videos.",
            "sortBy": "Sort by",
            "mostRecent": "Most recent",
            "oldest": "Oldest",
            "titleAZ": "Title (A-Z)",
            "filterByType": "Filter by type",
            "all": "All",
            "videos": "Videos",
            "playlist": "Playlist",
            "searchByTitleOrAuthor": "Search by title or author...",
            "export": "Export",
            "import": "Import",
            "progressSaved": "Progress saved",
            "dataExported": "Data exported",
            "itemsImported": "Imported {count} items",
            "importError": "Error importing. Make sure the file is valid.",
            "configurationSaved": "Configuration saved",
            "startTimeSet": "Start time set to",
            "fixedTimeRemoved": "Fixed time removed.",
            "itemDeleted": "deleted.",
            "unknownError": "Unknown error",
            "modulesFailed": "{count} module(s) failed: {names}",
            "retryNow": "Retry now",
            "retryCompleted": "Retry completed",
            "progress": "Progress",
            "alwaysStartFrom": "Always start from",
            "resumedAt": "Resumed at",
            "locked": "🔒",
            "percentWatched": "% watched",
            "remaining": "remaining",
            "setStartTime": "Set start time",
            "changeOrRemoveStartTime": "Always start from {time} (Click to change or remove)",
            "enterStartTime": "Enter the start time you always want to use (example: 1:23)",
            "enterStartTimeOrEmpty": "Enter the start time you always want to use (example: 1:23) or leave empty to remove",
            "deleteEntry": "Delete entry",
            "youtubePlaybackPlox": "YouTube Playback Plox",
            "playlistPrefix": "Playlist",
            "unknown": "Unknown",
            "notAvailable": "N/A",
            "clearAll": "Clear all",
            "clearAllConfirm": "Are you sure you want to delete ALL saved videos? This action can be undone.",
            "allItemsCleared": "All items cleared",
            "undoClearAll": "Undo",
            "viewAllHistory": "View all history",
            "viewCompletedVideos": "View completed videos",
            "completed": "Completed",
            "completedVideos": "Completed videos"
        },
        "es-ES": {
            "settings": "Configuración",
            "savedVideos": "Ver videos guardados",
            "close": "Cerrar",
            "save": "Guardar",
            "cancel": "Cancelar",
            "delete": "Eliminar",
            "undo": "Deshacer",
            "enableSavingFor": "Activar guardado para",
            "regularVideos": "Videos regulares",
            "shorts": "Shorts",
            "liveStreams": "Directos (Livestreams)",
            "showNotifications": "Mostrar notificaciones de guardado",
            "minSecondsBetweenSaves": "Intervalo segundos mínimos entre guardados",
            "showFloatingButton": "Mostrar botón flotante",
            "language": "Idioma",
            "alertStyle": "Estilo de alertas en la barra de reproducción",
            "alertIconText": "Icono + Texto",
            "alertIconOnly": "Solo Icono",
            "alertTextOnly": "Solo Texto",
            "alertHidden": "Oculto",
            "noSavedVideos": "No hay videos guardados.",
            "sortBy": "Ordenar por",
            "mostRecent": "Más recientes",
            "oldest": "Más antiguos",
            "titleAZ": "Título (A-Z)",
            "filterByType": "Filtrar por tipo",
            "all": "Todos",
            "videos": "Videos",
            "playlist": "Playlist",
            "searchByTitleOrAuthor": "Buscar por título o autor...",
            "export": "Exportar",
            "import": "Importar",
            "progressSaved": "Progreso guardado",
            "dataExported": "Datos exportados",
            "itemsImported": "Importados {count} elementos",
            "importError": "Error al importar. Asegúrate de que el archivo sea válido.",
            "configurationSaved": "Configuración guardada",
            "startTimeSet": "Tiempo de inicio establecido en",
            "fixedTimeRemoved": "Tiempo fijo eliminado.",
            "itemDeleted": "eliminado.",
            "unknownError": "Error desconocido",
            "modulesFailed": "{count} módulo(s) fallaron: {names}",
            "retryNow": "Reintentar ahora",
            "retryCompleted": "Reintentos completados",
            "progress": "Progreso",
            "alwaysStartFrom": "Siempre desde",
            "resumedAt": "Reanudado en",
            "locked": "🔒",
            "percentWatched": "% visto",
            "remaining": "restantes",
            "setStartTime": "Establecer tiempo de inicio",
            "changeOrRemoveStartTime": "Siempre empezar en {time} (Click para cambiar o eliminar)",
            "enterStartTime": "Introduce el tiempo de inicio que siempre quieres usar (ejemplo: 1:23)",
            "enterStartTimeOrEmpty": "Introduce el tiempo de inicio que siempre quieres usar (ejemplo: 1:23) o deja vacío para eliminar",
            "deleteEntry": "Eliminar entrada",
            "youtubePlaybackPlox": "YouTube Playback Plox",
            "playlistPrefix": "Playlist",
            "unknown": "Desconocido",
            "notAvailable": "N/A",
            "clearAll": "Eliminar todo",
            "clearAllConfirm": "¿Estás seguro de que quieres eliminar TODOS los videos guardados? Esta acción se puede deshacer.",
            "allItemsCleared": "Todos los elementos eliminados",
            "undoClearAll": "Deshacer",
            "viewAllHistory": "Ver todo el historial",
            "viewCompletedVideos": "Ver videos completados",
            "completed": "Completado",
            "completedVideos": "Videos completados"
        },
        "fr": {
            "settings": "Paramètres",
            "savedVideos": "Voir les vidéos enregistrées",
            "close": "Fermer",
            "save": "Enregistrer",
            "cancel": "Annuler",
            "delete": "Supprimer",
            "undo": "Annuler",
            "enableSavingFor": "Activer la sauvegarde pour",
            "regularVideos": "Vidéos régulières",
            "shorts": "Shorts",
            "liveStreams": "Diffusions en direct",
            "showNotifications": "Afficher les notifications de sauvegarde",
            "minSecondsBetweenSaves": "Secondes minimales entre les sauvegardes",
            "showFloatingButton": "Afficher le bouton flottant",
            "language": "Langue",
            "alertStyle": "Style d'alerte dans la barre de lecture",
            "alertIconText": "Icône + Texte",
            "alertIconOnly": "Icône uniquement",
            "alertTextOnly": "Texte uniquement",
            "alertHidden": "Masqué",
            "noSavedVideos": "Aucune vidéo enregistrée.",
            "sortBy": "Trier par",
            "mostRecent": "Plus récent",
            "oldest": "Plus ancien",
            "titleAZ": "Titre (A-Z)",
            "filterByType": "Filtrer par type",
            "all": "Tous",
            "videos": "Vidéos",
            "playlist": "Playlist",
            "searchByTitleOrAuthor": "Rechercher par titre ou auteur...",
            "export": "Exporter",
            "import": "Importer",
            "progressSaved": "Progrès enregistré",
            "dataExported": "Données exportées",
            "itemsImported": "{count} éléments importés",
            "importError": "Erreur lors de l'importation. Assurez-vous que le fichier est valide.",
            "configurationSaved": "Configuration enregistrée",
            "startTimeSet": "Heure de début définie à",
            "fixedTimeRemoved": "Heure fixe supprimée.",
            "itemDeleted": "supprimé.",
            "unknownError": "Erreur inconnue",
            "modulesFailed": "{count} module(s) ont échoué : {names}",
            "retryNow": "Réessayer maintenant",
            "retryCompleted": "Réessais terminés",
            "progress": "Progrès",
            "alwaysStartFrom": "Toujours commencer à",
            "resumedAt": "Repris à",
            "locked": "🔒",
            "percentWatched": "% regardé",
            "remaining": "restant",
            "setStartTime": "Définir l'heure de début",
            "changeOrRemoveStartTime": "Toujours commencer à {time} (Cliquez pour changer ou supprimer)",
            "enterStartTime": "Entrez l'heure de début que vous souhaitez toujours utiliser (exemple: 1:23)",
            "enterStartTimeOrEmpty": "Entrez l'heure de début que vous souhaitez toujours utiliser (exemple: 1:23) ou laissez vide pour supprimer",
            "deleteEntry": "Supprimer l'entrée",
            "youtubePlaybackPlox": "YouTube Playback Plox",
            "playlistPrefix": "Playlist",
            "unknown": "Inconnu",
            "notAvailable": "N/A",
            "clearAll": "Tout effacer",
            "clearAllConfirm": "Êtes-vous sûr de vouloir supprimer TOUTES les vidéos enregistrées ? Cette action peut être annulée.",
            "allItemsCleared": "Tous les éléments effacés",
            "undoClearAll": "Annuler",
            "viewAllHistory": "Voir tout l'historique",
            "viewCompletedVideos": "Voir les vidéos terminées",
            "completed": "Terminé",
            "completedVideos": "Vidéos terminées"
        }
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
                                    conError('loadTranslations', 'No se pudieron cargar las traducciones desde el primer enlace, intentando con el segundo...');
                                    tryLoadFromUrl(TRANSLATIONS_URL_BACKUP, true);
                                } else {
                                    conError('loadTranslations', 'No se pudieron cargar las traducciones desde ningún enlace, usando fallback');
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
            language: 'en-US', // Idioma predeterminado
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

    let currentLanguage = CONFIG.defaultSettings.language; // Idioma predeterminado

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
        log('setLanguage', 'lang que llega:', lang);
        let validLang = lang;

        if (!TRANSLATIONS[validLang]) {
            const primary = lang.split('-')[0];
            validLang = Object.keys(TRANSLATIONS).find(k => k === primary || k.startsWith(primary + '-'));
        }

        if (!validLang) validLang = CONFIG.defaultSettings.language;

        currentLanguage = validLang;

        const settings = await Settings.get();
        settings.language = validLang;
        await Settings.set(settings);

        log('setLanguage', 'lang que sale:', validLang);
        return true;
    }

    // Función para detectar el idioma del navegador
    function detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage; // "es-ES" o "en"
        log('detectBrowserLanguage', 'browserLang:', browserLang);

        // Coincidencia exacta
        log('detectBrowserLanguage', 'TRANSLATIONS[browserLang]:', TRANSLATIONS[browserLang])
        if (TRANSLATIONS[browserLang]) return browserLang;

        // Coincidencia por prefijo (ejemplo: "es" -> "es-ES" o "es-419")
        const primary = browserLang.split('-')[0];
        const matched = Object.keys(TRANSLATIONS).find(k => k === primary || k.startsWith(primary + '-'));
        log('detectBrowserLanguage', 'matched:', matched);
        if (matched) return matched;

        warn(`Idioma del navegador '${browserLang}' no soportado, usando default.`);
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

.ypp-timestamp.completed {
    color: var(--color-success);
    font-weight: bold;
}

.ypp-timestamp.forced.completed {
    /* Video con tiempo fijo Y completado: color mixto */
    color: #15803d;
    font-weight: bold;
    background: linear-gradient(90deg, var(--color-primary-dark) 0%, var(--color-success) 100%);
    background-clip: text;
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

.ypp-btn-danger {
  background-color: var(--color-danger);
  color: var(--color-bg);
  font-weight: bold;

  &:hover {
    background-color: #c53030;
    transform: scale(1.02);
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
    // 📊 Variables
    // MARK: 📊 Variables
    // ────────────────

    // Variables para controlar el estado de inicialización
    let regularPlayerInitialized = false;
    let navigationTimeout = null;
    let isNavigating = false;
    let navigationDebounceTimeout = null;
    let playerCheckInterval = null;

    // ────────────────
    // 🔧 Utils
    // MARK: 🔧 Utils
    // ────────────────

    const formatTime = (seconds) => {
        if (typeof seconds !== 'number' || isNaN(seconds)) {
            conError('Valor de segundos no válido:', seconds);
            return '00:00';
        }

        const date = new Date(seconds * 1000);

        // Comprueba si es una fecha válida
        if (isNaN(date.getTime())) {
            warn('Objeto de fecha no válido para:', seconds);
            return '00:00';
        }

        const iso = date.toISOString();
        const time = iso.slice(11, 19);
        return time.startsWith('00:') ? time.slice(3) : time;
    };

    const parseTimeToSeconds = (timeStr) => {
        if (typeof timeStr !== 'string' || !timeStr.includes(':')) return 0;

        const parts = timeStr.split(':').map(Number);

        // Retorna 0 si algún valor es NaN
        if (parts.some(isNaN)) return 0;

        if (parts.length === 2) return parts[0] * 60 + parts[1];
        if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];

        return 0;
    };

    const normalizeSeconds = (value) => {
        if (!value) return 0;
        if (typeof value === 'number') return value;
        if (typeof value === 'string') return parseTimeToSeconds(value.trim());
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

    /**
    * Crea un elemento HTML con varias opciones de configuración.
    * 
    * @param {string} tag - Nombre del tag HTML a crear, e.g., 'div', 'span'.
    * @param {Object} [options] - Opciones para configurar el elemento.
    * @param {string} [options.className] - Clases CSS del elemento.
    * @param {string} [options.id] - ID del elemento.
    * @param {string} [options.text] - Texto interno del elemento.
    * @param {string} [options.html] - HTML interno del elemento (usa setInnerHTML seguro).
    * @param {Function} [options.onClickEvent] - Función legacy para el evento click.
    * @param {Object.<string, Function>} [options.events] - Eventos a añadir, e.g., { click: fn, mouseover: fn }.
    * @param {Object.<string, string>} [options.atribute] - Atributos HTML a añadir, e.g., { src: 'img.png' }.
    * @param {Object.<string, any>} [options.props] - Propiedades del elemento, e.g., { value: '123' }.
    * @param {Array<string|Node>} [options.children] - Hijos a añadir al elemento, strings o nodos.
    * @returns {HTMLElement} - El elemento HTML creado y configurado.
    */
    function createElement(tag, {
        className = '',
        id = '',
        text = '',
        html = '',
        onClickEvent = null,
        events = {},
        atribute = {},
        props = {},
        children = []
    } = {}) {
        const el = document.createElement(tag);

        if (className) el.className = className;
        if (id) el.id = id;
        if (text) el.textContent = text;
        if (html) setInnerHTML(el, html);

        // Soporte legacy (función onClickEvent)
        if (onClickEvent && typeof onClickEvent === 'function') {
            el.addEventListener('click', onClickEvent);
        }

        // Soporte para múltiples eventos
        if (events && typeof events === 'object') {
            Object.entries(events).forEach(([event, handler]) => {
                if (typeof handler === 'function') {
                    el.addEventListener(event, handler);
                }
            });
        }

        // Atributos
        if (atribute && typeof atribute === 'object') {
            Object.entries(atribute).forEach(([k, v]) => el.setAttribute(k, v));
        }

        // Propiedades directas
        if (props && typeof props === 'object') {
            Object.entries(props).forEach(([k, v]) => {
                if (k in el) el[k] = v;
            });
        }

        // Añadir children
        if (Array.isArray(children)) {
            children.forEach(child => {
                if (typeof child === 'string') {
                    el.appendChild(document.createTextNode(child));
                } else if (child instanceof Node) {
                    el.appendChild(child);
                }
            });
        }

        return el;
    }

    const stopChecking = () => {
        if (playerCheckInterval) {
            clearInterval(playerCheckInterval);
            playerCheckInterval = null;
        }
    };

    // ────────────────
    // 🔧 Helpers
    // MARK: 🔧 Helpers
    // ────────────────

    /**
    * Obtiene datos guardados de un video (ya sea de playlist o individual)
    * @param {string} videoId - ID del video
    * @param {string} playlistId - ID de la playlist (opcional)
    * @returns {Object|null} - Datos guardados o null
    */
    function getSavedVideoData(videoId, playlistId = null) {
        if (playlistId) {
            const playlist = Storage.get(playlistId);
            return playlist?.videos?.[videoId] || null;
        }
        return Storage.get(videoId);
    }

    /**
    * Llama a resumePlayback con el delay apropiado según el tipo
    * @param {string} type - Tipo de video ('short', 'regular', 'live')
    * @param {Function} resumeFn - Función a ejecutar
    * @param {number} shortDelay - Delay para shorts (default 200ms)
    */
    function callResumeWithDelay(type, resumeFn, shortDelay = 200) {
        if (type === 'short') {
            setTimeout(resumeFn, shortDelay);
        } else {
            resumeFn();
        }
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
    * @param {string} message - Mensaje a mostrar en la barra de reproducción
    */
    function updatePlaybackBarMessage(message) {
        if (!timeDisplay) initTimeDisplay();
        timeDisplay.textContent = message;
    }

    /**
     * Limpia el mensaje de la barra de reproducción
     */
    function clearPlaybackBarMessage() {
        if (timeDisplay) {
            timeDisplay.textContent = '';
            log('clearPlaybackBarMessage', 'Mensaje de la barra limpiado');
        }
    }

    // ───────────────
    // 🍞 Toasts 
    // MARK: 🍞 Toasts
    // ───────────────

    const toastTimeouts = new WeakMap();

    let toastListenersAdded = false;

    function createToastContainer() {
        let container = document.querySelector('.ypp-toast-container');
        if (!container) {
            container = createElement('div', { className: 'ypp-toast-container' });
            document.body.appendChild(container);
            log('createToastContainer', 'Contenedor de toasts creado');
        }

        if (!toastListenersAdded) {
            const updateVisibility = () => {
                container.style.display = document.fullscreenElement ? 'none' : 'flex';
            };
            document.addEventListener('fullscreenchange', updateVisibility);
            window.addEventListener('yt-navigate-finish', updateVisibility);
            updateVisibility();
            toastListenersAdded = true;
        }

        return container;
    }

    /**
    * Desvanece y elimina un toast después de un tiempo.
    * @param {HTMLElement} toast - Elemento toast a eliminar.
    * @param {number} duration - Tiempo en ms antes de iniciar el fade out.
    */
    function fadeAndRemoveToast(toast, duration) {
        // Limpiar timeout previo si existe
        if (toastTimeouts.has(toast)) {
            clearTimeout(toastTimeouts.get(toast));
            toastTimeouts.delete(toast);
        }

        const timeoutId = setTimeout(() => {
            toast.style.opacity = '0';

            const onTransitionEnd = () => {
                toast.remove();
                toast.removeEventListener('transitionend', onTransitionEnd);
            };

            toast.addEventListener('transitionend', onTransitionEnd);
            toastTimeouts.delete(toast);
        }, duration);

        toastTimeouts.set(toast, timeoutId);
    }

    /**
    * Muestra un toast flotante.
    * @param {string} message - Texto del toast.
    * @param {number} [duration=2500] - Duración en ms del toast temporal.
    * @param {Object} [options={}] - Opciones:
    *   - persistent: boolean (reutiliza un toast único)
    *   - keep: boolean (no se auto elimina)
    *   - action: { label: string, callback: function }
    */
    function showFloatingToast(message, duration = 2500, options = {}) {
        const container = createToastContainer();
        let toast;

        if (options.persistent) {
            toast = container.querySelector('.ypp-toast.persistent');
            if (!toast) {
                toast = createElement('div', { className: 'ypp-toast persistent' });
                container.appendChild(toast);
            }
            // Resetear contenido y estilo
            setInnerHTML(toast, '');
            toast.style.opacity = '1';
        } else {
            toast = createElement('div', { className: 'ypp-toast' });
            if (options.action) toast.classList.add('has-action');
            container.appendChild(toast);
            // Inicializar opacity 0 antes de animar
            toast.style.opacity = '0';
            requestAnimationFrame(() => (toast.style.opacity = '1'));
        }

        // Contenido
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
                    fadeAndRemoveToast(toast, 0);
                },
                atribute: { 'aria-label': options.action.label, type: 'button' }
            });
            toast.appendChild(actionBtn);
        }

        if (!options.keep && !options.persistent) fadeAndRemoveToast(toast, duration);

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
    * @param {object} player - La instancia del reproductor de YouTube
    * @param {number} time - Tiempo en segundos
    * @param {string} context - 'seek' o 'progress'
    * @param {object} options - Opciones adicionales
    *      @param {boolean} options.isForced - Indica si el seek fue forzado
    *      @param {string} options.videoType - 'normal' o 'short'
    */
    function notifySeekOrProgress(player, time, context = 'progress', options = {}) {
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

        // Bloquear notificación de progreso si hay tiempo fijo
        if (context === 'progress') {
            const videoId = player.getVideoData()?.video_id;
            if (videoId) {
                const videoData = getSavedVideoData(videoId);
                if (videoData?.forceResumeTime > 0) {
                    log('notifySeekOrProgress', 'Video con tiempo fijo, omitiendo notificación de progreso.');
                    return;
                }
            }
        }

        const { isForced = false, videoType = 'normal' } = options;
        const timeStr = formatTime(normalizeSeconds((time)));

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
            updatePlaybackBarMessage(message);
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

    // ───────────────
    // 🔧 Helpers
    // MARK: 🔧 Helpers
    // ────────────────

    // Cache para evitar consultas repetidas al DOM
    let cachedViewCount = null;
    let viewCountCacheTime = 0;
    const VIEW_CACHE_DURATION = 5000; // 5 segundos
    let isResuming = false; // Evitar guardados durante la reanudación inicial

    function getVideoInfo(player, vid) {
        const vd = player.getVideoData() || {};
        const title = vd.title || vid;
        const author = vd.author || t('unknown');
        const duration = player.getDuration?.() || 0;
        let thumb = `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`;

        if (vd.thumbnail_url && typeof vd.thumbnail_url === 'object' && vd.thumbnail_url.url) {
            thumb = vd.thumbnail_url.url;
        }

        // Recuperar el contador de vistas del video
        let views = t('notAvailable');
        const now = Date.now();
        if (!cachedViewCount || (now - viewCountCacheTime) > VIEW_CACHE_DURATION) {
            const viewCount = document.querySelector('.view-count');
            if (viewCount) {
                cachedViewCount = viewCount.textContent.trim();
                viewCountCacheTime = now;
            }
        }
        if (cachedViewCount) views = cachedViewCount;

        const savedAt = now;
        return { title, author, thumb, views, savedAt, duration };
    }

    const updateStatus = (player, videoEl, type, plId) => {
        const vid = player.getVideoData()?.video_id;
        if (!vid) return;

        const currentTime = videoEl.currentTime;
        const duration = videoEl.duration;
        if (!duration || isNaN(currentTime) || currentTime < 1 || !isFinite(duration)) return;

        // Evitar guardar progreso durante anuncios - cache playerEl
        if (!videoEl._cachedPlayerEl) {
            videoEl._cachedPlayerEl = videoEl.closest('#movie_player, .html5-video-player');
        }
        const playerEl = videoEl._cachedPlayerEl;

        const adNow = isAdPlaying || (playerEl && !!playerEl.querySelector('.ytp-ad-player-overlay, .ytp-ad-text, .ytp-ad-image-overlay, .ytp-ad-skip-button-container, .ytp-ad-overlay-container'));

        if (adNow) return; // Evitar guardar progreso durante anuncios
        if (isResuming) return;  // Evitar guardar progreso durante la fase de reanudación inicial

        const now = Date.now();

        const finishThreshold = Math.min(duration * 0.01, CONFIG.staticFinishSec);
        const isFinished = duration - currentTime < finishThreshold;

        // Obtener datos guardados usando helper
        const sourceData = getSavedVideoData(vid, plId);

        if (sourceData && sourceData.forceResumeTime > 0) {
            if (isFinished) {
                log('updateStatus', `Video con tiempo fijo ${vid} completado. Marcando como completado MANTENIENDO tiempo fijo.`);

                // Actualizar en el lugar correcto, MANTENIENDO forceResumeTime
                if (plId) {
                    const playlist = Storage.get(plId);
                    if (playlist?.videos?.[vid]) {
                        playlist.videos[vid] = {
                            ...playlist.videos[vid],
                            isCompleted: true,
                            lastUpdated: now,
                            timestamp: 0 // Limpiar timestamp pero mantener forceResumeTime
                        };
                        Storage.set(plId, playlist);
                    }
                } else {
                    const existing = Storage.get(vid);
                    if (existing) {
                        Storage.set(vid, {
                            ...existing,
                            isCompleted: true,
                            lastUpdated: now,
                            timestamp: 0 // Limpiar timestamp pero mantener forceResumeTime
                        });
                    }
                }
            }
            // No guardar progreso para videos con tiempo fijo (evita sobreescribir)
            return;
        }

        // Guardar progreso normal
        const info = getVideoInfo(player, vid);

        if (plId) {
            // Si está en una playlist, guardar SOLO dentro de la playlist.
            const playlist = Storage.get(plId) || { lastWatchedVideoId: '', videos: {}, title: '' };
            playlist.videos[vid] = {
                timestamp: currentTime,
                lastUpdated: now,
                videoType: 'playlist',
                isCompleted: isFinished,
                ...info
            };
            playlist.lastWatchedVideoId = vid;
            Storage.set(plId, playlist);

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
            // Si NO está en una playlist, guardar SOLO como video individual.
            const singleData = {
                timestamp: currentTime,
                lastUpdated: now,
                videoType: type,
                isCompleted: isFinished,
                ...info
            };
            Storage.set(vid, singleData);
        }

        notifySeekOrProgress(player, currentTime, 'progress', { videoType: type });
    };

    const resumePlayback = async (player, vid, videoEl, savedData, inPlaylist, plId, fromPlId, type) => {
        if (!savedData) {
            log('resumePlayback', '⚠️ No se encontró información para reanudar');
            return;
        }

        let lastTime = savedData.timestamp;
        let forceTime = savedData.forceResumeTime;
        const resumeId = vid;
        const timeToSeek = forceTime > 0 ? forceTime : lastTime;

        log('resumePlayback', `🎬 Reanudando video ${resumeId} en ${timeToSeek}s (forceTime: ${forceTime}, inPlaylist: ${inPlaylist})`);

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
    let currentVideoEl = null;
    let lastPlaylistId = null;
    let lastUrl = ''; // Rastrear la última URL procesada
    let lastSaveTime = 0; // Para controlar la frecuencia de guardado
    let lastResumeId = null;
    let currentlyProcessingVideoId = null;
    let currentTimeUpdateHandler = null; // Referencia al manejador actual para limpieza correcta

    const processVideo = async (container, player, videoEl) => {
        // Si estamos navegando, omitimos el procesamiento de video antiguo
        if (isNavigating) {
            log('processVideo', 'Navegación en curso, omitiendo procesamiento de video antiguo.');
            return;
        }

        if (!container || !player || !videoEl) {
            warn('processVideo', 'Container, player o videoEl no proporcionados. Abortando.');
            return;
        }

        const playerVid = player.getVideoData()?.video_id || container.getVideoData?.()?.video_id;
        if (!playerVid) {
            conError('processVideo', 'No se pudo obtener video_id del reproductor. Abortando.');
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

            // Handler para guardar progreso
            const handler = () => {
                // Si estamos navegando, omitimos el guardado
                if (isNavigating) return;

                const currentVid = player.getVideoData()?.video_id;
                if (currentVid !== playerVid) return; // Si el video ha cambiado, omitimos el guardado

                if (isPlayerSeeking) {
                    isPlayerSeeking = false;
                    clearPlaybackBarMessage();
                }

                const now = Date.now();
                const minInterval = (cachedSettings.minSecondsBetweenSaves || 1) * 1000;

                if (now - lastSaveTime >= minInterval) {
                    updateStatus(player, videoEl, type, plId);
                    lastSaveTime = now;
                }
            };

            // Remover handler anterior si existe para evitar guardados prematuros
            if (currentTimeUpdateHandler && currentVideoEl) {
                currentVideoEl.removeEventListener('timeupdate', currentTimeUpdateHandler);
                log('processVideo', 'Handler anterior removido.');
            }

            // Evitar reanudar mismo short varias veces
            if (playerVid !== lastResumeId) {
                log('processVideo', 'Procesando video:', { playerVid, type, plId });

                // Encontrar datos guardados usando helper
                const savedData = getSavedVideoData(playerVid, plId);

                if (savedData) {
                    // Establecer isResuming inmediatamente para bloquear cualquier guardado de progreso durante la reanudación.
                    const willResume = (savedData.forceResumeTime > 0) ||
                        (savedData.timestamp > 10 && !savedData.isCompleted);
                    if (willResume) {
                        isResuming = true;
                    }

                    // Si hay un tiempo fijo, siempre reanudar desde ahí.
                    if (savedData.forceResumeTime > 0) {
                        log('processVideo', 'Reanudando video con tiempo fijo.');
                        callResumeWithDelay(type, () => {
                            resumePlayback(player, playerVid, videoEl, savedData, Boolean(plId), plId, lastPlaylistId, type);
                        });
                        lastResumeId = playerVid;
                    }
                    // Si no hay tiempo fijo, pero hay progreso y no está completado, reanudar desde el progreso.
                    else if (savedData.timestamp > 0 && !savedData.isCompleted) {
                        // Solo reanudar si el progreso es significativo (más de 10 segundos)
                        if (savedData.timestamp > 10) {
                            log('processVideo', 'Reanudando video con progreso normal.');
                            callResumeWithDelay(type, () => {
                                resumePlayback(player, playerVid, videoEl, savedData, Boolean(plId), plId, lastPlaylistId, type);
                            });
                            lastResumeId = playerVid;
                        } else {
                            log('processVideo', `Progreso guardado (${savedData.timestamp}s) es muy corto; omitiendo reanudación.`);
                            isResuming = false; // No hay reanudación, permitir guardados
                        }
                    }
                }
            }

            // Guardar referencia y adjuntar el listener DESPUES de establecer el flag isResuming
            currentTimeUpdateHandler = handler;
            videoEl.addEventListener('timeupdate', handler);

            // Actualizar estados
            currentVideoEl = videoEl;
            lastUrl = currentUrl;
            lastPlaylistId = plId;

        } catch (error) {
            conError('processVideo', `Ocurrió un error inesperado al procesar el video ${playerVid}:`, error);
        } finally {
            // Usamos un timeout para limpiar el estado, asegurándonos de que el ID coincida
            // para no limpiar el estado de un video que empezó a procesarse más tarde.
            setTimeout(() => {
                currentlyProcessingVideoId = null;
            }, 100); // Pequeño retraso para asegurar que el procesamiento se complete
        }
    };

    // ────────────────
    // ⏯ Seek
    // MARK: ⏯ Seek
    // ────────────────

    const SEEK_TIMEOUT = 3000;

    const applySeek = async (player, videoEl, time, options = {}) => {
        const { bypassMinDiff = false, isForced = false, type = 'normal' } = options;

        // Normalizar 'time'
        if (typeof time !== 'number') {
            if (typeof time === 'string') {
                time = parseTimeToSeconds(time.trim());
            } else {
                warn('applySeek', 'Tipo de tiempo seek inválido:', time, '. Abortando.');
                return;
            }
        }

        log('applySeek', `Iniciando. Hacia: ${time}s, Forzado: ${isForced}, BypassMinDiff: ${bypassMinDiff}`);

        if (!player || !videoEl) {
            warn('applySeek', 'Player o videoEl no proporcionados. Abortando.');
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

        // Seek asíncrono con múltiples métodos de detección
        log('applySeek', 'Iniciando operación de seek asíncrona...');
        await new Promise((resolve) => {
            let timeoutId;
            let checkInterval;
            let seekCompleted = false;

            const cleanupSeek = () => {
                clearTimeout(timeoutId);
                clearInterval(checkInterval);
                videoEl.removeEventListener('seeked', onSeeked);
                videoEl.removeEventListener('timeupdate', onTimeUpdate);
            };

            const completeSeek = () => {
                if (!seekCompleted) {
                    seekCompleted = true;
                    log('applySeek', 'Seek completado con éxito.');
                    cleanupSeek();
                    isResuming = false; // Finalizar la fase de reanudación
                    resolve();
                }
            };

            const onSeeked = () => {
                log('applySeek', 'Evento "seeked" recibido.');
                completeSeek();
            };

            // Método alternativo: verificar si el tiempo actual se acerca al tiempo objetivo
            const onTimeUpdate = () => {
                try {
                    const currentTime = player.getCurrentTime();
                    const diff = Math.abs(currentTime - time);

                    // Si la diferencia es muy pequeña, consideramos que el seek se completó
                    if (diff < 0.5) {
                        log('applySeek', `Seek detectado por timeupdate. Diferencia: ${diff}s`);
                        completeSeek();
                    }
                } catch (e) {
                    // Ignorar errores en timeupdate
                }
            };

            // Configurar el timeout principal
            timeoutId = setTimeout(() => {
                if (!seekCompleted) {
                    warn('applySeek', `Timeout de ${SEEK_TIMEOUT}ms alcanzado. Verificando estado final...`);

                    // Verificación final: comprobar si estamos cerca del tiempo objetivo
                    try {
                        const currentTime = player.getCurrentTime();
                        const diff = Math.abs(currentTime - time);

                        if (diff < 1.0) {
                            log('applySeek', `El seek parece haberse completado. Diferencia final: ${diff}s`);
                            completeSeek();
                        } else {
                            warn('applySeek', `El seek no parece haberse completado. Diferencia final: ${diff}s`);
                            cleanupSeek();
                            resolve();
                        }
                    } catch (e) {
                        warn('applySeek', 'Error al verificar el estado final del seek:', e);
                        cleanupSeek();
                        resolve();
                    }
                }
            }, SEEK_TIMEOUT);

            // Configurar un intervalo de verificación como respaldo
            checkInterval = setInterval(() => {
                if (!seekCompleted) {
                    try {
                        const currentTime = player.getCurrentTime();
                        const diff = Math.abs(currentTime - time);

                        // Si la diferencia es muy pequeña, consideramos que el seek se completó
                        if (diff < 0.5) {
                            log('applySeek', `Seek detectado por intervalo de verificación. Diferencia: ${diff}s`);
                            completeSeek();
                        }
                    } catch (e) {
                        // Ignorar errores en la verificación
                    }
                }
            }, 500);

            // Añadir los listeners de eventos
            videoEl.addEventListener('seeked', onSeeked, { once: true });
            videoEl.addEventListener('timeupdate', onTimeUpdate);

            try {
                log('applySeek', `Llamando a player.seekTo(${time}, true).`);
                player.seekTo(time, true);
            } catch (seekError) {
                conError('applySeek', 'Falló la ejecución de player.seekTo:', seekError);
                cleanupSeek();
                resolve();
            }
        });

        // Mostrar mensaje en UI
        const videoType = type === 'short' ? 'short' : 'normal';
        notifySeekOrProgress(player, time, 'seek', { isForced, videoType });

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
        <option value="playlist" ${currentValue === 'playlist' ? 'selected' : ''}>📁 ${t('playlist')}</option>
        <option value="completed" ${currentValue === 'completed' ? 'selected' : ''}>✅ ${t('completedVideos')}</option>`
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
            conError('getSavedFilters', 'Error parsing filtros guardados:', e);
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

        let allItems = [];
        keys.forEach(key => {
            const data = Storage.get(key);
            if (!data) return;

            if (data.videos) { // Es una playlist
                const playlistTitle = data.title || key;
                const lastWatchedVideoId = data.lastWatchedVideoId || null;
                Object.entries(data.videos).forEach(([videoId, info]) => {
                    allItems.push({
                        type: 'playlist-video',
                        videoId,
                        info,
                        playlistKey: key,
                        playlistTitle,
                        lastWatchedVideoId
                    });
                });
            } else { // Es un video individual
                allItems.push({
                    type: 'regular-video',
                    videoId: key,
                    info: data,
                    playlistKey: null
                });
            }
        });

        let filteredItems = allItems.filter(item => {
            if (currentFilterBy === 'completed') return item.info.isCompleted === true;
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
                    // Si hay un último video visto, enlazar a ese video + playlist (para mixes de YT)
                    // Si no, enlazar a la playlist completa
                    const playlistUrl = item.lastWatchedVideoId
                        ? `https://www.youtube.com/watch?v=${item.lastWatchedVideoId}&list=${item.playlistKey}`
                        : `https://www.youtube.com/playlist?list=${item.playlistKey}`;

                    const h3 = createElement('a', {
                        className: 'ypp-playlistTitle',
                        text: `📁 ${t('playlistPrefix')}: ${item.playlistTitle}`,
                        atribute: {
                            href: playlistUrl,
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

        if (filteredItems.length === 0) {
            const p = createElement('p', { className: 'ypp-emptyMsg', text: t('noSavedVideos') });
            listContainer.appendChild(p);
        }
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

    // ────────────────
    // 📂 Show Saved Videos List
    // MARK: 📂 Show Saved Videos List
    // ────────────────

    async function showSavedVideosList() {
        // Siempre cerrar el modal existente para asegurar un estado limpio
        closeModalVideos();

        // Cargar filtros guardados para asegurar sincronización
        const saved = await getSavedFilters();

        // Usar los filtros pasados como parámetro o los guardados
        currentOrderBy = saved.orderBy ?? CONFIG.defaultFilters.orderBy;
        currentFilterBy = saved.filterBy ?? CONFIG.defaultFilters.filterBy;
        currentSearchQuery = saved.searchQuery ?? CONFIG.defaultFilters.searchQuery;

        // Crear elementos del modal
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
        const clearAllData = () => {
            if (!confirm(t('clearAllConfirm'))) {
                return;
            }

            // Guardar todos los datos para deshacer
            const keys = Storage.keys().filter(k => !k.startsWith('userSettings'));
            const backup = {};
            keys.forEach(k => {
                const data = Storage.get(k);
                if (data) backup[k] = data;
            });

            // Eliminar todos los datos
            keys.forEach(k => Storage.del(k));

            // Actualizar la UI
            updateVideoList();

            // Mostrar toast con opción de deshacer
            const undoAction = () => {
                // Restaurar todos los datos
                Object.entries(backup).forEach(([key, value]) => {
                    Storage.set(key, value);
                });
                updateVideoList();
                showFloatingToast(`✅ ${t('retryCompleted')}`);
            };

            showFloatingToast(`🗑️ ${t('allItemsCleared')}`, 10000, {
                action: {
                    label: t('undoClearAll'),
                    callback: undoAction
                }
            });
        };

        const btnExport = createElement('button', { className: 'ypp-btn', text: `📤 ${t('export')}`, onClickEvent: exportDataToFile });
        const btnImport = createElement('button', { className: 'ypp-btn', text: `📥 ${t('import')}`, onClickEvent: importDataFromFile });
        const btnClearAll = createElement('button', { className: 'ypp-btn ypp-btn-danger', text: `🗑️ ${t('clearAll')}`, onClickEvent: clearAllData });
        footer.appendChild(btnExport);
        footer.appendChild(btnImport);
        footer.appendChild(btnClearAll);
        videosContainer.appendChild(footer);

        videosOverlay.addEventListener('click', closeModalVideos);
        document.body.appendChild(videosOverlay);
        document.body.appendChild(videosContainer);

        // Actualizar la lista de videos con los filtros actuales
        updateVideoList();
    }

    // ────────────────
    // 📂 Video Entry
    // MARK: 📂 Video Entry
    // ────────────────

    function createVideoEntry(videoId, info, playlistKey = null) {
        const isCompleted = info.isCompleted || false;
        const videoTime = formatTime(normalizeSeconds(info.timestamp));
        const duration = normalizeSeconds(info.duration);
        const watched = normalizeSeconds(info.timestamp);
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

        // Determinar texto del timestamp (puede mostrar ambos estados)
        let timestampText = '';
        let timestampClass = '';

        if (info.forceResumeTime > 0) {
            // Video con tiempo fijo
            const fixedTimeStr = `⏱️ ${t('alwaysStartFrom')}: ${formatTime(normalizeSeconds((info.forceResumeTime)))} ${t('locked')}`;
            timestampClass = 'forced';

            if (isCompleted) {
                // Tiempo fijo + completado
                timestampText = `${fixedTimeStr} ✅`;
                timestampClass += ' completed';
            } else {
                // Solo tiempo fijo
                timestampText = fixedTimeStr;
            }
        } else {
            // Video normal (sin tiempo fijo)
            if (isCompleted) {
                timestampText = `✅ ${t('completed')}`;
                timestampClass = 'completed';
            } else {
                timestampText = `${t('progress')} ${videoTime}`;
            }
        }

        const timestamp = createElement('div', { className: `ypp-timestamp ${timestampClass}`, text: timestampText });

        infoDiv.appendChild(titleLink);
        infoDiv.appendChild(author);
        infoDiv.appendChild(views);
        infoDiv.appendChild(timestamp);
        if (percent !== null && !isCompleted) {
            const progressInfo = createElement('div', { className: 'ypp-progressInfo', text: `📊 ${percent}% ${t('percentWatched')} (${formatTime(normalizeSeconds((remaining)))} ${t('remaining')})` });
            infoDiv.appendChild(progressInfo);
        }
        wrapper.appendChild(infoDiv);

        const buttonContainer = createElement('div', { className: 'ypp-containerButtonsTime' });

        const btnForceTime = createElement('button', {
            className: 'ypp-btn ypp-btn-small',
            text: '⏱️',
            atribute: { title: info.forceResumeTime ? t('changeOrRemoveStartTime', { time: formatTime(normalizeSeconds((info.forceResumeTime))) }) : t('setStartTime') },
            onClickEvent: () => {
                const promptText = info.forceResumeTime
                    ? `${t('enterStartTimeOrEmpty')}:`
                    : `${t('enterStartTime')}:`;
                const timeStr = prompt(promptText, info.forceResumeTime ? formatTime(normalizeSeconds((info.forceResumeTime))) : '');

                if (timeStr === null) { // Usuario canceló
                    return;
                }

                const timeSec = parseTimeToSeconds(timeStr);

                if (playlistKey) {
                    const playlist = Storage.get(playlistKey);
                    if (playlist?.videos?.[videoId]) {
                        if (timeSec > 0) {
                            playlist.videos[videoId].forceResumeTime = timeSec;
                            showFloatingToast(`✅ ${t('startTimeSet')} ${formatTime(normalizeSeconds((timeSec)))}`);
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
                            showFloatingToast(`✅ ${t('startTimeSet')} ${formatTime(normalizeSeconds((timeSec)))}`);
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
            html: (() => {
                const langs = Object.keys(LANGUAGE_FLAGS);

                // Mover el idioma actual al principio
                const currentLang = settings.language || defaultSettings.language;
                langs.sort((a, b) => (a === currentLang ? -1 : b === currentLang ? 1 : 0));

                return langs.map(lang => {
                    const { emoji, name } = LANGUAGE_FLAGS[lang];
                    const selected = settings.language === lang ? 'selected' : '';
                    return `<option value="${lang}" ${selected}>${emoji || '🌐'} ${name || lang.toUpperCase()}</option>`;
                }).join('');
            })()
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
        /* GM_registerMenuCommand(`📋 ${t('savedVideos')}`, showSavedVideosList); */
        GM_registerMenuCommand(`📚 ${t('viewAllHistory')}`, async () => {
            // Cerrar modal si está abierto para forzar recreación
            closeModalVideos();
            // Guardar filtros y esperar a que se complete
            await saveFilters({ filterBy: 'all', searchQuery: '' });
            // Establecer filtro global y mostrar lista
            currentFilterBy = 'all';
            showSavedVideosList();
        });
        GM_registerMenuCommand(`✅ ${t('viewCompletedVideos')}`, async () => {
            closeModalVideos();
            await saveFilters({ filterBy: 'completed' });
            currentFilterBy = 'completed';
            showSavedVideosList();
        });
    }

    // ───────────────
    // 📢 Ad Monitor
    // MARK: 📢 Ad Monitor
    // ────────────────

    let isAdPlaying = false;

    function createAdMonitor(container, { onAdStart, onAdEnd } = {}) {
        const target = container.closest('#movie_player, .html5-video-player') || container;

        // Cache selectors for better performance
        const adSelectors = '.ytp-ad-player-overlay, .ytp-ad-text, .ytp-ad-image-overlay, .ytp-ad-skip-button-container, .ytp-ad-overlay-container';

        const isAd = () => !!target.querySelector(adSelectors);
        const isNormalControlsPresent = () => (
            !!target.querySelector('.ytp-chrome-bottom') &&
            !target.querySelector('.ytp-ad-player-overlay, .ytp-ad-skip-button-container, .ytp-ad-overlay-container')
        );

        let observer = null;
        let debounceTimer = null;

        const start = () => {
            stop();
            log('adMonitor', 'Iniciando monitoreo de anuncios.');

            // Evaluar el estado del anuncio ahora que el reproductor está renderizado
            isAdPlaying = isAd();
            const normalNow = isNormalControlsPresent();
            if (isAdPlaying && normalNow) {
                log('adMonitor', '⚠️ Corrección: se detectó anuncio pero ya hay controles normales; tratando como sin anuncios.');
                isAdPlaying = false;
            }

            // Verificación inmediata: si no hay anuncios y los controles están presentes, verificar duración del video
            if (!isAdPlaying && normalNow) {
                const videoEl = target.querySelector('video');
                const duration = videoEl?.duration || 0;

                // Solo procesar inmediatamente si el video ya tiene duración válida (indica que no hay anuncio cargándose)
                if (duration > 60) {
                    log('adMonitor', '🟢 Sin anuncios detectados inicialmente; reanudando inmediatamente.');
                    setTimeout(() => {
                        onAdEnd?.();
                    }, 50);
                } else {
                    // Duración no disponible aún, esperar a que se cargue (posible anuncio cargándose)
                    log('adMonitor', '⏳ Duración no disponible aún, esperando carga completa...');
                    // Limpiar mensaje de la barra durante el anuncio
                    clearPlaybackBarMessage();
                    // El observer detectará cuando esté listo
                }
            }

            // Manejador con retardo para reducir las verificaciones excesivas     
            const debouncedCheck = () => {
                if (debounceTimer) return;

                debounceTimer = setTimeout(() => {
                    debounceTimer = null;

                    const adNow = isAd();
                    const normalNow = isNormalControlsPresent();

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

                    // Si no hay anuncio y reaparecen los controles normales, asegurar el fin inmediato
                    if (!adNow && normalNow && isAdPlaying) {
                        log('adMonitor', '🟢 Controles normales detectados; fin de anuncio confirmado.');
                        isAdPlaying = false;
                        onAdEnd?.();
                    }

                    // Si no hay anuncio, controles presentes, y video tiene duración válida, procesar
                    if (!adNow && normalNow && !isAdPlaying) {
                        if (!observer._hasCalledOnEnd) {
                            const videoEl = target.querySelector('video');
                            const duration = videoEl?.duration || 0;

                            if (duration > 60) {
                                log('adMonitor', '🟢 Video listo sin anuncios; reanudando.');
                                observer._hasCalledOnEnd = true;
                                onAdEnd?.();
                            }
                        }
                    }
                }, 30);
            };

            observer = new MutationObserver(debouncedCheck);

            // Observación más objetivo - solo vigilar cambios de clase en el target, no todo el subtree
            observer.observe(target, {
                attributes: true,
                attributeFilter: ['class'],
                childList: true,
                subtree: false
            });

            // Estado inicial: solo iniciar si ya hay un anuncio presente
            if (isAdPlaying) {
                onAdStart?.();
            }
        };

        const stop = () => {
            if (debounceTimer) {
                clearTimeout(debounceTimer);
                debounceTimer = null;
            }
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
    // 🎥 Observer Regular Player
    // MARK: 🎥 Observer Regular Player
    // ────────────────

    function observePlayer() {
        // Si ya estamos en shorts, no continuar
        if (location.pathname.startsWith('/shorts/')) {
            log('observePlayer', 'Página de Shorts detectada, deteniendo observación del reproductor regular.');
            return;
        }

        // Función mejorada para verificar si estamos en una página de video
        const isVideoPage = () => {
            // Verificar si la URL contiene un parámetro 'v' (ID de video)
            const urlParams = new URLSearchParams(location.search);
            const hasVideoId = urlParams.has('v');

            // Verificar si estamos en una página de video
            const isWatchPage = location.pathname.startsWith('/watch');

            // También verificar si estamos en una página de embed
            const isEmbedPage = location.pathname.startsWith('/embed/');

            // Verificar si hay un reproductor de video en la página
            const hasPlayer = document.querySelector('#movie_player, .html5-video-player, .html5-video-container');

            return (hasVideoId && (isWatchPage || isEmbedPage)) || (hasPlayer && hasVideoId);
        };

        // Si no estamos en una página de video, salir
        if (!isVideoPage()) {
            log('observePlayer', 'No estamos en una página de video válida. Saliendo del observador.');
            return;
        }

        stopChecking(); // Limpiar cualquier intervalo existente

        let adMonitor = null;
        let attempts = 0;
        const maxAttempts = 20;
        const checkDelay = 500;
        const selectors = ['#movie_player', '.html5-video-player', '.html5-video-container'];

        const findPlayer = () => {
            attempts++;
            log('observePlayer', `Intento ${attempts} de encontrar el reproductor de video.`);

            // Verificar si aún estamos en una página de video válida
            if (!isVideoPage()) {
                log('observePlayer', 'Ya no estamos en una página de video válida, deteniendo observación.');
                stopChecking();
                return false;
            }

            // Intentar encontrar el reproductor con diferentes selectores
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

            // Si después de varios intentos no encontramos el reproductor, intentar con fallback
            if (attempts >= 10) tryFallback();

            // Si alcanzamos el máximo de intentos, detener la búsqueda
            if (attempts >= maxAttempts) {
                log('observePlayer', 'Máximo de intentos alcanzado sin encontrar el reproductor.');
                stopChecking();
                return false;
            }

            return false;
        };

        const getPlayerInstance = (container) => {
            // Intentar obtener la instancia del reproductor de diferentes maneras
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
            }

            // Detener cualquier monitoreo de anuncios existente
            if (adMonitor) {
                adMonitor.stop();
            }

            // Ahora crear el nuevo adMonitor
            adMonitor = createAdMonitor(container, {
                onAdStart: () => {
                    log('⏸ Anuncio detectado, pausando acciones hasta que finalize.');
                    isAdPlaying = true;
                },
                onAdEnd: () => {
                    log('▶️ Monitor de anuncios finalizado, reanudando.');
                    isAdPlaying = false;
                    processVideoAfterAd(player, videoEl, container);
                }
            });

            adMonitor.start();
            // Dejamos que el adMonitor controle el flujo; detenemos la búsqueda para evitar reinicios mientras dure el anuncio
            stopChecking();
        };

        const tryFallback = () => {
            const videos = document.querySelectorAll('video');
            for (const videoEl of videos) {
                if (videoEl.offsetWidth < 400) continue;

                if (videoEl.src?.includes('youtube.com') || videoEl.src?.includes('googlevideo.com')) {
                    log('tryFallback', 'Video encontrado mediante fallback.');
                    let container = videoEl;
                    let depth = 0;
                    while (container && container !== document.body && depth < 10) {
                        if (container.classList?.contains('ad-showing')) break;
                        if (
                            container.id === 'movie_player' ||
                            container.classList?.contains('html5-video-player') ||
                            container.classList?.contains('ytd-player')
                        ) {
                            const player = getPlayerInstance(container);
                            handleFoundPlayer(container, player, videoEl);
                            return true;
                        }
                        container = container.parentElement;
                        depth++;
                    }
                }
            }
            return false;
        };

        const processVideoAfterAd = (player, videoEl, container) => {
            setTimeout(() => {
                if (typeof player.getVideoData === 'function') {
                    processVideo(container, player, videoEl);
                } else {
                    log('observePlayer', 'Reproductor no estándar, intentando alternativa.');
                    tryAlternativePlayer(container, videoEl);
                }
            }, 100); // 100ms delay para que el anuncio termine 
            stopChecking();
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

        // Observador del DOM para detectar cambios
        const observer = new MutationObserver(() => {
            if (findPlayer()) {
                observer.disconnect();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

        // Fallback con polling por compatibilidad
        playerCheckInterval = setInterval(() => {
            if (findPlayer()) {
                observer.disconnect();
            }
        }, checkDelay);
    }

    // ────────────────
    // 📱 Shorts Observer
    // MARK: 📱 Shorts Observer
    // ────────────────

    // Función para observar cambios en los shorts (VERSIÓN OPTIMIZADA)
    const observeShorts = () => {
        // Verificar si estamos en una página de shorts
        if (!location.pathname.startsWith('/shorts/')) {
            log('observeShorts', 'No estamos en una página de Shorts. Saliendo del observador.');
            return;
        }

        // Verificar si el guardado de Shorts está desactivado en la configuración
        if (!cachedSettings.saveShorts) {
            log('observeShorts', 'El guardado de Shorts está desactivado en la configuración. Saliendo del observador.');
            return;
        }

        stopChecking(); // Limpiar intervalo anterior si existe

        log('init', 'Detectada página de Shorts, iniciando observación optimizada.');
        regularPlayerInitialized = false;

        let lastSeenShortId = null;
        let isProcessing = false;
        let mutationObserver = null;
        let intersectionObserver = null;

        const processShort = (activeShort) => {
            if (isProcessing || !activeShort) return;

            const videoEl = activeShort.querySelector('video');
            if (!videoEl) return;

            // Intentar obtener el objeto del reproductor de forma robusta
            let player = null;
            if (window.yt?.player?.getPlayerByElement) {
                player = window.yt.player.getPlayerByElement(videoEl);
            }

            if (!player) {
                const shortPlayerEl = activeShort.querySelector('#shorts-player');
                if (shortPlayerEl?.getVideoData) {
                    player = shortPlayerEl;
                }
            }

            if (player && !isAdPlaying) {
                const videoData = player.getVideoData();
                if (videoData?.video_id && videoData.video_id !== lastSeenShortId) {
                    log('observeShorts', `Nuevo Short detectado: ${videoData.video_id}`);

                    const isFirstShort = !lastSeenShortId;
                    lastSeenShortId = videoData.video_id;
                    isProcessing = true;

                    // Process immediately for first detection, then use idle callback for subsequent
                    const processCallback = () => {
                        try {
                            processVideo(activeShort, player, videoEl);
                        } catch (error) {
                            conError('observeShorts', 'Error al procesar short:', error);
                        } finally {
                            isProcessing = false;
                        }
                    };

                    // First short: process immediately. Others: defer to idle time
                    if (isFirstShort) {
                        setTimeout(processCallback, 50); // Fast initial response
                    } else if (window.requestIdleCallback) {
                        requestIdleCallback(processCallback, { timeout: 100 });
                    } else {
                        setTimeout(processCallback, 80);
                    }
                }
            }
        };

        // Use IntersectionObserver to detect active shorts (more efficient than polling)
        intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    const activeShort = entry.target;
                    if (activeShort.hasAttribute('is-active')) {
                        processShort(activeShort);
                    }
                }
            });
        }, {
            threshold: [0.5, 1.0],
            rootMargin: '0px'
        });

        // Use MutationObserver to watch for new shorts being added
        mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && node.matches?.('ytd-reel-video-renderer')) {
                        intersectionObserver.observe(node);
                    }
                });
            });

            // Also check for is-active attribute changes
            const activeShort = document.querySelector('ytd-reel-video-renderer[is-active]');
            if (activeShort) {
                processShort(activeShort);
            }
        });

        // Start observing
        const shortsContainer = document.querySelector('ytd-shorts');
        if (shortsContainer) {
            mutationObserver.observe(shortsContainer, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['is-active']
            });

            // Observe existing shorts
            shortsContainer.querySelectorAll('ytd-reel-video-renderer').forEach(short => {
                intersectionObserver.observe(short);
            });
        }

        // Initial check with responsive polling as fallback
        const initialCheck = () => {
            const activeShort = document.querySelector('ytd-reel-video-renderer[is-active]');
            processShort(activeShort);
        };

        initialCheck();

        // Aggressive initial polling that slows down: 200ms, 400ms, 800ms, then stops
        let pollCount = 0;
        const pollIntervals = [200, 400, 800]; // Progressive backoff

        const schedulePoll = () => {
            if (pollCount < pollIntervals.length) {
                playerCheckInterval = setTimeout(() => {
                    initialCheck();
                    pollCount++;
                    schedulePoll();
                }, pollIntervals[pollCount]);
            }
        };

        schedulePoll();
    };

    // ────────────────
    // 🖐 handleNavigation
    // MARK: 🖐 handleNavigation
    // ────────────────

    const handleNavigation = () => {
        const currentUrl = location.href;
        if (currentUrl === lastUrl || isNavigating) return;

        isNavigating = true;
        log('handleNavigation', `Navegando a: ${currentUrl}`);

        if (navigationDebounceTimeout) clearTimeout(navigationDebounceTimeout);

        navigationDebounceTimeout = setTimeout(() => {
            cleanupAll();
            lastUrl = currentUrl;

            navigationTimeout = setTimeout(() => {
                // Determinar qué tipo de página es y llamar al observador correcto
                if (location.pathname.startsWith('/shorts/')) {
                    // Para Shorts, dar más tiempo antes de inicializar
                    setTimeout(() => {
                        observeShorts();
                    }, 300);
                } else if (location.pathname.startsWith('/watch') || location.pathname.startsWith('/embed/')) {
                    // Verificar si hay un ID de video en la URL
                    const urlParams = new URLSearchParams(location.search);
                    if (urlParams.has('v')) {
                        observePlayer();
                    } else {
                        log('handleNavigation', 'URL no contiene ID de video, no se inicializará el observador');
                    }
                } else {
                    log('handleNavigation', 'Página no reconocida, no se inicializará ningún observador');
                }

                isNavigating = false;
            }, 500); // Aumentado a 500ms para dar más tiempo al DOM
        }, 100);
    };

    // ────────────────
    // 🧹 cleanupAll
    // MARK: 🧹 cleanupAll
    // ────────────────

    // Función para limpiar todos los observadores y estados
    const cleanupAll = () => {
        log('cleanupAll', 'Iniciando limpieza de observadores, intervalos y estados');

        // Limpiar timers/intervals
        const timers = [
            { ref: playerCheckInterval, fn: clearInterval, name: 'playerCheckInterval' },
            { ref: navigationTimeout, fn: clearTimeout, name: 'navigationTimeout' },
            { ref: navigationDebounceTimeout, fn: clearTimeout, name: 'navigationDebounceTimeout' }
        ];

        timers.forEach(({ ref, fn, name }) => {
            if (ref) {
                fn(ref);
                log('cleanupAll', `${name} limpiado`);
            }
        });

        playerCheckInterval = null;
        navigationTimeout = null;
        navigationDebounceTimeout = null;

        // Resetear estados
        isAdPlaying = false;
        regularPlayerInitialized = false;
        currentlyProcessingVideoId = null;
        lastPlaylistId = null;
        isResuming = false;
        lastResumeId = null;
        cachedViewCount = null;
        viewCountCacheTime = 0;

        log('cleanupAll', 'Estados internos reseteados');

        // Limpiar eventos del video
        if (currentVideoEl) {
            if (currentTimeUpdateHandler) {
                currentVideoEl.removeEventListener('timeupdate', currentTimeUpdateHandler);
                currentTimeUpdateHandler = null;
            }
            delete currentVideoEl._cachedPlayerEl;
            currentVideoEl = null;
            log('cleanupAll', 'Eventos del video eliminados');
        }

        clearPlaybackBarMessage();

        const container = document.querySelector('.ypp-toast-container');
        if (container?.hasChildNodes()) {
            const toasts = container.querySelectorAll('.ypp-toast');
            let removed = 0;

            toasts.forEach(toast => {
                if (/[⏯⏱️📌💾]/.test(toast.textContent)) {
                    toast.remove();
                    removed++;
                }
            });

            if (removed > 0) log('cleanupAll', `${removed} toasts removidos`);
        }
        log('cleanupAll', 'Limpieza completa realizada');
    };

    // ────────────────
    // 🚀 Init
    // MARK: 🚀 Init
    // ────────────────

    // ------------------ showInitRetryToast ------------------
    function showInitRetryToast(failedModules, observerTasks) {
        if (!failedModules?.length) return;

        const names = failedModules.map(f => f.name).join(', ');
        const tooltip = failedModules
            .map(f => `${f.name}: ${f.reason?.message || t('unknownError')}`)
            .join('\n');

        showFloatingToast(
            t('modulesFailed', { count: failedModules.length, names }),
            0, // duración 0 = persistente
            {
                keep: true,
                title: tooltip,
                action: {
                    label: t('retryNow'),
                    callback: async () => {
                        log('init', `🔁 ${t('modulesFailed', { count: failedModules.length, names })}`);

                        for (const fail of failedModules) {
                            const task = observerTasks.find(o => o.name === fail.name);
                            if (!task) continue;

                            try {
                                await task.fn();
                                log('init', `✅ ${fail.name} reintentado correctamente`);
                            } catch (err) {
                                conError('init', `❌ ${fail.name} falló nuevamente:`, err);
                            }
                        }

                        showFloatingToast(t('retryCompleted'), 5000);
                    }
                }
            }
        );
    }

    // ------------------ Debounce helper ------------------
    const debounce = (fn, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    };

    // ------------------ Retry helper ------------------
    const retry = async (fn, retries = 3, delay = 1000, name = 'función') => {
        for (let i = 0; i < retries; i++) {
            try {
                if (i > 0) log('init', `Reintentando ${name} (intento ${i + 1}/${retries})...`);
                return await fn();
            } catch (error) {
                warn('init', `Error en ${name} intento ${i + 1}:`, error);
                if (i < retries - 1) await new Promise(res => setTimeout(res, delay));
            }
        }
        throw new Error(`${name} falló tras ${retries} intentos`);
    };

    // ------------------ Inicialización ------------------
    const init = async () => {
        log('init', '🚀 Iniciando script...');

        // --- 1️⃣ Cargar traducciones ---
        try {
            const { LANGUAGE_FLAGS: loadedFlags, TRANSLATIONS: loadedTranslations } = await loadTranslations();

            if (loadedTranslations && Object.keys(loadedTranslations).length > 3) {
                LANGUAGE_FLAGS = loadedFlags;
                TRANSLATIONS = loadedTranslations;
                log('init', '✅ Traducciones externas cargadas correctamente');
            } else {
                warn('init', '⚠️ Traducciones externas incompletas, usando fallback');
                LANGUAGE_FLAGS = FALLBACK_FLAGS;
                TRANSLATIONS = FALLBACK_TRANSLATIONS;
            }
        } catch (error) {
            conError('init', '❌ Error al cargar traducciones:', error);
            LANGUAGE_FLAGS = FALLBACK_FLAGS;
            TRANSLATIONS = FALLBACK_TRANSLATIONS;
        }

        // --- 2️⃣ Cargar configuración y establecer idioma ---
        try {
            cachedSettings = await Settings.get();
            log('init', 'Settings cargados:', cachedSettings);

            let langToUse;

            if (cachedSettings.language && TRANSLATIONS[cachedSettings.language] && cachedSettings.language !== CONFIG.defaultSettings.language) {
                // Idioma guardado por el usuario y válido
                langToUse = cachedSettings.language;
                log('init', `Idioma guardado válido: ${langToUse}`);
            } else {
                // Primera carga o idioma no configurado, usar navegador si existe
                const browserLang = detectBrowserLanguage();
                langToUse = TRANSLATIONS[browserLang] ? browserLang : CONFIG.defaultSettings.language;
                log('init', `Idioma detectado o fallback: ${langToUse}`);
            }

            await setLanguage(langToUse);
            log('init', `🌐 Idioma configurado: ${langToUse}`);

            // Guardar preferencia si era primera carga
            if (!cachedSettings.language || cachedSettings.language === CONFIG.defaultSettings.language) {
                cachedSettings.language = langToUse;
                await Settings.set(cachedSettings);
                log('init', `Idioma guardado en settings: ${langToUse}`);
            }
        } catch (error) {
            conError('init', '❌ Error al cargar settings o establecer idioma:', error);
        }

        // --- 3️⃣ Registrar comandos e inyectar estilos ---
        try {
            registerMenuCommands();
            injectStyles();
        } catch (error) {
            conError('init', '❌ Error al registrar menú o inyectar estilos:', error);
        }

        // --- 4️⃣ Inicializar observadores con reintento ---
        const observerTasks = [
            { name: 'observeShorts', fn: observeShorts },
            { name: 'observePlayer', fn: observePlayer },
            { name: 'createFloatingButtons', fn: createFloatingButtons }
        ];

        const results = await Promise.allSettled(
            observerTasks.map(o => retry(o.fn, 3, 1500, o.name))
        );

        const failed = results
            .map((r, i) => ({ ...r, name: observerTasks[i].name }))
            .filter(r => r.status === 'rejected');

        const succeeded = results
            .map((r, i) => ({ ...r, name: observerTasks[i].name }))
            .filter(r => r.status === 'fulfilled');

        if (failed.length > 0) {
            conError('init', `Fallaron ${failed.length} de ${results.length} inicializaciones`, failed);

            // Mostrar el toast interactivo con tooltip de errores
            showInitRetryToast(failed, observerTasks);
        }

        log('init', `🏁 Inicialización completada: ${succeeded.length} exitosas, ${failed.length} fallidas`, {
            succeeded: succeeded.map(s => s.name),
            failed: failed.map(f => ({ name: f.name, reason: f.reason?.message || f.reason }))
        });

        // --- 5️⃣ Eventos de navegación con debounce ---
        const debouncedNavigation = debounce(handleNavigation, 50);

        window.addEventListener('yt-navigate-finish', debouncedNavigation);
        window.addEventListener('popstate', debouncedNavigation);

        // --- 6️⃣ Cleanup antes de descargar la página ---
        window.addEventListener('beforeunload', cleanupAll);

        log('init', '✨ Script completamente inicializado');
    };

    init();
})();