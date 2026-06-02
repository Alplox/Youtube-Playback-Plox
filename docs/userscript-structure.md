# Userscript Structure
> Auto-generated on 2026-06-02 · version 0.0.12-1
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
27. [📢 Ad Caches](#ad-caches) - [line 6344](../youtube-playback-plox.user.js#L6344)
28. [📢 Ad Detector](#ad-detector) - [line 6364](../youtube-playback-plox.user.js#L6364)
29. [🎯 VirtualScroller](#virtualscroller) - [line 6541](../youtube-playback-plox.user.js#L6541)
30. [📤 Import/Export JSON](#importexport-json) - [line 6952](../youtube-playback-plox.user.js#L6952)
31. [☁️ GitHub Backup](#github-backup) - [line 7107](../youtube-playback-plox.user.js#L7107)
32. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 7486](../youtube-playback-plox.user.js#L7486)
33. [🔄 Normalize Video Data](#normalize-video-data) - [line 7678](../youtube-playback-plox.user.js#L7678)
34. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 7760](../youtube-playback-plox.user.js#L7760)
35. [Parse FreeTube DB](#parse-freetube-db) - [line 7851](../youtube-playback-plox.user.js#L7851)
36. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 7944](../youtube-playback-plox.user.js#L7944)
37. [⬆ Export To FreeTube](#export-to-freetube) - [line 7975](../youtube-playback-plox.user.js#L7975)
38. [⬇ Import From FreeTube](#import-from-freetube) - [line 8022](../youtube-playback-plox.user.js#L8022)
39. [🔄 Insert Completion Event](#insert-completion-event) - [line 8080](../youtube-playback-plox.user.js#L8080)
40. [💾 Save Video Generic](#save-video-generic) - [line 8141](../youtube-playback-plox.user.js#L8141)
41. [📺 Helpers](#helpers) - [line 8317](../youtube-playback-plox.user.js#L8317)
42. [📺 Gets saved video data](#gets-saved-video-data) - [line 8320](../youtube-playback-plox.user.js#L8320)
43. [📺 Get Player Video ID](#get-player-video-id) - [line 8371](../youtube-playback-plox.user.js#L8371)
44. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 8450](../youtube-playback-plox.user.js#L8450)
45. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 8651](../youtube-playback-plox.user.js#L8651)
46. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 8857](../youtube-playback-plox.user.js#L8857)
47. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 8879](../youtube-playback-plox.user.js#L8879)
48. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 8907](../youtube-playback-plox.user.js#L8907)
49. [📺 get Playlist Name](#get-playlist-name) - [line 8952](../youtube-playback-plox.user.js#L8952)
50. [🕒 Time Display](#time-display) - [line 9227](../youtube-playback-plox.user.js#L9227)
51. [🖼️ Display Button Helpers](#display-button-helpers) - [line 9263](../youtube-playback-plox.user.js#L9263)
52. [🍞 Toasts](#toasts) - [line 10042](../youtube-playback-plox.user.js#L10042)
53. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 10218](../youtube-playback-plox.user.js#L10218)
54. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 10261](../youtube-playback-plox.user.js#L10261)
55. [⚙️ Settings UI](#settings-ui) - [line 10578](../youtube-playback-plox.user.js#L10578)
56. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 10973](../youtube-playback-plox.user.js#L10973)
57. [🎵 Video Selection](#video-selection) - [line 11031](../youtube-playback-plox.user.js#L11031)
58. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 11733](../youtube-playback-plox.user.js#L11733)
59. [📡 Video Observer Manager](#video-observer-manager) - [line 11995](../youtube-playback-plox.user.js#L11995)
60. [Processing Functions](#processing-functions) - [line 12778](../youtube-playback-plox.user.js#L12778)
61. [PlaybackController](#playbackcontroller) - [line 13834](../youtube-playback-plox.user.js#L13834)
62. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 14261](../youtube-playback-plox.user.js#L14261)
63. [📂 Sort UI](#sort-ui) - [line 14793](../youtube-playback-plox.user.js#L14793)
64. [📂 Filters UI](#filters-ui) - [line 14982](../youtube-playback-plox.user.js#L14982)
65. [📂 Video List UI](#video-list-ui) - [line 15268](../youtube-playback-plox.user.js#L15268)
66. [📁 Update Video List](#update-video-list) - [line 15391](../youtube-playback-plox.user.js#L15391)
67. [🔘 Floating Button](#floating-button) - [line 16176](../youtube-playback-plox.user.js#L16176)
68. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 16204](../youtube-playback-plox.user.js#L16204)
69. [📂 Video Entry](#video-entry) - [line 16428](../youtube-playback-plox.user.js#L16428)
70. [🗑️ Clear All Data](#clear-all-data) - [line 18355](../youtube-playback-plox.user.js#L18355)
71. [⚙️ Menu Commands](#menu-commands) - [line 18507](../youtube-playback-plox.user.js#L18507)
72. [🔄 Data Migration](#data-migration) - [line 18534](../youtube-playback-plox.user.js#L18534)
73. [🚀 Init](#init) - [line 18930](../youtube-playback-plox.user.js#L18930)

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
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5888) | [5888](../youtube-playback-plox.user.js#L5888) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5888) | [5888](../youtube-playback-plox.user.js#L5888) |
| `fn` | [`isSupported`](../youtube-playback-plox.user.js#L5892) | [5892](../youtube-playback-plox.user.js#L5892) |
| `module` | [`isSupported`](../youtube-playback-plox.user.js#L5892) | [5892](../youtube-playback-plox.user.js#L5892) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L6040) | [6040](../youtube-playback-plox.user.js#L6040) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L6173) | [6173](../youtube-playback-plox.user.js#L6173) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L6191) | [6191](../youtube-playback-plox.user.js#L6191) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L6212) | [6212](../youtube-playback-plox.user.js#L6212) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6225) | [6225](../youtube-playback-plox.user.js#L6225) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6289) | [6289](../youtube-playback-plox.user.js#L6289) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6307) | [6307](../youtube-playback-plox.user.js#L6307) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L6315) | [6315](../youtube-playback-plox.user.js#L6315) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L6333) | [6333](../youtube-playback-plox.user.js#L6333) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L6344)
> [Line 6344](../youtube-playback-plox.user.js#L6344)

_No relevant functions or constants detected._

## [📢 Ad Detector](../youtube-playback-plox.user.js#L6364)
> [Line 6364](../youtube-playback-plox.user.js#L6364)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L6366) | [6366](../youtube-playback-plox.user.js#L6366) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L6417) | [6417](../youtube-playback-plox.user.js#L6417) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L6541)
> [Line 6541](../youtube-playback-plox.user.js#L6541)

_No relevant functions or constants detected._

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L6952)
> [Line 6952](../youtube-playback-plox.user.js#L6952)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L6959) | [6959](../youtube-playback-plox.user.js#L6959) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L6962) | [6962](../youtube-playback-plox.user.js#L6962) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L6990) | [6990](../youtube-playback-plox.user.js#L6990) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L7033) | [7033](../youtube-playback-plox.user.js#L7033) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L7107)
> [Line 7107](../youtube-playback-plox.user.js#L7107)

| Type | Name | Line |
|---|---|---|
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L7113) | [7113](../youtube-playback-plox.user.js#L7113) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L7141) | [7141](../youtube-playback-plox.user.js#L7141) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7142) | [7142](../youtube-playback-plox.user.js#L7142) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L7205) | [7205](../youtube-playback-plox.user.js#L7205) |
| `fn` | [`cleanOwner`](../youtube-playback-plox.user.js#L7216) | [7216](../youtube-playback-plox.user.js#L7216) |
| `fn` | [`cleanName`](../youtube-playback-plox.user.js#L7217) | [7217](../youtube-playback-plox.user.js#L7217) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7218) | [7218](../youtube-playback-plox.user.js#L7218) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L7349) | [7349](../youtube-playback-plox.user.js#L7349) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7361) | [7361](../youtube-playback-plox.user.js#L7361) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L7427) | [7427](../youtube-playback-plox.user.js#L7427) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L7457) | [7457](../youtube-playback-plox.user.js#L7457) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L7486)
> [Line 7486](../youtube-playback-plox.user.js#L7486)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L7487) | [7487](../youtube-playback-plox.user.js#L7487) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L7523) | [7523](../youtube-playback-plox.user.js#L7523) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L7678)
> [Line 7678](../youtube-playback-plox.user.js#L7678)

_No relevant functions or constants detected._

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L7760)
> [Line 7760](../youtube-playback-plox.user.js#L7760)

_No relevant functions or constants detected._

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L7851)
> [Line 7851](../youtube-playback-plox.user.js#L7851)

_No relevant functions or constants detected._

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L7944)
> [Line 7944](../youtube-playback-plox.user.js#L7944)

| Type | Name | Line |
|---|---|---|
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L7963) | [7963](../youtube-playback-plox.user.js#L7963) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L7975)
> [Line 7975](../youtube-playback-plox.user.js#L7975)

_No relevant functions or constants detected._

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L8022)
> [Line 8022](../youtube-playback-plox.user.js#L8022)

_No relevant functions or constants detected._

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L8080)
> [Line 8080](../youtube-playback-plox.user.js#L8080)

| Type | Name | Line |
|---|---|---|
| `fn` | [`base`](../youtube-playback-plox.user.js#L8089) | [8089](../youtube-playback-plox.user.js#L8089) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L8130) | [8130](../youtube-playback-plox.user.js#L8130) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L8141)
> [Line 8141](../youtube-playback-plox.user.js#L8141)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8196) | [8196](../youtube-playback-plox.user.js#L8196) |

## [📺 Helpers](../youtube-playback-plox.user.js#L8317)
> [Line 8317](../youtube-playback-plox.user.js#L8317)

_No relevant functions or constants detected._

## [📺 Gets saved video data](../youtube-playback-plox.user.js#L8320)
> [Line 8320](../youtube-playback-plox.user.js#L8320)

| Type | Name | Line |
|---|---|---|
| `fn` | [`keys`](../youtube-playback-plox.user.js#L8346) | [8346](../youtube-playback-plox.user.js#L8346) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L8371)
> [Line 8371](../youtube-playback-plox.user.js#L8371)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L8407) | [8407](../youtube-playback-plox.user.js#L8407) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L8450)
> [Line 8450](../youtube-playback-plox.user.js#L8450)

_No relevant functions or constants detected._

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L8651)
> [Line 8651](../youtube-playback-plox.user.js#L8651)

| Type | Name | Line |
|---|---|---|
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L8748) | [8748](../youtube-playback-plox.user.js#L8748) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L8857)
> [Line 8857](../youtube-playback-plox.user.js#L8857)

_No relevant functions or constants detected._

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L8879)
> [Line 8879](../youtube-playback-plox.user.js#L8879)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L8907)
> [Line 8907](../youtube-playback-plox.user.js#L8907)

_No relevant functions or constants detected._

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L8952)
> [Line 8952](../youtube-playback-plox.user.js#L8952)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L8973) | [8973](../youtube-playback-plox.user.js#L8973) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L9115) | [9115](../youtube-playback-plox.user.js#L9115) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L9200) | [9200](../youtube-playback-plox.user.js#L9200) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L9227)
> [Line 9227](../youtube-playback-plox.user.js#L9227)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L9253) | [9253](../youtube-playback-plox.user.js#L9253) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L9263)
> [Line 9263](../youtube-playback-plox.user.js#L9263)

| Type | Name | Line |
|---|---|---|
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9545) | [9545](../youtube-playback-plox.user.js#L9545) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9545) | [9545](../youtube-playback-plox.user.js#L9545) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L9557) | [9557](../youtube-playback-plox.user.js#L9557) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L9567) | [9567](../youtube-playback-plox.user.js#L9567) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L9575) | [9575](../youtube-playback-plox.user.js#L9575) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L9583) | [9583](../youtube-playback-plox.user.js#L9583) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L9606) | [9606](../youtube-playback-plox.user.js#L9606) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L9618) | [9618](../youtube-playback-plox.user.js#L9618) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L9621) | [9621](../youtube-playback-plox.user.js#L9621) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L9631) | [9631](../youtube-playback-plox.user.js#L9631) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L9636) | [9636](../youtube-playback-plox.user.js#L9636) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L9659) | [9659](../youtube-playback-plox.user.js#L9659) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L9678) | [9678](../youtube-playback-plox.user.js#L9678) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L9686) | [9686](../youtube-playback-plox.user.js#L9686) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L9730) | [9730](../youtube-playback-plox.user.js#L9730) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L9785) | [9785](../youtube-playback-plox.user.js#L9785) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L9844) | [9844](../youtube-playback-plox.user.js#L9844) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L9941) | [9941](../youtube-playback-plox.user.js#L9941) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L9956) | [9956](../youtube-playback-plox.user.js#L9956) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L9960) | [9960](../youtube-playback-plox.user.js#L9960) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L9967) | [9967](../youtube-playback-plox.user.js#L9967) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L9985) | [9985](../youtube-playback-plox.user.js#L9985) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L10042)
> [Line 10042](../youtube-playback-plox.user.js#L10042)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L10078) | [10078](../youtube-playback-plox.user.js#L10078) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L10218)
> [Line 10218](../youtube-playback-plox.user.js#L10218)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L10221) | [10221](../youtube-playback-plox.user.js#L10221) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L10261)
> [Line 10261](../youtube-playback-plox.user.js#L10261)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L10300) | [10300](../youtube-playback-plox.user.js#L10300) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L10306) | [10306](../youtube-playback-plox.user.js#L10306) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L10314) | [10314](../youtube-playback-plox.user.js#L10314) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L10360) | [10360](../youtube-playback-plox.user.js#L10360) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L10364) | [10364](../youtube-playback-plox.user.js#L10364) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L10367) | [10367](../youtube-playback-plox.user.js#L10367) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L10383) | [10383](../youtube-playback-plox.user.js#L10383) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L10392) | [10392](../youtube-playback-plox.user.js#L10392) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L10422) | [10422](../youtube-playback-plox.user.js#L10422) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L10436) | [10436](../youtube-playback-plox.user.js#L10436) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L10440) | [10440](../youtube-playback-plox.user.js#L10440) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L10578)
> [Line 10578](../youtube-playback-plox.user.js#L10578)

| Type | Name | Line |
|---|---|---|
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L10598) | [10598](../youtube-playback-plox.user.js#L10598) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L10682) | [10682](../youtube-playback-plox.user.js#L10682) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10763) | [10763](../youtube-playback-plox.user.js#L10763) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10764) | [10764](../youtube-playback-plox.user.js#L10764) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10844) | [10844](../youtube-playback-plox.user.js#L10844) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10845) | [10845](../youtube-playback-plox.user.js#L10845) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L10973)
> [Line 10973](../youtube-playback-plox.user.js#L10973)

_No relevant functions or constants detected._

## [🎵 Video Selection](../youtube-playback-plox.user.js#L11031)
> [Line 11031](../youtube-playback-plox.user.js#L11031)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11121) | [11121](../youtube-playback-plox.user.js#L11121) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11128) | [11128](../youtube-playback-plox.user.js#L11128) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L11213) | [11213](../youtube-playback-plox.user.js#L11213) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L11217) | [11217](../youtube-playback-plox.user.js#L11217) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L11226) | [11226](../youtube-playback-plox.user.js#L11226) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L11499) | [11499](../youtube-playback-plox.user.js#L11499) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L11646) | [11646](../youtube-playback-plox.user.js#L11646) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L11733)
> [Line 11733](../youtube-playback-plox.user.js#L11733)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11739) | [11739](../youtube-playback-plox.user.js#L11739) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11739) | [11739](../youtube-playback-plox.user.js#L11739) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L11740) | [11740](../youtube-playback-plox.user.js#L11740) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L11749) | [11749](../youtube-playback-plox.user.js#L11749) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L11754) | [11754](../youtube-playback-plox.user.js#L11754) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L11765) | [11765](../youtube-playback-plox.user.js#L11765) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L11782) | [11782](../youtube-playback-plox.user.js#L11782) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L11816) | [11816](../youtube-playback-plox.user.js#L11816) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L11841) | [11841](../youtube-playback-plox.user.js#L11841) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L11843) | [11843](../youtube-playback-plox.user.js#L11843) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11862) | [11862](../youtube-playback-plox.user.js#L11862) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11862) | [11862](../youtube-playback-plox.user.js#L11862) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L11864) | [11864](../youtube-playback-plox.user.js#L11864) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L11887) | [11887](../youtube-playback-plox.user.js#L11887) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L11887) | [11887](../youtube-playback-plox.user.js#L11887) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L11898) | [11898](../youtube-playback-plox.user.js#L11898) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L11903) | [11903](../youtube-playback-plox.user.js#L11903) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L11908) | [11908](../youtube-playback-plox.user.js#L11908) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L11920) | [11920](../youtube-playback-plox.user.js#L11920) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L11937) | [11937](../youtube-playback-plox.user.js#L11937) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L11937) | [11937](../youtube-playback-plox.user.js#L11937) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L11939) | [11939](../youtube-playback-plox.user.js#L11939) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L11947) | [11947](../youtube-playback-plox.user.js#L11947) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L11995)
> [Line 11995](../youtube-playback-plox.user.js#L11995)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12000) | [12000](../youtube-playback-plox.user.js#L12000) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12000) | [12000](../youtube-playback-plox.user.js#L12000) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L12020) | [12020](../youtube-playback-plox.user.js#L12020) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L12035) | [12035](../youtube-playback-plox.user.js#L12035) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L12051) | [12051](../youtube-playback-plox.user.js#L12051) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L12088) | [12088](../youtube-playback-plox.user.js#L12088) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L12122) | [12122](../youtube-playback-plox.user.js#L12122) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L12123) | [12123](../youtube-playback-plox.user.js#L12123) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L12154) | [12154](../youtube-playback-plox.user.js#L12154) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L12210) | [12210](../youtube-playback-plox.user.js#L12210) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L12277) | [12277](../youtube-playback-plox.user.js#L12277) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12285) | [12285](../youtube-playback-plox.user.js#L12285) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L12292) | [12292](../youtube-playback-plox.user.js#L12292) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L12330) | [12330](../youtube-playback-plox.user.js#L12330) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L12370) | [12370](../youtube-playback-plox.user.js#L12370) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L12381) | [12381](../youtube-playback-plox.user.js#L12381) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L12397) | [12397](../youtube-playback-plox.user.js#L12397) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12716) | [12716](../youtube-playback-plox.user.js#L12716) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L12758) | [12758](../youtube-playback-plox.user.js#L12758) |

## [Processing Functions](../youtube-playback-plox.user.js#L12778)
> [Line 12778](../youtube-playback-plox.user.js#L12778)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L12804) | [12804](../youtube-playback-plox.user.js#L12804) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L12823) | [12823](../youtube-playback-plox.user.js#L12823) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12833) | [12833](../youtube-playback-plox.user.js#L12833) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12833) | [12833](../youtube-playback-plox.user.js#L12833) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L12848) | [12848](../youtube-playback-plox.user.js#L12848) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L12853) | [12853](../youtube-playback-plox.user.js#L12853) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L12860) | [12860](../youtube-playback-plox.user.js#L12860) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L12866) | [12866](../youtube-playback-plox.user.js#L12866) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L12884) | [12884](../youtube-playback-plox.user.js#L12884) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L12954) | [12954](../youtube-playback-plox.user.js#L12954) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L12987) | [12987](../youtube-playback-plox.user.js#L12987) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L13020) | [13020](../youtube-playback-plox.user.js#L13020) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L13050) | [13050](../youtube-playback-plox.user.js#L13050) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L13061) | [13061](../youtube-playback-plox.user.js#L13061) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L13073) | [13073](../youtube-playback-plox.user.js#L13073) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L13107) | [13107](../youtube-playback-plox.user.js#L13107) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L13178) | [13178](../youtube-playback-plox.user.js#L13178) |
| `fn` | [`handleSeekingForGradient`](../youtube-playback-plox.user.js#L13207) | [13207](../youtube-playback-plox.user.js#L13207) |
| `fn` | [`handleSeekedForGradient`](../youtube-playback-plox.user.js#L13216) | [13216](../youtube-playback-plox.user.js#L13216) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L13327) | [13327](../youtube-playback-plox.user.js#L13327) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L13396) | [13396](../youtube-playback-plox.user.js#L13396) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L13571) | [13571](../youtube-playback-plox.user.js#L13571) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L13684) | [13684](../youtube-playback-plox.user.js#L13684) |

## [PlaybackController](../youtube-playback-plox.user.js#L13834)
> [Line 13834](../youtube-playback-plox.user.js#L13834)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L13882) | [13882](../youtube-playback-plox.user.js#L13882) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L13898) | [13898](../youtube-playback-plox.user.js#L13898) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L13921) | [13921](../youtube-playback-plox.user.js#L13921) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L13927) | [13927](../youtube-playback-plox.user.js#L13927) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L14148) | [14148](../youtube-playback-plox.user.js#L14148) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L14261)
> [Line 14261](../youtube-playback-plox.user.js#L14261)

| Type | Name | Line |
|---|---|---|
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L14392) | [14392](../youtube-playback-plox.user.js#L14392) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L14793)
> [Line 14793](../youtube-playback-plox.user.js#L14793)

| Type | Name | Line |
|---|---|---|
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L14816) | [14816](../youtube-playback-plox.user.js#L14816) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L14892) | [14892](../youtube-playback-plox.user.js#L14892) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L14901) | [14901](../youtube-playback-plox.user.js#L14901) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L14909) | [14909](../youtube-playback-plox.user.js#L14909) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14929) | [14929](../youtube-playback-plox.user.js#L14929) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L14982)
> [Line 14982](../youtube-playback-plox.user.js#L14982)

| Type | Name | Line |
|---|---|---|
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14994) | [14994](../youtube-playback-plox.user.js#L14994) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L15041) | [15041](../youtube-playback-plox.user.js#L15041) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L15047) | [15047](../youtube-playback-plox.user.js#L15047) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L15055) | [15055](../youtube-playback-plox.user.js#L15055) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15070) | [15070](../youtube-playback-plox.user.js#L15070) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L15190) | [15190](../youtube-playback-plox.user.js#L15190) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L15268)
> [Line 15268](../youtube-playback-plox.user.js#L15268)

_No relevant functions or constants detected._

## [📁 Update Video List](../youtube-playback-plox.user.js#L15391)
> [Line 15391](../youtube-playback-plox.user.js#L15391)

| Type | Name | Line |
|---|---|---|
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15410) | [15410](../youtube-playback-plox.user.js#L15410) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15414) | [15414](../youtube-playback-plox.user.js#L15414) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15598) | [15598](../youtube-playback-plox.user.js#L15598) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L15617) | [15617](../youtube-playback-plox.user.js#L15617) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L15743) | [15743](../youtube-playback-plox.user.js#L15743) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15820) | [15820](../youtube-playback-plox.user.js#L15820) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L15984) | [15984](../youtube-playback-plox.user.js#L15984) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L16005) | [16005](../youtube-playback-plox.user.js#L16005) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L16056) | [16056](../youtube-playback-plox.user.js#L16056) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L16176)
> [Line 16176](../youtube-playback-plox.user.js#L16176)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L16179) | [16179](../youtube-playback-plox.user.js#L16179) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L16193) | [16193](../youtube-playback-plox.user.js#L16193) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L16204)
> [Line 16204](../youtube-playback-plox.user.js#L16204)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L16331) | [16331](../youtube-playback-plox.user.js#L16331) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L16341) | [16341](../youtube-playback-plox.user.js#L16341) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L16416) | [16416](../youtube-playback-plox.user.js#L16416) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L16428)
> [Line 16428](../youtube-playback-plox.user.js#L16428)

| Type | Name | Line |
|---|---|---|
| `fn` | [`deleteFromStorage`](../youtube-playback-plox.user.js#L16562) | [16562](../youtube-playback-plox.user.js#L16562) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L16567) | [16567](../youtube-playback-plox.user.js#L16567) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L16626) | [16626](../youtube-playback-plox.user.js#L16626) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L16674) | [16674](../youtube-playback-plox.user.js#L16674) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L16680) | [16680](../youtube-playback-plox.user.js#L16680) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L16697) | [16697](../youtube-playback-plox.user.js#L16697) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L16731) | [16731](../youtube-playback-plox.user.js#L16731) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L16775) | [16775](../youtube-playback-plox.user.js#L16775) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L16857) | [16857](../youtube-playback-plox.user.js#L16857) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L16863) | [16863](../youtube-playback-plox.user.js#L16863) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L16879) | [16879](../youtube-playback-plox.user.js#L16879) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L16889) | [16889](../youtube-playback-plox.user.js#L16889) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L16897) | [16897](../youtube-playback-plox.user.js#L16897) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L16902) | [16902](../youtube-playback-plox.user.js#L16902) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L16909) | [16909](../youtube-playback-plox.user.js#L16909) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L16912) | [16912](../youtube-playback-plox.user.js#L16912) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L16916) | [16916](../youtube-playback-plox.user.js#L16916) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L16962) | [16962](../youtube-playback-plox.user.js#L16962) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L16962) | [16962](../youtube-playback-plox.user.js#L16962) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L16976) | [16976](../youtube-playback-plox.user.js#L16976) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L17250) | [17250](../youtube-playback-plox.user.js#L17250) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L17298) | [17298](../youtube-playback-plox.user.js#L17298) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17299) | [17299](../youtube-playback-plox.user.js#L17299) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L17315) | [17315](../youtube-playback-plox.user.js#L17315) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17316) | [17316](../youtube-playback-plox.user.js#L17316) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L17365) | [17365](../youtube-playback-plox.user.js#L17365) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L17510) | [17510](../youtube-playback-plox.user.js#L17510) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L17524) | [17524](../youtube-playback-plox.user.js#L17524) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L17823) | [17823](../youtube-playback-plox.user.js#L17823) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L17922) | [17922](../youtube-playback-plox.user.js#L17922) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L18005) | [18005](../youtube-playback-plox.user.js#L18005) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L18259) | [18259](../youtube-playback-plox.user.js#L18259) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L18282) | [18282](../youtube-playback-plox.user.js#L18282) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L18283) | [18283](../youtube-playback-plox.user.js#L18283) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L18355)
> [Line 18355](../youtube-playback-plox.user.js#L18355)

_No relevant functions or constants detected._

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L18507)
> [Line 18507](../youtube-playback-plox.user.js#L18507)

_No relevant functions or constants detected._

## [🔄 Data Migration](../youtube-playback-plox.user.js#L18534)
> [Line 18534](../youtube-playback-plox.user.js#L18534)

| Type | Name | Line |
|---|---|---|
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L18591) | [18591](../youtube-playback-plox.user.js#L18591) |

## [🚀 Init](../youtube-playback-plox.user.js#L18930)
> [Line 18930](../youtube-playback-plox.user.js#L18930)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L18940) | [18940](../youtube-playback-plox.user.js#L18940) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L18962) | [18962](../youtube-playback-plox.user.js#L18962) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L19291) | [19291](../youtube-playback-plox.user.js#L19291) |

