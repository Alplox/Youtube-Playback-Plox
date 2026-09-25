# Gotchas & Troubleshooting

## Specialized Observers Architecture

### What Changed

- The script now uses dedicated `MutationObserver` instances for each video context (Watch, Shorts, Miniplayer, Preview).
- **Session Management**: Active sessions are stored in a `Map<HTMLVideoElement, Session>`. This allows the script to iterate over all active videos for global cleanup during navigation or error states. Cleaning is explicit via `SessionOrchestrator.finalizeSession()`.
- **State Machine**: Sessions now follow a strict state machine (`starting` → `active` → `stopping`, etc.). If a session enters the `finalized` state, it is considered dead and its interval/listeners are destroyed.

### Common Behaviors

- **Save Interval**: Progress is saved every **1-2 seconds** by default (configurable in Settings).
- **Automatic Cleanup**: If a video element is removed from the DOM or hidden (0 width/height), the session is terminated.
- **Ad/Script Pause**: Observers are active watchers, but they will respect global pause states (like during ads) before attempting to save to storage.
- **Abortable Listeners**: Each session has its own `AbortController`. Event listeners added during a session are automatically removed when the session ends.

## Storage Backend Migration (IndexedDB + GM)

### What Changed

- The script uses **IndexedDB** as the primary video backend and **GM storage** as the durable fallback/bridge.
- GM video writes are reconciled with IDB by `timeWatched`; a cache-only success is never treated as persistence.
- Legacy `localStorage` entries are rescued/cleaned during migration, but localStorage is not the runtime fallback.

### Migration Behavior

- **First run**: Script detects legacy localStorage/GM data and migrates eligible video records to IndexedDB.
- **Migration flag**: The consolidated `YT_PLAYBACK_PLOX_migrationVersion` key prevents repeated normalization only after all keys succeed.
- **No data loss**: Legacy source entries are retained until their migration/backup step is confirmed.
- **Fallback**: If IndexedDB is unavailable or fails, video data is written to GM storage when the manager exposes it.

### Schema Migration (v5)

- **Automatic Type Normalization**: Legacy `videoType` values ('watch', 'regular') are automatically converted to 'video' or 'shorts'.
- **Prefix Cleanup**: Migrated keys are stripped of the `YT_PLAYBACK_PLOX_` prefix in IndexedDB for consistency.
- **Rescue Mode**: The script actively checks for and rescues any legacy data that might have been missed during the primary storage migration.

### Troubleshooting Storage Issues

#### Zombie IndexedDB connection ("Error in IndexedDB queue")

If a browser tab stops saving/resuming until reload and the console logs repeated `Error in IndexedDB queue ... runInStore/IndexedDBAdapter`, the cached `IDBDatabase` connection was left in a dead state (e.g. another tab triggered a `versionchange`, or storage was evicted/cleared). `openDatabase()` now registers `db.onclose`/`db.onversionchange` to invalidate `dbPromise` so the next operation reopens the connection. If this recurs with no `onclose`-related cause, check for `QuotaExceededError` (storage full - a user data problem, not a bug) - the "storage full" toast shows the real browser error since 0.0.12-4.

#### Reading storage error logs (since 0.0.12-5)

The in-script error log and copied logs now include the error type, so you can tell the failure mode from the first line:

- `Database open failed` at load → `indexedDB.open()` itself fails: corruption, blocked storage permissions, or a browser bug. Check the copied log header/`StorageAsync.getBackendInfo()` when available, Firefox `about:storage` for site usage, and test with a clean profile.
- `Error in IndexedDB queue (InvalidStateError | TransactionInactiveError)` → dead/closed connection mid-session, now self-healing via `onclose`.
- `Error in IndexedDB queue (QuotaExceededError)` → storage full; persists after reload until data is freed. Clear via `indexedDB.deleteDatabase('YTPlaybackPloxDB')` + reload (loses saved data).

#### Log header diagnostics (since 0.0.12-6)

The copied log header now carries extra lines for triage:

- `Userscript Manager: Tampermonkey vX.Y` (from `GM_info.scriptHandler` + `GM_info.version`).
- `YouTube Client: <InnerTube version>` — correlates "stopped working" with a YouTube update.
- `Safe Mode: ACTIVE` → `FailSafeManager` detected repeated invalid transitions/invariant failures. It changes selected transition branches to safer finalize-and-requeue behavior; it is not a global storage kill switch.
- `Active Sessions: N` — if N is 0 while a video is playing, the session engine never started (detection problem, not storage).
- `IDB: open OK, v1, store 'savedVideos' (N entries)` → storage healthy. `IDB: open OK, store MISSING` → store vanished (corruption/partial clear). `IDB: open FAILED (name: message)` → `indexedDB.open()` rejects (corruption/permissions/version lock); since the open retries on every operation, a FAILED here is persistent, not a zombie.
- `Persistent storage: granted/denied/unknown` → result of `navigator.storage.persist()`. `diagnose()` also reads the current `navigator.storage.persisted()` state.
- `Storage usage: X / Y MB` → `navigator.storage.estimate()`; if usage approaches quota, expect `QuotaExceededError`.

