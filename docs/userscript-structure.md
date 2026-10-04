# Userscript Structure
> Auto-generated on 2026-10-04 · version 0.0.13
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
20. [📝 Selector System](#selector-system) - [line 1850](../youtube-playback-plox.user.js#L1850)
21. [💾 Simple LRU Cache](#simple-lru-cache) - [line 2136](../youtube-playback-plox.user.js#L2136)
22. [⚙️ DOM Cache System](#dom-cache-system) - [line 2217](../youtube-playback-plox.user.js#L2217)
23. [🌐 Translation Functions](#translation-functions) - [line 2583](../youtube-playback-plox.user.js#L2583)
24. [🎨 Styles](#styles) - [line 2748](../youtube-playback-plox.user.js#L2748)
25. [🎨 Theme](#theme) - [line 5361](../youtube-playback-plox.user.js#L5361)
26. [🎨 SVG Icons](#svg-icons) - [line 5439](../youtube-playback-plox.user.js#L5439)
27. [🎨 Progress Bar Style](#progress-bar-style) - [line 5601](../youtube-playback-plox.user.js#L5601)
28. [💾 Storage + Settings](#storage-settings) - [line 6118](../youtube-playback-plox.user.js#L6118)
29. [📢 Ad Caches](#ad-caches) - [line 9115](../youtube-playback-plox.user.js#L9115)
30. [📢 Ad Detector](#ad-detector) - [line 9135](../youtube-playback-plox.user.js#L9135)
31. [🎯 VirtualScroller](#virtualscroller) - [line 9313](../youtube-playback-plox.user.js#L9313)
32. [📤 Import/Export JSON](#importexport-json) - [line 9802](../youtube-playback-plox.user.js#L9802)
33. [☁️ GitHub Backup](#github-backup) - [line 10388](../youtube-playback-plox.user.js#L10388)
34. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 10925](../youtube-playback-plox.user.js#L10925)
35. [🔄 Normalize Video Data](#normalize-video-data) - [line 11107](../youtube-playback-plox.user.js#L11107)
36. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 11205](../youtube-playback-plox.user.js#L11205)
37. [Parse FreeTube DB](#parse-freetube-db) - [line 11296](../youtube-playback-plox.user.js#L11296)
38. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 11389](../youtube-playback-plox.user.js#L11389)
39. [⬆ Export To FreeTube](#export-to-freetube) - [line 11419](../youtube-playback-plox.user.js#L11419)
40. [⬇ Import From FreeTube](#import-from-freetube) - [line 11463](../youtube-playback-plox.user.js#L11463)
41. [🔄 Insert Completion Event](#insert-completion-event) - [line 11561](../youtube-playback-plox.user.js#L11561)
42. [💾 Save Video Generic](#save-video-generic) - [line 11608](../youtube-playback-plox.user.js#L11608)
43. [📺 Helpers](#helpers) - [line 11850](../youtube-playback-plox.user.js#L11850)
44. [📺 Gets saved video data](#gets-saved-video-data) - [line 11853](../youtube-playback-plox.user.js#L11853)
45. [📺 Get Player Video ID](#get-player-video-id) - [line 11910](../youtube-playback-plox.user.js#L11910)
46. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 11989](../youtube-playback-plox.user.js#L11989)
47. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 12194](../youtube-playback-plox.user.js#L12194)
48. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 12400](../youtube-playback-plox.user.js#L12400)
49. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 12422](../youtube-playback-plox.user.js#L12422)
50. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 12450](../youtube-playback-plox.user.js#L12450)
51. [📺 get Playlist Name](#get-playlist-name) - [line 12495](../youtube-playback-plox.user.js#L12495)
52. [🕒 Time Display](#time-display) - [line 12778](../youtube-playback-plox.user.js#L12778)
53. [🖼️ Display Button Helpers](#display-button-helpers) - [line 12814](../youtube-playback-plox.user.js#L12814)
54. [🍞 Toasts](#toasts) - [line 13690](../youtube-playback-plox.user.js#L13690)
55. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 14005](../youtube-playback-plox.user.js#L14005)
56. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 14052](../youtube-playback-plox.user.js#L14052)
57. [⚙️ Settings UI](#settings-ui) - [line 14370](../youtube-playback-plox.user.js#L14370)
58. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 14893](../youtube-playback-plox.user.js#L14893)
59. [🎵 Video Selection](#video-selection) - [line 14951](../youtube-playback-plox.user.js#L14951)
60. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 15907](../youtube-playback-plox.user.js#L15907)
61. [📡 Video Observer Manager](#video-observer-manager) - [line 16182](../youtube-playback-plox.user.js#L16182)
62. [Processing Functions](#processing-functions) - [line 17048](../youtube-playback-plox.user.js#L17048)
63. [PlaybackController](#playbackcontroller) - [line 18262](../youtube-playback-plox.user.js#L18262)
64. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 18763](../youtube-playback-plox.user.js#L18763)
65. [📂 Sort UI](#sort-ui) - [line 19320](../youtube-playback-plox.user.js#L19320)
66. [📂 Filters UI](#filters-ui) - [line 19522](../youtube-playback-plox.user.js#L19522)
67. [📂 Video List UI](#video-list-ui) - [line 19812](../youtube-playback-plox.user.js#L19812)
68. [📁 Update Video List](#update-video-list) - [line 19990](../youtube-playback-plox.user.js#L19990)
69. [🔘 Floating Button](#floating-button) - [line 20856](../youtube-playback-plox.user.js#L20856)
70. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 20885](../youtube-playback-plox.user.js#L20885)
71. [📂 Video Entry](#video-entry) - [line 21158](../youtube-playback-plox.user.js#L21158)
72. [🗑️ Clear All Data](#clear-all-data) - [line 23210](../youtube-playback-plox.user.js#L23210)
73. [⚙️ Menu Commands](#menu-commands) - [line 23568](../youtube-playback-plox.user.js#L23568)
74. [🔄 Data Migration](#data-migration) - [line 23626](../youtube-playback-plox.user.js#L23626)
75. [🚀 Init](#init) - [line 24129](../youtube-playback-plox.user.js#L24129)

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
| `fn` | [`addDisposableListener`](../youtube-playback-plox.user.js#L1826) | [1826](../youtube-playback-plox.user.js#L1826) |
| `fn` | [`removeListener`](../youtube-playback-plox.user.js#L1834) | [1834](../youtube-playback-plox.user.js#L1834) |
| `fn` | [`selfRetiringDispose`](../youtube-playback-plox.user.js#L1837) | [1837](../youtube-playback-plox.user.js#L1837) |

## [📝 Selector System](../youtube-playback-plox.user.js#L1850)
> [Line 1850](../youtube-playback-plox.user.js#L1850)

| Type | Name | Line |
|---|---|---|
| `module` | [`PREFIX`](../youtube-playback-plox.user.js#L1934) | [1934](../youtube-playback-plox.user.js#L1934) |
| `fn` | [`createSelectorSystem`](../youtube-playback-plox.user.js#L1959) | [1959](../youtube-playback-plox.user.js#L1959) |

## [💾 Simple LRU Cache](../youtube-playback-plox.user.js#L2136)
> [Line 2136](../youtube-playback-plox.user.js#L2136)

| Type | Name | Line |
|---|---|---|
| `class` | [`SimpleLRUCache`](../youtube-playback-plox.user.js#L2141) | [2141](../youtube-playback-plox.user.js#L2141) |

## [⚙️ DOM Cache System](../youtube-playback-plox.user.js#L2217)
> [Line 2217](../youtube-playback-plox.user.js#L2217)

| Type | Name | Line |
|---|---|---|
| `fn` | [`DOMHelpers`](../youtube-playback-plox.user.js#L2234) | [2234](../youtube-playback-plox.user.js#L2234) |
| `module` | [`DOMHelpers`](../youtube-playback-plox.user.js#L2234) | [2234](../youtube-playback-plox.user.js#L2234) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L2266) | [2266](../youtube-playback-plox.user.js#L2266) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L2304) | [2304](../youtube-playback-plox.user.js#L2304) |

## [🌐 Translation Functions](../youtube-playback-plox.user.js#L2583)
> [Line 2583](../youtube-playback-plox.user.js#L2583)

| Type | Name | Line |
|---|---|---|
| `fn` | [`t`](../youtube-playback-plox.user.js#L2597) | [2597](../youtube-playback-plox.user.js#L2597) |
| `fn` | [`normParams`](../youtube-playback-plox.user.js#L2607) | [2607](../youtube-playback-plox.user.js#L2607) |
| `fn` | [`replaceParams`](../youtube-playback-plox.user.js#L2624) | [2624](../youtube-playback-plox.user.js#L2624) |
| `fn` | [`setLanguage`](../youtube-playback-plox.user.js#L2640) | [2640](../youtube-playback-plox.user.js#L2640) |
| `fn` | [`detectBrowserLanguage`](../youtube-playback-plox.user.js#L2703) | [2703](../youtube-playback-plox.user.js#L2703) |
| `fn` | [`candidates`](../youtube-playback-plox.user.js#L2705) | [2705](../youtube-playback-plox.user.js#L2705) |
| `fn` | [`normalized`](../youtube-playback-plox.user.js#L2724) | [2724](../youtube-playback-plox.user.js#L2724) |

## [🎨 Styles](../youtube-playback-plox.user.js#L2748)
> [Line 2748](../youtube-playback-plox.user.js#L2748)

_No relevant functions or constants detected._

## [🎨 Theme](../youtube-playback-plox.user.js#L5361)
> [Line 5361](../youtube-playback-plox.user.js#L5361)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isYouTubeDarkTheme`](../youtube-playback-plox.user.js#L5368) | [5368](../youtube-playback-plox.user.js#L5368) |
| `fn` | [`applyTheme`](../youtube-playback-plox.user.js#L5386) | [5386](../youtube-playback-plox.user.js#L5386) |
| `fn` | [`observeThemeChanges`](../youtube-playback-plox.user.js#L5399) | [5399](../youtube-playback-plox.user.js#L5399) |
| `fn` | [`cleanupThemeObserver`](../youtube-playback-plox.user.js#L5422) | [5422](../youtube-playback-plox.user.js#L5422) |
| `fn` | [`cleanupGlobalListeners`](../youtube-playback-plox.user.js#L5433) | [5433](../youtube-playback-plox.user.js#L5433) |

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L5439)
> [Line 5439](../youtube-playback-plox.user.js#L5439)

_No relevant functions or constants detected._

## [🎨 Progress Bar Style](../youtube-playback-plox.user.js#L5601)
> [Line 5601](../youtube-playback-plox.user.js#L5601)

| Type | Name | Line |
|---|---|---|
| `fn` | [`clearAllProgressGradientState`](../youtube-playback-plox.user.js#L5613) | [5613](../youtube-playback-plox.user.js#L5613) |
| `fn` | [`syncProgressGradientStateForContainer`](../youtube-playback-plox.user.js#L5629) | [5629](../youtube-playback-plox.user.js#L5629) |
| `fn` | [`resolvePlayerRootForGradient`](../youtube-playback-plox.user.js#L5652) | [5652](../youtube-playback-plox.user.js#L5652) |
| `fn` | [`clearProgressColorFromPlayerRoot`](../youtube-playback-plox.user.js#L5663) | [5663](../youtube-playback-plox.user.js#L5663) |
| `fn` | [`applyProgressColorToPlayerRoot`](../youtube-playback-plox.user.js#L5683) | [5683](../youtube-playback-plox.user.js#L5683) |
| `fn` | [`applyProgressColorToShortsSurfaces`](../youtube-playback-plox.user.js#L5707) | [5707](../youtube-playback-plox.user.js#L5707) |
| `fn` | [`repaintWatchProgressBarFromActivePlayer`](../youtube-playback-plox.user.js#L5727) | [5727](../youtube-playback-plox.user.js#L5727) |
| `fn` | [`scheduleProgressBarGradientRepaint`](../youtube-playback-plox.user.js#L5749) | [5749](../youtube-playback-plox.user.js#L5749) |
| `fn` | [`isCurrentSession`](../youtube-playback-plox.user.js#L5751) | [5751](../youtube-playback-plox.user.js#L5751) |
| `fn` | [`paint`](../youtube-playback-plox.user.js#L5758) | [5758](../youtube-playback-plox.user.js#L5758) |
| `fn` | [`isLivePlaybackForGradient`](../youtube-playback-plox.user.js#L5780) | [5780](../youtube-playback-plox.user.js#L5780) |
| `fn` | [`updateProgressBarGradient`](../youtube-playback-plox.user.js#L5817) | [5817](../youtube-playback-plox.user.js#L5817) |
| `fn` | [`refreshProgressBarGradientForSession`](../youtube-playback-plox.user.js#L5893) | [5893](../youtube-playback-plox.user.js#L5893) |
| `fn` | [`resetProgressBarGradient`](../youtube-playback-plox.user.js#L5915) | [5915](../youtube-playback-plox.user.js#L5915) |
| `fn` | [`injectProgressBarCSS`](../youtube-playback-plox.user.js#L5937) | [5937](../youtube-playback-plox.user.js#L5937) |
| `fn` | [`getProgressColor`](../youtube-playback-plox.user.js#L6067) | [6067](../youtube-playback-plox.user.js#L6067) |
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L6095) | [6095](../youtube-playback-plox.user.js#L6095) |
| `fn` | [`getProgressColorForText`](../youtube-playback-plox.user.js#L6104) | [6104](../youtube-playback-plox.user.js#L6104) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L6118)
> [Line 6118](../youtube-playback-plox.user.js#L6118)

| Type | Name | Line |
|---|---|---|
| `fn` | [`markLocalDeletion`](../youtube-playback-plox.user.js#L6155) | [6155](../youtube-playback-plox.user.js#L6155) |
| `fn` | [`rememberGMFallbackKey`](../youtube-playback-plox.user.js#L6170) | [6170](../youtube-playback-plox.user.js#L6170) |
| `fn` | [`rememberGMTombstone`](../youtube-playback-plox.user.js#L6185) | [6185](../youtube-playback-plox.user.js#L6185) |
| `fn` | [`bumpStorageKeyRevision`](../youtube-playback-plox.user.js#L6204) | [6204](../youtube-playback-plox.user.js#L6204) |
| `fn` | [`getStorageRevisionSnapshot`](../youtube-playback-plox.user.js#L6217) | [6217](../youtube-playback-plox.user.js#L6217) |
| `fn` | [`storageRevisionChanged`](../youtube-playback-plox.user.js#L6230) | [6230](../youtube-playback-plox.user.js#L6230) |
| `fn` | [`invalidateSessionSavedData`](../youtube-playback-plox.user.js#L6303) | [6303](../youtube-playback-plox.user.js#L6303) |
| `fn` | [`broadcastStorageChange`](../youtube-playback-plox.user.js#L6320) | [6320](../youtube-playback-plox.user.js#L6320) |
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L6343) | [6343](../youtube-playback-plox.user.js#L6343) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L6343) | [6343](../youtube-playback-plox.user.js#L6343) |
| `fn` | [`enqueueDurableOperation`](../youtube-playback-plox.user.js#L6373) | [6373](../youtube-playback-plox.user.js#L6373) |
| `fn` | [`hasDurableGMStorage`](../youtube-playback-plox.user.js#L6386) | [6386](../youtube-playback-plox.user.js#L6386) |
| `fn` | [`hasAnyGMStorageApi`](../youtube-playback-plox.user.js#L6396) | [6396](../youtube-playback-plox.user.js#L6396) |
| `fn` | [`waitForDurableMutations`](../youtube-playback-plox.user.js#L6409) | [6409](../youtube-playback-plox.user.js#L6409) |
| `fn` | [`canUseIDB`](../youtube-playback-plox.user.js#L6414) | [6414](../youtube-playback-plox.user.js#L6414) |
| `fn` | [`isStorageRecordError`](../youtube-playback-plox.user.js#L6421) | [6421](../youtube-playback-plox.user.js#L6421) |
| `fn` | [`isStorageProviderError`](../youtube-playback-plox.user.js#L6431) | [6431](../youtube-playback-plox.user.js#L6431) |
| `fn` | [`scheduleQuarantineNotice`](../youtube-playback-plox.user.js#L6441) | [6441](../youtube-playback-plox.user.js#L6441) |
| `fn` | [`registerQuarantinedRecord`](../youtube-playback-plox.user.js#L6479) | [6479](../youtube-playback-plox.user.js#L6479) |
| `fn` | [`quarantineRecordError`](../youtube-playback-plox.user.js#L6501) | [6501](../youtube-playback-plox.user.js#L6501) |
| `fn` | [`getQuarantinedRecords`](../youtube-playback-plox.user.js#L6510) | [6510](../youtube-playback-plox.user.js#L6510) |
| `fn` | [`persistRepairedRows`](../youtube-playback-plox.user.js#L6521) | [6521](../youtube-playback-plox.user.js#L6521) |
| `fn` | [`buildStorageDamageReport`](../youtube-playback-plox.user.js#L6549) | [6549](../youtube-playback-plox.user.js#L6549) |
| `fn` | [`markIDBUnavailable`](../youtube-playback-plox.user.js#L6575) | [6575](../youtube-playback-plox.user.js#L6575) |
| `fn` | [`markIDBAvailable`](../youtube-playback-plox.user.js#L6580) | [6580](../youtube-playback-plox.user.js#L6580) |
| `fn` | [`pickNewerDurableRecord`](../youtube-playback-plox.user.js#L6591) | [6591](../youtube-playback-plox.user.js#L6591) |
| `fn` | [`getGMFallback`](../youtube-playback-plox.user.js#L6605) | [6605](../youtube-playback-plox.user.js#L6605) |
| `fn` | [`parseStoredRecord`](../youtube-playback-plox.user.js#L6634) | [6634](../youtube-playback-plox.user.js#L6634) |
| `fn` | [`setGMFallback`](../youtube-playback-plox.user.js#L6661) | [6661](../youtube-playback-plox.user.js#L6661) |
| `fn` | [`setGMFallbackNewestWins`](../youtube-playback-plox.user.js#L6675) | [6675](../youtube-playback-plox.user.js#L6675) |
| `fn` | [`deleteGMFallback`](../youtube-playback-plox.user.js#L6698) | [6698](../youtube-playback-plox.user.js#L6698) |
| `fn` | [`reconcileGMFallbackAfterIDB`](../youtube-playback-plox.user.js#L6735) | [6735](../youtube-playback-plox.user.js#L6735) |
| `fn` | [`reconcileGMFallbacksAfterIDB`](../youtube-playback-plox.user.js#L6826) | [6826](../youtube-playback-plox.user.js#L6826) |
| `fn` | [`initialize`](../youtube-playback-plox.user.js#L6910) | [6910](../youtube-playback-plox.user.js#L6910) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L6975) | [6975](../youtube-playback-plox.user.js#L6975) |
| `fn` | [`set`](../youtube-playback-plox.user.js#L7201) | [7201](../youtube-playback-plox.user.js#L7201) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7205) | [7205](../youtube-playback-plox.user.js#L7205) |
| `fn` | [`setMany`](../youtube-playback-plox.user.js#L7294) | [7294](../youtube-playback-plox.user.js#L7294) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7305) | [7305](../youtube-playback-plox.user.js#L7305) |
| `fn` | [`deleteGMFallbackIfUnchanged`](../youtube-playback-plox.user.js#L7468) | [7468](../youtube-playback-plox.user.js#L7468) |
| `fn` | [`del`](../youtube-playback-plox.user.js#L7491) | [7491](../youtube-playback-plox.user.js#L7491) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7494) | [7494](../youtube-playback-plox.user.js#L7494) |
| `fn` | [`repairQuarantinedRecords`](../youtube-playback-plox.user.js#L7636) | [7636](../youtube-playback-plox.user.js#L7636) |
| `fn` | [`purgeQuarantinedRecords`](../youtube-playback-plox.user.js#L7689) | [7689](../youtube-playback-plox.user.js#L7689) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L7759) | [7759](../youtube-playback-plox.user.js#L7759) |
| `fn` | [`rawKeys`](../youtube-playback-plox.user.js#L7823) | [7823](../youtube-playback-plox.user.js#L7823) |
| `fn` | [`getCompleteVideoSnapshot`](../youtube-playback-plox.user.js#L7889) | [7889](../youtube-playback-plox.user.js#L7889) |
| `fn` | [`getBackendInfo`](../youtube-playback-plox.user.js#L8066) | [8066](../youtube-playback-plox.user.js#L8066) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L8095) | [8095](../youtube-playback-plox.user.js#L8095) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L8095) | [8095](../youtube-playback-plox.user.js#L8095) |
| `fn` | [`openDatabase`](../youtube-playback-plox.user.js#L8103) | [8103](../youtube-playback-plox.user.js#L8103) |
| `fn` | [`failOpen`](../youtube-playback-plox.user.js#L8109) | [8109](../youtube-playback-plox.user.js#L8109) |
| `fn` | [`runInStore`](../youtube-playback-plox.user.js#L8169) | [8169](../youtube-playback-plox.user.js#L8169) |
| `fn` | [`enqueue`](../youtube-playback-plox.user.js#L8194) | [8194](../youtube-playback-plox.user.js#L8194) |
| `fn` | [`describeStoredValueType`](../youtube-playback-plox.user.js#L8210) | [8210](../youtube-playback-plox.user.js#L8210) |
| `fn` | [`isEmptyStoredValue`](../youtube-playback-plox.user.js#L8224) | [8224](../youtube-playback-plox.user.js#L8224) |
| `fn` | [`sanitizeToJsonSafe`](../youtube-playback-plox.user.js#L8245) | [8245](../youtube-playback-plox.user.js#L8245) |
| `fn` | [`attemptStoredValueRepair`](../youtube-playback-plox.user.js#L8292) | [8292](../youtube-playback-plox.user.js#L8292) |
| `fn` | [`sanitizeEntries`](../youtube-playback-plox.user.js#L8361) | [8361](../youtube-playback-plox.user.js#L8361) |
| `fn` | [`pushEntry`](../youtube-playback-plox.user.js#L8374) | [8374](../youtube-playback-plox.user.js#L8374) |
| `fn` | [`getAllEntries`](../youtube-playback-plox.user.js#L8479) | [8479](../youtube-playback-plox.user.js#L8479) |
| `fn` | [`repairEntries`](../youtube-playback-plox.user.js#L8491) | [8491](../youtube-playback-plox.user.js#L8491) |
| `fn` | [`putEntry`](../youtube-playback-plox.user.js#L8525) | [8525](../youtube-playback-plox.user.js#L8525) |
| `fn` | [`deleteEntry`](../youtube-playback-plox.user.js#L8529) | [8529](../youtube-playback-plox.user.js#L8529) |
| `fn` | [`bulkDelete`](../youtube-playback-plox.user.js#L8538) | [8538](../youtube-playback-plox.user.js#L8538) |
| `fn` | [`bulkPut`](../youtube-playback-plox.user.js#L8557) | [8557](../youtube-playback-plox.user.js#L8557) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L8584) | [8584](../youtube-playback-plox.user.js#L8584) |
| `fn` | [`diagnose`](../youtube-playback-plox.user.js#L8607) | [8607](../youtube-playback-plox.user.js#L8607) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L8663) | [8663](../youtube-playback-plox.user.js#L8663) |
| `fn` | [`prefixKey`](../youtube-playback-plox.user.js#L8672) | [8672](../youtube-playback-plox.user.js#L8672) |
| `fn` | [`stripPrefix`](../youtube-playback-plox.user.js#L8673) | [8673](../youtube-playback-plox.user.js#L8673) |
| `fn` | [`hasPrefix`](../youtube-playback-plox.user.js#L8674) | [8674](../youtube-playback-plox.user.js#L8674) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L8925) | [8925](../youtube-playback-plox.user.js#L8925) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L8943) | [8943](../youtube-playback-plox.user.js#L8943) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L8969) | [8969](../youtube-playback-plox.user.js#L8969) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L8985) | [8985](../youtube-playback-plox.user.js#L8985) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L9048) | [9048](../youtube-playback-plox.user.js#L9048) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L9066) | [9066](../youtube-playback-plox.user.js#L9066) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L9074) | [9074](../youtube-playback-plox.user.js#L9074) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L9099) | [9099](../youtube-playback-plox.user.js#L9099) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L9115)
> [Line 9115](../youtube-playback-plox.user.js#L9115)

_No relevant functions or constants detected._

## [📢 Ad Detector](../youtube-playback-plox.user.js#L9135)
> [Line 9135](../youtube-playback-plox.user.js#L9135)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L9137) | [9137](../youtube-playback-plox.user.js#L9137) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L9188) | [9188](../youtube-playback-plox.user.js#L9188) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L9313)
> [Line 9313](../youtube-playback-plox.user.js#L9313)

| Type | Name | Line |
|---|---|---|
| `class` | [`VirtualScroller`](../youtube-playback-plox.user.js#L9330) | [9330](../youtube-playback-plox.user.js#L9330) |

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L9802)
> [Line 9802](../youtube-playback-plox.user.js#L9802)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L9811) | [9811](../youtube-playback-plox.user.js#L9811) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L9842) | [9842](../youtube-playback-plox.user.js#L9842) |
| `fn` | [`exportStorageDamageReport`](../youtube-playback-plox.user.js#L9895) | [9895](../youtube-playback-plox.user.js#L9895) |
| `fn` | [`runStorageRepairFlow`](../youtube-playback-plox.user.js#L9934) | [9934](../youtube-playback-plox.user.js#L9934) |
| `fn` | [`renderStorageDamageNotice`](../youtube-playback-plox.user.js#L10001) | [10001](../youtube-playback-plox.user.js#L10001) |
| `fn` | [`copyExportDataToClipboard`](../youtube-playback-plox.user.js#L10062) | [10062](../youtube-playback-plox.user.js#L10062) |
| `fn` | [`mergeImportedVideoData`](../youtube-playback-plox.user.js#L10117) | [10117](../youtube-playback-plox.user.js#L10117) |
| `fn` | [`detectImportFormat`](../youtube-playback-plox.user.js#L10178) | [10178](../youtube-playback-plox.user.js#L10178) |
| `fn` | [`hasImportableRecords`](../youtube-playback-plox.user.js#L10192) | [10192](../youtube-playback-plox.user.js#L10192) |
| `fn` | [`looksLikeFreeTubeExport`](../youtube-playback-plox.user.js#L10209) | [10209](../youtube-playback-plox.user.js#L10209) |
| `fn` | [`parseImportPayload`](../youtube-playback-plox.user.js#L10222) | [10222](../youtube-playback-plox.user.js#L10222) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L10261) | [10261](../youtube-playback-plox.user.js#L10261) |
| `fn` | [`importCommitGuard`](../youtube-playback-plox.user.js#L10263) | [10263](../youtube-playback-plox.user.js#L10263) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L10388)
> [Line 10388](../youtube-playback-plox.user.js#L10388)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getGitHubErrorMsg`](../youtube-playback-plox.user.js#L10391) | [10391](../youtube-playback-plox.user.js#L10391) |
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L10403) | [10403](../youtube-playback-plox.user.js#L10403) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L10433) | [10433](../youtube-playback-plox.user.js#L10433) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L10434) | [10434](../youtube-playback-plox.user.js#L10434) |
| `fn` | [`sendGistRequest`](../youtube-playback-plox.user.js#L10456) | [10456](../youtube-playback-plox.user.js#L10456) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L10552) | [10552](../youtube-playback-plox.user.js#L10552) |
| `fn` | [`finish`](../youtube-playback-plox.user.js#L10562) | [10562](../youtube-playback-plox.user.js#L10562) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L10576) | [10576](../youtube-playback-plox.user.js#L10576) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L10762) | [10762](../youtube-playback-plox.user.js#L10762) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L10783) | [10783](../youtube-playback-plox.user.js#L10783) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L10862) | [10862](../youtube-playback-plox.user.js#L10862) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L10892) | [10892](../youtube-playback-plox.user.js#L10892) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L10925)
> [Line 10925](../youtube-playback-plox.user.js#L10925)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L10926) | [10926](../youtube-playback-plox.user.js#L10926) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L10965) | [10965](../youtube-playback-plox.user.js#L10965) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L11107)
> [Line 11107](../youtube-playback-plox.user.js#L11107)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeCompletionHistory`](../youtube-playback-plox.user.js#L11115) | [11115](../youtube-playback-plox.user.js#L11115) |
| `fn` | [`normalizeVideoData`](../youtube-playback-plox.user.js#L11143) | [11143](../youtube-playback-plox.user.js#L11143) |
| `fn` | [`safeText`](../youtube-playback-plox.user.js#L11146) | [11146](../youtube-playback-plox.user.js#L11146) |
| `fn` | [`safeNumber`](../youtube-playback-plox.user.js#L11151) | [11151](../youtube-playback-plox.user.js#L11151) |
| `fn` | [`safeNullableText`](../youtube-playback-plox.user.js#L11155) | [11155](../youtube-playback-plox.user.js#L11155) |

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L11205)
> [Line 11205](../youtube-playback-plox.user.js#L11205)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toFreeTubeFormat`](../youtube-playback-plox.user.js#L11211) | [11211](../youtube-playback-plox.user.js#L11211) |

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L11296)
> [Line 11296](../youtube-playback-plox.user.js#L11296)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseFreeTubeDB`](../youtube-playback-plox.user.js#L11302) | [11302](../youtube-playback-plox.user.js#L11302) |

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L11389)
> [Line 11389](../youtube-playback-plox.user.js#L11389)

| Type | Name | Line |
|---|---|---|
| `fn` | [`fromFreeTubeFormat`](../youtube-playback-plox.user.js#L11395) | [11395](../youtube-playback-plox.user.js#L11395) |
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L11404) | [11404](../youtube-playback-plox.user.js#L11404) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L11419)
> [Line 11419](../youtube-playback-plox.user.js#L11419)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTubeFormat`](../youtube-playback-plox.user.js#L11424) | [11424](../youtube-playback-plox.user.js#L11424) |

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L11463)
> [Line 11463](../youtube-playback-plox.user.js#L11463)

| Type | Name | Line |
|---|---|---|
| `fn` | [`importFromFreeTubeFormat`](../youtube-playback-plox.user.js#L11469) | [11469](../youtube-playback-plox.user.js#L11469) |
| `fn` | [`importCommitGuard`](../youtube-playback-plox.user.js#L11471) | [11471](../youtube-playback-plox.user.js#L11471) |

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L11561)
> [Line 11561](../youtube-playback-plox.user.js#L11561)

| Type | Name | Line |
|---|---|---|
| `fn` | [`insertCompletionEvent`](../youtube-playback-plox.user.js#L11569) | [11569](../youtube-playback-plox.user.js#L11569) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L11597) | [11597](../youtube-playback-plox.user.js#L11597) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L11608)
> [Line 11608](../youtube-playback-plox.user.js#L11608)

| Type | Name | Line |
|---|---|---|
| `fn` | [`internalSaveVideoGeneric`](../youtube-playback-plox.user.js#L11613) | [11613](../youtube-playback-plox.user.js#L11613) |
| `fn` | [`isExpectedSessionCurrent`](../youtube-playback-plox.user.js#L11623) | [11623](../youtube-playback-plox.user.js#L11623) |
| `fn` | [`isDestructiveEpochCurrent`](../youtube-playback-plox.user.js#L11629) | [11629](../youtube-playback-plox.user.js#L11629) |
| `fn` | [`commitGuard`](../youtube-playback-plox.user.js#L11632) | [11632](../youtube-playback-plox.user.js#L11632) |
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L11703) | [11703](../youtube-playback-plox.user.js#L11703) |

## [📺 Helpers](../youtube-playback-plox.user.js#L11850)
> [Line 11850](../youtube-playback-plox.user.js#L11850)

_No relevant functions or constants detected._

## [📺 Gets saved video data](../youtube-playback-plox.user.js#L11853)
> [Line 11853](../youtube-playback-plox.user.js#L11853)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSavedVideoData`](../youtube-playback-plox.user.js#L11862) | [11862](../youtube-playback-plox.user.js#L11862) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L11910)
> [Line 11910](../youtube-playback-plox.user.js#L11910)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L11946) | [11946](../youtube-playback-plox.user.js#L11946) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L11989)
> [Line 11989](../youtube-playback-plox.user.js#L11989)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTypeFromPageManager`](../youtube-playback-plox.user.js#L12012) | [12012](../youtube-playback-plox.user.js#L12012) |
| `fn` | [`getTypeFromYtApp`](../youtube-playback-plox.user.js#L12052) | [12052](../youtube-playback-plox.user.js#L12052) |
| `fn` | [`detectFromURL`](../youtube-playback-plox.user.js#L12078) | [12078](../youtube-playback-plox.user.js#L12078) |
| `fn` | [`cachePageType`](../youtube-playback-plox.user.js#L12150) | [12150](../youtube-playback-plox.user.js#L12150) |
| `fn` | [`getYouTubePageType`](../youtube-playback-plox.user.js#L12169) | [12169](../youtube-playback-plox.user.js#L12169) |

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L12194)
> [Line 12194](../youtube-playback-plox.user.js#L12194)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseYouTubeResource`](../youtube-playback-plox.user.js#L12254) | [12254](../youtube-playback-plox.user.js#L12254) |
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L12291) | [12291](../youtube-playback-plox.user.js#L12291) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L12400)
> [Line 12400](../youtube-playback-plox.user.js#L12400)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubeVideoIdFromUrl`](../youtube-playback-plox.user.js#L12410) | [12410](../youtube-playback-plox.user.js#L12410) |

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L12422)
> [Line 12422](../youtube-playback-plox.user.js#L12422)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getYouTubeVideoContextFromUrl`](../youtube-playback-plox.user.js#L12434) | [12434](../youtube-playback-plox.user.js#L12434) |

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L12450)
> [Line 12450](../youtube-playback-plox.user.js#L12450)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubePlaylistIdFromUrl`](../youtube-playback-plox.user.js#L12458) | [12458](../youtube-playback-plox.user.js#L12458) |
| `fn` | [`classifyPlaylist`](../youtube-playback-plox.user.js#L12482) | [12482](../youtube-playback-plox.user.js#L12482) |

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L12495)
> [Line 12495](../youtube-playback-plox.user.js#L12495)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L12516) | [12516](../youtube-playback-plox.user.js#L12516) |
| `fn` | [`extractYtInitialData`](../youtube-playback-plox.user.js#L12536) | [12536](../youtube-playback-plox.user.js#L12536) |
| `fn` | [`getPlaylistName`](../youtube-playback-plox.user.js#L12642) | [12642](../youtube-playback-plox.user.js#L12642) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L12658) | [12658](../youtube-playback-plox.user.js#L12658) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L12751) | [12751](../youtube-playback-plox.user.js#L12751) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L12778)
> [Line 12778](../youtube-playback-plox.user.js#L12778)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L12804) | [12804](../youtube-playback-plox.user.js#L12804) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L12814)
> [Line 12814](../youtube-playback-plox.user.js#L12814)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTimeDisplayMessage`](../youtube-playback-plox.user.js#L12822) | [12822](../youtube-playback-plox.user.js#L12822) |
| `fn` | [`hasTimeDisplayMessage`](../youtube-playback-plox.user.js#L12831) | [12831](../youtube-playback-plox.user.js#L12831) |
| `fn` | [`showDisplayMessage`](../youtube-playback-plox.user.js#L12841) | [12841](../youtube-playback-plox.user.js#L12841) |
| `fn` | [`restoreDisplayButtons`](../youtube-playback-plox.user.js#L12859) | [12859](../youtube-playback-plox.user.js#L12859) |
| `fn` | [`createSplitButtonGroup`](../youtube-playback-plox.user.js#L12890) | [12890](../youtube-playback-plox.user.js#L12890) |
| `fn` | [`getDisplayContextVideo`](../youtube-playback-plox.user.js#L12915) | [12915](../youtube-playback-plox.user.js#L12915) |
| `fn` | [`getDisplayContextPlayer`](../youtube-playback-plox.user.js#L12930) | [12930](../youtube-playback-plox.user.js#L12930) |
| `fn` | [`getPlaybackNotificationKind`](../youtube-playback-plox.user.js#L12945) | [12945](../youtube-playback-plox.user.js#L12945) |
| `fn` | [`buildPlaybackNotificationMessage`](../youtube-playback-plox.user.js#L12962) | [12962](../youtube-playback-plox.user.js#L12962) |
| `fn` | [`setupManualSaveButton`](../youtube-playback-plox.user.js#L13001) | [13001](../youtube-playback-plox.user.js#L13001) |
| `fn` | [`getActiveShortsControlsContainer`](../youtube-playback-plox.user.js#L13061) | [13061](../youtube-playback-plox.user.js#L13061) |
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L13106) | [13106](../youtube-playback-plox.user.js#L13106) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L13106) | [13106](../youtube-playback-plox.user.js#L13106) |
| `fn` | [`getDisplayDisposables`](../youtube-playback-plox.user.js#L13128) | [13128](../youtube-playback-plox.user.js#L13128) |
| `fn` | [`disposeDisplayNode`](../youtube-playback-plox.user.js#L13141) | [13141](../youtube-playback-plox.user.js#L13141) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L13148) | [13148](../youtube-playback-plox.user.js#L13148) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L13158) | [13158](../youtube-playback-plox.user.js#L13158) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L13166) | [13166](../youtube-playback-plox.user.js#L13166) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L13174) | [13174](../youtube-playback-plox.user.js#L13174) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L13197) | [13197](../youtube-playback-plox.user.js#L13197) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L13209) | [13209](../youtube-playback-plox.user.js#L13209) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L13212) | [13212](../youtube-playback-plox.user.js#L13212) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L13222) | [13222](../youtube-playback-plox.user.js#L13222) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L13227) | [13227](../youtube-playback-plox.user.js#L13227) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L13250) | [13250](../youtube-playback-plox.user.js#L13250) |
| `fn` | [`scheduleShortsFrame`](../youtube-playback-plox.user.js#L13274) | [13274](../youtube-playback-plox.user.js#L13274) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L13283) | [13283](../youtube-playback-plox.user.js#L13283) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L13292) | [13292](../youtube-playback-plox.user.js#L13292) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L13342) | [13342](../youtube-playback-plox.user.js#L13342) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L13405) | [13405](../youtube-playback-plox.user.js#L13405) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L13461) | [13461](../youtube-playback-plox.user.js#L13461) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L13532) | [13532](../youtube-playback-plox.user.js#L13532) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L13558) | [13558](../youtube-playback-plox.user.js#L13558) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L13572) | [13572](../youtube-playback-plox.user.js#L13572) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L13576) | [13576](../youtube-playback-plox.user.js#L13576) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L13583) | [13583](../youtube-playback-plox.user.js#L13583) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L13601) | [13601](../youtube-playback-plox.user.js#L13601) |
| `fn` | [`startShortsPanelObserver`](../youtube-playback-plox.user.js#L13615) | [13615](../youtube-playback-plox.user.js#L13615) |
| `fn` | [`stopShortsPanelObserver`](../youtube-playback-plox.user.js#L13663) | [13663](../youtube-playback-plox.user.js#L13663) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L13690)
> [Line 13690](../youtube-playback-plox.user.js#L13690)

| Type | Name | Line |
|---|---|---|
| `fn` | [`disposeToastRuntime`](../youtube-playback-plox.user.js#L13702) | [13702](../youtube-playback-plox.user.js#L13702) |
| `fn` | [`registerToastRuntime`](../youtube-playback-plox.user.js#L13730) | [13730](../youtube-playback-plox.user.js#L13730) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L13731) | [13731](../youtube-playback-plox.user.js#L13731) |
| `fn` | [`createToastContainer`](../youtube-playback-plox.user.js#L13747) | [13747](../youtube-playback-plox.user.js#L13747) |
| `fn` | [`fadeAndRemoveToast`](../youtube-playback-plox.user.js#L13780) | [13780](../youtube-playback-plox.user.js#L13780) |
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L13801) | [13801](../youtube-playback-plox.user.js#L13801) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L13825) | [13825](../youtube-playback-plox.user.js#L13825) |
| `fn` | [`showFloatingToast`](../youtube-playback-plox.user.js#L13849) | [13849](../youtube-playback-plox.user.js#L13849) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L14005)
> [Line 14005](../youtube-playback-plox.user.js#L14005)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L14008) | [14008](../youtube-playback-plox.user.js#L14008) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L14052)
> [Line 14052](../youtube-playback-plox.user.js#L14052)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L14092) | [14092](../youtube-playback-plox.user.js#L14092) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L14098) | [14098](../youtube-playback-plox.user.js#L14098) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L14106) | [14106](../youtube-playback-plox.user.js#L14106) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L14152) | [14152](../youtube-playback-plox.user.js#L14152) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L14156) | [14156](../youtube-playback-plox.user.js#L14156) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L14159) | [14159](../youtube-playback-plox.user.js#L14159) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L14175) | [14175](../youtube-playback-plox.user.js#L14175) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L14184) | [14184](../youtube-playback-plox.user.js#L14184) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L14214) | [14214](../youtube-playback-plox.user.js#L14214) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L14228) | [14228](../youtube-playback-plox.user.js#L14228) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L14232) | [14232](../youtube-playback-plox.user.js#L14232) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L14370)
> [Line 14370](../youtube-playback-plox.user.js#L14370)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSettingsUI`](../youtube-playback-plox.user.js#L14373) | [14373](../youtube-playback-plox.user.js#L14373) |
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L14404) | [14404](../youtube-playback-plox.user.js#L14404) |
| `fn` | [`onSettingsKeyDown`](../youtube-playback-plox.user.js#L14426) | [14426](../youtube-playback-plox.user.js#L14426) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L14521) | [14521](../youtube-playback-plox.user.js#L14521) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L14608) | [14608](../youtube-playback-plox.user.js#L14608) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L14609) | [14609](../youtube-playback-plox.user.js#L14609) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L14698) | [14698](../youtube-playback-plox.user.js#L14698) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L14699) | [14699](../youtube-playback-plox.user.js#L14699) |
| `fn` | [`getInnerTubeClientVersion`](../youtube-playback-plox.user.js#L14731) | [14731](../youtube-playback-plox.user.js#L14731) |
| `fn` | [`idbDiag`](../youtube-playback-plox.user.js#L14760) | [14760](../youtube-playback-plox.user.js#L14760) |
| `fn` | [`safeModeActive`](../youtube-playback-plox.user.js#L14778) | [14778](../youtube-playback-plox.user.js#L14778) |
| `fn` | [`activeSessions`](../youtube-playback-plox.user.js#L14779) | [14779](../youtube-playback-plox.user.js#L14779) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L14893)
> [Line 14893](../youtube-playback-plox.user.js#L14893)

| Type | Name | Line |
|---|---|---|
| `fn` | [`notifySeekOrProgress`](../youtube-playback-plox.user.js#L14895) | [14895](../youtube-playback-plox.user.js#L14895) |

## [🎵 Video Selection](../youtube-playback-plox.user.js#L14951)
> [Line 14951](../youtube-playback-plox.user.js#L14951)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleManagementMode`](../youtube-playback-plox.user.js#L14966) | [14966](../youtube-playback-plox.user.js#L14966) |
| `fn` | [`updateFooterButtons`](../youtube-playback-plox.user.js#L14979) | [14979](../youtube-playback-plox.user.js#L14979) |
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L15056) | [15056](../youtube-playback-plox.user.js#L15056) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L15063) | [15063](../youtube-playback-plox.user.js#L15063) |
| `fn` | [`createFooterActionMenu`](../youtube-playback-plox.user.js#L15123) | [15123](../youtube-playback-plox.user.js#L15123) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L15153) | [15153](../youtube-playback-plox.user.js#L15153) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L15157) | [15157](../youtube-playback-plox.user.js#L15157) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L15166) | [15166](../youtube-playback-plox.user.js#L15166) |
| `fn` | [`closeImportMenu`](../youtube-playback-plox.user.js#L15262) | [15262](../youtube-playback-plox.user.js#L15262) |
| `fn` | [`onImportOutsideClick`](../youtube-playback-plox.user.js#L15271) | [15271](../youtube-playback-plox.user.js#L15271) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L15662) | [15662](../youtube-playback-plox.user.js#L15662) |
| `fn` | [`updateManagementFooterState`](../youtube-playback-plox.user.js#L15755) | [15755](../youtube-playback-plox.user.js#L15755) |
| `fn` | [`togglePlaylistCreationMode`](../youtube-playback-plox.user.js#L15785) | [15785](../youtube-playback-plox.user.js#L15785) |
| `fn` | [`copyToClipboard`](../youtube-playback-plox.user.js#L15802) | [15802](../youtube-playback-plox.user.js#L15802) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L15812) | [15812](../youtube-playback-plox.user.js#L15812) |
| `fn` | [`toggleVideoSelection`](../youtube-playback-plox.user.js#L15875) | [15875](../youtube-playback-plox.user.js#L15875) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L15907)
> [Line 15907](../youtube-playback-plox.user.js#L15907)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L15913) | [15913](../youtube-playback-plox.user.js#L15913) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L15913) | [15913](../youtube-playback-plox.user.js#L15913) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L15914) | [15914](../youtube-playback-plox.user.js#L15914) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L15923) | [15923](../youtube-playback-plox.user.js#L15923) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L15928) | [15928](../youtube-playback-plox.user.js#L15928) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L15939) | [15939](../youtube-playback-plox.user.js#L15939) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L15956) | [15956](../youtube-playback-plox.user.js#L15956) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L15990) | [15990](../youtube-playback-plox.user.js#L15990) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L16015) | [16015](../youtube-playback-plox.user.js#L16015) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L16017) | [16017](../youtube-playback-plox.user.js#L16017) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L16036) | [16036](../youtube-playback-plox.user.js#L16036) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L16036) | [16036](../youtube-playback-plox.user.js#L16036) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L16038) | [16038](../youtube-playback-plox.user.js#L16038) |
| `fn` | [`shouldDropVideoEvent`](../youtube-playback-plox.user.js#L16050) | [16050](../youtube-playback-plox.user.js#L16050) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L16059) | [16059](../youtube-playback-plox.user.js#L16059) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L16059) | [16059](../youtube-playback-plox.user.js#L16059) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L16070) | [16070](../youtube-playback-plox.user.js#L16070) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L16075) | [16075](../youtube-playback-plox.user.js#L16075) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L16080) | [16080](../youtube-playback-plox.user.js#L16080) |
| `fn` | [`note`](../youtube-playback-plox.user.js#L16100) | [16100](../youtube-playback-plox.user.js#L16100) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L16104) | [16104](../youtube-playback-plox.user.js#L16104) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L16122) | [16122](../youtube-playback-plox.user.js#L16122) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L16122) | [16122](../youtube-playback-plox.user.js#L16122) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L16124) | [16124](../youtube-playback-plox.user.js#L16124) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L16132) | [16132](../youtube-playback-plox.user.js#L16132) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L16182)
> [Line 16182](../youtube-playback-plox.user.js#L16182)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L16187) | [16187](../youtube-playback-plox.user.js#L16187) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L16187) | [16187](../youtube-playback-plox.user.js#L16187) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L16209) | [16209](../youtube-playback-plox.user.js#L16209) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L16229) | [16229](../youtube-playback-plox.user.js#L16229) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L16255) | [16255](../youtube-playback-plox.user.js#L16255) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L16302) | [16302](../youtube-playback-plox.user.js#L16302) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L16337) | [16337](../youtube-playback-plox.user.js#L16337) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L16338) | [16338](../youtube-playback-plox.user.js#L16338) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L16369) | [16369](../youtube-playback-plox.user.js#L16369) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L16425) | [16425](../youtube-playback-plox.user.js#L16425) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L16493) | [16493](../youtube-playback-plox.user.js#L16493) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L16503) | [16503](../youtube-playback-plox.user.js#L16503) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L16514) | [16514](../youtube-playback-plox.user.js#L16514) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L16546) | [16546](../youtube-playback-plox.user.js#L16546) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L16586) | [16586](../youtube-playback-plox.user.js#L16586) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L16597) | [16597](../youtube-playback-plox.user.js#L16597) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L16621) | [16621](../youtube-playback-plox.user.js#L16621) |
| `fn` | [`clearPlayerCache`](../youtube-playback-plox.user.js#L16747) | [16747](../youtube-playback-plox.user.js#L16747) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L16969) | [16969](../youtube-playback-plox.user.js#L16969) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L17018) | [17018](../youtube-playback-plox.user.js#L17018) |

## [Processing Functions](../youtube-playback-plox.user.js#L17048)
> [Line 17048](../youtube-playback-plox.user.js#L17048)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L17074) | [17074](../youtube-playback-plox.user.js#L17074) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L17101) | [17101](../youtube-playback-plox.user.js#L17101) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L17111) | [17111](../youtube-playback-plox.user.js#L17111) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L17111) | [17111](../youtube-playback-plox.user.js#L17111) |
| `fn` | [`clearPendingRecovery`](../youtube-playback-plox.user.js#L17131) | [17131](../youtube-playback-plox.user.js#L17131) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L17136) | [17136](../youtube-playback-plox.user.js#L17136) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L17141) | [17141](../youtube-playback-plox.user.js#L17141) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L17148) | [17148](../youtube-playback-plox.user.js#L17148) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L17154) | [17154](../youtube-playback-plox.user.js#L17154) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L17172) | [17172](../youtube-playback-plox.user.js#L17172) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L17257) | [17257](../youtube-playback-plox.user.js#L17257) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L17321) | [17321](../youtube-playback-plox.user.js#L17321) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L17356) | [17356](../youtube-playback-plox.user.js#L17356) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L17386) | [17386](../youtube-playback-plox.user.js#L17386) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L17397) | [17397](../youtube-playback-plox.user.js#L17397) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L17409) | [17409](../youtube-playback-plox.user.js#L17409) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L17445) | [17445](../youtube-playback-plox.user.js#L17445) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L17524) | [17524](../youtube-playback-plox.user.js#L17524) |
| `fn` | [`handleSeekingForGradient`](../youtube-playback-plox.user.js#L17553) | [17553](../youtube-playback-plox.user.js#L17553) |
| `fn` | [`handleSeekedForGradient`](../youtube-playback-plox.user.js#L17563) | [17563](../youtube-playback-plox.user.js#L17563) |
| `fn` | [`canValidateStandalone`](../youtube-playback-plox.user.js#L17686) | [17686](../youtube-playback-plox.user.js#L17686) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L17711) | [17711](../youtube-playback-plox.user.js#L17711) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L17780) | [17780](../youtube-playback-plox.user.js#L17780) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L17983) | [17983](../youtube-playback-plox.user.js#L17983) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L18096) | [18096](../youtube-playback-plox.user.js#L18096) |
| `fn` | [`processMediaVideo`](../youtube-playback-plox.user.js#L18211) | [18211](../youtube-playback-plox.user.js#L18211) |

## [PlaybackController](../youtube-playback-plox.user.js#L18262)
> [Line 18262](../youtube-playback-plox.user.js#L18262)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L18310) | [18310](../youtube-playback-plox.user.js#L18310) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L18326) | [18326](../youtube-playback-plox.user.js#L18326) |
| `fn` | [`removeMetadataListener`](../youtube-playback-plox.user.js#L18350) | [18350](../youtube-playback-plox.user.js#L18350) |
| `fn` | [`removeCanPlayListener`](../youtube-playback-plox.user.js#L18351) | [18351](../youtube-playback-plox.user.js#L18351) |
| `fn` | [`removeAbortListener`](../youtube-playback-plox.user.js#L18352) | [18352](../youtube-playback-plox.user.js#L18352) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L18353) | [18353](../youtube-playback-plox.user.js#L18353) |
| `fn` | [`rejectAsStale`](../youtube-playback-plox.user.js#L18359) | [18359](../youtube-playback-plox.user.js#L18359) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L18363) | [18363](../youtube-playback-plox.user.js#L18363) |
| `fn` | [`onAbort`](../youtube-playback-plox.user.js#L18372) | [18372](../youtube-playback-plox.user.js#L18372) |
| `fn` | [`restoreThrottleMarker`](../youtube-playback-plox.user.js#L18525) | [18525](../youtube-playback-plox.user.js#L18525) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L18617) | [18617](../youtube-playback-plox.user.js#L18617) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L18763)
> [Line 18763](../youtube-playback-plox.user.js#L18763)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getInnerTubeConfig`](../youtube-playback-plox.user.js#L18800) | [18800](../youtube-playback-plox.user.js#L18800) |
| `fn` | [`fetchInnerTubeJson`](../youtube-playback-plox.user.js#L18815) | [18815](../youtube-playback-plox.user.js#L18815) |
| `fn` | [`fetchShortsViews`](../youtube-playback-plox.user.js#L18849) | [18849](../youtube-playback-plox.user.js#L18849) |
| `fn` | [`fetchPlaylistTitle`](../youtube-playback-plox.user.js#L18862) | [18862](../youtube-playback-plox.user.js#L18862) |
| `fn` | [`getCascadedVideoInfo`](../youtube-playback-plox.user.js#L18872) | [18872](../youtube-playback-plox.user.js#L18872) |
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L18917) | [18917](../youtube-playback-plox.user.js#L18917) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L19320)
> [Line 19320](../youtube-playback-plox.user.js#L19320)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createCustomDropdown`](../youtube-playback-plox.user.js#L19338) | [19338](../youtube-playback-plox.user.js#L19338) |
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L19349) | [19349](../youtube-playback-plox.user.js#L19349) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L19425) | [19425](../youtube-playback-plox.user.js#L19425) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L19441) | [19441](../youtube-playback-plox.user.js#L19441) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L19449) | [19449](../youtube-playback-plox.user.js#L19449) |
| `fn` | [`createSortSelector`](../youtube-playback-plox.user.js#L19466) | [19466](../youtube-playback-plox.user.js#L19466) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L19469) | [19469](../youtube-playback-plox.user.js#L19469) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L19522)
> [Line 19522](../youtube-playback-plox.user.js#L19522)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFilterSelector`](../youtube-playback-plox.user.js#L19531) | [19531](../youtube-playback-plox.user.js#L19531) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L19534) | [19534](../youtube-playback-plox.user.js#L19534) |
| `fn` | [`createRangeFilter`](../youtube-playback-plox.user.js#L19579) | [19579](../youtube-playback-plox.user.js#L19579) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L19582) | [19582](../youtube-playback-plox.user.js#L19582) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L19588) | [19588](../youtube-playback-plox.user.js#L19588) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L19596) | [19596](../youtube-playback-plox.user.js#L19596) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L19611) | [19611](../youtube-playback-plox.user.js#L19611) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L19732) | [19732](../youtube-playback-plox.user.js#L19732) |
| `fn` | [`createSearchInput`](../youtube-playback-plox.user.js#L19787) | [19787](../youtube-playback-plox.user.js#L19787) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L19812)
> [Line 19812](../youtube-playback-plox.user.js#L19812)

| Type | Name | Line |
|---|---|---|
| `fn` | [`acquireBodyOverflow`](../youtube-playback-plox.user.js#L19840) | [19840](../youtube-playback-plox.user.js#L19840) |
| `fn` | [`releaseBodyOverflow`](../youtube-playback-plox.user.js#L19854) | [19854](../youtube-playback-plox.user.js#L19854) |
| `fn` | [`getVirtualScrollerVideoItems`](../youtube-playback-plox.user.js#L19920) | [19920](../youtube-playback-plox.user.js#L19920) |
| `fn` | [`batchLoadStorageData`](../youtube-playback-plox.user.js#L19949) | [19949](../youtube-playback-plox.user.js#L19949) |

## [📁 Update Video List](../youtube-playback-plox.user.js#L19990)
> [Line 19990](../youtube-playback-plox.user.js#L19990)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSortValue`](../youtube-playback-plox.user.js#L19997) | [19997](../youtube-playback-plox.user.js#L19997) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L20009) | [20009](../youtube-playback-plox.user.js#L20009) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L20013) | [20013](../youtube-playback-plox.user.js#L20013) |
| `fn` | [`showLoadingState`](../youtube-playback-plox.user.js#L20030) | [20030](../youtube-playback-plox.user.js#L20030) |
| `fn` | [`loadVideoItems`](../youtube-playback-plox.user.js#L20093) | [20093](../youtube-playback-plox.user.js#L20093) |
| `fn` | [`resolvePlaylistTitles`](../youtube-playback-plox.user.js#L20117) | [20117](../youtube-playback-plox.user.js#L20117) |
| `fn` | [`filterItems`](../youtube-playback-plox.user.js#L20149) | [20149](../youtube-playback-plox.user.js#L20149) |
| `fn` | [`buildVirtualItems`](../youtube-playback-plox.user.js#L20193) | [20193](../youtube-playback-plox.user.js#L20193) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L20206) | [20206](../youtube-playback-plox.user.js#L20206) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L20227) | [20227](../youtube-playback-plox.user.js#L20227) |
| `fn` | [`showEmptyState`](../youtube-playback-plox.user.js#L20257) | [20257](../youtube-playback-plox.user.js#L20257) |
| `fn` | [`showListLoadErrorState`](../youtube-playback-plox.user.js#L20290) | [20290](../youtube-playback-plox.user.js#L20290) |
| `fn` | [`updateVirtualScroller`](../youtube-playback-plox.user.js#L20317) | [20317](../youtube-playback-plox.user.js#L20317) |
| `fn` | [`initVirtualScroller`](../youtube-playback-plox.user.js#L20347) | [20347](../youtube-playback-plox.user.js#L20347) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L20393) | [20393](../youtube-playback-plox.user.js#L20393) |
| `fn` | [`disconnectVirtualScrollerObserver`](../youtube-playback-plox.user.js#L20453) | [20453](../youtube-playback-plox.user.js#L20453) |
| `fn` | [`connectResizeObserver`](../youtube-playback-plox.user.js#L20468) | [20468](../youtube-playback-plox.user.js#L20468) |
| `fn` | [`updateVideoList`](../youtube-playback-plox.user.js#L20503) | [20503](../youtube-playback-plox.user.js#L20503) |
| `fn` | [`isCurrentRender`](../youtube-playback-plox.user.js#L20508) | [20508](../youtube-playback-plox.user.js#L20508) |
| `fn` | [`requestVideoListUpdate`](../youtube-playback-plox.user.js#L20582) | [20582](../youtube-playback-plox.user.js#L20582) |
| `fn` | [`closeModalVideos`](../youtube-playback-plox.user.js#L20593) | [20593](../youtube-playback-plox.user.js#L20593) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L20679) | [20679](../youtube-playback-plox.user.js#L20679) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L20696) | [20696](../youtube-playback-plox.user.js#L20696) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L20724) | [20724](../youtube-playback-plox.user.js#L20724) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L20856)
> [Line 20856](../youtube-playback-plox.user.js#L20856)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L20859) | [20859](../youtube-playback-plox.user.js#L20859) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L20874) | [20874](../youtube-playback-plox.user.js#L20874) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L20885)
> [Line 20885](../youtube-playback-plox.user.js#L20885)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSavedVideosList`](../youtube-playback-plox.user.js#L20888) | [20888](../youtube-playback-plox.user.js#L20888) |
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L21026) | [21026](../youtube-playback-plox.user.js#L21026) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L21036) | [21036](../youtube-playback-plox.user.js#L21036) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L21106) | [21106](../youtube-playback-plox.user.js#L21106) |
| `fn` | [`onSavedVideosKeyDown`](../youtube-playback-plox.user.js#L21115) | [21115](../youtube-playback-plox.user.js#L21115) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L21158)
> [Line 21158](../youtube-playback-plox.user.js#L21158)

| Type | Name | Line |
|---|---|---|
| `fn` | [`generatePlaylistColor`](../youtube-playback-plox.user.js#L21167) | [21167](../youtube-playback-plox.user.js#L21167) |
| `fn` | [`generatePlaylistBorderColor`](../youtube-playback-plox.user.js#L21196) | [21196](../youtube-playback-plox.user.js#L21196) |
| `fn` | [`handleForceTimeAction`](../youtube-playback-plox.user.js#L21218) | [21218](../youtube-playback-plox.user.js#L21218) |
| `fn` | [`handleUnlinkPlaylistAction`](../youtube-playback-plox.user.js#L21284) | [21284](../youtube-playback-plox.user.js#L21284) |
| `fn` | [`handleDeleteEntryAction`](../youtube-playback-plox.user.js#L21306) | [21306](../youtube-playback-plox.user.js#L21306) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L21339) | [21339](../youtube-playback-plox.user.js#L21339) |
| `fn` | [`handleToggleProtectionAction`](../youtube-playback-plox.user.js#L21368) | [21368](../youtube-playback-plox.user.js#L21368) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L21409) | [21409](../youtube-playback-plox.user.js#L21409) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L21457) | [21457](../youtube-playback-plox.user.js#L21457) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L21463) | [21463](../youtube-playback-plox.user.js#L21463) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L21482) | [21482](../youtube-playback-plox.user.js#L21482) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L21516) | [21516](../youtube-playback-plox.user.js#L21516) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L21568) | [21568](../youtube-playback-plox.user.js#L21568) |
| `fn` | [`generateVideoObsidianMarkdown`](../youtube-playback-plox.user.js#L21617) | [21617](../youtube-playback-plox.user.js#L21617) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L21650) | [21650](../youtube-playback-plox.user.js#L21650) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L21656) | [21656](../youtube-playback-plox.user.js#L21656) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L21672) | [21672](../youtube-playback-plox.user.js#L21672) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L21682) | [21682](../youtube-playback-plox.user.js#L21682) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L21690) | [21690](../youtube-playback-plox.user.js#L21690) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L21695) | [21695](../youtube-playback-plox.user.js#L21695) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L21702) | [21702](../youtube-playback-plox.user.js#L21702) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L21705) | [21705](../youtube-playback-plox.user.js#L21705) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L21709) | [21709](../youtube-playback-plox.user.js#L21709) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L21755) | [21755](../youtube-playback-plox.user.js#L21755) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L21755) | [21755](../youtube-playback-plox.user.js#L21755) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L21769) | [21769](../youtube-playback-plox.user.js#L21769) |
| `fn` | [`createModeSelector`](../youtube-playback-plox.user.js#L22043) | [22043](../youtube-playback-plox.user.js#L22043) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L22044) | [22044](../youtube-playback-plox.user.js#L22044) |
| `fn` | [`createViewModeSelector`](../youtube-playback-plox.user.js#L22076) | [22076](../youtube-playback-plox.user.js#L22076) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L22093) | [22093](../youtube-playback-plox.user.js#L22093) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L22094) | [22094](../youtube-playback-plox.user.js#L22094) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L22110) | [22110](../youtube-playback-plox.user.js#L22110) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L22111) | [22111](../youtube-playback-plox.user.js#L22111) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L22160) | [22160](../youtube-playback-plox.user.js#L22160) |
| `fn` | [`createOverflowToggle`](../youtube-playback-plox.user.js#L22191) | [22191](../youtube-playback-plox.user.js#L22191) |
| `fn` | [`makeToolbarGroup`](../youtube-playback-plox.user.js#L22230) | [22230](../youtube-playback-plox.user.js#L22230) |
| `fn` | [`makeDisplayToggle`](../youtube-playback-plox.user.js#L22252) | [22252](../youtube-playback-plox.user.js#L22252) |
| `fn` | [`mountSavedVideosModalActionsToolbar`](../youtube-playback-plox.user.js#L22286) | [22286](../youtube-playback-plox.user.js#L22286) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L22309) | [22309](../youtube-playback-plox.user.js#L22309) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L22323) | [22323](../youtube-playback-plox.user.js#L22323) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L22645) | [22645](../youtube-playback-plox.user.js#L22645) |
| `fn` | [`applyThumbnailToImage`](../youtube-playback-plox.user.js#L22701) | [22701](../youtube-playback-plox.user.js#L22701) |
| `fn` | [`removeLoadListener`](../youtube-playback-plox.user.js#L22710) | [22710](../youtube-playback-plox.user.js#L22710) |
| `fn` | [`removeErrorListener`](../youtube-playback-plox.user.js#L22711) | [22711](../youtube-playback-plox.user.js#L22711) |
| `fn` | [`finish`](../youtube-playback-plox.user.js#L22717) | [22717](../youtube-playback-plox.user.js#L22717) |
| `fn` | [`loadCandidate`](../youtube-playback-plox.user.js#L22732) | [22732](../youtube-playback-plox.user.js#L22732) |
| `fn` | [`createVideoGridRow`](../youtube-playback-plox.user.js#L22767) | [22767](../youtube-playback-plox.user.js#L22767) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L22784) | [22784](../youtube-playback-plox.user.js#L22784) |
| `fn` | [`scheduleHeightUpdate`](../youtube-playback-plox.user.js#L22833) | [22833](../youtube-playback-plox.user.js#L22833) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L22880) | [22880](../youtube-playback-plox.user.js#L22880) |
| `fn` | [`createVideoEntry`](../youtube-playback-plox.user.js#L22894) | [22894](../youtube-playback-plox.user.js#L22894) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L23128) | [23128](../youtube-playback-plox.user.js#L23128) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L23151) | [23151](../youtube-playback-plox.user.js#L23151) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L23152) | [23152](../youtube-playback-plox.user.js#L23152) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L23210)
> [Line 23210](../youtube-playback-plox.user.js#L23210)

| Type | Name | Line |
|---|---|---|
| `fn` | [`restoreDeletedRecordIfUnchanged`](../youtube-playback-plox.user.js#L23229) | [23229](../youtube-playback-plox.user.js#L23229) |
| `fn` | [`canCommit`](../youtube-playback-plox.user.js#L23230) | [23230](../youtube-playback-plox.user.js#L23230) |
| `fn` | [`clearAllData`](../youtube-playback-plox.user.js#L23259) | [23259](../youtube-playback-plox.user.js#L23259) |
| `fn` | [`clearCommitGuard`](../youtube-playback-plox.user.js#L23274) | [23274](../youtube-playback-plox.user.js#L23274) |
| `fn` | [`performClearAllData`](../youtube-playback-plox.user.js#L23294) | [23294](../youtube-playback-plox.user.js#L23294) |
| `fn` | [`undoClearAll`](../youtube-playback-plox.user.js#L23484) | [23484](../youtube-playback-plox.user.js#L23484) |
| `fn` | [`undoCommitGuard`](../youtube-playback-plox.user.js#L23487) | [23487](../youtube-playback-plox.user.js#L23487) |
| `fn` | [`performUndoClearAll`](../youtube-playback-plox.user.js#L23500) | [23500](../youtube-playback-plox.user.js#L23500) |

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L23568)
> [Line 23568](../youtube-playback-plox.user.js#L23568)

| Type | Name | Line |
|---|---|---|
| `fn` | [`registerOwnedMenuCommand`](../youtube-playback-plox.user.js#L23577) | [23577](../youtube-playback-plox.user.js#L23577) |
| `fn` | [`unregisterOwnedMenuCommands`](../youtube-playback-plox.user.js#L23587) | [23587](../youtube-playback-plox.user.js#L23587) |
| `fn` | [`registerMenuCommands`](../youtube-playback-plox.user.js#L23600) | [23600](../youtube-playback-plox.user.js#L23600) |

## [🔄 Data Migration](../youtube-playback-plox.user.js#L23626)
> [Line 23626](../youtube-playback-plox.user.js#L23626)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeVideoType`](../youtube-playback-plox.user.js#L23635) | [23635](../youtube-playback-plox.user.js#L23635) |
| `fn` | [`cleanupNonVideoData`](../youtube-playback-plox.user.js#L23657) | [23657](../youtube-playback-plox.user.js#L23657) |
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L23684) | [23684](../youtube-playback-plox.user.js#L23684) |
| `fn` | [`runAutoCleanup`](../youtube-playback-plox.user.js#L23905) | [23905](../youtube-playback-plox.user.js#L23905) |
| `fn` | [`cleanupCommitGuard`](../youtube-playback-plox.user.js#L23925) | [23925](../youtube-playback-plox.user.js#L23925) |

## [🚀 Init](../youtube-playback-plox.user.js#L24129)
> [Line 24129](../youtube-playback-plox.user.js#L24129)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L24142) | [24142](../youtube-playback-plox.user.js#L24142) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L24164) | [24164](../youtube-playback-plox.user.js#L24164) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L24523) | [24523](../youtube-playback-plox.user.js#L24523) |

