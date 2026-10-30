# Userscript Structure
> Auto-generated on 2026-10-30 · version 0.0.13
> **DO NOT EDIT MANUALLY** - regenerate with `node ./scripts/generate-structure.mjs`

---

## Sections index

1. [🔍 Logger System](#logger-system) - [line 141](../youtube-playback-plox.user.js#L141)
2. [🛡️ Initialization Guard (SPA Safety)](#initialization-guard-spa-safety) - [line 269](../youtube-playback-plox.user.js#L269)
3. [📦 Config](#config) - [line 412](../youtube-playback-plox.user.js#L412)
4. [📊 Global Constants](#global-constants) - [line 541](../youtube-playback-plox.user.js#L541)
5. [📊 Global Variables](#global-variables) - [line 604](../youtube-playback-plox.user.js#L604)
6. [🌐 Translations](#translations) - [line 642](../youtube-playback-plox.user.js#L642)
7. [🔧 Utils](#utils) - [line 1105](../youtube-playback-plox.user.js#L1105)
8. [🔧 Sanitize HTML](#sanitize-html) - [line 1108](../youtube-playback-plox.user.js#L1108)
9. [🔧 Is Visibly Displayed](#is-visibly-displayed) - [line 1194](../youtube-playback-plox.user.js#L1194)
10. [🔒 Focus containment](#focus-containment) - [line 1238](../youtube-playback-plox.user.js#L1238)
11. [🔧 queryFirst](#queryfirst) - [line 1275](../youtube-playback-plox.user.js#L1275)
12. [🔧 Format Time](#format-time) - [line 1293](../youtube-playback-plox.user.js#L1293)
13. [🔧 parseTimeToSeconds](#parsetimetoseconds) - [line 1337](../youtube-playback-plox.user.js#L1337)
14. [🔧 normalizeSeconds](#normalizeseconds) - [line 1385](../youtube-playback-plox.user.js#L1385)
15. [🔧 getUrlTimeParamSeconds](#geturltimeparamseconds) - [line 1411](../youtube-playback-plox.user.js#L1411)
16. [⏳ delay](#delay) - [line 1440](../youtube-playback-plox.user.js#L1440)
17. [🔧 setInnerHTML](#setinnerhtml) - [line 1580](../youtube-playback-plox.user.js#L1580)
18. [🔧 Create Element](#create-element) - [line 1655](../youtube-playback-plox.user.js#L1655)
19. [🔧 Debounce](#debounce) - [line 1792](../youtube-playback-plox.user.js#L1792)
20. [🔧 downloadBlobMobileSafe](#downloadblobmobilesafe) - [line 1827](../youtube-playback-plox.user.js#L1827)
21. [🗄️ Event Handlers store](#event-handlers-store) - [line 1897](../youtube-playback-plox.user.js#L1897)
22. [📝 Selector System](#selector-system) - [line 2013](../youtube-playback-plox.user.js#L2013)
23. [💾 Simple LRU Cache](#simple-lru-cache) - [line 2306](../youtube-playback-plox.user.js#L2306)
24. [⚙️ DOM Cache System](#dom-cache-system) - [line 2387](../youtube-playback-plox.user.js#L2387)
25. [🌐 Translation Functions](#translation-functions) - [line 2763](../youtube-playback-plox.user.js#L2763)
26. [🎨 Styles](#styles) - [line 2974](../youtube-playback-plox.user.js#L2974)
27. [🎨 Theme](#theme) - [line 5697](../youtube-playback-plox.user.js#L5697)
28. [🎨 SVG Icons](#svg-icons) - [line 5775](../youtube-playback-plox.user.js#L5775)
29. [🎨 Progress Bar Style](#progress-bar-style) - [line 5937](../youtube-playback-plox.user.js#L5937)
30. [💾 Storage + Settings](#storage-settings) - [line 6485](../youtube-playback-plox.user.js#L6485)
31. [📢 Ad Caches](#ad-caches) - [line 9484](../youtube-playback-plox.user.js#L9484)
32. [📢 Ad Detector](#ad-detector) - [line 9510](../youtube-playback-plox.user.js#L9510)
33. [🎯 VirtualScroller](#virtualscroller) - [line 9703](../youtube-playback-plox.user.js#L9703)
34. [📤 Import/Export JSON](#importexport-json) - [line 10209](../youtube-playback-plox.user.js#L10209)
35. [☁️ GitHub Backup](#github-backup) - [line 10827](../youtube-playback-plox.user.js#L10827)
36. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 11364](../youtube-playback-plox.user.js#L11364)
37. [🔄 Normalize Video Data](#normalize-video-data) - [line 11546](../youtube-playback-plox.user.js#L11546)
38. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 11648](../youtube-playback-plox.user.js#L11648)
39. [Parse FreeTube DB](#parse-freetube-db) - [line 11739](../youtube-playback-plox.user.js#L11739)
40. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 11832](../youtube-playback-plox.user.js#L11832)
41. [⬆ Export To FreeTube](#export-to-freetube) - [line 11862](../youtube-playback-plox.user.js#L11862)
42. [⬇ Import From FreeTube](#import-from-freetube) - [line 11906](../youtube-playback-plox.user.js#L11906)
43. [🔄 Insert Completion Event](#insert-completion-event) - [line 11972](../youtube-playback-plox.user.js#L11972)
44. [💾 Save Video Generic](#save-video-generic) - [line 12019](../youtube-playback-plox.user.js#L12019)
45. [📺 Helpers](#helpers) - [line 12285](../youtube-playback-plox.user.js#L12285)
46. [📺 Gets saved video data](#gets-saved-video-data) - [line 12288](../youtube-playback-plox.user.js#L12288)
47. [📺 Get Player Video ID](#get-player-video-id) - [line 12345](../youtube-playback-plox.user.js#L12345)
48. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 12425](../youtube-playback-plox.user.js#L12425)
49. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 12630](../youtube-playback-plox.user.js#L12630)
50. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 12847](../youtube-playback-plox.user.js#L12847)
51. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 12869](../youtube-playback-plox.user.js#L12869)
52. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 12897](../youtube-playback-plox.user.js#L12897)
53. [📺 get Playlist Name](#get-playlist-name) - [line 12942](../youtube-playback-plox.user.js#L12942)
54. [🕒 Time Display](#time-display) - [line 13242](../youtube-playback-plox.user.js#L13242)
55. [🖼️ Display Button Helpers](#display-button-helpers) - [line 13288](../youtube-playback-plox.user.js#L13288)
56. [🍞 Toasts](#toasts) - [line 14212](../youtube-playback-plox.user.js#L14212)
57. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 14527](../youtube-playback-plox.user.js#L14527)
58. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 14574](../youtube-playback-plox.user.js#L14574)
59. [⚙️ Settings UI](#settings-ui) - [line 14892](../youtube-playback-plox.user.js#L14892)
60. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 15403](../youtube-playback-plox.user.js#L15403)
61. [🎵 Video Selection](#video-selection) - [line 15461](../youtube-playback-plox.user.js#L15461)
62. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 16453](../youtube-playback-plox.user.js#L16453)
63. [📡 Video Observer Manager](#video-observer-manager) - [line 16736](../youtube-playback-plox.user.js#L16736)
64. [Processing Functions](#processing-functions) - [line 17611](../youtube-playback-plox.user.js#L17611)
65. [PlaybackController](#playbackcontroller) - [line 19094](../youtube-playback-plox.user.js#L19094)
66. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 19793](../youtube-playback-plox.user.js#L19793)
67. [📂 Sort UI](#sort-ui) - [line 20331](../youtube-playback-plox.user.js#L20331)
68. [📂 Filters UI](#filters-ui) - [line 20533](../youtube-playback-plox.user.js#L20533)
69. [📂 Video List UI](#video-list-ui) - [line 20821](../youtube-playback-plox.user.js#L20821)
70. [📁 Update Video List](#update-video-list) - [line 20999](../youtube-playback-plox.user.js#L20999)
71. [🔘 Floating Button](#floating-button) - [line 21910](../youtube-playback-plox.user.js#L21910)
72. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 21939](../youtube-playback-plox.user.js#L21939)
73. [📂 Video Entry](#video-entry) - [line 22200](../youtube-playback-plox.user.js#L22200)
74. [🗑️ Clear All Data](#clear-all-data) - [line 24221](../youtube-playback-plox.user.js#L24221)
75. [⚙️ Menu Commands](#menu-commands) - [line 24573](../youtube-playback-plox.user.js#L24573)
76. [🔄 Data Migration](#data-migration) - [line 24631](../youtube-playback-plox.user.js#L24631)
77. [🚀 Init](#init) - [line 25134](../youtube-playback-plox.user.js#L25134)

---

## [🔍 Logger System](../youtube-playback-plox.user.js#L141)
> [Line 141](../youtube-playback-plox.user.js#L141)

| Type | Name | Line |
|---|---|---|
| `fn` | [`resolveArgs`](../youtube-playback-plox.user.js#L153) | [153](../youtube-playback-plox.user.js#L153) |
| `fn` | [`build`](../youtube-playback-plox.user.js#L155) | [155](../youtube-playback-plox.user.js#L155) |
| `fn` | [`consumeErrorLogBudget`](../youtube-playback-plox.user.js#L211) | [211](../youtube-playback-plox.user.js#L211) |
| `fn` | [`occurrences`](../youtube-playback-plox.user.js#L217) | [217](../youtube-playback-plox.user.js#L217) |
| `fn` | [`isOwnErrorEvent`](../youtube-playback-plox.user.js#L229) | [229](../youtube-playback-plox.user.js#L229) |
| `fn` | [`message`](../youtube-playback-plox.user.js#L237) | [237](../youtube-playback-plox.user.js#L237) |

## [🛡️ Initialization Guard (SPA Safety)](../youtube-playback-plox.user.js#L269)
> [Line 269](../youtube-playback-plox.user.js#L269)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isInstanceActive`](../youtube-playback-plox.user.js#L322) | [322](../youtube-playback-plox.user.js#L322) |
| `fn` | [`destroyToasts`](../youtube-playback-plox.user.js#L331) | [331](../youtube-playback-plox.user.js#L331) |
| `fn` | [`assertActiveInstance`](../youtube-playback-plox.user.js#L404) | [404](../youtube-playback-plox.user.js#L404) |

## [📦 Config](../youtube-playback-plox.user.js#L412)
> [Line 412](../youtube-playback-plox.user.js#L412)

_No relevant functions or constants detected._

## [📊 Global Constants](../youtube-playback-plox.user.js#L541)
> [Line 541](../youtube-playback-plox.user.js#L541)

| Type | Name | Line |
|---|---|---|
| `module` | [`TYPE_CONFIG`](../youtube-playback-plox.user.js#L559) | [559](../youtube-playback-plox.user.js#L559) |

## [📊 Global Variables](../youtube-playback-plox.user.js#L604)
> [Line 604](../youtube-playback-plox.user.js#L604)

_No relevant functions or constants detected._

## [🌐 Translations](../youtube-playback-plox.user.js#L642)
> [Line 642](../youtube-playback-plox.user.js#L642)

| Type | Name | Line |
|---|---|---|
| `fn` | [`loadTranslations`](../youtube-playback-plox.user.js#L972) | [972](../youtube-playback-plox.user.js#L972) |
| `fn` | [`fetchUrl`](../youtube-playback-plox.user.js#L1011) | [1011](../youtube-playback-plox.user.js#L1011) |

## [🔧 Utils](../youtube-playback-plox.user.js#L1105)
> [Line 1105](../youtube-playback-plox.user.js#L1105)

_No relevant functions or constants detected._

## [🔧 Sanitize HTML](../youtube-playback-plox.user.js#L1108)
> [Line 1108](../youtube-playback-plox.user.js#L1108)

| Type | Name | Line |
|---|---|---|
| `fn` | [`sanitizeHTML`](../youtube-playback-plox.user.js#L1118) | [1118](../youtube-playback-plox.user.js#L1118) |
| `module` | [`sanitizeHTML`](../youtube-playback-plox.user.js#L1118) | [1118](../youtube-playback-plox.user.js#L1118) |
| `fn` | [`getSafeUrl`](../youtube-playback-plox.user.js#L1142) | [1142](../youtube-playback-plox.user.js#L1142) |
| `fn` | [`getPlayerApi`](../youtube-playback-plox.user.js#L1167) | [1167](../youtube-playback-plox.user.js#L1167) |
| `fn` | [`scrubSensitiveData`](../youtube-playback-plox.user.js#L1182) | [1182](../youtube-playback-plox.user.js#L1182) |

## [🔧 Is Visibly Displayed](../youtube-playback-plox.user.js#L1194)
> [Line 1194](../youtube-playback-plox.user.js#L1194)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isVisiblyDisplayed`](../youtube-playback-plox.user.js#L1216) | [1216](../youtube-playback-plox.user.js#L1216) |

## [🔒 Focus containment](../youtube-playback-plox.user.js#L1238)
> [Line 1238](../youtube-playback-plox.user.js#L1238)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getFocusableElements`](../youtube-playback-plox.user.js#L1247) | [1247](../youtube-playback-plox.user.js#L1247) |
| `fn` | [`trapTabFocus`](../youtube-playback-plox.user.js#L1260) | [1260](../youtube-playback-plox.user.js#L1260) |

## [🔧 queryFirst](../youtube-playback-plox.user.js#L1275)
> [Line 1275](../youtube-playback-plox.user.js#L1275)

| Type | Name | Line |
|---|---|---|
| `fn` | [`queryFirst`](../youtube-playback-plox.user.js#L1284) | [1284](../youtube-playback-plox.user.js#L1284) |

## [🔧 Format Time](../youtube-playback-plox.user.js#L1293)
> [Line 1293](../youtube-playback-plox.user.js#L1293)

| Type | Name | Line |
|---|---|---|
| `fn` | [`formatTime`](../youtube-playback-plox.user.js#L1315) | [1315](../youtube-playback-plox.user.js#L1315) |

## [🔧 parseTimeToSeconds](../youtube-playback-plox.user.js#L1337)
> [Line 1337](../youtube-playback-plox.user.js#L1337)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseTimeToSeconds`](../youtube-playback-plox.user.js#L1360) | [1360](../youtube-playback-plox.user.js#L1360) |

## [🔧 normalizeSeconds](../youtube-playback-plox.user.js#L1385)
> [Line 1385](../youtube-playback-plox.user.js#L1385)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeSeconds`](../youtube-playback-plox.user.js#L1404) | [1404](../youtube-playback-plox.user.js#L1404) |

## [🔧 getUrlTimeParamSeconds](../youtube-playback-plox.user.js#L1411)
> [Line 1411](../youtube-playback-plox.user.js#L1411)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getUrlTimeParamSeconds`](../youtube-playback-plox.user.js#L1419) | [1419](../youtube-playback-plox.user.js#L1419) |

## [⏳ delay](../youtube-playback-plox.user.js#L1440)
> [Line 1440](../youtube-playback-plox.user.js#L1440)

| Type | Name | Line |
|---|---|---|
| `fn` | [`delay`](../youtube-playback-plox.user.js#L1446) | [1446](../youtube-playback-plox.user.js#L1446) |
| `fn` | [`withStorageTimeout`](../youtube-playback-plox.user.js#L1460) | [1460](../youtube-playback-plox.user.js#L1460) |
| `fn` | [`runGMMutation`](../youtube-playback-plox.user.js#L1487) | [1487](../youtube-playback-plox.user.js#L1487) |
| `fn` | [`gmGetValue`](../youtube-playback-plox.user.js#L1530) | [1530](../youtube-playback-plox.user.js#L1530) |
| `fn` | [`gmSetValue`](../youtube-playback-plox.user.js#L1548) | [1548](../youtube-playback-plox.user.js#L1548) |
| `fn` | [`gmDeleteValue`](../youtube-playback-plox.user.js#L1560) | [1560](../youtube-playback-plox.user.js#L1560) |
| `fn` | [`gmListValues`](../youtube-playback-plox.user.js#L1571) | [1571](../youtube-playback-plox.user.js#L1571) |

## [🔧 setInnerHTML](../youtube-playback-plox.user.js#L1580)
> [Line 1580](../youtube-playback-plox.user.js#L1580)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTrustedTypesPolicy`](../youtube-playback-plox.user.js#L1590) | [1590](../youtube-playback-plox.user.js#L1590) |
| `fn` | [`setInnerHTML`](../youtube-playback-plox.user.js#L1615) | [1615](../youtube-playback-plox.user.js#L1615) |

## [🔧 Create Element](../youtube-playback-plox.user.js#L1655)
> [Line 1655](../youtube-playback-plox.user.js#L1655)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createElement`](../youtube-playback-plox.user.js#L1673) | [1673](../youtube-playback-plox.user.js#L1673) |
| `fn` | [`append`](../youtube-playback-plox.user.js#L1735) | [1735](../youtube-playback-plox.user.js#L1735) |
| `fn` | [`applyNumericClamping`](../youtube-playback-plox.user.js#L1762) | [1762](../youtube-playback-plox.user.js#L1762) |
| `fn` | [`clamp`](../youtube-playback-plox.user.js#L1765) | [1765](../youtube-playback-plox.user.js#L1765) |

## [🔧 Debounce](../youtube-playback-plox.user.js#L1792)
> [Line 1792](../youtube-playback-plox.user.js#L1792)

| Type | Name | Line |
|---|---|---|
| `fn` | [`debounce`](../youtube-playback-plox.user.js#L1801) | [1801](../youtube-playback-plox.user.js#L1801) |
| `fn` | [`debounced`](../youtube-playback-plox.user.js#L1804) | [1804](../youtube-playback-plox.user.js#L1804) |

## [🔧 downloadBlobMobileSafe](../youtube-playback-plox.user.js#L1827)
> [Line 1827](../youtube-playback-plox.user.js#L1827)

| Type | Name | Line |
|---|---|---|
| `fn` | [`downloadBlobMobileSafe`](../youtube-playback-plox.user.js#L1835) | [1835](../youtube-playback-plox.user.js#L1835) |

## [🗄️ Event Handlers store](../youtube-playback-plox.user.js#L1897)
> [Line 1897](../youtube-playback-plox.user.js#L1897)

| Type | Name | Line |
|---|---|---|
| `class` | [`DisposableStore`](../youtube-playback-plox.user.js#L1903) | [1903](../youtube-playback-plox.user.js#L1903) |
| `fn` | [`addDisposableListener`](../youtube-playback-plox.user.js#L1989) | [1989](../youtube-playback-plox.user.js#L1989) |
| `fn` | [`removeListener`](../youtube-playback-plox.user.js#L1997) | [1997](../youtube-playback-plox.user.js#L1997) |
| `fn` | [`selfRetiringDispose`](../youtube-playback-plox.user.js#L2000) | [2000](../youtube-playback-plox.user.js#L2000) |

## [📝 Selector System](../youtube-playback-plox.user.js#L2013)
> [Line 2013](../youtube-playback-plox.user.js#L2013)

| Type | Name | Line |
|---|---|---|
| `module` | [`PREFIX`](../youtube-playback-plox.user.js#L2104) | [2104](../youtube-playback-plox.user.js#L2104) |
| `fn` | [`createSelectorSystem`](../youtube-playback-plox.user.js#L2129) | [2129](../youtube-playback-plox.user.js#L2129) |

## [💾 Simple LRU Cache](../youtube-playback-plox.user.js#L2306)
> [Line 2306](../youtube-playback-plox.user.js#L2306)

| Type | Name | Line |
|---|---|---|
| `class` | [`SimpleLRUCache`](../youtube-playback-plox.user.js#L2311) | [2311](../youtube-playback-plox.user.js#L2311) |

## [⚙️ DOM Cache System](../youtube-playback-plox.user.js#L2387)
> [Line 2387](../youtube-playback-plox.user.js#L2387)

| Type | Name | Line |
|---|---|---|
| `fn` | [`DOMHelpers`](../youtube-playback-plox.user.js#L2404) | [2404](../youtube-playback-plox.user.js#L2404) |
| `module` | [`DOMHelpers`](../youtube-playback-plox.user.js#L2404) | [2404](../youtube-playback-plox.user.js#L2404) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L2436) | [2436](../youtube-playback-plox.user.js#L2436) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L2474) | [2474](../youtube-playback-plox.user.js#L2474) |

## [🌐 Translation Functions](../youtube-playback-plox.user.js#L2763)
> [Line 2763](../youtube-playback-plox.user.js#L2763)

| Type | Name | Line |
|---|---|---|
| `fn` | [`hasLanguage`](../youtube-playback-plox.user.js#L2777) | [2777](../youtube-playback-plox.user.js#L2777) |
| `fn` | [`resolveStartupLanguage`](../youtube-playback-plox.user.js#L2806) | [2806](../youtube-playback-plox.user.js#L2806) |
| `fn` | [`t`](../youtube-playback-plox.user.js#L2824) | [2824](../youtube-playback-plox.user.js#L2824) |
| `fn` | [`normParams`](../youtube-playback-plox.user.js#L2834) | [2834](../youtube-playback-plox.user.js#L2834) |
| `fn` | [`replaceParams`](../youtube-playback-plox.user.js#L2851) | [2851](../youtube-playback-plox.user.js#L2851) |
| `fn` | [`setLanguage`](../youtube-playback-plox.user.js#L2867) | [2867](../youtube-playback-plox.user.js#L2867) |
| `fn` | [`detectBrowserLanguage`](../youtube-playback-plox.user.js#L2929) | [2929](../youtube-playback-plox.user.js#L2929) |
| `fn` | [`candidates`](../youtube-playback-plox.user.js#L2931) | [2931](../youtube-playback-plox.user.js#L2931) |
| `fn` | [`normalized`](../youtube-playback-plox.user.js#L2950) | [2950](../youtube-playback-plox.user.js#L2950) |

## [🎨 Styles](../youtube-playback-plox.user.js#L2974)
> [Line 2974](../youtube-playback-plox.user.js#L2974)

_No relevant functions or constants detected._

## [🎨 Theme](../youtube-playback-plox.user.js#L5697)
> [Line 5697](../youtube-playback-plox.user.js#L5697)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isYouTubeDarkTheme`](../youtube-playback-plox.user.js#L5704) | [5704](../youtube-playback-plox.user.js#L5704) |
| `fn` | [`applyTheme`](../youtube-playback-plox.user.js#L5722) | [5722](../youtube-playback-plox.user.js#L5722) |
| `fn` | [`observeThemeChanges`](../youtube-playback-plox.user.js#L5735) | [5735](../youtube-playback-plox.user.js#L5735) |
| `fn` | [`cleanupThemeObserver`](../youtube-playback-plox.user.js#L5758) | [5758](../youtube-playback-plox.user.js#L5758) |
| `fn` | [`cleanupGlobalListeners`](../youtube-playback-plox.user.js#L5769) | [5769](../youtube-playback-plox.user.js#L5769) |

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L5775)
> [Line 5775](../youtube-playback-plox.user.js#L5775)

_No relevant functions or constants detected._

## [🎨 Progress Bar Style](../youtube-playback-plox.user.js#L5937)
> [Line 5937](../youtube-playback-plox.user.js#L5937)

| Type | Name | Line |
|---|---|---|
| `fn` | [`clearAllProgressGradientState`](../youtube-playback-plox.user.js#L5949) | [5949](../youtube-playback-plox.user.js#L5949) |
| `fn` | [`syncProgressGradientStateForContainer`](../youtube-playback-plox.user.js#L5965) | [5965](../youtube-playback-plox.user.js#L5965) |
| `fn` | [`resolvePlayerRootForGradient`](../youtube-playback-plox.user.js#L5988) | [5988](../youtube-playback-plox.user.js#L5988) |
| `fn` | [`clearProgressColorFromPlayerRoot`](../youtube-playback-plox.user.js#L5999) | [5999](../youtube-playback-plox.user.js#L5999) |
| `fn` | [`applyProgressColorToPlayerRoot`](../youtube-playback-plox.user.js#L6019) | [6019](../youtube-playback-plox.user.js#L6019) |
| `fn` | [`applyProgressColorToShortsSurfaces`](../youtube-playback-plox.user.js#L6043) | [6043](../youtube-playback-plox.user.js#L6043) |
| `fn` | [`repaintWatchProgressBarFromActivePlayer`](../youtube-playback-plox.user.js#L6063) | [6063](../youtube-playback-plox.user.js#L6063) |
| `fn` | [`scheduleProgressBarGradientRepaint`](../youtube-playback-plox.user.js#L6085) | [6085](../youtube-playback-plox.user.js#L6085) |
| `fn` | [`isCurrentSession`](../youtube-playback-plox.user.js#L6087) | [6087](../youtube-playback-plox.user.js#L6087) |
| `fn` | [`paint`](../youtube-playback-plox.user.js#L6094) | [6094](../youtube-playback-plox.user.js#L6094) |
| `fn` | [`isLivePlaybackForGradient`](../youtube-playback-plox.user.js#L6127) | [6127](../youtube-playback-plox.user.js#L6127) |
| `fn` | [`updateProgressBarGradient`](../youtube-playback-plox.user.js#L6164) | [6164](../youtube-playback-plox.user.js#L6164) |
| `fn` | [`refreshProgressBarGradientForSession`](../youtube-playback-plox.user.js#L6249) | [6249](../youtube-playback-plox.user.js#L6249) |
| `fn` | [`resetProgressBarGradient`](../youtube-playback-plox.user.js#L6272) | [6272](../youtube-playback-plox.user.js#L6272) |
| `fn` | [`injectProgressBarCSS`](../youtube-playback-plox.user.js#L6304) | [6304](../youtube-playback-plox.user.js#L6304) |
| `fn` | [`getProgressColor`](../youtube-playback-plox.user.js#L6434) | [6434](../youtube-playback-plox.user.js#L6434) |
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L6462) | [6462](../youtube-playback-plox.user.js#L6462) |
| `fn` | [`getProgressColorForText`](../youtube-playback-plox.user.js#L6471) | [6471](../youtube-playback-plox.user.js#L6471) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L6485)
> [Line 6485](../youtube-playback-plox.user.js#L6485)

| Type | Name | Line |
|---|---|---|
| `fn` | [`boundedSetAdd`](../youtube-playback-plox.user.js#L6526) | [6526](../youtube-playback-plox.user.js#L6526) |
| `fn` | [`markLocalDeletion`](../youtube-playback-plox.user.js#L6539) | [6539](../youtube-playback-plox.user.js#L6539) |
| `fn` | [`rememberGMFallbackKey`](../youtube-playback-plox.user.js#L6550) | [6550](../youtube-playback-plox.user.js#L6550) |
| `fn` | [`rememberGMTombstone`](../youtube-playback-plox.user.js#L6561) | [6561](../youtube-playback-plox.user.js#L6561) |
| `fn` | [`bumpStorageKeyRevision`](../youtube-playback-plox.user.js#L6576) | [6576](../youtube-playback-plox.user.js#L6576) |
| `fn` | [`getStorageRevisionSnapshot`](../youtube-playback-plox.user.js#L6589) | [6589](../youtube-playback-plox.user.js#L6589) |
| `fn` | [`storageRevisionChanged`](../youtube-playback-plox.user.js#L6602) | [6602](../youtube-playback-plox.user.js#L6602) |
| `fn` | [`storageRevisionRetryNeeded`](../youtube-playback-plox.user.js#L6617) | [6617](../youtube-playback-plox.user.js#L6617) |
| `fn` | [`invalidateSessionSavedData`](../youtube-playback-plox.user.js#L6697) | [6697](../youtube-playback-plox.user.js#L6697) |
| `fn` | [`broadcastStorageChange`](../youtube-playback-plox.user.js#L6717) | [6717](../youtube-playback-plox.user.js#L6717) |
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L6740) | [6740](../youtube-playback-plox.user.js#L6740) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L6740) | [6740](../youtube-playback-plox.user.js#L6740) |
| `fn` | [`enqueueDurableOperation`](../youtube-playback-plox.user.js#L6770) | [6770](../youtube-playback-plox.user.js#L6770) |
| `fn` | [`hasDurableGMStorage`](../youtube-playback-plox.user.js#L6783) | [6783](../youtube-playback-plox.user.js#L6783) |
| `fn` | [`hasAnyGMStorageApi`](../youtube-playback-plox.user.js#L6793) | [6793](../youtube-playback-plox.user.js#L6793) |
| `fn` | [`waitForDurableMutations`](../youtube-playback-plox.user.js#L6806) | [6806](../youtube-playback-plox.user.js#L6806) |
| `fn` | [`canUseIDB`](../youtube-playback-plox.user.js#L6811) | [6811](../youtube-playback-plox.user.js#L6811) |
| `fn` | [`isStorageRecordError`](../youtube-playback-plox.user.js#L6818) | [6818](../youtube-playback-plox.user.js#L6818) |
| `fn` | [`isStorageProviderError`](../youtube-playback-plox.user.js#L6828) | [6828](../youtube-playback-plox.user.js#L6828) |
| `fn` | [`scheduleQuarantineNotice`](../youtube-playback-plox.user.js#L6838) | [6838](../youtube-playback-plox.user.js#L6838) |
| `fn` | [`registerQuarantinedRecord`](../youtube-playback-plox.user.js#L6876) | [6876](../youtube-playback-plox.user.js#L6876) |
| `fn` | [`quarantineRecordError`](../youtube-playback-plox.user.js#L6898) | [6898](../youtube-playback-plox.user.js#L6898) |
| `fn` | [`getQuarantinedRecords`](../youtube-playback-plox.user.js#L6907) | [6907](../youtube-playback-plox.user.js#L6907) |
| `fn` | [`persistRepairedRows`](../youtube-playback-plox.user.js#L6918) | [6918](../youtube-playback-plox.user.js#L6918) |
| `fn` | [`buildStorageDamageReport`](../youtube-playback-plox.user.js#L6946) | [6946](../youtube-playback-plox.user.js#L6946) |
| `fn` | [`markIDBUnavailable`](../youtube-playback-plox.user.js#L6972) | [6972](../youtube-playback-plox.user.js#L6972) |
| `fn` | [`markIDBAvailable`](../youtube-playback-plox.user.js#L6977) | [6977](../youtube-playback-plox.user.js#L6977) |
| `fn` | [`pickNewerDurableRecord`](../youtube-playback-plox.user.js#L6988) | [6988](../youtube-playback-plox.user.js#L6988) |
| `fn` | [`getGMFallback`](../youtube-playback-plox.user.js#L7002) | [7002](../youtube-playback-plox.user.js#L7002) |
| `fn` | [`parseStoredRecord`](../youtube-playback-plox.user.js#L7031) | [7031](../youtube-playback-plox.user.js#L7031) |
| `fn` | [`setGMFallback`](../youtube-playback-plox.user.js#L7058) | [7058](../youtube-playback-plox.user.js#L7058) |
| `fn` | [`setGMFallbackNewestWins`](../youtube-playback-plox.user.js#L7072) | [7072](../youtube-playback-plox.user.js#L7072) |
| `fn` | [`deleteGMFallback`](../youtube-playback-plox.user.js#L7095) | [7095](../youtube-playback-plox.user.js#L7095) |
| `fn` | [`reconcileGMFallbackAfterIDB`](../youtube-playback-plox.user.js#L7132) | [7132](../youtube-playback-plox.user.js#L7132) |
| `fn` | [`reconcileGMFallbacksAfterIDB`](../youtube-playback-plox.user.js#L7223) | [7223](../youtube-playback-plox.user.js#L7223) |
| `fn` | [`initialize`](../youtube-playback-plox.user.js#L7307) | [7307](../youtube-playback-plox.user.js#L7307) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L7372) | [7372](../youtube-playback-plox.user.js#L7372) |
| `fn` | [`set`](../youtube-playback-plox.user.js#L7577) | [7577](../youtube-playback-plox.user.js#L7577) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7581) | [7581](../youtube-playback-plox.user.js#L7581) |
| `fn` | [`setMany`](../youtube-playback-plox.user.js#L7674) | [7674](../youtube-playback-plox.user.js#L7674) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7685) | [7685](../youtube-playback-plox.user.js#L7685) |
| `fn` | [`deleteGMFallbackIfUnchanged`](../youtube-playback-plox.user.js#L7848) | [7848](../youtube-playback-plox.user.js#L7848) |
| `fn` | [`del`](../youtube-playback-plox.user.js#L7871) | [7871](../youtube-playback-plox.user.js#L7871) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7874) | [7874](../youtube-playback-plox.user.js#L7874) |
| `fn` | [`repairQuarantinedRecords`](../youtube-playback-plox.user.js#L8016) | [8016](../youtube-playback-plox.user.js#L8016) |
| `fn` | [`purgeQuarantinedRecords`](../youtube-playback-plox.user.js#L8069) | [8069](../youtube-playback-plox.user.js#L8069) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L8139) | [8139](../youtube-playback-plox.user.js#L8139) |
| `fn` | [`rawKeys`](../youtube-playback-plox.user.js#L8203) | [8203](../youtube-playback-plox.user.js#L8203) |
| `fn` | [`getCompleteVideoSnapshot`](../youtube-playback-plox.user.js#L8269) | [8269](../youtube-playback-plox.user.js#L8269) |
| `fn` | [`getBackendInfo`](../youtube-playback-plox.user.js#L8446) | [8446](../youtube-playback-plox.user.js#L8446) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L8475) | [8475](../youtube-playback-plox.user.js#L8475) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L8475) | [8475](../youtube-playback-plox.user.js#L8475) |
| `fn` | [`openDatabase`](../youtube-playback-plox.user.js#L8483) | [8483](../youtube-playback-plox.user.js#L8483) |
| `fn` | [`failOpen`](../youtube-playback-plox.user.js#L8489) | [8489](../youtube-playback-plox.user.js#L8489) |
| `fn` | [`runInStore`](../youtube-playback-plox.user.js#L8549) | [8549](../youtube-playback-plox.user.js#L8549) |
| `fn` | [`enqueue`](../youtube-playback-plox.user.js#L8574) | [8574](../youtube-playback-plox.user.js#L8574) |
| `fn` | [`describeStoredValueType`](../youtube-playback-plox.user.js#L8590) | [8590](../youtube-playback-plox.user.js#L8590) |
| `fn` | [`isEmptyStoredValue`](../youtube-playback-plox.user.js#L8604) | [8604](../youtube-playback-plox.user.js#L8604) |
| `fn` | [`sanitizeToJsonSafe`](../youtube-playback-plox.user.js#L8625) | [8625](../youtube-playback-plox.user.js#L8625) |
| `fn` | [`attemptStoredValueRepair`](../youtube-playback-plox.user.js#L8672) | [8672](../youtube-playback-plox.user.js#L8672) |
| `fn` | [`sanitizeEntries`](../youtube-playback-plox.user.js#L8741) | [8741](../youtube-playback-plox.user.js#L8741) |
| `fn` | [`pushEntry`](../youtube-playback-plox.user.js#L8754) | [8754](../youtube-playback-plox.user.js#L8754) |
| `fn` | [`getAllEntries`](../youtube-playback-plox.user.js#L8859) | [8859](../youtube-playback-plox.user.js#L8859) |
| `fn` | [`repairEntries`](../youtube-playback-plox.user.js#L8871) | [8871](../youtube-playback-plox.user.js#L8871) |
| `fn` | [`putEntry`](../youtube-playback-plox.user.js#L8905) | [8905](../youtube-playback-plox.user.js#L8905) |
| `fn` | [`deleteEntry`](../youtube-playback-plox.user.js#L8909) | [8909](../youtube-playback-plox.user.js#L8909) |
| `fn` | [`bulkDelete`](../youtube-playback-plox.user.js#L8918) | [8918](../youtube-playback-plox.user.js#L8918) |
| `fn` | [`bulkPut`](../youtube-playback-plox.user.js#L8937) | [8937](../youtube-playback-plox.user.js#L8937) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L8964) | [8964](../youtube-playback-plox.user.js#L8964) |
| `fn` | [`diagnose`](../youtube-playback-plox.user.js#L8987) | [8987](../youtube-playback-plox.user.js#L8987) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L9043) | [9043](../youtube-playback-plox.user.js#L9043) |
| `fn` | [`prefixKey`](../youtube-playback-plox.user.js#L9052) | [9052](../youtube-playback-plox.user.js#L9052) |
| `fn` | [`stripPrefix`](../youtube-playback-plox.user.js#L9053) | [9053](../youtube-playback-plox.user.js#L9053) |
| `fn` | [`hasPrefix`](../youtube-playback-plox.user.js#L9054) | [9054](../youtube-playback-plox.user.js#L9054) |
| `fn` | [`parseStoredObject`](../youtube-playback-plox.user.js#L9308) | [9308](../youtube-playback-plox.user.js#L9308) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L9318) | [9318](../youtube-playback-plox.user.js#L9318) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L9328) | [9328](../youtube-playback-plox.user.js#L9328) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L9346) | [9346](../youtube-playback-plox.user.js#L9346) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L9362) | [9362](../youtube-playback-plox.user.js#L9362) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L9425) | [9425](../youtube-playback-plox.user.js#L9425) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L9443) | [9443](../youtube-playback-plox.user.js#L9443) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L9451) | [9451](../youtube-playback-plox.user.js#L9451) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L9468) | [9468](../youtube-playback-plox.user.js#L9468) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L9484)
> [Line 9484](../youtube-playback-plox.user.js#L9484)

_No relevant functions or constants detected._

## [📢 Ad Detector](../youtube-playback-plox.user.js#L9510)
> [Line 9510](../youtube-playback-plox.user.js#L9510)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L9512) | [9512](../youtube-playback-plox.user.js#L9512) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L9563) | [9563](../youtube-playback-plox.user.js#L9563) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L9703)
> [Line 9703](../youtube-playback-plox.user.js#L9703)

| Type | Name | Line |
|---|---|---|
| `class` | [`VirtualScroller`](../youtube-playback-plox.user.js#L9720) | [9720](../youtube-playback-plox.user.js#L9720) |

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L10209)
> [Line 10209](../youtube-playback-plox.user.js#L10209)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L10218) | [10218](../youtube-playback-plox.user.js#L10218) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L10249) | [10249](../youtube-playback-plox.user.js#L10249) |
| `fn` | [`exportStorageDamageReport`](../youtube-playback-plox.user.js#L10302) | [10302](../youtube-playback-plox.user.js#L10302) |
| `fn` | [`runStorageRepairFlow`](../youtube-playback-plox.user.js#L10341) | [10341](../youtube-playback-plox.user.js#L10341) |
| `fn` | [`renderStorageDamageNotice`](../youtube-playback-plox.user.js#L10408) | [10408](../youtube-playback-plox.user.js#L10408) |
| `fn` | [`copyExportDataToClipboard`](../youtube-playback-plox.user.js#L10469) | [10469](../youtube-playback-plox.user.js#L10469) |
| `fn` | [`mergeImportedVideoData`](../youtube-playback-plox.user.js#L10524) | [10524](../youtube-playback-plox.user.js#L10524) |
| `fn` | [`detectImportFormat`](../youtube-playback-plox.user.js#L10585) | [10585](../youtube-playback-plox.user.js#L10585) |
| `fn` | [`hasImportableRecords`](../youtube-playback-plox.user.js#L10599) | [10599](../youtube-playback-plox.user.js#L10599) |
| `fn` | [`looksLikeFreeTubeExport`](../youtube-playback-plox.user.js#L10616) | [10616](../youtube-playback-plox.user.js#L10616) |
| `fn` | [`parseImportPayload`](../youtube-playback-plox.user.js#L10629) | [10629](../youtube-playback-plox.user.js#L10629) |
| `fn` | [`createImportCommitGuard`](../youtube-playback-plox.user.js#L10668) | [10668](../youtube-playback-plox.user.js#L10668) |
| `fn` | [`commitImportedEntries`](../youtube-playback-plox.user.js#L10686) | [10686](../youtube-playback-plox.user.js#L10686) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L10733) | [10733](../youtube-playback-plox.user.js#L10733) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L10827)
> [Line 10827](../youtube-playback-plox.user.js#L10827)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getGitHubErrorMsg`](../youtube-playback-plox.user.js#L10830) | [10830](../youtube-playback-plox.user.js#L10830) |
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L10842) | [10842](../youtube-playback-plox.user.js#L10842) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L10872) | [10872](../youtube-playback-plox.user.js#L10872) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L10873) | [10873](../youtube-playback-plox.user.js#L10873) |
| `fn` | [`sendGistRequest`](../youtube-playback-plox.user.js#L10895) | [10895](../youtube-playback-plox.user.js#L10895) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L10991) | [10991](../youtube-playback-plox.user.js#L10991) |
| `fn` | [`finish`](../youtube-playback-plox.user.js#L11001) | [11001](../youtube-playback-plox.user.js#L11001) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L11015) | [11015](../youtube-playback-plox.user.js#L11015) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L11201) | [11201](../youtube-playback-plox.user.js#L11201) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L11222) | [11222](../youtube-playback-plox.user.js#L11222) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L11301) | [11301](../youtube-playback-plox.user.js#L11301) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L11331) | [11331](../youtube-playback-plox.user.js#L11331) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L11364)
> [Line 11364](../youtube-playback-plox.user.js#L11364)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L11365) | [11365](../youtube-playback-plox.user.js#L11365) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L11404) | [11404](../youtube-playback-plox.user.js#L11404) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L11546)
> [Line 11546](../youtube-playback-plox.user.js#L11546)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeCompletionHistory`](../youtube-playback-plox.user.js#L11554) | [11554](../youtube-playback-plox.user.js#L11554) |
| `fn` | [`normalizeVideoData`](../youtube-playback-plox.user.js#L11582) | [11582](../youtube-playback-plox.user.js#L11582) |
| `fn` | [`safeText`](../youtube-playback-plox.user.js#L11585) | [11585](../youtube-playback-plox.user.js#L11585) |
| `fn` | [`safeNumber`](../youtube-playback-plox.user.js#L11590) | [11590](../youtube-playback-plox.user.js#L11590) |
| `fn` | [`safeNullableText`](../youtube-playback-plox.user.js#L11594) | [11594](../youtube-playback-plox.user.js#L11594) |

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L11648)
> [Line 11648](../youtube-playback-plox.user.js#L11648)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toFreeTubeFormat`](../youtube-playback-plox.user.js#L11654) | [11654](../youtube-playback-plox.user.js#L11654) |

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L11739)
> [Line 11739](../youtube-playback-plox.user.js#L11739)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseFreeTubeDB`](../youtube-playback-plox.user.js#L11745) | [11745](../youtube-playback-plox.user.js#L11745) |

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L11832)
> [Line 11832](../youtube-playback-plox.user.js#L11832)

| Type | Name | Line |
|---|---|---|
| `fn` | [`fromFreeTubeFormat`](../youtube-playback-plox.user.js#L11838) | [11838](../youtube-playback-plox.user.js#L11838) |
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L11847) | [11847](../youtube-playback-plox.user.js#L11847) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L11862)
> [Line 11862](../youtube-playback-plox.user.js#L11862)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTubeFormat`](../youtube-playback-plox.user.js#L11867) | [11867](../youtube-playback-plox.user.js#L11867) |

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L11906)
> [Line 11906](../youtube-playback-plox.user.js#L11906)

| Type | Name | Line |
|---|---|---|
| `fn` | [`importFromFreeTubeFormat`](../youtube-playback-plox.user.js#L11912) | [11912](../youtube-playback-plox.user.js#L11912) |

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L11972)
> [Line 11972](../youtube-playback-plox.user.js#L11972)

| Type | Name | Line |
|---|---|---|
| `fn` | [`insertCompletionEvent`](../youtube-playback-plox.user.js#L11980) | [11980](../youtube-playback-plox.user.js#L11980) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L12008) | [12008](../youtube-playback-plox.user.js#L12008) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L12019)
> [Line 12019](../youtube-playback-plox.user.js#L12019)

| Type | Name | Line |
|---|---|---|
| `fn` | [`resetCompletionOnLoop`](../youtube-playback-plox.user.js#L12029) | [12029](../youtube-playback-plox.user.js#L12029) |
| `fn` | [`internalSaveVideoGeneric`](../youtube-playback-plox.user.js#L12047) | [12047](../youtube-playback-plox.user.js#L12047) |
| `fn` | [`isExpectedSessionCurrent`](../youtube-playback-plox.user.js#L12057) | [12057](../youtube-playback-plox.user.js#L12057) |
| `fn` | [`isDestructiveEpochCurrent`](../youtube-playback-plox.user.js#L12063) | [12063](../youtube-playback-plox.user.js#L12063) |
| `fn` | [`commitGuard`](../youtube-playback-plox.user.js#L12066) | [12066](../youtube-playback-plox.user.js#L12066) |
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L12154) | [12154](../youtube-playback-plox.user.js#L12154) |

## [📺 Helpers](../youtube-playback-plox.user.js#L12285)
> [Line 12285](../youtube-playback-plox.user.js#L12285)

_No relevant functions or constants detected._

## [📺 Gets saved video data](../youtube-playback-plox.user.js#L12288)
> [Line 12288](../youtube-playback-plox.user.js#L12288)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSavedVideoData`](../youtube-playback-plox.user.js#L12297) | [12297](../youtube-playback-plox.user.js#L12297) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L12345)
> [Line 12345](../youtube-playback-plox.user.js#L12345)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L12381) | [12381](../youtube-playback-plox.user.js#L12381) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L12425)
> [Line 12425](../youtube-playback-plox.user.js#L12425)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTypeFromPageManager`](../youtube-playback-plox.user.js#L12448) | [12448](../youtube-playback-plox.user.js#L12448) |
| `fn` | [`getTypeFromYtApp`](../youtube-playback-plox.user.js#L12488) | [12488](../youtube-playback-plox.user.js#L12488) |
| `fn` | [`detectFromURL`](../youtube-playback-plox.user.js#L12514) | [12514](../youtube-playback-plox.user.js#L12514) |
| `fn` | [`cachePageType`](../youtube-playback-plox.user.js#L12586) | [12586](../youtube-playback-plox.user.js#L12586) |
| `fn` | [`getYouTubePageType`](../youtube-playback-plox.user.js#L12605) | [12605](../youtube-playback-plox.user.js#L12605) |

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L12630)
> [Line 12630](../youtube-playback-plox.user.js#L12630)

| Type | Name | Line |
|---|---|---|
| `fn` | [`_parseYouTubeResourceImpl`](../youtube-playback-plox.user.js#L12690) | [12690](../youtube-playback-plox.user.js#L12690) |
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L12726) | [12726](../youtube-playback-plox.user.js#L12726) |
| `fn` | [`parseYouTubeResource`](../youtube-playback-plox.user.js#L12837) | [12837](../youtube-playback-plox.user.js#L12837) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L12847)
> [Line 12847](../youtube-playback-plox.user.js#L12847)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubeVideoIdFromUrl`](../youtube-playback-plox.user.js#L12857) | [12857](../youtube-playback-plox.user.js#L12857) |

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L12869)
> [Line 12869](../youtube-playback-plox.user.js#L12869)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getYouTubeVideoContextFromUrl`](../youtube-playback-plox.user.js#L12881) | [12881](../youtube-playback-plox.user.js#L12881) |

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L12897)
> [Line 12897](../youtube-playback-plox.user.js#L12897)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubePlaylistIdFromUrl`](../youtube-playback-plox.user.js#L12905) | [12905](../youtube-playback-plox.user.js#L12905) |
| `fn` | [`classifyPlaylist`](../youtube-playback-plox.user.js#L12929) | [12929](../youtube-playback-plox.user.js#L12929) |

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L12942)
> [Line 12942](../youtube-playback-plox.user.js#L12942)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L12963) | [12963](../youtube-playback-plox.user.js#L12963) |
| `fn` | [`extractYtInitialData`](../youtube-playback-plox.user.js#L13000) | [13000](../youtube-playback-plox.user.js#L13000) |
| `fn` | [`getPlaylistName`](../youtube-playback-plox.user.js#L13106) | [13106](../youtube-playback-plox.user.js#L13106) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L13122) | [13122](../youtube-playback-plox.user.js#L13122) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L13215) | [13215](../youtube-playback-plox.user.js#L13215) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L13242)
> [Line 13242](../youtube-playback-plox.user.js#L13242)

| Type | Name | Line |
|---|---|---|
| `fn` | [`cancelPendingDisplayClear`](../youtube-playback-plox.user.js#L13266) | [13266](../youtube-playback-plox.user.js#L13266) |
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L13279) | [13279](../youtube-playback-plox.user.js#L13279) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L13288)
> [Line 13288](../youtube-playback-plox.user.js#L13288)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTimeDisplayMessage`](../youtube-playback-plox.user.js#L13296) | [13296](../youtube-playback-plox.user.js#L13296) |
| `fn` | [`hasTimeDisplayMessage`](../youtube-playback-plox.user.js#L13305) | [13305](../youtube-playback-plox.user.js#L13305) |
| `fn` | [`showDisplayMessage`](../youtube-playback-plox.user.js#L13315) | [13315](../youtube-playback-plox.user.js#L13315) |
| `fn` | [`restoreDisplayButtons`](../youtube-playback-plox.user.js#L13333) | [13333](../youtube-playback-plox.user.js#L13333) |
| `fn` | [`createSplitButtonGroup`](../youtube-playback-plox.user.js#L13364) | [13364](../youtube-playback-plox.user.js#L13364) |
| `fn` | [`getDisplayContextVideo`](../youtube-playback-plox.user.js#L13389) | [13389](../youtube-playback-plox.user.js#L13389) |
| `fn` | [`getDisplayContextPlayer`](../youtube-playback-plox.user.js#L13404) | [13404](../youtube-playback-plox.user.js#L13404) |
| `fn` | [`getPlaybackNotificationKind`](../youtube-playback-plox.user.js#L13419) | [13419](../youtube-playback-plox.user.js#L13419) |
| `fn` | [`buildPlaybackNotificationMessage`](../youtube-playback-plox.user.js#L13436) | [13436](../youtube-playback-plox.user.js#L13436) |
| `fn` | [`setupManualSaveButton`](../youtube-playback-plox.user.js#L13474) | [13474](../youtube-playback-plox.user.js#L13474) |
| `fn` | [`getActiveShortsControlsContainer`](../youtube-playback-plox.user.js#L13534) | [13534](../youtube-playback-plox.user.js#L13534) |
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L13579) | [13579](../youtube-playback-plox.user.js#L13579) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L13579) | [13579](../youtube-playback-plox.user.js#L13579) |
| `fn` | [`getDisplayDisposables`](../youtube-playback-plox.user.js#L13601) | [13601](../youtube-playback-plox.user.js#L13601) |
| `fn` | [`disposeDisplayNode`](../youtube-playback-plox.user.js#L13614) | [13614](../youtube-playback-plox.user.js#L13614) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L13621) | [13621](../youtube-playback-plox.user.js#L13621) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L13631) | [13631](../youtube-playback-plox.user.js#L13631) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L13639) | [13639](../youtube-playback-plox.user.js#L13639) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L13647) | [13647](../youtube-playback-plox.user.js#L13647) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L13670) | [13670](../youtube-playback-plox.user.js#L13670) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L13682) | [13682](../youtube-playback-plox.user.js#L13682) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L13685) | [13685](../youtube-playback-plox.user.js#L13685) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L13695) | [13695](../youtube-playback-plox.user.js#L13695) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L13700) | [13700](../youtube-playback-plox.user.js#L13700) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L13723) | [13723](../youtube-playback-plox.user.js#L13723) |
| `fn` | [`scheduleShortsFrame`](../youtube-playback-plox.user.js#L13743) | [13743](../youtube-playback-plox.user.js#L13743) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L13752) | [13752](../youtube-playback-plox.user.js#L13752) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L13761) | [13761](../youtube-playback-plox.user.js#L13761) |
| `fn` | [`isMobileWatchDisplayFallback`](../youtube-playback-plox.user.js#L13809) | [13809](../youtube-playback-plox.user.js#L13809) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L13823) | [13823](../youtube-playback-plox.user.js#L13823) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L13931) | [13931](../youtube-playback-plox.user.js#L13931) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L13987) | [13987](../youtube-playback-plox.user.js#L13987) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L14058) | [14058](../youtube-playback-plox.user.js#L14058) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L14080) | [14080](../youtube-playback-plox.user.js#L14080) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L14094) | [14094](../youtube-playback-plox.user.js#L14094) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L14098) | [14098](../youtube-playback-plox.user.js#L14098) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L14105) | [14105](../youtube-playback-plox.user.js#L14105) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L14123) | [14123](../youtube-playback-plox.user.js#L14123) |
| `fn` | [`startShortsPanelObserver`](../youtube-playback-plox.user.js#L14137) | [14137](../youtube-playback-plox.user.js#L14137) |
| `fn` | [`stopShortsPanelObserver`](../youtube-playback-plox.user.js#L14185) | [14185](../youtube-playback-plox.user.js#L14185) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L14212)
> [Line 14212](../youtube-playback-plox.user.js#L14212)

| Type | Name | Line |
|---|---|---|
| `fn` | [`disposeToastRuntime`](../youtube-playback-plox.user.js#L14224) | [14224](../youtube-playback-plox.user.js#L14224) |
| `fn` | [`registerToastRuntime`](../youtube-playback-plox.user.js#L14252) | [14252](../youtube-playback-plox.user.js#L14252) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L14253) | [14253](../youtube-playback-plox.user.js#L14253) |
| `fn` | [`createToastContainer`](../youtube-playback-plox.user.js#L14269) | [14269](../youtube-playback-plox.user.js#L14269) |
| `fn` | [`fadeAndRemoveToast`](../youtube-playback-plox.user.js#L14302) | [14302](../youtube-playback-plox.user.js#L14302) |
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L14323) | [14323](../youtube-playback-plox.user.js#L14323) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L14347) | [14347](../youtube-playback-plox.user.js#L14347) |
| `fn` | [`showFloatingToast`](../youtube-playback-plox.user.js#L14371) | [14371](../youtube-playback-plox.user.js#L14371) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L14527)
> [Line 14527](../youtube-playback-plox.user.js#L14527)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L14530) | [14530](../youtube-playback-plox.user.js#L14530) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L14574)
> [Line 14574](../youtube-playback-plox.user.js#L14574)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L14614) | [14614](../youtube-playback-plox.user.js#L14614) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L14620) | [14620](../youtube-playback-plox.user.js#L14620) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L14628) | [14628](../youtube-playback-plox.user.js#L14628) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L14674) | [14674](../youtube-playback-plox.user.js#L14674) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L14678) | [14678](../youtube-playback-plox.user.js#L14678) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L14681) | [14681](../youtube-playback-plox.user.js#L14681) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L14697) | [14697](../youtube-playback-plox.user.js#L14697) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L14706) | [14706](../youtube-playback-plox.user.js#L14706) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L14736) | [14736](../youtube-playback-plox.user.js#L14736) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L14750) | [14750](../youtube-playback-plox.user.js#L14750) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L14754) | [14754](../youtube-playback-plox.user.js#L14754) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L14892)
> [Line 14892](../youtube-playback-plox.user.js#L14892)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSettingsUI`](../youtube-playback-plox.user.js#L14895) | [14895](../youtube-playback-plox.user.js#L14895) |
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L14926) | [14926](../youtube-playback-plox.user.js#L14926) |
| `fn` | [`onSettingsKeyDown`](../youtube-playback-plox.user.js#L14948) | [14948](../youtube-playback-plox.user.js#L14948) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L15031) | [15031](../youtube-playback-plox.user.js#L15031) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L15118) | [15118](../youtube-playback-plox.user.js#L15118) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L15119) | [15119](../youtube-playback-plox.user.js#L15119) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L15208) | [15208](../youtube-playback-plox.user.js#L15208) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L15209) | [15209](../youtube-playback-plox.user.js#L15209) |
| `fn` | [`getInnerTubeClientVersion`](../youtube-playback-plox.user.js#L15241) | [15241](../youtube-playback-plox.user.js#L15241) |
| `fn` | [`idbDiag`](../youtube-playback-plox.user.js#L15270) | [15270](../youtube-playback-plox.user.js#L15270) |
| `fn` | [`safeModeActive`](../youtube-playback-plox.user.js#L15288) | [15288](../youtube-playback-plox.user.js#L15288) |
| `fn` | [`activeSessions`](../youtube-playback-plox.user.js#L15289) | [15289](../youtube-playback-plox.user.js#L15289) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L15403)
> [Line 15403](../youtube-playback-plox.user.js#L15403)

| Type | Name | Line |
|---|---|---|
| `fn` | [`notifySeekOrProgress`](../youtube-playback-plox.user.js#L15405) | [15405](../youtube-playback-plox.user.js#L15405) |

## [🎵 Video Selection](../youtube-playback-plox.user.js#L15461)
> [Line 15461](../youtube-playback-plox.user.js#L15461)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleManagementMode`](../youtube-playback-plox.user.js#L15476) | [15476](../youtube-playback-plox.user.js#L15476) |
| `fn` | [`buildSkipParts`](../youtube-playback-plox.user.js#L15495) | [15495](../youtube-playback-plox.user.js#L15495) |
| `fn` | [`updateFooterButtons`](../youtube-playback-plox.user.js#L15509) | [15509](../youtube-playback-plox.user.js#L15509) |
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L15586) | [15586](../youtube-playback-plox.user.js#L15586) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L15593) | [15593](../youtube-playback-plox.user.js#L15593) |
| `fn` | [`createFooterActionMenu`](../youtube-playback-plox.user.js#L15635) | [15635](../youtube-playback-plox.user.js#L15635) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L15665) | [15665](../youtube-playback-plox.user.js#L15665) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L15669) | [15669](../youtube-playback-plox.user.js#L15669) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L15678) | [15678](../youtube-playback-plox.user.js#L15678) |
| `fn` | [`closeImportMenu`](../youtube-playback-plox.user.js#L15774) | [15774](../youtube-playback-plox.user.js#L15774) |
| `fn` | [`onImportOutsideClick`](../youtube-playback-plox.user.js#L15783) | [15783](../youtube-playback-plox.user.js#L15783) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L16185) | [16185](../youtube-playback-plox.user.js#L16185) |
| `fn` | [`updateManagementFooterState`](../youtube-playback-plox.user.js#L16247) | [16247](../youtube-playback-plox.user.js#L16247) |
| `fn` | [`togglePlaylistCreationMode`](../youtube-playback-plox.user.js#L16277) | [16277](../youtube-playback-plox.user.js#L16277) |
| `fn` | [`copyToClipboard`](../youtube-playback-plox.user.js#L16296) | [16296](../youtube-playback-plox.user.js#L16296) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L16309) | [16309](../youtube-playback-plox.user.js#L16309) |
| `fn` | [`syncSelectionCheckboxes`](../youtube-playback-plox.user.js#L16390) | [16390](../youtube-playback-plox.user.js#L16390) |
| `fn` | [`createClearSelectionButton`](../youtube-playback-plox.user.js#L16403) | [16403](../youtube-playback-plox.user.js#L16403) |
| `fn` | [`toggleVideoSelection`](../youtube-playback-plox.user.js#L16421) | [16421](../youtube-playback-plox.user.js#L16421) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L16453)
> [Line 16453](../youtube-playback-plox.user.js#L16453)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L16459) | [16459](../youtube-playback-plox.user.js#L16459) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L16459) | [16459](../youtube-playback-plox.user.js#L16459) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L16460) | [16460](../youtube-playback-plox.user.js#L16460) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L16469) | [16469](../youtube-playback-plox.user.js#L16469) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L16482) | [16482](../youtube-playback-plox.user.js#L16482) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L16493) | [16493](../youtube-playback-plox.user.js#L16493) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L16510) | [16510](../youtube-playback-plox.user.js#L16510) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L16544) | [16544](../youtube-playback-plox.user.js#L16544) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L16569) | [16569](../youtube-playback-plox.user.js#L16569) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L16571) | [16571](../youtube-playback-plox.user.js#L16571) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L16590) | [16590](../youtube-playback-plox.user.js#L16590) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L16590) | [16590](../youtube-playback-plox.user.js#L16590) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L16592) | [16592](../youtube-playback-plox.user.js#L16592) |
| `fn` | [`shouldDropVideoEvent`](../youtube-playback-plox.user.js#L16604) | [16604](../youtube-playback-plox.user.js#L16604) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L16613) | [16613](../youtube-playback-plox.user.js#L16613) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L16613) | [16613](../youtube-playback-plox.user.js#L16613) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L16624) | [16624](../youtube-playback-plox.user.js#L16624) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L16629) | [16629](../youtube-playback-plox.user.js#L16629) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L16634) | [16634](../youtube-playback-plox.user.js#L16634) |
| `fn` | [`note`](../youtube-playback-plox.user.js#L16654) | [16654](../youtube-playback-plox.user.js#L16654) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L16658) | [16658](../youtube-playback-plox.user.js#L16658) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L16676) | [16676](../youtube-playback-plox.user.js#L16676) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L16676) | [16676](../youtube-playback-plox.user.js#L16676) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L16678) | [16678](../youtube-playback-plox.user.js#L16678) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L16686) | [16686](../youtube-playback-plox.user.js#L16686) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L16736)
> [Line 16736](../youtube-playback-plox.user.js#L16736)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L16741) | [16741](../youtube-playback-plox.user.js#L16741) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L16741) | [16741](../youtube-playback-plox.user.js#L16741) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L16763) | [16763](../youtube-playback-plox.user.js#L16763) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L16783) | [16783](../youtube-playback-plox.user.js#L16783) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L16809) | [16809](../youtube-playback-plox.user.js#L16809) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L16856) | [16856](../youtube-playback-plox.user.js#L16856) |
| `fn` | [`clearWatchPlayerWait`](../youtube-playback-plox.user.js#L16886) | [16886](../youtube-playback-plox.user.js#L16886) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L16908) | [16908](../youtube-playback-plox.user.js#L16908) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L16928) | [16928](../youtube-playback-plox.user.js#L16928) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L16984) | [16984](../youtube-playback-plox.user.js#L16984) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L17052) | [17052](../youtube-playback-plox.user.js#L17052) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L17062) | [17062](../youtube-playback-plox.user.js#L17062) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L17073) | [17073](../youtube-playback-plox.user.js#L17073) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L17105) | [17105](../youtube-playback-plox.user.js#L17105) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L17157) | [17157](../youtube-playback-plox.user.js#L17157) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L17168) | [17168](../youtube-playback-plox.user.js#L17168) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L17192) | [17192](../youtube-playback-plox.user.js#L17192) |
| `fn` | [`clearPlayerCache`](../youtube-playback-plox.user.js#L17318) | [17318](../youtube-playback-plox.user.js#L17318) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L17540) | [17540](../youtube-playback-plox.user.js#L17540) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L17581) | [17581](../youtube-playback-plox.user.js#L17581) |

## [Processing Functions](../youtube-playback-plox.user.js#L17611)
> [Line 17611](../youtube-playback-plox.user.js#L17611)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isSessionStale`](../youtube-playback-plox.user.js#L17628) | [17628](../youtube-playback-plox.user.js#L17628) |
| `fn` | [`scheduleIdMismatchRetry`](../youtube-playback-plox.user.js#L17654) | [17654](../youtube-playback-plox.user.js#L17654) |
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L17698) | [17698](../youtube-playback-plox.user.js#L17698) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L17725) | [17725](../youtube-playback-plox.user.js#L17725) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L17735) | [17735](../youtube-playback-plox.user.js#L17735) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L17735) | [17735](../youtube-playback-plox.user.js#L17735) |
| `fn` | [`clearPendingRecovery`](../youtube-playback-plox.user.js#L17755) | [17755](../youtube-playback-plox.user.js#L17755) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L17760) | [17760](../youtube-playback-plox.user.js#L17760) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L17765) | [17765](../youtube-playback-plox.user.js#L17765) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L17772) | [17772](../youtube-playback-plox.user.js#L17772) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L17778) | [17778](../youtube-playback-plox.user.js#L17778) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L17796) | [17796](../youtube-playback-plox.user.js#L17796) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L17899) | [17899](../youtube-playback-plox.user.js#L17899) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L17963) | [17963](../youtube-playback-plox.user.js#L17963) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L18009) | [18009](../youtube-playback-plox.user.js#L18009) |
| `fn` | [`isAwaitingFirstPlayback`](../youtube-playback-plox.user.js#L18041) | [18041](../youtube-playback-plox.user.js#L18041) |
| `fn` | [`isProgressInCompletionZone`](../youtube-playback-plox.user.js#L18060) | [18060](../youtube-playback-plox.user.js#L18060) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L18064) | [18064](../youtube-playback-plox.user.js#L18064) |
| `fn` | [`isPlayerReportingEnd`](../youtube-playback-plox.user.js#L18077) | [18077](../youtube-playback-plox.user.js#L18077) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L18094) | [18094](../youtube-playback-plox.user.js#L18094) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L18105) | [18105](../youtube-playback-plox.user.js#L18105) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L18117) | [18117](../youtube-playback-plox.user.js#L18117) |
| `fn` | [`absorbSaveResult`](../youtube-playback-plox.user.js#L18150) | [18150](../youtube-playback-plox.user.js#L18150) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L18164) | [18164](../youtube-playback-plox.user.js#L18164) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L18244) | [18244](../youtube-playback-plox.user.js#L18244) |
| `fn` | [`handleNaturalEnd`](../youtube-playback-plox.user.js#L18269) | [18269](../youtube-playback-plox.user.js#L18269) |
| `fn` | [`persistCompletion`](../youtube-playback-plox.user.js#L18278) | [18278](../youtube-playback-plox.user.js#L18278) |
| `fn` | [`handleSeekingForGradient`](../youtube-playback-plox.user.js#L18309) | [18309](../youtube-playback-plox.user.js#L18309) |
| `fn` | [`handleSeekedForGradient`](../youtube-playback-plox.user.js#L18319) | [18319](../youtube-playback-plox.user.js#L18319) |
| `fn` | [`canValidateStandalone`](../youtube-playback-plox.user.js#L18458) | [18458](../youtube-playback-plox.user.js#L18458) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L18483) | [18483](../youtube-playback-plox.user.js#L18483) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L18612) | [18612](../youtube-playback-plox.user.js#L18612) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L18811) | [18811](../youtube-playback-plox.user.js#L18811) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L18924) | [18924](../youtube-playback-plox.user.js#L18924) |
| `fn` | [`processMediaVideo`](../youtube-playback-plox.user.js#L19039) | [19039](../youtube-playback-plox.user.js#L19039) |

## [PlaybackController](../youtube-playback-plox.user.js#L19094)
> [Line 19094](../youtube-playback-plox.user.js#L19094)

| Type | Name | Line |
|---|---|---|
| `fn` | [`mapLiveAbsoluteToWindow`](../youtube-playback-plox.user.js#L19109) | [19109](../youtube-playback-plox.user.js#L19109) |
| `fn` | [`applySeek`](../youtube-playback-plox.user.js#L19135) | [19135](../youtube-playback-plox.user.js#L19135) |
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L19190) | [19190](../youtube-playback-plox.user.js#L19190) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L19207) | [19207](../youtube-playback-plox.user.js#L19207) |
| `fn` | [`removeMetadataListener`](../youtube-playback-plox.user.js#L19231) | [19231](../youtube-playback-plox.user.js#L19231) |
| `fn` | [`removeCanPlayListener`](../youtube-playback-plox.user.js#L19232) | [19232](../youtube-playback-plox.user.js#L19232) |
| `fn` | [`removeAbortListener`](../youtube-playback-plox.user.js#L19233) | [19233](../youtube-playback-plox.user.js#L19233) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L19234) | [19234](../youtube-playback-plox.user.js#L19234) |
| `fn` | [`rejectAsStale`](../youtube-playback-plox.user.js#L19240) | [19240](../youtube-playback-plox.user.js#L19240) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L19244) | [19244](../youtube-playback-plox.user.js#L19244) |
| `fn` | [`onAbort`](../youtube-playback-plox.user.js#L19253) | [19253](../youtube-playback-plox.user.js#L19253) |
| `fn` | [`restoreThrottleMarker`](../youtube-playback-plox.user.js#L19475) | [19475](../youtube-playback-plox.user.js#L19475) |
| `fn` | [`readApiNumber`](../youtube-playback-plox.user.js#L19490) | [19490](../youtube-playback-plox.user.js#L19490) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L19645) | [19645](../youtube-playback-plox.user.js#L19645) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L19793)
> [Line 19793](../youtube-playback-plox.user.js#L19793)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getInnerTubeConfig`](../youtube-playback-plox.user.js#L19830) | [19830](../youtube-playback-plox.user.js#L19830) |
| `fn` | [`fetchInnerTubeJson`](../youtube-playback-plox.user.js#L19845) | [19845](../youtube-playback-plox.user.js#L19845) |
| `fn` | [`fetchShortsViews`](../youtube-playback-plox.user.js#L19879) | [19879](../youtube-playback-plox.user.js#L19879) |
| `fn` | [`fetchPlaylistTitle`](../youtube-playback-plox.user.js#L19892) | [19892](../youtube-playback-plox.user.js#L19892) |
| `fn` | [`getCascadedVideoInfo`](../youtube-playback-plox.user.js#L19902) | [19902](../youtube-playback-plox.user.js#L19902) |
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L19947) | [19947](../youtube-playback-plox.user.js#L19947) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L20331)
> [Line 20331](../youtube-playback-plox.user.js#L20331)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createCustomDropdown`](../youtube-playback-plox.user.js#L20349) | [20349](../youtube-playback-plox.user.js#L20349) |
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L20360) | [20360](../youtube-playback-plox.user.js#L20360) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L20436) | [20436](../youtube-playback-plox.user.js#L20436) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L20452) | [20452](../youtube-playback-plox.user.js#L20452) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L20460) | [20460](../youtube-playback-plox.user.js#L20460) |
| `fn` | [`createSortSelector`](../youtube-playback-plox.user.js#L20477) | [20477](../youtube-playback-plox.user.js#L20477) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L20480) | [20480](../youtube-playback-plox.user.js#L20480) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L20533)
> [Line 20533](../youtube-playback-plox.user.js#L20533)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFilterSelector`](../youtube-playback-plox.user.js#L20542) | [20542](../youtube-playback-plox.user.js#L20542) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L20545) | [20545](../youtube-playback-plox.user.js#L20545) |
| `fn` | [`createRangeFilter`](../youtube-playback-plox.user.js#L20590) | [20590](../youtube-playback-plox.user.js#L20590) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L20593) | [20593](../youtube-playback-plox.user.js#L20593) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L20599) | [20599](../youtube-playback-plox.user.js#L20599) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L20620) | [20620](../youtube-playback-plox.user.js#L20620) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L20741) | [20741](../youtube-playback-plox.user.js#L20741) |
| `fn` | [`createSearchInput`](../youtube-playback-plox.user.js#L20796) | [20796](../youtube-playback-plox.user.js#L20796) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L20821)
> [Line 20821](../youtube-playback-plox.user.js#L20821)

| Type | Name | Line |
|---|---|---|
| `fn` | [`acquireBodyOverflow`](../youtube-playback-plox.user.js#L20849) | [20849](../youtube-playback-plox.user.js#L20849) |
| `fn` | [`releaseBodyOverflow`](../youtube-playback-plox.user.js#L20863) | [20863](../youtube-playback-plox.user.js#L20863) |
| `fn` | [`getVirtualScrollerVideoItems`](../youtube-playback-plox.user.js#L20929) | [20929](../youtube-playback-plox.user.js#L20929) |
| `fn` | [`batchLoadStorageData`](../youtube-playback-plox.user.js#L20958) | [20958](../youtube-playback-plox.user.js#L20958) |

## [📁 Update Video List](../youtube-playback-plox.user.js#L20999)
> [Line 20999](../youtube-playback-plox.user.js#L20999)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSortValue`](../youtube-playback-plox.user.js#L21006) | [21006](../youtube-playback-plox.user.js#L21006) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L21018) | [21018](../youtube-playback-plox.user.js#L21018) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L21022) | [21022](../youtube-playback-plox.user.js#L21022) |
| `fn` | [`showLoadingState`](../youtube-playback-plox.user.js#L21039) | [21039](../youtube-playback-plox.user.js#L21039) |
| `fn` | [`loadVideoItems`](../youtube-playback-plox.user.js#L21102) | [21102](../youtube-playback-plox.user.js#L21102) |
| `fn` | [`resolvePlaylistTitles`](../youtube-playback-plox.user.js#L21126) | [21126](../youtube-playback-plox.user.js#L21126) |
| `fn` | [`filterItems`](../youtube-playback-plox.user.js#L21158) | [21158](../youtube-playback-plox.user.js#L21158) |
| `fn` | [`buildVirtualItems`](../youtube-playback-plox.user.js#L21202) | [21202](../youtube-playback-plox.user.js#L21202) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L21214) | [21214](../youtube-playback-plox.user.js#L21214) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L21235) | [21235](../youtube-playback-plox.user.js#L21235) |
| `fn` | [`showEmptyState`](../youtube-playback-plox.user.js#L21265) | [21265](../youtube-playback-plox.user.js#L21265) |
| `fn` | [`showListLoadErrorState`](../youtube-playback-plox.user.js#L21298) | [21298](../youtube-playback-plox.user.js#L21298) |
| `fn` | [`updateVirtualScroller`](../youtube-playback-plox.user.js#L21319) | [21319](../youtube-playback-plox.user.js#L21319) |
| `fn` | [`initVirtualScroller`](../youtube-playback-plox.user.js#L21349) | [21349](../youtube-playback-plox.user.js#L21349) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L21395) | [21395](../youtube-playback-plox.user.js#L21395) |
| `fn` | [`resolveGridCols`](../youtube-playback-plox.user.js#L21473) | [21473](../youtube-playback-plox.user.js#L21473) |
| `fn` | [`destroyVirtualScroller`](../youtube-playback-plox.user.js#L21486) | [21486](../youtube-playback-plox.user.js#L21486) |
| `fn` | [`disconnectVirtualScrollerObserver`](../youtube-playback-plox.user.js#L21500) | [21500](../youtube-playback-plox.user.js#L21500) |
| `fn` | [`connectResizeObserver`](../youtube-playback-plox.user.js#L21515) | [21515](../youtube-playback-plox.user.js#L21515) |
| `fn` | [`updateVideoList`](../youtube-playback-plox.user.js#L21548) | [21548](../youtube-playback-plox.user.js#L21548) |
| `fn` | [`isCurrentRender`](../youtube-playback-plox.user.js#L21553) | [21553](../youtube-playback-plox.user.js#L21553) |
| `fn` | [`requestVideoListUpdate`](../youtube-playback-plox.user.js#L21639) | [21639](../youtube-playback-plox.user.js#L21639) |
| `fn` | [`closeModalVideos`](../youtube-playback-plox.user.js#L21650) | [21650](../youtube-playback-plox.user.js#L21650) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L21730) | [21730](../youtube-playback-plox.user.js#L21730) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L21747) | [21747](../youtube-playback-plox.user.js#L21747) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L21775) | [21775](../youtube-playback-plox.user.js#L21775) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L21910)
> [Line 21910](../youtube-playback-plox.user.js#L21910)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L21913) | [21913](../youtube-playback-plox.user.js#L21913) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L21928) | [21928](../youtube-playback-plox.user.js#L21928) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L21939)
> [Line 21939](../youtube-playback-plox.user.js#L21939)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSavedVideosList`](../youtube-playback-plox.user.js#L21942) | [21942](../youtube-playback-plox.user.js#L21942) |
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L22080) | [22080](../youtube-playback-plox.user.js#L22080) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L22090) | [22090](../youtube-playback-plox.user.js#L22090) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L22160) | [22160](../youtube-playback-plox.user.js#L22160) |
| `fn` | [`onSavedVideosKeyDown`](../youtube-playback-plox.user.js#L22169) | [22169](../youtube-playback-plox.user.js#L22169) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L22200)
> [Line 22200](../youtube-playback-plox.user.js#L22200)

| Type | Name | Line |
|---|---|---|
| `fn` | [`pickPlaylistVariant`](../youtube-playback-plox.user.js#L22209) | [22209](../youtube-playback-plox.user.js#L22209) |
| `fn` | [`generatePlaylistColor`](../youtube-playback-plox.user.js#L22236) | [22236](../youtube-playback-plox.user.js#L22236) |
| `fn` | [`generatePlaylistBorderColor`](../youtube-playback-plox.user.js#L22249) | [22249](../youtube-playback-plox.user.js#L22249) |
| `fn` | [`handleForceTimeAction`](../youtube-playback-plox.user.js#L22253) | [22253](../youtube-playback-plox.user.js#L22253) |
| `fn` | [`handleUnlinkPlaylistAction`](../youtube-playback-plox.user.js#L22319) | [22319](../youtube-playback-plox.user.js#L22319) |
| `fn` | [`handleDeleteEntryAction`](../youtube-playback-plox.user.js#L22341) | [22341](../youtube-playback-plox.user.js#L22341) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L22374) | [22374](../youtube-playback-plox.user.js#L22374) |
| `fn` | [`handleToggleProtectionAction`](../youtube-playback-plox.user.js#L22403) | [22403](../youtube-playback-plox.user.js#L22403) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L22444) | [22444](../youtube-playback-plox.user.js#L22444) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L22492) | [22492](../youtube-playback-plox.user.js#L22492) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L22498) | [22498](../youtube-playback-plox.user.js#L22498) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L22517) | [22517](../youtube-playback-plox.user.js#L22517) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L22551) | [22551](../youtube-playback-plox.user.js#L22551) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L22603) | [22603](../youtube-playback-plox.user.js#L22603) |
| `fn` | [`entryButtonsShown`](../youtube-playback-plox.user.js#L22618) | [22618](../youtube-playback-plox.user.js#L22618) |
| `fn` | [`generateVideoObsidianMarkdown`](../youtube-playback-plox.user.js#L22659) | [22659](../youtube-playback-plox.user.js#L22659) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L22692) | [22692](../youtube-playback-plox.user.js#L22692) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L22698) | [22698](../youtube-playback-plox.user.js#L22698) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L22714) | [22714](../youtube-playback-plox.user.js#L22714) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L22724) | [22724](../youtube-playback-plox.user.js#L22724) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L22732) | [22732](../youtube-playback-plox.user.js#L22732) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L22737) | [22737](../youtube-playback-plox.user.js#L22737) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L22744) | [22744](../youtube-playback-plox.user.js#L22744) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L22747) | [22747](../youtube-playback-plox.user.js#L22747) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L22751) | [22751](../youtube-playback-plox.user.js#L22751) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L22797) | [22797](../youtube-playback-plox.user.js#L22797) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L22797) | [22797](../youtube-playback-plox.user.js#L22797) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L22811) | [22811](../youtube-playback-plox.user.js#L22811) |
| `fn` | [`createModeSelector`](../youtube-playback-plox.user.js#L23085) | [23085](../youtube-playback-plox.user.js#L23085) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L23086) | [23086](../youtube-playback-plox.user.js#L23086) |
| `fn` | [`createViewModeSelector`](../youtube-playback-plox.user.js#L23118) | [23118](../youtube-playback-plox.user.js#L23118) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L23135) | [23135](../youtube-playback-plox.user.js#L23135) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L23136) | [23136](../youtube-playback-plox.user.js#L23136) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L23152) | [23152](../youtube-playback-plox.user.js#L23152) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L23153) | [23153](../youtube-playback-plox.user.js#L23153) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L23202) | [23202](../youtube-playback-plox.user.js#L23202) |
| `fn` | [`createOverflowToggle`](../youtube-playback-plox.user.js#L23233) | [23233](../youtube-playback-plox.user.js#L23233) |
| `fn` | [`makeToolbarGroup`](../youtube-playback-plox.user.js#L23272) | [23272](../youtube-playback-plox.user.js#L23272) |
| `fn` | [`makeDisplayToggle`](../youtube-playback-plox.user.js#L23294) | [23294](../youtube-playback-plox.user.js#L23294) |
| `fn` | [`mountSavedVideosModalActionsToolbar`](../youtube-playback-plox.user.js#L23328) | [23328](../youtube-playback-plox.user.js#L23328) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L23351) | [23351](../youtube-playback-plox.user.js#L23351) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L23365) | [23365](../youtube-playback-plox.user.js#L23365) |
| `fn` | [`makeModeRow`](../youtube-playback-plox.user.js#L23511) | [23511](../youtube-playback-plox.user.js#L23511) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L23661) | [23661](../youtube-playback-plox.user.js#L23661) |
| `fn` | [`applyThumbnailToImage`](../youtube-playback-plox.user.js#L23717) | [23717](../youtube-playback-plox.user.js#L23717) |
| `fn` | [`removeLoadListener`](../youtube-playback-plox.user.js#L23726) | [23726](../youtube-playback-plox.user.js#L23726) |
| `fn` | [`removeErrorListener`](../youtube-playback-plox.user.js#L23727) | [23727](../youtube-playback-plox.user.js#L23727) |
| `fn` | [`finish`](../youtube-playback-plox.user.js#L23733) | [23733](../youtube-playback-plox.user.js#L23733) |
| `fn` | [`loadCandidate`](../youtube-playback-plox.user.js#L23748) | [23748](../youtube-playback-plox.user.js#L23748) |
| `fn` | [`createVideoGridRow`](../youtube-playback-plox.user.js#L23783) | [23783](../youtube-playback-plox.user.js#L23783) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L23800) | [23800](../youtube-playback-plox.user.js#L23800) |
| `fn` | [`scheduleHeightUpdate`](../youtube-playback-plox.user.js#L23849) | [23849](../youtube-playback-plox.user.js#L23849) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L23896) | [23896](../youtube-playback-plox.user.js#L23896) |
| `fn` | [`createVideoEntry`](../youtube-playback-plox.user.js#L23910) | [23910](../youtube-playback-plox.user.js#L23910) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L24139) | [24139](../youtube-playback-plox.user.js#L24139) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L24162) | [24162](../youtube-playback-plox.user.js#L24162) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L24163) | [24163](../youtube-playback-plox.user.js#L24163) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L24221)
> [Line 24221](../youtube-playback-plox.user.js#L24221)

| Type | Name | Line |
|---|---|---|
| `fn` | [`restoreDeletedRecordIfUnchanged`](../youtube-playback-plox.user.js#L24240) | [24240](../youtube-playback-plox.user.js#L24240) |
| `fn` | [`canCommit`](../youtube-playback-plox.user.js#L24241) | [24241](../youtube-playback-plox.user.js#L24241) |
| `fn` | [`clearAllData`](../youtube-playback-plox.user.js#L24270) | [24270](../youtube-playback-plox.user.js#L24270) |
| `fn` | [`clearCommitGuard`](../youtube-playback-plox.user.js#L24285) | [24285](../youtube-playback-plox.user.js#L24285) |
| `fn` | [`performClearAllData`](../youtube-playback-plox.user.js#L24305) | [24305](../youtube-playback-plox.user.js#L24305) |
| `fn` | [`undoClearAll`](../youtube-playback-plox.user.js#L24489) | [24489](../youtube-playback-plox.user.js#L24489) |
| `fn` | [`undoCommitGuard`](../youtube-playback-plox.user.js#L24492) | [24492](../youtube-playback-plox.user.js#L24492) |
| `fn` | [`performUndoClearAll`](../youtube-playback-plox.user.js#L24505) | [24505](../youtube-playback-plox.user.js#L24505) |

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L24573)
> [Line 24573](../youtube-playback-plox.user.js#L24573)

| Type | Name | Line |
|---|---|---|
| `fn` | [`registerOwnedMenuCommand`](../youtube-playback-plox.user.js#L24582) | [24582](../youtube-playback-plox.user.js#L24582) |
| `fn` | [`unregisterOwnedMenuCommands`](../youtube-playback-plox.user.js#L24592) | [24592](../youtube-playback-plox.user.js#L24592) |
| `fn` | [`registerMenuCommands`](../youtube-playback-plox.user.js#L24605) | [24605](../youtube-playback-plox.user.js#L24605) |

## [🔄 Data Migration](../youtube-playback-plox.user.js#L24631)
> [Line 24631](../youtube-playback-plox.user.js#L24631)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeVideoType`](../youtube-playback-plox.user.js#L24640) | [24640](../youtube-playback-plox.user.js#L24640) |
| `fn` | [`cleanupNonVideoData`](../youtube-playback-plox.user.js#L24662) | [24662](../youtube-playback-plox.user.js#L24662) |
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L24689) | [24689](../youtube-playback-plox.user.js#L24689) |
| `fn` | [`runAutoCleanup`](../youtube-playback-plox.user.js#L24910) | [24910](../youtube-playback-plox.user.js#L24910) |
| `fn` | [`cleanupCommitGuard`](../youtube-playback-plox.user.js#L24930) | [24930](../youtube-playback-plox.user.js#L24930) |

## [🚀 Init](../youtube-playback-plox.user.js#L25134)
> [Line 25134](../youtube-playback-plox.user.js#L25134)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L25147) | [25147](../youtube-playback-plox.user.js#L25147) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L25171) | [25171](../youtube-playback-plox.user.js#L25171) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L25579) | [25579](../youtube-playback-plox.user.js#L25579) |

