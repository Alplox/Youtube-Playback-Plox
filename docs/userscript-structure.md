# Userscript Structure
> Auto-generated on 2026-09-25 · version 0.0.13
> **DO NOT EDIT MANUALLY** - regenerate with `node ./scripts/generate-structure.mjs`

---

## Sections index

1. [🔍 Logger System](#logger-system) - [line 139](../youtube-playback-plox.user.js#L139)
2. [🛡️ Initialization Guard (SPA Safety)](#initialization-guard-spa-safety) - [line 223](../youtube-playback-plox.user.js#L223)
3. [📦 Config](#config) - [line 366](../youtube-playback-plox.user.js#L366)
4. [📊 Global Constants](#global-constants) - [line 495](../youtube-playback-plox.user.js#L495)
5. [📊 Global Variables](#global-variables) - [line 532](../youtube-playback-plox.user.js#L532)
6. [🌐 Translations](#translations) - [line 570](../youtube-playback-plox.user.js#L570)
7. [🔧 Utils](#utils) - [line 1012](../youtube-playback-plox.user.js#L1012)
8. [🔧 Sanitize HTML](#sanitize-html) - [line 1015](../youtube-playback-plox.user.js#L1015)
9. [🔧 Is Visibly Displayed](#is-visibly-displayed) - [line 1081](../youtube-playback-plox.user.js#L1081)
10. [🔧 Format Time](#format-time) - [line 1105](../youtube-playback-plox.user.js#L1105)
11. [🔧 parseTimeToSeconds](#parsetimetoseconds) - [line 1149](../youtube-playback-plox.user.js#L1149)
12. [🔧 normalizeSeconds](#normalizeseconds) - [line 1197](../youtube-playback-plox.user.js#L1197)
13. [🔧 getUrlTimeParamSeconds](#geturltimeparamseconds) - [line 1223](../youtube-playback-plox.user.js#L1223)
14. [⏳ delay](#delay) - [line 1252](../youtube-playback-plox.user.js#L1252)
15. [🔧 setInnerHTML](#setinnerhtml) - [line 1392](../youtube-playback-plox.user.js#L1392)
16. [🔧 Create Element](#create-element) - [line 1467](../youtube-playback-plox.user.js#L1467)
17. [🔧 Debounce](#debounce) - [line 1604](../youtube-playback-plox.user.js#L1604)
18. [🔧 downloadBlobMobileSafe](#downloadblobmobilesafe) - [line 1639](../youtube-playback-plox.user.js#L1639)
19. [🗄️ Event Handlers store](#event-handlers-store) - [line 1709](../youtube-playback-plox.user.js#L1709)
20. [📝 Selector System](#selector-system) - [line 1795](../youtube-playback-plox.user.js#L1795)
21. [💾 Simple LRU Cache](#simple-lru-cache) - [line 2081](../youtube-playback-plox.user.js#L2081)
22. [⚙️ DOM Cache System](#dom-cache-system) - [line 2162](../youtube-playback-plox.user.js#L2162)
23. [🌐 Translation Functions](#translation-functions) - [line 2528](../youtube-playback-plox.user.js#L2528)
24. [🎨 Styles](#styles) - [line 2693](../youtube-playback-plox.user.js#L2693)
25. [🎨 Theme](#theme) - [line 5281](../youtube-playback-plox.user.js#L5281)
26. [🎨 SVG Icons](#svg-icons) - [line 5359](../youtube-playback-plox.user.js#L5359)
27. [🎨 Progress Bar Style](#progress-bar-style) - [line 5521](../youtube-playback-plox.user.js#L5521)
28. [💾 Storage + Settings](#storage-settings) - [line 6038](../youtube-playback-plox.user.js#L6038)
29. [📢 Ad Caches](#ad-caches) - [line 8260](../youtube-playback-plox.user.js#L8260)
30. [📢 Ad Detector](#ad-detector) - [line 8280](../youtube-playback-plox.user.js#L8280)
31. [🎯 VirtualScroller](#virtualscroller) - [line 8458](../youtube-playback-plox.user.js#L8458)
32. [📤 Import/Export JSON](#importexport-json) - [line 8928](../youtube-playback-plox.user.js#L8928)
33. [☁️ GitHub Backup](#github-backup) - [line 9243](../youtube-playback-plox.user.js#L9243)
34. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 9755](../youtube-playback-plox.user.js#L9755)
35. [🔄 Normalize Video Data](#normalize-video-data) - [line 9937](../youtube-playback-plox.user.js#L9937)
36. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 10035](../youtube-playback-plox.user.js#L10035)
37. [Parse FreeTube DB](#parse-freetube-db) - [line 10126](../youtube-playback-plox.user.js#L10126)
38. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 10219](../youtube-playback-plox.user.js#L10219)
39. [⬆ Export To FreeTube](#export-to-freetube) - [line 10249](../youtube-playback-plox.user.js#L10249)
40. [⬇ Import From FreeTube](#import-from-freetube) - [line 10293](../youtube-playback-plox.user.js#L10293)
41. [🔄 Insert Completion Event](#insert-completion-event) - [line 10391](../youtube-playback-plox.user.js#L10391)
42. [💾 Save Video Generic](#save-video-generic) - [line 10438](../youtube-playback-plox.user.js#L10438)
43. [📺 Helpers](#helpers) - [line 10680](../youtube-playback-plox.user.js#L10680)
44. [📺 Gets saved video data](#gets-saved-video-data) - [line 10683](../youtube-playback-plox.user.js#L10683)
45. [📺 Get Player Video ID](#get-player-video-id) - [line 10740](../youtube-playback-plox.user.js#L10740)
46. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 10819](../youtube-playback-plox.user.js#L10819)
47. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 11024](../youtube-playback-plox.user.js#L11024)
48. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 11230](../youtube-playback-plox.user.js#L11230)
49. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 11252](../youtube-playback-plox.user.js#L11252)
50. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 11280](../youtube-playback-plox.user.js#L11280)
51. [📺 get Playlist Name](#get-playlist-name) - [line 11325](../youtube-playback-plox.user.js#L11325)
52. [🕒 Time Display](#time-display) - [line 11608](../youtube-playback-plox.user.js#L11608)
53. [🖼️ Display Button Helpers](#display-button-helpers) - [line 11644](../youtube-playback-plox.user.js#L11644)
54. [🍞 Toasts](#toasts) - [line 12520](../youtube-playback-plox.user.js#L12520)
55. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 12815](../youtube-playback-plox.user.js#L12815)
56. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 12862](../youtube-playback-plox.user.js#L12862)
57. [⚙️ Settings UI](#settings-ui) - [line 13180](../youtube-playback-plox.user.js#L13180)
58. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 13697](../youtube-playback-plox.user.js#L13697)
59. [🎵 Video Selection](#video-selection) - [line 13755](../youtube-playback-plox.user.js#L13755)
60. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 14662](../youtube-playback-plox.user.js#L14662)
61. [📡 Video Observer Manager](#video-observer-manager) - [line 14937](../youtube-playback-plox.user.js#L14937)
62. [Processing Functions](#processing-functions) - [line 15775](../youtube-playback-plox.user.js#L15775)
63. [PlaybackController](#playbackcontroller) - [line 16973](../youtube-playback-plox.user.js#L16973)
64. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 17468](../youtube-playback-plox.user.js#L17468)
65. [📂 Sort UI](#sort-ui) - [line 18025](../youtube-playback-plox.user.js#L18025)
66. [📂 Filters UI](#filters-ui) - [line 18223](../youtube-playback-plox.user.js#L18223)
67. [📂 Video List UI](#video-list-ui) - [line 18511](../youtube-playback-plox.user.js#L18511)
68. [📁 Update Video List](#update-video-list) - [line 18693](../youtube-playback-plox.user.js#L18693)
69. [🔘 Floating Button](#floating-button) - [line 19536](../youtube-playback-plox.user.js#L19536)
70. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 19565](../youtube-playback-plox.user.js#L19565)
71. [📂 Video Entry](#video-entry) - [line 19838](../youtube-playback-plox.user.js#L19838)
72. [🗑️ Clear All Data](#clear-all-data) - [line 21890](../youtube-playback-plox.user.js#L21890)
73. [⚙️ Menu Commands](#menu-commands) - [line 22246](../youtube-playback-plox.user.js#L22246)
74. [🔄 Data Migration](#data-migration) - [line 22304](../youtube-playback-plox.user.js#L22304)
75. [🚀 Init](#init) - [line 22807](../youtube-playback-plox.user.js#L22807)

---

## [🔍 Logger System](../youtube-playback-plox.user.js#L139)
> [Line 139](../youtube-playback-plox.user.js#L139)

| Type | Name | Line |
|---|---|---|
| `fn` | [`resolveArgs`](../youtube-playback-plox.user.js#L151) | [151](../youtube-playback-plox.user.js#L151) |
| `fn` | [`build`](../youtube-playback-plox.user.js#L153) | [153](../youtube-playback-plox.user.js#L153) |
| `fn` | [`msg`](../youtube-playback-plox.user.js#L193) | [193](../youtube-playback-plox.user.js#L193) |

## [🛡️ Initialization Guard (SPA Safety)](../youtube-playback-plox.user.js#L223)
> [Line 223](../youtube-playback-plox.user.js#L223)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isInstanceActive`](../youtube-playback-plox.user.js#L276) | [276](../youtube-playback-plox.user.js#L276) |
| `fn` | [`destroyToasts`](../youtube-playback-plox.user.js#L285) | [285](../youtube-playback-plox.user.js#L285) |
| `fn` | [`assertActiveInstance`](../youtube-playback-plox.user.js#L358) | [358](../youtube-playback-plox.user.js#L358) |

## [📦 Config](../youtube-playback-plox.user.js#L366)
> [Line 366](../youtube-playback-plox.user.js#L366)

_No relevant functions or constants detected._

## [📊 Global Constants](../youtube-playback-plox.user.js#L495)
> [Line 495](../youtube-playback-plox.user.js#L495)

| Type | Name | Line |
|---|---|---|
| `module` | [`TYPE_CONFIG`](../youtube-playback-plox.user.js#L506) | [506](../youtube-playback-plox.user.js#L506) |

## [📊 Global Variables](../youtube-playback-plox.user.js#L532)
> [Line 532](../youtube-playback-plox.user.js#L532)

_No relevant functions or constants detected._

## [🌐 Translations](../youtube-playback-plox.user.js#L570)
> [Line 570](../youtube-playback-plox.user.js#L570)

| Type | Name | Line |
|---|---|---|
| `fn` | [`loadTranslations`](../youtube-playback-plox.user.js#L879) | [879](../youtube-playback-plox.user.js#L879) |
| `fn` | [`fetchUrl`](../youtube-playback-plox.user.js#L918) | [918](../youtube-playback-plox.user.js#L918) |

## [🔧 Utils](../youtube-playback-plox.user.js#L1012)
> [Line 1012](../youtube-playback-plox.user.js#L1012)

_No relevant functions or constants detected._

## [🔧 Sanitize HTML](../youtube-playback-plox.user.js#L1015)
> [Line 1015](../youtube-playback-plox.user.js#L1015)

| Type | Name | Line |
|---|---|---|
| `fn` | [`sanitizeHTML`](../youtube-playback-plox.user.js#L1025) | [1025](../youtube-playback-plox.user.js#L1025) |
| `module` | [`sanitizeHTML`](../youtube-playback-plox.user.js#L1025) | [1025](../youtube-playback-plox.user.js#L1025) |
| `fn` | [`getSafeUrl`](../youtube-playback-plox.user.js#L1049) | [1049](../youtube-playback-plox.user.js#L1049) |
| `fn` | [`scrubSensitiveData`](../youtube-playback-plox.user.js#L1069) | [1069](../youtube-playback-plox.user.js#L1069) |

## [🔧 Is Visibly Displayed](../youtube-playback-plox.user.js#L1081)
> [Line 1081](../youtube-playback-plox.user.js#L1081)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isVisiblyDisplayed`](../youtube-playback-plox.user.js#L1090) | [1090](../youtube-playback-plox.user.js#L1090) |

## [🔧 Format Time](../youtube-playback-plox.user.js#L1105)
> [Line 1105](../youtube-playback-plox.user.js#L1105)

| Type | Name | Line |
|---|---|---|
| `fn` | [`formatTime`](../youtube-playback-plox.user.js#L1127) | [1127](../youtube-playback-plox.user.js#L1127) |

## [🔧 parseTimeToSeconds](../youtube-playback-plox.user.js#L1149)
> [Line 1149](../youtube-playback-plox.user.js#L1149)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseTimeToSeconds`](../youtube-playback-plox.user.js#L1172) | [1172](../youtube-playback-plox.user.js#L1172) |

## [🔧 normalizeSeconds](../youtube-playback-plox.user.js#L1197)
> [Line 1197](../youtube-playback-plox.user.js#L1197)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeSeconds`](../youtube-playback-plox.user.js#L1216) | [1216](../youtube-playback-plox.user.js#L1216) |

## [🔧 getUrlTimeParamSeconds](../youtube-playback-plox.user.js#L1223)
> [Line 1223](../youtube-playback-plox.user.js#L1223)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getUrlTimeParamSeconds`](../youtube-playback-plox.user.js#L1231) | [1231](../youtube-playback-plox.user.js#L1231) |

## [⏳ delay](../youtube-playback-plox.user.js#L1252)
> [Line 1252](../youtube-playback-plox.user.js#L1252)

| Type | Name | Line |
|---|---|---|
| `fn` | [`delay`](../youtube-playback-plox.user.js#L1258) | [1258](../youtube-playback-plox.user.js#L1258) |
| `fn` | [`withStorageTimeout`](../youtube-playback-plox.user.js#L1272) | [1272](../youtube-playback-plox.user.js#L1272) |
| `fn` | [`runGMMutation`](../youtube-playback-plox.user.js#L1299) | [1299](../youtube-playback-plox.user.js#L1299) |
| `fn` | [`gmGetValue`](../youtube-playback-plox.user.js#L1342) | [1342](../youtube-playback-plox.user.js#L1342) |
| `fn` | [`gmSetValue`](../youtube-playback-plox.user.js#L1360) | [1360](../youtube-playback-plox.user.js#L1360) |
| `fn` | [`gmDeleteValue`](../youtube-playback-plox.user.js#L1372) | [1372](../youtube-playback-plox.user.js#L1372) |
| `fn` | [`gmListValues`](../youtube-playback-plox.user.js#L1383) | [1383](../youtube-playback-plox.user.js#L1383) |

## [🔧 setInnerHTML](../youtube-playback-plox.user.js#L1392)
> [Line 1392](../youtube-playback-plox.user.js#L1392)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTrustedTypesPolicy`](../youtube-playback-plox.user.js#L1402) | [1402](../youtube-playback-plox.user.js#L1402) |
| `fn` | [`setInnerHTML`](../youtube-playback-plox.user.js#L1427) | [1427](../youtube-playback-plox.user.js#L1427) |

## [🔧 Create Element](../youtube-playback-plox.user.js#L1467)
> [Line 1467](../youtube-playback-plox.user.js#L1467)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createElement`](../youtube-playback-plox.user.js#L1485) | [1485](../youtube-playback-plox.user.js#L1485) |
| `fn` | [`append`](../youtube-playback-plox.user.js#L1547) | [1547](../youtube-playback-plox.user.js#L1547) |
| `fn` | [`applyNumericClamping`](../youtube-playback-plox.user.js#L1574) | [1574](../youtube-playback-plox.user.js#L1574) |
| `fn` | [`clamp`](../youtube-playback-plox.user.js#L1577) | [1577](../youtube-playback-plox.user.js#L1577) |

## [🔧 Debounce](../youtube-playback-plox.user.js#L1604)
> [Line 1604](../youtube-playback-plox.user.js#L1604)

| Type | Name | Line |
|---|---|---|
| `fn` | [`debounce`](../youtube-playback-plox.user.js#L1613) | [1613](../youtube-playback-plox.user.js#L1613) |
| `fn` | [`debounced`](../youtube-playback-plox.user.js#L1616) | [1616](../youtube-playback-plox.user.js#L1616) |

## [🔧 downloadBlobMobileSafe](../youtube-playback-plox.user.js#L1639)
> [Line 1639](../youtube-playback-plox.user.js#L1639)

| Type | Name | Line |
|---|---|---|
| `fn` | [`downloadBlobMobileSafe`](../youtube-playback-plox.user.js#L1647) | [1647](../youtube-playback-plox.user.js#L1647) |

## [🗄️ Event Handlers store](../youtube-playback-plox.user.js#L1709)
> [Line 1709](../youtube-playback-plox.user.js#L1709)

| Type | Name | Line |
|---|---|---|
| `class` | [`DisposableStore`](../youtube-playback-plox.user.js#L1715) | [1715](../youtube-playback-plox.user.js#L1715) |
| `fn` | [`addDisposableListener`](../youtube-playback-plox.user.js#L1783) | [1783](../youtube-playback-plox.user.js#L1783) |
| `fn` | [`dispose`](../youtube-playback-plox.user.js#L1786) | [1786](../youtube-playback-plox.user.js#L1786) |

## [📝 Selector System](../youtube-playback-plox.user.js#L1795)
> [Line 1795](../youtube-playback-plox.user.js#L1795)

| Type | Name | Line |
|---|---|---|
| `module` | [`PREFIX`](../youtube-playback-plox.user.js#L1879) | [1879](../youtube-playback-plox.user.js#L1879) |
| `fn` | [`createSelectorSystem`](../youtube-playback-plox.user.js#L1904) | [1904](../youtube-playback-plox.user.js#L1904) |

## [💾 Simple LRU Cache](../youtube-playback-plox.user.js#L2081)
> [Line 2081](../youtube-playback-plox.user.js#L2081)

| Type | Name | Line |
|---|---|---|
| `class` | [`SimpleLRUCache`](../youtube-playback-plox.user.js#L2086) | [2086](../youtube-playback-plox.user.js#L2086) |

## [⚙️ DOM Cache System](../youtube-playback-plox.user.js#L2162)
> [Line 2162](../youtube-playback-plox.user.js#L2162)

| Type | Name | Line |
|---|---|---|
| `fn` | [`DOMHelpers`](../youtube-playback-plox.user.js#L2179) | [2179](../youtube-playback-plox.user.js#L2179) |
| `module` | [`DOMHelpers`](../youtube-playback-plox.user.js#L2179) | [2179](../youtube-playback-plox.user.js#L2179) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L2211) | [2211](../youtube-playback-plox.user.js#L2211) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L2249) | [2249](../youtube-playback-plox.user.js#L2249) |

## [🌐 Translation Functions](../youtube-playback-plox.user.js#L2528)
> [Line 2528](../youtube-playback-plox.user.js#L2528)

| Type | Name | Line |
|---|---|---|
| `fn` | [`t`](../youtube-playback-plox.user.js#L2542) | [2542](../youtube-playback-plox.user.js#L2542) |
| `fn` | [`normParams`](../youtube-playback-plox.user.js#L2552) | [2552](../youtube-playback-plox.user.js#L2552) |
| `fn` | [`replaceParams`](../youtube-playback-plox.user.js#L2569) | [2569](../youtube-playback-plox.user.js#L2569) |
| `fn` | [`setLanguage`](../youtube-playback-plox.user.js#L2585) | [2585](../youtube-playback-plox.user.js#L2585) |
| `fn` | [`detectBrowserLanguage`](../youtube-playback-plox.user.js#L2648) | [2648](../youtube-playback-plox.user.js#L2648) |
| `fn` | [`candidates`](../youtube-playback-plox.user.js#L2650) | [2650](../youtube-playback-plox.user.js#L2650) |
| `fn` | [`normalized`](../youtube-playback-plox.user.js#L2669) | [2669](../youtube-playback-plox.user.js#L2669) |

## [🎨 Styles](../youtube-playback-plox.user.js#L2693)
> [Line 2693](../youtube-playback-plox.user.js#L2693)

_No relevant functions or constants detected._

## [🎨 Theme](../youtube-playback-plox.user.js#L5281)
> [Line 5281](../youtube-playback-plox.user.js#L5281)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isYouTubeDarkTheme`](../youtube-playback-plox.user.js#L5288) | [5288](../youtube-playback-plox.user.js#L5288) |
| `fn` | [`applyTheme`](../youtube-playback-plox.user.js#L5306) | [5306](../youtube-playback-plox.user.js#L5306) |
| `fn` | [`observeThemeChanges`](../youtube-playback-plox.user.js#L5319) | [5319](../youtube-playback-plox.user.js#L5319) |
| `fn` | [`cleanupThemeObserver`](../youtube-playback-plox.user.js#L5342) | [5342](../youtube-playback-plox.user.js#L5342) |
| `fn` | [`cleanupGlobalListeners`](../youtube-playback-plox.user.js#L5353) | [5353](../youtube-playback-plox.user.js#L5353) |

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L5359)
> [Line 5359](../youtube-playback-plox.user.js#L5359)

_No relevant functions or constants detected._

## [🎨 Progress Bar Style](../youtube-playback-plox.user.js#L5521)
> [Line 5521](../youtube-playback-plox.user.js#L5521)

| Type | Name | Line |
|---|---|---|
| `fn` | [`clearAllProgressGradientState`](../youtube-playback-plox.user.js#L5533) | [5533](../youtube-playback-plox.user.js#L5533) |
| `fn` | [`syncProgressGradientStateForContainer`](../youtube-playback-plox.user.js#L5549) | [5549](../youtube-playback-plox.user.js#L5549) |
| `fn` | [`resolvePlayerRootForGradient`](../youtube-playback-plox.user.js#L5572) | [5572](../youtube-playback-plox.user.js#L5572) |
| `fn` | [`clearProgressColorFromPlayerRoot`](../youtube-playback-plox.user.js#L5583) | [5583](../youtube-playback-plox.user.js#L5583) |
| `fn` | [`applyProgressColorToPlayerRoot`](../youtube-playback-plox.user.js#L5603) | [5603](../youtube-playback-plox.user.js#L5603) |
| `fn` | [`applyProgressColorToShortsSurfaces`](../youtube-playback-plox.user.js#L5627) | [5627](../youtube-playback-plox.user.js#L5627) |
| `fn` | [`repaintWatchProgressBarFromActivePlayer`](../youtube-playback-plox.user.js#L5647) | [5647](../youtube-playback-plox.user.js#L5647) |
| `fn` | [`scheduleProgressBarGradientRepaint`](../youtube-playback-plox.user.js#L5669) | [5669](../youtube-playback-plox.user.js#L5669) |
| `fn` | [`isCurrentSession`](../youtube-playback-plox.user.js#L5671) | [5671](../youtube-playback-plox.user.js#L5671) |
| `fn` | [`paint`](../youtube-playback-plox.user.js#L5678) | [5678](../youtube-playback-plox.user.js#L5678) |
| `fn` | [`isLivePlaybackForGradient`](../youtube-playback-plox.user.js#L5700) | [5700](../youtube-playback-plox.user.js#L5700) |
| `fn` | [`updateProgressBarGradient`](../youtube-playback-plox.user.js#L5737) | [5737](../youtube-playback-plox.user.js#L5737) |
| `fn` | [`refreshProgressBarGradientForSession`](../youtube-playback-plox.user.js#L5813) | [5813](../youtube-playback-plox.user.js#L5813) |
| `fn` | [`resetProgressBarGradient`](../youtube-playback-plox.user.js#L5835) | [5835](../youtube-playback-plox.user.js#L5835) |
| `fn` | [`injectProgressBarCSS`](../youtube-playback-plox.user.js#L5857) | [5857](../youtube-playback-plox.user.js#L5857) |
| `fn` | [`getProgressColor`](../youtube-playback-plox.user.js#L5987) | [5987](../youtube-playback-plox.user.js#L5987) |
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L6015) | [6015](../youtube-playback-plox.user.js#L6015) |
| `fn` | [`getProgressColorForText`](../youtube-playback-plox.user.js#L6024) | [6024](../youtube-playback-plox.user.js#L6024) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L6038)
> [Line 6038](../youtube-playback-plox.user.js#L6038)

| Type | Name | Line |
|---|---|---|
| `fn` | [`markLocalDeletion`](../youtube-playback-plox.user.js#L6062) | [6062](../youtube-playback-plox.user.js#L6062) |
| `fn` | [`bumpStorageKeyRevision`](../youtube-playback-plox.user.js#L6081) | [6081](../youtube-playback-plox.user.js#L6081) |
| `fn` | [`getStorageRevisionSnapshot`](../youtube-playback-plox.user.js#L6094) | [6094](../youtube-playback-plox.user.js#L6094) |
| `fn` | [`storageRevisionChanged`](../youtube-playback-plox.user.js#L6107) | [6107](../youtube-playback-plox.user.js#L6107) |
| `fn` | [`invalidateSessionSavedData`](../youtube-playback-plox.user.js#L6180) | [6180](../youtube-playback-plox.user.js#L6180) |
| `fn` | [`broadcastStorageChange`](../youtube-playback-plox.user.js#L6197) | [6197](../youtube-playback-plox.user.js#L6197) |
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L6220) | [6220](../youtube-playback-plox.user.js#L6220) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L6220) | [6220](../youtube-playback-plox.user.js#L6220) |
| `fn` | [`enqueueDurableOperation`](../youtube-playback-plox.user.js#L6248) | [6248](../youtube-playback-plox.user.js#L6248) |
| `fn` | [`hasDurableGMStorage`](../youtube-playback-plox.user.js#L6261) | [6261](../youtube-playback-plox.user.js#L6261) |
| `fn` | [`hasAnyGMStorageApi`](../youtube-playback-plox.user.js#L6271) | [6271](../youtube-playback-plox.user.js#L6271) |
| `fn` | [`waitForDurableMutations`](../youtube-playback-plox.user.js#L6284) | [6284](../youtube-playback-plox.user.js#L6284) |
| `fn` | [`canUseIDB`](../youtube-playback-plox.user.js#L6289) | [6289](../youtube-playback-plox.user.js#L6289) |
| `fn` | [`isStorageRecordError`](../youtube-playback-plox.user.js#L6296) | [6296](../youtube-playback-plox.user.js#L6296) |
| `fn` | [`isStorageProviderError`](../youtube-playback-plox.user.js#L6306) | [6306](../youtube-playback-plox.user.js#L6306) |
| `fn` | [`markIDBUnavailable`](../youtube-playback-plox.user.js#L6310) | [6310](../youtube-playback-plox.user.js#L6310) |
| `fn` | [`markIDBAvailable`](../youtube-playback-plox.user.js#L6315) | [6315](../youtube-playback-plox.user.js#L6315) |
| `fn` | [`pickNewerDurableRecord`](../youtube-playback-plox.user.js#L6326) | [6326](../youtube-playback-plox.user.js#L6326) |
| `fn` | [`getGMFallback`](../youtube-playback-plox.user.js#L6340) | [6340](../youtube-playback-plox.user.js#L6340) |
| `fn` | [`parseStoredRecord`](../youtube-playback-plox.user.js#L6369) | [6369](../youtube-playback-plox.user.js#L6369) |
| `fn` | [`setGMFallback`](../youtube-playback-plox.user.js#L6396) | [6396](../youtube-playback-plox.user.js#L6396) |
| `fn` | [`setGMFallbackNewestWins`](../youtube-playback-plox.user.js#L6410) | [6410](../youtube-playback-plox.user.js#L6410) |
| `fn` | [`deleteGMFallback`](../youtube-playback-plox.user.js#L6433) | [6433](../youtube-playback-plox.user.js#L6433) |
| `fn` | [`reconcileGMFallbackAfterIDB`](../youtube-playback-plox.user.js#L6470) | [6470](../youtube-playback-plox.user.js#L6470) |
| `fn` | [`reconcileGMFallbacksAfterIDB`](../youtube-playback-plox.user.js#L6561) | [6561](../youtube-playback-plox.user.js#L6561) |
| `fn` | [`initialize`](../youtube-playback-plox.user.js#L6645) | [6645](../youtube-playback-plox.user.js#L6645) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L6710) | [6710](../youtube-playback-plox.user.js#L6710) |
| `fn` | [`set`](../youtube-playback-plox.user.js#L6896) | [6896](../youtube-playback-plox.user.js#L6896) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L6900) | [6900](../youtube-playback-plox.user.js#L6900) |
| `fn` | [`setMany`](../youtube-playback-plox.user.js#L6985) | [6985](../youtube-playback-plox.user.js#L6985) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L6996) | [6996](../youtube-playback-plox.user.js#L6996) |
| `fn` | [`deleteGMFallbackIfUnchanged`](../youtube-playback-plox.user.js#L7148) | [7148](../youtube-playback-plox.user.js#L7148) |
| `fn` | [`del`](../youtube-playback-plox.user.js#L7171) | [7171](../youtube-playback-plox.user.js#L7171) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7174) | [7174](../youtube-playback-plox.user.js#L7174) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L7313) | [7313](../youtube-playback-plox.user.js#L7313) |
| `fn` | [`rawKeys`](../youtube-playback-plox.user.js#L7370) | [7370](../youtube-playback-plox.user.js#L7370) |
| `fn` | [`getCompleteVideoSnapshot`](../youtube-playback-plox.user.js#L7429) | [7429](../youtube-playback-plox.user.js#L7429) |
| `fn` | [`getBackendInfo`](../youtube-playback-plox.user.js#L7567) | [7567](../youtube-playback-plox.user.js#L7567) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L7592) | [7592](../youtube-playback-plox.user.js#L7592) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L7592) | [7592](../youtube-playback-plox.user.js#L7592) |
| `fn` | [`openDatabase`](../youtube-playback-plox.user.js#L7600) | [7600](../youtube-playback-plox.user.js#L7600) |
| `fn` | [`failOpen`](../youtube-playback-plox.user.js#L7606) | [7606](../youtube-playback-plox.user.js#L7606) |
| `fn` | [`runInStore`](../youtube-playback-plox.user.js#L7666) | [7666](../youtube-playback-plox.user.js#L7666) |
| `fn` | [`enqueue`](../youtube-playback-plox.user.js#L7691) | [7691](../youtube-playback-plox.user.js#L7691) |
| `fn` | [`sanitizeEntries`](../youtube-playback-plox.user.js#L7708) | [7708](../youtube-playback-plox.user.js#L7708) |
| `fn` | [`getAllEntries`](../youtube-playback-plox.user.js#L7756) | [7756](../youtube-playback-plox.user.js#L7756) |
| `fn` | [`putEntry`](../youtube-playback-plox.user.js#L7761) | [7761](../youtube-playback-plox.user.js#L7761) |
| `fn` | [`deleteEntry`](../youtube-playback-plox.user.js#L7765) | [7765](../youtube-playback-plox.user.js#L7765) |
| `fn` | [`bulkPut`](../youtube-playback-plox.user.js#L7769) | [7769](../youtube-playback-plox.user.js#L7769) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L7780) | [7780](../youtube-playback-plox.user.js#L7780) |
| `fn` | [`diagnose`](../youtube-playback-plox.user.js#L7803) | [7803](../youtube-playback-plox.user.js#L7803) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L7854) | [7854](../youtube-playback-plox.user.js#L7854) |
| `fn` | [`prefixKey`](../youtube-playback-plox.user.js#L7863) | [7863](../youtube-playback-plox.user.js#L7863) |
| `fn` | [`stripPrefix`](../youtube-playback-plox.user.js#L7864) | [7864](../youtube-playback-plox.user.js#L7864) |
| `fn` | [`hasPrefix`](../youtube-playback-plox.user.js#L7865) | [7865](../youtube-playback-plox.user.js#L7865) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L8070) | [8070](../youtube-playback-plox.user.js#L8070) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L8088) | [8088](../youtube-playback-plox.user.js#L8088) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L8114) | [8114](../youtube-playback-plox.user.js#L8114) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L8130) | [8130](../youtube-playback-plox.user.js#L8130) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L8193) | [8193](../youtube-playback-plox.user.js#L8193) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L8211) | [8211](../youtube-playback-plox.user.js#L8211) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L8219) | [8219](../youtube-playback-plox.user.js#L8219) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L8244) | [8244](../youtube-playback-plox.user.js#L8244) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L8260)
> [Line 8260](../youtube-playback-plox.user.js#L8260)

_No relevant functions or constants detected._

## [📢 Ad Detector](../youtube-playback-plox.user.js#L8280)
> [Line 8280](../youtube-playback-plox.user.js#L8280)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L8282) | [8282](../youtube-playback-plox.user.js#L8282) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L8333) | [8333](../youtube-playback-plox.user.js#L8333) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L8458)
> [Line 8458](../youtube-playback-plox.user.js#L8458)

| Type | Name | Line |
|---|---|---|
| `class` | [`VirtualScroller`](../youtube-playback-plox.user.js#L8475) | [8475](../youtube-playback-plox.user.js#L8475) |

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L8928)
> [Line 8928](../youtube-playback-plox.user.js#L8928)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L8937) | [8937](../youtube-playback-plox.user.js#L8937) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L8968) | [8968](../youtube-playback-plox.user.js#L8968) |
| `fn` | [`copyExportDataToClipboard`](../youtube-playback-plox.user.js#L9021) | [9021](../youtube-playback-plox.user.js#L9021) |
| `fn` | [`mergeImportedVideoData`](../youtube-playback-plox.user.js#L9076) | [9076](../youtube-playback-plox.user.js#L9076) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L9134) | [9134](../youtube-playback-plox.user.js#L9134) |
| `fn` | [`importCommitGuard`](../youtube-playback-plox.user.js#L9136) | [9136](../youtube-playback-plox.user.js#L9136) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L9243)
> [Line 9243](../youtube-playback-plox.user.js#L9243)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getGitHubErrorMsg`](../youtube-playback-plox.user.js#L9246) | [9246](../youtube-playback-plox.user.js#L9246) |
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L9258) | [9258](../youtube-playback-plox.user.js#L9258) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L9288) | [9288](../youtube-playback-plox.user.js#L9288) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L9289) | [9289](../youtube-playback-plox.user.js#L9289) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L9382) | [9382](../youtube-playback-plox.user.js#L9382) |
| `fn` | [`finish`](../youtube-playback-plox.user.js#L9392) | [9392](../youtube-playback-plox.user.js#L9392) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L9406) | [9406](../youtube-playback-plox.user.js#L9406) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L9592) | [9592](../youtube-playback-plox.user.js#L9592) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L9613) | [9613](../youtube-playback-plox.user.js#L9613) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L9692) | [9692](../youtube-playback-plox.user.js#L9692) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L9722) | [9722](../youtube-playback-plox.user.js#L9722) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L9755)
> [Line 9755](../youtube-playback-plox.user.js#L9755)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L9756) | [9756](../youtube-playback-plox.user.js#L9756) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L9795) | [9795](../youtube-playback-plox.user.js#L9795) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L9937)
> [Line 9937](../youtube-playback-plox.user.js#L9937)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeCompletionHistory`](../youtube-playback-plox.user.js#L9945) | [9945](../youtube-playback-plox.user.js#L9945) |
| `fn` | [`normalizeVideoData`](../youtube-playback-plox.user.js#L9973) | [9973](../youtube-playback-plox.user.js#L9973) |
| `fn` | [`safeText`](../youtube-playback-plox.user.js#L9976) | [9976](../youtube-playback-plox.user.js#L9976) |
| `fn` | [`safeNumber`](../youtube-playback-plox.user.js#L9981) | [9981](../youtube-playback-plox.user.js#L9981) |
| `fn` | [`safeNullableText`](../youtube-playback-plox.user.js#L9985) | [9985](../youtube-playback-plox.user.js#L9985) |

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L10035)
> [Line 10035](../youtube-playback-plox.user.js#L10035)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toFreeTubeFormat`](../youtube-playback-plox.user.js#L10041) | [10041](../youtube-playback-plox.user.js#L10041) |

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L10126)
> [Line 10126](../youtube-playback-plox.user.js#L10126)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseFreeTubeDB`](../youtube-playback-plox.user.js#L10132) | [10132](../youtube-playback-plox.user.js#L10132) |

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L10219)
> [Line 10219](../youtube-playback-plox.user.js#L10219)

| Type | Name | Line |
|---|---|---|
| `fn` | [`fromFreeTubeFormat`](../youtube-playback-plox.user.js#L10225) | [10225](../youtube-playback-plox.user.js#L10225) |
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L10234) | [10234](../youtube-playback-plox.user.js#L10234) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L10249)
> [Line 10249](../youtube-playback-plox.user.js#L10249)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTubeFormat`](../youtube-playback-plox.user.js#L10254) | [10254](../youtube-playback-plox.user.js#L10254) |

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L10293)
> [Line 10293](../youtube-playback-plox.user.js#L10293)

| Type | Name | Line |
|---|---|---|
| `fn` | [`importFromFreeTubeFormat`](../youtube-playback-plox.user.js#L10299) | [10299](../youtube-playback-plox.user.js#L10299) |
| `fn` | [`importCommitGuard`](../youtube-playback-plox.user.js#L10301) | [10301](../youtube-playback-plox.user.js#L10301) |

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L10391)
> [Line 10391](../youtube-playback-plox.user.js#L10391)

| Type | Name | Line |
|---|---|---|
| `fn` | [`insertCompletionEvent`](../youtube-playback-plox.user.js#L10399) | [10399](../youtube-playback-plox.user.js#L10399) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L10427) | [10427](../youtube-playback-plox.user.js#L10427) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L10438)
> [Line 10438](../youtube-playback-plox.user.js#L10438)

| Type | Name | Line |
|---|---|---|
| `fn` | [`internalSaveVideoGeneric`](../youtube-playback-plox.user.js#L10443) | [10443](../youtube-playback-plox.user.js#L10443) |
| `fn` | [`isExpectedSessionCurrent`](../youtube-playback-plox.user.js#L10453) | [10453](../youtube-playback-plox.user.js#L10453) |
| `fn` | [`isDestructiveEpochCurrent`](../youtube-playback-plox.user.js#L10459) | [10459](../youtube-playback-plox.user.js#L10459) |
| `fn` | [`commitGuard`](../youtube-playback-plox.user.js#L10462) | [10462](../youtube-playback-plox.user.js#L10462) |
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L10533) | [10533](../youtube-playback-plox.user.js#L10533) |

## [📺 Helpers](../youtube-playback-plox.user.js#L10680)
> [Line 10680](../youtube-playback-plox.user.js#L10680)

_No relevant functions or constants detected._

## [📺 Gets saved video data](../youtube-playback-plox.user.js#L10683)
> [Line 10683](../youtube-playback-plox.user.js#L10683)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSavedVideoData`](../youtube-playback-plox.user.js#L10692) | [10692](../youtube-playback-plox.user.js#L10692) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L10740)
> [Line 10740](../youtube-playback-plox.user.js#L10740)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L10776) | [10776](../youtube-playback-plox.user.js#L10776) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L10819)
> [Line 10819](../youtube-playback-plox.user.js#L10819)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTypeFromPageManager`](../youtube-playback-plox.user.js#L10842) | [10842](../youtube-playback-plox.user.js#L10842) |
| `fn` | [`getTypeFromYtApp`](../youtube-playback-plox.user.js#L10882) | [10882](../youtube-playback-plox.user.js#L10882) |
| `fn` | [`detectFromURL`](../youtube-playback-plox.user.js#L10908) | [10908](../youtube-playback-plox.user.js#L10908) |
| `fn` | [`cachePageType`](../youtube-playback-plox.user.js#L10980) | [10980](../youtube-playback-plox.user.js#L10980) |
| `fn` | [`getYouTubePageType`](../youtube-playback-plox.user.js#L10999) | [10999](../youtube-playback-plox.user.js#L10999) |

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L11024)
> [Line 11024](../youtube-playback-plox.user.js#L11024)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseYouTubeResource`](../youtube-playback-plox.user.js#L11084) | [11084](../youtube-playback-plox.user.js#L11084) |
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L11121) | [11121](../youtube-playback-plox.user.js#L11121) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L11230)
> [Line 11230](../youtube-playback-plox.user.js#L11230)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubeVideoIdFromUrl`](../youtube-playback-plox.user.js#L11240) | [11240](../youtube-playback-plox.user.js#L11240) |

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L11252)
> [Line 11252](../youtube-playback-plox.user.js#L11252)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getYouTubeVideoContextFromUrl`](../youtube-playback-plox.user.js#L11264) | [11264](../youtube-playback-plox.user.js#L11264) |

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L11280)
> [Line 11280](../youtube-playback-plox.user.js#L11280)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubePlaylistIdFromUrl`](../youtube-playback-plox.user.js#L11288) | [11288](../youtube-playback-plox.user.js#L11288) |
| `fn` | [`classifyPlaylist`](../youtube-playback-plox.user.js#L11312) | [11312](../youtube-playback-plox.user.js#L11312) |

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L11325)
> [Line 11325](../youtube-playback-plox.user.js#L11325)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L11346) | [11346](../youtube-playback-plox.user.js#L11346) |
| `fn` | [`extractYtInitialData`](../youtube-playback-plox.user.js#L11366) | [11366](../youtube-playback-plox.user.js#L11366) |
| `fn` | [`getPlaylistName`](../youtube-playback-plox.user.js#L11472) | [11472](../youtube-playback-plox.user.js#L11472) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L11488) | [11488](../youtube-playback-plox.user.js#L11488) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L11581) | [11581](../youtube-playback-plox.user.js#L11581) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L11608)
> [Line 11608](../youtube-playback-plox.user.js#L11608)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L11634) | [11634](../youtube-playback-plox.user.js#L11634) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L11644)
> [Line 11644](../youtube-playback-plox.user.js#L11644)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTimeDisplayMessage`](../youtube-playback-plox.user.js#L11652) | [11652](../youtube-playback-plox.user.js#L11652) |
| `fn` | [`hasTimeDisplayMessage`](../youtube-playback-plox.user.js#L11661) | [11661](../youtube-playback-plox.user.js#L11661) |
| `fn` | [`showDisplayMessage`](../youtube-playback-plox.user.js#L11671) | [11671](../youtube-playback-plox.user.js#L11671) |
| `fn` | [`restoreDisplayButtons`](../youtube-playback-plox.user.js#L11689) | [11689](../youtube-playback-plox.user.js#L11689) |
| `fn` | [`createSplitButtonGroup`](../youtube-playback-plox.user.js#L11720) | [11720](../youtube-playback-plox.user.js#L11720) |
| `fn` | [`getDisplayContextVideo`](../youtube-playback-plox.user.js#L11745) | [11745](../youtube-playback-plox.user.js#L11745) |
| `fn` | [`getDisplayContextPlayer`](../youtube-playback-plox.user.js#L11760) | [11760](../youtube-playback-plox.user.js#L11760) |
| `fn` | [`getPlaybackNotificationKind`](../youtube-playback-plox.user.js#L11775) | [11775](../youtube-playback-plox.user.js#L11775) |
| `fn` | [`buildPlaybackNotificationMessage`](../youtube-playback-plox.user.js#L11792) | [11792](../youtube-playback-plox.user.js#L11792) |
| `fn` | [`setupManualSaveButton`](../youtube-playback-plox.user.js#L11831) | [11831](../youtube-playback-plox.user.js#L11831) |
| `fn` | [`getActiveShortsControlsContainer`](../youtube-playback-plox.user.js#L11891) | [11891](../youtube-playback-plox.user.js#L11891) |
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L11936) | [11936](../youtube-playback-plox.user.js#L11936) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L11936) | [11936](../youtube-playback-plox.user.js#L11936) |
| `fn` | [`getDisplayDisposables`](../youtube-playback-plox.user.js#L11958) | [11958](../youtube-playback-plox.user.js#L11958) |
| `fn` | [`disposeDisplayNode`](../youtube-playback-plox.user.js#L11971) | [11971](../youtube-playback-plox.user.js#L11971) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L11978) | [11978](../youtube-playback-plox.user.js#L11978) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L11988) | [11988](../youtube-playback-plox.user.js#L11988) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L11996) | [11996](../youtube-playback-plox.user.js#L11996) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L12004) | [12004](../youtube-playback-plox.user.js#L12004) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L12027) | [12027](../youtube-playback-plox.user.js#L12027) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L12039) | [12039](../youtube-playback-plox.user.js#L12039) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L12042) | [12042](../youtube-playback-plox.user.js#L12042) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L12052) | [12052](../youtube-playback-plox.user.js#L12052) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L12057) | [12057](../youtube-playback-plox.user.js#L12057) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L12080) | [12080](../youtube-playback-plox.user.js#L12080) |
| `fn` | [`scheduleShortsFrame`](../youtube-playback-plox.user.js#L12104) | [12104](../youtube-playback-plox.user.js#L12104) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L12113) | [12113](../youtube-playback-plox.user.js#L12113) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L12122) | [12122](../youtube-playback-plox.user.js#L12122) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L12172) | [12172](../youtube-playback-plox.user.js#L12172) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L12235) | [12235](../youtube-playback-plox.user.js#L12235) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L12291) | [12291](../youtube-playback-plox.user.js#L12291) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L12362) | [12362](../youtube-playback-plox.user.js#L12362) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L12388) | [12388](../youtube-playback-plox.user.js#L12388) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L12402) | [12402](../youtube-playback-plox.user.js#L12402) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L12406) | [12406](../youtube-playback-plox.user.js#L12406) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L12413) | [12413](../youtube-playback-plox.user.js#L12413) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L12431) | [12431](../youtube-playback-plox.user.js#L12431) |
| `fn` | [`startShortsPanelObserver`](../youtube-playback-plox.user.js#L12445) | [12445](../youtube-playback-plox.user.js#L12445) |
| `fn` | [`stopShortsPanelObserver`](../youtube-playback-plox.user.js#L12493) | [12493](../youtube-playback-plox.user.js#L12493) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L12520)
> [Line 12520](../youtube-playback-plox.user.js#L12520)

| Type | Name | Line |
|---|---|---|
| `fn` | [`disposeToastRuntime`](../youtube-playback-plox.user.js#L12532) | [12532](../youtube-playback-plox.user.js#L12532) |
| `fn` | [`registerToastRuntime`](../youtube-playback-plox.user.js#L12560) | [12560](../youtube-playback-plox.user.js#L12560) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12561) | [12561](../youtube-playback-plox.user.js#L12561) |
| `fn` | [`createToastContainer`](../youtube-playback-plox.user.js#L12577) | [12577](../youtube-playback-plox.user.js#L12577) |
| `fn` | [`fadeAndRemoveToast`](../youtube-playback-plox.user.js#L12603) | [12603](../youtube-playback-plox.user.js#L12603) |
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L12624) | [12624](../youtube-playback-plox.user.js#L12624) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12648) | [12648](../youtube-playback-plox.user.js#L12648) |
| `fn` | [`showFloatingToast`](../youtube-playback-plox.user.js#L12672) | [12672](../youtube-playback-plox.user.js#L12672) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L12815)
> [Line 12815](../youtube-playback-plox.user.js#L12815)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L12818) | [12818](../youtube-playback-plox.user.js#L12818) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L12862)
> [Line 12862](../youtube-playback-plox.user.js#L12862)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L12902) | [12902](../youtube-playback-plox.user.js#L12902) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L12908) | [12908](../youtube-playback-plox.user.js#L12908) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L12916) | [12916](../youtube-playback-plox.user.js#L12916) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L12962) | [12962](../youtube-playback-plox.user.js#L12962) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L12966) | [12966](../youtube-playback-plox.user.js#L12966) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L12969) | [12969](../youtube-playback-plox.user.js#L12969) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L12985) | [12985](../youtube-playback-plox.user.js#L12985) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L12994) | [12994](../youtube-playback-plox.user.js#L12994) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L13024) | [13024](../youtube-playback-plox.user.js#L13024) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L13038) | [13038](../youtube-playback-plox.user.js#L13038) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L13042) | [13042](../youtube-playback-plox.user.js#L13042) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L13180)
> [Line 13180](../youtube-playback-plox.user.js#L13180)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSettingsUI`](../youtube-playback-plox.user.js#L13183) | [13183](../youtube-playback-plox.user.js#L13183) |
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L13214) | [13214](../youtube-playback-plox.user.js#L13214) |
| `fn` | [`onSettingsKeyDown`](../youtube-playback-plox.user.js#L13236) | [13236](../youtube-playback-plox.user.js#L13236) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L13331) | [13331](../youtube-playback-plox.user.js#L13331) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L13418) | [13418](../youtube-playback-plox.user.js#L13418) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L13419) | [13419](../youtube-playback-plox.user.js#L13419) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L13508) | [13508](../youtube-playback-plox.user.js#L13508) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L13509) | [13509](../youtube-playback-plox.user.js#L13509) |
| `fn` | [`getInnerTubeClientVersion`](../youtube-playback-plox.user.js#L13541) | [13541](../youtube-playback-plox.user.js#L13541) |
| `fn` | [`idbDiag`](../youtube-playback-plox.user.js#L13570) | [13570](../youtube-playback-plox.user.js#L13570) |
| `fn` | [`safeModeActive`](../youtube-playback-plox.user.js#L13583) | [13583](../youtube-playback-plox.user.js#L13583) |
| `fn` | [`activeSessions`](../youtube-playback-plox.user.js#L13584) | [13584](../youtube-playback-plox.user.js#L13584) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L13697)
> [Line 13697](../youtube-playback-plox.user.js#L13697)

| Type | Name | Line |
|---|---|---|
| `fn` | [`notifySeekOrProgress`](../youtube-playback-plox.user.js#L13699) | [13699](../youtube-playback-plox.user.js#L13699) |

## [🎵 Video Selection](../youtube-playback-plox.user.js#L13755)
> [Line 13755](../youtube-playback-plox.user.js#L13755)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleManagementMode`](../youtube-playback-plox.user.js#L13770) | [13770](../youtube-playback-plox.user.js#L13770) |
| `fn` | [`updateFooterButtons`](../youtube-playback-plox.user.js#L13783) | [13783](../youtube-playback-plox.user.js#L13783) |
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L13845) | [13845](../youtube-playback-plox.user.js#L13845) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L13852) | [13852](../youtube-playback-plox.user.js#L13852) |
| `fn` | [`createFooterActionMenu`](../youtube-playback-plox.user.js#L13910) | [13910](../youtube-playback-plox.user.js#L13910) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L13940) | [13940](../youtube-playback-plox.user.js#L13940) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L13944) | [13944](../youtube-playback-plox.user.js#L13944) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L13953) | [13953](../youtube-playback-plox.user.js#L13953) |
| `fn` | [`closeImportMenu`](../youtube-playback-plox.user.js#L14042) | [14042](../youtube-playback-plox.user.js#L14042) |
| `fn` | [`onImportOutsideClick`](../youtube-playback-plox.user.js#L14051) | [14051](../youtube-playback-plox.user.js#L14051) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L14420) | [14420](../youtube-playback-plox.user.js#L14420) |
| `fn` | [`updateManagementFooterState`](../youtube-playback-plox.user.js#L14510) | [14510](../youtube-playback-plox.user.js#L14510) |
| `fn` | [`togglePlaylistCreationMode`](../youtube-playback-plox.user.js#L14540) | [14540](../youtube-playback-plox.user.js#L14540) |
| `fn` | [`copyToClipboard`](../youtube-playback-plox.user.js#L14557) | [14557](../youtube-playback-plox.user.js#L14557) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L14567) | [14567](../youtube-playback-plox.user.js#L14567) |
| `fn` | [`toggleVideoSelection`](../youtube-playback-plox.user.js#L14630) | [14630](../youtube-playback-plox.user.js#L14630) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L14662)
> [Line 14662](../youtube-playback-plox.user.js#L14662)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L14668) | [14668](../youtube-playback-plox.user.js#L14668) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L14668) | [14668](../youtube-playback-plox.user.js#L14668) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L14669) | [14669](../youtube-playback-plox.user.js#L14669) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L14678) | [14678](../youtube-playback-plox.user.js#L14678) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L14683) | [14683](../youtube-playback-plox.user.js#L14683) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L14694) | [14694](../youtube-playback-plox.user.js#L14694) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L14711) | [14711](../youtube-playback-plox.user.js#L14711) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L14745) | [14745](../youtube-playback-plox.user.js#L14745) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L14770) | [14770](../youtube-playback-plox.user.js#L14770) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L14772) | [14772](../youtube-playback-plox.user.js#L14772) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L14791) | [14791](../youtube-playback-plox.user.js#L14791) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L14791) | [14791](../youtube-playback-plox.user.js#L14791) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L14793) | [14793](../youtube-playback-plox.user.js#L14793) |
| `fn` | [`shouldDropVideoEvent`](../youtube-playback-plox.user.js#L14805) | [14805](../youtube-playback-plox.user.js#L14805) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L14814) | [14814](../youtube-playback-plox.user.js#L14814) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L14814) | [14814](../youtube-playback-plox.user.js#L14814) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L14825) | [14825](../youtube-playback-plox.user.js#L14825) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L14830) | [14830](../youtube-playback-plox.user.js#L14830) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L14835) | [14835](../youtube-playback-plox.user.js#L14835) |
| `fn` | [`note`](../youtube-playback-plox.user.js#L14855) | [14855](../youtube-playback-plox.user.js#L14855) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L14859) | [14859](../youtube-playback-plox.user.js#L14859) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L14877) | [14877](../youtube-playback-plox.user.js#L14877) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L14877) | [14877](../youtube-playback-plox.user.js#L14877) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L14879) | [14879](../youtube-playback-plox.user.js#L14879) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L14887) | [14887](../youtube-playback-plox.user.js#L14887) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L14937)
> [Line 14937](../youtube-playback-plox.user.js#L14937)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L14942) | [14942](../youtube-playback-plox.user.js#L14942) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L14942) | [14942](../youtube-playback-plox.user.js#L14942) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L14964) | [14964](../youtube-playback-plox.user.js#L14964) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L14984) | [14984](../youtube-playback-plox.user.js#L14984) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L15000) | [15000](../youtube-playback-plox.user.js#L15000) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L15037) | [15037](../youtube-playback-plox.user.js#L15037) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L15072) | [15072](../youtube-playback-plox.user.js#L15072) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L15073) | [15073](../youtube-playback-plox.user.js#L15073) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L15104) | [15104](../youtube-playback-plox.user.js#L15104) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L15160) | [15160](../youtube-playback-plox.user.js#L15160) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L15228) | [15228](../youtube-playback-plox.user.js#L15228) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L15238) | [15238](../youtube-playback-plox.user.js#L15238) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L15249) | [15249](../youtube-playback-plox.user.js#L15249) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L15281) | [15281](../youtube-playback-plox.user.js#L15281) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L15321) | [15321](../youtube-playback-plox.user.js#L15321) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L15332) | [15332](../youtube-playback-plox.user.js#L15332) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L15356) | [15356](../youtube-playback-plox.user.js#L15356) |
| `fn` | [`clearPlayerCache`](../youtube-playback-plox.user.js#L15482) | [15482](../youtube-playback-plox.user.js#L15482) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L15704) | [15704](../youtube-playback-plox.user.js#L15704) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L15748) | [15748](../youtube-playback-plox.user.js#L15748) |

## [Processing Functions](../youtube-playback-plox.user.js#L15775)
> [Line 15775](../youtube-playback-plox.user.js#L15775)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L15801) | [15801](../youtube-playback-plox.user.js#L15801) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L15820) | [15820](../youtube-playback-plox.user.js#L15820) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L15830) | [15830](../youtube-playback-plox.user.js#L15830) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L15830) | [15830](../youtube-playback-plox.user.js#L15830) |
| `fn` | [`clearPendingRecovery`](../youtube-playback-plox.user.js#L15850) | [15850](../youtube-playback-plox.user.js#L15850) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L15855) | [15855](../youtube-playback-plox.user.js#L15855) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L15860) | [15860](../youtube-playback-plox.user.js#L15860) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L15867) | [15867](../youtube-playback-plox.user.js#L15867) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L15873) | [15873](../youtube-playback-plox.user.js#L15873) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L15891) | [15891](../youtube-playback-plox.user.js#L15891) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L15968) | [15968](../youtube-playback-plox.user.js#L15968) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L16032) | [16032](../youtube-playback-plox.user.js#L16032) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L16067) | [16067](../youtube-playback-plox.user.js#L16067) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L16097) | [16097](../youtube-playback-plox.user.js#L16097) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L16108) | [16108](../youtube-playback-plox.user.js#L16108) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L16120) | [16120](../youtube-playback-plox.user.js#L16120) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L16156) | [16156](../youtube-playback-plox.user.js#L16156) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L16235) | [16235](../youtube-playback-plox.user.js#L16235) |
| `fn` | [`handleSeekingForGradient`](../youtube-playback-plox.user.js#L16264) | [16264](../youtube-playback-plox.user.js#L16264) |
| `fn` | [`handleSeekedForGradient`](../youtube-playback-plox.user.js#L16274) | [16274](../youtube-playback-plox.user.js#L16274) |
| `fn` | [`canValidateStandalone`](../youtube-playback-plox.user.js#L16397) | [16397](../youtube-playback-plox.user.js#L16397) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L16422) | [16422](../youtube-playback-plox.user.js#L16422) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L16491) | [16491](../youtube-playback-plox.user.js#L16491) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L16694) | [16694](../youtube-playback-plox.user.js#L16694) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L16807) | [16807](../youtube-playback-plox.user.js#L16807) |
| `fn` | [`processMediaVideo`](../youtube-playback-plox.user.js#L16922) | [16922](../youtube-playback-plox.user.js#L16922) |

## [PlaybackController](../youtube-playback-plox.user.js#L16973)
> [Line 16973](../youtube-playback-plox.user.js#L16973)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L17021) | [17021](../youtube-playback-plox.user.js#L17021) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L17037) | [17037](../youtube-playback-plox.user.js#L17037) |
| `fn` | [`removeMetadataListener`](../youtube-playback-plox.user.js#L17061) | [17061](../youtube-playback-plox.user.js#L17061) |
| `fn` | [`removeCanPlayListener`](../youtube-playback-plox.user.js#L17062) | [17062](../youtube-playback-plox.user.js#L17062) |
| `fn` | [`removeAbortListener`](../youtube-playback-plox.user.js#L17063) | [17063](../youtube-playback-plox.user.js#L17063) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L17064) | [17064](../youtube-playback-plox.user.js#L17064) |
| `fn` | [`rejectAsStale`](../youtube-playback-plox.user.js#L17070) | [17070](../youtube-playback-plox.user.js#L17070) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L17074) | [17074](../youtube-playback-plox.user.js#L17074) |
| `fn` | [`onAbort`](../youtube-playback-plox.user.js#L17083) | [17083](../youtube-playback-plox.user.js#L17083) |
| `fn` | [`restoreThrottleMarker`](../youtube-playback-plox.user.js#L17230) | [17230](../youtube-playback-plox.user.js#L17230) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L17322) | [17322](../youtube-playback-plox.user.js#L17322) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L17468)
> [Line 17468](../youtube-playback-plox.user.js#L17468)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getInnerTubeConfig`](../youtube-playback-plox.user.js#L17505) | [17505](../youtube-playback-plox.user.js#L17505) |
| `fn` | [`fetchInnerTubeJson`](../youtube-playback-plox.user.js#L17520) | [17520](../youtube-playback-plox.user.js#L17520) |
| `fn` | [`fetchShortsViews`](../youtube-playback-plox.user.js#L17554) | [17554](../youtube-playback-plox.user.js#L17554) |
| `fn` | [`fetchPlaylistTitle`](../youtube-playback-plox.user.js#L17567) | [17567](../youtube-playback-plox.user.js#L17567) |
| `fn` | [`getCascadedVideoInfo`](../youtube-playback-plox.user.js#L17577) | [17577](../youtube-playback-plox.user.js#L17577) |
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L17622) | [17622](../youtube-playback-plox.user.js#L17622) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L18025)
> [Line 18025](../youtube-playback-plox.user.js#L18025)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createCustomDropdown`](../youtube-playback-plox.user.js#L18039) | [18039](../youtube-playback-plox.user.js#L18039) |
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L18050) | [18050](../youtube-playback-plox.user.js#L18050) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L18126) | [18126](../youtube-playback-plox.user.js#L18126) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L18142) | [18142](../youtube-playback-plox.user.js#L18142) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L18150) | [18150](../youtube-playback-plox.user.js#L18150) |
| `fn` | [`createSortSelector`](../youtube-playback-plox.user.js#L18167) | [18167](../youtube-playback-plox.user.js#L18167) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L18170) | [18170](../youtube-playback-plox.user.js#L18170) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L18223)
> [Line 18223](../youtube-playback-plox.user.js#L18223)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFilterSelector`](../youtube-playback-plox.user.js#L18232) | [18232](../youtube-playback-plox.user.js#L18232) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L18235) | [18235](../youtube-playback-plox.user.js#L18235) |
| `fn` | [`createRangeFilter`](../youtube-playback-plox.user.js#L18279) | [18279](../youtube-playback-plox.user.js#L18279) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L18282) | [18282](../youtube-playback-plox.user.js#L18282) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L18288) | [18288](../youtube-playback-plox.user.js#L18288) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L18296) | [18296](../youtube-playback-plox.user.js#L18296) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L18311) | [18311](../youtube-playback-plox.user.js#L18311) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L18431) | [18431](../youtube-playback-plox.user.js#L18431) |
| `fn` | [`createSearchInput`](../youtube-playback-plox.user.js#L18486) | [18486](../youtube-playback-plox.user.js#L18486) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L18511)
> [Line 18511](../youtube-playback-plox.user.js#L18511)

| Type | Name | Line |
|---|---|---|
| `fn` | [`acquireBodyOverflow`](../youtube-playback-plox.user.js#L18539) | [18539](../youtube-playback-plox.user.js#L18539) |
| `fn` | [`releaseBodyOverflow`](../youtube-playback-plox.user.js#L18553) | [18553](../youtube-playback-plox.user.js#L18553) |
| `fn` | [`getVirtualScrollerVideoItems`](../youtube-playback-plox.user.js#L18623) | [18623](../youtube-playback-plox.user.js#L18623) |
| `fn` | [`batchLoadStorageData`](../youtube-playback-plox.user.js#L18652) | [18652](../youtube-playback-plox.user.js#L18652) |

## [📁 Update Video List](../youtube-playback-plox.user.js#L18693)
> [Line 18693](../youtube-playback-plox.user.js#L18693)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSortValue`](../youtube-playback-plox.user.js#L18700) | [18700](../youtube-playback-plox.user.js#L18700) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L18712) | [18712](../youtube-playback-plox.user.js#L18712) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L18716) | [18716](../youtube-playback-plox.user.js#L18716) |
| `fn` | [`showLoadingState`](../youtube-playback-plox.user.js#L18733) | [18733](../youtube-playback-plox.user.js#L18733) |
| `fn` | [`loadVideoItems`](../youtube-playback-plox.user.js#L18796) | [18796](../youtube-playback-plox.user.js#L18796) |
| `fn` | [`resolvePlaylistTitles`](../youtube-playback-plox.user.js#L18820) | [18820](../youtube-playback-plox.user.js#L18820) |
| `fn` | [`filterItems`](../youtube-playback-plox.user.js#L18852) | [18852](../youtube-playback-plox.user.js#L18852) |
| `fn` | [`buildVirtualItems`](../youtube-playback-plox.user.js#L18896) | [18896](../youtube-playback-plox.user.js#L18896) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L18909) | [18909](../youtube-playback-plox.user.js#L18909) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L18930) | [18930](../youtube-playback-plox.user.js#L18930) |
| `fn` | [`showEmptyState`](../youtube-playback-plox.user.js#L18960) | [18960](../youtube-playback-plox.user.js#L18960) |
| `fn` | [`showListLoadErrorState`](../youtube-playback-plox.user.js#L18993) | [18993](../youtube-playback-plox.user.js#L18993) |
| `fn` | [`updateVirtualScroller`](../youtube-playback-plox.user.js#L19011) | [19011](../youtube-playback-plox.user.js#L19011) |
| `fn` | [`initVirtualScroller`](../youtube-playback-plox.user.js#L19041) | [19041](../youtube-playback-plox.user.js#L19041) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L19087) | [19087](../youtube-playback-plox.user.js#L19087) |
| `fn` | [`connectResizeObserver`](../youtube-playback-plox.user.js#L19145) | [19145](../youtube-playback-plox.user.js#L19145) |
| `fn` | [`updateVideoList`](../youtube-playback-plox.user.js#L19183) | [19183](../youtube-playback-plox.user.js#L19183) |
| `fn` | [`isCurrentRender`](../youtube-playback-plox.user.js#L19188) | [19188](../youtube-playback-plox.user.js#L19188) |
| `fn` | [`requestVideoListUpdate`](../youtube-playback-plox.user.js#L19262) | [19262](../youtube-playback-plox.user.js#L19262) |
| `fn` | [`closeModalVideos`](../youtube-playback-plox.user.js#L19273) | [19273](../youtube-playback-plox.user.js#L19273) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L19366) | [19366](../youtube-playback-plox.user.js#L19366) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L19383) | [19383](../youtube-playback-plox.user.js#L19383) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L19411) | [19411](../youtube-playback-plox.user.js#L19411) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L19536)
> [Line 19536](../youtube-playback-plox.user.js#L19536)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L19539) | [19539](../youtube-playback-plox.user.js#L19539) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L19554) | [19554](../youtube-playback-plox.user.js#L19554) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L19565)
> [Line 19565](../youtube-playback-plox.user.js#L19565)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSavedVideosList`](../youtube-playback-plox.user.js#L19568) | [19568](../youtube-playback-plox.user.js#L19568) |
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L19706) | [19706](../youtube-playback-plox.user.js#L19706) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L19716) | [19716](../youtube-playback-plox.user.js#L19716) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L19786) | [19786](../youtube-playback-plox.user.js#L19786) |
| `fn` | [`onSavedVideosKeyDown`](../youtube-playback-plox.user.js#L19795) | [19795](../youtube-playback-plox.user.js#L19795) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L19838)
> [Line 19838](../youtube-playback-plox.user.js#L19838)

| Type | Name | Line |
|---|---|---|
| `fn` | [`generatePlaylistColor`](../youtube-playback-plox.user.js#L19847) | [19847](../youtube-playback-plox.user.js#L19847) |
| `fn` | [`generatePlaylistBorderColor`](../youtube-playback-plox.user.js#L19876) | [19876](../youtube-playback-plox.user.js#L19876) |
| `fn` | [`handleForceTimeAction`](../youtube-playback-plox.user.js#L19898) | [19898](../youtube-playback-plox.user.js#L19898) |
| `fn` | [`handleUnlinkPlaylistAction`](../youtube-playback-plox.user.js#L19964) | [19964](../youtube-playback-plox.user.js#L19964) |
| `fn` | [`handleDeleteEntryAction`](../youtube-playback-plox.user.js#L19986) | [19986](../youtube-playback-plox.user.js#L19986) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L20019) | [20019](../youtube-playback-plox.user.js#L20019) |
| `fn` | [`handleToggleProtectionAction`](../youtube-playback-plox.user.js#L20048) | [20048](../youtube-playback-plox.user.js#L20048) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L20089) | [20089](../youtube-playback-plox.user.js#L20089) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L20137) | [20137](../youtube-playback-plox.user.js#L20137) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L20143) | [20143](../youtube-playback-plox.user.js#L20143) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L20162) | [20162](../youtube-playback-plox.user.js#L20162) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L20196) | [20196](../youtube-playback-plox.user.js#L20196) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L20248) | [20248](../youtube-playback-plox.user.js#L20248) |
| `fn` | [`generateVideoObsidianMarkdown`](../youtube-playback-plox.user.js#L20297) | [20297](../youtube-playback-plox.user.js#L20297) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L20330) | [20330](../youtube-playback-plox.user.js#L20330) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L20336) | [20336](../youtube-playback-plox.user.js#L20336) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L20352) | [20352](../youtube-playback-plox.user.js#L20352) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L20362) | [20362](../youtube-playback-plox.user.js#L20362) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L20370) | [20370](../youtube-playback-plox.user.js#L20370) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L20375) | [20375](../youtube-playback-plox.user.js#L20375) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L20382) | [20382](../youtube-playback-plox.user.js#L20382) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L20385) | [20385](../youtube-playback-plox.user.js#L20385) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L20389) | [20389](../youtube-playback-plox.user.js#L20389) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L20435) | [20435](../youtube-playback-plox.user.js#L20435) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L20435) | [20435](../youtube-playback-plox.user.js#L20435) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L20449) | [20449](../youtube-playback-plox.user.js#L20449) |
| `fn` | [`createModeSelector`](../youtube-playback-plox.user.js#L20723) | [20723](../youtube-playback-plox.user.js#L20723) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L20724) | [20724](../youtube-playback-plox.user.js#L20724) |
| `fn` | [`createViewModeSelector`](../youtube-playback-plox.user.js#L20756) | [20756](../youtube-playback-plox.user.js#L20756) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L20773) | [20773](../youtube-playback-plox.user.js#L20773) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L20774) | [20774](../youtube-playback-plox.user.js#L20774) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L20790) | [20790](../youtube-playback-plox.user.js#L20790) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L20791) | [20791](../youtube-playback-plox.user.js#L20791) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L20840) | [20840](../youtube-playback-plox.user.js#L20840) |
| `fn` | [`createOverflowToggle`](../youtube-playback-plox.user.js#L20871) | [20871](../youtube-playback-plox.user.js#L20871) |
| `fn` | [`makeToolbarGroup`](../youtube-playback-plox.user.js#L20910) | [20910](../youtube-playback-plox.user.js#L20910) |
| `fn` | [`makeDisplayToggle`](../youtube-playback-plox.user.js#L20932) | [20932](../youtube-playback-plox.user.js#L20932) |
| `fn` | [`mountSavedVideosModalActionsToolbar`](../youtube-playback-plox.user.js#L20966) | [20966](../youtube-playback-plox.user.js#L20966) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L20989) | [20989](../youtube-playback-plox.user.js#L20989) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L21003) | [21003](../youtube-playback-plox.user.js#L21003) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L21325) | [21325](../youtube-playback-plox.user.js#L21325) |
| `fn` | [`applyThumbnailToImage`](../youtube-playback-plox.user.js#L21381) | [21381](../youtube-playback-plox.user.js#L21381) |
| `fn` | [`removeLoadListener`](../youtube-playback-plox.user.js#L21390) | [21390](../youtube-playback-plox.user.js#L21390) |
| `fn` | [`removeErrorListener`](../youtube-playback-plox.user.js#L21391) | [21391](../youtube-playback-plox.user.js#L21391) |
| `fn` | [`finish`](../youtube-playback-plox.user.js#L21397) | [21397](../youtube-playback-plox.user.js#L21397) |
| `fn` | [`loadCandidate`](../youtube-playback-plox.user.js#L21412) | [21412](../youtube-playback-plox.user.js#L21412) |
| `fn` | [`createVideoGridRow`](../youtube-playback-plox.user.js#L21447) | [21447](../youtube-playback-plox.user.js#L21447) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L21464) | [21464](../youtube-playback-plox.user.js#L21464) |
| `fn` | [`scheduleHeightUpdate`](../youtube-playback-plox.user.js#L21513) | [21513](../youtube-playback-plox.user.js#L21513) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L21560) | [21560](../youtube-playback-plox.user.js#L21560) |
| `fn` | [`createVideoEntry`](../youtube-playback-plox.user.js#L21574) | [21574](../youtube-playback-plox.user.js#L21574) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L21808) | [21808](../youtube-playback-plox.user.js#L21808) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L21831) | [21831](../youtube-playback-plox.user.js#L21831) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L21832) | [21832](../youtube-playback-plox.user.js#L21832) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L21890)
> [Line 21890](../youtube-playback-plox.user.js#L21890)

| Type | Name | Line |
|---|---|---|
| `fn` | [`restoreDeletedRecordIfUnchanged`](../youtube-playback-plox.user.js#L21909) | [21909](../youtube-playback-plox.user.js#L21909) |
| `fn` | [`canCommit`](../youtube-playback-plox.user.js#L21910) | [21910](../youtube-playback-plox.user.js#L21910) |
| `fn` | [`clearAllData`](../youtube-playback-plox.user.js#L21939) | [21939](../youtube-playback-plox.user.js#L21939) |
| `fn` | [`clearCommitGuard`](../youtube-playback-plox.user.js#L21954) | [21954](../youtube-playback-plox.user.js#L21954) |
| `fn` | [`performClearAllData`](../youtube-playback-plox.user.js#L21974) | [21974](../youtube-playback-plox.user.js#L21974) |
| `fn` | [`undoClearAll`](../youtube-playback-plox.user.js#L22162) | [22162](../youtube-playback-plox.user.js#L22162) |
| `fn` | [`undoCommitGuard`](../youtube-playback-plox.user.js#L22165) | [22165](../youtube-playback-plox.user.js#L22165) |
| `fn` | [`performUndoClearAll`](../youtube-playback-plox.user.js#L22178) | [22178](../youtube-playback-plox.user.js#L22178) |

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L22246)
> [Line 22246](../youtube-playback-plox.user.js#L22246)

| Type | Name | Line |
|---|---|---|
| `fn` | [`registerOwnedMenuCommand`](../youtube-playback-plox.user.js#L22255) | [22255](../youtube-playback-plox.user.js#L22255) |
| `fn` | [`unregisterOwnedMenuCommands`](../youtube-playback-plox.user.js#L22265) | [22265](../youtube-playback-plox.user.js#L22265) |
| `fn` | [`registerMenuCommands`](../youtube-playback-plox.user.js#L22278) | [22278](../youtube-playback-plox.user.js#L22278) |

## [🔄 Data Migration](../youtube-playback-plox.user.js#L22304)
> [Line 22304](../youtube-playback-plox.user.js#L22304)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeVideoType`](../youtube-playback-plox.user.js#L22313) | [22313](../youtube-playback-plox.user.js#L22313) |
| `fn` | [`cleanupNonVideoData`](../youtube-playback-plox.user.js#L22335) | [22335](../youtube-playback-plox.user.js#L22335) |
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L22362) | [22362](../youtube-playback-plox.user.js#L22362) |
| `fn` | [`runAutoCleanup`](../youtube-playback-plox.user.js#L22583) | [22583](../youtube-playback-plox.user.js#L22583) |
| `fn` | [`cleanupCommitGuard`](../youtube-playback-plox.user.js#L22603) | [22603](../youtube-playback-plox.user.js#L22603) |

## [🚀 Init](../youtube-playback-plox.user.js#L22807)
> [Line 22807](../youtube-playback-plox.user.js#L22807)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L22820) | [22820](../youtube-playback-plox.user.js#L22820) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L22842) | [22842](../youtube-playback-plox.user.js#L22842) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L23199) | [23199](../youtube-playback-plox.user.js#L23199) |

