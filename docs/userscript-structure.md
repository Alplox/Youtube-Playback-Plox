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
13. [🎨 Theme](#theme) - [line 5222](../youtube-playback-plox.user.js#L5222)
14. [🎨 SVG Icons](#svg-icons) - [line 5300](../youtube-playback-plox.user.js#L5300)
15. [🎨 Estilo barra progreso](#estilo-barra-progreso) - [line 5459](../youtube-playback-plox.user.js#L5459)
16. [💾 Storage + Settings](#storage-settings) - [line 5773](../youtube-playback-plox.user.js#L5773)
17. [📢 Ad Caches](#ad-caches) - [line 6388](../youtube-playback-plox.user.js#L6388)
18. [📢 Ad Detector](#ad-detector) - [line 6411](../youtube-playback-plox.user.js#L6411)
19. [🔧 Utils](#utils) - [line 6587](../youtube-playback-plox.user.js#L6587)
20. [🔧 Escape HTML](#escape-html) - [line 6590](../youtube-playback-plox.user.js#L6590)
21. [🔧 Is Visibly Displayed](#is-visibly-displayed) - [line 6654](../youtube-playback-plox.user.js#L6654)
22. [🔧 Format Time](#format-time) - [line 6678](../youtube-playback-plox.user.js#L6678)
23. [🔧 parseTimeToSeconds](#parsetimetoseconds) - [line 6773](../youtube-playback-plox.user.js#L6773)
24. [🔧 normalizeSeconds](#normalizeseconds) - [line 6821](../youtube-playback-plox.user.js#L6821)
25. [🔧 setInnerHTML](#setinnerhtml) - [line 6847](../youtube-playback-plox.user.js#L6847)
26. [🔧 Crear Elemento](#crear-elemento) - [line 6907](../youtube-playback-plox.user.js#L6907)
27. [🔧 UI Helpers](#ui-helpers) - [line 7044](../youtube-playback-plox.user.js#L7044)
28. [🔧 Debounce](#debounce) - [line 7134](../youtube-playback-plox.user.js#L7134)
29. [🎯 VirtualScroller](#virtualscroller) - [line 7160](../youtube-playback-plox.user.js#L7160)
30. [📤 Import/Export JSON](#importexport-json) - [line 7579](../youtube-playback-plox.user.js#L7579)
31. [☁️ GitHub Backup](#github-backup) - [line 7734](../youtube-playback-plox.user.js#L7734)
32. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 8101](../youtube-playback-plox.user.js#L8101)
33. [🔄 Normalize Video Data](#normalize-video-data) - [line 8303](../youtube-playback-plox.user.js#L8303)
34. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 8385](../youtube-playback-plox.user.js#L8385)
35. [Parse FreeTube DB](#parse-freetube-db) - [line 8476](../youtube-playback-plox.user.js#L8476)
36. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 8556](../youtube-playback-plox.user.js#L8556)
37. [⬆ Export To FreeTube](#export-to-freetube) - [line 8587](../youtube-playback-plox.user.js#L8587)
38. [⬇ Import From FreeTube](#import-from-freetube) - [line 8634](../youtube-playback-plox.user.js#L8634)
39. [🔄 Insert Completion Event](#insert-completion-event) - [line 8692](../youtube-playback-plox.user.js#L8692)
40. [💾 Internal Save Regular Video](#internal-save-regular-video) - [line 8735](../youtube-playback-plox.user.js#L8735)
41. [💾 Save Regular Video](#save-regular-video) - [line 8857](../youtube-playback-plox.user.js#L8857)
42. [💾 Save Miniplayer](#save-miniplayer) - [line 8868](../youtube-playback-plox.user.js#L8868)
43. [💾 Save Shorts](#save-shorts) - [line 8879](../youtube-playback-plox.user.js#L8879)
44. [💾 Save Preview](#save-preview) - [line 8994](../youtube-playback-plox.user.js#L8994)
45. [💾 Save Livestream](#save-livestream) - [line 9083](../youtube-playback-plox.user.js#L9083)
46. [📺 Helpers](#helpers) - [line 9141](../youtube-playback-plox.user.js#L9141)
47. [📺 Obtiene datos guardados de un video](#obtiene-datos-guardados-de-un-video) - [line 9144](../youtube-playback-plox.user.js#L9144)
48. [📺 Get Player Video ID](#get-player-video-id) - [line 9194](../youtube-playback-plox.user.js#L9194)
49. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 9273](../youtube-playback-plox.user.js#L9273)
50. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 9474](../youtube-playback-plox.user.js#L9474)
51. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 9680](../youtube-playback-plox.user.js#L9680)
52. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 9702](../youtube-playback-plox.user.js#L9702)
53. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 9730](../youtube-playback-plox.user.js#L9730)
54. [📺 get Playlist Name](#get-playlist-name) - [line 9775](../youtube-playback-plox.user.js#L9775)
55. [🕒 Time Display](#time-display) - [line 9989](../youtube-playback-plox.user.js#L9989)
56. [🖼️ Display Button Helpers](#display-button-helpers) - [line 10025](../youtube-playback-plox.user.js#L10025)
57. [🍞 Toasts](#toasts) - [line 10798](../youtube-playback-plox.user.js#L10798)
58. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 10961](../youtube-playback-plox.user.js#L10961)
59. [⚙️ Settings UI](#settings-ui) - [line 11279](../youtube-playback-plox.user.js#L11279)
60. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 11675](../youtube-playback-plox.user.js#L11675)
61. [🎵 Selección de Videos](#seleccin-de-videos) - [line 11733](../youtube-playback-plox.user.js#L11733)
62. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 12361](../youtube-playback-plox.user.js#L12361)
63. [📡 Video Observer Manager](#video-observer-manager) - [line 12611](../youtube-playback-plox.user.js#L12611)
64. [Processing Functions](#processing-functions) - [line 13501](../youtube-playback-plox.user.js#L13501)
65. [PlaybackController](#playbackcontroller) - [line 14441](../youtube-playback-plox.user.js#L14441)
66. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 14847](../youtube-playback-plox.user.js#L14847)
67. [📂 Sort UI](#sort-ui) - [line 15337](../youtube-playback-plox.user.js#L15337)
68. [📂 Filters UI](#filters-ui) - [line 15525](../youtube-playback-plox.user.js#L15525)
69. [📂 Video List UI](#video-list-ui) - [line 15810](../youtube-playback-plox.user.js#L15810)
70. [📁 Update Video List](#update-video-list) - [line 15927](../youtube-playback-plox.user.js#L15927)
71. [🔘 Floating Button](#floating-button) - [line 16666](../youtube-playback-plox.user.js#L16666)
72. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 16694](../youtube-playback-plox.user.js#L16694)
73. [📂 Video Entry](#video-entry) - [line 16916](../youtube-playback-plox.user.js#L16916)
74. [🗑️ Clear All Data](#clear-all-data) - [line 18765](../youtube-playback-plox.user.js#L18765)
75. [⚙️ Menu Commands](#menu-commands) - [line 18837](../youtube-playback-plox.user.js#L18837)
76. [🔄 Migración de Datos](#migracin-de-datos) - [line 18875](../youtube-playback-plox.user.js#L18875)
77. [🚀 Init](#init) - [line 19252](../youtube-playback-plox.user.js#L19252)

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

## [🎨 Theme](../youtube-playback-plox.user.js#L5222)
> [Line 5222](../youtube-playback-plox.user.js#L5222)

_No relevant functions or constants detected._

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L5300)
> [Line 5300](../youtube-playback-plox.user.js#L5300)

_No relevant functions or constants detected._

## [🎨 Estilo barra progreso](../youtube-playback-plox.user.js#L5459)
> [Line 5459](../youtube-playback-plox.user.js#L5459)

| Type | Name | Line |
|---|---|---|
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L5750) | [5750](../youtube-playback-plox.user.js#L5750) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L5773)
> [Line 5773](../youtube-playback-plox.user.js#L5773)

| Type | Name | Line |
|---|---|---|
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L5783) | [5783](../youtube-playback-plox.user.js#L5783) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L5783) | [5783](../youtube-playback-plox.user.js#L5783) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5927) | [5927](../youtube-playback-plox.user.js#L5927) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5927) | [5927](../youtube-playback-plox.user.js#L5927) |
| `fn` | [`isSupported`](../youtube-playback-plox.user.js#L5931) | [5931](../youtube-playback-plox.user.js#L5931) |
| `module` | [`isSupported`](../youtube-playback-plox.user.js#L5931) | [5931](../youtube-playback-plox.user.js#L5931) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L6086) | [6086](../youtube-playback-plox.user.js#L6086) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L6214) | [6214](../youtube-playback-plox.user.js#L6214) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L6232) | [6232](../youtube-playback-plox.user.js#L6232) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L6253) | [6253](../youtube-playback-plox.user.js#L6253) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6266) | [6266](../youtube-playback-plox.user.js#L6266) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6333) | [6333](../youtube-playback-plox.user.js#L6333) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6351) | [6351](../youtube-playback-plox.user.js#L6351) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L6359) | [6359](../youtube-playback-plox.user.js#L6359) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L6377) | [6377](../youtube-playback-plox.user.js#L6377) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L6388)
> [Line 6388](../youtube-playback-plox.user.js#L6388)

| Type | Name | Line |
|---|---|---|
| `fn` | [`_adDetectorTick`](../youtube-playback-plox.user.js#L6397) | [6397](../youtube-playback-plox.user.js#L6397) |

## [📢 Ad Detector](../youtube-playback-plox.user.js#L6411)
> [Line 6411](../youtube-playback-plox.user.js#L6411)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L6416) | [6416](../youtube-playback-plox.user.js#L6416) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L6465) | [6465](../youtube-playback-plox.user.js#L6465) |

## [🔧 Utils](../youtube-playback-plox.user.js#L6587)
> [Line 6587](../youtube-playback-plox.user.js#L6587)

_No relevant functions or constants detected._

## [🔧 Escape HTML](../youtube-playback-plox.user.js#L6590)
> [Line 6590](../youtube-playback-plox.user.js#L6590)

| Type | Name | Line |
|---|---|---|
| `fn` | [`escapeHTML`](../youtube-playback-plox.user.js#L6601) | [6601](../youtube-playback-plox.user.js#L6601) |

## [🔧 Is Visibly Displayed](../youtube-playback-plox.user.js#L6654)
> [Line 6654](../youtube-playback-plox.user.js#L6654)

_No relevant functions or constants detected._

## [🔧 Format Time](../youtube-playback-plox.user.js#L6678)
> [Line 6678](../youtube-playback-plox.user.js#L6678)

| Type | Name | Line |
|---|---|---|
| `fn` | [`formatTime`](../youtube-playback-plox.user.js#L6701) | [6701](../youtube-playback-plox.user.js#L6701) |

## [🔧 parseTimeToSeconds](../youtube-playback-plox.user.js#L6773)
> [Line 6773](../youtube-playback-plox.user.js#L6773)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseTimeToSeconds`](../youtube-playback-plox.user.js#L6796) | [6796](../youtube-playback-plox.user.js#L6796) |

## [🔧 normalizeSeconds](../youtube-playback-plox.user.js#L6821)
> [Line 6821](../youtube-playback-plox.user.js#L6821)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeSeconds`](../youtube-playback-plox.user.js#L6840) | [6840](../youtube-playback-plox.user.js#L6840) |

## [🔧 setInnerHTML](../youtube-playback-plox.user.js#L6847)
> [Line 6847](../youtube-playback-plox.user.js#L6847)

_No relevant functions or constants detected._

## [🔧 Crear Elemento](../youtube-playback-plox.user.js#L6907)
> [Line 6907](../youtube-playback-plox.user.js#L6907)

| Type | Name | Line |
|---|---|---|
| `fn` | [`append`](../youtube-playback-plox.user.js#L6987) | [6987](../youtube-playback-plox.user.js#L6987) |
| `fn` | [`clamp`](../youtube-playback-plox.user.js#L7017) | [7017](../youtube-playback-plox.user.js#L7017) |

## [🔧 UI Helpers](../youtube-playback-plox.user.js#L7044)
> [Line 7044](../youtube-playback-plox.user.js#L7044)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L7087) | [7087](../youtube-playback-plox.user.js#L7087) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L7091) | [7091](../youtube-playback-plox.user.js#L7091) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L7100) | [7100](../youtube-playback-plox.user.js#L7100) |

## [🔧 Debounce](../youtube-playback-plox.user.js#L7134)
> [Line 7134](../youtube-playback-plox.user.js#L7134)

| Type | Name | Line |
|---|---|---|
| `fn` | [`debounce`](../youtube-playback-plox.user.js#L7144) | [7144](../youtube-playback-plox.user.js#L7144) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L7160)
> [Line 7160](../youtube-playback-plox.user.js#L7160)

_No relevant functions or constants detected._

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L7579)
> [Line 7579](../youtube-playback-plox.user.js#L7579)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L7586) | [7586](../youtube-playback-plox.user.js#L7586) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L7589) | [7589](../youtube-playback-plox.user.js#L7589) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L7617) | [7617](../youtube-playback-plox.user.js#L7617) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L7660) | [7660](../youtube-playback-plox.user.js#L7660) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L7734)
> [Line 7734](../youtube-playback-plox.user.js#L7734)

| Type | Name | Line |
|---|---|---|
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L7740) | [7740](../youtube-playback-plox.user.js#L7740) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L7768) | [7768](../youtube-playback-plox.user.js#L7768) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7769) | [7769](../youtube-playback-plox.user.js#L7769) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L7831) | [7831](../youtube-playback-plox.user.js#L7831) |
| `fn` | [`cleanOwner`](../youtube-playback-plox.user.js#L7842) | [7842](../youtube-playback-plox.user.js#L7842) |
| `fn` | [`cleanName`](../youtube-playback-plox.user.js#L7843) | [7843](../youtube-playback-plox.user.js#L7843) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7844) | [7844](../youtube-playback-plox.user.js#L7844) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L7965) | [7965](../youtube-playback-plox.user.js#L7965) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7977) | [7977](../youtube-playback-plox.user.js#L7977) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L8042) | [8042](../youtube-playback-plox.user.js#L8042) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L8072) | [8072](../youtube-playback-plox.user.js#L8072) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L8101)
> [Line 8101](../youtube-playback-plox.user.js#L8101)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L8102) | [8102](../youtube-playback-plox.user.js#L8102) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L8148) | [8148](../youtube-playback-plox.user.js#L8148) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L8303)
> [Line 8303](../youtube-playback-plox.user.js#L8303)

_No relevant functions or constants detected._

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L8385)
> [Line 8385](../youtube-playback-plox.user.js#L8385)

_No relevant functions or constants detected._

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L8476)
> [Line 8476](../youtube-playback-plox.user.js#L8476)

_No relevant functions or constants detected._

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L8556)
> [Line 8556](../youtube-playback-plox.user.js#L8556)

| Type | Name | Line |
|---|---|---|
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L8575) | [8575](../youtube-playback-plox.user.js#L8575) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L8587)
> [Line 8587](../youtube-playback-plox.user.js#L8587)

_No relevant functions or constants detected._

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L8634)
> [Line 8634](../youtube-playback-plox.user.js#L8634)

_No relevant functions or constants detected._

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L8692)
> [Line 8692](../youtube-playback-plox.user.js#L8692)

| Type | Name | Line |
|---|---|---|
| `fn` | [`base`](../youtube-playback-plox.user.js#L8701) | [8701](../youtube-playback-plox.user.js#L8701) |

## [💾 Internal Save Regular Video](../youtube-playback-plox.user.js#L8735)
> [Line 8735](../youtube-playback-plox.user.js#L8735)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8757) | [8757](../youtube-playback-plox.user.js#L8757) |

## [💾 Save Regular Video](../youtube-playback-plox.user.js#L8857)
> [Line 8857](../youtube-playback-plox.user.js#L8857)

_No relevant functions or constants detected._

## [💾 Save Miniplayer](../youtube-playback-plox.user.js#L8868)
> [Line 8868](../youtube-playback-plox.user.js#L8868)

_No relevant functions or constants detected._

## [💾 Save Shorts](../youtube-playback-plox.user.js#L8879)
> [Line 8879](../youtube-playback-plox.user.js#L8879)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8901) | [8901](../youtube-playback-plox.user.js#L8901) |

## [💾 Save Preview](../youtube-playback-plox.user.js#L8994)
> [Line 8994](../youtube-playback-plox.user.js#L8994)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L9017) | [9017](../youtube-playback-plox.user.js#L9017) |
| `fn` | [`resolvedVideoType`](../youtube-playback-plox.user.js#L9029) | [9029](../youtube-playback-plox.user.js#L9029) |
| `module` | [`resolvedVideoType`](../youtube-playback-plox.user.js#L9029) | [9029](../youtube-playback-plox.user.js#L9029) |

## [💾 Save Livestream](../youtube-playback-plox.user.js#L9083)
> [Line 9083](../youtube-playback-plox.user.js#L9083)

_No relevant functions or constants detected._

## [📺 Helpers](../youtube-playback-plox.user.js#L9141)
> [Line 9141](../youtube-playback-plox.user.js#L9141)

_No relevant functions or constants detected._

## [📺 Obtiene datos guardados de un video](../youtube-playback-plox.user.js#L9144)
> [Line 9144](../youtube-playback-plox.user.js#L9144)

| Type | Name | Line |
|---|---|---|
| `fn` | [`keys`](../youtube-playback-plox.user.js#L9170) | [9170](../youtube-playback-plox.user.js#L9170) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L9194)
> [Line 9194](../youtube-playback-plox.user.js#L9194)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L9230) | [9230](../youtube-playback-plox.user.js#L9230) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L9273)
> [Line 9273](../youtube-playback-plox.user.js#L9273)

_No relevant functions or constants detected._

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L9474)
> [Line 9474](../youtube-playback-plox.user.js#L9474)

| Type | Name | Line |
|---|---|---|
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L9571) | [9571](../youtube-playback-plox.user.js#L9571) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L9680)
> [Line 9680](../youtube-playback-plox.user.js#L9680)

_No relevant functions or constants detected._

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L9702)
> [Line 9702](../youtube-playback-plox.user.js#L9702)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L9730)
> [Line 9730](../youtube-playback-plox.user.js#L9730)

_No relevant functions or constants detected._

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L9775)
> [Line 9775](../youtube-playback-plox.user.js#L9775)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L9796) | [9796](../youtube-playback-plox.user.js#L9796) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L9877) | [9877](../youtube-playback-plox.user.js#L9877) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L9962) | [9962](../youtube-playback-plox.user.js#L9962) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L9989)
> [Line 9989](../youtube-playback-plox.user.js#L9989)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L10015) | [10015](../youtube-playback-plox.user.js#L10015) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L10025)
> [Line 10025](../youtube-playback-plox.user.js#L10025)

| Type | Name | Line |
|---|---|---|
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L10303) | [10303](../youtube-playback-plox.user.js#L10303) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L10303) | [10303](../youtube-playback-plox.user.js#L10303) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L10317) | [10317](../youtube-playback-plox.user.js#L10317) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L10325) | [10325](../youtube-playback-plox.user.js#L10325) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L10333) | [10333](../youtube-playback-plox.user.js#L10333) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L10341) | [10341](../youtube-playback-plox.user.js#L10341) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L10364) | [10364](../youtube-playback-plox.user.js#L10364) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L10376) | [10376](../youtube-playback-plox.user.js#L10376) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L10379) | [10379](../youtube-playback-plox.user.js#L10379) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L10389) | [10389](../youtube-playback-plox.user.js#L10389) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L10394) | [10394](../youtube-playback-plox.user.js#L10394) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L10417) | [10417](../youtube-playback-plox.user.js#L10417) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L10436) | [10436](../youtube-playback-plox.user.js#L10436) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L10444) | [10444](../youtube-playback-plox.user.js#L10444) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L10488) | [10488](../youtube-playback-plox.user.js#L10488) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L10543) | [10543](../youtube-playback-plox.user.js#L10543) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L10602) | [10602](../youtube-playback-plox.user.js#L10602) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L10699) | [10699](../youtube-playback-plox.user.js#L10699) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L10712) | [10712](../youtube-playback-plox.user.js#L10712) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L10716) | [10716](../youtube-playback-plox.user.js#L10716) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L10723) | [10723](../youtube-playback-plox.user.js#L10723) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L10741) | [10741](../youtube-playback-plox.user.js#L10741) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L10798)
> [Line 10798](../youtube-playback-plox.user.js#L10798)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L10834) | [10834](../youtube-playback-plox.user.js#L10834) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L10961)
> [Line 10961](../youtube-playback-plox.user.js#L10961)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L10964) | [10964](../youtube-playback-plox.user.js#L10964) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L11002) | [11002](../youtube-playback-plox.user.js#L11002) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L11019) | [11019](../youtube-playback-plox.user.js#L11019) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L11037) | [11037](../youtube-playback-plox.user.js#L11037) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L11071) | [11071](../youtube-playback-plox.user.js#L11071) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L11121) | [11121](../youtube-playback-plox.user.js#L11121) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L11125) | [11125](../youtube-playback-plox.user.js#L11125) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L11262) | [11262](../youtube-playback-plox.user.js#L11262) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L11279)
> [Line 11279](../youtube-playback-plox.user.js#L11279)

| Type | Name | Line |
|---|---|---|
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L11297) | [11297](../youtube-playback-plox.user.js#L11297) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L11374) | [11374](../youtube-playback-plox.user.js#L11374) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L11459) | [11459](../youtube-playback-plox.user.js#L11459) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L11460) | [11460](../youtube-playback-plox.user.js#L11460) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L11549) | [11549](../youtube-playback-plox.user.js#L11549) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L11550) | [11550](../youtube-playback-plox.user.js#L11550) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L11675)
> [Line 11675](../youtube-playback-plox.user.js#L11675)

_No relevant functions or constants detected._

## [🎵 Selección de Videos](../youtube-playback-plox.user.js#L11733)
> [Line 11733](../youtube-playback-plox.user.js#L11733)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11821) | [11821](../youtube-playback-plox.user.js#L11821) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11828) | [11828](../youtube-playback-plox.user.js#L11828) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L12100) | [12100](../youtube-playback-plox.user.js#L12100) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L12274) | [12274](../youtube-playback-plox.user.js#L12274) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L12361)
> [Line 12361](../youtube-playback-plox.user.js#L12361)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L12367) | [12367](../youtube-playback-plox.user.js#L12367) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L12367) | [12367](../youtube-playback-plox.user.js#L12367) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L12368) | [12368](../youtube-playback-plox.user.js#L12368) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L12377) | [12377](../youtube-playback-plox.user.js#L12377) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L12382) | [12382](../youtube-playback-plox.user.js#L12382) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L12391) | [12391](../youtube-playback-plox.user.js#L12391) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L12408) | [12408](../youtube-playback-plox.user.js#L12408) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L12441) | [12441](../youtube-playback-plox.user.js#L12441) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L12466) | [12466](../youtube-playback-plox.user.js#L12466) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L12468) | [12468](../youtube-playback-plox.user.js#L12468) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L12482) | [12482](../youtube-playback-plox.user.js#L12482) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L12482) | [12482](../youtube-playback-plox.user.js#L12482) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L12484) | [12484](../youtube-playback-plox.user.js#L12484) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12507) | [12507](../youtube-playback-plox.user.js#L12507) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12507) | [12507](../youtube-playback-plox.user.js#L12507) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L12518) | [12518](../youtube-playback-plox.user.js#L12518) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L12523) | [12523](../youtube-playback-plox.user.js#L12523) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L12528) | [12528](../youtube-playback-plox.user.js#L12528) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L12540) | [12540](../youtube-playback-plox.user.js#L12540) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12557) | [12557](../youtube-playback-plox.user.js#L12557) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12557) | [12557](../youtube-playback-plox.user.js#L12557) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L12559) | [12559](../youtube-playback-plox.user.js#L12559) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L12567) | [12567](../youtube-playback-plox.user.js#L12567) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L12611)
> [Line 12611](../youtube-playback-plox.user.js#L12611)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12616) | [12616](../youtube-playback-plox.user.js#L12616) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12616) | [12616](../youtube-playback-plox.user.js#L12616) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L12631) | [12631](../youtube-playback-plox.user.js#L12631) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L12666) | [12666](../youtube-playback-plox.user.js#L12666) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L12699) | [12699](../youtube-playback-plox.user.js#L12699) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L12700) | [12700](../youtube-playback-plox.user.js#L12700) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L12731) | [12731](../youtube-playback-plox.user.js#L12731) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L12787) | [12787](../youtube-playback-plox.user.js#L12787) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L12852) | [12852](../youtube-playback-plox.user.js#L12852) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12860) | [12860](../youtube-playback-plox.user.js#L12860) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L12867) | [12867](../youtube-playback-plox.user.js#L12867) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L12905) | [12905](../youtube-playback-plox.user.js#L12905) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L12945) | [12945](../youtube-playback-plox.user.js#L12945) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L12956) | [12956](../youtube-playback-plox.user.js#L12956) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L12971) | [12971](../youtube-playback-plox.user.js#L12971) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L13438) | [13438](../youtube-playback-plox.user.js#L13438) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L13481) | [13481](../youtube-playback-plox.user.js#L13481) |

## [Processing Functions](../youtube-playback-plox.user.js#L13501)
> [Line 13501](../youtube-playback-plox.user.js#L13501)

| Type | Name | Line |
|---|---|---|
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L13516) | [13516](../youtube-playback-plox.user.js#L13516) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L13516) | [13516](../youtube-playback-plox.user.js#L13516) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L13530) | [13530](../youtube-playback-plox.user.js#L13530) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L13535) | [13535](../youtube-playback-plox.user.js#L13535) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L13542) | [13542](../youtube-playback-plox.user.js#L13542) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L13548) | [13548](../youtube-playback-plox.user.js#L13548) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L13566) | [13566](../youtube-playback-plox.user.js#L13566) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L13629) | [13629](../youtube-playback-plox.user.js#L13629) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L13649) | [13649](../youtube-playback-plox.user.js#L13649) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L13682) | [13682](../youtube-playback-plox.user.js#L13682) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L13712) | [13712](../youtube-playback-plox.user.js#L13712) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L13723) | [13723](../youtube-playback-plox.user.js#L13723) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L13735) | [13735](../youtube-playback-plox.user.js#L13735) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L13775) | [13775](../youtube-playback-plox.user.js#L13775) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L13823) | [13823](../youtube-playback-plox.user.js#L13823) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L13975) | [13975](../youtube-playback-plox.user.js#L13975) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L14119) | [14119](../youtube-playback-plox.user.js#L14119) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L14226) | [14226](../youtube-playback-plox.user.js#L14226) |

## [PlaybackController](../youtube-playback-plox.user.js#L14441)
> [Line 14441](../youtube-playback-plox.user.js#L14441)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L14485) | [14485](../youtube-playback-plox.user.js#L14485) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L14501) | [14501](../youtube-playback-plox.user.js#L14501) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L14715) | [14715](../youtube-playback-plox.user.js#L14715) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L14847)
> [Line 14847](../youtube-playback-plox.user.js#L14847)

| Type | Name | Line |
|---|---|---|
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L14916) | [14916](../youtube-playback-plox.user.js#L14916) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L15337)
> [Line 15337](../youtube-playback-plox.user.js#L15337)

| Type | Name | Line |
|---|---|---|
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L15360) | [15360](../youtube-playback-plox.user.js#L15360) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L15436) | [15436](../youtube-playback-plox.user.js#L15436) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L15445) | [15445](../youtube-playback-plox.user.js#L15445) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L15453) | [15453](../youtube-playback-plox.user.js#L15453) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15473) | [15473](../youtube-playback-plox.user.js#L15473) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L15525)
> [Line 15525](../youtube-playback-plox.user.js#L15525)

| Type | Name | Line |
|---|---|---|
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15537) | [15537](../youtube-playback-plox.user.js#L15537) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L15583) | [15583](../youtube-playback-plox.user.js#L15583) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L15589) | [15589](../youtube-playback-plox.user.js#L15589) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L15597) | [15597](../youtube-playback-plox.user.js#L15597) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15612) | [15612](../youtube-playback-plox.user.js#L15612) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L15732) | [15732](../youtube-playback-plox.user.js#L15732) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L15810)
> [Line 15810](../youtube-playback-plox.user.js#L15810)

_No relevant functions or constants detected._

## [📁 Update Video List](../youtube-playback-plox.user.js#L15927)
> [Line 15927](../youtube-playback-plox.user.js#L15927)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSortValue`](../youtube-playback-plox.user.js#L16107) | [16107](../youtube-playback-plox.user.js#L16107) |
| `fn` | [`t`](../youtube-playback-plox.user.js#L16110) | [16110](../youtube-playback-plox.user.js#L16110) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L16124) | [16124](../youtube-playback-plox.user.js#L16124) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L16128) | [16128](../youtube-playback-plox.user.js#L16128) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L16155) | [16155](../youtube-playback-plox.user.js#L16155) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L16174) | [16174](../youtube-playback-plox.user.js#L16174) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L16314) | [16314](../youtube-playback-plox.user.js#L16314) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L16474) | [16474](../youtube-playback-plox.user.js#L16474) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L16495) | [16495](../youtube-playback-plox.user.js#L16495) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L16546) | [16546](../youtube-playback-plox.user.js#L16546) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L16666)
> [Line 16666](../youtube-playback-plox.user.js#L16666)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L16669) | [16669](../youtube-playback-plox.user.js#L16669) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L16683) | [16683](../youtube-playback-plox.user.js#L16683) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L16694)
> [Line 16694](../youtube-playback-plox.user.js#L16694)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L16819) | [16819](../youtube-playback-plox.user.js#L16819) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L16829) | [16829](../youtube-playback-plox.user.js#L16829) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L16904) | [16904](../youtube-playback-plox.user.js#L16904) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L16916)
> [Line 16916](../youtube-playback-plox.user.js#L16916)

| Type | Name | Line |
|---|---|---|
| `fn` | [`deleteFromStorage`](../youtube-playback-plox.user.js#L17043) | [17043](../youtube-playback-plox.user.js#L17043) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L17048) | [17048](../youtube-playback-plox.user.js#L17048) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L17094) | [17094](../youtube-playback-plox.user.js#L17094) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L17142) | [17142](../youtube-playback-plox.user.js#L17142) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L17148) | [17148](../youtube-playback-plox.user.js#L17148) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L17165) | [17165](../youtube-playback-plox.user.js#L17165) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L17199) | [17199](../youtube-playback-plox.user.js#L17199) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L17243) | [17243](../youtube-playback-plox.user.js#L17243) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L17321) | [17321](../youtube-playback-plox.user.js#L17321) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L17327) | [17327](../youtube-playback-plox.user.js#L17327) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L17343) | [17343](../youtube-playback-plox.user.js#L17343) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L17353) | [17353](../youtube-playback-plox.user.js#L17353) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L17361) | [17361](../youtube-playback-plox.user.js#L17361) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L17366) | [17366](../youtube-playback-plox.user.js#L17366) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L17373) | [17373](../youtube-playback-plox.user.js#L17373) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L17376) | [17376](../youtube-playback-plox.user.js#L17376) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L17380) | [17380](../youtube-playback-plox.user.js#L17380) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L17426) | [17426](../youtube-playback-plox.user.js#L17426) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L17426) | [17426](../youtube-playback-plox.user.js#L17426) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L17440) | [17440](../youtube-playback-plox.user.js#L17440) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L17731) | [17731](../youtube-playback-plox.user.js#L17731) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L17745) | [17745](../youtube-playback-plox.user.js#L17745) |
| `fn` | [`makeToolbarGroup`](../youtube-playback-plox.user.js#L17860) | [17860](../youtube-playback-plox.user.js#L17860) |
| `fn` | [`makeDisplayToggle`](../youtube-playback-plox.user.js#L17871) | [17871](../youtube-playback-plox.user.js#L17871) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L17917) | [17917](../youtube-playback-plox.user.js#L17917) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17918) | [17918](../youtube-playback-plox.user.js#L17918) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L17940) | [17940](../youtube-playback-plox.user.js#L17940) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17941) | [17941](../youtube-playback-plox.user.js#L17941) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L17992) | [17992](../youtube-playback-plox.user.js#L17992) |
| `fn` | [`syncOpacityActive`](../youtube-playback-plox.user.js#L18074) | [18074](../youtube-playback-plox.user.js#L18074) |
| `fn` | [`syncStyleActive`](../youtube-playback-plox.user.js#L18147) | [18147](../youtube-playback-plox.user.js#L18147) |
| `fn` | [`syncVisActive`](../youtube-playback-plox.user.js#L18187) | [18187](../youtube-playback-plox.user.js#L18187) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L18233) | [18233](../youtube-playback-plox.user.js#L18233) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L18332) | [18332](../youtube-playback-plox.user.js#L18332) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L18415) | [18415](../youtube-playback-plox.user.js#L18415) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L18669) | [18669](../youtube-playback-plox.user.js#L18669) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L18692) | [18692](../youtube-playback-plox.user.js#L18692) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L18693) | [18693](../youtube-playback-plox.user.js#L18693) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L18765)
> [Line 18765](../youtube-playback-plox.user.js#L18765)

_No relevant functions or constants detected._

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L18837)
> [Line 18837](../youtube-playback-plox.user.js#L18837)

_No relevant functions or constants detected._

## [🔄 Migración de Datos](../youtube-playback-plox.user.js#L18875)
> [Line 18875](../youtube-playback-plox.user.js#L18875)

| Type | Name | Line |
|---|---|---|
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L18932) | [18932](../youtube-playback-plox.user.js#L18932) |

## [🚀 Init](../youtube-playback-plox.user.js#L19252)
> [Line 19252](../youtube-playback-plox.user.js#L19252)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L19261) | [19261](../youtube-playback-plox.user.js#L19261) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L19283) | [19283](../youtube-playback-plox.user.js#L19283) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L19592) | [19592](../youtube-playback-plox.user.js#L19592) |

