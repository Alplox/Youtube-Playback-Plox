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
25. [🎨 Theme](#theme) - [line 5274](../youtube-playback-plox.user.js#L5274)
26. [🎨 SVG Icons](#svg-icons) - [line 5352](../youtube-playback-plox.user.js#L5352)
27. [🎨 Progress Bar Style](#progress-bar-style) - [line 5514](../youtube-playback-plox.user.js#L5514)
28. [💾 Storage + Settings](#storage-settings) - [line 6031](../youtube-playback-plox.user.js#L6031)
29. [📢 Ad Caches](#ad-caches) - [line 8253](../youtube-playback-plox.user.js#L8253)
30. [📢 Ad Detector](#ad-detector) - [line 8273](../youtube-playback-plox.user.js#L8273)
31. [🎯 VirtualScroller](#virtualscroller) - [line 8451](../youtube-playback-plox.user.js#L8451)
32. [📤 Import/Export JSON](#importexport-json) - [line 8921](../youtube-playback-plox.user.js#L8921)
33. [☁️ GitHub Backup](#github-backup) - [line 9236](../youtube-playback-plox.user.js#L9236)
34. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 9748](../youtube-playback-plox.user.js#L9748)
35. [🔄 Normalize Video Data](#normalize-video-data) - [line 9930](../youtube-playback-plox.user.js#L9930)
36. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 10028](../youtube-playback-plox.user.js#L10028)
37. [Parse FreeTube DB](#parse-freetube-db) - [line 10119](../youtube-playback-plox.user.js#L10119)
38. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 10212](../youtube-playback-plox.user.js#L10212)
39. [⬆ Export To FreeTube](#export-to-freetube) - [line 10242](../youtube-playback-plox.user.js#L10242)
40. [⬇ Import From FreeTube](#import-from-freetube) - [line 10286](../youtube-playback-plox.user.js#L10286)
41. [🔄 Insert Completion Event](#insert-completion-event) - [line 10384](../youtube-playback-plox.user.js#L10384)
42. [💾 Save Video Generic](#save-video-generic) - [line 10431](../youtube-playback-plox.user.js#L10431)
43. [📺 Helpers](#helpers) - [line 10673](../youtube-playback-plox.user.js#L10673)
44. [📺 Gets saved video data](#gets-saved-video-data) - [line 10676](../youtube-playback-plox.user.js#L10676)
45. [📺 Get Player Video ID](#get-player-video-id) - [line 10733](../youtube-playback-plox.user.js#L10733)
46. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 10812](../youtube-playback-plox.user.js#L10812)
47. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 11017](../youtube-playback-plox.user.js#L11017)
48. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 11223](../youtube-playback-plox.user.js#L11223)
49. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 11245](../youtube-playback-plox.user.js#L11245)
50. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 11273](../youtube-playback-plox.user.js#L11273)
51. [📺 get Playlist Name](#get-playlist-name) - [line 11318](../youtube-playback-plox.user.js#L11318)
52. [🕒 Time Display](#time-display) - [line 11601](../youtube-playback-plox.user.js#L11601)
53. [🖼️ Display Button Helpers](#display-button-helpers) - [line 11637](../youtube-playback-plox.user.js#L11637)
54. [🍞 Toasts](#toasts) - [line 12513](../youtube-playback-plox.user.js#L12513)
55. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 12808](../youtube-playback-plox.user.js#L12808)
56. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 12855](../youtube-playback-plox.user.js#L12855)
57. [⚙️ Settings UI](#settings-ui) - [line 13173](../youtube-playback-plox.user.js#L13173)
58. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 13690](../youtube-playback-plox.user.js#L13690)
59. [🎵 Video Selection](#video-selection) - [line 13748](../youtube-playback-plox.user.js#L13748)
60. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 14655](../youtube-playback-plox.user.js#L14655)
61. [📡 Video Observer Manager](#video-observer-manager) - [line 14930](../youtube-playback-plox.user.js#L14930)
62. [Processing Functions](#processing-functions) - [line 15768](../youtube-playback-plox.user.js#L15768)
63. [PlaybackController](#playbackcontroller) - [line 16966](../youtube-playback-plox.user.js#L16966)
64. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 17461](../youtube-playback-plox.user.js#L17461)
65. [📂 Sort UI](#sort-ui) - [line 18018](../youtube-playback-plox.user.js#L18018)
66. [📂 Filters UI](#filters-ui) - [line 18216](../youtube-playback-plox.user.js#L18216)
67. [📂 Video List UI](#video-list-ui) - [line 18504](../youtube-playback-plox.user.js#L18504)
68. [📁 Update Video List](#update-video-list) - [line 18686](../youtube-playback-plox.user.js#L18686)
69. [🔘 Floating Button](#floating-button) - [line 19504](../youtube-playback-plox.user.js#L19504)
70. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 19533](../youtube-playback-plox.user.js#L19533)
71. [📂 Video Entry](#video-entry) - [line 19806](../youtube-playback-plox.user.js#L19806)
72. [🗑️ Clear All Data](#clear-all-data) - [line 21858](../youtube-playback-plox.user.js#L21858)
73. [⚙️ Menu Commands](#menu-commands) - [line 22214](../youtube-playback-plox.user.js#L22214)
74. [🔄 Data Migration](#data-migration) - [line 22272](../youtube-playback-plox.user.js#L22272)
75. [🚀 Init](#init) - [line 22775](../youtube-playback-plox.user.js#L22775)

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

## [🎨 Theme](../youtube-playback-plox.user.js#L5274)
> [Line 5274](../youtube-playback-plox.user.js#L5274)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isYouTubeDarkTheme`](../youtube-playback-plox.user.js#L5281) | [5281](../youtube-playback-plox.user.js#L5281) |
| `fn` | [`applyTheme`](../youtube-playback-plox.user.js#L5299) | [5299](../youtube-playback-plox.user.js#L5299) |
| `fn` | [`observeThemeChanges`](../youtube-playback-plox.user.js#L5312) | [5312](../youtube-playback-plox.user.js#L5312) |
| `fn` | [`cleanupThemeObserver`](../youtube-playback-plox.user.js#L5335) | [5335](../youtube-playback-plox.user.js#L5335) |
| `fn` | [`cleanupGlobalListeners`](../youtube-playback-plox.user.js#L5346) | [5346](../youtube-playback-plox.user.js#L5346) |

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L5352)
> [Line 5352](../youtube-playback-plox.user.js#L5352)

_No relevant functions or constants detected._

## [🎨 Progress Bar Style](../youtube-playback-plox.user.js#L5514)
> [Line 5514](../youtube-playback-plox.user.js#L5514)

| Type | Name | Line |
|---|---|---|
| `fn` | [`clearAllProgressGradientState`](../youtube-playback-plox.user.js#L5526) | [5526](../youtube-playback-plox.user.js#L5526) |
| `fn` | [`syncProgressGradientStateForContainer`](../youtube-playback-plox.user.js#L5542) | [5542](../youtube-playback-plox.user.js#L5542) |
| `fn` | [`resolvePlayerRootForGradient`](../youtube-playback-plox.user.js#L5565) | [5565](../youtube-playback-plox.user.js#L5565) |
| `fn` | [`clearProgressColorFromPlayerRoot`](../youtube-playback-plox.user.js#L5576) | [5576](../youtube-playback-plox.user.js#L5576) |
| `fn` | [`applyProgressColorToPlayerRoot`](../youtube-playback-plox.user.js#L5596) | [5596](../youtube-playback-plox.user.js#L5596) |
| `fn` | [`applyProgressColorToShortsSurfaces`](../youtube-playback-plox.user.js#L5620) | [5620](../youtube-playback-plox.user.js#L5620) |
| `fn` | [`repaintWatchProgressBarFromActivePlayer`](../youtube-playback-plox.user.js#L5640) | [5640](../youtube-playback-plox.user.js#L5640) |
| `fn` | [`scheduleProgressBarGradientRepaint`](../youtube-playback-plox.user.js#L5662) | [5662](../youtube-playback-plox.user.js#L5662) |
| `fn` | [`isCurrentSession`](../youtube-playback-plox.user.js#L5664) | [5664](../youtube-playback-plox.user.js#L5664) |
| `fn` | [`paint`](../youtube-playback-plox.user.js#L5671) | [5671](../youtube-playback-plox.user.js#L5671) |
| `fn` | [`isLivePlaybackForGradient`](../youtube-playback-plox.user.js#L5693) | [5693](../youtube-playback-plox.user.js#L5693) |
| `fn` | [`updateProgressBarGradient`](../youtube-playback-plox.user.js#L5730) | [5730](../youtube-playback-plox.user.js#L5730) |
| `fn` | [`refreshProgressBarGradientForSession`](../youtube-playback-plox.user.js#L5806) | [5806](../youtube-playback-plox.user.js#L5806) |
| `fn` | [`resetProgressBarGradient`](../youtube-playback-plox.user.js#L5828) | [5828](../youtube-playback-plox.user.js#L5828) |
| `fn` | [`injectProgressBarCSS`](../youtube-playback-plox.user.js#L5850) | [5850](../youtube-playback-plox.user.js#L5850) |
| `fn` | [`getProgressColor`](../youtube-playback-plox.user.js#L5980) | [5980](../youtube-playback-plox.user.js#L5980) |
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L6008) | [6008](../youtube-playback-plox.user.js#L6008) |
| `fn` | [`getProgressColorForText`](../youtube-playback-plox.user.js#L6017) | [6017](../youtube-playback-plox.user.js#L6017) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L6031)
> [Line 6031](../youtube-playback-plox.user.js#L6031)

| Type | Name | Line |
|---|---|---|
| `fn` | [`markLocalDeletion`](../youtube-playback-plox.user.js#L6055) | [6055](../youtube-playback-plox.user.js#L6055) |
| `fn` | [`bumpStorageKeyRevision`](../youtube-playback-plox.user.js#L6074) | [6074](../youtube-playback-plox.user.js#L6074) |
| `fn` | [`getStorageRevisionSnapshot`](../youtube-playback-plox.user.js#L6087) | [6087](../youtube-playback-plox.user.js#L6087) |
| `fn` | [`storageRevisionChanged`](../youtube-playback-plox.user.js#L6100) | [6100](../youtube-playback-plox.user.js#L6100) |
| `fn` | [`invalidateSessionSavedData`](../youtube-playback-plox.user.js#L6173) | [6173](../youtube-playback-plox.user.js#L6173) |
| `fn` | [`broadcastStorageChange`](../youtube-playback-plox.user.js#L6190) | [6190](../youtube-playback-plox.user.js#L6190) |
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L6213) | [6213](../youtube-playback-plox.user.js#L6213) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L6213) | [6213](../youtube-playback-plox.user.js#L6213) |
| `fn` | [`enqueueDurableOperation`](../youtube-playback-plox.user.js#L6241) | [6241](../youtube-playback-plox.user.js#L6241) |
| `fn` | [`hasDurableGMStorage`](../youtube-playback-plox.user.js#L6254) | [6254](../youtube-playback-plox.user.js#L6254) |
| `fn` | [`hasAnyGMStorageApi`](../youtube-playback-plox.user.js#L6264) | [6264](../youtube-playback-plox.user.js#L6264) |
| `fn` | [`waitForDurableMutations`](../youtube-playback-plox.user.js#L6277) | [6277](../youtube-playback-plox.user.js#L6277) |
| `fn` | [`canUseIDB`](../youtube-playback-plox.user.js#L6282) | [6282](../youtube-playback-plox.user.js#L6282) |
| `fn` | [`isStorageRecordError`](../youtube-playback-plox.user.js#L6289) | [6289](../youtube-playback-plox.user.js#L6289) |
| `fn` | [`isStorageProviderError`](../youtube-playback-plox.user.js#L6299) | [6299](../youtube-playback-plox.user.js#L6299) |
| `fn` | [`markIDBUnavailable`](../youtube-playback-plox.user.js#L6303) | [6303](../youtube-playback-plox.user.js#L6303) |
| `fn` | [`markIDBAvailable`](../youtube-playback-plox.user.js#L6308) | [6308](../youtube-playback-plox.user.js#L6308) |
| `fn` | [`pickNewerDurableRecord`](../youtube-playback-plox.user.js#L6319) | [6319](../youtube-playback-plox.user.js#L6319) |
| `fn` | [`getGMFallback`](../youtube-playback-plox.user.js#L6333) | [6333](../youtube-playback-plox.user.js#L6333) |
| `fn` | [`parseStoredRecord`](../youtube-playback-plox.user.js#L6362) | [6362](../youtube-playback-plox.user.js#L6362) |
| `fn` | [`setGMFallback`](../youtube-playback-plox.user.js#L6389) | [6389](../youtube-playback-plox.user.js#L6389) |
| `fn` | [`setGMFallbackNewestWins`](../youtube-playback-plox.user.js#L6403) | [6403](../youtube-playback-plox.user.js#L6403) |
| `fn` | [`deleteGMFallback`](../youtube-playback-plox.user.js#L6426) | [6426](../youtube-playback-plox.user.js#L6426) |
| `fn` | [`reconcileGMFallbackAfterIDB`](../youtube-playback-plox.user.js#L6463) | [6463](../youtube-playback-plox.user.js#L6463) |
| `fn` | [`reconcileGMFallbacksAfterIDB`](../youtube-playback-plox.user.js#L6554) | [6554](../youtube-playback-plox.user.js#L6554) |
| `fn` | [`initialize`](../youtube-playback-plox.user.js#L6638) | [6638](../youtube-playback-plox.user.js#L6638) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L6703) | [6703](../youtube-playback-plox.user.js#L6703) |
| `fn` | [`set`](../youtube-playback-plox.user.js#L6889) | [6889](../youtube-playback-plox.user.js#L6889) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L6893) | [6893](../youtube-playback-plox.user.js#L6893) |
| `fn` | [`setMany`](../youtube-playback-plox.user.js#L6978) | [6978](../youtube-playback-plox.user.js#L6978) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L6989) | [6989](../youtube-playback-plox.user.js#L6989) |
| `fn` | [`deleteGMFallbackIfUnchanged`](../youtube-playback-plox.user.js#L7141) | [7141](../youtube-playback-plox.user.js#L7141) |
| `fn` | [`del`](../youtube-playback-plox.user.js#L7164) | [7164](../youtube-playback-plox.user.js#L7164) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7167) | [7167](../youtube-playback-plox.user.js#L7167) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L7306) | [7306](../youtube-playback-plox.user.js#L7306) |
| `fn` | [`rawKeys`](../youtube-playback-plox.user.js#L7363) | [7363](../youtube-playback-plox.user.js#L7363) |
| `fn` | [`getCompleteVideoSnapshot`](../youtube-playback-plox.user.js#L7422) | [7422](../youtube-playback-plox.user.js#L7422) |
| `fn` | [`getBackendInfo`](../youtube-playback-plox.user.js#L7560) | [7560](../youtube-playback-plox.user.js#L7560) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L7585) | [7585](../youtube-playback-plox.user.js#L7585) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L7585) | [7585](../youtube-playback-plox.user.js#L7585) |
| `fn` | [`openDatabase`](../youtube-playback-plox.user.js#L7593) | [7593](../youtube-playback-plox.user.js#L7593) |
| `fn` | [`failOpen`](../youtube-playback-plox.user.js#L7599) | [7599](../youtube-playback-plox.user.js#L7599) |
| `fn` | [`runInStore`](../youtube-playback-plox.user.js#L7659) | [7659](../youtube-playback-plox.user.js#L7659) |
| `fn` | [`enqueue`](../youtube-playback-plox.user.js#L7684) | [7684](../youtube-playback-plox.user.js#L7684) |
| `fn` | [`sanitizeEntries`](../youtube-playback-plox.user.js#L7701) | [7701](../youtube-playback-plox.user.js#L7701) |
| `fn` | [`getAllEntries`](../youtube-playback-plox.user.js#L7749) | [7749](../youtube-playback-plox.user.js#L7749) |
| `fn` | [`putEntry`](../youtube-playback-plox.user.js#L7754) | [7754](../youtube-playback-plox.user.js#L7754) |
| `fn` | [`deleteEntry`](../youtube-playback-plox.user.js#L7758) | [7758](../youtube-playback-plox.user.js#L7758) |
| `fn` | [`bulkPut`](../youtube-playback-plox.user.js#L7762) | [7762](../youtube-playback-plox.user.js#L7762) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L7773) | [7773](../youtube-playback-plox.user.js#L7773) |
| `fn` | [`diagnose`](../youtube-playback-plox.user.js#L7796) | [7796](../youtube-playback-plox.user.js#L7796) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L7847) | [7847](../youtube-playback-plox.user.js#L7847) |
| `fn` | [`prefixKey`](../youtube-playback-plox.user.js#L7856) | [7856](../youtube-playback-plox.user.js#L7856) |
| `fn` | [`stripPrefix`](../youtube-playback-plox.user.js#L7857) | [7857](../youtube-playback-plox.user.js#L7857) |
| `fn` | [`hasPrefix`](../youtube-playback-plox.user.js#L7858) | [7858](../youtube-playback-plox.user.js#L7858) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L8063) | [8063](../youtube-playback-plox.user.js#L8063) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L8081) | [8081](../youtube-playback-plox.user.js#L8081) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L8107) | [8107](../youtube-playback-plox.user.js#L8107) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L8123) | [8123](../youtube-playback-plox.user.js#L8123) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L8186) | [8186](../youtube-playback-plox.user.js#L8186) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L8204) | [8204](../youtube-playback-plox.user.js#L8204) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L8212) | [8212](../youtube-playback-plox.user.js#L8212) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L8237) | [8237](../youtube-playback-plox.user.js#L8237) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L8253)
> [Line 8253](../youtube-playback-plox.user.js#L8253)

_No relevant functions or constants detected._

## [📢 Ad Detector](../youtube-playback-plox.user.js#L8273)
> [Line 8273](../youtube-playback-plox.user.js#L8273)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L8275) | [8275](../youtube-playback-plox.user.js#L8275) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L8326) | [8326](../youtube-playback-plox.user.js#L8326) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L8451)
> [Line 8451](../youtube-playback-plox.user.js#L8451)

| Type | Name | Line |
|---|---|---|
| `class` | [`VirtualScroller`](../youtube-playback-plox.user.js#L8468) | [8468](../youtube-playback-plox.user.js#L8468) |

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L8921)
> [Line 8921](../youtube-playback-plox.user.js#L8921)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L8930) | [8930](../youtube-playback-plox.user.js#L8930) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L8961) | [8961](../youtube-playback-plox.user.js#L8961) |
| `fn` | [`copyExportDataToClipboard`](../youtube-playback-plox.user.js#L9014) | [9014](../youtube-playback-plox.user.js#L9014) |
| `fn` | [`mergeImportedVideoData`](../youtube-playback-plox.user.js#L9069) | [9069](../youtube-playback-plox.user.js#L9069) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L9127) | [9127](../youtube-playback-plox.user.js#L9127) |
| `fn` | [`importCommitGuard`](../youtube-playback-plox.user.js#L9129) | [9129](../youtube-playback-plox.user.js#L9129) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L9236)
> [Line 9236](../youtube-playback-plox.user.js#L9236)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getGitHubErrorMsg`](../youtube-playback-plox.user.js#L9239) | [9239](../youtube-playback-plox.user.js#L9239) |
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L9251) | [9251](../youtube-playback-plox.user.js#L9251) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L9281) | [9281](../youtube-playback-plox.user.js#L9281) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L9282) | [9282](../youtube-playback-plox.user.js#L9282) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L9375) | [9375](../youtube-playback-plox.user.js#L9375) |
| `fn` | [`finish`](../youtube-playback-plox.user.js#L9385) | [9385](../youtube-playback-plox.user.js#L9385) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L9399) | [9399](../youtube-playback-plox.user.js#L9399) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L9585) | [9585](../youtube-playback-plox.user.js#L9585) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L9606) | [9606](../youtube-playback-plox.user.js#L9606) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L9685) | [9685](../youtube-playback-plox.user.js#L9685) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L9715) | [9715](../youtube-playback-plox.user.js#L9715) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L9748)
> [Line 9748](../youtube-playback-plox.user.js#L9748)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L9749) | [9749](../youtube-playback-plox.user.js#L9749) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L9788) | [9788](../youtube-playback-plox.user.js#L9788) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L9930)
> [Line 9930](../youtube-playback-plox.user.js#L9930)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeCompletionHistory`](../youtube-playback-plox.user.js#L9938) | [9938](../youtube-playback-plox.user.js#L9938) |
| `fn` | [`normalizeVideoData`](../youtube-playback-plox.user.js#L9966) | [9966](../youtube-playback-plox.user.js#L9966) |
| `fn` | [`safeText`](../youtube-playback-plox.user.js#L9969) | [9969](../youtube-playback-plox.user.js#L9969) |
| `fn` | [`safeNumber`](../youtube-playback-plox.user.js#L9974) | [9974](../youtube-playback-plox.user.js#L9974) |
| `fn` | [`safeNullableText`](../youtube-playback-plox.user.js#L9978) | [9978](../youtube-playback-plox.user.js#L9978) |

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L10028)
> [Line 10028](../youtube-playback-plox.user.js#L10028)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toFreeTubeFormat`](../youtube-playback-plox.user.js#L10034) | [10034](../youtube-playback-plox.user.js#L10034) |

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L10119)
> [Line 10119](../youtube-playback-plox.user.js#L10119)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseFreeTubeDB`](../youtube-playback-plox.user.js#L10125) | [10125](../youtube-playback-plox.user.js#L10125) |

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L10212)
> [Line 10212](../youtube-playback-plox.user.js#L10212)

| Type | Name | Line |
|---|---|---|
| `fn` | [`fromFreeTubeFormat`](../youtube-playback-plox.user.js#L10218) | [10218](../youtube-playback-plox.user.js#L10218) |
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L10227) | [10227](../youtube-playback-plox.user.js#L10227) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L10242)
> [Line 10242](../youtube-playback-plox.user.js#L10242)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTubeFormat`](../youtube-playback-plox.user.js#L10247) | [10247](../youtube-playback-plox.user.js#L10247) |

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L10286)
> [Line 10286](../youtube-playback-plox.user.js#L10286)

| Type | Name | Line |
|---|---|---|
| `fn` | [`importFromFreeTubeFormat`](../youtube-playback-plox.user.js#L10292) | [10292](../youtube-playback-plox.user.js#L10292) |
| `fn` | [`importCommitGuard`](../youtube-playback-plox.user.js#L10294) | [10294](../youtube-playback-plox.user.js#L10294) |

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L10384)
> [Line 10384](../youtube-playback-plox.user.js#L10384)

| Type | Name | Line |
|---|---|---|
| `fn` | [`insertCompletionEvent`](../youtube-playback-plox.user.js#L10392) | [10392](../youtube-playback-plox.user.js#L10392) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L10420) | [10420](../youtube-playback-plox.user.js#L10420) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L10431)
> [Line 10431](../youtube-playback-plox.user.js#L10431)

| Type | Name | Line |
|---|---|---|
| `fn` | [`internalSaveVideoGeneric`](../youtube-playback-plox.user.js#L10436) | [10436](../youtube-playback-plox.user.js#L10436) |
| `fn` | [`isExpectedSessionCurrent`](../youtube-playback-plox.user.js#L10446) | [10446](../youtube-playback-plox.user.js#L10446) |
| `fn` | [`isDestructiveEpochCurrent`](../youtube-playback-plox.user.js#L10452) | [10452](../youtube-playback-plox.user.js#L10452) |
| `fn` | [`commitGuard`](../youtube-playback-plox.user.js#L10455) | [10455](../youtube-playback-plox.user.js#L10455) |
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L10526) | [10526](../youtube-playback-plox.user.js#L10526) |

## [📺 Helpers](../youtube-playback-plox.user.js#L10673)
> [Line 10673](../youtube-playback-plox.user.js#L10673)

_No relevant functions or constants detected._

## [📺 Gets saved video data](../youtube-playback-plox.user.js#L10676)
> [Line 10676](../youtube-playback-plox.user.js#L10676)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSavedVideoData`](../youtube-playback-plox.user.js#L10685) | [10685](../youtube-playback-plox.user.js#L10685) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L10733)
> [Line 10733](../youtube-playback-plox.user.js#L10733)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L10769) | [10769](../youtube-playback-plox.user.js#L10769) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L10812)
> [Line 10812](../youtube-playback-plox.user.js#L10812)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTypeFromPageManager`](../youtube-playback-plox.user.js#L10835) | [10835](../youtube-playback-plox.user.js#L10835) |
| `fn` | [`getTypeFromYtApp`](../youtube-playback-plox.user.js#L10875) | [10875](../youtube-playback-plox.user.js#L10875) |
| `fn` | [`detectFromURL`](../youtube-playback-plox.user.js#L10901) | [10901](../youtube-playback-plox.user.js#L10901) |
| `fn` | [`cachePageType`](../youtube-playback-plox.user.js#L10973) | [10973](../youtube-playback-plox.user.js#L10973) |
| `fn` | [`getYouTubePageType`](../youtube-playback-plox.user.js#L10992) | [10992](../youtube-playback-plox.user.js#L10992) |

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L11017)
> [Line 11017](../youtube-playback-plox.user.js#L11017)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseYouTubeResource`](../youtube-playback-plox.user.js#L11077) | [11077](../youtube-playback-plox.user.js#L11077) |
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L11114) | [11114](../youtube-playback-plox.user.js#L11114) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L11223)
> [Line 11223](../youtube-playback-plox.user.js#L11223)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubeVideoIdFromUrl`](../youtube-playback-plox.user.js#L11233) | [11233](../youtube-playback-plox.user.js#L11233) |

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L11245)
> [Line 11245](../youtube-playback-plox.user.js#L11245)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getYouTubeVideoContextFromUrl`](../youtube-playback-plox.user.js#L11257) | [11257](../youtube-playback-plox.user.js#L11257) |

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L11273)
> [Line 11273](../youtube-playback-plox.user.js#L11273)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubePlaylistIdFromUrl`](../youtube-playback-plox.user.js#L11281) | [11281](../youtube-playback-plox.user.js#L11281) |
| `fn` | [`classifyPlaylist`](../youtube-playback-plox.user.js#L11305) | [11305](../youtube-playback-plox.user.js#L11305) |

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L11318)
> [Line 11318](../youtube-playback-plox.user.js#L11318)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L11339) | [11339](../youtube-playback-plox.user.js#L11339) |
| `fn` | [`extractYtInitialData`](../youtube-playback-plox.user.js#L11359) | [11359](../youtube-playback-plox.user.js#L11359) |
| `fn` | [`getPlaylistName`](../youtube-playback-plox.user.js#L11465) | [11465](../youtube-playback-plox.user.js#L11465) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L11481) | [11481](../youtube-playback-plox.user.js#L11481) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L11574) | [11574](../youtube-playback-plox.user.js#L11574) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L11601)
> [Line 11601](../youtube-playback-plox.user.js#L11601)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L11627) | [11627](../youtube-playback-plox.user.js#L11627) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L11637)
> [Line 11637](../youtube-playback-plox.user.js#L11637)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTimeDisplayMessage`](../youtube-playback-plox.user.js#L11645) | [11645](../youtube-playback-plox.user.js#L11645) |
| `fn` | [`hasTimeDisplayMessage`](../youtube-playback-plox.user.js#L11654) | [11654](../youtube-playback-plox.user.js#L11654) |
| `fn` | [`showDisplayMessage`](../youtube-playback-plox.user.js#L11664) | [11664](../youtube-playback-plox.user.js#L11664) |
| `fn` | [`restoreDisplayButtons`](../youtube-playback-plox.user.js#L11682) | [11682](../youtube-playback-plox.user.js#L11682) |
| `fn` | [`createSplitButtonGroup`](../youtube-playback-plox.user.js#L11713) | [11713](../youtube-playback-plox.user.js#L11713) |
| `fn` | [`getDisplayContextVideo`](../youtube-playback-plox.user.js#L11738) | [11738](../youtube-playback-plox.user.js#L11738) |
| `fn` | [`getDisplayContextPlayer`](../youtube-playback-plox.user.js#L11753) | [11753](../youtube-playback-plox.user.js#L11753) |
| `fn` | [`getPlaybackNotificationKind`](../youtube-playback-plox.user.js#L11768) | [11768](../youtube-playback-plox.user.js#L11768) |
| `fn` | [`buildPlaybackNotificationMessage`](../youtube-playback-plox.user.js#L11785) | [11785](../youtube-playback-plox.user.js#L11785) |
| `fn` | [`setupManualSaveButton`](../youtube-playback-plox.user.js#L11824) | [11824](../youtube-playback-plox.user.js#L11824) |
| `fn` | [`getActiveShortsControlsContainer`](../youtube-playback-plox.user.js#L11884) | [11884](../youtube-playback-plox.user.js#L11884) |
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L11929) | [11929](../youtube-playback-plox.user.js#L11929) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L11929) | [11929](../youtube-playback-plox.user.js#L11929) |
| `fn` | [`getDisplayDisposables`](../youtube-playback-plox.user.js#L11951) | [11951](../youtube-playback-plox.user.js#L11951) |
| `fn` | [`disposeDisplayNode`](../youtube-playback-plox.user.js#L11964) | [11964](../youtube-playback-plox.user.js#L11964) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L11971) | [11971](../youtube-playback-plox.user.js#L11971) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L11981) | [11981](../youtube-playback-plox.user.js#L11981) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L11989) | [11989](../youtube-playback-plox.user.js#L11989) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L11997) | [11997](../youtube-playback-plox.user.js#L11997) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L12020) | [12020](../youtube-playback-plox.user.js#L12020) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L12032) | [12032](../youtube-playback-plox.user.js#L12032) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L12035) | [12035](../youtube-playback-plox.user.js#L12035) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L12045) | [12045](../youtube-playback-plox.user.js#L12045) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L12050) | [12050](../youtube-playback-plox.user.js#L12050) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L12073) | [12073](../youtube-playback-plox.user.js#L12073) |
| `fn` | [`scheduleShortsFrame`](../youtube-playback-plox.user.js#L12097) | [12097](../youtube-playback-plox.user.js#L12097) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L12106) | [12106](../youtube-playback-plox.user.js#L12106) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L12115) | [12115](../youtube-playback-plox.user.js#L12115) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L12165) | [12165](../youtube-playback-plox.user.js#L12165) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L12228) | [12228](../youtube-playback-plox.user.js#L12228) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L12284) | [12284](../youtube-playback-plox.user.js#L12284) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L12355) | [12355](../youtube-playback-plox.user.js#L12355) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L12381) | [12381](../youtube-playback-plox.user.js#L12381) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L12395) | [12395](../youtube-playback-plox.user.js#L12395) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L12399) | [12399](../youtube-playback-plox.user.js#L12399) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L12406) | [12406](../youtube-playback-plox.user.js#L12406) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L12424) | [12424](../youtube-playback-plox.user.js#L12424) |
| `fn` | [`startShortsPanelObserver`](../youtube-playback-plox.user.js#L12438) | [12438](../youtube-playback-plox.user.js#L12438) |
| `fn` | [`stopShortsPanelObserver`](../youtube-playback-plox.user.js#L12486) | [12486](../youtube-playback-plox.user.js#L12486) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L12513)
> [Line 12513](../youtube-playback-plox.user.js#L12513)

| Type | Name | Line |
|---|---|---|
| `fn` | [`disposeToastRuntime`](../youtube-playback-plox.user.js#L12525) | [12525](../youtube-playback-plox.user.js#L12525) |
| `fn` | [`registerToastRuntime`](../youtube-playback-plox.user.js#L12553) | [12553](../youtube-playback-plox.user.js#L12553) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12554) | [12554](../youtube-playback-plox.user.js#L12554) |
| `fn` | [`createToastContainer`](../youtube-playback-plox.user.js#L12570) | [12570](../youtube-playback-plox.user.js#L12570) |
| `fn` | [`fadeAndRemoveToast`](../youtube-playback-plox.user.js#L12596) | [12596](../youtube-playback-plox.user.js#L12596) |
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L12617) | [12617](../youtube-playback-plox.user.js#L12617) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12641) | [12641](../youtube-playback-plox.user.js#L12641) |
| `fn` | [`showFloatingToast`](../youtube-playback-plox.user.js#L12665) | [12665](../youtube-playback-plox.user.js#L12665) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L12808)
> [Line 12808](../youtube-playback-plox.user.js#L12808)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L12811) | [12811](../youtube-playback-plox.user.js#L12811) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L12855)
> [Line 12855](../youtube-playback-plox.user.js#L12855)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L12895) | [12895](../youtube-playback-plox.user.js#L12895) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L12901) | [12901](../youtube-playback-plox.user.js#L12901) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L12909) | [12909](../youtube-playback-plox.user.js#L12909) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L12955) | [12955](../youtube-playback-plox.user.js#L12955) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L12959) | [12959](../youtube-playback-plox.user.js#L12959) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L12962) | [12962](../youtube-playback-plox.user.js#L12962) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L12978) | [12978](../youtube-playback-plox.user.js#L12978) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L12987) | [12987](../youtube-playback-plox.user.js#L12987) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L13017) | [13017](../youtube-playback-plox.user.js#L13017) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L13031) | [13031](../youtube-playback-plox.user.js#L13031) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L13035) | [13035](../youtube-playback-plox.user.js#L13035) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L13173)
> [Line 13173](../youtube-playback-plox.user.js#L13173)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSettingsUI`](../youtube-playback-plox.user.js#L13176) | [13176](../youtube-playback-plox.user.js#L13176) |
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L13207) | [13207](../youtube-playback-plox.user.js#L13207) |
| `fn` | [`onSettingsKeyDown`](../youtube-playback-plox.user.js#L13229) | [13229](../youtube-playback-plox.user.js#L13229) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L13324) | [13324](../youtube-playback-plox.user.js#L13324) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L13411) | [13411](../youtube-playback-plox.user.js#L13411) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L13412) | [13412](../youtube-playback-plox.user.js#L13412) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L13501) | [13501](../youtube-playback-plox.user.js#L13501) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L13502) | [13502](../youtube-playback-plox.user.js#L13502) |
| `fn` | [`getInnerTubeClientVersion`](../youtube-playback-plox.user.js#L13534) | [13534](../youtube-playback-plox.user.js#L13534) |
| `fn` | [`idbDiag`](../youtube-playback-plox.user.js#L13563) | [13563](../youtube-playback-plox.user.js#L13563) |
| `fn` | [`safeModeActive`](../youtube-playback-plox.user.js#L13576) | [13576](../youtube-playback-plox.user.js#L13576) |
| `fn` | [`activeSessions`](../youtube-playback-plox.user.js#L13577) | [13577](../youtube-playback-plox.user.js#L13577) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L13690)
> [Line 13690](../youtube-playback-plox.user.js#L13690)

| Type | Name | Line |
|---|---|---|
| `fn` | [`notifySeekOrProgress`](../youtube-playback-plox.user.js#L13692) | [13692](../youtube-playback-plox.user.js#L13692) |

## [🎵 Video Selection](../youtube-playback-plox.user.js#L13748)
> [Line 13748](../youtube-playback-plox.user.js#L13748)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleManagementMode`](../youtube-playback-plox.user.js#L13763) | [13763](../youtube-playback-plox.user.js#L13763) |
| `fn` | [`updateFooterButtons`](../youtube-playback-plox.user.js#L13776) | [13776](../youtube-playback-plox.user.js#L13776) |
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L13838) | [13838](../youtube-playback-plox.user.js#L13838) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L13845) | [13845](../youtube-playback-plox.user.js#L13845) |
| `fn` | [`createFooterActionMenu`](../youtube-playback-plox.user.js#L13903) | [13903](../youtube-playback-plox.user.js#L13903) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L13933) | [13933](../youtube-playback-plox.user.js#L13933) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L13937) | [13937](../youtube-playback-plox.user.js#L13937) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L13946) | [13946](../youtube-playback-plox.user.js#L13946) |
| `fn` | [`closeImportMenu`](../youtube-playback-plox.user.js#L14035) | [14035](../youtube-playback-plox.user.js#L14035) |
| `fn` | [`onImportOutsideClick`](../youtube-playback-plox.user.js#L14044) | [14044](../youtube-playback-plox.user.js#L14044) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L14413) | [14413](../youtube-playback-plox.user.js#L14413) |
| `fn` | [`updateManagementFooterState`](../youtube-playback-plox.user.js#L14503) | [14503](../youtube-playback-plox.user.js#L14503) |
| `fn` | [`togglePlaylistCreationMode`](../youtube-playback-plox.user.js#L14533) | [14533](../youtube-playback-plox.user.js#L14533) |
| `fn` | [`copyToClipboard`](../youtube-playback-plox.user.js#L14550) | [14550](../youtube-playback-plox.user.js#L14550) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L14560) | [14560](../youtube-playback-plox.user.js#L14560) |
| `fn` | [`toggleVideoSelection`](../youtube-playback-plox.user.js#L14623) | [14623](../youtube-playback-plox.user.js#L14623) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L14655)
> [Line 14655](../youtube-playback-plox.user.js#L14655)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L14661) | [14661](../youtube-playback-plox.user.js#L14661) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L14661) | [14661](../youtube-playback-plox.user.js#L14661) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L14662) | [14662](../youtube-playback-plox.user.js#L14662) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L14671) | [14671](../youtube-playback-plox.user.js#L14671) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L14676) | [14676](../youtube-playback-plox.user.js#L14676) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L14687) | [14687](../youtube-playback-plox.user.js#L14687) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L14704) | [14704](../youtube-playback-plox.user.js#L14704) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L14738) | [14738](../youtube-playback-plox.user.js#L14738) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L14763) | [14763](../youtube-playback-plox.user.js#L14763) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L14765) | [14765](../youtube-playback-plox.user.js#L14765) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L14784) | [14784](../youtube-playback-plox.user.js#L14784) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L14784) | [14784](../youtube-playback-plox.user.js#L14784) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L14786) | [14786](../youtube-playback-plox.user.js#L14786) |
| `fn` | [`shouldDropVideoEvent`](../youtube-playback-plox.user.js#L14798) | [14798](../youtube-playback-plox.user.js#L14798) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L14807) | [14807](../youtube-playback-plox.user.js#L14807) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L14807) | [14807](../youtube-playback-plox.user.js#L14807) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L14818) | [14818](../youtube-playback-plox.user.js#L14818) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L14823) | [14823](../youtube-playback-plox.user.js#L14823) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L14828) | [14828](../youtube-playback-plox.user.js#L14828) |
| `fn` | [`note`](../youtube-playback-plox.user.js#L14848) | [14848](../youtube-playback-plox.user.js#L14848) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L14852) | [14852](../youtube-playback-plox.user.js#L14852) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L14870) | [14870](../youtube-playback-plox.user.js#L14870) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L14870) | [14870](../youtube-playback-plox.user.js#L14870) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L14872) | [14872](../youtube-playback-plox.user.js#L14872) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L14880) | [14880](../youtube-playback-plox.user.js#L14880) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L14930)
> [Line 14930](../youtube-playback-plox.user.js#L14930)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L14935) | [14935](../youtube-playback-plox.user.js#L14935) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L14935) | [14935](../youtube-playback-plox.user.js#L14935) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L14957) | [14957](../youtube-playback-plox.user.js#L14957) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L14977) | [14977](../youtube-playback-plox.user.js#L14977) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L14993) | [14993](../youtube-playback-plox.user.js#L14993) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L15030) | [15030](../youtube-playback-plox.user.js#L15030) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L15065) | [15065](../youtube-playback-plox.user.js#L15065) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L15066) | [15066](../youtube-playback-plox.user.js#L15066) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L15097) | [15097](../youtube-playback-plox.user.js#L15097) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L15153) | [15153](../youtube-playback-plox.user.js#L15153) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L15221) | [15221](../youtube-playback-plox.user.js#L15221) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L15231) | [15231](../youtube-playback-plox.user.js#L15231) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L15242) | [15242](../youtube-playback-plox.user.js#L15242) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L15274) | [15274](../youtube-playback-plox.user.js#L15274) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L15314) | [15314](../youtube-playback-plox.user.js#L15314) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L15325) | [15325](../youtube-playback-plox.user.js#L15325) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L15349) | [15349](../youtube-playback-plox.user.js#L15349) |
| `fn` | [`clearPlayerCache`](../youtube-playback-plox.user.js#L15475) | [15475](../youtube-playback-plox.user.js#L15475) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L15697) | [15697](../youtube-playback-plox.user.js#L15697) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L15741) | [15741](../youtube-playback-plox.user.js#L15741) |

## [Processing Functions](../youtube-playback-plox.user.js#L15768)
> [Line 15768](../youtube-playback-plox.user.js#L15768)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L15794) | [15794](../youtube-playback-plox.user.js#L15794) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L15813) | [15813](../youtube-playback-plox.user.js#L15813) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L15823) | [15823](../youtube-playback-plox.user.js#L15823) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L15823) | [15823](../youtube-playback-plox.user.js#L15823) |
| `fn` | [`clearPendingRecovery`](../youtube-playback-plox.user.js#L15843) | [15843](../youtube-playback-plox.user.js#L15843) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L15848) | [15848](../youtube-playback-plox.user.js#L15848) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L15853) | [15853](../youtube-playback-plox.user.js#L15853) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L15860) | [15860](../youtube-playback-plox.user.js#L15860) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L15866) | [15866](../youtube-playback-plox.user.js#L15866) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L15884) | [15884](../youtube-playback-plox.user.js#L15884) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L15961) | [15961](../youtube-playback-plox.user.js#L15961) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L16025) | [16025](../youtube-playback-plox.user.js#L16025) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L16060) | [16060](../youtube-playback-plox.user.js#L16060) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L16090) | [16090](../youtube-playback-plox.user.js#L16090) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L16101) | [16101](../youtube-playback-plox.user.js#L16101) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L16113) | [16113](../youtube-playback-plox.user.js#L16113) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L16149) | [16149](../youtube-playback-plox.user.js#L16149) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L16228) | [16228](../youtube-playback-plox.user.js#L16228) |
| `fn` | [`handleSeekingForGradient`](../youtube-playback-plox.user.js#L16257) | [16257](../youtube-playback-plox.user.js#L16257) |
| `fn` | [`handleSeekedForGradient`](../youtube-playback-plox.user.js#L16267) | [16267](../youtube-playback-plox.user.js#L16267) |
| `fn` | [`canValidateStandalone`](../youtube-playback-plox.user.js#L16390) | [16390](../youtube-playback-plox.user.js#L16390) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L16415) | [16415](../youtube-playback-plox.user.js#L16415) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L16484) | [16484](../youtube-playback-plox.user.js#L16484) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L16687) | [16687](../youtube-playback-plox.user.js#L16687) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L16800) | [16800](../youtube-playback-plox.user.js#L16800) |
| `fn` | [`processMediaVideo`](../youtube-playback-plox.user.js#L16915) | [16915](../youtube-playback-plox.user.js#L16915) |

## [PlaybackController](../youtube-playback-plox.user.js#L16966)
> [Line 16966](../youtube-playback-plox.user.js#L16966)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L17014) | [17014](../youtube-playback-plox.user.js#L17014) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L17030) | [17030](../youtube-playback-plox.user.js#L17030) |
| `fn` | [`removeMetadataListener`](../youtube-playback-plox.user.js#L17054) | [17054](../youtube-playback-plox.user.js#L17054) |
| `fn` | [`removeCanPlayListener`](../youtube-playback-plox.user.js#L17055) | [17055](../youtube-playback-plox.user.js#L17055) |
| `fn` | [`removeAbortListener`](../youtube-playback-plox.user.js#L17056) | [17056](../youtube-playback-plox.user.js#L17056) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L17057) | [17057](../youtube-playback-plox.user.js#L17057) |
| `fn` | [`rejectAsStale`](../youtube-playback-plox.user.js#L17063) | [17063](../youtube-playback-plox.user.js#L17063) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L17067) | [17067](../youtube-playback-plox.user.js#L17067) |
| `fn` | [`onAbort`](../youtube-playback-plox.user.js#L17076) | [17076](../youtube-playback-plox.user.js#L17076) |
| `fn` | [`restoreThrottleMarker`](../youtube-playback-plox.user.js#L17223) | [17223](../youtube-playback-plox.user.js#L17223) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L17315) | [17315](../youtube-playback-plox.user.js#L17315) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L17461)
> [Line 17461](../youtube-playback-plox.user.js#L17461)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getInnerTubeConfig`](../youtube-playback-plox.user.js#L17498) | [17498](../youtube-playback-plox.user.js#L17498) |
| `fn` | [`fetchInnerTubeJson`](../youtube-playback-plox.user.js#L17513) | [17513](../youtube-playback-plox.user.js#L17513) |
| `fn` | [`fetchShortsViews`](../youtube-playback-plox.user.js#L17547) | [17547](../youtube-playback-plox.user.js#L17547) |
| `fn` | [`fetchPlaylistTitle`](../youtube-playback-plox.user.js#L17560) | [17560](../youtube-playback-plox.user.js#L17560) |
| `fn` | [`getCascadedVideoInfo`](../youtube-playback-plox.user.js#L17570) | [17570](../youtube-playback-plox.user.js#L17570) |
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L17615) | [17615](../youtube-playback-plox.user.js#L17615) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L18018)
> [Line 18018](../youtube-playback-plox.user.js#L18018)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createCustomDropdown`](../youtube-playback-plox.user.js#L18032) | [18032](../youtube-playback-plox.user.js#L18032) |
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L18043) | [18043](../youtube-playback-plox.user.js#L18043) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L18119) | [18119](../youtube-playback-plox.user.js#L18119) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L18135) | [18135](../youtube-playback-plox.user.js#L18135) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L18143) | [18143](../youtube-playback-plox.user.js#L18143) |
| `fn` | [`createSortSelector`](../youtube-playback-plox.user.js#L18160) | [18160](../youtube-playback-plox.user.js#L18160) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L18163) | [18163](../youtube-playback-plox.user.js#L18163) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L18216)
> [Line 18216](../youtube-playback-plox.user.js#L18216)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFilterSelector`](../youtube-playback-plox.user.js#L18225) | [18225](../youtube-playback-plox.user.js#L18225) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L18228) | [18228](../youtube-playback-plox.user.js#L18228) |
| `fn` | [`createRangeFilter`](../youtube-playback-plox.user.js#L18272) | [18272](../youtube-playback-plox.user.js#L18272) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L18275) | [18275](../youtube-playback-plox.user.js#L18275) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L18281) | [18281](../youtube-playback-plox.user.js#L18281) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L18289) | [18289](../youtube-playback-plox.user.js#L18289) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L18304) | [18304](../youtube-playback-plox.user.js#L18304) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L18424) | [18424](../youtube-playback-plox.user.js#L18424) |
| `fn` | [`createSearchInput`](../youtube-playback-plox.user.js#L18479) | [18479](../youtube-playback-plox.user.js#L18479) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L18504)
> [Line 18504](../youtube-playback-plox.user.js#L18504)

| Type | Name | Line |
|---|---|---|
| `fn` | [`acquireBodyOverflow`](../youtube-playback-plox.user.js#L18532) | [18532](../youtube-playback-plox.user.js#L18532) |
| `fn` | [`releaseBodyOverflow`](../youtube-playback-plox.user.js#L18546) | [18546](../youtube-playback-plox.user.js#L18546) |
| `fn` | [`getVirtualScrollerVideoItems`](../youtube-playback-plox.user.js#L18616) | [18616](../youtube-playback-plox.user.js#L18616) |
| `fn` | [`batchLoadStorageData`](../youtube-playback-plox.user.js#L18645) | [18645](../youtube-playback-plox.user.js#L18645) |

## [📁 Update Video List](../youtube-playback-plox.user.js#L18686)
> [Line 18686](../youtube-playback-plox.user.js#L18686)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSortValue`](../youtube-playback-plox.user.js#L18693) | [18693](../youtube-playback-plox.user.js#L18693) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L18705) | [18705](../youtube-playback-plox.user.js#L18705) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L18709) | [18709](../youtube-playback-plox.user.js#L18709) |
| `fn` | [`showLoadingState`](../youtube-playback-plox.user.js#L18722) | [18722](../youtube-playback-plox.user.js#L18722) |
| `fn` | [`loadVideoItems`](../youtube-playback-plox.user.js#L18784) | [18784](../youtube-playback-plox.user.js#L18784) |
| `fn` | [`resolvePlaylistTitles`](../youtube-playback-plox.user.js#L18808) | [18808](../youtube-playback-plox.user.js#L18808) |
| `fn` | [`filterItems`](../youtube-playback-plox.user.js#L18840) | [18840](../youtube-playback-plox.user.js#L18840) |
| `fn` | [`buildVirtualItems`](../youtube-playback-plox.user.js#L18884) | [18884](../youtube-playback-plox.user.js#L18884) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L18897) | [18897](../youtube-playback-plox.user.js#L18897) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L18918) | [18918](../youtube-playback-plox.user.js#L18918) |
| `fn` | [`showEmptyState`](../youtube-playback-plox.user.js#L18948) | [18948](../youtube-playback-plox.user.js#L18948) |
| `fn` | [`showListLoadErrorState`](../youtube-playback-plox.user.js#L18980) | [18980](../youtube-playback-plox.user.js#L18980) |
| `fn` | [`updateVirtualScroller`](../youtube-playback-plox.user.js#L18997) | [18997](../youtube-playback-plox.user.js#L18997) |
| `fn` | [`initVirtualScroller`](../youtube-playback-plox.user.js#L19026) | [19026](../youtube-playback-plox.user.js#L19026) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L19061) | [19061](../youtube-playback-plox.user.js#L19061) |
| `fn` | [`connectResizeObserver`](../youtube-playback-plox.user.js#L19113) | [19113](../youtube-playback-plox.user.js#L19113) |
| `fn` | [`updateVideoList`](../youtube-playback-plox.user.js#L19151) | [19151](../youtube-playback-plox.user.js#L19151) |
| `fn` | [`isCurrentRender`](../youtube-playback-plox.user.js#L19156) | [19156](../youtube-playback-plox.user.js#L19156) |
| `fn` | [`requestVideoListUpdate`](../youtube-playback-plox.user.js#L19230) | [19230](../youtube-playback-plox.user.js#L19230) |
| `fn` | [`closeModalVideos`](../youtube-playback-plox.user.js#L19241) | [19241](../youtube-playback-plox.user.js#L19241) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L19334) | [19334](../youtube-playback-plox.user.js#L19334) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L19351) | [19351](../youtube-playback-plox.user.js#L19351) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L19379) | [19379](../youtube-playback-plox.user.js#L19379) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L19504)
> [Line 19504](../youtube-playback-plox.user.js#L19504)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L19507) | [19507](../youtube-playback-plox.user.js#L19507) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L19522) | [19522](../youtube-playback-plox.user.js#L19522) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L19533)
> [Line 19533](../youtube-playback-plox.user.js#L19533)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSavedVideosList`](../youtube-playback-plox.user.js#L19536) | [19536](../youtube-playback-plox.user.js#L19536) |
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L19674) | [19674](../youtube-playback-plox.user.js#L19674) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L19684) | [19684](../youtube-playback-plox.user.js#L19684) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L19754) | [19754](../youtube-playback-plox.user.js#L19754) |
| `fn` | [`onSavedVideosKeyDown`](../youtube-playback-plox.user.js#L19763) | [19763](../youtube-playback-plox.user.js#L19763) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L19806)
> [Line 19806](../youtube-playback-plox.user.js#L19806)

| Type | Name | Line |
|---|---|---|
| `fn` | [`generatePlaylistColor`](../youtube-playback-plox.user.js#L19815) | [19815](../youtube-playback-plox.user.js#L19815) |
| `fn` | [`generatePlaylistBorderColor`](../youtube-playback-plox.user.js#L19844) | [19844](../youtube-playback-plox.user.js#L19844) |
| `fn` | [`handleForceTimeAction`](../youtube-playback-plox.user.js#L19866) | [19866](../youtube-playback-plox.user.js#L19866) |
| `fn` | [`handleUnlinkPlaylistAction`](../youtube-playback-plox.user.js#L19932) | [19932](../youtube-playback-plox.user.js#L19932) |
| `fn` | [`handleDeleteEntryAction`](../youtube-playback-plox.user.js#L19954) | [19954](../youtube-playback-plox.user.js#L19954) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L19987) | [19987](../youtube-playback-plox.user.js#L19987) |
| `fn` | [`handleToggleProtectionAction`](../youtube-playback-plox.user.js#L20016) | [20016](../youtube-playback-plox.user.js#L20016) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L20057) | [20057](../youtube-playback-plox.user.js#L20057) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L20105) | [20105](../youtube-playback-plox.user.js#L20105) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L20111) | [20111](../youtube-playback-plox.user.js#L20111) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L20130) | [20130](../youtube-playback-plox.user.js#L20130) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L20164) | [20164](../youtube-playback-plox.user.js#L20164) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L20216) | [20216](../youtube-playback-plox.user.js#L20216) |
| `fn` | [`generateVideoObsidianMarkdown`](../youtube-playback-plox.user.js#L20265) | [20265](../youtube-playback-plox.user.js#L20265) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L20298) | [20298](../youtube-playback-plox.user.js#L20298) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L20304) | [20304](../youtube-playback-plox.user.js#L20304) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L20320) | [20320](../youtube-playback-plox.user.js#L20320) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L20330) | [20330](../youtube-playback-plox.user.js#L20330) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L20338) | [20338](../youtube-playback-plox.user.js#L20338) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L20343) | [20343](../youtube-playback-plox.user.js#L20343) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L20350) | [20350](../youtube-playback-plox.user.js#L20350) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L20353) | [20353](../youtube-playback-plox.user.js#L20353) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L20357) | [20357](../youtube-playback-plox.user.js#L20357) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L20403) | [20403](../youtube-playback-plox.user.js#L20403) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L20403) | [20403](../youtube-playback-plox.user.js#L20403) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L20417) | [20417](../youtube-playback-plox.user.js#L20417) |
| `fn` | [`createModeSelector`](../youtube-playback-plox.user.js#L20691) | [20691](../youtube-playback-plox.user.js#L20691) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L20692) | [20692](../youtube-playback-plox.user.js#L20692) |
| `fn` | [`createViewModeSelector`](../youtube-playback-plox.user.js#L20724) | [20724](../youtube-playback-plox.user.js#L20724) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L20741) | [20741](../youtube-playback-plox.user.js#L20741) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L20742) | [20742](../youtube-playback-plox.user.js#L20742) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L20758) | [20758](../youtube-playback-plox.user.js#L20758) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L20759) | [20759](../youtube-playback-plox.user.js#L20759) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L20808) | [20808](../youtube-playback-plox.user.js#L20808) |
| `fn` | [`createOverflowToggle`](../youtube-playback-plox.user.js#L20839) | [20839](../youtube-playback-plox.user.js#L20839) |
| `fn` | [`makeToolbarGroup`](../youtube-playback-plox.user.js#L20878) | [20878](../youtube-playback-plox.user.js#L20878) |
| `fn` | [`makeDisplayToggle`](../youtube-playback-plox.user.js#L20900) | [20900](../youtube-playback-plox.user.js#L20900) |
| `fn` | [`mountSavedVideosModalActionsToolbar`](../youtube-playback-plox.user.js#L20934) | [20934](../youtube-playback-plox.user.js#L20934) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L20957) | [20957](../youtube-playback-plox.user.js#L20957) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L20971) | [20971](../youtube-playback-plox.user.js#L20971) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L21293) | [21293](../youtube-playback-plox.user.js#L21293) |
| `fn` | [`applyThumbnailToImage`](../youtube-playback-plox.user.js#L21349) | [21349](../youtube-playback-plox.user.js#L21349) |
| `fn` | [`removeLoadListener`](../youtube-playback-plox.user.js#L21358) | [21358](../youtube-playback-plox.user.js#L21358) |
| `fn` | [`removeErrorListener`](../youtube-playback-plox.user.js#L21359) | [21359](../youtube-playback-plox.user.js#L21359) |
| `fn` | [`finish`](../youtube-playback-plox.user.js#L21365) | [21365](../youtube-playback-plox.user.js#L21365) |
| `fn` | [`loadCandidate`](../youtube-playback-plox.user.js#L21380) | [21380](../youtube-playback-plox.user.js#L21380) |
| `fn` | [`createVideoGridRow`](../youtube-playback-plox.user.js#L21415) | [21415](../youtube-playback-plox.user.js#L21415) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L21432) | [21432](../youtube-playback-plox.user.js#L21432) |
| `fn` | [`scheduleHeightUpdate`](../youtube-playback-plox.user.js#L21481) | [21481](../youtube-playback-plox.user.js#L21481) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L21528) | [21528](../youtube-playback-plox.user.js#L21528) |
| `fn` | [`createVideoEntry`](../youtube-playback-plox.user.js#L21542) | [21542](../youtube-playback-plox.user.js#L21542) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L21776) | [21776](../youtube-playback-plox.user.js#L21776) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L21799) | [21799](../youtube-playback-plox.user.js#L21799) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L21800) | [21800](../youtube-playback-plox.user.js#L21800) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L21858)
> [Line 21858](../youtube-playback-plox.user.js#L21858)

| Type | Name | Line |
|---|---|---|
| `fn` | [`restoreDeletedRecordIfUnchanged`](../youtube-playback-plox.user.js#L21877) | [21877](../youtube-playback-plox.user.js#L21877) |
| `fn` | [`canCommit`](../youtube-playback-plox.user.js#L21878) | [21878](../youtube-playback-plox.user.js#L21878) |
| `fn` | [`clearAllData`](../youtube-playback-plox.user.js#L21907) | [21907](../youtube-playback-plox.user.js#L21907) |
| `fn` | [`clearCommitGuard`](../youtube-playback-plox.user.js#L21922) | [21922](../youtube-playback-plox.user.js#L21922) |
| `fn` | [`performClearAllData`](../youtube-playback-plox.user.js#L21942) | [21942](../youtube-playback-plox.user.js#L21942) |
| `fn` | [`undoClearAll`](../youtube-playback-plox.user.js#L22130) | [22130](../youtube-playback-plox.user.js#L22130) |
| `fn` | [`undoCommitGuard`](../youtube-playback-plox.user.js#L22133) | [22133](../youtube-playback-plox.user.js#L22133) |
| `fn` | [`performUndoClearAll`](../youtube-playback-plox.user.js#L22146) | [22146](../youtube-playback-plox.user.js#L22146) |

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L22214)
> [Line 22214](../youtube-playback-plox.user.js#L22214)

| Type | Name | Line |
|---|---|---|
| `fn` | [`registerOwnedMenuCommand`](../youtube-playback-plox.user.js#L22223) | [22223](../youtube-playback-plox.user.js#L22223) |
| `fn` | [`unregisterOwnedMenuCommands`](../youtube-playback-plox.user.js#L22233) | [22233](../youtube-playback-plox.user.js#L22233) |
| `fn` | [`registerMenuCommands`](../youtube-playback-plox.user.js#L22246) | [22246](../youtube-playback-plox.user.js#L22246) |

## [🔄 Data Migration](../youtube-playback-plox.user.js#L22272)
> [Line 22272](../youtube-playback-plox.user.js#L22272)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeVideoType`](../youtube-playback-plox.user.js#L22281) | [22281](../youtube-playback-plox.user.js#L22281) |
| `fn` | [`cleanupNonVideoData`](../youtube-playback-plox.user.js#L22303) | [22303](../youtube-playback-plox.user.js#L22303) |
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L22330) | [22330](../youtube-playback-plox.user.js#L22330) |
| `fn` | [`runAutoCleanup`](../youtube-playback-plox.user.js#L22551) | [22551](../youtube-playback-plox.user.js#L22551) |
| `fn` | [`cleanupCommitGuard`](../youtube-playback-plox.user.js#L22571) | [22571](../youtube-playback-plox.user.js#L22571) |

## [🚀 Init](../youtube-playback-plox.user.js#L22775)
> [Line 22775](../youtube-playback-plox.user.js#L22775)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L22788) | [22788](../youtube-playback-plox.user.js#L22788) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L22810) | [22810](../youtube-playback-plox.user.js#L22810) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L23167) | [23167](../youtube-playback-plox.user.js#L23167) |

