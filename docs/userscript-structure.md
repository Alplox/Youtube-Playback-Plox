# Userscript Structure
> Auto-generated on 2026-05-08 · version 0.0.9-16
> **DO NOT EDIT MANUALLY** - regenerate with `node ./scripts/generate-structure.mjs`

---

## Sections index

1. [🔍 Logger System](#logger-system) - [line 139](../youtube-playback-plox.user.js#L139)
2. [🛡️ Initialization Guard (SPA Safety)](#initialization-guard-spa-safety) - [line 228](../youtube-playback-plox.user.js#L228)
3. [🌐 Translation Loading](#translation-loading) - [line 298](../youtube-playback-plox.user.js#L298)
4. [📊 Global variables](#global-variables) - [line 1100](../youtube-playback-plox.user.js#L1100)
5. [📦 Config](#config) - [line 1109](../youtube-playback-plox.user.js#L1109)
6. [Selectors](#selectors) - [line 1186](../youtube-playback-plox.user.js#L1186)
7. [⚙️ DOM Cache System](#dom-cache-system) - [line 1359](../youtube-playback-plox.user.js#L1359)
8. [🌐 Translation Functions](#translation-functions) - [line 1701](../youtube-playback-plox.user.js#L1701)
9. [🎨 Styles](#styles) - [line 1843](../youtube-playback-plox.user.js#L1843)
10. [🎨 Theme](#theme) - [line 4728](../youtube-playback-plox.user.js#L4728)
11. [🎨 SVG Icons](#svg-icons) - [line 4833](../youtube-playback-plox.user.js#L4833)
12. [🎨 Estilo barra progreso](#estilo-barra-progreso) - [line 4983](../youtube-playback-plox.user.js#L4983)
13. [💾 Storage + Settings](#storage-settings) - [line 5297](../youtube-playback-plox.user.js#L5297)
14. [📢 Ad Selectors](#ad-selectors) - [line 5853](../youtube-playback-plox.user.js#L5853)
15. [📢 Ad Detector](#ad-detector) - [line 5964](../youtube-playback-plox.user.js#L5964)
16. [🔧 Utils](#utils) - [line 6150](../youtube-playback-plox.user.js#L6150)
17. [🔧 Escape HTML](#escape-html) - [line 6153](../youtube-playback-plox.user.js#L6153)
18. [🔧 Is Visibly Displayed](#is-visibly-displayed) - [line 6176](../youtube-playback-plox.user.js#L6176)
19. [🔧 Format Time](#format-time) - [line 6200](../youtube-playback-plox.user.js#L6200)
20. [🔧 parseTimeToSeconds](#parsetimetoseconds) - [line 6295](../youtube-playback-plox.user.js#L6295)
21. [🔧 normalizeSeconds](#normalizeseconds) - [line 6343](../youtube-playback-plox.user.js#L6343)
22. [🔧 setInnerHTML](#setinnerhtml) - [line 6369](../youtube-playback-plox.user.js#L6369)
23. [🔧 Crear Elemento](#crear-elemento) - [line 6457](../youtube-playback-plox.user.js#L6457)
24. [🔧 UI Helpers](#ui-helpers) - [line 6593](../youtube-playback-plox.user.js#L6593)
25. [🔧 Debounce](#debounce) - [line 6683](../youtube-playback-plox.user.js#L6683)
26. [🎯 VirtualScroller](#virtualscroller) - [line 6709](../youtube-playback-plox.user.js#L6709)
27. [📤 Import/Export JSON](#importexport-json) - [line 7021](../youtube-playback-plox.user.js#L7021)
28. [☁️ GitHub Backup](#github-backup) - [line 7176](../youtube-playback-plox.user.js#L7176)
29. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 7541](../youtube-playback-plox.user.js#L7541)
30. [🔄 Normalize Video Data](#normalize-video-data) - [line 7743](../youtube-playback-plox.user.js#L7743)
31. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 7825](../youtube-playback-plox.user.js#L7825)
32. [Parse FreeTube DB](#parse-freetube-db) - [line 7916](../youtube-playback-plox.user.js#L7916)
33. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 7973](../youtube-playback-plox.user.js#L7973)
34. [⬆ Export To FreeTube](#export-to-freetube) - [line 8004](../youtube-playback-plox.user.js#L8004)
35. [⬇ Import From FreeTube](#import-from-freetube) - [line 8051](../youtube-playback-plox.user.js#L8051)
36. [🔄 Insert Completion Event](#insert-completion-event) - [line 8109](../youtube-playback-plox.user.js#L8109)
37. [💾 Internal Save Regular Video](#internal-save-regular-video) - [line 8152](../youtube-playback-plox.user.js#L8152)
38. [💾 Save Regular Video](#save-regular-video) - [line 8273](../youtube-playback-plox.user.js#L8273)
39. [💾 Save Miniplayer](#save-miniplayer) - [line 8284](../youtube-playback-plox.user.js#L8284)
40. [💾 Save Shorts](#save-shorts) - [line 8295](../youtube-playback-plox.user.js#L8295)
41. [💾 Save Preview](#save-preview) - [line 8411](../youtube-playback-plox.user.js#L8411)
42. [💾 Save Livestream](#save-livestream) - [line 8499](../youtube-playback-plox.user.js#L8499)
43. [📺 Helpers](#helpers) - [line 8554](../youtube-playback-plox.user.js#L8554)
44. [📺 Obtiene datos guardados de un video](#obtiene-datos-guardados-de-un-video) - [line 8557](../youtube-playback-plox.user.js#L8557)
45. [📺 Get Player Video ID](#get-player-video-id) - [line 8607](../youtube-playback-plox.user.js#L8607)
46. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 8666](../youtube-playback-plox.user.js#L8666)
47. [📺 YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 8828](../youtube-playback-plox.user.js#L8828)
48. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 9039](../youtube-playback-plox.user.js#L9039)
49. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 9052](../youtube-playback-plox.user.js#L9052)
50. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 9067](../youtube-playback-plox.user.js#L9067)
51. [📺 Get YouTube Playlist URL Type](#get-youtube-playlist-url-type) - [line 9080](../youtube-playback-plox.user.js#L9080)
52. [📺 Get Playlist Name](#get-playlist-name) - [line 9095](../youtube-playback-plox.user.js#L9095)
53. [🕒 Time Display](#time-display) - [line 9251](../youtube-playback-plox.user.js#L9251)
54. [🖼️ Display Button Helpers](#display-button-helpers) - [line 9287](../youtube-playback-plox.user.js#L9287)
55. [🍞 Toasts](#toasts) - [line 10039](../youtube-playback-plox.user.js#L10039)
56. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 10195](../youtube-playback-plox.user.js#L10195)
57. [⚙️ Settings UI](#settings-ui) - [line 10489](../youtube-playback-plox.user.js#L10489)
58. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 10851](../youtube-playback-plox.user.js#L10851)
59. [🎵 Selección de Videos](#seleccin-de-videos) - [line 10931](../youtube-playback-plox.user.js#L10931)
60. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 11559](../youtube-playback-plox.user.js#L11559)
61. [📡 Video Observer Manager](#video-observer-manager) - [line 11800](../youtube-playback-plox.user.js#L11800)
62. [Processing Functions](#processing-functions) - [line 12677](../youtube-playback-plox.user.js#L12677)
63. [PlaybackController](#playbackcontroller) - [line 13557](../youtube-playback-plox.user.js#L13557)
64. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 13951](../youtube-playback-plox.user.js#L13951)
65. [📂 Sort UI](#sort-ui) - [line 14424](../youtube-playback-plox.user.js#L14424)
66. [📂 Filters UI](#filters-ui) - [line 14612](../youtube-playback-plox.user.js#L14612)
67. [📂 Video List UI](#video-list-ui) - [line 14897](../youtube-playback-plox.user.js#L14897)
68. [📁 Update Video List](#update-video-list) - [line 14976](../youtube-playback-plox.user.js#L14976)
69. [🔘 Floating Button](#floating-button) - [line 15627](../youtube-playback-plox.user.js#L15627)
70. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 15658](../youtube-playback-plox.user.js#L15658)
71. [📂 Video Entry](#video-entry) - [line 15870](../youtube-playback-plox.user.js#L15870)
72. [🗑️ Clear All Data](#clear-all-data) - [line 16476](../youtube-playback-plox.user.js#L16476)
73. [⚙️ Menu Commands](#menu-commands) - [line 16548](../youtube-playback-plox.user.js#L16548)
74. [🔄 Migración de Datos](#migracin-de-datos) - [line 16586](../youtube-playback-plox.user.js#L16586)
75. [🚀 Init](#init) - [line 16835](../youtube-playback-plox.user.js#L16835)

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

## [📊 Global variables](../youtube-playback-plox.user.js#L1100)
> [Line 1100](../youtube-playback-plox.user.js#L1100)

_No relevant functions or constants detected._

## [📦 Config](../youtube-playback-plox.user.js#L1109)
> [Line 1109](../youtube-playback-plox.user.js#L1109)

_No relevant functions or constants detected._

## [Selectors](../youtube-playback-plox.user.js#L1186)
> [Line 1186](../youtube-playback-plox.user.js#L1186)

_No relevant functions or constants detected._

## [⚙️ DOM Cache System](../youtube-playback-plox.user.js#L1359)
> [Line 1359](../youtube-playback-plox.user.js#L1359)

| Type | Name | Line |
|---|---|---|
| `fn` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1373) | [1373](../youtube-playback-plox.user.js#L1373) |
| `module` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1373) | [1373](../youtube-playback-plox.user.js#L1373) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L1399) | [1399](../youtube-playback-plox.user.js#L1399) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L1416) | [1416](../youtube-playback-plox.user.js#L1416) |

## [🌐 Translation Functions](../youtube-playback-plox.user.js#L1701)
> [Line 1701](../youtube-playback-plox.user.js#L1701)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normParams`](../youtube-playback-plox.user.js#L1725) | [1725](../youtube-playback-plox.user.js#L1725) |
| `fn` | [`candidates`](../youtube-playback-plox.user.js#L1817) | [1817](../youtube-playback-plox.user.js#L1817) |
| `fn` | [`prefix`](../youtube-playback-plox.user.js#L1830) | [1830](../youtube-playback-plox.user.js#L1830) |

## [🎨 Styles](../youtube-playback-plox.user.js#L1843)
> [Line 1843](../youtube-playback-plox.user.js#L1843)

_No relevant functions or constants detected._

## [🎨 Theme](../youtube-playback-plox.user.js#L4728)
> [Line 4728](../youtube-playback-plox.user.js#L4728)

_No relevant functions or constants detected._

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L4833)
> [Line 4833](../youtube-playback-plox.user.js#L4833)

_No relevant functions or constants detected._

## [🎨 Estilo barra progreso](../youtube-playback-plox.user.js#L4983)
> [Line 4983](../youtube-playback-plox.user.js#L4983)

| Type | Name | Line |
|---|---|---|
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L5274) | [5274](../youtube-playback-plox.user.js#L5274) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L5297)
> [Line 5297](../youtube-playback-plox.user.js#L5297)

| Type | Name | Line |
|---|---|---|
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L5307) | [5307](../youtube-playback-plox.user.js#L5307) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L5307) | [5307](../youtube-playback-plox.user.js#L5307) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5449) | [5449](../youtube-playback-plox.user.js#L5449) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5449) | [5449](../youtube-playback-plox.user.js#L5449) |
| `fn` | [`isSupported`](../youtube-playback-plox.user.js#L5453) | [5453](../youtube-playback-plox.user.js#L5453) |
| `module` | [`isSupported`](../youtube-playback-plox.user.js#L5453) | [5453](../youtube-playback-plox.user.js#L5453) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L5608) | [5608](../youtube-playback-plox.user.js#L5608) |

## [📢 Ad Selectors](../youtube-playback-plox.user.js#L5853)
> [Line 5853](../youtube-playback-plox.user.js#L5853)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdSelectors`](../youtube-playback-plox.user.js#L5855) | [5855](../youtube-playback-plox.user.js#L5855) |
| `module` | [`AdSelectorText`](../youtube-playback-plox.user.js#L5936) | [5936](../youtube-playback-plox.user.js#L5936) |
| `fn` | [`_adDetectorTick`](../youtube-playback-plox.user.js#L5949) | [5949](../youtube-playback-plox.user.js#L5949) |

## [📢 Ad Detector](../youtube-playback-plox.user.js#L5964)
> [Line 5964](../youtube-playback-plox.user.js#L5964)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L5969) | [5969](../youtube-playback-plox.user.js#L5969) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L6018) | [6018](../youtube-playback-plox.user.js#L6018) |

## [🔧 Utils](../youtube-playback-plox.user.js#L6150)
> [Line 6150](../youtube-playback-plox.user.js#L6150)

_No relevant functions or constants detected._

## [🔧 Escape HTML](../youtube-playback-plox.user.js#L6153)
> [Line 6153](../youtube-playback-plox.user.js#L6153)

| Type | Name | Line |
|---|---|---|
| `fn` | [`escapeHTML`](../youtube-playback-plox.user.js#L6164) | [6164](../youtube-playback-plox.user.js#L6164) |

## [🔧 Is Visibly Displayed](../youtube-playback-plox.user.js#L6176)
> [Line 6176](../youtube-playback-plox.user.js#L6176)

_No relevant functions or constants detected._

## [🔧 Format Time](../youtube-playback-plox.user.js#L6200)
> [Line 6200](../youtube-playback-plox.user.js#L6200)

| Type | Name | Line |
|---|---|---|
| `fn` | [`formatTime`](../youtube-playback-plox.user.js#L6223) | [6223](../youtube-playback-plox.user.js#L6223) |

## [🔧 parseTimeToSeconds](../youtube-playback-plox.user.js#L6295)
> [Line 6295](../youtube-playback-plox.user.js#L6295)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseTimeToSeconds`](../youtube-playback-plox.user.js#L6318) | [6318](../youtube-playback-plox.user.js#L6318) |

## [🔧 normalizeSeconds](../youtube-playback-plox.user.js#L6343)
> [Line 6343](../youtube-playback-plox.user.js#L6343)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeSeconds`](../youtube-playback-plox.user.js#L6362) | [6362](../youtube-playback-plox.user.js#L6362) |

## [🔧 setInnerHTML](../youtube-playback-plox.user.js#L6369)
> [Line 6369](../youtube-playback-plox.user.js#L6369)

_No relevant functions or constants detected._

## [🔧 Crear Elemento](../youtube-playback-plox.user.js#L6457)
> [Line 6457](../youtube-playback-plox.user.js#L6457)

| Type | Name | Line |
|---|---|---|
| `fn` | [`append`](../youtube-playback-plox.user.js#L6536) | [6536](../youtube-playback-plox.user.js#L6536) |
| `fn` | [`clamp`](../youtube-playback-plox.user.js#L6566) | [6566](../youtube-playback-plox.user.js#L6566) |

## [🔧 UI Helpers](../youtube-playback-plox.user.js#L6593)
> [Line 6593](../youtube-playback-plox.user.js#L6593)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L6636) | [6636](../youtube-playback-plox.user.js#L6636) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L6640) | [6640](../youtube-playback-plox.user.js#L6640) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L6649) | [6649](../youtube-playback-plox.user.js#L6649) |

## [🔧 Debounce](../youtube-playback-plox.user.js#L6683)
> [Line 6683](../youtube-playback-plox.user.js#L6683)

| Type | Name | Line |
|---|---|---|
| `fn` | [`debounce`](../youtube-playback-plox.user.js#L6693) | [6693](../youtube-playback-plox.user.js#L6693) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L6709)
> [Line 6709](../youtube-playback-plox.user.js#L6709)

_No relevant functions or constants detected._

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L7021)
> [Line 7021](../youtube-playback-plox.user.js#L7021)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L7028) | [7028](../youtube-playback-plox.user.js#L7028) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L7031) | [7031](../youtube-playback-plox.user.js#L7031) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L7059) | [7059](../youtube-playback-plox.user.js#L7059) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L7102) | [7102](../youtube-playback-plox.user.js#L7102) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L7176)
> [Line 7176](../youtube-playback-plox.user.js#L7176)

| Type | Name | Line |
|---|---|---|
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L7182) | [7182](../youtube-playback-plox.user.js#L7182) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7212) | [7212](../youtube-playback-plox.user.js#L7212) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L7274) | [7274](../youtube-playback-plox.user.js#L7274) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L7405) | [7405](../youtube-playback-plox.user.js#L7405) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7417) | [7417](../youtube-playback-plox.user.js#L7417) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L7482) | [7482](../youtube-playback-plox.user.js#L7482) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L7512) | [7512](../youtube-playback-plox.user.js#L7512) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L7541)
> [Line 7541](../youtube-playback-plox.user.js#L7541)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L7542) | [7542](../youtube-playback-plox.user.js#L7542) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L7588) | [7588](../youtube-playback-plox.user.js#L7588) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L7743)
> [Line 7743](../youtube-playback-plox.user.js#L7743)

_No relevant functions or constants detected._

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L7825)
> [Line 7825](../youtube-playback-plox.user.js#L7825)

_No relevant functions or constants detected._

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L7916)
> [Line 7916](../youtube-playback-plox.user.js#L7916)

_No relevant functions or constants detected._

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L7973)
> [Line 7973](../youtube-playback-plox.user.js#L7973)

| Type | Name | Line |
|---|---|---|
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L7992) | [7992](../youtube-playback-plox.user.js#L7992) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L8004)
> [Line 8004](../youtube-playback-plox.user.js#L8004)

_No relevant functions or constants detected._

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L8051)
> [Line 8051](../youtube-playback-plox.user.js#L8051)

_No relevant functions or constants detected._

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L8109)
> [Line 8109](../youtube-playback-plox.user.js#L8109)

| Type | Name | Line |
|---|---|---|
| `fn` | [`base`](../youtube-playback-plox.user.js#L8118) | [8118](../youtube-playback-plox.user.js#L8118) |

## [💾 Internal Save Regular Video](../youtube-playback-plox.user.js#L8152)
> [Line 8152](../youtube-playback-plox.user.js#L8152)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8170) | [8170](../youtube-playback-plox.user.js#L8170) |

## [💾 Save Regular Video](../youtube-playback-plox.user.js#L8273)
> [Line 8273](../youtube-playback-plox.user.js#L8273)

_No relevant functions or constants detected._

## [💾 Save Miniplayer](../youtube-playback-plox.user.js#L8284)
> [Line 8284](../youtube-playback-plox.user.js#L8284)

_No relevant functions or constants detected._

## [💾 Save Shorts](../youtube-playback-plox.user.js#L8295)
> [Line 8295](../youtube-playback-plox.user.js#L8295)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8314) | [8314](../youtube-playback-plox.user.js#L8314) |

## [💾 Save Preview](../youtube-playback-plox.user.js#L8411)
> [Line 8411](../youtube-playback-plox.user.js#L8411)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8431) | [8431](../youtube-playback-plox.user.js#L8431) |
| `fn` | [`resolvedVideoType`](../youtube-playback-plox.user.js#L8443) | [8443](../youtube-playback-plox.user.js#L8443) |
| `module` | [`resolvedVideoType`](../youtube-playback-plox.user.js#L8443) | [8443](../youtube-playback-plox.user.js#L8443) |

## [💾 Save Livestream](../youtube-playback-plox.user.js#L8499)
> [Line 8499](../youtube-playback-plox.user.js#L8499)

_No relevant functions or constants detected._

## [📺 Helpers](../youtube-playback-plox.user.js#L8554)
> [Line 8554](../youtube-playback-plox.user.js#L8554)

_No relevant functions or constants detected._

## [📺 Obtiene datos guardados de un video](../youtube-playback-plox.user.js#L8557)
> [Line 8557](../youtube-playback-plox.user.js#L8557)

| Type | Name | Line |
|---|---|---|
| `fn` | [`keys`](../youtube-playback-plox.user.js#L8583) | [8583](../youtube-playback-plox.user.js#L8583) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L8607)
> [Line 8607](../youtube-playback-plox.user.js#L8607)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L8616) | [8616](../youtube-playback-plox.user.js#L8616) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L8666)
> [Line 8666](../youtube-playback-plox.user.js#L8666)

_No relevant functions or constants detected._

## [📺 YouTube Resource URL Parser](../youtube-playback-plox.user.js#L8828)
> [Line 8828](../youtube-playback-plox.user.js#L8828)

| Type | Name | Line |
|---|---|---|
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L8919) | [8919](../youtube-playback-plox.user.js#L8919) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L9039)
> [Line 9039](../youtube-playback-plox.user.js#L9039)

_No relevant functions or constants detected._

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L9052)
> [Line 9052](../youtube-playback-plox.user.js#L9052)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L9067)
> [Line 9067](../youtube-playback-plox.user.js#L9067)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist URL Type](../youtube-playback-plox.user.js#L9080)
> [Line 9080](../youtube-playback-plox.user.js#L9080)

_No relevant functions or constants detected._

## [📺 Get Playlist Name](../youtube-playback-plox.user.js#L9095)
> [Line 9095](../youtube-playback-plox.user.js#L9095)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L9106) | [9106](../youtube-playback-plox.user.js#L9106) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L9139) | [9139](../youtube-playback-plox.user.js#L9139) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L9251)
> [Line 9251](../youtube-playback-plox.user.js#L9251)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L9277) | [9277](../youtube-playback-plox.user.js#L9277) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L9287)
> [Line 9287](../youtube-playback-plox.user.js#L9287)

| Type | Name | Line |
|---|---|---|
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9507) | [9507](../youtube-playback-plox.user.js#L9507) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9507) | [9507](../youtube-playback-plox.user.js#L9507) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L9521) | [9521](../youtube-playback-plox.user.js#L9521) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L9529) | [9529](../youtube-playback-plox.user.js#L9529) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L9537) | [9537](../youtube-playback-plox.user.js#L9537) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L9545) | [9545](../youtube-playback-plox.user.js#L9545) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L9568) | [9568](../youtube-playback-plox.user.js#L9568) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L9580) | [9580](../youtube-playback-plox.user.js#L9580) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L9583) | [9583](../youtube-playback-plox.user.js#L9583) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L9593) | [9593](../youtube-playback-plox.user.js#L9593) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L9598) | [9598](../youtube-playback-plox.user.js#L9598) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L9621) | [9621](../youtube-playback-plox.user.js#L9621) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L9640) | [9640](../youtube-playback-plox.user.js#L9640) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L9648) | [9648](../youtube-playback-plox.user.js#L9648) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L9692) | [9692](../youtube-playback-plox.user.js#L9692) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L9747) | [9747](../youtube-playback-plox.user.js#L9747) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L9806) | [9806](../youtube-playback-plox.user.js#L9806) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L9900) | [9900](../youtube-playback-plox.user.js#L9900) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L9913) | [9913](../youtube-playback-plox.user.js#L9913) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L9917) | [9917](../youtube-playback-plox.user.js#L9917) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L9924) | [9924](../youtube-playback-plox.user.js#L9924) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L9942) | [9942](../youtube-playback-plox.user.js#L9942) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L10039)
> [Line 10039](../youtube-playback-plox.user.js#L10039)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L10075) | [10075](../youtube-playback-plox.user.js#L10075) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L10195)
> [Line 10195](../youtube-playback-plox.user.js#L10195)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L10198) | [10198](../youtube-playback-plox.user.js#L10198) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L10236) | [10236](../youtube-playback-plox.user.js#L10236) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L10253) | [10253](../youtube-playback-plox.user.js#L10253) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L10265) | [10265](../youtube-playback-plox.user.js#L10265) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L10299) | [10299](../youtube-playback-plox.user.js#L10299) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L10349) | [10349](../youtube-playback-plox.user.js#L10349) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L10353) | [10353](../youtube-playback-plox.user.js#L10353) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L10489)
> [Line 10489](../youtube-playback-plox.user.js#L10489)

| Type | Name | Line |
|---|---|---|
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L10507) | [10507](../youtube-playback-plox.user.js#L10507) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L10583) | [10583](../youtube-playback-plox.user.js#L10583) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10641) | [10641](../youtube-playback-plox.user.js#L10641) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10642) | [10642](../youtube-playback-plox.user.js#L10642) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10728) | [10728](../youtube-playback-plox.user.js#L10728) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10729) | [10729](../youtube-playback-plox.user.js#L10729) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L10851)
> [Line 10851](../youtube-playback-plox.user.js#L10851)

_No relevant functions or constants detected._

## [🎵 Selección de Videos](../youtube-playback-plox.user.js#L10931)
> [Line 10931](../youtube-playback-plox.user.js#L10931)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11019) | [11019](../youtube-playback-plox.user.js#L11019) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11026) | [11026](../youtube-playback-plox.user.js#L11026) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L11298) | [11298](../youtube-playback-plox.user.js#L11298) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L11472) | [11472](../youtube-playback-plox.user.js#L11472) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L11559)
> [Line 11559](../youtube-playback-plox.user.js#L11559)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11565) | [11565](../youtube-playback-plox.user.js#L11565) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11565) | [11565](../youtube-playback-plox.user.js#L11565) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L11566) | [11566](../youtube-playback-plox.user.js#L11566) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L11575) | [11575](../youtube-playback-plox.user.js#L11575) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L11580) | [11580](../youtube-playback-plox.user.js#L11580) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L11589) | [11589](../youtube-playback-plox.user.js#L11589) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L11606) | [11606](../youtube-playback-plox.user.js#L11606) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L11639) | [11639](../youtube-playback-plox.user.js#L11639) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L11655) | [11655](../youtube-playback-plox.user.js#L11655) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L11657) | [11657](../youtube-playback-plox.user.js#L11657) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11671) | [11671](../youtube-playback-plox.user.js#L11671) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11671) | [11671](../youtube-playback-plox.user.js#L11671) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L11673) | [11673](../youtube-playback-plox.user.js#L11673) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L11696) | [11696](../youtube-playback-plox.user.js#L11696) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L11696) | [11696](../youtube-playback-plox.user.js#L11696) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L11707) | [11707](../youtube-playback-plox.user.js#L11707) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L11712) | [11712](../youtube-playback-plox.user.js#L11712) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L11717) | [11717](../youtube-playback-plox.user.js#L11717) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L11729) | [11729](../youtube-playback-plox.user.js#L11729) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L11746) | [11746](../youtube-playback-plox.user.js#L11746) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L11746) | [11746](../youtube-playback-plox.user.js#L11746) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L11748) | [11748](../youtube-playback-plox.user.js#L11748) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L11756) | [11756](../youtube-playback-plox.user.js#L11756) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L11800)
> [Line 11800](../youtube-playback-plox.user.js#L11800)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L11805) | [11805](../youtube-playback-plox.user.js#L11805) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L11805) | [11805](../youtube-playback-plox.user.js#L11805) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L11820) | [11820](../youtube-playback-plox.user.js#L11820) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L11855) | [11855](../youtube-playback-plox.user.js#L11855) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L11888) | [11888](../youtube-playback-plox.user.js#L11888) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L11889) | [11889](../youtube-playback-plox.user.js#L11889) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L11920) | [11920](../youtube-playback-plox.user.js#L11920) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L11976) | [11976](../youtube-playback-plox.user.js#L11976) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L12034) | [12034](../youtube-playback-plox.user.js#L12034) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12042) | [12042](../youtube-playback-plox.user.js#L12042) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L12049) | [12049](../youtube-playback-plox.user.js#L12049) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L12084) | [12084](../youtube-playback-plox.user.js#L12084) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L12121) | [12121](../youtube-playback-plox.user.js#L12121) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L12132) | [12132](../youtube-playback-plox.user.js#L12132) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L12147) | [12147](../youtube-playback-plox.user.js#L12147) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12614) | [12614](../youtube-playback-plox.user.js#L12614) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L12657) | [12657](../youtube-playback-plox.user.js#L12657) |

## [Processing Functions](../youtube-playback-plox.user.js#L12677)
> [Line 12677](../youtube-playback-plox.user.js#L12677)

| Type | Name | Line |
|---|---|---|
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12692) | [12692](../youtube-playback-plox.user.js#L12692) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12692) | [12692](../youtube-playback-plox.user.js#L12692) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L12706) | [12706](../youtube-playback-plox.user.js#L12706) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L12711) | [12711](../youtube-playback-plox.user.js#L12711) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L12718) | [12718](../youtube-playback-plox.user.js#L12718) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L12724) | [12724](../youtube-playback-plox.user.js#L12724) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L12742) | [12742](../youtube-playback-plox.user.js#L12742) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L12804) | [12804](../youtube-playback-plox.user.js#L12804) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L12824) | [12824](../youtube-playback-plox.user.js#L12824) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L12857) | [12857](../youtube-playback-plox.user.js#L12857) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L12887) | [12887](../youtube-playback-plox.user.js#L12887) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L12898) | [12898](../youtube-playback-plox.user.js#L12898) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L12910) | [12910](../youtube-playback-plox.user.js#L12910) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L12950) | [12950](../youtube-playback-plox.user.js#L12950) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L12995) | [12995](../youtube-playback-plox.user.js#L12995) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L13136) | [13136](../youtube-playback-plox.user.js#L13136) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L13272) | [13272](../youtube-playback-plox.user.js#L13272) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L13344) | [13344](../youtube-playback-plox.user.js#L13344) |

## [PlaybackController](../youtube-playback-plox.user.js#L13557)
> [Line 13557](../youtube-playback-plox.user.js#L13557)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L13601) | [13601](../youtube-playback-plox.user.js#L13601) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L13617) | [13617](../youtube-playback-plox.user.js#L13617) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L13819) | [13819](../youtube-playback-plox.user.js#L13819) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L13951)
> [Line 13951](../youtube-playback-plox.user.js#L13951)

| Type | Name | Line |
|---|---|---|
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L14007) | [14007](../youtube-playback-plox.user.js#L14007) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L14424)
> [Line 14424](../youtube-playback-plox.user.js#L14424)

| Type | Name | Line |
|---|---|---|
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L14447) | [14447](../youtube-playback-plox.user.js#L14447) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L14523) | [14523](../youtube-playback-plox.user.js#L14523) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L14532) | [14532](../youtube-playback-plox.user.js#L14532) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L14540) | [14540](../youtube-playback-plox.user.js#L14540) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14560) | [14560](../youtube-playback-plox.user.js#L14560) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L14612)
> [Line 14612](../youtube-playback-plox.user.js#L14612)

| Type | Name | Line |
|---|---|---|
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14624) | [14624](../youtube-playback-plox.user.js#L14624) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L14670) | [14670](../youtube-playback-plox.user.js#L14670) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L14676) | [14676](../youtube-playback-plox.user.js#L14676) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L14684) | [14684](../youtube-playback-plox.user.js#L14684) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14699) | [14699](../youtube-playback-plox.user.js#L14699) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L14819) | [14819](../youtube-playback-plox.user.js#L14819) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L14897)
> [Line 14897](../youtube-playback-plox.user.js#L14897)

_No relevant functions or constants detected._

## [📁 Update Video List](../youtube-playback-plox.user.js#L14976)
> [Line 14976](../youtube-playback-plox.user.js#L14976)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSortValue`](../youtube-playback-plox.user.js#L15156) | [15156](../youtube-playback-plox.user.js#L15156) |
| `fn` | [`t`](../youtube-playback-plox.user.js#L15159) | [15159](../youtube-playback-plox.user.js#L15159) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15173) | [15173](../youtube-playback-plox.user.js#L15173) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15177) | [15177](../youtube-playback-plox.user.js#L15177) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L15202) | [15202](../youtube-playback-plox.user.js#L15202) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L15435) | [15435](../youtube-playback-plox.user.js#L15435) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L15456) | [15456](../youtube-playback-plox.user.js#L15456) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L15507) | [15507](../youtube-playback-plox.user.js#L15507) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L15627)
> [Line 15627](../youtube-playback-plox.user.js#L15627)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L15630) | [15630](../youtube-playback-plox.user.js#L15630) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L15644) | [15644](../youtube-playback-plox.user.js#L15644) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L15658)
> [Line 15658](../youtube-playback-plox.user.js#L15658)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L15776) | [15776](../youtube-playback-plox.user.js#L15776) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L15786) | [15786](../youtube-playback-plox.user.js#L15786) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L15857) | [15857](../youtube-playback-plox.user.js#L15857) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L15870)
> [Line 15870](../youtube-playback-plox.user.js#L15870)

| Type | Name | Line |
|---|---|---|
| `fn` | [`deleteFromStorage`](../youtube-playback-plox.user.js#L15997) | [15997](../youtube-playback-plox.user.js#L15997) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L16002) | [16002](../youtube-playback-plox.user.js#L16002) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L16024) | [16024](../youtube-playback-plox.user.js#L16024) |
| `fn` | [`cleanTitleForSpotify`](../youtube-playback-plox.user.js#L16376) | [16376](../youtube-playback-plox.user.js#L16376) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L16476)
> [Line 16476](../youtube-playback-plox.user.js#L16476)

_No relevant functions or constants detected._

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L16548)
> [Line 16548](../youtube-playback-plox.user.js#L16548)

_No relevant functions or constants detected._

## [🔄 Migración de Datos](../youtube-playback-plox.user.js#L16586)
> [Line 16586](../youtube-playback-plox.user.js#L16586)

| Type | Name | Line |
|---|---|---|
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L16643) | [16643](../youtube-playback-plox.user.js#L16643) |

## [🚀 Init](../youtube-playback-plox.user.js#L16835)
> [Line 16835](../youtube-playback-plox.user.js#L16835)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L16843) | [16843](../youtube-playback-plox.user.js#L16843) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L16865) | [16865](../youtube-playback-plox.user.js#L16865) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L17156) | [17156](../youtube-playback-plox.user.js#L17156) |

