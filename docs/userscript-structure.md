# Userscript Structure
> Auto-generated on 2026-05-31 · version 0.0.11
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
27. [📢 Ad Caches](#ad-caches) - [line 6339](../youtube-playback-plox.user.js#L6339)
28. [📢 Ad Detector](#ad-detector) - [line 6359](../youtube-playback-plox.user.js#L6359)
29. [🎯 VirtualScroller](#virtualscroller) - [line 6534](../youtube-playback-plox.user.js#L6534)
30. [📤 Import/Export JSON](#importexport-json) - [line 6945](../youtube-playback-plox.user.js#L6945)
31. [☁️ GitHub Backup](#github-backup) - [line 7100](../youtube-playback-plox.user.js#L7100)
32. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 7479](../youtube-playback-plox.user.js#L7479)
33. [🔄 Normalize Video Data](#normalize-video-data) - [line 7681](../youtube-playback-plox.user.js#L7681)
34. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 7763](../youtube-playback-plox.user.js#L7763)
35. [Parse FreeTube DB](#parse-freetube-db) - [line 7854](../youtube-playback-plox.user.js#L7854)
36. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 7934](../youtube-playback-plox.user.js#L7934)
37. [⬆ Export To FreeTube](#export-to-freetube) - [line 7965](../youtube-playback-plox.user.js#L7965)
38. [⬇ Import From FreeTube](#import-from-freetube) - [line 8012](../youtube-playback-plox.user.js#L8012)
39. [🔄 Insert Completion Event](#insert-completion-event) - [line 8070](../youtube-playback-plox.user.js#L8070)
40. [💾 Save Video Generic](#save-video-generic) - [line 8131](../youtube-playback-plox.user.js#L8131)
41. [📺 Helpers](#helpers) - [line 8306](../youtube-playback-plox.user.js#L8306)
42. [📺 Gets saved video data](#gets-saved-video-data) - [line 8309](../youtube-playback-plox.user.js#L8309)
43. [📺 Get Player Video ID](#get-player-video-id) - [line 8360](../youtube-playback-plox.user.js#L8360)
44. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 8439](../youtube-playback-plox.user.js#L8439)
45. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 8640](../youtube-playback-plox.user.js#L8640)
46. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 8846](../youtube-playback-plox.user.js#L8846)
47. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 8868](../youtube-playback-plox.user.js#L8868)
48. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 8896](../youtube-playback-plox.user.js#L8896)
49. [📺 get Playlist Name](#get-playlist-name) - [line 8941](../youtube-playback-plox.user.js#L8941)
50. [🕒 Time Display](#time-display) - [line 9216](../youtube-playback-plox.user.js#L9216)
51. [🖼️ Display Button Helpers](#display-button-helpers) - [line 9252](../youtube-playback-plox.user.js#L9252)
52. [🍞 Toasts](#toasts) - [line 10031](../youtube-playback-plox.user.js#L10031)
53. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 10207](../youtube-playback-plox.user.js#L10207)
54. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 10250](../youtube-playback-plox.user.js#L10250)
55. [⚙️ Settings UI](#settings-ui) - [line 10567](../youtube-playback-plox.user.js#L10567)
56. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 10962](../youtube-playback-plox.user.js#L10962)
57. [🎵 Video Selection](#video-selection) - [line 11020](../youtube-playback-plox.user.js#L11020)
58. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 11722](../youtube-playback-plox.user.js#L11722)
59. [📡 Video Observer Manager](#video-observer-manager) - [line 11984](../youtube-playback-plox.user.js#L11984)
60. [Processing Functions](#processing-functions) - [line 12763](../youtube-playback-plox.user.js#L12763)
61. [PlaybackController](#playbackcontroller) - [line 13796](../youtube-playback-plox.user.js#L13796)
62. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 14218](../youtube-playback-plox.user.js#L14218)
63. [📂 Sort UI](#sort-ui) - [line 14750](../youtube-playback-plox.user.js#L14750)
64. [📂 Filters UI](#filters-ui) - [line 14939](../youtube-playback-plox.user.js#L14939)
65. [📂 Video List UI](#video-list-ui) - [line 15225](../youtube-playback-plox.user.js#L15225)
66. [📁 Update Video List](#update-video-list) - [line 15348](../youtube-playback-plox.user.js#L15348)
67. [🔘 Floating Button](#floating-button) - [line 16133](../youtube-playback-plox.user.js#L16133)
68. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 16161](../youtube-playback-plox.user.js#L16161)
69. [📂 Video Entry](#video-entry) - [line 16385](../youtube-playback-plox.user.js#L16385)
70. [🗑️ Clear All Data](#clear-all-data) - [line 18312](../youtube-playback-plox.user.js#L18312)
71. [⚙️ Menu Commands](#menu-commands) - [line 18464](../youtube-playback-plox.user.js#L18464)
72. [🔄 Data Migration](#data-migration) - [line 18491](../youtube-playback-plox.user.js#L18491)
73. [🚀 Init](#init) - [line 18887](../youtube-playback-plox.user.js#L18887)

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
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5886) | [5886](../youtube-playback-plox.user.js#L5886) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5886) | [5886](../youtube-playback-plox.user.js#L5886) |
| `fn` | [`isSupported`](../youtube-playback-plox.user.js#L5890) | [5890](../youtube-playback-plox.user.js#L5890) |
| `module` | [`isSupported`](../youtube-playback-plox.user.js#L5890) | [5890](../youtube-playback-plox.user.js#L5890) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L6038) | [6038](../youtube-playback-plox.user.js#L6038) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L6168) | [6168](../youtube-playback-plox.user.js#L6168) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L6186) | [6186](../youtube-playback-plox.user.js#L6186) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L6207) | [6207](../youtube-playback-plox.user.js#L6207) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6220) | [6220](../youtube-playback-plox.user.js#L6220) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6284) | [6284](../youtube-playback-plox.user.js#L6284) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6302) | [6302](../youtube-playback-plox.user.js#L6302) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L6310) | [6310](../youtube-playback-plox.user.js#L6310) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L6328) | [6328](../youtube-playback-plox.user.js#L6328) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L6339)
> [Line 6339](../youtube-playback-plox.user.js#L6339)

_No relevant functions or constants detected._

## [📢 Ad Detector](../youtube-playback-plox.user.js#L6359)
> [Line 6359](../youtube-playback-plox.user.js#L6359)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L6361) | [6361](../youtube-playback-plox.user.js#L6361) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L6411) | [6411](../youtube-playback-plox.user.js#L6411) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L6534)
> [Line 6534](../youtube-playback-plox.user.js#L6534)

_No relevant functions or constants detected._

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L6945)
> [Line 6945](../youtube-playback-plox.user.js#L6945)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L6952) | [6952](../youtube-playback-plox.user.js#L6952) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L6955) | [6955](../youtube-playback-plox.user.js#L6955) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L6983) | [6983](../youtube-playback-plox.user.js#L6983) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L7026) | [7026](../youtube-playback-plox.user.js#L7026) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L7100)
> [Line 7100](../youtube-playback-plox.user.js#L7100)

| Type | Name | Line |
|---|---|---|
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L7106) | [7106](../youtube-playback-plox.user.js#L7106) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L7134) | [7134](../youtube-playback-plox.user.js#L7134) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7135) | [7135](../youtube-playback-plox.user.js#L7135) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L7198) | [7198](../youtube-playback-plox.user.js#L7198) |
| `fn` | [`cleanOwner`](../youtube-playback-plox.user.js#L7209) | [7209](../youtube-playback-plox.user.js#L7209) |
| `fn` | [`cleanName`](../youtube-playback-plox.user.js#L7210) | [7210](../youtube-playback-plox.user.js#L7210) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7211) | [7211](../youtube-playback-plox.user.js#L7211) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L7342) | [7342](../youtube-playback-plox.user.js#L7342) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7354) | [7354](../youtube-playback-plox.user.js#L7354) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L7420) | [7420](../youtube-playback-plox.user.js#L7420) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L7450) | [7450](../youtube-playback-plox.user.js#L7450) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L7479)
> [Line 7479](../youtube-playback-plox.user.js#L7479)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L7480) | [7480](../youtube-playback-plox.user.js#L7480) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L7526) | [7526](../youtube-playback-plox.user.js#L7526) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L7681)
> [Line 7681](../youtube-playback-plox.user.js#L7681)

_No relevant functions or constants detected._

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L7763)
> [Line 7763](../youtube-playback-plox.user.js#L7763)

_No relevant functions or constants detected._

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L7854)
> [Line 7854](../youtube-playback-plox.user.js#L7854)

_No relevant functions or constants detected._

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L7934)
> [Line 7934](../youtube-playback-plox.user.js#L7934)

| Type | Name | Line |
|---|---|---|
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L7953) | [7953](../youtube-playback-plox.user.js#L7953) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L7965)
> [Line 7965](../youtube-playback-plox.user.js#L7965)

_No relevant functions or constants detected._

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L8012)
> [Line 8012](../youtube-playback-plox.user.js#L8012)

_No relevant functions or constants detected._

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L8070)
> [Line 8070](../youtube-playback-plox.user.js#L8070)

| Type | Name | Line |
|---|---|---|
| `fn` | [`base`](../youtube-playback-plox.user.js#L8079) | [8079](../youtube-playback-plox.user.js#L8079) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L8120) | [8120](../youtube-playback-plox.user.js#L8120) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L8131)
> [Line 8131](../youtube-playback-plox.user.js#L8131)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8185) | [8185](../youtube-playback-plox.user.js#L8185) |

## [📺 Helpers](../youtube-playback-plox.user.js#L8306)
> [Line 8306](../youtube-playback-plox.user.js#L8306)

_No relevant functions or constants detected._

## [📺 Gets saved video data](../youtube-playback-plox.user.js#L8309)
> [Line 8309](../youtube-playback-plox.user.js#L8309)

| Type | Name | Line |
|---|---|---|
| `fn` | [`keys`](../youtube-playback-plox.user.js#L8335) | [8335](../youtube-playback-plox.user.js#L8335) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L8360)
> [Line 8360](../youtube-playback-plox.user.js#L8360)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L8396) | [8396](../youtube-playback-plox.user.js#L8396) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L8439)
> [Line 8439](../youtube-playback-plox.user.js#L8439)

_No relevant functions or constants detected._

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L8640)
> [Line 8640](../youtube-playback-plox.user.js#L8640)

| Type | Name | Line |
|---|---|---|
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L8737) | [8737](../youtube-playback-plox.user.js#L8737) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L8846)
> [Line 8846](../youtube-playback-plox.user.js#L8846)

_No relevant functions or constants detected._

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L8868)
> [Line 8868](../youtube-playback-plox.user.js#L8868)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L8896)
> [Line 8896](../youtube-playback-plox.user.js#L8896)

_No relevant functions or constants detected._

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L8941)
> [Line 8941](../youtube-playback-plox.user.js#L8941)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L8962) | [8962](../youtube-playback-plox.user.js#L8962) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L9104) | [9104](../youtube-playback-plox.user.js#L9104) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L9189) | [9189](../youtube-playback-plox.user.js#L9189) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L9216)
> [Line 9216](../youtube-playback-plox.user.js#L9216)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L9242) | [9242](../youtube-playback-plox.user.js#L9242) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L9252)
> [Line 9252](../youtube-playback-plox.user.js#L9252)

| Type | Name | Line |
|---|---|---|
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9534) | [9534](../youtube-playback-plox.user.js#L9534) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9534) | [9534](../youtube-playback-plox.user.js#L9534) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L9546) | [9546](../youtube-playback-plox.user.js#L9546) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L9556) | [9556](../youtube-playback-plox.user.js#L9556) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L9564) | [9564](../youtube-playback-plox.user.js#L9564) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L9572) | [9572](../youtube-playback-plox.user.js#L9572) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L9595) | [9595](../youtube-playback-plox.user.js#L9595) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L9607) | [9607](../youtube-playback-plox.user.js#L9607) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L9610) | [9610](../youtube-playback-plox.user.js#L9610) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L9620) | [9620](../youtube-playback-plox.user.js#L9620) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L9625) | [9625](../youtube-playback-plox.user.js#L9625) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L9648) | [9648](../youtube-playback-plox.user.js#L9648) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L9667) | [9667](../youtube-playback-plox.user.js#L9667) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L9675) | [9675](../youtube-playback-plox.user.js#L9675) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L9719) | [9719](../youtube-playback-plox.user.js#L9719) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L9774) | [9774](../youtube-playback-plox.user.js#L9774) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L9833) | [9833](../youtube-playback-plox.user.js#L9833) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L9930) | [9930](../youtube-playback-plox.user.js#L9930) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L9945) | [9945](../youtube-playback-plox.user.js#L9945) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L9949) | [9949](../youtube-playback-plox.user.js#L9949) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L9956) | [9956](../youtube-playback-plox.user.js#L9956) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L9974) | [9974](../youtube-playback-plox.user.js#L9974) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L10031)
> [Line 10031](../youtube-playback-plox.user.js#L10031)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L10067) | [10067](../youtube-playback-plox.user.js#L10067) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L10207)
> [Line 10207](../youtube-playback-plox.user.js#L10207)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L10210) | [10210](../youtube-playback-plox.user.js#L10210) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L10250)
> [Line 10250](../youtube-playback-plox.user.js#L10250)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L10289) | [10289](../youtube-playback-plox.user.js#L10289) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L10295) | [10295](../youtube-playback-plox.user.js#L10295) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L10303) | [10303](../youtube-playback-plox.user.js#L10303) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L10349) | [10349](../youtube-playback-plox.user.js#L10349) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L10353) | [10353](../youtube-playback-plox.user.js#L10353) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L10356) | [10356](../youtube-playback-plox.user.js#L10356) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L10372) | [10372](../youtube-playback-plox.user.js#L10372) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L10381) | [10381](../youtube-playback-plox.user.js#L10381) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L10411) | [10411](../youtube-playback-plox.user.js#L10411) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L10425) | [10425](../youtube-playback-plox.user.js#L10425) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L10429) | [10429](../youtube-playback-plox.user.js#L10429) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L10567)
> [Line 10567](../youtube-playback-plox.user.js#L10567)

| Type | Name | Line |
|---|---|---|
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L10587) | [10587](../youtube-playback-plox.user.js#L10587) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L10671) | [10671](../youtube-playback-plox.user.js#L10671) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10752) | [10752](../youtube-playback-plox.user.js#L10752) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10753) | [10753](../youtube-playback-plox.user.js#L10753) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10833) | [10833](../youtube-playback-plox.user.js#L10833) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10834) | [10834](../youtube-playback-plox.user.js#L10834) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L10962)
> [Line 10962](../youtube-playback-plox.user.js#L10962)

_No relevant functions or constants detected._

## [🎵 Video Selection](../youtube-playback-plox.user.js#L11020)
> [Line 11020](../youtube-playback-plox.user.js#L11020)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11110) | [11110](../youtube-playback-plox.user.js#L11110) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11117) | [11117](../youtube-playback-plox.user.js#L11117) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L11202) | [11202](../youtube-playback-plox.user.js#L11202) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L11206) | [11206](../youtube-playback-plox.user.js#L11206) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L11215) | [11215](../youtube-playback-plox.user.js#L11215) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L11488) | [11488](../youtube-playback-plox.user.js#L11488) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L11635) | [11635](../youtube-playback-plox.user.js#L11635) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L11722)
> [Line 11722](../youtube-playback-plox.user.js#L11722)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11728) | [11728](../youtube-playback-plox.user.js#L11728) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11728) | [11728](../youtube-playback-plox.user.js#L11728) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L11729) | [11729](../youtube-playback-plox.user.js#L11729) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L11738) | [11738](../youtube-playback-plox.user.js#L11738) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L11743) | [11743](../youtube-playback-plox.user.js#L11743) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L11754) | [11754](../youtube-playback-plox.user.js#L11754) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L11771) | [11771](../youtube-playback-plox.user.js#L11771) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L11805) | [11805](../youtube-playback-plox.user.js#L11805) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L11830) | [11830](../youtube-playback-plox.user.js#L11830) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L11832) | [11832](../youtube-playback-plox.user.js#L11832) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11851) | [11851](../youtube-playback-plox.user.js#L11851) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11851) | [11851](../youtube-playback-plox.user.js#L11851) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L11853) | [11853](../youtube-playback-plox.user.js#L11853) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L11876) | [11876](../youtube-playback-plox.user.js#L11876) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L11876) | [11876](../youtube-playback-plox.user.js#L11876) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L11887) | [11887](../youtube-playback-plox.user.js#L11887) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L11892) | [11892](../youtube-playback-plox.user.js#L11892) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L11897) | [11897](../youtube-playback-plox.user.js#L11897) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L11909) | [11909](../youtube-playback-plox.user.js#L11909) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L11926) | [11926](../youtube-playback-plox.user.js#L11926) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L11926) | [11926](../youtube-playback-plox.user.js#L11926) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L11928) | [11928](../youtube-playback-plox.user.js#L11928) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L11936) | [11936](../youtube-playback-plox.user.js#L11936) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L11984)
> [Line 11984](../youtube-playback-plox.user.js#L11984)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L11989) | [11989](../youtube-playback-plox.user.js#L11989) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L11989) | [11989](../youtube-playback-plox.user.js#L11989) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L12009) | [12009](../youtube-playback-plox.user.js#L12009) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L12024) | [12024](../youtube-playback-plox.user.js#L12024) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L12040) | [12040](../youtube-playback-plox.user.js#L12040) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L12075) | [12075](../youtube-playback-plox.user.js#L12075) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L12109) | [12109](../youtube-playback-plox.user.js#L12109) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L12110) | [12110](../youtube-playback-plox.user.js#L12110) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L12141) | [12141](../youtube-playback-plox.user.js#L12141) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L12197) | [12197](../youtube-playback-plox.user.js#L12197) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L12263) | [12263](../youtube-playback-plox.user.js#L12263) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12271) | [12271](../youtube-playback-plox.user.js#L12271) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L12278) | [12278](../youtube-playback-plox.user.js#L12278) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L12316) | [12316](../youtube-playback-plox.user.js#L12316) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L12356) | [12356](../youtube-playback-plox.user.js#L12356) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L12367) | [12367](../youtube-playback-plox.user.js#L12367) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L12383) | [12383](../youtube-playback-plox.user.js#L12383) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12701) | [12701](../youtube-playback-plox.user.js#L12701) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L12743) | [12743](../youtube-playback-plox.user.js#L12743) |

## [Processing Functions](../youtube-playback-plox.user.js#L12763)
> [Line 12763](../youtube-playback-plox.user.js#L12763)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L12789) | [12789](../youtube-playback-plox.user.js#L12789) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L12808) | [12808](../youtube-playback-plox.user.js#L12808) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12818) | [12818](../youtube-playback-plox.user.js#L12818) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12818) | [12818](../youtube-playback-plox.user.js#L12818) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L12833) | [12833](../youtube-playback-plox.user.js#L12833) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L12838) | [12838](../youtube-playback-plox.user.js#L12838) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L12845) | [12845](../youtube-playback-plox.user.js#L12845) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L12851) | [12851](../youtube-playback-plox.user.js#L12851) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L12869) | [12869](../youtube-playback-plox.user.js#L12869) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L12939) | [12939](../youtube-playback-plox.user.js#L12939) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L12972) | [12972](../youtube-playback-plox.user.js#L12972) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L13005) | [13005](../youtube-playback-plox.user.js#L13005) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L13035) | [13035](../youtube-playback-plox.user.js#L13035) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L13046) | [13046](../youtube-playback-plox.user.js#L13046) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L13058) | [13058](../youtube-playback-plox.user.js#L13058) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L13092) | [13092](../youtube-playback-plox.user.js#L13092) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L13163) | [13163](../youtube-playback-plox.user.js#L13163) |
| `fn` | [`handleSeekingForGradient`](../youtube-playback-plox.user.js#L13192) | [13192](../youtube-playback-plox.user.js#L13192) |
| `fn` | [`handleSeekedForGradient`](../youtube-playback-plox.user.js#L13201) | [13201](../youtube-playback-plox.user.js#L13201) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L13311) | [13311](../youtube-playback-plox.user.js#L13311) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L13379) | [13379](../youtube-playback-plox.user.js#L13379) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L13539) | [13539](../youtube-playback-plox.user.js#L13539) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L13652) | [13652](../youtube-playback-plox.user.js#L13652) |

## [PlaybackController](../youtube-playback-plox.user.js#L13796)
> [Line 13796](../youtube-playback-plox.user.js#L13796)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L13841) | [13841](../youtube-playback-plox.user.js#L13841) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L13857) | [13857](../youtube-playback-plox.user.js#L13857) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L13880) | [13880](../youtube-playback-plox.user.js#L13880) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L13886) | [13886](../youtube-playback-plox.user.js#L13886) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L14105) | [14105](../youtube-playback-plox.user.js#L14105) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L14218)
> [Line 14218](../youtube-playback-plox.user.js#L14218)

| Type | Name | Line |
|---|---|---|
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L14349) | [14349](../youtube-playback-plox.user.js#L14349) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L14750)
> [Line 14750](../youtube-playback-plox.user.js#L14750)

| Type | Name | Line |
|---|---|---|
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L14773) | [14773](../youtube-playback-plox.user.js#L14773) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L14849) | [14849](../youtube-playback-plox.user.js#L14849) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L14858) | [14858](../youtube-playback-plox.user.js#L14858) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L14866) | [14866](../youtube-playback-plox.user.js#L14866) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14886) | [14886](../youtube-playback-plox.user.js#L14886) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L14939)
> [Line 14939](../youtube-playback-plox.user.js#L14939)

| Type | Name | Line |
|---|---|---|
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14951) | [14951](../youtube-playback-plox.user.js#L14951) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L14998) | [14998](../youtube-playback-plox.user.js#L14998) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L15004) | [15004](../youtube-playback-plox.user.js#L15004) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L15012) | [15012](../youtube-playback-plox.user.js#L15012) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15027) | [15027](../youtube-playback-plox.user.js#L15027) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L15147) | [15147](../youtube-playback-plox.user.js#L15147) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L15225)
> [Line 15225](../youtube-playback-plox.user.js#L15225)

_No relevant functions or constants detected._

## [📁 Update Video List](../youtube-playback-plox.user.js#L15348)
> [Line 15348](../youtube-playback-plox.user.js#L15348)

| Type | Name | Line |
|---|---|---|
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15367) | [15367](../youtube-playback-plox.user.js#L15367) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15371) | [15371](../youtube-playback-plox.user.js#L15371) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15555) | [15555](../youtube-playback-plox.user.js#L15555) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L15574) | [15574](../youtube-playback-plox.user.js#L15574) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L15700) | [15700](../youtube-playback-plox.user.js#L15700) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15777) | [15777](../youtube-playback-plox.user.js#L15777) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L15941) | [15941](../youtube-playback-plox.user.js#L15941) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L15962) | [15962](../youtube-playback-plox.user.js#L15962) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L16013) | [16013](../youtube-playback-plox.user.js#L16013) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L16133)
> [Line 16133](../youtube-playback-plox.user.js#L16133)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L16136) | [16136](../youtube-playback-plox.user.js#L16136) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L16150) | [16150](../youtube-playback-plox.user.js#L16150) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L16161)
> [Line 16161](../youtube-playback-plox.user.js#L16161)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L16288) | [16288](../youtube-playback-plox.user.js#L16288) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L16298) | [16298](../youtube-playback-plox.user.js#L16298) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L16373) | [16373](../youtube-playback-plox.user.js#L16373) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L16385)
> [Line 16385](../youtube-playback-plox.user.js#L16385)

| Type | Name | Line |
|---|---|---|
| `fn` | [`deleteFromStorage`](../youtube-playback-plox.user.js#L16519) | [16519](../youtube-playback-plox.user.js#L16519) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L16524) | [16524](../youtube-playback-plox.user.js#L16524) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L16583) | [16583](../youtube-playback-plox.user.js#L16583) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L16631) | [16631](../youtube-playback-plox.user.js#L16631) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L16637) | [16637](../youtube-playback-plox.user.js#L16637) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L16654) | [16654](../youtube-playback-plox.user.js#L16654) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L16688) | [16688](../youtube-playback-plox.user.js#L16688) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L16732) | [16732](../youtube-playback-plox.user.js#L16732) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L16814) | [16814](../youtube-playback-plox.user.js#L16814) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L16820) | [16820](../youtube-playback-plox.user.js#L16820) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L16836) | [16836](../youtube-playback-plox.user.js#L16836) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L16846) | [16846](../youtube-playback-plox.user.js#L16846) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L16854) | [16854](../youtube-playback-plox.user.js#L16854) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L16859) | [16859](../youtube-playback-plox.user.js#L16859) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L16866) | [16866](../youtube-playback-plox.user.js#L16866) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L16869) | [16869](../youtube-playback-plox.user.js#L16869) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L16873) | [16873](../youtube-playback-plox.user.js#L16873) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L16919) | [16919](../youtube-playback-plox.user.js#L16919) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L16919) | [16919](../youtube-playback-plox.user.js#L16919) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L16933) | [16933](../youtube-playback-plox.user.js#L16933) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L17207) | [17207](../youtube-playback-plox.user.js#L17207) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L17255) | [17255](../youtube-playback-plox.user.js#L17255) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17256) | [17256](../youtube-playback-plox.user.js#L17256) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L17272) | [17272](../youtube-playback-plox.user.js#L17272) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17273) | [17273](../youtube-playback-plox.user.js#L17273) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L17322) | [17322](../youtube-playback-plox.user.js#L17322) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L17467) | [17467](../youtube-playback-plox.user.js#L17467) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L17481) | [17481](../youtube-playback-plox.user.js#L17481) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L17780) | [17780](../youtube-playback-plox.user.js#L17780) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L17879) | [17879](../youtube-playback-plox.user.js#L17879) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L17962) | [17962](../youtube-playback-plox.user.js#L17962) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L18216) | [18216](../youtube-playback-plox.user.js#L18216) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L18239) | [18239](../youtube-playback-plox.user.js#L18239) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L18240) | [18240](../youtube-playback-plox.user.js#L18240) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L18312)
> [Line 18312](../youtube-playback-plox.user.js#L18312)

_No relevant functions or constants detected._

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L18464)
> [Line 18464](../youtube-playback-plox.user.js#L18464)

_No relevant functions or constants detected._

## [🔄 Data Migration](../youtube-playback-plox.user.js#L18491)
> [Line 18491](../youtube-playback-plox.user.js#L18491)

| Type | Name | Line |
|---|---|---|
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L18548) | [18548](../youtube-playback-plox.user.js#L18548) |

## [🚀 Init](../youtube-playback-plox.user.js#L18887)
> [Line 18887](../youtube-playback-plox.user.js#L18887)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L18897) | [18897](../youtube-playback-plox.user.js#L18897) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L18919) | [18919](../youtube-playback-plox.user.js#L18919) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L19248) | [19248](../youtube-playback-plox.user.js#L19248) |

