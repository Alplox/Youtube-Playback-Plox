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

## Storage Backend Migration (IndexedDB)

### What Changed
- The script now uses **IndexedDB** as the primary storage backend instead of localStorage
- This provides much larger storage capacity and prevents "storage.set full" errors
- Existing data is automatically migrated on first run
- localStorage is preserved as a fallback/backup

### Migration Behavior
- **First run**: Script detects existing localStorage/GM data and migrates it to IndexedDB
- **Migration flag**: `__ypp_idb_migrated__` is set to prevent repeated migrations
- **No data loss**: Original localStorage entries are kept until you manually clear them
- **Fallback**: If IndexedDB is unavailable, script falls back to localStorage

### Schema Migration (v5)
- **Automatic Type Normalization**: Legacy `videoType` values ('watch', 'regular') are automatically converted to 'video' or 'shorts'.
- **Prefix Cleanup**: Migrated keys are stripped of the `YT_PLAYBACK_PLOX_` prefix in IndexedDB for consistency.
- **Rescue Mode**: The script actively checks for and rescues any legacy data that might have been missed during the primary storage migration.

### Troubleshooting Storage Issues

#### Check Storage Backend Status
```javascript
// In browser console:
Storage.getBackendInfo()
```
This returns:
- `ready`: Whether StorageAsync is initialized
- `indexedDBSupported`: Browser IndexedDB support
- `cacheSize`: Number of items in memory cache
- `migrated`: Whether migration has occurred

#### Force Re-migration
If you need to re-migrate data:
```javascript
// Clear migration flag
localStorage.removeItem('YT_PLAYBACK_PLOX___idb_migrated__');
// Reload the page to trigger migration
```

#### Clear IndexedDB (Reset)
```javascript
// Delete the entire IndexedDB database
indexedDB.deleteDatabase('YTPlaybackPloxDB');
// Clear migration flag
localStorage.removeItem('YT_PLAYBACK_PLOX___idb_migrated__');
// Reload page
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
- **Private mode**: IndexedDB may be disabled; fallback to localStorage

### Data Recovery
If something goes wrong during migration:
1. Your original data is still in localStorage
2. Use browser dev tools to export localStorage entries
3. Clear migration flag and reload to re-migrate
4. Or use the Import/Export feature to restore data

## Common Issues

### Live Content Visibility
- On Live streams, the script now forces both the "Live" badge and the original YouTube time current/duration to be visible alongside the script's injected button.
- **Why**: YouTube often hides these elements when it detects custom modifications in the time display area; forcing them back ensures a complete UI experience.

### Miniplayer progress not saving or UI not updating
- Check **Settings → Enable saving for → Miniplayer videos**
- When disabled, videos playing in miniplayer are treated as non-saveable.
- **UI Update (Fixed in 0.0.9-3)**: Previously, navigating to the Shorts page would freeze the miniplayer time display. The script now allows concurrent UI updates for both contexts.
- **Session Recovery on Video Change (Fixed in 0.0.9-11)**: YouTube can change the miniplayer's active video without mutating the `<video>` element's `src` attribute (API-driven swap). The interval kill-switch detects `hasIdChanged` and kills the session, but the MutationObserver's src-change path never fires → no re-enqueue. The fix adds a `reenqueueForType()` bridge in `VideoObserverManager` so the kill-switch can self-heal by re-enqueueing the element for the new video.
- **Anti Re-Seek Cooldown (Fixed in 0.0.9-11)**: `shouldSkipResumeForActivePlayback()` To prevent annoying playback jumps during rapid navigation (e.g. going from Search to Home while the Miniplayer is active), the script enforces a **5-second cooldown** for `resume()` attempts on the same video element.

### "Storage.set full" Errors
- **Before**: Required manual cleanup or caused data loss
- **Now**: Should not occur with IndexedDB
- **If it happens**: Check `Storage.getBackendInfo()` - likely falling back to localStorage

### Slow Initial Load
- **Cause**: Migration of existing data to IndexedDB
- **Solution**: One-time operation; subsequent loads are fast
- **Large datasets**: Migration may take a few seconds

### Data Not Persisting
- **Check**: IndexedDB is enabled (`Storage.getBackendInfo().indexedDBSupported`)
- **Check**: No errors in console during save operations
- **Try**: Reload page and check if data persists

### Import/Export Issues
- **Format**: Still uses JSON/FreeTube formats
- **Storage**: Now saves to IndexedDB instead of localStorage
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
// Get storage info
const info = Storage.getBackendInfo();
console.log(`Backend: ${info.indexedDBSupported ? 'IndexedDB' : 'localStorage'}`);
console.log(`Cache size: ${info.cacheSize} items`);
console.log(`Migrated: ${info.migrated}`);
```
### FreeTube Integration

- **Deduplicación en Importación**: FreeTube v0.23.15 Beta permite múltiples entradas para un mismo video en su historial (usando `_id`). El script colapsa estas entradas para mantener su modelo de entrada única por videoId, conservando siempre la que tiene el `timeWatched` más reciente.
- **Formato JSON-L**: Los archivos `.db` exportados por FreeTube ahora son NDJSON (una línea de JSON por objeto). El script maneja esto automáticamente tanto en importación como en exportación.

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
- **Reason**: Standard `type="number"` inputs do not expose "invalid" characters (like 'e' or letters) to the `.value` property in some browsers—they simply return an empty string. By using `type="text"`, the script can intercept these characters via the `input" event and sanitize them using `replace(/\D/g, '')`.
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
|---|---|---|
| **Session Guard** | `currentVideoId && hasActiveSession && isSamePageContext` | Skip if an active Watch/Shorts session exists for the current URL's videoId and we haven't changed page type |
| **Miniplayer Guard** | `!currentVideoId && newPageType !== 'watch' && isSamePageContext && hasActiveMiniplayerSession` | Skip if browsing Home/Search while Miniplayer is playing — prevents killing mini session on re-fires |
| **Preview Guard** | `!currentVideoId && isSamePageContext && hasActivePreviewSession` | Skip if a Preview (inline hover) session is active — `yt-helper-api-ready` can refire without a real route change |

`isSamePageContext` is defined as:
```js
const isSamePageContext = lastHandledPageType === null || newPageType === lastHandledPageType;
```

### Initial Load Race Condition (Fixed in v0.0.9-12)

**Symptom in logs**: Two session cycles on every hard page load — session`:1` is aborted ~600ms after being created, and session`:2` is the real one that runs normally.

**Root cause — step by step**:

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
- **What it is**: A protective state that triggers if the script detects an abnormal number of session errors, duplicate starts, or navigation invariants in a short period (e.g., during a YouTube site update that breaks selectors).
- **Behavior**: When active, the script may throttle session starts or logs structured telemetry to help diagnose the issue. 
- **Indicator**: You might see `[safeModeEntered]` in the browser console logs.
- **Recovery**: The script attempts to exit Safe Mode automatically after 45 seconds of stability. If it persists, a page reload is recommended.
