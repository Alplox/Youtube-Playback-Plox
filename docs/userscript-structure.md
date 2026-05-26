# Userscript Structure
> Auto-generated on 2026-05-26 · version 0.0.10-2
> **DO NOT EDIT MANUALLY** - regenerate with `node ./scripts/generate-structure.mjs`

---

## Sections index

1. [🔍 Logger System](#logger-system) - [line 138](../youtube-playback-plox.user.js#L138)
2. [🛡️ Initialization Guard (SPA Safety)](#initialization-guard-spa-safety) - [line 229](../youtube-playback-plox.user.js#L229)
3. [📦 Config](#config) - [line 299](../youtube-playback-plox.user.js#L299)
4. [📊 Global Constants](#global-constants) - [line 427](../youtube-playback-plox.user.js#L427)
5. [📊 Global Variables](#global-variables) - [line 447](../youtube-playback-plox.user.js#L447)
6. [🌐 Translations](#translations) - [line 483](../youtube-playback-plox.user.js#L483)
7. [🔧 Utils](#utils) - [line 916](../youtube-playback-plox.user.js#L916)
8. [🔧 Escape HTML](#escape-html) - [line 919](../youtube-playback-plox.user.js#L919)
9. [🔧 Is Visibly Displayed](#is-visibly-displayed) - [line 1000](../youtube-playback-plox.user.js#L1000)
10. [🔧 Format Time](#format-time) - [line 1024](../youtube-playback-plox.user.js#L1024)
11. [🔧 parseTimeToSeconds](#parsetimetoseconds) - [line 1119](../youtube-playback-plox.user.js#L1119)
12. [🔧 normalizeSeconds](#normalizeseconds) - [line 1167](../youtube-playback-plox.user.js#L1167)
13. [🔧 setInnerHTML](#setinnerhtml) - [line 1193](../youtube-playback-plox.user.js#L1193)
14. [🔧 Crear Elemento](#crear-elemento) - [line 1255](../youtube-playback-plox.user.js#L1255)
15. [🔧 Debounce](#debounce) - [line 1392](../youtube-playback-plox.user.js#L1392)
16. [🗄️ Event Handlers store](#event-handlers-store) - [line 1417](../youtube-playback-plox.user.js#L1417)
17. [📝 Selector System](#selector-system) - [line 1500](../youtube-playback-plox.user.js#L1500)
18. [💾 Simple LRU Cache](#simple-lru-cache) - [line 1780](../youtube-playback-plox.user.js#L1780)
19. [⚙️ DOM Cache System](#dom-cache-system) - [line 1838](../youtube-playback-plox.user.js#L1838)
20. [🌐 Translation Functions](#translation-functions) - [line 2180](../youtube-playback-plox.user.js#L2180)
21. [🎨 Styles](#styles) - [line 2346](../youtube-playback-plox.user.js#L2346)
22. [🎨 Theme](#theme) - [line 4954](../youtube-playback-plox.user.js#L4954)
23. [🎨 SVG Icons](#svg-icons) - [line 5032](../youtube-playback-plox.user.js#L5032)
24. [🎨 Estilo barra progreso](#estilo-barra-progreso) - [line 5194](../youtube-playback-plox.user.js#L5194)
25. [💾 Storage + Settings](#storage-settings) - [line 5482](../youtube-playback-plox.user.js#L5482)
26. [📢 Ad Caches](#ad-caches) - [line 6089](../youtube-playback-plox.user.js#L6089)
27. [📢 Ad Detector](#ad-detector) - [line 6106](../youtube-playback-plox.user.js#L6106)
28. [🎯 VirtualScroller](#virtualscroller) - [line 6284](../youtube-playback-plox.user.js#L6284)
29. [📤 Import/Export JSON](#importexport-json) - [line 6703](../youtube-playback-plox.user.js#L6703)
30. [☁️ GitHub Backup](#github-backup) - [line 6858](../youtube-playback-plox.user.js#L6858)
31. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 7225](../youtube-playback-plox.user.js#L7225)
32. [🔄 Normalize Video Data](#normalize-video-data) - [line 7427](../youtube-playback-plox.user.js#L7427)
33. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 7509](../youtube-playback-plox.user.js#L7509)
34. [Parse FreeTube DB](#parse-freetube-db) - [line 7600](../youtube-playback-plox.user.js#L7600)
35. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 7680](../youtube-playback-plox.user.js#L7680)
36. [⬆ Export To FreeTube](#export-to-freetube) - [line 7711](../youtube-playback-plox.user.js#L7711)
37. [⬇ Import From FreeTube](#import-from-freetube) - [line 7758](../youtube-playback-plox.user.js#L7758)
38. [🔄 Insert Completion Event](#insert-completion-event) - [line 7816](../youtube-playback-plox.user.js#L7816)
39. [💾 Save Video Generic](#save-video-generic) - [line 7877](../youtube-playback-plox.user.js#L7877)
40. [📺 Helpers](#helpers) - [line 8045](../youtube-playback-plox.user.js#L8045)
41. [📺 Obtiene datos guardados de un video](#obtiene-datos-guardados-de-un-video) - [line 8048](../youtube-playback-plox.user.js#L8048)
42. [📺 Get Player Video ID](#get-player-video-id) - [line 8099](../youtube-playback-plox.user.js#L8099)
43. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 8178](../youtube-playback-plox.user.js#L8178)
44. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 8379](../youtube-playback-plox.user.js#L8379)
45. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 8585](../youtube-playback-plox.user.js#L8585)
46. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 8607](../youtube-playback-plox.user.js#L8607)
47. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 8635](../youtube-playback-plox.user.js#L8635)
48. [📺 get Playlist Name](#get-playlist-name) - [line 8680](../youtube-playback-plox.user.js#L8680)
49. [🕒 Time Display](#time-display) - [line 8955](../youtube-playback-plox.user.js#L8955)
50. [🖼️ Display Button Helpers](#display-button-helpers) - [line 8991](../youtube-playback-plox.user.js#L8991)
51. [🍞 Toasts](#toasts) - [line 9788](../youtube-playback-plox.user.js#L9788)
52. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 9964](../youtube-playback-plox.user.js#L9964)
53. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 10006](../youtube-playback-plox.user.js#L10006)
54. [⚙️ Settings UI](#settings-ui) - [line 10323](../youtube-playback-plox.user.js#L10323)
55. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 10711](../youtube-playback-plox.user.js#L10711)
56. [🎵 Selección de Videos](#seleccin-de-videos) - [line 10769](../youtube-playback-plox.user.js#L10769)
57. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 11467](../youtube-playback-plox.user.js#L11467)
58. [📡 Video Observer Manager](#video-observer-manager) - [line 11720](../youtube-playback-plox.user.js#L11720)
59. [Processing Functions](#processing-functions) - [line 12478](../youtube-playback-plox.user.js#L12478)
60. [PlaybackController](#playbackcontroller) - [line 13401](../youtube-playback-plox.user.js#L13401)
61. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 13787](../youtube-playback-plox.user.js#L13787)
62. [📂 Sort UI](#sort-ui) - [line 14317](../youtube-playback-plox.user.js#L14317)
63. [📂 Filters UI](#filters-ui) - [line 14505](../youtube-playback-plox.user.js#L14505)
64. [📂 Video List UI](#video-list-ui) - [line 14790](../youtube-playback-plox.user.js#L14790)
65. [📁 Update Video List](#update-video-list) - [line 14907](../youtube-playback-plox.user.js#L14907)
66. [🔘 Floating Button](#floating-button) - [line 15692](../youtube-playback-plox.user.js#L15692)
67. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 15720](../youtube-playback-plox.user.js#L15720)
68. [📂 Video Entry](#video-entry) - [line 15944](../youtube-playback-plox.user.js#L15944)
69. [🗑️ Clear All Data](#clear-all-data) - [line 17859](../youtube-playback-plox.user.js#L17859)
70. [⚙️ Menu Commands](#menu-commands) - [line 18011](../youtube-playback-plox.user.js#L18011)
71. [🔄 Migración de Datos](#migracin-de-datos) - [line 18038](../youtube-playback-plox.user.js#L18038)
72. [🚀 Init](#init) - [line 18428](../youtube-playback-plox.user.js#L18428)

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

## [📊 Global Variables](../youtube-playback-plox.user.js#L447)
> [Line 447](../youtube-playback-plox.user.js#L447)

_No relevant functions or constants detected._

## [🌐 Translations](../youtube-playback-plox.user.js#L483)
> [Line 483](../youtube-playback-plox.user.js#L483)

| Type | Name | Line |
|---|---|---|
| `fn` | [`fetchUrl`](../youtube-playback-plox.user.js#L825) | [825](../youtube-playback-plox.user.js#L825) |

## [🔧 Utils](../youtube-playback-plox.user.js#L916)
> [Line 916](../youtube-playback-plox.user.js#L916)

_No relevant functions or constants detected._

## [🔧 Escape HTML](../youtube-playback-plox.user.js#L919)
> [Line 919](../youtube-playback-plox.user.js#L919)

| Type | Name | Line |
|---|---|---|
| `fn` | [`unescapeHTML`](../youtube-playback-plox.user.js#L925) | [925](../youtube-playback-plox.user.js#L925) |
| `fn` | [`escapeHTML`](../youtube-playback-plox.user.js#L947) | [947](../youtube-playback-plox.user.js#L947) |

## [🔧 Is Visibly Displayed](../youtube-playback-plox.user.js#L1000)
> [Line 1000](../youtube-playback-plox.user.js#L1000)

_No relevant functions or constants detected._

## [🔧 Format Time](../youtube-playback-plox.user.js#L1024)
> [Line 1024](../youtube-playback-plox.user.js#L1024)

| Type | Name | Line |
|---|---|---|
| `fn` | [`formatTime`](../youtube-playback-plox.user.js#L1047) | [1047](../youtube-playback-plox.user.js#L1047) |

## [🔧 parseTimeToSeconds](../youtube-playback-plox.user.js#L1119)
> [Line 1119](../youtube-playback-plox.user.js#L1119)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseTimeToSeconds`](../youtube-playback-plox.user.js#L1142) | [1142](../youtube-playback-plox.user.js#L1142) |

## [🔧 normalizeSeconds](../youtube-playback-plox.user.js#L1167)
> [Line 1167](../youtube-playback-plox.user.js#L1167)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeSeconds`](../youtube-playback-plox.user.js#L1186) | [1186](../youtube-playback-plox.user.js#L1186) |

## [🔧 setInnerHTML](../youtube-playback-plox.user.js#L1193)
> [Line 1193](../youtube-playback-plox.user.js#L1193)

_No relevant functions or constants detected._

## [🔧 Crear Elemento](../youtube-playback-plox.user.js#L1255)
> [Line 1255](../youtube-playback-plox.user.js#L1255)

| Type | Name | Line |
|---|---|---|
| `fn` | [`append`](../youtube-playback-plox.user.js#L1335) | [1335](../youtube-playback-plox.user.js#L1335) |
| `fn` | [`clamp`](../youtube-playback-plox.user.js#L1365) | [1365](../youtube-playback-plox.user.js#L1365) |

## [🔧 Debounce](../youtube-playback-plox.user.js#L1392)
> [Line 1392](../youtube-playback-plox.user.js#L1392)

| Type | Name | Line |
|---|---|---|
| `fn` | [`debounce`](../youtube-playback-plox.user.js#L1402) | [1402](../youtube-playback-plox.user.js#L1402) |

## [🗄️ Event Handlers store](../youtube-playback-plox.user.js#L1417)
> [Line 1417](../youtube-playback-plox.user.js#L1417)

| Type | Name | Line |
|---|---|---|
| `fn` | [`dispose`](../youtube-playback-plox.user.js#L1494) | [1494](../youtube-playback-plox.user.js#L1494) |

## [📝 Selector System](../youtube-playback-plox.user.js#L1500)
> [Line 1500](../youtube-playback-plox.user.js#L1500)

| Type | Name | Line |
|---|---|---|
| `module` | [`PREFIX`](../youtube-playback-plox.user.js#L1570) | [1570](../youtube-playback-plox.user.js#L1570) |
| `fn` | [`deepFreeze`](../youtube-playback-plox.user.js#L1594) | [1594](../youtube-playback-plox.user.js#L1594) |
| `fn` | [`createSelectorSystem`](../youtube-playback-plox.user.js#L1625) | [1625](../youtube-playback-plox.user.js#L1625) |

## [💾 Simple LRU Cache](../youtube-playback-plox.user.js#L1780)
> [Line 1780](../youtube-playback-plox.user.js#L1780)

_No relevant functions or constants detected._

## [⚙️ DOM Cache System](../youtube-playback-plox.user.js#L1838)
> [Line 1838](../youtube-playback-plox.user.js#L1838)

| Type | Name | Line |
|---|---|---|
| `fn` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1855) | [1855](../youtube-playback-plox.user.js#L1855) |
| `module` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1855) | [1855](../youtube-playback-plox.user.js#L1855) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L1880) | [1880](../youtube-playback-plox.user.js#L1880) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L1904) | [1904](../youtube-playback-plox.user.js#L1904) |

## [🌐 Translation Functions](../youtube-playback-plox.user.js#L2180)
> [Line 2180](../youtube-playback-plox.user.js#L2180)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normParams`](../youtube-playback-plox.user.js#L2204) | [2204](../youtube-playback-plox.user.js#L2204) |
| `fn` | [`candidates`](../youtube-playback-plox.user.js#L2303) | [2303](../youtube-playback-plox.user.js#L2303) |
| `fn` | [`normalized`](../youtube-playback-plox.user.js#L2322) | [2322](../youtube-playback-plox.user.js#L2322) |

## [🎨 Styles](../youtube-playback-plox.user.js#L2346)
> [Line 2346](../youtube-playback-plox.user.js#L2346)

_No relevant functions or constants detected._

## [🎨 Theme](../youtube-playback-plox.user.js#L4954)
> [Line 4954](../youtube-playback-plox.user.js#L4954)

_No relevant functions or constants detected._

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L5032)
> [Line 5032](../youtube-playback-plox.user.js#L5032)

_No relevant functions or constants detected._

## [🎨 Estilo barra progreso](../youtube-playback-plox.user.js#L5194)
> [Line 5194](../youtube-playback-plox.user.js#L5194)

| Type | Name | Line |
|---|---|---|
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L5459) | [5459](../youtube-playback-plox.user.js#L5459) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L5482)
> [Line 5482](../youtube-playback-plox.user.js#L5482)

| Type | Name | Line |
|---|---|---|
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L5492) | [5492](../youtube-playback-plox.user.js#L5492) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L5492) | [5492](../youtube-playback-plox.user.js#L5492) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5636) | [5636](../youtube-playback-plox.user.js#L5636) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5636) | [5636](../youtube-playback-plox.user.js#L5636) |
| `fn` | [`isSupported`](../youtube-playback-plox.user.js#L5640) | [5640](../youtube-playback-plox.user.js#L5640) |
| `module` | [`isSupported`](../youtube-playback-plox.user.js#L5640) | [5640](../youtube-playback-plox.user.js#L5640) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L5788) | [5788](../youtube-playback-plox.user.js#L5788) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L5918) | [5918](../youtube-playback-plox.user.js#L5918) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L5936) | [5936](../youtube-playback-plox.user.js#L5936) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L5957) | [5957](../youtube-playback-plox.user.js#L5957) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L5970) | [5970](../youtube-playback-plox.user.js#L5970) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6034) | [6034](../youtube-playback-plox.user.js#L6034) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6052) | [6052](../youtube-playback-plox.user.js#L6052) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L6060) | [6060](../youtube-playback-plox.user.js#L6060) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L6078) | [6078](../youtube-playback-plox.user.js#L6078) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L6089)
> [Line 6089](../youtube-playback-plox.user.js#L6089)

_No relevant functions or constants detected._

## [📢 Ad Detector](../youtube-playback-plox.user.js#L6106)
> [Line 6106](../youtube-playback-plox.user.js#L6106)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L6111) | [6111](../youtube-playback-plox.user.js#L6111) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L6161) | [6161](../youtube-playback-plox.user.js#L6161) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L6284)
> [Line 6284](../youtube-playback-plox.user.js#L6284)

_No relevant functions or constants detected._

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L6703)
> [Line 6703](../youtube-playback-plox.user.js#L6703)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L6710) | [6710](../youtube-playback-plox.user.js#L6710) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L6713) | [6713](../youtube-playback-plox.user.js#L6713) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L6741) | [6741](../youtube-playback-plox.user.js#L6741) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L6784) | [6784](../youtube-playback-plox.user.js#L6784) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L6858)
> [Line 6858](../youtube-playback-plox.user.js#L6858)

| Type | Name | Line |
|---|---|---|
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L6864) | [6864](../youtube-playback-plox.user.js#L6864) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L6892) | [6892](../youtube-playback-plox.user.js#L6892) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L6893) | [6893](../youtube-playback-plox.user.js#L6893) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L6955) | [6955](../youtube-playback-plox.user.js#L6955) |
| `fn` | [`cleanOwner`](../youtube-playback-plox.user.js#L6966) | [6966](../youtube-playback-plox.user.js#L6966) |
| `fn` | [`cleanName`](../youtube-playback-plox.user.js#L6967) | [6967](../youtube-playback-plox.user.js#L6967) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L6968) | [6968](../youtube-playback-plox.user.js#L6968) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L7089) | [7089](../youtube-playback-plox.user.js#L7089) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7101) | [7101](../youtube-playback-plox.user.js#L7101) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L7166) | [7166](../youtube-playback-plox.user.js#L7166) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L7196) | [7196](../youtube-playback-plox.user.js#L7196) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L7225)
> [Line 7225](../youtube-playback-plox.user.js#L7225)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L7226) | [7226](../youtube-playback-plox.user.js#L7226) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L7272) | [7272](../youtube-playback-plox.user.js#L7272) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L7427)
> [Line 7427](../youtube-playback-plox.user.js#L7427)

_No relevant functions or constants detected._

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L7509)
> [Line 7509](../youtube-playback-plox.user.js#L7509)

_No relevant functions or constants detected._

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L7600)
> [Line 7600](../youtube-playback-plox.user.js#L7600)

_No relevant functions or constants detected._

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L7680)
> [Line 7680](../youtube-playback-plox.user.js#L7680)

| Type | Name | Line |
|---|---|---|
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L7699) | [7699](../youtube-playback-plox.user.js#L7699) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L7711)
> [Line 7711](../youtube-playback-plox.user.js#L7711)

_No relevant functions or constants detected._

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L7758)
> [Line 7758](../youtube-playback-plox.user.js#L7758)

_No relevant functions or constants detected._

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L7816)
> [Line 7816](../youtube-playback-plox.user.js#L7816)

| Type | Name | Line |
|---|---|---|
| `fn` | [`base`](../youtube-playback-plox.user.js#L7825) | [7825](../youtube-playback-plox.user.js#L7825) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L7866) | [7866](../youtube-playback-plox.user.js#L7866) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L7877)
> [Line 7877](../youtube-playback-plox.user.js#L7877)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L7924) | [7924](../youtube-playback-plox.user.js#L7924) |

## [📺 Helpers](../youtube-playback-plox.user.js#L8045)
> [Line 8045](../youtube-playback-plox.user.js#L8045)

_No relevant functions or constants detected._

## [📺 Obtiene datos guardados de un video](../youtube-playback-plox.user.js#L8048)
> [Line 8048](../youtube-playback-plox.user.js#L8048)

| Type | Name | Line |
|---|---|---|
| `fn` | [`keys`](../youtube-playback-plox.user.js#L8074) | [8074](../youtube-playback-plox.user.js#L8074) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L8099)
> [Line 8099](../youtube-playback-plox.user.js#L8099)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L8135) | [8135](../youtube-playback-plox.user.js#L8135) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L8178)
> [Line 8178](../youtube-playback-plox.user.js#L8178)

_No relevant functions or constants detected._

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L8379)
> [Line 8379](../youtube-playback-plox.user.js#L8379)

| Type | Name | Line |
|---|---|---|
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L8476) | [8476](../youtube-playback-plox.user.js#L8476) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L8585)
> [Line 8585](../youtube-playback-plox.user.js#L8585)

_No relevant functions or constants detected._

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L8607)
> [Line 8607](../youtube-playback-plox.user.js#L8607)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L8635)
> [Line 8635](../youtube-playback-plox.user.js#L8635)

_No relevant functions or constants detected._

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L8680)
> [Line 8680](../youtube-playback-plox.user.js#L8680)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L8701) | [8701](../youtube-playback-plox.user.js#L8701) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L8843) | [8843](../youtube-playback-plox.user.js#L8843) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L8928) | [8928](../youtube-playback-plox.user.js#L8928) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L8955)
> [Line 8955](../youtube-playback-plox.user.js#L8955)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L8981) | [8981](../youtube-playback-plox.user.js#L8981) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L8991)
> [Line 8991](../youtube-playback-plox.user.js#L8991)

| Type | Name | Line |
|---|---|---|
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9291) | [9291](../youtube-playback-plox.user.js#L9291) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9291) | [9291](../youtube-playback-plox.user.js#L9291) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L9303) | [9303](../youtube-playback-plox.user.js#L9303) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L9313) | [9313](../youtube-playback-plox.user.js#L9313) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L9321) | [9321](../youtube-playback-plox.user.js#L9321) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L9329) | [9329](../youtube-playback-plox.user.js#L9329) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L9352) | [9352](../youtube-playback-plox.user.js#L9352) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L9364) | [9364](../youtube-playback-plox.user.js#L9364) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L9367) | [9367](../youtube-playback-plox.user.js#L9367) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L9377) | [9377](../youtube-playback-plox.user.js#L9377) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L9382) | [9382](../youtube-playback-plox.user.js#L9382) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L9405) | [9405](../youtube-playback-plox.user.js#L9405) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L9424) | [9424](../youtube-playback-plox.user.js#L9424) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L9432) | [9432](../youtube-playback-plox.user.js#L9432) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L9476) | [9476](../youtube-playback-plox.user.js#L9476) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L9531) | [9531](../youtube-playback-plox.user.js#L9531) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L9590) | [9590](../youtube-playback-plox.user.js#L9590) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L9687) | [9687](../youtube-playback-plox.user.js#L9687) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L9702) | [9702](../youtube-playback-plox.user.js#L9702) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L9706) | [9706](../youtube-playback-plox.user.js#L9706) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L9713) | [9713](../youtube-playback-plox.user.js#L9713) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L9731) | [9731](../youtube-playback-plox.user.js#L9731) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L9788)
> [Line 9788](../youtube-playback-plox.user.js#L9788)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L9824) | [9824](../youtube-playback-plox.user.js#L9824) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L9964)
> [Line 9964](../youtube-playback-plox.user.js#L9964)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L9967) | [9967](../youtube-playback-plox.user.js#L9967) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L10006)
> [Line 10006](../youtube-playback-plox.user.js#L10006)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L10045) | [10045](../youtube-playback-plox.user.js#L10045) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L10051) | [10051](../youtube-playback-plox.user.js#L10051) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L10059) | [10059](../youtube-playback-plox.user.js#L10059) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L10105) | [10105](../youtube-playback-plox.user.js#L10105) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L10109) | [10109](../youtube-playback-plox.user.js#L10109) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L10112) | [10112](../youtube-playback-plox.user.js#L10112) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L10128) | [10128](../youtube-playback-plox.user.js#L10128) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L10137) | [10137](../youtube-playback-plox.user.js#L10137) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L10167) | [10167](../youtube-playback-plox.user.js#L10167) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L10181) | [10181](../youtube-playback-plox.user.js#L10181) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L10185) | [10185](../youtube-playback-plox.user.js#L10185) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L10323)
> [Line 10323](../youtube-playback-plox.user.js#L10323)

| Type | Name | Line |
|---|---|---|
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L10341) | [10341](../youtube-playback-plox.user.js#L10341) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L10424) | [10424](../youtube-playback-plox.user.js#L10424) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10504) | [10504](../youtube-playback-plox.user.js#L10504) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10505) | [10505](../youtube-playback-plox.user.js#L10505) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10585) | [10585](../youtube-playback-plox.user.js#L10585) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10586) | [10586](../youtube-playback-plox.user.js#L10586) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L10711)
> [Line 10711](../youtube-playback-plox.user.js#L10711)

_No relevant functions or constants detected._

## [🎵 Selección de Videos](../youtube-playback-plox.user.js#L10769)
> [Line 10769](../youtube-playback-plox.user.js#L10769)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L10859) | [10859](../youtube-playback-plox.user.js#L10859) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L10866) | [10866](../youtube-playback-plox.user.js#L10866) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L10950) | [10950](../youtube-playback-plox.user.js#L10950) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L10954) | [10954](../youtube-playback-plox.user.js#L10954) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L10963) | [10963](../youtube-playback-plox.user.js#L10963) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L11233) | [11233](../youtube-playback-plox.user.js#L11233) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L11380) | [11380](../youtube-playback-plox.user.js#L11380) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L11467)
> [Line 11467](../youtube-playback-plox.user.js#L11467)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11473) | [11473](../youtube-playback-plox.user.js#L11473) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11473) | [11473](../youtube-playback-plox.user.js#L11473) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L11474) | [11474](../youtube-playback-plox.user.js#L11474) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L11483) | [11483](../youtube-playback-plox.user.js#L11483) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L11488) | [11488](../youtube-playback-plox.user.js#L11488) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L11499) | [11499](../youtube-playback-plox.user.js#L11499) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L11516) | [11516](../youtube-playback-plox.user.js#L11516) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L11550) | [11550](../youtube-playback-plox.user.js#L11550) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L11575) | [11575](../youtube-playback-plox.user.js#L11575) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L11577) | [11577](../youtube-playback-plox.user.js#L11577) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11591) | [11591](../youtube-playback-plox.user.js#L11591) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11591) | [11591](../youtube-playback-plox.user.js#L11591) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L11593) | [11593](../youtube-playback-plox.user.js#L11593) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L11616) | [11616](../youtube-playback-plox.user.js#L11616) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L11616) | [11616](../youtube-playback-plox.user.js#L11616) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L11627) | [11627](../youtube-playback-plox.user.js#L11627) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L11632) | [11632](../youtube-playback-plox.user.js#L11632) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L11637) | [11637](../youtube-playback-plox.user.js#L11637) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L11649) | [11649](../youtube-playback-plox.user.js#L11649) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L11666) | [11666](../youtube-playback-plox.user.js#L11666) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L11666) | [11666](../youtube-playback-plox.user.js#L11666) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L11668) | [11668](../youtube-playback-plox.user.js#L11668) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L11676) | [11676](../youtube-playback-plox.user.js#L11676) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L11720)
> [Line 11720](../youtube-playback-plox.user.js#L11720)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L11725) | [11725](../youtube-playback-plox.user.js#L11725) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L11725) | [11725](../youtube-playback-plox.user.js#L11725) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L11743) | [11743](../youtube-playback-plox.user.js#L11743) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L11758) | [11758](../youtube-playback-plox.user.js#L11758) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L11774) | [11774](../youtube-playback-plox.user.js#L11774) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L11809) | [11809](../youtube-playback-plox.user.js#L11809) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L11842) | [11842](../youtube-playback-plox.user.js#L11842) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L11843) | [11843](../youtube-playback-plox.user.js#L11843) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L11874) | [11874](../youtube-playback-plox.user.js#L11874) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L11930) | [11930](../youtube-playback-plox.user.js#L11930) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L11995) | [11995](../youtube-playback-plox.user.js#L11995) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12003) | [12003](../youtube-playback-plox.user.js#L12003) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L12010) | [12010](../youtube-playback-plox.user.js#L12010) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L12048) | [12048](../youtube-playback-plox.user.js#L12048) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L12088) | [12088](../youtube-playback-plox.user.js#L12088) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L12099) | [12099](../youtube-playback-plox.user.js#L12099) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L12115) | [12115](../youtube-playback-plox.user.js#L12115) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12415) | [12415](../youtube-playback-plox.user.js#L12415) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L12458) | [12458](../youtube-playback-plox.user.js#L12458) |

## [Processing Functions](../youtube-playback-plox.user.js#L12478)
> [Line 12478](../youtube-playback-plox.user.js#L12478)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L12504) | [12504](../youtube-playback-plox.user.js#L12504) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L12523) | [12523](../youtube-playback-plox.user.js#L12523) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12533) | [12533](../youtube-playback-plox.user.js#L12533) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12533) | [12533](../youtube-playback-plox.user.js#L12533) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L12548) | [12548](../youtube-playback-plox.user.js#L12548) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L12553) | [12553](../youtube-playback-plox.user.js#L12553) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L12560) | [12560](../youtube-playback-plox.user.js#L12560) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L12566) | [12566](../youtube-playback-plox.user.js#L12566) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L12584) | [12584](../youtube-playback-plox.user.js#L12584) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L12654) | [12654](../youtube-playback-plox.user.js#L12654) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L12675) | [12675](../youtube-playback-plox.user.js#L12675) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L12708) | [12708](../youtube-playback-plox.user.js#L12708) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L12738) | [12738](../youtube-playback-plox.user.js#L12738) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L12749) | [12749](../youtube-playback-plox.user.js#L12749) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L12761) | [12761](../youtube-playback-plox.user.js#L12761) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L12801) | [12801](../youtube-playback-plox.user.js#L12801) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L12849) | [12849](../youtube-playback-plox.user.js#L12849) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L12992) | [12992](../youtube-playback-plox.user.js#L12992) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L13144) | [13144](../youtube-playback-plox.user.js#L13144) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L13257) | [13257](../youtube-playback-plox.user.js#L13257) |

## [PlaybackController](../youtube-playback-plox.user.js#L13401)
> [Line 13401](../youtube-playback-plox.user.js#L13401)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L13445) | [13445](../youtube-playback-plox.user.js#L13445) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L13461) | [13461](../youtube-playback-plox.user.js#L13461) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L13675) | [13675](../youtube-playback-plox.user.js#L13675) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L13787)
> [Line 13787](../youtube-playback-plox.user.js#L13787)

| Type | Name | Line |
|---|---|---|
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L13916) | [13916](../youtube-playback-plox.user.js#L13916) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L14317)
> [Line 14317](../youtube-playback-plox.user.js#L14317)

| Type | Name | Line |
|---|---|---|
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L14340) | [14340](../youtube-playback-plox.user.js#L14340) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L14416) | [14416](../youtube-playback-plox.user.js#L14416) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L14425) | [14425](../youtube-playback-plox.user.js#L14425) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L14433) | [14433](../youtube-playback-plox.user.js#L14433) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14453) | [14453](../youtube-playback-plox.user.js#L14453) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L14505)
> [Line 14505](../youtube-playback-plox.user.js#L14505)

| Type | Name | Line |
|---|---|---|
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14517) | [14517](../youtube-playback-plox.user.js#L14517) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L14563) | [14563](../youtube-playback-plox.user.js#L14563) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L14569) | [14569](../youtube-playback-plox.user.js#L14569) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L14577) | [14577](../youtube-playback-plox.user.js#L14577) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14592) | [14592](../youtube-playback-plox.user.js#L14592) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L14712) | [14712](../youtube-playback-plox.user.js#L14712) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L14790)
> [Line 14790](../youtube-playback-plox.user.js#L14790)

_No relevant functions or constants detected._

## [📁 Update Video List](../youtube-playback-plox.user.js#L14907)
> [Line 14907](../youtube-playback-plox.user.js#L14907)

| Type | Name | Line |
|---|---|---|
| `fn` | [`prog`](../youtube-playback-plox.user.js#L14926) | [14926](../youtube-playback-plox.user.js#L14926) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L14930) | [14930](../youtube-playback-plox.user.js#L14930) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15114) | [15114](../youtube-playback-plox.user.js#L15114) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L15133) | [15133](../youtube-playback-plox.user.js#L15133) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L15259) | [15259](../youtube-playback-plox.user.js#L15259) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15336) | [15336](../youtube-playback-plox.user.js#L15336) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L15500) | [15500](../youtube-playback-plox.user.js#L15500) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L15521) | [15521](../youtube-playback-plox.user.js#L15521) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L15572) | [15572](../youtube-playback-plox.user.js#L15572) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L15692)
> [Line 15692](../youtube-playback-plox.user.js#L15692)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L15695) | [15695](../youtube-playback-plox.user.js#L15695) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L15709) | [15709](../youtube-playback-plox.user.js#L15709) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L15720)
> [Line 15720](../youtube-playback-plox.user.js#L15720)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L15847) | [15847](../youtube-playback-plox.user.js#L15847) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L15857) | [15857](../youtube-playback-plox.user.js#L15857) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L15932) | [15932](../youtube-playback-plox.user.js#L15932) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L15944)
> [Line 15944](../youtube-playback-plox.user.js#L15944)

| Type | Name | Line |
|---|---|---|
| `fn` | [`deleteFromStorage`](../youtube-playback-plox.user.js#L16071) | [16071](../youtube-playback-plox.user.js#L16071) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L16076) | [16076](../youtube-playback-plox.user.js#L16076) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L16130) | [16130](../youtube-playback-plox.user.js#L16130) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L16178) | [16178](../youtube-playback-plox.user.js#L16178) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L16184) | [16184](../youtube-playback-plox.user.js#L16184) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L16201) | [16201](../youtube-playback-plox.user.js#L16201) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L16235) | [16235](../youtube-playback-plox.user.js#L16235) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L16279) | [16279](../youtube-playback-plox.user.js#L16279) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L16361) | [16361](../youtube-playback-plox.user.js#L16361) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L16367) | [16367](../youtube-playback-plox.user.js#L16367) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L16383) | [16383](../youtube-playback-plox.user.js#L16383) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L16393) | [16393](../youtube-playback-plox.user.js#L16393) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L16401) | [16401](../youtube-playback-plox.user.js#L16401) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L16406) | [16406](../youtube-playback-plox.user.js#L16406) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L16413) | [16413](../youtube-playback-plox.user.js#L16413) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L16416) | [16416](../youtube-playback-plox.user.js#L16416) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L16420) | [16420](../youtube-playback-plox.user.js#L16420) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L16466) | [16466](../youtube-playback-plox.user.js#L16466) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L16466) | [16466](../youtube-playback-plox.user.js#L16466) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L16480) | [16480](../youtube-playback-plox.user.js#L16480) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L16754) | [16754](../youtube-playback-plox.user.js#L16754) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L16802) | [16802](../youtube-playback-plox.user.js#L16802) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L16803) | [16803](../youtube-playback-plox.user.js#L16803) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L16819) | [16819](../youtube-playback-plox.user.js#L16819) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L16820) | [16820](../youtube-playback-plox.user.js#L16820) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L16869) | [16869](../youtube-playback-plox.user.js#L16869) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L17014) | [17014](../youtube-playback-plox.user.js#L17014) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L17028) | [17028](../youtube-playback-plox.user.js#L17028) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L17327) | [17327](../youtube-playback-plox.user.js#L17327) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L17426) | [17426](../youtube-playback-plox.user.js#L17426) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L17509) | [17509](../youtube-playback-plox.user.js#L17509) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L17763) | [17763](../youtube-playback-plox.user.js#L17763) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L17786) | [17786](../youtube-playback-plox.user.js#L17786) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L17787) | [17787](../youtube-playback-plox.user.js#L17787) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L17859)
> [Line 17859](../youtube-playback-plox.user.js#L17859)

_No relevant functions or constants detected._

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L18011)
> [Line 18011](../youtube-playback-plox.user.js#L18011)

_No relevant functions or constants detected._

## [🔄 Migración de Datos](../youtube-playback-plox.user.js#L18038)
> [Line 18038](../youtube-playback-plox.user.js#L18038)

| Type | Name | Line |
|---|---|---|
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L18095) | [18095](../youtube-playback-plox.user.js#L18095) |

## [🚀 Init](../youtube-playback-plox.user.js#L18428)
> [Line 18428](../youtube-playback-plox.user.js#L18428)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L18437) | [18437](../youtube-playback-plox.user.js#L18437) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L18459) | [18459](../youtube-playback-plox.user.js#L18459) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L18780) | [18780](../youtube-playback-plox.user.js#L18780) |

