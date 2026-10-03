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
20. [📝 Selector System](#selector-system) - [line 1820](../youtube-playback-plox.user.js#L1820)
21. [💾 Simple LRU Cache](#simple-lru-cache) - [line 2106](../youtube-playback-plox.user.js#L2106)
22. [⚙️ DOM Cache System](#dom-cache-system) - [line 2187](../youtube-playback-plox.user.js#L2187)
23. [🌐 Translation Functions](#translation-functions) - [line 2553](../youtube-playback-plox.user.js#L2553)
24. [🎨 Styles](#styles) - [line 2718](../youtube-playback-plox.user.js#L2718)
25. [🎨 Theme](#theme) - [line 5331](../youtube-playback-plox.user.js#L5331)
26. [🎨 SVG Icons](#svg-icons) - [line 5409](../youtube-playback-plox.user.js#L5409)
27. [🎨 Progress Bar Style](#progress-bar-style) - [line 5571](../youtube-playback-plox.user.js#L5571)
28. [💾 Storage + Settings](#storage-settings) - [line 6088](../youtube-playback-plox.user.js#L6088)
29. [📢 Ad Caches](#ad-caches) - [line 9053](../youtube-playback-plox.user.js#L9053)
30. [📢 Ad Detector](#ad-detector) - [line 9073](../youtube-playback-plox.user.js#L9073)
31. [🎯 VirtualScroller](#virtualscroller) - [line 9251](../youtube-playback-plox.user.js#L9251)
32. [📤 Import/Export JSON](#importexport-json) - [line 9721](../youtube-playback-plox.user.js#L9721)
33. [☁️ GitHub Backup](#github-backup) - [line 10284](../youtube-playback-plox.user.js#L10284)
34. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 10821](../youtube-playback-plox.user.js#L10821)
35. [🔄 Normalize Video Data](#normalize-video-data) - [line 11003](../youtube-playback-plox.user.js#L11003)
36. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 11101](../youtube-playback-plox.user.js#L11101)
37. [Parse FreeTube DB](#parse-freetube-db) - [line 11192](../youtube-playback-plox.user.js#L11192)
38. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 11285](../youtube-playback-plox.user.js#L11285)
39. [⬆ Export To FreeTube](#export-to-freetube) - [line 11315](../youtube-playback-plox.user.js#L11315)
40. [⬇ Import From FreeTube](#import-from-freetube) - [line 11359](../youtube-playback-plox.user.js#L11359)
41. [🔄 Insert Completion Event](#insert-completion-event) - [line 11457](../youtube-playback-plox.user.js#L11457)
42. [💾 Save Video Generic](#save-video-generic) - [line 11504](../youtube-playback-plox.user.js#L11504)
43. [📺 Helpers](#helpers) - [line 11746](../youtube-playback-plox.user.js#L11746)
44. [📺 Gets saved video data](#gets-saved-video-data) - [line 11749](../youtube-playback-plox.user.js#L11749)
45. [📺 Get Player Video ID](#get-player-video-id) - [line 11806](../youtube-playback-plox.user.js#L11806)
46. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 11885](../youtube-playback-plox.user.js#L11885)
47. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 12090](../youtube-playback-plox.user.js#L12090)
48. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 12296](../youtube-playback-plox.user.js#L12296)
49. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 12318](../youtube-playback-plox.user.js#L12318)
50. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 12346](../youtube-playback-plox.user.js#L12346)
51. [📺 get Playlist Name](#get-playlist-name) - [line 12391](../youtube-playback-plox.user.js#L12391)
52. [🕒 Time Display](#time-display) - [line 12674](../youtube-playback-plox.user.js#L12674)
53. [🖼️ Display Button Helpers](#display-button-helpers) - [line 12710](../youtube-playback-plox.user.js#L12710)
54. [🍞 Toasts](#toasts) - [line 13586](../youtube-playback-plox.user.js#L13586)
55. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 13881](../youtube-playback-plox.user.js#L13881)
56. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 13928](../youtube-playback-plox.user.js#L13928)
57. [⚙️ Settings UI](#settings-ui) - [line 14246](../youtube-playback-plox.user.js#L14246)
58. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 14769](../youtube-playback-plox.user.js#L14769)
59. [🎵 Video Selection](#video-selection) - [line 14827](../youtube-playback-plox.user.js#L14827)
60. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 15750](../youtube-playback-plox.user.js#L15750)
61. [📡 Video Observer Manager](#video-observer-manager) - [line 16025](../youtube-playback-plox.user.js#L16025)
62. [Processing Functions](#processing-functions) - [line 16863](../youtube-playback-plox.user.js#L16863)
63. [PlaybackController](#playbackcontroller) - [line 18061](../youtube-playback-plox.user.js#L18061)
64. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 18556](../youtube-playback-plox.user.js#L18556)
65. [📂 Sort UI](#sort-ui) - [line 19113](../youtube-playback-plox.user.js#L19113)
66. [📂 Filters UI](#filters-ui) - [line 19311](../youtube-playback-plox.user.js#L19311)
67. [📂 Video List UI](#video-list-ui) - [line 19599](../youtube-playback-plox.user.js#L19599)
68. [📁 Update Video List](#update-video-list) - [line 19781](../youtube-playback-plox.user.js#L19781)
69. [🔘 Floating Button](#floating-button) - [line 20637](../youtube-playback-plox.user.js#L20637)
70. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 20666](../youtube-playback-plox.user.js#L20666)
71. [📂 Video Entry](#video-entry) - [line 20939](../youtube-playback-plox.user.js#L20939)
72. [🗑️ Clear All Data](#clear-all-data) - [line 22991](../youtube-playback-plox.user.js#L22991)
73. [⚙️ Menu Commands](#menu-commands) - [line 23349](../youtube-playback-plox.user.js#L23349)
74. [🔄 Data Migration](#data-migration) - [line 23407](../youtube-playback-plox.user.js#L23407)
75. [🚀 Init](#init) - [line 23910](../youtube-playback-plox.user.js#L23910)

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
| `fn` | [`addDisposableListener`](../youtube-playback-plox.user.js#L1808) | [1808](../youtube-playback-plox.user.js#L1808) |
| `fn` | [`dispose`](../youtube-playback-plox.user.js#L1811) | [1811](../youtube-playback-plox.user.js#L1811) |

## [📝 Selector System](../youtube-playback-plox.user.js#L1820)
> [Line 1820](../youtube-playback-plox.user.js#L1820)

| Type | Name | Line |
|---|---|---|
| `module` | [`PREFIX`](../youtube-playback-plox.user.js#L1904) | [1904](../youtube-playback-plox.user.js#L1904) |
| `fn` | [`createSelectorSystem`](../youtube-playback-plox.user.js#L1929) | [1929](../youtube-playback-plox.user.js#L1929) |

## [💾 Simple LRU Cache](../youtube-playback-plox.user.js#L2106)
> [Line 2106](../youtube-playback-plox.user.js#L2106)

| Type | Name | Line |
|---|---|---|
| `class` | [`SimpleLRUCache`](../youtube-playback-plox.user.js#L2111) | [2111](../youtube-playback-plox.user.js#L2111) |

## [⚙️ DOM Cache System](../youtube-playback-plox.user.js#L2187)
> [Line 2187](../youtube-playback-plox.user.js#L2187)

| Type | Name | Line |
|---|---|---|
| `fn` | [`DOMHelpers`](../youtube-playback-plox.user.js#L2204) | [2204](../youtube-playback-plox.user.js#L2204) |
| `module` | [`DOMHelpers`](../youtube-playback-plox.user.js#L2204) | [2204](../youtube-playback-plox.user.js#L2204) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L2236) | [2236](../youtube-playback-plox.user.js#L2236) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L2274) | [2274](../youtube-playback-plox.user.js#L2274) |

## [🌐 Translation Functions](../youtube-playback-plox.user.js#L2553)
> [Line 2553](../youtube-playback-plox.user.js#L2553)

| Type | Name | Line |
|---|---|---|
| `fn` | [`t`](../youtube-playback-plox.user.js#L2567) | [2567](../youtube-playback-plox.user.js#L2567) |
| `fn` | [`normParams`](../youtube-playback-plox.user.js#L2577) | [2577](../youtube-playback-plox.user.js#L2577) |
| `fn` | [`replaceParams`](../youtube-playback-plox.user.js#L2594) | [2594](../youtube-playback-plox.user.js#L2594) |
| `fn` | [`setLanguage`](../youtube-playback-plox.user.js#L2610) | [2610](../youtube-playback-plox.user.js#L2610) |
| `fn` | [`detectBrowserLanguage`](../youtube-playback-plox.user.js#L2673) | [2673](../youtube-playback-plox.user.js#L2673) |
| `fn` | [`candidates`](../youtube-playback-plox.user.js#L2675) | [2675](../youtube-playback-plox.user.js#L2675) |
| `fn` | [`normalized`](../youtube-playback-plox.user.js#L2694) | [2694](../youtube-playback-plox.user.js#L2694) |

## [🎨 Styles](../youtube-playback-plox.user.js#L2718)
> [Line 2718](../youtube-playback-plox.user.js#L2718)

_No relevant functions or constants detected._

## [🎨 Theme](../youtube-playback-plox.user.js#L5331)
> [Line 5331](../youtube-playback-plox.user.js#L5331)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isYouTubeDarkTheme`](../youtube-playback-plox.user.js#L5338) | [5338](../youtube-playback-plox.user.js#L5338) |
| `fn` | [`applyTheme`](../youtube-playback-plox.user.js#L5356) | [5356](../youtube-playback-plox.user.js#L5356) |
| `fn` | [`observeThemeChanges`](../youtube-playback-plox.user.js#L5369) | [5369](../youtube-playback-plox.user.js#L5369) |
| `fn` | [`cleanupThemeObserver`](../youtube-playback-plox.user.js#L5392) | [5392](../youtube-playback-plox.user.js#L5392) |
| `fn` | [`cleanupGlobalListeners`](../youtube-playback-plox.user.js#L5403) | [5403](../youtube-playback-plox.user.js#L5403) |

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L5409)
> [Line 5409](../youtube-playback-plox.user.js#L5409)

_No relevant functions or constants detected._

## [🎨 Progress Bar Style](../youtube-playback-plox.user.js#L5571)
> [Line 5571](../youtube-playback-plox.user.js#L5571)

| Type | Name | Line |
|---|---|---|
| `fn` | [`clearAllProgressGradientState`](../youtube-playback-plox.user.js#L5583) | [5583](../youtube-playback-plox.user.js#L5583) |
| `fn` | [`syncProgressGradientStateForContainer`](../youtube-playback-plox.user.js#L5599) | [5599](../youtube-playback-plox.user.js#L5599) |
| `fn` | [`resolvePlayerRootForGradient`](../youtube-playback-plox.user.js#L5622) | [5622](../youtube-playback-plox.user.js#L5622) |
| `fn` | [`clearProgressColorFromPlayerRoot`](../youtube-playback-plox.user.js#L5633) | [5633](../youtube-playback-plox.user.js#L5633) |
| `fn` | [`applyProgressColorToPlayerRoot`](../youtube-playback-plox.user.js#L5653) | [5653](../youtube-playback-plox.user.js#L5653) |
| `fn` | [`applyProgressColorToShortsSurfaces`](../youtube-playback-plox.user.js#L5677) | [5677](../youtube-playback-plox.user.js#L5677) |
| `fn` | [`repaintWatchProgressBarFromActivePlayer`](../youtube-playback-plox.user.js#L5697) | [5697](../youtube-playback-plox.user.js#L5697) |
| `fn` | [`scheduleProgressBarGradientRepaint`](../youtube-playback-plox.user.js#L5719) | [5719](../youtube-playback-plox.user.js#L5719) |
| `fn` | [`isCurrentSession`](../youtube-playback-plox.user.js#L5721) | [5721](../youtube-playback-plox.user.js#L5721) |
| `fn` | [`paint`](../youtube-playback-plox.user.js#L5728) | [5728](../youtube-playback-plox.user.js#L5728) |
| `fn` | [`isLivePlaybackForGradient`](../youtube-playback-plox.user.js#L5750) | [5750](../youtube-playback-plox.user.js#L5750) |
| `fn` | [`updateProgressBarGradient`](../youtube-playback-plox.user.js#L5787) | [5787](../youtube-playback-plox.user.js#L5787) |
| `fn` | [`refreshProgressBarGradientForSession`](../youtube-playback-plox.user.js#L5863) | [5863](../youtube-playback-plox.user.js#L5863) |
| `fn` | [`resetProgressBarGradient`](../youtube-playback-plox.user.js#L5885) | [5885](../youtube-playback-plox.user.js#L5885) |
| `fn` | [`injectProgressBarCSS`](../youtube-playback-plox.user.js#L5907) | [5907](../youtube-playback-plox.user.js#L5907) |
| `fn` | [`getProgressColor`](../youtube-playback-plox.user.js#L6037) | [6037](../youtube-playback-plox.user.js#L6037) |
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L6065) | [6065](../youtube-playback-plox.user.js#L6065) |
| `fn` | [`getProgressColorForText`](../youtube-playback-plox.user.js#L6074) | [6074](../youtube-playback-plox.user.js#L6074) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L6088)
> [Line 6088](../youtube-playback-plox.user.js#L6088)

| Type | Name | Line |
|---|---|---|
| `fn` | [`markLocalDeletion`](../youtube-playback-plox.user.js#L6123) | [6123](../youtube-playback-plox.user.js#L6123) |
| `fn` | [`bumpStorageKeyRevision`](../youtube-playback-plox.user.js#L6142) | [6142](../youtube-playback-plox.user.js#L6142) |
| `fn` | [`getStorageRevisionSnapshot`](../youtube-playback-plox.user.js#L6155) | [6155](../youtube-playback-plox.user.js#L6155) |
| `fn` | [`storageRevisionChanged`](../youtube-playback-plox.user.js#L6168) | [6168](../youtube-playback-plox.user.js#L6168) |
| `fn` | [`invalidateSessionSavedData`](../youtube-playback-plox.user.js#L6241) | [6241](../youtube-playback-plox.user.js#L6241) |
| `fn` | [`broadcastStorageChange`](../youtube-playback-plox.user.js#L6258) | [6258](../youtube-playback-plox.user.js#L6258) |
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L6281) | [6281](../youtube-playback-plox.user.js#L6281) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L6281) | [6281](../youtube-playback-plox.user.js#L6281) |
| `fn` | [`enqueueDurableOperation`](../youtube-playback-plox.user.js#L6311) | [6311](../youtube-playback-plox.user.js#L6311) |
| `fn` | [`hasDurableGMStorage`](../youtube-playback-plox.user.js#L6324) | [6324](../youtube-playback-plox.user.js#L6324) |
| `fn` | [`hasAnyGMStorageApi`](../youtube-playback-plox.user.js#L6334) | [6334](../youtube-playback-plox.user.js#L6334) |
| `fn` | [`waitForDurableMutations`](../youtube-playback-plox.user.js#L6347) | [6347](../youtube-playback-plox.user.js#L6347) |
| `fn` | [`canUseIDB`](../youtube-playback-plox.user.js#L6352) | [6352](../youtube-playback-plox.user.js#L6352) |
| `fn` | [`isStorageRecordError`](../youtube-playback-plox.user.js#L6359) | [6359](../youtube-playback-plox.user.js#L6359) |
| `fn` | [`isStorageProviderError`](../youtube-playback-plox.user.js#L6369) | [6369](../youtube-playback-plox.user.js#L6369) |
| `fn` | [`scheduleQuarantineNotice`](../youtube-playback-plox.user.js#L6379) | [6379](../youtube-playback-plox.user.js#L6379) |
| `fn` | [`registerQuarantinedRecord`](../youtube-playback-plox.user.js#L6417) | [6417](../youtube-playback-plox.user.js#L6417) |
| `fn` | [`quarantineRecordError`](../youtube-playback-plox.user.js#L6439) | [6439](../youtube-playback-plox.user.js#L6439) |
| `fn` | [`getQuarantinedRecords`](../youtube-playback-plox.user.js#L6448) | [6448](../youtube-playback-plox.user.js#L6448) |
| `fn` | [`persistRepairedRows`](../youtube-playback-plox.user.js#L6459) | [6459](../youtube-playback-plox.user.js#L6459) |
| `fn` | [`buildStorageDamageReport`](../youtube-playback-plox.user.js#L6487) | [6487](../youtube-playback-plox.user.js#L6487) |
| `fn` | [`markIDBUnavailable`](../youtube-playback-plox.user.js#L6513) | [6513](../youtube-playback-plox.user.js#L6513) |
| `fn` | [`markIDBAvailable`](../youtube-playback-plox.user.js#L6518) | [6518](../youtube-playback-plox.user.js#L6518) |
| `fn` | [`pickNewerDurableRecord`](../youtube-playback-plox.user.js#L6529) | [6529](../youtube-playback-plox.user.js#L6529) |
| `fn` | [`getGMFallback`](../youtube-playback-plox.user.js#L6543) | [6543](../youtube-playback-plox.user.js#L6543) |
| `fn` | [`parseStoredRecord`](../youtube-playback-plox.user.js#L6572) | [6572](../youtube-playback-plox.user.js#L6572) |
| `fn` | [`setGMFallback`](../youtube-playback-plox.user.js#L6599) | [6599](../youtube-playback-plox.user.js#L6599) |
| `fn` | [`setGMFallbackNewestWins`](../youtube-playback-plox.user.js#L6613) | [6613](../youtube-playback-plox.user.js#L6613) |
| `fn` | [`deleteGMFallback`](../youtube-playback-plox.user.js#L6636) | [6636](../youtube-playback-plox.user.js#L6636) |
| `fn` | [`reconcileGMFallbackAfterIDB`](../youtube-playback-plox.user.js#L6673) | [6673](../youtube-playback-plox.user.js#L6673) |
| `fn` | [`reconcileGMFallbacksAfterIDB`](../youtube-playback-plox.user.js#L6764) | [6764](../youtube-playback-plox.user.js#L6764) |
| `fn` | [`initialize`](../youtube-playback-plox.user.js#L6848) | [6848](../youtube-playback-plox.user.js#L6848) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L6913) | [6913](../youtube-playback-plox.user.js#L6913) |
| `fn` | [`set`](../youtube-playback-plox.user.js#L7139) | [7139](../youtube-playback-plox.user.js#L7139) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7143) | [7143](../youtube-playback-plox.user.js#L7143) |
| `fn` | [`setMany`](../youtube-playback-plox.user.js#L7232) | [7232](../youtube-playback-plox.user.js#L7232) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7243) | [7243](../youtube-playback-plox.user.js#L7243) |
| `fn` | [`deleteGMFallbackIfUnchanged`](../youtube-playback-plox.user.js#L7406) | [7406](../youtube-playback-plox.user.js#L7406) |
| `fn` | [`del`](../youtube-playback-plox.user.js#L7429) | [7429](../youtube-playback-plox.user.js#L7429) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7432) | [7432](../youtube-playback-plox.user.js#L7432) |
| `fn` | [`repairQuarantinedRecords`](../youtube-playback-plox.user.js#L7574) | [7574](../youtube-playback-plox.user.js#L7574) |
| `fn` | [`purgeQuarantinedRecords`](../youtube-playback-plox.user.js#L7627) | [7627](../youtube-playback-plox.user.js#L7627) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L7697) | [7697](../youtube-playback-plox.user.js#L7697) |
| `fn` | [`rawKeys`](../youtube-playback-plox.user.js#L7761) | [7761](../youtube-playback-plox.user.js#L7761) |
| `fn` | [`getCompleteVideoSnapshot`](../youtube-playback-plox.user.js#L7827) | [7827](../youtube-playback-plox.user.js#L7827) |
| `fn` | [`getBackendInfo`](../youtube-playback-plox.user.js#L8004) | [8004](../youtube-playback-plox.user.js#L8004) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L8033) | [8033](../youtube-playback-plox.user.js#L8033) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L8033) | [8033](../youtube-playback-plox.user.js#L8033) |
| `fn` | [`openDatabase`](../youtube-playback-plox.user.js#L8041) | [8041](../youtube-playback-plox.user.js#L8041) |
| `fn` | [`failOpen`](../youtube-playback-plox.user.js#L8047) | [8047](../youtube-playback-plox.user.js#L8047) |
| `fn` | [`runInStore`](../youtube-playback-plox.user.js#L8107) | [8107](../youtube-playback-plox.user.js#L8107) |
| `fn` | [`enqueue`](../youtube-playback-plox.user.js#L8132) | [8132](../youtube-playback-plox.user.js#L8132) |
| `fn` | [`describeStoredValueType`](../youtube-playback-plox.user.js#L8148) | [8148](../youtube-playback-plox.user.js#L8148) |
| `fn` | [`isEmptyStoredValue`](../youtube-playback-plox.user.js#L8162) | [8162](../youtube-playback-plox.user.js#L8162) |
| `fn` | [`sanitizeToJsonSafe`](../youtube-playback-plox.user.js#L8183) | [8183](../youtube-playback-plox.user.js#L8183) |
| `fn` | [`attemptStoredValueRepair`](../youtube-playback-plox.user.js#L8230) | [8230](../youtube-playback-plox.user.js#L8230) |
| `fn` | [`sanitizeEntries`](../youtube-playback-plox.user.js#L8299) | [8299](../youtube-playback-plox.user.js#L8299) |
| `fn` | [`pushEntry`](../youtube-playback-plox.user.js#L8312) | [8312](../youtube-playback-plox.user.js#L8312) |
| `fn` | [`getAllEntries`](../youtube-playback-plox.user.js#L8417) | [8417](../youtube-playback-plox.user.js#L8417) |
| `fn` | [`repairEntries`](../youtube-playback-plox.user.js#L8429) | [8429](../youtube-playback-plox.user.js#L8429) |
| `fn` | [`putEntry`](../youtube-playback-plox.user.js#L8463) | [8463](../youtube-playback-plox.user.js#L8463) |
| `fn` | [`deleteEntry`](../youtube-playback-plox.user.js#L8467) | [8467](../youtube-playback-plox.user.js#L8467) |
| `fn` | [`bulkDelete`](../youtube-playback-plox.user.js#L8476) | [8476](../youtube-playback-plox.user.js#L8476) |
| `fn` | [`bulkPut`](../youtube-playback-plox.user.js#L8495) | [8495](../youtube-playback-plox.user.js#L8495) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L8522) | [8522](../youtube-playback-plox.user.js#L8522) |
| `fn` | [`diagnose`](../youtube-playback-plox.user.js#L8545) | [8545](../youtube-playback-plox.user.js#L8545) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L8601) | [8601](../youtube-playback-plox.user.js#L8601) |
| `fn` | [`prefixKey`](../youtube-playback-plox.user.js#L8610) | [8610](../youtube-playback-plox.user.js#L8610) |
| `fn` | [`stripPrefix`](../youtube-playback-plox.user.js#L8611) | [8611](../youtube-playback-plox.user.js#L8611) |
| `fn` | [`hasPrefix`](../youtube-playback-plox.user.js#L8612) | [8612](../youtube-playback-plox.user.js#L8612) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L8863) | [8863](../youtube-playback-plox.user.js#L8863) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L8881) | [8881](../youtube-playback-plox.user.js#L8881) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L8907) | [8907](../youtube-playback-plox.user.js#L8907) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L8923) | [8923](../youtube-playback-plox.user.js#L8923) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L8986) | [8986](../youtube-playback-plox.user.js#L8986) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L9004) | [9004](../youtube-playback-plox.user.js#L9004) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L9012) | [9012](../youtube-playback-plox.user.js#L9012) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L9037) | [9037](../youtube-playback-plox.user.js#L9037) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L9053)
> [Line 9053](../youtube-playback-plox.user.js#L9053)

_No relevant functions or constants detected._

## [📢 Ad Detector](../youtube-playback-plox.user.js#L9073)
> [Line 9073](../youtube-playback-plox.user.js#L9073)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L9075) | [9075](../youtube-playback-plox.user.js#L9075) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L9126) | [9126](../youtube-playback-plox.user.js#L9126) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L9251)
> [Line 9251](../youtube-playback-plox.user.js#L9251)

| Type | Name | Line |
|---|---|---|
| `class` | [`VirtualScroller`](../youtube-playback-plox.user.js#L9268) | [9268](../youtube-playback-plox.user.js#L9268) |

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L9721)
> [Line 9721](../youtube-playback-plox.user.js#L9721)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L9730) | [9730](../youtube-playback-plox.user.js#L9730) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L9761) | [9761](../youtube-playback-plox.user.js#L9761) |
| `fn` | [`exportStorageDamageReport`](../youtube-playback-plox.user.js#L9814) | [9814](../youtube-playback-plox.user.js#L9814) |
| `fn` | [`runStorageRepairFlow`](../youtube-playback-plox.user.js#L9853) | [9853](../youtube-playback-plox.user.js#L9853) |
| `fn` | [`renderStorageDamageNotice`](../youtube-playback-plox.user.js#L9913) | [9913](../youtube-playback-plox.user.js#L9913) |
| `fn` | [`copyExportDataToClipboard`](../youtube-playback-plox.user.js#L9958) | [9958](../youtube-playback-plox.user.js#L9958) |
| `fn` | [`mergeImportedVideoData`](../youtube-playback-plox.user.js#L10013) | [10013](../youtube-playback-plox.user.js#L10013) |
| `fn` | [`detectImportFormat`](../youtube-playback-plox.user.js#L10074) | [10074](../youtube-playback-plox.user.js#L10074) |
| `fn` | [`hasImportableRecords`](../youtube-playback-plox.user.js#L10088) | [10088](../youtube-playback-plox.user.js#L10088) |
| `fn` | [`looksLikeFreeTubeExport`](../youtube-playback-plox.user.js#L10105) | [10105](../youtube-playback-plox.user.js#L10105) |
| `fn` | [`parseImportPayload`](../youtube-playback-plox.user.js#L10118) | [10118](../youtube-playback-plox.user.js#L10118) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L10157) | [10157](../youtube-playback-plox.user.js#L10157) |
| `fn` | [`importCommitGuard`](../youtube-playback-plox.user.js#L10159) | [10159](../youtube-playback-plox.user.js#L10159) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L10284)
> [Line 10284](../youtube-playback-plox.user.js#L10284)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getGitHubErrorMsg`](../youtube-playback-plox.user.js#L10287) | [10287](../youtube-playback-plox.user.js#L10287) |
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L10299) | [10299](../youtube-playback-plox.user.js#L10299) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L10329) | [10329](../youtube-playback-plox.user.js#L10329) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L10330) | [10330](../youtube-playback-plox.user.js#L10330) |
| `fn` | [`sendGistRequest`](../youtube-playback-plox.user.js#L10352) | [10352](../youtube-playback-plox.user.js#L10352) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L10448) | [10448](../youtube-playback-plox.user.js#L10448) |
| `fn` | [`finish`](../youtube-playback-plox.user.js#L10458) | [10458](../youtube-playback-plox.user.js#L10458) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L10472) | [10472](../youtube-playback-plox.user.js#L10472) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L10658) | [10658](../youtube-playback-plox.user.js#L10658) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L10679) | [10679](../youtube-playback-plox.user.js#L10679) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L10758) | [10758](../youtube-playback-plox.user.js#L10758) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L10788) | [10788](../youtube-playback-plox.user.js#L10788) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L10821)
> [Line 10821](../youtube-playback-plox.user.js#L10821)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L10822) | [10822](../youtube-playback-plox.user.js#L10822) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L10861) | [10861](../youtube-playback-plox.user.js#L10861) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L11003)
> [Line 11003](../youtube-playback-plox.user.js#L11003)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeCompletionHistory`](../youtube-playback-plox.user.js#L11011) | [11011](../youtube-playback-plox.user.js#L11011) |
| `fn` | [`normalizeVideoData`](../youtube-playback-plox.user.js#L11039) | [11039](../youtube-playback-plox.user.js#L11039) |
| `fn` | [`safeText`](../youtube-playback-plox.user.js#L11042) | [11042](../youtube-playback-plox.user.js#L11042) |
| `fn` | [`safeNumber`](../youtube-playback-plox.user.js#L11047) | [11047](../youtube-playback-plox.user.js#L11047) |
| `fn` | [`safeNullableText`](../youtube-playback-plox.user.js#L11051) | [11051](../youtube-playback-plox.user.js#L11051) |

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L11101)
> [Line 11101](../youtube-playback-plox.user.js#L11101)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toFreeTubeFormat`](../youtube-playback-plox.user.js#L11107) | [11107](../youtube-playback-plox.user.js#L11107) |

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L11192)
> [Line 11192](../youtube-playback-plox.user.js#L11192)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseFreeTubeDB`](../youtube-playback-plox.user.js#L11198) | [11198](../youtube-playback-plox.user.js#L11198) |

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L11285)
> [Line 11285](../youtube-playback-plox.user.js#L11285)

| Type | Name | Line |
|---|---|---|
| `fn` | [`fromFreeTubeFormat`](../youtube-playback-plox.user.js#L11291) | [11291](../youtube-playback-plox.user.js#L11291) |
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L11300) | [11300](../youtube-playback-plox.user.js#L11300) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L11315)
> [Line 11315](../youtube-playback-plox.user.js#L11315)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTubeFormat`](../youtube-playback-plox.user.js#L11320) | [11320](../youtube-playback-plox.user.js#L11320) |

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L11359)
> [Line 11359](../youtube-playback-plox.user.js#L11359)

| Type | Name | Line |
|---|---|---|
| `fn` | [`importFromFreeTubeFormat`](../youtube-playback-plox.user.js#L11365) | [11365](../youtube-playback-plox.user.js#L11365) |
| `fn` | [`importCommitGuard`](../youtube-playback-plox.user.js#L11367) | [11367](../youtube-playback-plox.user.js#L11367) |

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L11457)
> [Line 11457](../youtube-playback-plox.user.js#L11457)

| Type | Name | Line |
|---|---|---|
| `fn` | [`insertCompletionEvent`](../youtube-playback-plox.user.js#L11465) | [11465](../youtube-playback-plox.user.js#L11465) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L11493) | [11493](../youtube-playback-plox.user.js#L11493) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L11504)
> [Line 11504](../youtube-playback-plox.user.js#L11504)

| Type | Name | Line |
|---|---|---|
| `fn` | [`internalSaveVideoGeneric`](../youtube-playback-plox.user.js#L11509) | [11509](../youtube-playback-plox.user.js#L11509) |
| `fn` | [`isExpectedSessionCurrent`](../youtube-playback-plox.user.js#L11519) | [11519](../youtube-playback-plox.user.js#L11519) |
| `fn` | [`isDestructiveEpochCurrent`](../youtube-playback-plox.user.js#L11525) | [11525](../youtube-playback-plox.user.js#L11525) |
| `fn` | [`commitGuard`](../youtube-playback-plox.user.js#L11528) | [11528](../youtube-playback-plox.user.js#L11528) |
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L11599) | [11599](../youtube-playback-plox.user.js#L11599) |

## [📺 Helpers](../youtube-playback-plox.user.js#L11746)
> [Line 11746](../youtube-playback-plox.user.js#L11746)

_No relevant functions or constants detected._

## [📺 Gets saved video data](../youtube-playback-plox.user.js#L11749)
> [Line 11749](../youtube-playback-plox.user.js#L11749)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSavedVideoData`](../youtube-playback-plox.user.js#L11758) | [11758](../youtube-playback-plox.user.js#L11758) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L11806)
> [Line 11806](../youtube-playback-plox.user.js#L11806)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L11842) | [11842](../youtube-playback-plox.user.js#L11842) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L11885)
> [Line 11885](../youtube-playback-plox.user.js#L11885)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTypeFromPageManager`](../youtube-playback-plox.user.js#L11908) | [11908](../youtube-playback-plox.user.js#L11908) |
| `fn` | [`getTypeFromYtApp`](../youtube-playback-plox.user.js#L11948) | [11948](../youtube-playback-plox.user.js#L11948) |
| `fn` | [`detectFromURL`](../youtube-playback-plox.user.js#L11974) | [11974](../youtube-playback-plox.user.js#L11974) |
| `fn` | [`cachePageType`](../youtube-playback-plox.user.js#L12046) | [12046](../youtube-playback-plox.user.js#L12046) |
| `fn` | [`getYouTubePageType`](../youtube-playback-plox.user.js#L12065) | [12065](../youtube-playback-plox.user.js#L12065) |

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L12090)
> [Line 12090](../youtube-playback-plox.user.js#L12090)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseYouTubeResource`](../youtube-playback-plox.user.js#L12150) | [12150](../youtube-playback-plox.user.js#L12150) |
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L12187) | [12187](../youtube-playback-plox.user.js#L12187) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L12296)
> [Line 12296](../youtube-playback-plox.user.js#L12296)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubeVideoIdFromUrl`](../youtube-playback-plox.user.js#L12306) | [12306](../youtube-playback-plox.user.js#L12306) |

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L12318)
> [Line 12318](../youtube-playback-plox.user.js#L12318)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getYouTubeVideoContextFromUrl`](../youtube-playback-plox.user.js#L12330) | [12330](../youtube-playback-plox.user.js#L12330) |

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L12346)
> [Line 12346](../youtube-playback-plox.user.js#L12346)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubePlaylistIdFromUrl`](../youtube-playback-plox.user.js#L12354) | [12354](../youtube-playback-plox.user.js#L12354) |
| `fn` | [`classifyPlaylist`](../youtube-playback-plox.user.js#L12378) | [12378](../youtube-playback-plox.user.js#L12378) |

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L12391)
> [Line 12391](../youtube-playback-plox.user.js#L12391)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L12412) | [12412](../youtube-playback-plox.user.js#L12412) |
| `fn` | [`extractYtInitialData`](../youtube-playback-plox.user.js#L12432) | [12432](../youtube-playback-plox.user.js#L12432) |
| `fn` | [`getPlaylistName`](../youtube-playback-plox.user.js#L12538) | [12538](../youtube-playback-plox.user.js#L12538) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L12554) | [12554](../youtube-playback-plox.user.js#L12554) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L12647) | [12647](../youtube-playback-plox.user.js#L12647) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L12674)
> [Line 12674](../youtube-playback-plox.user.js#L12674)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L12700) | [12700](../youtube-playback-plox.user.js#L12700) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L12710)
> [Line 12710](../youtube-playback-plox.user.js#L12710)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTimeDisplayMessage`](../youtube-playback-plox.user.js#L12718) | [12718](../youtube-playback-plox.user.js#L12718) |
| `fn` | [`hasTimeDisplayMessage`](../youtube-playback-plox.user.js#L12727) | [12727](../youtube-playback-plox.user.js#L12727) |
| `fn` | [`showDisplayMessage`](../youtube-playback-plox.user.js#L12737) | [12737](../youtube-playback-plox.user.js#L12737) |
| `fn` | [`restoreDisplayButtons`](../youtube-playback-plox.user.js#L12755) | [12755](../youtube-playback-plox.user.js#L12755) |
| `fn` | [`createSplitButtonGroup`](../youtube-playback-plox.user.js#L12786) | [12786](../youtube-playback-plox.user.js#L12786) |
| `fn` | [`getDisplayContextVideo`](../youtube-playback-plox.user.js#L12811) | [12811](../youtube-playback-plox.user.js#L12811) |
| `fn` | [`getDisplayContextPlayer`](../youtube-playback-plox.user.js#L12826) | [12826](../youtube-playback-plox.user.js#L12826) |
| `fn` | [`getPlaybackNotificationKind`](../youtube-playback-plox.user.js#L12841) | [12841](../youtube-playback-plox.user.js#L12841) |
| `fn` | [`buildPlaybackNotificationMessage`](../youtube-playback-plox.user.js#L12858) | [12858](../youtube-playback-plox.user.js#L12858) |
| `fn` | [`setupManualSaveButton`](../youtube-playback-plox.user.js#L12897) | [12897](../youtube-playback-plox.user.js#L12897) |
| `fn` | [`getActiveShortsControlsContainer`](../youtube-playback-plox.user.js#L12957) | [12957](../youtube-playback-plox.user.js#L12957) |
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L13002) | [13002](../youtube-playback-plox.user.js#L13002) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L13002) | [13002](../youtube-playback-plox.user.js#L13002) |
| `fn` | [`getDisplayDisposables`](../youtube-playback-plox.user.js#L13024) | [13024](../youtube-playback-plox.user.js#L13024) |
| `fn` | [`disposeDisplayNode`](../youtube-playback-plox.user.js#L13037) | [13037](../youtube-playback-plox.user.js#L13037) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L13044) | [13044](../youtube-playback-plox.user.js#L13044) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L13054) | [13054](../youtube-playback-plox.user.js#L13054) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L13062) | [13062](../youtube-playback-plox.user.js#L13062) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L13070) | [13070](../youtube-playback-plox.user.js#L13070) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L13093) | [13093](../youtube-playback-plox.user.js#L13093) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L13105) | [13105](../youtube-playback-plox.user.js#L13105) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L13108) | [13108](../youtube-playback-plox.user.js#L13108) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L13118) | [13118](../youtube-playback-plox.user.js#L13118) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L13123) | [13123](../youtube-playback-plox.user.js#L13123) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L13146) | [13146](../youtube-playback-plox.user.js#L13146) |
| `fn` | [`scheduleShortsFrame`](../youtube-playback-plox.user.js#L13170) | [13170](../youtube-playback-plox.user.js#L13170) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L13179) | [13179](../youtube-playback-plox.user.js#L13179) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L13188) | [13188](../youtube-playback-plox.user.js#L13188) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L13238) | [13238](../youtube-playback-plox.user.js#L13238) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L13301) | [13301](../youtube-playback-plox.user.js#L13301) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L13357) | [13357](../youtube-playback-plox.user.js#L13357) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L13428) | [13428](../youtube-playback-plox.user.js#L13428) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L13454) | [13454](../youtube-playback-plox.user.js#L13454) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L13468) | [13468](../youtube-playback-plox.user.js#L13468) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L13472) | [13472](../youtube-playback-plox.user.js#L13472) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L13479) | [13479](../youtube-playback-plox.user.js#L13479) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L13497) | [13497](../youtube-playback-plox.user.js#L13497) |
| `fn` | [`startShortsPanelObserver`](../youtube-playback-plox.user.js#L13511) | [13511](../youtube-playback-plox.user.js#L13511) |
| `fn` | [`stopShortsPanelObserver`](../youtube-playback-plox.user.js#L13559) | [13559](../youtube-playback-plox.user.js#L13559) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L13586)
> [Line 13586](../youtube-playback-plox.user.js#L13586)

| Type | Name | Line |
|---|---|---|
| `fn` | [`disposeToastRuntime`](../youtube-playback-plox.user.js#L13598) | [13598](../youtube-playback-plox.user.js#L13598) |
| `fn` | [`registerToastRuntime`](../youtube-playback-plox.user.js#L13626) | [13626](../youtube-playback-plox.user.js#L13626) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L13627) | [13627](../youtube-playback-plox.user.js#L13627) |
| `fn` | [`createToastContainer`](../youtube-playback-plox.user.js#L13643) | [13643](../youtube-playback-plox.user.js#L13643) |
| `fn` | [`fadeAndRemoveToast`](../youtube-playback-plox.user.js#L13669) | [13669](../youtube-playback-plox.user.js#L13669) |
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L13690) | [13690](../youtube-playback-plox.user.js#L13690) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L13714) | [13714](../youtube-playback-plox.user.js#L13714) |
| `fn` | [`showFloatingToast`](../youtube-playback-plox.user.js#L13738) | [13738](../youtube-playback-plox.user.js#L13738) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L13881)
> [Line 13881](../youtube-playback-plox.user.js#L13881)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L13884) | [13884](../youtube-playback-plox.user.js#L13884) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L13928)
> [Line 13928](../youtube-playback-plox.user.js#L13928)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L13968) | [13968](../youtube-playback-plox.user.js#L13968) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L13974) | [13974](../youtube-playback-plox.user.js#L13974) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L13982) | [13982](../youtube-playback-plox.user.js#L13982) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L14028) | [14028](../youtube-playback-plox.user.js#L14028) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L14032) | [14032](../youtube-playback-plox.user.js#L14032) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L14035) | [14035](../youtube-playback-plox.user.js#L14035) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L14051) | [14051](../youtube-playback-plox.user.js#L14051) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L14060) | [14060](../youtube-playback-plox.user.js#L14060) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L14090) | [14090](../youtube-playback-plox.user.js#L14090) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L14104) | [14104](../youtube-playback-plox.user.js#L14104) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L14108) | [14108](../youtube-playback-plox.user.js#L14108) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L14246)
> [Line 14246](../youtube-playback-plox.user.js#L14246)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSettingsUI`](../youtube-playback-plox.user.js#L14249) | [14249](../youtube-playback-plox.user.js#L14249) |
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L14280) | [14280](../youtube-playback-plox.user.js#L14280) |
| `fn` | [`onSettingsKeyDown`](../youtube-playback-plox.user.js#L14302) | [14302](../youtube-playback-plox.user.js#L14302) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L14397) | [14397](../youtube-playback-plox.user.js#L14397) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L14484) | [14484](../youtube-playback-plox.user.js#L14484) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L14485) | [14485](../youtube-playback-plox.user.js#L14485) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L14574) | [14574](../youtube-playback-plox.user.js#L14574) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L14575) | [14575](../youtube-playback-plox.user.js#L14575) |
| `fn` | [`getInnerTubeClientVersion`](../youtube-playback-plox.user.js#L14607) | [14607](../youtube-playback-plox.user.js#L14607) |
| `fn` | [`idbDiag`](../youtube-playback-plox.user.js#L14636) | [14636](../youtube-playback-plox.user.js#L14636) |
| `fn` | [`safeModeActive`](../youtube-playback-plox.user.js#L14654) | [14654](../youtube-playback-plox.user.js#L14654) |
| `fn` | [`activeSessions`](../youtube-playback-plox.user.js#L14655) | [14655](../youtube-playback-plox.user.js#L14655) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L14769)
> [Line 14769](../youtube-playback-plox.user.js#L14769)

| Type | Name | Line |
|---|---|---|
| `fn` | [`notifySeekOrProgress`](../youtube-playback-plox.user.js#L14771) | [14771](../youtube-playback-plox.user.js#L14771) |

## [🎵 Video Selection](../youtube-playback-plox.user.js#L14827)
> [Line 14827](../youtube-playback-plox.user.js#L14827)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleManagementMode`](../youtube-playback-plox.user.js#L14842) | [14842](../youtube-playback-plox.user.js#L14842) |
| `fn` | [`updateFooterButtons`](../youtube-playback-plox.user.js#L14855) | [14855](../youtube-playback-plox.user.js#L14855) |
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L14917) | [14917](../youtube-playback-plox.user.js#L14917) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L14924) | [14924](../youtube-playback-plox.user.js#L14924) |
| `fn` | [`createFooterActionMenu`](../youtube-playback-plox.user.js#L14982) | [14982](../youtube-playback-plox.user.js#L14982) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L15012) | [15012](../youtube-playback-plox.user.js#L15012) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L15016) | [15016](../youtube-playback-plox.user.js#L15016) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L15025) | [15025](../youtube-playback-plox.user.js#L15025) |
| `fn` | [`closeImportMenu`](../youtube-playback-plox.user.js#L15114) | [15114](../youtube-playback-plox.user.js#L15114) |
| `fn` | [`onImportOutsideClick`](../youtube-playback-plox.user.js#L15123) | [15123](../youtube-playback-plox.user.js#L15123) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L15508) | [15508](../youtube-playback-plox.user.js#L15508) |
| `fn` | [`updateManagementFooterState`](../youtube-playback-plox.user.js#L15598) | [15598](../youtube-playback-plox.user.js#L15598) |
| `fn` | [`togglePlaylistCreationMode`](../youtube-playback-plox.user.js#L15628) | [15628](../youtube-playback-plox.user.js#L15628) |
| `fn` | [`copyToClipboard`](../youtube-playback-plox.user.js#L15645) | [15645](../youtube-playback-plox.user.js#L15645) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L15655) | [15655](../youtube-playback-plox.user.js#L15655) |
| `fn` | [`toggleVideoSelection`](../youtube-playback-plox.user.js#L15718) | [15718](../youtube-playback-plox.user.js#L15718) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L15750)
> [Line 15750](../youtube-playback-plox.user.js#L15750)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L15756) | [15756](../youtube-playback-plox.user.js#L15756) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L15756) | [15756](../youtube-playback-plox.user.js#L15756) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L15757) | [15757](../youtube-playback-plox.user.js#L15757) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L15766) | [15766](../youtube-playback-plox.user.js#L15766) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L15771) | [15771](../youtube-playback-plox.user.js#L15771) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L15782) | [15782](../youtube-playback-plox.user.js#L15782) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L15799) | [15799](../youtube-playback-plox.user.js#L15799) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L15833) | [15833](../youtube-playback-plox.user.js#L15833) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L15858) | [15858](../youtube-playback-plox.user.js#L15858) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L15860) | [15860](../youtube-playback-plox.user.js#L15860) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L15879) | [15879](../youtube-playback-plox.user.js#L15879) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L15879) | [15879](../youtube-playback-plox.user.js#L15879) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L15881) | [15881](../youtube-playback-plox.user.js#L15881) |
| `fn` | [`shouldDropVideoEvent`](../youtube-playback-plox.user.js#L15893) | [15893](../youtube-playback-plox.user.js#L15893) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L15902) | [15902](../youtube-playback-plox.user.js#L15902) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L15902) | [15902](../youtube-playback-plox.user.js#L15902) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L15913) | [15913](../youtube-playback-plox.user.js#L15913) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L15918) | [15918](../youtube-playback-plox.user.js#L15918) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L15923) | [15923](../youtube-playback-plox.user.js#L15923) |
| `fn` | [`note`](../youtube-playback-plox.user.js#L15943) | [15943](../youtube-playback-plox.user.js#L15943) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L15947) | [15947](../youtube-playback-plox.user.js#L15947) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L15965) | [15965](../youtube-playback-plox.user.js#L15965) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L15965) | [15965](../youtube-playback-plox.user.js#L15965) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L15967) | [15967](../youtube-playback-plox.user.js#L15967) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L15975) | [15975](../youtube-playback-plox.user.js#L15975) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L16025)
> [Line 16025](../youtube-playback-plox.user.js#L16025)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L16030) | [16030](../youtube-playback-plox.user.js#L16030) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L16030) | [16030](../youtube-playback-plox.user.js#L16030) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L16052) | [16052](../youtube-playback-plox.user.js#L16052) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L16072) | [16072](../youtube-playback-plox.user.js#L16072) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L16088) | [16088](../youtube-playback-plox.user.js#L16088) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L16125) | [16125](../youtube-playback-plox.user.js#L16125) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L16160) | [16160](../youtube-playback-plox.user.js#L16160) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L16161) | [16161](../youtube-playback-plox.user.js#L16161) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L16192) | [16192](../youtube-playback-plox.user.js#L16192) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L16248) | [16248](../youtube-playback-plox.user.js#L16248) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L16316) | [16316](../youtube-playback-plox.user.js#L16316) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L16326) | [16326](../youtube-playback-plox.user.js#L16326) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L16337) | [16337](../youtube-playback-plox.user.js#L16337) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L16369) | [16369](../youtube-playback-plox.user.js#L16369) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L16409) | [16409](../youtube-playback-plox.user.js#L16409) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L16420) | [16420](../youtube-playback-plox.user.js#L16420) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L16444) | [16444](../youtube-playback-plox.user.js#L16444) |
| `fn` | [`clearPlayerCache`](../youtube-playback-plox.user.js#L16570) | [16570](../youtube-playback-plox.user.js#L16570) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L16792) | [16792](../youtube-playback-plox.user.js#L16792) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L16836) | [16836](../youtube-playback-plox.user.js#L16836) |

## [Processing Functions](../youtube-playback-plox.user.js#L16863)
> [Line 16863](../youtube-playback-plox.user.js#L16863)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L16889) | [16889](../youtube-playback-plox.user.js#L16889) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L16908) | [16908](../youtube-playback-plox.user.js#L16908) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L16918) | [16918](../youtube-playback-plox.user.js#L16918) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L16918) | [16918](../youtube-playback-plox.user.js#L16918) |
| `fn` | [`clearPendingRecovery`](../youtube-playback-plox.user.js#L16938) | [16938](../youtube-playback-plox.user.js#L16938) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L16943) | [16943](../youtube-playback-plox.user.js#L16943) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L16948) | [16948](../youtube-playback-plox.user.js#L16948) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L16955) | [16955](../youtube-playback-plox.user.js#L16955) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L16961) | [16961](../youtube-playback-plox.user.js#L16961) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L16979) | [16979](../youtube-playback-plox.user.js#L16979) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L17056) | [17056](../youtube-playback-plox.user.js#L17056) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L17120) | [17120](../youtube-playback-plox.user.js#L17120) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L17155) | [17155](../youtube-playback-plox.user.js#L17155) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L17185) | [17185](../youtube-playback-plox.user.js#L17185) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L17196) | [17196](../youtube-playback-plox.user.js#L17196) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L17208) | [17208](../youtube-playback-plox.user.js#L17208) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L17244) | [17244](../youtube-playback-plox.user.js#L17244) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L17323) | [17323](../youtube-playback-plox.user.js#L17323) |
| `fn` | [`handleSeekingForGradient`](../youtube-playback-plox.user.js#L17352) | [17352](../youtube-playback-plox.user.js#L17352) |
| `fn` | [`handleSeekedForGradient`](../youtube-playback-plox.user.js#L17362) | [17362](../youtube-playback-plox.user.js#L17362) |
| `fn` | [`canValidateStandalone`](../youtube-playback-plox.user.js#L17485) | [17485](../youtube-playback-plox.user.js#L17485) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L17510) | [17510](../youtube-playback-plox.user.js#L17510) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L17579) | [17579](../youtube-playback-plox.user.js#L17579) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L17782) | [17782](../youtube-playback-plox.user.js#L17782) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L17895) | [17895](../youtube-playback-plox.user.js#L17895) |
| `fn` | [`processMediaVideo`](../youtube-playback-plox.user.js#L18010) | [18010](../youtube-playback-plox.user.js#L18010) |

## [PlaybackController](../youtube-playback-plox.user.js#L18061)
> [Line 18061](../youtube-playback-plox.user.js#L18061)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L18109) | [18109](../youtube-playback-plox.user.js#L18109) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L18125) | [18125](../youtube-playback-plox.user.js#L18125) |
| `fn` | [`removeMetadataListener`](../youtube-playback-plox.user.js#L18149) | [18149](../youtube-playback-plox.user.js#L18149) |
| `fn` | [`removeCanPlayListener`](../youtube-playback-plox.user.js#L18150) | [18150](../youtube-playback-plox.user.js#L18150) |
| `fn` | [`removeAbortListener`](../youtube-playback-plox.user.js#L18151) | [18151](../youtube-playback-plox.user.js#L18151) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L18152) | [18152](../youtube-playback-plox.user.js#L18152) |
| `fn` | [`rejectAsStale`](../youtube-playback-plox.user.js#L18158) | [18158](../youtube-playback-plox.user.js#L18158) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L18162) | [18162](../youtube-playback-plox.user.js#L18162) |
| `fn` | [`onAbort`](../youtube-playback-plox.user.js#L18171) | [18171](../youtube-playback-plox.user.js#L18171) |
| `fn` | [`restoreThrottleMarker`](../youtube-playback-plox.user.js#L18318) | [18318](../youtube-playback-plox.user.js#L18318) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L18410) | [18410](../youtube-playback-plox.user.js#L18410) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L18556)
> [Line 18556](../youtube-playback-plox.user.js#L18556)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getInnerTubeConfig`](../youtube-playback-plox.user.js#L18593) | [18593](../youtube-playback-plox.user.js#L18593) |
| `fn` | [`fetchInnerTubeJson`](../youtube-playback-plox.user.js#L18608) | [18608](../youtube-playback-plox.user.js#L18608) |
| `fn` | [`fetchShortsViews`](../youtube-playback-plox.user.js#L18642) | [18642](../youtube-playback-plox.user.js#L18642) |
| `fn` | [`fetchPlaylistTitle`](../youtube-playback-plox.user.js#L18655) | [18655](../youtube-playback-plox.user.js#L18655) |
| `fn` | [`getCascadedVideoInfo`](../youtube-playback-plox.user.js#L18665) | [18665](../youtube-playback-plox.user.js#L18665) |
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L18710) | [18710](../youtube-playback-plox.user.js#L18710) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L19113)
> [Line 19113](../youtube-playback-plox.user.js#L19113)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createCustomDropdown`](../youtube-playback-plox.user.js#L19127) | [19127](../youtube-playback-plox.user.js#L19127) |
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L19138) | [19138](../youtube-playback-plox.user.js#L19138) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L19214) | [19214](../youtube-playback-plox.user.js#L19214) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L19230) | [19230](../youtube-playback-plox.user.js#L19230) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L19238) | [19238](../youtube-playback-plox.user.js#L19238) |
| `fn` | [`createSortSelector`](../youtube-playback-plox.user.js#L19255) | [19255](../youtube-playback-plox.user.js#L19255) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L19258) | [19258](../youtube-playback-plox.user.js#L19258) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L19311)
> [Line 19311](../youtube-playback-plox.user.js#L19311)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFilterSelector`](../youtube-playback-plox.user.js#L19320) | [19320](../youtube-playback-plox.user.js#L19320) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L19323) | [19323](../youtube-playback-plox.user.js#L19323) |
| `fn` | [`createRangeFilter`](../youtube-playback-plox.user.js#L19367) | [19367](../youtube-playback-plox.user.js#L19367) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L19370) | [19370](../youtube-playback-plox.user.js#L19370) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L19376) | [19376](../youtube-playback-plox.user.js#L19376) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L19384) | [19384](../youtube-playback-plox.user.js#L19384) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L19399) | [19399](../youtube-playback-plox.user.js#L19399) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L19519) | [19519](../youtube-playback-plox.user.js#L19519) |
| `fn` | [`createSearchInput`](../youtube-playback-plox.user.js#L19574) | [19574](../youtube-playback-plox.user.js#L19574) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L19599)
> [Line 19599](../youtube-playback-plox.user.js#L19599)

| Type | Name | Line |
|---|---|---|
| `fn` | [`acquireBodyOverflow`](../youtube-playback-plox.user.js#L19627) | [19627](../youtube-playback-plox.user.js#L19627) |
| `fn` | [`releaseBodyOverflow`](../youtube-playback-plox.user.js#L19641) | [19641](../youtube-playback-plox.user.js#L19641) |
| `fn` | [`getVirtualScrollerVideoItems`](../youtube-playback-plox.user.js#L19711) | [19711](../youtube-playback-plox.user.js#L19711) |
| `fn` | [`batchLoadStorageData`](../youtube-playback-plox.user.js#L19740) | [19740](../youtube-playback-plox.user.js#L19740) |

## [📁 Update Video List](../youtube-playback-plox.user.js#L19781)
> [Line 19781](../youtube-playback-plox.user.js#L19781)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSortValue`](../youtube-playback-plox.user.js#L19788) | [19788](../youtube-playback-plox.user.js#L19788) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L19800) | [19800](../youtube-playback-plox.user.js#L19800) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L19804) | [19804](../youtube-playback-plox.user.js#L19804) |
| `fn` | [`showLoadingState`](../youtube-playback-plox.user.js#L19821) | [19821](../youtube-playback-plox.user.js#L19821) |
| `fn` | [`loadVideoItems`](../youtube-playback-plox.user.js#L19884) | [19884](../youtube-playback-plox.user.js#L19884) |
| `fn` | [`resolvePlaylistTitles`](../youtube-playback-plox.user.js#L19908) | [19908](../youtube-playback-plox.user.js#L19908) |
| `fn` | [`filterItems`](../youtube-playback-plox.user.js#L19940) | [19940](../youtube-playback-plox.user.js#L19940) |
| `fn` | [`buildVirtualItems`](../youtube-playback-plox.user.js#L19984) | [19984](../youtube-playback-plox.user.js#L19984) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L19997) | [19997](../youtube-playback-plox.user.js#L19997) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L20018) | [20018](../youtube-playback-plox.user.js#L20018) |
| `fn` | [`showEmptyState`](../youtube-playback-plox.user.js#L20048) | [20048](../youtube-playback-plox.user.js#L20048) |
| `fn` | [`showListLoadErrorState`](../youtube-playback-plox.user.js#L20081) | [20081](../youtube-playback-plox.user.js#L20081) |
| `fn` | [`updateVirtualScroller`](../youtube-playback-plox.user.js#L20105) | [20105](../youtube-playback-plox.user.js#L20105) |
| `fn` | [`initVirtualScroller`](../youtube-playback-plox.user.js#L20135) | [20135](../youtube-playback-plox.user.js#L20135) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L20181) | [20181](../youtube-playback-plox.user.js#L20181) |
| `fn` | [`connectResizeObserver`](../youtube-playback-plox.user.js#L20239) | [20239](../youtube-playback-plox.user.js#L20239) |
| `fn` | [`updateVideoList`](../youtube-playback-plox.user.js#L20277) | [20277](../youtube-playback-plox.user.js#L20277) |
| `fn` | [`isCurrentRender`](../youtube-playback-plox.user.js#L20282) | [20282](../youtube-playback-plox.user.js#L20282) |
| `fn` | [`requestVideoListUpdate`](../youtube-playback-plox.user.js#L20356) | [20356](../youtube-playback-plox.user.js#L20356) |
| `fn` | [`closeModalVideos`](../youtube-playback-plox.user.js#L20367) | [20367](../youtube-playback-plox.user.js#L20367) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L20460) | [20460](../youtube-playback-plox.user.js#L20460) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L20477) | [20477](../youtube-playback-plox.user.js#L20477) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L20505) | [20505](../youtube-playback-plox.user.js#L20505) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L20637)
> [Line 20637](../youtube-playback-plox.user.js#L20637)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L20640) | [20640](../youtube-playback-plox.user.js#L20640) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L20655) | [20655](../youtube-playback-plox.user.js#L20655) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L20666)
> [Line 20666](../youtube-playback-plox.user.js#L20666)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSavedVideosList`](../youtube-playback-plox.user.js#L20669) | [20669](../youtube-playback-plox.user.js#L20669) |
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L20807) | [20807](../youtube-playback-plox.user.js#L20807) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L20817) | [20817](../youtube-playback-plox.user.js#L20817) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L20887) | [20887](../youtube-playback-plox.user.js#L20887) |
| `fn` | [`onSavedVideosKeyDown`](../youtube-playback-plox.user.js#L20896) | [20896](../youtube-playback-plox.user.js#L20896) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L20939)
> [Line 20939](../youtube-playback-plox.user.js#L20939)

| Type | Name | Line |
|---|---|---|
| `fn` | [`generatePlaylistColor`](../youtube-playback-plox.user.js#L20948) | [20948](../youtube-playback-plox.user.js#L20948) |
| `fn` | [`generatePlaylistBorderColor`](../youtube-playback-plox.user.js#L20977) | [20977](../youtube-playback-plox.user.js#L20977) |
| `fn` | [`handleForceTimeAction`](../youtube-playback-plox.user.js#L20999) | [20999](../youtube-playback-plox.user.js#L20999) |
| `fn` | [`handleUnlinkPlaylistAction`](../youtube-playback-plox.user.js#L21065) | [21065](../youtube-playback-plox.user.js#L21065) |
| `fn` | [`handleDeleteEntryAction`](../youtube-playback-plox.user.js#L21087) | [21087](../youtube-playback-plox.user.js#L21087) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L21120) | [21120](../youtube-playback-plox.user.js#L21120) |
| `fn` | [`handleToggleProtectionAction`](../youtube-playback-plox.user.js#L21149) | [21149](../youtube-playback-plox.user.js#L21149) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L21190) | [21190](../youtube-playback-plox.user.js#L21190) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L21238) | [21238](../youtube-playback-plox.user.js#L21238) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L21244) | [21244](../youtube-playback-plox.user.js#L21244) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L21263) | [21263](../youtube-playback-plox.user.js#L21263) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L21297) | [21297](../youtube-playback-plox.user.js#L21297) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L21349) | [21349](../youtube-playback-plox.user.js#L21349) |
| `fn` | [`generateVideoObsidianMarkdown`](../youtube-playback-plox.user.js#L21398) | [21398](../youtube-playback-plox.user.js#L21398) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L21431) | [21431](../youtube-playback-plox.user.js#L21431) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L21437) | [21437](../youtube-playback-plox.user.js#L21437) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L21453) | [21453](../youtube-playback-plox.user.js#L21453) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L21463) | [21463](../youtube-playback-plox.user.js#L21463) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L21471) | [21471](../youtube-playback-plox.user.js#L21471) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L21476) | [21476](../youtube-playback-plox.user.js#L21476) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L21483) | [21483](../youtube-playback-plox.user.js#L21483) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L21486) | [21486](../youtube-playback-plox.user.js#L21486) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L21490) | [21490](../youtube-playback-plox.user.js#L21490) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L21536) | [21536](../youtube-playback-plox.user.js#L21536) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L21536) | [21536](../youtube-playback-plox.user.js#L21536) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L21550) | [21550](../youtube-playback-plox.user.js#L21550) |
| `fn` | [`createModeSelector`](../youtube-playback-plox.user.js#L21824) | [21824](../youtube-playback-plox.user.js#L21824) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L21825) | [21825](../youtube-playback-plox.user.js#L21825) |
| `fn` | [`createViewModeSelector`](../youtube-playback-plox.user.js#L21857) | [21857](../youtube-playback-plox.user.js#L21857) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L21874) | [21874](../youtube-playback-plox.user.js#L21874) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L21875) | [21875](../youtube-playback-plox.user.js#L21875) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L21891) | [21891](../youtube-playback-plox.user.js#L21891) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L21892) | [21892](../youtube-playback-plox.user.js#L21892) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L21941) | [21941](../youtube-playback-plox.user.js#L21941) |
| `fn` | [`createOverflowToggle`](../youtube-playback-plox.user.js#L21972) | [21972](../youtube-playback-plox.user.js#L21972) |
| `fn` | [`makeToolbarGroup`](../youtube-playback-plox.user.js#L22011) | [22011](../youtube-playback-plox.user.js#L22011) |
| `fn` | [`makeDisplayToggle`](../youtube-playback-plox.user.js#L22033) | [22033](../youtube-playback-plox.user.js#L22033) |
| `fn` | [`mountSavedVideosModalActionsToolbar`](../youtube-playback-plox.user.js#L22067) | [22067](../youtube-playback-plox.user.js#L22067) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L22090) | [22090](../youtube-playback-plox.user.js#L22090) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L22104) | [22104](../youtube-playback-plox.user.js#L22104) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L22426) | [22426](../youtube-playback-plox.user.js#L22426) |
| `fn` | [`applyThumbnailToImage`](../youtube-playback-plox.user.js#L22482) | [22482](../youtube-playback-plox.user.js#L22482) |
| `fn` | [`removeLoadListener`](../youtube-playback-plox.user.js#L22491) | [22491](../youtube-playback-plox.user.js#L22491) |
| `fn` | [`removeErrorListener`](../youtube-playback-plox.user.js#L22492) | [22492](../youtube-playback-plox.user.js#L22492) |
| `fn` | [`finish`](../youtube-playback-plox.user.js#L22498) | [22498](../youtube-playback-plox.user.js#L22498) |
| `fn` | [`loadCandidate`](../youtube-playback-plox.user.js#L22513) | [22513](../youtube-playback-plox.user.js#L22513) |
| `fn` | [`createVideoGridRow`](../youtube-playback-plox.user.js#L22548) | [22548](../youtube-playback-plox.user.js#L22548) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L22565) | [22565](../youtube-playback-plox.user.js#L22565) |
| `fn` | [`scheduleHeightUpdate`](../youtube-playback-plox.user.js#L22614) | [22614](../youtube-playback-plox.user.js#L22614) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L22661) | [22661](../youtube-playback-plox.user.js#L22661) |
| `fn` | [`createVideoEntry`](../youtube-playback-plox.user.js#L22675) | [22675](../youtube-playback-plox.user.js#L22675) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L22909) | [22909](../youtube-playback-plox.user.js#L22909) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L22932) | [22932](../youtube-playback-plox.user.js#L22932) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L22933) | [22933](../youtube-playback-plox.user.js#L22933) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L22991)
> [Line 22991](../youtube-playback-plox.user.js#L22991)

| Type | Name | Line |
|---|---|---|
| `fn` | [`restoreDeletedRecordIfUnchanged`](../youtube-playback-plox.user.js#L23010) | [23010](../youtube-playback-plox.user.js#L23010) |
| `fn` | [`canCommit`](../youtube-playback-plox.user.js#L23011) | [23011](../youtube-playback-plox.user.js#L23011) |
| `fn` | [`clearAllData`](../youtube-playback-plox.user.js#L23040) | [23040](../youtube-playback-plox.user.js#L23040) |
| `fn` | [`clearCommitGuard`](../youtube-playback-plox.user.js#L23055) | [23055](../youtube-playback-plox.user.js#L23055) |
| `fn` | [`performClearAllData`](../youtube-playback-plox.user.js#L23075) | [23075](../youtube-playback-plox.user.js#L23075) |
| `fn` | [`undoClearAll`](../youtube-playback-plox.user.js#L23265) | [23265](../youtube-playback-plox.user.js#L23265) |
| `fn` | [`undoCommitGuard`](../youtube-playback-plox.user.js#L23268) | [23268](../youtube-playback-plox.user.js#L23268) |
| `fn` | [`performUndoClearAll`](../youtube-playback-plox.user.js#L23281) | [23281](../youtube-playback-plox.user.js#L23281) |

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L23349)
> [Line 23349](../youtube-playback-plox.user.js#L23349)

| Type | Name | Line |
|---|---|---|
| `fn` | [`registerOwnedMenuCommand`](../youtube-playback-plox.user.js#L23358) | [23358](../youtube-playback-plox.user.js#L23358) |
| `fn` | [`unregisterOwnedMenuCommands`](../youtube-playback-plox.user.js#L23368) | [23368](../youtube-playback-plox.user.js#L23368) |
| `fn` | [`registerMenuCommands`](../youtube-playback-plox.user.js#L23381) | [23381](../youtube-playback-plox.user.js#L23381) |

## [🔄 Data Migration](../youtube-playback-plox.user.js#L23407)
> [Line 23407](../youtube-playback-plox.user.js#L23407)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeVideoType`](../youtube-playback-plox.user.js#L23416) | [23416](../youtube-playback-plox.user.js#L23416) |
| `fn` | [`cleanupNonVideoData`](../youtube-playback-plox.user.js#L23438) | [23438](../youtube-playback-plox.user.js#L23438) |
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L23465) | [23465](../youtube-playback-plox.user.js#L23465) |
| `fn` | [`runAutoCleanup`](../youtube-playback-plox.user.js#L23686) | [23686](../youtube-playback-plox.user.js#L23686) |
| `fn` | [`cleanupCommitGuard`](../youtube-playback-plox.user.js#L23706) | [23706](../youtube-playback-plox.user.js#L23706) |

## [🚀 Init](../youtube-playback-plox.user.js#L23910)
> [Line 23910](../youtube-playback-plox.user.js#L23910)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L23923) | [23923](../youtube-playback-plox.user.js#L23923) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L23945) | [23945](../youtube-playback-plox.user.js#L23945) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L24304) | [24304](../youtube-playback-plox.user.js#L24304) |