Things that **cannot** be auto-detected and must be verified manually: expand the error in DevTools (F12) for the real `DOMException.name`, check `about:preferences#privacy` for Strict Tracking Protection affecting youtube.com storage, and reproduce in a clean Firefox profile / normal (non-private) window.

#### Check Storage Backend Status

The internal storage layer exposes diagnostics through the copied log header. If debugging in a console context where the userscript scope is available, use `StorageAsync.getBackendInfo()` (not the public `Storage` wrapper):

This returns:

- `ready`: Whether `StorageAsync` is initialized
- `indexedDBSupported`: Browser IndexedDB support
- `activeBackend`: `idb`, `gm`, or an initialization fallback state
- `durableFallback`: Whether GM is currently the durable backend
- `cacheSize`: Number of items in the bounded memory cache

#### Force Re-migration

If you need to re-run normalization, reset the consolidated GM migration key in a userscript-manager storage editor, then reload. Do not delete video records just to trigger migration.

#### Clear IndexedDB (Reset)

```javascript
// Destructive: export first, then delete the entire IndexedDB database.
indexedDB.deleteDatabase('YTPlaybackPloxDB');
// Reload page; GM fallback/migration data is reconciled on startup.
```

### Performance Notes

- **Cache hits**: Most reads hit the in-memory cache (very fast)
- **Writes**: Asynchronous but queued to maintain order
- **Initial load**: Slightly slower on first run due to migration

### Playlist Title Fetch Cooldown

- If a playlist title resolves only to its ID (e.g., Mix `RD...`), the script waits before retrying the HTTP fetch.
- This reduces repeated network requests and improves page load performance.
- **Expected behavior**: The header may temporarily show the playlist ID until the cooldown expires.
- **Manual test**: Open the saved videos modal with a Mix playlist, confirm only the first open triggers a playlist request, then reopen within 15 minutes to ensure no new request fires.

### Mix (RD...) Stable Titles

- Mix playlists (`RD...`) use the **seed video** (`RD{videoId}`) title when available in your saved list, so the playlist header doesn't change when you scroll/sort.
- If the seed video isn't present in saved entries, the script falls back to the first visible item's title for that Mix.

### Browser Compatibility

- **Chrome/Edge**: Full IndexedDB support
- **Firefox**: Full IndexedDB support
- **Safari**: IndexedDB supported, but may have lower quotas
- **Private mode**: IndexedDB may be disabled; video writes use GM storage when available

### Data Recovery

If something goes wrong during migration:

1. Export a JSON backup before changing storage.
2. Inspect legacy localStorage/GM entries only as migration sources; they are not the current runtime store.
3. Reset the consolidated migration key and reload to retry normalization.
4. Use the Import/Export feature to restore data if normalization cannot complete.

## Common Issues

### Progress bar color after YouTube SPA video changes

- YouTube may replace the `.ytp-progress-bar` / Shorts progress host DOM node during a video change even when the computed progress color is identical to the previous video.
- `updateProgressBarGradient()` must treat a new progress container as requiring a fresh `--ytp-progress-color` application; color-only memoization can leave the new node at YouTube's/default color.
- Memoization must include `videoId`, not only container reference and color - two different videos at the same percentage (e.g. both at 0%) must still trigger a repaint.
- Do not store gradient memoization on `window` if resets clear module-scoped variables; use a single `progressGradientState` object per context.
- While the miniplayer is active on `/watch`, do not paint the main `#movie_player` progress bar from a watch session - the bar is hidden but keeps inline `--ytp-progress-color`, which leaks when the user expands another video. Reset all gradient state on miniplayer open/close, finalize watch sessions when miniplayer activates, and schedule a forced repaint (`requestAnimationFrame` ×2) after expand.
- Starting a new video in miniplayer must finalize any other active session of the same context (`supersededByNewVideo`); otherwise the previous video's interval can keep saving and painting the shared progress bar.
- User seeks must call `refreshProgressBarGradientForSession()` on `seeking`/`seeked`, not only inside `saveStatus` - backward jumps after a context change often hit save guards (`player_reset_detected`, `paused_no_seek`) before the gradient block at the end of `saveStatus`.
- Livestreams are tracked as `watch` sessions with `finalType: 'live'` - never call `updateProgressBarGradient` for live playback (`isLivePlaybackForGradient()`). DVR seek position must not be interpreted as VOD completion %. Reset gradient when live is detected via metadata or `.ytp-live` on the player.
- `resetProgressBarGradient()` must clear **all** context entries in `progressGradientState`, not only the requested type - watch and miniplayer often share the same `.ytp-progress-bar` node.
- Setting `--ytp-progress-color` only on `.ytp-progress-bar` may not change what you see: the injected rule defaults to `#ff4533` and YouTube paints via `.ytp-play-progress`. Always set inline `background` / `background-color` on `.ytp-play-progress` (and hover/scrubber targets) inside the active `#movie_player`.
- YouTube can also reuse the same player element (and progress bar container) when transitioning between videos. In this case, since the container persists, it retains the inline `--ytp-progress-color` style (e.g., green for completed). The script clears this style property and resets the internal color cache variables upon starting and finalizing tracking sessions, preventing the old color from leaking into a new video.
- When transitioning from Miniplayer to the Watch page (regular player) or vice versa, the script now uses context-aware selectors (`getWatchPlayer()` and `getMiniplayerPlayer()`) and separate cache variables (`progressGradientState.miniplayer`, `progressGradientState.watch`) to ensure it styles the correct progress bar container for that active session and does not cause cache collision or color loss. Additionally, colors are now applied immediately on session start and seek resume, avoiding any visual delay.

