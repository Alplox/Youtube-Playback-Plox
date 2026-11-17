# Userscript Structure
> Auto-generated from `youtube-playback-plox.user.js` · version 0.0.13-1
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
27. [🎨 Theme](#theme) - [line 5727](../youtube-playback-plox.user.js#L5727)
28. [🎨 SVG Icons](#svg-icons) - [line 5805](../youtube-playback-plox.user.js#L5805)
29. [🎨 Progress Bar Style](#progress-bar-style) - [line 5967](../youtube-playback-plox.user.js#L5967)
30. [💾 Storage + Settings](#storage-settings) - [line 6515](../youtube-playback-plox.user.js#L6515)
31. [📢 Ad Caches](#ad-caches) - [line 9515](../youtube-playback-plox.user.js#L9515)
32. [📢 Ad Detector](#ad-detector) - [line 9541](../youtube-playback-plox.user.js#L9541)
33. [🎯 VirtualScroller](#virtualscroller) - [line 9734](../youtube-playback-plox.user.js#L9734)
34. [📤 Import/Export JSON](#importexport-json) - [line 10240](../youtube-playback-plox.user.js#L10240)
35. [☁️ GitHub Backup](#github-backup) - [line 10858](../youtube-playback-plox.user.js#L10858)
36. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 11401](../youtube-playback-plox.user.js#L11401)
37. [🔄 Normalize Video Data](#normalize-video-data) - [line 11583](../youtube-playback-plox.user.js#L11583)
38. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 11685](../youtube-playback-plox.user.js#L11685)
39. [Parse FreeTube DB](#parse-freetube-db) - [line 11776](../youtube-playback-plox.user.js#L11776)
40. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 11869](../youtube-playback-plox.user.js#L11869)
41. [⬆ Export To FreeTube](#export-to-freetube) - [line 11899](../youtube-playback-plox.user.js#L11899)
42. [⬇ Import From FreeTube](#import-from-freetube) - [line 11943](../youtube-playback-plox.user.js#L11943)
43. [🔄 Insert Completion Event](#insert-completion-event) - [line 12009](../youtube-playback-plox.user.js#L12009)
44. [💾 Save Video Generic](#save-video-generic) - [line 12056](../youtube-playback-plox.user.js#L12056)
45. [📺 Helpers](#helpers) - [line 12322](../youtube-playback-plox.user.js#L12322)
46. [📺 Gets saved video data](#gets-saved-video-data) - [line 12325](../youtube-playback-plox.user.js#L12325)
47. [📺 Get Player Video ID](#get-player-video-id) - [line 12382](../youtube-playback-plox.user.js#L12382)
48. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 12472](../youtube-playback-plox.user.js#L12472)
49. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 12677](../youtube-playback-plox.user.js#L12677)
50. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 12894](../youtube-playback-plox.user.js#L12894)
51. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 12916](../youtube-playback-plox.user.js#L12916)
52. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 12944](../youtube-playback-plox.user.js#L12944)
53. [📺 get Playlist Name](#get-playlist-name) - [line 12989](../youtube-playback-plox.user.js#L12989)
54. [🕒 Time Display](#time-display) - [line 13289](../youtube-playback-plox.user.js#L13289)
55. [🖼️ Display Button Helpers](#display-button-helpers) - [line 13335](../youtube-playback-plox.user.js#L13335)
56. [🍞 Toasts](#toasts) - [line 14259](../youtube-playback-plox.user.js#L14259)
57. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 14576](../youtube-playback-plox.user.js#L14576)
58. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 14623](../youtube-playback-plox.user.js#L14623)
59. [⚙️ Settings UI](#settings-ui) - [line 14941](../youtube-playback-plox.user.js#L14941)
60. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 15452](../youtube-playback-plox.user.js#L15452)
61. [🎵 Video Selection](#video-selection) - [line 15510](../youtube-playback-plox.user.js#L15510)
62. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 16502](../youtube-playback-plox.user.js#L16502)
63. [📡 Video Observer Manager](#video-observer-manager) - [line 16806](../youtube-playback-plox.user.js#L16806)
64. [Processing Functions](#processing-functions) - [line 17685](../youtube-playback-plox.user.js#L17685)
65. [PlaybackController](#playbackcontroller) - [line 19158](../youtube-playback-plox.user.js#L19158)
66. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 19852](../youtube-playback-plox.user.js#L19852)
67. [📂 Sort UI](#sort-ui) - [line 20390](../youtube-playback-plox.user.js#L20390)
68. [📂 Filters UI](#filters-ui) - [line 20592](../youtube-playback-plox.user.js#L20592)
69. [📂 Video List UI](#video-list-ui) - [line 20880](../youtube-playback-plox.user.js#L20880)
70. [📁 Update Video List](#update-video-list) - [line 21058](../youtube-playback-plox.user.js#L21058)
71. [🔘 Floating Button](#floating-button) - [line 21966](../youtube-playback-plox.user.js#L21966)
72. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 21995](../youtube-playback-plox.user.js#L21995)
73. [📂 Video Entry](#video-entry) - [line 22256](../youtube-playback-plox.user.js#L22256)
74. [🗑️ Clear All Data](#clear-all-data) - [line 24277](../youtube-playback-plox.user.js#L24277)
75. [⚙️ Menu Commands](#menu-commands) - [line 24629](../youtube-playback-plox.user.js#L24629)
76. [🔄 Data Migration](#data-migration) - [line 24687](../youtube-playback-plox.user.js#L24687)
77. [🚀 Init](#init) - [line 25190](../youtube-playback-plox.user.js#L25190)

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

## [🎨 Theme](../youtube-playback-plox.user.js#L5727)
> [Line 5727](../youtube-playback-plox.user.js#L5727)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isYouTubeDarkTheme`](../youtube-playback-plox.user.js#L5734) | [5734](../youtube-playback-plox.user.js#L5734) |
| `fn` | [`applyTheme`](../youtube-playback-plox.user.js#L5752) | [5752](../youtube-playback-plox.user.js#L5752) |
| `fn` | [`observeThemeChanges`](../youtube-playback-plox.user.js#L5765) | [5765](../youtube-playback-plox.user.js#L5765) |
| `fn` | [`cleanupThemeObserver`](../youtube-playback-plox.user.js#L5788) | [5788](../youtube-playback-plox.user.js#L5788) |
| `fn` | [`cleanupGlobalListeners`](../youtube-playback-plox.user.js#L5799) | [5799](../youtube-playback-plox.user.js#L5799) |

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L5805)
> [Line 5805](../youtube-playback-plox.user.js#L5805)

_No relevant functions or constants detected._

## [🎨 Progress Bar Style](../youtube-playback-plox.user.js#L5967)
> [Line 5967](../youtube-playback-plox.user.js#L5967)

| Type | Name | Line |
|---|---|---|
| `fn` | [`clearAllProgressGradientState`](../youtube-playback-plox.user.js#L5979) | [5979](../youtube-playback-plox.user.js#L5979) |
| `fn` | [`syncProgressGradientStateForContainer`](../youtube-playback-plox.user.js#L5995) | [5995](../youtube-playback-plox.user.js#L5995) |
| `fn` | [`resolvePlayerRootForGradient`](../youtube-playback-plox.user.js#L6018) | [6018](../youtube-playback-plox.user.js#L6018) |
| `fn` | [`clearProgressColorFromPlayerRoot`](../youtube-playback-plox.user.js#L6029) | [6029](../youtube-playback-plox.user.js#L6029) |
| `fn` | [`applyProgressColorToPlayerRoot`](../youtube-playback-plox.user.js#L6049) | [6049](../youtube-playback-plox.user.js#L6049) |
| `fn` | [`applyProgressColorToShortsSurfaces`](../youtube-playback-plox.user.js#L6073) | [6073](../youtube-playback-plox.user.js#L6073) |
| `fn` | [`repaintWatchProgressBarFromActivePlayer`](../youtube-playback-plox.user.js#L6093) | [6093](../youtube-playback-plox.user.js#L6093) |
| `fn` | [`scheduleProgressBarGradientRepaint`](../youtube-playback-plox.user.js#L6115) | [6115](../youtube-playback-plox.user.js#L6115) |
| `fn` | [`isCurrentSession`](../youtube-playback-plox.user.js#L6117) | [6117](../youtube-playback-plox.user.js#L6117) |
| `fn` | [`paint`](../youtube-playback-plox.user.js#L6124) | [6124](../youtube-playback-plox.user.js#L6124) |
| `fn` | [`isLivePlaybackForGradient`](../youtube-playback-plox.user.js#L6157) | [6157](../youtube-playback-plox.user.js#L6157) |
| `fn` | [`updateProgressBarGradient`](../youtube-playback-plox.user.js#L6194) | [6194](../youtube-playback-plox.user.js#L6194) |
| `fn` | [`refreshProgressBarGradientForSession`](../youtube-playback-plox.user.js#L6279) | [6279](../youtube-playback-plox.user.js#L6279) |
| `fn` | [`resetProgressBarGradient`](../youtube-playback-plox.user.js#L6302) | [6302](../youtube-playback-plox.user.js#L6302) |
| `fn` | [`injectProgressBarCSS`](../youtube-playback-plox.user.js#L6334) | [6334](../youtube-playback-plox.user.js#L6334) |
| `fn` | [`getProgressColor`](../youtube-playback-plox.user.js#L6464) | [6464](../youtube-playback-plox.user.js#L6464) |
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L6492) | [6492](../youtube-playback-plox.user.js#L6492) |
| `fn` | [`getProgressColorForText`](../youtube-playback-plox.user.js#L6501) | [6501](../youtube-playback-plox.user.js#L6501) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L6515)
> [Line 6515](../youtube-playback-plox.user.js#L6515)

| Type | Name | Line |
|---|---|---|
| `fn` | [`boundedSetAdd`](../youtube-playback-plox.user.js#L6556) | [6556](../youtube-playback-plox.user.js#L6556) |
| `fn` | [`markLocalDeletion`](../youtube-playback-plox.user.js#L6569) | [6569](../youtube-playback-plox.user.js#L6569) |
| `fn` | [`rememberGMFallbackKey`](../youtube-playback-plox.user.js#L6580) | [6580](../youtube-playback-plox.user.js#L6580) |
| `fn` | [`rememberGMTombstone`](../youtube-playback-plox.user.js#L6591) | [6591](../youtube-playback-plox.user.js#L6591) |
| `fn` | [`bumpStorageKeyRevision`](../youtube-playback-plox.user.js#L6606) | [6606](../youtube-playback-plox.user.js#L6606) |
| `fn` | [`getStorageRevisionSnapshot`](../youtube-playback-plox.user.js#L6619) | [6619](../youtube-playback-plox.user.js#L6619) |
| `fn` | [`storageRevisionChanged`](../youtube-playback-plox.user.js#L6632) | [6632](../youtube-playback-plox.user.js#L6632) |
| `fn` | [`storageRevisionRetryNeeded`](../youtube-playback-plox.user.js#L6647) | [6647](../youtube-playback-plox.user.js#L6647) |
| `fn` | [`invalidateSessionSavedData`](../youtube-playback-plox.user.js#L6727) | [6727](../youtube-playback-plox.user.js#L6727) |
| `fn` | [`broadcastStorageChange`](../youtube-playback-plox.user.js#L6747) | [6747](../youtube-playback-plox.user.js#L6747) |
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L6770) | [6770](../youtube-playback-plox.user.js#L6770) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L6770) | [6770](../youtube-playback-plox.user.js#L6770) |
| `fn` | [`enqueueDurableOperation`](../youtube-playback-plox.user.js#L6800) | [6800](../youtube-playback-plox.user.js#L6800) |
| `fn` | [`hasDurableGMStorage`](../youtube-playback-plox.user.js#L6813) | [6813](../youtube-playback-plox.user.js#L6813) |
| `fn` | [`hasAnyGMStorageApi`](../youtube-playback-plox.user.js#L6823) | [6823](../youtube-playback-plox.user.js#L6823) |
| `fn` | [`waitForDurableMutations`](../youtube-playback-plox.user.js#L6836) | [6836](../youtube-playback-plox.user.js#L6836) |
| `fn` | [`canUseIDB`](../youtube-playback-plox.user.js#L6841) | [6841](../youtube-playback-plox.user.js#L6841) |
| `fn` | [`isStorageRecordError`](../youtube-playback-plox.user.js#L6848) | [6848](../youtube-playback-plox.user.js#L6848) |
| `fn` | [`isStorageProviderError`](../youtube-playback-plox.user.js#L6858) | [6858](../youtube-playback-plox.user.js#L6858) |
| `fn` | [`scheduleQuarantineNotice`](../youtube-playback-plox.user.js#L6868) | [6868](../youtube-playback-plox.user.js#L6868) |
| `fn` | [`registerQuarantinedRecord`](../youtube-playback-plox.user.js#L6906) | [6906](../youtube-playback-plox.user.js#L6906) |
| `fn` | [`quarantineRecordError`](../youtube-playback-plox.user.js#L6928) | [6928](../youtube-playback-plox.user.js#L6928) |
| `fn` | [`getQuarantinedRecords`](../youtube-playback-plox.user.js#L6937) | [6937](../youtube-playback-plox.user.js#L6937) |
| `fn` | [`persistRepairedRows`](../youtube-playback-plox.user.js#L6948) | [6948](../youtube-playback-plox.user.js#L6948) |
| `fn` | [`buildStorageDamageReport`](../youtube-playback-plox.user.js#L6976) | [6976](../youtube-playback-plox.user.js#L6976) |
| `fn` | [`markIDBUnavailable`](../youtube-playback-plox.user.js#L7002) | [7002](../youtube-playback-plox.user.js#L7002) |
| `fn` | [`markIDBAvailable`](../youtube-playback-plox.user.js#L7007) | [7007](../youtube-playback-plox.user.js#L7007) |
| `fn` | [`pickNewerDurableRecord`](../youtube-playback-plox.user.js#L7018) | [7018](../youtube-playback-plox.user.js#L7018) |
| `fn` | [`getGMFallback`](../youtube-playback-plox.user.js#L7032) | [7032](../youtube-playback-plox.user.js#L7032) |
| `fn` | [`parseStoredRecord`](../youtube-playback-plox.user.js#L7061) | [7061](../youtube-playback-plox.user.js#L7061) |
| `fn` | [`setGMFallback`](../youtube-playback-plox.user.js#L7088) | [7088](../youtube-playback-plox.user.js#L7088) |
| `fn` | [`setGMFallbackNewestWins`](../youtube-playback-plox.user.js#L7102) | [7102](../youtube-playback-plox.user.js#L7102) |
| `fn` | [`deleteGMFallback`](../youtube-playback-plox.user.js#L7125) | [7125](../youtube-playback-plox.user.js#L7125) |
| `fn` | [`reconcileGMFallbackAfterIDB`](../youtube-playback-plox.user.js#L7162) | [7162](../youtube-playback-plox.user.js#L7162) |
| `fn` | [`reconcileGMFallbacksAfterIDB`](../youtube-playback-plox.user.js#L7253) | [7253](../youtube-playback-plox.user.js#L7253) |
| `fn` | [`initialize`](../youtube-playback-plox.user.js#L7337) | [7337](../youtube-playback-plox.user.js#L7337) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L7402) | [7402](../youtube-playback-plox.user.js#L7402) |
| `fn` | [`set`](../youtube-playback-plox.user.js#L7607) | [7607](../youtube-playback-plox.user.js#L7607) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7611) | [7611](../youtube-playback-plox.user.js#L7611) |
| `fn` | [`setMany`](../youtube-playback-plox.user.js#L7704) | [7704](../youtube-playback-plox.user.js#L7704) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7715) | [7715](../youtube-playback-plox.user.js#L7715) |
| `fn` | [`deleteGMFallbackIfUnchanged`](../youtube-playback-plox.user.js#L7878) | [7878](../youtube-playback-plox.user.js#L7878) |
| `fn` | [`del`](../youtube-playback-plox.user.js#L7901) | [7901](../youtube-playback-plox.user.js#L7901) |
| `fn` | [`assertCommitAllowed`](../youtube-playback-plox.user.js#L7904) | [7904](../youtube-playback-plox.user.js#L7904) |
| `fn` | [`repairQuarantinedRecords`](../youtube-playback-plox.user.js#L8046) | [8046](../youtube-playback-plox.user.js#L8046) |
| `fn` | [`purgeQuarantinedRecords`](../youtube-playback-plox.user.js#L8099) | [8099](../youtube-playback-plox.user.js#L8099) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L8169) | [8169](../youtube-playback-plox.user.js#L8169) |
| `fn` | [`rawKeys`](../youtube-playback-plox.user.js#L8233) | [8233](../youtube-playback-plox.user.js#L8233) |
| `fn` | [`getCompleteVideoSnapshot`](../youtube-playback-plox.user.js#L8299) | [8299](../youtube-playback-plox.user.js#L8299) |
| `fn` | [`getBackendInfo`](../youtube-playback-plox.user.js#L8476) | [8476](../youtube-playback-plox.user.js#L8476) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L8505) | [8505](../youtube-playback-plox.user.js#L8505) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L8505) | [8505](../youtube-playback-plox.user.js#L8505) |
| `fn` | [`openDatabase`](../youtube-playback-plox.user.js#L8513) | [8513](../youtube-playback-plox.user.js#L8513) |
| `fn` | [`failOpen`](../youtube-playback-plox.user.js#L8519) | [8519](../youtube-playback-plox.user.js#L8519) |
| `fn` | [`runInStore`](../youtube-playback-plox.user.js#L8580) | [8580](../youtube-playback-plox.user.js#L8580) |
| `fn` | [`enqueue`](../youtube-playback-plox.user.js#L8605) | [8605](../youtube-playback-plox.user.js#L8605) |
| `fn` | [`describeStoredValueType`](../youtube-playback-plox.user.js#L8621) | [8621](../youtube-playback-plox.user.js#L8621) |
| `fn` | [`isEmptyStoredValue`](../youtube-playback-plox.user.js#L8635) | [8635](../youtube-playback-plox.user.js#L8635) |
| `fn` | [`sanitizeToJsonSafe`](../youtube-playback-plox.user.js#L8656) | [8656](../youtube-playback-plox.user.js#L8656) |
| `fn` | [`attemptStoredValueRepair`](../youtube-playback-plox.user.js#L8703) | [8703](../youtube-playback-plox.user.js#L8703) |
| `fn` | [`sanitizeEntries`](../youtube-playback-plox.user.js#L8772) | [8772](../youtube-playback-plox.user.js#L8772) |
| `fn` | [`pushEntry`](../youtube-playback-plox.user.js#L8785) | [8785](../youtube-playback-plox.user.js#L8785) |
| `fn` | [`getAllEntries`](../youtube-playback-plox.user.js#L8890) | [8890](../youtube-playback-plox.user.js#L8890) |
| `fn` | [`repairEntries`](../youtube-playback-plox.user.js#L8902) | [8902](../youtube-playback-plox.user.js#L8902) |
| `fn` | [`putEntry`](../youtube-playback-plox.user.js#L8936) | [8936](../youtube-playback-plox.user.js#L8936) |
| `fn` | [`deleteEntry`](../youtube-playback-plox.user.js#L8940) | [8940](../youtube-playback-plox.user.js#L8940) |
| `fn` | [`bulkDelete`](../youtube-playback-plox.user.js#L8949) | [8949](../youtube-playback-plox.user.js#L8949) |
| `fn` | [`bulkPut`](../youtube-playback-plox.user.js#L8968) | [8968](../youtube-playback-plox.user.js#L8968) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L8995) | [8995](../youtube-playback-plox.user.js#L8995) |
| `fn` | [`diagnose`](../youtube-playback-plox.user.js#L9018) | [9018](../youtube-playback-plox.user.js#L9018) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L9074) | [9074](../youtube-playback-plox.user.js#L9074) |
| `fn` | [`prefixKey`](../youtube-playback-plox.user.js#L9083) | [9083](../youtube-playback-plox.user.js#L9083) |
| `fn` | [`stripPrefix`](../youtube-playback-plox.user.js#L9084) | [9084](../youtube-playback-plox.user.js#L9084) |
| `fn` | [`hasPrefix`](../youtube-playback-plox.user.js#L9085) | [9085](../youtube-playback-plox.user.js#L9085) |
| `fn` | [`parseStoredObject`](../youtube-playback-plox.user.js#L9339) | [9339](../youtube-playback-plox.user.js#L9339) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L9349) | [9349](../youtube-playback-plox.user.js#L9349) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L9359) | [9359](../youtube-playback-plox.user.js#L9359) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L9377) | [9377](../youtube-playback-plox.user.js#L9377) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L9393) | [9393](../youtube-playback-plox.user.js#L9393) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L9456) | [9456](../youtube-playback-plox.user.js#L9456) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L9474) | [9474](../youtube-playback-plox.user.js#L9474) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L9482) | [9482](../youtube-playback-plox.user.js#L9482) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L9499) | [9499](../youtube-playback-plox.user.js#L9499) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L9515)
> [Line 9515](../youtube-playback-plox.user.js#L9515)

_No relevant functions or constants detected._

## [📢 Ad Detector](../youtube-playback-plox.user.js#L9541)
> [Line 9541](../youtube-playback-plox.user.js#L9541)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L9543) | [9543](../youtube-playback-plox.user.js#L9543) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L9594) | [9594](../youtube-playback-plox.user.js#L9594) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L9734)
> [Line 9734](../youtube-playback-plox.user.js#L9734)

| Type | Name | Line |
|---|---|---|
| `class` | [`VirtualScroller`](../youtube-playback-plox.user.js#L9751) | [9751](../youtube-playback-plox.user.js#L9751) |

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L10240)
> [Line 10240](../youtube-playback-plox.user.js#L10240)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L10249) | [10249](../youtube-playback-plox.user.js#L10249) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L10280) | [10280](../youtube-playback-plox.user.js#L10280) |
| `fn` | [`exportStorageDamageReport`](../youtube-playback-plox.user.js#L10333) | [10333](../youtube-playback-plox.user.js#L10333) |
| `fn` | [`runStorageRepairFlow`](../youtube-playback-plox.user.js#L10372) | [10372](../youtube-playback-plox.user.js#L10372) |
| `fn` | [`renderStorageDamageNotice`](../youtube-playback-plox.user.js#L10439) | [10439](../youtube-playback-plox.user.js#L10439) |
| `fn` | [`copyExportDataToClipboard`](../youtube-playback-plox.user.js#L10500) | [10500](../youtube-playback-plox.user.js#L10500) |
| `fn` | [`mergeImportedVideoData`](../youtube-playback-plox.user.js#L10555) | [10555](../youtube-playback-plox.user.js#L10555) |
| `fn` | [`detectImportFormat`](../youtube-playback-plox.user.js#L10616) | [10616](../youtube-playback-plox.user.js#L10616) |
| `fn` | [`hasImportableRecords`](../youtube-playback-plox.user.js#L10630) | [10630](../youtube-playback-plox.user.js#L10630) |
| `fn` | [`looksLikeFreeTubeExport`](../youtube-playback-plox.user.js#L10647) | [10647](../youtube-playback-plox.user.js#L10647) |
| `fn` | [`parseImportPayload`](../youtube-playback-plox.user.js#L10660) | [10660](../youtube-playback-plox.user.js#L10660) |
| `fn` | [`createImportCommitGuard`](../youtube-playback-plox.user.js#L10699) | [10699](../youtube-playback-plox.user.js#L10699) |
| `fn` | [`commitImportedEntries`](../youtube-playback-plox.user.js#L10717) | [10717](../youtube-playback-plox.user.js#L10717) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L10764) | [10764](../youtube-playback-plox.user.js#L10764) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L10858)
> [Line 10858](../youtube-playback-plox.user.js#L10858)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getGitHubErrorMsg`](../youtube-playback-plox.user.js#L10861) | [10861](../youtube-playback-plox.user.js#L10861) |
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L10873) | [10873](../youtube-playback-plox.user.js#L10873) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L10903) | [10903](../youtube-playback-plox.user.js#L10903) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L10904) | [10904](../youtube-playback-plox.user.js#L10904) |
| `fn` | [`sendGistRequest`](../youtube-playback-plox.user.js#L10926) | [10926](../youtube-playback-plox.user.js#L10926) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L11022) | [11022](../youtube-playback-plox.user.js#L11022) |
| `fn` | [`finish`](../youtube-playback-plox.user.js#L11032) | [11032](../youtube-playback-plox.user.js#L11032) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L11046) | [11046](../youtube-playback-plox.user.js#L11046) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L11232) | [11232](../youtube-playback-plox.user.js#L11232) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L11253) | [11253](../youtube-playback-plox.user.js#L11253) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L11332) | [11332](../youtube-playback-plox.user.js#L11332) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L11368) | [11368](../youtube-playback-plox.user.js#L11368) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L11401)
> [Line 11401](../youtube-playback-plox.user.js#L11401)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L11402) | [11402](../youtube-playback-plox.user.js#L11402) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L11441) | [11441](../youtube-playback-plox.user.js#L11441) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L11583)
> [Line 11583](../youtube-playback-plox.user.js#L11583)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeCompletionHistory`](../youtube-playback-plox.user.js#L11591) | [11591](../youtube-playback-plox.user.js#L11591) |
| `fn` | [`normalizeVideoData`](../youtube-playback-plox.user.js#L11619) | [11619](../youtube-playback-plox.user.js#L11619) |
| `fn` | [`safeText`](../youtube-playback-plox.user.js#L11622) | [11622](../youtube-playback-plox.user.js#L11622) |
| `fn` | [`safeNumber`](../youtube-playback-plox.user.js#L11627) | [11627](../youtube-playback-plox.user.js#L11627) |
| `fn` | [`safeNullableText`](../youtube-playback-plox.user.js#L11631) | [11631](../youtube-playback-plox.user.js#L11631) |

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L11685)
> [Line 11685](../youtube-playback-plox.user.js#L11685)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toFreeTubeFormat`](../youtube-playback-plox.user.js#L11691) | [11691](../youtube-playback-plox.user.js#L11691) |

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L11776)
> [Line 11776](../youtube-playback-plox.user.js#L11776)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseFreeTubeDB`](../youtube-playback-plox.user.js#L11782) | [11782](../youtube-playback-plox.user.js#L11782) |

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L11869)
> [Line 11869](../youtube-playback-plox.user.js#L11869)

| Type | Name | Line |
|---|---|---|
| `fn` | [`fromFreeTubeFormat`](../youtube-playback-plox.user.js#L11875) | [11875](../youtube-playback-plox.user.js#L11875) |
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L11884) | [11884](../youtube-playback-plox.user.js#L11884) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L11899)
> [Line 11899](../youtube-playback-plox.user.js#L11899)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTubeFormat`](../youtube-playback-plox.user.js#L11904) | [11904](../youtube-playback-plox.user.js#L11904) |

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L11943)
> [Line 11943](../youtube-playback-plox.user.js#L11943)

| Type | Name | Line |
|---|---|---|
| `fn` | [`importFromFreeTubeFormat`](../youtube-playback-plox.user.js#L11949) | [11949](../youtube-playback-plox.user.js#L11949) |

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L12009)
> [Line 12009](../youtube-playback-plox.user.js#L12009)

| Type | Name | Line |
|---|---|---|
| `fn` | [`insertCompletionEvent`](../youtube-playback-plox.user.js#L12017) | [12017](../youtube-playback-plox.user.js#L12017) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L12045) | [12045](../youtube-playback-plox.user.js#L12045) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L12056)
> [Line 12056](../youtube-playback-plox.user.js#L12056)

| Type | Name | Line |
|---|---|---|
| `fn` | [`resetCompletionOnLoop`](../youtube-playback-plox.user.js#L12066) | [12066](../youtube-playback-plox.user.js#L12066) |
| `fn` | [`internalSaveVideoGeneric`](../youtube-playback-plox.user.js#L12084) | [12084](../youtube-playback-plox.user.js#L12084) |
| `fn` | [`isExpectedSessionCurrent`](../youtube-playback-plox.user.js#L12094) | [12094](../youtube-playback-plox.user.js#L12094) |
| `fn` | [`isDestructiveEpochCurrent`](../youtube-playback-plox.user.js#L12100) | [12100](../youtube-playback-plox.user.js#L12100) |
| `fn` | [`commitGuard`](../youtube-playback-plox.user.js#L12103) | [12103](../youtube-playback-plox.user.js#L12103) |
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L12191) | [12191](../youtube-playback-plox.user.js#L12191) |

## [📺 Helpers](../youtube-playback-plox.user.js#L12322)
> [Line 12322](../youtube-playback-plox.user.js#L12322)

_No relevant functions or constants detected._

## [📺 Gets saved video data](../youtube-playback-plox.user.js#L12325)
> [Line 12325](../youtube-playback-plox.user.js#L12325)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSavedVideoData`](../youtube-playback-plox.user.js#L12334) | [12334](../youtube-playback-plox.user.js#L12334) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L12382)
> [Line 12382](../youtube-playback-plox.user.js#L12382)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L12418) | [12418](../youtube-playback-plox.user.js#L12418) |
| `fn` | [`invalidatePlayerVideoIdCache`](../youtube-playback-plox.user.js#L12468) | [12468](../youtube-playback-plox.user.js#L12468) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L12472)
> [Line 12472](../youtube-playback-plox.user.js#L12472)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTypeFromPageManager`](../youtube-playback-plox.user.js#L12495) | [12495](../youtube-playback-plox.user.js#L12495) |
| `fn` | [`getTypeFromYtApp`](../youtube-playback-plox.user.js#L12535) | [12535](../youtube-playback-plox.user.js#L12535) |
| `fn` | [`detectFromURL`](../youtube-playback-plox.user.js#L12561) | [12561](../youtube-playback-plox.user.js#L12561) |
| `fn` | [`cachePageType`](../youtube-playback-plox.user.js#L12633) | [12633](../youtube-playback-plox.user.js#L12633) |
| `fn` | [`getYouTubePageType`](../youtube-playback-plox.user.js#L12652) | [12652](../youtube-playback-plox.user.js#L12652) |

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L12677)
> [Line 12677](../youtube-playback-plox.user.js#L12677)

| Type | Name | Line |
|---|---|---|
| `fn` | [`_parseYouTubeResourceImpl`](../youtube-playback-plox.user.js#L12737) | [12737](../youtube-playback-plox.user.js#L12737) |
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L12773) | [12773](../youtube-playback-plox.user.js#L12773) |
| `fn` | [`parseYouTubeResource`](../youtube-playback-plox.user.js#L12884) | [12884](../youtube-playback-plox.user.js#L12884) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L12894)
> [Line 12894](../youtube-playback-plox.user.js#L12894)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubeVideoIdFromUrl`](../youtube-playback-plox.user.js#L12904) | [12904](../youtube-playback-plox.user.js#L12904) |

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L12916)
> [Line 12916](../youtube-playback-plox.user.js#L12916)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getYouTubeVideoContextFromUrl`](../youtube-playback-plox.user.js#L12928) | [12928](../youtube-playback-plox.user.js#L12928) |

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L12944)
> [Line 12944](../youtube-playback-plox.user.js#L12944)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubePlaylistIdFromUrl`](../youtube-playback-plox.user.js#L12952) | [12952](../youtube-playback-plox.user.js#L12952) |
| `fn` | [`classifyPlaylist`](../youtube-playback-plox.user.js#L12976) | [12976](../youtube-playback-plox.user.js#L12976) |

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L12989)
> [Line 12989](../youtube-playback-plox.user.js#L12989)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L13010) | [13010](../youtube-playback-plox.user.js#L13010) |
| `fn` | [`extractYtInitialData`](../youtube-playback-plox.user.js#L13047) | [13047](../youtube-playback-plox.user.js#L13047) |
| `fn` | [`getPlaylistName`](../youtube-playback-plox.user.js#L13153) | [13153](../youtube-playback-plox.user.js#L13153) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L13169) | [13169](../youtube-playback-plox.user.js#L13169) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L13262) | [13262](../youtube-playback-plox.user.js#L13262) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L13289)
> [Line 13289](../youtube-playback-plox.user.js#L13289)

| Type | Name | Line |
|---|---|---|
| `fn` | [`cancelPendingDisplayClear`](../youtube-playback-plox.user.js#L13313) | [13313](../youtube-playback-plox.user.js#L13313) |
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L13326) | [13326](../youtube-playback-plox.user.js#L13326) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L13335)
> [Line 13335](../youtube-playback-plox.user.js#L13335)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTimeDisplayMessage`](../youtube-playback-plox.user.js#L13343) | [13343](../youtube-playback-plox.user.js#L13343) |
| `fn` | [`hasTimeDisplayMessage`](../youtube-playback-plox.user.js#L13352) | [13352](../youtube-playback-plox.user.js#L13352) |
| `fn` | [`showDisplayMessage`](../youtube-playback-plox.user.js#L13362) | [13362](../youtube-playback-plox.user.js#L13362) |
| `fn` | [`restoreDisplayButtons`](../youtube-playback-plox.user.js#L13380) | [13380](../youtube-playback-plox.user.js#L13380) |
| `fn` | [`createSplitButtonGroup`](../youtube-playback-plox.user.js#L13411) | [13411](../youtube-playback-plox.user.js#L13411) |
| `fn` | [`getDisplayContextVideo`](../youtube-playback-plox.user.js#L13436) | [13436](../youtube-playback-plox.user.js#L13436) |
| `fn` | [`getDisplayContextPlayer`](../youtube-playback-plox.user.js#L13451) | [13451](../youtube-playback-plox.user.js#L13451) |
| `fn` | [`getPlaybackNotificationKind`](../youtube-playback-plox.user.js#L13466) | [13466](../youtube-playback-plox.user.js#L13466) |
| `fn` | [`buildPlaybackNotificationMessage`](../youtube-playback-plox.user.js#L13483) | [13483](../youtube-playback-plox.user.js#L13483) |
| `fn` | [`setupManualSaveButton`](../youtube-playback-plox.user.js#L13521) | [13521](../youtube-playback-plox.user.js#L13521) |
| `fn` | [`getActiveShortsControlsContainer`](../youtube-playback-plox.user.js#L13581) | [13581](../youtube-playback-plox.user.js#L13581) |
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L13626) | [13626](../youtube-playback-plox.user.js#L13626) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L13626) | [13626](../youtube-playback-plox.user.js#L13626) |
| `fn` | [`getDisplayDisposables`](../youtube-playback-plox.user.js#L13648) | [13648](../youtube-playback-plox.user.js#L13648) |
| `fn` | [`disposeDisplayNode`](../youtube-playback-plox.user.js#L13661) | [13661](../youtube-playback-plox.user.js#L13661) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L13668) | [13668](../youtube-playback-plox.user.js#L13668) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L13678) | [13678](../youtube-playback-plox.user.js#L13678) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L13686) | [13686](../youtube-playback-plox.user.js#L13686) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L13694) | [13694](../youtube-playback-plox.user.js#L13694) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L13717) | [13717](../youtube-playback-plox.user.js#L13717) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L13729) | [13729](../youtube-playback-plox.user.js#L13729) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L13732) | [13732](../youtube-playback-plox.user.js#L13732) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L13742) | [13742](../youtube-playback-plox.user.js#L13742) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L13747) | [13747](../youtube-playback-plox.user.js#L13747) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L13770) | [13770](../youtube-playback-plox.user.js#L13770) |
| `fn` | [`scheduleShortsFrame`](../youtube-playback-plox.user.js#L13790) | [13790](../youtube-playback-plox.user.js#L13790) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L13799) | [13799](../youtube-playback-plox.user.js#L13799) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L13808) | [13808](../youtube-playback-plox.user.js#L13808) |
| `fn` | [`isMobileWatchDisplayFallback`](../youtube-playback-plox.user.js#L13856) | [13856](../youtube-playback-plox.user.js#L13856) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L13870) | [13870](../youtube-playback-plox.user.js#L13870) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L13978) | [13978](../youtube-playback-plox.user.js#L13978) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L14034) | [14034](../youtube-playback-plox.user.js#L14034) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L14105) | [14105](../youtube-playback-plox.user.js#L14105) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L14127) | [14127](../youtube-playback-plox.user.js#L14127) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L14141) | [14141](../youtube-playback-plox.user.js#L14141) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L14145) | [14145](../youtube-playback-plox.user.js#L14145) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L14152) | [14152](../youtube-playback-plox.user.js#L14152) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L14170) | [14170](../youtube-playback-plox.user.js#L14170) |
| `fn` | [`startShortsPanelObserver`](../youtube-playback-plox.user.js#L14184) | [14184](../youtube-playback-plox.user.js#L14184) |
| `fn` | [`stopShortsPanelObserver`](../youtube-playback-plox.user.js#L14232) | [14232](../youtube-playback-plox.user.js#L14232) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L14259)
> [Line 14259](../youtube-playback-plox.user.js#L14259)

| Type | Name | Line |
|---|---|---|
| `fn` | [`disposeToastRuntime`](../youtube-playback-plox.user.js#L14271) | [14271](../youtube-playback-plox.user.js#L14271) |
| `fn` | [`registerToastRuntime`](../youtube-playback-plox.user.js#L14299) | [14299](../youtube-playback-plox.user.js#L14299) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L14300) | [14300](../youtube-playback-plox.user.js#L14300) |
| `fn` | [`createToastContainer`](../youtube-playback-plox.user.js#L14316) | [14316](../youtube-playback-plox.user.js#L14316) |
| `fn` | [`fadeAndRemoveToast`](../youtube-playback-plox.user.js#L14349) | [14349](../youtube-playback-plox.user.js#L14349) |
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L14370) | [14370](../youtube-playback-plox.user.js#L14370) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L14394) | [14394](../youtube-playback-plox.user.js#L14394) |
| `fn` | [`showFloatingToast`](../youtube-playback-plox.user.js#L14418) | [14418](../youtube-playback-plox.user.js#L14418) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L14576)
> [Line 14576](../youtube-playback-plox.user.js#L14576)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L14579) | [14579](../youtube-playback-plox.user.js#L14579) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L14623)
> [Line 14623](../youtube-playback-plox.user.js#L14623)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L14663) | [14663](../youtube-playback-plox.user.js#L14663) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L14669) | [14669](../youtube-playback-plox.user.js#L14669) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L14677) | [14677](../youtube-playback-plox.user.js#L14677) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L14723) | [14723](../youtube-playback-plox.user.js#L14723) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L14727) | [14727](../youtube-playback-plox.user.js#L14727) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L14730) | [14730](../youtube-playback-plox.user.js#L14730) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L14746) | [14746](../youtube-playback-plox.user.js#L14746) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L14755) | [14755](../youtube-playback-plox.user.js#L14755) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L14785) | [14785](../youtube-playback-plox.user.js#L14785) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L14799) | [14799](../youtube-playback-plox.user.js#L14799) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L14803) | [14803](../youtube-playback-plox.user.js#L14803) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L14941)
> [Line 14941](../youtube-playback-plox.user.js#L14941)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSettingsUI`](../youtube-playback-plox.user.js#L14944) | [14944](../youtube-playback-plox.user.js#L14944) |
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L14975) | [14975](../youtube-playback-plox.user.js#L14975) |
| `fn` | [`onSettingsKeyDown`](../youtube-playback-plox.user.js#L14997) | [14997](../youtube-playback-plox.user.js#L14997) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L15080) | [15080](../youtube-playback-plox.user.js#L15080) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L15167) | [15167](../youtube-playback-plox.user.js#L15167) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L15168) | [15168](../youtube-playback-plox.user.js#L15168) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L15257) | [15257](../youtube-playback-plox.user.js#L15257) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L15258) | [15258](../youtube-playback-plox.user.js#L15258) |
| `fn` | [`getInnerTubeClientVersion`](../youtube-playback-plox.user.js#L15290) | [15290](../youtube-playback-plox.user.js#L15290) |
| `fn` | [`idbDiag`](../youtube-playback-plox.user.js#L15319) | [15319](../youtube-playback-plox.user.js#L15319) |
| `fn` | [`safeModeActive`](../youtube-playback-plox.user.js#L15337) | [15337](../youtube-playback-plox.user.js#L15337) |
| `fn` | [`activeSessions`](../youtube-playback-plox.user.js#L15338) | [15338](../youtube-playback-plox.user.js#L15338) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L15452)
> [Line 15452](../youtube-playback-plox.user.js#L15452)

| Type | Name | Line |
|---|---|---|
| `fn` | [`notifySeekOrProgress`](../youtube-playback-plox.user.js#L15454) | [15454](../youtube-playback-plox.user.js#L15454) |

## [🎵 Video Selection](../youtube-playback-plox.user.js#L15510)
> [Line 15510](../youtube-playback-plox.user.js#L15510)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleManagementMode`](../youtube-playback-plox.user.js#L15525) | [15525](../youtube-playback-plox.user.js#L15525) |
| `fn` | [`buildSkipParts`](../youtube-playback-plox.user.js#L15544) | [15544](../youtube-playback-plox.user.js#L15544) |
| `fn` | [`updateFooterButtons`](../youtube-playback-plox.user.js#L15558) | [15558](../youtube-playback-plox.user.js#L15558) |
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L15635) | [15635](../youtube-playback-plox.user.js#L15635) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L15642) | [15642](../youtube-playback-plox.user.js#L15642) |
| `fn` | [`createFooterActionMenu`](../youtube-playback-plox.user.js#L15684) | [15684](../youtube-playback-plox.user.js#L15684) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L15714) | [15714](../youtube-playback-plox.user.js#L15714) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L15718) | [15718](../youtube-playback-plox.user.js#L15718) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L15727) | [15727](../youtube-playback-plox.user.js#L15727) |
| `fn` | [`closeImportMenu`](../youtube-playback-plox.user.js#L15823) | [15823](../youtube-playback-plox.user.js#L15823) |
| `fn` | [`onImportOutsideClick`](../youtube-playback-plox.user.js#L15832) | [15832](../youtube-playback-plox.user.js#L15832) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L16234) | [16234](../youtube-playback-plox.user.js#L16234) |
| `fn` | [`updateManagementFooterState`](../youtube-playback-plox.user.js#L16296) | [16296](../youtube-playback-plox.user.js#L16296) |
| `fn` | [`togglePlaylistCreationMode`](../youtube-playback-plox.user.js#L16326) | [16326](../youtube-playback-plox.user.js#L16326) |
| `fn` | [`copyToClipboard`](../youtube-playback-plox.user.js#L16345) | [16345](../youtube-playback-plox.user.js#L16345) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L16358) | [16358](../youtube-playback-plox.user.js#L16358) |
| `fn` | [`syncSelectionCheckboxes`](../youtube-playback-plox.user.js#L16439) | [16439](../youtube-playback-plox.user.js#L16439) |
| `fn` | [`createClearSelectionButton`](../youtube-playback-plox.user.js#L16452) | [16452](../youtube-playback-plox.user.js#L16452) |
| `fn` | [`toggleVideoSelection`](../youtube-playback-plox.user.js#L16470) | [16470](../youtube-playback-plox.user.js#L16470) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L16502)
> [Line 16502](../youtube-playback-plox.user.js#L16502)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L16508) | [16508](../youtube-playback-plox.user.js#L16508) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L16508) | [16508](../youtube-playback-plox.user.js#L16508) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L16509) | [16509](../youtube-playback-plox.user.js#L16509) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L16518) | [16518](../youtube-playback-plox.user.js#L16518) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L16531) | [16531](../youtube-playback-plox.user.js#L16531) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L16542) | [16542](../youtube-playback-plox.user.js#L16542) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L16559) | [16559](../youtube-playback-plox.user.js#L16559) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L16593) | [16593](../youtube-playback-plox.user.js#L16593) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L16618) | [16618](../youtube-playback-plox.user.js#L16618) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L16620) | [16620](../youtube-playback-plox.user.js#L16620) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L16639) | [16639](../youtube-playback-plox.user.js#L16639) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L16639) | [16639](../youtube-playback-plox.user.js#L16639) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L16641) | [16641](../youtube-playback-plox.user.js#L16641) |
| `fn` | [`logRoutingDecision`](../youtube-playback-plox.user.js#L16665) | [16665](../youtube-playback-plox.user.js#L16665) |
| `fn` | [`shouldDropVideoEvent`](../youtube-playback-plox.user.js#L16674) | [16674](../youtube-playback-plox.user.js#L16674) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L16683) | [16683](../youtube-playback-plox.user.js#L16683) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L16683) | [16683](../youtube-playback-plox.user.js#L16683) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L16694) | [16694](../youtube-playback-plox.user.js#L16694) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L16699) | [16699](../youtube-playback-plox.user.js#L16699) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L16704) | [16704](../youtube-playback-plox.user.js#L16704) |
| `fn` | [`note`](../youtube-playback-plox.user.js#L16724) | [16724](../youtube-playback-plox.user.js#L16724) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L16728) | [16728](../youtube-playback-plox.user.js#L16728) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L16746) | [16746](../youtube-playback-plox.user.js#L16746) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L16746) | [16746](../youtube-playback-plox.user.js#L16746) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L16748) | [16748](../youtube-playback-plox.user.js#L16748) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L16756) | [16756](../youtube-playback-plox.user.js#L16756) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L16806)
> [Line 16806](../youtube-playback-plox.user.js#L16806)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L16819) | [16819](../youtube-playback-plox.user.js#L16819) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L16819) | [16819](../youtube-playback-plox.user.js#L16819) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L16841) | [16841](../youtube-playback-plox.user.js#L16841) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L16861) | [16861](../youtube-playback-plox.user.js#L16861) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L16887) | [16887](../youtube-playback-plox.user.js#L16887) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L16934) | [16934](../youtube-playback-plox.user.js#L16934) |
| `fn` | [`clearWatchPlayerWait`](../youtube-playback-plox.user.js#L16964) | [16964](../youtube-playback-plox.user.js#L16964) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L16986) | [16986](../youtube-playback-plox.user.js#L16986) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L17006) | [17006](../youtube-playback-plox.user.js#L17006) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L17062) | [17062](../youtube-playback-plox.user.js#L17062) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L17130) | [17130](../youtube-playback-plox.user.js#L17130) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L17140) | [17140](../youtube-playback-plox.user.js#L17140) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L17151) | [17151](../youtube-playback-plox.user.js#L17151) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L17183) | [17183](../youtube-playback-plox.user.js#L17183) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L17231) | [17231](../youtube-playback-plox.user.js#L17231) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L17242) | [17242](../youtube-playback-plox.user.js#L17242) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L17266) | [17266](../youtube-playback-plox.user.js#L17266) |
| `fn` | [`clearPlayerCache`](../youtube-playback-plox.user.js#L17392) | [17392](../youtube-playback-plox.user.js#L17392) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L17614) | [17614](../youtube-playback-plox.user.js#L17614) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L17655) | [17655](../youtube-playback-plox.user.js#L17655) |

## [Processing Functions](../youtube-playback-plox.user.js#L17685)
> [Line 17685](../youtube-playback-plox.user.js#L17685)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isSessionStale`](../youtube-playback-plox.user.js#L17702) | [17702](../youtube-playback-plox.user.js#L17702) |
| `fn` | [`scheduleIdMismatchRetry`](../youtube-playback-plox.user.js#L17728) | [17728](../youtube-playback-plox.user.js#L17728) |
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L17772) | [17772](../youtube-playback-plox.user.js#L17772) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L17799) | [17799](../youtube-playback-plox.user.js#L17799) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L17809) | [17809](../youtube-playback-plox.user.js#L17809) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L17809) | [17809](../youtube-playback-plox.user.js#L17809) |
| `fn` | [`clearPendingRecovery`](../youtube-playback-plox.user.js#L17829) | [17829](../youtube-playback-plox.user.js#L17829) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L17834) | [17834](../youtube-playback-plox.user.js#L17834) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L17839) | [17839](../youtube-playback-plox.user.js#L17839) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L17846) | [17846](../youtube-playback-plox.user.js#L17846) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L17852) | [17852](../youtube-playback-plox.user.js#L17852) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L17870) | [17870](../youtube-playback-plox.user.js#L17870) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L17968) | [17968](../youtube-playback-plox.user.js#L17968) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L18032) | [18032](../youtube-playback-plox.user.js#L18032) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L18078) | [18078](../youtube-playback-plox.user.js#L18078) |
| `fn` | [`isAwaitingFirstPlayback`](../youtube-playback-plox.user.js#L18110) | [18110](../youtube-playback-plox.user.js#L18110) |
| `fn` | [`isProgressInCompletionZone`](../youtube-playback-plox.user.js#L18129) | [18129](../youtube-playback-plox.user.js#L18129) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L18133) | [18133](../youtube-playback-plox.user.js#L18133) |
| `fn` | [`isPlayerReportingEnd`](../youtube-playback-plox.user.js#L18146) | [18146](../youtube-playback-plox.user.js#L18146) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L18163) | [18163](../youtube-playback-plox.user.js#L18163) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L18174) | [18174](../youtube-playback-plox.user.js#L18174) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L18186) | [18186](../youtube-playback-plox.user.js#L18186) |
| `fn` | [`absorbSaveResult`](../youtube-playback-plox.user.js#L18219) | [18219](../youtube-playback-plox.user.js#L18219) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L18233) | [18233](../youtube-playback-plox.user.js#L18233) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L18308) | [18308](../youtube-playback-plox.user.js#L18308) |
| `fn` | [`handleNaturalEnd`](../youtube-playback-plox.user.js#L18333) | [18333](../youtube-playback-plox.user.js#L18333) |
| `fn` | [`persistCompletion`](../youtube-playback-plox.user.js#L18342) | [18342](../youtube-playback-plox.user.js#L18342) |
| `fn` | [`handleSeekingForGradient`](../youtube-playback-plox.user.js#L18373) | [18373](../youtube-playback-plox.user.js#L18373) |
| `fn` | [`handleSeekedForGradient`](../youtube-playback-plox.user.js#L18383) | [18383](../youtube-playback-plox.user.js#L18383) |
| `fn` | [`canValidateStandalone`](../youtube-playback-plox.user.js#L18522) | [18522](../youtube-playback-plox.user.js#L18522) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L18547) | [18547](../youtube-playback-plox.user.js#L18547) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L18676) | [18676](../youtube-playback-plox.user.js#L18676) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L18875) | [18875](../youtube-playback-plox.user.js#L18875) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L18988) | [18988](../youtube-playback-plox.user.js#L18988) |
| `fn` | [`processMediaVideo`](../youtube-playback-plox.user.js#L19103) | [19103](../youtube-playback-plox.user.js#L19103) |

## [PlaybackController](../youtube-playback-plox.user.js#L19158)
> [Line 19158](../youtube-playback-plox.user.js#L19158)

| Type | Name | Line |
|---|---|---|
| `fn` | [`mapLiveAbsoluteToWindow`](../youtube-playback-plox.user.js#L19173) | [19173](../youtube-playback-plox.user.js#L19173) |
| `fn` | [`applySeek`](../youtube-playback-plox.user.js#L19199) | [19199](../youtube-playback-plox.user.js#L19199) |
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L19254) | [19254](../youtube-playback-plox.user.js#L19254) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L19271) | [19271](../youtube-playback-plox.user.js#L19271) |
| `fn` | [`removeMetadataListener`](../youtube-playback-plox.user.js#L19295) | [19295](../youtube-playback-plox.user.js#L19295) |
| `fn` | [`removeCanPlayListener`](../youtube-playback-plox.user.js#L19296) | [19296](../youtube-playback-plox.user.js#L19296) |
| `fn` | [`removeAbortListener`](../youtube-playback-plox.user.js#L19297) | [19297](../youtube-playback-plox.user.js#L19297) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L19298) | [19298](../youtube-playback-plox.user.js#L19298) |
| `fn` | [`rejectAsStale`](../youtube-playback-plox.user.js#L19304) | [19304](../youtube-playback-plox.user.js#L19304) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L19308) | [19308](../youtube-playback-plox.user.js#L19308) |
| `fn` | [`onAbort`](../youtube-playback-plox.user.js#L19317) | [19317](../youtube-playback-plox.user.js#L19317) |
| `fn` | [`restoreThrottleMarker`](../youtube-playback-plox.user.js#L19534) | [19534](../youtube-playback-plox.user.js#L19534) |
| `fn` | [`readApiNumber`](../youtube-playback-plox.user.js#L19549) | [19549](../youtube-playback-plox.user.js#L19549) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L19704) | [19704](../youtube-playback-plox.user.js#L19704) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L19852)
> [Line 19852](../youtube-playback-plox.user.js#L19852)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getInnerTubeConfig`](../youtube-playback-plox.user.js#L19889) | [19889](../youtube-playback-plox.user.js#L19889) |
| `fn` | [`fetchInnerTubeJson`](../youtube-playback-plox.user.js#L19904) | [19904](../youtube-playback-plox.user.js#L19904) |
| `fn` | [`fetchShortsViews`](../youtube-playback-plox.user.js#L19938) | [19938](../youtube-playback-plox.user.js#L19938) |
| `fn` | [`fetchPlaylistTitle`](../youtube-playback-plox.user.js#L19951) | [19951](../youtube-playback-plox.user.js#L19951) |
| `fn` | [`getCascadedVideoInfo`](../youtube-playback-plox.user.js#L19961) | [19961](../youtube-playback-plox.user.js#L19961) |
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L20006) | [20006](../youtube-playback-plox.user.js#L20006) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L20390)
> [Line 20390](../youtube-playback-plox.user.js#L20390)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createCustomDropdown`](../youtube-playback-plox.user.js#L20408) | [20408](../youtube-playback-plox.user.js#L20408) |
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L20419) | [20419](../youtube-playback-plox.user.js#L20419) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L20495) | [20495](../youtube-playback-plox.user.js#L20495) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L20511) | [20511](../youtube-playback-plox.user.js#L20511) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L20519) | [20519](../youtube-playback-plox.user.js#L20519) |
| `fn` | [`createSortSelector`](../youtube-playback-plox.user.js#L20536) | [20536](../youtube-playback-plox.user.js#L20536) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L20539) | [20539](../youtube-playback-plox.user.js#L20539) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L20592)
> [Line 20592](../youtube-playback-plox.user.js#L20592)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFilterSelector`](../youtube-playback-plox.user.js#L20601) | [20601](../youtube-playback-plox.user.js#L20601) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L20604) | [20604](../youtube-playback-plox.user.js#L20604) |
| `fn` | [`createRangeFilter`](../youtube-playback-plox.user.js#L20649) | [20649](../youtube-playback-plox.user.js#L20649) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L20652) | [20652](../youtube-playback-plox.user.js#L20652) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L20658) | [20658](../youtube-playback-plox.user.js#L20658) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L20679) | [20679](../youtube-playback-plox.user.js#L20679) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L20800) | [20800](../youtube-playback-plox.user.js#L20800) |
| `fn` | [`createSearchInput`](../youtube-playback-plox.user.js#L20855) | [20855](../youtube-playback-plox.user.js#L20855) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L20880)
> [Line 20880](../youtube-playback-plox.user.js#L20880)

| Type | Name | Line |
|---|---|---|
| `fn` | [`acquireBodyOverflow`](../youtube-playback-plox.user.js#L20908) | [20908](../youtube-playback-plox.user.js#L20908) |
| `fn` | [`releaseBodyOverflow`](../youtube-playback-plox.user.js#L20922) | [20922](../youtube-playback-plox.user.js#L20922) |
| `fn` | [`getVirtualScrollerVideoItems`](../youtube-playback-plox.user.js#L20988) | [20988](../youtube-playback-plox.user.js#L20988) |
| `fn` | [`batchLoadStorageData`](../youtube-playback-plox.user.js#L21017) | [21017](../youtube-playback-plox.user.js#L21017) |

## [📁 Update Video List](../youtube-playback-plox.user.js#L21058)
> [Line 21058](../youtube-playback-plox.user.js#L21058)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSortValue`](../youtube-playback-plox.user.js#L21065) | [21065](../youtube-playback-plox.user.js#L21065) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L21077) | [21077](../youtube-playback-plox.user.js#L21077) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L21081) | [21081](../youtube-playback-plox.user.js#L21081) |
| `fn` | [`showLoadingState`](../youtube-playback-plox.user.js#L21098) | [21098](../youtube-playback-plox.user.js#L21098) |
| `fn` | [`loadVideoItems`](../youtube-playback-plox.user.js#L21161) | [21161](../youtube-playback-plox.user.js#L21161) |
| `fn` | [`resolvePlaylistTitles`](../youtube-playback-plox.user.js#L21185) | [21185](../youtube-playback-plox.user.js#L21185) |
| `fn` | [`filterItems`](../youtube-playback-plox.user.js#L21217) | [21217](../youtube-playback-plox.user.js#L21217) |
| `fn` | [`buildVirtualItems`](../youtube-playback-plox.user.js#L21261) | [21261](../youtube-playback-plox.user.js#L21261) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L21273) | [21273](../youtube-playback-plox.user.js#L21273) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L21294) | [21294](../youtube-playback-plox.user.js#L21294) |
| `fn` | [`showEmptyState`](../youtube-playback-plox.user.js#L21324) | [21324](../youtube-playback-plox.user.js#L21324) |
| `fn` | [`showListLoadErrorState`](../youtube-playback-plox.user.js#L21357) | [21357](../youtube-playback-plox.user.js#L21357) |
| `fn` | [`updateVirtualScroller`](../youtube-playback-plox.user.js#L21378) | [21378](../youtube-playback-plox.user.js#L21378) |
| `fn` | [`initVirtualScroller`](../youtube-playback-plox.user.js#L21408) | [21408](../youtube-playback-plox.user.js#L21408) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L21454) | [21454](../youtube-playback-plox.user.js#L21454) |
| `fn` | [`resolveGridCols`](../youtube-playback-plox.user.js#L21529) | [21529](../youtube-playback-plox.user.js#L21529) |
| `fn` | [`destroyVirtualScroller`](../youtube-playback-plox.user.js#L21542) | [21542](../youtube-playback-plox.user.js#L21542) |
| `fn` | [`disconnectVirtualScrollerObserver`](../youtube-playback-plox.user.js#L21556) | [21556](../youtube-playback-plox.user.js#L21556) |
| `fn` | [`connectResizeObserver`](../youtube-playback-plox.user.js#L21571) | [21571](../youtube-playback-plox.user.js#L21571) |
| `fn` | [`updateVideoList`](../youtube-playback-plox.user.js#L21604) | [21604](../youtube-playback-plox.user.js#L21604) |
| `fn` | [`isCurrentRender`](../youtube-playback-plox.user.js#L21609) | [21609](../youtube-playback-plox.user.js#L21609) |
| `fn` | [`requestVideoListUpdate`](../youtube-playback-plox.user.js#L21695) | [21695](../youtube-playback-plox.user.js#L21695) |
| `fn` | [`closeModalVideos`](../youtube-playback-plox.user.js#L21706) | [21706](../youtube-playback-plox.user.js#L21706) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L21786) | [21786](../youtube-playback-plox.user.js#L21786) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L21803) | [21803](../youtube-playback-plox.user.js#L21803) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L21831) | [21831](../youtube-playback-plox.user.js#L21831) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L21966)
> [Line 21966](../youtube-playback-plox.user.js#L21966)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L21969) | [21969](../youtube-playback-plox.user.js#L21969) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L21984) | [21984](../youtube-playback-plox.user.js#L21984) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L21995)
> [Line 21995](../youtube-playback-plox.user.js#L21995)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSavedVideosList`](../youtube-playback-plox.user.js#L21998) | [21998](../youtube-playback-plox.user.js#L21998) |
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L22136) | [22136](../youtube-playback-plox.user.js#L22136) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L22146) | [22146](../youtube-playback-plox.user.js#L22146) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L22216) | [22216](../youtube-playback-plox.user.js#L22216) |
| `fn` | [`onSavedVideosKeyDown`](../youtube-playback-plox.user.js#L22225) | [22225](../youtube-playback-plox.user.js#L22225) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L22256)
> [Line 22256](../youtube-playback-plox.user.js#L22256)

| Type | Name | Line |
|---|---|---|
| `fn` | [`pickPlaylistVariant`](../youtube-playback-plox.user.js#L22265) | [22265](../youtube-playback-plox.user.js#L22265) |
| `fn` | [`generatePlaylistColor`](../youtube-playback-plox.user.js#L22292) | [22292](../youtube-playback-plox.user.js#L22292) |
| `fn` | [`generatePlaylistBorderColor`](../youtube-playback-plox.user.js#L22305) | [22305](../youtube-playback-plox.user.js#L22305) |
| `fn` | [`handleForceTimeAction`](../youtube-playback-plox.user.js#L22309) | [22309](../youtube-playback-plox.user.js#L22309) |
| `fn` | [`handleUnlinkPlaylistAction`](../youtube-playback-plox.user.js#L22375) | [22375](../youtube-playback-plox.user.js#L22375) |
| `fn` | [`handleDeleteEntryAction`](../youtube-playback-plox.user.js#L22397) | [22397](../youtube-playback-plox.user.js#L22397) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L22430) | [22430](../youtube-playback-plox.user.js#L22430) |
| `fn` | [`handleToggleProtectionAction`](../youtube-playback-plox.user.js#L22459) | [22459](../youtube-playback-plox.user.js#L22459) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L22500) | [22500](../youtube-playback-plox.user.js#L22500) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L22548) | [22548](../youtube-playback-plox.user.js#L22548) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L22554) | [22554](../youtube-playback-plox.user.js#L22554) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L22573) | [22573](../youtube-playback-plox.user.js#L22573) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L22607) | [22607](../youtube-playback-plox.user.js#L22607) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L22659) | [22659](../youtube-playback-plox.user.js#L22659) |
| `fn` | [`entryButtonsShown`](../youtube-playback-plox.user.js#L22674) | [22674](../youtube-playback-plox.user.js#L22674) |
| `fn` | [`generateVideoObsidianMarkdown`](../youtube-playback-plox.user.js#L22715) | [22715](../youtube-playback-plox.user.js#L22715) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L22748) | [22748](../youtube-playback-plox.user.js#L22748) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L22754) | [22754](../youtube-playback-plox.user.js#L22754) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L22770) | [22770](../youtube-playback-plox.user.js#L22770) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L22780) | [22780](../youtube-playback-plox.user.js#L22780) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L22788) | [22788](../youtube-playback-plox.user.js#L22788) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L22793) | [22793](../youtube-playback-plox.user.js#L22793) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L22800) | [22800](../youtube-playback-plox.user.js#L22800) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L22803) | [22803](../youtube-playback-plox.user.js#L22803) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L22807) | [22807](../youtube-playback-plox.user.js#L22807) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L22853) | [22853](../youtube-playback-plox.user.js#L22853) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L22853) | [22853](../youtube-playback-plox.user.js#L22853) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L22867) | [22867](../youtube-playback-plox.user.js#L22867) |
| `fn` | [`createModeSelector`](../youtube-playback-plox.user.js#L23141) | [23141](../youtube-playback-plox.user.js#L23141) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L23142) | [23142](../youtube-playback-plox.user.js#L23142) |
| `fn` | [`createViewModeSelector`](../youtube-playback-plox.user.js#L23174) | [23174](../youtube-playback-plox.user.js#L23174) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L23191) | [23191](../youtube-playback-plox.user.js#L23191) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L23192) | [23192](../youtube-playback-plox.user.js#L23192) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L23208) | [23208](../youtube-playback-plox.user.js#L23208) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L23209) | [23209](../youtube-playback-plox.user.js#L23209) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L23258) | [23258](../youtube-playback-plox.user.js#L23258) |
| `fn` | [`createOverflowToggle`](../youtube-playback-plox.user.js#L23289) | [23289](../youtube-playback-plox.user.js#L23289) |
| `fn` | [`makeToolbarGroup`](../youtube-playback-plox.user.js#L23328) | [23328](../youtube-playback-plox.user.js#L23328) |
| `fn` | [`makeDisplayToggle`](../youtube-playback-plox.user.js#L23350) | [23350](../youtube-playback-plox.user.js#L23350) |
| `fn` | [`mountSavedVideosModalActionsToolbar`](../youtube-playback-plox.user.js#L23384) | [23384](../youtube-playback-plox.user.js#L23384) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L23407) | [23407](../youtube-playback-plox.user.js#L23407) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L23421) | [23421](../youtube-playback-plox.user.js#L23421) |
| `fn` | [`makeModeRow`](../youtube-playback-plox.user.js#L23567) | [23567](../youtube-playback-plox.user.js#L23567) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L23717) | [23717](../youtube-playback-plox.user.js#L23717) |
| `fn` | [`applyThumbnailToImage`](../youtube-playback-plox.user.js#L23773) | [23773](../youtube-playback-plox.user.js#L23773) |
| `fn` | [`removeLoadListener`](../youtube-playback-plox.user.js#L23782) | [23782](../youtube-playback-plox.user.js#L23782) |
| `fn` | [`removeErrorListener`](../youtube-playback-plox.user.js#L23783) | [23783](../youtube-playback-plox.user.js#L23783) |
| `fn` | [`finish`](../youtube-playback-plox.user.js#L23789) | [23789](../youtube-playback-plox.user.js#L23789) |
| `fn` | [`loadCandidate`](../youtube-playback-plox.user.js#L23804) | [23804](../youtube-playback-plox.user.js#L23804) |
| `fn` | [`createVideoGridRow`](../youtube-playback-plox.user.js#L23839) | [23839](../youtube-playback-plox.user.js#L23839) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L23856) | [23856](../youtube-playback-plox.user.js#L23856) |
| `fn` | [`scheduleHeightUpdate`](../youtube-playback-plox.user.js#L23905) | [23905](../youtube-playback-plox.user.js#L23905) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L23952) | [23952](../youtube-playback-plox.user.js#L23952) |
| `fn` | [`createVideoEntry`](../youtube-playback-plox.user.js#L23966) | [23966](../youtube-playback-plox.user.js#L23966) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L24195) | [24195](../youtube-playback-plox.user.js#L24195) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L24218) | [24218](../youtube-playback-plox.user.js#L24218) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L24219) | [24219](../youtube-playback-plox.user.js#L24219) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L24277)
> [Line 24277](../youtube-playback-plox.user.js#L24277)

| Type | Name | Line |
|---|---|---|
| `fn` | [`restoreDeletedRecordIfUnchanged`](../youtube-playback-plox.user.js#L24296) | [24296](../youtube-playback-plox.user.js#L24296) |
| `fn` | [`canCommit`](../youtube-playback-plox.user.js#L24297) | [24297](../youtube-playback-plox.user.js#L24297) |
| `fn` | [`clearAllData`](../youtube-playback-plox.user.js#L24326) | [24326](../youtube-playback-plox.user.js#L24326) |
| `fn` | [`clearCommitGuard`](../youtube-playback-plox.user.js#L24341) | [24341](../youtube-playback-plox.user.js#L24341) |
| `fn` | [`performClearAllData`](../youtube-playback-plox.user.js#L24361) | [24361](../youtube-playback-plox.user.js#L24361) |
| `fn` | [`undoClearAll`](../youtube-playback-plox.user.js#L24545) | [24545](../youtube-playback-plox.user.js#L24545) |
| `fn` | [`undoCommitGuard`](../youtube-playback-plox.user.js#L24548) | [24548](../youtube-playback-plox.user.js#L24548) |
| `fn` | [`performUndoClearAll`](../youtube-playback-plox.user.js#L24561) | [24561](../youtube-playback-plox.user.js#L24561) |

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L24629)
> [Line 24629](../youtube-playback-plox.user.js#L24629)

| Type | Name | Line |
|---|---|---|
| `fn` | [`registerOwnedMenuCommand`](../youtube-playback-plox.user.js#L24638) | [24638](../youtube-playback-plox.user.js#L24638) |
| `fn` | [`unregisterOwnedMenuCommands`](../youtube-playback-plox.user.js#L24648) | [24648](../youtube-playback-plox.user.js#L24648) |
| `fn` | [`registerMenuCommands`](../youtube-playback-plox.user.js#L24661) | [24661](../youtube-playback-plox.user.js#L24661) |

## [🔄 Data Migration](../youtube-playback-plox.user.js#L24687)
> [Line 24687](../youtube-playback-plox.user.js#L24687)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeVideoType`](../youtube-playback-plox.user.js#L24696) | [24696](../youtube-playback-plox.user.js#L24696) |
| `fn` | [`cleanupNonVideoData`](../youtube-playback-plox.user.js#L24718) | [24718](../youtube-playback-plox.user.js#L24718) |
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L24745) | [24745](../youtube-playback-plox.user.js#L24745) |
| `fn` | [`runAutoCleanup`](../youtube-playback-plox.user.js#L24966) | [24966](../youtube-playback-plox.user.js#L24966) |
| `fn` | [`cleanupCommitGuard`](../youtube-playback-plox.user.js#L24986) | [24986](../youtube-playback-plox.user.js#L24986) |

## [🚀 Init](../youtube-playback-plox.user.js#L25190)
> [Line 25190](../youtube-playback-plox.user.js#L25190)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L25203) | [25203](../youtube-playback-plox.user.js#L25203) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L25227) | [25227](../youtube-playback-plox.user.js#L25227) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L25635) | [25635](../youtube-playback-plox.user.js#L25635) |

