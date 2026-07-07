# Userscript Structure
> Auto-generated on 2026-07-07 · version 0.0.12-2
> **DO NOT EDIT MANUALLY** - regenerate with `node ./scripts/generate-structure.mjs`

---

## Sections index

1. [🔍 Logger System](#logger-system) - [line 138](../youtube-playback-plox.user.js#L138)
2. [🛡️ Initialization Guard (SPA Safety)](#initialization-guard-spa-safety) - [line 216](../youtube-playback-plox.user.js#L216)
3. [📦 Config](#config) - [line 286](../youtube-playback-plox.user.js#L286)
4. [📊 Global Constants](#global-constants) - [line 415](../youtube-playback-plox.user.js#L415)
5. [📊 Global Variables](#global-variables) - [line 452](../youtube-playback-plox.user.js#L452)
6. [🌐 Translations](#translations) - [line 488](../youtube-playback-plox.user.js#L488)
7. [🔧 Utils](#utils) - [line 923](../youtube-playback-plox.user.js#L923)
8. [🔧 Sanitize HTML](#sanitize-html) - [line 926](../youtube-playback-plox.user.js#L926)
9. [🔧 Is Visibly Displayed](#is-visibly-displayed) - [line 994](../youtube-playback-plox.user.js#L994)
10. [🔧 Format Time](#format-time) - [line 1018](../youtube-playback-plox.user.js#L1018)
11. [🔧 parseTimeToSeconds](#parsetimetoseconds) - [line 1060](../youtube-playback-plox.user.js#L1060)
12. [🔧 normalizeSeconds](#normalizeseconds) - [line 1108](../youtube-playback-plox.user.js#L1108)
13. [🔧 getUrlTimeParamSeconds](#geturltimeparamseconds) - [line 1134](../youtube-playback-plox.user.js#L1134)
14. [⏳ delay](#delay) - [line 1163](../youtube-playback-plox.user.js#L1163)
15. [🔧 setInnerHTML](#setinnerhtml) - [line 1171](../youtube-playback-plox.user.js#L1171)
16. [🔧 Create Element](#create-element) - [line 1233](../youtube-playback-plox.user.js#L1233)
17. [🔧 Debounce](#debounce) - [line 1370](../youtube-playback-plox.user.js#L1370)
18. [🗄️ Event Handlers store](#event-handlers-store) - [line 1395](../youtube-playback-plox.user.js#L1395)
19. [📝 Selector System](#selector-system) - [line 1478](../youtube-playback-plox.user.js#L1478)
20. [💾 Simple LRU Cache](#simple-lru-cache) - [line 1764](../youtube-playback-plox.user.js#L1764)
21. [⚙️ DOM Cache System](#dom-cache-system) - [line 1822](../youtube-playback-plox.user.js#L1822)
22. [🌐 Translation Functions](#translation-functions) - [line 2164](../youtube-playback-plox.user.js#L2164)
23. [🎨 Styles](#styles) - [line 2329](../youtube-playback-plox.user.js#L2329)
24. [🎨 Theme](#theme) - [line 4901](../youtube-playback-plox.user.js#L4901)
25. [🎨 SVG Icons](#svg-icons) - [line 4979](../youtube-playback-plox.user.js#L4979)
26. [🎨 Progress Bar Style](#progress-bar-style) - [line 5141](../youtube-playback-plox.user.js#L5141)
27. [💾 Storage + Settings](#storage-settings) - [line 5648](../youtube-playback-plox.user.js#L5648)
28. [📢 Ad Caches](#ad-caches) - [line 6250](../youtube-playback-plox.user.js#L6250)
29. [📢 Ad Detector](#ad-detector) - [line 6270](../youtube-playback-plox.user.js#L6270)
30. [🎯 VirtualScroller](#virtualscroller) - [line 6447](../youtube-playback-plox.user.js#L6447)
31. [📤 Import/Export JSON](#importexport-json) - [line 6858](../youtube-playback-plox.user.js#L6858)
32. [☁️ GitHub Backup](#github-backup) - [line 7013](../youtube-playback-plox.user.js#L7013)
33. [📤 Import/Export FreeTube options](#importexport-freetube-options) - [line 7400](../youtube-playback-plox.user.js#L7400)
34. [🔄 Normalize Video Data](#normalize-video-data) - [line 7592](../youtube-playback-plox.user.js#L7592)
35. [🔄 Convert To FreeTube](#convert-to-freetube) - [line 7674](../youtube-playback-plox.user.js#L7674)
36. [Parse FreeTube DB](#parse-freetube-db) - [line 7765](../youtube-playback-plox.user.js#L7765)
37. [🔄 Convert From FreeTube](#convert-from-freetube) - [line 7858](../youtube-playback-plox.user.js#L7858)
38. [⬆ Export To FreeTube](#export-to-freetube) - [line 7889](../youtube-playback-plox.user.js#L7889)
39. [⬇ Import From FreeTube](#import-from-freetube) - [line 7936](../youtube-playback-plox.user.js#L7936)
40. [🔄 Insert Completion Event](#insert-completion-event) - [line 7994](../youtube-playback-plox.user.js#L7994)
41. [💾 Save Video Generic](#save-video-generic) - [line 8051](../youtube-playback-plox.user.js#L8051)
42. [📺 Helpers](#helpers) - [line 8227](../youtube-playback-plox.user.js#L8227)
43. [📺 Gets saved video data](#gets-saved-video-data) - [line 8230](../youtube-playback-plox.user.js#L8230)
44. [📺 Get Player Video ID](#get-player-video-id) - [line 8280](../youtube-playback-plox.user.js#L8280)
45. [📺 Get YouTube Page Type](#get-youtube-page-type) - [line 8359](../youtube-playback-plox.user.js#L8359)
46. [YouTube Resource URL Parser](#youtube-resource-url-parser) - [line 8560](../youtube-playback-plox.user.js#L8560)
47. [📺 Get YouTube Video ID from URL](#get-youtube-video-id-from-url) - [line 8766](../youtube-playback-plox.user.js#L8766)
48. [📺 Get YouTube Video Context from URL](#get-youtube-video-context-from-url) - [line 8788](../youtube-playback-plox.user.js#L8788)
49. [📺 Get YouTube Playlist ID from URL](#get-youtube-playlist-id-from-url) - [line 8816](../youtube-playback-plox.user.js#L8816)
50. [📺 get Playlist Name](#get-playlist-name) - [line 8861](../youtube-playback-plox.user.js#L8861)
51. [🕒 Time Display](#time-display) - [line 9136](../youtube-playback-plox.user.js#L9136)
52. [🖼️ Display Button Helpers](#display-button-helpers) - [line 9172](../youtube-playback-plox.user.js#L9172)
53. [🍞 Toasts](#toasts) - [line 9951](../youtube-playback-plox.user.js#L9951)
54. [⚙️ Settings UI Rendering Helpers](#settings-ui-rendering-helpers) - [line 10127](../youtube-playback-plox.user.js#L10127)
55. [🗂️ Settings Schema - Data-Driven UI](#settings-schema---data-driven-ui) - [line 10170](../youtube-playback-plox.user.js#L10170)
56. [⚙️ Settings UI](#settings-ui) - [line 10488](../youtube-playback-plox.user.js#L10488)
57. [📢 Notify Seek or Progress](#notify-seek-or-progress) - [line 10883](../youtube-playback-plox.user.js#L10883)
58. [🎵 Video Selection](#video-selection) - [line 10941](../youtube-playback-plox.user.js#L10941)
59. [📺 Video Observer & Processing Manager](#video-observer-processing-manager) - [line 11643](../youtube-playback-plox.user.js#L11643)
60. [📡 Video Observer Manager](#video-observer-manager) - [line 11903](../youtube-playback-plox.user.js#L11903)
61. [Processing Functions](#processing-functions) - [line 12687](../youtube-playback-plox.user.js#L12687)
62. [PlaybackController](#playbackcontroller) - [line 13754](../youtube-playback-plox.user.js#L13754)
63. [📋 Get Cascaded Video Info](#get-cascaded-video-info) - [line 14181](../youtube-playback-plox.user.js#L14181)
64. [📂 Sort UI](#sort-ui) - [line 14712](../youtube-playback-plox.user.js#L14712)
65. [📂 Filters UI](#filters-ui) - [line 14901](../youtube-playback-plox.user.js#L14901)
66. [📂 Video List UI](#video-list-ui) - [line 15187](../youtube-playback-plox.user.js#L15187)
67. [📁 Update Video List](#update-video-list) - [line 15310](../youtube-playback-plox.user.js#L15310)
68. [🔘 Floating Button](#floating-button) - [line 16095](../youtube-playback-plox.user.js#L16095)
69. [📂 Show Saved Videos List](#show-saved-videos-list) - [line 16123](../youtube-playback-plox.user.js#L16123)
70. [📂 Video Entry](#video-entry) - [line 16342](../youtube-playback-plox.user.js#L16342)
71. [🗑️ Clear All Data](#clear-all-data) - [line 18269](../youtube-playback-plox.user.js#L18269)
72. [⚙️ Menu Commands](#menu-commands) - [line 18421](../youtube-playback-plox.user.js#L18421)
73. [🔄 Data Migration](#data-migration) - [line 18448](../youtube-playback-plox.user.js#L18448)
74. [🚀 Init](#init) - [line 18840](../youtube-playback-plox.user.js#L18840)

---

## [🔍 Logger System](../youtube-playback-plox.user.js#L138)
> [Line 138](../youtube-playback-plox.user.js#L138)

| Type | Name | Line |
|---|---|---|
| `fn` | [`resolveArgs`](../youtube-playback-plox.user.js#L150) | [150](../youtube-playback-plox.user.js#L150) |
| `fn` | [`build`](../youtube-playback-plox.user.js#L152) | [152](../youtube-playback-plox.user.js#L152) |
| `fn` | [`msg`](../youtube-playback-plox.user.js#L187) | [187](../youtube-playback-plox.user.js#L187) |

## [🛡️ Initialization Guard (SPA Safety)](../youtube-playback-plox.user.js#L216)
> [Line 216](../youtube-playback-plox.user.js#L216)

_No relevant functions or constants detected._

## [📦 Config](../youtube-playback-plox.user.js#L286)
> [Line 286](../youtube-playback-plox.user.js#L286)

_No relevant functions or constants detected._

## [📊 Global Constants](../youtube-playback-plox.user.js#L415)
> [Line 415](../youtube-playback-plox.user.js#L415)

| Type | Name | Line |
|---|---|---|
| `module` | [`TYPE_CONFIG`](../youtube-playback-plox.user.js#L426) | [426](../youtube-playback-plox.user.js#L426) |

## [📊 Global Variables](../youtube-playback-plox.user.js#L452)
> [Line 452](../youtube-playback-plox.user.js#L452)

_No relevant functions or constants detected._

## [🌐 Translations](../youtube-playback-plox.user.js#L488)
> [Line 488](../youtube-playback-plox.user.js#L488)

| Type | Name | Line |
|---|---|---|
| `fn` | [`fetchUrl`](../youtube-playback-plox.user.js#L832) | [832](../youtube-playback-plox.user.js#L832) |

## [🔧 Utils](../youtube-playback-plox.user.js#L923)
> [Line 923](../youtube-playback-plox.user.js#L923)

_No relevant functions or constants detected._

## [🔧 Sanitize HTML](../youtube-playback-plox.user.js#L926)
> [Line 926](../youtube-playback-plox.user.js#L926)

| Type | Name | Line |
|---|---|---|
| `fn` | [`sanitizeHTML`](../youtube-playback-plox.user.js#L936) | [936](../youtube-playback-plox.user.js#L936) |
| `module` | [`sanitizeHTML`](../youtube-playback-plox.user.js#L936) | [936](../youtube-playback-plox.user.js#L936) |

## [🔧 Is Visibly Displayed](../youtube-playback-plox.user.js#L994)
> [Line 994](../youtube-playback-plox.user.js#L994)

_No relevant functions or constants detected._

## [🔧 Format Time](../youtube-playback-plox.user.js#L1018)
> [Line 1018](../youtube-playback-plox.user.js#L1018)

| Type | Name | Line |
|---|---|---|
| `fn` | [`formatTime`](../youtube-playback-plox.user.js#L1040) | [1040](../youtube-playback-plox.user.js#L1040) |

## [🔧 parseTimeToSeconds](../youtube-playback-plox.user.js#L1060)
> [Line 1060](../youtube-playback-plox.user.js#L1060)

| Type | Name | Line |
|---|---|---|
| `fn` | [`parseTimeToSeconds`](../youtube-playback-plox.user.js#L1083) | [1083](../youtube-playback-plox.user.js#L1083) |

## [🔧 normalizeSeconds](../youtube-playback-plox.user.js#L1108)
> [Line 1108](../youtube-playback-plox.user.js#L1108)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normalizeSeconds`](../youtube-playback-plox.user.js#L1127) | [1127](../youtube-playback-plox.user.js#L1127) |

## [🔧 getUrlTimeParamSeconds](../youtube-playback-plox.user.js#L1134)
> [Line 1134](../youtube-playback-plox.user.js#L1134)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getUrlTimeParamSeconds`](../youtube-playback-plox.user.js#L1142) | [1142](../youtube-playback-plox.user.js#L1142) |

## [⏳ delay](../youtube-playback-plox.user.js#L1163)
> [Line 1163](../youtube-playback-plox.user.js#L1163)

| Type | Name | Line |
|---|---|---|
| `fn` | [`delay`](../youtube-playback-plox.user.js#L1169) | [1169](../youtube-playback-plox.user.js#L1169) |

## [🔧 setInnerHTML](../youtube-playback-plox.user.js#L1171)
> [Line 1171](../youtube-playback-plox.user.js#L1171)

_No relevant functions or constants detected._

## [🔧 Create Element](../youtube-playback-plox.user.js#L1233)
> [Line 1233](../youtube-playback-plox.user.js#L1233)

| Type | Name | Line |
|---|---|---|
| `fn` | [`append`](../youtube-playback-plox.user.js#L1313) | [1313](../youtube-playback-plox.user.js#L1313) |
| `fn` | [`clamp`](../youtube-playback-plox.user.js#L1343) | [1343](../youtube-playback-plox.user.js#L1343) |

## [🔧 Debounce](../youtube-playback-plox.user.js#L1370)
> [Line 1370](../youtube-playback-plox.user.js#L1370)

| Type | Name | Line |
|---|---|---|
| `fn` | [`debounce`](../youtube-playback-plox.user.js#L1380) | [1380](../youtube-playback-plox.user.js#L1380) |

## [🗄️ Event Handlers store](../youtube-playback-plox.user.js#L1395)
> [Line 1395](../youtube-playback-plox.user.js#L1395)

| Type | Name | Line |
|---|---|---|
| `fn` | [`dispose`](../youtube-playback-plox.user.js#L1472) | [1472](../youtube-playback-plox.user.js#L1472) |

## [📝 Selector System](../youtube-playback-plox.user.js#L1478)
> [Line 1478](../youtube-playback-plox.user.js#L1478)

| Type | Name | Line |
|---|---|---|
| `module` | [`PREFIX`](../youtube-playback-plox.user.js#L1562) | [1562](../youtube-playback-plox.user.js#L1562) |
| `fn` | [`createSelectorSystem`](../youtube-playback-plox.user.js#L1587) | [1587](../youtube-playback-plox.user.js#L1587) |

## [💾 Simple LRU Cache](../youtube-playback-plox.user.js#L1764)
> [Line 1764](../youtube-playback-plox.user.js#L1764)

_No relevant functions or constants detected._

## [⚙️ DOM Cache System](../youtube-playback-plox.user.js#L1822)
> [Line 1822](../youtube-playback-plox.user.js#L1822)

| Type | Name | Line |
|---|---|---|
| `fn` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1839) | [1839](../youtube-playback-plox.user.js#L1839) |
| `module` | [`DOMHelpers`](../youtube-playback-plox.user.js#L1839) | [1839](../youtube-playback-plox.user.js#L1839) |
| `fn` | [`get`](../youtube-playback-plox.user.js#L1864) | [1864](../youtube-playback-plox.user.js#L1864) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L1888) | [1888](../youtube-playback-plox.user.js#L1888) |

## [🌐 Translation Functions](../youtube-playback-plox.user.js#L2164)
> [Line 2164](../youtube-playback-plox.user.js#L2164)

| Type | Name | Line |
|---|---|---|
| `fn` | [`normParams`](../youtube-playback-plox.user.js#L2188) | [2188](../youtube-playback-plox.user.js#L2188) |
| `fn` | [`candidates`](../youtube-playback-plox.user.js#L2286) | [2286](../youtube-playback-plox.user.js#L2286) |
| `fn` | [`normalized`](../youtube-playback-plox.user.js#L2305) | [2305](../youtube-playback-plox.user.js#L2305) |

## [🎨 Styles](../youtube-playback-plox.user.js#L2329)
> [Line 2329](../youtube-playback-plox.user.js#L2329)

_No relevant functions or constants detected._

## [🎨 Theme](../youtube-playback-plox.user.js#L4901)
> [Line 4901](../youtube-playback-plox.user.js#L4901)

_No relevant functions or constants detected._

## [🎨 SVG Icons](../youtube-playback-plox.user.js#L4979)
> [Line 4979](../youtube-playback-plox.user.js#L4979)

_No relevant functions or constants detected._

## [🎨 Progress Bar Style](../youtube-playback-plox.user.js#L5141)
> [Line 5141](../youtube-playback-plox.user.js#L5141)

| Type | Name | Line |
|---|---|---|
| `fn` | [`clearAllProgressGradientState`](../youtube-playback-plox.user.js#L5153) | [5153](../youtube-playback-plox.user.js#L5153) |
| `fn` | [`syncProgressGradientStateForContainer`](../youtube-playback-plox.user.js#L5169) | [5169](../youtube-playback-plox.user.js#L5169) |
| `fn` | [`resolvePlayerRootForGradient`](../youtube-playback-plox.user.js#L5192) | [5192](../youtube-playback-plox.user.js#L5192) |
| `fn` | [`clearProgressColorFromPlayerRoot`](../youtube-playback-plox.user.js#L5203) | [5203](../youtube-playback-plox.user.js#L5203) |
| `fn` | [`applyProgressColorToPlayerRoot`](../youtube-playback-plox.user.js#L5223) | [5223](../youtube-playback-plox.user.js#L5223) |
| `fn` | [`applyProgressColorToShortsSurfaces`](../youtube-playback-plox.user.js#L5247) | [5247](../youtube-playback-plox.user.js#L5247) |
| `fn` | [`repaintWatchProgressBarFromActivePlayer`](../youtube-playback-plox.user.js#L5267) | [5267](../youtube-playback-plox.user.js#L5267) |
| `fn` | [`scheduleProgressBarGradientRepaint`](../youtube-playback-plox.user.js#L5288) | [5288](../youtube-playback-plox.user.js#L5288) |
| `fn` | [`paint`](../youtube-playback-plox.user.js#L5289) | [5289](../youtube-playback-plox.user.js#L5289) |
| `fn` | [`ratio`](../youtube-playback-plox.user.js#L5625) | [5625](../youtube-playback-plox.user.js#L5625) |

## [💾 Storage + Settings](../youtube-playback-plox.user.js#L5648)
> [Line 5648](../youtube-playback-plox.user.js#L5648)

| Type | Name | Line |
|---|---|---|
| `fn` | [`StorageAsync`](../youtube-playback-plox.user.js#L5658) | [5658](../youtube-playback-plox.user.js#L5658) |
| `module` | [`StorageAsync`](../youtube-playback-plox.user.js#L5658) | [5658](../youtube-playback-plox.user.js#L5658) |
| `fn` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5804) | [5804](../youtube-playback-plox.user.js#L5804) |
| `module` | [`IndexedDBAdapter`](../youtube-playback-plox.user.js#L5804) | [5804](../youtube-playback-plox.user.js#L5804) |
| `fn` | [`isNonVideoStorageKey`](../youtube-playback-plox.user.js#L5956) | [5956](../youtube-playback-plox.user.js#L5956) |
| `fn` | [`prefixKey`](../youtube-playback-plox.user.js#L5965) | [5965](../youtube-playback-plox.user.js#L5965) |
| `fn` | [`stripPrefix`](../youtube-playback-plox.user.js#L5966) | [5966](../youtube-playback-plox.user.js#L5966) |
| `fn` | [`hasPrefix`](../youtube-playback-plox.user.js#L5967) | [5967](../youtube-playback-plox.user.js#L5967) |
| `fn` | [`getSettings`](../youtube-playback-plox.user.js#L6079) | [6079](../youtube-playback-plox.user.js#L6079) |
| `fn` | [`getSettingsWithMeta`](../youtube-playback-plox.user.js#L6097) | [6097](../youtube-playback-plox.user.js#L6097) |
| `fn` | [`setSettings`](../youtube-playback-plox.user.js#L6118) | [6118](../youtube-playback-plox.user.js#L6118) |
| `fn` | [`normalizeSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6131) | [6131](../youtube-playback-plox.user.js#L6131) |
| `fn` | [`getSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6195) | [6195](../youtube-playback-plox.user.js#L6195) |
| `fn` | [`setSavedVideosModalSettings`](../youtube-playback-plox.user.js#L6213) | [6213](../youtube-playback-plox.user.js#L6213) |
| `fn` | [`getFilters`](../youtube-playback-plox.user.js#L6221) | [6221](../youtube-playback-plox.user.js#L6221) |
| `fn` | [`setFilters`](../youtube-playback-plox.user.js#L6239) | [6239](../youtube-playback-plox.user.js#L6239) |

## [📢 Ad Caches](../youtube-playback-plox.user.js#L6250)
> [Line 6250](../youtube-playback-plox.user.js#L6250)

_No relevant functions or constants detected._

## [📢 Ad Detector](../youtube-playback-plox.user.js#L6270)
> [Line 6270](../youtube-playback-plox.user.js#L6270)

| Type | Name | Line |
|---|---|---|
| `module` | [`AdDetector`](../youtube-playback-plox.user.js#L6272) | [6272](../youtube-playback-plox.user.js#L6272) |
| `fn` | [`check`](../youtube-playback-plox.user.js#L6323) | [6323](../youtube-playback-plox.user.js#L6323) |

## [🎯 VirtualScroller](../youtube-playback-plox.user.js#L6447)
> [Line 6447](../youtube-playback-plox.user.js#L6447)

_No relevant functions or constants detected._

## [📤 Import/Export JSON](../youtube-playback-plox.user.js#L6858)
> [Line 6858](../youtube-playback-plox.user.js#L6858)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSyncData`](../youtube-playback-plox.user.js#L6865) | [6865](../youtube-playback-plox.user.js#L6865) |
| `fn` | [`keys`](../youtube-playback-plox.user.js#L6868) | [6868](../youtube-playback-plox.user.js#L6868) |
| `fn` | [`exportDataToFile`](../youtube-playback-plox.user.js#L6896) | [6896](../youtube-playback-plox.user.js#L6896) |
| `fn` | [`importDataFromFile`](../youtube-playback-plox.user.js#L6939) | [6939](../youtube-playback-plox.user.js#L6939) |

## [☁️ GitHub Backup](../youtube-playback-plox.user.js#L7013)
> [Line 7013](../youtube-playback-plox.user.js#L7013)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getGitHubErrorMsg`](../youtube-playback-plox.user.js#L7016) | [7016](../youtube-playback-plox.user.js#L7016) |
| `fn` | [`backupToGitHubGist`](../youtube-playback-plox.user.js#L7023) | [7023](../youtube-playback-plox.user.js#L7023) |
| `fn` | [`gistId`](../youtube-playback-plox.user.js#L7051) | [7051](../youtube-playback-plox.user.js#L7051) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7052) | [7052](../youtube-playback-plox.user.js#L7052) |
| `fn` | [`backupToGithubRepository`](../youtube-playback-plox.user.js#L7114) | [7114](../youtube-playback-plox.user.js#L7114) |
| `fn` | [`cleanOwner`](../youtube-playback-plox.user.js#L7125) | [7125](../youtube-playback-plox.user.js#L7125) |
| `fn` | [`cleanName`](../youtube-playback-plox.user.js#L7126) | [7126](../youtube-playback-plox.user.js#L7126) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7127) | [7127](../youtube-playback-plox.user.js#L7127) |
| `fn` | [`performRemoteBackup`](../youtube-playback-plox.user.js#L7263) | [7263](../youtube-playback-plox.user.js#L7263) |
| `fn` | [`cleanToken`](../youtube-playback-plox.user.js#L7275) | [7275](../youtube-playback-plox.user.js#L7275) |
| `fn` | [`checkGitHubBackup`](../youtube-playback-plox.user.js#L7341) | [7341](../youtube-playback-plox.user.js#L7341) |
| `fn` | [`intervalMs`](../youtube-playback-plox.user.js#L7371) | [7371](../youtube-playback-plox.user.js#L7371) |

## [📤 Import/Export FreeTube options](../youtube-playback-plox.user.js#L7400)
> [Line 7400](../youtube-playback-plox.user.js#L7400)

| Type | Name | Line |
|---|---|---|
| `fn` | [`exportToFreeTube`](../youtube-playback-plox.user.js#L7401) | [7401](../youtube-playback-plox.user.js#L7401) |
| `fn` | [`importFromFreeTube`](../youtube-playback-plox.user.js#L7437) | [7437](../youtube-playback-plox.user.js#L7437) |

## [🔄 Normalize Video Data](../youtube-playback-plox.user.js#L7592)
> [Line 7592](../youtube-playback-plox.user.js#L7592)

_No relevant functions or constants detected._

## [🔄 Convert To FreeTube](../youtube-playback-plox.user.js#L7674)
> [Line 7674](../youtube-playback-plox.user.js#L7674)

_No relevant functions or constants detected._

## [Parse FreeTube DB](../youtube-playback-plox.user.js#L7765)
> [Line 7765](../youtube-playback-plox.user.js#L7765)

_No relevant functions or constants detected._

## [🔄 Convert From FreeTube](../youtube-playback-plox.user.js#L7858)
> [Line 7858](../youtube-playback-plox.user.js#L7858)

| Type | Name | Line |
|---|---|---|
| `fn` | [`progressPercent`](../youtube-playback-plox.user.js#L7877) | [7877](../youtube-playback-plox.user.js#L7877) |

## [⬆ Export To FreeTube](../youtube-playback-plox.user.js#L7889)
> [Line 7889](../youtube-playback-plox.user.js#L7889)

_No relevant functions or constants detected._

## [⬇ Import From FreeTube](../youtube-playback-plox.user.js#L7936)
> [Line 7936](../youtube-playback-plox.user.js#L7936)

_No relevant functions or constants detected._

## [🔄 Insert Completion Event](../youtube-playback-plox.user.js#L7994)
> [Line 7994](../youtube-playback-plox.user.js#L7994)

| Type | Name | Line |
|---|---|---|
| `fn` | [`base`](../youtube-playback-plox.user.js#L8003) | [8003](../youtube-playback-plox.user.js#L8003) |
| `fn` | [`pickVideoInfoFields`](../youtube-playback-plox.user.js#L8040) | [8040](../youtube-playback-plox.user.js#L8040) |

## [💾 Save Video Generic](../youtube-playback-plox.user.js#L8051)
> [Line 8051](../youtube-playback-plox.user.js#L8051)

| Type | Name | Line |
|---|---|---|
| `fn` | [`defaultPercent`](../youtube-playback-plox.user.js#L8106) | [8106](../youtube-playback-plox.user.js#L8106) |

## [📺 Helpers](../youtube-playback-plox.user.js#L8227)
> [Line 8227](../youtube-playback-plox.user.js#L8227)

_No relevant functions or constants detected._

## [📺 Gets saved video data](../youtube-playback-plox.user.js#L8230)
> [Line 8230](../youtube-playback-plox.user.js#L8230)

| Type | Name | Line |
|---|---|---|
| `fn` | [`keys`](../youtube-playback-plox.user.js#L8256) | [8256](../youtube-playback-plox.user.js#L8256) |

## [📺 Get Player Video ID](../youtube-playback-plox.user.js#L8280)
> [Line 8280](../youtube-playback-plox.user.js#L8280)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getPlayerVideoId`](../youtube-playback-plox.user.js#L8316) | [8316](../youtube-playback-plox.user.js#L8316) |

## [📺 Get YouTube Page Type](../youtube-playback-plox.user.js#L8359)
> [Line 8359](../youtube-playback-plox.user.js#L8359)

_No relevant functions or constants detected._

## [YouTube Resource URL Parser](../youtube-playback-plox.user.js#L8560)
> [Line 8560](../youtube-playback-plox.user.js#L8560)

| Type | Name | Line |
|---|---|---|
| `fn` | [`buildContext`](../youtube-playback-plox.user.js#L8657) | [8657](../youtube-playback-plox.user.js#L8657) |

## [📺 Get YouTube Video ID from URL](../youtube-playback-plox.user.js#L8766)
> [Line 8766](../youtube-playback-plox.user.js#L8766)

_No relevant functions or constants detected._

## [📺 Get YouTube Video Context from URL](../youtube-playback-plox.user.js#L8788)
> [Line 8788](../youtube-playback-plox.user.js#L8788)

_No relevant functions or constants detected._

## [📺 Get YouTube Playlist ID from URL](../youtube-playback-plox.user.js#L8816)
> [Line 8816](../youtube-playback-plox.user.js#L8816)

_No relevant functions or constants detected._

## [📺 get Playlist Name](../youtube-playback-plox.user.js#L8861)
> [Line 8861](../youtube-playback-plox.user.js#L8861)

| Type | Name | Line |
|---|---|---|
| `fn` | [`shouldThrottlePlaylistNameFetch`](../youtube-playback-plox.user.js#L8882) | [8882](../youtube-playback-plox.user.js#L8882) |
| `fn` | [`requestPromise`](../youtube-playback-plox.user.js#L9024) | [9024](../youtube-playback-plox.user.js#L9024) |
| `fn` | [`resolved`](../youtube-playback-plox.user.js#L9109) | [9109](../youtube-playback-plox.user.js#L9109) |

## [🕒 Time Display](../youtube-playback-plox.user.js#L9136)
> [Line 9136](../youtube-playback-plox.user.js#L9136)

| Type | Name | Line |
|---|---|---|
| `fn` | [`scheduleDisplayClear`](../youtube-playback-plox.user.js#L9162) | [9162](../youtube-playback-plox.user.js#L9162) |

## [🖼️ Display Button Helpers](../youtube-playback-plox.user.js#L9172)
> [Line 9172](../youtube-playback-plox.user.js#L9172)

| Type | Name | Line |
|---|---|---|
| `fn` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9454) | [9454](../youtube-playback-plox.user.js#L9454) |
| `module` | [`PlaybackDisplayManager`](../youtube-playback-plox.user.js#L9454) | [9454](../youtube-playback-plox.user.js#L9454) |
| `fn` | [`getDisplay`](../youtube-playback-plox.user.js#L9466) | [9466](../youtube-playback-plox.user.js#L9466) |
| `fn` | [`matchesIdentity`](../youtube-playback-plox.user.js#L9476) | [9476](../youtube-playback-plox.user.js#L9476) |
| `fn` | [`getContextFromVideo`](../youtube-playback-plox.user.js#L9484) | [9484](../youtube-playback-plox.user.js#L9484) |
| `fn` | [`getFixedTimeMessage`](../youtube-playback-plox.user.js#L9492) | [9492](../youtube-playback-plox.user.js#L9492) |
| `fn` | [`releasePlayListener`](../youtube-playback-plox.user.js#L9515) | [9515](../youtube-playback-plox.user.js#L9515) |
| `fn` | [`addPlayClearListener`](../youtube-playback-plox.user.js#L9527) | [9527](../youtube-playback-plox.user.js#L9527) |
| `fn` | [`handlePlay`](../youtube-playback-plox.user.js#L9530) | [9530](../youtube-playback-plox.user.js#L9530) |
| `fn` | [`clearMessageContent`](../youtube-playback-plox.user.js#L9540) | [9540](../youtube-playback-plox.user.js#L9540) |
| `fn` | [`applySavedStateToDisplay`](../youtube-playback-plox.user.js#L9545) | [9545](../youtube-playback-plox.user.js#L9545) |
| `fn` | [`applyFixedStateToDisplay`](../youtube-playback-plox.user.js#L9568) | [9568](../youtube-playback-plox.user.js#L9568) |
| `fn` | [`reanchorShortsDisplay`](../youtube-playback-plox.user.js#L9587) | [9587](../youtube-playback-plox.user.js#L9587) |
| `fn` | [`reattach`](../youtube-playback-plox.user.js#L9595) | [9595](../youtube-playback-plox.user.js#L9595) |
| `fn` | [`ensure`](../youtube-playback-plox.user.js#L9639) | [9639](../youtube-playback-plox.user.js#L9639) |
| `fn` | [`target`](../youtube-playback-plox.user.js#L9694) | [9694](../youtube-playback-plox.user.js#L9694) |
| `fn` | [`show`](../youtube-playback-plox.user.js#L9753) | [9753](../youtube-playback-plox.user.js#L9753) |
| `fn` | [`destroy`](../youtube-playback-plox.user.js#L9850) | [9850](../youtube-playback-plox.user.js#L9850) |
| `fn` | [`bind`](../youtube-playback-plox.user.js#L9865) | [9865](../youtube-playback-plox.user.js#L9865) |
| `fn` | [`release`](../youtube-playback-plox.user.js#L9869) | [9869](../youtube-playback-plox.user.js#L9869) |
| `fn` | [`syncFixedTime`](../youtube-playback-plox.user.js#L9876) | [9876](../youtube-playback-plox.user.js#L9876) |
| `fn` | [`syncSavedState`](../youtube-playback-plox.user.js#L9894) | [9894](../youtube-playback-plox.user.js#L9894) |

## [🍞 Toasts](../youtube-playback-plox.user.js#L9951)
> [Line 9951](../youtube-playback-plox.user.js#L9951)

| Type | Name | Line |
|---|---|---|
| `fn` | [`onTransitionEnd`](../youtube-playback-plox.user.js#L9987) | [9987](../youtube-playback-plox.user.js#L9987) |

## [⚙️ Settings UI Rendering Helpers](../youtube-playback-plox.user.js#L10127)
> [Line 10127](../youtube-playback-plox.user.js#L10127)

| Type | Name | Line |
|---|---|---|
| `fn` | [`renderLanguageSection`](../youtube-playback-plox.user.js#L10130) | [10130](../youtube-playback-plox.user.js#L10130) |

## [🗂️ Settings Schema - Data-Driven UI](../youtube-playback-plox.user.js#L10170)
> [Line 10170](../youtube-playback-plox.user.js#L10170)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getSchemaField`](../youtube-playback-plox.user.js#L10210) | [10210](../youtube-playback-plox.user.js#L10210) |
| `fn` | [`getSchemaFieldsBySection`](../youtube-playback-plox.user.js#L10216) | [10216](../youtube-playback-plox.user.js#L10216) |
| `fn` | [`createFormField`](../youtube-playback-plox.user.js#L10224) | [10224](../youtube-playback-plox.user.js#L10224) |
| `fn` | [`renderFields`](../youtube-playback-plox.user.js#L10270) | [10270](../youtube-playback-plox.user.js#L10270) |
| `fn` | [`renderGeneralSettingSection`](../youtube-playback-plox.user.js#L10274) | [10274](../youtube-playback-plox.user.js#L10274) |
| `fn` | [`renderManualSavingOptionsSection`](../youtube-playback-plox.user.js#L10277) | [10277](../youtube-playback-plox.user.js#L10277) |
| `fn` | [`renderAutomaticSavingOptionsSection`](../youtube-playback-plox.user.js#L10293) | [10293](../youtube-playback-plox.user.js#L10293) |
| `fn` | [`renderNotificationSettingsSection`](../youtube-playback-plox.user.js#L10302) | [10302](../youtube-playback-plox.user.js#L10302) |
| `fn` | [`renderAutoCleanupSection`](../youtube-playback-plox.user.js#L10332) | [10332](../youtube-playback-plox.user.js#L10332) |
| `fn` | [`renderGitHubBackupSection`](../youtube-playback-plox.user.js#L10346) | [10346](../youtube-playback-plox.user.js#L10346) |
| `fn` | [`renderTabContent`](../youtube-playback-plox.user.js#L10350) | [10350](../youtube-playback-plox.user.js#L10350) |

## [⚙️ Settings UI](../youtube-playback-plox.user.js#L10488)
> [Line 10488](../youtube-playback-plox.user.js#L10488)

| Type | Name | Line |
|---|---|---|
| `fn` | [`closeModal`](../youtube-playback-plox.user.js#L10508) | [10508](../youtube-playback-plox.user.js#L10508) |
| `fn` | [`updateAlertPreview`](../youtube-playback-plox.user.js#L10592) | [10592](../youtube-playback-plox.user.js#L10592) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10673) | [10673](../youtube-playback-plox.user.js#L10673) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10674) | [10674](../youtube-playback-plox.user.js#L10674) |
| `fn` | [`getVal`](../youtube-playback-plox.user.js#L10754) | [10754](../youtube-playback-plox.user.js#L10754) |
| `fn` | [`isChecked`](../youtube-playback-plox.user.js#L10755) | [10755](../youtube-playback-plox.user.js#L10755) |

## [📢 Notify Seek or Progress](../youtube-playback-plox.user.js#L10883)
> [Line 10883](../youtube-playback-plox.user.js#L10883)

_No relevant functions or constants detected._

## [🎵 Video Selection](../youtube-playback-plox.user.js#L10941)
> [Line 10941](../youtube-playback-plox.user.js#L10941)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11031) | [11031](../youtube-playback-plox.user.js#L11031) |
| `fn` | [`setCurrentlyOpenFooterMenu`](../youtube-playback-plox.user.js#L11038) | [11038](../youtube-playback-plox.user.js#L11038) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L11123) | [11123](../youtube-playback-plox.user.js#L11123) |
| `fn` | [`closeMenu`](../youtube-playback-plox.user.js#L11127) | [11127](../youtube-playback-plox.user.js#L11127) |
| `fn` | [`openMenu`](../youtube-playback-plox.user.js#L11136) | [11136](../youtube-playback-plox.user.js#L11136) |
| `fn` | [`refreshPlaylistState`](../youtube-playback-plox.user.js#L11409) | [11409](../youtube-playback-plox.user.js#L11409) |
| `fn` | [`showSuccess`](../youtube-playback-plox.user.js#L11556) | [11556](../youtube-playback-plox.user.js#L11556) |

## [📺 Video Observer & Processing Manager](../youtube-playback-plox.user.js#L11643)
> [Line 11643](../youtube-playback-plox.user.js#L11643)

| Type | Name | Line |
|---|---|---|
| `fn` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11649) | [11649](../youtube-playback-plox.user.js#L11649) |
| `module` | [`RouteContextResolver`](../youtube-playback-plox.user.js#L11649) | [11649](../youtube-playback-plox.user.js#L11649) |
| `fn` | [`isMiniplayerBlockingPreview`](../youtube-playback-plox.user.js#L11650) | [11650](../youtube-playback-plox.user.js#L11650) |
| `module` | [`CONTEXTS`](../youtube-playback-plox.user.js#L11659) | [11659](../youtube-playback-plox.user.js#L11659) |
| `fn` | [`getContextRoot`](../youtube-playback-plox.user.js#L11664) | [11664](../youtube-playback-plox.user.js#L11664) |
| `fn` | [`computeContextScore`](../youtube-playback-plox.user.js#L11675) | [11675](../youtube-playback-plox.user.js#L11675) |
| `fn` | [`resolveContext`](../youtube-playback-plox.user.js#L11692) | [11692](../youtube-playback-plox.user.js#L11692) |
| `fn` | [`getIneligibilityReason`](../youtube-playback-plox.user.js#L11726) | [11726](../youtube-playback-plox.user.js#L11726) |
| `fn` | [`canProcessContext`](../youtube-playback-plox.user.js#L11751) | [11751](../youtube-playback-plox.user.js#L11751) |
| `fn` | [`isContextLocked`](../youtube-playback-plox.user.js#L11753) | [11753](../youtube-playback-plox.user.js#L11753) |
| `fn` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11772) | [11772](../youtube-playback-plox.user.js#L11772) |
| `module` | [`SessionTelemetry`](../youtube-playback-plox.user.js#L11772) | [11772](../youtube-playback-plox.user.js#L11772) |
| `fn` | [`emit`](../youtube-playback-plox.user.js#L11774) | [11774](../youtube-playback-plox.user.js#L11774) |
| `fn` | [`shouldDropVideoEvent`](../youtube-playback-plox.user.js#L11786) | [11786](../youtube-playback-plox.user.js#L11786) |
| `fn` | [`FailSafeManager`](../youtube-playback-plox.user.js#L11795) | [11795](../youtube-playback-plox.user.js#L11795) |
| `module` | [`FailSafeManager`](../youtube-playback-plox.user.js#L11795) | [11795](../youtube-playback-plox.user.js#L11795) |
| `fn` | [`prune`](../youtube-playback-plox.user.js#L11806) | [11806](../youtube-playback-plox.user.js#L11806) |
| `fn` | [`getTotal`](../youtube-playback-plox.user.js#L11811) | [11811](../youtube-playback-plox.user.js#L11811) |
| `fn` | [`track`](../youtube-playback-plox.user.js#L11816) | [11816](../youtube-playback-plox.user.js#L11816) |
| `fn` | [`maybeExit`](../youtube-playback-plox.user.js#L11828) | [11828](../youtube-playback-plox.user.js#L11828) |
| `fn` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L11845) | [11845](../youtube-playback-plox.user.js#L11845) |
| `module` | [`SessionFallbackManager`](../youtube-playback-plox.user.js#L11845) | [11845](../youtube-playback-plox.user.js#L11845) |
| `fn` | [`clear`](../youtube-playback-plox.user.js#L11847) | [11847](../youtube-playback-plox.user.js#L11847) |
| `fn` | [`ensureForSession`](../youtube-playback-plox.user.js#L11855) | [11855](../youtube-playback-plox.user.js#L11855) |

## [📡 Video Observer Manager](../youtube-playback-plox.user.js#L11903)
> [Line 11903](../youtube-playback-plox.user.js#L11903)

| Type | Name | Line |
|---|---|---|
| `fn` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L11908) | [11908](../youtube-playback-plox.user.js#L11908) |
| `module` | [`VideoObserverManager`](../youtube-playback-plox.user.js#L11908) | [11908](../youtube-playback-plox.user.js#L11908) |
| `fn` | [`resetSessionAndEnqueue`](../youtube-playback-plox.user.js#L11928) | [11928](../youtube-playback-plox.user.js#L11928) |
| `fn` | [`processMutationsForVideo`](../youtube-playback-plox.user.js#L11943) | [11943](../youtube-playback-plox.user.js#L11943) |
| `fn` | [`processBatch`](../youtube-playback-plox.user.js#L11959) | [11959](../youtube-playback-plox.user.js#L11959) |
| `fn` | [`ensurePreviewWatchdog`](../youtube-playback-plox.user.js#L11996) | [11996](../youtube-playback-plox.user.js#L11996) |
| `fn` | [`waitForWatchPlayerReactive`](../youtube-playback-plox.user.js#L12030) | [12030](../youtube-playback-plox.user.js#L12030) |
| `fn` | [`clearWaitState`](../youtube-playback-plox.user.js#L12031) | [12031](../youtube-playback-plox.user.js#L12031) |
| `fn` | [`tryProcess`](../youtube-playback-plox.user.js#L12062) | [12062](../youtube-playback-plox.user.js#L12062) |
| `fn` | [`bootstrap`](../youtube-playback-plox.user.js#L12118) | [12118](../youtube-playback-plox.user.js#L12118) |
| `fn` | [`scheduleAdRecovery`](../youtube-playback-plox.user.js#L12185) | [12185](../youtube-playback-plox.user.js#L12185) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12193) | [12193](../youtube-playback-plox.user.js#L12193) |
| `fn` | [`onAdWait`](../youtube-playback-plox.user.js#L12200) | [12200](../youtube-playback-plox.user.js#L12200) |
| `fn` | [`enqueueVideo`](../youtube-playback-plox.user.js#L12238) | [12238](../youtube-playback-plox.user.js#L12238) |
| `fn` | [`enqueueWithResolver`](../youtube-playback-plox.user.js#L12278) | [12278](../youtube-playback-plox.user.js#L12278) |
| `fn` | [`requeueMiniplayer`](../youtube-playback-plox.user.js#L12289) | [12289](../youtube-playback-plox.user.js#L12289) |
| `fn` | [`initObservers`](../youtube-playback-plox.user.js#L12305) | [12305](../youtube-playback-plox.user.js#L12305) |
| `fn` | [`clearPlayerCache`](../youtube-playback-plox.user.js#L12411) | [12411](../youtube-playback-plox.user.js#L12411) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L12625) | [12625](../youtube-playback-plox.user.js#L12625) |
| `fn` | [`clearCache`](../youtube-playback-plox.user.js#L12667) | [12667](../youtube-playback-plox.user.js#L12667) |

## [Processing Functions](../youtube-playback-plox.user.js#L12687)
> [Line 12687](../youtube-playback-plox.user.js#L12687)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createSessionTimeout`](../youtube-playback-plox.user.js#L12713) | [12713](../youtube-playback-plox.user.js#L12713) |
| `fn` | [`clearSessionTimeouts`](../youtube-playback-plox.user.js#L12732) | [12732](../youtube-playback-plox.user.js#L12732) |
| `fn` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12742) | [12742](../youtube-playback-plox.user.js#L12742) |
| `module` | [`SessionOrchestrator`](../youtube-playback-plox.user.js#L12742) | [12742](../youtube-playback-plox.user.js#L12742) |
| `fn` | [`buildSessionId`](../youtube-playback-plox.user.js#L12757) | [12757](../youtube-playback-plox.user.js#L12757) |
| `fn` | [`buildIdentityKey`](../youtube-playback-plox.user.js#L12762) | [12762](../youtube-playback-plox.user.js#L12762) |
| `fn` | [`canTransition`](../youtube-playback-plox.user.js#L12769) | [12769](../youtube-playback-plox.user.js#L12769) |
| `fn` | [`transitionState`](../youtube-playback-plox.user.js#L12775) | [12775](../youtube-playback-plox.user.js#L12775) |
| `fn` | [`startSession`](../youtube-playback-plox.user.js#L12793) | [12793](../youtube-playback-plox.user.js#L12793) |
| `fn` | [`finalizeSession`](../youtube-playback-plox.user.js#L12863) | [12863](../youtube-playback-plox.user.js#L12863) |
| `fn` | [`handoffSession`](../youtube-playback-plox.user.js#L12896) | [12896](../youtube-playback-plox.user.js#L12896) |
| `fn` | [`shouldSkipResumeForActivePlayback`](../youtube-playback-plox.user.js#L12929) | [12929](../youtube-playback-plox.user.js#L12929) |
| `fn` | [`isResumeAtCompletionZone`](../youtube-playback-plox.user.js#L12959) | [12959](../youtube-playback-plox.user.js#L12959) |
| `fn` | [`finishPercent`](../youtube-playback-plox.user.js#L12970) | [12970](../youtube-playback-plox.user.js#L12970) |
| `fn` | [`stopAllSessions`](../youtube-playback-plox.user.js#L12982) | [12982](../youtube-playback-plox.user.js#L12982) |
| `fn` | [`startProcessingSession`](../youtube-playback-plox.user.js#L13016) | [13016](../youtube-playback-plox.user.js#L13016) |
| `fn` | [`fastPlaylistId`](../youtube-playback-plox.user.js#L13087) | [13087](../youtube-playback-plox.user.js#L13087) |
| `fn` | [`handleSeekingForGradient`](../youtube-playback-plox.user.js#L13116) | [13116](../youtube-playback-plox.user.js#L13116) |
| `fn` | [`handleSeekedForGradient`](../youtube-playback-plox.user.js#L13125) | [13125](../youtube-playback-plox.user.js#L13125) |
| `fn` | [`sessionTick`](../youtube-playback-plox.user.js#L13247) | [13247](../youtube-playback-plox.user.js#L13247) |
| `fn` | [`isHiddenGhost`](../youtube-playback-plox.user.js#L13316) | [13316](../youtube-playback-plox.user.js#L13316) |
| `module` | [`PROCESS_MEDIA_VIDEO_CONFIG`](../youtube-playback-plox.user.js#L13491) | [13491](../youtube-playback-plox.user.js#L13491) |
| `fn` | [`helperVideoId`](../youtube-playback-plox.user.js#L13604) | [13604](../youtube-playback-plox.user.js#L13604) |

## [PlaybackController](../youtube-playback-plox.user.js#L13754)
> [Line 13754](../youtube-playback-plox.user.js#L13754)

| Type | Name | Line |
|---|---|---|
| `fn` | [`getExpectedDuration`](../youtube-playback-plox.user.js#L13802) | [13802](../youtube-playback-plox.user.js#L13802) |
| `fn` | [`isReady`](../youtube-playback-plox.user.js#L13818) | [13818](../youtube-playback-plox.user.js#L13818) |
| `fn` | [`cleanup`](../youtube-playback-plox.user.js#L13841) | [13841](../youtube-playback-plox.user.js#L13841) |
| `fn` | [`onReady`](../youtube-playback-plox.user.js#L13847) | [13847](../youtube-playback-plox.user.js#L13847) |
| `fn` | [`cooldownElapsed`](../youtube-playback-plox.user.js#L14068) | [14068](../youtube-playback-plox.user.js#L14068) |

## [📋 Get Cascaded Video Info](../youtube-playback-plox.user.js#L14181)
> [Line 14181](../youtube-playback-plox.user.js#L14181)

| Type | Name | Line |
|---|---|---|
| `fn` | [`finalizeInfo`](../youtube-playback-plox.user.js#L14312) | [14312](../youtube-playback-plox.user.js#L14312) |

## [📂 Sort UI](../youtube-playback-plox.user.js#L14712)
> [Line 14712](../youtube-playback-plox.user.js#L14712)

| Type | Name | Line |
|---|---|---|
| `fn` | [`findOption`](../youtube-playback-plox.user.js#L14735) | [14735](../youtube-playback-plox.user.js#L14735) |
| `fn` | [`openList`](../youtube-playback-plox.user.js#L14811) | [14811](../youtube-playback-plox.user.js#L14811) |
| `fn` | [`closeList`](../youtube-playback-plox.user.js#L14820) | [14820](../youtube-playback-plox.user.js#L14820) |
| `fn` | [`onOutsideClick`](../youtube-playback-plox.user.js#L14828) | [14828](../youtube-playback-plox.user.js#L14828) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14848) | [14848](../youtube-playback-plox.user.js#L14848) |

## [📂 Filters UI](../youtube-playback-plox.user.js#L14901)
> [Line 14901](../youtube-playback-plox.user.js#L14901)

| Type | Name | Line |
|---|---|---|
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14913) | [14913](../youtube-playback-plox.user.js#L14913) |
| `fn` | [`isDefault`](../youtube-playback-plox.user.js#L14960) | [14960](../youtube-playback-plox.user.js#L14960) |
| `fn` | [`getProgressIcon`](../youtube-playback-plox.user.js#L14966) | [14966](../youtube-playback-plox.user.js#L14966) |
| `fn` | [`getIconForRange`](../youtube-playback-plox.user.js#L14974) | [14974](../youtube-playback-plox.user.js#L14974) |
| `fn` | [`updateActive`](../youtube-playback-plox.user.js#L14989) | [14989](../youtube-playback-plox.user.js#L14989) |
| `fn` | [`updateFromInputs`](../youtube-playback-plox.user.js#L15109) | [15109](../youtube-playback-plox.user.js#L15109) |

## [📂 Video List UI](../youtube-playback-plox.user.js#L15187)
> [Line 15187](../youtube-playback-plox.user.js#L15187)

_No relevant functions or constants detected._

## [📁 Update Video List](../youtube-playback-plox.user.js#L15310)
> [Line 15310](../youtube-playback-plox.user.js#L15310)

| Type | Name | Line |
|---|---|---|
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15329) | [15329](../youtube-playback-plox.user.js#L15329) |
| `fn` | [`prog`](../youtube-playback-plox.user.js#L15333) | [15333](../youtube-playback-plox.user.js#L15333) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15517) | [15517](../youtube-playback-plox.user.js#L15517) |
| `fn` | [`headerTitle`](../youtube-playback-plox.user.js#L15536) | [15536](../youtube-playback-plox.user.js#L15536) |
| `fn` | [`itemWidth`](../youtube-playback-plox.user.js#L15662) | [15662](../youtube-playback-plox.user.js#L15662) |
| `fn` | [`flushRowChunk`](../youtube-playback-plox.user.js#L15739) | [15739](../youtube-playback-plox.user.js#L15739) |
| `fn` | [`formatBytes`](../youtube-playback-plox.user.js#L15903) | [15903](../youtube-playback-plox.user.js#L15903) |
| `fn` | [`calculateScriptStorageUsage`](../youtube-playback-plox.user.js#L15924) | [15924](../youtube-playback-plox.user.js#L15924) |
| `fn` | [`updateStorageUsageIndicator`](../youtube-playback-plox.user.js#L15975) | [15975](../youtube-playback-plox.user.js#L15975) |

## [🔘 Floating Button](../youtube-playback-plox.user.js#L16095)
> [Line 16095](../youtube-playback-plox.user.js#L16095)

| Type | Name | Line |
|---|---|---|
| `fn` | [`createFloatingButton`](../youtube-playback-plox.user.js#L16098) | [16098](../youtube-playback-plox.user.js#L16098) |
| `fn` | [`updateVisibility`](../youtube-playback-plox.user.js#L16112) | [16112](../youtube-playback-plox.user.js#L16112) |

## [📂 Show Saved Videos List](../youtube-playback-plox.user.js#L16123)
> [Line 16123](../youtube-playback-plox.user.js#L16123)

| Type | Name | Line |
|---|---|---|
| `fn` | [`toggleAdvanced`](../youtube-playback-plox.user.js#L16250) | [16250](../youtube-playback-plox.user.js#L16250) |
| `fn` | [`updateActiveFilterBadge`](../youtube-playback-plox.user.js#L16260) | [16260](../youtube-playback-plox.user.js#L16260) |
| `fn` | [`handleOverlayClick`](../youtube-playback-plox.user.js#L16330) | [16330](../youtube-playback-plox.user.js#L16330) |

## [📂 Video Entry](../youtube-playback-plox.user.js#L16342)
> [Line 16342](../youtube-playback-plox.user.js#L16342)

| Type | Name | Line |
|---|---|---|
| `fn` | [`deleteFromStorage`](../youtube-playback-plox.user.js#L16476) | [16476](../youtube-playback-plox.user.js#L16476) |
| `fn` | [`undoDelete`](../youtube-playback-plox.user.js#L16481) | [16481](../youtube-playback-plox.user.js#L16481) |
| `fn` | [`cleanTitleForSpotifySearch`](../youtube-playback-plox.user.js#L16540) | [16540](../youtube-playback-plox.user.js#L16540) |
| `fn` | [`savedVideoActionIdToAttrSuffix`](../youtube-playback-plox.user.js#L16588) | [16588](../youtube-playback-plox.user.js#L16588) |
| `fn` | [`closeSavedVideoOverflowMenu`](../youtube-playback-plox.user.js#L16594) | [16594](../youtube-playback-plox.user.js#L16594) |
| `fn` | [`rowElToSavedVideoActionContext`](../youtube-playback-plox.user.js#L16611) | [16611](../youtube-playback-plox.user.js#L16611) |
| `fn` | [`openSavedVideosRowActionMenu`](../youtube-playback-plox.user.js#L16645) | [16645](../youtube-playback-plox.user.js#L16645) |
| `fn` | [`applySavedVideoActionDatasetToVideosContainer`](../youtube-playback-plox.user.js#L16689) | [16689](../youtube-playback-plox.user.js#L16689) |
| `fn` | [`formatDate`](../youtube-playback-plox.user.js#L16771) | [16771](../youtube-playback-plox.user.js#L16771) |
| `fn` | [`formatRelativeDate`](../youtube-playback-plox.user.js#L16777) | [16777](../youtube-playback-plox.user.js#L16777) |
| `fn` | [`formatDuration`](../youtube-playback-plox.user.js#L16793) | [16793](../youtube-playback-plox.user.js#L16793) |
| `fn` | [`watchPercent`](../youtube-playback-plox.user.js#L16803) | [16803](../youtube-playback-plox.user.js#L16803) |
| `fn` | [`progressBar`](../youtube-playback-plox.user.js#L16811) | [16811](../youtube-playback-plox.user.js#L16811) |
| `fn` | [`escYaml`](../youtube-playback-plox.user.js#L16816) | [16816](../youtube-playback-plox.user.js#L16816) |
| `fn` | [`escMd`](../youtube-playback-plox.user.js#L16823) | [16823](../youtube-playback-plox.user.js#L16823) |
| `fn` | [`oneLine`](../youtube-playback-plox.user.js#L16826) | [16826](../youtube-playback-plox.user.js#L16826) |
| `fn` | [`formatDescription`](../youtube-playback-plox.user.js#L16830) | [16830](../youtube-playback-plox.user.js#L16830) |
| `fn` | [`normHistory`](../youtube-playback-plox.user.js#L16876) | [16876](../youtube-playback-plox.user.js#L16876) |
| `module` | [`normHistory`](../youtube-playback-plox.user.js#L16876) | [16876](../youtube-playback-plox.user.js#L16876) |
| `fn` | [`validEvents`](../youtube-playback-plox.user.js#L16890) | [16890](../youtube-playback-plox.user.js#L16890) |
| `fn` | [`sync`](../youtube-playback-plox.user.js#L17164) | [17164](../youtube-playback-plox.user.js#L17164) |
| `fn` | [`syncGridOptionsVisibility`](../youtube-playback-plox.user.js#L17212) | [17212](../youtube-playback-plox.user.js#L17212) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17213) | [17213](../youtube-playback-plox.user.js#L17213) |
| `fn` | [`syncViewModeBtn`](../youtube-playback-plox.user.js#L17229) | [17229](../youtube-playback-plox.user.js#L17229) |
| `fn` | [`isGrid`](../youtube-playback-plox.user.js#L17230) | [17230](../youtube-playback-plox.user.js#L17230) |
| `fn` | [`syncExpModeBtn`](../youtube-playback-plox.user.js#L17279) | [17279](../youtube-playback-plox.user.js#L17279) |
| `fn` | [`syncSectionExpanded`](../youtube-playback-plox.user.js#L17424) | [17424](../youtube-playback-plox.user.js#L17424) |
| `fn` | [`makeToggleRow`](../youtube-playback-plox.user.js#L17438) | [17438](../youtube-playback-plox.user.js#L17438) |
| `fn` | [`setupModalEventDelegation`](../youtube-playback-plox.user.js#L17737) | [17737](../youtube-playback-plox.user.js#L17737) |
| `fn` | [`thumbClass`](../youtube-playback-plox.user.js#L17836) | [17836](../youtube-playback-plox.user.js#L17836) |
| `fn` | [`rowItemsElements`](../youtube-playback-plox.user.js#L17919) | [17919](../youtube-playback-plox.user.js#L17919) |
| `fn` | [`createButtonForId`](../youtube-playback-plox.user.js#L18173) | [18173](../youtube-playback-plox.user.js#L18173) |
| `fn` | [`qaButtons`](../youtube-playback-plox.user.js#L18196) | [18196](../youtube-playback-plox.user.js#L18196) |
| `fn` | [`actButtons`](../youtube-playback-plox.user.js#L18197) | [18197](../youtube-playback-plox.user.js#L18197) |

## [🗑️ Clear All Data](../youtube-playback-plox.user.js#L18269)
> [Line 18269](../youtube-playback-plox.user.js#L18269)

_No relevant functions or constants detected._

## [⚙️ Menu Commands](../youtube-playback-plox.user.js#L18421)
> [Line 18421](../youtube-playback-plox.user.js#L18421)

_No relevant functions or constants detected._

## [🔄 Data Migration](../youtube-playback-plox.user.js#L18448)
> [Line 18448](../youtube-playback-plox.user.js#L18448)

| Type | Name | Line |
|---|---|---|
| `fn` | [`videoKeysGM`](../youtube-playback-plox.user.js#L18505) | [18505](../youtube-playback-plox.user.js#L18505) |

## [🚀 Init](../youtube-playback-plox.user.js#L18840)
> [Line 18840](../youtube-playback-plox.user.js#L18840)

| Type | Name | Line |
|---|---|---|
| `fn` | [`initializeGlobal`](../youtube-playback-plox.user.js#L18850) | [18850](../youtube-playback-plox.user.js#L18850) |
| `fn` | [`handleNavigation`](../youtube-playback-plox.user.js#L18872) | [18872](../youtube-playback-plox.user.js#L18872) |
| `fn` | [`init`](../youtube-playback-plox.user.js#L19201) | [19201](../youtube-playback-plox.user.js#L19201) |