### Unified video processing router

- `processMediaVideo(videoEl, type)` is now the single entry point for Watch, Shorts, Miniplayer, and Inline Preview processing.
- Context-specific behavior lives in `PROCESS_MEDIA_VIDEO_CONFIG`. Keep SPA URL/player ID validation for Watch and Shorts, local-player ID priority for Miniplayer, and debounce/miniplayer-conflict/ad-ID checks for Preview inside those hooks.
- Do not reintroduce separate `processWatchVideo`, `processShortsVideo`, `processMiniplayerVideo`, or `processPreviewVideo` functions unless a context needs a genuinely separate lifecycle.

### Unified saving engine (v0.0.11)

- `internalSaveVideoGeneric(player, currentTime, videoInfo, videoEl, finalType, logContext, options = {})` is the single saving interface. Do not write or restore separate `saveRegularVideo`, `saveMiniplayer`, `saveShortsVideo`, `savePreview`, or `saveLivestream` functions. All contexts are routed through `internalSaveVideoGeneric` with appropriate parameter flags.

### Playback display manager

- `PlaybackDisplayManager` owns player button-group identity, message priority, timeout cleanup, fixed-time display state, manual-save button targeting, and seek `play` listeners for Watch, Shorts, Miniplayer, and Preview.
- Legacy per-context message wrappers were removed; notification and cleanup paths should call `PlaybackDisplayManager.show()`, `PlaybackDisplayManager.clear()`, `PlaybackDisplayManager.destroy()`, or the existing `notifySeekOrProgress()` facade directly.
- Fixed-time and saved-state UI sync should target active sessions by `videoId` instead of scanning every display/player pair. If no active session exists, the next session will rebuild the UI from saved data.

### Live Content Visibility

- On Live streams, the script now forces both the "Live" badge and the original YouTube time current/duration to be visible alongside the script's injected button.
- **Why**: YouTube often hides these elements when it detects custom modifications in the time display area; forcing them back ensures a complete UI experience.

### Miniplayer progress not saving or UI not updating

- Check **Settings → Enable saving for → Miniplayer videos**
- When disabled, videos playing in miniplayer are treated as non-saveable.
- **UI Update (Fixed in 0.0.9-3)**: Previously, navigating to the Shorts page would freeze the miniplayer time display. The script now allows concurrent UI updates for both contexts.
- **Session Recovery on Video Change (Fixed in 0.0.9-11)**: YouTube can change the miniplayer's active video without mutating the `<video>` element's `src` attribute (API-driven swap). The interval kill-switch detects `hasIdChanged` and kills the session, but the MutationObserver's src-change path never fires → no re-enqueue. The fix adds the `requeueMiniplayer()` bridge in `VideoObserverManager` so the kill-switch can self-heal by re-enqueueing the element for the new video.
- **Anti Re-Seek Cooldown (Fixed in 0.0.9-11)**: `shouldSkipResumeForActivePlayback()` To prevent annoying playback jumps during rapid navigation (e.g. going from Search to Home while the Miniplayer is active), the script enforces a **5-second cooldown** for `resume()` attempts on the same video element.

### "Storage.set full" Errors

- **Before**: Required manual cleanup or caused data loss
- **Now**: Should not occur with IndexedDB, but GM fallback can also report quota errors
- **If it happens**: Check the copied log header / `StorageAsync.getBackendInfo()` and free space in the active backend.

### Slow Initial Load

- **Cause**: Migration of existing data to IndexedDB
- **Solution**: One-time operation; subsequent loads are fast
- **Large datasets**: Migration may take a few seconds

### Data Not Persisting

- **Check**: IndexedDB support and the active backend in the copied log header
- **Check**: No errors in console during save operations
- **Try**: Reload page and check if data persists

### Import/Export Issues

- **Format**: Still uses JSON/FreeTube formats
- **Storage**: Saves to IndexedDB with GM fallback; legacy localStorage is only a migration source
- **Compatibility**: Existing exports still work

## Advanced Usage

### Direct IndexedDB Access

For debugging or advanced usage:

```javascript
// Access the IndexedDB adapter
const adapter = IndexedDBAdapter;
// Check if supported
if (adapter.isSupported) {
    // Get all entries
    adapter.getAllEntries().then(console.log);
}
```

