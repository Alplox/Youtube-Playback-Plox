# Userscript Structure
> Auto-generated on 2026-08-26 · version 0.0.12-7
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
33. [☁️ GitHub Backup](#github-backup) - [line 7245](../youtube-playback-plox.user.js#L7245)
34. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 7656](../youtube-playback-plox.user.js#L7656)
35. [🔄 Normalize Video Data](#normalize-video-data) - [line 7834](../youtube-playback-plox.user.js#L7834)
36. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 7916](../youtube-playback-plox.user.js#L7916)
37. [Parse FreeTube DB](#parse-freetube-db) - [line 8007](../youtube-playback-plox.user.js#L8007)
38. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 8100](../youtube-playback-plox.user.js#L8100)
39. [⬆ Export To FreeTube](#export-to-freetube) - [line 8131](../youtube-playback-plox.user.js#L8131)
40. [⬇ Import From FreeTube](#import-from-freetube) - [line 8178](../youtube-playback-plox.user.js#L8178)
41. [🔄 Insert Completion Event](#insert-completion-event) - [line 8236](../youtube-playback-plox.user.js#L8236)
42. [💾 Save Video Generic](#save-video-generic) - [line 8293](../youtube-playback-plox.user.js#L8293)
43. [📺 Helpers](#helpers) - [line 8469](../youtube-playback-plox.user.js#L8469)
44. [📺 Gets saved video data](#gets-saved-video-data) - [line 8472](../youtube-playback-plox.user.js#L8472)
45. [📺 Get Player Video ID](#get-player-video-id) - [line 8529](../youtube-playback-plox.user.js#L8529)
46. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 8608](../youtube-playback-plox.user.js#L8608)
47. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 8813](../youtube-playback-plox.user.js#L8813)
48. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 9019](../youtube-playback-plox.user.js#L9019)
49. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 9041](../youtube-playback-plox.user.js#L9041)
50. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 9069](../youtube-playback-plox.user.js#L9069)
51. [📺 get Playlist Name](#get-playlist-name) - [line 9114](../youtube-playback-plox.user.js#L9114)
52. [🕒 Time Display](#time-display) - [line 9397](../youtube-playback-plox.user.js#L9397)
53. [🖼️ Display Button Helpers](#display-button-helpers) - [line 9433](../youtube-playback-plox.user.js#L9433)
54. [🍞 Toasts](#toasts) - [line 10241](../youtube-playback-plox.user.js#L10241)
55. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 10435](../youtube-playback-plox.user.js#L10435)
56. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 10478](../youtube-playback-plox.user.js#L10478)
57. [⚙️ Settings UI](#settings-ui) - [line 10796](../youtube-playback-plox.user.js#L10796)
58. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 11245](../youtube-playback-plox.user.js#L11245)
59. [🎵 Video Selection](#video-selection) - [line 11303](../youtube-playback-plox.user.js#L11303)
60. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 12124](../youtube-playback-plox.user.js#L12124)
61. [📡 Video Observer Manager](#video-observer-manager) - [line 12397](../youtube-playback-plox.user.js#L12397)
62. [Processing Functions](#processing-functions) - [line 13196](../youtube-playback-plox.user.js#L13196)
63. [PlaybackController](#playbackcontroller) - [line 14298](../youtube-playback-plox.user.js#L14298)
64. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 14750](../youtube-playback-plox.user.js#L14750)
65. [📂 Sort UI](#sort-ui) - [line 15291](../youtube-playback-plox.user.js#L15291)
66. [📂 Filters UI](#filters-ui) - [line 15484](../youtube-playback-plox.user.js#L15484)
67. [📂 Video List UI](#video-list-ui) - [line 15770](../youtube-playback-plox.user.js#L15770)
68. [📁 Update Video List](#update-video-list) - [line 15893](../youtube-playback-plox.user.js#L15893)
69. [🔘 Floating Button](#floating-button) - [line 16678](../youtube-playback-plox.user.js#L16678)
70. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 16706](../youtube-playback-plox.user.js#L16706)
71. [📂 Video Entry](#video-entry) - [line 16925](../youtube-playback-plox.user.js#L16925)
72. [🗑️ Clear All Data](#clear-all-data) - [line 18861](../youtube-playback-plox.user.js#L18861)
73. [⚙️ Menu Commands](#menu-commands) - [line 19020](../youtube-playback-plox.user.js#L19020)
74. [🔄 Data Migration](#data-migration) - [line 19048](../youtube-playback-plox.user.js#L19048)
75. [🚀 Init](#init) - [line 19449](../youtube-playback-plox.user.js#L19449)

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
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L7190) | [7190](../youtube-playback-plox.user.js#L7190) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L7245)
> [Line 7245](../youtube-playback-plox.user.js#L7245)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getGitHubErrorMsg`](../youtube-playback-plox.user.js#L7248) | [7248](../youtube-playback-plox.user.js#L7248) |
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L7255) | [7255](../youtube-playback-plox.user.js#L7255) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L7283) | [7283](../youtube-playback-plox.user.js#L7283) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7284) | [7284](../youtube-playback-plox.user.js#L7284) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L7364) | [7364](../youtube-playback-plox.user.js#L7364) |
| `fn` | [`cleanOwner`](../youtube-playback-plox.user.js#L7375) | [7375](../youtube-playback-plox.user.js#L7375) |
| `fn` | [`cleanName`](../youtube-playback-plox.user.js#L7376) | [7376](../youtube-playback-plox.user.js#L7376) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7377) | [7377](../youtube-playback-plox.user.js#L7377) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L7519) | [7519](../youtube-playback-plox.user.js#L7519) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7531) | [7531](../youtube-playback-plox.user.js#L7531) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L7597) | [7597](../youtube-playback-plox.user.js#L7597) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L7627) | [7627](../youtube-playback-plox.user.js#L7627) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L7656)
> [Line 7656](../youtube-playback-plox.user.js#L7656)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L7657) | [7657](../youtube-playback-plox.user.js#L7657) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L7696) | [7696](../youtube-playback-plox.user.js#L7696) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L7834)
> [Line 7834](../youtube-playback-plox.user.js#L7834)

_No relevant functions or constants detected._

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L7916)
> [Line 7916](../youtube-playback-plox.user.js#L7916)

_No relevant functions or constants detected._

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L8007)
> [Line 8007](../youtube-playback-plox.user.js#L8007)

_No relevant functions or constants detected._

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L8100)
> [Line 8100](../youtube-playback-plox.user.js#L8100)

| Type | Name | Line |
|---|---|---|
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L8119) | [8119](../youtube-playback-plox.user.js#L8119) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L8131)
> [Line 8131](../youtube-playback-plox.user.js#L8131)

_No relevant functions or constants detected._

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L8178)
> [Line 8178](../youtube-playback-plox.user.js#L8178)

_No relevant functions or constants detected._

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L8236)
> [Line 8236](../youtube-playback-plox.user.js#L8236)

| Type | Name | Line |
|---|---|---|
| `fn` | [`base`](../youtube-playback-plox.user.js#L8245) | [8245](../youtube-playback-plox.user.js#L8245) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L8282) | [8282](../youtube-playback-plox.user.js#L8282) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L8293)
> [Line 8293](../youtube-playback-plox.user.js#L8293)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8348) | [8348](../youtube-playback-plox.user.js#L8348) |

## [📺 Helpers](../youtube-playback-plox.user.js#L8469)
> [Line 8469](../youtube-playback-plox.user.js#L8469)

_No relevant functions or constants detected._

## [📺 Gets saved video data](../youtube-playback-plox.user.js#L8472)
> [Line 8472](../youtube-playback-plox.user.js#L8472)

| Type | Name | Line |
|---|---|---|
| `fn` | [`keys`](../youtube-playback-plox.user.js#L8498) | [8498](../youtube-playback-plox.user.js#L8498) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L8529)
> [Line 8529](../youtube-playback-plox.user.js#L8529)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L8565) | [8565](../youtube-playback-plox.user.js#L8565) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L8608)
> [Line 8608](../youtube-playback-plox.user.js#L8608)

_No relevant functions or constants detected._

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L8813)
> [Line 8813](../youtube-playback-plox.user.js#L8813)

| Type | Name | Line |
|---|---|---|
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L8910) | [8910](../youtube-playback-plox.user.js#L8910) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L9019)
> [Line 9019](../youtube-playback-plox.user.js#L9019)

_No relevant functions or constants detected._

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L9041)
> [Line 9041](../youtube-playback-plox.user.js#L9041)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L9069)
> [Line 9069](../youtube-playback-plox.user.js#L9069)

_No relevant functions or constants detected._

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L9114)
> [Line 9114](../youtube-playback-plox.user.js#L9114)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L9135) | [9135](../youtube-playback-plox.user.js#L9135) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L9277) | [9277](../youtube-playback-plox.user.js#L9277) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L9370) | [9370](../youtube-playback-plox.user.js#L9370) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L9397)
> [Line 9397](../youtube-playback-plox.user.js#L9397)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L9423) | [9423](../youtube-playback-plox.user.js#L9423) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L9433)
> [Line 9433](../youtube-playback-plox.user.js#L9433)

| Type | Name | Line |
|---|---|---|
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9719) | [9719](../youtube-playback-plox.user.js#L9719) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9719) | [9719](../youtube-playback-plox.user.js#L9719) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L9731) | [9731](../youtube-playback-plox.user.js#L9731) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L9741) | [9741](../youtube-playback-plox.user.js#L9741) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L9749) | [9749](../youtube-playback-plox.user.js#L9749) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L9757) | [9757](../youtube-playback-plox.user.js#L9757) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L9780) | [9780](../youtube-playback-plox.user.js#L9780) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L9792) | [9792](../youtube-playback-plox.user.js#L9792) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L9795) | [9795](../youtube-playback-plox.user.js#L9795) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L9805) | [9805](../youtube-playback-plox.user.js#L9805) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L9810) | [9810](../youtube-playback-plox.user.js#L9810) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L9833) | [9833](../youtube-playback-plox.user.js#L9833) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L9852) | [9852](../youtube-playback-plox.user.js#L9852) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L9860) | [9860](../youtube-playback-plox.user.js#L9860) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L9904) | [9904](../youtube-playback-plox.user.js#L9904) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L9961) | [9961](../youtube-playback-plox.user.js#L9961) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L10020) | [10020](../youtube-playback-plox.user.js#L10020) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L10117) | [10117](../youtube-playback-plox.user.js#L10117) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L10132) | [10132](../youtube-playback-plox.user.js#L10132) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L10136) | [10136](../youtube-playback-plox.user.js#L10136) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L10143) | [10143](../youtube-playback-plox.user.js#L10143) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L10161) | [10161](../youtube-playback-plox.user.js#L10161) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L10241)
> [Line 10241](../youtube-playback-plox.user.js#L10241)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L10286) | [10286](../youtube-playback-plox.user.js#L10286) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L10435)
> [Line 10435](../youtube-playback-plox.user.js#L10435)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L10438) | [10438](../youtube-playback-plox.user.js#L10438) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L10478)
> [Line 10478](../youtube-playback-plox.user.js#L10478)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L10518) | [10518](../youtube-playback-plox.user.js#L10518) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L10524) | [10524](../youtube-playback-plox.user.js#L10524) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L10532) | [10532](../youtube-playback-plox.user.js#L10532) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L10578) | [10578](../youtube-playback-plox.user.js#L10578) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L10582) | [10582](../youtube-playback-plox.user.js#L10582) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L10585) | [10585](../youtube-playback-plox.user.js#L10585) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L10601) | [10601](../youtube-playback-plox.user.js#L10601) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L10610) | [10610](../youtube-playback-plox.user.js#L10610) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L10640) | [10640](../youtube-playback-plox.user.js#L10640) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L10654) | [10654](../youtube-playback-plox.user.js#L10654) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L10658) | [10658](../youtube-playback-plox.user.js#L10658) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L10796)
> [Line 10796](../youtube-playback-plox.user.js#L10796)

| Type | Name | Line |
|---|---|---|
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L10816) | [10816](../youtube-playback-plox.user.js#L10816) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L10900) | [10900](../youtube-playback-plox.user.js#L10900) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10983) | [10983](../youtube-playback-plox.user.js#L10983) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10984) | [10984](../youtube-playback-plox.user.js#L10984) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L11064) | [11064](../youtube-playback-plox.user.js#L11064) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L11065) | [11065](../youtube-playback-plox.user.js#L11065) |
| `fn` | [`idbDiag`](../youtube-playback-plox.user.js#L11125) | [11125](../youtube-playback-plox.user.js#L11125) |
| `fn` | [`safeModeActive`](../youtube-playback-plox.user.js#L11135) | [11135](../youtube-playback-plox.user.js#L11135) |
| `fn` | [`activeSessions`](../youtube-playback-plox.user.js#L11136) | [11136](../youtube-playback-plox.user.js#L11136) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L11245)
> [Line 11245](../youtube-playback-plox.user.js#L11245)

_No relevant functions or constants detected._

## [🎵 Video Selection](../youtube-playback-plox.user.js#L11303)
> [Line 11303](../youtube-playback-plox.user.js#L11303)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11393) | [11393](../youtube-playback-plox.user.js#L11393) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11400) | [11400](../youtube-playback-plox.user.js#L11400) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L11485) | [11485](../youtube-playback-plox.user.js#L11485) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L11489) | [11489](../youtube-playback-plox.user.js#L11489) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L11498) | [11498](../youtube-playback-plox.user.js#L11498) |
| `fn` | [`closeImportMenu`](../youtube-playback-plox.user.js#L11581) | [11581](../youtube-playback-plox.user.js#L11581) |
| `fn` | [`onImportOutsideClick`](../youtube-playback-plox.user.js#L11590) | [11590](../youtube-playback-plox.user.js#L11590) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L11882) | [11882](../youtube-playback-plox.user.js#L11882) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L12029) | [12029](../youtube-playback-plox.user.js#L12029) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L12124)
> [Line 12124](../youtube-playback-plox.user.js#L12124)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L12130) | [12130](../youtube-playback-plox.user.js#L12130) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L12130) | [12130](../youtube-playback-plox.user.js#L12130) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L12131) | [12131](../youtube-playback-plox.user.js#L12131) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L12140) | [12140](../youtube-playback-plox.user.js#L12140) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L12145) | [12145](../youtube-playback-plox.user.js#L12145) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L12156) | [12156](../youtube-playback-plox.user.js#L12156) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L12173) | [12173](../youtube-playback-plox.user.js#L12173) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L12207) | [12207](../youtube-playback-plox.user.js#L12207) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L12232) | [12232](../youtube-playback-plox.user.js#L12232) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L12234) | [12234](../youtube-playback-plox.user.js#L12234) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L12253) | [12253](../youtube-playback-plox.user.js#L12253) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L12253) | [12253](../youtube-playback-plox.user.js#L12253) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L12255) | [12255](../youtube-playback-plox.user.js#L12255) |
| `fn` | [`shouldDropVideoEvent`](../youtube-playback-plox.user.js#L12267) | [12267](../youtube-playback-plox.user.js#L12267) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12276) | [12276](../youtube-playback-plox.user.js#L12276) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12276) | [12276](../youtube-playback-plox.user.js#L12276) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L12287) | [12287](../youtube-playback-plox.user.js#L12287) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L12292) | [12292](../youtube-playback-plox.user.js#L12292) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L12297) | [12297](../youtube-playback-plox.user.js#L12297) |
| `fn` | [`note`](../youtube-playback-plox.user.js#L12317) | [12317](../youtube-playback-plox.user.js#L12317) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L12321) | [12321](../youtube-playback-plox.user.js#L12321) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12339) | [12339](../youtube-playback-plox.user.js#L12339) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12339) | [12339](../youtube-playback-plox.user.js#L12339) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L12341) | [12341](../youtube-playback-plox.user.js#L12341) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L12349) | [12349](../youtube-playback-plox.user.js#L12349) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L12397)
> [Line 12397](../youtube-playback-plox.user.js#L12397)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12402) | [12402](../youtube-playback-plox.user.js#L12402) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12402) | [12402](../youtube-playback-plox.user.js#L12402) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L12422) | [12422](../youtube-playback-plox.user.js#L12422) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L12442) | [12442](../youtube-playback-plox.user.js#L12442) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L12458) | [12458](../youtube-playback-plox.user.js#L12458) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L12495) | [12495](../youtube-playback-plox.user.js#L12495) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L12529) | [12529](../youtube-playback-plox.user.js#L12529) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L12530) | [12530](../youtube-playback-plox.user.js#L12530) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L12561) | [12561](../youtube-playback-plox.user.js#L12561) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L12617) | [12617](../youtube-playback-plox.user.js#L12617) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L12684) | [12684](../youtube-playback-plox.user.js#L12684) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12692) | [12692](../youtube-playback-plox.user.js#L12692) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L12699) | [12699](../youtube-playback-plox.user.js#L12699) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L12740) | [12740](../youtube-playback-plox.user.js#L12740) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L12780) | [12780](../youtube-playback-plox.user.js#L12780) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L12791) | [12791](../youtube-playback-plox.user.js#L12791) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L12807) | [12807](../youtube-playback-plox.user.js#L12807) |
| `fn` | [`clearPlayerCache`](../youtube-playback-plox.user.js#L12913) | [12913](../youtube-playback-plox.user.js#L12913) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L13127) | [13127](../youtube-playback-plox.user.js#L13127) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L13169) | [13169](../youtube-playback-plox.user.js#L13169) |

## [Processing Functions](../youtube-playback-plox.user.js#L13196)
> [Line 13196](../youtube-playback-plox.user.js#L13196)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L13222) | [13222](../youtube-playback-plox.user.js#L13222) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L13241) | [13241](../youtube-playback-plox.user.js#L13241) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L13251) | [13251](../youtube-playback-plox.user.js#L13251) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L13251) | [13251](../youtube-playback-plox.user.js#L13251) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L13266) | [13266](../youtube-playback-plox.user.js#L13266) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L13271) | [13271](../youtube-playback-plox.user.js#L13271) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L13278) | [13278](../youtube-playback-plox.user.js#L13278) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L13284) | [13284](../youtube-playback-plox.user.js#L13284) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L13302) | [13302](../youtube-playback-plox.user.js#L13302) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L13378) | [13378](../youtube-playback-plox.user.js#L13378) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L13427) | [13427](../youtube-playback-plox.user.js#L13427) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L13461) | [13461](../youtube-playback-plox.user.js#L13461) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L13491) | [13491](../youtube-playback-plox.user.js#L13491) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L13502) | [13502](../youtube-playback-plox.user.js#L13502) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L13514) | [13514](../youtube-playback-plox.user.js#L13514) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L13548) | [13548](../youtube-playback-plox.user.js#L13548) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L13619) | [13619](../youtube-playback-plox.user.js#L13619) |
| `fn` | [`handleSeekingForGradient`](../youtube-playback-plox.user.js#L13648) | [13648](../youtube-playback-plox.user.js#L13648) |
| `fn` | [`handleSeekedForGradient`](../youtube-playback-plox.user.js#L13657) | [13657](../youtube-playback-plox.user.js#L13657) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L13784) | [13784](../youtube-playback-plox.user.js#L13784) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L13853) | [13853](../youtube-playback-plox.user.js#L13853) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L14035) | [14035](../youtube-playback-plox.user.js#L14035) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L14148) | [14148](../youtube-playback-plox.user.js#L14148) |

## [PlaybackController](../youtube-playback-plox.user.js#L14298)
> [Line 14298](../youtube-playback-plox.user.js#L14298)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L14346) | [14346](../youtube-playback-plox.user.js#L14346) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L14362) | [14362](../youtube-playback-plox.user.js#L14362) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L14385) | [14385](../youtube-playback-plox.user.js#L14385) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L14391) | [14391](../youtube-playback-plox.user.js#L14391) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L14623) | [14623](../youtube-playback-plox.user.js#L14623) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L14750)
> [Line 14750](../youtube-playback-plox.user.js#L14750)

| Type | Name | Line |
|---|---|---|
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L14891) | [14891](../youtube-playback-plox.user.js#L14891) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L15291)
> [Line 15291](../youtube-playback-plox.user.js#L15291)

| Type | Name | Line |
|---|---|---|
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L15314) | [15314](../youtube-playback-plox.user.js#L15314) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L15390) | [15390](../youtube-playback-plox.user.js#L15390) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L15403) | [15403](../youtube-playback-plox.user.js#L15403) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L15411) | [15411](../youtube-playback-plox.user.js#L15411) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15431) | [15431](../youtube-playback-plox.user.js#L15431) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L15484)
> [Line 15484](../youtube-playback-plox.user.js#L15484)

| Type | Name | Line |
|---|---|---|
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15496) | [15496](../youtube-playback-plox.user.js#L15496) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L15543) | [15543](../youtube-playback-plox.user.js#L15543) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L15549) | [15549](../youtube-playback-plox.user.js#L15549) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L15557) | [15557](../youtube-playback-plox.user.js#L15557) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15572) | [15572](../youtube-playback-plox.user.js#L15572) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L15692) | [15692](../youtube-playback-plox.user.js#L15692) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L15770)
> [Line 15770](../youtube-playback-plox.user.js#L15770)

_No relevant functions or constants detected._

## [📁 Update Video List](../youtube-playback-plox.user.js#L15893)
> [Line 15893](../youtube-playback-plox.user.js#L15893)

| Type | Name | Line |
|---|---|---|
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15912) | [15912](../youtube-playback-plox.user.js#L15912) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15916) | [15916](../youtube-playback-plox.user.js#L15916) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L16100) | [16100](../youtube-playback-plox.user.js#L16100) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L16119) | [16119](../youtube-playback-plox.user.js#L16119) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L16245) | [16245](../youtube-playback-plox.user.js#L16245) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L16322) | [16322](../youtube-playback-plox.user.js#L16322) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L16486) | [16486](../youtube-playback-plox.user.js#L16486) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L16507) | [16507](../youtube-playback-plox.user.js#L16507) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L16558) | [16558](../youtube-playback-plox.user.js#L16558) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L16678)
> [Line 16678](../youtube-playback-plox.user.js#L16678)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L16681) | [16681](../youtube-playback-plox.user.js#L16681) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L16695) | [16695](../youtube-playback-plox.user.js#L16695) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L16706)
> [Line 16706](../youtube-playback-plox.user.js#L16706)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L16833) | [16833](../youtube-playback-plox.user.js#L16833) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L16843) | [16843](../youtube-playback-plox.user.js#L16843) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L16913) | [16913](../youtube-playback-plox.user.js#L16913) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L16925)
> [Line 16925](../youtube-playback-plox.user.js#L16925)

| Type | Name | Line |
|---|---|---|
| `fn` | [`deleteFromStorage`](../youtube-playback-plox.user.js#L17059) | [17059](../youtube-playback-plox.user.js#L17059) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L17064) | [17064](../youtube-playback-plox.user.js#L17064) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L17123) | [17123](../youtube-playback-plox.user.js#L17123) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L17171) | [17171](../youtube-playback-plox.user.js#L17171) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L17177) | [17177](../youtube-playback-plox.user.js#L17177) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L17194) | [17194](../youtube-playback-plox.user.js#L17194) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L17228) | [17228](../youtube-playback-plox.user.js#L17228) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L17272) | [17272](../youtube-playback-plox.user.js#L17272) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L17354) | [17354](../youtube-playback-plox.user.js#L17354) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L17360) | [17360](../youtube-playback-plox.user.js#L17360) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L17376) | [17376](../youtube-playback-plox.user.js#L17376) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L17386) | [17386](../youtube-playback-plox.user.js#L17386) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L17394) | [17394](../youtube-playback-plox.user.js#L17394) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L17399) | [17399](../youtube-playback-plox.user.js#L17399) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L17406) | [17406](../youtube-playback-plox.user.js#L17406) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L17409) | [17409](../youtube-playback-plox.user.js#L17409) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L17413) | [17413](../youtube-playback-plox.user.js#L17413) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L17459) | [17459](../youtube-playback-plox.user.js#L17459) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L17459) | [17459](../youtube-playback-plox.user.js#L17459) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L17473) | [17473](../youtube-playback-plox.user.js#L17473) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L17747) | [17747](../youtube-playback-plox.user.js#L17747) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L17795) | [17795](../youtube-playback-plox.user.js#L17795) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17796) | [17796](../youtube-playback-plox.user.js#L17796) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L17812) | [17812](../youtube-playback-plox.user.js#L17812) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17813) | [17813](../youtube-playback-plox.user.js#L17813) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L17862) | [17862](../youtube-playback-plox.user.js#L17862) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L18007) | [18007](../youtube-playback-plox.user.js#L18007) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L18021) | [18021](../youtube-playback-plox.user.js#L18021) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L18320) | [18320](../youtube-playback-plox.user.js#L18320) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L18419) | [18419](../youtube-playback-plox.user.js#L18419) |
| `fn` | [`scheduleHeightUpdate`](../youtube-playback-plox.user.js#L18479) | [18479](../youtube-playback-plox.user.js#L18479) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L18517) | [18517](../youtube-playback-plox.user.js#L18517) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L18765) | [18765](../youtube-playback-plox.user.js#L18765) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L18788) | [18788](../youtube-playback-plox.user.js#L18788) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L18789) | [18789](../youtube-playback-plox.user.js#L18789) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L18861)
> [Line 18861](../youtube-playback-plox.user.js#L18861)

_No relevant functions or constants detected._

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L19020)
> [Line 19020](../youtube-playback-plox.user.js#L19020)

_No relevant functions or constants detected._

## [🔄 Data Migration](../youtube-playback-plox.user.js#L19048)
> [Line 19048](../youtube-playback-plox.user.js#L19048)

| Type | Name | Line |
|---|---|---|
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L19105) | [19105](../youtube-playback-plox.user.js#L19105) |

## [🚀 Init](../youtube-playback-plox.user.js#L19449)
> [Line 19449](../youtube-playback-plox.user.js#L19449)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L19459) | [19459](../youtube-playback-plox.user.js#L19459) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L19481) | [19481](../youtube-playback-plox.user.js#L19481) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L19819) | [19819](../youtube-playback-plox.user.js#L19819) |

