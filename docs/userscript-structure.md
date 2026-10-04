# Userscript Structure
> Auto-generated on 2026-10-03 · version 0.0.13
> **DO NOT EDIT MANUALLY** - regenerate with `node ./scripts/generate-structure.mjs`

---

## Sections index

1. [🔍 Logger System](#logger-system) - [line 143](../youtube-playback-plox.user.js#L143)
2. [🛡️ Initialization Guard (SPA Safety)](#initialization-guard-spa-safety) - [line 227](../youtube-playback-plox.user.js#L227)
3. [📦 Config](#config) - [line 370](../youtube-playback-plox.user.js#L370)
4. [📊 Global Constants](#global-constants) - [line 499](../youtube-playback-plox.user.js#L499)
5. [📊 Global Variables](#global-variables) - [line 536](../youtube-playback-plox.user.js#L536)
6. [🌐 Translations](#translations) - [line 574](../youtube-playback-plox.user.js#L574)
7. [🔧 Utils](#utils) - [line 1037](../youtube-playback-plox.user.js#L1037)
8. [🔧 Sanitize HTML](#sanitize-html) - [line 1040](../youtube-playback-plox.user.js#L1040)
9. [🔧 Is Visibly Displayed](#is-visibly-displayed) - [line 1106](../youtube-playback-plox.user.js#L1106)
10. [🔧 Format Time](#format-time) - [line 1130](../youtube-playback-plox.user.js#L1130)
11. [🔧 parseTimeToSeconds](#parsetimetoseconds) - [line 1174](../youtube-playback-plox.user.js#L1174)
12. [🔧 normalizeSeconds](#normalizeseconds) - [line 1222](../youtube-playback-plox.user.js#L1222)
13. [🔧 getUrlTimeParamSeconds](#geturltimeparamseconds) - [line 1248](../youtube-playback-plox.user.js#L1248)
14. [⏳ delay](#delay) - [line 1277](../youtube-playback-plox.user.js#L1277)
15. [🔧 setInnerHTML](#setinnerhtml) - [line 1417](../youtube-playback-plox.user.js#L1417)
16. [🔧 Create Element](#create-element) - [line 1492](../youtube-playback-plox.user.js#L1492)
17. [🔧 Debounce](#debounce) - [line 1629](../youtube-playback-plox.user.js#L1629)
18. [🔧 downloadBlobMobileSafe](#downloadblobmobilesafe) - [line 1664](../youtube-playback-plox.user.js#L1664)
19. [🗄️ Event Handlers store](#event-handlers-store) - [line 1734](../youtube-playback-plox.user.js#L1734)
20. [📝 Selector System](#selector-system) - [line 1847](../youtube-playback-plox.user.js#L1847)
21. [💾 Simple LRU Cache](#simple-lru-cache) - [line 2133](../youtube-playback-plox.user.js#L2133)
22. [⚙️ DOM Cache System](#dom-cache-system) - [line 2214](../youtube-playback-plox.user.js#L2214)
23. [🌐 Translation Functions](#translation-functions) - [line 2580](../youtube-playback-plox.user.js#L2580)
24. [🎨 Styles](#styles) - [line 2745](../youtube-playback-plox.user.js#L2745)
25. [🎨 Theme](#theme) - [line 5358](../youtube-playback-plox.user.js#L5358)
26. [🎨 SVG Icons](#svg-icons) - [line 5436](../youtube-playback-plox.user.js#L5436)
27. [🎨 Progress Bar Style](#progress-bar-style) - [line 5598](../youtube-playback-plox.user.js#L5598)
28. [💾 Storage + Settings](#storage-settings) - [line 6115](../youtube-playback-plox.user.js#L6115)
29. [📢 Ad Caches](#ad-caches) - [line 9080](../youtube-playback-plox.user.js#L9080)
30. [📢 Ad Detector](#ad-detector) - [line 9100](../youtube-playback-plox.user.js#L9100)
31. [🎯 VirtualScroller](#virtualscroller) - [line 9278](../youtube-playback-plox.user.js#L9278)
32. [📤 Import/Export JSON](#importexport-json) - [line 9767](../youtube-playback-plox.user.js#L9767)
33. [☁️ GitHub Backup](#github-backup) - [line 10349](../youtube-playback-plox.user.js#L10349)
34. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 10886](../youtube-playback-plox.user.js#L10886)
35. [🔄 Normalize Video Data](#normalize-video-data) - [line 11068](../youtube-playback-plox.user.js#L11068)
36. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 11166](../youtube-playback-plox.user.js#L11166)
37. [Parse FreeTube DB](#parse-freetube-db) - [line 11257](../youtube-playback-plox.user.js#L11257)
38. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 11350](../youtube-playback-plox.user.js#L11350)
39. [⬆ Export To FreeTube](#export-to-freetube) - [line 11380](../youtube-playback-plox.user.js#L11380)
40. [⬇ Import From FreeTube](#import-from-freetube) - [line 11424](../youtube-playback-plox.user.js#L11424)
41. [🔄 Insert Completion Event](#insert-completion-event) - [line 11522](../youtube-playback-plox.user.js#L11522)
42. [💾 Save Video Generic](#save-video-generic) - [line 11569](../youtube-playback-plox.user.js#L11569)
43. [📺 Helpers](#helpers) - [line 11811](../youtube-playback-plox.user.js#L11811)
44. [📺 Gets saved video data](#gets-saved-video-data) - [line 11814](../youtube-playback-plox.user.js#L11814)
45. [📺 Get Player Video ID](#get-player-video-id) - [line 11871](../youtube-playback-plox.user.js#L11871)
46. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 11950](../youtube-playback-plox.user.js#L11950)
47. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 12155](../youtube-playback-plox.user.js#L12155)
48. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 12361](../youtube-playback-plox.user.js#L12361)
49. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 12383](../youtube-playback-plox.user.js#L12383)
50. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 12411](../youtube-playback-plox.user.js#L12411)
51. [📺 get Playlist Name](#get-playlist-name) - [line 12456](../youtube-playback-plox.user.js#L12456)
52. [🕒 Time Display](#time-display) - [line 12739](../youtube-playback-plox.user.js#L12739)
53. [🖼️ Display Button Helpers](#display-button-helpers) - [line 12775](../youtube-playback-plox.user.js#L12775)
54. [🍞 Toasts](#toasts) - [line 13651](../youtube-playback-plox.user.js#L13651)
55. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 13946](../youtube-playback-plox.user.js#L13946)
56. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 13993](../youtube-playback-plox.user.js#L13993)
57. [⚙️ Settings UI](#settings-ui) - [line 14311](../youtube-playback-plox.user.js#L14311)
58. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 14834](../youtube-playback-plox.user.js#L14834)
59. [🎵 Video Selection](#video-selection) - [line 14892](../youtube-playback-plox.user.js#L14892)
60. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 15835](../youtube-playback-plox.user.js#L15835)
61. [📡 Video Observer Manager](#video-observer-manager) - [line 16110](../youtube-playback-plox.user.js#L16110)
62. [Processing Functions](#processing-functions) - [line 16976](../youtube-playback-plox.user.js#L16976)
63. [PlaybackController](#playbackcontroller) - [line 18190](../youtube-playback-plox.user.js#L18190)
64. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 18691](../youtube-playback-plox.user.js#L18691)
65. [📂 Sort UI](#sort-ui) - [line 19248](../youtube-playback-plox.user.js#L19248)
66. [📂 Filters UI](#filters-ui) - [line 19446](../youtube-playback-plox.user.js#L19446)
67. [📂 Video List UI](#video-list-ui) - [line 19734](../youtube-playback-plox.user.js#L19734)
68. [📁 Update Video List](#update-video-list) - [line 19916](../youtube-playback-plox.user.js#L19916)
69. [🔘 Floating Button](#floating-button) - [line 20789](../youtube-playback-plox.user.js#L20789)
70. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 20818](../youtube-playback-plox.user.js#L20818)
71. [📂 Video Entry](#video-entry) - [line 21091](../youtube-playback-plox.user.js#L21091)
72. [🗑️ Clear All Data](#clear-all-data) - [line 23143](../youtube-playback-plox.user.js#L23143)
73. [⚙️ Menu Commands](#menu-commands) - [line 23501](../youtube-playback-plox.user.js#L23501)
74. [🔄 Data Migration](#data-migration) - [line 23559](../youtube-playback-plox.user.js#L23559)
75. [🚀 Init](#init) - [line 24062](../youtube-playback-plox.user.js#L24062)

---

## [🔍 Logger System](../youtube-playback-plox.user.js#L143)
> [Line 143](../youtube-playback-plox.user.js#L143)

| Type | Name | Line |
|---|---|---|
| `fn` | [`resolveArgs`](../youtube-playback-plox.user.js#L155) | [155](../youtube-playback-plox.user.js#L155) |
| `fn` | [`build`](../youtube-playback-plox.user.js#L157) | [157](../youtube-playback-plox.user.js#L157) |
| `fn` | [`msg`](../youtube-playback-plox.user.js#L197) | [197](../youtube-playback-plox.user.js#L197) |

## [🛡️ Initialization Guard (SPA Safety)](../youtube-playback-plox.user.js#L227)
> [Line 227](../youtube-playback-plox.user.js#L227)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isInstanceActive`](../youtube-playback-plox.user.js#L280) | [280](../youtube-playback-plox.user.js#L280) |
| `fn` | [`destroyToasts`](../youtube-playback-plox.user.js#L289) | [289](../youtube-playback-plox.user.js#L289) |
| `fn` | [`assertActiveInstance`](../youtube-playback-plox.user.js#L362) | [362](../youtube-playback-plox.user.js#L362) |

## [📦 Config](../youtube-playback-plox.user.js#L370)
> [Line 370](../youtube-playback-plox.user.js#L370)

_No relevant functions or constants detected._

## [📊 Global Constants](../youtube-playback-plox.user.js#L499)
> [Line 499](../youtube-playback-plox.user.js#L499)

| Type | Name | Line |
|---|---|---|
| `module` | [`TYPE_CONFIG`](../youtube-playback-plox.user.js#L510) | [510](../youtube-playback-plox.user.js#L510) |

## [📊 Global Variables](../youtube-playback-plox.user.js#L536)
> [Line 536](../youtube-playback-plox.user.js#L536)

_No relevant functions or constants detected._

## [🌐 Translations](../youtube-playback-plox.user.js#L574)
> [Line 574](../youtube-playback-plox.user.js#L574)

| Type | Name | Line |
|---|---|---|
| `fn` | [`loadTranslations`](../youtube-playback-plox.user.js#L904) | [904](../youtube-playback-plox.user.js#L904) |
| `fn` | [`fetchUrl`](../youtube-playback-plox.user.js#L943) | [943](../youtube-playback-plox.user.js#L943) |

## [🔧 Utils](../youtube-playback-plox.user.js#L1037)
> [Line 1037](../youtube-playback-plox.user.js#L1037)

_No relevant functions or constants detected._

## [🔧 Sanitize HTML](../youtube-playback-plox.user.js#L1040)
> [Line 1040](../youtube-playback-plox.user.js#L1040)

| Type | Name | Line |
|---|---|---|
| `fn` | [`sanitizeHTML`](../youtube-playback-plox.user.js#L1050) | [1050](../youtube-playback-plox.user.js#L1050) |
| `module` | [`sanitizeHTML`](../youtube-playback-plox.user.js#L1050) | [1050](../youtube-playback-plox.user.js#L1050) |
| `fn` | [`getSafeUrl`](../youtube-playback-plox.user.js#L1074) | [1074](../youtube-playback-plox.user.js#L1074) |
| `fn` | [`scrubSensitiveData`](../youtube-playback-plox.user.js#L1094) | [1094](../youtube-playback-plox.user.js#L1094) |

## [🔧 Is Visibly Displayed](../youtube-playback-plox.user.js#L1106)
> [Line 1106](../youtube-playback-plox.user.js#L1106)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isVisiblyDisplayed`](../youtube-playback-plox.user.js#L1115) | [1115](../youtube-playback-plox.user.js#L1115) |

## [🔧 Format Time](../youtube-playback-plox.user.js#L1130)
> [Line 1130](../youtube-playback-plox.user.js#L1130)

| Type | Name | Line |
|---|---|---|
| `fn` | [`formatTime`](../youtube-playback-plox.user.js#L1152) | [1152](../youtube-playback-plox.user.js#L1152) |

## [🔧 parseTimeToSeconds](../youtube-playback-plox.user.js#L1174)
> [Line 1174](../youtube-playback-plox.user.js#L1174)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseTimeToSeconds`](../youtube-playback-plox.user.js#L1197) | [1197](../youtube-playback-plox.user.js#L1197) |

## [🔧 normalizeSeconds](../youtube-playback-plox.user.js#L1222)
> [Line 1222](../youtube-playback-plox.user.js#L1222)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeSeconds`](../youtube-playback-plox.user.js#L1241) | [1241](../youtube-playback-plox.user.js#L1241) |

## [🔧 getUrlTimeParamSeconds](../youtube-playback-plox.user.js#L1248)
> [Line 1248](../youtube-playback-plox.user.js#L1248)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getUrlTimeParamSeconds`](../youtube-playback-plox.user.js#L1256) | [1256](../youtube-playback-plox.user.js#L1256) |

## [⏳ delay](../youtube-playback-plox.user.js#L1277)
> [Line 1277](../youtube-playback-plox.user.js#L1277)

| Type | Name | Line |
|---|---|---|
| `fn` | [`delay`](../youtube-playback-plox.user.js#L1283) | [1283](../youtube-playback-plox.user.js#L1283) |
| `fn` | [`withStorageTimeout`](../youtube-playback-plox.user.js#L1297) | [1297](../youtube-playback-plox.user.js#L1297) |
| `fn` | [`runGMMutation`](../youtube-playback-plox.user.js#L1324) | [1324](../youtube-playback-plox.user.js#L1324) |
| `fn` | [`gmGetValue`](../youtube-playback-plox.user.js#L1367) | [1367](../youtube-playback-plox.user.js#L1367) |
| `fn` | [`gmSetValue`](../youtube-playback-plox.user.js#L1385) | [1385](../youtube-playback-plox.user.js#L1385) |
| `fn` | [`gmDeleteValue`](../youtube-playback-plox.user.js#L1397) | [1397](../youtube-playback-plox.user.js#L1397) |
| `fn` | [`gmListValues`](../youtube-playback-plox.user.js#L1408) | [1408](../youtube-playback-plox.user.js#L1408) |

## [🔧 setInnerHTML](../youtube-playback-plox.user.js#L1417)
> [Line 1417](../youtube-playback-plox.user.js#L1417)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTrustedTypesPolicy`](../youtube-playback-plox.user.js#L1427) | [1427](../youtube-playback-plox.user.js#L1427) |
| `fn` | [`setInnerHTML`](../youtube-playback-plox.user.js#L1452) | [1452](../youtube-playback-plox.user.js#L1452) |

## [🔧 Create Element](../youtube-playback-plox.user.js#L1492)
> [Line 1492](../youtube-playback-plox.user.js#L1492)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createElement`](../youtube-playback-plox.user.js#L1510) | [1510](../youtube-playback-plox.user.js#L1510) |
| `fn` | [`append`](../youtube-playback-plox.user.js#L1572) | [1572](../youtube-playback-plox.user.js#L1572) |
| `fn` | [`applyNumericClamping`](../youtube-playback-plox.user.js#L1599) | [1599](../youtube-playback-plox.user.js#L1599) |
| `fn` | [`clamp`](../youtube-playback-plox.user.js#L1602) | [1602](../youtube-playback-plox.user.js#L1602) |

## [🔧 Debounce](../youtube-playback-plox.user.js#L1629)
> [Line 1629](../youtube-playback-plox.user.js#L1629)

| Type | Name | Line |
|---|---|---|
| `fn` | [`debounce`](../youtube-playback-plox.user.js#L1638) | [1638](../youtube-playback-plox.user.js#L1638) |
| `fn` | [`debounced`](../youtube-playback-plox.user.js#L1641) | [1641](../youtube-playback-plox.user.js#L1641) |

## [🔧 downloadBlobMobileSafe](../youtube-playback-plox.user.js#L1664)
> [Line 1664](../youtube-playback-plox.user.js#L1664)

| Type | Name | Line |
|---|---|---|
| `fn` | [`downloadBlobMobileSafe`](../youtube-playback-plox.user.js#L1672) | [1672](../youtube-playback-plox.user.js#L1672) |

## [🗄️ Event Handlers store](../youtube-playback-plox.user.js#L1734)
> [Line 1734](../youtube-playback-plox.user.js#L1734)

| Type | Name | Line |
|---|---|---|
| `class` | [`DisposableStore`](../youtube-playback-plox.user.js#L1740) | [1740](../youtube-playback-plox.user.js#L1740) |
| `fn` | [`addDisposableListener`](../youtube-playback-plox.user.js#L1824) | [1824](../youtube-playback-plox.user.js#L1824) |
| `fn` | [`dispose`](../youtube-playback-plox.user.js#L1830) | [1830](../youtube-playback-plox.user.js#L1830) |
| `fn` | [`selfRetiringDispose`](../youtube-playback-plox.user.js#L1833) | [1833](../youtube-playback-plox.user.js#L1833) |

## [📝 Selector System](../youtube-playback-plox.user.js#L1847)
> [Line 1847](../youtube-playback-plox.user.js#L1847)

| Type | Name | Line |
|---|---|---|
| `module` | [`PREFIX`](../youtube-playback-plox.user.js#L1931) | [1931](../youtube-playback-plox.user.js#L1931) |
| `fn` | [`createSelectorSystem`](../youtube-playback-plox.user.js#L1956) | [1956](../youtube-playback-plox.user.js#L1956) |

## [💾 Simple LRU Cache](../youtube-playback-plox.user.js#L2133)
> [Line 2133](../youtube-playback-plox.user.js#L2133)

| Type | Name | Line |
|---|---|---|
| `class` | [`SimpleLRUCache`](../youtube-playback-plox.user.js#L2138) | [2138](../youtube-playback-plox.user.js#L2138) |

## [⚙️ DOM Cache System](../youtube-playback-plox.user.js#L2214)
> [Line 2214](../youtube-playback-plox.user.js#L2214)

| Type | Name | Line |
|---|---|---|
| `fn` | [`DOMHelpers`](../youtube-playback-plox.user.js#L2231) | [2231](../youtube-playback-plox.user.js#L2231) |
| `module` | [`DOMHelpers`](../youtube-playback-plox.user.js#L2231) | [2231](../youtube-playback-plox.user.js#L2231) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L2263) | [2263](../youtube-playback-plox.user.js#L2263) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L2301) | [2301](../youtube-playback-plox.user.js#L2301) |

## [🌐 Translation Functions](../youtube-playback-plox.user.js#L2580)
> [Line 2580](../youtube-playback-plox.user.js#L2580)

| Type | Name | Line |
|---|---|---|
| `fn` | [`t`](../youtube-playback-plox.user.js#L2594) | [2594](../youtube-playback-plox.user.js#L2594) |
| `fn` | [`normParams`](../youtube-playback-plox.user.js#L2604) | [2604](../youtube-playback-plox.user.js#L2604) |
| `fn` | [`replaceParams`](../youtube-playback-plox.user.js#L2621) | [2621](../youtube-playback-plox.user.js#L2621) |
| `fn` | [`setLanguage`](../youtube-playback-plox.user.js#L2637) | [2637](../youtube-playback-plox.user.js#L2637) |
| `fn` | [`detectBrowserLanguage`](../youtube-playback-plox.user.js#L2700) | [2700](../youtube-playback-plox.user.js#L2700) |
| `fn` | [`candidates`](../youtube-playback-plox.user.js#L2702) | [2702](../youtube-playback-plox.user.js#L2702) |
| `fn` | [`normalized`](../youtube-playback-plox.user.js#L2721) | [2721](../youtube-playback-plox.user.js#L2721) |

## [🎨 Styles](../youtube-playback-plox.user.js#L2745)
> [Line 2745](../youtube-playback-plox.user.js#L2745)

_No relevant functions or constants detected._

## [🎨 Theme](../youtube-playback-plox.user.js#L5358)
> [Line 5358](../youtube-playback-plox.user.js#L5358)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isYouTubeDarkTheme`](../youtube-playback-plox.user.js#L5365) | [5365](../youtube-playback-plox.user.js#L5365) |
| `fn` | [`applyTheme`](../youtube-playback-plox.user.js#L5383) | [5383](../youtube-playback-plox.user.js#L5383) |
| `fn` | [`observeThemeChanges`](../youtube-playback-plox.user.js#L5396) | [5396](../youtube-playback-plox.user.js#L5396) |
| `fn` | [`cleanupThemeObserver`](../youtube-playback-plox.user.js#L5419) | [5419](../youtube-playback-plox.user.js#L5419) |
| `fn` | [`cleanupGlobalListeners`](../youtube-playback-plox.user.js#L5430) | [5430](../youtube-playback-plox.user.js#L5430) |

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L5436)
> [Line 5436](../youtube-playback-plox.user.js#L5436)

_No relevant functions or constants detected._

## [🎨 Progress Bar Style](../youtube-playback-plox.user.js#L5598)
> [Line 5598](../youtube-playback-plox.user.js#L5598)

| Type | Name | Line |
|---|---|---|
| `fn` | [`clearAllProgressGradientState`](../youtube-playback-plox.user.js#L5610) | [5610](../youtube-playback-plox.user.js#L5610) |
| `fn` | [`syncProgressGradientStateForContainer`](../youtube-playback-plox.user.js#L5626) | [5626](../youtube-playback-plox.user.js#L5626) |
| `fn` | [`resolvePlayerRootForGradient`](../youtube-playback-plox.user.js#L5649) | [5649](../youtube-playback-plox.user.js#L5649) |
| `fn` | [`clearProgressColorFromPlayerRoot`](../youtube-playback-plox.user.js#L5660) | [5660](../youtube-playback-plox.user.js#L5660) |
| `fn` | [`applyProgressColorToPlayerRoot`](../youtube-playback-plox.user.js#L5680) | [5680](../youtube-playback-plox.user.js#L5680) |
| `fn` | [`applyProgressColorToShortsSurfaces`](../youtube-playback-plox.user.js#L5704) | [5704](../youtube-playback-plox.user.js#L5704) |
| `fn` | [`repaintWatchProgressBarFromActivePlayer`](../youtube-playback-plox.user.js#L5724) | [5724](../youtube-playback-plox.user.js#L5724) |
| `fn` | [`scheduleProgressBarGradientRepaint`](../youtube-playback-plox.user.js#L5746) | [5746](../youtube-playback-plox.user.js#L5746) |
| `fn` | [`isCurrentSession`](../youtube-playback-plox.user.js#L5748) | [5748](../youtube-playback-plox.user.js#L5748) |
| `fn` | [`paint`](../youtube-playback-plox.user.js#L5755) | [5755](../youtube-playback-plox.user.js#L5755) |
| `fn` | [`isLivePlaybackForGradient`](../youtube-playback-plox.user.js#L5777) | [5777](../youtube-playback-plox.user.js#L5777) |
| `fn` | [`updateProgressBarGradient`](../youtube-playback-plox.user.js#L5814) | [5814](../youtube-playback-plox.user.js#L5814) |
| `fn` | [`refreshProgressBarGradientForSession`](../youtube-playback-plox.user.js#L5890) | [5890](../youtube-playback-plox.user.js#L5890) |
| `fn` | [`resetProgressBarGradient`](../youtube-playback-plox.user.js#L5912) | [5912](../youtube-playback-plox.user.js#L5912) |
| `fn` | [`injectProgressBarCSS`](../youtube-playback-plox.user.js#L5934) | [5934](../youtube-playback-plox.user.js#L5934) |
| `fn` | [`getProgressColor`](../youtube-playback-plox.user.js#L6064) | [6064](../youtube-playback-plox.user.js#L6064) |
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L6092) | [6092](../youtube-playback-plox.user.js#L6092) |
| `fn` | [`getProgressColorForText`](../youtube-playback-plox.user.js#L6101) | [6101](../youtube-playback-plox.user.js#L6101) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L6115)
> [Line 6115](../youtube-playback-plox.user.js#L6115)

| Type | Name | Line |
|---|---|---|
| `fn` | [`markLocalDeletion`](../youtube-playback-plox.user.js#L6150) | [6150](../youtube-playback-plox.user.js#L6150) |
| `fn` | [`bumpStorageKeyRevision`](../youtube-playback-plox.user.js#L6169) | [6169](../youtube-playback-plox.user.js#L6169) |
| `fn` | [`getStorageRevisionSnapshot`](../youtube-playback-plox.user.js#L6182) | [6182](../youtube-playback-plox.user.js#L6182) |
| `fn` | [`storageRevisionChanged`](../youtube-playback-plox.user.js#L6195) | [6195](../youtube-playback-plox.user.js#L6195) |
| `fn` | [`invalidateSessionSavedData`](../youtube-playback-plox.user.js#L6268) | [6268](../youtube-playback-plox.user.js#L6268) |
| `fn` | [`broadcastStorageChange`](../youtube-playback-plox.user.js#L6285) | [6285](../youtube-playback-plox.user.js#L6285) |
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L6308) | [6308](../youtube-playback-plox.user.js#L6308) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L6308) | [6308](../youtube-playback-plox.user.js#L6308) |
| `fn` | [`enqueueDurableOperation`](../youtube-playback-plox.user.js#L6338) | [6338](../youtube-playback-plox.user.js#L6338) |
| `fn` | [`hasDurableGMStorage`](../youtube-playback-plox.user.js#L6351) | [6351](../youtube-playback-plox.user.js#L6351) |
| `fn` | [`hasAnyGMStorageApi`](../youtube-playback-plox.user.js#L6361) | [6361](../youtube-playback-plox.user.js#L6361) |
| `fn` | [`waitForDurableMutations`](../youtube-playback-plox.user.js#L6374) | [6374](../youtube-playback-plox.user.js#L6374) |
| `fn` | [`canUseIDB`](../youtube-playback-plox.user.js#L6379) | [6379](../youtube-playback-plox.user.js#L6379) |
| `fn` | [`isStorageRecordError`](../youtube-playback-plox.user.js#L6386) | [6386](../youtube-playback-plox.user.js#L6386) |
| `fn` | [`isStorageProviderError`](../youtube-playback-plox.user.js#L6396) | [6396](../youtube-playback-plox.user.js#L6396) |
| `fn` | [`scheduleQuarantineNotice`](../youtube-playback-plox.user.js#L6406) | [6406](../youtube-playback-plox.user.js#L6406) |
| `fn` | [`registerQuarantinedRecord`](../youtube-playback-plox.user.js#L6444) | [6444](../youtube-playback-plox.user.js#L6444) |
| `fn` | [`quarantineRecordError`](../youtube-playback-plox.user.js#L6466) | [6466](../youtube-playback-plox.user.js#L6466) |
| `fn` | [`getQuarantinedRecords`](../youtube-playback-plox.user.js#L6475) | [6475](../youtube-playback-plox.user.js#L6475) |
| `fn` | [`persistRepairedRows`](../youtube-playback-plox.user.js#L6486) | [6486](../youtube-playback-plox.user.js#L6486) |
| `fn` | [`buildStorageDamageReport`](../youtube-playback-plox.user.js#L6514) | [6514](../youtube-playback-plox.user.js#L6514) |
| `fn` | [`markIDBUnavailable`](../youtube-playback-plox.user.js#L6540) | [6540](../youtube-playback-plox.user.js#L6540) |
| `fn` | [`markIDBAvailable`](../youtube-playback-plox.user.js#L6545) | [6545](../youtube-playback-plox.user.js#L6545) |
| `fn` | [`pickNewerDurableRecord`](../youtube-playback-plox.user.js#L6556) | [6556](../youtube-playback-plox.user.js#L6556) |
| `fn` | [`getGMFallback`](../youtube-playback-plox.user.js#L6570) | [6570](../youtube-playback-plox.user.js#L6570) |
| `fn` | [`parseStoredRecord`](../youtube-playback-plox.user.js#L6599) | [6599](../youtube-playback-plox.user.js#L6599) |
| `fn` | [`setGMFallback`](../youtube-playback-plox.user.js#L6626) | [6626](../youtube-playback-plox.user.js#L6626) |
| `fn` | [`setGMFallbackNewestWins`](../youtube-playback-plox.user.js#L6640) | [6640](../youtube-playback-plox.user.js#L6640) |
| `fn` | [`deleteGMFallback`](../youtube-playback-plox.user.js#L6663) | [6663](../youtube-playback-plox.user.js#L6663) |
| `fn` | [`reconcileGMFallbackAfterIDB`](../youtube-playback-plox.user.js#L6700) | [6700](../youtube-playback-plox.user.js#L6700) |
| `fn` | [`reconcileGMFallbacksAfterIDB`](../youtube-playback-plox.user.js#L6791) | [6791](../youtube-playback-plox.user.js#L6791) |
| `fn` | [`initialize`](../youtube-playback-plox.user.js#L6875) | [6875](../youtube-playback-plox.user.js#L6875) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L6940) | [6940](../youtube-playback-plox.user.js#L6940) |
| `fn` | [`set`](../youtube-playback-plox.user.js#L7166) | [7166](../youtube-playback-plox.user.js#L7166) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7170) | [7170](../youtube-playback-plox.user.js#L7170) |
| `fn` | [`setMany`](../youtube-playback-plox.user.js#L7259) | [7259](../youtube-playback-plox.user.js#L7259) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7270) | [7270](../youtube-playback-plox.user.js#L7270) |
| `fn` | [`deleteGMFallbackIfUnchanged`](../youtube-playback-plox.user.js#L7433) | [7433](../youtube-playback-plox.user.js#L7433) |
| `fn` | [`del`](../youtube-playback-plox.user.js#L7456) | [7456](../youtube-playback-plox.user.js#L7456) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7459) | [7459](../youtube-playback-plox.user.js#L7459) |
| `fn` | [`repairQuarantinedRecords`](../youtube-playback-plox.user.js#L7601) | [7601](../youtube-playback-plox.user.js#L7601) |
| `fn` | [`purgeQuarantinedRecords`](../youtube-playback-plox.user.js#L7654) | [7654](../youtube-playback-plox.user.js#L7654) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L7724) | [7724](../youtube-playback-plox.user.js#L7724) |
| `fn` | [`rawKeys`](../youtube-playback-plox.user.js#L7788) | [7788](../youtube-playback-plox.user.js#L7788) |
| `fn` | [`getCompleteVideoSnapshot`](../youtube-playback-plox.user.js#L7854) | [7854](../youtube-playback-plox.user.js#L7854) |
| `fn` | [`getBackendInfo`](../youtube-playback-plox.user.js#L8031) | [8031](../youtube-playback-plox.user.js#L8031) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L8060) | [8060](../youtube-playback-plox.user.js#L8060) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L8060) | [8060](../youtube-playback-plox.user.js#L8060) |
| `fn` | [`openDatabase`](../youtube-playback-plox.user.js#L8068) | [8068](../youtube-playback-plox.user.js#L8068) |
| `fn` | [`failOpen`](../youtube-playback-plox.user.js#L8074) | [8074](../youtube-playback-plox.user.js#L8074) |
| `fn` | [`runInStore`](../youtube-playback-plox.user.js#L8134) | [8134](../youtube-playback-plox.user.js#L8134) |
| `fn` | [`enqueue`](../youtube-playback-plox.user.js#L8159) | [8159](../youtube-playback-plox.user.js#L8159) |
| `fn` | [`describeStoredValueType`](../youtube-playback-plox.user.js#L8175) | [8175](../youtube-playback-plox.user.js#L8175) |
| `fn` | [`isEmptyStoredValue`](../youtube-playback-plox.user.js#L8189) | [8189](../youtube-playback-plox.user.js#L8189) |
| `fn` | [`sanitizeToJsonSafe`](../youtube-playback-plox.user.js#L8210) | [8210](../youtube-playback-plox.user.js#L8210) |
| `fn` | [`attemptStoredValueRepair`](../youtube-playback-plox.user.js#L8257) | [8257](../youtube-playback-plox.user.js#L8257) |
| `fn` | [`sanitizeEntries`](../youtube-playback-plox.user.js#L8326) | [8326](../youtube-playback-plox.user.js#L8326) |
| `fn` | [`pushEntry`](../youtube-playback-plox.user.js#L8339) | [8339](../youtube-playback-plox.user.js#L8339) |
| `fn` | [`getAllEntries`](../youtube-playback-plox.user.js#L8444) | [8444](../youtube-playback-plox.user.js#L8444) |
| `fn` | [`repairEntries`](../youtube-playback-plox.user.js#L8456) | [8456](../youtube-playback-plox.user.js#L8456) |
| `fn` | [`putEntry`](../youtube-playback-plox.user.js#L8490) | [8490](../youtube-playback-plox.user.js#L8490) |
| `fn` | [`deleteEntry`](../youtube-playback-plox.user.js#L8494) | [8494](../youtube-playback-plox.user.js#L8494) |
| `fn` | [`bulkDelete`](../youtube-playback-plox.user.js#L8503) | [8503](../youtube-playback-plox.user.js#L8503) |
| `fn` | [`bulkPut`](../youtube-playback-plox.user.js#L8522) | [8522](../youtube-playback-plox.user.js#L8522) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L8549) | [8549](../youtube-playback-plox.user.js#L8549) |
| `fn` | [`diagnose`](../youtube-playback-plox.user.js#L8572) | [8572](../youtube-playback-plox.user.js#L8572) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L8628) | [8628](../youtube-playback-plox.user.js#L8628) |
| `fn` | [`prefixKey`](../youtube-playback-plox.user.js#L8637) | [8637](../youtube-playback-plox.user.js#L8637) |
| `fn` | [`stripPrefix`](../youtube-playback-plox.user.js#L8638) | [8638](../youtube-playback-plox.user.js#L8638) |
| `fn` | [`hasPrefix`](../youtube-playback-plox.user.js#L8639) | [8639](../youtube-playback-plox.user.js#L8639) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L8890) | [8890](../youtube-playback-plox.user.js#L8890) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L8908) | [8908](../youtube-playback-plox.user.js#L8908) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L8934) | [8934](../youtube-playback-plox.user.js#L8934) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L8950) | [8950](../youtube-playback-plox.user.js#L8950) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L9013) | [9013](../youtube-playback-plox.user.js#L9013) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L9031) | [9031](../youtube-playback-plox.user.js#L9031) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L9039) | [9039](../youtube-playback-plox.user.js#L9039) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L9064) | [9064](../youtube-playback-plox.user.js#L9064) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L9080)
> [Line 9080](../youtube-playback-plox.user.js#L9080)

_No relevant functions or constants detected._

## [📢 Ad Detector](../youtube-playback-plox.user.js#L9100)
> [Line 9100](../youtube-playback-plox.user.js#L9100)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L9102) | [9102](../youtube-playback-plox.user.js#L9102) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L9153) | [9153](../youtube-playback-plox.user.js#L9153) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L9278)
> [Line 9278](../youtube-playback-plox.user.js#L9278)

| Type | Name | Line |
|---|---|---|
| `class` | [`VirtualScroller`](../youtube-playback-plox.user.js#L9295) | [9295](../youtube-playback-plox.user.js#L9295) |

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L9767)
> [Line 9767](../youtube-playback-plox.user.js#L9767)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L9776) | [9776](../youtube-playback-plox.user.js#L9776) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L9807) | [9807](../youtube-playback-plox.user.js#L9807) |
| `fn` | [`exportStorageDamageReport`](../youtube-playback-plox.user.js#L9860) | [9860](../youtube-playback-plox.user.js#L9860) |
| `fn` | [`runStorageRepairFlow`](../youtube-playback-plox.user.js#L9899) | [9899](../youtube-playback-plox.user.js#L9899) |
| `fn` | [`renderStorageDamageNotice`](../youtube-playback-plox.user.js#L9966) | [9966](../youtube-playback-plox.user.js#L9966) |
| `fn` | [`copyExportDataToClipboard`](../youtube-playback-plox.user.js#L10023) | [10023](../youtube-playback-plox.user.js#L10023) |
| `fn` | [`mergeImportedVideoData`](../youtube-playback-plox.user.js#L10078) | [10078](../youtube-playback-plox.user.js#L10078) |
| `fn` | [`detectImportFormat`](../youtube-playback-plox.user.js#L10139) | [10139](../youtube-playback-plox.user.js#L10139) |
| `fn` | [`hasImportableRecords`](../youtube-playback-plox.user.js#L10153) | [10153](../youtube-playback-plox.user.js#L10153) |
| `fn` | [`looksLikeFreeTubeExport`](../youtube-playback-plox.user.js#L10170) | [10170](../youtube-playback-plox.user.js#L10170) |
| `fn` | [`parseImportPayload`](../youtube-playback-plox.user.js#L10183) | [10183](../youtube-playback-plox.user.js#L10183) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L10222) | [10222](../youtube-playback-plox.user.js#L10222) |
| `fn` | [`importCommitGuard`](../youtube-playback-plox.user.js#L10224) | [10224](../youtube-playback-plox.user.js#L10224) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L10349)
> [Line 10349](../youtube-playback-plox.user.js#L10349)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getGitHubErrorMsg`](../youtube-playback-plox.user.js#L10352) | [10352](../youtube-playback-plox.user.js#L10352) |
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L10364) | [10364](../youtube-playback-plox.user.js#L10364) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L10394) | [10394](../youtube-playback-plox.user.js#L10394) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L10395) | [10395](../youtube-playback-plox.user.js#L10395) |
| `fn` | [`sendGistRequest`](../youtube-playback-plox.user.js#L10417) | [10417](../youtube-playback-plox.user.js#L10417) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L10513) | [10513](../youtube-playback-plox.user.js#L10513) |
| `fn` | [`finish`](../youtube-playback-plox.user.js#L10523) | [10523](../youtube-playback-plox.user.js#L10523) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L10537) | [10537](../youtube-playback-plox.user.js#L10537) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L10723) | [10723](../youtube-playback-plox.user.js#L10723) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L10744) | [10744](../youtube-playback-plox.user.js#L10744) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L10823) | [10823](../youtube-playback-plox.user.js#L10823) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L10853) | [10853](../youtube-playback-plox.user.js#L10853) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L10886)
> [Line 10886](../youtube-playback-plox.user.js#L10886)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L10887) | [10887](../youtube-playback-plox.user.js#L10887) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L10926) | [10926](../youtube-playback-plox.user.js#L10926) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L11068)
> [Line 11068](../youtube-playback-plox.user.js#L11068)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeCompletionHistory`](../youtube-playback-plox.user.js#L11076) | [11076](../youtube-playback-plox.user.js#L11076) |
| `fn` | [`normalizeVideoData`](../youtube-playback-plox.user.js#L11104) | [11104](../youtube-playback-plox.user.js#L11104) |
| `fn` | [`safeText`](../youtube-playback-plox.user.js#L11107) | [11107](../youtube-playback-plox.user.js#L11107) |
| `fn` | [`safeNumber`](../youtube-playback-plox.user.js#L11112) | [11112](../youtube-playback-plox.user.js#L11112) |
| `fn` | [`safeNullableText`](../youtube-playback-plox.user.js#L11116) | [11116](../youtube-playback-plox.user.js#L11116) |

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L11166)
> [Line 11166](../youtube-playback-plox.user.js#L11166)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toFreeTubeFormat`](../youtube-playback-plox.user.js#L11172) | [11172](../youtube-playback-plox.user.js#L11172) |

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L11257)
> [Line 11257](../youtube-playback-plox.user.js#L11257)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseFreeTubeDB`](../youtube-playback-plox.user.js#L11263) | [11263](../youtube-playback-plox.user.js#L11263) |

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L11350)
> [Line 11350](../youtube-playback-plox.user.js#L11350)

| Type | Name | Line |
|---|---|---|
| `fn` | [`fromFreeTubeFormat`](../youtube-playback-plox.user.js#L11356) | [11356](../youtube-playback-plox.user.js#L11356) |
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L11365) | [11365](../youtube-playback-plox.user.js#L11365) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L11380)
> [Line 11380](../youtube-playback-plox.user.js#L11380)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTubeFormat`](../youtube-playback-plox.user.js#L11385) | [11385](../youtube-playback-plox.user.js#L11385) |

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L11424)
> [Line 11424](../youtube-playback-plox.user.js#L11424)

| Type | Name | Line |
|---|---|---|
| `fn` | [`importFromFreeTubeFormat`](../youtube-playback-plox.user.js#L11430) | [11430](../youtube-playback-plox.user.js#L11430) |
| `fn` | [`importCommitGuard`](../youtube-playback-plox.user.js#L11432) | [11432](../youtube-playback-plox.user.js#L11432) |

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L11522)
> [Line 11522](../youtube-playback-plox.user.js#L11522)

| Type | Name | Line |
|---|---|---|
| `fn` | [`insertCompletionEvent`](../youtube-playback-plox.user.js#L11530) | [11530](../youtube-playback-plox.user.js#L11530) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L11558) | [11558](../youtube-playback-plox.user.js#L11558) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L11569)
> [Line 11569](../youtube-playback-plox.user.js#L11569)

| Type | Name | Line |
|---|---|---|
| `fn` | [`internalSaveVideoGeneric`](../youtube-playback-plox.user.js#L11574) | [11574](../youtube-playback-plox.user.js#L11574) |
| `fn` | [`isExpectedSessionCurrent`](../youtube-playback-plox.user.js#L11584) | [11584](../youtube-playback-plox.user.js#L11584) |
| `fn` | [`isDestructiveEpochCurrent`](../youtube-playback-plox.user.js#L11590) | [11590](../youtube-playback-plox.user.js#L11590) |
| `fn` | [`commitGuard`](../youtube-playback-plox.user.js#L11593) | [11593](../youtube-playback-plox.user.js#L11593) |
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L11664) | [11664](../youtube-playback-plox.user.js#L11664) |

## [📺 Helpers](../youtube-playback-plox.user.js#L11811)
> [Line 11811](../youtube-playback-plox.user.js#L11811)

_No relevant functions or constants detected._

## [📺 Gets saved video data](../youtube-playback-plox.user.js#L11814)
> [Line 11814](../youtube-playback-plox.user.js#L11814)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSavedVideoData`](../youtube-playback-plox.user.js#L11823) | [11823](../youtube-playback-plox.user.js#L11823) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L11871)
> [Line 11871](../youtube-playback-plox.user.js#L11871)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L11907) | [11907](../youtube-playback-plox.user.js#L11907) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L11950)
> [Line 11950](../youtube-playback-plox.user.js#L11950)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTypeFromPageManager`](../youtube-playback-plox.user.js#L11973) | [11973](../youtube-playback-plox.user.js#L11973) |
| `fn` | [`getTypeFromYtApp`](../youtube-playback-plox.user.js#L12013) | [12013](../youtube-playback-plox.user.js#L12013) |
| `fn` | [`detectFromURL`](../youtube-playback-plox.user.js#L12039) | [12039](../youtube-playback-plox.user.js#L12039) |
| `fn` | [`cachePageType`](../youtube-playback-plox.user.js#L12111) | [12111](../youtube-playback-plox.user.js#L12111) |
| `fn` | [`getYouTubePageType`](../youtube-playback-plox.user.js#L12130) | [12130](../youtube-playback-plox.user.js#L12130) |

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L12155)
> [Line 12155](../youtube-playback-plox.user.js#L12155)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseYouTubeResource`](../youtube-playback-plox.user.js#L12215) | [12215](../youtube-playback-plox.user.js#L12215) |
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L12252) | [12252](../youtube-playback-plox.user.js#L12252) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L12361)
> [Line 12361](../youtube-playback-plox.user.js#L12361)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubeVideoIdFromUrl`](../youtube-playback-plox.user.js#L12371) | [12371](../youtube-playback-plox.user.js#L12371) |

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L12383)
> [Line 12383](../youtube-playback-plox.user.js#L12383)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getYouTubeVideoContextFromUrl`](../youtube-playback-plox.user.js#L12395) | [12395](../youtube-playback-plox.user.js#L12395) |

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L12411)
> [Line 12411](../youtube-playback-plox.user.js#L12411)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubePlaylistIdFromUrl`](../youtube-playback-plox.user.js#L12419) | [12419](../youtube-playback-plox.user.js#L12419) |
| `fn` | [`classifyPlaylist`](../youtube-playback-plox.user.js#L12443) | [12443](../youtube-playback-plox.user.js#L12443) |

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L12456)
> [Line 12456](../youtube-playback-plox.user.js#L12456)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L12477) | [12477](../youtube-playback-plox.user.js#L12477) |
| `fn` | [`extractYtInitialData`](../youtube-playback-plox.user.js#L12497) | [12497](../youtube-playback-plox.user.js#L12497) |
| `fn` | [`getPlaylistName`](../youtube-playback-plox.user.js#L12603) | [12603](../youtube-playback-plox.user.js#L12603) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L12619) | [12619](../youtube-playback-plox.user.js#L12619) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L12712) | [12712](../youtube-playback-plox.user.js#L12712) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L12739)
> [Line 12739](../youtube-playback-plox.user.js#L12739)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L12765) | [12765](../youtube-playback-plox.user.js#L12765) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L12775)
> [Line 12775](../youtube-playback-plox.user.js#L12775)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTimeDisplayMessage`](../youtube-playback-plox.user.js#L12783) | [12783](../youtube-playback-plox.user.js#L12783) |
| `fn` | [`hasTimeDisplayMessage`](../youtube-playback-plox.user.js#L12792) | [12792](../youtube-playback-plox.user.js#L12792) |
| `fn` | [`showDisplayMessage`](../youtube-playback-plox.user.js#L12802) | [12802](../youtube-playback-plox.user.js#L12802) |
| `fn` | [`restoreDisplayButtons`](../youtube-playback-plox.user.js#L12820) | [12820](../youtube-playback-plox.user.js#L12820) |
| `fn` | [`createSplitButtonGroup`](../youtube-playback-plox.user.js#L12851) | [12851](../youtube-playback-plox.user.js#L12851) |
| `fn` | [`getDisplayContextVideo`](../youtube-playback-plox.user.js#L12876) | [12876](../youtube-playback-plox.user.js#L12876) |
| `fn` | [`getDisplayContextPlayer`](../youtube-playback-plox.user.js#L12891) | [12891](../youtube-playback-plox.user.js#L12891) |
| `fn` | [`getPlaybackNotificationKind`](../youtube-playback-plox.user.js#L12906) | [12906](../youtube-playback-plox.user.js#L12906) |
| `fn` | [`buildPlaybackNotificationMessage`](../youtube-playback-plox.user.js#L12923) | [12923](../youtube-playback-plox.user.js#L12923) |
| `fn` | [`setupManualSaveButton`](../youtube-playback-plox.user.js#L12962) | [12962](../youtube-playback-plox.user.js#L12962) |
| `fn` | [`getActiveShortsControlsContainer`](../youtube-playback-plox.user.js#L13022) | [13022](../youtube-playback-plox.user.js#L13022) |
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L13067) | [13067](../youtube-playback-plox.user.js#L13067) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L13067) | [13067](../youtube-playback-plox.user.js#L13067) |
| `fn` | [`getDisplayDisposables`](../youtube-playback-plox.user.js#L13089) | [13089](../youtube-playback-plox.user.js#L13089) |
| `fn` | [`disposeDisplayNode`](../youtube-playback-plox.user.js#L13102) | [13102](../youtube-playback-plox.user.js#L13102) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L13109) | [13109](../youtube-playback-plox.user.js#L13109) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L13119) | [13119](../youtube-playback-plox.user.js#L13119) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L13127) | [13127](../youtube-playback-plox.user.js#L13127) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L13135) | [13135](../youtube-playback-plox.user.js#L13135) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L13158) | [13158](../youtube-playback-plox.user.js#L13158) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L13170) | [13170](../youtube-playback-plox.user.js#L13170) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L13173) | [13173](../youtube-playback-plox.user.js#L13173) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L13183) | [13183](../youtube-playback-plox.user.js#L13183) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L13188) | [13188](../youtube-playback-plox.user.js#L13188) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L13211) | [13211](../youtube-playback-plox.user.js#L13211) |
| `fn` | [`scheduleShortsFrame`](../youtube-playback-plox.user.js#L13235) | [13235](../youtube-playback-plox.user.js#L13235) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L13244) | [13244](../youtube-playback-plox.user.js#L13244) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L13253) | [13253](../youtube-playback-plox.user.js#L13253) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L13303) | [13303](../youtube-playback-plox.user.js#L13303) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L13366) | [13366](../youtube-playback-plox.user.js#L13366) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L13422) | [13422](../youtube-playback-plox.user.js#L13422) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L13493) | [13493](../youtube-playback-plox.user.js#L13493) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L13519) | [13519](../youtube-playback-plox.user.js#L13519) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L13533) | [13533](../youtube-playback-plox.user.js#L13533) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L13537) | [13537](../youtube-playback-plox.user.js#L13537) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L13544) | [13544](../youtube-playback-plox.user.js#L13544) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L13562) | [13562](../youtube-playback-plox.user.js#L13562) |
| `fn` | [`startShortsPanelObserver`](../youtube-playback-plox.user.js#L13576) | [13576](../youtube-playback-plox.user.js#L13576) |
| `fn` | [`stopShortsPanelObserver`](../youtube-playback-plox.user.js#L13624) | [13624](../youtube-playback-plox.user.js#L13624) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L13651)
> [Line 13651](../youtube-playback-plox.user.js#L13651)

| Type | Name | Line |
|---|---|---|
| `fn` | [`disposeToastRuntime`](../youtube-playback-plox.user.js#L13663) | [13663](../youtube-playback-plox.user.js#L13663) |
| `fn` | [`registerToastRuntime`](../youtube-playback-plox.user.js#L13691) | [13691](../youtube-playback-plox.user.js#L13691) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L13692) | [13692](../youtube-playback-plox.user.js#L13692) |
| `fn` | [`createToastContainer`](../youtube-playback-plox.user.js#L13708) | [13708](../youtube-playback-plox.user.js#L13708) |
| `fn` | [`fadeAndRemoveToast`](../youtube-playback-plox.user.js#L13734) | [13734](../youtube-playback-plox.user.js#L13734) |
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L13755) | [13755](../youtube-playback-plox.user.js#L13755) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L13779) | [13779](../youtube-playback-plox.user.js#L13779) |
| `fn` | [`showFloatingToast`](../youtube-playback-plox.user.js#L13803) | [13803](../youtube-playback-plox.user.js#L13803) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L13946)
> [Line 13946](../youtube-playback-plox.user.js#L13946)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L13949) | [13949](../youtube-playback-plox.user.js#L13949) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L13993)
> [Line 13993](../youtube-playback-plox.user.js#L13993)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L14033) | [14033](../youtube-playback-plox.user.js#L14033) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L14039) | [14039](../youtube-playback-plox.user.js#L14039) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L14047) | [14047](../youtube-playback-plox.user.js#L14047) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L14093) | [14093](../youtube-playback-plox.user.js#L14093) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L14097) | [14097](../youtube-playback-plox.user.js#L14097) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L14100) | [14100](../youtube-playback-plox.user.js#L14100) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L14116) | [14116](../youtube-playback-plox.user.js#L14116) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L14125) | [14125](../youtube-playback-plox.user.js#L14125) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L14155) | [14155](../youtube-playback-plox.user.js#L14155) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L14169) | [14169](../youtube-playback-plox.user.js#L14169) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L14173) | [14173](../youtube-playback-plox.user.js#L14173) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L14311)
> [Line 14311](../youtube-playback-plox.user.js#L14311)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSettingsUI`](../youtube-playback-plox.user.js#L14314) | [14314](../youtube-playback-plox.user.js#L14314) |
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L14345) | [14345](../youtube-playback-plox.user.js#L14345) |
| `fn` | [`onSettingsKeyDown`](../youtube-playback-plox.user.js#L14367) | [14367](../youtube-playback-plox.user.js#L14367) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L14462) | [14462](../youtube-playback-plox.user.js#L14462) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L14549) | [14549](../youtube-playback-plox.user.js#L14549) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L14550) | [14550](../youtube-playback-plox.user.js#L14550) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L14639) | [14639](../youtube-playback-plox.user.js#L14639) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L14640) | [14640](../youtube-playback-plox.user.js#L14640) |
| `fn` | [`getInnerTubeClientVersion`](../youtube-playback-plox.user.js#L14672) | [14672](../youtube-playback-plox.user.js#L14672) |
| `fn` | [`idbDiag`](../youtube-playback-plox.user.js#L14701) | [14701](../youtube-playback-plox.user.js#L14701) |
| `fn` | [`safeModeActive`](../youtube-playback-plox.user.js#L14719) | [14719](../youtube-playback-plox.user.js#L14719) |
| `fn` | [`activeSessions`](../youtube-playback-plox.user.js#L14720) | [14720](../youtube-playback-plox.user.js#L14720) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L14834)
> [Line 14834](../youtube-playback-plox.user.js#L14834)

| Type | Name | Line |
|---|---|---|
| `fn` | [`notifySeekOrProgress`](../youtube-playback-plox.user.js#L14836) | [14836](../youtube-playback-plox.user.js#L14836) |

## [🎵 Video Selection](../youtube-playback-plox.user.js#L14892)
> [Line 14892](../youtube-playback-plox.user.js#L14892)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleManagementMode`](../youtube-playback-plox.user.js#L14907) | [14907](../youtube-playback-plox.user.js#L14907) |
| `fn` | [`updateFooterButtons`](../youtube-playback-plox.user.js#L14920) | [14920](../youtube-playback-plox.user.js#L14920) |
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L14991) | [14991](../youtube-playback-plox.user.js#L14991) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L14998) | [14998](../youtube-playback-plox.user.js#L14998) |
| `fn` | [`createFooterActionMenu`](../youtube-playback-plox.user.js#L15058) | [15058](../youtube-playback-plox.user.js#L15058) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L15088) | [15088](../youtube-playback-plox.user.js#L15088) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L15092) | [15092](../youtube-playback-plox.user.js#L15092) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L15101) | [15101](../youtube-playback-plox.user.js#L15101) |
| `fn` | [`closeImportMenu`](../youtube-playback-plox.user.js#L15190) | [15190](../youtube-playback-plox.user.js#L15190) |
| `fn` | [`onImportOutsideClick`](../youtube-playback-plox.user.js#L15199) | [15199](../youtube-playback-plox.user.js#L15199) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L15590) | [15590](../youtube-playback-plox.user.js#L15590) |
| `fn` | [`updateManagementFooterState`](../youtube-playback-plox.user.js#L15683) | [15683](../youtube-playback-plox.user.js#L15683) |
| `fn` | [`togglePlaylistCreationMode`](../youtube-playback-plox.user.js#L15713) | [15713](../youtube-playback-plox.user.js#L15713) |
| `fn` | [`copyToClipboard`](../youtube-playback-plox.user.js#L15730) | [15730](../youtube-playback-plox.user.js#L15730) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L15740) | [15740](../youtube-playback-plox.user.js#L15740) |
| `fn` | [`toggleVideoSelection`](../youtube-playback-plox.user.js#L15803) | [15803](../youtube-playback-plox.user.js#L15803) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L15835)
> [Line 15835](../youtube-playback-plox.user.js#L15835)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L15841) | [15841](../youtube-playback-plox.user.js#L15841) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L15841) | [15841](../youtube-playback-plox.user.js#L15841) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L15842) | [15842](../youtube-playback-plox.user.js#L15842) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L15851) | [15851](../youtube-playback-plox.user.js#L15851) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L15856) | [15856](../youtube-playback-plox.user.js#L15856) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L15867) | [15867](../youtube-playback-plox.user.js#L15867) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L15884) | [15884](../youtube-playback-plox.user.js#L15884) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L15918) | [15918](../youtube-playback-plox.user.js#L15918) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L15943) | [15943](../youtube-playback-plox.user.js#L15943) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L15945) | [15945](../youtube-playback-plox.user.js#L15945) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L15964) | [15964](../youtube-playback-plox.user.js#L15964) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L15964) | [15964](../youtube-playback-plox.user.js#L15964) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L15966) | [15966](../youtube-playback-plox.user.js#L15966) |
| `fn` | [`shouldDropVideoEvent`](../youtube-playback-plox.user.js#L15978) | [15978](../youtube-playback-plox.user.js#L15978) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L15987) | [15987](../youtube-playback-plox.user.js#L15987) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L15987) | [15987](../youtube-playback-plox.user.js#L15987) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L15998) | [15998](../youtube-playback-plox.user.js#L15998) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L16003) | [16003](../youtube-playback-plox.user.js#L16003) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L16008) | [16008](../youtube-playback-plox.user.js#L16008) |
| `fn` | [`note`](../youtube-playback-plox.user.js#L16028) | [16028](../youtube-playback-plox.user.js#L16028) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L16032) | [16032](../youtube-playback-plox.user.js#L16032) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L16050) | [16050](../youtube-playback-plox.user.js#L16050) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L16050) | [16050](../youtube-playback-plox.user.js#L16050) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L16052) | [16052](../youtube-playback-plox.user.js#L16052) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L16060) | [16060](../youtube-playback-plox.user.js#L16060) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L16110)
> [Line 16110](../youtube-playback-plox.user.js#L16110)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L16115) | [16115](../youtube-playback-plox.user.js#L16115) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L16115) | [16115](../youtube-playback-plox.user.js#L16115) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L16137) | [16137](../youtube-playback-plox.user.js#L16137) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L16157) | [16157](../youtube-playback-plox.user.js#L16157) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L16183) | [16183](../youtube-playback-plox.user.js#L16183) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L16230) | [16230](../youtube-playback-plox.user.js#L16230) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L16265) | [16265](../youtube-playback-plox.user.js#L16265) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L16266) | [16266](../youtube-playback-plox.user.js#L16266) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L16297) | [16297](../youtube-playback-plox.user.js#L16297) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L16353) | [16353](../youtube-playback-plox.user.js#L16353) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L16421) | [16421](../youtube-playback-plox.user.js#L16421) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L16431) | [16431](../youtube-playback-plox.user.js#L16431) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L16442) | [16442](../youtube-playback-plox.user.js#L16442) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L16474) | [16474](../youtube-playback-plox.user.js#L16474) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L16514) | [16514](../youtube-playback-plox.user.js#L16514) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L16525) | [16525](../youtube-playback-plox.user.js#L16525) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L16549) | [16549](../youtube-playback-plox.user.js#L16549) |
| `fn` | [`clearPlayerCache`](../youtube-playback-plox.user.js#L16675) | [16675](../youtube-playback-plox.user.js#L16675) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L16897) | [16897](../youtube-playback-plox.user.js#L16897) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L16946) | [16946](../youtube-playback-plox.user.js#L16946) |

## [Processing Functions](../youtube-playback-plox.user.js#L16976)
> [Line 16976](../youtube-playback-plox.user.js#L16976)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L17002) | [17002](../youtube-playback-plox.user.js#L17002) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L17029) | [17029](../youtube-playback-plox.user.js#L17029) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L17039) | [17039](../youtube-playback-plox.user.js#L17039) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L17039) | [17039](../youtube-playback-plox.user.js#L17039) |
| `fn` | [`clearPendingRecovery`](../youtube-playback-plox.user.js#L17059) | [17059](../youtube-playback-plox.user.js#L17059) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L17064) | [17064](../youtube-playback-plox.user.js#L17064) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L17069) | [17069](../youtube-playback-plox.user.js#L17069) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L17076) | [17076](../youtube-playback-plox.user.js#L17076) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L17082) | [17082](../youtube-playback-plox.user.js#L17082) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L17100) | [17100](../youtube-playback-plox.user.js#L17100) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L17185) | [17185](../youtube-playback-plox.user.js#L17185) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L17249) | [17249](../youtube-playback-plox.user.js#L17249) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L17284) | [17284](../youtube-playback-plox.user.js#L17284) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L17314) | [17314](../youtube-playback-plox.user.js#L17314) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L17325) | [17325](../youtube-playback-plox.user.js#L17325) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L17337) | [17337](../youtube-playback-plox.user.js#L17337) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L17373) | [17373](../youtube-playback-plox.user.js#L17373) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L17452) | [17452](../youtube-playback-plox.user.js#L17452) |
| `fn` | [`handleSeekingForGradient`](../youtube-playback-plox.user.js#L17481) | [17481](../youtube-playback-plox.user.js#L17481) |
| `fn` | [`handleSeekedForGradient`](../youtube-playback-plox.user.js#L17491) | [17491](../youtube-playback-plox.user.js#L17491) |
| `fn` | [`canValidateStandalone`](../youtube-playback-plox.user.js#L17614) | [17614](../youtube-playback-plox.user.js#L17614) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L17639) | [17639](../youtube-playback-plox.user.js#L17639) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L17708) | [17708](../youtube-playback-plox.user.js#L17708) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L17911) | [17911](../youtube-playback-plox.user.js#L17911) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L18024) | [18024](../youtube-playback-plox.user.js#L18024) |
| `fn` | [`processMediaVideo`](../youtube-playback-plox.user.js#L18139) | [18139](../youtube-playback-plox.user.js#L18139) |

## [PlaybackController](../youtube-playback-plox.user.js#L18190)
> [Line 18190](../youtube-playback-plox.user.js#L18190)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L18238) | [18238](../youtube-playback-plox.user.js#L18238) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L18254) | [18254](../youtube-playback-plox.user.js#L18254) |
| `fn` | [`removeMetadataListener`](../youtube-playback-plox.user.js#L18278) | [18278](../youtube-playback-plox.user.js#L18278) |
| `fn` | [`removeCanPlayListener`](../youtube-playback-plox.user.js#L18279) | [18279](../youtube-playback-plox.user.js#L18279) |
| `fn` | [`removeAbortListener`](../youtube-playback-plox.user.js#L18280) | [18280](../youtube-playback-plox.user.js#L18280) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L18281) | [18281](../youtube-playback-plox.user.js#L18281) |
| `fn` | [`rejectAsStale`](../youtube-playback-plox.user.js#L18287) | [18287](../youtube-playback-plox.user.js#L18287) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L18291) | [18291](../youtube-playback-plox.user.js#L18291) |
| `fn` | [`onAbort`](../youtube-playback-plox.user.js#L18300) | [18300](../youtube-playback-plox.user.js#L18300) |
| `fn` | [`restoreThrottleMarker`](../youtube-playback-plox.user.js#L18453) | [18453](../youtube-playback-plox.user.js#L18453) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L18545) | [18545](../youtube-playback-plox.user.js#L18545) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L18691)
> [Line 18691](../youtube-playback-plox.user.js#L18691)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getInnerTubeConfig`](../youtube-playback-plox.user.js#L18728) | [18728](../youtube-playback-plox.user.js#L18728) |
| `fn` | [`fetchInnerTubeJson`](../youtube-playback-plox.user.js#L18743) | [18743](../youtube-playback-plox.user.js#L18743) |
| `fn` | [`fetchShortsViews`](../youtube-playback-plox.user.js#L18777) | [18777](../youtube-playback-plox.user.js#L18777) |
| `fn` | [`fetchPlaylistTitle`](../youtube-playback-plox.user.js#L18790) | [18790](../youtube-playback-plox.user.js#L18790) |
| `fn` | [`getCascadedVideoInfo`](../youtube-playback-plox.user.js#L18800) | [18800](../youtube-playback-plox.user.js#L18800) |
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L18845) | [18845](../youtube-playback-plox.user.js#L18845) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L19248)
> [Line 19248](../youtube-playback-plox.user.js#L19248)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createCustomDropdown`](../youtube-playback-plox.user.js#L19262) | [19262](../youtube-playback-plox.user.js#L19262) |
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L19273) | [19273](../youtube-playback-plox.user.js#L19273) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L19349) | [19349](../youtube-playback-plox.user.js#L19349) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L19365) | [19365](../youtube-playback-plox.user.js#L19365) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L19373) | [19373](../youtube-playback-plox.user.js#L19373) |
| `fn` | [`createSortSelector`](../youtube-playback-plox.user.js#L19390) | [19390](../youtube-playback-plox.user.js#L19390) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L19393) | [19393](../youtube-playback-plox.user.js#L19393) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L19446)
> [Line 19446](../youtube-playback-plox.user.js#L19446)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFilterSelector`](../youtube-playback-plox.user.js#L19455) | [19455](../youtube-playback-plox.user.js#L19455) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L19458) | [19458](../youtube-playback-plox.user.js#L19458) |
| `fn` | [`createRangeFilter`](../youtube-playback-plox.user.js#L19502) | [19502](../youtube-playback-plox.user.js#L19502) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L19505) | [19505](../youtube-playback-plox.user.js#L19505) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L19511) | [19511](../youtube-playback-plox.user.js#L19511) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L19519) | [19519](../youtube-playback-plox.user.js#L19519) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L19534) | [19534](../youtube-playback-plox.user.js#L19534) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L19654) | [19654](../youtube-playback-plox.user.js#L19654) |
| `fn` | [`createSearchInput`](../youtube-playback-plox.user.js#L19709) | [19709](../youtube-playback-plox.user.js#L19709) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L19734)
> [Line 19734](../youtube-playback-plox.user.js#L19734)

| Type | Name | Line |
|---|---|---|
| `fn` | [`acquireBodyOverflow`](../youtube-playback-plox.user.js#L19762) | [19762](../youtube-playback-plox.user.js#L19762) |
| `fn` | [`releaseBodyOverflow`](../youtube-playback-plox.user.js#L19776) | [19776](../youtube-playback-plox.user.js#L19776) |
| `fn` | [`getVirtualScrollerVideoItems`](../youtube-playback-plox.user.js#L19846) | [19846](../youtube-playback-plox.user.js#L19846) |
| `fn` | [`batchLoadStorageData`](../youtube-playback-plox.user.js#L19875) | [19875](../youtube-playback-plox.user.js#L19875) |

## [📁 Update Video List](../youtube-playback-plox.user.js#L19916)
> [Line 19916](../youtube-playback-plox.user.js#L19916)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSortValue`](../youtube-playback-plox.user.js#L19923) | [19923](../youtube-playback-plox.user.js#L19923) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L19935) | [19935](../youtube-playback-plox.user.js#L19935) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L19939) | [19939](../youtube-playback-plox.user.js#L19939) |
| `fn` | [`showLoadingState`](../youtube-playback-plox.user.js#L19956) | [19956](../youtube-playback-plox.user.js#L19956) |
| `fn` | [`loadVideoItems`](../youtube-playback-plox.user.js#L20019) | [20019](../youtube-playback-plox.user.js#L20019) |
| `fn` | [`resolvePlaylistTitles`](../youtube-playback-plox.user.js#L20043) | [20043](../youtube-playback-plox.user.js#L20043) |
| `fn` | [`filterItems`](../youtube-playback-plox.user.js#L20075) | [20075](../youtube-playback-plox.user.js#L20075) |
| `fn` | [`buildVirtualItems`](../youtube-playback-plox.user.js#L20119) | [20119](../youtube-playback-plox.user.js#L20119) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L20132) | [20132](../youtube-playback-plox.user.js#L20132) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L20153) | [20153](../youtube-playback-plox.user.js#L20153) |
| `fn` | [`showEmptyState`](../youtube-playback-plox.user.js#L20183) | [20183](../youtube-playback-plox.user.js#L20183) |
| `fn` | [`showListLoadErrorState`](../youtube-playback-plox.user.js#L20216) | [20216](../youtube-playback-plox.user.js#L20216) |
| `fn` | [`updateVirtualScroller`](../youtube-playback-plox.user.js#L20243) | [20243](../youtube-playback-plox.user.js#L20243) |
| `fn` | [`initVirtualScroller`](../youtube-playback-plox.user.js#L20273) | [20273](../youtube-playback-plox.user.js#L20273) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L20319) | [20319](../youtube-playback-plox.user.js#L20319) |
| `fn` | [`disconnectVirtualScrollerObserver`](../youtube-playback-plox.user.js#L20379) | [20379](../youtube-playback-plox.user.js#L20379) |
| `fn` | [`connectResizeObserver`](../youtube-playback-plox.user.js#L20394) | [20394](../youtube-playback-plox.user.js#L20394) |
| `fn` | [`updateVideoList`](../youtube-playback-plox.user.js#L20429) | [20429](../youtube-playback-plox.user.js#L20429) |
| `fn` | [`isCurrentRender`](../youtube-playback-plox.user.js#L20434) | [20434](../youtube-playback-plox.user.js#L20434) |
| `fn` | [`requestVideoListUpdate`](../youtube-playback-plox.user.js#L20508) | [20508](../youtube-playback-plox.user.js#L20508) |
| `fn` | [`closeModalVideos`](../youtube-playback-plox.user.js#L20519) | [20519](../youtube-playback-plox.user.js#L20519) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L20612) | [20612](../youtube-playback-plox.user.js#L20612) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L20629) | [20629](../youtube-playback-plox.user.js#L20629) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L20657) | [20657](../youtube-playback-plox.user.js#L20657) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L20789)
> [Line 20789](../youtube-playback-plox.user.js#L20789)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L20792) | [20792](../youtube-playback-plox.user.js#L20792) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L20807) | [20807](../youtube-playback-plox.user.js#L20807) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L20818)
> [Line 20818](../youtube-playback-plox.user.js#L20818)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSavedVideosList`](../youtube-playback-plox.user.js#L20821) | [20821](../youtube-playback-plox.user.js#L20821) |
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L20959) | [20959](../youtube-playback-plox.user.js#L20959) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L20969) | [20969](../youtube-playback-plox.user.js#L20969) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L21039) | [21039](../youtube-playback-plox.user.js#L21039) |
| `fn` | [`onSavedVideosKeyDown`](../youtube-playback-plox.user.js#L21048) | [21048](../youtube-playback-plox.user.js#L21048) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L21091)
> [Line 21091](../youtube-playback-plox.user.js#L21091)

| Type | Name | Line |
|---|---|---|
| `fn` | [`generatePlaylistColor`](../youtube-playback-plox.user.js#L21100) | [21100](../youtube-playback-plox.user.js#L21100) |
| `fn` | [`generatePlaylistBorderColor`](../youtube-playback-plox.user.js#L21129) | [21129](../youtube-playback-plox.user.js#L21129) |
| `fn` | [`handleForceTimeAction`](../youtube-playback-plox.user.js#L21151) | [21151](../youtube-playback-plox.user.js#L21151) |
| `fn` | [`handleUnlinkPlaylistAction`](../youtube-playback-plox.user.js#L21217) | [21217](../youtube-playback-plox.user.js#L21217) |
| `fn` | [`handleDeleteEntryAction`](../youtube-playback-plox.user.js#L21239) | [21239](../youtube-playback-plox.user.js#L21239) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L21272) | [21272](../youtube-playback-plox.user.js#L21272) |
| `fn` | [`handleToggleProtectionAction`](../youtube-playback-plox.user.js#L21301) | [21301](../youtube-playback-plox.user.js#L21301) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L21342) | [21342](../youtube-playback-plox.user.js#L21342) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L21390) | [21390](../youtube-playback-plox.user.js#L21390) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L21396) | [21396](../youtube-playback-plox.user.js#L21396) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L21415) | [21415](../youtube-playback-plox.user.js#L21415) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L21449) | [21449](../youtube-playback-plox.user.js#L21449) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L21501) | [21501](../youtube-playback-plox.user.js#L21501) |
| `fn` | [`generateVideoObsidianMarkdown`](../youtube-playback-plox.user.js#L21550) | [21550](../youtube-playback-plox.user.js#L21550) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L21583) | [21583](../youtube-playback-plox.user.js#L21583) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L21589) | [21589](../youtube-playback-plox.user.js#L21589) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L21605) | [21605](../youtube-playback-plox.user.js#L21605) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L21615) | [21615](../youtube-playback-plox.user.js#L21615) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L21623) | [21623](../youtube-playback-plox.user.js#L21623) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L21628) | [21628](../youtube-playback-plox.user.js#L21628) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L21635) | [21635](../youtube-playback-plox.user.js#L21635) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L21638) | [21638](../youtube-playback-plox.user.js#L21638) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L21642) | [21642](../youtube-playback-plox.user.js#L21642) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L21688) | [21688](../youtube-playback-plox.user.js#L21688) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L21688) | [21688](../youtube-playback-plox.user.js#L21688) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L21702) | [21702](../youtube-playback-plox.user.js#L21702) |
| `fn` | [`createModeSelector`](../youtube-playback-plox.user.js#L21976) | [21976](../youtube-playback-plox.user.js#L21976) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L21977) | [21977](../youtube-playback-plox.user.js#L21977) |
| `fn` | [`createViewModeSelector`](../youtube-playback-plox.user.js#L22009) | [22009](../youtube-playback-plox.user.js#L22009) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L22026) | [22026](../youtube-playback-plox.user.js#L22026) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L22027) | [22027](../youtube-playback-plox.user.js#L22027) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L22043) | [22043](../youtube-playback-plox.user.js#L22043) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L22044) | [22044](../youtube-playback-plox.user.js#L22044) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L22093) | [22093](../youtube-playback-plox.user.js#L22093) |
| `fn` | [`createOverflowToggle`](../youtube-playback-plox.user.js#L22124) | [22124](../youtube-playback-plox.user.js#L22124) |
| `fn` | [`makeToolbarGroup`](../youtube-playback-plox.user.js#L22163) | [22163](../youtube-playback-plox.user.js#L22163) |
| `fn` | [`makeDisplayToggle`](../youtube-playback-plox.user.js#L22185) | [22185](../youtube-playback-plox.user.js#L22185) |
| `fn` | [`mountSavedVideosModalActionsToolbar`](../youtube-playback-plox.user.js#L22219) | [22219](../youtube-playback-plox.user.js#L22219) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L22242) | [22242](../youtube-playback-plox.user.js#L22242) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L22256) | [22256](../youtube-playback-plox.user.js#L22256) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L22578) | [22578](../youtube-playback-plox.user.js#L22578) |
| `fn` | [`applyThumbnailToImage`](../youtube-playback-plox.user.js#L22634) | [22634](../youtube-playback-plox.user.js#L22634) |
| `fn` | [`removeLoadListener`](../youtube-playback-plox.user.js#L22643) | [22643](../youtube-playback-plox.user.js#L22643) |
| `fn` | [`removeErrorListener`](../youtube-playback-plox.user.js#L22644) | [22644](../youtube-playback-plox.user.js#L22644) |
| `fn` | [`finish`](../youtube-playback-plox.user.js#L22650) | [22650](../youtube-playback-plox.user.js#L22650) |
| `fn` | [`loadCandidate`](../youtube-playback-plox.user.js#L22665) | [22665](../youtube-playback-plox.user.js#L22665) |
| `fn` | [`createVideoGridRow`](../youtube-playback-plox.user.js#L22700) | [22700](../youtube-playback-plox.user.js#L22700) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L22717) | [22717](../youtube-playback-plox.user.js#L22717) |
| `fn` | [`scheduleHeightUpdate`](../youtube-playback-plox.user.js#L22766) | [22766](../youtube-playback-plox.user.js#L22766) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L22813) | [22813](../youtube-playback-plox.user.js#L22813) |
| `fn` | [`createVideoEntry`](../youtube-playback-plox.user.js#L22827) | [22827](../youtube-playback-plox.user.js#L22827) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L23061) | [23061](../youtube-playback-plox.user.js#L23061) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L23084) | [23084](../youtube-playback-plox.user.js#L23084) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L23085) | [23085](../youtube-playback-plox.user.js#L23085) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L23143)
> [Line 23143](../youtube-playback-plox.user.js#L23143)

| Type | Name | Line |
|---|---|---|
| `fn` | [`restoreDeletedRecordIfUnchanged`](../youtube-playback-plox.user.js#L23162) | [23162](../youtube-playback-plox.user.js#L23162) |
| `fn` | [`canCommit`](../youtube-playback-plox.user.js#L23163) | [23163](../youtube-playback-plox.user.js#L23163) |
| `fn` | [`clearAllData`](../youtube-playback-plox.user.js#L23192) | [23192](../youtube-playback-plox.user.js#L23192) |
| `fn` | [`clearCommitGuard`](../youtube-playback-plox.user.js#L23207) | [23207](../youtube-playback-plox.user.js#L23207) |
| `fn` | [`performClearAllData`](../youtube-playback-plox.user.js#L23227) | [23227](../youtube-playback-plox.user.js#L23227) |
| `fn` | [`undoClearAll`](../youtube-playback-plox.user.js#L23417) | [23417](../youtube-playback-plox.user.js#L23417) |
| `fn` | [`undoCommitGuard`](../youtube-playback-plox.user.js#L23420) | [23420](../youtube-playback-plox.user.js#L23420) |
| `fn` | [`performUndoClearAll`](../youtube-playback-plox.user.js#L23433) | [23433](../youtube-playback-plox.user.js#L23433) |

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L23501)
> [Line 23501](../youtube-playback-plox.user.js#L23501)

| Type | Name | Line |
|---|---|---|
| `fn` | [`registerOwnedMenuCommand`](../youtube-playback-plox.user.js#L23510) | [23510](../youtube-playback-plox.user.js#L23510) |
| `fn` | [`unregisterOwnedMenuCommands`](../youtube-playback-plox.user.js#L23520) | [23520](../youtube-playback-plox.user.js#L23520) |
| `fn` | [`registerMenuCommands`](../youtube-playback-plox.user.js#L23533) | [23533](../youtube-playback-plox.user.js#L23533) |

## [🔄 Data Migration](../youtube-playback-plox.user.js#L23559)
> [Line 23559](../youtube-playback-plox.user.js#L23559)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeVideoType`](../youtube-playback-plox.user.js#L23568) | [23568](../youtube-playback-plox.user.js#L23568) |
| `fn` | [`cleanupNonVideoData`](../youtube-playback-plox.user.js#L23590) | [23590](../youtube-playback-plox.user.js#L23590) |
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L23617) | [23617](../youtube-playback-plox.user.js#L23617) |
| `fn` | [`runAutoCleanup`](../youtube-playback-plox.user.js#L23838) | [23838](../youtube-playback-plox.user.js#L23838) |
| `fn` | [`cleanupCommitGuard`](../youtube-playback-plox.user.js#L23858) | [23858](../youtube-playback-plox.user.js#L23858) |

## [🚀 Init](../youtube-playback-plox.user.js#L24062)
> [Line 24062](../youtube-playback-plox.user.js#L24062)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L24075) | [24075](../youtube-playback-plox.user.js#L24075) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L24097) | [24097](../youtube-playback-plox.user.js#L24097) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L24456) | [24456](../youtube-playback-plox.user.js#L24456) |