### Storage Statistics

```javascript
// Internal userscript scope; the copied log header exposes the same values.
const info = StorageAsync.getBackendInfo();
console.log(`Backend: ${info.activeBackend}`);
console.log(`Durable fallback: ${info.durableFallback}`);
console.log(`Cache size: ${info.cacheSize} items`);
```

### FreeTube Integration

- **Deduplication on Import**: FreeTube v0.23.15 Beta allows multiple entries for the same video in its history (using `_id`). The script collapses these entries to maintain its single-entry-per-videoId model, always keeping the one with the most recent `timeWatched`.
- **JSON-L Format**: The `.db` files exported by FreeTube are now NDJSON (one JSON line per object). The script handles this automatically in both import and export.

## Obsidian Integration Tool

### Usage in Local Environments (`file://`)

- **No Dependencies**: The tool at `tools/playback-to-obsidian.html` is fully self-contained. It does not require an internet connection or a web server to function.
- **CORS/Network**: Previously, the tool used a CDN for ZIP generation which failed in the `file://` protocol. This has been fixed with an **inline ZIP builder** (MiniZip).

### ZIP Export vs Single File

- **ZIP Mode (Recommended)**: Best for **Obsidian Bases**. It creates one file per video. If you have 1000 videos, you get 1000 small files. This allows Obsidian to sort and filter each video as a separate database entry.
- **Single File**: Best for quick reference or archival where you just want a long list of videos in a single note.

### Troubleshooting Converter

- **"Generando..." stuck**: This usually happened due to a script error or a missing dependency. The new version (0.0.9-6 logic) includes a global `try-catch` to prevent the UI from freezing. If it fails, check the browser console (`F12`) for the specific error.
- **Large Backups**: Converting thousands of videos into a ZIP may take a few seconds (usually < 2s). The browser might appear to lag slightly while building the ZIP Blob in memory.
- **Filenames**: The tool automatically sanitizes video titles to be safe for Windows/Linux/macOS filenames. Duplicates are handled by appending the `videoId` as a suffix.

## Space-Efficient Filter UI (v0.0.9-7+)

### Design Philosophy

- **Collapsible Section**: Advanced filters (Sort, Type, Ranges) are grouped in a collapsible container to prevent UI clutter, especially on small screens.
- **Persistent Search**: The search bar is deliberately kept outside the collapsible section so it remains accessible at all times.
- **Active Filter Badge**: A red badge on the "Advanced Filters" button indicates hidden active filters. If you delete a search query and still see fewer videos than expected, check for the numeric badge indicating active background filters.

### Behavior

- **Badge Calculation**: The badge counts any non-default state:
  - Sort is NOT "Most Recent"
  - Type is NOT "All"
  - View Range is NOT 0 to Infinity
  - Percent Range is NOT 0% to 100%
- **Toggle State**: The expanded/collapsed state resets when the modal is closed to maintain a clean "Search-First" starting point for the next session.

### Range Filters (Views/Percent) Behavior

