# 0.0.9-9 (Unreleased)

### Fixed

- **Fixed Time Completion**: Resolved a bug where video completion was not registered in the watch history when a video had a fixed start time. Additionally, fixed an issue where clicking "Replay" would reset the video to 0:00 instead of the fixed start time; the script now correctly detects replays and re-applies the saved fixed position.
- **Fixed Time ReferenceError**: Fixed a `ReferenceError ('alertStyles' is not defined)` in `syncFixedTimeUI` that occurred when assigning a new fixed start time, migrating the alert style purely to dynamic configurations.
- **Range Input Synchronization**: Improved the behavior of Views and Percentage range filters.
    - **Sanitization**: Fixed a bug where non-numeric characters (like "e", ".", or "-") were allowed by switching inputs to `type="text"` with `inputmode="numeric"`.
    - **Auto-Preset Detection**: Added real-time synchronization so that if manual inputs match a standard preset (e.g., 0-0 for All, or 1M+), the dropdown automatically selects that preset instead of remaining as "Custom".
    - **Dynamic Icons**: The percentage range filter now updates its icon (0%, 33%, 66%, 100%) in real-time based on the minimum value selected, consistent with the video list design.
- **Seek Message Persistence**: Fixed an issue where the "Resumed at X:XX" (seek) message would disappear even if the video remained paused. Now, the message persists while the video is paused and only clears after playback begins.
- **Redundant Cleanup Loop**: Fixed an issue where `loadTranslations` would re-add the translation cache to `localStorage` on every load, causing `cleanupNonVideoData` to repeatedly perform migration logic and logs.
- **Management Mode Selection Reset**: Fixed an issue where the selected videos count and button states remained active after deleting selected videos in Management Mode. Now calls `updateManagementFooterState()` after clearing selection to properly reset the UI state.
- **Progress Color at 0%**: Fixed an issue where `getProgressColor()` returned an object instead of an RGB string when percent is 0, causing the inline style to render as `color: [object Object]`. Now correctly returns `rgb(221, 68, 68)` for 0% progress.
- **Deprecated unescape Replacement**: Replaced deprecated `unescape()` function with modern `TextEncoder` for UTF-8 to base64 encoding in GitHub repository backup, eliminating TypeScript deprecation warnings.
- **CSP Violation in Settings Modal**: Fixed Content-Security-Policy violation when opening the Settings modal by removing inline `oninput` handler from interval inputs and replacing with programmatic `addEventListener` calls. Also added validation to enforce minimum value of 1 for interval inputs.
- **Code Style Improvements**: Replaced loose equality operators (`==`, `!=`) with strict equality operators (`===`, `!==`) in 14 null comparisons throughout the codebase to follow ES2025 best practices.
- **Dropdown Overlap**: Fixed a bug where multiple custom dropdowns (Sort, Filter by type, etc.) in the advanced filters panel could remain open simultaneously. Removed `e.stopPropagation()` from triggers to allow the global outside-click listener to correctly close other open dropdowns when a new one is clicked.
- **Improved Error Logging**: Added `logError` calls to critical silent catch blocks in `loadTranslations`, `getPlaylistName`, and `cleanupNonVideoData` to improve troubleshooting for failed network requests and corrupted metadata migration.
- **Theme Detection**: Added `applyTheme()` function to set the attribute `[data-theme="dark"]` during initialization and `observeThemeChanges()` with MutationObserver to automatically update when YouTube toggles between light/dark modes.

### Added

- **Playlist Clear Selection**: Added a "Clear selection" button in Playlist Creation Mode.
- **ISO 3166**: Added `ISO_3166` to `LANGUAGE_FLAGS` values. This eliminates the use of emojis and increases compatibility with browsers that did not support them before.
- **SVG Icon Dropdowns**: Replaced natives `<select>` elements in the Saved Videos modal (filter by type and sort) with a custom `div`-based dropdown component (`createCustomDropdown`) and in the Settings modal for the language. This allows displaying SVG icons next to each option, something the browser's native `<option>` element does not support.
- **YouTube Helper API Integration**: Added a persistent listener for `yt-helper-api-ready` to handle "silent" video updates in Single Page Application (SPA) mode (e.g. Playlists and Shorts). This ensures that progress is correctly saved and resumed even when YouTube navigates between videos without a full page reload or a visible player change.
- **Hide Timestamp Option**: Added a specific toggle in the 'Notifications' settings block to completely hide timestamps (`[12:34]`) from video alerts, giving users more flexibility for a cleaner UI even if keeping text or icon displays.
- **Changelog.md**: Added a changelog to keep track of the changes made to the script.
- **Granular Alert System**: Replaced the previous fixed alert styles with a granular system. Users can now independently toggle icons, messages, and timestamps for video alerts.
- **Live Alert Preview**: Added a real-time preview in the Settings modal that shows exactly how alerts will look based on the selected configuration.
- **History Button Toggle**: Added a new setting to show or hide the "Saved Videos" history button in the playback bar.
- **Button System Refactor**: Refactored the button CSS system to use CSS custom properties (`--btn-bg`, `--btn-bg-hover`, `--btn-bg-active`, `--btn-color`) for each variant.
- **Playlist Color Refactor**: Refactored `generatePlaylistColor()` and `generatePlaylistBorderColor()` to use CSS variables from the button system (`--ypp-primary`, `--ypp-info`, `--ypp-success`, `--ypp-warning`) instead of HSL color generation. This ensures AAA contrast compliance with the new button and text color system. Background colors use `color-mix()` with 15% opacity for a soft appearance, while borders use full color for visibility.

### Changed

