# Userscript Structure
> Auto-generated on 2026-05-24 · version 0.0.10-2
> **DO NOT EDIT MANUALLY** - regenerate with `node ./scripts/generate-structure.mjs`

---

## Sections index

1. [🔍 Logger System](#logger-system) - [line 138](../youtube-playback-plox.user.js#L138)
2. [🛡️ Initialization Guard (SPA Safety)](#initialization-guard-spa-safety) - [line 227](../youtube-playback-plox.user.js#L227)
3. [📦 Config](#config) - [line 297](../youtube-playback-plox.user.js#L297)
4. [📊 Global Constants](#global-constants) - [line 425](../youtube-playback-plox.user.js#L425)
5. [📊 Global Variables](#global-variables) - [line 434](../youtube-playback-plox.user.js#L434)
6. [🌐 Translations](#translations) - [line 470](../youtube-playback-plox.user.js#L470)
7. [🔧 Utils](#utils) - [line 907](../youtube-playback-plox.user.js#L907)
8. [🔧 Escape HTML](#escape-html) - [line 910](../youtube-playback-plox.user.js#L910)
9. [🔧 Is Visibly Displayed](#is-visibly-displayed) - [line 991](../youtube-playback-plox.user.js#L991)
10. [🔧 Format Time](#format-time) - [line 1015](../youtube-playback-plox.user.js#L1015)
11. [🔧 parseTimeToSeconds](#parsetimetoseconds) - [line 1110](../youtube-playback-plox.user.js#L1110)
12. [🔧 normalizeSeconds](#normalizeseconds) - [line 1158](../youtube-playback-plox.user.js#L1158)
13. [🔧 setInnerHTML](#setinnerhtml) - [line 1184](../youtube-playback-plox.user.js#L1184)
14. [🔧 Crear Elemento](#crear-elemento) - [line 1244](../youtube-playback-plox.user.js#L1244)
15. [🔧 Debounce](#debounce) - [line 1381](../youtube-playback-plox.user.js#L1381)
16. [🗄️ Event Handlers store](#event-handlers-store) - [line 1406](../youtube-playback-plox.user.js#L1406)
17. [📝 Selector System](#selector-system) - [line 1489](../youtube-playback-plox.user.js#L1489)
18. [💾 Simple LRU Cache](#simple-lru-cache) - [line 1798](../youtube-playback-plox.user.js#L1798)
19. [⚙️ DOM Cache System](#dom-cache-system) - [line 1856](../youtube-playback-plox.user.js#L1856)
20. [🌐 Translation Functions](#translation-functions) - [line 2198](../youtube-playback-plox.user.js#L2198)
21. [🎨 Styles](#styles) - [line 2364](../youtube-playback-plox.user.js#L2364)
22. [🎨 Theme](#theme) - [line 4972](../youtube-playback-plox.user.js#L4972)
23. [🎨 SVG Icons](#svg-icons) - [line 5050](../youtube-playback-plox.user.js#L5050)
24. [🎨 Estilo barra progreso](#estilo-barra-progreso) - [line 5212](../youtube-playback-plox.user.js#L5212)
25. [💾 Storage + Settings](#storage-settings) - [line 5500](../youtube-playback-plox.user.js#L5500)
26. [📢 Ad Caches](#ad-caches) - [line 6112](../youtube-playback-plox.user.js#L6112)
27. [📢 Ad Detector](#ad-detector) - [line 6135](../youtube-playback-plox.user.js#L6135)
28. [🎯 VirtualScroller](#virtualscroller) - [line 6311](../youtube-playback-plox.user.js#L6311)
29. [📤 Import/Export JSON](#importexport-json) - [line 6730](../youtube-playback-plox.user.js#L6730)
30. [☁️ GitHub Backup](#github-backup) - [line 6885](../youtube-playback-plox.user.js#L6885)
31. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 7252](../youtube-playback-plox.user.js#L7252)
32. [🔄 Normalize Video Data](#normalize-video-data) - [line 7454](../youtube-playback-plox.user.js#L7454)
33. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 7536](../youtube-playback-plox.user.js#L7536)
34. [Parse FreeTube DB](#parse-freetube-db) - [line 7627](../youtube-playback-plox.user.js#L7627)
35. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 7707](../youtube-playback-plox.user.js#L7707)
36. [⬆ Export To FreeTube](#export-to-freetube) - [line 7738](../youtube-playback-plox.user.js#L7738)
37. [⬇ Import From FreeTube](#import-from-freetube) - [line 7785](../youtube-playback-plox.user.js#L7785)
38. [🔄 Insert Completion Event](#insert-completion-event) - [line 7843](../youtube-playback-plox.user.js#L7843)
39. [💾 Save Video Generic](#save-video-generic) - [line 7886](../youtube-playback-plox.user.js#L7886)
40. [📺 Helpers](#helpers) - [line 8054](../youtube-playback-plox.user.js#L8054)
41. [📺 Obtiene datos guardados de un video](#obtiene-datos-guardados-de-un-video) - [line 8057](../youtube-playback-plox.user.js#L8057)
42. [📺 Get Player Video ID](#get-player-video-id) - [line 8108](../youtube-playback-plox.user.js#L8108)
43. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 8187](../youtube-playback-plox.user.js#L8187)
44. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 8388](../youtube-playback-plox.user.js#L8388)
45. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 8594](../youtube-playback-plox.user.js#L8594)
46. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 8616](../youtube-playback-plox.user.js#L8616)
47. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 8644](../youtube-playback-plox.user.js#L8644)
48. [📺 get Playlist Name](#get-playlist-name) - [line 8689](../youtube-playback-plox.user.js#L8689)
49. [🕒 Time Display](#time-display) - [line 8964](../youtube-playback-plox.user.js#L8964)
50. [🖼️ Display Button Helpers](#display-button-helpers) - [line 9000](../youtube-playback-plox.user.js#L9000)
51. [🍞 Toasts](#toasts) - [line 9794](../youtube-playback-plox.user.js#L9794)
52. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 9969](../youtube-playback-plox.user.js#L9969)
53. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 10011](../youtube-playback-plox.user.js#L10011)
54. [⚙️ Settings UI](#settings-ui) - [line 10328](../youtube-playback-plox.user.js#L10328)
55. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 10716](../youtube-playback-plox.user.js#L10716)
56. [🎵 Selección de Videos](#seleccin-de-videos) - [line 10774](../youtube-playback-plox.user.js#L10774)
57. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 11489](../youtube-playback-plox.user.js#L11489)
58. [📡 Video Observer Manager](#video-observer-manager) - [line 11741](../youtube-playback-plox.user.js#L11741)
59. [Processing Functions](#processing-functions) - [line 12631](../youtube-playback-plox.user.js#L12631)
60. [PlaybackController](#playbackcontroller) - [line 13499](../youtube-playback-plox.user.js#L13499)
61. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 13892](../youtube-playback-plox.user.js#L13892)
62. [📂 Sort UI](#sort-ui) - [line 14409](../youtube-playback-plox.user.js#L14409)
63. [📂 Filters UI](#filters-ui) - [line 14597](../youtube-playback-plox.user.js#L14597)
64. [📂 Video List UI](#video-list-ui) - [line 14882](../youtube-playback-plox.user.js#L14882)
65. [📁 Update Video List](#update-video-list) - [line 14999](../youtube-playback-plox.user.js#L14999)
66. [🔘 Floating Button](#floating-button) - [line 15806](../youtube-playback-plox.user.js#L15806)
67. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 15834](../youtube-playback-plox.user.js#L15834)
68. [📂 Video Entry](#video-entry) - [line 16058](../youtube-playback-plox.user.js#L16058)
69. [🗑️ Clear All Data](#clear-all-data) - [line 17965](../youtube-playback-plox.user.js#L17965)
70. [⚙️ Menu Commands](#menu-commands) - [line 18117](../youtube-playback-plox.user.js#L18117)
71. [🔄 Migración de Datos](#migracin-de-datos) - [line 18144](../youtube-playback-plox.user.js#L18144)
72. [🚀 Init](#init) - [line 18534](../youtube-playback-plox.user.js#L18534)

---

## [🔍 Logger System](../youtube-playback-plox.user.js#L138)
> [Line 138](../youtube-playback-plox.user.js#L138)

| Type | Name | Line |
|---|---|---|
| `fn` | [`noop`](../youtube-playback-plox.user.js#L150) | [150](../youtube-playback-plox.user.js#L150) |
| `fn` | [`build`](../youtube-playback-plox.user.js#L152) | [152](../youtube-playback-plox.user.js#L152) |
| `fn` | [`msg`](../youtube-playback-plox.user.js#L196) | [196](../youtube-playback-plox.user.js#L196) |

## [🛡️ Initialization Guard (SPA Safety)](../youtube-playback-plox.user.js#L227)
> [Line 227](../youtube-playback-plox.user.js#L227)

_No relevant functions or constants detected._

## [📦 Config](../youtube-playback-plox.user.js#L297)
> [Line 297](../youtube-playback-plox.user.js#L297)

_No relevant functions or constants detected._

## [📊 Global Constants](../youtube-playback-plox.user.js#L425)
> [Line 425](../youtube-playback-plox.user.js#L425)

_No relevant functions or constants detected._

## [📊 Global Variables](../youtube-playback-plox.user.js#L434)
> [Line 434](../youtube-playback-plox.user.js#L434)

_No relevant functions or constants detected._

## [🌐 Translations](../youtube-playback-plox.user.js#L470)
> [Line 470](../youtube-playback-plox.user.js#L470)

| Type | Name | Line |
|---|---|---|
| `fn` | [`fetchUrl`](../youtube-playback-plox.user.js#L815) | [815](../youtube-playback-plox.user.js#L815) |

## [🔧 Utils](../youtube-playback-plox.user.js#L907)
> [Line 907](../youtube-playback-plox.user.js#L907)

_No relevant functions or constants detected._

## [🔧 Escape HTML](../youtube-playback-plox.user.js#L910)
> [Line 910](../youtube-playback-plox.user.js#L910)

| Type | Name | Line |
|---|---|---|
| `fn` | [`unescapeHTML`](../youtube-playback-plox.user.js#L916) | [916](../youtube-playback-plox.user.js#L916) |
| `fn` | [`escapeHTML`](../youtube-playback-plox.user.js#L938) | [938](../youtube-playback-plox.user.js#L938) |

## [🔧 Is Visibly Displayed](../youtube-playback-plox.user.js#L991)
> [Line 991](../youtube-playback-plox.user.js#L991)

_No relevant functions or constants detected._

## [🔧 Format Time](../youtube-playback-plox.user.js#L1015)
> [Line 1015](../youtube-playback-plox.user.js#L1015)

| Type | Name | Line |
|---|---|---|
| `fn` | [`formatTime`](../youtube-playback-plox.user.js#L1038) | [1038](../youtube-playback-plox.user.js#L1038) |

## [🔧 parseTimeToSeconds](../youtube-playback-plox.user.js#L1110)
> [Line 1110](../youtube-playback-plox.user.js#L1110)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseTimeToSeconds`](../youtube-playback-plox.user.js#L1133) | [1133](../youtube-playback-plox.user.js#L1133) |

## [🔧 normalizeSeconds](../youtube-playback-plox.user.js#L1158)
> [Line 1158](../youtube-playback-plox.user.js#L1158)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeSeconds`](../youtube-playback-plox.user.js#L1177) | [1177](../youtube-playback-plox.user.js#L1177) |

## [🔧 setInnerHTML](../youtube-playback-plox.user.js#L1184)
> [Line 1184](../youtube-playback-plox.user.js#L1184)

_No relevant functions or constants detected._

## [🔧 Crear Elemento](../youtube-playback-plox.user.js#L1244)
> [Line 1244](../youtube-playback-plox.user.js#L1244)

| Type | Name | Line |
|---|---|---|
| `fn` | [`append`](../youtube-playback-plox.user.js#L1324) | [1324](../youtube-playback-plox.user.js#L1324) |
| `fn` | [`clamp`](../youtube-playback-plox.user.js#L1354) | [1354](../youtube-playback-plox.user.js#L1354) |

## [🔧 Debounce](../youtube-playback-plox.user.js#L1381)
> [Line 1381](../youtube-playback-plox.user.js#L1381)

| Type | Name | Line |
|---|---|---|
| `fn` | [`debounce`](../youtube-playback-plox.user.js#L1391) | [1391](../youtube-playback-plox.user.js#L1391) |

## [🗄️ Event Handlers store](../youtube-playback-plox.user.js#L1406)
> [Line 1406](../youtube-playback-plox.user.js#L1406)

| Type | Name | Line |
|---|---|---|
| `fn` | [`dispose`](../youtube-playback-plox.user.js#L1483) | [1483](../youtube-playback-plox.user.js#L1483) |

## [📝 Selector System](../youtube-playback-plox.user.js#L1489)
> [Line 1489](../youtube-playback-plox.user.js#L1489)

| Type | Name | Line |
|---|---|---|
| `module` | [`PREFIX`](../youtube-playback-plox.user.js#L1559) | [1559](../youtube-playback-plox.user.js#L1559) |
| `fn` | [`deepFreeze`](../youtube-playback-plox.user.js#L1583) | [1583](../youtube-playback-plox.user.js#L1583) |
| `fn` | [`createSelectorSystem`](../youtube-playback-plox.user.js#L1614) | [1614](../youtube-playback-plox.user.js#L1614) |

## [💾 Simple LRU Cache](../youtube-playback-plox.user.js#L1798)
> [Line 1798](../youtube-playback-plox.user.js#L1798)

_No relevant functions or constants detected._

## [⚙️ DOM Cache System](../youtube-playback-plox.user.js#L1856)
> [Line 1856](../youtube-playback-plox.user.js#L1856)

| Type | Name | Line |
|---|---|---|
| `fn` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1873) | [1873](../youtube-playback-plox.user.js#L1873) |
| `module` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1873) | [1873](../youtube-playback-plox.user.js#L1873) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L1898) | [1898](../youtube-playback-plox.user.js#L1898) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L1922) | [1922](../youtube-playback-plox.user.js#L1922) |

## [🌐 Translation Functions](../youtube-playback-plox.user.js#L2198)
> [Line 2198](../youtube-playback-plox.user.js#L2198)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normParams`](../youtube-playback-plox.user.js#L2222) | [2222](../youtube-playback-plox.user.js#L2222) |
| `fn` | [`candidates`](../youtube-playback-plox.user.js#L2321) | [2321](../youtube-playback-plox.user.js#L2321) |
| `fn` | [`normalized`](../youtube-playback-plox.user.js#L2340) | [2340](../youtube-playback-plox.user.js#L2340) |

## [🎨 Styles](../youtube-playback-plox.user.js#L2364)
> [Line 2364](../youtube-playback-plox.user.js#L2364)

_No relevant functions or constants detected._

## [🎨 Theme](../youtube-playback-plox.user.js#L4972)
> [Line 4972](../youtube-playback-plox.user.js#L4972)

_No relevant functions or constants detected._

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L5050)
> [Line 5050](../youtube-playback-plox.user.js#L5050)

_No relevant functions or constants detected._

## [🎨 Estilo barra progreso](../youtube-playback-plox.user.js#L5212)
> [Line 5212](../youtube-playback-plox.user.js#L5212)

| Type | Name | Line |
|---|---|---|
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L5477) | [5477](../youtube-playback-plox.user.js#L5477) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L5500)
> [Line 5500](../youtube-playback-plox.user.js#L5500)

| Type | Name | Line |
|---|---|---|
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L5510) | [5510](../youtube-playback-plox.user.js#L5510) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L5510) | [5510](../youtube-playback-plox.user.js#L5510) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5654) | [5654](../youtube-playback-plox.user.js#L5654) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5654) | [5654](../youtube-playback-plox.user.js#L5654) |
| `fn` | [`isSupported`](../youtube-playback-plox.user.js#L5658) | [5658](../youtube-playback-plox.user.js#L5658) |
| `module` | [`isSupported`](../youtube-playback-plox.user.js#L5658) | [5658](../youtube-playback-plox.user.js#L5658) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L5813) | [5813](../youtube-playback-plox.user.js#L5813) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L5941) | [5941](../youtube-playback-plox.user.js#L5941) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L5959) | [5959](../youtube-playback-plox.user.js#L5959) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L5980) | [5980](../youtube-playback-plox.user.js#L5980) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L5993) | [5993](../youtube-playback-plox.user.js#L5993) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6057) | [6057](../youtube-playback-plox.user.js#L6057) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6075) | [6075](../youtube-playback-plox.user.js#L6075) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L6083) | [6083](../youtube-playback-plox.user.js#L6083) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L6101) | [6101](../youtube-playback-plox.user.js#L6101) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L6112)
> [Line 6112](../youtube-playback-plox.user.js#L6112)

| Type | Name | Line |
|---|---|---|
| `fn` | [`_adDetectorTick`](../youtube-playback-plox.user.js#L6121) | [6121](../youtube-playback-plox.user.js#L6121) |

## [📢 Ad Detector](../youtube-playback-plox.user.js#L6135)
> [Line 6135](../youtube-playback-plox.user.js#L6135)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L6140) | [6140](../youtube-playback-plox.user.js#L6140) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L6189) | [6189](../youtube-playback-plox.user.js#L6189) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L6311)
> [Line 6311](../youtube-playback-plox.user.js#L6311)

_No relevant functions or constants detected._

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L6730)
> [Line 6730](../youtube-playback-plox.user.js#L6730)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L6737) | [6737](../youtube-playback-plox.user.js#L6737) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L6740) | [6740](../youtube-playback-plox.user.js#L6740) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L6768) | [6768](../youtube-playback-plox.user.js#L6768) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L6811) | [6811](../youtube-playback-plox.user.js#L6811) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L6885)
> [Line 6885](../youtube-playback-plox.user.js#L6885)

| Type | Name | Line |
|---|---|---|
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L6891) | [6891](../youtube-playback-plox.user.js#L6891) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L6919) | [6919](../youtube-playback-plox.user.js#L6919) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L6920) | [6920](../youtube-playback-plox.user.js#L6920) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L6982) | [6982](../youtube-playback-plox.user.js#L6982) |
| `fn` | [`cleanOwner`](../youtube-playback-plox.user.js#L6993) | [6993](../youtube-playback-plox.user.js#L6993) |
| `fn` | [`cleanName`](../youtube-playback-plox.user.js#L6994) | [6994](../youtube-playback-plox.user.js#L6994) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L6995) | [6995](../youtube-playback-plox.user.js#L6995) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L7116) | [7116](../youtube-playback-plox.user.js#L7116) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7128) | [7128](../youtube-playback-plox.user.js#L7128) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L7193) | [7193](../youtube-playback-plox.user.js#L7193) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L7223) | [7223](../youtube-playback-plox.user.js#L7223) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L7252)
> [Line 7252](../youtube-playback-plox.user.js#L7252)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L7253) | [7253](../youtube-playback-plox.user.js#L7253) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L7299) | [7299](../youtube-playback-plox.user.js#L7299) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L7454)
> [Line 7454](../youtube-playback-plox.user.js#L7454)

_No relevant functions or constants detected._

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L7536)
> [Line 7536](../youtube-playback-plox.user.js#L7536)

_No relevant functions or constants detected._

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L7627)
> [Line 7627](../youtube-playback-plox.user.js#L7627)

_No relevant functions or constants detected._

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L7707)
> [Line 7707](../youtube-playback-plox.user.js#L7707)

| Type | Name | Line |
|---|---|---|
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L7726) | [7726](../youtube-playback-plox.user.js#L7726) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L7738)
> [Line 7738](../youtube-playback-plox.user.js#L7738)

_No relevant functions or constants detected._

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L7785)
> [Line 7785](../youtube-playback-plox.user.js#L7785)

_No relevant functions or constants detected._

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L7843)
> [Line 7843](../youtube-playback-plox.user.js#L7843)

| Type | Name | Line |
|---|---|---|
| `fn` | [`base`](../youtube-playback-plox.user.js#L7852) | [7852](../youtube-playback-plox.user.js#L7852) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L7886)
> [Line 7886](../youtube-playback-plox.user.js#L7886)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L7933) | [7933](../youtube-playback-plox.user.js#L7933) |

## [📺 Helpers](../youtube-playback-plox.user.js#L8054)
> [Line 8054](../youtube-playback-plox.user.js#L8054)

_No relevant functions or constants detected._

## [📺 Obtiene datos guardados de un video](../youtube-playback-plox.user.js#L8057)
> [Line 8057](../youtube-playback-plox.user.js#L8057)

| Type | Name | Line |
|---|---|---|
| `fn` | [`keys`](../youtube-playback-plox.user.js#L8083) | [8083](../youtube-playback-plox.user.js#L8083) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L8108)
> [Line 8108](../youtube-playback-plox.user.js#L8108)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L8144) | [8144](../youtube-playback-plox.user.js#L8144) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L8187)
> [Line 8187](../youtube-playback-plox.user.js#L8187)

_No relevant functions or constants detected._

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L8388)
> [Line 8388](../youtube-playback-plox.user.js#L8388)

| Type | Name | Line |
|---|---|---|
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L8485) | [8485](../youtube-playback-plox.user.js#L8485) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L8594)
> [Line 8594](../youtube-playback-plox.user.js#L8594)

_No relevant functions or constants detected._

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L8616)
> [Line 8616](../youtube-playback-plox.user.js#L8616)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L8644)
> [Line 8644](../youtube-playback-plox.user.js#L8644)

_No relevant functions or constants detected._

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L8689)
> [Line 8689](../youtube-playback-plox.user.js#L8689)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L8710) | [8710](../youtube-playback-plox.user.js#L8710) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L8852) | [8852](../youtube-playback-plox.user.js#L8852) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L8937) | [8937](../youtube-playback-plox.user.js#L8937) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L8964)
> [Line 8964](../youtube-playback-plox.user.js#L8964)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L8990) | [8990](../youtube-playback-plox.user.js#L8990) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L9000)
> [Line 9000](../youtube-playback-plox.user.js#L9000)

| Type | Name | Line |
|---|---|---|
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9297) | [9297](../youtube-playback-plox.user.js#L9297) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9297) | [9297](../youtube-playback-plox.user.js#L9297) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L9309) | [9309](../youtube-playback-plox.user.js#L9309) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L9319) | [9319](../youtube-playback-plox.user.js#L9319) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L9327) | [9327](../youtube-playback-plox.user.js#L9327) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L9335) | [9335](../youtube-playback-plox.user.js#L9335) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L9358) | [9358](../youtube-playback-plox.user.js#L9358) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L9370) | [9370](../youtube-playback-plox.user.js#L9370) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L9373) | [9373](../youtube-playback-plox.user.js#L9373) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L9383) | [9383](../youtube-playback-plox.user.js#L9383) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L9388) | [9388](../youtube-playback-plox.user.js#L9388) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L9411) | [9411](../youtube-playback-plox.user.js#L9411) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L9430) | [9430](../youtube-playback-plox.user.js#L9430) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L9438) | [9438](../youtube-playback-plox.user.js#L9438) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L9482) | [9482](../youtube-playback-plox.user.js#L9482) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L9537) | [9537](../youtube-playback-plox.user.js#L9537) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L9596) | [9596](../youtube-playback-plox.user.js#L9596) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L9693) | [9693](../youtube-playback-plox.user.js#L9693) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L9708) | [9708](../youtube-playback-plox.user.js#L9708) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L9712) | [9712](../youtube-playback-plox.user.js#L9712) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L9719) | [9719](../youtube-playback-plox.user.js#L9719) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L9737) | [9737](../youtube-playback-plox.user.js#L9737) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L9794)
> [Line 9794](../youtube-playback-plox.user.js#L9794)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L9829) | [9829](../youtube-playback-plox.user.js#L9829) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L9969)
> [Line 9969](../youtube-playback-plox.user.js#L9969)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L9972) | [9972](../youtube-playback-plox.user.js#L9972) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L10011)
> [Line 10011](../youtube-playback-plox.user.js#L10011)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L10050) | [10050](../youtube-playback-plox.user.js#L10050) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L10056) | [10056](../youtube-playback-plox.user.js#L10056) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L10064) | [10064](../youtube-playback-plox.user.js#L10064) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L10110) | [10110](../youtube-playback-plox.user.js#L10110) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L10114) | [10114](../youtube-playback-plox.user.js#L10114) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L10117) | [10117](../youtube-playback-plox.user.js#L10117) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L10133) | [10133](../youtube-playback-plox.user.js#L10133) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L10142) | [10142](../youtube-playback-plox.user.js#L10142) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L10172) | [10172](../youtube-playback-plox.user.js#L10172) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L10186) | [10186](../youtube-playback-plox.user.js#L10186) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L10190) | [10190](../youtube-playback-plox.user.js#L10190) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L10328)
> [Line 10328](../youtube-playback-plox.user.js#L10328)

| Type | Name | Line |
|---|---|---|
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L10346) | [10346](../youtube-playback-plox.user.js#L10346) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L10429) | [10429](../youtube-playback-plox.user.js#L10429) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10509) | [10509](../youtube-playback-plox.user.js#L10509) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10510) | [10510](../youtube-playback-plox.user.js#L10510) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10590) | [10590](../youtube-playback-plox.user.js#L10590) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10591) | [10591](../youtube-playback-plox.user.js#L10591) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L10716)
> [Line 10716](../youtube-playback-plox.user.js#L10716)

_No relevant functions or constants detected._

## [🎵 Selección de Videos](../youtube-playback-plox.user.js#L10774)
> [Line 10774](../youtube-playback-plox.user.js#L10774)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L10862) | [10862](../youtube-playback-plox.user.js#L10862) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L10869) | [10869](../youtube-playback-plox.user.js#L10869) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L10953) | [10953](../youtube-playback-plox.user.js#L10953) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L10957) | [10957](../youtube-playback-plox.user.js#L10957) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L10966) | [10966](../youtube-playback-plox.user.js#L10966) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L11228) | [11228](../youtube-playback-plox.user.js#L11228) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L11402) | [11402](../youtube-playback-plox.user.js#L11402) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L11489)
> [Line 11489](../youtube-playback-plox.user.js#L11489)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11495) | [11495](../youtube-playback-plox.user.js#L11495) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11495) | [11495](../youtube-playback-plox.user.js#L11495) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L11496) | [11496](../youtube-playback-plox.user.js#L11496) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L11505) | [11505](../youtube-playback-plox.user.js#L11505) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L11510) | [11510](../youtube-playback-plox.user.js#L11510) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L11521) | [11521](../youtube-playback-plox.user.js#L11521) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L11538) | [11538](../youtube-playback-plox.user.js#L11538) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L11571) | [11571](../youtube-playback-plox.user.js#L11571) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L11596) | [11596](../youtube-playback-plox.user.js#L11596) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L11598) | [11598](../youtube-playback-plox.user.js#L11598) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11612) | [11612](../youtube-playback-plox.user.js#L11612) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11612) | [11612](../youtube-playback-plox.user.js#L11612) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L11614) | [11614](../youtube-playback-plox.user.js#L11614) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L11637) | [11637](../youtube-playback-plox.user.js#L11637) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L11637) | [11637](../youtube-playback-plox.user.js#L11637) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L11648) | [11648](../youtube-playback-plox.user.js#L11648) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L11653) | [11653](../youtube-playback-plox.user.js#L11653) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L11658) | [11658](../youtube-playback-plox.user.js#L11658) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L11670) | [11670](../youtube-playback-plox.user.js#L11670) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L11687) | [11687](../youtube-playback-plox.user.js#L11687) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L11687) | [11687](../youtube-playback-plox.user.js#L11687) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L11689) | [11689](../youtube-playback-plox.user.js#L11689) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L11697) | [11697](../youtube-playback-plox.user.js#L11697) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L11741)
> [Line 11741](../youtube-playback-plox.user.js#L11741)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L11746) | [11746](../youtube-playback-plox.user.js#L11746) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L11746) | [11746](../youtube-playback-plox.user.js#L11746) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L11761) | [11761](../youtube-playback-plox.user.js#L11761) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L11796) | [11796](../youtube-playback-plox.user.js#L11796) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L11829) | [11829](../youtube-playback-plox.user.js#L11829) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L11830) | [11830](../youtube-playback-plox.user.js#L11830) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L11861) | [11861](../youtube-playback-plox.user.js#L11861) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L11917) | [11917](../youtube-playback-plox.user.js#L11917) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L11982) | [11982](../youtube-playback-plox.user.js#L11982) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L11990) | [11990](../youtube-playback-plox.user.js#L11990) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L11997) | [11997](../youtube-playback-plox.user.js#L11997) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L12035) | [12035](../youtube-playback-plox.user.js#L12035) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L12075) | [12075](../youtube-playback-plox.user.js#L12075) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L12086) | [12086](../youtube-playback-plox.user.js#L12086) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L12101) | [12101](../youtube-playback-plox.user.js#L12101) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12568) | [12568](../youtube-playback-plox.user.js#L12568) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L12611) | [12611](../youtube-playback-plox.user.js#L12611) |

## [Processing Functions](../youtube-playback-plox.user.js#L12631)
> [Line 12631](../youtube-playback-plox.user.js#L12631)

| Type | Name | Line |
|---|---|---|
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12646) | [12646](../youtube-playback-plox.user.js#L12646) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12646) | [12646](../youtube-playback-plox.user.js#L12646) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L12660) | [12660](../youtube-playback-plox.user.js#L12660) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L12665) | [12665](../youtube-playback-plox.user.js#L12665) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L12672) | [12672](../youtube-playback-plox.user.js#L12672) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L12678) | [12678](../youtube-playback-plox.user.js#L12678) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L12696) | [12696](../youtube-playback-plox.user.js#L12696) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L12759) | [12759](../youtube-playback-plox.user.js#L12759) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L12779) | [12779](../youtube-playback-plox.user.js#L12779) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L12812) | [12812](../youtube-playback-plox.user.js#L12812) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L12842) | [12842](../youtube-playback-plox.user.js#L12842) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L12853) | [12853](../youtube-playback-plox.user.js#L12853) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L12865) | [12865](../youtube-playback-plox.user.js#L12865) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L12905) | [12905](../youtube-playback-plox.user.js#L12905) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L12953) | [12953](../youtube-playback-plox.user.js#L12953) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L13104) | [13104](../youtube-playback-plox.user.js#L13104) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L13248) | [13248](../youtube-playback-plox.user.js#L13248) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L13355) | [13355](../youtube-playback-plox.user.js#L13355) |

## [PlaybackController](../youtube-playback-plox.user.js#L13499)
> [Line 13499](../youtube-playback-plox.user.js#L13499)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L13543) | [13543](../youtube-playback-plox.user.js#L13543) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L13559) | [13559](../youtube-playback-plox.user.js#L13559) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L13773) | [13773](../youtube-playback-plox.user.js#L13773) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L13892)
> [Line 13892](../youtube-playback-plox.user.js#L13892)

| Type | Name | Line |
|---|---|---|
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L13958) | [13958](../youtube-playback-plox.user.js#L13958) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L14409)
> [Line 14409](../youtube-playback-plox.user.js#L14409)

| Type | Name | Line |
|---|---|---|
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L14432) | [14432](../youtube-playback-plox.user.js#L14432) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L14508) | [14508](../youtube-playback-plox.user.js#L14508) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L14517) | [14517](../youtube-playback-plox.user.js#L14517) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L14525) | [14525](../youtube-playback-plox.user.js#L14525) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14545) | [14545](../youtube-playback-plox.user.js#L14545) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L14597)
> [Line 14597](../youtube-playback-plox.user.js#L14597)

| Type | Name | Line |
|---|---|---|
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14609) | [14609](../youtube-playback-plox.user.js#L14609) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L14655) | [14655](../youtube-playback-plox.user.js#L14655) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L14661) | [14661](../youtube-playback-plox.user.js#L14661) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L14669) | [14669](../youtube-playback-plox.user.js#L14669) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14684) | [14684](../youtube-playback-plox.user.js#L14684) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L14804) | [14804](../youtube-playback-plox.user.js#L14804) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L14882)
> [Line 14882](../youtube-playback-plox.user.js#L14882)

_No relevant functions or constants detected._

## [📁 Update Video List](../youtube-playback-plox.user.js#L14999)
> [Line 14999](../youtube-playback-plox.user.js#L14999)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSortValue`](../youtube-playback-plox.user.js#L15179) | [15179](../youtube-playback-plox.user.js#L15179) |
| `fn` | [`t`](../youtube-playback-plox.user.js#L15182) | [15182](../youtube-playback-plox.user.js#L15182) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15196) | [15196](../youtube-playback-plox.user.js#L15196) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15200) | [15200](../youtube-playback-plox.user.js#L15200) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15230) | [15230](../youtube-playback-plox.user.js#L15230) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L15249) | [15249](../youtube-playback-plox.user.js#L15249) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L15389) | [15389](../youtube-playback-plox.user.js#L15389) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15497) | [15497](../youtube-playback-plox.user.js#L15497) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L15614) | [15614](../youtube-playback-plox.user.js#L15614) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L15635) | [15635](../youtube-playback-plox.user.js#L15635) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L15686) | [15686](../youtube-playback-plox.user.js#L15686) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L15806)
> [Line 15806](../youtube-playback-plox.user.js#L15806)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L15809) | [15809](../youtube-playback-plox.user.js#L15809) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L15823) | [15823](../youtube-playback-plox.user.js#L15823) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L15834)
> [Line 15834](../youtube-playback-plox.user.js#L15834)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L15961) | [15961](../youtube-playback-plox.user.js#L15961) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L15971) | [15971](../youtube-playback-plox.user.js#L15971) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L16046) | [16046](../youtube-playback-plox.user.js#L16046) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L16058)
> [Line 16058](../youtube-playback-plox.user.js#L16058)

| Type | Name | Line |
|---|---|---|
| `fn` | [`deleteFromStorage`](../youtube-playback-plox.user.js#L16185) | [16185](../youtube-playback-plox.user.js#L16185) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L16190) | [16190](../youtube-playback-plox.user.js#L16190) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L16236) | [16236](../youtube-playback-plox.user.js#L16236) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L16284) | [16284](../youtube-playback-plox.user.js#L16284) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L16290) | [16290](../youtube-playback-plox.user.js#L16290) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L16307) | [16307](../youtube-playback-plox.user.js#L16307) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L16341) | [16341](../youtube-playback-plox.user.js#L16341) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L16385) | [16385](../youtube-playback-plox.user.js#L16385) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L16467) | [16467](../youtube-playback-plox.user.js#L16467) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L16473) | [16473](../youtube-playback-plox.user.js#L16473) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L16489) | [16489](../youtube-playback-plox.user.js#L16489) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L16499) | [16499](../youtube-playback-plox.user.js#L16499) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L16507) | [16507](../youtube-playback-plox.user.js#L16507) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L16512) | [16512](../youtube-playback-plox.user.js#L16512) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L16519) | [16519](../youtube-playback-plox.user.js#L16519) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L16522) | [16522](../youtube-playback-plox.user.js#L16522) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L16526) | [16526](../youtube-playback-plox.user.js#L16526) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L16572) | [16572](../youtube-playback-plox.user.js#L16572) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L16572) | [16572](../youtube-playback-plox.user.js#L16572) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L16586) | [16586](../youtube-playback-plox.user.js#L16586) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L16860) | [16860](../youtube-playback-plox.user.js#L16860) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L16908) | [16908](../youtube-playback-plox.user.js#L16908) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L16909) | [16909](../youtube-playback-plox.user.js#L16909) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L16925) | [16925](../youtube-playback-plox.user.js#L16925) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L16926) | [16926](../youtube-playback-plox.user.js#L16926) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L16975) | [16975](../youtube-playback-plox.user.js#L16975) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L17120) | [17120](../youtube-playback-plox.user.js#L17120) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L17134) | [17134](../youtube-playback-plox.user.js#L17134) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L17433) | [17433](../youtube-playback-plox.user.js#L17433) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L17532) | [17532](../youtube-playback-plox.user.js#L17532) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L17615) | [17615](../youtube-playback-plox.user.js#L17615) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L17869) | [17869](../youtube-playback-plox.user.js#L17869) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L17892) | [17892](../youtube-playback-plox.user.js#L17892) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L17893) | [17893](../youtube-playback-plox.user.js#L17893) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L17965)
> [Line 17965](../youtube-playback-plox.user.js#L17965)

_No relevant functions or constants detected._

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L18117)
> [Line 18117](../youtube-playback-plox.user.js#L18117)

_No relevant functions or constants detected._

## [🔄 Migración de Datos](../youtube-playback-plox.user.js#L18144)
> [Line 18144](../youtube-playback-plox.user.js#L18144)

| Type | Name | Line |
|---|---|---|
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L18201) | [18201](../youtube-playback-plox.user.js#L18201) |

## [🚀 Init](../youtube-playback-plox.user.js#L18534)
> [Line 18534](../youtube-playback-plox.user.js#L18534)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L18543) | [18543](../youtube-playback-plox.user.js#L18543) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L18565) | [18565](../youtube-playback-plox.user.js#L18565) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L18874) | [18874](../youtube-playback-plox.user.js#L18874) |