- **Input Type**: These inputs use `type="text"` instead of `type="number"`.
- **Reason**: Standard `type="number"` inputs do not expose "invalid" characters (like 'e' or letters) to the `.value` property in some browsers-they simply return an empty string. By using `type="text"`, the script can intercept these characters via the `input" event and sanitize them using`replace(/\D/g, '')`.
- **Mobile Support**: The attributes `inputmode="numeric"` and `pattern="[0-9]*"` are used to ensure mobile devices still display the numeric keypad.
- **Auto-Clamping**: Leading zeros are automatically removed, and values are clamped to their respective ranges (e.g., 0-100 for percentage) after typing.

## Theater Mode & Layout Shifts

- **Behavior**: Toggling Theater Mode or changing the player size (Delhi UI pills) often triggers a `yt-navigate-finish` event.
- **Optimization**: The script now uses a **Navigation Guard** (`lastHandledVideoId` and `lastHandledPageType`) to ignore these events if they occur within the same video and page context.
- **Benefit**: This prevents the script from performing a full teardown and re-applying a `seek` (re-positioning the video), ensuring playback remains fluid during layout changes.
- **Edge Case**: If you navigate from a Miniplayer back to the Watch page for the *same* video, the `pageType` changes (from `home`/`search` to `watch`), which *will* trigger a session refresh to ensure the UI buttons are correctly injected into the new container.

## `handleNavigation` Guard Mechanics (v0.0.9-12)

### How the Guard Works

`handleNavigation` is called by two debounced listeners (`yt-navigate-finish` and `yt-page-data-updated`) and by the YTHelper `yt-helper-api-ready` callback. All three fire multiple times during a single SPA navigation. To prevent redundant teardowns, `handleNavigation` has **three early-return guards**:

| Guard | Condition | Reason |
| --- | --- | --- |
| **Session Guard** | `currentVideoId && hasActiveSession && isSamePageContext` | Skip if an active Watch/Shorts session exists for the current URL's videoId and we haven't changed page type |
| **Miniplayer Guard** | `!currentVideoId && newPageType !== 'watch' && isSamePageContext && hasActiveMiniplayerSession` | Skip if browsing Home/Search while Miniplayer is playing - prevents killing mini session on re-fires |
| **Preview Guard** | `!currentVideoId && isSamePageContext && hasActivePreviewSession` | Skip if a Preview (inline hover) session is active - `yt-helper-api-ready` can refire without a real route change |

`isSamePageContext` is defined as:

```js
const isSamePageContext = lastHandledPageType === null || newPageType === lastHandledPageType;
```

### Initial Load Race Condition (Fixed in v0.0.9-12)

**Symptom in logs**: Two session cycles on every hard page load - session`:1` is aborted ~600ms after being created, and session`:2` is the real one that runs normally.

**Root cause - step by step**:

1. `initializeGlobal` runs → `VideoObserverManager.init()` → `bootstrap()` finds `<video>` → enqueues for Watch
2. ~800ms later: `processBatch()` → `startProcessingSession()` → `SessionOrchestrator.startSession()` registers session`:1` in `activeProcessingSessions`
3. ~600ms after that: `yt-navigate-finish` fires → `handleNavigation()` evaluates the Session Guard:
   - `currentVideoId` ✅ (extracted from URL)
   - `hasActiveSession` ✅ (session`:1` is in `activeProcessingSessions`)
   - `isSamePageContext` ❌ because `lastHandledPageType === null` (never been set) and `null !== 'watch'`
4. Guard fails → full teardown → `stopAllSessions()` kills session`:1` → new bootstrap → session`:2` starts
5. Now `lastHandledPageType = 'watch'` → subsequent nav events for the same page are correctly ignored

**The fix**: `isSamePageContext` now evaluates `lastHandledPageType === null` as `true`, treating the first navigation event as same-context. This allows the Session Guard to fire on initial load and skip the redundant teardown.

**Why this is safe**: The guard already requires `currentVideoId && hasActiveSession`, so it only skips teardown when there is a confirmed active session for the exact same videoId that's in the current URL. Genuine cross-video navigations always change `currentVideoId`, so the guard never fires for those.

**When the guard correctly allows teardown despite same videoId**:

- Navigating from Watch → Home and back: `currentVideoId` becomes `null` on Home, so the Session Guard doesn't apply; the Miniplayer/Preview guards take over
- Navigating from one video to a different video: `currentVideoId` changes → `hasActiveSession` will be false for the new ID

## Ad Detection & "Ping-Pong" Resilience (v0.0.9-11)

### The "Ping-Pong" Effect

- **Symptoms**: Logs showing multiple "Session started" and "Session stopped - Ad detected" events for the same video in a few seconds.
- **Cause**: YouTube's DOM markers (like `ad-showing`) can be inconsistent or late. If the script detects an ad, waits only 500ms, and re-evaluates while the DOM is still "dirty", it might prematurely start a session only to stop it 1 second later.
- **Fix**:
  - **Throttling**: The ad re-evaluation interval (grace period) has been increased to **3000ms** (3s).
  - **High-Fidelity Signals**: The script now queries `player.getPlayerResponse()?.adPlacements`. This API-level data is populated by YouTube *before* most DOM elements or classes appear, providing near-instant and robust detection.

### Preview Ad Association

- **Context**: Video Previews (hovering on Home/Search) run in an isolated `#inline-preview-player`.
- **Challenge**: The player doesn't always have ad classes, but the *metadata* says it's an ad.
- **Solution**: The script uses a **Link Association** strategy. It finds the thumbnail or grid item that triggered the preview and checks it for "Sponsored" or "Ad" badges. If found, the preview is blocked before a session even starts.
- **Troubleshooting**: If a specific ad is still being saved, check if the grid item has a standard `ytd-thumbnail` or `ytd-rich-item-renderer` structure.

## Technical Safeguards (v0.0.9-11+)

### Zombie Session Prevention

- **Problem**: Async operations (like fetching video metadata) could finish *after* a user had already navigated away, causing a "ghost" session to start and log errors forever.
- **Protection**:
    1. **Post-Fetch Validation**: Every async step verifies `sessionRef.isFinalized` before continuing.
    2. **Immediate Registration**: The `intervalId` is registered *before* any setup logic so `finalizeSession` can clear it even if the session hasn't fully "started" yet.
    3. **Interval Self-Destruct**: If an interval tick detects its session is no longer active in `activeProcessingSessions`, it kills itself.

### Quality Change Detection

- **Problem**: Changing video quality (e.g., 720p to 1080p) or activating audio improvements changes the `<video>.src`, which normally triggers a session restart and a "resume" seek, causing a small playback jump.
- **Fix**: The script compares the `videoId` before and after a `src` change. If the ID is identical, it's marked as a `isPlayerSettingsChange`. The session is preserved and the initial seek is skipped, ensuring seamless quality transitions.

### Context Flipping Protection

