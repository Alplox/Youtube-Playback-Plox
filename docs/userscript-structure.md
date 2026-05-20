# Userscript Structure
> Auto-generated on 2026-05-20 · version 0.0.10-2
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
40. [💾 Save Video Generic](#save-video-generic) - [line 8909](../youtube-playback-plox.user.js#L8909)
41. [📺 Helpers](#helpers) - [line 9088](../youtube-playback-plox.user.js#L9088)
42. [📺 Obtiene datos guardados de un video](#obtiene-datos-guardados-de-un-video) - [line 9091](../youtube-playback-plox.user.js#L9091)
43. [📺 Get Player Video ID](#get-player-video-id) - [line 9141](../youtube-playback-plox.user.js#L9141)
44. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 9220](../youtube-playback-plox.user.js#L9220)
45. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 9421](../youtube-playback-plox.user.js#L9421)
46. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 9627](../youtube-playback-plox.user.js#L9627)
47. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 9649](../youtube-playback-plox.user.js#L9649)
48. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 9677](../youtube-playback-plox.user.js#L9677)
49. [📺 get Playlist Name](#get-playlist-name) - [line 9722](../youtube-playback-plox.user.js#L9722)
50. [🕒 Time Display](#time-display) - [line 9936](../youtube-playback-plox.user.js#L9936)
51. [🖼️ Display Button Helpers](#display-button-helpers) - [line 9972](../youtube-playback-plox.user.js#L9972)
52. [🍞 Toasts](#toasts) - [line 10745](../youtube-playback-plox.user.js#L10745)
53. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 10908](../youtube-playback-plox.user.js#L10908)
54. [⚙️ Settings UI](#settings-ui) - [line 11226](../youtube-playback-plox.user.js#L11226)
55. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 11622](../youtube-playback-plox.user.js#L11622)
56. [🎵 Selección de Videos](#seleccin-de-videos) - [line 11680](../youtube-playback-plox.user.js#L11680)
57. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 12308](../youtube-playback-plox.user.js#L12308)
58. [📡 Video Observer Manager](#video-observer-manager) - [line 12558](../youtube-playback-plox.user.js#L12558)
59. [Processing Functions](#processing-functions) - [line 13448](../youtube-playback-plox.user.js#L13448)
60. [PlaybackController](#playbackcontroller) - [line 14388](../youtube-playback-plox.user.js#L14388)
61. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 14784](../youtube-playback-plox.user.js#L14784)
62. [📂 Sort UI](#sort-ui) - [line 15274](../youtube-playback-plox.user.js#L15274)
63. [📂 Filters UI](#filters-ui) - [line 15462](../youtube-playback-plox.user.js#L15462)
64. [📂 Video List UI](#video-list-ui) - [line 15747](../youtube-playback-plox.user.js#L15747)
65. [📁 Update Video List](#update-video-list) - [line 15866](../youtube-playback-plox.user.js#L15866)
66. [🔘 Floating Button](#floating-button) - [line 16673](../youtube-playback-plox.user.js#L16673)
67. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 16701](../youtube-playback-plox.user.js#L16701)
68. [📂 Video Entry](#video-entry) - [line 16925](../youtube-playback-plox.user.js#L16925)
69. [🗑️ Clear All Data](#clear-all-data) - [line 18855](../youtube-playback-plox.user.js#L18855)
70. [⚙️ Menu Commands](#menu-commands) - [line 18927](../youtube-playback-plox.user.js#L18927)
71. [🔄 Migración de Datos](#migracin-de-datos) - [line 18965](../youtube-playback-plox.user.js#L18965)
72. [🚀 Init](#init) - [line 19342](../youtube-playback-plox.user.js#L19342)

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

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L8909)
> [Line 8909](../youtube-playback-plox.user.js#L8909)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8956) | [8956](../youtube-playback-plox.user.js#L8956) |

## [📺 Helpers](../youtube-playback-plox.user.js#L9088)
> [Line 9088](../youtube-playback-plox.user.js#L9088)

_No relevant functions or constants detected._

## [📺 Obtiene datos guardados de un video](../youtube-playback-plox.user.js#L9091)
> [Line 9091](../youtube-playback-plox.user.js#L9091)

| Type | Name | Line |
|---|---|---|
| `fn` | [`keys`](../youtube-playback-plox.user.js#L9117) | [9117](../youtube-playback-plox.user.js#L9117) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L9141)
> [Line 9141](../youtube-playback-plox.user.js#L9141)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L9177) | [9177](../youtube-playback-plox.user.js#L9177) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L9220)
> [Line 9220](../youtube-playback-plox.user.js#L9220)

_No relevant functions or constants detected._

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L9421)
> [Line 9421](../youtube-playback-plox.user.js#L9421)

| Type | Name | Line |
|---|---|---|
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L9518) | [9518](../youtube-playback-plox.user.js#L9518) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L9627)
> [Line 9627](../youtube-playback-plox.user.js#L9627)

_No relevant functions or constants detected._

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L9649)
> [Line 9649](../youtube-playback-plox.user.js#L9649)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L9677)
> [Line 9677](../youtube-playback-plox.user.js#L9677)

_No relevant functions or constants detected._

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L9722)
> [Line 9722](../youtube-playback-plox.user.js#L9722)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L9743) | [9743](../youtube-playback-plox.user.js#L9743) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L9824) | [9824](../youtube-playback-plox.user.js#L9824) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L9909) | [9909](../youtube-playback-plox.user.js#L9909) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L9936)
> [Line 9936](../youtube-playback-plox.user.js#L9936)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L9962) | [9962](../youtube-playback-plox.user.js#L9962) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L9972)
> [Line 9972](../youtube-playback-plox.user.js#L9972)

| Type | Name | Line |
|---|---|---|
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L10250) | [10250](../youtube-playback-plox.user.js#L10250) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L10250) | [10250](../youtube-playback-plox.user.js#L10250) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L10264) | [10264](../youtube-playback-plox.user.js#L10264) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L10272) | [10272](../youtube-playback-plox.user.js#L10272) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L10280) | [10280](../youtube-playback-plox.user.js#L10280) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L10288) | [10288](../youtube-playback-plox.user.js#L10288) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L10311) | [10311](../youtube-playback-plox.user.js#L10311) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L10323) | [10323](../youtube-playback-plox.user.js#L10323) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L10326) | [10326](../youtube-playback-plox.user.js#L10326) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L10336) | [10336](../youtube-playback-plox.user.js#L10336) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L10341) | [10341](../youtube-playback-plox.user.js#L10341) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L10364) | [10364](../youtube-playback-plox.user.js#L10364) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L10383) | [10383](../youtube-playback-plox.user.js#L10383) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L10391) | [10391](../youtube-playback-plox.user.js#L10391) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L10435) | [10435](../youtube-playback-plox.user.js#L10435) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L10490) | [10490](../youtube-playback-plox.user.js#L10490) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L10549) | [10549](../youtube-playback-plox.user.js#L10549) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L10646) | [10646](../youtube-playback-plox.user.js#L10646) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L10659) | [10659](../youtube-playback-plox.user.js#L10659) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L10663) | [10663](../youtube-playback-plox.user.js#L10663) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L10670) | [10670](../youtube-playback-plox.user.js#L10670) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L10688) | [10688](../youtube-playback-plox.user.js#L10688) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L10745)
> [Line 10745](../youtube-playback-plox.user.js#L10745)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L10781) | [10781](../youtube-playback-plox.user.js#L10781) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L10908)
> [Line 10908](../youtube-playback-plox.user.js#L10908)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L10911) | [10911](../youtube-playback-plox.user.js#L10911) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L10949) | [10949](../youtube-playback-plox.user.js#L10949) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L10966) | [10966](../youtube-playback-plox.user.js#L10966) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L10984) | [10984](../youtube-playback-plox.user.js#L10984) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L11018) | [11018](../youtube-playback-plox.user.js#L11018) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L11068) | [11068](../youtube-playback-plox.user.js#L11068) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L11072) | [11072](../youtube-playback-plox.user.js#L11072) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L11209) | [11209](../youtube-playback-plox.user.js#L11209) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L11226)
> [Line 11226](../youtube-playback-plox.user.js#L11226)

| Type | Name | Line |
|---|---|---|
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L11244) | [11244](../youtube-playback-plox.user.js#L11244) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L11321) | [11321](../youtube-playback-plox.user.js#L11321) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L11406) | [11406](../youtube-playback-plox.user.js#L11406) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L11407) | [11407](../youtube-playback-plox.user.js#L11407) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L11496) | [11496](../youtube-playback-plox.user.js#L11496) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L11497) | [11497](../youtube-playback-plox.user.js#L11497) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L11622)
> [Line 11622](../youtube-playback-plox.user.js#L11622)

_No relevant functions or constants detected._

## [🎵 Selección de Videos](../youtube-playback-plox.user.js#L11680)
> [Line 11680](../youtube-playback-plox.user.js#L11680)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11768) | [11768](../youtube-playback-plox.user.js#L11768) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11775) | [11775](../youtube-playback-plox.user.js#L11775) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L12047) | [12047](../youtube-playback-plox.user.js#L12047) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L12221) | [12221](../youtube-playback-plox.user.js#L12221) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L12308)
> [Line 12308](../youtube-playback-plox.user.js#L12308)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L12314) | [12314](../youtube-playback-plox.user.js#L12314) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L12314) | [12314](../youtube-playback-plox.user.js#L12314) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L12315) | [12315](../youtube-playback-plox.user.js#L12315) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L12324) | [12324](../youtube-playback-plox.user.js#L12324) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L12329) | [12329](../youtube-playback-plox.user.js#L12329) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L12338) | [12338](../youtube-playback-plox.user.js#L12338) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L12355) | [12355](../youtube-playback-plox.user.js#L12355) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L12388) | [12388](../youtube-playback-plox.user.js#L12388) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L12413) | [12413](../youtube-playback-plox.user.js#L12413) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L12415) | [12415](../youtube-playback-plox.user.js#L12415) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L12429) | [12429](../youtube-playback-plox.user.js#L12429) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L12429) | [12429](../youtube-playback-plox.user.js#L12429) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L12431) | [12431](../youtube-playback-plox.user.js#L12431) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12454) | [12454](../youtube-playback-plox.user.js#L12454) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12454) | [12454](../youtube-playback-plox.user.js#L12454) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L12465) | [12465](../youtube-playback-plox.user.js#L12465) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L12470) | [12470](../youtube-playback-plox.user.js#L12470) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L12475) | [12475](../youtube-playback-plox.user.js#L12475) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L12487) | [12487](../youtube-playback-plox.user.js#L12487) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12504) | [12504](../youtube-playback-plox.user.js#L12504) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12504) | [12504](../youtube-playback-plox.user.js#L12504) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L12506) | [12506](../youtube-playback-plox.user.js#L12506) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L12514) | [12514](../youtube-playback-plox.user.js#L12514) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L12558)
> [Line 12558](../youtube-playback-plox.user.js#L12558)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12563) | [12563](../youtube-playback-plox.user.js#L12563) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12563) | [12563](../youtube-playback-plox.user.js#L12563) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L12578) | [12578](../youtube-playback-plox.user.js#L12578) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L12613) | [12613](../youtube-playback-plox.user.js#L12613) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L12646) | [12646](../youtube-playback-plox.user.js#L12646) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L12647) | [12647](../youtube-playback-plox.user.js#L12647) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L12678) | [12678](../youtube-playback-plox.user.js#L12678) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L12734) | [12734](../youtube-playback-plox.user.js#L12734) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L12799) | [12799](../youtube-playback-plox.user.js#L12799) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12807) | [12807](../youtube-playback-plox.user.js#L12807) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L12814) | [12814](../youtube-playback-plox.user.js#L12814) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L12852) | [12852](../youtube-playback-plox.user.js#L12852) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L12892) | [12892](../youtube-playback-plox.user.js#L12892) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L12903) | [12903](../youtube-playback-plox.user.js#L12903) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L12918) | [12918](../youtube-playback-plox.user.js#L12918) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L13385) | [13385](../youtube-playback-plox.user.js#L13385) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L13428) | [13428](../youtube-playback-plox.user.js#L13428) |

## [Processing Functions](../youtube-playback-plox.user.js#L13448)
> [Line 13448](../youtube-playback-plox.user.js#L13448)

| Type | Name | Line |
|---|---|---|
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L13463) | [13463](../youtube-playback-plox.user.js#L13463) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L13463) | [13463](../youtube-playback-plox.user.js#L13463) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L13477) | [13477](../youtube-playback-plox.user.js#L13477) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L13482) | [13482](../youtube-playback-plox.user.js#L13482) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L13489) | [13489](../youtube-playback-plox.user.js#L13489) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L13495) | [13495](../youtube-playback-plox.user.js#L13495) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L13513) | [13513](../youtube-playback-plox.user.js#L13513) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L13576) | [13576](../youtube-playback-plox.user.js#L13576) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L13596) | [13596](../youtube-playback-plox.user.js#L13596) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L13629) | [13629](../youtube-playback-plox.user.js#L13629) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L13659) | [13659](../youtube-playback-plox.user.js#L13659) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L13670) | [13670](../youtube-playback-plox.user.js#L13670) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L13682) | [13682](../youtube-playback-plox.user.js#L13682) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L13722) | [13722](../youtube-playback-plox.user.js#L13722) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L13770) | [13770](../youtube-playback-plox.user.js#L13770) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L13922) | [13922](../youtube-playback-plox.user.js#L13922) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L14066) | [14066](../youtube-playback-plox.user.js#L14066) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L14173) | [14173](../youtube-playback-plox.user.js#L14173) |

## [PlaybackController](../youtube-playback-plox.user.js#L14388)
> [Line 14388](../youtube-playback-plox.user.js#L14388)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L14432) | [14432](../youtube-playback-plox.user.js#L14432) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L14448) | [14448](../youtube-playback-plox.user.js#L14448) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L14662) | [14662](../youtube-playback-plox.user.js#L14662) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L14784)
> [Line 14784](../youtube-playback-plox.user.js#L14784)

| Type | Name | Line |
|---|---|---|
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L14853) | [14853](../youtube-playback-plox.user.js#L14853) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L15274)
> [Line 15274](../youtube-playback-plox.user.js#L15274)

| Type | Name | Line |
|---|---|---|
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L15297) | [15297](../youtube-playback-plox.user.js#L15297) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L15373) | [15373](../youtube-playback-plox.user.js#L15373) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L15382) | [15382](../youtube-playback-plox.user.js#L15382) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L15390) | [15390](../youtube-playback-plox.user.js#L15390) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15410) | [15410](../youtube-playback-plox.user.js#L15410) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L15462)
> [Line 15462](../youtube-playback-plox.user.js#L15462)

| Type | Name | Line |
|---|---|---|
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15474) | [15474](../youtube-playback-plox.user.js#L15474) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L15520) | [15520](../youtube-playback-plox.user.js#L15520) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L15526) | [15526](../youtube-playback-plox.user.js#L15526) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L15534) | [15534](../youtube-playback-plox.user.js#L15534) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15549) | [15549](../youtube-playback-plox.user.js#L15549) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L15669) | [15669](../youtube-playback-plox.user.js#L15669) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L15747)
> [Line 15747](../youtube-playback-plox.user.js#L15747)

_No relevant functions or constants detected._

## [📁 Update Video List](../youtube-playback-plox.user.js#L15866)
> [Line 15866](../youtube-playback-plox.user.js#L15866)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSortValue`](../youtube-playback-plox.user.js#L16046) | [16046](../youtube-playback-plox.user.js#L16046) |
| `fn` | [`t`](../youtube-playback-plox.user.js#L16049) | [16049](../youtube-playback-plox.user.js#L16049) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L16063) | [16063](../youtube-playback-plox.user.js#L16063) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L16067) | [16067](../youtube-playback-plox.user.js#L16067) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L16097) | [16097](../youtube-playback-plox.user.js#L16097) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L16116) | [16116](../youtube-playback-plox.user.js#L16116) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L16256) | [16256](../youtube-playback-plox.user.js#L16256) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L16364) | [16364](../youtube-playback-plox.user.js#L16364) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L16481) | [16481](../youtube-playback-plox.user.js#L16481) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L16502) | [16502](../youtube-playback-plox.user.js#L16502) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L16553) | [16553](../youtube-playback-plox.user.js#L16553) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L16673)
> [Line 16673](../youtube-playback-plox.user.js#L16673)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L16676) | [16676](../youtube-playback-plox.user.js#L16676) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L16690) | [16690](../youtube-playback-plox.user.js#L16690) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L16701)
> [Line 16701](../youtube-playback-plox.user.js#L16701)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L16828) | [16828](../youtube-playback-plox.user.js#L16828) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L16838) | [16838](../youtube-playback-plox.user.js#L16838) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L16913) | [16913](../youtube-playback-plox.user.js#L16913) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L16925)
> [Line 16925](../youtube-playback-plox.user.js#L16925)

| Type | Name | Line |
|---|---|---|
| `fn` | [`deleteFromStorage`](../youtube-playback-plox.user.js#L17052) | [17052](../youtube-playback-plox.user.js#L17052) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L17057) | [17057](../youtube-playback-plox.user.js#L17057) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L17103) | [17103](../youtube-playback-plox.user.js#L17103) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L17151) | [17151](../youtube-playback-plox.user.js#L17151) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L17157) | [17157](../youtube-playback-plox.user.js#L17157) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L17174) | [17174](../youtube-playback-plox.user.js#L17174) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L17208) | [17208](../youtube-playback-plox.user.js#L17208) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L17252) | [17252](../youtube-playback-plox.user.js#L17252) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L17334) | [17334](../youtube-playback-plox.user.js#L17334) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L17340) | [17340](../youtube-playback-plox.user.js#L17340) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L17356) | [17356](../youtube-playback-plox.user.js#L17356) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L17366) | [17366](../youtube-playback-plox.user.js#L17366) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L17374) | [17374](../youtube-playback-plox.user.js#L17374) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L17379) | [17379](../youtube-playback-plox.user.js#L17379) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L17386) | [17386](../youtube-playback-plox.user.js#L17386) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L17389) | [17389](../youtube-playback-plox.user.js#L17389) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L17393) | [17393](../youtube-playback-plox.user.js#L17393) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L17439) | [17439](../youtube-playback-plox.user.js#L17439) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L17439) | [17439](../youtube-playback-plox.user.js#L17439) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L17453) | [17453](../youtube-playback-plox.user.js#L17453) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L17744) | [17744](../youtube-playback-plox.user.js#L17744) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L17758) | [17758](../youtube-playback-plox.user.js#L17758) |
| `fn` | [`makeToolbarGroup`](../youtube-playback-plox.user.js#L17873) | [17873](../youtube-playback-plox.user.js#L17873) |
| `fn` | [`makeDisplayToggle`](../youtube-playback-plox.user.js#L17884) | [17884](../youtube-playback-plox.user.js#L17884) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L17930) | [17930](../youtube-playback-plox.user.js#L17930) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17931) | [17931](../youtube-playback-plox.user.js#L17931) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L17953) | [17953](../youtube-playback-plox.user.js#L17953) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17954) | [17954](../youtube-playback-plox.user.js#L17954) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L18005) | [18005](../youtube-playback-plox.user.js#L18005) |
| `fn` | [`syncScrollbarVis`](../youtube-playback-plox.user.js#L18050) | [18050](../youtube-playback-plox.user.js#L18050) |
| `fn` | [`syncScrollbarThick`](../youtube-playback-plox.user.js#L18088) | [18088](../youtube-playback-plox.user.js#L18088) |
| `fn` | [`syncOpacityActive`](../youtube-playback-plox.user.js#L18164) | [18164](../youtube-playback-plox.user.js#L18164) |
| `fn` | [`syncStyleActive`](../youtube-playback-plox.user.js#L18237) | [18237](../youtube-playback-plox.user.js#L18237) |
| `fn` | [`syncVisActive`](../youtube-playback-plox.user.js#L18277) | [18277](../youtube-playback-plox.user.js#L18277) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L18323) | [18323](../youtube-playback-plox.user.js#L18323) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L18422) | [18422](../youtube-playback-plox.user.js#L18422) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L18505) | [18505](../youtube-playback-plox.user.js#L18505) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L18759) | [18759](../youtube-playback-plox.user.js#L18759) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L18782) | [18782](../youtube-playback-plox.user.js#L18782) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L18783) | [18783](../youtube-playback-plox.user.js#L18783) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L18855)
> [Line 18855](../youtube-playback-plox.user.js#L18855)

_No relevant functions or constants detected._

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L18927)
> [Line 18927](../youtube-playback-plox.user.js#L18927)

_No relevant functions or constants detected._

## [🔄 Migración de Datos](../youtube-playback-plox.user.js#L18965)
> [Line 18965](../youtube-playback-plox.user.js#L18965)

| Type | Name | Line |
|---|---|---|
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L19022) | [19022](../youtube-playback-plox.user.js#L19022) |

## [🚀 Init](../youtube-playback-plox.user.js#L19342)
> [Line 19342](../youtube-playback-plox.user.js#L19342)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L19351) | [19351](../youtube-playback-plox.user.js#L19351) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L19373) | [19373](../youtube-playback-plox.user.js#L19373) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L19682) | [19682](../youtube-playback-plox.user.js#L19682) |

