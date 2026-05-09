# Userscript Structure
> Auto-generated on 2026-05-09 · version 0.0.10
> **DO NOT EDIT MANUALLY** - regenerate with `node ./scripts/generate-structure.mjs`

---

## Sections index

1. [🔍 Logger System](#logger-system) - [line 139](../youtube-playback-plox.user.js#L139)
2. [🛡️ Initialization Guard (SPA Safety)](#initialization-guard-spa-safety) - [line 228](../youtube-playback-plox.user.js#L228)
3. [🌐 Translation Loading](#translation-loading) - [line 298](../youtube-playback-plox.user.js#L298)
4. [📦 Config](#config) - [line 1100](../youtube-playback-plox.user.js#L1100)
5. [📊 Global variables](#global-variables) - [line 1176](../youtube-playback-plox.user.js#L1176)
6. [Selectors](#selectors) - [line 1207](../youtube-playback-plox.user.js#L1207)
7. [⚙️ DOM Cache System](#dom-cache-system) - [line 1380](../youtube-playback-plox.user.js#L1380)
8. [🌐 Translation Functions](#translation-functions) - [line 1722](../youtube-playback-plox.user.js#L1722)
9. [🎨 Styles](#styles) - [line 1879](../youtube-playback-plox.user.js#L1879)
10. [🎨 Theme](#theme) - [line 4764](../youtube-playback-plox.user.js#L4764)
11. [🎨 SVG Icons](#svg-icons) - [line 4860](../youtube-playback-plox.user.js#L4860)
12. [🎨 Estilo barra progreso](#estilo-barra-progreso) - [line 5010](../youtube-playback-plox.user.js#L5010)
13. [💾 Storage + Settings](#storage-settings) - [line 5324](../youtube-playback-plox.user.js#L5324)
14. [📢 Ad Selectors](#ad-selectors) - [line 5839](../youtube-playback-plox.user.js#L5839)
15. [📢 Ad Detector](#ad-detector) - [line 5950](../youtube-playback-plox.user.js#L5950)
16. [🔧 Utils](#utils) - [line 6136](../youtube-playback-plox.user.js#L6136)
17. [🔧 Escape HTML](#escape-html) - [line 6139](../youtube-playback-plox.user.js#L6139)
18. [🔧 Is Visibly Displayed](#is-visibly-displayed) - [line 6162](../youtube-playback-plox.user.js#L6162)
19. [🔧 Format Time](#format-time) - [line 6186](../youtube-playback-plox.user.js#L6186)
20. [🔧 parseTimeToSeconds](#parsetimetoseconds) - [line 6281](../youtube-playback-plox.user.js#L6281)
21. [🔧 normalizeSeconds](#normalizeseconds) - [line 6329](../youtube-playback-plox.user.js#L6329)
22. [🔧 setInnerHTML](#setinnerhtml) - [line 6355](../youtube-playback-plox.user.js#L6355)
23. [🔧 Crear Elemento](#crear-elemento) - [line 6443](../youtube-playback-plox.user.js#L6443)
24. [🔧 UI Helpers](#ui-helpers) - [line 6579](../youtube-playback-plox.user.js#L6579)
25. [🔧 Debounce](#debounce) - [line 6669](../youtube-playback-plox.user.js#L6669)
26. [🎯 VirtualScroller](#virtualscroller) - [line 6695](../youtube-playback-plox.user.js#L6695)
27. [📤 Import/Export JSON](#importexport-json) - [line 7007](../youtube-playback-plox.user.js#L7007)
28. [☁️ GitHub Backup](#github-backup) - [line 7162](../youtube-playback-plox.user.js#L7162)
29. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 7527](../youtube-playback-plox.user.js#L7527)
30. [🔄 Normalize Video Data](#normalize-video-data) - [line 7729](../youtube-playback-plox.user.js#L7729)
31. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 7811](../youtube-playback-plox.user.js#L7811)
32. [Parse FreeTube DB](#parse-freetube-db) - [line 7902](../youtube-playback-plox.user.js#L7902)
33. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 7959](../youtube-playback-plox.user.js#L7959)
34. [⬆ Export To FreeTube](#export-to-freetube) - [line 7990](../youtube-playback-plox.user.js#L7990)
35. [⬇ Import From FreeTube](#import-from-freetube) - [line 8037](../youtube-playback-plox.user.js#L8037)
36. [🔄 Insert Completion Event](#insert-completion-event) - [line 8095](../youtube-playback-plox.user.js#L8095)
37. [💾 Internal Save Regular Video](#internal-save-regular-video) - [line 8138](../youtube-playback-plox.user.js#L8138)
38. [💾 Save Regular Video](#save-regular-video) - [line 8259](../youtube-playback-plox.user.js#L8259)
39. [💾 Save Miniplayer](#save-miniplayer) - [line 8270](../youtube-playback-plox.user.js#L8270)
40. [💾 Save Shorts](#save-shorts) - [line 8281](../youtube-playback-plox.user.js#L8281)
41. [💾 Save Preview](#save-preview) - [line 8397](../youtube-playback-plox.user.js#L8397)
42. [💾 Save Livestream](#save-livestream) - [line 8485](../youtube-playback-plox.user.js#L8485)
43. [📺 Helpers](#helpers) - [line 8540](../youtube-playback-plox.user.js#L8540)
44. [📺 Obtiene datos guardados de un video](#obtiene-datos-guardados-de-un-video) - [line 8543](../youtube-playback-plox.user.js#L8543)
45. [📺 Get Player Video ID](#get-player-video-id) - [line 8593](../youtube-playback-plox.user.js#L8593)
46. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 8652](../youtube-playback-plox.user.js#L8652)
47. [📺 YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 8814](../youtube-playback-plox.user.js#L8814)
48. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 9025](../youtube-playback-plox.user.js#L9025)
49. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 9038](../youtube-playback-plox.user.js#L9038)
50. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 9053](../youtube-playback-plox.user.js#L9053)
51. [📺 Get YouTube Playlist URL Type](#get-youtube-playlist-url-type) - [line 9066](../youtube-playback-plox.user.js#L9066)
52. [📺 Get Playlist Name](#get-playlist-name) - [line 9081](../youtube-playback-plox.user.js#L9081)
53. [🕒 Time Display](#time-display) - [line 9237](../youtube-playback-plox.user.js#L9237)
54. [🖼️ Display Button Helpers](#display-button-helpers) - [line 9273](../youtube-playback-plox.user.js#L9273)
55. [🍞 Toasts](#toasts) - [line 10025](../youtube-playback-plox.user.js#L10025)
56. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 10181](../youtube-playback-plox.user.js#L10181)
57. [⚙️ Settings UI](#settings-ui) - [line 10475](../youtube-playback-plox.user.js#L10475)
58. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 10837](../youtube-playback-plox.user.js#L10837)
59. [🎵 Selección de Videos](#seleccin-de-videos) - [line 10917](../youtube-playback-plox.user.js#L10917)
60. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 11545](../youtube-playback-plox.user.js#L11545)
61. [📡 Video Observer Manager](#video-observer-manager) - [line 11786](../youtube-playback-plox.user.js#L11786)
62. [Processing Functions](#processing-functions) - [line 12663](../youtube-playback-plox.user.js#L12663)
63. [PlaybackController](#playbackcontroller) - [line 13543](../youtube-playback-plox.user.js#L13543)
64. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 13937](../youtube-playback-plox.user.js#L13937)
65. [📂 Sort UI](#sort-ui) - [line 14410](../youtube-playback-plox.user.js#L14410)
66. [📂 Filters UI](#filters-ui) - [line 14598](../youtube-playback-plox.user.js#L14598)
67. [📂 Video List UI](#video-list-ui) - [line 14883](../youtube-playback-plox.user.js#L14883)
68. [📁 Update Video List](#update-video-list) - [line 14962](../youtube-playback-plox.user.js#L14962)
69. [🔘 Floating Button](#floating-button) - [line 15613](../youtube-playback-plox.user.js#L15613)
70. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 15644](../youtube-playback-plox.user.js#L15644)
71. [📂 Video Entry](#video-entry) - [line 15856](../youtube-playback-plox.user.js#L15856)
72. [🗑️ Clear All Data](#clear-all-data) - [line 16462](../youtube-playback-plox.user.js#L16462)
73. [⚙️ Menu Commands](#menu-commands) - [line 16534](../youtube-playback-plox.user.js#L16534)
74. [🔄 Migración de Datos](#migracin-de-datos) - [line 16572](../youtube-playback-plox.user.js#L16572)
75. [🚀 Init](#init) - [line 16821](../youtube-playback-plox.user.js#L16821)

---

## [🔍 Logger System](../youtube-playback-plox.user.js#L139)
> [Line 139](../youtube-playback-plox.user.js#L139)

| Type | Name | Line |
|---|---|---|
| `fn` | [`noop`](../youtube-playback-plox.user.js#L151) | [151](../youtube-playback-plox.user.js#L151) |
| `fn` | [`build`](../youtube-playback-plox.user.js#L153) | [153](../youtube-playback-plox.user.js#L153) |
| `fn` | [`msg`](../youtube-playback-plox.user.js#L197) | [197](../youtube-playback-plox.user.js#L197) |

## [🛡️ Initialization Guard (SPA Safety)](../youtube-playback-plox.user.js#L228)
> [Line 228](../youtube-playback-plox.user.js#L228)

_No relevant functions or constants detected._

## [🌐 Translation Loading](../youtube-playback-plox.user.js#L298)
> [Line 298](../youtube-playback-plox.user.js#L298)

| Type | Name | Line |
|---|---|---|
| `fn` | [`fetchUrl`](../youtube-playback-plox.user.js#L1040) | [1040](../youtube-playback-plox.user.js#L1040) |

## [📦 Config](../youtube-playback-plox.user.js#L1100)
> [Line 1100](../youtube-playback-plox.user.js#L1100)

_No relevant functions or constants detected._

## [📊 Global variables](../youtube-playback-plox.user.js#L1176)
> [Line 1176](../youtube-playback-plox.user.js#L1176)

_No relevant functions or constants detected._

## [Selectors](../youtube-playback-plox.user.js#L1207)
> [Line 1207](../youtube-playback-plox.user.js#L1207)

_No relevant functions or constants detected._

## [⚙️ DOM Cache System](../youtube-playback-plox.user.js#L1380)
> [Line 1380](../youtube-playback-plox.user.js#L1380)

| Type | Name | Line |
|---|---|---|
| `fn` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1394) | [1394](../youtube-playback-plox.user.js#L1394) |
| `module` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1394) | [1394](../youtube-playback-plox.user.js#L1394) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L1420) | [1420](../youtube-playback-plox.user.js#L1420) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L1437) | [1437](../youtube-playback-plox.user.js#L1437) |

## [🌐 Translation Functions](../youtube-playback-plox.user.js#L1722)
> [Line 1722](../youtube-playback-plox.user.js#L1722)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normParams`](../youtube-playback-plox.user.js#L1746) | [1746](../youtube-playback-plox.user.js#L1746) |
| `fn` | [`candidates`](../youtube-playback-plox.user.js#L1836) | [1836](../youtube-playback-plox.user.js#L1836) |
| `fn` | [`normalized`](../youtube-playback-plox.user.js#L1855) | [1855](../youtube-playback-plox.user.js#L1855) |

## [🎨 Styles](../youtube-playback-plox.user.js#L1879)
> [Line 1879](../youtube-playback-plox.user.js#L1879)

_No relevant functions or constants detected._

## [🎨 Theme](../youtube-playback-plox.user.js#L4764)
> [Line 4764](../youtube-playback-plox.user.js#L4764)

_No relevant functions or constants detected._

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L4860)
> [Line 4860](../youtube-playback-plox.user.js#L4860)

_No relevant functions or constants detected._

## [🎨 Estilo barra progreso](../youtube-playback-plox.user.js#L5010)
> [Line 5010](../youtube-playback-plox.user.js#L5010)

| Type | Name | Line |
|---|---|---|
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L5301) | [5301](../youtube-playback-plox.user.js#L5301) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L5324)
> [Line 5324](../youtube-playback-plox.user.js#L5324)

| Type | Name | Line |
|---|---|---|
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L5334) | [5334](../youtube-playback-plox.user.js#L5334) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L5334) | [5334](../youtube-playback-plox.user.js#L5334) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5476) | [5476](../youtube-playback-plox.user.js#L5476) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5476) | [5476](../youtube-playback-plox.user.js#L5476) |
| `fn` | [`isSupported`](../youtube-playback-plox.user.js#L5480) | [5480](../youtube-playback-plox.user.js#L5480) |
| `module` | [`isSupported`](../youtube-playback-plox.user.js#L5480) | [5480](../youtube-playback-plox.user.js#L5480) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L5635) | [5635](../youtube-playback-plox.user.js#L5635) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L5763) | [5763](../youtube-playback-plox.user.js#L5763) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L5781) | [5781](../youtube-playback-plox.user.js#L5781) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L5802) | [5802](../youtube-playback-plox.user.js#L5802) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L5810) | [5810](../youtube-playback-plox.user.js#L5810) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L5828) | [5828](../youtube-playback-plox.user.js#L5828) |

## [📢 Ad Selectors](../youtube-playback-plox.user.js#L5839)
> [Line 5839](../youtube-playback-plox.user.js#L5839)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdSelectors`](../youtube-playback-plox.user.js#L5841) | [5841](../youtube-playback-plox.user.js#L5841) |
| `module` | [`AdSelectorText`](../youtube-playback-plox.user.js#L5922) | [5922](../youtube-playback-plox.user.js#L5922) |
| `fn` | [`_adDetectorTick`](../youtube-playback-plox.user.js#L5935) | [5935](../youtube-playback-plox.user.js#L5935) |

## [📢 Ad Detector](../youtube-playback-plox.user.js#L5950)
> [Line 5950](../youtube-playback-plox.user.js#L5950)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L5955) | [5955](../youtube-playback-plox.user.js#L5955) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L6004) | [6004](../youtube-playback-plox.user.js#L6004) |

## [🔧 Utils](../youtube-playback-plox.user.js#L6136)
> [Line 6136](../youtube-playback-plox.user.js#L6136)

_No relevant functions or constants detected._

## [🔧 Escape HTML](../youtube-playback-plox.user.js#L6139)
> [Line 6139](../youtube-playback-plox.user.js#L6139)

| Type | Name | Line |
|---|---|---|
| `fn` | [`escapeHTML`](../youtube-playback-plox.user.js#L6150) | [6150](../youtube-playback-plox.user.js#L6150) |

## [🔧 Is Visibly Displayed](../youtube-playback-plox.user.js#L6162)
> [Line 6162](../youtube-playback-plox.user.js#L6162)

_No relevant functions or constants detected._

## [🔧 Format Time](../youtube-playback-plox.user.js#L6186)
> [Line 6186](../youtube-playback-plox.user.js#L6186)

| Type | Name | Line |
|---|---|---|
| `fn` | [`formatTime`](../youtube-playback-plox.user.js#L6209) | [6209](../youtube-playback-plox.user.js#L6209) |

## [🔧 parseTimeToSeconds](../youtube-playback-plox.user.js#L6281)
> [Line 6281](../youtube-playback-plox.user.js#L6281)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseTimeToSeconds`](../youtube-playback-plox.user.js#L6304) | [6304](../youtube-playback-plox.user.js#L6304) |

## [🔧 normalizeSeconds](../youtube-playback-plox.user.js#L6329)
> [Line 6329](../youtube-playback-plox.user.js#L6329)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeSeconds`](../youtube-playback-plox.user.js#L6348) | [6348](../youtube-playback-plox.user.js#L6348) |

## [🔧 setInnerHTML](../youtube-playback-plox.user.js#L6355)
> [Line 6355](../youtube-playback-plox.user.js#L6355)

_No relevant functions or constants detected._

## [🔧 Crear Elemento](../youtube-playback-plox.user.js#L6443)
> [Line 6443](../youtube-playback-plox.user.js#L6443)

| Type | Name | Line |
|---|---|---|
| `fn` | [`append`](../youtube-playback-plox.user.js#L6522) | [6522](../youtube-playback-plox.user.js#L6522) |
| `fn` | [`clamp`](../youtube-playback-plox.user.js#L6552) | [6552](../youtube-playback-plox.user.js#L6552) |

## [🔧 UI Helpers](../youtube-playback-plox.user.js#L6579)
> [Line 6579](../youtube-playback-plox.user.js#L6579)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L6622) | [6622](../youtube-playback-plox.user.js#L6622) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L6626) | [6626](../youtube-playback-plox.user.js#L6626) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L6635) | [6635](../youtube-playback-plox.user.js#L6635) |

## [🔧 Debounce](../youtube-playback-plox.user.js#L6669)
> [Line 6669](../youtube-playback-plox.user.js#L6669)

| Type | Name | Line |
|---|---|---|
| `fn` | [`debounce`](../youtube-playback-plox.user.js#L6679) | [6679](../youtube-playback-plox.user.js#L6679) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L6695)
> [Line 6695](../youtube-playback-plox.user.js#L6695)

_No relevant functions or constants detected._

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L7007)
> [Line 7007](../youtube-playback-plox.user.js#L7007)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L7014) | [7014](../youtube-playback-plox.user.js#L7014) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L7017) | [7017](../youtube-playback-plox.user.js#L7017) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L7045) | [7045](../youtube-playback-plox.user.js#L7045) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L7088) | [7088](../youtube-playback-plox.user.js#L7088) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L7162)
> [Line 7162](../youtube-playback-plox.user.js#L7162)

| Type | Name | Line |
|---|---|---|
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L7168) | [7168](../youtube-playback-plox.user.js#L7168) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7198) | [7198](../youtube-playback-plox.user.js#L7198) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L7260) | [7260](../youtube-playback-plox.user.js#L7260) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L7391) | [7391](../youtube-playback-plox.user.js#L7391) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7403) | [7403](../youtube-playback-plox.user.js#L7403) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L7468) | [7468](../youtube-playback-plox.user.js#L7468) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L7498) | [7498](../youtube-playback-plox.user.js#L7498) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L7527)
> [Line 7527](../youtube-playback-plox.user.js#L7527)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L7528) | [7528](../youtube-playback-plox.user.js#L7528) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L7574) | [7574](../youtube-playback-plox.user.js#L7574) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L7729)
> [Line 7729](../youtube-playback-plox.user.js#L7729)

_No relevant functions or constants detected._

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L7811)
> [Line 7811](../youtube-playback-plox.user.js#L7811)

_No relevant functions or constants detected._

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L7902)
> [Line 7902](../youtube-playback-plox.user.js#L7902)

_No relevant functions or constants detected._

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L7959)
> [Line 7959](../youtube-playback-plox.user.js#L7959)

| Type | Name | Line |
|---|---|---|
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L7978) | [7978](../youtube-playback-plox.user.js#L7978) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L7990)
> [Line 7990](../youtube-playback-plox.user.js#L7990)

_No relevant functions or constants detected._

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L8037)
> [Line 8037](../youtube-playback-plox.user.js#L8037)

_No relevant functions or constants detected._

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L8095)
> [Line 8095](../youtube-playback-plox.user.js#L8095)

| Type | Name | Line |
|---|---|---|
| `fn` | [`base`](../youtube-playback-plox.user.js#L8104) | [8104](../youtube-playback-plox.user.js#L8104) |

## [💾 Internal Save Regular Video](../youtube-playback-plox.user.js#L8138)
> [Line 8138](../youtube-playback-plox.user.js#L8138)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8156) | [8156](../youtube-playback-plox.user.js#L8156) |

## [💾 Save Regular Video](../youtube-playback-plox.user.js#L8259)
> [Line 8259](../youtube-playback-plox.user.js#L8259)

_No relevant functions or constants detected._

## [💾 Save Miniplayer](../youtube-playback-plox.user.js#L8270)
> [Line 8270](../youtube-playback-plox.user.js#L8270)

_No relevant functions or constants detected._

## [💾 Save Shorts](../youtube-playback-plox.user.js#L8281)
> [Line 8281](../youtube-playback-plox.user.js#L8281)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8300) | [8300](../youtube-playback-plox.user.js#L8300) |

## [💾 Save Preview](../youtube-playback-plox.user.js#L8397)
> [Line 8397](../youtube-playback-plox.user.js#L8397)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8417) | [8417](../youtube-playback-plox.user.js#L8417) |
| `fn` | [`resolvedVideoType`](../youtube-playback-plox.user.js#L8429) | [8429](../youtube-playback-plox.user.js#L8429) |
| `module` | [`resolvedVideoType`](../youtube-playback-plox.user.js#L8429) | [8429](../youtube-playback-plox.user.js#L8429) |

## [💾 Save Livestream](../youtube-playback-plox.user.js#L8485)
> [Line 8485](../youtube-playback-plox.user.js#L8485)

_No relevant functions or constants detected._

## [📺 Helpers](../youtube-playback-plox.user.js#L8540)
> [Line 8540](../youtube-playback-plox.user.js#L8540)

_No relevant functions or constants detected._

## [📺 Obtiene datos guardados de un video](../youtube-playback-plox.user.js#L8543)
> [Line 8543](../youtube-playback-plox.user.js#L8543)

| Type | Name | Line |
|---|---|---|
| `fn` | [`keys`](../youtube-playback-plox.user.js#L8569) | [8569](../youtube-playback-plox.user.js#L8569) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L8593)
> [Line 8593](../youtube-playback-plox.user.js#L8593)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L8602) | [8602](../youtube-playback-plox.user.js#L8602) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L8652)
> [Line 8652](../youtube-playback-plox.user.js#L8652)

_No relevant functions or constants detected._

## [📺 YouTube Resource URL Parser](../youtube-playback-plox.user.js#L8814)
> [Line 8814](../youtube-playback-plox.user.js#L8814)

| Type | Name | Line |
|---|---|---|
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L8905) | [8905](../youtube-playback-plox.user.js#L8905) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L9025)
> [Line 9025](../youtube-playback-plox.user.js#L9025)

_No relevant functions or constants detected._

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L9038)
> [Line 9038](../youtube-playback-plox.user.js#L9038)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L9053)
> [Line 9053](../youtube-playback-plox.user.js#L9053)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist URL Type](../youtube-playback-plox.user.js#L9066)
> [Line 9066](../youtube-playback-plox.user.js#L9066)

_No relevant functions or constants detected._

## [📺 Get Playlist Name](../youtube-playback-plox.user.js#L9081)
> [Line 9081](../youtube-playback-plox.user.js#L9081)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L9092) | [9092](../youtube-playback-plox.user.js#L9092) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L9125) | [9125](../youtube-playback-plox.user.js#L9125) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L9237)
> [Line 9237](../youtube-playback-plox.user.js#L9237)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L9263) | [9263](../youtube-playback-plox.user.js#L9263) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L9273)
> [Line 9273](../youtube-playback-plox.user.js#L9273)

| Type | Name | Line |
|---|---|---|
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9493) | [9493](../youtube-playback-plox.user.js#L9493) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9493) | [9493](../youtube-playback-plox.user.js#L9493) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L9507) | [9507](../youtube-playback-plox.user.js#L9507) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L9515) | [9515](../youtube-playback-plox.user.js#L9515) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L9523) | [9523](../youtube-playback-plox.user.js#L9523) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L9531) | [9531](../youtube-playback-plox.user.js#L9531) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L9554) | [9554](../youtube-playback-plox.user.js#L9554) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L9566) | [9566](../youtube-playback-plox.user.js#L9566) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L9569) | [9569](../youtube-playback-plox.user.js#L9569) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L9579) | [9579](../youtube-playback-plox.user.js#L9579) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L9584) | [9584](../youtube-playback-plox.user.js#L9584) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L9607) | [9607](../youtube-playback-plox.user.js#L9607) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L9626) | [9626](../youtube-playback-plox.user.js#L9626) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L9634) | [9634](../youtube-playback-plox.user.js#L9634) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L9678) | [9678](../youtube-playback-plox.user.js#L9678) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L9733) | [9733](../youtube-playback-plox.user.js#L9733) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L9792) | [9792](../youtube-playback-plox.user.js#L9792) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L9886) | [9886](../youtube-playback-plox.user.js#L9886) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L9899) | [9899](../youtube-playback-plox.user.js#L9899) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L9903) | [9903](../youtube-playback-plox.user.js#L9903) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L9910) | [9910](../youtube-playback-plox.user.js#L9910) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L9928) | [9928](../youtube-playback-plox.user.js#L9928) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L10025)
> [Line 10025](../youtube-playback-plox.user.js#L10025)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L10061) | [10061](../youtube-playback-plox.user.js#L10061) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L10181)
> [Line 10181](../youtube-playback-plox.user.js#L10181)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L10184) | [10184](../youtube-playback-plox.user.js#L10184) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L10222) | [10222](../youtube-playback-plox.user.js#L10222) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L10239) | [10239](../youtube-playback-plox.user.js#L10239) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L10251) | [10251](../youtube-playback-plox.user.js#L10251) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L10285) | [10285](../youtube-playback-plox.user.js#L10285) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L10335) | [10335](../youtube-playback-plox.user.js#L10335) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L10339) | [10339](../youtube-playback-plox.user.js#L10339) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L10475)
> [Line 10475](../youtube-playback-plox.user.js#L10475)

| Type | Name | Line |
|---|---|---|
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L10493) | [10493](../youtube-playback-plox.user.js#L10493) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L10569) | [10569](../youtube-playback-plox.user.js#L10569) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10627) | [10627](../youtube-playback-plox.user.js#L10627) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10628) | [10628](../youtube-playback-plox.user.js#L10628) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10714) | [10714](../youtube-playback-plox.user.js#L10714) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10715) | [10715](../youtube-playback-plox.user.js#L10715) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L10837)
> [Line 10837](../youtube-playback-plox.user.js#L10837)

_No relevant functions or constants detected._

## [🎵 Selección de Videos](../youtube-playback-plox.user.js#L10917)
> [Line 10917](../youtube-playback-plox.user.js#L10917)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11005) | [11005](../youtube-playback-plox.user.js#L11005) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11012) | [11012](../youtube-playback-plox.user.js#L11012) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L11284) | [11284](../youtube-playback-plox.user.js#L11284) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L11458) | [11458](../youtube-playback-plox.user.js#L11458) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L11545)
> [Line 11545](../youtube-playback-plox.user.js#L11545)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11551) | [11551](../youtube-playback-plox.user.js#L11551) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11551) | [11551](../youtube-playback-plox.user.js#L11551) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L11552) | [11552](../youtube-playback-plox.user.js#L11552) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L11561) | [11561](../youtube-playback-plox.user.js#L11561) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L11566) | [11566](../youtube-playback-plox.user.js#L11566) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L11575) | [11575](../youtube-playback-plox.user.js#L11575) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L11592) | [11592](../youtube-playback-plox.user.js#L11592) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L11625) | [11625](../youtube-playback-plox.user.js#L11625) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L11641) | [11641](../youtube-playback-plox.user.js#L11641) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L11643) | [11643](../youtube-playback-plox.user.js#L11643) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11657) | [11657](../youtube-playback-plox.user.js#L11657) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11657) | [11657](../youtube-playback-plox.user.js#L11657) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L11659) | [11659](../youtube-playback-plox.user.js#L11659) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L11682) | [11682](../youtube-playback-plox.user.js#L11682) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L11682) | [11682](../youtube-playback-plox.user.js#L11682) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L11693) | [11693](../youtube-playback-plox.user.js#L11693) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L11698) | [11698](../youtube-playback-plox.user.js#L11698) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L11703) | [11703](../youtube-playback-plox.user.js#L11703) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L11715) | [11715](../youtube-playback-plox.user.js#L11715) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L11732) | [11732](../youtube-playback-plox.user.js#L11732) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L11732) | [11732](../youtube-playback-plox.user.js#L11732) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L11734) | [11734](../youtube-playback-plox.user.js#L11734) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L11742) | [11742](../youtube-playback-plox.user.js#L11742) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L11786)
> [Line 11786](../youtube-playback-plox.user.js#L11786)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L11791) | [11791](../youtube-playback-plox.user.js#L11791) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L11791) | [11791](../youtube-playback-plox.user.js#L11791) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L11806) | [11806](../youtube-playback-plox.user.js#L11806) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L11841) | [11841](../youtube-playback-plox.user.js#L11841) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L11874) | [11874](../youtube-playback-plox.user.js#L11874) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L11875) | [11875](../youtube-playback-plox.user.js#L11875) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L11906) | [11906](../youtube-playback-plox.user.js#L11906) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L11962) | [11962](../youtube-playback-plox.user.js#L11962) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L12020) | [12020](../youtube-playback-plox.user.js#L12020) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12028) | [12028](../youtube-playback-plox.user.js#L12028) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L12035) | [12035](../youtube-playback-plox.user.js#L12035) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L12070) | [12070](../youtube-playback-plox.user.js#L12070) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L12107) | [12107](../youtube-playback-plox.user.js#L12107) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L12118) | [12118](../youtube-playback-plox.user.js#L12118) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L12133) | [12133](../youtube-playback-plox.user.js#L12133) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12600) | [12600](../youtube-playback-plox.user.js#L12600) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L12643) | [12643](../youtube-playback-plox.user.js#L12643) |

## [Processing Functions](../youtube-playback-plox.user.js#L12663)
> [Line 12663](../youtube-playback-plox.user.js#L12663)

| Type | Name | Line |
|---|---|---|
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12678) | [12678](../youtube-playback-plox.user.js#L12678) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12678) | [12678](../youtube-playback-plox.user.js#L12678) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L12692) | [12692](../youtube-playback-plox.user.js#L12692) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L12697) | [12697](../youtube-playback-plox.user.js#L12697) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L12704) | [12704](../youtube-playback-plox.user.js#L12704) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L12710) | [12710](../youtube-playback-plox.user.js#L12710) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L12728) | [12728](../youtube-playback-plox.user.js#L12728) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L12790) | [12790](../youtube-playback-plox.user.js#L12790) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L12810) | [12810](../youtube-playback-plox.user.js#L12810) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L12843) | [12843](../youtube-playback-plox.user.js#L12843) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L12873) | [12873](../youtube-playback-plox.user.js#L12873) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L12884) | [12884](../youtube-playback-plox.user.js#L12884) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L12896) | [12896](../youtube-playback-plox.user.js#L12896) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L12936) | [12936](../youtube-playback-plox.user.js#L12936) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L12981) | [12981](../youtube-playback-plox.user.js#L12981) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L13122) | [13122](../youtube-playback-plox.user.js#L13122) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L13258) | [13258](../youtube-playback-plox.user.js#L13258) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L13330) | [13330](../youtube-playback-plox.user.js#L13330) |

## [PlaybackController](../youtube-playback-plox.user.js#L13543)
> [Line 13543](../youtube-playback-plox.user.js#L13543)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L13587) | [13587](../youtube-playback-plox.user.js#L13587) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L13603) | [13603](../youtube-playback-plox.user.js#L13603) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L13805) | [13805](../youtube-playback-plox.user.js#L13805) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L13937)
> [Line 13937](../youtube-playback-plox.user.js#L13937)

| Type | Name | Line |
|---|---|---|
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L13993) | [13993](../youtube-playback-plox.user.js#L13993) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L14410)
> [Line 14410](../youtube-playback-plox.user.js#L14410)

| Type | Name | Line |
|---|---|---|
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L14433) | [14433](../youtube-playback-plox.user.js#L14433) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L14509) | [14509](../youtube-playback-plox.user.js#L14509) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L14518) | [14518](../youtube-playback-plox.user.js#L14518) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L14526) | [14526](../youtube-playback-plox.user.js#L14526) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14546) | [14546](../youtube-playback-plox.user.js#L14546) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L14598)
> [Line 14598](../youtube-playback-plox.user.js#L14598)

| Type | Name | Line |
|---|---|---|
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14610) | [14610](../youtube-playback-plox.user.js#L14610) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L14656) | [14656](../youtube-playback-plox.user.js#L14656) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L14662) | [14662](../youtube-playback-plox.user.js#L14662) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L14670) | [14670](../youtube-playback-plox.user.js#L14670) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14685) | [14685](../youtube-playback-plox.user.js#L14685) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L14805) | [14805](../youtube-playback-plox.user.js#L14805) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L14883)
> [Line 14883](../youtube-playback-plox.user.js#L14883)

_No relevant functions or constants detected._

## [📁 Update Video List](../youtube-playback-plox.user.js#L14962)
> [Line 14962](../youtube-playback-plox.user.js#L14962)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSortValue`](../youtube-playback-plox.user.js#L15142) | [15142](../youtube-playback-plox.user.js#L15142) |
| `fn` | [`t`](../youtube-playback-plox.user.js#L15145) | [15145](../youtube-playback-plox.user.js#L15145) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15159) | [15159](../youtube-playback-plox.user.js#L15159) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15163) | [15163](../youtube-playback-plox.user.js#L15163) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L15188) | [15188](../youtube-playback-plox.user.js#L15188) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L15421) | [15421](../youtube-playback-plox.user.js#L15421) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L15442) | [15442](../youtube-playback-plox.user.js#L15442) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L15493) | [15493](../youtube-playback-plox.user.js#L15493) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L15613)
> [Line 15613](../youtube-playback-plox.user.js#L15613)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L15616) | [15616](../youtube-playback-plox.user.js#L15616) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L15630) | [15630](../youtube-playback-plox.user.js#L15630) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L15644)
> [Line 15644](../youtube-playback-plox.user.js#L15644)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L15762) | [15762](../youtube-playback-plox.user.js#L15762) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L15772) | [15772](../youtube-playback-plox.user.js#L15772) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L15843) | [15843](../youtube-playback-plox.user.js#L15843) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L15856)
> [Line 15856](../youtube-playback-plox.user.js#L15856)

| Type | Name | Line |
|---|---|---|
| `fn` | [`deleteFromStorage`](../youtube-playback-plox.user.js#L15983) | [15983](../youtube-playback-plox.user.js#L15983) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L15988) | [15988](../youtube-playback-plox.user.js#L15988) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L16010) | [16010](../youtube-playback-plox.user.js#L16010) |
| `fn` | [`cleanTitleForSpotify`](../youtube-playback-plox.user.js#L16362) | [16362](../youtube-playback-plox.user.js#L16362) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L16462)
> [Line 16462](../youtube-playback-plox.user.js#L16462)

_No relevant functions or constants detected._

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L16534)
> [Line 16534](../youtube-playback-plox.user.js#L16534)

_No relevant functions or constants detected._

## [🔄 Migración de Datos](../youtube-playback-plox.user.js#L16572)
> [Line 16572](../youtube-playback-plox.user.js#L16572)

| Type | Name | Line |
|---|---|---|
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L16629) | [16629](../youtube-playback-plox.user.js#L16629) |

## [🚀 Init](../youtube-playback-plox.user.js#L16821)
> [Line 16821](../youtube-playback-plox.user.js#L16821)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L16829) | [16829](../youtube-playback-plox.user.js#L16829) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L16851) | [16851](../youtube-playback-plox.user.js#L16851) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L17138) | [17138](../youtube-playback-plox.user.js#L17138) |