- **Problem**: Rapidly moving between Watch and Miniplayer could cause sessions to "flip-flop" or save progress under the wrong context.
- **Solution**: The `RouteContextResolver` uses an active-node scoring system and a **Context Lock**. Once a session starts for a specific video element in a specific context (e.g., `miniplayer`), it is locked. Any save attempt that doesn't match the lock is rejected.

### GitHub Export Limits

- **GitHub Gists**: Limited to **10MB** for JSON exports.
- **GitHub Repositories**: Limited to **50MB** to prevent API timeouts and maintain Git performance.
- **Validation**: The script checks these limits locally before attempting an upload.

## Safety & Stability (FailSafeManager)

### Safe Mode

- **What it is**: A protective state that triggers if the script detects repeated invalid session transitions or navigation invariant failures in a short period (e.g., during a YouTube site update that breaks selectors). Routine duplicate enqueues are telemetry-only.
- **Behavior**: When active, the script may throttle session starts or logs structured telemetry to help diagnose the issue.
- **Indicator**: You might see `[safeModeEntered]` in the browser console logs.
- **Recovery**: The script attempts to exit Safe Mode automatically after 45 seconds of stability. If it persists, a page reload is recommended.

## Logged-in Accounts & External Conflicts (v0.0.9-13)

### YouTube Helper API: TypeError on `querySelector`

- **Symptom**: Console error `TypeError: appState.player.playerObject.querySelector is not a function` in lines 521/729 of the external library.
- **Cause**: In logged-in or Premium accounts, YouTube may serve a player object that is not a standard DOM element (e.g., a Kevlar proxy), which lacks the `.querySelector` method.
- **Impact**: The external library may crash or stop emitting metadata updates.
- **Mitigation**: The script now uses **fallback UI selectors** (`.ytp-left-controls`) and catches library errors in `getCascadedVideoInfo`, ensuring the core functionality (history button and progress tracking) continues even if the library is in a "zombie" state.

### Native Resume Conflict (Backwards Jumps)

- **Symptom**: After the script resumes a video at (e.g.) 17:02, the video suddenly jumps back to an older time (e.g. 07:02).
- **Cause**: Conflict with YouTube's native resume system. YouTube's internal state may force its own progress marker shortly after the script's seek.
- **Fix (Persistence Check)**: The script now performs a **verification seek 800ms after resume**. If it detects a backwards jump of >5s, it re-applies the correct seek once more.
- **Fix (Anti-Overwrite)**: `saveStatus` now blocks any save attempt that detects a significant backwards jump within the first 10 seconds of a session. This prevents YouTube's "stale" progress from overwriting the script's more accurate local history.

### Structural Layout Shifts (Watch/Miniplayer)

- **Issue**: The progress bar gradient or the history button might fail to appear in some account types.
- **Solution**: Expanded container lookups to include `.ytp-left-controls` as a fallback for `.ytp-time-wrapper`. This ensures the UI is injected correctly regardless of YouTube's experimental layout variations.

## Saved videos modal UI (toolbar / overflow) (v0.0.10)

- **Separate storage key**: Toolbar toggles, row-button opacity mode, slot lists, `toolbarSectionExpanded`, and `showOverflowMenu` are stored under `CONFIG.STORAGE_KEYS.buttonsSavedVideosEntries` (`YT_PLAYBACK_PLOX_buttonsSavedVideosEntries`), not under main user settings (`userSettings`). Clearing or exporting only script settings may leave this object intact until you reset it explicitly.
- **Visibility without list rebuild**: Primary row buttons are toggled via `data-ypp-act-*` on `.ypp-videosContainer` and CSS; changing a toggle does not call `updateVideoList()`. The ⋯ button is hidden with `data-ypp-overflow-menu="off"` when the user disables **More actions (⋯) button** in the collapsible panel.
- **Collapsible panel**: The slot/opacity/overflow controls live in a section that starts collapsed (`toolbarSectionExpanded: false` by default) so the search row stays compact during normal browsing.
- **Grid row spacing**: Vertical spacing in Grid View is owned by `VirtualScroller.itemGap`, not by hidden margins/padding on `.ypp-grid-row`. Row heights should use rendered DOM measurements when available and estimated heights only before a row has been rendered.
- **Modal height is content-driven**: `.ypp-videosContainer` has `max-height: 85vh` but no `height`, so any moment where `#video-list-container` is empty shrinks the modal. The list container must always have a height owner: the `VirtualScroller` when a list is rendered, or the `.ypp-list-loading` min-height while loading.
- **The skeleton is always an overlay**: `showLoadingState()` renders `.ypp-skeleton-container` as `position: absolute` in every case (first render included) and reserves the height with the `.ypp-list-loading` class. A skeleton in normal flow makes the modal height depend on the placeholder, producing a collapse/re-expand pulse; `initVirtualScroller()` therefore hides the overlay and drops the class only *after* the scroller container is attached — never before its `await updateStorageUsageIndicator()`.
- **A destroyed scroller leaves its element behind**: `VirtualScroller.destroy()` only removes the spacer, so `#ypp-virtual-scroller-container` can survive. `initVirtualScroller()` removes any stale one (plus `DOMHelpers.removeExact('vsc:container')`) before appending the new container, otherwise the list ends up with two elements sharing that id.

