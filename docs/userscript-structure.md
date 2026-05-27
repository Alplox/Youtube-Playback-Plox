# Userscript Structure
> Auto-generated on 2026-05-27 · version 0.0.10-2
> **DO NOT EDIT MANUALLY** - regenerate with `node ./scripts/generate-structure.mjs`

---

## Sections index

1. [🔍 Logger System](#logger-system) - [line 138](../youtube-playback-plox.user.js#L138)
2. [🛡️ Initialization Guard (SPA Safety)](#initialization-guard-spa-safety) - [line 229](../youtube-playback-plox.user.js#L229)
3. [📦 Config](#config) - [line 299](../youtube-playback-plox.user.js#L299)
4. [📊 Global Constants](#global-constants) - [line 444](../youtube-playback-plox.user.js#L444)
5. [📊 Global Variables](#global-variables) - [line 464](../youtube-playback-plox.user.js#L464)
6. [🌐 Translations](#translations) - [line 500](../youtube-playback-plox.user.js#L500)
7. [🔧 Utils](#utils) - [line 933](../youtube-playback-plox.user.js#L933)
8. [🔧 Escape HTML](#escape-html) - [line 936](../youtube-playback-plox.user.js#L936)
9. [🔧 Is Visibly Displayed](#is-visibly-displayed) - [line 1017](../youtube-playback-plox.user.js#L1017)
10. [🔧 Format Time](#format-time) - [line 1041](../youtube-playback-plox.user.js#L1041)
11. [🔧 parseTimeToSeconds](#parsetimetoseconds) - [line 1136](../youtube-playback-plox.user.js#L1136)
12. [🔧 normalizeSeconds](#normalizeseconds) - [line 1184](../youtube-playback-plox.user.js#L1184)
13. [⏳ delay](#delay) - [line 1210](../youtube-playback-plox.user.js#L1210)
14. [🔧 setInnerHTML](#setinnerhtml) - [line 1218](../youtube-playback-plox.user.js#L1218)
15. [🔧 Crear Elemento](#crear-elemento) - [line 1280](../youtube-playback-plox.user.js#L1280)
16. [🔧 Debounce](#debounce) - [line 1417](../youtube-playback-plox.user.js#L1417)
17. [🗄️ Event Handlers store](#event-handlers-store) - [line 1442](../youtube-playback-plox.user.js#L1442)
18. [📝 Selector System](#selector-system) - [line 1525](../youtube-playback-plox.user.js#L1525)
19. [💾 Simple LRU Cache](#simple-lru-cache) - [line 1805](../youtube-playback-plox.user.js#L1805)
20. [⚙️ DOM Cache System](#dom-cache-system) - [line 1863](../youtube-playback-plox.user.js#L1863)
21. [🌐 Translation Functions](#translation-functions) - [line 2205](../youtube-playback-plox.user.js#L2205)
22. [🎨 Styles](#styles) - [line 2371](../youtube-playback-plox.user.js#L2371)
23. [🎨 Theme](#theme) - [line 4943](../youtube-playback-plox.user.js#L4943)
24. [🎨 SVG Icons](#svg-icons) - [line 5021](../youtube-playback-plox.user.js#L5021)
25. [🎨 Estilo barra progreso](#estilo-barra-progreso) - [line 5183](../youtube-playback-plox.user.js#L5183)
26. [💾 Storage + Settings](#storage-settings) - [line 5399](../youtube-playback-plox.user.js#L5399)
27. [📢 Ad Caches](#ad-caches) - [line 6005](../youtube-playback-plox.user.js#L6005)
28. [📢 Ad Detector](#ad-detector) - [line 6022](../youtube-playback-plox.user.js#L6022)
29. [🎯 VirtualScroller](#virtualscroller) - [line 6200](../youtube-playback-plox.user.js#L6200)
30. [📤 Import/Export JSON](#importexport-json) - [line 6619](../youtube-playback-plox.user.js#L6619)
31. [☁️ GitHub Backup](#github-backup) - [line 6774](../youtube-playback-plox.user.js#L6774)
32. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 7144](../youtube-playback-plox.user.js#L7144)
33. [🔄 Normalize Video Data](#normalize-video-data) - [line 7346](../youtube-playback-plox.user.js#L7346)
34. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 7428](../youtube-playback-plox.user.js#L7428)
35. [Parse FreeTube DB](#parse-freetube-db) - [line 7519](../youtube-playback-plox.user.js#L7519)
36. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 7599](../youtube-playback-plox.user.js#L7599)
37. [⬆ Export To FreeTube](#export-to-freetube) - [line 7630](../youtube-playback-plox.user.js#L7630)
38. [⬇ Import From FreeTube](#import-from-freetube) - [line 7677](../youtube-playback-plox.user.js#L7677)
39. [🔄 Insert Completion Event](#insert-completion-event) - [line 7735](../youtube-playback-plox.user.js#L7735)
40. [💾 Save Video Generic](#save-video-generic) - [line 7796](../youtube-playback-plox.user.js#L7796)
41. [📺 Helpers](#helpers) - [line 7971](../youtube-playback-plox.user.js#L7971)
42. [📺 Obtiene datos guardados de un video](#obtiene-datos-guardados-de-un-video) - [line 7974](../youtube-playback-plox.user.js#L7974)
43. [📺 Get Player Video ID](#get-player-video-id) - [line 8025](../youtube-playback-plox.user.js#L8025)
44. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 8104](../youtube-playback-plox.user.js#L8104)
45. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 8305](../youtube-playback-plox.user.js#L8305)
46. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 8511](../youtube-playback-plox.user.js#L8511)
47. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 8533](../youtube-playback-plox.user.js#L8533)
48. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 8561](../youtube-playback-plox.user.js#L8561)
49. [📺 get Playlist Name](#get-playlist-name) - [line 8606](../youtube-playback-plox.user.js#L8606)
50. [🕒 Time Display](#time-display) - [line 8881](../youtube-playback-plox.user.js#L8881)
51. [🖼️ Display Button Helpers](#display-button-helpers) - [line 8917](../youtube-playback-plox.user.js#L8917)
52. [🍞 Toasts](#toasts) - [line 9696](../youtube-playback-plox.user.js#L9696)
53. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 9872](../youtube-playback-plox.user.js#L9872)
54. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 9915](../youtube-playback-plox.user.js#L9915)
55. [⚙️ Settings UI](#settings-ui) - [line 10232](../youtube-playback-plox.user.js#L10232)
56. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 10627](../youtube-playback-plox.user.js#L10627)
57. [🎵 Selección de Videos](#seleccin-de-videos) - [line 10685](../youtube-playback-plox.user.js#L10685)
58. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 11387](../youtube-playback-plox.user.js#L11387)
59. [📡 Video Observer Manager](#video-observer-manager) - [line 11644](../youtube-playback-plox.user.js#L11644)
60. [Processing Functions](#processing-functions) - [line 12404](../youtube-playback-plox.user.js#L12404)
61. [PlaybackController](#playbackcontroller) - [line 13344](../youtube-playback-plox.user.js#L13344)
62. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 13750](../youtube-playback-plox.user.js#L13750)
63. [📂 Sort UI](#sort-ui) - [line 14282](../youtube-playback-plox.user.js#L14282)
64. [📂 Filters UI](#filters-ui) - [line 14471](../youtube-playback-plox.user.js#L14471)
65. [📂 Video List UI](#video-list-ui) - [line 14757](../youtube-playback-plox.user.js#L14757)
66. [📁 Update Video List](#update-video-list) - [line 14880](../youtube-playback-plox.user.js#L14880)
67. [🔘 Floating Button](#floating-button) - [line 15665](../youtube-playback-plox.user.js#L15665)
68. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 15693](../youtube-playback-plox.user.js#L15693)
69. [📂 Video Entry](#video-entry) - [line 15917](../youtube-playback-plox.user.js#L15917)
70. [🗑️ Clear All Data](#clear-all-data) - [line 17844](../youtube-playback-plox.user.js#L17844)
71. [⚙️ Menu Commands](#menu-commands) - [line 17996](../youtube-playback-plox.user.js#L17996)
72. [🔄 Migración de Datos](#migracin-de-datos) - [line 18023](../youtube-playback-plox.user.js#L18023)
73. [🚀 Init](#init) - [line 18419](../youtube-playback-plox.user.js#L18419)

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

## [📊 Global Constants](../youtube-playback-plox.user.js#L444)
> [Line 444](../youtube-playback-plox.user.js#L444)

| Type | Name | Line |
|---|---|---|
| `module` | [`TYPE_CONFIG`](../youtube-playback-plox.user.js#L455) | [455](../youtube-playback-plox.user.js#L455) |

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

## [🔧 Escape HTML](../youtube-playback-plox.user.js#L936)
> [Line 936](../youtube-playback-plox.user.js#L936)

| Type | Name | Line |
|---|---|---|
| `fn` | [`unescapeHTML`](../youtube-playback-plox.user.js#L942) | [942](../youtube-playback-plox.user.js#L942) |
| `fn` | [`escapeHTML`](../youtube-playback-plox.user.js#L964) | [964](../youtube-playback-plox.user.js#L964) |

## [🔧 Is Visibly Displayed](../youtube-playback-plox.user.js#L1017)
> [Line 1017](../youtube-playback-plox.user.js#L1017)

_No relevant functions or constants detected._

## [🔧 Format Time](../youtube-playback-plox.user.js#L1041)
> [Line 1041](../youtube-playback-plox.user.js#L1041)

| Type | Name | Line |
|---|---|---|
| `fn` | [`formatTime`](../youtube-playback-plox.user.js#L1064) | [1064](../youtube-playback-plox.user.js#L1064) |

## [🔧 parseTimeToSeconds](../youtube-playback-plox.user.js#L1136)
> [Line 1136](../youtube-playback-plox.user.js#L1136)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseTimeToSeconds`](../youtube-playback-plox.user.js#L1159) | [1159](../youtube-playback-plox.user.js#L1159) |

## [🔧 normalizeSeconds](../youtube-playback-plox.user.js#L1184)
> [Line 1184](../youtube-playback-plox.user.js#L1184)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeSeconds`](../youtube-playback-plox.user.js#L1203) | [1203](../youtube-playback-plox.user.js#L1203) |

## [⏳ delay](../youtube-playback-plox.user.js#L1210)
> [Line 1210](../youtube-playback-plox.user.js#L1210)

| Type | Name | Line |
|---|---|---|
| `fn` | [`delay`](../youtube-playback-plox.user.js#L1216) | [1216](../youtube-playback-plox.user.js#L1216) |

## [🔧 setInnerHTML](../youtube-playback-plox.user.js#L1218)
> [Line 1218](../youtube-playback-plox.user.js#L1218)

_No relevant functions or constants detected._

## [🔧 Crear Elemento](../youtube-playback-plox.user.js#L1280)
> [Line 1280](../youtube-playback-plox.user.js#L1280)

| Type | Name | Line |
|---|---|---|
| `fn` | [`append`](../youtube-playback-plox.user.js#L1360) | [1360](../youtube-playback-plox.user.js#L1360) |
| `fn` | [`clamp`](../youtube-playback-plox.user.js#L1390) | [1390](../youtube-playback-plox.user.js#L1390) |

## [🔧 Debounce](../youtube-playback-plox.user.js#L1417)
> [Line 1417](../youtube-playback-plox.user.js#L1417)

| Type | Name | Line |
|---|---|---|
| `fn` | [`debounce`](../youtube-playback-plox.user.js#L1427) | [1427](../youtube-playback-plox.user.js#L1427) |

## [🗄️ Event Handlers store](../youtube-playback-plox.user.js#L1442)
> [Line 1442](../youtube-playback-plox.user.js#L1442)

| Type | Name | Line |
|---|---|---|
| `fn` | [`dispose`](../youtube-playback-plox.user.js#L1519) | [1519](../youtube-playback-plox.user.js#L1519) |

## [📝 Selector System](../youtube-playback-plox.user.js#L1525)
> [Line 1525](../youtube-playback-plox.user.js#L1525)

| Type | Name | Line |
|---|---|---|
| `module` | [`PREFIX`](../youtube-playback-plox.user.js#L1595) | [1595](../youtube-playback-plox.user.js#L1595) |
| `fn` | [`deepFreeze`](../youtube-playback-plox.user.js#L1619) | [1619](../youtube-playback-plox.user.js#L1619) |
| `fn` | [`createSelectorSystem`](../youtube-playback-plox.user.js#L1650) | [1650](../youtube-playback-plox.user.js#L1650) |

## [💾 Simple LRU Cache](../youtube-playback-plox.user.js#L1805)
> [Line 1805](../youtube-playback-plox.user.js#L1805)

_No relevant functions or constants detected._

## [⚙️ DOM Cache System](../youtube-playback-plox.user.js#L1863)
> [Line 1863](../youtube-playback-plox.user.js#L1863)

| Type | Name | Line |
|---|---|---|
| `fn` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1880) | [1880](../youtube-playback-plox.user.js#L1880) |
| `module` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1880) | [1880](../youtube-playback-plox.user.js#L1880) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L1905) | [1905](../youtube-playback-plox.user.js#L1905) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L1929) | [1929](../youtube-playback-plox.user.js#L1929) |

## [🌐 Translation Functions](../youtube-playback-plox.user.js#L2205)
> [Line 2205](../youtube-playback-plox.user.js#L2205)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normParams`](../youtube-playback-plox.user.js#L2229) | [2229](../youtube-playback-plox.user.js#L2229) |
| `fn` | [`candidates`](../youtube-playback-plox.user.js#L2328) | [2328](../youtube-playback-plox.user.js#L2328) |
| `fn` | [`normalized`](../youtube-playback-plox.user.js#L2347) | [2347](../youtube-playback-plox.user.js#L2347) |

## [🎨 Styles](../youtube-playback-plox.user.js#L2371)
> [Line 2371](../youtube-playback-plox.user.js#L2371)

_No relevant functions or constants detected._

## [🎨 Theme](../youtube-playback-plox.user.js#L4943)
> [Line 4943](../youtube-playback-plox.user.js#L4943)

_No relevant functions or constants detected._

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L5021)
> [Line 5021](../youtube-playback-plox.user.js#L5021)

_No relevant functions or constants detected._

## [🎨 Estilo barra progreso](../youtube-playback-plox.user.js#L5183)
> [Line 5183](../youtube-playback-plox.user.js#L5183)

| Type | Name | Line |
|---|---|---|
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L5376) | [5376](../youtube-playback-plox.user.js#L5376) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L5399)
> [Line 5399](../youtube-playback-plox.user.js#L5399)

| Type | Name | Line |
|---|---|---|
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L5409) | [5409](../youtube-playback-plox.user.js#L5409) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L5409) | [5409](../youtube-playback-plox.user.js#L5409) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5552) | [5552](../youtube-playback-plox.user.js#L5552) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5552) | [5552](../youtube-playback-plox.user.js#L5552) |
| `fn` | [`isSupported`](../youtube-playback-plox.user.js#L5556) | [5556](../youtube-playback-plox.user.js#L5556) |
| `module` | [`isSupported`](../youtube-playback-plox.user.js#L5556) | [5556](../youtube-playback-plox.user.js#L5556) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L5704) | [5704](../youtube-playback-plox.user.js#L5704) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L5834) | [5834](../youtube-playback-plox.user.js#L5834) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L5852) | [5852](../youtube-playback-plox.user.js#L5852) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L5873) | [5873](../youtube-playback-plox.user.js#L5873) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L5886) | [5886](../youtube-playback-plox.user.js#L5886) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L5950) | [5950](../youtube-playback-plox.user.js#L5950) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L5968) | [5968](../youtube-playback-plox.user.js#L5968) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L5976) | [5976](../youtube-playback-plox.user.js#L5976) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L5994) | [5994](../youtube-playback-plox.user.js#L5994) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L6005)
> [Line 6005](../youtube-playback-plox.user.js#L6005)

_No relevant functions or constants detected._

## [📢 Ad Detector](../youtube-playback-plox.user.js#L6022)
> [Line 6022](../youtube-playback-plox.user.js#L6022)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L6027) | [6027](../youtube-playback-plox.user.js#L6027) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L6077) | [6077](../youtube-playback-plox.user.js#L6077) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L6200)
> [Line 6200](../youtube-playback-plox.user.js#L6200)

_No relevant functions or constants detected._

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L6619)
> [Line 6619](../youtube-playback-plox.user.js#L6619)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L6626) | [6626](../youtube-playback-plox.user.js#L6626) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L6629) | [6629](../youtube-playback-plox.user.js#L6629) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L6657) | [6657](../youtube-playback-plox.user.js#L6657) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L6700) | [6700](../youtube-playback-plox.user.js#L6700) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L6774)
> [Line 6774](../youtube-playback-plox.user.js#L6774)

| Type | Name | Line |
|---|---|---|
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L6780) | [6780](../youtube-playback-plox.user.js#L6780) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L6808) | [6808](../youtube-playback-plox.user.js#L6808) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L6809) | [6809](../youtube-playback-plox.user.js#L6809) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L6872) | [6872](../youtube-playback-plox.user.js#L6872) |
| `fn` | [`cleanOwner`](../youtube-playback-plox.user.js#L6883) | [6883](../youtube-playback-plox.user.js#L6883) |
| `fn` | [`cleanName`](../youtube-playback-plox.user.js#L6884) | [6884](../youtube-playback-plox.user.js#L6884) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L6885) | [6885](../youtube-playback-plox.user.js#L6885) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L7007) | [7007](../youtube-playback-plox.user.js#L7007) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7019) | [7019](../youtube-playback-plox.user.js#L7019) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L7085) | [7085](../youtube-playback-plox.user.js#L7085) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L7115) | [7115](../youtube-playback-plox.user.js#L7115) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L7144)
> [Line 7144](../youtube-playback-plox.user.js#L7144)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L7145) | [7145](../youtube-playback-plox.user.js#L7145) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L7191) | [7191](../youtube-playback-plox.user.js#L7191) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L7346)
> [Line 7346](../youtube-playback-plox.user.js#L7346)

_No relevant functions or constants detected._

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L7428)
> [Line 7428](../youtube-playback-plox.user.js#L7428)

_No relevant functions or constants detected._

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L7519)
> [Line 7519](../youtube-playback-plox.user.js#L7519)

_No relevant functions or constants detected._

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L7599)
> [Line 7599](../youtube-playback-plox.user.js#L7599)

| Type | Name | Line |
|---|---|---|
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L7618) | [7618](../youtube-playback-plox.user.js#L7618) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L7630)
> [Line 7630](../youtube-playback-plox.user.js#L7630)

_No relevant functions or constants detected._

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L7677)
> [Line 7677](../youtube-playback-plox.user.js#L7677)

_No relevant functions or constants detected._

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L7735)
> [Line 7735](../youtube-playback-plox.user.js#L7735)

| Type | Name | Line |
|---|---|---|
| `fn` | [`base`](../youtube-playback-plox.user.js#L7744) | [7744](../youtube-playback-plox.user.js#L7744) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L7785) | [7785](../youtube-playback-plox.user.js#L7785) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L7796)
> [Line 7796](../youtube-playback-plox.user.js#L7796)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L7850) | [7850](../youtube-playback-plox.user.js#L7850) |

## [📺 Helpers](../youtube-playback-plox.user.js#L7971)
> [Line 7971](../youtube-playback-plox.user.js#L7971)

_No relevant functions or constants detected._

## [📺 Obtiene datos guardados de un video](../youtube-playback-plox.user.js#L7974)
> [Line 7974](../youtube-playback-plox.user.js#L7974)

| Type | Name | Line |
|---|---|---|
| `fn` | [`keys`](../youtube-playback-plox.user.js#L8000) | [8000](../youtube-playback-plox.user.js#L8000) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L8025)
> [Line 8025](../youtube-playback-plox.user.js#L8025)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L8061) | [8061](../youtube-playback-plox.user.js#L8061) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L8104)
> [Line 8104](../youtube-playback-plox.user.js#L8104)

_No relevant functions or constants detected._

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L8305)
> [Line 8305](../youtube-playback-plox.user.js#L8305)

| Type | Name | Line |
|---|---|---|
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L8402) | [8402](../youtube-playback-plox.user.js#L8402) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L8511)
> [Line 8511](../youtube-playback-plox.user.js#L8511)

_No relevant functions or constants detected._

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L8533)
> [Line 8533](../youtube-playback-plox.user.js#L8533)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L8561)
> [Line 8561](../youtube-playback-plox.user.js#L8561)

_No relevant functions or constants detected._

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L8606)
> [Line 8606](../youtube-playback-plox.user.js#L8606)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L8627) | [8627](../youtube-playback-plox.user.js#L8627) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L8769) | [8769](../youtube-playback-plox.user.js#L8769) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L8854) | [8854](../youtube-playback-plox.user.js#L8854) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L8881)
> [Line 8881](../youtube-playback-plox.user.js#L8881)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L8907) | [8907](../youtube-playback-plox.user.js#L8907) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L8917)
> [Line 8917](../youtube-playback-plox.user.js#L8917)

| Type | Name | Line |
|---|---|---|
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9199) | [9199](../youtube-playback-plox.user.js#L9199) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9199) | [9199](../youtube-playback-plox.user.js#L9199) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L9211) | [9211](../youtube-playback-plox.user.js#L9211) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L9221) | [9221](../youtube-playback-plox.user.js#L9221) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L9229) | [9229](../youtube-playback-plox.user.js#L9229) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L9237) | [9237](../youtube-playback-plox.user.js#L9237) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L9260) | [9260](../youtube-playback-plox.user.js#L9260) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L9272) | [9272](../youtube-playback-plox.user.js#L9272) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L9275) | [9275](../youtube-playback-plox.user.js#L9275) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L9285) | [9285](../youtube-playback-plox.user.js#L9285) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L9290) | [9290](../youtube-playback-plox.user.js#L9290) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L9313) | [9313](../youtube-playback-plox.user.js#L9313) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L9332) | [9332](../youtube-playback-plox.user.js#L9332) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L9340) | [9340](../youtube-playback-plox.user.js#L9340) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L9384) | [9384](../youtube-playback-plox.user.js#L9384) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L9439) | [9439](../youtube-playback-plox.user.js#L9439) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L9498) | [9498](../youtube-playback-plox.user.js#L9498) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L9595) | [9595](../youtube-playback-plox.user.js#L9595) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L9610) | [9610](../youtube-playback-plox.user.js#L9610) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L9614) | [9614](../youtube-playback-plox.user.js#L9614) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L9621) | [9621](../youtube-playback-plox.user.js#L9621) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L9639) | [9639](../youtube-playback-plox.user.js#L9639) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L9696)
> [Line 9696](../youtube-playback-plox.user.js#L9696)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L9732) | [9732](../youtube-playback-plox.user.js#L9732) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L9872)
> [Line 9872](../youtube-playback-plox.user.js#L9872)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L9875) | [9875](../youtube-playback-plox.user.js#L9875) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L9915)
> [Line 9915](../youtube-playback-plox.user.js#L9915)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L9954) | [9954](../youtube-playback-plox.user.js#L9954) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L9960) | [9960](../youtube-playback-plox.user.js#L9960) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L9968) | [9968](../youtube-playback-plox.user.js#L9968) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L10014) | [10014](../youtube-playback-plox.user.js#L10014) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L10018) | [10018](../youtube-playback-plox.user.js#L10018) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L10021) | [10021](../youtube-playback-plox.user.js#L10021) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L10037) | [10037](../youtube-playback-plox.user.js#L10037) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L10046) | [10046](../youtube-playback-plox.user.js#L10046) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L10076) | [10076](../youtube-playback-plox.user.js#L10076) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L10090) | [10090](../youtube-playback-plox.user.js#L10090) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L10094) | [10094](../youtube-playback-plox.user.js#L10094) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L10232)
> [Line 10232](../youtube-playback-plox.user.js#L10232)

| Type | Name | Line |
|---|---|---|
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L10252) | [10252](../youtube-playback-plox.user.js#L10252) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L10336) | [10336](../youtube-playback-plox.user.js#L10336) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10417) | [10417](../youtube-playback-plox.user.js#L10417) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10418) | [10418](../youtube-playback-plox.user.js#L10418) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10498) | [10498](../youtube-playback-plox.user.js#L10498) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10499) | [10499](../youtube-playback-plox.user.js#L10499) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L10627)
> [Line 10627](../youtube-playback-plox.user.js#L10627)

_No relevant functions or constants detected._

## [🎵 Selección de Videos](../youtube-playback-plox.user.js#L10685)
> [Line 10685](../youtube-playback-plox.user.js#L10685)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L10775) | [10775](../youtube-playback-plox.user.js#L10775) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L10782) | [10782](../youtube-playback-plox.user.js#L10782) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L10867) | [10867](../youtube-playback-plox.user.js#L10867) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L10871) | [10871](../youtube-playback-plox.user.js#L10871) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L10880) | [10880](../youtube-playback-plox.user.js#L10880) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L11153) | [11153](../youtube-playback-plox.user.js#L11153) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L11300) | [11300](../youtube-playback-plox.user.js#L11300) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L11387)
> [Line 11387](../youtube-playback-plox.user.js#L11387)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11393) | [11393](../youtube-playback-plox.user.js#L11393) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11393) | [11393](../youtube-playback-plox.user.js#L11393) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L11394) | [11394](../youtube-playback-plox.user.js#L11394) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L11403) | [11403](../youtube-playback-plox.user.js#L11403) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L11408) | [11408](../youtube-playback-plox.user.js#L11408) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L11419) | [11419](../youtube-playback-plox.user.js#L11419) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L11436) | [11436](../youtube-playback-plox.user.js#L11436) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L11470) | [11470](../youtube-playback-plox.user.js#L11470) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L11495) | [11495](../youtube-playback-plox.user.js#L11495) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L11497) | [11497](../youtube-playback-plox.user.js#L11497) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11511) | [11511](../youtube-playback-plox.user.js#L11511) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11511) | [11511](../youtube-playback-plox.user.js#L11511) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L11513) | [11513](../youtube-playback-plox.user.js#L11513) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L11536) | [11536](../youtube-playback-plox.user.js#L11536) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L11536) | [11536](../youtube-playback-plox.user.js#L11536) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L11547) | [11547](../youtube-playback-plox.user.js#L11547) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L11552) | [11552](../youtube-playback-plox.user.js#L11552) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L11557) | [11557](../youtube-playback-plox.user.js#L11557) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L11569) | [11569](../youtube-playback-plox.user.js#L11569) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L11586) | [11586](../youtube-playback-plox.user.js#L11586) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L11586) | [11586](../youtube-playback-plox.user.js#L11586) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L11588) | [11588](../youtube-playback-plox.user.js#L11588) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L11596) | [11596](../youtube-playback-plox.user.js#L11596) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L11644)
> [Line 11644](../youtube-playback-plox.user.js#L11644)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L11649) | [11649](../youtube-playback-plox.user.js#L11649) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L11649) | [11649](../youtube-playback-plox.user.js#L11649) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L11669) | [11669](../youtube-playback-plox.user.js#L11669) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L11684) | [11684](../youtube-playback-plox.user.js#L11684) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L11700) | [11700](../youtube-playback-plox.user.js#L11700) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L11735) | [11735](../youtube-playback-plox.user.js#L11735) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L11768) | [11768](../youtube-playback-plox.user.js#L11768) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L11769) | [11769](../youtube-playback-plox.user.js#L11769) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L11800) | [11800](../youtube-playback-plox.user.js#L11800) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L11856) | [11856](../youtube-playback-plox.user.js#L11856) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L11922) | [11922](../youtube-playback-plox.user.js#L11922) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L11930) | [11930](../youtube-playback-plox.user.js#L11930) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L11937) | [11937](../youtube-playback-plox.user.js#L11937) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L11975) | [11975](../youtube-playback-plox.user.js#L11975) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L12015) | [12015](../youtube-playback-plox.user.js#L12015) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L12026) | [12026](../youtube-playback-plox.user.js#L12026) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L12042) | [12042](../youtube-playback-plox.user.js#L12042) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12342) | [12342](../youtube-playback-plox.user.js#L12342) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L12384) | [12384](../youtube-playback-plox.user.js#L12384) |

## [Processing Functions](../youtube-playback-plox.user.js#L12404)
> [Line 12404](../youtube-playback-plox.user.js#L12404)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L12430) | [12430](../youtube-playback-plox.user.js#L12430) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L12449) | [12449](../youtube-playback-plox.user.js#L12449) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12459) | [12459](../youtube-playback-plox.user.js#L12459) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12459) | [12459](../youtube-playback-plox.user.js#L12459) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L12474) | [12474](../youtube-playback-plox.user.js#L12474) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L12479) | [12479](../youtube-playback-plox.user.js#L12479) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L12486) | [12486](../youtube-playback-plox.user.js#L12486) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L12492) | [12492](../youtube-playback-plox.user.js#L12492) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L12510) | [12510](../youtube-playback-plox.user.js#L12510) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L12580) | [12580](../youtube-playback-plox.user.js#L12580) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L12601) | [12601](../youtube-playback-plox.user.js#L12601) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L12634) | [12634](../youtube-playback-plox.user.js#L12634) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L12664) | [12664](../youtube-playback-plox.user.js#L12664) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L12675) | [12675](../youtube-playback-plox.user.js#L12675) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L12687) | [12687](../youtube-playback-plox.user.js#L12687) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L12721) | [12721](../youtube-playback-plox.user.js#L12721) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L12768) | [12768](../youtube-playback-plox.user.js#L12768) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L12878) | [12878](../youtube-playback-plox.user.js#L12878) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L12927) | [12927](../youtube-playback-plox.user.js#L12927) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L13087) | [13087](../youtube-playback-plox.user.js#L13087) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L13200) | [13200](../youtube-playback-plox.user.js#L13200) |

## [PlaybackController](../youtube-playback-plox.user.js#L13344)
> [Line 13344](../youtube-playback-plox.user.js#L13344)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L13389) | [13389](../youtube-playback-plox.user.js#L13389) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L13405) | [13405](../youtube-playback-plox.user.js#L13405) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L13428) | [13428](../youtube-playback-plox.user.js#L13428) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L13434) | [13434](../youtube-playback-plox.user.js#L13434) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L13638) | [13638](../youtube-playback-plox.user.js#L13638) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L13750)
> [Line 13750](../youtube-playback-plox.user.js#L13750)

| Type | Name | Line |
|---|---|---|
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L13881) | [13881](../youtube-playback-plox.user.js#L13881) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L14282)
> [Line 14282](../youtube-playback-plox.user.js#L14282)

| Type | Name | Line |
|---|---|---|
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L14305) | [14305](../youtube-playback-plox.user.js#L14305) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L14381) | [14381](../youtube-playback-plox.user.js#L14381) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L14390) | [14390](../youtube-playback-plox.user.js#L14390) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L14398) | [14398](../youtube-playback-plox.user.js#L14398) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14418) | [14418](../youtube-playback-plox.user.js#L14418) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L14471)
> [Line 14471](../youtube-playback-plox.user.js#L14471)

| Type | Name | Line |
|---|---|---|
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14483) | [14483](../youtube-playback-plox.user.js#L14483) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L14530) | [14530](../youtube-playback-plox.user.js#L14530) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L14536) | [14536](../youtube-playback-plox.user.js#L14536) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L14544) | [14544](../youtube-playback-plox.user.js#L14544) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14559) | [14559](../youtube-playback-plox.user.js#L14559) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L14679) | [14679](../youtube-playback-plox.user.js#L14679) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L14757)
> [Line 14757](../youtube-playback-plox.user.js#L14757)

_No relevant functions or constants detected._

## [📁 Update Video List](../youtube-playback-plox.user.js#L14880)
> [Line 14880](../youtube-playback-plox.user.js#L14880)

| Type | Name | Line |
|---|---|---|
| `fn` | [`prog`](../youtube-playback-plox.user.js#L14899) | [14899](../youtube-playback-plox.user.js#L14899) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L14903) | [14903](../youtube-playback-plox.user.js#L14903) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15087) | [15087](../youtube-playback-plox.user.js#L15087) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L15106) | [15106](../youtube-playback-plox.user.js#L15106) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L15232) | [15232](../youtube-playback-plox.user.js#L15232) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15309) | [15309](../youtube-playback-plox.user.js#L15309) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L15473) | [15473](../youtube-playback-plox.user.js#L15473) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L15494) | [15494](../youtube-playback-plox.user.js#L15494) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L15545) | [15545](../youtube-playback-plox.user.js#L15545) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L15665)
> [Line 15665](../youtube-playback-plox.user.js#L15665)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L15668) | [15668](../youtube-playback-plox.user.js#L15668) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L15682) | [15682](../youtube-playback-plox.user.js#L15682) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L15693)
> [Line 15693](../youtube-playback-plox.user.js#L15693)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L15820) | [15820](../youtube-playback-plox.user.js#L15820) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L15830) | [15830](../youtube-playback-plox.user.js#L15830) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L15905) | [15905](../youtube-playback-plox.user.js#L15905) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L15917)
> [Line 15917](../youtube-playback-plox.user.js#L15917)

| Type | Name | Line |
|---|---|---|
| `fn` | [`deleteFromStorage`](../youtube-playback-plox.user.js#L16051) | [16051](../youtube-playback-plox.user.js#L16051) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L16056) | [16056](../youtube-playback-plox.user.js#L16056) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L16115) | [16115](../youtube-playback-plox.user.js#L16115) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L16163) | [16163](../youtube-playback-plox.user.js#L16163) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L16169) | [16169](../youtube-playback-plox.user.js#L16169) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L16186) | [16186](../youtube-playback-plox.user.js#L16186) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L16220) | [16220](../youtube-playback-plox.user.js#L16220) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L16264) | [16264](../youtube-playback-plox.user.js#L16264) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L16346) | [16346](../youtube-playback-plox.user.js#L16346) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L16352) | [16352](../youtube-playback-plox.user.js#L16352) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L16368) | [16368](../youtube-playback-plox.user.js#L16368) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L16378) | [16378](../youtube-playback-plox.user.js#L16378) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L16386) | [16386](../youtube-playback-plox.user.js#L16386) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L16391) | [16391](../youtube-playback-plox.user.js#L16391) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L16398) | [16398](../youtube-playback-plox.user.js#L16398) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L16401) | [16401](../youtube-playback-plox.user.js#L16401) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L16405) | [16405](../youtube-playback-plox.user.js#L16405) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L16451) | [16451](../youtube-playback-plox.user.js#L16451) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L16451) | [16451](../youtube-playback-plox.user.js#L16451) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L16465) | [16465](../youtube-playback-plox.user.js#L16465) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L16739) | [16739](../youtube-playback-plox.user.js#L16739) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L16787) | [16787](../youtube-playback-plox.user.js#L16787) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L16788) | [16788](../youtube-playback-plox.user.js#L16788) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L16804) | [16804](../youtube-playback-plox.user.js#L16804) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L16805) | [16805](../youtube-playback-plox.user.js#L16805) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L16854) | [16854](../youtube-playback-plox.user.js#L16854) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L16999) | [16999](../youtube-playback-plox.user.js#L16999) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L17013) | [17013](../youtube-playback-plox.user.js#L17013) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L17312) | [17312](../youtube-playback-plox.user.js#L17312) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L17411) | [17411](../youtube-playback-plox.user.js#L17411) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L17494) | [17494](../youtube-playback-plox.user.js#L17494) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L17748) | [17748](../youtube-playback-plox.user.js#L17748) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L17771) | [17771](../youtube-playback-plox.user.js#L17771) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L17772) | [17772](../youtube-playback-plox.user.js#L17772) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L17844)
> [Line 17844](../youtube-playback-plox.user.js#L17844)

_No relevant functions or constants detected._

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L17996)
> [Line 17996](../youtube-playback-plox.user.js#L17996)

_No relevant functions or constants detected._

## [🔄 Migración de Datos](../youtube-playback-plox.user.js#L18023)
> [Line 18023](../youtube-playback-plox.user.js#L18023)

| Type | Name | Line |
|---|---|---|
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L18080) | [18080](../youtube-playback-plox.user.js#L18080) |

## [🚀 Init](../youtube-playback-plox.user.js#L18419)
> [Line 18419](../youtube-playback-plox.user.js#L18419)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L18429) | [18429](../youtube-playback-plox.user.js#L18429) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L18451) | [18451](../youtube-playback-plox.user.js#L18451) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L18779) | [18779](../youtube-playback-plox.user.js#L18779) |

