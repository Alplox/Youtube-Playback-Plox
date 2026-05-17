# Userscript Structure
> Auto-generated on 2026-05-17 · version 0.0.10
> **DO NOT EDIT MANUALLY** - regenerate with `node ./scripts/generate-structure.mjs`

---

## Sections index

1. [🔍 Logger System](#logger-system) - [line 138](../youtube-playback-plox.user.js#L138)
2. [🛡️ Initialization Guard (SPA Safety)](#initialization-guard-spa-safety) - [line 227](../youtube-playback-plox.user.js#L227)
3. [📦 Config](#config) - [line 297](../youtube-playback-plox.user.js#L297)
4. [📊 Global Constants](#global-constants) - [line 421](../youtube-playback-plox.user.js#L421)
5. [📊 Global Variables](#global-variables) - [line 430](../youtube-playback-plox.user.js#L430)
6. [🌐 Translations](#translations) - [line 466](../youtube-playback-plox.user.js#L466)
7. [🗄️ Event Handlers store](#event-handlers-store) - [line 899](../youtube-playback-plox.user.js#L899)
8. [📝 Selector System](#selector-system) - [line 982](../youtube-playback-plox.user.js#L982)
9. [💾 Simple LRU Cache](#simple-lru-cache) - [line 1291](../youtube-playback-plox.user.js#L1291)
10. [⚙️ DOM Cache System](#dom-cache-system) - [line 1349](../youtube-playback-plox.user.js#L1349)
11. [🌐 Translation Functions](#translation-functions) - [line 1700](../youtube-playback-plox.user.js#L1700)
12. [🎨 Styles](#styles) - [line 1866](../youtube-playback-plox.user.js#L1866)
13. [🎨 Theme](#theme) - [line 5297](../youtube-playback-plox.user.js#L5297)
14. [🎨 SVG Icons](#svg-icons) - [line 5375](../youtube-playback-plox.user.js#L5375)
15. [🎨 Estilo barra progreso](#estilo-barra-progreso) - [line 5534](../youtube-playback-plox.user.js#L5534)
16. [💾 Storage + Settings](#storage-settings) - [line 5848](../youtube-playback-plox.user.js#L5848)
17. [📢 Ad Caches](#ad-caches) - [line 6463](../youtube-playback-plox.user.js#L6463)
18. [📢 Ad Detector](#ad-detector) - [line 6486](../youtube-playback-plox.user.js#L6486)
19. [🔧 Utils](#utils) - [line 6662](../youtube-playback-plox.user.js#L6662)
20. [🔧 Escape HTML](#escape-html) - [line 6665](../youtube-playback-plox.user.js#L6665)
21. [🔧 Is Visibly Displayed](#is-visibly-displayed) - [line 6751](../youtube-playback-plox.user.js#L6751)
22. [🔧 Format Time](#format-time) - [line 6775](../youtube-playback-plox.user.js#L6775)
23. [🔧 parseTimeToSeconds](#parsetimetoseconds) - [line 6870](../youtube-playback-plox.user.js#L6870)
24. [🔧 normalizeSeconds](#normalizeseconds) - [line 6918](../youtube-playback-plox.user.js#L6918)
25. [🔧 setInnerHTML](#setinnerhtml) - [line 6944](../youtube-playback-plox.user.js#L6944)
26. [🔧 Crear Elemento](#crear-elemento) - [line 7004](../youtube-playback-plox.user.js#L7004)
27. [🔧 UI Helpers](#ui-helpers) - [line 7141](../youtube-playback-plox.user.js#L7141)
28. [🔧 Debounce](#debounce) - [line 7231](../youtube-playback-plox.user.js#L7231)
29. [🎯 VirtualScroller](#virtualscroller) - [line 7257](../youtube-playback-plox.user.js#L7257)
30. [📤 Import/Export JSON](#importexport-json) - [line 7676](../youtube-playback-plox.user.js#L7676)
31. [☁️ GitHub Backup](#github-backup) - [line 7831](../youtube-playback-plox.user.js#L7831)
32. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 8198](../youtube-playback-plox.user.js#L8198)
33. [🔄 Normalize Video Data](#normalize-video-data) - [line 8400](../youtube-playback-plox.user.js#L8400)
34. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 8482](../youtube-playback-plox.user.js#L8482)
35. [Parse FreeTube DB](#parse-freetube-db) - [line 8573](../youtube-playback-plox.user.js#L8573)
36. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 8653](../youtube-playback-plox.user.js#L8653)
37. [⬆ Export To FreeTube](#export-to-freetube) - [line 8684](../youtube-playback-plox.user.js#L8684)
38. [⬇ Import From FreeTube](#import-from-freetube) - [line 8731](../youtube-playback-plox.user.js#L8731)
39. [🔄 Insert Completion Event](#insert-completion-event) - [line 8789](../youtube-playback-plox.user.js#L8789)
40. [💾 Internal Save Regular Video](#internal-save-regular-video) - [line 8832](../youtube-playback-plox.user.js#L8832)
41. [💾 Save Regular Video](#save-regular-video) - [line 8954](../youtube-playback-plox.user.js#L8954)
42. [💾 Save Miniplayer](#save-miniplayer) - [line 8965](../youtube-playback-plox.user.js#L8965)
43. [💾 Save Shorts](#save-shorts) - [line 8976](../youtube-playback-plox.user.js#L8976)
44. [💾 Save Preview](#save-preview) - [line 9091](../youtube-playback-plox.user.js#L9091)
45. [💾 Save Livestream](#save-livestream) - [line 9180](../youtube-playback-plox.user.js#L9180)
46. [📺 Helpers](#helpers) - [line 9238](../youtube-playback-plox.user.js#L9238)
47. [📺 Obtiene datos guardados de un video](#obtiene-datos-guardados-de-un-video) - [line 9241](../youtube-playback-plox.user.js#L9241)
48. [📺 Get Player Video ID](#get-player-video-id) - [line 9291](../youtube-playback-plox.user.js#L9291)
49. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 9370](../youtube-playback-plox.user.js#L9370)
50. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 9571](../youtube-playback-plox.user.js#L9571)
51. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 9777](../youtube-playback-plox.user.js#L9777)
52. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 9799](../youtube-playback-plox.user.js#L9799)
53. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 9827](../youtube-playback-plox.user.js#L9827)
54. [📺 get Playlist Name](#get-playlist-name) - [line 9872](../youtube-playback-plox.user.js#L9872)
55. [🕒 Time Display](#time-display) - [line 10086](../youtube-playback-plox.user.js#L10086)
56. [🖼️ Display Button Helpers](#display-button-helpers) - [line 10122](../youtube-playback-plox.user.js#L10122)
57. [🍞 Toasts](#toasts) - [line 10895](../youtube-playback-plox.user.js#L10895)
58. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 11058](../youtube-playback-plox.user.js#L11058)
59. [⚙️ Settings UI](#settings-ui) - [line 11376](../youtube-playback-plox.user.js#L11376)
60. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 11772](../youtube-playback-plox.user.js#L11772)
61. [🎵 Selección de Videos](#seleccin-de-videos) - [line 11830](../youtube-playback-plox.user.js#L11830)
62. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 12458](../youtube-playback-plox.user.js#L12458)
63. [📡 Video Observer Manager](#video-observer-manager) - [line 12708](../youtube-playback-plox.user.js#L12708)
64. [Processing Functions](#processing-functions) - [line 13598](../youtube-playback-plox.user.js#L13598)
65. [PlaybackController](#playbackcontroller) - [line 14538](../youtube-playback-plox.user.js#L14538)
66. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 14944](../youtube-playback-plox.user.js#L14944)
67. [📂 Sort UI](#sort-ui) - [line 15434](../youtube-playback-plox.user.js#L15434)
68. [📂 Filters UI](#filters-ui) - [line 15622](../youtube-playback-plox.user.js#L15622)
69. [📂 Video List UI](#video-list-ui) - [line 15907](../youtube-playback-plox.user.js#L15907)
70. [📁 Update Video List](#update-video-list) - [line 16026](../youtube-playback-plox.user.js#L16026)
71. [🔘 Floating Button](#floating-button) - [line 16833](../youtube-playback-plox.user.js#L16833)
72. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 16861](../youtube-playback-plox.user.js#L16861)
73. [📂 Video Entry](#video-entry) - [line 17085](../youtube-playback-plox.user.js#L17085)
74. [🗑️ Clear All Data](#clear-all-data) - [line 18934](../youtube-playback-plox.user.js#L18934)
75. [⚙️ Menu Commands](#menu-commands) - [line 19006](../youtube-playback-plox.user.js#L19006)
76. [🔄 Migración de Datos](#migracin-de-datos) - [line 19044](../youtube-playback-plox.user.js#L19044)
77. [🚀 Init](#init) - [line 19421](../youtube-playback-plox.user.js#L19421)

---

## [🔍 Logger System](../youtube-playback-plox.user.js#L138)
> [Line 138](../youtube-playback-plox.user.js#L138)

| Type | Name | Line |
|---|---|---|
| `fn` | [`noop`](../youtube-playback-plox.user.js#L150) | [150](../youtube-playback-plox.user.js#L150) |
| `fn` | [`build`](../youtube-playback-plox.user.js#L152) | [152](../youtube-playback-plox.user.js#L152) |
| `fn` | [`msg`](../youtube-playback-plox.user.js#L196) | [196](../youtube-playback-plox.user.js#L196) |

## [🛡️ Initialization Guard (SPA Safety)](../youtube-playback-plox.user.js#L227)
> [Line 227](../youtube-playback-plox.user.js#L227)

_No relevant functions or constants detected._

## [📦 Config](../youtube-playback-plox.user.js#L297)
> [Line 297](../youtube-playback-plox.user.js#L297)

_No relevant functions or constants detected._

## [📊 Global Constants](../youtube-playback-plox.user.js#L421)
> [Line 421](../youtube-playback-plox.user.js#L421)

_No relevant functions or constants detected._

## [📊 Global Variables](../youtube-playback-plox.user.js#L430)
> [Line 430](../youtube-playback-plox.user.js#L430)

_No relevant functions or constants detected._

## [🌐 Translations](../youtube-playback-plox.user.js#L466)
> [Line 466](../youtube-playback-plox.user.js#L466)

| Type | Name | Line |
|---|---|---|
| `fn` | [`fetchUrl`](../youtube-playback-plox.user.js#L807) | [807](../youtube-playback-plox.user.js#L807) |

## [🗄️ Event Handlers store](../youtube-playback-plox.user.js#L899)
> [Line 899](../youtube-playback-plox.user.js#L899)

| Type | Name | Line |
|---|---|---|
| `fn` | [`dispose`](../youtube-playback-plox.user.js#L976) | [976](../youtube-playback-plox.user.js#L976) |

## [📝 Selector System](../youtube-playback-plox.user.js#L982)
> [Line 982](../youtube-playback-plox.user.js#L982)

| Type | Name | Line |
|---|---|---|
| `module` | [`PREFIX`](../youtube-playback-plox.user.js#L1052) | [1052](../youtube-playback-plox.user.js#L1052) |
| `fn` | [`deepFreeze`](../youtube-playback-plox.user.js#L1076) | [1076](../youtube-playback-plox.user.js#L1076) |
| `fn` | [`createSelectorSystem`](../youtube-playback-plox.user.js#L1107) | [1107](../youtube-playback-plox.user.js#L1107) |

## [💾 Simple LRU Cache](../youtube-playback-plox.user.js#L1291)
> [Line 1291](../youtube-playback-plox.user.js#L1291)

_No relevant functions or constants detected._

## [⚙️ DOM Cache System](../youtube-playback-plox.user.js#L1349)
> [Line 1349](../youtube-playback-plox.user.js#L1349)

| Type | Name | Line |
|---|---|---|
| `fn` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1366) | [1366](../youtube-playback-plox.user.js#L1366) |
| `module` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1366) | [1366](../youtube-playback-plox.user.js#L1366) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L1391) | [1391](../youtube-playback-plox.user.js#L1391) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L1415) | [1415](../youtube-playback-plox.user.js#L1415) |

## [🌐 Translation Functions](../youtube-playback-plox.user.js#L1700)
> [Line 1700](../youtube-playback-plox.user.js#L1700)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normParams`](../youtube-playback-plox.user.js#L1724) | [1724](../youtube-playback-plox.user.js#L1724) |
| `fn` | [`candidates`](../youtube-playback-plox.user.js#L1823) | [1823](../youtube-playback-plox.user.js#L1823) |
| `fn` | [`normalized`](../youtube-playback-plox.user.js#L1842) | [1842](../youtube-playback-plox.user.js#L1842) |

## [🎨 Styles](../youtube-playback-plox.user.js#L1866)
> [Line 1866](../youtube-playback-plox.user.js#L1866)

_No relevant functions or constants detected._

## [🎨 Theme](../youtube-playback-plox.user.js#L5297)
> [Line 5297](../youtube-playback-plox.user.js#L5297)

_No relevant functions or constants detected._

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L5375)
> [Line 5375](../youtube-playback-plox.user.js#L5375)

_No relevant functions or constants detected._

## [🎨 Estilo barra progreso](../youtube-playback-plox.user.js#L5534)
> [Line 5534](../youtube-playback-plox.user.js#L5534)

| Type | Name | Line |
|---|---|---|
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L5825) | [5825](../youtube-playback-plox.user.js#L5825) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L5848)
> [Line 5848](../youtube-playback-plox.user.js#L5848)

| Type | Name | Line |
|---|---|---|
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L5858) | [5858](../youtube-playback-plox.user.js#L5858) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L5858) | [5858](../youtube-playback-plox.user.js#L5858) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L6002) | [6002](../youtube-playback-plox.user.js#L6002) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L6002) | [6002](../youtube-playback-plox.user.js#L6002) |
| `fn` | [`isSupported`](../youtube-playback-plox.user.js#L6006) | [6006](../youtube-playback-plox.user.js#L6006) |
| `module` | [`isSupported`](../youtube-playback-plox.user.js#L6006) | [6006](../youtube-playback-plox.user.js#L6006) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L6161) | [6161](../youtube-playback-plox.user.js#L6161) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L6289) | [6289](../youtube-playback-plox.user.js#L6289) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L6307) | [6307](../youtube-playback-plox.user.js#L6307) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L6328) | [6328](../youtube-playback-plox.user.js#L6328) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6341) | [6341](../youtube-playback-plox.user.js#L6341) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6408) | [6408](../youtube-playback-plox.user.js#L6408) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6426) | [6426](../youtube-playback-plox.user.js#L6426) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L6434) | [6434](../youtube-playback-plox.user.js#L6434) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L6452) | [6452](../youtube-playback-plox.user.js#L6452) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L6463)
> [Line 6463](../youtube-playback-plox.user.js#L6463)

| Type | Name | Line |
|---|---|---|
| `fn` | [`_adDetectorTick`](../youtube-playback-plox.user.js#L6472) | [6472](../youtube-playback-plox.user.js#L6472) |

## [📢 Ad Detector](../youtube-playback-plox.user.js#L6486)
> [Line 6486](../youtube-playback-plox.user.js#L6486)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L6491) | [6491](../youtube-playback-plox.user.js#L6491) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L6540) | [6540](../youtube-playback-plox.user.js#L6540) |

## [🔧 Utils](../youtube-playback-plox.user.js#L6662)
> [Line 6662](../youtube-playback-plox.user.js#L6662)

_No relevant functions or constants detected._

## [🔧 Escape HTML](../youtube-playback-plox.user.js#L6665)
> [Line 6665](../youtube-playback-plox.user.js#L6665)

| Type | Name | Line |
|---|---|---|
| `fn` | [`unescapeHTML`](../youtube-playback-plox.user.js#L6676) | [6676](../youtube-playback-plox.user.js#L6676) |
| `fn` | [`escapeHTML`](../youtube-playback-plox.user.js#L6698) | [6698](../youtube-playback-plox.user.js#L6698) |

## [🔧 Is Visibly Displayed](../youtube-playback-plox.user.js#L6751)
> [Line 6751](../youtube-playback-plox.user.js#L6751)

_No relevant functions or constants detected._

## [🔧 Format Time](../youtube-playback-plox.user.js#L6775)
> [Line 6775](../youtube-playback-plox.user.js#L6775)

| Type | Name | Line |
|---|---|---|
| `fn` | [`formatTime`](../youtube-playback-plox.user.js#L6798) | [6798](../youtube-playback-plox.user.js#L6798) |

## [🔧 parseTimeToSeconds](../youtube-playback-plox.user.js#L6870)
> [Line 6870](../youtube-playback-plox.user.js#L6870)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseTimeToSeconds`](../youtube-playback-plox.user.js#L6893) | [6893](../youtube-playback-plox.user.js#L6893) |

## [🔧 normalizeSeconds](../youtube-playback-plox.user.js#L6918)
> [Line 6918](../youtube-playback-plox.user.js#L6918)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeSeconds`](../youtube-playback-plox.user.js#L6937) | [6937](../youtube-playback-plox.user.js#L6937) |

## [🔧 setInnerHTML](../youtube-playback-plox.user.js#L6944)
> [Line 6944](../youtube-playback-plox.user.js#L6944)

_No relevant functions or constants detected._

## [🔧 Crear Elemento](../youtube-playback-plox.user.js#L7004)
> [Line 7004](../youtube-playback-plox.user.js#L7004)

| Type | Name | Line |
|---|---|---|
| `fn` | [`append`](../youtube-playback-plox.user.js#L7084) | [7084](../youtube-playback-plox.user.js#L7084) |
| `fn` | [`clamp`](../youtube-playback-plox.user.js#L7114) | [7114](../youtube-playback-plox.user.js#L7114) |

## [🔧 UI Helpers](../youtube-playback-plox.user.js#L7141)
> [Line 7141](../youtube-playback-plox.user.js#L7141)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L7184) | [7184](../youtube-playback-plox.user.js#L7184) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L7188) | [7188](../youtube-playback-plox.user.js#L7188) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L7197) | [7197](../youtube-playback-plox.user.js#L7197) |

## [🔧 Debounce](../youtube-playback-plox.user.js#L7231)
> [Line 7231](../youtube-playback-plox.user.js#L7231)

| Type | Name | Line |
|---|---|---|
| `fn` | [`debounce`](../youtube-playback-plox.user.js#L7241) | [7241](../youtube-playback-plox.user.js#L7241) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L7257)
> [Line 7257](../youtube-playback-plox.user.js#L7257)

_No relevant functions or constants detected._

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L7676)
> [Line 7676](../youtube-playback-plox.user.js#L7676)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L7683) | [7683](../youtube-playback-plox.user.js#L7683) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L7686) | [7686](../youtube-playback-plox.user.js#L7686) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L7714) | [7714](../youtube-playback-plox.user.js#L7714) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L7757) | [7757](../youtube-playback-plox.user.js#L7757) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L7831)
> [Line 7831](../youtube-playback-plox.user.js#L7831)

| Type | Name | Line |
|---|---|---|
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L7837) | [7837](../youtube-playback-plox.user.js#L7837) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L7865) | [7865](../youtube-playback-plox.user.js#L7865) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7866) | [7866](../youtube-playback-plox.user.js#L7866) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L7928) | [7928](../youtube-playback-plox.user.js#L7928) |
| `fn` | [`cleanOwner`](../youtube-playback-plox.user.js#L7939) | [7939](../youtube-playback-plox.user.js#L7939) |
| `fn` | [`cleanName`](../youtube-playback-plox.user.js#L7940) | [7940](../youtube-playback-plox.user.js#L7940) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7941) | [7941](../youtube-playback-plox.user.js#L7941) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L8062) | [8062](../youtube-playback-plox.user.js#L8062) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L8074) | [8074](../youtube-playback-plox.user.js#L8074) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L8139) | [8139](../youtube-playback-plox.user.js#L8139) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L8169) | [8169](../youtube-playback-plox.user.js#L8169) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L8198)
> [Line 8198](../youtube-playback-plox.user.js#L8198)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L8199) | [8199](../youtube-playback-plox.user.js#L8199) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L8245) | [8245](../youtube-playback-plox.user.js#L8245) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L8400)
> [Line 8400](../youtube-playback-plox.user.js#L8400)

_No relevant functions or constants detected._

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L8482)
> [Line 8482](../youtube-playback-plox.user.js#L8482)

_No relevant functions or constants detected._

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L8573)
> [Line 8573](../youtube-playback-plox.user.js#L8573)

_No relevant functions or constants detected._

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L8653)
> [Line 8653](../youtube-playback-plox.user.js#L8653)

| Type | Name | Line |
|---|---|---|
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L8672) | [8672](../youtube-playback-plox.user.js#L8672) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L8684)
> [Line 8684](../youtube-playback-plox.user.js#L8684)

_No relevant functions or constants detected._

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L8731)
> [Line 8731](../youtube-playback-plox.user.js#L8731)

_No relevant functions or constants detected._

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L8789)
> [Line 8789](../youtube-playback-plox.user.js#L8789)

| Type | Name | Line |
|---|---|---|
| `fn` | [`base`](../youtube-playback-plox.user.js#L8798) | [8798](../youtube-playback-plox.user.js#L8798) |

## [💾 Internal Save Regular Video](../youtube-playback-plox.user.js#L8832)
> [Line 8832](../youtube-playback-plox.user.js#L8832)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8854) | [8854](../youtube-playback-plox.user.js#L8854) |

## [💾 Save Regular Video](../youtube-playback-plox.user.js#L8954)
> [Line 8954](../youtube-playback-plox.user.js#L8954)

_No relevant functions or constants detected._

## [💾 Save Miniplayer](../youtube-playback-plox.user.js#L8965)
> [Line 8965](../youtube-playback-plox.user.js#L8965)

_No relevant functions or constants detected._

## [💾 Save Shorts](../youtube-playback-plox.user.js#L8976)
> [Line 8976](../youtube-playback-plox.user.js#L8976)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8998) | [8998](../youtube-playback-plox.user.js#L8998) |

## [💾 Save Preview](../youtube-playback-plox.user.js#L9091)
> [Line 9091](../youtube-playback-plox.user.js#L9091)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L9114) | [9114](../youtube-playback-plox.user.js#L9114) |
| `fn` | [`resolvedVideoType`](../youtube-playback-plox.user.js#L9126) | [9126](../youtube-playback-plox.user.js#L9126) |
| `module` | [`resolvedVideoType`](../youtube-playback-plox.user.js#L9126) | [9126](../youtube-playback-plox.user.js#L9126) |

## [💾 Save Livestream](../youtube-playback-plox.user.js#L9180)
> [Line 9180](../youtube-playback-plox.user.js#L9180)

_No relevant functions or constants detected._

## [📺 Helpers](../youtube-playback-plox.user.js#L9238)
> [Line 9238](../youtube-playback-plox.user.js#L9238)

_No relevant functions or constants detected._

## [📺 Obtiene datos guardados de un video](../youtube-playback-plox.user.js#L9241)
> [Line 9241](../youtube-playback-plox.user.js#L9241)

| Type | Name | Line |
|---|---|---|
| `fn` | [`keys`](../youtube-playback-plox.user.js#L9267) | [9267](../youtube-playback-plox.user.js#L9267) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L9291)
> [Line 9291](../youtube-playback-plox.user.js#L9291)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L9327) | [9327](../youtube-playback-plox.user.js#L9327) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L9370)
> [Line 9370](../youtube-playback-plox.user.js#L9370)

_No relevant functions or constants detected._

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L9571)
> [Line 9571](../youtube-playback-plox.user.js#L9571)

| Type | Name | Line |
|---|---|---|
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L9668) | [9668](../youtube-playback-plox.user.js#L9668) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L9777)
> [Line 9777](../youtube-playback-plox.user.js#L9777)

_No relevant functions or constants detected._

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L9799)
> [Line 9799](../youtube-playback-plox.user.js#L9799)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L9827)
> [Line 9827](../youtube-playback-plox.user.js#L9827)

_No relevant functions or constants detected._

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L9872)
> [Line 9872](../youtube-playback-plox.user.js#L9872)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L9893) | [9893](../youtube-playback-plox.user.js#L9893) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L9974) | [9974](../youtube-playback-plox.user.js#L9974) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L10059) | [10059](../youtube-playback-plox.user.js#L10059) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L10086)
> [Line 10086](../youtube-playback-plox.user.js#L10086)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L10112) | [10112](../youtube-playback-plox.user.js#L10112) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L10122)
> [Line 10122](../youtube-playback-plox.user.js#L10122)

| Type | Name | Line |
|---|---|---|
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L10400) | [10400](../youtube-playback-plox.user.js#L10400) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L10400) | [10400](../youtube-playback-plox.user.js#L10400) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L10414) | [10414](../youtube-playback-plox.user.js#L10414) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L10422) | [10422](../youtube-playback-plox.user.js#L10422) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L10430) | [10430](../youtube-playback-plox.user.js#L10430) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L10438) | [10438](../youtube-playback-plox.user.js#L10438) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L10461) | [10461](../youtube-playback-plox.user.js#L10461) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L10473) | [10473](../youtube-playback-plox.user.js#L10473) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L10476) | [10476](../youtube-playback-plox.user.js#L10476) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L10486) | [10486](../youtube-playback-plox.user.js#L10486) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L10491) | [10491](../youtube-playback-plox.user.js#L10491) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L10514) | [10514](../youtube-playback-plox.user.js#L10514) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L10533) | [10533](../youtube-playback-plox.user.js#L10533) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L10541) | [10541](../youtube-playback-plox.user.js#L10541) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L10585) | [10585](../youtube-playback-plox.user.js#L10585) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L10640) | [10640](../youtube-playback-plox.user.js#L10640) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L10699) | [10699](../youtube-playback-plox.user.js#L10699) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L10796) | [10796](../youtube-playback-plox.user.js#L10796) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L10809) | [10809](../youtube-playback-plox.user.js#L10809) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L10813) | [10813](../youtube-playback-plox.user.js#L10813) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L10820) | [10820](../youtube-playback-plox.user.js#L10820) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L10838) | [10838](../youtube-playback-plox.user.js#L10838) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L10895)
> [Line 10895](../youtube-playback-plox.user.js#L10895)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L10931) | [10931](../youtube-playback-plox.user.js#L10931) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L11058)
> [Line 11058](../youtube-playback-plox.user.js#L11058)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L11061) | [11061](../youtube-playback-plox.user.js#L11061) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L11099) | [11099](../youtube-playback-plox.user.js#L11099) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L11116) | [11116](../youtube-playback-plox.user.js#L11116) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L11134) | [11134](../youtube-playback-plox.user.js#L11134) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L11168) | [11168](../youtube-playback-plox.user.js#L11168) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L11218) | [11218](../youtube-playback-plox.user.js#L11218) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L11222) | [11222](../youtube-playback-plox.user.js#L11222) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L11359) | [11359](../youtube-playback-plox.user.js#L11359) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L11376)
> [Line 11376](../youtube-playback-plox.user.js#L11376)

| Type | Name | Line |
|---|---|---|
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L11394) | [11394](../youtube-playback-plox.user.js#L11394) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L11471) | [11471](../youtube-playback-plox.user.js#L11471) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L11556) | [11556](../youtube-playback-plox.user.js#L11556) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L11557) | [11557](../youtube-playback-plox.user.js#L11557) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L11646) | [11646](../youtube-playback-plox.user.js#L11646) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L11647) | [11647](../youtube-playback-plox.user.js#L11647) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L11772)
> [Line 11772](../youtube-playback-plox.user.js#L11772)

_No relevant functions or constants detected._

## [🎵 Selección de Videos](../youtube-playback-plox.user.js#L11830)
> [Line 11830](../youtube-playback-plox.user.js#L11830)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11918) | [11918](../youtube-playback-plox.user.js#L11918) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11925) | [11925](../youtube-playback-plox.user.js#L11925) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L12197) | [12197](../youtube-playback-plox.user.js#L12197) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L12371) | [12371](../youtube-playback-plox.user.js#L12371) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L12458)
> [Line 12458](../youtube-playback-plox.user.js#L12458)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L12464) | [12464](../youtube-playback-plox.user.js#L12464) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L12464) | [12464](../youtube-playback-plox.user.js#L12464) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L12465) | [12465](../youtube-playback-plox.user.js#L12465) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L12474) | [12474](../youtube-playback-plox.user.js#L12474) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L12479) | [12479](../youtube-playback-plox.user.js#L12479) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L12488) | [12488](../youtube-playback-plox.user.js#L12488) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L12505) | [12505](../youtube-playback-plox.user.js#L12505) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L12538) | [12538](../youtube-playback-plox.user.js#L12538) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L12563) | [12563](../youtube-playback-plox.user.js#L12563) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L12565) | [12565](../youtube-playback-plox.user.js#L12565) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L12579) | [12579](../youtube-playback-plox.user.js#L12579) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L12579) | [12579](../youtube-playback-plox.user.js#L12579) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L12581) | [12581](../youtube-playback-plox.user.js#L12581) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12604) | [12604](../youtube-playback-plox.user.js#L12604) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12604) | [12604](../youtube-playback-plox.user.js#L12604) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L12615) | [12615](../youtube-playback-plox.user.js#L12615) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L12620) | [12620](../youtube-playback-plox.user.js#L12620) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L12625) | [12625](../youtube-playback-plox.user.js#L12625) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L12637) | [12637](../youtube-playback-plox.user.js#L12637) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12654) | [12654](../youtube-playback-plox.user.js#L12654) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12654) | [12654](../youtube-playback-plox.user.js#L12654) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L12656) | [12656](../youtube-playback-plox.user.js#L12656) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L12664) | [12664](../youtube-playback-plox.user.js#L12664) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L12708)
> [Line 12708](../youtube-playback-plox.user.js#L12708)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12713) | [12713](../youtube-playback-plox.user.js#L12713) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12713) | [12713](../youtube-playback-plox.user.js#L12713) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L12728) | [12728](../youtube-playback-plox.user.js#L12728) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L12763) | [12763](../youtube-playback-plox.user.js#L12763) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L12796) | [12796](../youtube-playback-plox.user.js#L12796) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L12797) | [12797](../youtube-playback-plox.user.js#L12797) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L12828) | [12828](../youtube-playback-plox.user.js#L12828) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L12884) | [12884](../youtube-playback-plox.user.js#L12884) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L12949) | [12949](../youtube-playback-plox.user.js#L12949) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12957) | [12957](../youtube-playback-plox.user.js#L12957) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L12964) | [12964](../youtube-playback-plox.user.js#L12964) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L13002) | [13002](../youtube-playback-plox.user.js#L13002) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L13042) | [13042](../youtube-playback-plox.user.js#L13042) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L13053) | [13053](../youtube-playback-plox.user.js#L13053) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L13068) | [13068](../youtube-playback-plox.user.js#L13068) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L13535) | [13535](../youtube-playback-plox.user.js#L13535) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L13578) | [13578](../youtube-playback-plox.user.js#L13578) |

## [Processing Functions](../youtube-playback-plox.user.js#L13598)
> [Line 13598](../youtube-playback-plox.user.js#L13598)

| Type | Name | Line |
|---|---|---|
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L13613) | [13613](../youtube-playback-plox.user.js#L13613) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L13613) | [13613](../youtube-playback-plox.user.js#L13613) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L13627) | [13627](../youtube-playback-plox.user.js#L13627) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L13632) | [13632](../youtube-playback-plox.user.js#L13632) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L13639) | [13639](../youtube-playback-plox.user.js#L13639) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L13645) | [13645](../youtube-playback-plox.user.js#L13645) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L13663) | [13663](../youtube-playback-plox.user.js#L13663) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L13726) | [13726](../youtube-playback-plox.user.js#L13726) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L13746) | [13746](../youtube-playback-plox.user.js#L13746) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L13779) | [13779](../youtube-playback-plox.user.js#L13779) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L13809) | [13809](../youtube-playback-plox.user.js#L13809) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L13820) | [13820](../youtube-playback-plox.user.js#L13820) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L13832) | [13832](../youtube-playback-plox.user.js#L13832) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L13872) | [13872](../youtube-playback-plox.user.js#L13872) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L13920) | [13920](../youtube-playback-plox.user.js#L13920) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L14072) | [14072](../youtube-playback-plox.user.js#L14072) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L14216) | [14216](../youtube-playback-plox.user.js#L14216) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L14323) | [14323](../youtube-playback-plox.user.js#L14323) |

## [PlaybackController](../youtube-playback-plox.user.js#L14538)
> [Line 14538](../youtube-playback-plox.user.js#L14538)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L14582) | [14582](../youtube-playback-plox.user.js#L14582) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L14598) | [14598](../youtube-playback-plox.user.js#L14598) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L14812) | [14812](../youtube-playback-plox.user.js#L14812) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L14944)
> [Line 14944](../youtube-playback-plox.user.js#L14944)

| Type | Name | Line |
|---|---|---|
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L15013) | [15013](../youtube-playback-plox.user.js#L15013) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L15434)
> [Line 15434](../youtube-playback-plox.user.js#L15434)

| Type | Name | Line |
|---|---|---|
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L15457) | [15457](../youtube-playback-plox.user.js#L15457) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L15533) | [15533](../youtube-playback-plox.user.js#L15533) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L15542) | [15542](../youtube-playback-plox.user.js#L15542) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L15550) | [15550](../youtube-playback-plox.user.js#L15550) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15570) | [15570](../youtube-playback-plox.user.js#L15570) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L15622)
> [Line 15622](../youtube-playback-plox.user.js#L15622)

| Type | Name | Line |
|---|---|---|
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15634) | [15634](../youtube-playback-plox.user.js#L15634) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L15680) | [15680](../youtube-playback-plox.user.js#L15680) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L15686) | [15686](../youtube-playback-plox.user.js#L15686) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L15694) | [15694](../youtube-playback-plox.user.js#L15694) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15709) | [15709](../youtube-playback-plox.user.js#L15709) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L15829) | [15829](../youtube-playback-plox.user.js#L15829) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L15907)
> [Line 15907](../youtube-playback-plox.user.js#L15907)

_No relevant functions or constants detected._

## [📁 Update Video List](../youtube-playback-plox.user.js#L16026)
> [Line 16026](../youtube-playback-plox.user.js#L16026)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSortValue`](../youtube-playback-plox.user.js#L16206) | [16206](../youtube-playback-plox.user.js#L16206) |
| `fn` | [`t`](../youtube-playback-plox.user.js#L16209) | [16209](../youtube-playback-plox.user.js#L16209) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L16223) | [16223](../youtube-playback-plox.user.js#L16223) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L16227) | [16227](../youtube-playback-plox.user.js#L16227) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L16257) | [16257](../youtube-playback-plox.user.js#L16257) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L16276) | [16276](../youtube-playback-plox.user.js#L16276) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L16416) | [16416](../youtube-playback-plox.user.js#L16416) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L16524) | [16524](../youtube-playback-plox.user.js#L16524) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L16641) | [16641](../youtube-playback-plox.user.js#L16641) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L16662) | [16662](../youtube-playback-plox.user.js#L16662) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L16713) | [16713](../youtube-playback-plox.user.js#L16713) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L16833)
> [Line 16833](../youtube-playback-plox.user.js#L16833)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L16836) | [16836](../youtube-playback-plox.user.js#L16836) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L16850) | [16850](../youtube-playback-plox.user.js#L16850) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L16861)
> [Line 16861](../youtube-playback-plox.user.js#L16861)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L16988) | [16988](../youtube-playback-plox.user.js#L16988) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L16998) | [16998](../youtube-playback-plox.user.js#L16998) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L17073) | [17073](../youtube-playback-plox.user.js#L17073) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L17085)
> [Line 17085](../youtube-playback-plox.user.js#L17085)

| Type | Name | Line |
|---|---|---|
| `fn` | [`deleteFromStorage`](../youtube-playback-plox.user.js#L17212) | [17212](../youtube-playback-plox.user.js#L17212) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L17217) | [17217](../youtube-playback-plox.user.js#L17217) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L17263) | [17263](../youtube-playback-plox.user.js#L17263) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L17311) | [17311](../youtube-playback-plox.user.js#L17311) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L17317) | [17317](../youtube-playback-plox.user.js#L17317) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L17334) | [17334](../youtube-playback-plox.user.js#L17334) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L17368) | [17368](../youtube-playback-plox.user.js#L17368) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L17412) | [17412](../youtube-playback-plox.user.js#L17412) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L17490) | [17490](../youtube-playback-plox.user.js#L17490) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L17496) | [17496](../youtube-playback-plox.user.js#L17496) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L17512) | [17512](../youtube-playback-plox.user.js#L17512) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L17522) | [17522](../youtube-playback-plox.user.js#L17522) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L17530) | [17530](../youtube-playback-plox.user.js#L17530) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L17535) | [17535](../youtube-playback-plox.user.js#L17535) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L17542) | [17542](../youtube-playback-plox.user.js#L17542) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L17545) | [17545](../youtube-playback-plox.user.js#L17545) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L17549) | [17549](../youtube-playback-plox.user.js#L17549) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L17595) | [17595](../youtube-playback-plox.user.js#L17595) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L17595) | [17595](../youtube-playback-plox.user.js#L17595) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L17609) | [17609](../youtube-playback-plox.user.js#L17609) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L17900) | [17900](../youtube-playback-plox.user.js#L17900) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L17914) | [17914](../youtube-playback-plox.user.js#L17914) |
| `fn` | [`makeToolbarGroup`](../youtube-playback-plox.user.js#L18029) | [18029](../youtube-playback-plox.user.js#L18029) |
| `fn` | [`makeDisplayToggle`](../youtube-playback-plox.user.js#L18040) | [18040](../youtube-playback-plox.user.js#L18040) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L18086) | [18086](../youtube-playback-plox.user.js#L18086) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L18087) | [18087](../youtube-playback-plox.user.js#L18087) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L18109) | [18109](../youtube-playback-plox.user.js#L18109) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L18110) | [18110](../youtube-playback-plox.user.js#L18110) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L18161) | [18161](../youtube-playback-plox.user.js#L18161) |
| `fn` | [`syncOpacityActive`](../youtube-playback-plox.user.js#L18243) | [18243](../youtube-playback-plox.user.js#L18243) |
| `fn` | [`syncStyleActive`](../youtube-playback-plox.user.js#L18316) | [18316](../youtube-playback-plox.user.js#L18316) |
| `fn` | [`syncVisActive`](../youtube-playback-plox.user.js#L18356) | [18356](../youtube-playback-plox.user.js#L18356) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L18402) | [18402](../youtube-playback-plox.user.js#L18402) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L18501) | [18501](../youtube-playback-plox.user.js#L18501) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L18584) | [18584](../youtube-playback-plox.user.js#L18584) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L18838) | [18838](../youtube-playback-plox.user.js#L18838) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L18861) | [18861](../youtube-playback-plox.user.js#L18861) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L18862) | [18862](../youtube-playback-plox.user.js#L18862) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L18934)
> [Line 18934](../youtube-playback-plox.user.js#L18934)

_No relevant functions or constants detected._

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L19006)
> [Line 19006](../youtube-playback-plox.user.js#L19006)

_No relevant functions or constants detected._

## [🔄 Migración de Datos](../youtube-playback-plox.user.js#L19044)
> [Line 19044](../youtube-playback-plox.user.js#L19044)

| Type | Name | Line |
|---|---|---|
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L19101) | [19101](../youtube-playback-plox.user.js#L19101) |

## [🚀 Init](../youtube-playback-plox.user.js#L19421)
> [Line 19421](../youtube-playback-plox.user.js#L19421)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L19430) | [19430](../youtube-playback-plox.user.js#L19430) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L19452) | [19452](../youtube-playback-plox.user.js#L19452) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L19761) | [19761](../youtube-playback-plox.user.js#L19761) |