- **Motion & Spring UI**: Implemented cascading staggered entry animations for modal windows and applied organic spring physics interpolation (`cubic-bezier`) to Toast notifications and expanding filter panels for a fluid feel.
- **Skeleton Loaders**: Replaced loading spinner with fully composed Skeleton UI cards reflecting layout structures.
- **Alert Logic Refactor**: Completely refactored the internal alert construction logic to support dynamic combinations of icon, text, and time components.
- **Settings UI Optimization**: Modernized the Notifications section of the settings modal for better clarity and usability.
- **Metadata Synchronization**: Improved metadata extraction by leveraging the latest API refiring capabilities for better accuracy during seamless transitions.
- **Import Limit Increase**: Increased the maximum file size for FreeTube imports from 10MB to 50MB to support larger watch histories.
- **Language Management Optimization**: Refactored `setLanguage` to avoid redundant storage writes and improved the fallback detection logic using ES2025 features.
- **Translation System Overhaul**: Replaced the expensive pre-init deep merging of translations with a dynamic "waterfall" fallback in the `t()` function. Refactored `loadTranslations` to avoid redundant caching of local constants, ensuring the script only uses external data when truly available.
- **Legacy Storage Removal**: Eliminated `isOldFormat` logic and `playlistKey` dependencies from video action handlers. The script now exclusively uses the modern standalone IndexedDB format for all video entries, simplifying the codebase and improving reliability.
- **Import/Export Footer UX**: Unified the Saved Videos modal footer into two primary buttons (`Import` and `Export`) and added compact upward dropdown menus to choose JSON or FreeTube format on click.
- **Management Mode UX**: Moved Import/Export actions into Management Mode and unified export actions for both "All" and "Selected" under the same dropdown design to reduce redundancy.
- **Management Footer Visual Hierarchy**: Reorganized management actions into grouped sections (selection/data/destructive/session), applied semantic button variants, and added dynamic disabled/count states for selected-only actions to improve clarity and prevent accidental clicks.
- **Hidden Selection Recovery**: Fixed an edge case where selected videos could become hidden after applying filters with no clear way to deselect them. The management footer now indicates hidden selected count and allows clearing all selections directly from the selection toggle flow.
- **Dedicated Selection Reset**: Added a dedicated `Clear selection` action in Management Mode and new fallback-only translation keys to explicitly indicate hidden selected items in current results.
- **Advanced Filters UI Redesign**: Compacted the advanced filters panel from a 2-row layout into a single unified 4-column grid. Sort, Type, Views, and Percent filters now share the same row. Each filter column shows a chip-label (icon + name) above its control for clarity. Range filters (Views/Percent) are now fully inline: preset dropdown and Min–Max inputs share a single horizontal row. Removed the old external text labels in favor of consistent chip-labels across all filter columns.

### Removed

- **Legacy Settings**: Removed the obsolete `alertStyle` and `hideTimestamp` settings in favor of the new granular flags.

# 0.0.9-8

### Fixed

- **GitHub Settings Undefined**: Fixed a `TypeError` ("can't access property 'lastSync', s is undefined") that occurred during Settings UI rendering when a legacy or partial GitHub Backup configuration lacked `gist` or `repo` properties. Now it uses a secure fallback to `CONFIG.defaultGithubSettings[type]`.

# 0.0.9-7

### Added

- **Pre-Migration JSON Backup**: Added an automated prompt that recommends downloading a JSON backup of saved videos before executing any data structure migrations on `IndexedDB`. #22
- **Protected Videos Feature**: Added a "Protect" option to saved videos to prevent accidental deletion. Protected videos cannot be removed through individual, bulk, or "Clear All" actions until manually unprotected. #17
- **Visual Protection Indicators**: Protected videos are highlighted in the saved videos list with a golden border and a locked icon for easy identification. Deletion logic automatically skips protected items and provides feedback on how many items were preserved.
- **Filter Redesign**: Implemented a collapsible "Advanced Filters" section in the Saved Videos modal to maximize vertical space.
- **Active Filter Indicator**: Added a dynamic badge to the "Advanced Filters" toggle that displays the number of active hidden filters, providing clear feedback when results are being narrowed.
- **Categorized Sort UI**: Reorganized the sorting dropdown into logical groups using `<optgroup>` for better usability.
- **Advanced Bidirectional Sorting**: Implemented 14 sorting options including Date, Title, Author, Duration, Watch Count (Favorites), YouTube Views, and Watch Progress, all supporting both ascending and descending orders.
- **Hybrid Filtering**: Combined preset dropdowns (1M+, 50%+, etc.) with custom Min/Max range inputs for Views and Watch Percentage.
- **Responsive Layout Optimization**: Refactored the filter grid to use `auto-fit` and `minmax` for better adaptation across various screen sizes.
- **Independent Management Mode**: A new "Manage Videos" toggle enables selection for bulk removal/export.
- **Completed Filter**: Added a new "Completed at least once" filter to the Saved Videos modal.
- **Data Preservation during Import**: Updated `normalizeVideoData` to ensure the `isProtected` flag is preserved when importing JSON backups.

### Fixed

- **Storage Quota Error Propagation**: Fixed a bug where `IndexedDBAdapter.enqueue()` silently swallowed all IndexedDB errors (including `QuotaExceededError`) by calling `.catch()` without re-throwing. This caused quota failures to never reach `Storage.set`, so the `storage_full` alert was never triggered. The fix makes `enqueue` re-throw errors so they bubble correctly to callers. Additionally, broadened quota detection in `Storage.set` to also check `err.code === 22` (the `QUOTA_EXCEEDED_ERR` numeric DOMException code) and the error message string, for cross-browser compatibility.
- **Smart Filter Presets**: Added a "Custom" (Personalizado) state to range dropdowns that activates when manual values are entered. Also added specific tooltips (Min views, Max %, etc.) to input fields.
- **Virtual Scroller**: When deleting a video, the virtual scroller now preserves its state, so it doesn’t automatically scroll back to the top. #26

### Changed

- **Filter Persistence Architecture**: Replaced redundant `saveFilters` and `getSavedFilters` functions with a consolidated `Filters` object. This follows the same robust pattern as the `Settings` object, ensuring consistent error handling and cross-tab synchronization.
- **Completion History Migration (0.0.9-6 → 0.0.9-7)**: `normalizeVideoData` now automatically backfills a single `completionHistory` entry (using `timeWatched` as the legacy timestamp) for any video that was already marked as `isCompleted = true` before history tracking was introduced. This makes the "Watched X times" counter show **1** instead of blank for pre-existing completed videos, and is idempotent (runs only once per record, on the first read/write cycle post-upgrade).
- **Storage Cleanup & Migration Consolidation**: Simplified the script's initialization flow. The redundant `migrateToFreeTubeFormat` function has been eliminated and its structural normalization logic (desanitizing playlists, enforcing new schema) is now integrated into `cleanupNonVideoData`.
- **Deep Orphan Sweeping & GM_setValue Sanitation**: Expanded the storage cleanup routine to perform a deep sweep of `localStorage` and `GM_setValue`. It now securely migrates legacy configuration flags and gracefully rescues any orphaned video entries left behind by older versions, ensuring a completely clean and unified `IndexedDB` exclusively dedicated to video data.
- **Performance**: Cached `isShortsPreview` in `videoEl.dataset` to avoid repeated `querySelector` calls on each save tick.

# 0.0.9-6

### Added

