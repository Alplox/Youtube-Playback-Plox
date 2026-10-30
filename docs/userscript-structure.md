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
48. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 12435](../youtube-playback-plox.user.js#L12435)
49. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 12640](../youtube-playback-plox.user.js#L12640)
50. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 12857](../youtube-playback-plox.user.js#L12857)
51. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 12879](../youtube-playback-plox.user.js#L12879)
52. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 12907](../youtube-playback-plox.user.js#L12907)
53. [📺 get Playlist Name](#get-playlist-name) - [line 12952](../youtube-playback-plox.user.js#L12952)
54. [🕒 Time Display](#time-display) - [line 13252](../youtube-playback-plox.user.js#L13252)
55. [🖼️ Display Button Helpers](#display-button-helpers) - [line 13298](../youtube-playback-plox.user.js#L13298)
56. [🍞 Toasts](#toasts) - [line 14222](../youtube-playback-plox.user.js#L14222)
57. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 14537](../youtube-playback-plox.user.js#L14537)
58. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 14584](../youtube-playback-plox.user.js#L14584)
59. [⚙️ Settings UI](#settings-ui) - [line 14902](../youtube-playback-plox.user.js#L14902)
60. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 15413](../youtube-playback-plox.user.js#L15413)
61. [🎵 Video Selection](#video-selection) - [line 15471](../youtube-playback-plox.user.js#L15471)
62. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 16463](../youtube-playback-plox.user.js#L16463)
63. [📡 Video Observer Manager](#video-observer-manager) - [line 16767](../youtube-playback-plox.user.js#L16767)
64. [Processing Functions](#processing-functions) - [line 17646](../youtube-playback-plox.user.js#L17646)
65. [PlaybackController](#playbackcontroller) - [line 19119](../youtube-playback-plox.user.js#L19119)
66. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 19813](../youtube-playback-plox.user.js#L19813)
67. [📂 Sort UI](#sort-ui) - [line 20351](../youtube-playback-plox.user.js#L20351)
68. [📂 Filters UI](#filters-ui) - [line 20553](../youtube-playback-plox.user.js#L20553)
69. [📂 Video List UI](#video-list-ui) - [line 20841](../youtube-playback-plox.user.js#L20841)
70. [📁 Update Video List](#update-video-list) - [line 21019](../youtube-playback-plox.user.js#L21019)
71. [🔘 Floating Button](#floating-button) - [line 21927](../youtube-playback-plox.user.js#L21927)
72. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 21956](../youtube-playback-plox.user.js#L21956)
73. [📂 Video Entry](#video-entry) - [line 22217](../youtube-playback-plox.user.js#L22217)
74. [🗑️ Clear All Data](#clear-all-data) - [line 24238](../youtube-playback-plox.user.js#L24238)
75. [⚙️ Menu Commands](#menu-commands) - [line 24590](../youtube-playback-plox.user.js#L24590)
76. [🔄 Data Migration](#data-migration) - [line 24648](../youtube-playback-plox.user.js#L24648)
77. [🚀 Init](#init) - [line 25151](../youtube-playback-plox.user.js#L25151)

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
| `fn` | [`invalidatePlayerVideoIdCache`](../youtube-playback-plox.user.js#L12431) | [12431](../youtube-playback-plox.user.js#L12431) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L12435)
> [Line 12435](../youtube-playback-plox.user.js#L12435)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTypeFromPageManager`](../youtube-playback-plox.user.js#L12458) | [12458](../youtube-playback-plox.user.js#L12458) |
| `fn` | [`getTypeFromYtApp`](../youtube-playback-plox.user.js#L12498) | [12498](../youtube-playback-plox.user.js#L12498) |
| `fn` | [`detectFromURL`](../youtube-playback-plox.user.js#L12524) | [12524](../youtube-playback-plox.user.js#L12524) |
| `fn` | [`cachePageType`](../youtube-playback-plox.user.js#L12596) | [12596](../youtube-playback-plox.user.js#L12596) |
| `fn` | [`getYouTubePageType`](../youtube-playback-plox.user.js#L12615) | [12615](../youtube-playback-plox.user.js#L12615) |

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L12640)
> [Line 12640](../youtube-playback-plox.user.js#L12640)

| Type | Name | Line |
|---|---|---|
| `fn` | [`_parseYouTubeResourceImpl`](../youtube-playback-plox.user.js#L12700) | [12700](../youtube-playback-plox.user.js#L12700) |
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L12736) | [12736](../youtube-playback-plox.user.js#L12736) |
| `fn` | [`parseYouTubeResource`](../youtube-playback-plox.user.js#L12847) | [12847](../youtube-playback-plox.user.js#L12847) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L12857)
> [Line 12857](../youtube-playback-plox.user.js#L12857)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubeVideoIdFromUrl`](../youtube-playback-plox.user.js#L12867) | [12867](../youtube-playback-plox.user.js#L12867) |

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L12879)
> [Line 12879](../youtube-playback-plox.user.js#L12879)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getYouTubeVideoContextFromUrl`](../youtube-playback-plox.user.js#L12891) | [12891](../youtube-playback-plox.user.js#L12891) |

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L12907)
> [Line 12907](../youtube-playback-plox.user.js#L12907)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubePlaylistIdFromUrl`](../youtube-playback-plox.user.js#L12915) | [12915](../youtube-playback-plox.user.js#L12915) |
| `fn` | [`classifyPlaylist`](../youtube-playback-plox.user.js#L12939) | [12939](../youtube-playback-plox.user.js#L12939) |

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L12952)
> [Line 12952](../youtube-playback-plox.user.js#L12952)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L12973) | [12973](../youtube-playback-plox.user.js#L12973) |
| `fn` | [`extractYtInitialData`](../youtube-playback-plox.user.js#L13010) | [13010](../youtube-playback-plox.user.js#L13010) |
| `fn` | [`getPlaylistName`](../youtube-playback-plox.user.js#L13116) | [13116](../youtube-playback-plox.user.js#L13116) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L13132) | [13132](../youtube-playback-plox.user.js#L13132) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L13225) | [13225](../youtube-playback-plox.user.js#L13225) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L13252)
> [Line 13252](../youtube-playback-plox.user.js#L13252)

| Type | Name | Line |
|---|---|---|
| `fn` | [`cancelPendingDisplayClear`](../youtube-playback-plox.user.js#L13276) | [13276](../youtube-playback-plox.user.js#L13276) |
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L13289) | [13289](../youtube-playback-plox.user.js#L13289) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L13298)
> [Line 13298](../youtube-playback-plox.user.js#L13298)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTimeDisplayMessage`](../youtube-playback-plox.user.js#L13306) | [13306](../youtube-playback-plox.user.js#L13306) |
| `fn` | [`hasTimeDisplayMessage`](../youtube-playback-plox.user.js#L13315) | [13315](../youtube-playback-plox.user.js#L13315) |
| `fn` | [`showDisplayMessage`](../youtube-playback-plox.user.js#L13325) | [13325](../youtube-playback-plox.user.js#L13325) |
| `fn` | [`restoreDisplayButtons`](../youtube-playback-plox.user.js#L13343) | [13343](../youtube-playback-plox.user.js#L13343) |
| `fn` | [`createSplitButtonGroup`](../youtube-playback-plox.user.js#L13374) | [13374](../youtube-playback-plox.user.js#L13374) |
| `fn` | [`getDisplayContextVideo`](../youtube-playback-plox.user.js#L13399) | [13399](../youtube-playback-plox.user.js#L13399) |
| `fn` | [`getDisplayContextPlayer`](../youtube-playback-plox.user.js#L13414) | [13414](../youtube-playback-plox.user.js#L13414) |
| `fn` | [`getPlaybackNotificationKind`](../youtube-playback-plox.user.js#L13429) | [13429](../youtube-playback-plox.user.js#L13429) |
| `fn` | [`buildPlaybackNotificationMessage`](../youtube-playback-plox.user.js#L13446) | [13446](../youtube-playback-plox.user.js#L13446) |
| `fn` | [`setupManualSaveButton`](../youtube-playback-plox.user.js#L13484) | [13484](../youtube-playback-plox.user.js#L13484) |
| `fn` | [`getActiveShortsControlsContainer`](../youtube-playback-plox.user.js#L13544) | [13544](../youtube-playback-plox.user.js#L13544) |
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L13589) | [13589](../youtube-playback-plox.user.js#L13589) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L13589) | [13589](../youtube-playback-plox.user.js#L13589) |
| `fn` | [`getDisplayDisposables`](../youtube-playback-plox.user.js#L13611) | [13611](../youtube-playback-plox.user.js#L13611) |
| `fn` | [`disposeDisplayNode`](../youtube-playback-plox.user.js#L13624) | [13624](../youtube-playback-plox.user.js#L13624) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L13631) | [13631](../youtube-playback-plox.user.js#L13631) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L13641) | [13641](../youtube-playback-plox.user.js#L13641) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L13649) | [13649](../youtube-playback-plox.user.js#L13649) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L13657) | [13657](../youtube-playback-plox.user.js#L13657) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L13680) | [13680](../youtube-playback-plox.user.js#L13680) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L13692) | [13692](../youtube-playback-plox.user.js#L13692) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L13695) | [13695](../youtube-playback-plox.user.js#L13695) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L13705) | [13705](../youtube-playback-plox.user.js#L13705) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L13710) | [13710](../youtube-playback-plox.user.js#L13710) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L13733) | [13733](../youtube-playback-plox.user.js#L13733) |
| `fn` | [`scheduleShortsFrame`](../youtube-playback-plox.user.js#L13753) | [13753](../youtube-playback-plox.user.js#L13753) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L13762) | [13762](../youtube-playback-plox.user.js#L13762) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L13771) | [13771](../youtube-playback-plox.user.js#L13771) |
| `fn` | [`isMobileWatchDisplayFallback`](../youtube-playback-plox.user.js#L13819) | [13819](../youtube-playback-plox.user.js#L13819) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L13833) | [13833](../youtube-playback-plox.user.js#L13833) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L13941) | [13941](../youtube-playback-plox.user.js#L13941) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L13997) | [13997](../youtube-playback-plox.user.js#L13997) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L14068) | [14068](../youtube-playback-plox.user.js#L14068) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L14090) | [14090](../youtube-playback-plox.user.js#L14090) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L14104) | [14104](../youtube-playback-plox.user.js#L14104) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L14108) | [14108](../youtube-playback-plox.user.js#L14108) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L14115) | [14115](../youtube-playback-plox.user.js#L14115) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L14133) | [14133](../youtube-playback-plox.user.js#L14133) |
| `fn` | [`startShortsPanelObserver`](../youtube-playback-plox.user.js#L14147) | [14147](../youtube-playback-plox.user.js#L14147) |
| `fn` | [`stopShortsPanelObserver`](../youtube-playback-plox.user.js#L14195) | [14195](../youtube-playback-plox.user.js#L14195) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L14222)
> [Line 14222](../youtube-playback-plox.user.js#L14222)

| Type | Name | Line |
|---|---|---|
| `fn` | [`disposeToastRuntime`](../youtube-playback-plox.user.js#L14234) | [14234](../youtube-playback-plox.user.js#L14234) |
| `fn` | [`registerToastRuntime`](../youtube-playback-plox.user.js#L14262) | [14262](../youtube-playback-plox.user.js#L14262) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L14263) | [14263](../youtube-playback-plox.user.js#L14263) |
| `fn` | [`createToastContainer`](../youtube-playback-plox.user.js#L14279) | [14279](../youtube-playback-plox.user.js#L14279) |
| `fn` | [`fadeAndRemoveToast`](../youtube-playback-plox.user.js#L14312) | [14312](../youtube-playback-plox.user.js#L14312) |
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L14333) | [14333](../youtube-playback-plox.user.js#L14333) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L14357) | [14357](../youtube-playback-plox.user.js#L14357) |
| `fn` | [`showFloatingToast`](../youtube-playback-plox.user.js#L14381) | [14381](../youtube-playback-plox.user.js#L14381) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L14537)
> [Line 14537](../youtube-playback-plox.user.js#L14537)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L14540) | [14540](../youtube-playback-plox.user.js#L14540) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L14584)
> [Line 14584](../youtube-playback-plox.user.js#L14584)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L14624) | [14624](../youtube-playback-plox.user.js#L14624) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L14630) | [14630](../youtube-playback-plox.user.js#L14630) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L14638) | [14638](../youtube-playback-plox.user.js#L14638) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L14684) | [14684](../youtube-playback-plox.user.js#L14684) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L14688) | [14688](../youtube-playback-plox.user.js#L14688) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L14691) | [14691](../youtube-playback-plox.user.js#L14691) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L14707) | [14707](../youtube-playback-plox.user.js#L14707) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L14716) | [14716](../youtube-playback-plox.user.js#L14716) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L14746) | [14746](../youtube-playback-plox.user.js#L14746) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L14760) | [14760](../youtube-playback-plox.user.js#L14760) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L14764) | [14764](../youtube-playback-plox.user.js#L14764) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L14902)
> [Line 14902](../youtube-playback-plox.user.js#L14902)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSettingsUI`](../youtube-playback-plox.user.js#L14905) | [14905](../youtube-playback-plox.user.js#L14905) |
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L14936) | [14936](../youtube-playback-plox.user.js#L14936) |
| `fn` | [`onSettingsKeyDown`](../youtube-playback-plox.user.js#L14958) | [14958](../youtube-playback-plox.user.js#L14958) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L15041) | [15041](../youtube-playback-plox.user.js#L15041) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L15128) | [15128](../youtube-playback-plox.user.js#L15128) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L15129) | [15129](../youtube-playback-plox.user.js#L15129) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L15218) | [15218](../youtube-playback-plox.user.js#L15218) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L15219) | [15219](../youtube-playback-plox.user.js#L15219) |
| `fn` | [`getInnerTubeClientVersion`](../youtube-playback-plox.user.js#L15251) | [15251](../youtube-playback-plox.user.js#L15251) |
| `fn` | [`idbDiag`](../youtube-playback-plox.user.js#L15280) | [15280](../youtube-playback-plox.user.js#L15280) |
| `fn` | [`safeModeActive`](../youtube-playback-plox.user.js#L15298) | [15298](../youtube-playback-plox.user.js#L15298) |
| `fn` | [`activeSessions`](../youtube-playback-plox.user.js#L15299) | [15299](../youtube-playback-plox.user.js#L15299) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L15413)
> [Line 15413](../youtube-playback-plox.user.js#L15413)

| Type | Name | Line |
|---|---|---|
| `fn` | [`notifySeekOrProgress`](../youtube-playback-plox.user.js#L15415) | [15415](../youtube-playback-plox.user.js#L15415) |

## [🎵 Video Selection](../youtube-playback-plox.user.js#L15471)
> [Line 15471](../youtube-playback-plox.user.js#L15471)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleManagementMode`](../youtube-playback-plox.user.js#L15486) | [15486](../youtube-playback-plox.user.js#L15486) |
| `fn` | [`buildSkipParts`](../youtube-playback-plox.user.js#L15505) | [15505](../youtube-playback-plox.user.js#L15505) |
| `fn` | [`updateFooterButtons`](../youtube-playback-plox.user.js#L15519) | [15519](../youtube-playback-plox.user.js#L15519) |
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L15596) | [15596](../youtube-playback-plox.user.js#L15596) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L15603) | [15603](../youtube-playback-plox.user.js#L15603) |
| `fn` | [`createFooterActionMenu`](../youtube-playback-plox.user.js#L15645) | [15645](../youtube-playback-plox.user.js#L15645) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L15675) | [15675](../youtube-playback-plox.user.js#L15675) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L15679) | [15679](../youtube-playback-plox.user.js#L15679) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L15688) | [15688](../youtube-playback-plox.user.js#L15688) |
| `fn` | [`closeImportMenu`](../youtube-playback-plox.user.js#L15784) | [15784](../youtube-playback-plox.user.js#L15784) |
| `fn` | [`onImportOutsideClick`](../youtube-playback-plox.user.js#L15793) | [15793](../youtube-playback-plox.user.js#L15793) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L16195) | [16195](../youtube-playback-plox.user.js#L16195) |
| `fn` | [`updateManagementFooterState`](../youtube-playback-plox.user.js#L16257) | [16257](../youtube-playback-plox.user.js#L16257) |
| `fn` | [`togglePlaylistCreationMode`](../youtube-playback-plox.user.js#L16287) | [16287](../youtube-playback-plox.user.js#L16287) |
| `fn` | [`copyToClipboard`](../youtube-playback-plox.user.js#L16306) | [16306](../youtube-playback-plox.user.js#L16306) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L16319) | [16319](../youtube-playback-plox.user.js#L16319) |
| `fn` | [`syncSelectionCheckboxes`](../youtube-playback-plox.user.js#L16400) | [16400](../youtube-playback-plox.user.js#L16400) |
| `fn` | [`createClearSelectionButton`](../youtube-playback-plox.user.js#L16413) | [16413](../youtube-playback-plox.user.js#L16413) |
| `fn` | [`toggleVideoSelection`](../youtube-playback-plox.user.js#L16431) | [16431](../youtube-playback-plox.user.js#L16431) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L16463)
> [Line 16463](../youtube-playback-plox.user.js#L16463)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L16469) | [16469](../youtube-playback-plox.user.js#L16469) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L16469) | [16469](../youtube-playback-plox.user.js#L16469) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L16470) | [16470](../youtube-playback-plox.user.js#L16470) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L16479) | [16479](../youtube-playback-plox.user.js#L16479) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L16492) | [16492](../youtube-playback-plox.user.js#L16492) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L16503) | [16503](../youtube-playback-plox.user.js#L16503) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L16520) | [16520](../youtube-playback-plox.user.js#L16520) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L16554) | [16554](../youtube-playback-plox.user.js#L16554) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L16579) | [16579](../youtube-playback-plox.user.js#L16579) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L16581) | [16581](../youtube-playback-plox.user.js#L16581) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L16600) | [16600](../youtube-playback-plox.user.js#L16600) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L16600) | [16600](../youtube-playback-plox.user.js#L16600) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L16602) | [16602](../youtube-playback-plox.user.js#L16602) |
| `fn` | [`logRoutingDecision`](../youtube-playback-plox.user.js#L16626) | [16626](../youtube-playback-plox.user.js#L16626) |
| `fn` | [`shouldDropVideoEvent`](../youtube-playback-plox.user.js#L16635) | [16635](../youtube-playback-plox.user.js#L16635) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L16644) | [16644](../youtube-playback-plox.user.js#L16644) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L16644) | [16644](../youtube-playback-plox.user.js#L16644) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L16655) | [16655](../youtube-playback-plox.user.js#L16655) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L16660) | [16660](../youtube-playback-plox.user.js#L16660) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L16665) | [16665](../youtube-playback-plox.user.js#L16665) |
| `fn` | [`note`](../youtube-playback-plox.user.js#L16685) | [16685](../youtube-playback-plox.user.js#L16685) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L16689) | [16689](../youtube-playback-plox.user.js#L16689) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L16707) | [16707](../youtube-playback-plox.user.js#L16707) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L16707) | [16707](../youtube-playback-plox.user.js#L16707) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L16709) | [16709](../youtube-playback-plox.user.js#L16709) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L16717) | [16717](../youtube-playback-plox.user.js#L16717) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L16767)
> [Line 16767](../youtube-playback-plox.user.js#L16767)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L16780) | [16780](../youtube-playback-plox.user.js#L16780) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L16780) | [16780](../youtube-playback-plox.user.js#L16780) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L16802) | [16802](../youtube-playback-plox.user.js#L16802) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L16822) | [16822](../youtube-playback-plox.user.js#L16822) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L16848) | [16848](../youtube-playback-plox.user.js#L16848) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L16895) | [16895](../youtube-playback-plox.user.js#L16895) |
| `fn` | [`clearWatchPlayerWait`](../youtube-playback-plox.user.js#L16925) | [16925](../youtube-playback-plox.user.js#L16925) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L16947) | [16947](../youtube-playback-plox.user.js#L16947) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L16967) | [16967](../youtube-playback-plox.user.js#L16967) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L17023) | [17023](../youtube-playback-plox.user.js#L17023) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L17091) | [17091](../youtube-playback-plox.user.js#L17091) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L17101) | [17101](../youtube-playback-plox.user.js#L17101) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L17112) | [17112](../youtube-playback-plox.user.js#L17112) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L17144) | [17144](../youtube-playback-plox.user.js#L17144) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L17192) | [17192](../youtube-playback-plox.user.js#L17192) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L17203) | [17203](../youtube-playback-plox.user.js#L17203) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L17227) | [17227](../youtube-playback-plox.user.js#L17227) |
| `fn` | [`clearPlayerCache`](../youtube-playback-plox.user.js#L17353) | [17353](../youtube-playback-plox.user.js#L17353) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L17575) | [17575](../youtube-playback-plox.user.js#L17575) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L17616) | [17616](../youtube-playback-plox.user.js#L17616) |

## [Processing Functions](../youtube-playback-plox.user.js#L17646)
> [Line 17646](../youtube-playback-plox.user.js#L17646)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isSessionStale`](../youtube-playback-plox.user.js#L17663) | [17663](../youtube-playback-plox.user.js#L17663) |
| `fn` | [`scheduleIdMismatchRetry`](../youtube-playback-plox.user.js#L17689) | [17689](../youtube-playback-plox.user.js#L17689) |
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L17733) | [17733](../youtube-playback-plox.user.js#L17733) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L17760) | [17760](../youtube-playback-plox.user.js#L17760) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L17770) | [17770](../youtube-playback-plox.user.js#L17770) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L17770) | [17770](../youtube-playback-plox.user.js#L17770) |
| `fn` | [`clearPendingRecovery`](../youtube-playback-plox.user.js#L17790) | [17790](../youtube-playback-plox.user.js#L17790) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L17795) | [17795](../youtube-playback-plox.user.js#L17795) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L17800) | [17800](../youtube-playback-plox.user.js#L17800) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L17807) | [17807](../youtube-playback-plox.user.js#L17807) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L17813) | [17813](../youtube-playback-plox.user.js#L17813) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L17831) | [17831](../youtube-playback-plox.user.js#L17831) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L17929) | [17929](../youtube-playback-plox.user.js#L17929) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L17993) | [17993](../youtube-playback-plox.user.js#L17993) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L18039) | [18039](../youtube-playback-plox.user.js#L18039) |
| `fn` | [`isAwaitingFirstPlayback`](../youtube-playback-plox.user.js#L18071) | [18071](../youtube-playback-plox.user.js#L18071) |
| `fn` | [`isProgressInCompletionZone`](../youtube-playback-plox.user.js#L18090) | [18090](../youtube-playback-plox.user.js#L18090) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L18094) | [18094](../youtube-playback-plox.user.js#L18094) |
| `fn` | [`isPlayerReportingEnd`](../youtube-playback-plox.user.js#L18107) | [18107](../youtube-playback-plox.user.js#L18107) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L18124) | [18124](../youtube-playback-plox.user.js#L18124) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L18135) | [18135](../youtube-playback-plox.user.js#L18135) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L18147) | [18147](../youtube-playback-plox.user.js#L18147) |
| `fn` | [`absorbSaveResult`](../youtube-playback-plox.user.js#L18180) | [18180](../youtube-playback-plox.user.js#L18180) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L18194) | [18194](../youtube-playback-plox.user.js#L18194) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L18269) | [18269](../youtube-playback-plox.user.js#L18269) |
| `fn` | [`handleNaturalEnd`](../youtube-playback-plox.user.js#L18294) | [18294](../youtube-playback-plox.user.js#L18294) |
| `fn` | [`persistCompletion`](../youtube-playback-plox.user.js#L18303) | [18303](../youtube-playback-plox.user.js#L18303) |
| `fn` | [`handleSeekingForGradient`](../youtube-playback-plox.user.js#L18334) | [18334](../youtube-playback-plox.user.js#L18334) |
| `fn` | [`handleSeekedForGradient`](../youtube-playback-plox.user.js#L18344) | [18344](../youtube-playback-plox.user.js#L18344) |
| `fn` | [`canValidateStandalone`](../youtube-playback-plox.user.js#L18483) | [18483](../youtube-playback-plox.user.js#L18483) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L18508) | [18508](../youtube-playback-plox.user.js#L18508) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L18637) | [18637](../youtube-playback-plox.user.js#L18637) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L18836) | [18836](../youtube-playback-plox.user.js#L18836) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L18949) | [18949](../youtube-playback-plox.user.js#L18949) |
| `fn` | [`processMediaVideo`](../youtube-playback-plox.user.js#L19064) | [19064](../youtube-playback-plox.user.js#L19064) |

## [PlaybackController](../youtube-playback-plox.user.js#L19119)
> [Line 19119](../youtube-playback-plox.user.js#L19119)

| Type | Name | Line |
|---|---|---|
| `fn` | [`mapLiveAbsoluteToWindow`](../youtube-playback-plox.user.js#L19134) | [19134](../youtube-playback-plox.user.js#L19134) |
| `fn` | [`applySeek`](../youtube-playback-plox.user.js#L19160) | [19160](../youtube-playback-plox.user.js#L19160) |
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L19215) | [19215](../youtube-playback-plox.user.js#L19215) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L19232) | [19232](../youtube-playback-plox.user.js#L19232) |
| `fn` | [`removeMetadataListener`](../youtube-playback-plox.user.js#L19256) | [19256](../youtube-playback-plox.user.js#L19256) |
| `fn` | [`removeCanPlayListener`](../youtube-playback-plox.user.js#L19257) | [19257](../youtube-playback-plox.user.js#L19257) |
| `fn` | [`removeAbortListener`](../youtube-playback-plox.user.js#L19258) | [19258](../youtube-playback-plox.user.js#L19258) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L19259) | [19259](../youtube-playback-plox.user.js#L19259) |
| `fn` | [`rejectAsStale`](../youtube-playback-plox.user.js#L19265) | [19265](../youtube-playback-plox.user.js#L19265) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L19269) | [19269](../youtube-playback-plox.user.js#L19269) |
| `fn` | [`onAbort`](../youtube-playback-plox.user.js#L19278) | [19278](../youtube-playback-plox.user.js#L19278) |
| `fn` | [`restoreThrottleMarker`](../youtube-playback-plox.user.js#L19495) | [19495](../youtube-playback-plox.user.js#L19495) |
| `fn` | [`readApiNumber`](../youtube-playback-plox.user.js#L19510) | [19510](../youtube-playback-plox.user.js#L19510) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L19665) | [19665](../youtube-playback-plox.user.js#L19665) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L19813)
> [Line 19813](../youtube-playback-plox.user.js#L19813)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getInnerTubeConfig`](../youtube-playback-plox.user.js#L19850) | [19850](../youtube-playback-plox.user.js#L19850) |
| `fn` | [`fetchInnerTubeJson`](../youtube-playback-plox.user.js#L19865) | [19865](../youtube-playback-plox.user.js#L19865) |
| `fn` | [`fetchShortsViews`](../youtube-playback-plox.user.js#L19899) | [19899](../youtube-playback-plox.user.js#L19899) |
| `fn` | [`fetchPlaylistTitle`](../youtube-playback-plox.user.js#L19912) | [19912](../youtube-playback-plox.user.js#L19912) |
| `fn` | [`getCascadedVideoInfo`](../youtube-playback-plox.user.js#L19922) | [19922](../youtube-playback-plox.user.js#L19922) |
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L19967) | [19967](../youtube-playback-plox.user.js#L19967) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L20351)
> [Line 20351](../youtube-playback-plox.user.js#L20351)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createCustomDropdown`](../youtube-playback-plox.user.js#L20369) | [20369](../youtube-playback-plox.user.js#L20369) |
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L20380) | [20380](../youtube-playback-plox.user.js#L20380) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L20456) | [20456](../youtube-playback-plox.user.js#L20456) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L20472) | [20472](../youtube-playback-plox.user.js#L20472) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L20480) | [20480](../youtube-playback-plox.user.js#L20480) |
| `fn` | [`createSortSelector`](../youtube-playback-plox.user.js#L20497) | [20497](../youtube-playback-plox.user.js#L20497) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L20500) | [20500](../youtube-playback-plox.user.js#L20500) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L20553)
> [Line 20553](../youtube-playback-plox.user.js#L20553)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFilterSelector`](../youtube-playback-plox.user.js#L20562) | [20562](../youtube-playback-plox.user.js#L20562) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L20565) | [20565](../youtube-playback-plox.user.js#L20565) |
| `fn` | [`createRangeFilter`](../youtube-playback-plox.user.js#L20610) | [20610](../youtube-playback-plox.user.js#L20610) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L20613) | [20613](../youtube-playback-plox.user.js#L20613) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L20619) | [20619](../youtube-playback-plox.user.js#L20619) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L20640) | [20640](../youtube-playback-plox.user.js#L20640) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L20761) | [20761](../youtube-playback-plox.user.js#L20761) |
| `fn` | [`createSearchInput`](../youtube-playback-plox.user.js#L20816) | [20816](../youtube-playback-plox.user.js#L20816) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L20841)
> [Line 20841](../youtube-playback-plox.user.js#L20841)

| Type | Name | Line |
|---|---|---|
| `fn` | [`acquireBodyOverflow`](../youtube-playback-plox.user.js#L20869) | [20869](../youtube-playback-plox.user.js#L20869) |
| `fn` | [`releaseBodyOverflow`](../youtube-playback-plox.user.js#L20883) | [20883](../youtube-playback-plox.user.js#L20883) |
| `fn` | [`getVirtualScrollerVideoItems`](../youtube-playback-plox.user.js#L20949) | [20949](../youtube-playback-plox.user.js#L20949) |
| `fn` | [`batchLoadStorageData`](../youtube-playback-plox.user.js#L20978) | [20978](../youtube-playback-plox.user.js#L20978) |

## [📁 Update Video List](../youtube-playback-plox.user.js#L21019)
> [Line 21019](../youtube-playback-plox.user.js#L21019)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSortValue`](../youtube-playback-plox.user.js#L21026) | [21026](../youtube-playback-plox.user.js#L21026) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L21038) | [21038](../youtube-playback-plox.user.js#L21038) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L21042) | [21042](../youtube-playback-plox.user.js#L21042) |
| `fn` | [`showLoadingState`](../youtube-playback-plox.user.js#L21059) | [21059](../youtube-playback-plox.user.js#L21059) |
| `fn` | [`loadVideoItems`](../youtube-playback-plox.user.js#L21122) | [21122](../youtube-playback-plox.user.js#L21122) |
| `fn` | [`resolvePlaylistTitles`](../youtube-playback-plox.user.js#L21146) | [21146](../youtube-playback-plox.user.js#L21146) |
| `fn` | [`filterItems`](../youtube-playback-plox.user.js#L21178) | [21178](../youtube-playback-plox.user.js#L21178) |
| `fn` | [`buildVirtualItems`](../youtube-playback-plox.user.js#L21222) | [21222](../youtube-playback-plox.user.js#L21222) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L21234) | [21234](../youtube-playback-plox.user.js#L21234) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L21255) | [21255](../youtube-playback-plox.user.js#L21255) |
| `fn` | [`showEmptyState`](../youtube-playback-plox.user.js#L21285) | [21285](../youtube-playback-plox.user.js#L21285) |
| `fn` | [`showListLoadErrorState`](../youtube-playback-plox.user.js#L21318) | [21318](../youtube-playback-plox.user.js#L21318) |
| `fn` | [`updateVirtualScroller`](../youtube-playback-plox.user.js#L21339) | [21339](../youtube-playback-plox.user.js#L21339) |
| `fn` | [`initVirtualScroller`](../youtube-playback-plox.user.js#L21369) | [21369](../youtube-playback-plox.user.js#L21369) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L21415) | [21415](../youtube-playback-plox.user.js#L21415) |
| `fn` | [`resolveGridCols`](../youtube-playback-plox.user.js#L21490) | [21490](../youtube-playback-plox.user.js#L21490) |
| `fn` | [`destroyVirtualScroller`](../youtube-playback-plox.user.js#L21503) | [21503](../youtube-playback-plox.user.js#L21503) |
| `fn` | [`disconnectVirtualScrollerObserver`](../youtube-playback-plox.user.js#L21517) | [21517](../youtube-playback-plox.user.js#L21517) |
| `fn` | [`connectResizeObserver`](../youtube-playback-plox.user.js#L21532) | [21532](../youtube-playback-plox.user.js#L21532) |
| `fn` | [`updateVideoList`](../youtube-playback-plox.user.js#L21565) | [21565](../youtube-playback-plox.user.js#L21565) |
| `fn` | [`isCurrentRender`](../youtube-playback-plox.user.js#L21570) | [21570](../youtube-playback-plox.user.js#L21570) |
| `fn` | [`requestVideoListUpdate`](../youtube-playback-plox.user.js#L21656) | [21656](../youtube-playback-plox.user.js#L21656) |
| `fn` | [`closeModalVideos`](../youtube-playback-plox.user.js#L21667) | [21667](../youtube-playback-plox.user.js#L21667) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L21747) | [21747](../youtube-playback-plox.user.js#L21747) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L21764) | [21764](../youtube-playback-plox.user.js#L21764) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L21792) | [21792](../youtube-playback-plox.user.js#L21792) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L21927)
> [Line 21927](../youtube-playback-plox.user.js#L21927)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L21930) | [21930](../youtube-playback-plox.user.js#L21930) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L21945) | [21945](../youtube-playback-plox.user.js#L21945) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L21956)
> [Line 21956](../youtube-playback-plox.user.js#L21956)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSavedVideosList`](../youtube-playback-plox.user.js#L21959) | [21959](../youtube-playback-plox.user.js#L21959) |
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L22097) | [22097](../youtube-playback-plox.user.js#L22097) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L22107) | [22107](../youtube-playback-plox.user.js#L22107) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L22177) | [22177](../youtube-playback-plox.user.js#L22177) |
| `fn` | [`onSavedVideosKeyDown`](../youtube-playback-plox.user.js#L22186) | [22186](../youtube-playback-plox.user.js#L22186) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L22217)
> [Line 22217](../youtube-playback-plox.user.js#L22217)

| Type | Name | Line |
|---|---|---|
| `fn` | [`pickPlaylistVariant`](../youtube-playback-plox.user.js#L22226) | [22226](../youtube-playback-plox.user.js#L22226) |
| `fn` | [`generatePlaylistColor`](../youtube-playback-plox.user.js#L22253) | [22253](../youtube-playback-plox.user.js#L22253) |
| `fn` | [`generatePlaylistBorderColor`](../youtube-playback-plox.user.js#L22266) | [22266](../youtube-playback-plox.user.js#L22266) |
| `fn` | [`handleForceTimeAction`](../youtube-playback-plox.user.js#L22270) | [22270](../youtube-playback-plox.user.js#L22270) |
| `fn` | [`handleUnlinkPlaylistAction`](../youtube-playback-plox.user.js#L22336) | [22336](../youtube-playback-plox.user.js#L22336) |
| `fn` | [`handleDeleteEntryAction`](../youtube-playback-plox.user.js#L22358) | [22358](../youtube-playback-plox.user.js#L22358) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L22391) | [22391](../youtube-playback-plox.user.js#L22391) |
| `fn` | [`handleToggleProtectionAction`](../youtube-playback-plox.user.js#L22420) | [22420](../youtube-playback-plox.user.js#L22420) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L22461) | [22461](../youtube-playback-plox.user.js#L22461) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L22509) | [22509](../youtube-playback-plox.user.js#L22509) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L22515) | [22515](../youtube-playback-plox.user.js#L22515) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L22534) | [22534](../youtube-playback-plox.user.js#L22534) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L22568) | [22568](../youtube-playback-plox.user.js#L22568) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L22620) | [22620](../youtube-playback-plox.user.js#L22620) |
| `fn` | [`entryButtonsShown`](../youtube-playback-plox.user.js#L22635) | [22635](../youtube-playback-plox.user.js#L22635) |
| `fn` | [`generateVideoObsidianMarkdown`](../youtube-playback-plox.user.js#L22676) | [22676](../youtube-playback-plox.user.js#L22676) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L22709) | [22709](../youtube-playback-plox.user.js#L22709) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L22715) | [22715](../youtube-playback-plox.user.js#L22715) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L22731) | [22731](../youtube-playback-plox.user.js#L22731) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L22741) | [22741](../youtube-playback-plox.user.js#L22741) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L22749) | [22749](../youtube-playback-plox.user.js#L22749) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L22754) | [22754](../youtube-playback-plox.user.js#L22754) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L22761) | [22761](../youtube-playback-plox.user.js#L22761) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L22764) | [22764](../youtube-playback-plox.user.js#L22764) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L22768) | [22768](../youtube-playback-plox.user.js#L22768) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L22814) | [22814](../youtube-playback-plox.user.js#L22814) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L22814) | [22814](../youtube-playback-plox.user.js#L22814) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L22828) | [22828](../youtube-playback-plox.user.js#L22828) |
| `fn` | [`createModeSelector`](../youtube-playback-plox.user.js#L23102) | [23102](../youtube-playback-plox.user.js#L23102) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L23103) | [23103](../youtube-playback-plox.user.js#L23103) |
| `fn` | [`createViewModeSelector`](../youtube-playback-plox.user.js#L23135) | [23135](../youtube-playback-plox.user.js#L23135) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L23152) | [23152](../youtube-playback-plox.user.js#L23152) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L23153) | [23153](../youtube-playback-plox.user.js#L23153) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L23169) | [23169](../youtube-playback-plox.user.js#L23169) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L23170) | [23170](../youtube-playback-plox.user.js#L23170) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L23219) | [23219](../youtube-playback-plox.user.js#L23219) |
| `fn` | [`createOverflowToggle`](../youtube-playback-plox.user.js#L23250) | [23250](../youtube-playback-plox.user.js#L23250) |
| `fn` | [`makeToolbarGroup`](../youtube-playback-plox.user.js#L23289) | [23289](../youtube-playback-plox.user.js#L23289) |
| `fn` | [`makeDisplayToggle`](../youtube-playback-plox.user.js#L23311) | [23311](../youtube-playback-plox.user.js#L23311) |
| `fn` | [`mountSavedVideosModalActionsToolbar`](../youtube-playback-plox.user.js#L23345) | [23345](../youtube-playback-plox.user.js#L23345) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L23368) | [23368](../youtube-playback-plox.user.js#L23368) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L23382) | [23382](../youtube-playback-plox.user.js#L23382) |
| `fn` | [`makeModeRow`](../youtube-playback-plox.user.js#L23528) | [23528](../youtube-playback-plox.user.js#L23528) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L23678) | [23678](../youtube-playback-plox.user.js#L23678) |
| `fn` | [`applyThumbnailToImage`](../youtube-playback-plox.user.js#L23734) | [23734](../youtube-playback-plox.user.js#L23734) |
| `fn` | [`removeLoadListener`](../youtube-playback-plox.user.js#L23743) | [23743](../youtube-playback-plox.user.js#L23743) |
| `fn` | [`removeErrorListener`](../youtube-playback-plox.user.js#L23744) | [23744](../youtube-playback-plox.user.js#L23744) |
| `fn` | [`finish`](../youtube-playback-plox.user.js#L23750) | [23750](../youtube-playback-plox.user.js#L23750) |
| `fn` | [`loadCandidate`](../youtube-playback-plox.user.js#L23765) | [23765](../youtube-playback-plox.user.js#L23765) |
| `fn` | [`createVideoGridRow`](../youtube-playback-plox.user.js#L23800) | [23800](../youtube-playback-plox.user.js#L23800) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L23817) | [23817](../youtube-playback-plox.user.js#L23817) |
| `fn` | [`scheduleHeightUpdate`](../youtube-playback-plox.user.js#L23866) | [23866](../youtube-playback-plox.user.js#L23866) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L23913) | [23913](../youtube-playback-plox.user.js#L23913) |
| `fn` | [`createVideoEntry`](../youtube-playback-plox.user.js#L23927) | [23927](../youtube-playback-plox.user.js#L23927) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L24156) | [24156](../youtube-playback-plox.user.js#L24156) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L24179) | [24179](../youtube-playback-plox.user.js#L24179) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L24180) | [24180](../youtube-playback-plox.user.js#L24180) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L24238)
> [Line 24238](../youtube-playback-plox.user.js#L24238)

| Type | Name | Line |
|---|---|---|
| `fn` | [`restoreDeletedRecordIfUnchanged`](../youtube-playback-plox.user.js#L24257) | [24257](../youtube-playback-plox.user.js#L24257) |
| `fn` | [`canCommit`](../youtube-playback-plox.user.js#L24258) | [24258](../youtube-playback-plox.user.js#L24258) |
| `fn` | [`clearAllData`](../youtube-playback-plox.user.js#L24287) | [24287](../youtube-playback-plox.user.js#L24287) |
| `fn` | [`clearCommitGuard`](../youtube-playback-plox.user.js#L24302) | [24302](../youtube-playback-plox.user.js#L24302) |
| `fn` | [`performClearAllData`](../youtube-playback-plox.user.js#L24322) | [24322](../youtube-playback-plox.user.js#L24322) |
| `fn` | [`undoClearAll`](../youtube-playback-plox.user.js#L24506) | [24506](../youtube-playback-plox.user.js#L24506) |
| `fn` | [`undoCommitGuard`](../youtube-playback-plox.user.js#L24509) | [24509](../youtube-playback-plox.user.js#L24509) |
| `fn` | [`performUndoClearAll`](../youtube-playback-plox.user.js#L24522) | [24522](../youtube-playback-plox.user.js#L24522) |

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L24590)
> [Line 24590](../youtube-playback-plox.user.js#L24590)

| Type | Name | Line |
|---|---|---|
| `fn` | [`registerOwnedMenuCommand`](../youtube-playback-plox.user.js#L24599) | [24599](../youtube-playback-plox.user.js#L24599) |
| `fn` | [`unregisterOwnedMenuCommands`](../youtube-playback-plox.user.js#L24609) | [24609](../youtube-playback-plox.user.js#L24609) |
| `fn` | [`registerMenuCommands`](../youtube-playback-plox.user.js#L24622) | [24622](../youtube-playback-plox.user.js#L24622) |

## [🔄 Data Migration](../youtube-playback-plox.user.js#L24648)
> [Line 24648](../youtube-playback-plox.user.js#L24648)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeVideoType`](../youtube-playback-plox.user.js#L24657) | [24657](../youtube-playback-plox.user.js#L24657) |
| `fn` | [`cleanupNonVideoData`](../youtube-playback-plox.user.js#L24679) | [24679](../youtube-playback-plox.user.js#L24679) |
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L24706) | [24706](../youtube-playback-plox.user.js#L24706) |
| `fn` | [`runAutoCleanup`](../youtube-playback-plox.user.js#L24927) | [24927](../youtube-playback-plox.user.js#L24927) |
| `fn` | [`cleanupCommitGuard`](../youtube-playback-plox.user.js#L24947) | [24947](../youtube-playback-plox.user.js#L24947) |

## [🚀 Init](../youtube-playback-plox.user.js#L25151)
> [Line 25151](../youtube-playback-plox.user.js#L25151)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L25164) | [25164](../youtube-playback-plox.user.js#L25164) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L25188) | [25188](../youtube-playback-plox.user.js#L25188) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L25596) | [25596](../youtube-playback-plox.user.js#L25596) |

