# Userscript Structure
> Auto-generated on 2026-05-23 · version 0.0.10-2
> **DO NOT EDIT MANUALLY** - regenerate with `node ./scripts/generate-structure.mjs`

---

## Sections index

1. [🔍 Logger System](#logger-system) - [line 138](../youtube-playback-plox.user.js#L138)
2. [🛡️ Initialization Guard (SPA Safety)](#initialization-guard-spa-safety) - [line 227](../youtube-playback-plox.user.js#L227)
3. [📦 Config](#config) - [line 297](../youtube-playback-plox.user.js#L297)
4. [📊 Global Constants](#global-constants) - [line 441](../youtube-playback-plox.user.js#L441)
5. [📊 Global Variables](#global-variables) - [line 450](../youtube-playback-plox.user.js#L450)
6. [🌐 Translations](#translations) - [line 486](../youtube-playback-plox.user.js#L486)
7. [🔧 Utils](#utils) - [line 923](../youtube-playback-plox.user.js#L923)
8. [🔧 Escape HTML](#escape-html) - [line 926](../youtube-playback-plox.user.js#L926)
9. [🔧 Is Visibly Displayed](#is-visibly-displayed) - [line 1007](../youtube-playback-plox.user.js#L1007)
10. [🔧 Format Time](#format-time) - [line 1031](../youtube-playback-plox.user.js#L1031)
11. [🔧 parseTimeToSeconds](#parsetimetoseconds) - [line 1126](../youtube-playback-plox.user.js#L1126)
12. [🔧 normalizeSeconds](#normalizeseconds) - [line 1174](../youtube-playback-plox.user.js#L1174)
13. [🔧 setInnerHTML](#setinnerhtml) - [line 1200](../youtube-playback-plox.user.js#L1200)
14. [🔧 Crear Elemento](#crear-elemento) - [line 1260](../youtube-playback-plox.user.js#L1260)
15. [🔧 Debounce](#debounce) - [line 1397](../youtube-playback-plox.user.js#L1397)
16. [🗄️ Event Handlers store](#event-handlers-store) - [line 1422](../youtube-playback-plox.user.js#L1422)
17. [📝 Selector System](#selector-system) - [line 1505](../youtube-playback-plox.user.js#L1505)
18. [💾 Simple LRU Cache](#simple-lru-cache) - [line 1814](../youtube-playback-plox.user.js#L1814)
19. [⚙️ DOM Cache System](#dom-cache-system) - [line 1872](../youtube-playback-plox.user.js#L1872)
20. [🌐 Translation Functions](#translation-functions) - [line 2214](../youtube-playback-plox.user.js#L2214)
21. [🎨 Styles](#styles) - [line 2380](../youtube-playback-plox.user.js#L2380)
22. [🎨 Theme](#theme) - [line 5327](../youtube-playback-plox.user.js#L5327)
23. [🎨 SVG Icons](#svg-icons) - [line 5405](../youtube-playback-plox.user.js#L5405)
24. [🎨 Estilo barra progreso](#estilo-barra-progreso) - [line 5567](../youtube-playback-plox.user.js#L5567)
25. [💾 Storage + Settings](#storage-settings) - [line 5871](../youtube-playback-plox.user.js#L5871)
26. [📢 Ad Caches](#ad-caches) - [line 6483](../youtube-playback-plox.user.js#L6483)
27. [📢 Ad Detector](#ad-detector) - [line 6506](../youtube-playback-plox.user.js#L6506)
28. [🎯 VirtualScroller](#virtualscroller) - [line 6682](../youtube-playback-plox.user.js#L6682)
29. [📤 Import/Export JSON](#importexport-json) - [line 7101](../youtube-playback-plox.user.js#L7101)
30. [☁️ GitHub Backup](#github-backup) - [line 7256](../youtube-playback-plox.user.js#L7256)
31. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 7623](../youtube-playback-plox.user.js#L7623)
32. [🔄 Normalize Video Data](#normalize-video-data) - [line 7825](../youtube-playback-plox.user.js#L7825)
33. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 7907](../youtube-playback-plox.user.js#L7907)
34. [Parse FreeTube DB](#parse-freetube-db) - [line 7998](../youtube-playback-plox.user.js#L7998)
35. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 8078](../youtube-playback-plox.user.js#L8078)
36. [⬆ Export To FreeTube](#export-to-freetube) - [line 8109](../youtube-playback-plox.user.js#L8109)
37. [⬇ Import From FreeTube](#import-from-freetube) - [line 8156](../youtube-playback-plox.user.js#L8156)
38. [🔄 Insert Completion Event](#insert-completion-event) - [line 8214](../youtube-playback-plox.user.js#L8214)
39. [💾 Save Video Generic](#save-video-generic) - [line 8257](../youtube-playback-plox.user.js#L8257)
40. [📺 Helpers](#helpers) - [line 8425](../youtube-playback-plox.user.js#L8425)
41. [📺 Obtiene datos guardados de un video](#obtiene-datos-guardados-de-un-video) - [line 8428](../youtube-playback-plox.user.js#L8428)
42. [📺 Get Player Video ID](#get-player-video-id) - [line 8479](../youtube-playback-plox.user.js#L8479)
43. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 8558](../youtube-playback-plox.user.js#L8558)
44. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 8759](../youtube-playback-plox.user.js#L8759)
45. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 8965](../youtube-playback-plox.user.js#L8965)
46. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 8987](../youtube-playback-plox.user.js#L8987)
47. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 9015](../youtube-playback-plox.user.js#L9015)
48. [📺 get Playlist Name](#get-playlist-name) - [line 9060](../youtube-playback-plox.user.js#L9060)
49. [🕒 Time Display](#time-display) - [line 9335](../youtube-playback-plox.user.js#L9335)
50. [🖼️ Display Button Helpers](#display-button-helpers) - [line 9371](../youtube-playback-plox.user.js#L9371)
51. [🍞 Toasts](#toasts) - [line 10165](../youtube-playback-plox.user.js#L10165)
52. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 10340](../youtube-playback-plox.user.js#L10340)
53. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 10382](../youtube-playback-plox.user.js#L10382)
54. [⚙️ Settings UI](#settings-ui) - [line 10699](../youtube-playback-plox.user.js#L10699)
55. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 11081](../youtube-playback-plox.user.js#L11081)
56. [🎵 Selección de Videos](#seleccin-de-videos) - [line 11139](../youtube-playback-plox.user.js#L11139)
57. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 11854](../youtube-playback-plox.user.js#L11854)
58. [📡 Video Observer Manager](#video-observer-manager) - [line 12106](../youtube-playback-plox.user.js#L12106)
59. [Processing Functions](#processing-functions) - [line 12996](../youtube-playback-plox.user.js#L12996)
60. [PlaybackController](#playbackcontroller) - [line 13864](../youtube-playback-plox.user.js#L13864)
61. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 14257](../youtube-playback-plox.user.js#L14257)
62. [📂 Sort UI](#sort-ui) - [line 14774](../youtube-playback-plox.user.js#L14774)
63. [📂 Filters UI](#filters-ui) - [line 14962](../youtube-playback-plox.user.js#L14962)
64. [📂 Video List UI](#video-list-ui) - [line 15247](../youtube-playback-plox.user.js#L15247)
65. [📁 Update Video List](#update-video-list) - [line 15364](../youtube-playback-plox.user.js#L15364)
66. [🔘 Floating Button](#floating-button) - [line 16171](../youtube-playback-plox.user.js#L16171)
67. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 16199](../youtube-playback-plox.user.js#L16199)
68. [📂 Video Entry](#video-entry) - [line 16423](../youtube-playback-plox.user.js#L16423)
69. [🗑️ Clear All Data](#clear-all-data) - [line 18334](../youtube-playback-plox.user.js#L18334)
70. [⚙️ Menu Commands](#menu-commands) - [line 18486](../youtube-playback-plox.user.js#L18486)
71. [🔄 Migración de Datos](#migracin-de-datos) - [line 18513](../youtube-playback-plox.user.js#L18513)
72. [🚀 Init](#init) - [line 18903](../youtube-playback-plox.user.js#L18903)

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

## [📊 Global Constants](../youtube-playback-plox.user.js#L441)
> [Line 441](../youtube-playback-plox.user.js#L441)

_No relevant functions or constants detected._

## [📊 Global Variables](../youtube-playback-plox.user.js#L450)
> [Line 450](../youtube-playback-plox.user.js#L450)

_No relevant functions or constants detected._

## [🌐 Translations](../youtube-playback-plox.user.js#L486)
> [Line 486](../youtube-playback-plox.user.js#L486)

| Type | Name | Line |
|---|---|---|
| `fn` | [`fetchUrl`](../youtube-playback-plox.user.js#L831) | [831](../youtube-playback-plox.user.js#L831) |

## [🔧 Utils](../youtube-playback-plox.user.js#L923)
> [Line 923](../youtube-playback-plox.user.js#L923)

_No relevant functions or constants detected._

## [🔧 Escape HTML](../youtube-playback-plox.user.js#L926)
> [Line 926](../youtube-playback-plox.user.js#L926)

| Type | Name | Line |
|---|---|---|
| `fn` | [`unescapeHTML`](../youtube-playback-plox.user.js#L932) | [932](../youtube-playback-plox.user.js#L932) |
| `fn` | [`escapeHTML`](../youtube-playback-plox.user.js#L954) | [954](../youtube-playback-plox.user.js#L954) |

## [🔧 Is Visibly Displayed](../youtube-playback-plox.user.js#L1007)
> [Line 1007](../youtube-playback-plox.user.js#L1007)

_No relevant functions or constants detected._

## [🔧 Format Time](../youtube-playback-plox.user.js#L1031)
> [Line 1031](../youtube-playback-plox.user.js#L1031)

| Type | Name | Line |
|---|---|---|
| `fn` | [`formatTime`](../youtube-playback-plox.user.js#L1054) | [1054](../youtube-playback-plox.user.js#L1054) |

## [🔧 parseTimeToSeconds](../youtube-playback-plox.user.js#L1126)
> [Line 1126](../youtube-playback-plox.user.js#L1126)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseTimeToSeconds`](../youtube-playback-plox.user.js#L1149) | [1149](../youtube-playback-plox.user.js#L1149) |

## [🔧 normalizeSeconds](../youtube-playback-plox.user.js#L1174)
> [Line 1174](../youtube-playback-plox.user.js#L1174)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeSeconds`](../youtube-playback-plox.user.js#L1193) | [1193](../youtube-playback-plox.user.js#L1193) |

## [🔧 setInnerHTML](../youtube-playback-plox.user.js#L1200)
> [Line 1200](../youtube-playback-plox.user.js#L1200)

_No relevant functions or constants detected._

## [🔧 Crear Elemento](../youtube-playback-plox.user.js#L1260)
> [Line 1260](../youtube-playback-plox.user.js#L1260)

| Type | Name | Line |
|---|---|---|
| `fn` | [`append`](../youtube-playback-plox.user.js#L1340) | [1340](../youtube-playback-plox.user.js#L1340) |
| `fn` | [`clamp`](../youtube-playback-plox.user.js#L1370) | [1370](../youtube-playback-plox.user.js#L1370) |

## [🔧 Debounce](../youtube-playback-plox.user.js#L1397)
> [Line 1397](../youtube-playback-plox.user.js#L1397)

| Type | Name | Line |
|---|---|---|
| `fn` | [`debounce`](../youtube-playback-plox.user.js#L1407) | [1407](../youtube-playback-plox.user.js#L1407) |

## [🗄️ Event Handlers store](../youtube-playback-plox.user.js#L1422)
> [Line 1422](../youtube-playback-plox.user.js#L1422)

| Type | Name | Line |
|---|---|---|
| `fn` | [`dispose`](../youtube-playback-plox.user.js#L1499) | [1499](../youtube-playback-plox.user.js#L1499) |

## [📝 Selector System](../youtube-playback-plox.user.js#L1505)
> [Line 1505](../youtube-playback-plox.user.js#L1505)

| Type | Name | Line |
|---|---|---|
| `module` | [`PREFIX`](../youtube-playback-plox.user.js#L1575) | [1575](../youtube-playback-plox.user.js#L1575) |
| `fn` | [`deepFreeze`](../youtube-playback-plox.user.js#L1599) | [1599](../youtube-playback-plox.user.js#L1599) |
| `fn` | [`createSelectorSystem`](../youtube-playback-plox.user.js#L1630) | [1630](../youtube-playback-plox.user.js#L1630) |

## [💾 Simple LRU Cache](../youtube-playback-plox.user.js#L1814)
> [Line 1814](../youtube-playback-plox.user.js#L1814)

_No relevant functions or constants detected._

## [⚙️ DOM Cache System](../youtube-playback-plox.user.js#L1872)
> [Line 1872](../youtube-playback-plox.user.js#L1872)

| Type | Name | Line |
|---|---|---|
| `fn` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1889) | [1889](../youtube-playback-plox.user.js#L1889) |
| `module` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1889) | [1889](../youtube-playback-plox.user.js#L1889) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L1914) | [1914](../youtube-playback-plox.user.js#L1914) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L1938) | [1938](../youtube-playback-plox.user.js#L1938) |

## [🌐 Translation Functions](../youtube-playback-plox.user.js#L2214)
> [Line 2214](../youtube-playback-plox.user.js#L2214)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normParams`](../youtube-playback-plox.user.js#L2238) | [2238](../youtube-playback-plox.user.js#L2238) |
| `fn` | [`candidates`](../youtube-playback-plox.user.js#L2337) | [2337](../youtube-playback-plox.user.js#L2337) |
| `fn` | [`normalized`](../youtube-playback-plox.user.js#L2356) | [2356](../youtube-playback-plox.user.js#L2356) |

## [🎨 Styles](../youtube-playback-plox.user.js#L2380)
> [Line 2380](../youtube-playback-plox.user.js#L2380)

_No relevant functions or constants detected._

## [🎨 Theme](../youtube-playback-plox.user.js#L5327)
> [Line 5327](../youtube-playback-plox.user.js#L5327)

_No relevant functions or constants detected._

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L5405)
> [Line 5405](../youtube-playback-plox.user.js#L5405)

_No relevant functions or constants detected._

## [🎨 Estilo barra progreso](../youtube-playback-plox.user.js#L5567)
> [Line 5567](../youtube-playback-plox.user.js#L5567)

| Type | Name | Line |
|---|---|---|
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L5848) | [5848](../youtube-playback-plox.user.js#L5848) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L5871)
> [Line 5871](../youtube-playback-plox.user.js#L5871)

| Type | Name | Line |
|---|---|---|
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L5881) | [5881](../youtube-playback-plox.user.js#L5881) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L5881) | [5881](../youtube-playback-plox.user.js#L5881) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L6025) | [6025](../youtube-playback-plox.user.js#L6025) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L6025) | [6025](../youtube-playback-plox.user.js#L6025) |
| `fn` | [`isSupported`](../youtube-playback-plox.user.js#L6029) | [6029](../youtube-playback-plox.user.js#L6029) |
| `module` | [`isSupported`](../youtube-playback-plox.user.js#L6029) | [6029](../youtube-playback-plox.user.js#L6029) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L6184) | [6184](../youtube-playback-plox.user.js#L6184) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L6312) | [6312](../youtube-playback-plox.user.js#L6312) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L6330) | [6330](../youtube-playback-plox.user.js#L6330) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L6351) | [6351](../youtube-playback-plox.user.js#L6351) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6364) | [6364](../youtube-playback-plox.user.js#L6364) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6428) | [6428](../youtube-playback-plox.user.js#L6428) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6446) | [6446](../youtube-playback-plox.user.js#L6446) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L6454) | [6454](../youtube-playback-plox.user.js#L6454) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L6472) | [6472](../youtube-playback-plox.user.js#L6472) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L6483)
> [Line 6483](../youtube-playback-plox.user.js#L6483)

| Type | Name | Line |
|---|---|---|
| `fn` | [`_adDetectorTick`](../youtube-playback-plox.user.js#L6492) | [6492](../youtube-playback-plox.user.js#L6492) |

## [📢 Ad Detector](../youtube-playback-plox.user.js#L6506)
> [Line 6506](../youtube-playback-plox.user.js#L6506)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L6511) | [6511](../youtube-playback-plox.user.js#L6511) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L6560) | [6560](../youtube-playback-plox.user.js#L6560) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L6682)
> [Line 6682](../youtube-playback-plox.user.js#L6682)

_No relevant functions or constants detected._

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L7101)
> [Line 7101](../youtube-playback-plox.user.js#L7101)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L7108) | [7108](../youtube-playback-plox.user.js#L7108) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L7111) | [7111](../youtube-playback-plox.user.js#L7111) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L7139) | [7139](../youtube-playback-plox.user.js#L7139) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L7182) | [7182](../youtube-playback-plox.user.js#L7182) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L7256)
> [Line 7256](../youtube-playback-plox.user.js#L7256)

| Type | Name | Line |
|---|---|---|
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L7262) | [7262](../youtube-playback-plox.user.js#L7262) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L7290) | [7290](../youtube-playback-plox.user.js#L7290) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7291) | [7291](../youtube-playback-plox.user.js#L7291) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L7353) | [7353](../youtube-playback-plox.user.js#L7353) |
| `fn` | [`cleanOwner`](../youtube-playback-plox.user.js#L7364) | [7364](../youtube-playback-plox.user.js#L7364) |
| `fn` | [`cleanName`](../youtube-playback-plox.user.js#L7365) | [7365](../youtube-playback-plox.user.js#L7365) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7366) | [7366](../youtube-playback-plox.user.js#L7366) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L7487) | [7487](../youtube-playback-plox.user.js#L7487) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7499) | [7499](../youtube-playback-plox.user.js#L7499) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L7564) | [7564](../youtube-playback-plox.user.js#L7564) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L7594) | [7594](../youtube-playback-plox.user.js#L7594) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L7623)
> [Line 7623](../youtube-playback-plox.user.js#L7623)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L7624) | [7624](../youtube-playback-plox.user.js#L7624) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L7670) | [7670](../youtube-playback-plox.user.js#L7670) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L7825)
> [Line 7825](../youtube-playback-plox.user.js#L7825)

_No relevant functions or constants detected._

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L7907)
> [Line 7907](../youtube-playback-plox.user.js#L7907)

_No relevant functions or constants detected._

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L7998)
> [Line 7998](../youtube-playback-plox.user.js#L7998)

_No relevant functions or constants detected._

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L8078)
> [Line 8078](../youtube-playback-plox.user.js#L8078)

| Type | Name | Line |
|---|---|---|
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L8097) | [8097](../youtube-playback-plox.user.js#L8097) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L8109)
> [Line 8109](../youtube-playback-plox.user.js#L8109)

_No relevant functions or constants detected._

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L8156)
> [Line 8156](../youtube-playback-plox.user.js#L8156)

_No relevant functions or constants detected._

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L8214)
> [Line 8214](../youtube-playback-plox.user.js#L8214)

| Type | Name | Line |
|---|---|---|
| `fn` | [`base`](../youtube-playback-plox.user.js#L8223) | [8223](../youtube-playback-plox.user.js#L8223) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L8257)
> [Line 8257](../youtube-playback-plox.user.js#L8257)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8304) | [8304](../youtube-playback-plox.user.js#L8304) |

## [📺 Helpers](../youtube-playback-plox.user.js#L8425)
> [Line 8425](../youtube-playback-plox.user.js#L8425)

_No relevant functions or constants detected._

## [📺 Obtiene datos guardados de un video](../youtube-playback-plox.user.js#L8428)
> [Line 8428](../youtube-playback-plox.user.js#L8428)

| Type | Name | Line |
|---|---|---|
| `fn` | [`keys`](../youtube-playback-plox.user.js#L8454) | [8454](../youtube-playback-plox.user.js#L8454) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L8479)
> [Line 8479](../youtube-playback-plox.user.js#L8479)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L8515) | [8515](../youtube-playback-plox.user.js#L8515) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L8558)
> [Line 8558](../youtube-playback-plox.user.js#L8558)

_No relevant functions or constants detected._

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L8759)
> [Line 8759](../youtube-playback-plox.user.js#L8759)

| Type | Name | Line |
|---|---|---|
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L8856) | [8856](../youtube-playback-plox.user.js#L8856) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L8965)
> [Line 8965](../youtube-playback-plox.user.js#L8965)

_No relevant functions or constants detected._

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L8987)
> [Line 8987](../youtube-playback-plox.user.js#L8987)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L9015)
> [Line 9015](../youtube-playback-plox.user.js#L9015)

_No relevant functions or constants detected._

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L9060)
> [Line 9060](../youtube-playback-plox.user.js#L9060)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L9081) | [9081](../youtube-playback-plox.user.js#L9081) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L9223) | [9223](../youtube-playback-plox.user.js#L9223) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L9308) | [9308](../youtube-playback-plox.user.js#L9308) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L9335)
> [Line 9335](../youtube-playback-plox.user.js#L9335)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L9361) | [9361](../youtube-playback-plox.user.js#L9361) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L9371)
> [Line 9371](../youtube-playback-plox.user.js#L9371)

| Type | Name | Line |
|---|---|---|
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9668) | [9668](../youtube-playback-plox.user.js#L9668) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9668) | [9668](../youtube-playback-plox.user.js#L9668) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L9680) | [9680](../youtube-playback-plox.user.js#L9680) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L9690) | [9690](../youtube-playback-plox.user.js#L9690) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L9698) | [9698](../youtube-playback-plox.user.js#L9698) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L9706) | [9706](../youtube-playback-plox.user.js#L9706) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L9729) | [9729](../youtube-playback-plox.user.js#L9729) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L9741) | [9741](../youtube-playback-plox.user.js#L9741) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L9744) | [9744](../youtube-playback-plox.user.js#L9744) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L9754) | [9754](../youtube-playback-plox.user.js#L9754) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L9759) | [9759](../youtube-playback-plox.user.js#L9759) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L9782) | [9782](../youtube-playback-plox.user.js#L9782) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L9801) | [9801](../youtube-playback-plox.user.js#L9801) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L9809) | [9809](../youtube-playback-plox.user.js#L9809) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L9853) | [9853](../youtube-playback-plox.user.js#L9853) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L9908) | [9908](../youtube-playback-plox.user.js#L9908) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L9967) | [9967](../youtube-playback-plox.user.js#L9967) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L10064) | [10064](../youtube-playback-plox.user.js#L10064) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L10079) | [10079](../youtube-playback-plox.user.js#L10079) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L10083) | [10083](../youtube-playback-plox.user.js#L10083) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L10090) | [10090](../youtube-playback-plox.user.js#L10090) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L10108) | [10108](../youtube-playback-plox.user.js#L10108) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L10165)
> [Line 10165](../youtube-playback-plox.user.js#L10165)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L10200) | [10200](../youtube-playback-plox.user.js#L10200) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L10340)
> [Line 10340](../youtube-playback-plox.user.js#L10340)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L10343) | [10343](../youtube-playback-plox.user.js#L10343) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L10382)
> [Line 10382](../youtube-playback-plox.user.js#L10382)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L10421) | [10421](../youtube-playback-plox.user.js#L10421) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L10427) | [10427](../youtube-playback-plox.user.js#L10427) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L10435) | [10435](../youtube-playback-plox.user.js#L10435) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L10481) | [10481](../youtube-playback-plox.user.js#L10481) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L10485) | [10485](../youtube-playback-plox.user.js#L10485) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L10488) | [10488](../youtube-playback-plox.user.js#L10488) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L10504) | [10504](../youtube-playback-plox.user.js#L10504) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L10513) | [10513](../youtube-playback-plox.user.js#L10513) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L10543) | [10543](../youtube-playback-plox.user.js#L10543) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L10557) | [10557](../youtube-playback-plox.user.js#L10557) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L10561) | [10561](../youtube-playback-plox.user.js#L10561) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L10699)
> [Line 10699](../youtube-playback-plox.user.js#L10699)

| Type | Name | Line |
|---|---|---|
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L10717) | [10717](../youtube-playback-plox.user.js#L10717) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L10794) | [10794](../youtube-playback-plox.user.js#L10794) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10874) | [10874](../youtube-playback-plox.user.js#L10874) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10875) | [10875](../youtube-playback-plox.user.js#L10875) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10955) | [10955](../youtube-playback-plox.user.js#L10955) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10956) | [10956](../youtube-playback-plox.user.js#L10956) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L11081)
> [Line 11081](../youtube-playback-plox.user.js#L11081)

_No relevant functions or constants detected._

## [🎵 Selección de Videos](../youtube-playback-plox.user.js#L11139)
> [Line 11139](../youtube-playback-plox.user.js#L11139)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11227) | [11227](../youtube-playback-plox.user.js#L11227) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11234) | [11234](../youtube-playback-plox.user.js#L11234) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L11318) | [11318](../youtube-playback-plox.user.js#L11318) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L11322) | [11322](../youtube-playback-plox.user.js#L11322) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L11331) | [11331](../youtube-playback-plox.user.js#L11331) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L11593) | [11593](../youtube-playback-plox.user.js#L11593) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L11767) | [11767](../youtube-playback-plox.user.js#L11767) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L11854)
> [Line 11854](../youtube-playback-plox.user.js#L11854)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11860) | [11860](../youtube-playback-plox.user.js#L11860) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11860) | [11860](../youtube-playback-plox.user.js#L11860) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L11861) | [11861](../youtube-playback-plox.user.js#L11861) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L11870) | [11870](../youtube-playback-plox.user.js#L11870) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L11875) | [11875](../youtube-playback-plox.user.js#L11875) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L11886) | [11886](../youtube-playback-plox.user.js#L11886) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L11903) | [11903](../youtube-playback-plox.user.js#L11903) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L11936) | [11936](../youtube-playback-plox.user.js#L11936) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L11961) | [11961](../youtube-playback-plox.user.js#L11961) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L11963) | [11963](../youtube-playback-plox.user.js#L11963) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11977) | [11977](../youtube-playback-plox.user.js#L11977) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11977) | [11977](../youtube-playback-plox.user.js#L11977) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L11979) | [11979](../youtube-playback-plox.user.js#L11979) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12002) | [12002](../youtube-playback-plox.user.js#L12002) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L12002) | [12002](../youtube-playback-plox.user.js#L12002) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L12013) | [12013](../youtube-playback-plox.user.js#L12013) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L12018) | [12018](../youtube-playback-plox.user.js#L12018) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L12023) | [12023](../youtube-playback-plox.user.js#L12023) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L12035) | [12035](../youtube-playback-plox.user.js#L12035) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12052) | [12052](../youtube-playback-plox.user.js#L12052) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L12052) | [12052](../youtube-playback-plox.user.js#L12052) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L12054) | [12054](../youtube-playback-plox.user.js#L12054) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L12062) | [12062](../youtube-playback-plox.user.js#L12062) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L12106)
> [Line 12106](../youtube-playback-plox.user.js#L12106)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12111) | [12111](../youtube-playback-plox.user.js#L12111) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L12111) | [12111](../youtube-playback-plox.user.js#L12111) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L12126) | [12126](../youtube-playback-plox.user.js#L12126) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L12161) | [12161](../youtube-playback-plox.user.js#L12161) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L12194) | [12194](../youtube-playback-plox.user.js#L12194) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L12195) | [12195](../youtube-playback-plox.user.js#L12195) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L12226) | [12226](../youtube-playback-plox.user.js#L12226) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L12282) | [12282](../youtube-playback-plox.user.js#L12282) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L12347) | [12347](../youtube-playback-plox.user.js#L12347) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12355) | [12355](../youtube-playback-plox.user.js#L12355) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L12362) | [12362](../youtube-playback-plox.user.js#L12362) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L12400) | [12400](../youtube-playback-plox.user.js#L12400) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L12440) | [12440](../youtube-playback-plox.user.js#L12440) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L12451) | [12451](../youtube-playback-plox.user.js#L12451) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L12466) | [12466](../youtube-playback-plox.user.js#L12466) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12933) | [12933](../youtube-playback-plox.user.js#L12933) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L12976) | [12976](../youtube-playback-plox.user.js#L12976) |

## [Processing Functions](../youtube-playback-plox.user.js#L12996)
> [Line 12996](../youtube-playback-plox.user.js#L12996)

| Type | Name | Line |
|---|---|---|
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L13011) | [13011](../youtube-playback-plox.user.js#L13011) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L13011) | [13011](../youtube-playback-plox.user.js#L13011) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L13025) | [13025](../youtube-playback-plox.user.js#L13025) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L13030) | [13030](../youtube-playback-plox.user.js#L13030) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L13037) | [13037](../youtube-playback-plox.user.js#L13037) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L13043) | [13043](../youtube-playback-plox.user.js#L13043) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L13061) | [13061](../youtube-playback-plox.user.js#L13061) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L13124) | [13124](../youtube-playback-plox.user.js#L13124) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L13144) | [13144](../youtube-playback-plox.user.js#L13144) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L13177) | [13177](../youtube-playback-plox.user.js#L13177) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L13207) | [13207](../youtube-playback-plox.user.js#L13207) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L13218) | [13218](../youtube-playback-plox.user.js#L13218) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L13230) | [13230](../youtube-playback-plox.user.js#L13230) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L13270) | [13270](../youtube-playback-plox.user.js#L13270) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L13318) | [13318](../youtube-playback-plox.user.js#L13318) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L13469) | [13469](../youtube-playback-plox.user.js#L13469) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L13613) | [13613](../youtube-playback-plox.user.js#L13613) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L13720) | [13720](../youtube-playback-plox.user.js#L13720) |

## [PlaybackController](../youtube-playback-plox.user.js#L13864)
> [Line 13864](../youtube-playback-plox.user.js#L13864)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L13908) | [13908](../youtube-playback-plox.user.js#L13908) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L13924) | [13924](../youtube-playback-plox.user.js#L13924) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L14138) | [14138](../youtube-playback-plox.user.js#L14138) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L14257)
> [Line 14257](../youtube-playback-plox.user.js#L14257)

| Type | Name | Line |
|---|---|---|
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L14323) | [14323](../youtube-playback-plox.user.js#L14323) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L14774)
> [Line 14774](../youtube-playback-plox.user.js#L14774)

| Type | Name | Line |
|---|---|---|
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L14797) | [14797](../youtube-playback-plox.user.js#L14797) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L14873) | [14873](../youtube-playback-plox.user.js#L14873) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L14882) | [14882](../youtube-playback-plox.user.js#L14882) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L14890) | [14890](../youtube-playback-plox.user.js#L14890) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14910) | [14910](../youtube-playback-plox.user.js#L14910) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L14962)
> [Line 14962](../youtube-playback-plox.user.js#L14962)

| Type | Name | Line |
|---|---|---|
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14974) | [14974](../youtube-playback-plox.user.js#L14974) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L15020) | [15020](../youtube-playback-plox.user.js#L15020) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L15026) | [15026](../youtube-playback-plox.user.js#L15026) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L15034) | [15034](../youtube-playback-plox.user.js#L15034) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L15049) | [15049](../youtube-playback-plox.user.js#L15049) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L15169) | [15169](../youtube-playback-plox.user.js#L15169) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L15247)
> [Line 15247](../youtube-playback-plox.user.js#L15247)

_No relevant functions or constants detected._

## [📁 Update Video List](../youtube-playback-plox.user.js#L15364)
> [Line 15364](../youtube-playback-plox.user.js#L15364)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSortValue`](../youtube-playback-plox.user.js#L15544) | [15544](../youtube-playback-plox.user.js#L15544) |
| `fn` | [`t`](../youtube-playback-plox.user.js#L15547) | [15547](../youtube-playback-plox.user.js#L15547) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15561) | [15561](../youtube-playback-plox.user.js#L15561) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15565) | [15565](../youtube-playback-plox.user.js#L15565) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15595) | [15595](../youtube-playback-plox.user.js#L15595) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L15614) | [15614](../youtube-playback-plox.user.js#L15614) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L15754) | [15754](../youtube-playback-plox.user.js#L15754) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15862) | [15862](../youtube-playback-plox.user.js#L15862) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L15979) | [15979](../youtube-playback-plox.user.js#L15979) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L16000) | [16000](../youtube-playback-plox.user.js#L16000) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L16051) | [16051](../youtube-playback-plox.user.js#L16051) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L16171)
> [Line 16171](../youtube-playback-plox.user.js#L16171)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L16174) | [16174](../youtube-playback-plox.user.js#L16174) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L16188) | [16188](../youtube-playback-plox.user.js#L16188) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L16199)
> [Line 16199](../youtube-playback-plox.user.js#L16199)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L16326) | [16326](../youtube-playback-plox.user.js#L16326) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L16336) | [16336](../youtube-playback-plox.user.js#L16336) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L16411) | [16411](../youtube-playback-plox.user.js#L16411) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L16423)
> [Line 16423](../youtube-playback-plox.user.js#L16423)

| Type | Name | Line |
|---|---|---|
| `fn` | [`deleteFromStorage`](../youtube-playback-plox.user.js#L16550) | [16550](../youtube-playback-plox.user.js#L16550) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L16555) | [16555](../youtube-playback-plox.user.js#L16555) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L16601) | [16601](../youtube-playback-plox.user.js#L16601) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L16649) | [16649](../youtube-playback-plox.user.js#L16649) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L16655) | [16655](../youtube-playback-plox.user.js#L16655) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L16672) | [16672](../youtube-playback-plox.user.js#L16672) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L16706) | [16706](../youtube-playback-plox.user.js#L16706) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L16750) | [16750](../youtube-playback-plox.user.js#L16750) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L16832) | [16832](../youtube-playback-plox.user.js#L16832) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L16838) | [16838](../youtube-playback-plox.user.js#L16838) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L16854) | [16854](../youtube-playback-plox.user.js#L16854) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L16864) | [16864](../youtube-playback-plox.user.js#L16864) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L16872) | [16872](../youtube-playback-plox.user.js#L16872) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L16877) | [16877](../youtube-playback-plox.user.js#L16877) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L16884) | [16884](../youtube-playback-plox.user.js#L16884) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L16887) | [16887](../youtube-playback-plox.user.js#L16887) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L16891) | [16891](../youtube-playback-plox.user.js#L16891) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L16937) | [16937](../youtube-playback-plox.user.js#L16937) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L16937) | [16937](../youtube-playback-plox.user.js#L16937) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L16951) | [16951](../youtube-playback-plox.user.js#L16951) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L17242) | [17242](../youtube-playback-plox.user.js#L17242) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L17256) | [17256](../youtube-playback-plox.user.js#L17256) |
| `fn` | [`makeToolbarGroup`](../youtube-playback-plox.user.js#L17371) | [17371](../youtube-playback-plox.user.js#L17371) |
| `fn` | [`makeDisplayToggle`](../youtube-playback-plox.user.js#L17382) | [17382](../youtube-playback-plox.user.js#L17382) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L17428) | [17428](../youtube-playback-plox.user.js#L17428) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17429) | [17429](../youtube-playback-plox.user.js#L17429) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L17451) | [17451](../youtube-playback-plox.user.js#L17451) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17452) | [17452](../youtube-playback-plox.user.js#L17452) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L17503) | [17503](../youtube-playback-plox.user.js#L17503) |
| `fn` | [`syncScrollbarVis`](../youtube-playback-plox.user.js#L17548) | [17548](../youtube-playback-plox.user.js#L17548) |
| `fn` | [`syncScrollbarThick`](../youtube-playback-plox.user.js#L17586) | [17586](../youtube-playback-plox.user.js#L17586) |
| `fn` | [`syncOpacityActive`](../youtube-playback-plox.user.js#L17647) | [17647](../youtube-playback-plox.user.js#L17647) |
| `fn` | [`syncStyleActive`](../youtube-playback-plox.user.js#L17720) | [17720](../youtube-playback-plox.user.js#L17720) |
| `fn` | [`syncVisActive`](../youtube-playback-plox.user.js#L17760) | [17760](../youtube-playback-plox.user.js#L17760) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L17802) | [17802](../youtube-playback-plox.user.js#L17802) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L17901) | [17901](../youtube-playback-plox.user.js#L17901) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L17984) | [17984](../youtube-playback-plox.user.js#L17984) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L18238) | [18238](../youtube-playback-plox.user.js#L18238) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L18261) | [18261](../youtube-playback-plox.user.js#L18261) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L18262) | [18262](../youtube-playback-plox.user.js#L18262) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L18334)
> [Line 18334](../youtube-playback-plox.user.js#L18334)

_No relevant functions or constants detected._

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L18486)
> [Line 18486](../youtube-playback-plox.user.js#L18486)

_No relevant functions or constants detected._

## [🔄 Migración de Datos](../youtube-playback-plox.user.js#L18513)
> [Line 18513](../youtube-playback-plox.user.js#L18513)

| Type | Name | Line |
|---|---|---|
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L18570) | [18570](../youtube-playback-plox.user.js#L18570) |

## [🚀 Init](../youtube-playback-plox.user.js#L18903)
> [Line 18903](../youtube-playback-plox.user.js#L18903)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L18912) | [18912](../youtube-playback-plox.user.js#L18912) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L18934) | [18934](../youtube-playback-plox.user.js#L18934) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L19243) | [19243](../youtube-playback-plox.user.js#L19243) |

