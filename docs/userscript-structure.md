# Userscript Structure
> Auto-generated on 2026-07-23 · version 0.0.12-3
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
29. [📢 Ad Caches](#ad-caches) - [line 6349](../youtube-playback-plox.user.js#L6349)
30. [📢 Ad Detector](#ad-detector) - [line 6369](../youtube-playback-plox.user.js#L6369)
31. [🎯 VirtualScroller](#virtualscroller) - [line 6546](../youtube-playback-plox.user.js#L6546)
32. [📤 Import/Export JSON](#importexport-json) - [line 6957](../youtube-playback-plox.user.js#L6957)
33. [☁️ GitHub Backup](#github-backup) - [line 7144](../youtube-playback-plox.user.js#L7144)
34. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 7531](../youtube-playback-plox.user.js#L7531)
35. [🔄 Normalize Video Data](#normalize-video-data) - [line 7709](../youtube-playback-plox.user.js#L7709)
36. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 7791](../youtube-playback-plox.user.js#L7791)
37. [Parse FreeTube DB](#parse-freetube-db) - [line 7882](../youtube-playback-plox.user.js#L7882)
38. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 7975](../youtube-playback-plox.user.js#L7975)
39. [⬆ Export To FreeTube](#export-to-freetube) - [line 8006](../youtube-playback-plox.user.js#L8006)
40. [⬇ Import From FreeTube](#import-from-freetube) - [line 8053](../youtube-playback-plox.user.js#L8053)
41. [🔄 Insert Completion Event](#insert-completion-event) - [line 8111](../youtube-playback-plox.user.js#L8111)
42. [💾 Save Video Generic](#save-video-generic) - [line 8168](../youtube-playback-plox.user.js#L8168)
43. [📺 Helpers](#helpers) - [line 8344](../youtube-playback-plox.user.js#L8344)
44. [📺 Gets saved video data](#gets-saved-video-data) - [line 8347](../youtube-playback-plox.user.js#L8347)
45. [📺 Get Player Video ID](#get-player-video-id) - [line 8397](../youtube-playback-plox.user.js#L8397)
46. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 8476](../youtube-playback-plox.user.js#L8476)
47. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 8677](../youtube-playback-plox.user.js#L8677)
48. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 8883](../youtube-playback-plox.user.js#L8883)
49. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 8905](../youtube-playback-plox.user.js#L8905)
50. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 8933](../youtube-playback-plox.user.js#L8933)
51. [📺 get Playlist Name](#get-playlist-name) - [line 8978](../youtube-playback-plox.user.js#L8978)
52. [🕒 Time Display](#time-display) - [line 9253](../youtube-playback-plox.user.js#L9253)
53. [🖼️ Display Button Helpers](#display-button-helpers) - [line 9289](../youtube-playback-plox.user.js#L9289)
54. [🍞 Toasts](#toasts) - [line 10068](../youtube-playback-plox.user.js#L10068)
55. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 10244](../youtube-playback-plox.user.js#L10244)
56. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 10287](../youtube-playback-plox.user.js#L10287)
57. [⚙️ Settings UI](#settings-ui) - [line 10605](../youtube-playback-plox.user.js#L10605)
58. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 11000](../youtube-playback-plox.user.js#L11000)
59. [🎵 Video Selection](#video-selection) - [line 11058](../youtube-playback-plox.user.js#L11058)
60. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 11864](../youtube-playback-plox.user.js#L11864)
61. [📡 Video Observer Manager](#video-observer-manager) - [line 12124](../youtube-playback-plox.user.js#L12124)
62. [Processing Functions](#processing-functions) - [line 12908](../youtube-playback-plox.user.js#L12908)
63. [PlaybackController](#playbackcontroller) - [line 13975](../youtube-playback-plox.user.js#L13975)
64. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 14402](../youtube-playback-plox.user.js#L14402)
65. [📂 Sort UI](#sort-ui) - [line 14933](../youtube-playback-plox.user.js#L14933)
66. [📂 Filters UI](#filters-ui) - [line 15122](../youtube-playback-plox.user.js#L15122)
67. [📂 Video List UI](#video-list-ui) - [line 15408](../youtube-playback-plox.user.js#L15408)
68. [📁 Update Video List](#update-video-list) - [line 15531](../youtube-playback-plox.user.js#L15531)
69. [🔘 Floating Button](#floating-button) - [line 16316](../youtube-playback-plox.user.js#L16316)
70. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 16344](../youtube-playback-plox.user.js#L16344)
71. [📂 Video Entry](#video-entry) - [line 16563](../youtube-playback-plox.user.js#L16563)
72. [🗑️ Clear All Data](#clear-all-data) - [line 18499](../youtube-playback-plox.user.js#L18499)
73. [⚙️ Menu Commands](#menu-commands) - [line 18651](../youtube-playback-plox.user.js#L18651)
74. [🔄 Data Migration](#data-migration) - [line 18678](../youtube-playback-plox.user.js#L18678)
75. [🚀 Init](#init) - [line 19068](../youtube-playback-plox.user.js#L19068)

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
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L6055) | [6055](../youtube-playback-plox.user.js#L6055) |
| `fn` | [`prefixKey`](../youtube-playback-plox.user.js#L6064) | [6064](../youtube-playback-plox.user.js#L6064) |
| `fn` | [`stripPrefix`](../youtube-playback-plox.user.js#L6065) | [6065](../youtube-playback-plox.user.js#L6065) |
| `fn` | [`hasPrefix`](../youtube-playback-plox.user.js#L6066) | [6066](../youtube-playback-plox.user.js#L6066) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L6178) | [6178](../youtube-playback-plox.user.js#L6178) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L6196) | [6196](../youtube-playback-plox.user.js#L6196) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L6217) | [6217](../youtube-playback-plox.user.js#L6217) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6230) | [6230](../youtube-playback-plox.user.js#L6230) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6294) | [6294](../youtube-playback-plox.user.js#L6294) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6312) | [6312](../youtube-playback-plox.user.js#L6312) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L6320) | [6320](../youtube-playback-plox.user.js#L6320) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L6338) | [6338](../youtube-playback-plox.user.js#L6338) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L6349)
> [Line 6349](../youtube-playback-plox.user.js#L6349)

_No relevant functions or constants detected._

## [📢 Ad Detector](../youtube-playback-plox.user.js#L6369)
> [Line 6369](../youtube-playback-plox.user.js#L6369)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L6371) | [6371](../youtube-playback-plox.user.js#L6371) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L6422) | [6422](../youtube-playback-plox.user.js#L6422) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L6546)
> [Line 6546](../youtube-playback-plox.user.js#L6546)

_No relevant functions or constants detected._

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L6957)
> [Line 6957](../youtube-playback-plox.user.js#L6957)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L6964) | [6964](../youtube-playback-plox.user.js#L6964) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L6967) | [6967](../youtube-playback-plox.user.js#L6967) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L6995) | [6995](../youtube-playback-plox.user.js#L6995) |
| `fn` | [`copyExportDataToClipboard`](../youtube-playback-plox.user.js#L7046) | [7046](../youtube-playback-plox.user.js#L7046) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L7089) | [7089](../youtube-playback-plox.user.js#L7089) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L7144)
> [Line 7144](../youtube-playback-plox.user.js#L7144)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getGitHubErrorMsg`](../youtube-playback-plox.user.js#L7147) | [7147](../youtube-playback-plox.user.js#L7147) |
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L7154) | [7154](../youtube-playback-plox.user.js#L7154) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L7182) | [7182](../youtube-playback-plox.user.js#L7182) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7183) | [7183](../youtube-playback-plox.user.js#L7183) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L7245) | [7245](../youtube-playback-plox.user.js#L7245) |
| `fn` | [`cleanOwner`](../youtube-playback-plox.user.js#L7256) | [7256](../youtube-playback-plox.user.js#L7256) |
| `fn` | [`cleanName`](../youtube-playback-plox.user.js#L7257) | [7257](../youtube-playback-plox.user.js#L7257) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7258) | [7258](../youtube-playback-plox.user.js#L7258) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L7394) | [7394](../youtube-playback-plox.user.js#L7394) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7406) | [7406](../youtube-playback-plox.user.js#L7406) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L7472) | [7472](../youtube-playback-plox.user.js#L7472) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L7502) | [7502](../youtube-playback-plox.user.js#L7502) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L7531)
> [Line 7531](../youtube-playback-plox.user.js#L7531)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L7532) | [7532](../youtube-playback-plox.user.js#L7532) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L7571) | [7571](../youtube-playback-plox.user.js#L7571) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L7709)
> [Line 7709](../youtube-playback-plox.user.js#L7709)

_No relevant functions or constants detected._

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L7791)
> [Line 7791](../youtube-playback-plox.user.js#L7791)

_No relevant functions or constants detected._

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L7882)
> [Line 7882](../youtube-playback-plox.user.js#L7882)

_No relevant functions or constants detected._

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L7975)
> [Line 7975](../youtube-playback-plox.user.js#L7975)

| Type | Name | Line |
|---|---|---|
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L7994) | [7994](../youtube-playback-plox.user.js#L7994) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L8006)
> [Line 8006](../youtube-playback-plox.user.js#L8006)

_No relevant functions or constants detected._

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L8053)
> [Line 8053](../youtube-playback-plox.user.js#L8053)

_No relevant functions or constants detected._

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L8111)
> [Line 8111](../youtube-playback-plox.user.js#L8111)

| Type | Name | Line |
|---|---|---|
| `fn` | [`base`](../youtube-playback-plox.user.js#L8120) | [8120](../youtube-playback-plox.user.js#L8120) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L8157) | [8157](../youtube-playback-plox.user.js#L8157) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L8168)
> [Line 8168](../youtube-playback-plox.user.js#L8168)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8223) | [8223](../youtube-playback-plox.user.js#L8223) |

## [📺 Helpers](../youtube-playback-plox.user.js#L8344)
> [Line 8344](../youtube-playback-plox.user.js#L8344)

_No relevant functions or constants detected._

## [📺 Gets saved video data](../youtube-playback-plox.user.js#L8347)
> [Line 8347](../youtube-playback-plox.user.js#L8347)

| Type | Name | Line |
|---|---|---|
| `fn` | [`keys`](../youtube-playback-plox.user.js#L8373) | [8373](../youtube-playback-plox.user.js#L8373) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L8397)
> [Line 8397](../youtube-playback-plox.user.js#L8397)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L8433) | [8433](../youtube-playback-plox.user.js#L8433) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L8476)
> [Line 8476](../youtube-playback-plox.user.js#L8476)

_No relevant functions or constants detected._

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L8677)
> [Line 8677](../youtube-playback-plox.user.js#L8677)

| Type | Name | Line |
|---|---|---|
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L8774) | [8774](../youtube-playback-plox.user.js#L8774) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L8883)
> [Line 8883](../youtube-playback-plox.user.js#L8883)

_No relevant functions or constants detected._

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L8905)
> [Line 8905](../youtube-playback-plox.user.js#L8905)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L8933)
> [Line 8933](../youtube-playback-plox.user.js#L8933)

_No relevant functions or constants detected._

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L8978)
> [Line 8978](../youtube-playback-plox.user.js#L8978)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L8999) | [8999](../youtube-playback-plox.user.js#L8999) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L9141) | [9141](../youtube-playback-plox.user.js#L9141) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L9226) | [9226](../youtube-playback-plox.user.js#L9226) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L9253)
> [Line 9253](../youtube-playback-plox.user.js#L9253)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L9279) | [9279](../youtube-playback-plox.user.js#L9279) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L9289)
> [Line 9289](../youtube-playback-plox.user.js#L9289)

| Type | Name | Line |
|---|---|---|
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9571) | [9571](../youtube-playback-plox.user.js#L9571) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9571) | [9571](../youtube-playback-plox.user.js#L9571) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L9583) | [9583](../youtube-playback-plox.user.js#L9583) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L9593) | [9593](../youtube-playback-plox.user.js#L9593) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L9601) | [9601](../youtube-playback-plox.user.js#L9601) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L9609) | [9609](../youtube-playback-plox.user.js#L9609) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L9632) | [9632](../youtube-playback-plox.user.js#L9632) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L9644) | [9644](../youtube-playback-plox.user.js#L9644) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L9647) | [9647](../youtube-playback-plox.user.js#L9647) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L9657) | [9657](../youtube-playback-plox.user.js#L9657) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L9662) | [9662](../youtube-playback-plox.user.js#L9662) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L9685) | [9685](../youtube-playback-plox.user.js#L9685) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L9704) | [9704](../youtube-playback-plox.user.js#L9704) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L9712) | [9712](../youtube-playback-plox.user.js#L9712) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L9756) | [9756](../youtube-playback-plox.user.js#L9756) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L9811) | [9811](../youtube-playback-plox.user.js#L9811) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L9870) | [9870](../youtube-playback-plox.user.js#L9870) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L9967) | [9967](../youtube-playback-plox.user.js#L9967) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L9982) | [9982](../youtube-playback-plox.user.js#L9982) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L9986) | [9986](../youtube-playback-plox.user.js#L9986) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L9993) | [9993](../youtube-playback-plox.user.js#L9993) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L10011) | [10011](../youtube-playback-plox.user.js#L10011) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L10068)
> [Line 10068](../youtube-playback-plox.user.js#L10068)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L10104) | [10104](../youtube-playback-plox.user.js#L10104) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L10244)
> [Line 10244](../youtube-playback-plox.user.js#L10244)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L10247) | [10247](../youtube-playback-plox.user.js#L10247) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L10287)
> [Line 10287](../youtube-playback-plox.user.js#L10287)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L10327) | [10327](../youtube-playback-plox.user.js#L10327) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L10333) | [10333](../youtube-playback-plox.user.js#L10333) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L10341) | [10341](../youtube-playback-plox.user.js#L10341) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L10387) | [10387](../youtube-playback-plox.user.js#L10387) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L10391) | [10391](../youtube-playback-plox.user.js#L10391) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L10394) | [10394](../youtube-playback-plox.user.js#L10394) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L10410) | [10410](../youtube-playback-plox.user.js#L10410) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L10419) | [10419](../youtube-playback-plox.user.js#L10419) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L10449) | [10449](../youtube-playback-plox.user.js#L10449) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L10463) | [10463](../youtube-playback-plox.user.js#L10463) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L10467) | [10467](../youtube-playback-plox.user.js#L10467) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L10605)
> [Line 10605](../youtube-playback-plox.user.js#L10605)

| Type | Name | Line |
|---|---|---|
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L10625) | [10625](../youtube-playback-plox.user.js#L10625) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L10709) | [10709](../youtube-playback-plox.user.js#L10709) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10790) | [10790](../youtube-playback-plox.user.js#L10790) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10791) | [10791](../youtube-playback-plox.user.js#L10791) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10871) | [10871](../youtube-playback-plox.user.js#L10871) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10872) | [10872](../youtube-playback-plox.user.js#L10872) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L11000)
> [Line 11000](../youtube-playback-plox.user.js#L11000)

_No relevant functions or constants detected._

## [🎵 Video Selection](../youtube-playback-plox.user.js#L11058)
> [Line 11058](../youtube-playback-plox.user.js#L11058)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11148) | [11148](../youtube-playback-plox.user.js#L11148) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11155) | [11155](../youtube-playback-plox.user.js#L11155) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L11240) | [11240](../youtube-playback-plox.user.js#L11240) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L11244) | [11244](../youtube-playback-plox.user.js#L11244) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L11253) | [11253](../youtube-playback-plox.user.js#L11253) |
| `fn` | [`closeImportMenu`](../youtube-playback-plox.user.js#L11332) | [11332](../youtube-playback-plox.user.js#L11332) |
| `fn` | [`onImportOutsideClick`](../youtube-playback-plox.user.js#L11341) | [11341](../youtube-playback-plox.user.js#L11341) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L11630) | [11630](../youtube-playback-plox.user.js#L11630) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L11777) | [11777](../youtube-playback-plox.user.js#L11777) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L11864)
> [Line 11864](../youtube-playback-plox.user.js#L11864)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11870) | [11870](../youtube-playback-plox.user.js#L11870) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11870) | [11870](../youtube-playback-plox.user.js#L11870) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L11871) | [11871](../youtube-playback-plox.user.js#L11871) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L11880) | [11880](../youtube-playback-plox.user.js#L11880) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L11885) | [11885](../youtube-playback-plox.user.js#L11885) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L11896) | [11896](../youtube-playback-plox.user.js#L11896) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L11913) | [11913](../youtube-playback-plox.user.js#L11913) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L11947) | [11947](../youtube-playback-plox.user.js#L11947) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L11972) | [11972](../youtube-playback-plox.user.js#L11972) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L11974) | [11974](../youtube-playback-plox.user.js#L11974) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11993) | [11993](../youtube-playback-plox.user.js#L11993) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11993) | [11993](../youtube-playback-plox.user.js#L11993) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L11995) | [11995](../youtube-playback-plox.user.js#L11995) |
| `fn` | [`shouldDropVideoEvent`](../youtube-playback-plox.user.js#L12007) | [12007](../youtube-playback-plox.user.js#L12007) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12016) | [12016](../youtube-playback-plox.user.js#L12016) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12016) | [12016](../youtube-playback-plox.user.js#L12016) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L12027) | [12027](../youtube-playback-plox.user.js#L12027) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L12032) | [12032](../youtube-playback-plox.user.js#L12032) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L12037) | [12037](../youtube-playback-plox.user.js#L12037) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L12049) | [12049](../youtube-playback-plox.user.js#L12049) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12066) | [12066](../youtube-playback-plox.user.js#L12066) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12066) | [12066](../youtube-playback-plox.user.js#L12066) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L12068) | [12068](../youtube-playback-plox.user.js#L12068) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L12076) | [12076](../youtube-playback-plox.user.js#L12076) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L12124)
> [Line 12124](../youtube-playback-plox.user.js#L12124)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12129) | [12129](../youtube-playback-plox.user.js#L12129) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12129) | [12129](../youtube-playback-plox.user.js#L12129) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L12149) | [12149](../youtube-playback-plox.user.js#L12149) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L12164) | [12164](../youtube-playback-plox.user.js#L12164) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L12180) | [12180](../youtube-playback-plox.user.js#L12180) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L12217) | [12217](../youtube-playback-plox.user.js#L12217) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L12251) | [12251](../youtube-playback-plox.user.js#L12251) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L12252) | [12252](../youtube-playback-plox.user.js#L12252) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L12283) | [12283](../youtube-playback-plox.user.js#L12283) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L12339) | [12339](../youtube-playback-plox.user.js#L12339) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L12406) | [12406](../youtube-playback-plox.user.js#L12406) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12414) | [12414](../youtube-playback-plox.user.js#L12414) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L12421) | [12421](../youtube-playback-plox.user.js#L12421) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L12459) | [12459](../youtube-playback-plox.user.js#L12459) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L12499) | [12499](../youtube-playback-plox.user.js#L12499) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L12510) | [12510](../youtube-playback-plox.user.js#L12510) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L12526) | [12526](../youtube-playback-plox.user.js#L12526) |
| `fn` | [`clearPlayerCache`](../youtube-playback-plox.user.js#L12632) | [12632](../youtube-playback-plox.user.js#L12632) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12846) | [12846](../youtube-playback-plox.user.js#L12846) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L12888) | [12888](../youtube-playback-plox.user.js#L12888) |

## [Processing Functions](../youtube-playback-plox.user.js#L12908)
> [Line 12908](../youtube-playback-plox.user.js#L12908)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L12934) | [12934](../youtube-playback-plox.user.js#L12934) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L12953) | [12953](../youtube-playback-plox.user.js#L12953) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12963) | [12963](../youtube-playback-plox.user.js#L12963) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12963) | [12963](../youtube-playback-plox.user.js#L12963) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L12978) | [12978](../youtube-playback-plox.user.js#L12978) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L12983) | [12983](../youtube-playback-plox.user.js#L12983) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L12990) | [12990](../youtube-playback-plox.user.js#L12990) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L12996) | [12996](../youtube-playback-plox.user.js#L12996) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L13014) | [13014](../youtube-playback-plox.user.js#L13014) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L13084) | [13084](../youtube-playback-plox.user.js#L13084) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L13117) | [13117](../youtube-playback-plox.user.js#L13117) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L13150) | [13150](../youtube-playback-plox.user.js#L13150) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L13180) | [13180](../youtube-playback-plox.user.js#L13180) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L13191) | [13191](../youtube-playback-plox.user.js#L13191) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L13203) | [13203](../youtube-playback-plox.user.js#L13203) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L13237) | [13237](../youtube-playback-plox.user.js#L13237) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L13308) | [13308](../youtube-playback-plox.user.js#L13308) |
| `fn` | [`handleSeekingForGradient`](../youtube-playback-plox.user.js#L13337) | [13337](../youtube-playback-plox.user.js#L13337) |
| `fn` | [`handleSeekedForGradient`](../youtube-playback-plox.user.js#L13346) | [13346](../youtube-playback-plox.user.js#L13346) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L13468) | [13468](../youtube-playback-plox.user.js#L13468) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L13537) | [13537](../youtube-playback-plox.user.js#L13537) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L13712) | [13712](../youtube-playback-plox.user.js#L13712) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L13825) | [13825](../youtube-playback-plox.user.js#L13825) |

## [PlaybackController](../youtube-playback-plox.user.js#L13975)
> [Line 13975](../youtube-playback-plox.user.js#L13975)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L14023) | [14023](../youtube-playback-plox.user.js#L14023) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L14039) | [14039](../youtube-playback-plox.user.js#L14039) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L14062) | [14062](../youtube-playback-plox.user.js#L14062) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L14068) | [14068](../youtube-playback-plox.user.js#L14068) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L14289) | [14289](../youtube-playback-plox.user.js#L14289) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L14402)
> [Line 14402](../youtube-playback-plox.user.js#L14402)

| Type | Name | Line |
|---|---|---|
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L14533) | [14533](../youtube-playback-plox.user.js#L14533) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L14933)
> [Line 14933](../youtube-playback-plox.user.js#L14933)

| Type | Name | Line |
|---|---|---|
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L14956) | [14956](../youtube-playback-plox.user.js#L14956) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L15032) | [15032](../youtube-playback-plox.user.js#L15032) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L15041) | [15041](../youtube-playback-plox.user.js#L15041) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L15049) | [15049](../youtube-playback-plox.user.js#L15049) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15069) | [15069](../youtube-playback-plox.user.js#L15069) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L15122)
> [Line 15122](../youtube-playback-plox.user.js#L15122)

| Type | Name | Line |
|---|---|---|
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15134) | [15134](../youtube-playback-plox.user.js#L15134) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L15181) | [15181](../youtube-playback-plox.user.js#L15181) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L15187) | [15187](../youtube-playback-plox.user.js#L15187) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L15195) | [15195](../youtube-playback-plox.user.js#L15195) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15210) | [15210](../youtube-playback-plox.user.js#L15210) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L15330) | [15330](../youtube-playback-plox.user.js#L15330) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L15408)
> [Line 15408](../youtube-playback-plox.user.js#L15408)

_No relevant functions or constants detected._

## [📁 Update Video List](../youtube-playback-plox.user.js#L15531)
> [Line 15531](../youtube-playback-plox.user.js#L15531)

| Type | Name | Line |
|---|---|---|
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15550) | [15550](../youtube-playback-plox.user.js#L15550) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15554) | [15554](../youtube-playback-plox.user.js#L15554) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15738) | [15738](../youtube-playback-plox.user.js#L15738) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L15757) | [15757](../youtube-playback-plox.user.js#L15757) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L15883) | [15883](../youtube-playback-plox.user.js#L15883) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15960) | [15960](../youtube-playback-plox.user.js#L15960) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L16124) | [16124](../youtube-playback-plox.user.js#L16124) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L16145) | [16145](../youtube-playback-plox.user.js#L16145) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L16196) | [16196](../youtube-playback-plox.user.js#L16196) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L16316)
> [Line 16316](../youtube-playback-plox.user.js#L16316)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L16319) | [16319](../youtube-playback-plox.user.js#L16319) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L16333) | [16333](../youtube-playback-plox.user.js#L16333) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L16344)
> [Line 16344](../youtube-playback-plox.user.js#L16344)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L16471) | [16471](../youtube-playback-plox.user.js#L16471) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L16481) | [16481](../youtube-playback-plox.user.js#L16481) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L16551) | [16551](../youtube-playback-plox.user.js#L16551) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L16563)
> [Line 16563](../youtube-playback-plox.user.js#L16563)

| Type | Name | Line |
|---|---|---|
| `fn` | [`deleteFromStorage`](../youtube-playback-plox.user.js#L16697) | [16697](../youtube-playback-plox.user.js#L16697) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L16702) | [16702](../youtube-playback-plox.user.js#L16702) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L16761) | [16761](../youtube-playback-plox.user.js#L16761) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L16809) | [16809](../youtube-playback-plox.user.js#L16809) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L16815) | [16815](../youtube-playback-plox.user.js#L16815) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L16832) | [16832](../youtube-playback-plox.user.js#L16832) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L16866) | [16866](../youtube-playback-plox.user.js#L16866) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L16910) | [16910](../youtube-playback-plox.user.js#L16910) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L16992) | [16992](../youtube-playback-plox.user.js#L16992) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L16998) | [16998](../youtube-playback-plox.user.js#L16998) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L17014) | [17014](../youtube-playback-plox.user.js#L17014) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L17024) | [17024](../youtube-playback-plox.user.js#L17024) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L17032) | [17032](../youtube-playback-plox.user.js#L17032) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L17037) | [17037](../youtube-playback-plox.user.js#L17037) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L17044) | [17044](../youtube-playback-plox.user.js#L17044) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L17047) | [17047](../youtube-playback-plox.user.js#L17047) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L17051) | [17051](../youtube-playback-plox.user.js#L17051) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L17097) | [17097](../youtube-playback-plox.user.js#L17097) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L17097) | [17097](../youtube-playback-plox.user.js#L17097) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L17111) | [17111](../youtube-playback-plox.user.js#L17111) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L17385) | [17385](../youtube-playback-plox.user.js#L17385) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L17433) | [17433](../youtube-playback-plox.user.js#L17433) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17434) | [17434](../youtube-playback-plox.user.js#L17434) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L17450) | [17450](../youtube-playback-plox.user.js#L17450) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17451) | [17451](../youtube-playback-plox.user.js#L17451) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L17500) | [17500](../youtube-playback-plox.user.js#L17500) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L17645) | [17645](../youtube-playback-plox.user.js#L17645) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L17659) | [17659](../youtube-playback-plox.user.js#L17659) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L17958) | [17958](../youtube-playback-plox.user.js#L17958) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L18057) | [18057](../youtube-playback-plox.user.js#L18057) |
| `fn` | [`scheduleHeightUpdate`](../youtube-playback-plox.user.js#L18117) | [18117](../youtube-playback-plox.user.js#L18117) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L18155) | [18155](../youtube-playback-plox.user.js#L18155) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L18403) | [18403](../youtube-playback-plox.user.js#L18403) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L18426) | [18426](../youtube-playback-plox.user.js#L18426) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L18427) | [18427](../youtube-playback-plox.user.js#L18427) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L18499)
> [Line 18499](../youtube-playback-plox.user.js#L18499)

_No relevant functions or constants detected._

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L18651)
> [Line 18651](../youtube-playback-plox.user.js#L18651)

_No relevant functions or constants detected._

## [🔄 Data Migration](../youtube-playback-plox.user.js#L18678)
> [Line 18678](../youtube-playback-plox.user.js#L18678)

| Type | Name | Line |
|---|---|---|
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L18735) | [18735](../youtube-playback-plox.user.js#L18735) |

## [🚀 Init](../youtube-playback-plox.user.js#L19068)
> [Line 19068](../youtube-playback-plox.user.js#L19068)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L19078) | [19078](../youtube-playback-plox.user.js#L19078) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L19100) | [19100](../youtube-playback-plox.user.js#L19100) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L19429) | [19429](../youtube-playback-plox.user.js#L19429) |

