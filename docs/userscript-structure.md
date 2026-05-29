# Userscript Structure
> Auto-generated on 2026-05-29 · version 0.0.11
> **DO NOT EDIT MANUALLY** - regenerate with `node ./scripts/generate-structure.mjs`

---

## Sections index

1. [🔍 Logger System](#logger-system) - [line 138](../youtube-playback-plox.user.js#L138)
2. [🛡️ Initialization Guard (SPA Safety)](#initialization-guard-spa-safety) - [line 229](../youtube-playback-plox.user.js#L229)
3. [📦 Config](#config) - [line 299](../youtube-playback-plox.user.js#L299)
4. [📊 Global Constants](#global-constants) - [line 427](../youtube-playback-plox.user.js#L427)
5. [📊 Global Variables](#global-variables) - [line 464](../youtube-playback-plox.user.js#L464)
6. [🌐 Translations](#translations) - [line 500](../youtube-playback-plox.user.js#L500)
7. [🔧 Utils](#utils) - [line 933](../youtube-playback-plox.user.js#L933)
8. [🔧 Sanitize HTML](#sanitize-html) - [line 936](../youtube-playback-plox.user.js#L936)
9. [🔧 Is Visibly Displayed](#is-visibly-displayed) - [line 1004](../youtube-playback-plox.user.js#L1004)
10. [🔧 Format Time](#format-time) - [line 1028](../youtube-playback-plox.user.js#L1028)
11. [🔧 parseTimeToSeconds](#parsetimetoseconds) - [line 1123](../youtube-playback-plox.user.js#L1123)
12. [🔧 normalizeSeconds](#normalizeseconds) - [line 1171](../youtube-playback-plox.user.js#L1171)
13. [⏳ delay](#delay) - [line 1197](../youtube-playback-plox.user.js#L1197)
14. [🔧 setInnerHTML](#setinnerhtml) - [line 1205](../youtube-playback-plox.user.js#L1205)
15. [🔧 Create Element](#create-element) - [line 1267](../youtube-playback-plox.user.js#L1267)
16. [🔧 Debounce](#debounce) - [line 1404](../youtube-playback-plox.user.js#L1404)
17. [🗄️ Event Handlers store](#event-handlers-store) - [line 1429](../youtube-playback-plox.user.js#L1429)
18. [📝 Selector System](#selector-system) - [line 1512](../youtube-playback-plox.user.js#L1512)
19. [💾 Simple LRU Cache](#simple-lru-cache) - [line 1847](../youtube-playback-plox.user.js#L1847)
20. [⚙️ DOM Cache System](#dom-cache-system) - [line 1905](../youtube-playback-plox.user.js#L1905)
21. [🌐 Translation Functions](#translation-functions) - [line 2247](../youtube-playback-plox.user.js#L2247)
22. [🎨 Styles](#styles) - [line 2413](../youtube-playback-plox.user.js#L2413)
23. [🎨 Theme](#theme) - [line 4985](../youtube-playback-plox.user.js#L4985)
24. [🎨 SVG Icons](#svg-icons) - [line 5063](../youtube-playback-plox.user.js#L5063)
25. [🎨 Progress Bar Style](#progress-bar-style) - [line 5225](../youtube-playback-plox.user.js#L5225)
26. [💾 Storage + Settings](#storage-settings) - [line 5732](../youtube-playback-plox.user.js#L5732)
27. [📢 Ad Caches](#ad-caches) - [line 6338](../youtube-playback-plox.user.js#L6338)
28. [📢 Ad Detector](#ad-detector) - [line 6358](../youtube-playback-plox.user.js#L6358)
29. [🎯 VirtualScroller](#virtualscroller) - [line 6533](../youtube-playback-plox.user.js#L6533)
30. [📤 Import/Export JSON](#importexport-json) - [line 6944](../youtube-playback-plox.user.js#L6944)
31. [☁️ GitHub Backup](#github-backup) - [line 7098](../youtube-playback-plox.user.js#L7098)
32. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 7468](../youtube-playback-plox.user.js#L7468)
33. [🔄 Normalize Video Data](#normalize-video-data) - [line 7670](../youtube-playback-plox.user.js#L7670)
34. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 7752](../youtube-playback-plox.user.js#L7752)
35. [Parse FreeTube DB](#parse-freetube-db) - [line 7843](../youtube-playback-plox.user.js#L7843)
36. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 7922](../youtube-playback-plox.user.js#L7922)
37. [⬆ Export To FreeTube](#export-to-freetube) - [line 7953](../youtube-playback-plox.user.js#L7953)
38. [⬇ Import From FreeTube](#import-from-freetube) - [line 8000](../youtube-playback-plox.user.js#L8000)
39. [🔄 Insert Completion Event](#insert-completion-event) - [line 8058](../youtube-playback-plox.user.js#L8058)
40. [💾 Save Video Generic](#save-video-generic) - [line 8119](../youtube-playback-plox.user.js#L8119)
41. [📺 Helpers](#helpers) - [line 8294](../youtube-playback-plox.user.js#L8294)
42. [📺 Gets saved video data](#gets-saved-video-data) - [line 8297](../youtube-playback-plox.user.js#L8297)
43. [📺 Get Player Video ID](#get-player-video-id) - [line 8348](../youtube-playback-plox.user.js#L8348)
44. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 8427](../youtube-playback-plox.user.js#L8427)
45. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 8628](../youtube-playback-plox.user.js#L8628)
46. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 8834](../youtube-playback-plox.user.js#L8834)
47. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 8856](../youtube-playback-plox.user.js#L8856)
48. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 8884](../youtube-playback-plox.user.js#L8884)
49. [📺 get Playlist Name](#get-playlist-name) - [line 8929](../youtube-playback-plox.user.js#L8929)
50. [🕒 Time Display](#time-display) - [line 9204](../youtube-playback-plox.user.js#L9204)
51. [🖼️ Display Button Helpers](#display-button-helpers) - [line 9240](../youtube-playback-plox.user.js#L9240)
52. [🍞 Toasts](#toasts) - [line 10019](../youtube-playback-plox.user.js#L10019)
53. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 10195](../youtube-playback-plox.user.js#L10195)
54. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 10238](../youtube-playback-plox.user.js#L10238)
55. [⚙️ Settings UI](#settings-ui) - [line 10555](../youtube-playback-plox.user.js#L10555)
56. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 10950](../youtube-playback-plox.user.js#L10950)
57. [🎵 Video Selection](#video-selection) - [line 11008](../youtube-playback-plox.user.js#L11008)
58. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 11710](../youtube-playback-plox.user.js#L11710)
59. [📡 Video Observer Manager](#video-observer-manager) - [line 11972](../youtube-playback-plox.user.js#L11972)
60. [Processing Functions](#processing-functions) - [line 12751](../youtube-playback-plox.user.js#L12751)
61. [PlaybackController](#playbackcontroller) - [line 13784](../youtube-playback-plox.user.js#L13784)
62. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 14206](../youtube-playback-plox.user.js#L14206)
63. [📂 Sort UI](#sort-ui) - [line 14738](../youtube-playback-plox.user.js#L14738)
64. [📂 Filters UI](#filters-ui) - [line 14927](../youtube-playback-plox.user.js#L14927)
65. [📂 Video List UI](#video-list-ui) - [line 15213](../youtube-playback-plox.user.js#L15213)
66. [📁 Update Video List](#update-video-list) - [line 15336](../youtube-playback-plox.user.js#L15336)
67. [🔘 Floating Button](#floating-button) - [line 16121](../youtube-playback-plox.user.js#L16121)
68. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 16149](../youtube-playback-plox.user.js#L16149)
69. [📂 Video Entry](#video-entry) - [line 16373](../youtube-playback-plox.user.js#L16373)
70. [🗑️ Clear All Data](#clear-all-data) - [line 18300](../youtube-playback-plox.user.js#L18300)
71. [⚙️ Menu Commands](#menu-commands) - [line 18452](../youtube-playback-plox.user.js#L18452)
72. [🔄 Data Migration](#data-migration) - [line 18479](../youtube-playback-plox.user.js#L18479)
73. [🚀 Init](#init) - [line 18875](../youtube-playback-plox.user.js#L18875)

---

## [🔍 Logger System](../youtube-playback-plox.user.js#L138)
> [Line 138](../youtube-playback-plox.user.js#L138)

| Type | Name | Line |
|---|---|---|
| `fn` | [`noop`](../youtube-playback-plox.user.js#L150) | [150](../youtube-playback-plox.user.js#L150) |
| `fn` | [`resolveArgs`](../youtube-playback-plox.user.js#L152) | [152](../youtube-playback-plox.user.js#L152) |
| `fn` | [`build`](../youtube-playback-plox.user.js#L154) | [154](../youtube-playback-plox.user.js#L154) |
| `fn` | [`msg`](../youtube-playback-plox.user.js#L198) | [198](../youtube-playback-plox.user.js#L198) |

## [🛡️ Initialization Guard (SPA Safety)](../youtube-playback-plox.user.js#L229)
> [Line 229](../youtube-playback-plox.user.js#L229)

_No relevant functions or constants detected._

## [📦 Config](../youtube-playback-plox.user.js#L299)
> [Line 299](../youtube-playback-plox.user.js#L299)

_No relevant functions or constants detected._

## [📊 Global Constants](../youtube-playback-plox.user.js#L427)
> [Line 427](../youtube-playback-plox.user.js#L427)

| Type | Name | Line |
|---|---|---|
| `module` | [`TYPE_CONFIG`](../youtube-playback-plox.user.js#L438) | [438](../youtube-playback-plox.user.js#L438) |

## [📊 Global Variables](../youtube-playback-plox.user.js#L464)
> [Line 464](../youtube-playback-plox.user.js#L464)

_No relevant functions or constants detected._

## [🌐 Translations](../youtube-playback-plox.user.js#L500)
> [Line 500](../youtube-playback-plox.user.js#L500)

| Type | Name | Line |
|---|---|---|
| `fn` | [`fetchUrl`](../youtube-playback-plox.user.js#L842) | [842](../youtube-playback-plox.user.js#L842) |

## [🔧 Utils](../youtube-playback-plox.user.js#L933)
> [Line 933](../youtube-playback-plox.user.js#L933)

_No relevant functions or constants detected._

## [🔧 Sanitize HTML](../youtube-playback-plox.user.js#L936)
> [Line 936](../youtube-playback-plox.user.js#L936)

| Type | Name | Line |
|---|---|---|
| `fn` | [`sanitizeHTML`](../youtube-playback-plox.user.js#L946) | [946](../youtube-playback-plox.user.js#L946) |
| `module` | [`sanitizeHTML`](../youtube-playback-plox.user.js#L946) | [946](../youtube-playback-plox.user.js#L946) |

## [🔧 Is Visibly Displayed](../youtube-playback-plox.user.js#L1004)
> [Line 1004](../youtube-playback-plox.user.js#L1004)

_No relevant functions or constants detected._

## [🔧 Format Time](../youtube-playback-plox.user.js#L1028)
> [Line 1028](../youtube-playback-plox.user.js#L1028)

| Type | Name | Line |
|---|---|---|
| `fn` | [`formatTime`](../youtube-playback-plox.user.js#L1051) | [1051](../youtube-playback-plox.user.js#L1051) |

## [🔧 parseTimeToSeconds](../youtube-playback-plox.user.js#L1123)
> [Line 1123](../youtube-playback-plox.user.js#L1123)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseTimeToSeconds`](../youtube-playback-plox.user.js#L1146) | [1146](../youtube-playback-plox.user.js#L1146) |

## [🔧 normalizeSeconds](../youtube-playback-plox.user.js#L1171)
> [Line 1171](../youtube-playback-plox.user.js#L1171)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeSeconds`](../youtube-playback-plox.user.js#L1190) | [1190](../youtube-playback-plox.user.js#L1190) |

## [⏳ delay](../youtube-playback-plox.user.js#L1197)
> [Line 1197](../youtube-playback-plox.user.js#L1197)

| Type | Name | Line |
|---|---|---|
| `fn` | [`delay`](../youtube-playback-plox.user.js#L1203) | [1203](../youtube-playback-plox.user.js#L1203) |

## [🔧 setInnerHTML](../youtube-playback-plox.user.js#L1205)
> [Line 1205](../youtube-playback-plox.user.js#L1205)

_No relevant functions or constants detected._

## [🔧 Create Element](../youtube-playback-plox.user.js#L1267)
> [Line 1267](../youtube-playback-plox.user.js#L1267)

| Type | Name | Line |
|---|---|---|
| `fn` | [`append`](../youtube-playback-plox.user.js#L1347) | [1347](../youtube-playback-plox.user.js#L1347) |
| `fn` | [`clamp`](../youtube-playback-plox.user.js#L1377) | [1377](../youtube-playback-plox.user.js#L1377) |

## [🔧 Debounce](../youtube-playback-plox.user.js#L1404)
> [Line 1404](../youtube-playback-plox.user.js#L1404)

| Type | Name | Line |
|---|---|---|
| `fn` | [`debounce`](../youtube-playback-plox.user.js#L1414) | [1414](../youtube-playback-plox.user.js#L1414) |

## [🗄️ Event Handlers store](../youtube-playback-plox.user.js#L1429)
> [Line 1429](../youtube-playback-plox.user.js#L1429)

| Type | Name | Line |
|---|---|---|
| `fn` | [`dispose`](../youtube-playback-plox.user.js#L1506) | [1506](../youtube-playback-plox.user.js#L1506) |

## [📝 Selector System](../youtube-playback-plox.user.js#L1512)
> [Line 1512](../youtube-playback-plox.user.js#L1512)

| Type | Name | Line |
|---|---|---|
| `module` | [`PREFIX`](../youtube-playback-plox.user.js#L1596) | [1596](../youtube-playback-plox.user.js#L1596) |
| `fn` | [`deepFreeze`](../youtube-playback-plox.user.js#L1620) | [1620](../youtube-playback-plox.user.js#L1620) |
| `fn` | [`createSelectorSystem`](../youtube-playback-plox.user.js#L1651) | [1651](../youtube-playback-plox.user.js#L1651) |

## [💾 Simple LRU Cache](../youtube-playback-plox.user.js#L1847)
> [Line 1847](../youtube-playback-plox.user.js#L1847)

_No relevant functions or constants detected._

## [⚙️ DOM Cache System](../youtube-playback-plox.user.js#L1905)
> [Line 1905](../youtube-playback-plox.user.js#L1905)

| Type | Name | Line |
|---|---|---|
| `fn` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1922) | [1922](../youtube-playback-plox.user.js#L1922) |
| `module` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1922) | [1922](../youtube-playback-plox.user.js#L1922) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L1947) | [1947](../youtube-playback-plox.user.js#L1947) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L1971) | [1971](../youtube-playback-plox.user.js#L1971) |

## [🌐 Translation Functions](../youtube-playback-plox.user.js#L2247)
> [Line 2247](../youtube-playback-plox.user.js#L2247)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normParams`](../youtube-playback-plox.user.js#L2271) | [2271](../youtube-playback-plox.user.js#L2271) |
| `fn` | [`candidates`](../youtube-playback-plox.user.js#L2370) | [2370](../youtube-playback-plox.user.js#L2370) |
| `fn` | [`normalized`](../youtube-playback-plox.user.js#L2389) | [2389](../youtube-playback-plox.user.js#L2389) |

## [🎨 Styles](../youtube-playback-plox.user.js#L2413)
> [Line 2413](../youtube-playback-plox.user.js#L2413)

_No relevant functions or constants detected._

## [🎨 Theme](../youtube-playback-plox.user.js#L4985)
> [Line 4985](../youtube-playback-plox.user.js#L4985)

_No relevant functions or constants detected._

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L5063)
> [Line 5063](../youtube-playback-plox.user.js#L5063)

_No relevant functions or constants detected._

## [🎨 Progress Bar Style](../youtube-playback-plox.user.js#L5225)
> [Line 5225](../youtube-playback-plox.user.js#L5225)

| Type | Name | Line |
|---|---|---|
| `fn` | [`clearAllProgressGradientState`](../youtube-playback-plox.user.js#L5237) | [5237](../youtube-playback-plox.user.js#L5237) |
| `fn` | [`syncProgressGradientStateForContainer`](../youtube-playback-plox.user.js#L5253) | [5253](../youtube-playback-plox.user.js#L5253) |
| `fn` | [`resolvePlayerRootForGradient`](../youtube-playback-plox.user.js#L5276) | [5276](../youtube-playback-plox.user.js#L5276) |
| `fn` | [`clearProgressColorFromPlayerRoot`](../youtube-playback-plox.user.js#L5287) | [5287](../youtube-playback-plox.user.js#L5287) |
| `fn` | [`applyProgressColorToPlayerRoot`](../youtube-playback-plox.user.js#L5307) | [5307](../youtube-playback-plox.user.js#L5307) |
| `fn` | [`applyProgressColorToShortsSurfaces`](../youtube-playback-plox.user.js#L5331) | [5331](../youtube-playback-plox.user.js#L5331) |
| `fn` | [`repaintWatchProgressBarFromActivePlayer`](../youtube-playback-plox.user.js#L5351) | [5351](../youtube-playback-plox.user.js#L5351) |
| `fn` | [`scheduleProgressBarGradientRepaint`](../youtube-playback-plox.user.js#L5372) | [5372](../youtube-playback-plox.user.js#L5372) |
| `fn` | [`paint`](../youtube-playback-plox.user.js#L5373) | [5373](../youtube-playback-plox.user.js#L5373) |
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L5709) | [5709](../youtube-playback-plox.user.js#L5709) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L5732)
> [Line 5732](../youtube-playback-plox.user.js#L5732)

| Type | Name | Line |
|---|---|---|
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L5742) | [5742](../youtube-playback-plox.user.js#L5742) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L5742) | [5742](../youtube-playback-plox.user.js#L5742) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5885) | [5885](../youtube-playback-plox.user.js#L5885) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5885) | [5885](../youtube-playback-plox.user.js#L5885) |
| `fn` | [`isSupported`](../youtube-playback-plox.user.js#L5889) | [5889](../youtube-playback-plox.user.js#L5889) |
| `module` | [`isSupported`](../youtube-playback-plox.user.js#L5889) | [5889](../youtube-playback-plox.user.js#L5889) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L6037) | [6037](../youtube-playback-plox.user.js#L6037) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L6167) | [6167](../youtube-playback-plox.user.js#L6167) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L6185) | [6185](../youtube-playback-plox.user.js#L6185) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L6206) | [6206](../youtube-playback-plox.user.js#L6206) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6219) | [6219](../youtube-playback-plox.user.js#L6219) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6283) | [6283](../youtube-playback-plox.user.js#L6283) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6301) | [6301](../youtube-playback-plox.user.js#L6301) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L6309) | [6309](../youtube-playback-plox.user.js#L6309) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L6327) | [6327](../youtube-playback-plox.user.js#L6327) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L6338)
> [Line 6338](../youtube-playback-plox.user.js#L6338)

_No relevant functions or constants detected._

## [📢 Ad Detector](../youtube-playback-plox.user.js#L6358)
> [Line 6358](../youtube-playback-plox.user.js#L6358)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L6360) | [6360](../youtube-playback-plox.user.js#L6360) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L6410) | [6410](../youtube-playback-plox.user.js#L6410) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L6533)
> [Line 6533](../youtube-playback-plox.user.js#L6533)

_No relevant functions or constants detected._

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L6944)
> [Line 6944](../youtube-playback-plox.user.js#L6944)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L6951) | [6951](../youtube-playback-plox.user.js#L6951) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L6954) | [6954](../youtube-playback-plox.user.js#L6954) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L6982) | [6982](../youtube-playback-plox.user.js#L6982) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L7025) | [7025](../youtube-playback-plox.user.js#L7025) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L7098)
> [Line 7098](../youtube-playback-plox.user.js#L7098)

| Type | Name | Line |
|---|---|---|
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L7104) | [7104](../youtube-playback-plox.user.js#L7104) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L7132) | [7132](../youtube-playback-plox.user.js#L7132) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7133) | [7133](../youtube-playback-plox.user.js#L7133) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L7196) | [7196](../youtube-playback-plox.user.js#L7196) |
| `fn` | [`cleanOwner`](../youtube-playback-plox.user.js#L7207) | [7207](../youtube-playback-plox.user.js#L7207) |
| `fn` | [`cleanName`](../youtube-playback-plox.user.js#L7208) | [7208](../youtube-playback-plox.user.js#L7208) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7209) | [7209](../youtube-playback-plox.user.js#L7209) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L7331) | [7331](../youtube-playback-plox.user.js#L7331) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7343) | [7343](../youtube-playback-plox.user.js#L7343) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L7409) | [7409](../youtube-playback-plox.user.js#L7409) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L7439) | [7439](../youtube-playback-plox.user.js#L7439) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L7468)
> [Line 7468](../youtube-playback-plox.user.js#L7468)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L7469) | [7469](../youtube-playback-plox.user.js#L7469) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L7515) | [7515](../youtube-playback-plox.user.js#L7515) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L7670)
> [Line 7670](../youtube-playback-plox.user.js#L7670)

_No relevant functions or constants detected._

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L7752)
> [Line 7752](../youtube-playback-plox.user.js#L7752)

_No relevant functions or constants detected._

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L7843)
> [Line 7843](../youtube-playback-plox.user.js#L7843)

_No relevant functions or constants detected._

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L7922)
> [Line 7922](../youtube-playback-plox.user.js#L7922)

| Type | Name | Line |
|---|---|---|
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L7941) | [7941](../youtube-playback-plox.user.js#L7941) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L7953)
> [Line 7953](../youtube-playback-plox.user.js#L7953)

_No relevant functions or constants detected._

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L8000)
> [Line 8000](../youtube-playback-plox.user.js#L8000)

_No relevant functions or constants detected._

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L8058)
> [Line 8058](../youtube-playback-plox.user.js#L8058)

| Type | Name | Line |
|---|---|---|
| `fn` | [`base`](../youtube-playback-plox.user.js#L8067) | [8067](../youtube-playback-plox.user.js#L8067) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L8108) | [8108](../youtube-playback-plox.user.js#L8108) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L8119)
> [Line 8119](../youtube-playback-plox.user.js#L8119)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8173) | [8173](../youtube-playback-plox.user.js#L8173) |

## [📺 Helpers](../youtube-playback-plox.user.js#L8294)
> [Line 8294](../youtube-playback-plox.user.js#L8294)

_No relevant functions or constants detected._

## [📺 Gets saved video data](../youtube-playback-plox.user.js#L8297)
> [Line 8297](../youtube-playback-plox.user.js#L8297)

| Type | Name | Line |
|---|---|---|
| `fn` | [`keys`](../youtube-playback-plox.user.js#L8323) | [8323](../youtube-playback-plox.user.js#L8323) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L8348)
> [Line 8348](../youtube-playback-plox.user.js#L8348)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L8384) | [8384](../youtube-playback-plox.user.js#L8384) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L8427)
> [Line 8427](../youtube-playback-plox.user.js#L8427)

_No relevant functions or constants detected._

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L8628)
> [Line 8628](../youtube-playback-plox.user.js#L8628)

| Type | Name | Line |
|---|---|---|
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L8725) | [8725](../youtube-playback-plox.user.js#L8725) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L8834)
> [Line 8834](../youtube-playback-plox.user.js#L8834)

_No relevant functions or constants detected._

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L8856)
> [Line 8856](../youtube-playback-plox.user.js#L8856)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L8884)
> [Line 8884](../youtube-playback-plox.user.js#L8884)

_No relevant functions or constants detected._

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L8929)
> [Line 8929](../youtube-playback-plox.user.js#L8929)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L8950) | [8950](../youtube-playback-plox.user.js#L8950) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L9092) | [9092](../youtube-playback-plox.user.js#L9092) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L9177) | [9177](../youtube-playback-plox.user.js#L9177) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L9204)
> [Line 9204](../youtube-playback-plox.user.js#L9204)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L9230) | [9230](../youtube-playback-plox.user.js#L9230) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L9240)
> [Line 9240](../youtube-playback-plox.user.js#L9240)

| Type | Name | Line |
|---|---|---|
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9522) | [9522](../youtube-playback-plox.user.js#L9522) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9522) | [9522](../youtube-playback-plox.user.js#L9522) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L9534) | [9534](../youtube-playback-plox.user.js#L9534) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L9544) | [9544](../youtube-playback-plox.user.js#L9544) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L9552) | [9552](../youtube-playback-plox.user.js#L9552) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L9560) | [9560](../youtube-playback-plox.user.js#L9560) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L9583) | [9583](../youtube-playback-plox.user.js#L9583) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L9595) | [9595](../youtube-playback-plox.user.js#L9595) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L9598) | [9598](../youtube-playback-plox.user.js#L9598) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L9608) | [9608](../youtube-playback-plox.user.js#L9608) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L9613) | [9613](../youtube-playback-plox.user.js#L9613) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L9636) | [9636](../youtube-playback-plox.user.js#L9636) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L9655) | [9655](../youtube-playback-plox.user.js#L9655) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L9663) | [9663](../youtube-playback-plox.user.js#L9663) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L9707) | [9707](../youtube-playback-plox.user.js#L9707) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L9762) | [9762](../youtube-playback-plox.user.js#L9762) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L9821) | [9821](../youtube-playback-plox.user.js#L9821) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L9918) | [9918](../youtube-playback-plox.user.js#L9918) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L9933) | [9933](../youtube-playback-plox.user.js#L9933) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L9937) | [9937](../youtube-playback-plox.user.js#L9937) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L9944) | [9944](../youtube-playback-plox.user.js#L9944) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L9962) | [9962](../youtube-playback-plox.user.js#L9962) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L10019)
> [Line 10019](../youtube-playback-plox.user.js#L10019)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L10055) | [10055](../youtube-playback-plox.user.js#L10055) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L10195)
> [Line 10195](../youtube-playback-plox.user.js#L10195)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L10198) | [10198](../youtube-playback-plox.user.js#L10198) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L10238)
> [Line 10238](../youtube-playback-plox.user.js#L10238)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L10277) | [10277](../youtube-playback-plox.user.js#L10277) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L10283) | [10283](../youtube-playback-plox.user.js#L10283) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L10291) | [10291](../youtube-playback-plox.user.js#L10291) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L10337) | [10337](../youtube-playback-plox.user.js#L10337) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L10341) | [10341](../youtube-playback-plox.user.js#L10341) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L10344) | [10344](../youtube-playback-plox.user.js#L10344) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L10360) | [10360](../youtube-playback-plox.user.js#L10360) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L10369) | [10369](../youtube-playback-plox.user.js#L10369) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L10399) | [10399](../youtube-playback-plox.user.js#L10399) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L10413) | [10413](../youtube-playback-plox.user.js#L10413) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L10417) | [10417](../youtube-playback-plox.user.js#L10417) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L10555)
> [Line 10555](../youtube-playback-plox.user.js#L10555)

| Type | Name | Line |
|---|---|---|
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L10575) | [10575](../youtube-playback-plox.user.js#L10575) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L10659) | [10659](../youtube-playback-plox.user.js#L10659) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10740) | [10740](../youtube-playback-plox.user.js#L10740) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10741) | [10741](../youtube-playback-plox.user.js#L10741) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10821) | [10821](../youtube-playback-plox.user.js#L10821) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10822) | [10822](../youtube-playback-plox.user.js#L10822) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L10950)
> [Line 10950](../youtube-playback-plox.user.js#L10950)

_No relevant functions or constants detected._

## [🎵 Video Selection](../youtube-playback-plox.user.js#L11008)
> [Line 11008](../youtube-playback-plox.user.js#L11008)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11098) | [11098](../youtube-playback-plox.user.js#L11098) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11105) | [11105](../youtube-playback-plox.user.js#L11105) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L11190) | [11190](../youtube-playback-plox.user.js#L11190) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L11194) | [11194](../youtube-playback-plox.user.js#L11194) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L11203) | [11203](../youtube-playback-plox.user.js#L11203) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L11476) | [11476](../youtube-playback-plox.user.js#L11476) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L11623) | [11623](../youtube-playback-plox.user.js#L11623) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L11710)
> [Line 11710](../youtube-playback-plox.user.js#L11710)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11716) | [11716](../youtube-playback-plox.user.js#L11716) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11716) | [11716](../youtube-playback-plox.user.js#L11716) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L11717) | [11717](../youtube-playback-plox.user.js#L11717) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L11726) | [11726](../youtube-playback-plox.user.js#L11726) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L11731) | [11731](../youtube-playback-plox.user.js#L11731) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L11742) | [11742](../youtube-playback-plox.user.js#L11742) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L11759) | [11759](../youtube-playback-plox.user.js#L11759) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L11793) | [11793](../youtube-playback-plox.user.js#L11793) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L11818) | [11818](../youtube-playback-plox.user.js#L11818) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L11820) | [11820](../youtube-playback-plox.user.js#L11820) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11839) | [11839](../youtube-playback-plox.user.js#L11839) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11839) | [11839](../youtube-playback-plox.user.js#L11839) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L11841) | [11841](../youtube-playback-plox.user.js#L11841) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L11864) | [11864](../youtube-playback-plox.user.js#L11864) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L11864) | [11864](../youtube-playback-plox.user.js#L11864) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L11875) | [11875](../youtube-playback-plox.user.js#L11875) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L11880) | [11880](../youtube-playback-plox.user.js#L11880) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L11885) | [11885](../youtube-playback-plox.user.js#L11885) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L11897) | [11897](../youtube-playback-plox.user.js#L11897) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L11914) | [11914](../youtube-playback-plox.user.js#L11914) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L11914) | [11914](../youtube-playback-plox.user.js#L11914) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L11916) | [11916](../youtube-playback-plox.user.js#L11916) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L11924) | [11924](../youtube-playback-plox.user.js#L11924) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L11972)
> [Line 11972](../youtube-playback-plox.user.js#L11972)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L11977) | [11977](../youtube-playback-plox.user.js#L11977) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L11977) | [11977](../youtube-playback-plox.user.js#L11977) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L11997) | [11997](../youtube-playback-plox.user.js#L11997) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L12012) | [12012](../youtube-playback-plox.user.js#L12012) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L12028) | [12028](../youtube-playback-plox.user.js#L12028) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L12063) | [12063](../youtube-playback-plox.user.js#L12063) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L12097) | [12097](../youtube-playback-plox.user.js#L12097) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L12098) | [12098](../youtube-playback-plox.user.js#L12098) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L12129) | [12129](../youtube-playback-plox.user.js#L12129) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L12185) | [12185](../youtube-playback-plox.user.js#L12185) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L12251) | [12251](../youtube-playback-plox.user.js#L12251) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12259) | [12259](../youtube-playback-plox.user.js#L12259) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L12266) | [12266](../youtube-playback-plox.user.js#L12266) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L12304) | [12304](../youtube-playback-plox.user.js#L12304) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L12344) | [12344](../youtube-playback-plox.user.js#L12344) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L12355) | [12355](../youtube-playback-plox.user.js#L12355) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L12371) | [12371](../youtube-playback-plox.user.js#L12371) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12689) | [12689](../youtube-playback-plox.user.js#L12689) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L12731) | [12731](../youtube-playback-plox.user.js#L12731) |

## [Processing Functions](../youtube-playback-plox.user.js#L12751)
> [Line 12751](../youtube-playback-plox.user.js#L12751)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L12777) | [12777](../youtube-playback-plox.user.js#L12777) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L12796) | [12796](../youtube-playback-plox.user.js#L12796) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12806) | [12806](../youtube-playback-plox.user.js#L12806) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12806) | [12806](../youtube-playback-plox.user.js#L12806) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L12821) | [12821](../youtube-playback-plox.user.js#L12821) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L12826) | [12826](../youtube-playback-plox.user.js#L12826) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L12833) | [12833](../youtube-playback-plox.user.js#L12833) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L12839) | [12839](../youtube-playback-plox.user.js#L12839) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L12857) | [12857](../youtube-playback-plox.user.js#L12857) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L12927) | [12927](../youtube-playback-plox.user.js#L12927) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L12960) | [12960](../youtube-playback-plox.user.js#L12960) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L12993) | [12993](../youtube-playback-plox.user.js#L12993) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L13023) | [13023](../youtube-playback-plox.user.js#L13023) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L13034) | [13034](../youtube-playback-plox.user.js#L13034) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L13046) | [13046](../youtube-playback-plox.user.js#L13046) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L13080) | [13080](../youtube-playback-plox.user.js#L13080) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L13151) | [13151](../youtube-playback-plox.user.js#L13151) |
| `fn` | [`handleSeekingForGradient`](../youtube-playback-plox.user.js#L13180) | [13180](../youtube-playback-plox.user.js#L13180) |
| `fn` | [`handleSeekedForGradient`](../youtube-playback-plox.user.js#L13189) | [13189](../youtube-playback-plox.user.js#L13189) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L13299) | [13299](../youtube-playback-plox.user.js#L13299) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L13367) | [13367](../youtube-playback-plox.user.js#L13367) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L13527) | [13527](../youtube-playback-plox.user.js#L13527) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L13640) | [13640](../youtube-playback-plox.user.js#L13640) |

## [PlaybackController](../youtube-playback-plox.user.js#L13784)
> [Line 13784](../youtube-playback-plox.user.js#L13784)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L13829) | [13829](../youtube-playback-plox.user.js#L13829) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L13845) | [13845](../youtube-playback-plox.user.js#L13845) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L13868) | [13868](../youtube-playback-plox.user.js#L13868) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L13874) | [13874](../youtube-playback-plox.user.js#L13874) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L14093) | [14093](../youtube-playback-plox.user.js#L14093) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L14206)
> [Line 14206](../youtube-playback-plox.user.js#L14206)

| Type | Name | Line |
|---|---|---|
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L14337) | [14337](../youtube-playback-plox.user.js#L14337) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L14738)
> [Line 14738](../youtube-playback-plox.user.js#L14738)

| Type | Name | Line |
|---|---|---|
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L14761) | [14761](../youtube-playback-plox.user.js#L14761) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L14837) | [14837](../youtube-playback-plox.user.js#L14837) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L14846) | [14846](../youtube-playback-plox.user.js#L14846) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L14854) | [14854](../youtube-playback-plox.user.js#L14854) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14874) | [14874](../youtube-playback-plox.user.js#L14874) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L14927)
> [Line 14927](../youtube-playback-plox.user.js#L14927)

| Type | Name | Line |
|---|---|---|
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14939) | [14939](../youtube-playback-plox.user.js#L14939) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L14986) | [14986](../youtube-playback-plox.user.js#L14986) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L14992) | [14992](../youtube-playback-plox.user.js#L14992) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L15000) | [15000](../youtube-playback-plox.user.js#L15000) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15015) | [15015](../youtube-playback-plox.user.js#L15015) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L15135) | [15135](../youtube-playback-plox.user.js#L15135) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L15213)
> [Line 15213](../youtube-playback-plox.user.js#L15213)

_No relevant functions or constants detected._

## [📁 Update Video List](../youtube-playback-plox.user.js#L15336)
> [Line 15336](../youtube-playback-plox.user.js#L15336)

| Type | Name | Line |
|---|---|---|
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15355) | [15355](../youtube-playback-plox.user.js#L15355) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15359) | [15359](../youtube-playback-plox.user.js#L15359) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15543) | [15543](../youtube-playback-plox.user.js#L15543) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L15562) | [15562](../youtube-playback-plox.user.js#L15562) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L15688) | [15688](../youtube-playback-plox.user.js#L15688) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15765) | [15765](../youtube-playback-plox.user.js#L15765) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L15929) | [15929](../youtube-playback-plox.user.js#L15929) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L15950) | [15950](../youtube-playback-plox.user.js#L15950) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L16001) | [16001](../youtube-playback-plox.user.js#L16001) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L16121)
> [Line 16121](../youtube-playback-plox.user.js#L16121)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L16124) | [16124](../youtube-playback-plox.user.js#L16124) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L16138) | [16138](../youtube-playback-plox.user.js#L16138) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L16149)
> [Line 16149](../youtube-playback-plox.user.js#L16149)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L16276) | [16276](../youtube-playback-plox.user.js#L16276) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L16286) | [16286](../youtube-playback-plox.user.js#L16286) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L16361) | [16361](../youtube-playback-plox.user.js#L16361) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L16373)
> [Line 16373](../youtube-playback-plox.user.js#L16373)

| Type | Name | Line |
|---|---|---|
| `fn` | [`deleteFromStorage`](../youtube-playback-plox.user.js#L16507) | [16507](../youtube-playback-plox.user.js#L16507) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L16512) | [16512](../youtube-playback-plox.user.js#L16512) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L16571) | [16571](../youtube-playback-plox.user.js#L16571) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L16619) | [16619](../youtube-playback-plox.user.js#L16619) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L16625) | [16625](../youtube-playback-plox.user.js#L16625) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L16642) | [16642](../youtube-playback-plox.user.js#L16642) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L16676) | [16676](../youtube-playback-plox.user.js#L16676) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L16720) | [16720](../youtube-playback-plox.user.js#L16720) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L16802) | [16802](../youtube-playback-plox.user.js#L16802) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L16808) | [16808](../youtube-playback-plox.user.js#L16808) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L16824) | [16824](../youtube-playback-plox.user.js#L16824) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L16834) | [16834](../youtube-playback-plox.user.js#L16834) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L16842) | [16842](../youtube-playback-plox.user.js#L16842) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L16847) | [16847](../youtube-playback-plox.user.js#L16847) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L16854) | [16854](../youtube-playback-plox.user.js#L16854) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L16857) | [16857](../youtube-playback-plox.user.js#L16857) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L16861) | [16861](../youtube-playback-plox.user.js#L16861) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L16907) | [16907](../youtube-playback-plox.user.js#L16907) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L16907) | [16907](../youtube-playback-plox.user.js#L16907) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L16921) | [16921](../youtube-playback-plox.user.js#L16921) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L17195) | [17195](../youtube-playback-plox.user.js#L17195) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L17243) | [17243](../youtube-playback-plox.user.js#L17243) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17244) | [17244](../youtube-playback-plox.user.js#L17244) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L17260) | [17260](../youtube-playback-plox.user.js#L17260) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17261) | [17261](../youtube-playback-plox.user.js#L17261) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L17310) | [17310](../youtube-playback-plox.user.js#L17310) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L17455) | [17455](../youtube-playback-plox.user.js#L17455) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L17469) | [17469](../youtube-playback-plox.user.js#L17469) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L17768) | [17768](../youtube-playback-plox.user.js#L17768) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L17867) | [17867](../youtube-playback-plox.user.js#L17867) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L17950) | [17950](../youtube-playback-plox.user.js#L17950) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L18204) | [18204](../youtube-playback-plox.user.js#L18204) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L18227) | [18227](../youtube-playback-plox.user.js#L18227) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L18228) | [18228](../youtube-playback-plox.user.js#L18228) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L18300)
> [Line 18300](../youtube-playback-plox.user.js#L18300)

_No relevant functions or constants detected._

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L18452)
> [Line 18452](../youtube-playback-plox.user.js#L18452)

_No relevant functions or constants detected._

## [🔄 Data Migration](../youtube-playback-plox.user.js#L18479)
> [Line 18479](../youtube-playback-plox.user.js#L18479)

| Type | Name | Line |
|---|---|---|
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L18536) | [18536](../youtube-playback-plox.user.js#L18536) |

## [🚀 Init](../youtube-playback-plox.user.js#L18875)
> [Line 18875](../youtube-playback-plox.user.js#L18875)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L18885) | [18885](../youtube-playback-plox.user.js#L18885) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L18907) | [18907](../youtube-playback-plox.user.js#L18907) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L19236) | [19236](../youtube-playback-plox.user.js#L19236) |