## Time Display Visual Context (v0.0.10)

### What Changed

- **Surface vs Media Type**: The script now distinguishes between the **visual surface** (`watch`, `shorts`, `miniplayer`, `preview`) and the **media type** (`live`, `video`, `shorts`).
- **Context Handling**: The script uses the surface context provided by the session (Watch, Shorts, Miniplayer, Preview) to determine where to show notifications. This avoids redundant DOM lookups during save ticks and ensures consistent UI feedback regardless of the media type (video or livestream).

### Technical Distinction

- **Notification Kinds**: Notifications are now semantically categorized as `fixed` (user-defined), `seek` (automatic resume), `manual` (user-triggered save), or `progress` (periodic auto-save).
- **Persistence Rescue Bugfix**: `forceResumeTime` is now strictly reserved for user-defined fixed start times. Technical re-seeks (like the rescue mechanism that recovers from 0s stalls) no longer "manufacture" a `forceResumeTime`, preventing the UI from incorrectly showing stopwatch/pin icons for videos that were simply completed.

## Session Lifecycle & Silent Failures (v0.0.12-7)

### Handoff = finalize + re-enqueue, never a manual session

- **Rule**: `SessionOrchestrator.handoffSession()` only finalizes the previous session. It must NEVER insert a replacement session into `activeProcessingSessions` directly: a session without `intervalId`/tick loop would be accepted by the same-identity guard in `startProcessingSession` and the video would be tracked by a session that saves nothing.
- **Recovery paths must invalidate `videoTypeCache`**: `enqueueVideo` silently drops re-enqueues when the cache already maps the element to the same type (ad recovery, `context_mismatch` timer). Use `VideoObserverManager.invalidateTypeCache(videoEl)` before re-enqueueing.

### Save throttle marker is transactional

- `videoEl.dataset.lastSavedTime` is written BEFORE the async save (blocks fast ticks during the await) but restored on failure/exception. If you add new early-failure return paths after that write point, restore the marker or the failed progress will never retry.

### TrustedTypes in setInnerHTML

- Both `innerHTML=` AND `Range.createContextualFragment` are TT sinks. The only enforcement-safe fallback is DOMParser + `replaceChildren`. Policy creation failure is memoized (`_ttPolicyFailed`) with a randomized policy name suffix; do not revert to a deterministic name (collides on hot-reload).

### DOMHelpers does not cache absence

- Nullish getter results are not cached: during SPA transitions YouTube legitimately has no player mounted for a while; caching null would delay detection by up to the TTL. Entries older than 5s are swept opportunistically.

### Migration version bump is conditional

- `cleanupNonVideoData` only writes `MIGRATION_KEY` when zero keys failed. If you see repeated migration toasts on every startup, some key is failing normalization - check logs for `Error normalizing key`, do NOT force-bump the version.

## UI Dropdowns & Toasts (v0.0.12-7)

- **Outside-click closers**: never register document click closers with `{ once: true }`; the first click anywhere (including inside the menu) disarms them and the menu gets stuck open. Use a persistent listener removed by the close function.
- **Toast container cache**: the container element is removed from the DOM when its last toast fades out; its `DOMHelpers` entry must be invalidated at the same time or new toasts render into a detached node (invisible for up to the TTL).
- **Menu command teardown**: `GM_unregisterMenuCommand` is optional at runtime. The main userscript grants it, but a manager that installs from the metadata-only update file may not expose it; old commands can then remain until the manager removes them.
- **createElement option keys**: only `className/id/text/html/onClickEvent/events/attributes/props/styles/children/store` are supported. Unknown keys like `value`, `style` or `ariaLabel` are silently discarded - use `props`, object `styles`, and `attributes['aria-label']`.

## Metadata Cache & Playlists

- The 5-minute metadata cache may hold playlist association from a previous visit. The early-return path validates it against the current URL playlist and drops stale associations instead of attaching an unrelated playlist to a standalone view.

## Durable storage, imports and async ownership (v0.0.13)

