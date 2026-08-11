# Userscript Structure
> Auto-generated on 2026-08-11 · version 0.0.12-6
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
29. [📢 Ad Caches](#ad-caches) - [line 6395](../youtube-playback-plox.user.js#L6395)
30. [📢 Ad Detector](#ad-detector) - [line 6415](../youtube-playback-plox.user.js#L6415)
31. [🎯 VirtualScroller](#virtualscroller) - [line 6592](../youtube-playback-plox.user.js#L6592)
32. [📤 Import/Export JSON](#importexport-json) - [line 7003](../youtube-playback-plox.user.js#L7003)
33. [☁️ GitHub Backup](#github-backup) - [line 7190](../youtube-playback-plox.user.js#L7190)
34. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 7577](../youtube-playback-plox.user.js#L7577)
35. [🔄 Normalize Video Data](#normalize-video-data) - [line 7755](../youtube-playback-plox.user.js#L7755)
36. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 7837](../youtube-playback-plox.user.js#L7837)
37. [Parse FreeTube DB](#parse-freetube-db) - [line 7928](../youtube-playback-plox.user.js#L7928)
38. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 8021](../youtube-playback-plox.user.js#L8021)
39. [⬆ Export To FreeTube](#export-to-freetube) - [line 8052](../youtube-playback-plox.user.js#L8052)
40. [⬇ Import From FreeTube](#import-from-freetube) - [line 8099](../youtube-playback-plox.user.js#L8099)
41. [🔄 Insert Completion Event](#insert-completion-event) - [line 8157](../youtube-playback-plox.user.js#L8157)
42. [💾 Save Video Generic](#save-video-generic) - [line 8214](../youtube-playback-plox.user.js#L8214)
43. [📺 Helpers](#helpers) - [line 8390](../youtube-playback-plox.user.js#L8390)
44. [📺 Gets saved video data](#gets-saved-video-data) - [line 8393](../youtube-playback-plox.user.js#L8393)
45. [📺 Get Player Video ID](#get-player-video-id) - [line 8443](../youtube-playback-plox.user.js#L8443)
46. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 8522](../youtube-playback-plox.user.js#L8522)
47. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 8723](../youtube-playback-plox.user.js#L8723)
48. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 8929](../youtube-playback-plox.user.js#L8929)
49. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 8951](../youtube-playback-plox.user.js#L8951)
50. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 8979](../youtube-playback-plox.user.js#L8979)
51. [📺 get Playlist Name](#get-playlist-name) - [line 9024](../youtube-playback-plox.user.js#L9024)
52. [🕒 Time Display](#time-display) - [line 9299](../youtube-playback-plox.user.js#L9299)
53. [🖼️ Display Button Helpers](#display-button-helpers) - [line 9335](../youtube-playback-plox.user.js#L9335)
54. [🍞 Toasts](#toasts) - [line 10114](../youtube-playback-plox.user.js#L10114)
55. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 10290](../youtube-playback-plox.user.js#L10290)
56. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 10333](../youtube-playback-plox.user.js#L10333)
57. [⚙️ Settings UI](#settings-ui) - [line 10651](../youtube-playback-plox.user.js#L10651)
58. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 11098](../youtube-playback-plox.user.js#L11098)
59. [🎵 Video Selection](#video-selection) - [line 11156](../youtube-playback-plox.user.js#L11156)
60. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 11962](../youtube-playback-plox.user.js#L11962)
61. [📡 Video Observer Manager](#video-observer-manager) - [line 12222](../youtube-playback-plox.user.js#L12222)
62. [Processing Functions](#processing-functions) - [line 13006](../youtube-playback-plox.user.js#L13006)
63. [PlaybackController](#playbackcontroller) - [line 14084](../youtube-playback-plox.user.js#L14084)
64. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 14518](../youtube-playback-plox.user.js#L14518)
65. [📂 Sort UI](#sort-ui) - [line 15049](../youtube-playback-plox.user.js#L15049)
66. [📂 Filters UI](#filters-ui) - [line 15238](../youtube-playback-plox.user.js#L15238)
67. [📂 Video List UI](#video-list-ui) - [line 15524](../youtube-playback-plox.user.js#L15524)
68. [📁 Update Video List](#update-video-list) - [line 15647](../youtube-playback-plox.user.js#L15647)
69. [🔘 Floating Button](#floating-button) - [line 16432](../youtube-playback-plox.user.js#L16432)
70. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 16460](../youtube-playback-plox.user.js#L16460)
71. [📂 Video Entry](#video-entry) - [line 16679](../youtube-playback-plox.user.js#L16679)
72. [🗑️ Clear All Data](#clear-all-data) - [line 18615](../youtube-playback-plox.user.js#L18615)
73. [⚙️ Menu Commands](#menu-commands) - [line 18767](../youtube-playback-plox.user.js#L18767)
74. [🔄 Data Migration](#data-migration) - [line 18794](../youtube-playback-plox.user.js#L18794)
75. [🚀 Init](#init) - [line 19184](../youtube-playback-plox.user.js#L19184)

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
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5906) | [5906](../youtube-playback-plox.user.js#L5906) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5906) | [5906](../youtube-playback-plox.user.js#L5906) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L6101) | [6101](../youtube-playback-plox.user.js#L6101) |
| `fn` | [`prefixKey`](../youtube-playback-plox.user.js#L6110) | [6110](../youtube-playback-plox.user.js#L6110) |
| `fn` | [`stripPrefix`](../youtube-playback-plox.user.js#L6111) | [6111](../youtube-playback-plox.user.js#L6111) |
| `fn` | [`hasPrefix`](../youtube-playback-plox.user.js#L6112) | [6112](../youtube-playback-plox.user.js#L6112) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L6224) | [6224](../youtube-playback-plox.user.js#L6224) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L6242) | [6242](../youtube-playback-plox.user.js#L6242) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L6263) | [6263](../youtube-playback-plox.user.js#L6263) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6276) | [6276](../youtube-playback-plox.user.js#L6276) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6340) | [6340](../youtube-playback-plox.user.js#L6340) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6358) | [6358](../youtube-playback-plox.user.js#L6358) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L6366) | [6366](../youtube-playback-plox.user.js#L6366) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L6384) | [6384](../youtube-playback-plox.user.js#L6384) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L6395)
> [Line 6395](../youtube-playback-plox.user.js#L6395)

_No relevant functions or constants detected._

## [📢 Ad Detector](../youtube-playback-plox.user.js#L6415)
> [Line 6415](../youtube-playback-plox.user.js#L6415)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L6417) | [6417](../youtube-playback-plox.user.js#L6417) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L6468) | [6468](../youtube-playback-plox.user.js#L6468) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L6592)
> [Line 6592](../youtube-playback-plox.user.js#L6592)

_No relevant functions or constants detected._

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L7003)
> [Line 7003](../youtube-playback-plox.user.js#L7003)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L7010) | [7010](../youtube-playback-plox.user.js#L7010) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L7013) | [7013](../youtube-playback-plox.user.js#L7013) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L7041) | [7041](../youtube-playback-plox.user.js#L7041) |
| `fn` | [`copyExportDataToClipboard`](../youtube-playback-plox.user.js#L7092) | [7092](../youtube-playback-plox.user.js#L7092) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L7135) | [7135](../youtube-playback-plox.user.js#L7135) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L7190)
> [Line 7190](../youtube-playback-plox.user.js#L7190)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getGitHubErrorMsg`](../youtube-playback-plox.user.js#L7193) | [7193](../youtube-playback-plox.user.js#L7193) |
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L7200) | [7200](../youtube-playback-plox.user.js#L7200) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L7228) | [7228](../youtube-playback-plox.user.js#L7228) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7229) | [7229](../youtube-playback-plox.user.js#L7229) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L7291) | [7291](../youtube-playback-plox.user.js#L7291) |
| `fn` | [`cleanOwner`](../youtube-playback-plox.user.js#L7302) | [7302](../youtube-playback-plox.user.js#L7302) |
| `fn` | [`cleanName`](../youtube-playback-plox.user.js#L7303) | [7303](../youtube-playback-plox.user.js#L7303) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7304) | [7304](../youtube-playback-plox.user.js#L7304) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L7440) | [7440](../youtube-playback-plox.user.js#L7440) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7452) | [7452](../youtube-playback-plox.user.js#L7452) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L7518) | [7518](../youtube-playback-plox.user.js#L7518) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L7548) | [7548](../youtube-playback-plox.user.js#L7548) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L7577)
> [Line 7577](../youtube-playback-plox.user.js#L7577)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L7578) | [7578](../youtube-playback-plox.user.js#L7578) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L7617) | [7617](../youtube-playback-plox.user.js#L7617) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L7755)
> [Line 7755](../youtube-playback-plox.user.js#L7755)

_No relevant functions or constants detected._

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L7837)
> [Line 7837](../youtube-playback-plox.user.js#L7837)

_No relevant functions or constants detected._

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L7928)
> [Line 7928](../youtube-playback-plox.user.js#L7928)

_No relevant functions or constants detected._

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L8021)
> [Line 8021](../youtube-playback-plox.user.js#L8021)

| Type | Name | Line |
|---|---|---|
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L8040) | [8040](../youtube-playback-plox.user.js#L8040) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L8052)
> [Line 8052](../youtube-playback-plox.user.js#L8052)

_No relevant functions or constants detected._

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L8099)
> [Line 8099](../youtube-playback-plox.user.js#L8099)

_No relevant functions or constants detected._

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L8157)
> [Line 8157](../youtube-playback-plox.user.js#L8157)

| Type | Name | Line |
|---|---|---|
| `fn` | [`base`](../youtube-playback-plox.user.js#L8166) | [8166](../youtube-playback-plox.user.js#L8166) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L8203) | [8203](../youtube-playback-plox.user.js#L8203) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L8214)
> [Line 8214](../youtube-playback-plox.user.js#L8214)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8269) | [8269](../youtube-playback-plox.user.js#L8269) |

## [📺 Helpers](../youtube-playback-plox.user.js#L8390)
> [Line 8390](../youtube-playback-plox.user.js#L8390)

_No relevant functions or constants detected._

## [📺 Gets saved video data](../youtube-playback-plox.user.js#L8393)
> [Line 8393](../youtube-playback-plox.user.js#L8393)

| Type | Name | Line |
|---|---|---|
| `fn` | [`keys`](../youtube-playback-plox.user.js#L8419) | [8419](../youtube-playback-plox.user.js#L8419) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L8443)
> [Line 8443](../youtube-playback-plox.user.js#L8443)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L8479) | [8479](../youtube-playback-plox.user.js#L8479) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L8522)
> [Line 8522](../youtube-playback-plox.user.js#L8522)

_No relevant functions or constants detected._

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L8723)
> [Line 8723](../youtube-playback-plox.user.js#L8723)

| Type | Name | Line |
|---|---|---|
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L8820) | [8820](../youtube-playback-plox.user.js#L8820) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L8929)
> [Line 8929](../youtube-playback-plox.user.js#L8929)

_No relevant functions or constants detected._

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L8951)
> [Line 8951](../youtube-playback-plox.user.js#L8951)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L8979)
> [Line 8979](../youtube-playback-plox.user.js#L8979)

_No relevant functions or constants detected._

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L9024)
> [Line 9024](../youtube-playback-plox.user.js#L9024)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L9045) | [9045](../youtube-playback-plox.user.js#L9045) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L9187) | [9187](../youtube-playback-plox.user.js#L9187) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L9272) | [9272](../youtube-playback-plox.user.js#L9272) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L9299)
> [Line 9299](../youtube-playback-plox.user.js#L9299)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L9325) | [9325](../youtube-playback-plox.user.js#L9325) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L9335)
> [Line 9335](../youtube-playback-plox.user.js#L9335)

| Type | Name | Line |
|---|---|---|
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9617) | [9617](../youtube-playback-plox.user.js#L9617) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9617) | [9617](../youtube-playback-plox.user.js#L9617) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L9629) | [9629](../youtube-playback-plox.user.js#L9629) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L9639) | [9639](../youtube-playback-plox.user.js#L9639) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L9647) | [9647](../youtube-playback-plox.user.js#L9647) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L9655) | [9655](../youtube-playback-plox.user.js#L9655) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L9678) | [9678](../youtube-playback-plox.user.js#L9678) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L9690) | [9690](../youtube-playback-plox.user.js#L9690) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L9693) | [9693](../youtube-playback-plox.user.js#L9693) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L9703) | [9703](../youtube-playback-plox.user.js#L9703) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L9708) | [9708](../youtube-playback-plox.user.js#L9708) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L9731) | [9731](../youtube-playback-plox.user.js#L9731) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L9750) | [9750](../youtube-playback-plox.user.js#L9750) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L9758) | [9758](../youtube-playback-plox.user.js#L9758) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L9802) | [9802](../youtube-playback-plox.user.js#L9802) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L9857) | [9857](../youtube-playback-plox.user.js#L9857) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L9916) | [9916](../youtube-playback-plox.user.js#L9916) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L10013) | [10013](../youtube-playback-plox.user.js#L10013) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L10028) | [10028](../youtube-playback-plox.user.js#L10028) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L10032) | [10032](../youtube-playback-plox.user.js#L10032) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L10039) | [10039](../youtube-playback-plox.user.js#L10039) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L10057) | [10057](../youtube-playback-plox.user.js#L10057) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L10114)
> [Line 10114](../youtube-playback-plox.user.js#L10114)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L10150) | [10150](../youtube-playback-plox.user.js#L10150) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L10290)
> [Line 10290](../youtube-playback-plox.user.js#L10290)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L10293) | [10293](../youtube-playback-plox.user.js#L10293) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L10333)
> [Line 10333](../youtube-playback-plox.user.js#L10333)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L10373) | [10373](../youtube-playback-plox.user.js#L10373) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L10379) | [10379](../youtube-playback-plox.user.js#L10379) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L10387) | [10387](../youtube-playback-plox.user.js#L10387) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L10433) | [10433](../youtube-playback-plox.user.js#L10433) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L10437) | [10437](../youtube-playback-plox.user.js#L10437) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L10440) | [10440](../youtube-playback-plox.user.js#L10440) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L10456) | [10456](../youtube-playback-plox.user.js#L10456) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L10465) | [10465](../youtube-playback-plox.user.js#L10465) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L10495) | [10495](../youtube-playback-plox.user.js#L10495) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L10509) | [10509](../youtube-playback-plox.user.js#L10509) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L10513) | [10513](../youtube-playback-plox.user.js#L10513) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L10651)
> [Line 10651](../youtube-playback-plox.user.js#L10651)

| Type | Name | Line |
|---|---|---|
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L10671) | [10671](../youtube-playback-plox.user.js#L10671) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L10755) | [10755](../youtube-playback-plox.user.js#L10755) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10836) | [10836](../youtube-playback-plox.user.js#L10836) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10837) | [10837](../youtube-playback-plox.user.js#L10837) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10917) | [10917](../youtube-playback-plox.user.js#L10917) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10918) | [10918](../youtube-playback-plox.user.js#L10918) |
| `fn` | [`idbDiag`](../youtube-playback-plox.user.js#L10978) | [10978](../youtube-playback-plox.user.js#L10978) |
| `fn` | [`safeModeActive`](../youtube-playback-plox.user.js#L10988) | [10988](../youtube-playback-plox.user.js#L10988) |
| `fn` | [`activeSessions`](../youtube-playback-plox.user.js#L10989) | [10989](../youtube-playback-plox.user.js#L10989) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L11098)
> [Line 11098](../youtube-playback-plox.user.js#L11098)

_No relevant functions or constants detected._

## [🎵 Video Selection](../youtube-playback-plox.user.js#L11156)
> [Line 11156](../youtube-playback-plox.user.js#L11156)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11246) | [11246](../youtube-playback-plox.user.js#L11246) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11253) | [11253](../youtube-playback-plox.user.js#L11253) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L11338) | [11338](../youtube-playback-plox.user.js#L11338) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L11342) | [11342](../youtube-playback-plox.user.js#L11342) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L11351) | [11351](../youtube-playback-plox.user.js#L11351) |
| `fn` | [`closeImportMenu`](../youtube-playback-plox.user.js#L11430) | [11430](../youtube-playback-plox.user.js#L11430) |
| `fn` | [`onImportOutsideClick`](../youtube-playback-plox.user.js#L11439) | [11439](../youtube-playback-plox.user.js#L11439) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L11728) | [11728](../youtube-playback-plox.user.js#L11728) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L11875) | [11875](../youtube-playback-plox.user.js#L11875) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L11962)
> [Line 11962](../youtube-playback-plox.user.js#L11962)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11968) | [11968](../youtube-playback-plox.user.js#L11968) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11968) | [11968](../youtube-playback-plox.user.js#L11968) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L11969) | [11969](../youtube-playback-plox.user.js#L11969) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L11978) | [11978](../youtube-playback-plox.user.js#L11978) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L11983) | [11983](../youtube-playback-plox.user.js#L11983) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L11994) | [11994](../youtube-playback-plox.user.js#L11994) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L12011) | [12011](../youtube-playback-plox.user.js#L12011) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L12045) | [12045](../youtube-playback-plox.user.js#L12045) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L12070) | [12070](../youtube-playback-plox.user.js#L12070) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L12072) | [12072](../youtube-playback-plox.user.js#L12072) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L12091) | [12091](../youtube-playback-plox.user.js#L12091) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L12091) | [12091](../youtube-playback-plox.user.js#L12091) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L12093) | [12093](../youtube-playback-plox.user.js#L12093) |
| `fn` | [`shouldDropVideoEvent`](../youtube-playback-plox.user.js#L12105) | [12105](../youtube-playback-plox.user.js#L12105) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12114) | [12114](../youtube-playback-plox.user.js#L12114) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12114) | [12114](../youtube-playback-plox.user.js#L12114) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L12125) | [12125](../youtube-playback-plox.user.js#L12125) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L12130) | [12130](../youtube-playback-plox.user.js#L12130) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L12135) | [12135](../youtube-playback-plox.user.js#L12135) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L12147) | [12147](../youtube-playback-plox.user.js#L12147) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12164) | [12164](../youtube-playback-plox.user.js#L12164) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12164) | [12164](../youtube-playback-plox.user.js#L12164) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L12166) | [12166](../youtube-playback-plox.user.js#L12166) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L12174) | [12174](../youtube-playback-plox.user.js#L12174) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L12222)
> [Line 12222](../youtube-playback-plox.user.js#L12222)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12227) | [12227](../youtube-playback-plox.user.js#L12227) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12227) | [12227](../youtube-playback-plox.user.js#L12227) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L12247) | [12247](../youtube-playback-plox.user.js#L12247) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L12262) | [12262](../youtube-playback-plox.user.js#L12262) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L12278) | [12278](../youtube-playback-plox.user.js#L12278) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L12315) | [12315](../youtube-playback-plox.user.js#L12315) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L12349) | [12349](../youtube-playback-plox.user.js#L12349) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L12350) | [12350](../youtube-playback-plox.user.js#L12350) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L12381) | [12381](../youtube-playback-plox.user.js#L12381) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L12437) | [12437](../youtube-playback-plox.user.js#L12437) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L12504) | [12504](../youtube-playback-plox.user.js#L12504) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12512) | [12512](../youtube-playback-plox.user.js#L12512) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L12519) | [12519](../youtube-playback-plox.user.js#L12519) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L12557) | [12557](../youtube-playback-plox.user.js#L12557) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L12597) | [12597](../youtube-playback-plox.user.js#L12597) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L12608) | [12608](../youtube-playback-plox.user.js#L12608) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L12624) | [12624](../youtube-playback-plox.user.js#L12624) |
| `fn` | [`clearPlayerCache`](../youtube-playback-plox.user.js#L12730) | [12730](../youtube-playback-plox.user.js#L12730) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12944) | [12944](../youtube-playback-plox.user.js#L12944) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L12986) | [12986](../youtube-playback-plox.user.js#L12986) |

## [Processing Functions](../youtube-playback-plox.user.js#L13006)
> [Line 13006](../youtube-playback-plox.user.js#L13006)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L13032) | [13032](../youtube-playback-plox.user.js#L13032) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L13051) | [13051](../youtube-playback-plox.user.js#L13051) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L13061) | [13061](../youtube-playback-plox.user.js#L13061) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L13061) | [13061](../youtube-playback-plox.user.js#L13061) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L13076) | [13076](../youtube-playback-plox.user.js#L13076) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L13081) | [13081](../youtube-playback-plox.user.js#L13081) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L13088) | [13088](../youtube-playback-plox.user.js#L13088) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L13094) | [13094](../youtube-playback-plox.user.js#L13094) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L13112) | [13112](../youtube-playback-plox.user.js#L13112) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L13184) | [13184](../youtube-playback-plox.user.js#L13184) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L13217) | [13217](../youtube-playback-plox.user.js#L13217) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L13250) | [13250](../youtube-playback-plox.user.js#L13250) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L13280) | [13280](../youtube-playback-plox.user.js#L13280) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L13291) | [13291](../youtube-playback-plox.user.js#L13291) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L13303) | [13303](../youtube-playback-plox.user.js#L13303) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L13337) | [13337](../youtube-playback-plox.user.js#L13337) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L13408) | [13408](../youtube-playback-plox.user.js#L13408) |
| `fn` | [`handleSeekingForGradient`](../youtube-playback-plox.user.js#L13437) | [13437](../youtube-playback-plox.user.js#L13437) |
| `fn` | [`handleSeekedForGradient`](../youtube-playback-plox.user.js#L13446) | [13446](../youtube-playback-plox.user.js#L13446) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L13573) | [13573](../youtube-playback-plox.user.js#L13573) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L13642) | [13642](../youtube-playback-plox.user.js#L13642) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L13821) | [13821](../youtube-playback-plox.user.js#L13821) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L13934) | [13934](../youtube-playback-plox.user.js#L13934) |

## [PlaybackController](../youtube-playback-plox.user.js#L14084)
> [Line 14084](../youtube-playback-plox.user.js#L14084)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L14132) | [14132](../youtube-playback-plox.user.js#L14132) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L14148) | [14148](../youtube-playback-plox.user.js#L14148) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L14171) | [14171](../youtube-playback-plox.user.js#L14171) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L14177) | [14177](../youtube-playback-plox.user.js#L14177) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L14401) | [14401](../youtube-playback-plox.user.js#L14401) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L14518)
> [Line 14518](../youtube-playback-plox.user.js#L14518)

| Type | Name | Line |
|---|---|---|
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L14649) | [14649](../youtube-playback-plox.user.js#L14649) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L15049)
> [Line 15049](../youtube-playback-plox.user.js#L15049)

| Type | Name | Line |
|---|---|---|
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L15072) | [15072](../youtube-playback-plox.user.js#L15072) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L15148) | [15148](../youtube-playback-plox.user.js#L15148) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L15157) | [15157](../youtube-playback-plox.user.js#L15157) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L15165) | [15165](../youtube-playback-plox.user.js#L15165) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15185) | [15185](../youtube-playback-plox.user.js#L15185) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L15238)
> [Line 15238](../youtube-playback-plox.user.js#L15238)

| Type | Name | Line |
|---|---|---|
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15250) | [15250](../youtube-playback-plox.user.js#L15250) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L15297) | [15297](../youtube-playback-plox.user.js#L15297) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L15303) | [15303](../youtube-playback-plox.user.js#L15303) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L15311) | [15311](../youtube-playback-plox.user.js#L15311) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15326) | [15326](../youtube-playback-plox.user.js#L15326) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L15446) | [15446](../youtube-playback-plox.user.js#L15446) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L15524)
> [Line 15524](../youtube-playback-plox.user.js#L15524)

_No relevant functions or constants detected._

## [📁 Update Video List](../youtube-playback-plox.user.js#L15647)
> [Line 15647](../youtube-playback-plox.user.js#L15647)

| Type | Name | Line |
|---|---|---|
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15666) | [15666](../youtube-playback-plox.user.js#L15666) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15670) | [15670](../youtube-playback-plox.user.js#L15670) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15854) | [15854](../youtube-playback-plox.user.js#L15854) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L15873) | [15873](../youtube-playback-plox.user.js#L15873) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L15999) | [15999](../youtube-playback-plox.user.js#L15999) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L16076) | [16076](../youtube-playback-plox.user.js#L16076) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L16240) | [16240](../youtube-playback-plox.user.js#L16240) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L16261) | [16261](../youtube-playback-plox.user.js#L16261) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L16312) | [16312](../youtube-playback-plox.user.js#L16312) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L16432)
> [Line 16432](../youtube-playback-plox.user.js#L16432)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L16435) | [16435](../youtube-playback-plox.user.js#L16435) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L16449) | [16449](../youtube-playback-plox.user.js#L16449) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L16460)
> [Line 16460](../youtube-playback-plox.user.js#L16460)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L16587) | [16587](../youtube-playback-plox.user.js#L16587) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L16597) | [16597](../youtube-playback-plox.user.js#L16597) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L16667) | [16667](../youtube-playback-plox.user.js#L16667) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L16679)
> [Line 16679](../youtube-playback-plox.user.js#L16679)

| Type | Name | Line |
|---|---|---|
| `fn` | [`deleteFromStorage`](../youtube-playback-plox.user.js#L16813) | [16813](../youtube-playback-plox.user.js#L16813) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L16818) | [16818](../youtube-playback-plox.user.js#L16818) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L16877) | [16877](../youtube-playback-plox.user.js#L16877) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L16925) | [16925](../youtube-playback-plox.user.js#L16925) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L16931) | [16931](../youtube-playback-plox.user.js#L16931) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L16948) | [16948](../youtube-playback-plox.user.js#L16948) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L16982) | [16982](../youtube-playback-plox.user.js#L16982) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L17026) | [17026](../youtube-playback-plox.user.js#L17026) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L17108) | [17108](../youtube-playback-plox.user.js#L17108) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L17114) | [17114](../youtube-playback-plox.user.js#L17114) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L17130) | [17130](../youtube-playback-plox.user.js#L17130) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L17140) | [17140](../youtube-playback-plox.user.js#L17140) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L17148) | [17148](../youtube-playback-plox.user.js#L17148) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L17153) | [17153](../youtube-playback-plox.user.js#L17153) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L17160) | [17160](../youtube-playback-plox.user.js#L17160) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L17163) | [17163](../youtube-playback-plox.user.js#L17163) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L17167) | [17167](../youtube-playback-plox.user.js#L17167) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L17213) | [17213](../youtube-playback-plox.user.js#L17213) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L17213) | [17213](../youtube-playback-plox.user.js#L17213) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L17227) | [17227](../youtube-playback-plox.user.js#L17227) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L17501) | [17501](../youtube-playback-plox.user.js#L17501) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L17549) | [17549](../youtube-playback-plox.user.js#L17549) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17550) | [17550](../youtube-playback-plox.user.js#L17550) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L17566) | [17566](../youtube-playback-plox.user.js#L17566) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17567) | [17567](../youtube-playback-plox.user.js#L17567) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L17616) | [17616](../youtube-playback-plox.user.js#L17616) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L17761) | [17761](../youtube-playback-plox.user.js#L17761) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L17775) | [17775](../youtube-playback-plox.user.js#L17775) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L18074) | [18074](../youtube-playback-plox.user.js#L18074) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L18173) | [18173](../youtube-playback-plox.user.js#L18173) |
| `fn` | [`scheduleHeightUpdate`](../youtube-playback-plox.user.js#L18233) | [18233](../youtube-playback-plox.user.js#L18233) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L18271) | [18271](../youtube-playback-plox.user.js#L18271) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L18519) | [18519](../youtube-playback-plox.user.js#L18519) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L18542) | [18542](../youtube-playback-plox.user.js#L18542) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L18543) | [18543](../youtube-playback-plox.user.js#L18543) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L18615)
> [Line 18615](../youtube-playback-plox.user.js#L18615)

_No relevant functions or constants detected._

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L18767)
> [Line 18767](../youtube-playback-plox.user.js#L18767)

_No relevant functions or constants detected._

## [🔄 Data Migration](../youtube-playback-plox.user.js#L18794)
> [Line 18794](../youtube-playback-plox.user.js#L18794)

| Type | Name | Line |
|---|---|---|
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L18851) | [18851](../youtube-playback-plox.user.js#L18851) |

## [🚀 Init](../youtube-playback-plox.user.js#L19184)
> [Line 19184](../youtube-playback-plox.user.js#L19184)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L19194) | [19194](../youtube-playback-plox.user.js#L19194) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L19216) | [19216](../youtube-playback-plox.user.js#L19216) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L19545) | [19545](../youtube-playback-plox.user.js#L19545) |

