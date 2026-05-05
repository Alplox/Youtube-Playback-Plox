# Userscript Structure
> Auto-generado el 2026-05-05 · versión 0.0.9-15
> **NO editar manualmente** — regenerar con `node ./scripts/generate-structure.mjs`

---

## Índice de secciones

1. [🔍 SISTEMA DE LOGGING](#sistema-de-logging) — línea 136
2. [🛡️ Initialization Guard (SPA Safety)](#initialization-guard-spa-safety) — línea 232
3. [🌐 Carga de Traducciones](#carga-de-traducciones) — línea 253
4. [📦 Config](#config) — línea 1058
5. [Selectors](#selectors) — línea 1132
6. [🌐 Funciones de traducción](#funciones-de-traduccin) — línea 1637
7. [🎨 Styles](#styles) — línea 1779
8. [🎨 Theme](#theme) — línea 4664
9. [🎨 SVG Icons](#svg-icons) — línea 4769
10. [🎨 Estilo barra progreso](#estilo-barra-progreso) — línea 4919
11. [💾 Storage + Settings](#storage-settings) — línea 5233
12. [📊 Variables Globales](#variables-globales) — línea 5789
13. [📢 Ad Selectors](#ad-selectors) — línea 5800
14. [📢 Ad Detector](#ad-detector) — línea 5911
15. [🔧 Utils](#utils) — línea 6107
16. [🔧 Formateo de Tiempo](#formateo-de-tiempo) — línea 6125
17. [🔧 SetInnerHTML](#setinnerhtml) — línea 6265
18. [🔧 Crear Elemento](#crear-elemento) — línea 6354
19. [🔧 UI Helpers](#ui-helpers) — línea 6478
20. [🔧 Debounce](#debounce) — línea 6568
21. [🎯 VirtualScroller](#virtualscroller) — línea 6593
22. [📤 Import/Export JSON](#importexport-json) — línea 6904
23. [☁️ GitHub Backup](#github-backup) — línea 7059
24. [📤 Import/Export FreeTube options](#importexport-freetube-options) — línea 7424
25. [🔄 Normalize Video Data](#normalize-video-data) — línea 7626
26. [🔄 Convert To FreeTube](#convert-to-freetube) — línea 7708
27. [Parse FreeTube DB](#parse-freetube-db) — línea 7799
28. [🔄 Convert From FreeTube](#convert-from-freetube) — línea 7856
29. [⬆ Export To FreeTube](#export-to-freetube) — línea 7887
30. [⬇ Import From FreeTube](#import-from-freetube) — línea 7934
31. [🔄 Insert Completion Event](#insert-completion-event) — línea 7992
32. [💾 Internal Save Regular Video](#internal-save-regular-video) — línea 8035
33. [💾 Save Regular Video](#save-regular-video) — línea 8156
34. [💾 Save Miniplayer](#save-miniplayer) — línea 8167
35. [💾 Save Shorts](#save-shorts) — línea 8178
36. [💾 Save Preview](#save-preview) — línea 8294
37. [💾 Save Livestream](#save-livestream) — línea 8382
38. [📺 Helpers](#helpers) — línea 8437
39. [📺 Obtiene datos guardados de un video](#obtiene-datos-guardados-de-un-video) — línea 8440
40. [📺 Get Player Video ID](#get-player-video-id) — línea 8490
41. [📺 Get YouTube Page Type](#get-youtube-page-type) — línea 8549
42. [📺 YouTube Resource URL Parser](#youtube-resource-url-parser) — línea 8711
43. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) — línea 8922
44. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) — línea 8935
45. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) — línea 8950
46. [📺 Get YouTube Playlist URL Type](#get-youtube-playlist-url-type) — línea 8963
47. [📺 Get Playlist Name](#get-playlist-name) — línea 8978
48. [🕒 Time Display](#time-display) — línea 9133
49. [🖼️ Display Button Helpers](#display-button-helpers) — línea 9173
50. [📢 Playback Bar Messages](#playback-bar-messages) — línea 9674
51. [📢 Shorts Messages](#shorts-messages) — línea 9774
52. [📢 Miniplayer Messages](#miniplayer-messages) — línea 9925
53. [📢 Inline Preview Messages](#inline-preview-messages) — línea 10081
54. [🍞 Toasts](#toasts) — línea 10249
55. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) — línea 10405
56. [⚙️ Settings UI](#settings-ui) — línea 10692
57. [📢 Notify Seek or Progress](#notify-seek-or-progress) — línea 11054
58. [🎵 Selección de Videos](#seleccin-de-videos) — línea 11121
59. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) — línea 11749
60. [Processing Functions](#processing-functions) — línea 12960
61. [PlaybackController](#playbackcontroller) — línea 13806
62. [📋 Get Cascaded Video Info](#get-cascaded-video-info) — línea 14199
63. [📂 Sort UI](#sort-ui) — línea 14671
64. [📂 Filters UI](#filters-ui) — línea 14859
65. [📂 Video List UI](#video-list-ui) — línea 15144
66. [📁 Update Video List](#update-video-list) — línea 15222
67. [🔘 Floating Button](#floating-button) — línea 15872
68. [📂 Show Saved Videos List](#show-saved-videos-list) — línea 15903
69. [📂 Video Entry](#video-entry) — línea 16115
70. [🗑️ Clear All Data](#clear-all-data) — línea 16722
71. [⚙️ Menu Commands](#menu-commands) — línea 16794
72. [🔄 Migración de Datos](#migracin-de-datos) — línea 16832
73. [🚀 Init](#init) — línea 17081

---

## 🔍 SISTEMA DE LOGGING
> Línea 136

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `noop` | 152 |
| `fn` | `build` | 154 |
| `fn` | `msg` | 198 |

## 🛡️ Initialization Guard (SPA Safety)
> Línea 232

_Sin funciones o constantes relevantes detectadas._

## 🌐 Carga de Traducciones
> Línea 253

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `fetchUrl` | 998 |

## 📦 Config
> Línea 1058

_Sin funciones o constantes relevantes detectadas._

## Selectors
> Línea 1132

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `DOMHelpers` | 1309 |
| `module` | `DOMHelpers` | 1309 |
| `fn` | `get` | 1335 |
| `fn` | `clear` | 1352 |

## 🌐 Funciones de traducción
> Línea 1637

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `normParams` | 1661 |
| `fn` | `candidates` | 1753 |
| `fn` | `prefix` | 1766 |

## 🎨 Styles
> Línea 1779

_Sin funciones o constantes relevantes detectadas._

## 🎨 Theme
> Línea 4664

_Sin funciones o constantes relevantes detectadas._

## 🎨 SVG Icons
> Línea 4769

_Sin funciones o constantes relevantes detectadas._

## 🎨 Estilo barra progreso
> Línea 4919

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `ratio` | 5210 |

## 💾 Storage + Settings
> Línea 5233

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `StorageAsync` | 5243 |
| `module` | `StorageAsync` | 5243 |
| `fn` | `IndexedDBAdapter` | 5385 |
| `module` | `IndexedDBAdapter` | 5385 |
| `fn` | `isSupported` | 5389 |
| `module` | `isSupported` | 5389 |
| `fn` | `isNonVideoStorageKey` | 5544 |

## 📊 Variables Globales
> Línea 5789

_Sin funciones o constantes relevantes detectadas._

## 📢 Ad Selectors
> Línea 5800

| Tipo | Nombre | Línea |
|---|---|---|
| `module` | `AdSelectors` | 5803 |
| `module` | `AdSelectorText` | 5884 |
| `fn` | `_adDetectorTick` | 5897 |

## 📢 Ad Detector
> Línea 5911

| Tipo | Nombre | Línea |
|---|---|---|
| `module` | `AdDetector` | 5915 |
| `fn` | `check` | 5964 |

## 🔧 Utils
> Línea 6107

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `escapeHTML` | 6115 |

## 🔧 Formateo de Tiempo
> Línea 6125

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `formatTime` | 6137 |
| `fn` | `parseTimeToSeconds` | 6215 |
| `fn` | `normalizeSeconds` | 6258 |

## 🔧 SetInnerHTML
> Línea 6265

_Sin funciones o constantes relevantes detectadas._

## 🔧 Crear Elemento
> Línea 6354

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `clamp` | 6451 |

## 🔧 UI Helpers
> Línea 6478

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `onOutsideClick` | 6521 |
| `fn` | `closeMenu` | 6525 |
| `fn` | `openMenu` | 6534 |

## 🔧 Debounce
> Línea 6568

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `debounce` | 6578 |

## 🎯 VirtualScroller
> Línea 6593

_Sin funciones o constantes relevantes detectadas._

## 📤 Import/Export JSON
> Línea 6904

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `getSyncData` | 6911 |
| `fn` | `keys` | 6914 |
| `fn` | `exportDataToFile` | 6942 |
| `fn` | `importDataFromFile` | 6985 |

## ☁️ GitHub Backup
> Línea 7059

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `backupToGitHubGist` | 7065 |
| `fn` | `cleanToken` | 7095 |
| `fn` | `backupToGithubRepository` | 7157 |
| `fn` | `performRemoteBackup` | 7288 |
| `fn` | `cleanToken` | 7300 |
| `fn` | `checkGitHubBackup` | 7365 |
| `fn` | `intervalMs` | 7395 |

## 📤 Import/Export FreeTube options
> Línea 7424

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `exportToFreeTube` | 7425 |
| `fn` | `importFromFreeTube` | 7471 |

## 🔄 Normalize Video Data
> Línea 7626

_Sin funciones o constantes relevantes detectadas._

## 🔄 Convert To FreeTube
> Línea 7708

_Sin funciones o constantes relevantes detectadas._

## Parse FreeTube DB
> Línea 7799

_Sin funciones o constantes relevantes detectadas._

## 🔄 Convert From FreeTube
> Línea 7856

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `progressPercent` | 7875 |

## ⬆ Export To FreeTube
> Línea 7887

_Sin funciones o constantes relevantes detectadas._

## ⬇ Import From FreeTube
> Línea 7934

_Sin funciones o constantes relevantes detectadas._

## 🔄 Insert Completion Event
> Línea 7992

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `base` | 8001 |

## 💾 Internal Save Regular Video
> Línea 8035

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `defaultPercent` | 8054 |

## 💾 Save Regular Video
> Línea 8156

_Sin funciones o constantes relevantes detectadas._

## 💾 Save Miniplayer
> Línea 8167

_Sin funciones o constantes relevantes detectadas._

## 💾 Save Shorts
> Línea 8178

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `defaultPercent` | 8197 |

## 💾 Save Preview
> Línea 8294

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `defaultPercent` | 8314 |
| `fn` | `resolvedVideoType` | 8326 |
| `module` | `resolvedVideoType` | 8326 |

## 💾 Save Livestream
> Línea 8382

_Sin funciones o constantes relevantes detectadas._

## 📺 Helpers
> Línea 8437

_Sin funciones o constantes relevantes detectadas._

## 📺 Obtiene datos guardados de un video
> Línea 8440

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `keys` | 8466 |

## 📺 Get Player Video ID
> Línea 8490

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `getPlayerVideoId` | 8499 |

## 📺 Get YouTube Page Type
> Línea 8549

_Sin funciones o constantes relevantes detectadas._

## 📺 YouTube Resource URL Parser
> Línea 8711

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `buildContext` | 8802 |

## 📺 Get YouTube Video ID from URL
> Línea 8922

_Sin funciones o constantes relevantes detectadas._

## 📺 Get YouTube Video Context from URL
> Línea 8935

_Sin funciones o constantes relevantes detectadas._

## 📺 Get YouTube Playlist ID from URL
> Línea 8950

_Sin funciones o constantes relevantes detectadas._

## 📺 Get YouTube Playlist URL Type
> Línea 8963

_Sin funciones o constantes relevantes detectadas._

## 📺 Get Playlist Name
> Línea 8978

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `shouldThrottlePlaylistNameFetch` | 8989 |
| `fn` | `requestPromise` | 9022 |

## 🕒 Time Display
> Línea 9133

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `scheduleDisplayClear` | 9163 |

## 🖼️ Display Button Helpers
> Línea 9173

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `syncDisplay` | 9229 |
| `fn` | `currentPlayerId` | 9231 |
| `fn` | `syncDisplay` | 9285 |
| `fn` | `currentPlayerId` | 9287 |
| `fn` | `target` | 9596 |

## 📢 Playback Bar Messages
> Línea 9674

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `handlePlay` | 9734 |

## 📢 Shorts Messages
> Línea 9774

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `reattach` | 9830 |
| `fn` | `postCheck` | 9843 |
| `fn` | `handlePlay` | 9888 |

## 📢 Miniplayer Messages
> Línea 9925

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `handlePlay` | 10032 |

## 📢 Inline Preview Messages
> Línea 10081

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `handlePlay` | 10181 |

## 🍞 Toasts
> Línea 10249

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `onTransitionEnd` | 10285 |

## ⚙️ Settings UI Rendering Helpers
> Línea 10405

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `renderLanguageSection` | 10408 |
| `fn` | `renderGeneralSettingSection` | 10439 |
| `fn` | `renderManualSavingOptionsSection` | 10456 |
| `fn` | `renderAutomaticSavingOptionsSection` | 10468 |
| `fn` | `renderNotificationSettingsSection` | 10502 |
| `fn` | `renderGitHubBackupSection` | 10552 |
| `fn` | `renderTabContent` | 10556 |

## ⚙️ Settings UI
> Línea 10692

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `closeModal` | 10710 |
| `fn` | `updateAlertPreview` | 10786 |
| `fn` | `getVal` | 10844 |
| `fn` | `isChecked` | 10845 |
| `fn` | `getVal` | 10931 |
| `fn` | `isChecked` | 10932 |

## 📢 Notify Seek or Progress
> Línea 11054

_Sin funciones o constantes relevantes detectadas._

## 🎵 Selección de Videos
> Línea 11121

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `getCurrentlyOpenFooterMenu` | 11209 |
| `fn` | `setCurrentlyOpenFooterMenu` | 11216 |
| `fn` | `refreshPlaylistState` | 11488 |
| `fn` | `showSuccess` | 11662 |

## 📺 Video Observer & Processing Manager
> Línea 11749

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `RouteContextResolver` | 11755 |
| `module` | `RouteContextResolver` | 11755 |
| `fn` | `isMiniplayerBlockingPreview` | 11756 |
| `module` | `CONTEXTS` | 11765 |
| `fn` | `getContextRoot` | 11770 |
| `fn` | `computeContextScore` | 11779 |
| `fn` | `resolveContext` | 11796 |
| `fn` | `getIneligibilityReason` | 11829 |
| `fn` | `canProcessContext` | 11845 |
| `fn` | `isContextLocked` | 11847 |
| `fn` | `SessionTelemetry` | 11861 |
| `module` | `SessionTelemetry` | 11861 |
| `fn` | `emit` | 11863 |
| `fn` | `FailSafeManager` | 11886 |
| `module` | `FailSafeManager` | 11886 |
| `fn` | `prune` | 11897 |
| `fn` | `getTotal` | 11902 |
| `fn` | `track` | 11907 |
| `fn` | `maybeExit` | 11919 |
| `fn` | `SessionFallbackManager` | 11936 |
| `module` | `SessionFallbackManager` | 11936 |
| `fn` | `clear` | 11938 |
| `fn` | `ensureForSession` | 11946 |
| `fn` | `VideoObserverManager` | 11992 |
| `module` | `VideoObserverManager` | 11992 |
| `fn` | `processBatch` | 12007 |
| `fn` | `ensurePreviewWatchdog` | 12055 |
| `fn` | `waitForWatchPlayerReactive` | 12116 |
| `fn` | `clearWaitState` | 12117 |
| `fn` | `tryProcess` | 12150 |
| `fn` | `bootstrap` | 12256 |
| `fn` | `scheduleAdRecovery` | 12314 |
| `fn` | `cleanup` | 12322 |
| `fn` | `onAdWait` | 12329 |
| `fn` | `enqueueVideo` | 12364 |
| `fn` | `enqueueWithResolver` | 12401 |
| `fn` | `requeueMiniplayer` | 12412 |
| `fn` | `initObservers` | 12427 |
| `fn` | `cleanup` | 12897 |
| `fn` | `clearCache` | 12940 |

## Processing Functions
> Línea 12960

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `SessionOrchestrator` | 12975 |
| `module` | `SessionOrchestrator` | 12975 |
| `fn` | `buildSessionId` | 12989 |
| `fn` | `buildIdentityKey` | 12994 |
| `fn` | `canTransition` | 13001 |
| `fn` | `transitionState` | 13007 |
| `fn` | `startSession` | 13025 |
| `fn` | `finalizeSession` | 13087 |
| `fn` | `handoffSession` | 13106 |
| `fn` | `shouldSkipResumeForActivePlayback` | 13139 |
| `fn` | `isResumeAtCompletionZone` | 13169 |
| `fn` | `finishPercent` | 13180 |
| `fn` | `stopAllSessions` | 13192 |
| `fn` | `startProcessingSession` | 13232 |
| `fn` | `fastPlaylistId` | 13274 |
| `fn` | `isHiddenGhost` | 13414 |
| `fn` | `helperVideoId` | 13634 |

## PlaybackController
> Línea 13806

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `getExpectedDuration` | 13850 |
| `fn` | `isReady` | 13866 |
| `fn` | `cooldownElapsed` | 14068 |

## 📋 Get Cascaded Video Info
> Línea 14199

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `finalizeInfo` | 14254 |

## 📂 Sort UI
> Línea 14671

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `findOption` | 14694 |
| `fn` | `openList` | 14770 |
| `fn` | `closeList` | 14779 |
| `fn` | `onOutsideClick` | 14787 |
| `fn` | `updateActive` | 14807 |

## 📂 Filters UI
> Línea 14859

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `updateActive` | 14871 |
| `fn` | `isDefault` | 14917 |
| `fn` | `getProgressIcon` | 14923 |
| `fn` | `getIconForRange` | 14931 |
| `fn` | `updateActive` | 14946 |
| `fn` | `updateFromInputs` | 15066 |

## 📂 Video List UI
> Línea 15144

_Sin funciones o constantes relevantes detectadas._

## 📁 Update Video List
> Línea 15222

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `getSortValue` | 15401 |
| `fn` | `t` | 15404 |
| `fn` | `prog` | 15418 |
| `fn` | `prog` | 15422 |
| `fn` | `headerTitle` | 15447 |
| `fn` | `formatBytes` | 15680 |
| `fn` | `calculateScriptStorageUsage` | 15701 |
| `fn` | `updateStorageUsageIndicator` | 15752 |

## 🔘 Floating Button
> Línea 15872

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `createFloatingButton` | 15875 |
| `fn` | `updateVisibility` | 15889 |

## 📂 Show Saved Videos List
> Línea 15903

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `toggleAdvanced` | 16021 |
| `fn` | `updateActiveFilterBadge` | 16031 |
| `fn` | `handleOverlayClick` | 16102 |

## 📂 Video Entry
> Línea 16115

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `deleteFromStorage` | 16242 |
| `fn` | `undoDelete` | 16247 |
| `fn` | `setupModalEventDelegation` | 16269 |
| `fn` | `cleanTitleForSpotify` | 16621 |

## 🗑️ Clear All Data
> Línea 16722

_Sin funciones o constantes relevantes detectadas._

## ⚙️ Menu Commands
> Línea 16794

_Sin funciones o constantes relevantes detectadas._

## 🔄 Migración de Datos
> Línea 16832

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `videoKeysGM` | 16889 |

## 🚀 Init
> Línea 17081

| Tipo | Nombre | Línea |
|---|---|---|
| `fn` | `initializeGlobal` | 17089 |
| `fn` | `handleNavigation` | 17111 |
| `fn` | `init` | 17402 |