- **Never treat an in-memory write as persistence**: if IndexedDB is unsupported or fails, `StorageAsync` uses GM storage and exposes `activeBackend`/`durableFallback` in diagnostics. IDB and GM values are compared by `timeWatched`; do not reintroduce a cache-only success path.
- **Raw migration keys are different from video keys**: `StorageAsync.rawKeys()` includes legacy metadata/GM keys for cleanup. Ordinary `StorageAsync.keys()` intentionally returns video keys only, so migration must use the raw API.
- **Import concurrency**: imports read with strict error propagation, merge with newest-wins, and batch IDB writes. GM has no multi-key transaction; a failed GM batch can be partial, so callers must inspect the returned result and not assume atomicity.
- **Session identity after await**: any async resume/save/metadata operation started by a session must compare `activeProcessingSessions.get(videoEl)` with the captured session before applying UI or writing. A stale result is `stale_session`, not a successful save.
- **Same-node context changes**: a reused `<video>` can change from Watch to Miniplayer (or another context) without changing its video ID. `startProcessingSession()` must finalize that old session before putting the replacement in `activeProcessingSessions`; skipping this leaves the old interval running while the Map points at the new session.
- **Durable mutation ordering**: `StorageAsync` serializes writes, batches and deletes within one runtime, and reads wait for the current mutation tail. This prevents an in-flight save from finishing after a replacement save/delete or merging an older completion history. Import batches re-read and merge inside that queue; delete/restore operations also recheck the expected `timeWatched`. It is not a distributed compare-and-swap: separate tabs still require IDB/GM reconciliation and can briefly disagree.
- **Exports are snapshot captures, not revision equality**: `storageCacheRevision` is a cache-invalidation signal, not a durable database revision. `getCompleteVideoSnapshot()` reserves the durable queue only for the serialized IDB rows and fresh GM inventory, then parses/merges after releasing it; a same-tab save therefore occurs before or after the capture instead of aborting it. Do not restore the old keys-plus-thousands-of-`Storage.get()` loop or compare the global cache revision after capture.
- **Tombstones are ambiguous across tabs**: a GM tombstone with a surviving IDB record must not delete that record; reads never issue a second delete after observing IDB absence, and explicit writes re-read before attempting marker repair. Once an IDB delete commits, finish GM cleanup even if the session guard becomes stale, otherwise the mirror can resurrect the record; tombstone-backed deletions must broadcast both fallback presence and deletion state.
- **Complete enumeration is fail-closed**: `keys({ requireComplete: true })`, `rawKeys()` and complete snapshots use strict IDB row validation and must reject when `GM_listValues` is missing, errors, or returns a non-array while GM storage APIs exist. A listed GM key that cannot be read is not a confirmed absence. A supported IDB that has not completed an inventory is also unknown, not empty. Complete inventories must not seed from the bounded LRU.
- **The LRU is not a storage inventory**: exact script usage must use a complete durable snapshot. A failed usage calculation or unavailable `navigator.storage.estimate()` must render an unknown/error value instead of returning and caching `0`, which would misreport a large database as empty. Storage mutations invalidate the usage cache.
- **Storage provider operations are bounded**: all GM reads, writes, deletes, listings and batch probes use timeouts/overall deadlines so a stalled userscript-manager promise cannot hold initialization, settings, migration, a durable queue or a backup open indefinitely; timed-out mutations quarantine their key until a successful read.
- **Pre-migration backups must be persisted**: `opened` only means a blob tab was opened. Structural migration may continue only for `shared`, `saved`, `downloaded` or `copied` backup statuses.
- **Backend read errors are not absence**: a failed IDB read with no confirmed GM record must reject strict reads; callers must not turn an unavailable primary into a new record or resume from zero.
- **Fallback writes are newest-wins**: before replacing a GM mirror, compare `timeWatched`; a newer mirror is preserved and returned as the canonical session record.
- **GM deletion capability**: when a manager lacks `GM_deleteValue`, the script writes an explicit GM tombstone sentinel instead of a bare `null`; the normal metadata grant uses `GM_deleteValue`.
- **Hot reload ownership**: every initialization stage must call `assertActiveInstance()` after awaiting external work. The replacement `window.__YPP__` object is the ownership token; a detached promise must not create observers, modals or backup timers. Same-version reinjection intentionally destroys and replaces the old instance. Runtime toasts and recovery actions are tracked separately so teardown cancels their timers/listeners without invoking destructive callbacks.
- **Grid item ownership**: a virtual item that is evicted must dispose its row store. The same applies to rebuilt toolbars, overflow menus and toasts; attaching a listener to a node without a lifecycle store retains detached UI until page unload.
- **Display ownership**: playback split-button/manual-save listeners belong to a per-display `DisposableStore`, not `GlobalDisposables`; destroy the store before removing a display node. Preview debounce markers and delayed gradient repaints must carry an instance/session token so a hot reload or context handoff cannot mutate the replacement UI.
- **Saved-video render generations**: `savedVideosModalGeneration` protects modal lifetime, but concurrent refreshes within one modal also need `savedVideosRenderGeneration`. Ignore stale results after every storage await and destroy a late `VirtualScroller` instead of attaching it to a newer render.
- **Body scroll ownership**: Settings and History may overlap while Settings hides History. Use the shared owner set (`acquireBodyOverflow`/`releaseBodyOverflow`) so closing one modal does not restore `body.style.overflow` while the other still owns the lock.
- **Thumbnail probe**: the visible `<img>` is the probe and fallback target. A hidden probe image doubles network work; do not require `isConnected` before assigning a URL because virtual rows are built before insertion.
- **Focus ownership**: when Settings hides History, only the top modal handles Escape/Tab. The History key handler yields while `settingsModalCleanup` is active, and the shared body-overflow owner restores the original value only after the last modal releases it.
