# Userscript Structure
> Auto-generated on 2026-05-18 · version 0.0.10-1
> **DO NOT EDIT MANUALLY** - regenerate with `node ./scripts/generate-structure.mjs`

---

## Sections index

1. [🔍 Logger System](#logger-system) - [line 138](../youtube-playback-plox.user.js#L138)
2. [🛡️ Initialization Guard (SPA Safety)](#initialization-guard-spa-safety) - [line 227](../youtube-playback-plox.user.js#L227)
3. [📦 Config](#config) - [line 297](../youtube-playback-plox.user.js#L297)
4. [📊 Global Constants](#global-constants) - [line 425](../youtube-playback-plox.user.js#L425)
5. [📊 Global Variables](#global-variables) - [line 434](../youtube-playback-plox.user.js#L434)
6. [🌐 Translations](#translations) - [line 470](../youtube-playback-plox.user.js#L470)
7. [🗄️ Event Handlers store](#event-handlers-store) - [line 907](../youtube-playback-plox.user.js#L907)
8. [📝 Selector System](#selector-system) - [line 990](../youtube-playback-plox.user.js#L990)
9. [💾 Simple LRU Cache](#simple-lru-cache) - [line 1299](../youtube-playback-plox.user.js#L1299)
10. [⚙️ DOM Cache System](#dom-cache-system) - [line 1357](../youtube-playback-plox.user.js#L1357)
11. [🌐 Translation Functions](#translation-functions) - [line 1708](../youtube-playback-plox.user.js#L1708)
12. [🎨 Styles](#styles) - [line 1874](../youtube-playback-plox.user.js#L1874)
13. [🎨 Theme](#theme) - [line 5376](../youtube-playback-plox.user.js#L5376)
14. [🎨 SVG Icons](#svg-icons) - [line 5454](../youtube-playback-plox.user.js#L5454)
15. [🎨 Estilo barra progreso](#estilo-barra-progreso) - [line 5615](../youtube-playback-plox.user.js#L5615)
16. [💾 Storage + Settings](#storage-settings) - [line 5929](../youtube-playback-plox.user.js#L5929)
17. [📢 Ad Caches](#ad-caches) - [line 6544](../youtube-playback-plox.user.js#L6544)
18. [📢 Ad Detector](#ad-detector) - [line 6567](../youtube-playback-plox.user.js#L6567)
19. [🔧 Utils](#utils) - [line 6743](../youtube-playback-plox.user.js#L6743)
20. [🔧 Escape HTML](#escape-html) - [line 6746](../youtube-playback-plox.user.js#L6746)
21. [🔧 Is Visibly Displayed](#is-visibly-displayed) - [line 6828](../youtube-playback-plox.user.js#L6828)
22. [🔧 Format Time](#format-time) - [line 6852](../youtube-playback-plox.user.js#L6852)
23. [🔧 parseTimeToSeconds](#parsetimetoseconds) - [line 6947](../youtube-playback-plox.user.js#L6947)
24. [🔧 normalizeSeconds](#normalizeseconds) - [line 6995](../youtube-playback-plox.user.js#L6995)
25. [🔧 setInnerHTML](#setinnerhtml) - [line 7021](../youtube-playback-plox.user.js#L7021)
26. [🔧 Crear Elemento](#crear-elemento) - [line 7081](../youtube-playback-plox.user.js#L7081)
27. [🔧 UI Helpers](#ui-helpers) - [line 7218](../youtube-playback-plox.user.js#L7218)
28. [🔧 Debounce](#debounce) - [line 7308](../youtube-playback-plox.user.js#L7308)
29. [🎯 VirtualScroller](#virtualscroller) - [line 7334](../youtube-playback-plox.user.js#L7334)
30. [📤 Import/Export JSON](#importexport-json) - [line 7753](../youtube-playback-plox.user.js#L7753)
31. [☁️ GitHub Backup](#github-backup) - [line 7908](../youtube-playback-plox.user.js#L7908)
32. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 8275](../youtube-playback-plox.user.js#L8275)
33. [🔄 Normalize Video Data](#normalize-video-data) - [line 8477](../youtube-playback-plox.user.js#L8477)
34. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 8559](../youtube-playback-plox.user.js#L8559)
35. [Parse FreeTube DB](#parse-freetube-db) - [line 8650](../youtube-playback-plox.user.js#L8650)
36. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 8730](../youtube-playback-plox.user.js#L8730)
37. [⬆ Export To FreeTube](#export-to-freetube) - [line 8761](../youtube-playback-plox.user.js#L8761)
38. [⬇ Import From FreeTube](#import-from-freetube) - [line 8808](../youtube-playback-plox.user.js#L8808)
39. [🔄 Insert Completion Event](#insert-completion-event) - [line 8866](../youtube-playback-plox.user.js#L8866)
40. [💾 Internal Save Regular Video](#internal-save-regular-video) - [line 8909](../youtube-playback-plox.user.js#L8909)
41. [💾 Save Regular Video](#save-regular-video) - [line 9031](../youtube-playback-plox.user.js#L9031)
42. [💾 Save Miniplayer](#save-miniplayer) - [line 9042](../youtube-playback-plox.user.js#L9042)
43. [💾 Save Shorts](#save-shorts) - [line 9053](../youtube-playback-plox.user.js#L9053)
44. [💾 Save Preview](#save-preview) - [line 9168](../youtube-playback-plox.user.js#L9168)
45. [💾 Save Livestream](#save-livestream) - [line 9257](../youtube-playback-plox.user.js#L9257)
46. [📺 Helpers](#helpers) - [line 9315](../youtube-playback-plox.user.js#L9315)
47. [📺 Obtiene datos guardados de un video](#obtiene-datos-guardados-de-un-video) - [line 9318](../youtube-playback-plox.user.js#L9318)
48. [📺 Get Player Video ID](#get-player-video-id) - [line 9368](../youtube-playback-plox.user.js#L9368)
49. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 9447](../youtube-playback-plox.user.js#L9447)
50. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 9648](../youtube-playback-plox.user.js#L9648)
51. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 9854](../youtube-playback-plox.user.js#L9854)
52. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 9876](../youtube-playback-plox.user.js#L9876)
53. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 9904](../youtube-playback-plox.user.js#L9904)
54. [📺 get Playlist Name](#get-playlist-name) - [line 9949](../youtube-playback-plox.user.js#L9949)
55. [🕒 Time Display](#time-display) - [line 10163](../youtube-playback-plox.user.js#L10163)
56. [🖼️ Display Button Helpers](#display-button-helpers) - [line 10199](../youtube-playback-plox.user.js#L10199)
57. [🍞 Toasts](#toasts) - [line 10972](../youtube-playback-plox.user.js#L10972)
58. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 11135](../youtube-playback-plox.user.js#L11135)
59. [⚙️ Settings UI](#settings-ui) - [line 11453](../youtube-playback-plox.user.js#L11453)
60. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 11849](../youtube-playback-plox.user.js#L11849)
61. [🎵 Selección de Videos](#seleccin-de-videos) - [line 11907](../youtube-playback-plox.user.js#L11907)
62. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 12535](../youtube-playback-plox.user.js#L12535)
63. [📡 Video Observer Manager](#video-observer-manager) - [line 12785](../youtube-playback-plox.user.js#L12785)
64. [Processing Functions](#processing-functions) - [line 13675](../youtube-playback-plox.user.js#L13675)
65. [PlaybackController](#playbackcontroller) - [line 14615](../youtube-playback-plox.user.js#L14615)
66. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 15021](../youtube-playback-plox.user.js#L15021)
67. [📂 Sort UI](#sort-ui) - [line 15511](../youtube-playback-plox.user.js#L15511)
68. [📂 Filters UI](#filters-ui) - [line 15699](../youtube-playback-plox.user.js#L15699)
69. [📂 Video List UI](#video-list-ui) - [line 15984](../youtube-playback-plox.user.js#L15984)
70. [📁 Update Video List](#update-video-list) - [line 16103](../youtube-playback-plox.user.js#L16103)
71. [🔘 Floating Button](#floating-button) - [line 16910](../youtube-playback-plox.user.js#L16910)
72. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 16938](../youtube-playback-plox.user.js#L16938)
73. [📂 Video Entry](#video-entry) - [line 17162](../youtube-playback-plox.user.js#L17162)
74. [🗑️ Clear All Data](#clear-all-data) - [line 19092](../youtube-playback-plox.user.js#L19092)
75. [⚙️ Menu Commands](#menu-commands) - [line 19164](../youtube-playback-plox.user.js#L19164)
76. [🔄 Migración de Datos](#migracin-de-datos) - [line 19202](../youtube-playback-plox.user.js#L19202)
77. [🚀 Init](#init) - [line 19579](../youtube-playback-plox.user.js#L19579)

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

## [📊 Global Constants](../youtube-playback-plox.user.js#L425)
> [Line 425](../youtube-playback-plox.user.js#L425)

_No relevant functions or constants detected._

## [📊 Global Variables](../youtube-playback-plox.user.js#L434)
> [Line 434](../youtube-playback-plox.user.js#L434)

_No relevant functions or constants detected._

## [🌐 Translations](../youtube-playback-plox.user.js#L470)
> [Line 470](../youtube-playback-plox.user.js#L470)

| Type | Name | Line |
|---|---|---|
| `fn` | [`fetchUrl`](../youtube-playback-plox.user.js#L815) | [815](../youtube-playback-plox.user.js#L815) |

## [🗄️ Event Handlers store](../youtube-playback-plox.user.js#L907)
> [Line 907](../youtube-playback-plox.user.js#L907)

| Type | Name | Line |
|---|---|---|
| `fn` | [`dispose`](../youtube-playback-plox.user.js#L984) | [984](../youtube-playback-plox.user.js#L984) |

## [📝 Selector System](../youtube-playback-plox.user.js#L990)
> [Line 990](../youtube-playback-plox.user.js#L990)

| Type | Name | Line |
|---|---|---|
| `module` | [`PREFIX`](../youtube-playback-plox.user.js#L1060) | [1060](../youtube-playback-plox.user.js#L1060) |
| `fn` | [`deepFreeze`](../youtube-playback-plox.user.js#L1084) | [1084](../youtube-playback-plox.user.js#L1084) |
| `fn` | [`createSelectorSystem`](../youtube-playback-plox.user.js#L1115) | [1115](../youtube-playback-plox.user.js#L1115) |

## [💾 Simple LRU Cache](../youtube-playback-plox.user.js#L1299)
> [Line 1299](../youtube-playback-plox.user.js#L1299)

_No relevant functions or constants detected._

## [⚙️ DOM Cache System](../youtube-playback-plox.user.js#L1357)
> [Line 1357](../youtube-playback-plox.user.js#L1357)

| Type | Name | Line |
|---|---|---|
| `fn` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1374) | [1374](../youtube-playback-plox.user.js#L1374) |
| `module` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1374) | [1374](../youtube-playback-plox.user.js#L1374) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L1399) | [1399](../youtube-playback-plox.user.js#L1399) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L1423) | [1423](../youtube-playback-plox.user.js#L1423) |

## [🌐 Translation Functions](../youtube-playback-plox.user.js#L1708)
> [Line 1708](../youtube-playback-plox.user.js#L1708)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normParams`](../youtube-playback-plox.user.js#L1732) | [1732](../youtube-playback-plox.user.js#L1732) |
| `fn` | [`candidates`](../youtube-playback-plox.user.js#L1831) | [1831](../youtube-playback-plox.user.js#L1831) |
| `fn` | [`normalized`](../youtube-playback-plox.user.js#L1850) | [1850](../youtube-playback-plox.user.js#L1850) |

## [🎨 Styles](../youtube-playback-plox.user.js#L1874)
> [Line 1874](../youtube-playback-plox.user.js#L1874)

_No relevant functions or constants detected._

## [🎨 Theme](../youtube-playback-plox.user.js#L5376)
> [Line 5376](../youtube-playback-plox.user.js#L5376)

_No relevant functions or constants detected._

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L5454)
> [Line 5454](../youtube-playback-plox.user.js#L5454)

_No relevant functions or constants detected._

## [🎨 Estilo barra progreso](../youtube-playback-plox.user.js#L5615)
> [Line 5615](../youtube-playback-plox.user.js#L5615)

| Type | Name | Line |
|---|---|---|
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L5906) | [5906](../youtube-playback-plox.user.js#L5906) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L5929)
> [Line 5929](../youtube-playback-plox.user.js#L5929)

| Type | Name | Line |
|---|---|---|
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L5939) | [5939](../youtube-playback-plox.user.js#L5939) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L5939) | [5939](../youtube-playback-plox.user.js#L5939) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L6083) | [6083](../youtube-playback-plox.user.js#L6083) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L6083) | [6083](../youtube-playback-plox.user.js#L6083) |
| `fn` | [`isSupported`](../youtube-playback-plox.user.js#L6087) | [6087](../youtube-playback-plox.user.js#L6087) |
| `module` | [`isSupported`](../youtube-playback-plox.user.js#L6087) | [6087](../youtube-playback-plox.user.js#L6087) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L6242) | [6242](../youtube-playback-plox.user.js#L6242) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L6370) | [6370](../youtube-playback-plox.user.js#L6370) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L6388) | [6388](../youtube-playback-plox.user.js#L6388) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L6409) | [6409](../youtube-playback-plox.user.js#L6409) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6422) | [6422](../youtube-playback-plox.user.js#L6422) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6489) | [6489](../youtube-playback-plox.user.js#L6489) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6507) | [6507](../youtube-playback-plox.user.js#L6507) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L6515) | [6515](../youtube-playback-plox.user.js#L6515) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L6533) | [6533](../youtube-playback-plox.user.js#L6533) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L6544)
> [Line 6544](../youtube-playback-plox.user.js#L6544)

| Type | Name | Line |
|---|---|---|
| `fn` | [`_adDetectorTick`](../youtube-playback-plox.user.js#L6553) | [6553](../youtube-playback-plox.user.js#L6553) |

## [📢 Ad Detector](../youtube-playback-plox.user.js#L6567)
> [Line 6567](../youtube-playback-plox.user.js#L6567)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L6572) | [6572](../youtube-playback-plox.user.js#L6572) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L6621) | [6621](../youtube-playback-plox.user.js#L6621) |

## [🔧 Utils](../youtube-playback-plox.user.js#L6743)
> [Line 6743](../youtube-playback-plox.user.js#L6743)

_No relevant functions or constants detected._

## [🔧 Escape HTML](../youtube-playback-plox.user.js#L6746)
> [Line 6746](../youtube-playback-plox.user.js#L6746)

| Type | Name | Line |
|---|---|---|
| `fn` | [`unescapeHTML`](../youtube-playback-plox.user.js#L6753) | [6753](../youtube-playback-plox.user.js#L6753) |
| `fn` | [`escapeHTML`](../youtube-playback-plox.user.js#L6775) | [6775](../youtube-playback-plox.user.js#L6775) |

## [🔧 Is Visibly Displayed](../youtube-playback-plox.user.js#L6828)
> [Line 6828](../youtube-playback-plox.user.js#L6828)

_No relevant functions or constants detected._

## [🔧 Format Time](../youtube-playback-plox.user.js#L6852)
> [Line 6852](../youtube-playback-plox.user.js#L6852)

| Type | Name | Line |
|---|---|---|
| `fn` | [`formatTime`](../youtube-playback-plox.user.js#L6875) | [6875](../youtube-playback-plox.user.js#L6875) |

## [🔧 parseTimeToSeconds](../youtube-playback-plox.user.js#L6947)
> [Line 6947](../youtube-playback-plox.user.js#L6947)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseTimeToSeconds`](../youtube-playback-plox.user.js#L6970) | [6970](../youtube-playback-plox.user.js#L6970) |

## [🔧 normalizeSeconds](../youtube-playback-plox.user.js#L6995)
> [Line 6995](../youtube-playback-plox.user.js#L6995)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeSeconds`](../youtube-playback-plox.user.js#L7014) | [7014](../youtube-playback-plox.user.js#L7014) |

## [🔧 setInnerHTML](../youtube-playback-plox.user.js#L7021)
> [Line 7021](../youtube-playback-plox.user.js#L7021)

_No relevant functions or constants detected._

## [🔧 Crear Elemento](../youtube-playback-plox.user.js#L7081)
> [Line 7081](../youtube-playback-plox.user.js#L7081)

| Type | Name | Line |
|---|---|---|
| `fn` | [`append`](../youtube-playback-plox.user.js#L7161) | [7161](../youtube-playback-plox.user.js#L7161) |
| `fn` | [`clamp`](../youtube-playback-plox.user.js#L7191) | [7191](../youtube-playback-plox.user.js#L7191) |

## [🔧 UI Helpers](../youtube-playback-plox.user.js#L7218)
> [Line 7218](../youtube-playback-plox.user.js#L7218)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L7261) | [7261](../youtube-playback-plox.user.js#L7261) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L7265) | [7265](../youtube-playback-plox.user.js#L7265) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L7274) | [7274](../youtube-playback-plox.user.js#L7274) |

## [🔧 Debounce](../youtube-playback-plox.user.js#L7308)
> [Line 7308](../youtube-playback-plox.user.js#L7308)

| Type | Name | Line |
|---|---|---|
| `fn` | [`debounce`](../youtube-playback-plox.user.js#L7318) | [7318](../youtube-playback-plox.user.js#L7318) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L7334)
> [Line 7334](../youtube-playback-plox.user.js#L7334)

_No relevant functions or constants detected._

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L7753)
> [Line 7753](../youtube-playback-plox.user.js#L7753)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L7760) | [7760](../youtube-playback-plox.user.js#L7760) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L7763) | [7763](../youtube-playback-plox.user.js#L7763) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L7791) | [7791](../youtube-playback-plox.user.js#L7791) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L7834) | [7834](../youtube-playback-plox.user.js#L7834) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L7908)
> [Line 7908](../youtube-playback-plox.user.js#L7908)

| Type | Name | Line |
|---|---|---|
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L7914) | [7914](../youtube-playback-plox.user.js#L7914) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L7942) | [7942](../youtube-playback-plox.user.js#L7942) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7943) | [7943](../youtube-playback-plox.user.js#L7943) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L8005) | [8005](../youtube-playback-plox.user.js#L8005) |
| `fn` | [`cleanOwner`](../youtube-playback-plox.user.js#L8016) | [8016](../youtube-playback-plox.user.js#L8016) |
| `fn` | [`cleanName`](../youtube-playback-plox.user.js#L8017) | [8017](../youtube-playback-plox.user.js#L8017) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L8018) | [8018](../youtube-playback-plox.user.js#L8018) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L8139) | [8139](../youtube-playback-plox.user.js#L8139) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L8151) | [8151](../youtube-playback-plox.user.js#L8151) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L8216) | [8216](../youtube-playback-plox.user.js#L8216) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L8246) | [8246](../youtube-playback-plox.user.js#L8246) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L8275)
> [Line 8275](../youtube-playback-plox.user.js#L8275)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L8276) | [8276](../youtube-playback-plox.user.js#L8276) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L8322) | [8322](../youtube-playback-plox.user.js#L8322) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L8477)
> [Line 8477](../youtube-playback-plox.user.js#L8477)

_No relevant functions or constants detected._

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L8559)
> [Line 8559](../youtube-playback-plox.user.js#L8559)

_No relevant functions or constants detected._

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L8650)
> [Line 8650](../youtube-playback-plox.user.js#L8650)

_No relevant functions or constants detected._

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L8730)
> [Line 8730](../youtube-playback-plox.user.js#L8730)

| Type | Name | Line |
|---|---|---|
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L8749) | [8749](../youtube-playback-plox.user.js#L8749) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L8761)
> [Line 8761](../youtube-playback-plox.user.js#L8761)

_No relevant functions or constants detected._

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L8808)
> [Line 8808](../youtube-playback-plox.user.js#L8808)

_No relevant functions or constants detected._

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L8866)
> [Line 8866](../youtube-playback-plox.user.js#L8866)

| Type | Name | Line |
|---|---|---|
| `fn` | [`base`](../youtube-playback-plox.user.js#L8875) | [8875](../youtube-playback-plox.user.js#L8875) |

## [💾 Internal Save Regular Video](../youtube-playback-plox.user.js#L8909)
> [Line 8909](../youtube-playback-plox.user.js#L8909)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8931) | [8931](../youtube-playback-plox.user.js#L8931) |

## [💾 Save Regular Video](../youtube-playback-plox.user.js#L9031)
> [Line 9031](../youtube-playback-plox.user.js#L9031)

_No relevant functions or constants detected._

## [💾 Save Miniplayer](../youtube-playback-plox.user.js#L9042)
> [Line 9042](../youtube-playback-plox.user.js#L9042)

_No relevant functions or constants detected._

## [💾 Save Shorts](../youtube-playback-plox.user.js#L9053)
> [Line 9053](../youtube-playback-plox.user.js#L9053)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L9075) | [9075](../youtube-playback-plox.user.js#L9075) |

## [💾 Save Preview](../youtube-playback-plox.user.js#L9168)
> [Line 9168](../youtube-playback-plox.user.js#L9168)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L9191) | [9191](../youtube-playback-plox.user.js#L9191) |
| `fn` | [`resolvedVideoType`](../youtube-playback-plox.user.js#L9203) | [9203](../youtube-playback-plox.user.js#L9203) |
| `module` | [`resolvedVideoType`](../youtube-playback-plox.user.js#L9203) | [9203](../youtube-playback-plox.user.js#L9203) |

## [💾 Save Livestream](../youtube-playback-plox.user.js#L9257)
> [Line 9257](../youtube-playback-plox.user.js#L9257)

_No relevant functions or constants detected._

## [📺 Helpers](../youtube-playback-plox.user.js#L9315)
> [Line 9315](../youtube-playback-plox.user.js#L9315)

_No relevant functions or constants detected._

## [📺 Obtiene datos guardados de un video](../youtube-playback-plox.user.js#L9318)
> [Line 9318](../youtube-playback-plox.user.js#L9318)

| Type | Name | Line |
|---|---|---|
| `fn` | [`keys`](../youtube-playback-plox.user.js#L9344) | [9344](../youtube-playback-plox.user.js#L9344) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L9368)
> [Line 9368](../youtube-playback-plox.user.js#L9368)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L9404) | [9404](../youtube-playback-plox.user.js#L9404) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L9447)
> [Line 9447](../youtube-playback-plox.user.js#L9447)

_No relevant functions or constants detected._

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L9648)
> [Line 9648](../youtube-playback-plox.user.js#L9648)

| Type | Name | Line |
|---|---|---|
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L9745) | [9745](../youtube-playback-plox.user.js#L9745) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L9854)
> [Line 9854](../youtube-playback-plox.user.js#L9854)

_No relevant functions or constants detected._

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L9876)
> [Line 9876](../youtube-playback-plox.user.js#L9876)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L9904)
> [Line 9904](../youtube-playback-plox.user.js#L9904)

_No relevant functions or constants detected._

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L9949)
> [Line 9949](../youtube-playback-plox.user.js#L9949)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L9970) | [9970](../youtube-playback-plox.user.js#L9970) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L10051) | [10051](../youtube-playback-plox.user.js#L10051) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L10136) | [10136](../youtube-playback-plox.user.js#L10136) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L10163)
> [Line 10163](../youtube-playback-plox.user.js#L10163)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L10189) | [10189](../youtube-playback-plox.user.js#L10189) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L10199)
> [Line 10199](../youtube-playback-plox.user.js#L10199)

| Type | Name | Line |
|---|---|---|
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L10477) | [10477](../youtube-playback-plox.user.js#L10477) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L10477) | [10477](../youtube-playback-plox.user.js#L10477) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L10491) | [10491](../youtube-playback-plox.user.js#L10491) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L10499) | [10499](../youtube-playback-plox.user.js#L10499) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L10507) | [10507](../youtube-playback-plox.user.js#L10507) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L10515) | [10515](../youtube-playback-plox.user.js#L10515) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L10538) | [10538](../youtube-playback-plox.user.js#L10538) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L10550) | [10550](../youtube-playback-plox.user.js#L10550) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L10553) | [10553](../youtube-playback-plox.user.js#L10553) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L10563) | [10563](../youtube-playback-plox.user.js#L10563) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L10568) | [10568](../youtube-playback-plox.user.js#L10568) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L10591) | [10591](../youtube-playback-plox.user.js#L10591) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L10610) | [10610](../youtube-playback-plox.user.js#L10610) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L10618) | [10618](../youtube-playback-plox.user.js#L10618) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L10662) | [10662](../youtube-playback-plox.user.js#L10662) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L10717) | [10717](../youtube-playback-plox.user.js#L10717) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L10776) | [10776](../youtube-playback-plox.user.js#L10776) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L10873) | [10873](../youtube-playback-plox.user.js#L10873) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L10886) | [10886](../youtube-playback-plox.user.js#L10886) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L10890) | [10890](../youtube-playback-plox.user.js#L10890) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L10897) | [10897](../youtube-playback-plox.user.js#L10897) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L10915) | [10915](../youtube-playback-plox.user.js#L10915) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L10972)
> [Line 10972](../youtube-playback-plox.user.js#L10972)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L11008) | [11008](../youtube-playback-plox.user.js#L11008) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L11135)
> [Line 11135](../youtube-playback-plox.user.js#L11135)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L11138) | [11138](../youtube-playback-plox.user.js#L11138) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L11176) | [11176](../youtube-playback-plox.user.js#L11176) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L11193) | [11193](../youtube-playback-plox.user.js#L11193) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L11211) | [11211](../youtube-playback-plox.user.js#L11211) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L11245) | [11245](../youtube-playback-plox.user.js#L11245) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L11295) | [11295](../youtube-playback-plox.user.js#L11295) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L11299) | [11299](../youtube-playback-plox.user.js#L11299) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L11436) | [11436](../youtube-playback-plox.user.js#L11436) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L11453)
> [Line 11453](../youtube-playback-plox.user.js#L11453)

| Type | Name | Line |
|---|---|---|
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L11471) | [11471](../youtube-playback-plox.user.js#L11471) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L11548) | [11548](../youtube-playback-plox.user.js#L11548) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L11633) | [11633](../youtube-playback-plox.user.js#L11633) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L11634) | [11634](../youtube-playback-plox.user.js#L11634) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L11723) | [11723](../youtube-playback-plox.user.js#L11723) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L11724) | [11724](../youtube-playback-plox.user.js#L11724) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L11849)
> [Line 11849](../youtube-playback-plox.user.js#L11849)

_No relevant functions or constants detected._

## [🎵 Selección de Videos](../youtube-playback-plox.user.js#L11907)
> [Line 11907](../youtube-playback-plox.user.js#L11907)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11995) | [11995](../youtube-playback-plox.user.js#L11995) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L12002) | [12002](../youtube-playback-plox.user.js#L12002) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L12274) | [12274](../youtube-playback-plox.user.js#L12274) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L12448) | [12448](../youtube-playback-plox.user.js#L12448) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L12535)
> [Line 12535](../youtube-playback-plox.user.js#L12535)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L12541) | [12541](../youtube-playback-plox.user.js#L12541) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L12541) | [12541](../youtube-playback-plox.user.js#L12541) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L12542) | [12542](../youtube-playback-plox.user.js#L12542) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L12551) | [12551](../youtube-playback-plox.user.js#L12551) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L12556) | [12556](../youtube-playback-plox.user.js#L12556) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L12565) | [12565](../youtube-playback-plox.user.js#L12565) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L12582) | [12582](../youtube-playback-plox.user.js#L12582) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L12615) | [12615](../youtube-playback-plox.user.js#L12615) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L12640) | [12640](../youtube-playback-plox.user.js#L12640) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L12642) | [12642](../youtube-playback-plox.user.js#L12642) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L12656) | [12656](../youtube-playback-plox.user.js#L12656) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L12656) | [12656](../youtube-playback-plox.user.js#L12656) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L12658) | [12658](../youtube-playback-plox.user.js#L12658) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12681) | [12681](../youtube-playback-plox.user.js#L12681) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12681) | [12681](../youtube-playback-plox.user.js#L12681) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L12692) | [12692](../youtube-playback-plox.user.js#L12692) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L12697) | [12697](../youtube-playback-plox.user.js#L12697) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L12702) | [12702](../youtube-playback-plox.user.js#L12702) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L12714) | [12714](../youtube-playback-plox.user.js#L12714) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12731) | [12731](../youtube-playback-plox.user.js#L12731) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12731) | [12731](../youtube-playback-plox.user.js#L12731) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L12733) | [12733](../youtube-playback-plox.user.js#L12733) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L12741) | [12741](../youtube-playback-plox.user.js#L12741) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L12785)
> [Line 12785](../youtube-playback-plox.user.js#L12785)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12790) | [12790](../youtube-playback-plox.user.js#L12790) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12790) | [12790](../youtube-playback-plox.user.js#L12790) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L12805) | [12805](../youtube-playback-plox.user.js#L12805) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L12840) | [12840](../youtube-playback-plox.user.js#L12840) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L12873) | [12873](../youtube-playback-plox.user.js#L12873) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L12874) | [12874](../youtube-playback-plox.user.js#L12874) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L12905) | [12905](../youtube-playback-plox.user.js#L12905) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L12961) | [12961](../youtube-playback-plox.user.js#L12961) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L13026) | [13026](../youtube-playback-plox.user.js#L13026) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L13034) | [13034](../youtube-playback-plox.user.js#L13034) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L13041) | [13041](../youtube-playback-plox.user.js#L13041) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L13079) | [13079](../youtube-playback-plox.user.js#L13079) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L13119) | [13119](../youtube-playback-plox.user.js#L13119) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L13130) | [13130](../youtube-playback-plox.user.js#L13130) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L13145) | [13145](../youtube-playback-plox.user.js#L13145) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L13612) | [13612](../youtube-playback-plox.user.js#L13612) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L13655) | [13655](../youtube-playback-plox.user.js#L13655) |

## [Processing Functions](../youtube-playback-plox.user.js#L13675)
> [Line 13675](../youtube-playback-plox.user.js#L13675)

| Type | Name | Line |
|---|---|---|
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L13690) | [13690](../youtube-playback-plox.user.js#L13690) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L13690) | [13690](../youtube-playback-plox.user.js#L13690) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L13704) | [13704](../youtube-playback-plox.user.js#L13704) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L13709) | [13709](../youtube-playback-plox.user.js#L13709) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L13716) | [13716](../youtube-playback-plox.user.js#L13716) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L13722) | [13722](../youtube-playback-plox.user.js#L13722) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L13740) | [13740](../youtube-playback-plox.user.js#L13740) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L13803) | [13803](../youtube-playback-plox.user.js#L13803) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L13823) | [13823](../youtube-playback-plox.user.js#L13823) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L13856) | [13856](../youtube-playback-plox.user.js#L13856) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L13886) | [13886](../youtube-playback-plox.user.js#L13886) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L13897) | [13897](../youtube-playback-plox.user.js#L13897) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L13909) | [13909](../youtube-playback-plox.user.js#L13909) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L13949) | [13949](../youtube-playback-plox.user.js#L13949) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L13997) | [13997](../youtube-playback-plox.user.js#L13997) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L14149) | [14149](../youtube-playback-plox.user.js#L14149) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L14293) | [14293](../youtube-playback-plox.user.js#L14293) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L14400) | [14400](../youtube-playback-plox.user.js#L14400) |

## [PlaybackController](../youtube-playback-plox.user.js#L14615)
> [Line 14615](../youtube-playback-plox.user.js#L14615)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L14659) | [14659](../youtube-playback-plox.user.js#L14659) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L14675) | [14675](../youtube-playback-plox.user.js#L14675) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L14889) | [14889](../youtube-playback-plox.user.js#L14889) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L15021)
> [Line 15021](../youtube-playback-plox.user.js#L15021)

| Type | Name | Line |
|---|---|---|
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L15090) | [15090](../youtube-playback-plox.user.js#L15090) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L15511)
> [Line 15511](../youtube-playback-plox.user.js#L15511)

| Type | Name | Line |
|---|---|---|
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L15534) | [15534](../youtube-playback-plox.user.js#L15534) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L15610) | [15610](../youtube-playback-plox.user.js#L15610) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L15619) | [15619](../youtube-playback-plox.user.js#L15619) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L15627) | [15627](../youtube-playback-plox.user.js#L15627) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15647) | [15647](../youtube-playback-plox.user.js#L15647) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L15699)
> [Line 15699](../youtube-playback-plox.user.js#L15699)

| Type | Name | Line |
|---|---|---|
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15711) | [15711](../youtube-playback-plox.user.js#L15711) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L15757) | [15757](../youtube-playback-plox.user.js#L15757) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L15763) | [15763](../youtube-playback-plox.user.js#L15763) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L15771) | [15771](../youtube-playback-plox.user.js#L15771) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15786) | [15786](../youtube-playback-plox.user.js#L15786) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L15906) | [15906](../youtube-playback-plox.user.js#L15906) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L15984)
> [Line 15984](../youtube-playback-plox.user.js#L15984)

_No relevant functions or constants detected._

## [📁 Update Video List](../youtube-playback-plox.user.js#L16103)
> [Line 16103](../youtube-playback-plox.user.js#L16103)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSortValue`](../youtube-playback-plox.user.js#L16283) | [16283](../youtube-playback-plox.user.js#L16283) |
| `fn` | [`t`](../youtube-playback-plox.user.js#L16286) | [16286](../youtube-playback-plox.user.js#L16286) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L16300) | [16300](../youtube-playback-plox.user.js#L16300) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L16304) | [16304](../youtube-playback-plox.user.js#L16304) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L16334) | [16334](../youtube-playback-plox.user.js#L16334) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L16353) | [16353](../youtube-playback-plox.user.js#L16353) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L16493) | [16493](../youtube-playback-plox.user.js#L16493) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L16601) | [16601](../youtube-playback-plox.user.js#L16601) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L16718) | [16718](../youtube-playback-plox.user.js#L16718) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L16739) | [16739](../youtube-playback-plox.user.js#L16739) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L16790) | [16790](../youtube-playback-plox.user.js#L16790) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L16910)
> [Line 16910](../youtube-playback-plox.user.js#L16910)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L16913) | [16913](../youtube-playback-plox.user.js#L16913) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L16927) | [16927](../youtube-playback-plox.user.js#L16927) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L16938)
> [Line 16938](../youtube-playback-plox.user.js#L16938)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L17065) | [17065](../youtube-playback-plox.user.js#L17065) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L17075) | [17075](../youtube-playback-plox.user.js#L17075) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L17150) | [17150](../youtube-playback-plox.user.js#L17150) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L17162)
> [Line 17162](../youtube-playback-plox.user.js#L17162)

| Type | Name | Line |
|---|---|---|
| `fn` | [`deleteFromStorage`](../youtube-playback-plox.user.js#L17289) | [17289](../youtube-playback-plox.user.js#L17289) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L17294) | [17294](../youtube-playback-plox.user.js#L17294) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L17340) | [17340](../youtube-playback-plox.user.js#L17340) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L17388) | [17388](../youtube-playback-plox.user.js#L17388) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L17394) | [17394](../youtube-playback-plox.user.js#L17394) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L17411) | [17411](../youtube-playback-plox.user.js#L17411) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L17445) | [17445](../youtube-playback-plox.user.js#L17445) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L17489) | [17489](../youtube-playback-plox.user.js#L17489) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L17571) | [17571](../youtube-playback-plox.user.js#L17571) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L17577) | [17577](../youtube-playback-plox.user.js#L17577) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L17593) | [17593](../youtube-playback-plox.user.js#L17593) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L17603) | [17603](../youtube-playback-plox.user.js#L17603) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L17611) | [17611](../youtube-playback-plox.user.js#L17611) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L17616) | [17616](../youtube-playback-plox.user.js#L17616) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L17623) | [17623](../youtube-playback-plox.user.js#L17623) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L17626) | [17626](../youtube-playback-plox.user.js#L17626) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L17630) | [17630](../youtube-playback-plox.user.js#L17630) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L17676) | [17676](../youtube-playback-plox.user.js#L17676) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L17676) | [17676](../youtube-playback-plox.user.js#L17676) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L17690) | [17690](../youtube-playback-plox.user.js#L17690) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L17981) | [17981](../youtube-playback-plox.user.js#L17981) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L17995) | [17995](../youtube-playback-plox.user.js#L17995) |
| `fn` | [`makeToolbarGroup`](../youtube-playback-plox.user.js#L18110) | [18110](../youtube-playback-plox.user.js#L18110) |
| `fn` | [`makeDisplayToggle`](../youtube-playback-plox.user.js#L18121) | [18121](../youtube-playback-plox.user.js#L18121) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L18167) | [18167](../youtube-playback-plox.user.js#L18167) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L18168) | [18168](../youtube-playback-plox.user.js#L18168) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L18190) | [18190](../youtube-playback-plox.user.js#L18190) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L18191) | [18191](../youtube-playback-plox.user.js#L18191) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L18242) | [18242](../youtube-playback-plox.user.js#L18242) |
| `fn` | [`syncScrollbarVis`](../youtube-playback-plox.user.js#L18287) | [18287](../youtube-playback-plox.user.js#L18287) |
| `fn` | [`syncScrollbarThick`](../youtube-playback-plox.user.js#L18325) | [18325](../youtube-playback-plox.user.js#L18325) |
| `fn` | [`syncOpacityActive`](../youtube-playback-plox.user.js#L18401) | [18401](../youtube-playback-plox.user.js#L18401) |
| `fn` | [`syncStyleActive`](../youtube-playback-plox.user.js#L18474) | [18474](../youtube-playback-plox.user.js#L18474) |
| `fn` | [`syncVisActive`](../youtube-playback-plox.user.js#L18514) | [18514](../youtube-playback-plox.user.js#L18514) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L18560) | [18560](../youtube-playback-plox.user.js#L18560) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L18659) | [18659](../youtube-playback-plox.user.js#L18659) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L18742) | [18742](../youtube-playback-plox.user.js#L18742) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L18996) | [18996](../youtube-playback-plox.user.js#L18996) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L19019) | [19019](../youtube-playback-plox.user.js#L19019) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L19020) | [19020](../youtube-playback-plox.user.js#L19020) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L19092)
> [Line 19092](../youtube-playback-plox.user.js#L19092)

_No relevant functions or constants detected._

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L19164)
> [Line 19164](../youtube-playback-plox.user.js#L19164)

_No relevant functions or constants detected._

## [🔄 Migración de Datos](../youtube-playback-plox.user.js#L19202)
> [Line 19202](../youtube-playback-plox.user.js#L19202)

| Type | Name | Line |
|---|---|---|
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L19259) | [19259](../youtube-playback-plox.user.js#L19259) |

## [🚀 Init](../youtube-playback-plox.user.js#L19579)
> [Line 19579](../youtube-playback-plox.user.js#L19579)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L19588) | [19588](../youtube-playback-plox.user.js#L19588) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L19610) | [19610](../youtube-playback-plox.user.js#L19610) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L19919) | [19919](../youtube-playback-plox.user.js#L19919) |

