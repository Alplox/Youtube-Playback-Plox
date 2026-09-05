# Userscript Structure
> Auto-generated on 2026-09-05 · version 0.0.12-7
> **DO NOT EDIT MANUALLY** - regenerate with `node ./scripts/generate-structure.mjs`

---

## Sections index

1. [🔍 Logger System](#logger-system) - [line 138](../youtube-playback-plox.user.js#L138)
2. [🛡️ Initialization Guard (SPA Safety)](#initialization-guard-spa-safety) - [line 216](../youtube-playback-plox.user.js#L216)
3. [📦 Config](#config) - [line 292](../youtube-playback-plox.user.js#L292)
4. [📊 Global Constants](#global-constants) - [line 421](../youtube-playback-plox.user.js#L421)
5. [📊 Global Variables](#global-variables) - [line 458](../youtube-playback-plox.user.js#L458)
6. [🌐 Translations](#translations) - [line 494](../youtube-playback-plox.user.js#L494)
7. [🔧 Utils](#utils) - [line 937](../youtube-playback-plox.user.js#L937)
8. [🔧 Sanitize HTML](#sanitize-html) - [line 940](../youtube-playback-plox.user.js#L940)
9. [🔧 Is Visibly Displayed](#is-visibly-displayed) - [line 1006](../youtube-playback-plox.user.js#L1006)
10. [🔧 Format Time](#format-time) - [line 1030](../youtube-playback-plox.user.js#L1030)
11. [🔧 parseTimeToSeconds](#parsetimetoseconds) - [line 1074](../youtube-playback-plox.user.js#L1074)
12. [🔧 normalizeSeconds](#normalizeseconds) - [line 1122](../youtube-playback-plox.user.js#L1122)
13. [🔧 getUrlTimeParamSeconds](#geturltimeparamseconds) - [line 1148](../youtube-playback-plox.user.js#L1148)
14. [⏳ delay](#delay) - [line 1177](../youtube-playback-plox.user.js#L1177)
15. [🔧 setInnerHTML](#setinnerhtml) - [line 1185](../youtube-playback-plox.user.js#L1185)
16. [🔧 Create Element](#create-element) - [line 1259](../youtube-playback-plox.user.js#L1259)
17. [🔧 Debounce](#debounce) - [line 1396](../youtube-playback-plox.user.js#L1396)
18. [🔧 downloadBlobMobileSafe](#downloadblobmobilesafe) - [line 1420](../youtube-playback-plox.user.js#L1420)
19. [🗄️ Event Handlers store](#event-handlers-store) - [line 1490](../youtube-playback-plox.user.js#L1490)
20. [📝 Selector System](#selector-system) - [line 1576](../youtube-playback-plox.user.js#L1576)
21. [💾 Simple LRU Cache](#simple-lru-cache) - [line 1862](../youtube-playback-plox.user.js#L1862)
22. [⚙️ DOM Cache System](#dom-cache-system) - [line 1928](../youtube-playback-plox.user.js#L1928)
23. [🌐 Translation Functions](#translation-functions) - [line 2294](../youtube-playback-plox.user.js#L2294)
24. [🎨 Styles](#styles) - [line 2459](../youtube-playback-plox.user.js#L2459)
25. [🎨 Theme](#theme) - [line 5040](../youtube-playback-plox.user.js#L5040)
26. [🎨 SVG Icons](#svg-icons) - [line 5118](../youtube-playback-plox.user.js#L5118)
27. [🎨 Progress Bar Style](#progress-bar-style) - [line 5280](../youtube-playback-plox.user.js#L5280)
28. [💾 Storage + Settings](#storage-settings) - [line 5787](../youtube-playback-plox.user.js#L5787)
29. [📢 Ad Caches](#ad-caches) - [line 6439](../youtube-playback-plox.user.js#L6439)
30. [📢 Ad Detector](#ad-detector) - [line 6459](../youtube-playback-plox.user.js#L6459)
31. [🎯 VirtualScroller](#virtualscroller) - [line 6637](../youtube-playback-plox.user.js#L6637)
32. [📤 Import/Export JSON](#importexport-json) - [line 7058](../youtube-playback-plox.user.js#L7058)
33. [☁️ GitHub Backup](#github-backup) - [line 7247](../youtube-playback-plox.user.js#L7247)
34. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 7658](../youtube-playback-plox.user.js#L7658)
35. [🔄 Normalize Video Data](#normalize-video-data) - [line 7836](../youtube-playback-plox.user.js#L7836)
36. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 7918](../youtube-playback-plox.user.js#L7918)
37. [Parse FreeTube DB](#parse-freetube-db) - [line 8009](../youtube-playback-plox.user.js#L8009)
38. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 8102](../youtube-playback-plox.user.js#L8102)
39. [⬆ Export To FreeTube](#export-to-freetube) - [line 8133](../youtube-playback-plox.user.js#L8133)
40. [⬇ Import From FreeTube](#import-from-freetube) - [line 8180](../youtube-playback-plox.user.js#L8180)
41. [🔄 Insert Completion Event](#insert-completion-event) - [line 8238](../youtube-playback-plox.user.js#L8238)
42. [💾 Save Video Generic](#save-video-generic) - [line 8295](../youtube-playback-plox.user.js#L8295)
43. [📺 Helpers](#helpers) - [line 8471](../youtube-playback-plox.user.js#L8471)
44. [📺 Gets saved video data](#gets-saved-video-data) - [line 8474](../youtube-playback-plox.user.js#L8474)
45. [📺 Get Player Video ID](#get-player-video-id) - [line 8531](../youtube-playback-plox.user.js#L8531)
46. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 8610](../youtube-playback-plox.user.js#L8610)
47. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 8815](../youtube-playback-plox.user.js#L8815)
48. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 9021](../youtube-playback-plox.user.js#L9021)
49. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 9043](../youtube-playback-plox.user.js#L9043)
50. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 9071](../youtube-playback-plox.user.js#L9071)
51. [📺 get Playlist Name](#get-playlist-name) - [line 9116](../youtube-playback-plox.user.js#L9116)
52. [🕒 Time Display](#time-display) - [line 9399](../youtube-playback-plox.user.js#L9399)
53. [🖼️ Display Button Helpers](#display-button-helpers) - [line 9435](../youtube-playback-plox.user.js#L9435)
54. [🍞 Toasts](#toasts) - [line 10243](../youtube-playback-plox.user.js#L10243)
55. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 10437](../youtube-playback-plox.user.js#L10437)
56. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 10480](../youtube-playback-plox.user.js#L10480)
57. [⚙️ Settings UI](#settings-ui) - [line 10798](../youtube-playback-plox.user.js#L10798)
58. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 11247](../youtube-playback-plox.user.js#L11247)
59. [🎵 Video Selection](#video-selection) - [line 11305](../youtube-playback-plox.user.js#L11305)
60. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 12126](../youtube-playback-plox.user.js#L12126)
61. [📡 Video Observer Manager](#video-observer-manager) - [line 12399](../youtube-playback-plox.user.js#L12399)
62. [Processing Functions](#processing-functions) - [line 13198](../youtube-playback-plox.user.js#L13198)
63. [PlaybackController](#playbackcontroller) - [line 14300](../youtube-playback-plox.user.js#L14300)
64. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 14752](../youtube-playback-plox.user.js#L14752)
65. [📂 Sort UI](#sort-ui) - [line 15293](../youtube-playback-plox.user.js#L15293)
66. [📂 Filters UI](#filters-ui) - [line 15486](../youtube-playback-plox.user.js#L15486)
67. [📂 Video List UI](#video-list-ui) - [line 15772](../youtube-playback-plox.user.js#L15772)
68. [📁 Update Video List](#update-video-list) - [line 15895](../youtube-playback-plox.user.js#L15895)
69. [🔘 Floating Button](#floating-button) - [line 16680](../youtube-playback-plox.user.js#L16680)
70. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 16708](../youtube-playback-plox.user.js#L16708)
71. [📂 Video Entry](#video-entry) - [line 16927](../youtube-playback-plox.user.js#L16927)
72. [🗑️ Clear All Data](#clear-all-data) - [line 18863](../youtube-playback-plox.user.js#L18863)
73. [⚙️ Menu Commands](#menu-commands) - [line 19022](../youtube-playback-plox.user.js#L19022)
74. [🔄 Data Migration](#data-migration) - [line 19050](../youtube-playback-plox.user.js#L19050)
75. [🚀 Init](#init) - [line 19451](../youtube-playback-plox.user.js#L19451)

---

## [🔍 Logger System](../youtube-playback-plox.user.js#L138)
> [Line 138](../youtube-playback-plox.user.js#L138)

| Type | Name | Line |
|---|---|---|
| `fn` | [`resolveArgs`](../youtube-playback-plox.user.js#L150) | [150](../youtube-playback-plox.user.js#L150) |
| `fn` | [`build`](../youtube-playback-plox.user.js#L152) | [152](../youtube-playback-plox.user.js#L152) |
| `fn` | [`msg`](../youtube-playback-plox.user.js#L187) | [187](../youtube-playback-plox.user.js#L187) |

## [🛡️ Initialization Guard (SPA Safety)](../youtube-playback-plox.user.js#L216)
> [Line 216](../youtube-playback-plox.user.js#L216)

_No relevant functions or constants detected._

## [📦 Config](../youtube-playback-plox.user.js#L292)
> [Line 292](../youtube-playback-plox.user.js#L292)

_No relevant functions or constants detected._

## [📊 Global Constants](../youtube-playback-plox.user.js#L421)
> [Line 421](../youtube-playback-plox.user.js#L421)

| Type | Name | Line |
|---|---|---|
| `module` | [`TYPE_CONFIG`](../youtube-playback-plox.user.js#L432) | [432](../youtube-playback-plox.user.js#L432) |

## [📊 Global Variables](../youtube-playback-plox.user.js#L458)
> [Line 458](../youtube-playback-plox.user.js#L458)

_No relevant functions or constants detected._

## [🌐 Translations](../youtube-playback-plox.user.js#L494)
> [Line 494](../youtube-playback-plox.user.js#L494)

| Type | Name | Line |
|---|---|---|
| `fn` | [`fetchUrl`](../youtube-playback-plox.user.js#L842) | [842](../youtube-playback-plox.user.js#L842) |

## [🔧 Utils](../youtube-playback-plox.user.js#L937)
> [Line 937](../youtube-playback-plox.user.js#L937)

_No relevant functions or constants detected._

## [🔧 Sanitize HTML](../youtube-playback-plox.user.js#L940)
> [Line 940](../youtube-playback-plox.user.js#L940)

| Type | Name | Line |
|---|---|---|
| `fn` | [`sanitizeHTML`](../youtube-playback-plox.user.js#L950) | [950](../youtube-playback-plox.user.js#L950) |
| `module` | [`sanitizeHTML`](../youtube-playback-plox.user.js#L950) | [950](../youtube-playback-plox.user.js#L950) |

## [🔧 Is Visibly Displayed](../youtube-playback-plox.user.js#L1006)
> [Line 1006](../youtube-playback-plox.user.js#L1006)

_No relevant functions or constants detected._

## [🔧 Format Time](../youtube-playback-plox.user.js#L1030)
> [Line 1030](../youtube-playback-plox.user.js#L1030)

| Type | Name | Line |
|---|---|---|
| `fn` | [`formatTime`](../youtube-playback-plox.user.js#L1052) | [1052](../youtube-playback-plox.user.js#L1052) |

## [🔧 parseTimeToSeconds](../youtube-playback-plox.user.js#L1074)
> [Line 1074](../youtube-playback-plox.user.js#L1074)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseTimeToSeconds`](../youtube-playback-plox.user.js#L1097) | [1097](../youtube-playback-plox.user.js#L1097) |

## [🔧 normalizeSeconds](../youtube-playback-plox.user.js#L1122)
> [Line 1122](../youtube-playback-plox.user.js#L1122)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeSeconds`](../youtube-playback-plox.user.js#L1141) | [1141](../youtube-playback-plox.user.js#L1141) |

## [🔧 getUrlTimeParamSeconds](../youtube-playback-plox.user.js#L1148)
> [Line 1148](../youtube-playback-plox.user.js#L1148)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getUrlTimeParamSeconds`](../youtube-playback-plox.user.js#L1156) | [1156](../youtube-playback-plox.user.js#L1156) |

## [⏳ delay](../youtube-playback-plox.user.js#L1177)
> [Line 1177](../youtube-playback-plox.user.js#L1177)

| Type | Name | Line |
|---|---|---|
| `fn` | [`delay`](../youtube-playback-plox.user.js#L1183) | [1183](../youtube-playback-plox.user.js#L1183) |

## [🔧 setInnerHTML](../youtube-playback-plox.user.js#L1185)
> [Line 1185](../youtube-playback-plox.user.js#L1185)

_No relevant functions or constants detected._

## [🔧 Create Element](../youtube-playback-plox.user.js#L1259)
> [Line 1259](../youtube-playback-plox.user.js#L1259)

| Type | Name | Line |
|---|---|---|
| `fn` | [`append`](../youtube-playback-plox.user.js#L1339) | [1339](../youtube-playback-plox.user.js#L1339) |
| `fn` | [`clamp`](../youtube-playback-plox.user.js#L1369) | [1369](../youtube-playback-plox.user.js#L1369) |

## [🔧 Debounce](../youtube-playback-plox.user.js#L1396)
> [Line 1396](../youtube-playback-plox.user.js#L1396)

| Type | Name | Line |
|---|---|---|
| `fn` | [`debounce`](../youtube-playback-plox.user.js#L1406) | [1406](../youtube-playback-plox.user.js#L1406) |

## [🔧 downloadBlobMobileSafe](../youtube-playback-plox.user.js#L1420)
> [Line 1420](../youtube-playback-plox.user.js#L1420)

| Type | Name | Line |
|---|---|---|
| `fn` | [`downloadBlobMobileSafe`](../youtube-playback-plox.user.js#L1428) | [1428](../youtube-playback-plox.user.js#L1428) |

## [🗄️ Event Handlers store](../youtube-playback-plox.user.js#L1490)
> [Line 1490](../youtube-playback-plox.user.js#L1490)

| Type | Name | Line |
|---|---|---|
| `fn` | [`dispose`](../youtube-playback-plox.user.js#L1567) | [1567](../youtube-playback-plox.user.js#L1567) |

## [📝 Selector System](../youtube-playback-plox.user.js#L1576)
> [Line 1576](../youtube-playback-plox.user.js#L1576)

| Type | Name | Line |
|---|---|---|
| `module` | [`PREFIX`](../youtube-playback-plox.user.js#L1660) | [1660](../youtube-playback-plox.user.js#L1660) |
| `fn` | [`createSelectorSystem`](../youtube-playback-plox.user.js#L1685) | [1685](../youtube-playback-plox.user.js#L1685) |

## [💾 Simple LRU Cache](../youtube-playback-plox.user.js#L1862)
> [Line 1862](../youtube-playback-plox.user.js#L1862)

_No relevant functions or constants detected._

## [⚙️ DOM Cache System](../youtube-playback-plox.user.js#L1928)
> [Line 1928](../youtube-playback-plox.user.js#L1928)

| Type | Name | Line |
|---|---|---|
| `fn` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1945) | [1945](../youtube-playback-plox.user.js#L1945) |
| `module` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1945) | [1945](../youtube-playback-plox.user.js#L1945) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L1977) | [1977](../youtube-playback-plox.user.js#L1977) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L2015) | [2015](../youtube-playback-plox.user.js#L2015) |

## [🌐 Translation Functions](../youtube-playback-plox.user.js#L2294)
> [Line 2294](../youtube-playback-plox.user.js#L2294)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normParams`](../youtube-playback-plox.user.js#L2318) | [2318](../youtube-playback-plox.user.js#L2318) |
| `fn` | [`candidates`](../youtube-playback-plox.user.js#L2416) | [2416](../youtube-playback-plox.user.js#L2416) |
| `fn` | [`normalized`](../youtube-playback-plox.user.js#L2435) | [2435](../youtube-playback-plox.user.js#L2435) |

## [🎨 Styles](../youtube-playback-plox.user.js#L2459)
> [Line 2459](../youtube-playback-plox.user.js#L2459)

_No relevant functions or constants detected._

## [🎨 Theme](../youtube-playback-plox.user.js#L5040)
> [Line 5040](../youtube-playback-plox.user.js#L5040)

_No relevant functions or constants detected._

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L5118)
> [Line 5118](../youtube-playback-plox.user.js#L5118)

_No relevant functions or constants detected._

## [🎨 Progress Bar Style](../youtube-playback-plox.user.js#L5280)
> [Line 5280](../youtube-playback-plox.user.js#L5280)

| Type | Name | Line |
|---|---|---|
| `fn` | [`clearAllProgressGradientState`](../youtube-playback-plox.user.js#L5292) | [5292](../youtube-playback-plox.user.js#L5292) |
| `fn` | [`syncProgressGradientStateForContainer`](../youtube-playback-plox.user.js#L5308) | [5308](../youtube-playback-plox.user.js#L5308) |
| `fn` | [`resolvePlayerRootForGradient`](../youtube-playback-plox.user.js#L5331) | [5331](../youtube-playback-plox.user.js#L5331) |
| `fn` | [`clearProgressColorFromPlayerRoot`](../youtube-playback-plox.user.js#L5342) | [5342](../youtube-playback-plox.user.js#L5342) |
| `fn` | [`applyProgressColorToPlayerRoot`](../youtube-playback-plox.user.js#L5362) | [5362](../youtube-playback-plox.user.js#L5362) |
| `fn` | [`applyProgressColorToShortsSurfaces`](../youtube-playback-plox.user.js#L5386) | [5386](../youtube-playback-plox.user.js#L5386) |
| `fn` | [`repaintWatchProgressBarFromActivePlayer`](../youtube-playback-plox.user.js#L5406) | [5406](../youtube-playback-plox.user.js#L5406) |
| `fn` | [`scheduleProgressBarGradientRepaint`](../youtube-playback-plox.user.js#L5427) | [5427](../youtube-playback-plox.user.js#L5427) |
| `fn` | [`paint`](../youtube-playback-plox.user.js#L5428) | [5428](../youtube-playback-plox.user.js#L5428) |
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L5764) | [5764](../youtube-playback-plox.user.js#L5764) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L5787)
> [Line 5787](../youtube-playback-plox.user.js#L5787)

| Type | Name | Line |
|---|---|---|
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L5797) | [5797](../youtube-playback-plox.user.js#L5797) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L5797) | [5797](../youtube-playback-plox.user.js#L5797) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5946) | [5946](../youtube-playback-plox.user.js#L5946) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5946) | [5946](../youtube-playback-plox.user.js#L5946) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L6141) | [6141](../youtube-playback-plox.user.js#L6141) |
| `fn` | [`prefixKey`](../youtube-playback-plox.user.js#L6150) | [6150](../youtube-playback-plox.user.js#L6150) |
| `fn` | [`stripPrefix`](../youtube-playback-plox.user.js#L6151) | [6151](../youtube-playback-plox.user.js#L6151) |
| `fn` | [`hasPrefix`](../youtube-playback-plox.user.js#L6152) | [6152](../youtube-playback-plox.user.js#L6152) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L6268) | [6268](../youtube-playback-plox.user.js#L6268) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L6286) | [6286](../youtube-playback-plox.user.js#L6286) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L6307) | [6307](../youtube-playback-plox.user.js#L6307) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6320) | [6320](../youtube-playback-plox.user.js#L6320) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6384) | [6384](../youtube-playback-plox.user.js#L6384) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6402) | [6402](../youtube-playback-plox.user.js#L6402) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L6410) | [6410](../youtube-playback-plox.user.js#L6410) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L6428) | [6428](../youtube-playback-plox.user.js#L6428) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L6439)
> [Line 6439](../youtube-playback-plox.user.js#L6439)

_No relevant functions or constants detected._

## [📢 Ad Detector](../youtube-playback-plox.user.js#L6459)
> [Line 6459](../youtube-playback-plox.user.js#L6459)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L6461) | [6461](../youtube-playback-plox.user.js#L6461) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L6512) | [6512](../youtube-playback-plox.user.js#L6512) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L6637)
> [Line 6637](../youtube-playback-plox.user.js#L6637)

_No relevant functions or constants detected._

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L7058)
> [Line 7058](../youtube-playback-plox.user.js#L7058)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L7065) | [7065](../youtube-playback-plox.user.js#L7065) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L7068) | [7068](../youtube-playback-plox.user.js#L7068) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L7096) | [7096](../youtube-playback-plox.user.js#L7096) |
| `fn` | [`copyExportDataToClipboard`](../youtube-playback-plox.user.js#L7147) | [7147](../youtube-playback-plox.user.js#L7147) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L7192) | [7192](../youtube-playback-plox.user.js#L7192) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L7247)
> [Line 7247](../youtube-playback-plox.user.js#L7247)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getGitHubErrorMsg`](../youtube-playback-plox.user.js#L7250) | [7250](../youtube-playback-plox.user.js#L7250) |
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L7257) | [7257](../youtube-playback-plox.user.js#L7257) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L7285) | [7285](../youtube-playback-plox.user.js#L7285) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7286) | [7286](../youtube-playback-plox.user.js#L7286) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L7366) | [7366](../youtube-playback-plox.user.js#L7366) |
| `fn` | [`cleanOwner`](../youtube-playback-plox.user.js#L7377) | [7377](../youtube-playback-plox.user.js#L7377) |
| `fn` | [`cleanName`](../youtube-playback-plox.user.js#L7378) | [7378](../youtube-playback-plox.user.js#L7378) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7379) | [7379](../youtube-playback-plox.user.js#L7379) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L7521) | [7521](../youtube-playback-plox.user.js#L7521) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7533) | [7533](../youtube-playback-plox.user.js#L7533) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L7599) | [7599](../youtube-playback-plox.user.js#L7599) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L7629) | [7629](../youtube-playback-plox.user.js#L7629) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L7658)
> [Line 7658](../youtube-playback-plox.user.js#L7658)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L7659) | [7659](../youtube-playback-plox.user.js#L7659) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L7698) | [7698](../youtube-playback-plox.user.js#L7698) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L7836)
> [Line 7836](../youtube-playback-plox.user.js#L7836)

_No relevant functions or constants detected._

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L7918)
> [Line 7918](../youtube-playback-plox.user.js#L7918)

_No relevant functions or constants detected._

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L8009)
> [Line 8009](../youtube-playback-plox.user.js#L8009)

_No relevant functions or constants detected._

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L8102)
> [Line 8102](../youtube-playback-plox.user.js#L8102)

| Type | Name | Line |
|---|---|---|
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L8121) | [8121](../youtube-playback-plox.user.js#L8121) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L8133)
> [Line 8133](../youtube-playback-plox.user.js#L8133)

_No relevant functions or constants detected._

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L8180)
> [Line 8180](../youtube-playback-plox.user.js#L8180)

_No relevant functions or constants detected._

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L8238)
> [Line 8238](../youtube-playback-plox.user.js#L8238)

| Type | Name | Line |
|---|---|---|
| `fn` | [`base`](../youtube-playback-plox.user.js#L8247) | [8247](../youtube-playback-plox.user.js#L8247) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L8284) | [8284](../youtube-playback-plox.user.js#L8284) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L8295)
> [Line 8295](../youtube-playback-plox.user.js#L8295)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8350) | [8350](../youtube-playback-plox.user.js#L8350) |

## [📺 Helpers](../youtube-playback-plox.user.js#L8471)
> [Line 8471](../youtube-playback-plox.user.js#L8471)

_No relevant functions or constants detected._

## [📺 Gets saved video data](../youtube-playback-plox.user.js#L8474)
> [Line 8474](../youtube-playback-plox.user.js#L8474)

| Type | Name | Line |
|---|---|---|
| `fn` | [`keys`](../youtube-playback-plox.user.js#L8500) | [8500](../youtube-playback-plox.user.js#L8500) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L8531)
> [Line 8531](../youtube-playback-plox.user.js#L8531)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L8567) | [8567](../youtube-playback-plox.user.js#L8567) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L8610)
> [Line 8610](../youtube-playback-plox.user.js#L8610)

_No relevant functions or constants detected._

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L8815)
> [Line 8815](../youtube-playback-plox.user.js#L8815)

| Type | Name | Line |
|---|---|---|
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L8912) | [8912](../youtube-playback-plox.user.js#L8912) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L9021)
> [Line 9021](../youtube-playback-plox.user.js#L9021)

_No relevant functions or constants detected._

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L9043)
> [Line 9043](../youtube-playback-plox.user.js#L9043)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L9071)
> [Line 9071](../youtube-playback-plox.user.js#L9071)

_No relevant functions or constants detected._

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L9116)
> [Line 9116](../youtube-playback-plox.user.js#L9116)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L9137) | [9137](../youtube-playback-plox.user.js#L9137) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L9279) | [9279](../youtube-playback-plox.user.js#L9279) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L9372) | [9372](../youtube-playback-plox.user.js#L9372) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L9399)
> [Line 9399](../youtube-playback-plox.user.js#L9399)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L9425) | [9425](../youtube-playback-plox.user.js#L9425) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L9435)
> [Line 9435](../youtube-playback-plox.user.js#L9435)

| Type | Name | Line |
|---|---|---|
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9721) | [9721](../youtube-playback-plox.user.js#L9721) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9721) | [9721](../youtube-playback-plox.user.js#L9721) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L9733) | [9733](../youtube-playback-plox.user.js#L9733) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L9743) | [9743](../youtube-playback-plox.user.js#L9743) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L9751) | [9751](../youtube-playback-plox.user.js#L9751) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L9759) | [9759](../youtube-playback-plox.user.js#L9759) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L9782) | [9782](../youtube-playback-plox.user.js#L9782) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L9794) | [9794](../youtube-playback-plox.user.js#L9794) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L9797) | [9797](../youtube-playback-plox.user.js#L9797) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L9807) | [9807](../youtube-playback-plox.user.js#L9807) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L9812) | [9812](../youtube-playback-plox.user.js#L9812) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L9835) | [9835](../youtube-playback-plox.user.js#L9835) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L9854) | [9854](../youtube-playback-plox.user.js#L9854) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L9862) | [9862](../youtube-playback-plox.user.js#L9862) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L9906) | [9906](../youtube-playback-plox.user.js#L9906) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L9963) | [9963](../youtube-playback-plox.user.js#L9963) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L10022) | [10022](../youtube-playback-plox.user.js#L10022) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L10119) | [10119](../youtube-playback-plox.user.js#L10119) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L10134) | [10134](../youtube-playback-plox.user.js#L10134) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L10138) | [10138](../youtube-playback-plox.user.js#L10138) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L10145) | [10145](../youtube-playback-plox.user.js#L10145) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L10163) | [10163](../youtube-playback-plox.user.js#L10163) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L10243)
> [Line 10243](../youtube-playback-plox.user.js#L10243)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L10288) | [10288](../youtube-playback-plox.user.js#L10288) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L10437)
> [Line 10437](../youtube-playback-plox.user.js#L10437)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L10440) | [10440](../youtube-playback-plox.user.js#L10440) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L10480)
> [Line 10480](../youtube-playback-plox.user.js#L10480)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L10520) | [10520](../youtube-playback-plox.user.js#L10520) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L10526) | [10526](../youtube-playback-plox.user.js#L10526) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L10534) | [10534](../youtube-playback-plox.user.js#L10534) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L10580) | [10580](../youtube-playback-plox.user.js#L10580) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L10584) | [10584](../youtube-playback-plox.user.js#L10584) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L10587) | [10587](../youtube-playback-plox.user.js#L10587) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L10603) | [10603](../youtube-playback-plox.user.js#L10603) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L10612) | [10612](../youtube-playback-plox.user.js#L10612) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L10642) | [10642](../youtube-playback-plox.user.js#L10642) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L10656) | [10656](../youtube-playback-plox.user.js#L10656) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L10660) | [10660](../youtube-playback-plox.user.js#L10660) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L10798)
> [Line 10798](../youtube-playback-plox.user.js#L10798)

| Type | Name | Line |
|---|---|---|
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L10818) | [10818](../youtube-playback-plox.user.js#L10818) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L10902) | [10902](../youtube-playback-plox.user.js#L10902) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10985) | [10985](../youtube-playback-plox.user.js#L10985) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10986) | [10986](../youtube-playback-plox.user.js#L10986) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L11066) | [11066](../youtube-playback-plox.user.js#L11066) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L11067) | [11067](../youtube-playback-plox.user.js#L11067) |
| `fn` | [`idbDiag`](../youtube-playback-plox.user.js#L11127) | [11127](../youtube-playback-plox.user.js#L11127) |
| `fn` | [`safeModeActive`](../youtube-playback-plox.user.js#L11137) | [11137](../youtube-playback-plox.user.js#L11137) |
| `fn` | [`activeSessions`](../youtube-playback-plox.user.js#L11138) | [11138](../youtube-playback-plox.user.js#L11138) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L11247)
> [Line 11247](../youtube-playback-plox.user.js#L11247)

_No relevant functions or constants detected._

## [🎵 Video Selection](../youtube-playback-plox.user.js#L11305)
> [Line 11305](../youtube-playback-plox.user.js#L11305)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11395) | [11395](../youtube-playback-plox.user.js#L11395) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11402) | [11402](../youtube-playback-plox.user.js#L11402) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L11487) | [11487](../youtube-playback-plox.user.js#L11487) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L11491) | [11491](../youtube-playback-plox.user.js#L11491) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L11500) | [11500](../youtube-playback-plox.user.js#L11500) |
| `fn` | [`closeImportMenu`](../youtube-playback-plox.user.js#L11583) | [11583](../youtube-playback-plox.user.js#L11583) |
| `fn` | [`onImportOutsideClick`](../youtube-playback-plox.user.js#L11592) | [11592](../youtube-playback-plox.user.js#L11592) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L11884) | [11884](../youtube-playback-plox.user.js#L11884) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L12031) | [12031](../youtube-playback-plox.user.js#L12031) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L12126)
> [Line 12126](../youtube-playback-plox.user.js#L12126)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L12132) | [12132](../youtube-playback-plox.user.js#L12132) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L12132) | [12132](../youtube-playback-plox.user.js#L12132) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L12133) | [12133](../youtube-playback-plox.user.js#L12133) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L12142) | [12142](../youtube-playback-plox.user.js#L12142) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L12147) | [12147](../youtube-playback-plox.user.js#L12147) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L12158) | [12158](../youtube-playback-plox.user.js#L12158) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L12175) | [12175](../youtube-playback-plox.user.js#L12175) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L12209) | [12209](../youtube-playback-plox.user.js#L12209) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L12234) | [12234](../youtube-playback-plox.user.js#L12234) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L12236) | [12236](../youtube-playback-plox.user.js#L12236) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L12255) | [12255](../youtube-playback-plox.user.js#L12255) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L12255) | [12255](../youtube-playback-plox.user.js#L12255) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L12257) | [12257](../youtube-playback-plox.user.js#L12257) |
| `fn` | [`shouldDropVideoEvent`](../youtube-playback-plox.user.js#L12269) | [12269](../youtube-playback-plox.user.js#L12269) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12278) | [12278](../youtube-playback-plox.user.js#L12278) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12278) | [12278](../youtube-playback-plox.user.js#L12278) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L12289) | [12289](../youtube-playback-plox.user.js#L12289) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L12294) | [12294](../youtube-playback-plox.user.js#L12294) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L12299) | [12299](../youtube-playback-plox.user.js#L12299) |
| `fn` | [`note`](../youtube-playback-plox.user.js#L12319) | [12319](../youtube-playback-plox.user.js#L12319) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L12323) | [12323](../youtube-playback-plox.user.js#L12323) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12341) | [12341](../youtube-playback-plox.user.js#L12341) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12341) | [12341](../youtube-playback-plox.user.js#L12341) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L12343) | [12343](../youtube-playback-plox.user.js#L12343) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L12351) | [12351](../youtube-playback-plox.user.js#L12351) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L12399)
> [Line 12399](../youtube-playback-plox.user.js#L12399)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12404) | [12404](../youtube-playback-plox.user.js#L12404) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12404) | [12404](../youtube-playback-plox.user.js#L12404) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L12424) | [12424](../youtube-playback-plox.user.js#L12424) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L12444) | [12444](../youtube-playback-plox.user.js#L12444) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L12460) | [12460](../youtube-playback-plox.user.js#L12460) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L12497) | [12497](../youtube-playback-plox.user.js#L12497) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L12531) | [12531](../youtube-playback-plox.user.js#L12531) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L12532) | [12532](../youtube-playback-plox.user.js#L12532) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L12563) | [12563](../youtube-playback-plox.user.js#L12563) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L12619) | [12619](../youtube-playback-plox.user.js#L12619) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L12686) | [12686](../youtube-playback-plox.user.js#L12686) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12694) | [12694](../youtube-playback-plox.user.js#L12694) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L12701) | [12701](../youtube-playback-plox.user.js#L12701) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L12742) | [12742](../youtube-playback-plox.user.js#L12742) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L12782) | [12782](../youtube-playback-plox.user.js#L12782) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L12793) | [12793](../youtube-playback-plox.user.js#L12793) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L12809) | [12809](../youtube-playback-plox.user.js#L12809) |
| `fn` | [`clearPlayerCache`](../youtube-playback-plox.user.js#L12915) | [12915](../youtube-playback-plox.user.js#L12915) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L13129) | [13129](../youtube-playback-plox.user.js#L13129) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L13171) | [13171](../youtube-playback-plox.user.js#L13171) |

## [Processing Functions](../youtube-playback-plox.user.js#L13198)
> [Line 13198](../youtube-playback-plox.user.js#L13198)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L13224) | [13224](../youtube-playback-plox.user.js#L13224) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L13243) | [13243](../youtube-playback-plox.user.js#L13243) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L13253) | [13253](../youtube-playback-plox.user.js#L13253) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L13253) | [13253](../youtube-playback-plox.user.js#L13253) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L13268) | [13268](../youtube-playback-plox.user.js#L13268) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L13273) | [13273](../youtube-playback-plox.user.js#L13273) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L13280) | [13280](../youtube-playback-plox.user.js#L13280) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L13286) | [13286](../youtube-playback-plox.user.js#L13286) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L13304) | [13304](../youtube-playback-plox.user.js#L13304) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L13380) | [13380](../youtube-playback-plox.user.js#L13380) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L13429) | [13429](../youtube-playback-plox.user.js#L13429) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L13463) | [13463](../youtube-playback-plox.user.js#L13463) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L13493) | [13493](../youtube-playback-plox.user.js#L13493) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L13504) | [13504](../youtube-playback-plox.user.js#L13504) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L13516) | [13516](../youtube-playback-plox.user.js#L13516) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L13550) | [13550](../youtube-playback-plox.user.js#L13550) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L13621) | [13621](../youtube-playback-plox.user.js#L13621) |
| `fn` | [`handleSeekingForGradient`](../youtube-playback-plox.user.js#L13650) | [13650](../youtube-playback-plox.user.js#L13650) |
| `fn` | [`handleSeekedForGradient`](../youtube-playback-plox.user.js#L13659) | [13659](../youtube-playback-plox.user.js#L13659) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L13786) | [13786](../youtube-playback-plox.user.js#L13786) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L13855) | [13855](../youtube-playback-plox.user.js#L13855) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L14037) | [14037](../youtube-playback-plox.user.js#L14037) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L14150) | [14150](../youtube-playback-plox.user.js#L14150) |

## [PlaybackController](../youtube-playback-plox.user.js#L14300)
> [Line 14300](../youtube-playback-plox.user.js#L14300)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L14348) | [14348](../youtube-playback-plox.user.js#L14348) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L14364) | [14364](../youtube-playback-plox.user.js#L14364) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L14387) | [14387](../youtube-playback-plox.user.js#L14387) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L14393) | [14393](../youtube-playback-plox.user.js#L14393) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L14625) | [14625](../youtube-playback-plox.user.js#L14625) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L14752)
> [Line 14752](../youtube-playback-plox.user.js#L14752)

| Type | Name | Line |
|---|---|---|
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L14893) | [14893](../youtube-playback-plox.user.js#L14893) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L15293)
> [Line 15293](../youtube-playback-plox.user.js#L15293)

| Type | Name | Line |
|---|---|---|
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L15316) | [15316](../youtube-playback-plox.user.js#L15316) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L15392) | [15392](../youtube-playback-plox.user.js#L15392) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L15405) | [15405](../youtube-playback-plox.user.js#L15405) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L15413) | [15413](../youtube-playback-plox.user.js#L15413) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15433) | [15433](../youtube-playback-plox.user.js#L15433) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L15486)
> [Line 15486](../youtube-playback-plox.user.js#L15486)

| Type | Name | Line |
|---|---|---|
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15498) | [15498](../youtube-playback-plox.user.js#L15498) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L15545) | [15545](../youtube-playback-plox.user.js#L15545) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L15551) | [15551](../youtube-playback-plox.user.js#L15551) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L15559) | [15559](../youtube-playback-plox.user.js#L15559) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15574) | [15574](../youtube-playback-plox.user.js#L15574) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L15694) | [15694](../youtube-playback-plox.user.js#L15694) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L15772)
> [Line 15772](../youtube-playback-plox.user.js#L15772)

_No relevant functions or constants detected._

## [📁 Update Video List](../youtube-playback-plox.user.js#L15895)
> [Line 15895](../youtube-playback-plox.user.js#L15895)

| Type | Name | Line |
|---|---|---|
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15914) | [15914](../youtube-playback-plox.user.js#L15914) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15918) | [15918](../youtube-playback-plox.user.js#L15918) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L16102) | [16102](../youtube-playback-plox.user.js#L16102) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L16121) | [16121](../youtube-playback-plox.user.js#L16121) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L16247) | [16247](../youtube-playback-plox.user.js#L16247) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L16324) | [16324](../youtube-playback-plox.user.js#L16324) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L16488) | [16488](../youtube-playback-plox.user.js#L16488) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L16509) | [16509](../youtube-playback-plox.user.js#L16509) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L16560) | [16560](../youtube-playback-plox.user.js#L16560) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L16680)
> [Line 16680](../youtube-playback-plox.user.js#L16680)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L16683) | [16683](../youtube-playback-plox.user.js#L16683) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L16697) | [16697](../youtube-playback-plox.user.js#L16697) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L16708)
> [Line 16708](../youtube-playback-plox.user.js#L16708)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L16835) | [16835](../youtube-playback-plox.user.js#L16835) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L16845) | [16845](../youtube-playback-plox.user.js#L16845) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L16915) | [16915](../youtube-playback-plox.user.js#L16915) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L16927)
> [Line 16927](../youtube-playback-plox.user.js#L16927)

| Type | Name | Line |
|---|---|---|
| `fn` | [`deleteFromStorage`](../youtube-playback-plox.user.js#L17061) | [17061](../youtube-playback-plox.user.js#L17061) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L17066) | [17066](../youtube-playback-plox.user.js#L17066) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L17125) | [17125](../youtube-playback-plox.user.js#L17125) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L17173) | [17173](../youtube-playback-plox.user.js#L17173) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L17179) | [17179](../youtube-playback-plox.user.js#L17179) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L17196) | [17196](../youtube-playback-plox.user.js#L17196) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L17230) | [17230](../youtube-playback-plox.user.js#L17230) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L17274) | [17274](../youtube-playback-plox.user.js#L17274) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L17356) | [17356](../youtube-playback-plox.user.js#L17356) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L17362) | [17362](../youtube-playback-plox.user.js#L17362) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L17378) | [17378](../youtube-playback-plox.user.js#L17378) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L17388) | [17388](../youtube-playback-plox.user.js#L17388) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L17396) | [17396](../youtube-playback-plox.user.js#L17396) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L17401) | [17401](../youtube-playback-plox.user.js#L17401) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L17408) | [17408](../youtube-playback-plox.user.js#L17408) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L17411) | [17411](../youtube-playback-plox.user.js#L17411) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L17415) | [17415](../youtube-playback-plox.user.js#L17415) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L17461) | [17461](../youtube-playback-plox.user.js#L17461) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L17461) | [17461](../youtube-playback-plox.user.js#L17461) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L17475) | [17475](../youtube-playback-plox.user.js#L17475) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L17749) | [17749](../youtube-playback-plox.user.js#L17749) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L17797) | [17797](../youtube-playback-plox.user.js#L17797) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17798) | [17798](../youtube-playback-plox.user.js#L17798) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L17814) | [17814](../youtube-playback-plox.user.js#L17814) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17815) | [17815](../youtube-playback-plox.user.js#L17815) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L17864) | [17864](../youtube-playback-plox.user.js#L17864) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L18009) | [18009](../youtube-playback-plox.user.js#L18009) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L18023) | [18023](../youtube-playback-plox.user.js#L18023) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L18322) | [18322](../youtube-playback-plox.user.js#L18322) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L18421) | [18421](../youtube-playback-plox.user.js#L18421) |
| `fn` | [`scheduleHeightUpdate`](../youtube-playback-plox.user.js#L18481) | [18481](../youtube-playback-plox.user.js#L18481) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L18519) | [18519](../youtube-playback-plox.user.js#L18519) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L18767) | [18767](../youtube-playback-plox.user.js#L18767) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L18790) | [18790](../youtube-playback-plox.user.js#L18790) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L18791) | [18791](../youtube-playback-plox.user.js#L18791) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L18863)
> [Line 18863](../youtube-playback-plox.user.js#L18863)

_No relevant functions or constants detected._

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L19022)
> [Line 19022](../youtube-playback-plox.user.js#L19022)

_No relevant functions or constants detected._

## [🔄 Data Migration](../youtube-playback-plox.user.js#L19050)
> [Line 19050](../youtube-playback-plox.user.js#L19050)

| Type | Name | Line |
|---|---|---|
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L19107) | [19107](../youtube-playback-plox.user.js#L19107) |

## [🚀 Init](../youtube-playback-plox.user.js#L19451)
> [Line 19451](../youtube-playback-plox.user.js#L19451)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L19461) | [19461](../youtube-playback-plox.user.js#L19461) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L19483) | [19483](../youtube-playback-plox.user.js#L19483) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L19821) | [19821](../youtube-playback-plox.user.js#L19821) |

