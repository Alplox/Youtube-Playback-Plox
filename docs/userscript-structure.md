# Userscript Structure
> Auto-generated on 2026-10-31 · version 0.0.13
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
31. [📢 Ad Caches](#ad-caches) - [line 9514](../youtube-playback-plox.user.js#L9514)
32. [📢 Ad Detector](#ad-detector) - [line 9540](../youtube-playback-plox.user.js#L9540)
33. [🎯 VirtualScroller](#virtualscroller) - [line 9733](../youtube-playback-plox.user.js#L9733)
34. [📤 Import/Export JSON](#importexport-json) - [line 10239](../youtube-playback-plox.user.js#L10239)
35. [☁️ GitHub Backup](#github-backup) - [line 10857](../youtube-playback-plox.user.js#L10857)
36. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 11394](../youtube-playback-plox.user.js#L11394)
37. [🔄 Normalize Video Data](#normalize-video-data) - [line 11576](../youtube-playback-plox.user.js#L11576)
38. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 11678](../youtube-playback-plox.user.js#L11678)
39. [Parse FreeTube DB](#parse-freetube-db) - [line 11769](../youtube-playback-plox.user.js#L11769)
40. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 11862](../youtube-playback-plox.user.js#L11862)
41. [⬆ Export To FreeTube](#export-to-freetube) - [line 11892](../youtube-playback-plox.user.js#L11892)
42. [⬇ Import From FreeTube](#import-from-freetube) - [line 11936](../youtube-playback-plox.user.js#L11936)
43. [🔄 Insert Completion Event](#insert-completion-event) - [line 12002](../youtube-playback-plox.user.js#L12002)
44. [💾 Save Video Generic](#save-video-generic) - [line 12049](../youtube-playback-plox.user.js#L12049)
45. [📺 Helpers](#helpers) - [line 12315](../youtube-playback-plox.user.js#L12315)
46. [📺 Gets saved video data](#gets-saved-video-data) - [line 12318](../youtube-playback-plox.user.js#L12318)
47. [📺 Get Player Video ID](#get-player-video-id) - [line 12375](../youtube-playback-plox.user.js#L12375)
48. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 12465](../youtube-playback-plox.user.js#L12465)
49. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 12670](../youtube-playback-plox.user.js#L12670)
50. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 12887](../youtube-playback-plox.user.js#L12887)
51. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 12909](../youtube-playback-plox.user.js#L12909)
52. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 12937](../youtube-playback-plox.user.js#L12937)
53. [📺 get Playlist Name](#get-playlist-name) - [line 12982](../youtube-playback-plox.user.js#L12982)
54. [🕒 Time Display](#time-display) - [line 13282](../youtube-playback-plox.user.js#L13282)
55. [🖼️ Display Button Helpers](#display-button-helpers) - [line 13328](../youtube-playback-plox.user.js#L13328)
56. [🍞 Toasts](#toasts) - [line 14252](../youtube-playback-plox.user.js#L14252)
57. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 14569](../youtube-playback-plox.user.js#L14569)
58. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 14616](../youtube-playback-plox.user.js#L14616)
59. [⚙️ Settings UI](#settings-ui) - [line 14934](../youtube-playback-plox.user.js#L14934)
60. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 15445](../youtube-playback-plox.user.js#L15445)
61. [🎵 Video Selection](#video-selection) - [line 15503](../youtube-playback-plox.user.js#L15503)
62. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 16495](../youtube-playback-plox.user.js#L16495)
63. [📡 Video Observer Manager](#video-observer-manager) - [line 16799](../youtube-playback-plox.user.js#L16799)
64. [Processing Functions](#processing-functions) - [line 17678](../youtube-playback-plox.user.js#L17678)
65. [PlaybackController](#playbackcontroller) - [line 19151](../youtube-playback-plox.user.js#L19151)
66. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 19845](../youtube-playback-plox.user.js#L19845)
67. [📂 Sort UI](#sort-ui) - [line 20383](../youtube-playback-plox.user.js#L20383)
68. [📂 Filters UI](#filters-ui) - [line 20585](../youtube-playback-plox.user.js#L20585)
69. [📂 Video List UI](#video-list-ui) - [line 20873](../youtube-playback-plox.user.js#L20873)
70. [📁 Update Video List](#update-video-list) - [line 21051](../youtube-playback-plox.user.js#L21051)
71. [🔘 Floating Button](#floating-button) - [line 21959](../youtube-playback-plox.user.js#L21959)
72. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 21988](../youtube-playback-plox.user.js#L21988)
73. [📂 Video Entry](#video-entry) - [line 22249](../youtube-playback-plox.user.js#L22249)
74. [🗑️ Clear All Data](#clear-all-data) - [line 24270](../youtube-playback-plox.user.js#L24270)
75. [⚙️ Menu Commands](#menu-commands) - [line 24622](../youtube-playback-plox.user.js#L24622)
76. [🔄 Data Migration](#data-migration) - [line 24680](../youtube-playback-plox.user.js#L24680)
77. [🚀 Init](#init) - [line 25183](../youtube-playback-plox.user.js#L25183)

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
| `fn` | [`runInStore`](../youtube-playback-plox.user.js#L8579) | [8579](../youtube-playback-plox.user.js#L8579) |
| `fn` | [`enqueue`](../youtube-playback-plox.user.js#L8604) | [8604](../youtube-playback-plox.user.js#L8604) |
| `fn` | [`describeStoredValueType`](../youtube-playback-plox.user.js#L8620) | [8620](../youtube-playback-plox.user.js#L8620) |
| `fn` | [`isEmptyStoredValue`](../youtube-playback-plox.user.js#L8634) | [8634](../youtube-playback-plox.user.js#L8634) |
| `fn` | [`sanitizeToJsonSafe`](../youtube-playback-plox.user.js#L8655) | [8655](../youtube-playback-plox.user.js#L8655) |
| `fn` | [`attemptStoredValueRepair`](../youtube-playback-plox.user.js#L8702) | [8702](../youtube-playback-plox.user.js#L8702) |
| `fn` | [`sanitizeEntries`](../youtube-playback-plox.user.js#L8771) | [8771](../youtube-playback-plox.user.js#L8771) |
| `fn` | [`pushEntry`](../youtube-playback-plox.user.js#L8784) | [8784](../youtube-playback-plox.user.js#L8784) |
| `fn` | [`getAllEntries`](../youtube-playback-plox.user.js#L8889) | [8889](../youtube-playback-plox.user.js#L8889) |
| `fn` | [`repairEntries`](../youtube-playback-plox.user.js#L8901) | [8901](../youtube-playback-plox.user.js#L8901) |
| `fn` | [`putEntry`](../youtube-playback-plox.user.js#L8935) | [8935](../youtube-playback-plox.user.js#L8935) |
| `fn` | [`deleteEntry`](../youtube-playback-plox.user.js#L8939) | [8939](../youtube-playback-plox.user.js#L8939) |
| `fn` | [`bulkDelete`](../youtube-playback-plox.user.js#L8948) | [8948](../youtube-playback-plox.user.js#L8948) |
| `fn` | [`bulkPut`](../youtube-playback-plox.user.js#L8967) | [8967](../youtube-playback-plox.user.js#L8967) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L8994) | [8994](../youtube-playback-plox.user.js#L8994) |
| `fn` | [`diagnose`](../youtube-playback-plox.user.js#L9017) | [9017](../youtube-playback-plox.user.js#L9017) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L9073) | [9073](../youtube-playback-plox.user.js#L9073) |
| `fn` | [`prefixKey`](../youtube-playback-plox.user.js#L9082) | [9082](../youtube-playback-plox.user.js#L9082) |
| `fn` | [`stripPrefix`](../youtube-playback-plox.user.js#L9083) | [9083](../youtube-playback-plox.user.js#L9083) |
| `fn` | [`hasPrefix`](../youtube-playback-plox.user.js#L9084) | [9084](../youtube-playback-plox.user.js#L9084) |
| `fn` | [`parseStoredObject`](../youtube-playback-plox.user.js#L9338) | [9338](../youtube-playback-plox.user.js#L9338) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L9348) | [9348](../youtube-playback-plox.user.js#L9348) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L9358) | [9358](../youtube-playback-plox.user.js#L9358) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L9376) | [9376](../youtube-playback-plox.user.js#L9376) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L9392) | [9392](../youtube-playback-plox.user.js#L9392) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L9455) | [9455](../youtube-playback-plox.user.js#L9455) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L9473) | [9473](../youtube-playback-plox.user.js#L9473) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L9481) | [9481](../youtube-playback-plox.user.js#L9481) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L9498) | [9498](../youtube-playback-plox.user.js#L9498) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L9514)
> [Line 9514](../youtube-playback-plox.user.js#L9514)

_No relevant functions or constants detected._

## [📢 Ad Detector](../youtube-playback-plox.user.js#L9540)
> [Line 9540](../youtube-playback-plox.user.js#L9540)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L9542) | [9542](../youtube-playback-plox.user.js#L9542) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L9593) | [9593](../youtube-playback-plox.user.js#L9593) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L9733)
> [Line 9733](../youtube-playback-plox.user.js#L9733)

| Type | Name | Line |
|---|---|---|
| `class` | [`VirtualScroller`](../youtube-playback-plox.user.js#L9750) | [9750](../youtube-playback-plox.user.js#L9750) |

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L10239)
> [Line 10239](../youtube-playback-plox.user.js#L10239)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L10248) | [10248](../youtube-playback-plox.user.js#L10248) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L10279) | [10279](../youtube-playback-plox.user.js#L10279) |
| `fn` | [`exportStorageDamageReport`](../youtube-playback-plox.user.js#L10332) | [10332](../youtube-playback-plox.user.js#L10332) |
| `fn` | [`runStorageRepairFlow`](../youtube-playback-plox.user.js#L10371) | [10371](../youtube-playback-plox.user.js#L10371) |
| `fn` | [`renderStorageDamageNotice`](../youtube-playback-plox.user.js#L10438) | [10438](../youtube-playback-plox.user.js#L10438) |
| `fn` | [`copyExportDataToClipboard`](../youtube-playback-plox.user.js#L10499) | [10499](../youtube-playback-plox.user.js#L10499) |
| `fn` | [`mergeImportedVideoData`](../youtube-playback-plox.user.js#L10554) | [10554](../youtube-playback-plox.user.js#L10554) |
| `fn` | [`detectImportFormat`](../youtube-playback-plox.user.js#L10615) | [10615](../youtube-playback-plox.user.js#L10615) |
| `fn` | [`hasImportableRecords`](../youtube-playback-plox.user.js#L10629) | [10629](../youtube-playback-plox.user.js#L10629) |
| `fn` | [`looksLikeFreeTubeExport`](../youtube-playback-plox.user.js#L10646) | [10646](../youtube-playback-plox.user.js#L10646) |
| `fn` | [`parseImportPayload`](../youtube-playback-plox.user.js#L10659) | [10659](../youtube-playback-plox.user.js#L10659) |
| `fn` | [`createImportCommitGuard`](../youtube-playback-plox.user.js#L10698) | [10698](../youtube-playback-plox.user.js#L10698) |
| `fn` | [`commitImportedEntries`](../youtube-playback-plox.user.js#L10716) | [10716](../youtube-playback-plox.user.js#L10716) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L10763) | [10763](../youtube-playback-plox.user.js#L10763) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L10857)
> [Line 10857](../youtube-playback-plox.user.js#L10857)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getGitHubErrorMsg`](../youtube-playback-plox.user.js#L10860) | [10860](../youtube-playback-plox.user.js#L10860) |
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L10872) | [10872](../youtube-playback-plox.user.js#L10872) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L10902) | [10902](../youtube-playback-plox.user.js#L10902) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L10903) | [10903](../youtube-playback-plox.user.js#L10903) |
| `fn` | [`sendGistRequest`](../youtube-playback-plox.user.js#L10925) | [10925](../youtube-playback-plox.user.js#L10925) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L11021) | [11021](../youtube-playback-plox.user.js#L11021) |
| `fn` | [`finish`](../youtube-playback-plox.user.js#L11031) | [11031](../youtube-playback-plox.user.js#L11031) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L11045) | [11045](../youtube-playback-plox.user.js#L11045) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L11231) | [11231](../youtube-playback-plox.user.js#L11231) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L11252) | [11252](../youtube-playback-plox.user.js#L11252) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L11331) | [11331](../youtube-playback-plox.user.js#L11331) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L11361) | [11361](../youtube-playback-plox.user.js#L11361) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L11394)
> [Line 11394](../youtube-playback-plox.user.js#L11394)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L11395) | [11395](../youtube-playback-plox.user.js#L11395) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L11434) | [11434](../youtube-playback-plox.user.js#L11434) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L11576)
> [Line 11576](../youtube-playback-plox.user.js#L11576)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeCompletionHistory`](../youtube-playback-plox.user.js#L11584) | [11584](../youtube-playback-plox.user.js#L11584) |
| `fn` | [`normalizeVideoData`](../youtube-playback-plox.user.js#L11612) | [11612](../youtube-playback-plox.user.js#L11612) |
| `fn` | [`safeText`](../youtube-playback-plox.user.js#L11615) | [11615](../youtube-playback-plox.user.js#L11615) |
| `fn` | [`safeNumber`](../youtube-playback-plox.user.js#L11620) | [11620](../youtube-playback-plox.user.js#L11620) |
| `fn` | [`safeNullableText`](../youtube-playback-plox.user.js#L11624) | [11624](../youtube-playback-plox.user.js#L11624) |

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L11678)
> [Line 11678](../youtube-playback-plox.user.js#L11678)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toFreeTubeFormat`](../youtube-playback-plox.user.js#L11684) | [11684](../youtube-playback-plox.user.js#L11684) |

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L11769)
> [Line 11769](../youtube-playback-plox.user.js#L11769)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseFreeTubeDB`](../youtube-playback-plox.user.js#L11775) | [11775](../youtube-playback-plox.user.js#L11775) |

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L11862)
> [Line 11862](../youtube-playback-plox.user.js#L11862)

| Type | Name | Line |
|---|---|---|
| `fn` | [`fromFreeTubeFormat`](../youtube-playback-plox.user.js#L11868) | [11868](../youtube-playback-plox.user.js#L11868) |
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L11877) | [11877](../youtube-playback-plox.user.js#L11877) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L11892)
> [Line 11892](../youtube-playback-plox.user.js#L11892)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTubeFormat`](../youtube-playback-plox.user.js#L11897) | [11897](../youtube-playback-plox.user.js#L11897) |

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L11936)
> [Line 11936](../youtube-playback-plox.user.js#L11936)

| Type | Name | Line |
|---|---|---|
| `fn` | [`importFromFreeTubeFormat`](../youtube-playback-plox.user.js#L11942) | [11942](../youtube-playback-plox.user.js#L11942) |

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L12002)
> [Line 12002](../youtube-playback-plox.user.js#L12002)

| Type | Name | Line |
|---|---|---|
| `fn` | [`insertCompletionEvent`](../youtube-playback-plox.user.js#L12010) | [12010](../youtube-playback-plox.user.js#L12010) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L12038) | [12038](../youtube-playback-plox.user.js#L12038) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L12049)
> [Line 12049](../youtube-playback-plox.user.js#L12049)

| Type | Name | Line |
|---|---|---|
| `fn` | [`resetCompletionOnLoop`](../youtube-playback-plox.user.js#L12059) | [12059](../youtube-playback-plox.user.js#L12059) |
| `fn` | [`internalSaveVideoGeneric`](../youtube-playback-plox.user.js#L12077) | [12077](../youtube-playback-plox.user.js#L12077) |
| `fn` | [`isExpectedSessionCurrent`](../youtube-playback-plox.user.js#L12087) | [12087](../youtube-playback-plox.user.js#L12087) |
| `fn` | [`isDestructiveEpochCurrent`](../youtube-playback-plox.user.js#L12093) | [12093](../youtube-playback-plox.user.js#L12093) |
| `fn` | [`commitGuard`](../youtube-playback-plox.user.js#L12096) | [12096](../youtube-playback-plox.user.js#L12096) |
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L12184) | [12184](../youtube-playback-plox.user.js#L12184) |

## [📺 Helpers](../youtube-playback-plox.user.js#L12315)
> [Line 12315](../youtube-playback-plox.user.js#L12315)

_No relevant functions or constants detected._

## [📺 Gets saved video data](../youtube-playback-plox.user.js#L12318)
> [Line 12318](../youtube-playback-plox.user.js#L12318)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSavedVideoData`](../youtube-playback-plox.user.js#L12327) | [12327](../youtube-playback-plox.user.js#L12327) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L12375)
> [Line 12375](../youtube-playback-plox.user.js#L12375)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L12411) | [12411](../youtube-playback-plox.user.js#L12411) |
| `fn` | [`invalidatePlayerVideoIdCache`](../youtube-playback-plox.user.js#L12461) | [12461](../youtube-playback-plox.user.js#L12461) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L12465)
> [Line 12465](../youtube-playback-plox.user.js#L12465)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTypeFromPageManager`](../youtube-playback-plox.user.js#L12488) | [12488](../youtube-playback-plox.user.js#L12488) |
| `fn` | [`getTypeFromYtApp`](../youtube-playback-plox.user.js#L12528) | [12528](../youtube-playback-plox.user.js#L12528) |
| `fn` | [`detectFromURL`](../youtube-playback-plox.user.js#L12554) | [12554](../youtube-playback-plox.user.js#L12554) |
| `fn` | [`cachePageType`](../youtube-playback-plox.user.js#L12626) | [12626](../youtube-playback-plox.user.js#L12626) |
| `fn` | [`getYouTubePageType`](../youtube-playback-plox.user.js#L12645) | [12645](../youtube-playback-plox.user.js#L12645) |

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L12670)
> [Line 12670](../youtube-playback-plox.user.js#L12670)

| Type | Name | Line |
|---|---|---|
| `fn` | [`_parseYouTubeResourceImpl`](../youtube-playback-plox.user.js#L12730) | [12730](../youtube-playback-plox.user.js#L12730) |
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L12766) | [12766](../youtube-playback-plox.user.js#L12766) |
| `fn` | [`parseYouTubeResource`](../youtube-playback-plox.user.js#L12877) | [12877](../youtube-playback-plox.user.js#L12877) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L12887)
> [Line 12887](../youtube-playback-plox.user.js#L12887)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubeVideoIdFromUrl`](../youtube-playback-plox.user.js#L12897) | [12897](../youtube-playback-plox.user.js#L12897) |

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L12909)
> [Line 12909](../youtube-playback-plox.user.js#L12909)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getYouTubeVideoContextFromUrl`](../youtube-playback-plox.user.js#L12921) | [12921](../youtube-playback-plox.user.js#L12921) |

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L12937)
> [Line 12937](../youtube-playback-plox.user.js#L12937)

| Type | Name | Line |
|---|---|---|
| `fn` | [`extractYouTubePlaylistIdFromUrl`](../youtube-playback-plox.user.js#L12945) | [12945](../youtube-playback-plox.user.js#L12945) |
| `fn` | [`classifyPlaylist`](../youtube-playback-plox.user.js#L12969) | [12969](../youtube-playback-plox.user.js#L12969) |

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L12982)
> [Line 12982](../youtube-playback-plox.user.js#L12982)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L13003) | [13003](../youtube-playback-plox.user.js#L13003) |
| `fn` | [`extractYtInitialData`](../youtube-playback-plox.user.js#L13040) | [13040](../youtube-playback-plox.user.js#L13040) |
| `fn` | [`getPlaylistName`](../youtube-playback-plox.user.js#L13146) | [13146](../youtube-playback-plox.user.js#L13146) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L13162) | [13162](../youtube-playback-plox.user.js#L13162) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L13255) | [13255](../youtube-playback-plox.user.js#L13255) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L13282)
> [Line 13282](../youtube-playback-plox.user.js#L13282)

| Type | Name | Line |
|---|---|---|
| `fn` | [`cancelPendingDisplayClear`](../youtube-playback-plox.user.js#L13306) | [13306](../youtube-playback-plox.user.js#L13306) |
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L13319) | [13319](../youtube-playback-plox.user.js#L13319) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L13328)
> [Line 13328](../youtube-playback-plox.user.js#L13328)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getTimeDisplayMessage`](../youtube-playback-plox.user.js#L13336) | [13336](../youtube-playback-plox.user.js#L13336) |
| `fn` | [`hasTimeDisplayMessage`](../youtube-playback-plox.user.js#L13345) | [13345](../youtube-playback-plox.user.js#L13345) |
| `fn` | [`showDisplayMessage`](../youtube-playback-plox.user.js#L13355) | [13355](../youtube-playback-plox.user.js#L13355) |
| `fn` | [`restoreDisplayButtons`](../youtube-playback-plox.user.js#L13373) | [13373](../youtube-playback-plox.user.js#L13373) |
| `fn` | [`createSplitButtonGroup`](../youtube-playback-plox.user.js#L13404) | [13404](../youtube-playback-plox.user.js#L13404) |
| `fn` | [`getDisplayContextVideo`](../youtube-playback-plox.user.js#L13429) | [13429](../youtube-playback-plox.user.js#L13429) |
| `fn` | [`getDisplayContextPlayer`](../youtube-playback-plox.user.js#L13444) | [13444](../youtube-playback-plox.user.js#L13444) |
| `fn` | [`getPlaybackNotificationKind`](../youtube-playback-plox.user.js#L13459) | [13459](../youtube-playback-plox.user.js#L13459) |
| `fn` | [`buildPlaybackNotificationMessage`](../youtube-playback-plox.user.js#L13476) | [13476](../youtube-playback-plox.user.js#L13476) |
| `fn` | [`setupManualSaveButton`](../youtube-playback-plox.user.js#L13514) | [13514](../youtube-playback-plox.user.js#L13514) |
| `fn` | [`getActiveShortsControlsContainer`](../youtube-playback-plox.user.js#L13574) | [13574](../youtube-playback-plox.user.js#L13574) |
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L13619) | [13619](../youtube-playback-plox.user.js#L13619) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L13619) | [13619](../youtube-playback-plox.user.js#L13619) |
| `fn` | [`getDisplayDisposables`](../youtube-playback-plox.user.js#L13641) | [13641](../youtube-playback-plox.user.js#L13641) |
| `fn` | [`disposeDisplayNode`](../youtube-playback-plox.user.js#L13654) | [13654](../youtube-playback-plox.user.js#L13654) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L13661) | [13661](../youtube-playback-plox.user.js#L13661) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L13671) | [13671](../youtube-playback-plox.user.js#L13671) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L13679) | [13679](../youtube-playback-plox.user.js#L13679) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L13687) | [13687](../youtube-playback-plox.user.js#L13687) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L13710) | [13710](../youtube-playback-plox.user.js#L13710) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L13722) | [13722](../youtube-playback-plox.user.js#L13722) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L13725) | [13725](../youtube-playback-plox.user.js#L13725) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L13735) | [13735](../youtube-playback-plox.user.js#L13735) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L13740) | [13740](../youtube-playback-plox.user.js#L13740) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L13763) | [13763](../youtube-playback-plox.user.js#L13763) |
| `fn` | [`scheduleShortsFrame`](../youtube-playback-plox.user.js#L13783) | [13783](../youtube-playback-plox.user.js#L13783) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L13792) | [13792](../youtube-playback-plox.user.js#L13792) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L13801) | [13801](../youtube-playback-plox.user.js#L13801) |
| `fn` | [`isMobileWatchDisplayFallback`](../youtube-playback-plox.user.js#L13849) | [13849](../youtube-playback-plox.user.js#L13849) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L13863) | [13863](../youtube-playback-plox.user.js#L13863) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L13971) | [13971](../youtube-playback-plox.user.js#L13971) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L14027) | [14027](../youtube-playback-plox.user.js#L14027) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L14098) | [14098](../youtube-playback-plox.user.js#L14098) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L14120) | [14120](../youtube-playback-plox.user.js#L14120) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L14134) | [14134](../youtube-playback-plox.user.js#L14134) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L14138) | [14138](../youtube-playback-plox.user.js#L14138) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L14145) | [14145](../youtube-playback-plox.user.js#L14145) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L14163) | [14163](../youtube-playback-plox.user.js#L14163) |
| `fn` | [`startShortsPanelObserver`](../youtube-playback-plox.user.js#L14177) | [14177](../youtube-playback-plox.user.js#L14177) |
| `fn` | [`stopShortsPanelObserver`](../youtube-playback-plox.user.js#L14225) | [14225](../youtube-playback-plox.user.js#L14225) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L14252)
> [Line 14252](../youtube-playback-plox.user.js#L14252)

| Type | Name | Line |
|---|---|---|
| `fn` | [`disposeToastRuntime`](../youtube-playback-plox.user.js#L14264) | [14264](../youtube-playback-plox.user.js#L14264) |
| `fn` | [`registerToastRuntime`](../youtube-playback-plox.user.js#L14292) | [14292](../youtube-playback-plox.user.js#L14292) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L14293) | [14293](../youtube-playback-plox.user.js#L14293) |
| `fn` | [`createToastContainer`](../youtube-playback-plox.user.js#L14309) | [14309](../youtube-playback-plox.user.js#L14309) |
| `fn` | [`fadeAndRemoveToast`](../youtube-playback-plox.user.js#L14342) | [14342](../youtube-playback-plox.user.js#L14342) |
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L14363) | [14363](../youtube-playback-plox.user.js#L14363) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L14387) | [14387](../youtube-playback-plox.user.js#L14387) |
| `fn` | [`showFloatingToast`](../youtube-playback-plox.user.js#L14411) | [14411](../youtube-playback-plox.user.js#L14411) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L14569)
> [Line 14569](../youtube-playback-plox.user.js#L14569)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L14572) | [14572](../youtube-playback-plox.user.js#L14572) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L14616)
> [Line 14616](../youtube-playback-plox.user.js#L14616)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L14656) | [14656](../youtube-playback-plox.user.js#L14656) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L14662) | [14662](../youtube-playback-plox.user.js#L14662) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L14670) | [14670](../youtube-playback-plox.user.js#L14670) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L14716) | [14716](../youtube-playback-plox.user.js#L14716) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L14720) | [14720](../youtube-playback-plox.user.js#L14720) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L14723) | [14723](../youtube-playback-plox.user.js#L14723) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L14739) | [14739](../youtube-playback-plox.user.js#L14739) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L14748) | [14748](../youtube-playback-plox.user.js#L14748) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L14778) | [14778](../youtube-playback-plox.user.js#L14778) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L14792) | [14792](../youtube-playback-plox.user.js#L14792) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L14796) | [14796](../youtube-playback-plox.user.js#L14796) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L14934)
> [Line 14934](../youtube-playback-plox.user.js#L14934)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSettingsUI`](../youtube-playback-plox.user.js#L14937) | [14937](../youtube-playback-plox.user.js#L14937) |
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L14968) | [14968](../youtube-playback-plox.user.js#L14968) |
| `fn` | [`onSettingsKeyDown`](../youtube-playback-plox.user.js#L14990) | [14990](../youtube-playback-plox.user.js#L14990) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L15073) | [15073](../youtube-playback-plox.user.js#L15073) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L15160) | [15160](../youtube-playback-plox.user.js#L15160) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L15161) | [15161](../youtube-playback-plox.user.js#L15161) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L15250) | [15250](../youtube-playback-plox.user.js#L15250) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L15251) | [15251](../youtube-playback-plox.user.js#L15251) |
| `fn` | [`getInnerTubeClientVersion`](../youtube-playback-plox.user.js#L15283) | [15283](../youtube-playback-plox.user.js#L15283) |
| `fn` | [`idbDiag`](../youtube-playback-plox.user.js#L15312) | [15312](../youtube-playback-plox.user.js#L15312) |
| `fn` | [`safeModeActive`](../youtube-playback-plox.user.js#L15330) | [15330](../youtube-playback-plox.user.js#L15330) |
| `fn` | [`activeSessions`](../youtube-playback-plox.user.js#L15331) | [15331](../youtube-playback-plox.user.js#L15331) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L15445)
> [Line 15445](../youtube-playback-plox.user.js#L15445)

| Type | Name | Line |
|---|---|---|
| `fn` | [`notifySeekOrProgress`](../youtube-playback-plox.user.js#L15447) | [15447](../youtube-playback-plox.user.js#L15447) |

## [🎵 Video Selection](../youtube-playback-plox.user.js#L15503)
> [Line 15503](../youtube-playback-plox.user.js#L15503)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleManagementMode`](../youtube-playback-plox.user.js#L15518) | [15518](../youtube-playback-plox.user.js#L15518) |
| `fn` | [`buildSkipParts`](../youtube-playback-plox.user.js#L15537) | [15537](../youtube-playback-plox.user.js#L15537) |
| `fn` | [`updateFooterButtons`](../youtube-playback-plox.user.js#L15551) | [15551](../youtube-playback-plox.user.js#L15551) |
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L15628) | [15628](../youtube-playback-plox.user.js#L15628) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L15635) | [15635](../youtube-playback-plox.user.js#L15635) |
| `fn` | [`createFooterActionMenu`](../youtube-playback-plox.user.js#L15677) | [15677](../youtube-playback-plox.user.js#L15677) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L15707) | [15707](../youtube-playback-plox.user.js#L15707) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L15711) | [15711](../youtube-playback-plox.user.js#L15711) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L15720) | [15720](../youtube-playback-plox.user.js#L15720) |
| `fn` | [`closeImportMenu`](../youtube-playback-plox.user.js#L15816) | [15816](../youtube-playback-plox.user.js#L15816) |
| `fn` | [`onImportOutsideClick`](../youtube-playback-plox.user.js#L15825) | [15825](../youtube-playback-plox.user.js#L15825) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L16227) | [16227](../youtube-playback-plox.user.js#L16227) |
| `fn` | [`updateManagementFooterState`](../youtube-playback-plox.user.js#L16289) | [16289](../youtube-playback-plox.user.js#L16289) |
| `fn` | [`togglePlaylistCreationMode`](../youtube-playback-plox.user.js#L16319) | [16319](../youtube-playback-plox.user.js#L16319) |
| `fn` | [`copyToClipboard`](../youtube-playback-plox.user.js#L16338) | [16338](../youtube-playback-plox.user.js#L16338) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L16351) | [16351](../youtube-playback-plox.user.js#L16351) |
| `fn` | [`syncSelectionCheckboxes`](../youtube-playback-plox.user.js#L16432) | [16432](../youtube-playback-plox.user.js#L16432) |
| `fn` | [`createClearSelectionButton`](../youtube-playback-plox.user.js#L16445) | [16445](../youtube-playback-plox.user.js#L16445) |
| `fn` | [`toggleVideoSelection`](../youtube-playback-plox.user.js#L16463) | [16463](../youtube-playback-plox.user.js#L16463) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L16495)
> [Line 16495](../youtube-playback-plox.user.js#L16495)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L16501) | [16501](../youtube-playback-plox.user.js#L16501) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L16501) | [16501](../youtube-playback-plox.user.js#L16501) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L16502) | [16502](../youtube-playback-plox.user.js#L16502) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L16511) | [16511](../youtube-playback-plox.user.js#L16511) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L16524) | [16524](../youtube-playback-plox.user.js#L16524) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L16535) | [16535](../youtube-playback-plox.user.js#L16535) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L16552) | [16552](../youtube-playback-plox.user.js#L16552) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L16586) | [16586](../youtube-playback-plox.user.js#L16586) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L16611) | [16611](../youtube-playback-plox.user.js#L16611) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L16613) | [16613](../youtube-playback-plox.user.js#L16613) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L16632) | [16632](../youtube-playback-plox.user.js#L16632) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L16632) | [16632](../youtube-playback-plox.user.js#L16632) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L16634) | [16634](../youtube-playback-plox.user.js#L16634) |
| `fn` | [`logRoutingDecision`](../youtube-playback-plox.user.js#L16658) | [16658](../youtube-playback-plox.user.js#L16658) |
| `fn` | [`shouldDropVideoEvent`](../youtube-playback-plox.user.js#L16667) | [16667](../youtube-playback-plox.user.js#L16667) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L16676) | [16676](../youtube-playback-plox.user.js#L16676) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L16676) | [16676](../youtube-playback-plox.user.js#L16676) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L16687) | [16687](../youtube-playback-plox.user.js#L16687) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L16692) | [16692](../youtube-playback-plox.user.js#L16692) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L16697) | [16697](../youtube-playback-plox.user.js#L16697) |
| `fn` | [`note`](../youtube-playback-plox.user.js#L16717) | [16717](../youtube-playback-plox.user.js#L16717) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L16721) | [16721](../youtube-playback-plox.user.js#L16721) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L16739) | [16739](../youtube-playback-plox.user.js#L16739) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L16739) | [16739](../youtube-playback-plox.user.js#L16739) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L16741) | [16741](../youtube-playback-plox.user.js#L16741) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L16749) | [16749](../youtube-playback-plox.user.js#L16749) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L16799)
> [Line 16799](../youtube-playback-plox.user.js#L16799)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L16812) | [16812](../youtube-playback-plox.user.js#L16812) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L16812) | [16812](../youtube-playback-plox.user.js#L16812) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L16834) | [16834](../youtube-playback-plox.user.js#L16834) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L16854) | [16854](../youtube-playback-plox.user.js#L16854) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L16880) | [16880](../youtube-playback-plox.user.js#L16880) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L16927) | [16927](../youtube-playback-plox.user.js#L16927) |
| `fn` | [`clearWatchPlayerWait`](../youtube-playback-plox.user.js#L16957) | [16957](../youtube-playback-plox.user.js#L16957) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L16979) | [16979](../youtube-playback-plox.user.js#L16979) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L16999) | [16999](../youtube-playback-plox.user.js#L16999) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L17055) | [17055](../youtube-playback-plox.user.js#L17055) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L17123) | [17123](../youtube-playback-plox.user.js#L17123) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L17133) | [17133](../youtube-playback-plox.user.js#L17133) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L17144) | [17144](../youtube-playback-plox.user.js#L17144) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L17176) | [17176](../youtube-playback-plox.user.js#L17176) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L17224) | [17224](../youtube-playback-plox.user.js#L17224) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L17235) | [17235](../youtube-playback-plox.user.js#L17235) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L17259) | [17259](../youtube-playback-plox.user.js#L17259) |
| `fn` | [`clearPlayerCache`](../youtube-playback-plox.user.js#L17385) | [17385](../youtube-playback-plox.user.js#L17385) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L17607) | [17607](../youtube-playback-plox.user.js#L17607) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L17648) | [17648](../youtube-playback-plox.user.js#L17648) |

## [Processing Functions](../youtube-playback-plox.user.js#L17678)
> [Line 17678](../youtube-playback-plox.user.js#L17678)

| Type | Name | Line |
|---|---|---|
| `fn` | [`isSessionStale`](../youtube-playback-plox.user.js#L17695) | [17695](../youtube-playback-plox.user.js#L17695) |
| `fn` | [`scheduleIdMismatchRetry`](../youtube-playback-plox.user.js#L17721) | [17721](../youtube-playback-plox.user.js#L17721) |
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L17765) | [17765](../youtube-playback-plox.user.js#L17765) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L17792) | [17792](../youtube-playback-plox.user.js#L17792) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L17802) | [17802](../youtube-playback-plox.user.js#L17802) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L17802) | [17802](../youtube-playback-plox.user.js#L17802) |
| `fn` | [`clearPendingRecovery`](../youtube-playback-plox.user.js#L17822) | [17822](../youtube-playback-plox.user.js#L17822) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L17827) | [17827](../youtube-playback-plox.user.js#L17827) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L17832) | [17832](../youtube-playback-plox.user.js#L17832) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L17839) | [17839](../youtube-playback-plox.user.js#L17839) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L17845) | [17845](../youtube-playback-plox.user.js#L17845) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L17863) | [17863](../youtube-playback-plox.user.js#L17863) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L17961) | [17961](../youtube-playback-plox.user.js#L17961) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L18025) | [18025](../youtube-playback-plox.user.js#L18025) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L18071) | [18071](../youtube-playback-plox.user.js#L18071) |
| `fn` | [`isAwaitingFirstPlayback`](../youtube-playback-plox.user.js#L18103) | [18103](../youtube-playback-plox.user.js#L18103) |
| `fn` | [`isProgressInCompletionZone`](../youtube-playback-plox.user.js#L18122) | [18122](../youtube-playback-plox.user.js#L18122) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L18126) | [18126](../youtube-playback-plox.user.js#L18126) |
| `fn` | [`isPlayerReportingEnd`](../youtube-playback-plox.user.js#L18139) | [18139](../youtube-playback-plox.user.js#L18139) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L18156) | [18156](../youtube-playback-plox.user.js#L18156) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L18167) | [18167](../youtube-playback-plox.user.js#L18167) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L18179) | [18179](../youtube-playback-plox.user.js#L18179) |
| `fn` | [`absorbSaveResult`](../youtube-playback-plox.user.js#L18212) | [18212](../youtube-playback-plox.user.js#L18212) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L18226) | [18226](../youtube-playback-plox.user.js#L18226) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L18301) | [18301](../youtube-playback-plox.user.js#L18301) |
| `fn` | [`handleNaturalEnd`](../youtube-playback-plox.user.js#L18326) | [18326](../youtube-playback-plox.user.js#L18326) |
| `fn` | [`persistCompletion`](../youtube-playback-plox.user.js#L18335) | [18335](../youtube-playback-plox.user.js#L18335) |
| `fn` | [`handleSeekingForGradient`](../youtube-playback-plox.user.js#L18366) | [18366](../youtube-playback-plox.user.js#L18366) |
| `fn` | [`handleSeekedForGradient`](../youtube-playback-plox.user.js#L18376) | [18376](../youtube-playback-plox.user.js#L18376) |
| `fn` | [`canValidateStandalone`](../youtube-playback-plox.user.js#L18515) | [18515](../youtube-playback-plox.user.js#L18515) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L18540) | [18540](../youtube-playback-plox.user.js#L18540) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L18669) | [18669](../youtube-playback-plox.user.js#L18669) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L18868) | [18868](../youtube-playback-plox.user.js#L18868) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L18981) | [18981](../youtube-playback-plox.user.js#L18981) |
| `fn` | [`processMediaVideo`](../youtube-playback-plox.user.js#L19096) | [19096](../youtube-playback-plox.user.js#L19096) |

## [PlaybackController](../youtube-playback-plox.user.js#L19151)
> [Line 19151](../youtube-playback-plox.user.js#L19151)

| Type | Name | Line |
|---|---|---|
| `fn` | [`mapLiveAbsoluteToWindow`](../youtube-playback-plox.user.js#L19166) | [19166](../youtube-playback-plox.user.js#L19166) |
| `fn` | [`applySeek`](../youtube-playback-plox.user.js#L19192) | [19192](../youtube-playback-plox.user.js#L19192) |
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L19247) | [19247](../youtube-playback-plox.user.js#L19247) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L19264) | [19264](../youtube-playback-plox.user.js#L19264) |
| `fn` | [`removeMetadataListener`](../youtube-playback-plox.user.js#L19288) | [19288](../youtube-playback-plox.user.js#L19288) |
| `fn` | [`removeCanPlayListener`](../youtube-playback-plox.user.js#L19289) | [19289](../youtube-playback-plox.user.js#L19289) |
| `fn` | [`removeAbortListener`](../youtube-playback-plox.user.js#L19290) | [19290](../youtube-playback-plox.user.js#L19290) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L19291) | [19291](../youtube-playback-plox.user.js#L19291) |
| `fn` | [`rejectAsStale`](../youtube-playback-plox.user.js#L19297) | [19297](../youtube-playback-plox.user.js#L19297) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L19301) | [19301](../youtube-playback-plox.user.js#L19301) |
| `fn` | [`onAbort`](../youtube-playback-plox.user.js#L19310) | [19310](../youtube-playback-plox.user.js#L19310) |
| `fn` | [`restoreThrottleMarker`](../youtube-playback-plox.user.js#L19527) | [19527](../youtube-playback-plox.user.js#L19527) |
| `fn` | [`readApiNumber`](../youtube-playback-plox.user.js#L19542) | [19542](../youtube-playback-plox.user.js#L19542) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L19697) | [19697](../youtube-playback-plox.user.js#L19697) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L19845)
> [Line 19845](../youtube-playback-plox.user.js#L19845)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getInnerTubeConfig`](../youtube-playback-plox.user.js#L19882) | [19882](../youtube-playback-plox.user.js#L19882) |
| `fn` | [`fetchInnerTubeJson`](../youtube-playback-plox.user.js#L19897) | [19897](../youtube-playback-plox.user.js#L19897) |
| `fn` | [`fetchShortsViews`](../youtube-playback-plox.user.js#L19931) | [19931](../youtube-playback-plox.user.js#L19931) |
| `fn` | [`fetchPlaylistTitle`](../youtube-playback-plox.user.js#L19944) | [19944](../youtube-playback-plox.user.js#L19944) |
| `fn` | [`getCascadedVideoInfo`](../youtube-playback-plox.user.js#L19954) | [19954](../youtube-playback-plox.user.js#L19954) |
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L19999) | [19999](../youtube-playback-plox.user.js#L19999) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L20383)
> [Line 20383](../youtube-playback-plox.user.js#L20383)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createCustomDropdown`](../youtube-playback-plox.user.js#L20401) | [20401](../youtube-playback-plox.user.js#L20401) |
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L20412) | [20412](../youtube-playback-plox.user.js#L20412) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L20488) | [20488](../youtube-playback-plox.user.js#L20488) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L20504) | [20504](../youtube-playback-plox.user.js#L20504) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L20512) | [20512](../youtube-playback-plox.user.js#L20512) |
| `fn` | [`createSortSelector`](../youtube-playback-plox.user.js#L20529) | [20529](../youtube-playback-plox.user.js#L20529) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L20532) | [20532](../youtube-playback-plox.user.js#L20532) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L20585)
> [Line 20585](../youtube-playback-plox.user.js#L20585)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFilterSelector`](../youtube-playback-plox.user.js#L20594) | [20594](../youtube-playback-plox.user.js#L20594) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L20597) | [20597](../youtube-playback-plox.user.js#L20597) |
| `fn` | [`createRangeFilter`](../youtube-playback-plox.user.js#L20642) | [20642](../youtube-playback-plox.user.js#L20642) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L20645) | [20645](../youtube-playback-plox.user.js#L20645) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L20651) | [20651](../youtube-playback-plox.user.js#L20651) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L20672) | [20672](../youtube-playback-plox.user.js#L20672) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L20793) | [20793](../youtube-playback-plox.user.js#L20793) |
| `fn` | [`createSearchInput`](../youtube-playback-plox.user.js#L20848) | [20848](../youtube-playback-plox.user.js#L20848) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L20873)
> [Line 20873](../youtube-playback-plox.user.js#L20873)

| Type | Name | Line |
|---|---|---|
| `fn` | [`acquireBodyOverflow`](../youtube-playback-plox.user.js#L20901) | [20901](../youtube-playback-plox.user.js#L20901) |
| `fn` | [`releaseBodyOverflow`](../youtube-playback-plox.user.js#L20915) | [20915](../youtube-playback-plox.user.js#L20915) |
| `fn` | [`getVirtualScrollerVideoItems`](../youtube-playback-plox.user.js#L20981) | [20981](../youtube-playback-plox.user.js#L20981) |
| `fn` | [`batchLoadStorageData`](../youtube-playback-plox.user.js#L21010) | [21010](../youtube-playback-plox.user.js#L21010) |

## [📁 Update Video List](../youtube-playback-plox.user.js#L21051)
> [Line 21051](../youtube-playback-plox.user.js#L21051)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSortValue`](../youtube-playback-plox.user.js#L21058) | [21058](../youtube-playback-plox.user.js#L21058) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L21070) | [21070](../youtube-playback-plox.user.js#L21070) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L21074) | [21074](../youtube-playback-plox.user.js#L21074) |
| `fn` | [`showLoadingState`](../youtube-playback-plox.user.js#L21091) | [21091](../youtube-playback-plox.user.js#L21091) |
| `fn` | [`loadVideoItems`](../youtube-playback-plox.user.js#L21154) | [21154](../youtube-playback-plox.user.js#L21154) |
| `fn` | [`resolvePlaylistTitles`](../youtube-playback-plox.user.js#L21178) | [21178](../youtube-playback-plox.user.js#L21178) |
| `fn` | [`filterItems`](../youtube-playback-plox.user.js#L21210) | [21210](../youtube-playback-plox.user.js#L21210) |
| `fn` | [`buildVirtualItems`](../youtube-playback-plox.user.js#L21254) | [21254](../youtube-playback-plox.user.js#L21254) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L21266) | [21266](../youtube-playback-plox.user.js#L21266) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L21287) | [21287](../youtube-playback-plox.user.js#L21287) |
| `fn` | [`showEmptyState`](../youtube-playback-plox.user.js#L21317) | [21317](../youtube-playback-plox.user.js#L21317) |
| `fn` | [`showListLoadErrorState`](../youtube-playback-plox.user.js#L21350) | [21350](../youtube-playback-plox.user.js#L21350) |
| `fn` | [`updateVirtualScroller`](../youtube-playback-plox.user.js#L21371) | [21371](../youtube-playback-plox.user.js#L21371) |
| `fn` | [`initVirtualScroller`](../youtube-playback-plox.user.js#L21401) | [21401](../youtube-playback-plox.user.js#L21401) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L21447) | [21447](../youtube-playback-plox.user.js#L21447) |
| `fn` | [`resolveGridCols`](../youtube-playback-plox.user.js#L21522) | [21522](../youtube-playback-plox.user.js#L21522) |
| `fn` | [`destroyVirtualScroller`](../youtube-playback-plox.user.js#L21535) | [21535](../youtube-playback-plox.user.js#L21535) |
| `fn` | [`disconnectVirtualScrollerObserver`](../youtube-playback-plox.user.js#L21549) | [21549](../youtube-playback-plox.user.js#L21549) |
| `fn` | [`connectResizeObserver`](../youtube-playback-plox.user.js#L21564) | [21564](../youtube-playback-plox.user.js#L21564) |
| `fn` | [`updateVideoList`](../youtube-playback-plox.user.js#L21597) | [21597](../youtube-playback-plox.user.js#L21597) |
| `fn` | [`isCurrentRender`](../youtube-playback-plox.user.js#L21602) | [21602](../youtube-playback-plox.user.js#L21602) |
| `fn` | [`requestVideoListUpdate`](../youtube-playback-plox.user.js#L21688) | [21688](../youtube-playback-plox.user.js#L21688) |
| `fn` | [`closeModalVideos`](../youtube-playback-plox.user.js#L21699) | [21699](../youtube-playback-plox.user.js#L21699) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L21779) | [21779](../youtube-playback-plox.user.js#L21779) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L21796) | [21796](../youtube-playback-plox.user.js#L21796) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L21824) | [21824](../youtube-playback-plox.user.js#L21824) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L21959)
> [Line 21959](../youtube-playback-plox.user.js#L21959)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L21962) | [21962](../youtube-playback-plox.user.js#L21962) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L21977) | [21977](../youtube-playback-plox.user.js#L21977) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L21988)
> [Line 21988](../youtube-playback-plox.user.js#L21988)

| Type | Name | Line |
|---|---|---|
| `fn` | [`showSavedVideosList`](../youtube-playback-plox.user.js#L21991) | [21991](../youtube-playback-plox.user.js#L21991) |
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L22129) | [22129](../youtube-playback-plox.user.js#L22129) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L22139) | [22139](../youtube-playback-plox.user.js#L22139) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L22209) | [22209](../youtube-playback-plox.user.js#L22209) |
| `fn` | [`onSavedVideosKeyDown`](../youtube-playback-plox.user.js#L22218) | [22218](../youtube-playback-plox.user.js#L22218) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L22249)
> [Line 22249](../youtube-playback-plox.user.js#L22249)

| Type | Name | Line |
|---|---|---|
| `fn` | [`pickPlaylistVariant`](../youtube-playback-plox.user.js#L22258) | [22258](../youtube-playback-plox.user.js#L22258) |
| `fn` | [`generatePlaylistColor`](../youtube-playback-plox.user.js#L22285) | [22285](../youtube-playback-plox.user.js#L22285) |
| `fn` | [`generatePlaylistBorderColor`](../youtube-playback-plox.user.js#L22298) | [22298](../youtube-playback-plox.user.js#L22298) |
| `fn` | [`handleForceTimeAction`](../youtube-playback-plox.user.js#L22302) | [22302](../youtube-playback-plox.user.js#L22302) |
| `fn` | [`handleUnlinkPlaylistAction`](../youtube-playback-plox.user.js#L22368) | [22368](../youtube-playback-plox.user.js#L22368) |
| `fn` | [`handleDeleteEntryAction`](../youtube-playback-plox.user.js#L22390) | [22390](../youtube-playback-plox.user.js#L22390) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L22423) | [22423](../youtube-playback-plox.user.js#L22423) |
| `fn` | [`handleToggleProtectionAction`](../youtube-playback-plox.user.js#L22452) | [22452](../youtube-playback-plox.user.js#L22452) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L22493) | [22493](../youtube-playback-plox.user.js#L22493) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L22541) | [22541](../youtube-playback-plox.user.js#L22541) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L22547) | [22547](../youtube-playback-plox.user.js#L22547) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L22566) | [22566](../youtube-playback-plox.user.js#L22566) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L22600) | [22600](../youtube-playback-plox.user.js#L22600) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L22652) | [22652](../youtube-playback-plox.user.js#L22652) |
| `fn` | [`entryButtonsShown`](../youtube-playback-plox.user.js#L22667) | [22667](../youtube-playback-plox.user.js#L22667) |
| `fn` | [`generateVideoObsidianMarkdown`](../youtube-playback-plox.user.js#L22708) | [22708](../youtube-playback-plox.user.js#L22708) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L22741) | [22741](../youtube-playback-plox.user.js#L22741) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L22747) | [22747](../youtube-playback-plox.user.js#L22747) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L22763) | [22763](../youtube-playback-plox.user.js#L22763) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L22773) | [22773](../youtube-playback-plox.user.js#L22773) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L22781) | [22781](../youtube-playback-plox.user.js#L22781) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L22786) | [22786](../youtube-playback-plox.user.js#L22786) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L22793) | [22793](../youtube-playback-plox.user.js#L22793) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L22796) | [22796](../youtube-playback-plox.user.js#L22796) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L22800) | [22800](../youtube-playback-plox.user.js#L22800) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L22846) | [22846](../youtube-playback-plox.user.js#L22846) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L22846) | [22846](../youtube-playback-plox.user.js#L22846) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L22860) | [22860](../youtube-playback-plox.user.js#L22860) |
| `fn` | [`createModeSelector`](../youtube-playback-plox.user.js#L23134) | [23134](../youtube-playback-plox.user.js#L23134) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L23135) | [23135](../youtube-playback-plox.user.js#L23135) |
| `fn` | [`createViewModeSelector`](../youtube-playback-plox.user.js#L23167) | [23167](../youtube-playback-plox.user.js#L23167) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L23184) | [23184](../youtube-playback-plox.user.js#L23184) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L23185) | [23185](../youtube-playback-plox.user.js#L23185) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L23201) | [23201](../youtube-playback-plox.user.js#L23201) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L23202) | [23202](../youtube-playback-plox.user.js#L23202) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L23251) | [23251](../youtube-playback-plox.user.js#L23251) |
| `fn` | [`createOverflowToggle`](../youtube-playback-plox.user.js#L23282) | [23282](../youtube-playback-plox.user.js#L23282) |
| `fn` | [`makeToolbarGroup`](../youtube-playback-plox.user.js#L23321) | [23321](../youtube-playback-plox.user.js#L23321) |
| `fn` | [`makeDisplayToggle`](../youtube-playback-plox.user.js#L23343) | [23343](../youtube-playback-plox.user.js#L23343) |
| `fn` | [`mountSavedVideosModalActionsToolbar`](../youtube-playback-plox.user.js#L23377) | [23377](../youtube-playback-plox.user.js#L23377) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L23400) | [23400](../youtube-playback-plox.user.js#L23400) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L23414) | [23414](../youtube-playback-plox.user.js#L23414) |
| `fn` | [`makeModeRow`](../youtube-playback-plox.user.js#L23560) | [23560](../youtube-playback-plox.user.js#L23560) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L23710) | [23710](../youtube-playback-plox.user.js#L23710) |
| `fn` | [`applyThumbnailToImage`](../youtube-playback-plox.user.js#L23766) | [23766](../youtube-playback-plox.user.js#L23766) |
| `fn` | [`removeLoadListener`](../youtube-playback-plox.user.js#L23775) | [23775](../youtube-playback-plox.user.js#L23775) |
| `fn` | [`removeErrorListener`](../youtube-playback-plox.user.js#L23776) | [23776](../youtube-playback-plox.user.js#L23776) |
| `fn` | [`finish`](../youtube-playback-plox.user.js#L23782) | [23782](../youtube-playback-plox.user.js#L23782) |
| `fn` | [`loadCandidate`](../youtube-playback-plox.user.js#L23797) | [23797](../youtube-playback-plox.user.js#L23797) |
| `fn` | [`createVideoGridRow`](../youtube-playback-plox.user.js#L23832) | [23832](../youtube-playback-plox.user.js#L23832) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L23849) | [23849](../youtube-playback-plox.user.js#L23849) |
| `fn` | [`scheduleHeightUpdate`](../youtube-playback-plox.user.js#L23898) | [23898](../youtube-playback-plox.user.js#L23898) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L23945) | [23945](../youtube-playback-plox.user.js#L23945) |
| `fn` | [`createVideoEntry`](../youtube-playback-plox.user.js#L23959) | [23959](../youtube-playback-plox.user.js#L23959) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L24188) | [24188](../youtube-playback-plox.user.js#L24188) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L24211) | [24211](../youtube-playback-plox.user.js#L24211) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L24212) | [24212](../youtube-playback-plox.user.js#L24212) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L24270)
> [Line 24270](../youtube-playback-plox.user.js#L24270)

| Type | Name | Line |
|---|---|---|
| `fn` | [`restoreDeletedRecordIfUnchanged`](../youtube-playback-plox.user.js#L24289) | [24289](../youtube-playback-plox.user.js#L24289) |
| `fn` | [`canCommit`](../youtube-playback-plox.user.js#L24290) | [24290](../youtube-playback-plox.user.js#L24290) |
| `fn` | [`clearAllData`](../youtube-playback-plox.user.js#L24319) | [24319](../youtube-playback-plox.user.js#L24319) |
| `fn` | [`clearCommitGuard`](../youtube-playback-plox.user.js#L24334) | [24334](../youtube-playback-plox.user.js#L24334) |
| `fn` | [`performClearAllData`](../youtube-playback-plox.user.js#L24354) | [24354](../youtube-playback-plox.user.js#L24354) |
| `fn` | [`undoClearAll`](../youtube-playback-plox.user.js#L24538) | [24538](../youtube-playback-plox.user.js#L24538) |
| `fn` | [`undoCommitGuard`](../youtube-playback-plox.user.js#L24541) | [24541](../youtube-playback-plox.user.js#L24541) |
| `fn` | [`performUndoClearAll`](../youtube-playback-plox.user.js#L24554) | [24554](../youtube-playback-plox.user.js#L24554) |

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L24622)
> [Line 24622](../youtube-playback-plox.user.js#L24622)

| Type | Name | Line |
|---|---|---|
| `fn` | [`registerOwnedMenuCommand`](../youtube-playback-plox.user.js#L24631) | [24631](../youtube-playback-plox.user.js#L24631) |
| `fn` | [`unregisterOwnedMenuCommands`](../youtube-playback-plox.user.js#L24641) | [24641](../youtube-playback-plox.user.js#L24641) |
| `fn` | [`registerMenuCommands`](../youtube-playback-plox.user.js#L24654) | [24654](../youtube-playback-plox.user.js#L24654) |

## [🔄 Data Migration](../youtube-playback-plox.user.js#L24680)
> [Line 24680](../youtube-playback-plox.user.js#L24680)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeVideoType`](../youtube-playback-plox.user.js#L24689) | [24689](../youtube-playback-plox.user.js#L24689) |
| `fn` | [`cleanupNonVideoData`](../youtube-playback-plox.user.js#L24711) | [24711](../youtube-playback-plox.user.js#L24711) |
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L24738) | [24738](../youtube-playback-plox.user.js#L24738) |
| `fn` | [`runAutoCleanup`](../youtube-playback-plox.user.js#L24959) | [24959](../youtube-playback-plox.user.js#L24959) |
| `fn` | [`cleanupCommitGuard`](../youtube-playback-plox.user.js#L24979) | [24979](../youtube-playback-plox.user.js#L24979) |

## [🚀 Init](../youtube-playback-plox.user.js#L25183)
> [Line 25183](../youtube-playback-plox.user.js#L25183)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L25196) | [25196](../youtube-playback-plox.user.js#L25196) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L25220) | [25220](../youtube-playback-plox.user.js#L25220) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L25628) | [25628](../youtube-playback-plox.user.js#L25628) |