- **Completion History Tracking**: Videos now record a timestamped history of every time they are watched to completion. This allows tracking repeat views and seeing exactly when a video was finished.
- **Completion Session Toggle**: Added a "Count only once per session" toggle in Settings. If enabled, auto-looping or re-watching a video without navigating away will only count as a single completion, preventing "noise" in history for unattended PCs.
- **Watched Count Indicator**: Added a "Watched X times" badge to video entries in the saved list. Hovering over the badge shows the full history of completion dates, now truncated to the 10 most recent entries with a `(+N more)` indicator for better UI performance.
- **Enhanced Local Translations**: Restored and expanded local `FALLBACK_TRANSLATIONS` within the script (including `es-419` and `fr`) to ensure all new interface elements are correctly localized even if remote translation files fail to load.
- **Support & Error Logs UI**: Added a dedicated sub-section inside the Settings modal to display an ongoing registry of internal script errors dynamically intercepted from `MyScriptLogger.error`. Facilitates robust bug reporting on GitHub Issues by including a "Copy Logs" button that automatically parses the errors with environment data (User Agent, URL, Version) and leverages the native `showFloatingToast` for immediate click feedback.
- **Asynchronous Thumbnail Validation**: Implemented a pre-rendering validation system for video thumbnails in the Saved Videos modal. It sequentially checks for the best quality available (WebP MaxRes, JPG MaxRes, HQ720, HQ) and filters out YouTube's low-quality placeholders before rendering, utilizing an in-memory cache to ensure zero performance impact during scrolling.
- **Obsidian Conversion Tool**: Created a new standalone tool (`tools/playback-to-obsidian.html`) that allows users to convert their JSON or FreeTube backups into Markdown. It features a specialized **ZIP mode** that generates individual `.md` files for each video, compatible with **Obsidian Bases** database view.
- **Dependency-free ZIP Builder**: Replaced external JSZip CDN with a custom, pure-JS inline ZIP generator (MiniZip) to ensure the conversion tool works perfectly when opened as a local file (`file://`), bypassing CORS and network restrictions.
* **CSS Cleanup**: Added vendor prefixes and removed redundant code.
* Updated video existence indicator behavior: instead of changing the icon, it now changes color on hover when the video exists in the database. (#23)

### Fixed

- **Completion Tooltip Overflow**: Fixed an issue where the completion history tooltip could overflow the screen for frequently watched videos by implementing a truncation system (limit to 10 entries + overflow count).
- **Filter Overflow Fix**: Added `min-width: 0` to video filter grid cells and selectors to prevent layout horizontal overflow on narrow windows.
- **Alert Settings Simplification**: Merged the redundant `showNotifications` checkbox and `alertStyle` dropdown into a single unified setting. The `alertStyle: 'Hidden'` option now handles all notification disabling, streamlining the Settings Modal and reducing configuration complexity.
- **Improved Settings Modal Layout**: Refactored the internal rendering logic of the Settings Modal into modular sub-sections (`General`, `Manual/Automatic Saving`, `Notifications`) for better maintainability and visual organization.
- **New History Icon**: Replaced the previous folder-style icon with a more intuitive `clockRotateLeft` (history) icon for the saved videos list across all playback bar displays.
- **Manual Save UI Accuracy & Performance**: Fixed a bug where the manual save button would erroneously appear on disabled video types (e.g., when the user has `saveLiveStreams` set to false, but manual save mode on). The button's visibility is now dynamically toggled purely via CSS using a `toggleManualSaveVisibility` helper. (#24)
- **Manual Save UI Flicker**: Eliminated UI layout shifting (flickering) by initializing the manual save button in a hidden state (`ypp-d-none`) by default, and removed recurring overhead from `restoreDisplayButtons` that was attempting to incorrectly force visibility every second.
- **Manual Save Notification**: Fixed a bug where the manual save notification was immediately cleared if the user pressed the manual save button while the video was paused.
- **Navigation UI Persistence**: Resolved an issue where "Always start from here" (Fixed Time) messages and other notification artifacts would persist when navigating between videos in Single Page Application (SPA) mode, particularly affecting users in Manual Save Mode. Implemented a proactive `clearAllPlaybackMessages` reset at the start of every new video session.
- **Race Condition Fix**: Resolved a critical "zombie" resume bug where seek operations from previous video sessions were leaking into new video loads during history navigation.
- **Real-time Fixed-Time Updates**: Refactored `syncFixedTimeUI` and modal logic to instantly update the playback bar message and hide/show buttons when a fixed time is assigned from the settings modal.
- **Backup ReferenceError**: Fixed a `ReferenceError` in `performRemoteBackup` where `backupType` was used instead of the local `type` parameter.
- **Last Sync UI**: Fixed `Last Sync` always showing "unknown" after backup. Settings are now re-read from GM storage after a successful backup so the UI reflects the real updated timestamp.
- **Token Not Cleared from UI**: Fixed token input not being cleared from the UI modal after auto-delete in repo mode. The selector now uses the type-specific input name (`gist_token` / `repo_token`), as opposed to the non-existent `githubToken`.
- **ResizeObserver loop logs**: Silenced benign `ResizeObserver loop completed with undelivered notifications` error from being intercepted and logged. This common browser-level warning is now ignored to keep the internal error logs clean and focused on actionable script issues.

# 0.0.9-5

### Added

- **Manual save option**: Users can now toggle between automatic periodic saving of progress (enabled by default) and manual saving via a new save button. (#20)
- **Navigation blocking on Previews**: Prevented YouTube from navigating to the video page when clicking on the custom buttons (modal or manual save) placed over video previews. Added `preventDefault()` to button click handlers and a dedicated click listener to the preview UI container to ensure clicks within our UI area are captured and not bubbled up to the underlying video link.
- **GitHub Backup System**: Automated and manual backup of video progress and metadata to a private GitHub Gist or **Private Repository**, stored independently via `githubSettings`. Added informative UI messages regarding Gist privacy and the inherent behavior of secret Gists.
- **Enhanced Privacy & Repository Support**: Added support for absolute privacy using private GitHub repositories. Implemented specialized logic to verify repository privacy before any data transfer.
- **Token Auto-Destruction**: Added a security feature to automatically delete GitHub Personal Access Tokens from local storage immediately after a manual backup, minimizing credential exposure.
- **Backup Parity & Metadata**: Backup files now include internal metadata (script version, timestamp, total entries) within an internal `__metadata__` key, maintaining parity with manual JSON exports.
- **Embedded Help & Cleanup Guide**: Expanded the integrated help guide with a step-by-step backup cleanup guide (Gist/Repo deletion) and updated security warnings.
- **Security & Privacy Safeguards**: Implemented `password` style inputs for IDs and tokens, added UI warnings against sharing credentials, and truncated IDs in console logs for privacy.
- **UI Refinement**: Optimized the settings modal with tab-specific help guides and security warnings that dynamically update based on the active configuration tab.

### Fixed

- **Playlist Detection on Navigation**: Fixed a bug where the playlist ID was occasionally lost (saved as `null`) during YouTube's internal navigation ("change src" events). Added a URL-based fallback to `getCascadedVideoInfo` to ensure the playlist ID is correctly extracted from the address bar if the player state is temporarily unavailable.

### Changed

- **Update script images**: New images for README files to ilustrate current version.
- **Manual Save Mode Logic**: Refactored save functions to honor `manualSaveMode` behavior across all contexts, allowing the script to skip automatic updates when manual save is active.
- **Improved Export & Sync Logic**: Refactored the core data logic into a reusable `getSyncData` helper to support both local file export and remote synchronization.
- **DOM Helpers & Performance**: Refactored miniplayer queries and general DOM helpers for better reliability and performance.
- **Buttons opacity**: Refactored style for button pill inserted in the progress bar for better contrast and segregation of actions. (#23)

# 0.0.9-4

### Fixed

- **Playback Bar Button Visibility**: Fixed an issue (#21) where the script's button in the playback bar disappeared when the "ProgressBar Gradient" option was disabled. Essential layout CSS for the modern YouTube UI (Delhi) was incorrectly bundled inside the conditional gradient function; these styles are now correctly separated and always injected.

# 0.0.9-3

### Added

- **Trusted Types Security Bypass**: Implemented a privileged bypass for DOM injection. Shifted from unsafe `innerHTML` to a combination of `getTrustedTypesPolicy()` and a fail-safe `GM_addElement` strategy.

### Fixed

- **Livestream Progress Saving & UI Updates**: Fixed a bug in `saveStatus` where livestreams were skipped entirely failing an `!isFinite` HTML5 `<video>` duration check (livestreams have `Infinity` duration). Replaced the check with `isNaN()`. Additionally, resolved a logic bug where `saveStatus` requested UI updates using an artificial `videoType` of `'live'` instead of the layout's `actualType` (`'watch'`, `'preview'`, etc.), causing the progress button and toast notifications to silently fail for all livestreams.
- **Miniplayer Session Lifecycle**: Fixed an issue where navigating to Shorts or another page (except Watch) would aggressively destroy the active miniplayer session, forcing it to reload from storage and blindly apply a `seek` that interrupted playback. The miniplayer's session is now safely preserved across non-destructive navigation events.
- **Miniplayer Button Initialization**: Fixed a bug where transitioning from the main Watch player to the Miniplayer would fail to display the script's UI controls. Refactored `DOMHelpers.getMiniplayerActive` to use modern `.matches()` and `hasAttribute` CSS selections, ensuring the miniplayer is correctly detected and enqueued during the navigation bootstrap phase.
- **Miniplayer Activation Detection**: Fixed a bug where `isMiniplayerActive` was never updated when the miniplayer activated, because the `MutationObserver` was incorrectly listening for `class` attribute changes on `html/body` instead of the `miniplayer-is-active` attribute on `ytd-app`. The observer now correctly watches `ytd-app`, updates the internal flag on activation, and proactively re-enqueues the miniplayer video.
- **Miniplayer Button Container Fallbacks**: Restored commented-out container fallback selectors in `initMiniplayerTimeDisplay` (`.ytp-chrome-controls`, `.ytp-miniplayer-ui`, etc.) to ensure the button has a parent to attach to even when `.ytp-time-display` is absent in certain YouTube layouts.
- **Miniplayer UI Visibility**: Resolved a regression where the time display badge failed to appear in the miniplayer. Expanded control container selectors to include `.ytp-miniplayer-ui` and `.ytp-chrome-bottom` to ensure compatibility with different YouTube layouts and experiments (including Mixes).
- **Miniplayer Lifecycle Management**: Improved `MutationObserver` and `destroyMiniplayerTimeDisplay` to ensure clean DOM removal when the miniplayer is closed or transitioned, preventing "ghost" elements and memory leaks.
- **Inline Preview UI Position**: Fixed an issue where the script control button on inline previews (video thumbnails on Home) was rendered off-screen or behind the red progress bar. Injected positional CSS rules (`.ypp-inline-preview-display`) with a safe `bottom` offset to ensure visibility and clickability during hover states.

### Changed

- **saveStatus & Metadata Optimization**: Eliminated redundant `videoId` assignment and harmonized `lengthSeconds` to rounded integers (using `Math.round`) across the entire save pipeline. This ensures 100% compatibility with FreeTube's data format while eliminating redundant storage updates caused by Float/Int precision discrepancies.

# 0.0.9-2

### Fixed

- **Time Restoration Regression**: Fixed an issue where the script would occasionally save a "stale" early timestamp (e.g., 00:09) shortly after successfully resuming a video at a much later point (e.g., 20:51). This was caused by YouTube's player initialization resetting the `currentTime` during load. Introduced a 3-second grace period and "backwards jump" validation to prevent these premature saves.

# 0.0.9-1

### Added

- **Toast Manual Close**: Added a manual close (X) button to toasts with the `keep: true` option, allowing users to dismiss non-auto-removing notifications easily.
- Unified `TRANSLATIONS_EXPECTED_VERSION` and `SCRIPT_VERSION` in the script logic.

### Fixed

- **Export & Clear Validation**: Added checks to `exportDataToFile`, `exportToFreeTube`, and `clearAllData` to prevent operations on empty data. A warning toast is now shown if no relevant videos are found.
- **Toast Robustness**: Improved `showFloatingToast` to handle cases where the options object is passed as the second argument, preventing display failures when duration is omitted.
- **Playlist Selection State Reset**: Resolved a bug where the video selection UI persisted when closing and reopening the modal during playlist creation mode. Now, `isSelectionMode` and `selectedVideos` are properly reset when the modal is closed.

# 0.0.9

### Added

- **Playlist Title Fetch Fallback**: Added a last-resort fetch via Innertube `/next` endpoint to retrieve `playlistTitle` if DOM and cache methods fail. Only triggers on `watch`/`miniplayer` contexts when a `playlistId` is known but title is still missing.
- Allow auto-closing of persistent toasts when explicit duration is provided and added shrinking life progress bar to floating toasts
- Integrated `escapeHTML()` in the Settings UI refactor to ensure safe rendering of translated labels and user data.
- **_id Persistence**: Standardized all save paths and the FreeTube export format to preserve the optional `_id` field. Enforced `normalizeVideoType` on every write to IndexedDB, preventing format drift and data loss.
- **DOM Helpers Optimization**: Created centralized DOM helper functions to eliminate repetitive element lookups throughout the codebase, improving maintainability and consistency.
- **Extended Context Isolation**: Added specific helper contexts to eliminate repetitive queries for shorts and miniplayer elements.
- **Centralized AdSelectors**: Updated AdSelectors to use centralized constants, eliminating string literals and improving maintainability across ad detection logic.

### Changed

- **Performance Impact**: Reduction in CPU usage during active YouTube navigation with improved memory management, enhanced robustness, and better responsiveness.
- Separated blocking operations from non-critical background tasks.
- Moved critical UI initialization to the beginning of the initialization sequence.
- Implemented immediate button creation for watch/embed pages.
- Added temporal caching for settings to enable early UI initialization.
- **Centralized ad selectors/detector**: Consolidated repeated ad-related selectors into a single `AdSelectors` map with a small TTL-based DOM query cache. This reduces duplicated selector strings, improves maintainability when YouTube changes DOM, and avoids repeated `querySelector` calls across modules. Included homepage masthead selectors to prevent saving masthead ads.
- **Specialized Observers**: Replaced monolithic video processing with context-specific observers for Watch, Shorts, Miniplayer, and Previews. This eliminates cross-player data contamination and prevents blocking playback during background processing.
- **Session Management**: Implemented mapping to correlate video elements with their specific processing intervals, enabling precise cleanup and preventing duplicate save loops.
- **Decentralized Navigation**: Refactored navigation handlers to trigger the new observer system, ensuring consistent behavior across YouTube's complex navigation events.
- **Improved Resume Reliability**: Enhanced the resume function to fetch video duration directly from fast internal YouTube APIs rather than waiting on the slower DOM element. This prevents edge cases where the script stalls unexpectedly on `isReady`.
- **Enhanced Metadata Extraction**: Refactored information cascading to extract and consolidate `playlistTitle` directly within the video object. Every saved video now carries its playlist context independently of legacy metadata keys.
- **Improved Modal Performance**: Refactored the Saved Videos modal to utilize parallel batch loading for all entries, eliminating a sequential storage bottleneck.
- **Video Metadata Caching**: Optimized save workflows to fetch complete video metadata only ONCE per session. This prevents redundant YouTube internal API queries every second while tracking playtime progress.
- **CSP & Trusted Types Fix**: Refactored the YouTube Helper API fallback mechanism. This resolves the `Sink type mismatch` error caused by strict CSP policies.
- In `/watch` pages, miniplayer detection is now skipped entirely during navigation, eliminating unnecessary overhead.
- Replaced generic DOM scans on unknown contexts with explicit container lookups, reducing DOM traversal cost.
- Refactored seek handling to be container-isolated with AbortController cancellation, preventing cross-player seek contamination during coexistence.
- **Configurable Save Intervals**: Replaced the hardcoded save interval with the user-configurable settings.
- **Math Operations Optimization**: Implemented pre-computed caches to reduce Math and RGB calculations during progress bar updates.
- **Regex Cache Optimization**: Added compiled regex cache for view parsing.
- **Performance**: Throttled the main time update video event handlers to reduce CPU usage and UI lag.
- **Parallel background tasks**: Storage initialization, storage normalization, and data migration now run in parallel using `Promise.all()`.
- **Major initialization improvement**: Reduced button initialization delay by optimizing the sequence.
- **Theme Detection Optimization**: Replaced simple class-based theme detection with robust integration.
- **DOM Query Optimization**: Implemented intelligent caching for video element querying with a strict duration.
- **Timeout Optimization**: Reduced cleanup timeouts for quicker memory and resource release.
- **Video Modal Event Delegation**: Completely refactored the saved videos modal to use Event Delegation and explicit Template formatting to improve response times for large lists. Supported underlying virtualized rendering for seamless integration.

### Fixed

- **Modal Async Race Condition**: Fixed a critical race condition that threw a `TypeError` (can't access property `appendChild`, `listContainer` is null) if the saved videos modal was closed while loading data from storage.
- Correct meta-key filtering logic to ensure metadata is stripped properly during storage initialization.
- **Data Migration & FreeTube Integration**: Resolved legacy fields leaking into IndexedDB causing format inconsistencies.
- **Metadata Extraction (Shorts/Previews)**: Resolved an issue where view counts were overwritten incorrectly due to cascade priority logic.
- **Playlist Selection State Reset**: Resolved a bug where the video selection UI persisted when closing and reopening the modal during playlist creation mode. Now, `isSelectionMode` and `selectedVideos` are properly reset when the modal is closed.
- **ProgressBar Gradient**: Activated the custom color gradient feature for the playback progress bar.
- **Language Selection Persistence**: Resolved an issue where saving the custom language in the settings modal was ignored upon reload.
- **Discrepancy in video statistics**: Resolved the "Videos" count and "Renderizados" mismatch.
- **Shorts Panel Detection**: Resolved an issue where panels were not detected due to outdated DOM selectors in the Shorts interface.
- **Stale Visit Count on Shorts**: Fixed a delay where the view count displayed stale data from the previous Short.
- **Incorrect Ad Detection for Grid Ads**: Fixed a logic error where grid-based ads were processed incorrectly.
- **Miniplayer Context Race Condition**: Resolved a massive SPA race condition where videos played via miniplayer auto-advance loaded too fast for YouTube APIs to populate IDs.
- **Storage usage display**: Resolved a race condition where the used/total space indicator would fail to appear.
- **Shorts Resume Stalling**: Fixed a bug where Shorts videos failed to resume saved playback points.
- **Homepage/Grid Ads Saved as Regular Videos**: Fixed a bug where auto-played masthead ads were inaccurately saved as legitimate.
- **Coexistence Ad Blocking Bug**: Fixed critical race condition where ads in Shorts would prevent miniplayer from saving, and vice versa.
- **Fixed zombie loop after navigation**: Prevented an infinite seek retry loop when navigating from watch to home.
- **Theme Detection**: Fixed `ReferenceError: isLightTheme is not defined`.

### Removed

- **Removed Dead Code**: Deleted the legacy `processVideo` and `determineVideoContext` functions, significantly reducing script complexity (~5000 lines).
- **Removed Dead Navigation Handlers**: Removed unused preparation functions and dead variables.
- **Deprecated Legacy Metadata Logic**: Removed obsolete playlist metadata polling paths.
- **Refining Polling Logic**: Eliminated hundreds of lines of redundant DOM polling intervals, moving purely to event-driven updates.

# 0.0.8

### Fixed

- Fixed inline preview (sticky reflow) saves being misclassified as `video` instead of `preview_*`, which caused the Saved Videos modal `preview` filter to show no results for those entries.
- Fixed `preview_*` saves downgrading already-classified entries: if a video was already saved as `video`/`shorts`/`live`, hovering it again in homepage inline preview no longer changes its `videoType` back to `preview_*`.
- Fixed stale `preview_*` type leaking into dedicated pages: navigating from homepage preview to `/watch` or `/shorts` no longer keeps saving as `preview_*` due to a sticky `currentType`.
- Fixed FreeTube export short detection/counting to use internal types (`shorts`, `preview_shorts`) instead of the non-existent legacy `short` type.

- **Live Badge Hidding Button**: #12
  - Fixed YouTube "En vivo" (Live) badge being forced visible on non-live videos in the Delhi UI by restricting layout rules to the real livehead badge (`.ytp-live-badge-is-livehead`).
  - Fixed script time button styling/regression in Delhi UI (pill shape + overflow) by preventing flex stretching and enforcing consistent pill dimensions.
  - Fixed live/DVR mode detection for UI adjustments by using script-side detection (adds `ypp-is-livestream` when `.ytp-live-badge-is-livehead` is present), avoiding unreliable `.ytp-live`.

- **Fixed & Improved Data Migration System**:
  - Validated and normalized `videoType` during migration: Legacy types ('watch', 'regular', 'normal') are now correctly converted to 'video' or 'shorts'.
  - Fixed issue where data migrated from older versions would default to 'regular' type (invalid), making them invisible in filters.
  - Optimized migration performance by removing redundant `localStorage` reads when data is already in IndexedDB.
  - Implemented prefix stripping for migrated keys to ensure consistency with the new Storage system (keys no longer have double prefixes).
  - Added a "rescue" phase to `migrateToFreeTubeFormat` to recover any legacy data that might have been missed by the initial `StorageAsync` migration.
  - Updated `fromFreeTubeFormat` to correctly normalize imported video types.

- **Fixed Shorts author displaying as "Desconocido" (Unknown) in saved videos modal**:
  - `getVideoAuthor` now uses `extractShortsMetadata().author` as primary source for Shorts (consolidated metapanel search)
  - Added new DOM selectors for YouTube's updated Shorts channel name layout (`ytd-channel-name`, `yt-formatted-string`)
  - `getVideoInfo` now enriches author/authorId from `fetchWatchMeta` when DOM selectors fail for Shorts
  - Expanded Shorts authorId block to also fetch author and authorId from watch page JSON, not just views

- **Fixed infinite loading state in Saved Videos modal on Chrome/Edge**:
  - Solved cross-browser issue with `IDBRequest.result` access timing in `IndexedDBAdapter`.
  - Fixed `StorageAsync.get()` cache-miss fallback using incorrect property path (`entry?.value`).
  - Added missing `await` for `GM_listValues`/`GM_getValue` in migration logic for Tampermonkey.
  - Fixed `ReferenceError: modalVideoTitleById is not defined` preventing video list rendering.
  - Fixed data migration issue where legacy keys retained `YT_PLAYBACK_PLOX_` prefix, causing imported data to be invisible to the new version. Existing corrupted migrations will be auto-corrected.

- **Fixed legacy playlist metadata keys (`YT_PLAYBACK_PLOX_playlist_meta_*`) not being migrated/cleaned up**:
  - Legacy playlist metadata is now merged into new `playlist_meta_*` entries when present.
  - Old `localStorage`/GM keys are removed after migration to prevent leftovers.

- Fixed legacy key cleanup in Violentmonkey leaving `null` entries by using `GM_deleteValue` when available instead of `GM_setValue(key, null)`.
- Fixed Saved Videos modal crash when corrupted storage entries (non-object values) existed by hardening `fixThumbnailsInStorage()`.
- Fixed thumbnail normalization mistakenly treating `ypp_*` migration/meta keys as corrupt entries (they may be numeric) by excluding them from `fixThumbnailsInStorage()`.
- Fixed `ypp_*` migration/meta keys appearing as fake "Unknown" videos in the Saved Videos modal by excluding them from Storage key enumeration.
- Fixed settings not loading correctly in some userscript managers where `GM_getValue` may return an object (not a JSON string), which caused toggles like inline previews to appear unchecked.
- Fixed browser language auto-detection (option B): it now applies only when the user never explicitly set a language, instead of being blocked by merged defaults.
- Fixed `[object Object]` notification during data migration by correcting `showFloatingToast` calls and updating translation helper `t()` to support default fallback text.
- Fixed language selection inconsistency where the modal showed English as selected despite the interface being in Spanish. The issue occurred when `hadLanguageInStorage` was true but the stored language didn't match the browser's detected language. Now `cachedSettings.language` is always updated with the detected language and saved when different.
- Fixed miniplayer/home playlist association by validating playlist anchors against the current video ID before persisting a playlist.
- Fixed Mix (RD...) playlist headers in the saved videos modal to display `Mix - {video title}` when the title is missing.
- Fixed Mix (RD...) playlist headers/titles in the saved videos modal to remain stable by using the Mix seed video (RD{videoId}) title when available.
- Throttled playlist title HTTP fetches when titles are generic to reduce repeated network requests and improve load performance.

- **QuotaExceededError prevention**: 
  - No more automatic data deletions
  - IndexedDB provides orders of magnitude more storage than localStorage
  - Existing user data is preserved during migration
  - Eliminates storage-full errors that caused data loss

- Fixed missing brace in `getProgressColor` that caused a syntax error and prevented the script from loading
- Fixed `TypeError: allKeys is not iterable` during StorageAsync initialization by properly awaiting `Storage.keys()` and `Storage.get()` calls
- Fixed `TypeError: (intermediate value).filter is not a function` in `fixThumbnailsInStorage` by making it async and awaiting Storage operations
- Fixed infinite recursion during StorageAsync initialization by using direct GM_listValues/localStorage access during migration instead of the Storage API
- Fixed `TypeError: can't access property Symbol.iterator, allKeys is undefined` by ensuring allKeys defaults to an empty array when GM_listValues/localStorage are not available

- Fixed all remaining synchronous calls to async Storage API methods:
  - Made `getSavedVideoData`, `updateVideoList`, and `createVideoEntry` functions async
  - Added `await` to all `Storage.get()`, `Storage.set()`, `Storage.keys()`, and `Storage.del()` calls
  - Updated all callers of async functions to properly await them

- Improved miniplayer/shorts coexistence handling
  - Context validation ensures correct type assignment
  - Prevents saving shorts data with miniplayer context and vice versa

- Fixed duplicate `processVideo` calls when changing videos
  - Moved `currentlyProcessingVideos` Set to module level (was being recreated on each call)
  - Added `isProcessingVideoChange` flag to prevent multiple handler triggers
  - Added cleanup of processing state in `finally` block to allow Shorts navigation
  - Progress saving now correctly resumes after video navigation

- Fixed FreeTube export format #15
  - Now uses `type: "video"` for ALL formats (Videos & Shorts), matching standard FreeTube database format 

- Added storage error handling for quota exceeded errors:
  - Storage.set() now returns success/failure status
  - All save functions check for storage errors and propagate them
  - User sees "Storage full" notification when save fails due to quota
  - Prevents false "Progress saved" notifications when storage is full

- Improved Shorts/Preview detection at start
  - Lowered minimum save time from 1s to 0.1s for Shorts/Previews to prevent "invalid_data" errors on load
  - Adjusted handler threshold for previews to 0.5s (was 1s)
  - Fixed 5s delay on initial Short load by optimizing navigation handler
  - Resolved race condition where settings weren't loaded before processing initial video
  - Reduced console log verbosity and removed debugging artifacts
  - Fixed issue where some Watch videos were incorrectly saved as "preview" (missing view counts) due to aggressive inline detection
  - Fixed "N/A" view counts by preventing stale inline preview handlers from persisting on Watch pages

- Fixed critical video detection bug where playing videos were misclassified as previews
  - Reordered detection priorities in `detectContentType()`: miniplayer and watch page now have higher priority than preview detection
  - Added strict validation for preview classification: requires actual preview DOM context, not just `currentType` metadata
  - Videos in watch page or miniplayer are now correctly identified as regular videos and save properly
  - Prevents "preview_disabled_by_settings" error for actively playing videos

- Fixed erroneous playlist assignment by strictly requiring that detected video links originate from within a valid player container (e.g., `#movie_player`), effectively ignoring all external links such as sidebar recommendations.
- Fixed issue where playlists linked in the video description or info panels (#anchored-panel) were incorrectly assigned to the video, specifically blocking this aggressive scraping on standard Watch pages.
- Fixed "zombie" playlist persistence: The script now actively clears old playlist associations from storage if the current video is opened in a clean Watch page (no playlist in URL), preventing the recurrence of incorrect playlist assignments from past sessions.
- Implemented strict "First Level Validation": The script now strictly bypasses all playlist detection logic if the current page is a standard Watch page (`/watch`) and the URL lacks a playlist parameter. This effectively eliminates incorrectly assigned playlists from miniplayers or sidebars.
- Fixed erroneous playlist assignment by enforcing strict player container validation in all detection routines (init & save), completely blocking sidebar Mix recommendations.
- Fixed "Videos" filter missing items captured from Home/Search/Channel contexts.
- Fixed the "Videos" and "Previews" filters in the saved videos list not showing all relevant entries. Improved filtering logic to correctly handle legacy data (missing video type) and variations like embedded videos.
- Fixed critical bug where the script would erroneous assign random playlists found in the DOM (e.g. from side panels or previous sessions) to the current video. Now strictly validates that any scraped playlist link matches the current video ID.
- Fixed issue where new videos opened from Home would incorrectly inherit the playlist ID of the previous video or miniplayer session.
- Fixed issue where Shorts and videos would sometimes not save progress because the `isResuming` flag got stuck in a `true` state during rapid transitions or miniplayer usage.
- Fixed a potential deadlock in video processing by ensuring `currentlyProcessingVideos` set is properly cleaned up when handlers are removed.
- Fixed Shorts and videos not saving due to processing deadlock
  - Added cleanup of `currentlyProcessingVideos` Set in all early return paths in `processVideo()`
  - Prevents videos from being permanently blocked when they return early (disabled types, live streams, previews)
  - Videos can now be reprocessed after configuration changes or page navigation

- Fixed a concurrency issue where a video handler could try to re-process a video that was already being processed by a new navigation event
  - Prevents "video already being processed" deadlock loops in logs
  - Improves stability when switching videos rapidly in playlists or homescreen

- Fixed playlist ID not saving for regular videos (non-Mix playlists) by correctly tracking playlist source in `updateStatus`.
  - Ensured playlist detection from URL and page anchors is correctly prioritized and persisted. #11
- Fixed a critical bug where user-created playlists were displaying IDs instead of Titles in the saved videos modal.
  - Added missing `await` in `updateStatus` ensure playlist metadata is updated during video saves.
  - Removed "Mix-only" restriction when fetching playlist names; now all playlist types are processed.
  - Added request deduplication in `getPlaylistName` to prevent redundant network calls.
  - Implemented a proactive metadata refresher in the modal that fetches missing titles for previously saved videos.
  - Further refined `getPlaylistName` with more robust DOM selectors and better YouTube JSON structure parsing.

### Added

- Added storage usage indicator to the Saved Videos modal using `navigator.storage.estimate()` to show current usage vs quota (includes IndexedDB). #16

- **Miniplayer saving toggle**: New setting to control saving when videos are in miniplayer
  - Default enabled to preserve existing behavior
  - Miniplayer saves are now treated as regular watch videos when enabled

- **Virtual DOM Scrolling for Saved Videos Modal**: Major performance optimization for users with thousands of saved videos
  - New `VirtualScroller` class that renders only visible items (~20-30) instead of all items at once
  - Batch loading of storage data in parallel chunks (50 items per batch) to prevent UI freezing
  - Dynamic stats bar showing total videos count and currently rendered items
  - Loading indicator during initial data fetch
  - Proper cleanup of virtual scroller resources when modal closes
  - Buffer system renders extra items above/below viewport for smooth scrolling
  - CSS updates for fixed-height video items (120px) to enable precise positioning

- **IndexedDB Storage Backend**: New storage layer to eliminate quota errors #16
  - Primary backend: IndexedDB with significantly larger storage capacity
  - In-memory cache for synchronous access and performance
  - Automatic migration from localStorage/GM on first run (preserves existing data)
  - Fallback support for environments without IndexedDB
  - Migration flag (`idb_migrated`) prevents repeated migrations
  - Diagnostic API (`Storage.getBackendInfo()`) for troubleshooting

- **VideoTypeHandler module**: Strategy pattern for video type handling
  - Centralizes configuration validation (saveShorts, saveRegularVideos, etc.)
  - Provides context validation to prevent miniplayer/shorts data contamination
  - Supports VIDEO, SHORTS, PREVIEW, and LIVE content types
  
- **VideoInfoFacade module**: Unified interface for video metadata extraction
  - Automatic context detection (shorts, miniplayer, watch, preview)
  - Context-aware extraction strategies to prevent data contamination
  - Consistent return structure with title, author, duration, thumbnail, etc.

- Added option to remove playlist association from a saved video in the list view #13
  - Allows decoupling a video from a playlist while keeping individual progress
  - New button with folder/unlink icon in the video entry card

- New translations to all language sections in translations.json

### Changed

- **Storage API**: Now fully asynchronous to support IndexedDB
  - `Storage.set/get/del/keys()` now return Promises
  - Legacy synchronous calls updated throughout the codebase
  - Internal caching maintains responsiveness for frequent reads
  - Import/export and progress saving now use IndexedDB

- Refactored `saveVideoDataByType()` to delegate to VideoTypeHandler
  - Eliminated duplicated validation logic

- Updated `isAdBlockedFor` calls to use 'video' instead of 'watch' for better semantic consistency.
- Youtube Helper API to version 0.9.4

# 0.0.7-2

perf: reduce verbose debug logging in progress and status handlers

# 0.0.7-1

## Added

- SVG for "unlocked."
- The alert during fixed time setup now shows the minimum and maximum time available.
- Translations for "live".
- Clamp of the fixed time (`forceResumeTime`) when resuming playback if the value exceeds the actual duration of the video/short.
- Validation of the fixed time entered from the saved video list so that, if it exceeds the actual duration of the video/short, an error message is displayed and the value is not saved.

## Changed

- Bumped version of "YouTube Helper API" backup 0.7.2 to 0.7.5
- The external translation system now invalidates the cache not only by TTL (6 hours) but also when the `VERSION` of the `translations.json` does not match the constant `TRANSLATIONS_EXPECTED_VERSION` in the userscript.

## Fixed

- If the time used for "fixed time" exceeded the duration of the video, the script would no longer save after loading.
- Livestreams were being wrongly tagged as "watch."

# 0.0.7

## Added
- Option to set a percentage to consider a video as "completed".
- Compatibility with FreeTube history importing and exporting.
- Migration function for the new format and compatibility with FreeTube from now on.
- Filter for videos with a fixed playback time.
- Fallbacks and validations for thumbnail loading.
- Dark mode theme.
- Support for saving while the miniplayer is playing on the homepage.
- Progress bar color now matches the percentage viewed (can be disabled).
- Function to generate a unique playlist color based on a name hash.
- Option to share public playlists from saved videos.
- YouTube Helper API: https://greasyfork.org/es/scripts/549881-youtube-helper-api
- Translations for new items/menus.
- More logs and comments.
- New user setting `saveInlinePreviews` (default: off).

## Changed
- The message that displays the saving status on the player progress bar now also serves as a button to open a modal showing saved videos — in both regular and Shorts modes.
- Emojis have been replaced with SVGs in the UI.
- Saving progress in Shorts is now displayed below the video information, so when comments are toggled, it remains inside the player itself.
- Complete UI redesign for a more “YouTube-like” look and feel.
- Improved ad detection.
- Message for saving progress now doubles as a button to open the config modal.

## Deprecated
- `createAdMonitor`
- `observerTasks`
- `ObservePlayer`
- `ObserveShorts`
- `exportDataToFile`
- `importDataFromFile`
- `showInitRetryToast`

## Removed
- “Locked” emoji on translations, now replaced with an SVG.
- Emojis from the UI (in most places) to use SVGs.

## Fixed
- Livestream detection. Lives with URLs of the type `/watch` now correctly get flagged as "live" using the YouTube Helper API or by detecting its metadata to determine whether the content is a regular video or a live stream.
- If an ad was playing during miniplayer viewing, it could stop saving

# 0.0.6-6

Will the translated metadata work this time?

# 0.0.6-5

Refactor metadata for greasyfork translations compatibility - Part II

# 0.0.6-4

Refactor metadata for greasyfork translations compatibility

# 0.0.6-3

Removed blank lines on metadata
Supposedly greasyfork cannot read and translate with the blank spaces there...

# 0.0.6-2

## Added
- Translations for:
	- en-US
	- es-419
	- zh-TW
	- zh-HK

## Change
- Improve language detection for format ISO 639-1 + ISO 3166
- Ensure initialization logic uses saved language if valid, otherwise fallback to detected browser language or default.
- Order of @name and @description tag in metadata to match order in translations.json

## Remove
- Unused updatePlaylistVideo function

# 0.0.6-1

fix: missing country codes in metadata

# 0.0.6

## Code Optimization & Refactoring
- Add helper functions to eliminate code redundancy:
  - [getSavedVideoData()]: unified video data retrieval (playlist/individual)
  - [updatePlaylistVideo()]: centralized playlist video updates
  - [callResumeWithDelay()]: consistent resume handling for shorts/regular videos
- Reduce duplicated code across multiple functions
- Bumped version to 0.0.6 in metadata files.

## Bug Fixes
- **Force time persistence**: Videos with `forceResumeTime` now retain their fixed start time even after completion
- Fixed issue where fixed time configuration was deleted when video reached the end
- Modal now displays both "fixed time" and "completed" states simultaneously with gradient styling

## Playlist Improvements
- Playlist headers in modal now link to last watched video instead of playlist page
- Fixes broken links for Mix playlists (e.g., RDTAECb8D3EjE)
- Pass `lastWatchedVideoId` to playlist items for proper URL construction

### Completed Videos Filter
- Add "Completed" filter option in modal to view only finished videos
- Allows users to quickly access their watch history of completed content
- Complements existing "All", "Videos", and "Playlist" filters

## New Feature: Clear All
- Add "Clear All" button to modal footer with danger styling
- Includes confirmation dialog before deletion
- 10-second undo toast notification with action button
- Backup all data before clearing to enable restoration
- Preserve user settings during clear operation

## Translations
- Add translations for clear all feature in 48 languages:
  - `clearAll`, `clearAllConfirm`, `allItemsCleared`, `undoClearAll`
- Update translations.json metadata (version, author, links)

## Styling
- Add `.ypp-btn-danger` CSS class for destructive actions
- Add `.ypp-timestamp.forced.completed` gradient style for dual-state videos
- Improve visual hierarchy with hover effects on danger buttons

# 0.0.5

Add logging system and improve player detection

Added a global logging system for improved debugging and error reporting.

Updated translations.json to remove unnecessary punctuation and ensure consistency.

Refactored notification and toast logic, enhanced UI element creation, and updated default minimum save interval.

Added ad detection before execution.

Ensured progress is saved by vid even when plId exists, preserving playback position in dynamic Mix playlists (RD…).

Bumped version to 0.0.5 in metadata files.

Fixed an issue where videos in dynamic Mix playlists did not resume at the saved timestamp.

Resolved https://greasyfork.org/es/scripts/553387-youtube-playback-plox/discussions/313165

# 0.0.4

Added compatibility with TrustedHTML

change translations to json

# 0.0.3

Added translations + visual options
https://greasyfork.org/es/scripts/553387-youtube-playback-plox/discussions/313059

# 0.0.2

Enhanced the README with new features, installation links, and screenshots. Added four example images to the repository. Updated Todo.md to reflect completed tasks. Improved youtube-playback-plox.user.js with multi-language metadata, playlist name caching, UI/UX improvements, and new settings for video types. Updated CSS for modal and video list enhancements. Bumped script version to 0.0.2 and added GM_xmlhttpRequest grant. Minor code refactoring.

# 0.0.1

Initial commit