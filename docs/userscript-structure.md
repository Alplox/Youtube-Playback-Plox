# Userscript Structure
> Auto-generated on 2026-08-11 · version 0.0.12-5
> **DO NOT EDIT MANUALLY** - regenerate with `node ./scripts/generate-structure.mjs`

---

## Sections index

1. [🔍 Logger System](#logger-system) - [line 138](../youtube-playback-plox.user.js#L138)
2. [🛡️ Initialization Guard (SPA Safety)](#initialization-guard-spa-safety) - [line 216](../youtube-playback-plox.user.js#L216)
3. [📦 Config](#config) - [line 286](../youtube-playback-plox.user.js#L286)
4. [📊 Global Constants](#global-constants) - [line 415](../youtube-playback-plox.user.js#L415)
5. [📊 Global Variables](#global-variables) - [line 452](../youtube-playback-plox.user.js#L452)
6. [🌐 Translations](#translations) - [line 488](../youtube-playback-plox.user.js#L488)
7. [🔧 Utils](#utils) - [line 927](../youtube-playback-plox.user.js#L927)
8. [🔧 Sanitize HTML](#sanitize-html) - [line 930](../youtube-playback-plox.user.js#L930)
9. [🔧 Is Visibly Displayed](#is-visibly-displayed) - [line 998](../youtube-playback-plox.user.js#L998)
10. [🔧 Format Time](#format-time) - [line 1022](../youtube-playback-plox.user.js#L1022)
11. [🔧 parseTimeToSeconds](#parsetimetoseconds) - [line 1064](../youtube-playback-plox.user.js#L1064)
12. [🔧 normalizeSeconds](#normalizeseconds) - [line 1112](../youtube-playback-plox.user.js#L1112)
13. [🔧 getUrlTimeParamSeconds](#geturltimeparamseconds) - [line 1138](../youtube-playback-plox.user.js#L1138)
14. [⏳ delay](#delay) - [line 1167](../youtube-playback-plox.user.js#L1167)
15. [🔧 setInnerHTML](#setinnerhtml) - [line 1175](../youtube-playback-plox.user.js#L1175)
16. [🔧 Create Element](#create-element) - [line 1237](../youtube-playback-plox.user.js#L1237)
17. [🔧 Debounce](#debounce) - [line 1374](../youtube-playback-plox.user.js#L1374)
18. [🔧 downloadBlobMobileSafe](#downloadblobmobilesafe) - [line 1398](../youtube-playback-plox.user.js#L1398)
19. [🗄️ Event Handlers store](#event-handlers-store) - [line 1468](../youtube-playback-plox.user.js#L1468)
20. [📝 Selector System](#selector-system) - [line 1551](../youtube-playback-plox.user.js#L1551)
21. [💾 Simple LRU Cache](#simple-lru-cache) - [line 1837](../youtube-playback-plox.user.js#L1837)
22. [⚙️ DOM Cache System](#dom-cache-system) - [line 1895](../youtube-playback-plox.user.js#L1895)
23. [🌐 Translation Functions](#translation-functions) - [line 2237](../youtube-playback-plox.user.js#L2237)
24. [🎨 Styles](#styles) - [line 2402](../youtube-playback-plox.user.js#L2402)
25. [🎨 Theme](#theme) - [line 5000](../youtube-playback-plox.user.js#L5000)
26. [🎨 SVG Icons](#svg-icons) - [line 5078](../youtube-playback-plox.user.js#L5078)
27. [🎨 Progress Bar Style](#progress-bar-style) - [line 5240](../youtube-playback-plox.user.js#L5240)
28. [💾 Storage + Settings](#storage-settings) - [line 5747](../youtube-playback-plox.user.js#L5747)
29. [📢 Ad Caches](#ad-caches) - [line 6365](../youtube-playback-plox.user.js#L6365)
30. [📢 Ad Detector](#ad-detector) - [line 6385](../youtube-playback-plox.user.js#L6385)
31. [🎯 VirtualScroller](#virtualscroller) - [line 6562](../youtube-playback-plox.user.js#L6562)
32. [📤 Import/Export JSON](#importexport-json) - [line 6973](../youtube-playback-plox.user.js#L6973)
33. [☁️ GitHub Backup](#github-backup) - [line 7160](../youtube-playback-plox.user.js#L7160)
34. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 7547](../youtube-playback-plox.user.js#L7547)
35. [🔄 Normalize Video Data](#normalize-video-data) - [line 7725](../youtube-playback-plox.user.js#L7725)
36. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 7807](../youtube-playback-plox.user.js#L7807)
37. [Parse FreeTube DB](#parse-freetube-db) - [line 7898](../youtube-playback-plox.user.js#L7898)
38. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 7991](../youtube-playback-plox.user.js#L7991)
39. [⬆ Export To FreeTube](#export-to-freetube) - [line 8022](../youtube-playback-plox.user.js#L8022)
40. [⬇ Import From FreeTube](#import-from-freetube) - [line 8069](../youtube-playback-plox.user.js#L8069)
41. [🔄 Insert Completion Event](#insert-completion-event) - [line 8127](../youtube-playback-plox.user.js#L8127)
42. [💾 Save Video Generic](#save-video-generic) - [line 8184](../youtube-playback-plox.user.js#L8184)
43. [📺 Helpers](#helpers) - [line 8360](../youtube-playback-plox.user.js#L8360)
44. [📺 Gets saved video data](#gets-saved-video-data) - [line 8363](../youtube-playback-plox.user.js#L8363)
45. [📺 Get Player Video ID](#get-player-video-id) - [line 8413](../youtube-playback-plox.user.js#L8413)
46. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 8492](../youtube-playback-plox.user.js#L8492)
47. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 8693](../youtube-playback-plox.user.js#L8693)
48. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 8899](../youtube-playback-plox.user.js#L8899)
49. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 8921](../youtube-playback-plox.user.js#L8921)
50. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 8949](../youtube-playback-plox.user.js#L8949)
51. [📺 get Playlist Name](#get-playlist-name) - [line 8994](../youtube-playback-plox.user.js#L8994)
52. [🕒 Time Display](#time-display) - [line 9269](../youtube-playback-plox.user.js#L9269)
53. [🖼️ Display Button Helpers](#display-button-helpers) - [line 9305](../youtube-playback-plox.user.js#L9305)
54. [🍞 Toasts](#toasts) - [line 10084](../youtube-playback-plox.user.js#L10084)
55. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 10260](../youtube-playback-plox.user.js#L10260)
56. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 10303](../youtube-playback-plox.user.js#L10303)
57. [⚙️ Settings UI](#settings-ui) - [line 10621](../youtube-playback-plox.user.js#L10621)
58. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 11016](../youtube-playback-plox.user.js#L11016)
59. [🎵 Video Selection](#video-selection) - [line 11074](../youtube-playback-plox.user.js#L11074)
60. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 11880](../youtube-playback-plox.user.js#L11880)
61. [📡 Video Observer Manager](#video-observer-manager) - [line 12140](../youtube-playback-plox.user.js#L12140)
62. [Processing Functions](#processing-functions) - [line 12924](../youtube-playback-plox.user.js#L12924)
63. [PlaybackController](#playbackcontroller) - [line 14002](../youtube-playback-plox.user.js#L14002)
64. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 14436](../youtube-playback-plox.user.js#L14436)
65. [📂 Sort UI](#sort-ui) - [line 14967](../youtube-playback-plox.user.js#L14967)
66. [📂 Filters UI](#filters-ui) - [line 15156](../youtube-playback-plox.user.js#L15156)
67. [📂 Video List UI](#video-list-ui) - [line 15442](../youtube-playback-plox.user.js#L15442)
68. [📁 Update Video List](#update-video-list) - [line 15565](../youtube-playback-plox.user.js#L15565)
69. [🔘 Floating Button](#floating-button) - [line 16350](../youtube-playback-plox.user.js#L16350)
70. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 16378](../youtube-playback-plox.user.js#L16378)
71. [📂 Video Entry](#video-entry) - [line 16597](../youtube-playback-plox.user.js#L16597)
72. [🗑️ Clear All Data](#clear-all-data) - [line 18533](../youtube-playback-plox.user.js#L18533)
73. [⚙️ Menu Commands](#menu-commands) - [line 18685](../youtube-playback-plox.user.js#L18685)
74. [🔄 Data Migration](#data-migration) - [line 18712](../youtube-playback-plox.user.js#L18712)
75. [🚀 Init](#init) - [line 19102](../youtube-playback-plox.user.js#L19102)

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

## [📦 Config](../youtube-playback-plox.user.js#L286)
> [Line 286](../youtube-playback-plox.user.js#L286)

_No relevant functions or constants detected._

## [📊 Global Constants](../youtube-playback-plox.user.js#L415)
> [Line 415](../youtube-playback-plox.user.js#L415)

| Type | Name | Line |
|---|---|---|
| `module` | [`TYPE_CONFIG`](../youtube-playback-plox.user.js#L426) | [426](../youtube-playback-plox.user.js#L426) |

## [📊 Global Variables](../youtube-playback-plox.user.js#L452)
> [Line 452](../youtube-playback-plox.user.js#L452)

_No relevant functions or constants detected._

## [🌐 Translations](../youtube-playback-plox.user.js#L488)
> [Line 488](../youtube-playback-plox.user.js#L488)

| Type | Name | Line |
|---|---|---|
| `fn` | [`fetchUrl`](../youtube-playback-plox.user.js#L836) | [836](../youtube-playback-plox.user.js#L836) |

## [🔧 Utils](../youtube-playback-plox.user.js#L927)
> [Line 927](../youtube-playback-plox.user.js#L927)

_No relevant functions or constants detected._

## [🔧 Sanitize HTML](../youtube-playback-plox.user.js#L930)
> [Line 930](../youtube-playback-plox.user.js#L930)

| Type | Name | Line |
|---|---|---|
| `fn` | [`sanitizeHTML`](../youtube-playback-plox.user.js#L940) | [940](../youtube-playback-plox.user.js#L940) |
| `module` | [`sanitizeHTML`](../youtube-playback-plox.user.js#L940) | [940](../youtube-playback-plox.user.js#L940) |

## [🔧 Is Visibly Displayed](../youtube-playback-plox.user.js#L998)
> [Line 998](../youtube-playback-plox.user.js#L998)

_No relevant functions or constants detected._

## [🔧 Format Time](../youtube-playback-plox.user.js#L1022)
> [Line 1022](../youtube-playback-plox.user.js#L1022)

| Type | Name | Line |
|---|---|---|
| `fn` | [`formatTime`](../youtube-playback-plox.user.js#L1044) | [1044](../youtube-playback-plox.user.js#L1044) |

## [🔧 parseTimeToSeconds](../youtube-playback-plox.user.js#L1064)
> [Line 1064](../youtube-playback-plox.user.js#L1064)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseTimeToSeconds`](../youtube-playback-plox.user.js#L1087) | [1087](../youtube-playback-plox.user.js#L1087) |

## [🔧 normalizeSeconds](../youtube-playback-plox.user.js#L1112)
> [Line 1112](../youtube-playback-plox.user.js#L1112)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeSeconds`](../youtube-playback-plox.user.js#L1131) | [1131](../youtube-playback-plox.user.js#L1131) |

## [🔧 getUrlTimeParamSeconds](../youtube-playback-plox.user.js#L1138)
> [Line 1138](../youtube-playback-plox.user.js#L1138)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getUrlTimeParamSeconds`](../youtube-playback-plox.user.js#L1146) | [1146](../youtube-playback-plox.user.js#L1146) |

## [⏳ delay](../youtube-playback-plox.user.js#L1167)
> [Line 1167](../youtube-playback-plox.user.js#L1167)

| Type | Name | Line |
|---|---|---|
| `fn` | [`delay`](../youtube-playback-plox.user.js#L1173) | [1173](../youtube-playback-plox.user.js#L1173) |

## [🔧 setInnerHTML](../youtube-playback-plox.user.js#L1175)
> [Line 1175](../youtube-playback-plox.user.js#L1175)

_No relevant functions or constants detected._

## [🔧 Create Element](../youtube-playback-plox.user.js#L1237)
> [Line 1237](../youtube-playback-plox.user.js#L1237)

| Type | Name | Line |
|---|---|---|
| `fn` | [`append`](../youtube-playback-plox.user.js#L1317) | [1317](../youtube-playback-plox.user.js#L1317) |
| `fn` | [`clamp`](../youtube-playback-plox.user.js#L1347) | [1347](../youtube-playback-plox.user.js#L1347) |

## [🔧 Debounce](../youtube-playback-plox.user.js#L1374)
> [Line 1374](../youtube-playback-plox.user.js#L1374)

| Type | Name | Line |
|---|---|---|
| `fn` | [`debounce`](../youtube-playback-plox.user.js#L1384) | [1384](../youtube-playback-plox.user.js#L1384) |

## [🔧 downloadBlobMobileSafe](../youtube-playback-plox.user.js#L1398)
> [Line 1398](../youtube-playback-plox.user.js#L1398)

| Type | Name | Line |
|---|---|---|
| `fn` | [`downloadBlobMobileSafe`](../youtube-playback-plox.user.js#L1406) | [1406](../youtube-playback-plox.user.js#L1406) |

## [🗄️ Event Handlers store](../youtube-playback-plox.user.js#L1468)
> [Line 1468](../youtube-playback-plox.user.js#L1468)

| Type | Name | Line |
|---|---|---|
| `fn` | [`dispose`](../youtube-playback-plox.user.js#L1545) | [1545](../youtube-playback-plox.user.js#L1545) |

## [📝 Selector System](../youtube-playback-plox.user.js#L1551)
> [Line 1551](../youtube-playback-plox.user.js#L1551)

| Type | Name | Line |
|---|---|---|
| `module` | [`PREFIX`](../youtube-playback-plox.user.js#L1635) | [1635](../youtube-playback-plox.user.js#L1635) |
| `fn` | [`createSelectorSystem`](../youtube-playback-plox.user.js#L1660) | [1660](../youtube-playback-plox.user.js#L1660) |

## [💾 Simple LRU Cache](../youtube-playback-plox.user.js#L1837)
> [Line 1837](../youtube-playback-plox.user.js#L1837)

_No relevant functions or constants detected._

## [⚙️ DOM Cache System](../youtube-playback-plox.user.js#L1895)
> [Line 1895](../youtube-playback-plox.user.js#L1895)

| Type | Name | Line |
|---|---|---|
| `fn` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1912) | [1912](../youtube-playback-plox.user.js#L1912) |
| `module` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1912) | [1912](../youtube-playback-plox.user.js#L1912) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L1937) | [1937](../youtube-playback-plox.user.js#L1937) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L1961) | [1961](../youtube-playback-plox.user.js#L1961) |

## [🌐 Translation Functions](../youtube-playback-plox.user.js#L2237)
> [Line 2237](../youtube-playback-plox.user.js#L2237)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normParams`](../youtube-playback-plox.user.js#L2261) | [2261](../youtube-playback-plox.user.js#L2261) |
| `fn` | [`candidates`](../youtube-playback-plox.user.js#L2359) | [2359](../youtube-playback-plox.user.js#L2359) |
| `fn` | [`normalized`](../youtube-playback-plox.user.js#L2378) | [2378](../youtube-playback-plox.user.js#L2378) |

## [🎨 Styles](../youtube-playback-plox.user.js#L2402)
> [Line 2402](../youtube-playback-plox.user.js#L2402)

_No relevant functions or constants detected._

## [🎨 Theme](../youtube-playback-plox.user.js#L5000)
> [Line 5000](../youtube-playback-plox.user.js#L5000)

_No relevant functions or constants detected._

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L5078)
> [Line 5078](../youtube-playback-plox.user.js#L5078)

_No relevant functions or constants detected._

## [🎨 Progress Bar Style](../youtube-playback-plox.user.js#L5240)
> [Line 5240](../youtube-playback-plox.user.js#L5240)

| Type | Name | Line |
|---|---|---|
| `fn` | [`clearAllProgressGradientState`](../youtube-playback-plox.user.js#L5252) | [5252](../youtube-playback-plox.user.js#L5252) |
| `fn` | [`syncProgressGradientStateForContainer`](../youtube-playback-plox.user.js#L5268) | [5268](../youtube-playback-plox.user.js#L5268) |
| `fn` | [`resolvePlayerRootForGradient`](../youtube-playback-plox.user.js#L5291) | [5291](../youtube-playback-plox.user.js#L5291) |
| `fn` | [`clearProgressColorFromPlayerRoot`](../youtube-playback-plox.user.js#L5302) | [5302](../youtube-playback-plox.user.js#L5302) |
| `fn` | [`applyProgressColorToPlayerRoot`](../youtube-playback-plox.user.js#L5322) | [5322](../youtube-playback-plox.user.js#L5322) |
| `fn` | [`applyProgressColorToShortsSurfaces`](../youtube-playback-plox.user.js#L5346) | [5346](../youtube-playback-plox.user.js#L5346) |
| `fn` | [`repaintWatchProgressBarFromActivePlayer`](../youtube-playback-plox.user.js#L5366) | [5366](../youtube-playback-plox.user.js#L5366) |
| `fn` | [`scheduleProgressBarGradientRepaint`](../youtube-playback-plox.user.js#L5387) | [5387](../youtube-playback-plox.user.js#L5387) |
| `fn` | [`paint`](../youtube-playback-plox.user.js#L5388) | [5388](../youtube-playback-plox.user.js#L5388) |
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L5724) | [5724](../youtube-playback-plox.user.js#L5724) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L5747)
> [Line 5747](../youtube-playback-plox.user.js#L5747)

| Type | Name | Line |
|---|---|---|
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L5757) | [5757](../youtube-playback-plox.user.js#L5757) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L5757) | [5757](../youtube-playback-plox.user.js#L5757) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5903) | [5903](../youtube-playback-plox.user.js#L5903) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5903) | [5903](../youtube-playback-plox.user.js#L5903) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L6071) | [6071](../youtube-playback-plox.user.js#L6071) |
| `fn` | [`prefixKey`](../youtube-playback-plox.user.js#L6080) | [6080](../youtube-playback-plox.user.js#L6080) |
| `fn` | [`stripPrefix`](../youtube-playback-plox.user.js#L6081) | [6081](../youtube-playback-plox.user.js#L6081) |
| `fn` | [`hasPrefix`](../youtube-playback-plox.user.js#L6082) | [6082](../youtube-playback-plox.user.js#L6082) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L6194) | [6194](../youtube-playback-plox.user.js#L6194) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L6212) | [6212](../youtube-playback-plox.user.js#L6212) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L6233) | [6233](../youtube-playback-plox.user.js#L6233) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6246) | [6246](../youtube-playback-plox.user.js#L6246) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6310) | [6310](../youtube-playback-plox.user.js#L6310) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6328) | [6328](../youtube-playback-plox.user.js#L6328) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L6336) | [6336](../youtube-playback-plox.user.js#L6336) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L6354) | [6354](../youtube-playback-plox.user.js#L6354) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L6365)
> [Line 6365](../youtube-playback-plox.user.js#L6365)

_No relevant functions or constants detected._

## [📢 Ad Detector](../youtube-playback-plox.user.js#L6385)
> [Line 6385](../youtube-playback-plox.user.js#L6385)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L6387) | [6387](../youtube-playback-plox.user.js#L6387) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L6438) | [6438](../youtube-playback-plox.user.js#L6438) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L6562)
> [Line 6562](../youtube-playback-plox.user.js#L6562)

_No relevant functions or constants detected._

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L6973)
> [Line 6973](../youtube-playback-plox.user.js#L6973)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L6980) | [6980](../youtube-playback-plox.user.js#L6980) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L6983) | [6983](../youtube-playback-plox.user.js#L6983) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L7011) | [7011](../youtube-playback-plox.user.js#L7011) |
| `fn` | [`copyExportDataToClipboard`](../youtube-playback-plox.user.js#L7062) | [7062](../youtube-playback-plox.user.js#L7062) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L7105) | [7105](../youtube-playback-plox.user.js#L7105) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L7160)
> [Line 7160](../youtube-playback-plox.user.js#L7160)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getGitHubErrorMsg`](../youtube-playback-plox.user.js#L7163) | [7163](../youtube-playback-plox.user.js#L7163) |
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L7170) | [7170](../youtube-playback-plox.user.js#L7170) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L7198) | [7198](../youtube-playback-plox.user.js#L7198) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7199) | [7199](../youtube-playback-plox.user.js#L7199) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L7261) | [7261](../youtube-playback-plox.user.js#L7261) |
| `fn` | [`cleanOwner`](../youtube-playback-plox.user.js#L7272) | [7272](../youtube-playback-plox.user.js#L7272) |
| `fn` | [`cleanName`](../youtube-playback-plox.user.js#L7273) | [7273](../youtube-playback-plox.user.js#L7273) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7274) | [7274](../youtube-playback-plox.user.js#L7274) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L7410) | [7410](../youtube-playback-plox.user.js#L7410) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7422) | [7422](../youtube-playback-plox.user.js#L7422) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L7488) | [7488](../youtube-playback-plox.user.js#L7488) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L7518) | [7518](../youtube-playback-plox.user.js#L7518) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L7547)
> [Line 7547](../youtube-playback-plox.user.js#L7547)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L7548) | [7548](../youtube-playback-plox.user.js#L7548) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L7587) | [7587](../youtube-playback-plox.user.js#L7587) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L7725)
> [Line 7725](../youtube-playback-plox.user.js#L7725)

_No relevant functions or constants detected._

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L7807)
> [Line 7807](../youtube-playback-plox.user.js#L7807)

_No relevant functions or constants detected._

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L7898)
> [Line 7898](../youtube-playback-plox.user.js#L7898)

_No relevant functions or constants detected._

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L7991)
> [Line 7991](../youtube-playback-plox.user.js#L7991)

| Type | Name | Line |
|---|---|---|
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L8010) | [8010](../youtube-playback-plox.user.js#L8010) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L8022)
> [Line 8022](../youtube-playback-plox.user.js#L8022)

_No relevant functions or constants detected._

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L8069)
> [Line 8069](../youtube-playback-plox.user.js#L8069)

_No relevant functions or constants detected._

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L8127)
> [Line 8127](../youtube-playback-plox.user.js#L8127)

| Type | Name | Line |
|---|---|---|
| `fn` | [`base`](../youtube-playback-plox.user.js#L8136) | [8136](../youtube-playback-plox.user.js#L8136) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L8173) | [8173](../youtube-playback-plox.user.js#L8173) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L8184)
> [Line 8184](../youtube-playback-plox.user.js#L8184)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8239) | [8239](../youtube-playback-plox.user.js#L8239) |

## [📺 Helpers](../youtube-playback-plox.user.js#L8360)
> [Line 8360](../youtube-playback-plox.user.js#L8360)

_No relevant functions or constants detected._

## [📺 Gets saved video data](../youtube-playback-plox.user.js#L8363)
> [Line 8363](../youtube-playback-plox.user.js#L8363)

| Type | Name | Line |
|---|---|---|
| `fn` | [`keys`](../youtube-playback-plox.user.js#L8389) | [8389](../youtube-playback-plox.user.js#L8389) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L8413)
> [Line 8413](../youtube-playback-plox.user.js#L8413)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L8449) | [8449](../youtube-playback-plox.user.js#L8449) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L8492)
> [Line 8492](../youtube-playback-plox.user.js#L8492)

_No relevant functions or constants detected._

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L8693)
> [Line 8693](../youtube-playback-plox.user.js#L8693)

| Type | Name | Line |
|---|---|---|
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L8790) | [8790](../youtube-playback-plox.user.js#L8790) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L8899)
> [Line 8899](../youtube-playback-plox.user.js#L8899)

_No relevant functions or constants detected._

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L8921)
> [Line 8921](../youtube-playback-plox.user.js#L8921)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L8949)
> [Line 8949](../youtube-playback-plox.user.js#L8949)

_No relevant functions or constants detected._

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L8994)
> [Line 8994](../youtube-playback-plox.user.js#L8994)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L9015) | [9015](../youtube-playback-plox.user.js#L9015) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L9157) | [9157](../youtube-playback-plox.user.js#L9157) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L9242) | [9242](../youtube-playback-plox.user.js#L9242) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L9269)
> [Line 9269](../youtube-playback-plox.user.js#L9269)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L9295) | [9295](../youtube-playback-plox.user.js#L9295) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L9305)
> [Line 9305](../youtube-playback-plox.user.js#L9305)

| Type | Name | Line |
|---|---|---|
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9587) | [9587](../youtube-playback-plox.user.js#L9587) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9587) | [9587](../youtube-playback-plox.user.js#L9587) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L9599) | [9599](../youtube-playback-plox.user.js#L9599) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L9609) | [9609](../youtube-playback-plox.user.js#L9609) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L9617) | [9617](../youtube-playback-plox.user.js#L9617) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L9625) | [9625](../youtube-playback-plox.user.js#L9625) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L9648) | [9648](../youtube-playback-plox.user.js#L9648) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L9660) | [9660](../youtube-playback-plox.user.js#L9660) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L9663) | [9663](../youtube-playback-plox.user.js#L9663) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L9673) | [9673](../youtube-playback-plox.user.js#L9673) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L9678) | [9678](../youtube-playback-plox.user.js#L9678) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L9701) | [9701](../youtube-playback-plox.user.js#L9701) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L9720) | [9720](../youtube-playback-plox.user.js#L9720) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L9728) | [9728](../youtube-playback-plox.user.js#L9728) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L9772) | [9772](../youtube-playback-plox.user.js#L9772) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L9827) | [9827](../youtube-playback-plox.user.js#L9827) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L9886) | [9886](../youtube-playback-plox.user.js#L9886) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L9983) | [9983](../youtube-playback-plox.user.js#L9983) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L9998) | [9998](../youtube-playback-plox.user.js#L9998) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L10002) | [10002](../youtube-playback-plox.user.js#L10002) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L10009) | [10009](../youtube-playback-plox.user.js#L10009) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L10027) | [10027](../youtube-playback-plox.user.js#L10027) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L10084)
> [Line 10084](../youtube-playback-plox.user.js#L10084)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L10120) | [10120](../youtube-playback-plox.user.js#L10120) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L10260)
> [Line 10260](../youtube-playback-plox.user.js#L10260)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L10263) | [10263](../youtube-playback-plox.user.js#L10263) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L10303)
> [Line 10303](../youtube-playback-plox.user.js#L10303)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L10343) | [10343](../youtube-playback-plox.user.js#L10343) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L10349) | [10349](../youtube-playback-plox.user.js#L10349) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L10357) | [10357](../youtube-playback-plox.user.js#L10357) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L10403) | [10403](../youtube-playback-plox.user.js#L10403) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L10407) | [10407](../youtube-playback-plox.user.js#L10407) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L10410) | [10410](../youtube-playback-plox.user.js#L10410) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L10426) | [10426](../youtube-playback-plox.user.js#L10426) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L10435) | [10435](../youtube-playback-plox.user.js#L10435) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L10465) | [10465](../youtube-playback-plox.user.js#L10465) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L10479) | [10479](../youtube-playback-plox.user.js#L10479) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L10483) | [10483](../youtube-playback-plox.user.js#L10483) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L10621)
> [Line 10621](../youtube-playback-plox.user.js#L10621)

| Type | Name | Line |
|---|---|---|
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L10641) | [10641](../youtube-playback-plox.user.js#L10641) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L10725) | [10725](../youtube-playback-plox.user.js#L10725) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10806) | [10806](../youtube-playback-plox.user.js#L10806) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10807) | [10807](../youtube-playback-plox.user.js#L10807) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10887) | [10887](../youtube-playback-plox.user.js#L10887) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10888) | [10888](../youtube-playback-plox.user.js#L10888) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L11016)
> [Line 11016](../youtube-playback-plox.user.js#L11016)

_No relevant functions or constants detected._

## [🎵 Video Selection](../youtube-playback-plox.user.js#L11074)
> [Line 11074](../youtube-playback-plox.user.js#L11074)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11164) | [11164](../youtube-playback-plox.user.js#L11164) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11171) | [11171](../youtube-playback-plox.user.js#L11171) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L11256) | [11256](../youtube-playback-plox.user.js#L11256) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L11260) | [11260](../youtube-playback-plox.user.js#L11260) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L11269) | [11269](../youtube-playback-plox.user.js#L11269) |
| `fn` | [`closeImportMenu`](../youtube-playback-plox.user.js#L11348) | [11348](../youtube-playback-plox.user.js#L11348) |
| `fn` | [`onImportOutsideClick`](../youtube-playback-plox.user.js#L11357) | [11357](../youtube-playback-plox.user.js#L11357) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L11646) | [11646](../youtube-playback-plox.user.js#L11646) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L11793) | [11793](../youtube-playback-plox.user.js#L11793) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L11880)
> [Line 11880](../youtube-playback-plox.user.js#L11880)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11886) | [11886](../youtube-playback-plox.user.js#L11886) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11886) | [11886](../youtube-playback-plox.user.js#L11886) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L11887) | [11887](../youtube-playback-plox.user.js#L11887) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L11896) | [11896](../youtube-playback-plox.user.js#L11896) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L11901) | [11901](../youtube-playback-plox.user.js#L11901) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L11912) | [11912](../youtube-playback-plox.user.js#L11912) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L11929) | [11929](../youtube-playback-plox.user.js#L11929) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L11963) | [11963](../youtube-playback-plox.user.js#L11963) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L11988) | [11988](../youtube-playback-plox.user.js#L11988) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L11990) | [11990](../youtube-playback-plox.user.js#L11990) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L12009) | [12009](../youtube-playback-plox.user.js#L12009) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L12009) | [12009](../youtube-playback-plox.user.js#L12009) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L12011) | [12011](../youtube-playback-plox.user.js#L12011) |
| `fn` | [`shouldDropVideoEvent`](../youtube-playback-plox.user.js#L12023) | [12023](../youtube-playback-plox.user.js#L12023) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12032) | [12032](../youtube-playback-plox.user.js#L12032) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12032) | [12032](../youtube-playback-plox.user.js#L12032) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L12043) | [12043](../youtube-playback-plox.user.js#L12043) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L12048) | [12048](../youtube-playback-plox.user.js#L12048) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L12053) | [12053](../youtube-playback-plox.user.js#L12053) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L12065) | [12065](../youtube-playback-plox.user.js#L12065) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12082) | [12082](../youtube-playback-plox.user.js#L12082) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12082) | [12082](../youtube-playback-plox.user.js#L12082) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L12084) | [12084](../youtube-playback-plox.user.js#L12084) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L12092) | [12092](../youtube-playback-plox.user.js#L12092) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L12140)
> [Line 12140](../youtube-playback-plox.user.js#L12140)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12145) | [12145](../youtube-playback-plox.user.js#L12145) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12145) | [12145](../youtube-playback-plox.user.js#L12145) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L12165) | [12165](../youtube-playback-plox.user.js#L12165) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L12180) | [12180](../youtube-playback-plox.user.js#L12180) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L12196) | [12196](../youtube-playback-plox.user.js#L12196) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L12233) | [12233](../youtube-playback-plox.user.js#L12233) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L12267) | [12267](../youtube-playback-plox.user.js#L12267) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L12268) | [12268](../youtube-playback-plox.user.js#L12268) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L12299) | [12299](../youtube-playback-plox.user.js#L12299) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L12355) | [12355](../youtube-playback-plox.user.js#L12355) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L12422) | [12422](../youtube-playback-plox.user.js#L12422) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12430) | [12430](../youtube-playback-plox.user.js#L12430) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L12437) | [12437](../youtube-playback-plox.user.js#L12437) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L12475) | [12475](../youtube-playback-plox.user.js#L12475) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L12515) | [12515](../youtube-playback-plox.user.js#L12515) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L12526) | [12526](../youtube-playback-plox.user.js#L12526) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L12542) | [12542](../youtube-playback-plox.user.js#L12542) |
| `fn` | [`clearPlayerCache`](../youtube-playback-plox.user.js#L12648) | [12648](../youtube-playback-plox.user.js#L12648) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12862) | [12862](../youtube-playback-plox.user.js#L12862) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L12904) | [12904](../youtube-playback-plox.user.js#L12904) |

## [Processing Functions](../youtube-playback-plox.user.js#L12924)
> [Line 12924](../youtube-playback-plox.user.js#L12924)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L12950) | [12950](../youtube-playback-plox.user.js#L12950) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L12969) | [12969](../youtube-playback-plox.user.js#L12969) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12979) | [12979](../youtube-playback-plox.user.js#L12979) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12979) | [12979](../youtube-playback-plox.user.js#L12979) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L12994) | [12994](../youtube-playback-plox.user.js#L12994) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L12999) | [12999](../youtube-playback-plox.user.js#L12999) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L13006) | [13006](../youtube-playback-plox.user.js#L13006) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L13012) | [13012](../youtube-playback-plox.user.js#L13012) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L13030) | [13030](../youtube-playback-plox.user.js#L13030) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L13102) | [13102](../youtube-playback-plox.user.js#L13102) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L13135) | [13135](../youtube-playback-plox.user.js#L13135) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L13168) | [13168](../youtube-playback-plox.user.js#L13168) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L13198) | [13198](../youtube-playback-plox.user.js#L13198) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L13209) | [13209](../youtube-playback-plox.user.js#L13209) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L13221) | [13221](../youtube-playback-plox.user.js#L13221) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L13255) | [13255](../youtube-playback-plox.user.js#L13255) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L13326) | [13326](../youtube-playback-plox.user.js#L13326) |
| `fn` | [`handleSeekingForGradient`](../youtube-playback-plox.user.js#L13355) | [13355](../youtube-playback-plox.user.js#L13355) |
| `fn` | [`handleSeekedForGradient`](../youtube-playback-plox.user.js#L13364) | [13364](../youtube-playback-plox.user.js#L13364) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L13491) | [13491](../youtube-playback-plox.user.js#L13491) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L13560) | [13560](../youtube-playback-plox.user.js#L13560) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L13739) | [13739](../youtube-playback-plox.user.js#L13739) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L13852) | [13852](../youtube-playback-plox.user.js#L13852) |

## [PlaybackController](../youtube-playback-plox.user.js#L14002)
> [Line 14002](../youtube-playback-plox.user.js#L14002)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L14050) | [14050](../youtube-playback-plox.user.js#L14050) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L14066) | [14066](../youtube-playback-plox.user.js#L14066) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L14089) | [14089](../youtube-playback-plox.user.js#L14089) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L14095) | [14095](../youtube-playback-plox.user.js#L14095) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L14319) | [14319](../youtube-playback-plox.user.js#L14319) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L14436)
> [Line 14436](../youtube-playback-plox.user.js#L14436)

| Type | Name | Line |
|---|---|---|
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L14567) | [14567](../youtube-playback-plox.user.js#L14567) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L14967)
> [Line 14967](../youtube-playback-plox.user.js#L14967)

| Type | Name | Line |
|---|---|---|
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L14990) | [14990](../youtube-playback-plox.user.js#L14990) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L15066) | [15066](../youtube-playback-plox.user.js#L15066) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L15075) | [15075](../youtube-playback-plox.user.js#L15075) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L15083) | [15083](../youtube-playback-plox.user.js#L15083) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15103) | [15103](../youtube-playback-plox.user.js#L15103) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L15156)
> [Line 15156](../youtube-playback-plox.user.js#L15156)

| Type | Name | Line |
|---|---|---|
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15168) | [15168](../youtube-playback-plox.user.js#L15168) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L15215) | [15215](../youtube-playback-plox.user.js#L15215) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L15221) | [15221](../youtube-playback-plox.user.js#L15221) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L15229) | [15229](../youtube-playback-plox.user.js#L15229) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15244) | [15244](../youtube-playback-plox.user.js#L15244) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L15364) | [15364](../youtube-playback-plox.user.js#L15364) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L15442)
> [Line 15442](../youtube-playback-plox.user.js#L15442)

_No relevant functions or constants detected._

## [📁 Update Video List](../youtube-playback-plox.user.js#L15565)
> [Line 15565](../youtube-playback-plox.user.js#L15565)

| Type | Name | Line |
|---|---|---|
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15584) | [15584](../youtube-playback-plox.user.js#L15584) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15588) | [15588](../youtube-playback-plox.user.js#L15588) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15772) | [15772](../youtube-playback-plox.user.js#L15772) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L15791) | [15791](../youtube-playback-plox.user.js#L15791) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L15917) | [15917](../youtube-playback-plox.user.js#L15917) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15994) | [15994](../youtube-playback-plox.user.js#L15994) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L16158) | [16158](../youtube-playback-plox.user.js#L16158) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L16179) | [16179](../youtube-playback-plox.user.js#L16179) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L16230) | [16230](../youtube-playback-plox.user.js#L16230) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L16350)
> [Line 16350](../youtube-playback-plox.user.js#L16350)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L16353) | [16353](../youtube-playback-plox.user.js#L16353) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L16367) | [16367](../youtube-playback-plox.user.js#L16367) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L16378)
> [Line 16378](../youtube-playback-plox.user.js#L16378)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L16505) | [16505](../youtube-playback-plox.user.js#L16505) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L16515) | [16515](../youtube-playback-plox.user.js#L16515) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L16585) | [16585](../youtube-playback-plox.user.js#L16585) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L16597)
> [Line 16597](../youtube-playback-plox.user.js#L16597)

| Type | Name | Line |
|---|---|---|
| `fn` | [`deleteFromStorage`](../youtube-playback-plox.user.js#L16731) | [16731](../youtube-playback-plox.user.js#L16731) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L16736) | [16736](../youtube-playback-plox.user.js#L16736) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L16795) | [16795](../youtube-playback-plox.user.js#L16795) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L16843) | [16843](../youtube-playback-plox.user.js#L16843) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L16849) | [16849](../youtube-playback-plox.user.js#L16849) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L16866) | [16866](../youtube-playback-plox.user.js#L16866) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L16900) | [16900](../youtube-playback-plox.user.js#L16900) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L16944) | [16944](../youtube-playback-plox.user.js#L16944) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L17026) | [17026](../youtube-playback-plox.user.js#L17026) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L17032) | [17032](../youtube-playback-plox.user.js#L17032) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L17048) | [17048](../youtube-playback-plox.user.js#L17048) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L17058) | [17058](../youtube-playback-plox.user.js#L17058) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L17066) | [17066](../youtube-playback-plox.user.js#L17066) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L17071) | [17071](../youtube-playback-plox.user.js#L17071) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L17078) | [17078](../youtube-playback-plox.user.js#L17078) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L17081) | [17081](../youtube-playback-plox.user.js#L17081) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L17085) | [17085](../youtube-playback-plox.user.js#L17085) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L17131) | [17131](../youtube-playback-plox.user.js#L17131) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L17131) | [17131](../youtube-playback-plox.user.js#L17131) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L17145) | [17145](../youtube-playback-plox.user.js#L17145) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L17419) | [17419](../youtube-playback-plox.user.js#L17419) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L17467) | [17467](../youtube-playback-plox.user.js#L17467) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17468) | [17468](../youtube-playback-plox.user.js#L17468) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L17484) | [17484](../youtube-playback-plox.user.js#L17484) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17485) | [17485](../youtube-playback-plox.user.js#L17485) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L17534) | [17534](../youtube-playback-plox.user.js#L17534) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L17679) | [17679](../youtube-playback-plox.user.js#L17679) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L17693) | [17693](../youtube-playback-plox.user.js#L17693) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L17992) | [17992](../youtube-playback-plox.user.js#L17992) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L18091) | [18091](../youtube-playback-plox.user.js#L18091) |
| `fn` | [`scheduleHeightUpdate`](../youtube-playback-plox.user.js#L18151) | [18151](../youtube-playback-plox.user.js#L18151) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L18189) | [18189](../youtube-playback-plox.user.js#L18189) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L18437) | [18437](../youtube-playback-plox.user.js#L18437) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L18460) | [18460](../youtube-playback-plox.user.js#L18460) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L18461) | [18461](../youtube-playback-plox.user.js#L18461) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L18533)
> [Line 18533](../youtube-playback-plox.user.js#L18533)

_No relevant functions or constants detected._

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L18685)
> [Line 18685](../youtube-playback-plox.user.js#L18685)

_No relevant functions or constants detected._

## [🔄 Data Migration](../youtube-playback-plox.user.js#L18712)
> [Line 18712](../youtube-playback-plox.user.js#L18712)

| Type | Name | Line |
|---|---|---|
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L18769) | [18769](../youtube-playback-plox.user.js#L18769) |

## [🚀 Init](../youtube-playback-plox.user.js#L19102)
> [Line 19102](../youtube-playback-plox.user.js#L19102)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L19112) | [19112](../youtube-playback-plox.user.js#L19112) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L19134) | [19134](../youtube-playback-plox.user.js#L19134) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L19463) | [19463](../youtube-playback-plox.user.js#L19463) |

