# Userscript Structure
> Auto-generated on 2026-10-10 · version 0.0.13
> **DO NOT EDIT MANUALLY** - regenerate with `node ./scripts/generate-structure.mjs`

---

## Sections index

1. [🔍 Logger System](#logger-system) - [line 141](../youtube-playback-plox.user.js#L141)
2. [🛡️ Initialization Guard (SPA Safety)](#initialization-guard-spa-safety) - [line 225](../youtube-playback-plox.user.js#L225)
3. [📦 Config](#config) - [line 368](../youtube-playback-plox.user.js#L368)
4. [📊 Global Constants](#global-constants) - [line 497](../youtube-playback-plox.user.js#L497)
5. [📊 Global Variables](#global-variables) - [line 547](../youtube-playback-plox.user.js#L547)
6. [🌐 Translations](#translations) - [line 585](../youtube-playback-plox.user.js#L585)
7. [🔧 Utils](#utils) - [line 1048](../youtube-playback-plox.user.js#L1048)
8. [🔧 Sanitize HTML](#sanitize-html) - [line 1051](../youtube-playback-plox.user.js#L1051)
9. [🔧 Is Visibly Displayed](#is-visibly-displayed) - [line 1137](../youtube-playback-plox.user.js#L1137)
10. [🔧 queryFirst](#queryfirst) - [line 1181](../youtube-playback-plox.user.js#L1181)
11. [🔧 Format Time](#format-time) - [line 1199](../youtube-playback-plox.user.js#L1199)
12. [🔧 parseTimeToSeconds](#parsetimetoseconds) - [line 1243](../youtube-playback-plox.user.js#L1243)
13. [🔧 normalizeSeconds](#normalizeseconds) - [line 1291](../youtube-playback-plox.user.js#L1291)
14. [🔧 getUrlTimeParamSeconds](#geturltimeparamseconds) - [line 1317](../youtube-playback-plox.user.js#L1317)
15. [⏳ delay](#delay) - [line 1346](../youtube-playback-plox.user.js#L1346)
16. [🔧 setInnerHTML](#setinnerhtml) - [line 1486](../youtube-playback-plox.user.js#L1486)
17. [🔧 Create Element](#create-element) - [line 1561](../youtube-playback-plox.user.js#L1561)
18. [🔧 Debounce](#debounce) - [line 1698](../youtube-playback-plox.user.js#L1698)
19. [🔧 downloadBlobMobileSafe](#downloadblobmobilesafe) - [line 1733](../youtube-playback-plox.user.js#L1733)
20. [🗄️ Event Handlers store](#event-handlers-store) - [line 1803](../youtube-playback-plox.user.js#L1803)
21. [📝 Selector System](#selector-system) - [line 1919](../youtube-playback-plox.user.js#L1919)
22. [💾 Simple LRU Cache](#simple-lru-cache) - [line 2212](../youtube-playback-plox.user.js#L2212)
23. [⚙️ DOM Cache System](#dom-cache-system) - [line 2293](../youtube-playback-plox.user.js#L2293)
24. [🌐 Translation Functions](#translation-functions) - [line 2669](../youtube-playback-plox.user.js#L2669)
25. [🎨 Styles](#styles) - [line 2834](../youtube-playback-plox.user.js#L2834)
26. [🎨 Theme](#theme) - [line 5557](../youtube-playback-plox.user.js#L5557)
27. [🎨 SVG Icons](#svg-icons) - [line 5635](../youtube-playback-plox.user.js#L5635)
28. [🎨 Progress Bar Style](#progress-bar-style) - [line 5797](../youtube-playback-plox.user.js#L5797)
29. [💾 Storage + Settings](#storage-settings) - [line 6335](../youtube-playback-plox.user.js#L6335)
30. [📢 Ad Caches](#ad-caches) - [line 9350](../youtube-playback-plox.user.js#L9350)
31. [📢 Ad Detector](#ad-detector) - [line 9376](../youtube-playback-plox.user.js#L9376)
32. [🎯 VirtualScroller](#virtualscroller) - [line 9560](../youtube-playback-plox.user.js#L9560)
33. [📤 Import/Export JSON](#importexport-json) - [line 10056](../youtube-playback-plox.user.js#L10056)
34. [☁️ GitHub Backup](#github-backup) - [line 10642](../youtube-playback-plox.user.js#L10642)
35. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 11179](../youtube-playback-plox.user.js#L11179)
36. [🔄 Normalize Video Data](#normalize-video-data) - [line 11361](../youtube-playback-plox.user.js#L11361)
37. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 11463](../youtube-playback-plox.user.js#L11463)
38. [Parse FreeTube DB](#parse-freetube-db) - [line 11554](../youtube-playback-plox.user.js#L11554)
39. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 11647](../youtube-playback-plox.user.js#L11647)
40. [⬆ Export To FreeTube](#export-to-freetube) - [line 11677](../youtube-playback-plox.user.js#L11677)
41. [⬇ Import From FreeTube](#import-from-freetube) - [line 11721](../youtube-playback-plox.user.js#L11721)
42. [🔄 Insert Completion Event](#insert-completion-event) - [line 11819](../youtube-playback-plox.user.js#L11819)
43. [💾 Save Video Generic](#save-video-generic) - [line 11866](../youtube-playback-plox.user.js#L11866)
44. [📺 Helpers](#helpers) - [line 12129](../youtube-playback-plox.user.js#L12129)
45. [📺 Gets saved video data](#gets-saved-video-data) - [line 12132](../youtube-playback-plox.user.js#L12132)
46. [📺 Get Player Video ID](#get-player-video-id) - [line 12189](../youtube-playback-plox.user.js#L12189)
47. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 12269](../youtube-playback-plox.user.js#L12269)
48. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 12474](../youtube-playback-plox.user.js#L12474)
49. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 12680](../youtube-playback-plox.user.js#L12680)
50. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 12702](../youtube-playback-plox.user.js#L12702)
51. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 12730](../youtube-playback-plox.user.js#L12730)
52. [📺 get Playlist Name](#get-playlist-name) - [line 12775](../youtube-playback-plox.user.js#L12775)
53. [🕒 Time Display](#time-display) - [line 13075](../youtube-playback-plox.user.js#L13075)
54. [🖼️ Display Button Helpers](#display-button-helpers) - [line 13111](../youtube-playback-plox.user.js#L13111)
55. [🍞 Toasts](#toasts) - [line 14044](../youtube-playback-plox.user.js#L14044)
56. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 14359](../youtube-playback-plox.user.js#L14359)
57. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 14406](../youtube-playback-plox.user.js#L14406)
58. [⚙️ Settings UI](#settings-ui) - [line 14724](../youtube-playback-plox.user.js#L14724)
59. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 15247](../youtube-playback-plox.user.js#L15247)
60. [🎵 Video Selection](#video-selection) - [line 15305](../youtube-playback-plox.user.js#L15305)
61. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 16289](../youtube-playback-plox.user.js#L16289)
62. [📡 Video Observer Manager](#video-observer-manager) - [line 16572](../youtube-playback-plox.user.js#L16572)
63. [Processing Functions](#processing-functions) - [line 17450](../youtube-playback-plox.user.js#L17450)
64. [PlaybackController](#playbackcontroller) - [line 18776](../youtube-playback-plox.user.js#L18776)
65. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 19436](../youtube-playback-plox.user.js#L19436)
66. [📂 Sort UI](#sort-ui) - [line 19999](../youtube-playback-plox.user.js#L19999)
67. [📂 Filters UI](#filters-ui) - [line 20201](../youtube-playback-plox.user.js#L20201)
68. [📂 Video List UI](#video-list-ui) - [line 20491](../youtube-playback-plox.user.js#L20491)
69. [📁 Update Video List](#update-video-list) - [line 20669](../youtube-playback-plox.user.js#L20669)
70. [🔘 Floating Button](#floating-button) - [line 21580](../youtube-playback-plox.user.js#L21580)
71. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 21609](../youtube-playback-plox.user.js#L21609)
72. [📂 Video Entry](#video-entry) - [line 21882](../youtube-playback-plox.user.js#L21882)
73. [🗑️ Clear All Data](#clear-all-data) - [line 23941](../youtube-playback-plox.user.js#L23941)
74. [⚙️ Menu Commands](#menu-commands) - [line 24299](../youtube-playback-plox.user.js#L24299)
75. [🔄 Data Migration](#data-migration) - [line 24357](../youtube-playback-plox.user.js#L24357)
76. [🚀 Init](#init) - [line 24860](../youtube-playback-plox.user.js#L24860)

---

## [🔍 Logger System](../youtube-playback-plox.user.js#L141)
> [Line 141](../youtube-playback-plox.user.js#L141)

| Type | Name | Line |
|---|---|---|
| `fn` | [`resolveArgs`](../youtube-playback-plox.user.js#L153) | [153](../youtube-playback-plox.user.js#L153) |
| `fn` | [`build`](../youtube-playback-plox.user.js#L155) | [155](../youtube-playback-plox.user.js#L155) |
| `fn` | [`msg`](../youtube-playback-plox.user.js#L195) | [195](../youtube-playback-plox.user.js#L195) |

## [🛡️ Initialization Guard (SPA Safety)](../youtube-playback-plox.user.js#L225)
> [Line 225](../youtube-playback-plox.user.js#L225)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isInstanceActive`](../youtube-playback-plox.user.js#L278) | [278](../youtube-playback-plox.user.js#L278) |
| `fn` | [`destroyToasts`](../youtube-playback-plox.user.js#L287) | [287](../youtube-playback-plox.user.js#L287) |
| `fn` | [`assertActiveInstance`](../youtube-playback-plox.user.js#L360) | [360](../youtube-playback-plox.user.js#L360) |

## [📦 Config](../youtube-playback-plox.user.js#L368)
> [Line 368](../youtube-playback-plox.user.js#L368)

_No relevant functions or constants detected._

## [📊 Global Constants](../youtube-playback-plox.user.js#L497)
> [Line 497](../youtube-playback-plox.user.js#L497)

| Type | Name | Line |
|---|---|---|
| `module` | [`TYPE_CONFIG`](../youtube-playback-plox.user.js#L508) | [508](../youtube-playback-plox.user.js#L508) |

## [📊 Global Variables](../youtube-playback-plox.user.js#L547)
> [Line 547](../youtube-playback-plox.user.js#L547)

_No relevant functions or constants detected._

## [🌐 Translations](../youtube-playback-plox.user.js#L585)
> [Line 585](../youtube-playback-plox.user.js#L585)

| Type | Name | Line |
|---|---|---|
| `fn` | [`loadTranslations`](../youtube-playback-plox.user.js#L915) | [915](../youtube-playback-plox.user.js#L915) |
| `fn` | [`fetchUrl`](../youtube-playback-plox.user.js#L954) | [954](../youtube-playback-plox.user.js#L954) |

## [🔧 Utils](../youtube-playback-plox.user.js#L1048)
> [Line 1048](../youtube-playback-plox.user.js#L1048)

_No relevant functions or constants detected._

## [🔧 Sanitize HTML](../youtube-playback-plox.user.js#L1051)
> [Line 1051](../youtube-playback-plox.user.js#L1051)

| Type | Name | Line |
|---|---|---|
| `fn` | [`sanitizeHTML`](../youtube-playback-plox.user.js#L1061) | [1061](../youtube-playback-plox.user.js#L1061) |
| `module` | [`sanitizeHTML`](../youtube-playback-plox.user.js#L1061) | [1061](../youtube-playback-plox.user.js#L1061) |
| `fn` | [`getSafeUrl`](../youtube-playback-plox.user.js#L1085) | [1085](../youtube-playback-plox.user.js#L1085) |
| `fn` | [`getPlayerApi`](../youtube-playback-plox.user.js#L1110) | [1110](../youtube-playback-plox.user.js#L1110) |
| `fn` | [`scrubSensitiveData`](../youtube-playback-plox.user.js#L1125) | [1125](../youtube-playback-plox.user.js#L1125) |

## [🔧 Is Visibly Displayed](../youtube-playback-plox.user.js#L1137)
> [Line 1137](../youtube-playback-plox.user.js#L1137)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isVisiblyDisplayed`](../youtube-playback-plox.user.js#L1159) | [1159](../youtube-playback-plox.user.js#L1159) |

## [🔧 queryFirst](../youtube-playback-plox.user.js#L1181)
> [Line 1181](../youtube-playback-plox.user.js#L1181)

| Type | Name | Line |
|---|---|---|
| `fn` | [`queryFirst`](../youtube-playback-plox.user.js#L1190) | [1190](../youtube-playback-plox.user.js#L1190) |

## [🔧 Format Time](../youtube-playback-plox.user.js#L1199)
> [Line 1199](../youtube-playback-plox.user.js#L1199)

| Type | Name | Line |
|---|---|---|
| `fn` | [`formatTime`](../youtube-playback-plox.user.js#L1221) | [1221](../youtube-playback-plox.user.js#L1221) |

## [🔧 parseTimeToSeconds](../youtube-playback-plox.user.js#L1243)
> [Line 1243](../youtube-playback-plox.user.js#L1243)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseTimeToSeconds`](../youtube-playback-plox.user.js#L1266) | [1266](../youtube-playback-plox.user.js#L1266) |

## [🔧 normalizeSeconds](../youtube-playback-plox.user.js#L1291)
> [Line 1291](../youtube-playback-plox.user.js#L1291)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeSeconds`](../youtube-playback-plox.user.js#L1310) | [1310](../youtube-playback-plox.user.js#L1310) |

## [🔧 getUrlTimeParamSeconds](../youtube-playback-plox.user.js#L1317)
> [Line 1317](../youtube-playback-plox.user.js#L1317)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getUrlTimeParamSeconds`](../youtube-playback-plox.user.js#L1325) | [1325](../youtube-playback-plox.user.js#L1325) |

## [⏳ delay](../youtube-playback-plox.user.js#L1346)
> [Line 1346](../youtube-playback-plox.user.js#L1346)

| Type | Name | Line |
|---|---|---|
| `fn` | [`delay`](../youtube-playback-plox.user.js#L1352) | [1352](../youtube-playback-plox.user.js#L1352) |
| `fn` | [`withStorageTimeout`](../youtube-playback-plox.user.js#L1366) | [1366](../youtube-playback-plox.user.js#L1366) |
| `fn` | [`runGMMutation`](../youtube-playback-plox.user.js#L1393) | [1393](../youtube-playback-plox.user.js#L1393) |
| `fn` | [`gmGetValue`](../youtube-playback-plox.user.js#L1436) | [1436](../youtube-playback-plox.user.js#L1436) |
| `fn` | [`gmSetValue`](../youtube-playback-plox.user.js#L1454) | [1454](../youtube-playback-plox.user.js#L1454) |
| `fn` | [`gmDeleteValue`](../youtube-playback-plox.user.js#L1466) | [1466](../youtube-playback-plox.user.js#L1466) |
| `fn` | [`gmListValues`](../youtube-playback-plox.user.js#L1477) | [1477](../youtube-playback-plox.user.js#L1477) |

## [🔧 setInnerHTML](../youtube-playback-plox.user.js#L1486)
> [Line 1486](../youtube-playback-plox.user.js#L1486)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTrustedTypesPolicy`](../youtube-playback-plox.user.js#L1496) | [1496](../youtube-playback-plox.user.js#L1496) |
| `fn` | [`setInnerHTML`](../youtube-playback-plox.user.js#L1521) | [1521](../youtube-playback-plox.user.js#L1521) |

## [🔧 Create Element](../youtube-playback-plox.user.js#L1561)
> [Line 1561](../youtube-playback-plox.user.js#L1561)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createElement`](../youtube-playback-plox.user.js#L1579) | [1579](../youtube-playback-plox.user.js#L1579) |
| `fn` | [`append`](../youtube-playback-plox.user.js#L1641) | [1641](../youtube-playback-plox.user.js#L1641) |
| `fn` | [`applyNumericClamping`](../youtube-playback-plox.user.js#L1668) | [1668](../youtube-playback-plox.user.js#L1668) |
| `fn` | [`clamp`](../youtube-playback-plox.user.js#L1671) | [1671](../youtube-playback-plox.user.js#L1671) |

## [🔧 Debounce](../youtube-playback-plox.user.js#L1698)
> [Line 1698](../youtube-playback-plox.user.js#L1698)

| Type | Name | Line |
|---|---|---|
| `fn` | [`debounce`](../youtube-playback-plox.user.js#L1707) | [1707](../youtube-playback-plox.user.js#L1707) |
| `fn` | [`debounced`](../youtube-playback-plox.user.js#L1710) | [1710](../youtube-playback-plox.user.js#L1710) |

## [🔧 downloadBlobMobileSafe](../youtube-playback-plox.user.js#L1733)
> [Line 1733](../youtube-playback-plox.user.js#L1733)

| Type | Name | Line |
|---|---|---|
| `fn` | [`downloadBlobMobileSafe`](../youtube-playback-plox.user.js#L1741) | [1741](../youtube-playback-plox.user.js#L1741) |

## [🗄️ Event Handlers store](../youtube-playback-plox.user.js#L1803)
> [Line 1803](../youtube-playback-plox.user.js#L1803)

| Type | Name | Line |
|---|---|---|
| `class` | [`DisposableStore`](../youtube-playback-plox.user.js#L1809) | [1809](../youtube-playback-plox.user.js#L1809) |
| `fn` | [`addDisposableListener`](../youtube-playback-plox.user.js#L1895) | [1895](../youtube-playback-plox.user.js#L1895) |
| `fn` | [`removeListener`](../youtube-playback-plox.user.js#L1903) | [1903](../youtube-playback-plox.user.js#L1903) |
| `fn` | [`selfRetiringDispose`](../youtube-playback-plox.user.js#L1906) | [1906](../youtube-playback-plox.user.js#L1906) |

## [📝 Selector System](../youtube-playback-plox.user.js#L1919)
> [Line 1919](../youtube-playback-plox.user.js#L1919)

| Type | Name | Line |
|---|---|---|
| `module` | [`PREFIX`](../youtube-playback-plox.user.js#L2010) | [2010](../youtube-playback-plox.user.js#L2010) |
| `fn` | [`createSelectorSystem`](../youtube-playback-plox.user.js#L2035) | [2035](../youtube-playback-plox.user.js#L2035) |

## [💾 Simple LRU Cache](../youtube-playback-plox.user.js#L2212)
> [Line 2212](../youtube-playback-plox.user.js#L2212)

| Type | Name | Line |
|---|---|---|
| `class` | [`SimpleLRUCache`](../youtube-playback-plox.user.js#L2217) | [2217](../youtube-playback-plox.user.js#L2217) |

## [⚙️ DOM Cache System](../youtube-playback-plox.user.js#L2293)
> [Line 2293](../youtube-playback-plox.user.js#L2293)

| Type | Name | Line |
|---|---|---|
| `fn` | [`DOMHelpers`](../youtube-playback-plox.user.js#L2310) | [2310](../youtube-playback-plox.user.js#L2310) |
| `module` | [`DOMHelpers`](../youtube-playback-plox.user.js#L2310) | [2310](../youtube-playback-plox.user.js#L2310) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L2342) | [2342](../youtube-playback-plox.user.js#L2342) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L2380) | [2380](../youtube-playback-plox.user.js#L2380) |

## [🌐 Translation Functions](../youtube-playback-plox.user.js#L2669)
> [Line 2669](../youtube-playback-plox.user.js#L2669)

| Type | Name | Line |
|---|---|---|
| `fn` | [`t`](../youtube-playback-plox.user.js#L2683) | [2683](../youtube-playback-plox.user.js#L2683) |
| `fn` | [`normParams`](../youtube-playback-plox.user.js#L2693) | [2693](../youtube-playback-plox.user.js#L2693) |
| `fn` | [`replaceParams`](../youtube-playback-plox.user.js#L2710) | [2710](../youtube-playback-plox.user.js#L2710) |
| `fn` | [`setLanguage`](../youtube-playback-plox.user.js#L2726) | [2726](../youtube-playback-plox.user.js#L2726) |
| `fn` | [`detectBrowserLanguage`](../youtube-playback-plox.user.js#L2789) | [2789](../youtube-playback-plox.user.js#L2789) |
| `fn` | [`candidates`](../youtube-playback-plox.user.js#L2791) | [2791](../youtube-playback-plox.user.js#L2791) |
| `fn` | [`normalized`](../youtube-playback-plox.user.js#L2810) | [2810](../youtube-playback-plox.user.js#L2810) |

## [🎨 Styles](../youtube-playback-plox.user.js#L2834)
> [Line 2834](../youtube-playback-plox.user.js#L2834)

_No relevant functions or constants detected._

## [🎨 Theme](../youtube-playback-plox.user.js#L5557)
> [Line 5557](../youtube-playback-plox.user.js#L5557)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isYouTubeDarkTheme`](../youtube-playback-plox.user.js#L5564) | [5564](../youtube-playback-plox.user.js#L5564) |
| `fn` | [`applyTheme`](../youtube-playback-plox.user.js#L5582) | [5582](../youtube-playback-plox.user.js#L5582) |
| `fn` | [`observeThemeChanges`](../youtube-playback-plox.user.js#L5595) | [5595](../youtube-playback-plox.user.js#L5595) |
| `fn` | [`cleanupThemeObserver`](../youtube-playback-plox.user.js#L5618) | [5618](../youtube-playback-plox.user.js#L5618) |
| `fn` | [`cleanupGlobalListeners`](../youtube-playback-plox.user.js#L5629) | [5629](../youtube-playback-plox.user.js#L5629) |

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L5635)
> [Line 5635](../youtube-playback-plox.user.js#L5635)

_No relevant functions or constants detected._

## [🎨 Progress Bar Style](../youtube-playback-plox.user.js#L5797)
> [Line 5797](../youtube-playback-plox.user.js#L5797)

| Type | Name | Line |
|---|---|---|
| `fn` | [`clearAllProgressGradientState`](../youtube-playback-plox.user.js#L5809) | [5809](../youtube-playback-plox.user.js#L5809) |
| `fn` | [`syncProgressGradientStateForContainer`](../youtube-playback-plox.user.js#L5825) | [5825](../youtube-playback-plox.user.js#L5825) |
| `fn` | [`resolvePlayerRootForGradient`](../youtube-playback-plox.user.js#L5848) | [5848](../youtube-playback-plox.user.js#L5848) |
| `fn` | [`clearProgressColorFromPlayerRoot`](../youtube-playback-plox.user.js#L5859) | [5859](../youtube-playback-plox.user.js#L5859) |
| `fn` | [`applyProgressColorToPlayerRoot`](../youtube-playback-plox.user.js#L5879) | [5879](../youtube-playback-plox.user.js#L5879) |
| `fn` | [`applyProgressColorToShortsSurfaces`](../youtube-playback-plox.user.js#L5903) | [5903](../youtube-playback-plox.user.js#L5903) |
| `fn` | [`repaintWatchProgressBarFromActivePlayer`](../youtube-playback-plox.user.js#L5923) | [5923](../youtube-playback-plox.user.js#L5923) |
| `fn` | [`scheduleProgressBarGradientRepaint`](../youtube-playback-plox.user.js#L5945) | [5945](../youtube-playback-plox.user.js#L5945) |
| `fn` | [`isCurrentSession`](../youtube-playback-plox.user.js#L5947) | [5947](../youtube-playback-plox.user.js#L5947) |
| `fn` | [`paint`](../youtube-playback-plox.user.js#L5954) | [5954](../youtube-playback-plox.user.js#L5954) |
| `fn` | [`isLivePlaybackForGradient`](../youtube-playback-plox.user.js#L5987) | [5987](../youtube-playback-plox.user.js#L5987) |
| `fn` | [`updateProgressBarGradient`](../youtube-playback-plox.user.js#L6024) | [6024](../youtube-playback-plox.user.js#L6024) |
| `fn` | [`refreshProgressBarGradientForSession`](../youtube-playback-plox.user.js#L6109) | [6109](../youtube-playback-plox.user.js#L6109) |
| `fn` | [`resetProgressBarGradient`](../youtube-playback-plox.user.js#L6132) | [6132](../youtube-playback-plox.user.js#L6132) |
| `fn` | [`injectProgressBarCSS`](../youtube-playback-plox.user.js#L6154) | [6154](../youtube-playback-plox.user.js#L6154) |
| `fn` | [`getProgressColor`](../youtube-playback-plox.user.js#L6284) | [6284](../youtube-playback-plox.user.js#L6284) |
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L6312) | [6312](../youtube-playback-plox.user.js#L6312) |
| `fn` | [`getProgressColorForText`](../youtube-playback-plox.user.js#L6321) | [6321](../youtube-playback-plox.user.js#L6321) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L6335)
> [Line 6335](../youtube-playback-plox.user.js#L6335)

| Type | Name | Line |
|---|---|---|
| `fn` | [`boundedSetAdd`](../youtube-playback-plox.user.js#L6376) | [6376](../youtube-playback-plox.user.js#L6376) |
| `fn` | [`markLocalDeletion`](../youtube-playback-plox.user.js#L6389) | [6389](../youtube-playback-plox.user.js#L6389) |
| `fn` | [`rememberGMFallbackKey`](../youtube-playback-plox.user.js#L6400) | [6400](../youtube-playback-plox.user.js#L6400) |
| `fn` | [`rememberGMTombstone`](../youtube-playback-plox.user.js#L6411) | [6411](../youtube-playback-plox.user.js#L6411) |
| `fn` | [`bumpStorageKeyRevision`](../youtube-playback-plox.user.js#L6426) | [6426](../youtube-playback-plox.user.js#L6426) |
| `fn` | [`getStorageRevisionSnapshot`](../youtube-playback-plox.user.js#L6439) | [6439](../youtube-playback-plox.user.js#L6439) |
| `fn` | [`storageRevisionChanged`](../youtube-playback-plox.user.js#L6452) | [6452](../youtube-playback-plox.user.js#L6452) |
| `fn` | [`invalidateSessionSavedData`](../youtube-playback-plox.user.js#L6531) | [6531](../youtube-playback-plox.user.js#L6531) |
| `fn` | [`broadcastStorageChange`](../youtube-playback-plox.user.js#L6551) | [6551](../youtube-playback-plox.user.js#L6551) |
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L6574) | [6574](../youtube-playback-plox.user.js#L6574) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L6574) | [6574](../youtube-playback-plox.user.js#L6574) |
| `fn` | [`enqueueDurableOperation`](../youtube-playback-plox.user.js#L6604) | [6604](../youtube-playback-plox.user.js#L6604) |
| `fn` | [`hasDurableGMStorage`](../youtube-playback-plox.user.js#L6617) | [6617](../youtube-playback-plox.user.js#L6617) |
| `fn` | [`hasAnyGMStorageApi`](../youtube-playback-plox.user.js#L6627) | [6627](../youtube-playback-plox.user.js#L6627) |
| `fn` | [`waitForDurableMutations`](../youtube-playback-plox.user.js#L6640) | [6640](../youtube-playback-plox.user.js#L6640) |
| `fn` | [`canUseIDB`](../youtube-playback-plox.user.js#L6645) | [6645](../youtube-playback-plox.user.js#L6645) |
| `fn` | [`isStorageRecordError`](../youtube-playback-plox.user.js#L6652) | [6652](../youtube-playback-plox.user.js#L6652) |
| `fn` | [`isStorageProviderError`](../youtube-playback-plox.user.js#L6662) | [6662](../youtube-playback-plox.user.js#L6662) |
| `fn` | [`scheduleQuarantineNotice`](../youtube-playback-plox.user.js#L6672) | [6672](../youtube-playback-plox.user.js#L6672) |
| `fn` | [`registerQuarantinedRecord`](../youtube-playback-plox.user.js#L6710) | [6710](../youtube-playback-plox.user.js#L6710) |
| `fn` | [`quarantineRecordError`](../youtube-playback-plox.user.js#L6732) | [6732](../youtube-playback-plox.user.js#L6732) |
| `fn` | [`getQuarantinedRecords`](../youtube-playback-plox.user.js#L6741) | [6741](../youtube-playback-plox.user.js#L6741) |
| `fn` | [`persistRepairedRows`](../youtube-playback-plox.user.js#L6752) | [6752](../youtube-playback-plox.user.js#L6752) |
| `fn` | [`buildStorageDamageReport`](../youtube-playback-plox.user.js#L6780) | [6780](../youtube-playback-plox.user.js#L6780) |
| `fn` | [`markIDBUnavailable`](../youtube-playback-plox.user.js#L6806) | [6806](../youtube-playback-plox.user.js#L6806) |
| `fn` | [`markIDBAvailable`](../youtube-playback-plox.user.js#L6811) | [6811](../youtube-playback-plox.user.js#L6811) |
| `fn` | [`pickNewerDurableRecord`](../youtube-playback-plox.user.js#L6822) | [6822](../youtube-playback-plox.user.js#L6822) |
| `fn` | [`getGMFallback`](../youtube-playback-plox.user.js#L6836) | [6836](../youtube-playback-plox.user.js#L6836) |
| `fn` | [`parseStoredRecord`](../youtube-playback-plox.user.js#L6865) | [6865](../youtube-playback-plox.user.js#L6865) |
| `fn` | [`setGMFallback`](../youtube-playback-plox.user.js#L6892) | [6892](../youtube-playback-plox.user.js#L6892) |
| `fn` | [`setGMFallbackNewestWins`](../youtube-playback-plox.user.js#L6906) | [6906](../youtube-playback-plox.user.js#L6906) |
| `fn` | [`deleteGMFallback`](../youtube-playback-plox.user.js#L6929) | [6929](../youtube-playback-plox.user.js#L6929) |
| `fn` | [`reconcileGMFallbackAfterIDB`](../youtube-playback-plox.user.js#L6966) | [6966](../youtube-playback-plox.user.js#L6966) |
| `fn` | [`reconcileGMFallbacksAfterIDB`](../youtube-playback-plox.user.js#L7057) | [7057](../youtube-playback-plox.user.js#L7057) |
| `fn` | [`initialize`](../youtube-playback-plox.user.js#L7141) | [7141](../youtube-playback-plox.user.js#L7141) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L7206) | [7206](../youtube-playback-plox.user.js#L7206) |
| `fn` | [`set`](../youtube-playback-plox.user.js#L7432) | [7432](../youtube-playback-plox.user.js#L7432) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7436) | [7436](../youtube-playback-plox.user.js#L7436) |
| `fn` | [`setMany`](../youtube-playback-plox.user.js#L7529) | [7529](../youtube-playback-plox.user.js#L7529) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7540) | [7540](../youtube-playback-plox.user.js#L7540) |
| `fn` | [`deleteGMFallbackIfUnchanged`](../youtube-playback-plox.user.js#L7703) | [7703](../youtube-playback-plox.user.js#L7703) |
| `fn` | [`del`](../youtube-playback-plox.user.js#L7726) | [7726](../youtube-playback-plox.user.js#L7726) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7729) | [7729](../youtube-playback-plox.user.js#L7729) |
| `fn` | [`repairQuarantinedRecords`](../youtube-playback-plox.user.js#L7871) | [7871](../youtube-playback-plox.user.js#L7871) |
| `fn` | [`purgeQuarantinedRecords`](../youtube-playback-plox.user.js#L7924) | [7924](../youtube-playback-plox.user.js#L7924) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L7994) | [7994](../youtube-playback-plox.user.js#L7994) |
| `fn` | [`rawKeys`](../youtube-playback-plox.user.js#L8058) | [8058](../youtube-playback-plox.user.js#L8058) |
| `fn` | [`getCompleteVideoSnapshot`](../youtube-playback-plox.user.js#L8124) | [8124](../youtube-playback-plox.user.js#L8124) |
| `fn` | [`getBackendInfo`](../youtube-playback-plox.user.js#L8301) | [8301](../youtube-playback-plox.user.js#L8301) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L8330) | [8330](../youtube-playback-plox.user.js#L8330) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L8330) | [8330](../youtube-playback-plox.user.js#L8330) |
| `fn` | [`openDatabase`](../youtube-playback-plox.user.js#L8338) | [8338](../youtube-playback-plox.user.js#L8338) |
| `fn` | [`failOpen`](../youtube-playback-plox.user.js#L8344) | [8344](../youtube-playback-plox.user.js#L8344) |
| `fn` | [`runInStore`](../youtube-playback-plox.user.js#L8404) | [8404](../youtube-playback-plox.user.js#L8404) |
| `fn` | [`enqueue`](../youtube-playback-plox.user.js#L8429) | [8429](../youtube-playback-plox.user.js#L8429) |
| `fn` | [`describeStoredValueType`](../youtube-playback-plox.user.js#L8445) | [8445](../youtube-playback-plox.user.js#L8445) |
| `fn` | [`isEmptyStoredValue`](../youtube-playback-plox.user.js#L8459) | [8459](../youtube-playback-plox.user.js#L8459) |
| `fn` | [`sanitizeToJsonSafe`](../youtube-playback-plox.user.js#L8480) | [8480](../youtube-playback-plox.user.js#L8480) |
| `fn` | [`attemptStoredValueRepair`](../youtube-playback-plox.user.js#L8527) | [8527](../youtube-playback-plox.user.js#L8527) |
| `fn` | [`sanitizeEntries`](../youtube-playback-plox.user.js#L8596) | [8596](../youtube-playback-plox.user.js#L8596) |
| `fn` | [`pushEntry`](../youtube-playback-plox.user.js#L8609) | [8609](../youtube-playback-plox.user.js#L8609) |
| `fn` | [`getAllEntries`](../youtube-playback-plox.user.js#L8714) | [8714](../youtube-playback-plox.user.js#L8714) |
| `fn` | [`repairEntries`](../youtube-playback-plox.user.js#L8726) | [8726](../youtube-playback-plox.user.js#L8726) |
| `fn` | [`putEntry`](../youtube-playback-plox.user.js#L8760) | [8760](../youtube-playback-plox.user.js#L8760) |
| `fn` | [`deleteEntry`](../youtube-playback-plox.user.js#L8764) | [8764](../youtube-playback-plox.user.js#L8764) |
| `fn` | [`bulkDelete`](../youtube-playback-plox.user.js#L8773) | [8773](../youtube-playback-plox.user.js#L8773) |
| `fn` | [`bulkPut`](../youtube-playback-plox.user.js#L8792) | [8792](../youtube-playback-plox.user.js#L8792) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L8819) | [8819](../youtube-playback-plox.user.js#L8819) |
| `fn` | [`diagnose`](../youtube-playback-plox.user.js#L8842) | [8842](../youtube-playback-plox.user.js#L8842) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L8898) | [8898](../youtube-playback-plox.user.js#L8898) |
| `fn` | [`prefixKey`](../youtube-playback-plox.user.js#L8907) | [8907](../youtube-playback-plox.user.js#L8907) |
| `fn` | [`stripPrefix`](../youtube-playback-plox.user.js#L8908) | [8908](../youtube-playback-plox.user.js#L8908) |
| `fn` | [`hasPrefix`](../youtube-playback-plox.user.js#L8909) | [8909](../youtube-playback-plox.user.js#L8909) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L9160) | [9160](../youtube-playback-plox.user.js#L9160) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L9178) | [9178](../youtube-playback-plox.user.js#L9178) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L9204) | [9204](../youtube-playback-plox.user.js#L9204) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L9220) | [9220](../youtube-playback-plox.user.js#L9220) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L9283) | [9283](../youtube-playback-plox.user.js#L9283) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L9301) | [9301](../youtube-playback-plox.user.js#L9301) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L9309) | [9309](../youtube-playback-plox.user.js#L9309) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L9334) | [9334](../youtube-playback-plox.user.js#L9334) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L9350)
> [Line 9350](../youtube-playback-plox.user.js#L9350)

_No relevant functions or constants detected._

## [📢 Ad Detector](../youtube-playback-plox.user.js#L9376)
> [Line 9376](../youtube-playback-plox.user.js#L9376)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L9378) | [9378](../youtube-playback-plox.user.js#L9378) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L9429) | [9429](../youtube-playback-plox.user.js#L9429) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L9560)
> [Line 9560](../youtube-playback-plox.user.js#L9560)

| Type | Name | Line |
|---|---|---|
| `class` | [`VirtualScroller`](../youtube-playback-plox.user.js#L9577) | [9577](../youtube-playback-plox.user.js#L9577) |

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L10056)
> [Line 10056](../youtube-playback-plox.user.js#L10056)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L10065) | [10065](../youtube-playback-plox.user.js#L10065) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L10096) | [10096](../youtube-playback-plox.user.js#L10096) |
| `fn` | [`exportStorageDamageReport`](../youtube-playback-plox.user.js#L10149) | [10149](../youtube-playback-plox.user.js#L10149) |
| `fn` | [`runStorageRepairFlow`](../youtube-playback-plox.user.js#L10188) | [10188](../youtube-playback-plox.user.js#L10188) |
| `fn` | [`renderStorageDamageNotice`](../youtube-playback-plox.user.js#L10255) | [10255](../youtube-playback-plox.user.js#L10255) |
| `fn` | [`copyExportDataToClipboard`](../youtube-playback-plox.user.js#L10316) | [10316](../youtube-playback-plox.user.js#L10316) |
| `fn` | [`mergeImportedVideoData`](../youtube-playback-plox.user.js#L10371) | [10371](../youtube-playback-plox.user.js#L10371) |
| `fn` | [`detectImportFormat`](../youtube-playback-plox.user.js#L10432) | [10432](../youtube-playback-plox.user.js#L10432) |
| `fn` | [`hasImportableRecords`](../youtube-playback-plox.user.js#L10446) | [10446](../youtube-playback-plox.user.js#L10446) |
| `fn` | [`looksLikeFreeTubeExport`](../youtube-playback-plox.user.js#L10463) | [10463](../youtube-playback-plox.user.js#L10463) |
| `fn` | [`parseImportPayload`](../youtube-playback-plox.user.js#L10476) | [10476](../youtube-playback-plox.user.js#L10476) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L10515) | [10515](../youtube-playback-plox.user.js#L10515) |
| `fn` | [`importCommitGuard`](../youtube-playback-plox.user.js#L10517) | [10517](../youtube-playback-plox.user.js#L10517) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L10642)
> [Line 10642](../youtube-playback-plox.user.js#L10642)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getGitHubErrorMsg`](../youtube-playback-plox.user.js#L10645) | [10645](../youtube-playback-plox.user.js#L10645) |
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L10657) | [10657](../youtube-playback-plox.user.js#L10657) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L10687) | [10687](../youtube-playback-plox.user.js#L10687) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L10688) | [10688](../youtube-playback-plox.user.js#L10688) |
| `fn` | [`sendGistRequest`](../youtube-playback-plox.user.js#L10710) | [10710](../youtube-playback-plox.user.js#L10710) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L10806) | [10806](../youtube-playback-plox.user.js#L10806) |
| `fn` | [`finish`](../youtube-playback-plox.user.js#L10816) | [10816](../youtube-playback-plox.user.js#L10816) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L10830) | [10830](../youtube-playback-plox.user.js#L10830) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L11016) | [11016](../youtube-playback-plox.user.js#L11016) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L11037) | [11037](../youtube-playback-plox.user.js#L11037) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L11116) | [11116](../youtube-playback-plox.user.js#L11116) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L11146) | [11146](../youtube-playback-plox.user.js#L11146) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L11179)
> [Line 11179](../youtube-playback-plox.user.js#L11179)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L11180) | [11180](../youtube-playback-plox.user.js#L11180) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L11219) | [11219](../youtube-playback-plox.user.js#L11219) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L11361)
> [Line 11361](../youtube-playback-plox.user.js#L11361)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeCompletionHistory`](../youtube-playback-plox.user.js#L11369) | [11369](../youtube-playback-plox.user.js#L11369) |
| `fn` | [`normalizeVideoData`](../youtube-playback-plox.user.js#L11397) | [11397](../youtube-playback-plox.user.js#L11397) |
| `fn` | [`safeText`](../youtube-playback-plox.user.js#L11400) | [11400](../youtube-playback-plox.user.js#L11400) |
| `fn` | [`safeNumber`](../youtube-playback-plox.user.js#L11405) | [11405](../youtube-playback-plox.user.js#L11405) |
| `fn` | [`safeNullableText`](../youtube-playback-plox.user.js#L11409) | [11409](../youtube-playback-plox.user.js#L11409) |

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L11463)
> [Line 11463](../youtube-playback-plox.user.js#L11463)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toFreeTubeFormat`](../youtube-playback-plox.user.js#L11469) | [11469](../youtube-playback-plox.user.js#L11469) |

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L11554)
> [Line 11554](../youtube-playback-plox.user.js#L11554)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseFreeTubeDB`](../youtube-playback-plox.user.js#L11560) | [11560](../youtube-playback-plox.user.js#L11560) |

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L11647)
> [Line 11647](../youtube-playback-plox.user.js#L11647)

| Type | Name | Line |
|---|---|---|
| `fn` | [`fromFreeTubeFormat`](../youtube-playback-plox.user.js#L11653) | [11653](../youtube-playback-plox.user.js#L11653) |
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L11662) | [11662](../youtube-playback-plox.user.js#L11662) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L11677)
> [Line 11677](../youtube-playback-plox.user.js#L11677)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTubeFormat`](../youtube-playback-plox.user.js#L11682) | [11682](../youtube-playback-plox.user.js#L11682) |

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L11721)
> [Line 11721](../youtube-playback-plox.user.js#L11721)

| Type | Name | Line |
|---|---|---|
| `fn` | [`importFromFreeTubeFormat`](../youtube-playback-plox.user.js#L11727) | [11727](../youtube-playback-plox.user.js#L11727) |
| `fn` | [`importCommitGuard`](../youtube-playback-plox.user.js#L11729) | [11729](../youtube-playback-plox.user.js#L11729) |

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L11819)
> [Line 11819](../youtube-playback-plox.user.js#L11819)

| Type | Name | Line |
|---|---|---|
| `fn` | [`insertCompletionEvent`](../youtube-playback-plox.user.js#L11827) | [11827](../youtube-playback-plox.user.js#L11827) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L11855) | [11855](../youtube-playback-plox.user.js#L11855) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L11866)
> [Line 11866](../youtube-playback-plox.user.js#L11866)

| Type | Name | Line |
|---|---|---|
| `fn` | [`internalSaveVideoGeneric`](../youtube-playback-plox.user.js#L11875) | [11875](../youtube-playback-plox.user.js#L11875) |
| `fn` | [`isExpectedSessionCurrent`](../youtube-playback-plox.user.js#L11885) | [11885](../youtube-playback-plox.user.js#L11885) |
| `fn` | [`isDestructiveEpochCurrent`](../youtube-playback-plox.user.js#L11891) | [11891](../youtube-playback-plox.user.js#L11891) |
| `fn` | [`commitGuard`](../youtube-playback-plox.user.js#L11894) | [11894](../youtube-playback-plox.user.js#L11894) |
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L11982) | [11982](../youtube-playback-plox.user.js#L11982) |

## [📺 Helpers](../youtube-playback-plox.user.js#L12129)
> [Line 12129](../youtube-playback-plox.user.js#L12129)

_No relevant functions or constants detected._

## [📺 Gets saved video data](../youtube-playback-plox.user.js#L12132)
> [Line 12132](../youtube-playback-plox.user.js#L12132)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSavedVideoData`](../youtube-playback-plox.user.js#L12141) | [12141](../youtube-playback-plox.user.js#L12141) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L12189)
> [Line 12189](../youtube-playback-plox.user.js#L12189)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L12225) | [12225](../youtube-playback-plox.user.js#L12225) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L12269)
> [Line 12269](../youtube-playback-plox.user.js#L12269)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTypeFromPageManager`](../youtube-playback-plox.user.js#L12292) | [12292](../youtube-playback-plox.user.js#L12292) |
| `fn` | [`getTypeFromYtApp`](../youtube-playback-plox.user.js#L12332) | [12332](../youtube-playback-plox.user.js#L12332) |
| `fn` | [`detectFromURL`](../youtube-playback-plox.user.js#L12358) | [12358](../youtube-playback-plox.user.js#L12358) |
| `fn` | [`cachePageType`](../youtube-playback-plox.user.js#L12430) | [12430](../youtube-playback-plox.user.js#L12430) |
| `fn` | [`getYouTubePageType`](../youtube-playback-plox.user.js#L12449) | [12449](../youtube-playback-plox.user.js#L12449) |

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L12474)
> [Line 12474](../youtube-playback-plox.user.js#L12474)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseYouTubeResource`](../youtube-playback-plox.user.js#L12534) | [12534](../youtube-playback-plox.user.js#L12534) |
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L12571) | [12571](../youtube-playback-plox.user.js#L12571) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L12680)
> [Line 12680](../youtube-playback-plox.user.js#L12680)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubeVideoIdFromUrl`](../youtube-playback-plox.user.js#L12690) | [12690](../youtube-playback-plox.user.js#L12690) |

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L12702)
> [Line 12702](../youtube-playback-plox.user.js#L12702)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getYouTubeVideoContextFromUrl`](../youtube-playback-plox.user.js#L12714) | [12714](../youtube-playback-plox.user.js#L12714) |

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L12730)
> [Line 12730](../youtube-playback-plox.user.js#L12730)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubePlaylistIdFromUrl`](../youtube-playback-plox.user.js#L12738) | [12738](../youtube-playback-plox.user.js#L12738) |
| `fn` | [`classifyPlaylist`](../youtube-playback-plox.user.js#L12762) | [12762](../youtube-playback-plox.user.js#L12762) |

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L12775)
> [Line 12775](../youtube-playback-plox.user.js#L12775)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L12796) | [12796](../youtube-playback-plox.user.js#L12796) |
| `fn` | [`extractYtInitialData`](../youtube-playback-plox.user.js#L12833) | [12833](../youtube-playback-plox.user.js#L12833) |
| `fn` | [`getPlaylistName`](../youtube-playback-plox.user.js#L12939) | [12939](../youtube-playback-plox.user.js#L12939) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L12955) | [12955](../youtube-playback-plox.user.js#L12955) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L13048) | [13048](../youtube-playback-plox.user.js#L13048) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L13075)
> [Line 13075](../youtube-playback-plox.user.js#L13075)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L13101) | [13101](../youtube-playback-plox.user.js#L13101) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L13111)
> [Line 13111](../youtube-playback-plox.user.js#L13111)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTimeDisplayMessage`](../youtube-playback-plox.user.js#L13119) | [13119](../youtube-playback-plox.user.js#L13119) |
| `fn` | [`hasTimeDisplayMessage`](../youtube-playback-plox.user.js#L13128) | [13128](../youtube-playback-plox.user.js#L13128) |
| `fn` | [`showDisplayMessage`](../youtube-playback-plox.user.js#L13138) | [13138](../youtube-playback-plox.user.js#L13138) |
| `fn` | [`restoreDisplayButtons`](../youtube-playback-plox.user.js#L13156) | [13156](../youtube-playback-plox.user.js#L13156) |
| `fn` | [`createSplitButtonGroup`](../youtube-playback-plox.user.js#L13187) | [13187](../youtube-playback-plox.user.js#L13187) |
| `fn` | [`getDisplayContextVideo`](../youtube-playback-plox.user.js#L13212) | [13212](../youtube-playback-plox.user.js#L13212) |
| `fn` | [`getDisplayContextPlayer`](../youtube-playback-plox.user.js#L13227) | [13227](../youtube-playback-plox.user.js#L13227) |
| `fn` | [`getPlaybackNotificationKind`](../youtube-playback-plox.user.js#L13242) | [13242](../youtube-playback-plox.user.js#L13242) |
| `fn` | [`buildPlaybackNotificationMessage`](../youtube-playback-plox.user.js#L13259) | [13259](../youtube-playback-plox.user.js#L13259) |
| `fn` | [`setupManualSaveButton`](../youtube-playback-plox.user.js#L13298) | [13298](../youtube-playback-plox.user.js#L13298) |
| `fn` | [`getActiveShortsControlsContainer`](../youtube-playback-plox.user.js#L13358) | [13358](../youtube-playback-plox.user.js#L13358) |
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L13403) | [13403](../youtube-playback-plox.user.js#L13403) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L13403) | [13403](../youtube-playback-plox.user.js#L13403) |
| `fn` | [`getDisplayDisposables`](../youtube-playback-plox.user.js#L13425) | [13425](../youtube-playback-plox.user.js#L13425) |
| `fn` | [`disposeDisplayNode`](../youtube-playback-plox.user.js#L13438) | [13438](../youtube-playback-plox.user.js#L13438) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L13445) | [13445](../youtube-playback-plox.user.js#L13445) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L13455) | [13455](../youtube-playback-plox.user.js#L13455) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L13463) | [13463](../youtube-playback-plox.user.js#L13463) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L13471) | [13471](../youtube-playback-plox.user.js#L13471) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L13494) | [13494](../youtube-playback-plox.user.js#L13494) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L13506) | [13506](../youtube-playback-plox.user.js#L13506) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L13509) | [13509](../youtube-playback-plox.user.js#L13509) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L13519) | [13519](../youtube-playback-plox.user.js#L13519) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L13524) | [13524](../youtube-playback-plox.user.js#L13524) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L13547) | [13547](../youtube-playback-plox.user.js#L13547) |
| `fn` | [`scheduleShortsFrame`](../youtube-playback-plox.user.js#L13571) | [13571](../youtube-playback-plox.user.js#L13571) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L13580) | [13580](../youtube-playback-plox.user.js#L13580) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L13589) | [13589](../youtube-playback-plox.user.js#L13589) |
| `fn` | [`isMobileWatchDisplayFallback`](../youtube-playback-plox.user.js#L13637) | [13637](../youtube-playback-plox.user.js#L13637) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L13651) | [13651](../youtube-playback-plox.user.js#L13651) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L13759) | [13759](../youtube-playback-plox.user.js#L13759) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L13815) | [13815](../youtube-playback-plox.user.js#L13815) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L13886) | [13886](../youtube-playback-plox.user.js#L13886) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L13912) | [13912](../youtube-playback-plox.user.js#L13912) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L13926) | [13926](../youtube-playback-plox.user.js#L13926) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L13930) | [13930](../youtube-playback-plox.user.js#L13930) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L13937) | [13937](../youtube-playback-plox.user.js#L13937) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L13955) | [13955](../youtube-playback-plox.user.js#L13955) |
| `fn` | [`startShortsPanelObserver`](../youtube-playback-plox.user.js#L13969) | [13969](../youtube-playback-plox.user.js#L13969) |
| `fn` | [`stopShortsPanelObserver`](../youtube-playback-plox.user.js#L14017) | [14017](../youtube-playback-plox.user.js#L14017) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L14044)
> [Line 14044](../youtube-playback-plox.user.js#L14044)

| Type | Name | Line |
|---|---|---|
| `fn` | [`disposeToastRuntime`](../youtube-playback-plox.user.js#L14056) | [14056](../youtube-playback-plox.user.js#L14056) |
| `fn` | [`registerToastRuntime`](../youtube-playback-plox.user.js#L14084) | [14084](../youtube-playback-plox.user.js#L14084) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L14085) | [14085](../youtube-playback-plox.user.js#L14085) |
| `fn` | [`createToastContainer`](../youtube-playback-plox.user.js#L14101) | [14101](../youtube-playback-plox.user.js#L14101) |
| `fn` | [`fadeAndRemoveToast`](../youtube-playback-plox.user.js#L14134) | [14134](../youtube-playback-plox.user.js#L14134) |
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L14155) | [14155](../youtube-playback-plox.user.js#L14155) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L14179) | [14179](../youtube-playback-plox.user.js#L14179) |
| `fn` | [`showFloatingToast`](../youtube-playback-plox.user.js#L14203) | [14203](../youtube-playback-plox.user.js#L14203) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L14359)
> [Line 14359](../youtube-playback-plox.user.js#L14359)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L14362) | [14362](../youtube-playback-plox.user.js#L14362) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L14406)
> [Line 14406](../youtube-playback-plox.user.js#L14406)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L14446) | [14446](../youtube-playback-plox.user.js#L14446) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L14452) | [14452](../youtube-playback-plox.user.js#L14452) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L14460) | [14460](../youtube-playback-plox.user.js#L14460) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L14506) | [14506](../youtube-playback-plox.user.js#L14506) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L14510) | [14510](../youtube-playback-plox.user.js#L14510) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L14513) | [14513](../youtube-playback-plox.user.js#L14513) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L14529) | [14529](../youtube-playback-plox.user.js#L14529) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L14538) | [14538](../youtube-playback-plox.user.js#L14538) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L14568) | [14568](../youtube-playback-plox.user.js#L14568) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L14582) | [14582](../youtube-playback-plox.user.js#L14582) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L14586) | [14586](../youtube-playback-plox.user.js#L14586) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L14724)
> [Line 14724](../youtube-playback-plox.user.js#L14724)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSettingsUI`](../youtube-playback-plox.user.js#L14727) | [14727](../youtube-playback-plox.user.js#L14727) |
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L14758) | [14758](../youtube-playback-plox.user.js#L14758) |
| `fn` | [`onSettingsKeyDown`](../youtube-playback-plox.user.js#L14780) | [14780](../youtube-playback-plox.user.js#L14780) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L14875) | [14875](../youtube-playback-plox.user.js#L14875) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L14962) | [14962](../youtube-playback-plox.user.js#L14962) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L14963) | [14963](../youtube-playback-plox.user.js#L14963) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L15052) | [15052](../youtube-playback-plox.user.js#L15052) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L15053) | [15053](../youtube-playback-plox.user.js#L15053) |
| `fn` | [`getInnerTubeClientVersion`](../youtube-playback-plox.user.js#L15085) | [15085](../youtube-playback-plox.user.js#L15085) |
| `fn` | [`idbDiag`](../youtube-playback-plox.user.js#L15114) | [15114](../youtube-playback-plox.user.js#L15114) |
| `fn` | [`safeModeActive`](../youtube-playback-plox.user.js#L15132) | [15132](../youtube-playback-plox.user.js#L15132) |
| `fn` | [`activeSessions`](../youtube-playback-plox.user.js#L15133) | [15133](../youtube-playback-plox.user.js#L15133) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L15247)
> [Line 15247](../youtube-playback-plox.user.js#L15247)

| Type | Name | Line |
|---|---|---|
| `fn` | [`notifySeekOrProgress`](../youtube-playback-plox.user.js#L15249) | [15249](../youtube-playback-plox.user.js#L15249) |

## [🎵 Video Selection](../youtube-playback-plox.user.js#L15305)
> [Line 15305](../youtube-playback-plox.user.js#L15305)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleManagementMode`](../youtube-playback-plox.user.js#L15320) | [15320](../youtube-playback-plox.user.js#L15320) |
| `fn` | [`updateFooterButtons`](../youtube-playback-plox.user.js#L15333) | [15333](../youtube-playback-plox.user.js#L15333) |
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L15410) | [15410](../youtube-playback-plox.user.js#L15410) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L15417) | [15417](../youtube-playback-plox.user.js#L15417) |
| `fn` | [`createFooterActionMenu`](../youtube-playback-plox.user.js#L15477) | [15477](../youtube-playback-plox.user.js#L15477) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L15507) | [15507](../youtube-playback-plox.user.js#L15507) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L15511) | [15511](../youtube-playback-plox.user.js#L15511) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L15520) | [15520](../youtube-playback-plox.user.js#L15520) |
| `fn` | [`closeImportMenu`](../youtube-playback-plox.user.js#L15616) | [15616](../youtube-playback-plox.user.js#L15616) |
| `fn` | [`onImportOutsideClick`](../youtube-playback-plox.user.js#L15625) | [15625](../youtube-playback-plox.user.js#L15625) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L16053) | [16053](../youtube-playback-plox.user.js#L16053) |
| `fn` | [`updateManagementFooterState`](../youtube-playback-plox.user.js#L16115) | [16115](../youtube-playback-plox.user.js#L16115) |
| `fn` | [`togglePlaylistCreationMode`](../youtube-playback-plox.user.js#L16145) | [16145](../youtube-playback-plox.user.js#L16145) |
| `fn` | [`copyToClipboard`](../youtube-playback-plox.user.js#L16164) | [16164](../youtube-playback-plox.user.js#L16164) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L16177) | [16177](../youtube-playback-plox.user.js#L16177) |
| `fn` | [`toggleVideoSelection`](../youtube-playback-plox.user.js#L16257) | [16257](../youtube-playback-plox.user.js#L16257) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L16289)
> [Line 16289](../youtube-playback-plox.user.js#L16289)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L16295) | [16295](../youtube-playback-plox.user.js#L16295) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L16295) | [16295](../youtube-playback-plox.user.js#L16295) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L16296) | [16296](../youtube-playback-plox.user.js#L16296) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L16305) | [16305](../youtube-playback-plox.user.js#L16305) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L16318) | [16318](../youtube-playback-plox.user.js#L16318) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L16329) | [16329](../youtube-playback-plox.user.js#L16329) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L16346) | [16346](../youtube-playback-plox.user.js#L16346) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L16380) | [16380](../youtube-playback-plox.user.js#L16380) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L16405) | [16405](../youtube-playback-plox.user.js#L16405) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L16407) | [16407](../youtube-playback-plox.user.js#L16407) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L16426) | [16426](../youtube-playback-plox.user.js#L16426) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L16426) | [16426](../youtube-playback-plox.user.js#L16426) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L16428) | [16428](../youtube-playback-plox.user.js#L16428) |
| `fn` | [`shouldDropVideoEvent`](../youtube-playback-plox.user.js#L16440) | [16440](../youtube-playback-plox.user.js#L16440) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L16449) | [16449](../youtube-playback-plox.user.js#L16449) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L16449) | [16449](../youtube-playback-plox.user.js#L16449) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L16460) | [16460](../youtube-playback-plox.user.js#L16460) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L16465) | [16465](../youtube-playback-plox.user.js#L16465) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L16470) | [16470](../youtube-playback-plox.user.js#L16470) |
| `fn` | [`note`](../youtube-playback-plox.user.js#L16490) | [16490](../youtube-playback-plox.user.js#L16490) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L16494) | [16494](../youtube-playback-plox.user.js#L16494) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L16512) | [16512](../youtube-playback-plox.user.js#L16512) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L16512) | [16512](../youtube-playback-plox.user.js#L16512) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L16514) | [16514](../youtube-playback-plox.user.js#L16514) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L16522) | [16522](../youtube-playback-plox.user.js#L16522) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L16572)
> [Line 16572](../youtube-playback-plox.user.js#L16572)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L16577) | [16577](../youtube-playback-plox.user.js#L16577) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L16577) | [16577](../youtube-playback-plox.user.js#L16577) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L16599) | [16599](../youtube-playback-plox.user.js#L16599) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L16619) | [16619](../youtube-playback-plox.user.js#L16619) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L16645) | [16645](../youtube-playback-plox.user.js#L16645) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L16692) | [16692](../youtube-playback-plox.user.js#L16692) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L16727) | [16727](../youtube-playback-plox.user.js#L16727) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L16728) | [16728](../youtube-playback-plox.user.js#L16728) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L16759) | [16759](../youtube-playback-plox.user.js#L16759) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L16815) | [16815](../youtube-playback-plox.user.js#L16815) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L16883) | [16883](../youtube-playback-plox.user.js#L16883) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L16893) | [16893](../youtube-playback-plox.user.js#L16893) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L16904) | [16904](../youtube-playback-plox.user.js#L16904) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L16936) | [16936](../youtube-playback-plox.user.js#L16936) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L16988) | [16988](../youtube-playback-plox.user.js#L16988) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L16999) | [16999](../youtube-playback-plox.user.js#L16999) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L17023) | [17023](../youtube-playback-plox.user.js#L17023) |
| `fn` | [`clearPlayerCache`](../youtube-playback-plox.user.js#L17149) | [17149](../youtube-playback-plox.user.js#L17149) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L17371) | [17371](../youtube-playback-plox.user.js#L17371) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L17420) | [17420](../youtube-playback-plox.user.js#L17420) |

## [Processing Functions](../youtube-playback-plox.user.js#L17450)
> [Line 17450](../youtube-playback-plox.user.js#L17450)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleIdMismatchRetry`](../youtube-playback-plox.user.js#L17483) | [17483](../youtube-playback-plox.user.js#L17483) |
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L17527) | [17527](../youtube-playback-plox.user.js#L17527) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L17554) | [17554](../youtube-playback-plox.user.js#L17554) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L17564) | [17564](../youtube-playback-plox.user.js#L17564) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L17564) | [17564](../youtube-playback-plox.user.js#L17564) |
| `fn` | [`clearPendingRecovery`](../youtube-playback-plox.user.js#L17584) | [17584](../youtube-playback-plox.user.js#L17584) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L17589) | [17589](../youtube-playback-plox.user.js#L17589) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L17594) | [17594](../youtube-playback-plox.user.js#L17594) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L17601) | [17601](../youtube-playback-plox.user.js#L17601) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L17607) | [17607](../youtube-playback-plox.user.js#L17607) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L17625) | [17625](../youtube-playback-plox.user.js#L17625) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L17717) | [17717](../youtube-playback-plox.user.js#L17717) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L17781) | [17781](../youtube-playback-plox.user.js#L17781) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L17816) | [17816](../youtube-playback-plox.user.js#L17816) |
| `fn` | [`isAwaitingFirstPlayback`](../youtube-playback-plox.user.js#L17848) | [17848](../youtube-playback-plox.user.js#L17848) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L17863) | [17863](../youtube-playback-plox.user.js#L17863) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L17874) | [17874](../youtube-playback-plox.user.js#L17874) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L17886) | [17886](../youtube-playback-plox.user.js#L17886) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L17922) | [17922](../youtube-playback-plox.user.js#L17922) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L18002) | [18002](../youtube-playback-plox.user.js#L18002) |
| `fn` | [`handleSeekingForGradient`](../youtube-playback-plox.user.js#L18031) | [18031](../youtube-playback-plox.user.js#L18031) |
| `fn` | [`handleSeekedForGradient`](../youtube-playback-plox.user.js#L18041) | [18041](../youtube-playback-plox.user.js#L18041) |
| `fn` | [`canValidateStandalone`](../youtube-playback-plox.user.js#L18168) | [18168](../youtube-playback-plox.user.js#L18168) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L18193) | [18193](../youtube-playback-plox.user.js#L18193) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L18284) | [18284](../youtube-playback-plox.user.js#L18284) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L18493) | [18493](../youtube-playback-plox.user.js#L18493) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L18606) | [18606](../youtube-playback-plox.user.js#L18606) |
| `fn` | [`processMediaVideo`](../youtube-playback-plox.user.js#L18721) | [18721](../youtube-playback-plox.user.js#L18721) |

## [PlaybackController](../youtube-playback-plox.user.js#L18776)
> [Line 18776](../youtube-playback-plox.user.js#L18776)

| Type | Name | Line |
|---|---|---|
| `fn` | [`mapLiveAbsoluteToWindow`](../youtube-playback-plox.user.js#L18791) | [18791](../youtube-playback-plox.user.js#L18791) |
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L18853) | [18853](../youtube-playback-plox.user.js#L18853) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L18870) | [18870](../youtube-playback-plox.user.js#L18870) |
| `fn` | [`removeMetadataListener`](../youtube-playback-plox.user.js#L18894) | [18894](../youtube-playback-plox.user.js#L18894) |
| `fn` | [`removeCanPlayListener`](../youtube-playback-plox.user.js#L18895) | [18895](../youtube-playback-plox.user.js#L18895) |
| `fn` | [`removeAbortListener`](../youtube-playback-plox.user.js#L18896) | [18896](../youtube-playback-plox.user.js#L18896) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L18897) | [18897](../youtube-playback-plox.user.js#L18897) |
| `fn` | [`rejectAsStale`](../youtube-playback-plox.user.js#L18903) | [18903](../youtube-playback-plox.user.js#L18903) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L18907) | [18907](../youtube-playback-plox.user.js#L18907) |
| `fn` | [`onAbort`](../youtube-playback-plox.user.js#L18916) | [18916](../youtube-playback-plox.user.js#L18916) |
| `fn` | [`restoreThrottleMarker`](../youtube-playback-plox.user.js#L19150) | [19150](../youtube-playback-plox.user.js#L19150) |
| `fn` | [`readApiNumber`](../youtube-playback-plox.user.js#L19165) | [19165](../youtube-playback-plox.user.js#L19165) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L19288) | [19288](../youtube-playback-plox.user.js#L19288) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L19436)
> [Line 19436](../youtube-playback-plox.user.js#L19436)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getInnerTubeConfig`](../youtube-playback-plox.user.js#L19473) | [19473](../youtube-playback-plox.user.js#L19473) |
| `fn` | [`fetchInnerTubeJson`](../youtube-playback-plox.user.js#L19488) | [19488](../youtube-playback-plox.user.js#L19488) |
| `fn` | [`fetchShortsViews`](../youtube-playback-plox.user.js#L19522) | [19522](../youtube-playback-plox.user.js#L19522) |
| `fn` | [`fetchPlaylistTitle`](../youtube-playback-plox.user.js#L19535) | [19535](../youtube-playback-plox.user.js#L19535) |
| `fn` | [`getCascadedVideoInfo`](../youtube-playback-plox.user.js#L19545) | [19545](../youtube-playback-plox.user.js#L19545) |
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L19590) | [19590](../youtube-playback-plox.user.js#L19590) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L19999)
> [Line 19999](../youtube-playback-plox.user.js#L19999)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createCustomDropdown`](../youtube-playback-plox.user.js#L20017) | [20017](../youtube-playback-plox.user.js#L20017) |
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L20028) | [20028](../youtube-playback-plox.user.js#L20028) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L20104) | [20104](../youtube-playback-plox.user.js#L20104) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L20120) | [20120](../youtube-playback-plox.user.js#L20120) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L20128) | [20128](../youtube-playback-plox.user.js#L20128) |
| `fn` | [`createSortSelector`](../youtube-playback-plox.user.js#L20145) | [20145](../youtube-playback-plox.user.js#L20145) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L20148) | [20148](../youtube-playback-plox.user.js#L20148) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L20201)
> [Line 20201](../youtube-playback-plox.user.js#L20201)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFilterSelector`](../youtube-playback-plox.user.js#L20210) | [20210](../youtube-playback-plox.user.js#L20210) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L20213) | [20213](../youtube-playback-plox.user.js#L20213) |
| `fn` | [`createRangeFilter`](../youtube-playback-plox.user.js#L20258) | [20258](../youtube-playback-plox.user.js#L20258) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L20261) | [20261](../youtube-playback-plox.user.js#L20261) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L20267) | [20267](../youtube-playback-plox.user.js#L20267) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L20275) | [20275](../youtube-playback-plox.user.js#L20275) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L20290) | [20290](../youtube-playback-plox.user.js#L20290) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L20411) | [20411](../youtube-playback-plox.user.js#L20411) |
| `fn` | [`createSearchInput`](../youtube-playback-plox.user.js#L20466) | [20466](../youtube-playback-plox.user.js#L20466) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L20491)
> [Line 20491](../youtube-playback-plox.user.js#L20491)

| Type | Name | Line |
|---|---|---|
| `fn` | [`acquireBodyOverflow`](../youtube-playback-plox.user.js#L20519) | [20519](../youtube-playback-plox.user.js#L20519) |
| `fn` | [`releaseBodyOverflow`](../youtube-playback-plox.user.js#L20533) | [20533](../youtube-playback-plox.user.js#L20533) |
| `fn` | [`getVirtualScrollerVideoItems`](../youtube-playback-plox.user.js#L20599) | [20599](../youtube-playback-plox.user.js#L20599) |
| `fn` | [`batchLoadStorageData`](../youtube-playback-plox.user.js#L20628) | [20628](../youtube-playback-plox.user.js#L20628) |

## [📁 Update Video List](../youtube-playback-plox.user.js#L20669)
> [Line 20669](../youtube-playback-plox.user.js#L20669)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSortValue`](../youtube-playback-plox.user.js#L20676) | [20676](../youtube-playback-plox.user.js#L20676) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L20688) | [20688](../youtube-playback-plox.user.js#L20688) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L20692) | [20692](../youtube-playback-plox.user.js#L20692) |
| `fn` | [`showLoadingState`](../youtube-playback-plox.user.js#L20709) | [20709](../youtube-playback-plox.user.js#L20709) |
| `fn` | [`loadVideoItems`](../youtube-playback-plox.user.js#L20772) | [20772](../youtube-playback-plox.user.js#L20772) |
| `fn` | [`resolvePlaylistTitles`](../youtube-playback-plox.user.js#L20796) | [20796](../youtube-playback-plox.user.js#L20796) |
| `fn` | [`filterItems`](../youtube-playback-plox.user.js#L20828) | [20828](../youtube-playback-plox.user.js#L20828) |
| `fn` | [`buildVirtualItems`](../youtube-playback-plox.user.js#L20872) | [20872](../youtube-playback-plox.user.js#L20872) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L20884) | [20884](../youtube-playback-plox.user.js#L20884) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L20905) | [20905](../youtube-playback-plox.user.js#L20905) |
| `fn` | [`showEmptyState`](../youtube-playback-plox.user.js#L20935) | [20935](../youtube-playback-plox.user.js#L20935) |
| `fn` | [`showListLoadErrorState`](../youtube-playback-plox.user.js#L20968) | [20968](../youtube-playback-plox.user.js#L20968) |
| `fn` | [`updateVirtualScroller`](../youtube-playback-plox.user.js#L20989) | [20989](../youtube-playback-plox.user.js#L20989) |
| `fn` | [`initVirtualScroller`](../youtube-playback-plox.user.js#L21019) | [21019](../youtube-playback-plox.user.js#L21019) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L21065) | [21065](../youtube-playback-plox.user.js#L21065) |
| `fn` | [`resolveGridCols`](../youtube-playback-plox.user.js#L21143) | [21143](../youtube-playback-plox.user.js#L21143) |
| `fn` | [`destroyVirtualScroller`](../youtube-playback-plox.user.js#L21156) | [21156](../youtube-playback-plox.user.js#L21156) |
| `fn` | [`disconnectVirtualScrollerObserver`](../youtube-playback-plox.user.js#L21170) | [21170](../youtube-playback-plox.user.js#L21170) |
| `fn` | [`connectResizeObserver`](../youtube-playback-plox.user.js#L21185) | [21185](../youtube-playback-plox.user.js#L21185) |
| `fn` | [`updateVideoList`](../youtube-playback-plox.user.js#L21218) | [21218](../youtube-playback-plox.user.js#L21218) |
| `fn` | [`isCurrentRender`](../youtube-playback-plox.user.js#L21223) | [21223](../youtube-playback-plox.user.js#L21223) |
| `fn` | [`requestVideoListUpdate`](../youtube-playback-plox.user.js#L21309) | [21309](../youtube-playback-plox.user.js#L21309) |
| `fn` | [`closeModalVideos`](../youtube-playback-plox.user.js#L21320) | [21320](../youtube-playback-plox.user.js#L21320) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L21400) | [21400](../youtube-playback-plox.user.js#L21400) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L21417) | [21417](../youtube-playback-plox.user.js#L21417) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L21445) | [21445](../youtube-playback-plox.user.js#L21445) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L21580)
> [Line 21580](../youtube-playback-plox.user.js#L21580)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L21583) | [21583](../youtube-playback-plox.user.js#L21583) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L21598) | [21598](../youtube-playback-plox.user.js#L21598) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L21609)
> [Line 21609](../youtube-playback-plox.user.js#L21609)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSavedVideosList`](../youtube-playback-plox.user.js#L21612) | [21612](../youtube-playback-plox.user.js#L21612) |
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L21750) | [21750](../youtube-playback-plox.user.js#L21750) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L21760) | [21760](../youtube-playback-plox.user.js#L21760) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L21830) | [21830](../youtube-playback-plox.user.js#L21830) |
| `fn` | [`onSavedVideosKeyDown`](../youtube-playback-plox.user.js#L21839) | [21839](../youtube-playback-plox.user.js#L21839) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L21882)
> [Line 21882](../youtube-playback-plox.user.js#L21882)

| Type | Name | Line |
|---|---|---|
| `fn` | [`generatePlaylistColor`](../youtube-playback-plox.user.js#L21891) | [21891](../youtube-playback-plox.user.js#L21891) |
| `fn` | [`generatePlaylistBorderColor`](../youtube-playback-plox.user.js#L21920) | [21920](../youtube-playback-plox.user.js#L21920) |
| `fn` | [`handleForceTimeAction`](../youtube-playback-plox.user.js#L21942) | [21942](../youtube-playback-plox.user.js#L21942) |
| `fn` | [`handleUnlinkPlaylistAction`](../youtube-playback-plox.user.js#L22008) | [22008](../youtube-playback-plox.user.js#L22008) |
| `fn` | [`handleDeleteEntryAction`](../youtube-playback-plox.user.js#L22030) | [22030](../youtube-playback-plox.user.js#L22030) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L22063) | [22063](../youtube-playback-plox.user.js#L22063) |
| `fn` | [`handleToggleProtectionAction`](../youtube-playback-plox.user.js#L22092) | [22092](../youtube-playback-plox.user.js#L22092) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L22133) | [22133](../youtube-playback-plox.user.js#L22133) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L22181) | [22181](../youtube-playback-plox.user.js#L22181) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L22187) | [22187](../youtube-playback-plox.user.js#L22187) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L22206) | [22206](../youtube-playback-plox.user.js#L22206) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L22240) | [22240](../youtube-playback-plox.user.js#L22240) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L22292) | [22292](../youtube-playback-plox.user.js#L22292) |
| `fn` | [`entryButtonsShown`](../youtube-playback-plox.user.js#L22307) | [22307](../youtube-playback-plox.user.js#L22307) |
| `fn` | [`generateVideoObsidianMarkdown`](../youtube-playback-plox.user.js#L22348) | [22348](../youtube-playback-plox.user.js#L22348) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L22381) | [22381](../youtube-playback-plox.user.js#L22381) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L22387) | [22387](../youtube-playback-plox.user.js#L22387) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L22403) | [22403](../youtube-playback-plox.user.js#L22403) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L22413) | [22413](../youtube-playback-plox.user.js#L22413) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L22421) | [22421](../youtube-playback-plox.user.js#L22421) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L22426) | [22426](../youtube-playback-plox.user.js#L22426) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L22433) | [22433](../youtube-playback-plox.user.js#L22433) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L22436) | [22436](../youtube-playback-plox.user.js#L22436) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L22440) | [22440](../youtube-playback-plox.user.js#L22440) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L22486) | [22486](../youtube-playback-plox.user.js#L22486) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L22486) | [22486](../youtube-playback-plox.user.js#L22486) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L22500) | [22500](../youtube-playback-plox.user.js#L22500) |
| `fn` | [`createModeSelector`](../youtube-playback-plox.user.js#L22774) | [22774](../youtube-playback-plox.user.js#L22774) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L22775) | [22775](../youtube-playback-plox.user.js#L22775) |
| `fn` | [`createViewModeSelector`](../youtube-playback-plox.user.js#L22807) | [22807](../youtube-playback-plox.user.js#L22807) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L22824) | [22824](../youtube-playback-plox.user.js#L22824) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L22825) | [22825](../youtube-playback-plox.user.js#L22825) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L22841) | [22841](../youtube-playback-plox.user.js#L22841) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L22842) | [22842](../youtube-playback-plox.user.js#L22842) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L22891) | [22891](../youtube-playback-plox.user.js#L22891) |
| `fn` | [`createOverflowToggle`](../youtube-playback-plox.user.js#L22922) | [22922](../youtube-playback-plox.user.js#L22922) |
| `fn` | [`makeToolbarGroup`](../youtube-playback-plox.user.js#L22961) | [22961](../youtube-playback-plox.user.js#L22961) |
| `fn` | [`makeDisplayToggle`](../youtube-playback-plox.user.js#L22983) | [22983](../youtube-playback-plox.user.js#L22983) |
| `fn` | [`mountSavedVideosModalActionsToolbar`](../youtube-playback-plox.user.js#L23017) | [23017](../youtube-playback-plox.user.js#L23017) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L23040) | [23040](../youtube-playback-plox.user.js#L23040) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L23054) | [23054](../youtube-playback-plox.user.js#L23054) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L23376) | [23376](../youtube-playback-plox.user.js#L23376) |
| `fn` | [`applyThumbnailToImage`](../youtube-playback-plox.user.js#L23432) | [23432](../youtube-playback-plox.user.js#L23432) |
| `fn` | [`removeLoadListener`](../youtube-playback-plox.user.js#L23441) | [23441](../youtube-playback-plox.user.js#L23441) |
| `fn` | [`removeErrorListener`](../youtube-playback-plox.user.js#L23442) | [23442](../youtube-playback-plox.user.js#L23442) |
| `fn` | [`finish`](../youtube-playback-plox.user.js#L23448) | [23448](../youtube-playback-plox.user.js#L23448) |
| `fn` | [`loadCandidate`](../youtube-playback-plox.user.js#L23463) | [23463](../youtube-playback-plox.user.js#L23463) |
| `fn` | [`createVideoGridRow`](../youtube-playback-plox.user.js#L23498) | [23498](../youtube-playback-plox.user.js#L23498) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L23515) | [23515](../youtube-playback-plox.user.js#L23515) |
| `fn` | [`scheduleHeightUpdate`](../youtube-playback-plox.user.js#L23564) | [23564](../youtube-playback-plox.user.js#L23564) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L23611) | [23611](../youtube-playback-plox.user.js#L23611) |
| `fn` | [`createVideoEntry`](../youtube-playback-plox.user.js#L23625) | [23625](../youtube-playback-plox.user.js#L23625) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L23859) | [23859](../youtube-playback-plox.user.js#L23859) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L23882) | [23882](../youtube-playback-plox.user.js#L23882) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L23883) | [23883](../youtube-playback-plox.user.js#L23883) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L23941)
> [Line 23941](../youtube-playback-plox.user.js#L23941)

| Type | Name | Line |
|---|---|---|
| `fn` | [`restoreDeletedRecordIfUnchanged`](../youtube-playback-plox.user.js#L23960) | [23960](../youtube-playback-plox.user.js#L23960) |
| `fn` | [`canCommit`](../youtube-playback-plox.user.js#L23961) | [23961](../youtube-playback-plox.user.js#L23961) |
| `fn` | [`clearAllData`](../youtube-playback-plox.user.js#L23990) | [23990](../youtube-playback-plox.user.js#L23990) |
| `fn` | [`clearCommitGuard`](../youtube-playback-plox.user.js#L24005) | [24005](../youtube-playback-plox.user.js#L24005) |
| `fn` | [`performClearAllData`](../youtube-playback-plox.user.js#L24025) | [24025](../youtube-playback-plox.user.js#L24025) |
| `fn` | [`undoClearAll`](../youtube-playback-plox.user.js#L24215) | [24215](../youtube-playback-plox.user.js#L24215) |
| `fn` | [`undoCommitGuard`](../youtube-playback-plox.user.js#L24218) | [24218](../youtube-playback-plox.user.js#L24218) |
| `fn` | [`performUndoClearAll`](../youtube-playback-plox.user.js#L24231) | [24231](../youtube-playback-plox.user.js#L24231) |

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L24299)
> [Line 24299](../youtube-playback-plox.user.js#L24299)

| Type | Name | Line |
|---|---|---|
| `fn` | [`registerOwnedMenuCommand`](../youtube-playback-plox.user.js#L24308) | [24308](../youtube-playback-plox.user.js#L24308) |
| `fn` | [`unregisterOwnedMenuCommands`](../youtube-playback-plox.user.js#L24318) | [24318](../youtube-playback-plox.user.js#L24318) |
| `fn` | [`registerMenuCommands`](../youtube-playback-plox.user.js#L24331) | [24331](../youtube-playback-plox.user.js#L24331) |

## [🔄 Data Migration](../youtube-playback-plox.user.js#L24357)
> [Line 24357](../youtube-playback-plox.user.js#L24357)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeVideoType`](../youtube-playback-plox.user.js#L24366) | [24366](../youtube-playback-plox.user.js#L24366) |
| `fn` | [`cleanupNonVideoData`](../youtube-playback-plox.user.js#L24388) | [24388](../youtube-playback-plox.user.js#L24388) |
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L24415) | [24415](../youtube-playback-plox.user.js#L24415) |
| `fn` | [`runAutoCleanup`](../youtube-playback-plox.user.js#L24636) | [24636](../youtube-playback-plox.user.js#L24636) |
| `fn` | [`cleanupCommitGuard`](../youtube-playback-plox.user.js#L24656) | [24656](../youtube-playback-plox.user.js#L24656) |

## [🚀 Init](../youtube-playback-plox.user.js#L24860)
> [Line 24860](../youtube-playback-plox.user.js#L24860)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L24873) | [24873](../youtube-playback-plox.user.js#L24873) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L24895) | [24895](../youtube-playback-plox.user.js#L24895) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L25260) | [25260](../youtube-playback-plox.user.js#L25260) |

