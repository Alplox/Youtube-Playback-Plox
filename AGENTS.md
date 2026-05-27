# AGENTS.md - YouTube Playback Plox

> Read this file completely before modifying any code.
> All rules are mandatory.

---

## 1. What does this project do?

Single file userscript (~18,800 lines) that saves and resumes YouTube playback position without login. Covers: regular videos, Shorts, Miniplayer, and Inline Previews (hover on Home).

Main file: `youtube-playback-plox.user.js`
External dependency: `YouTube-Helper-API.js` (via `@require`)

---

## 2. Absolute Rules

### 2.1 Version - Source of Truth

- The `@version` field in the script header (line ~114) is the
  **only** authority. NEVER increment or invent it.
- If there is a desynchronization between script and `changelog.md`: record changes in
  changelog under the current script version, without touching `@version`.

### 2.2 Single file - No duplicates

Look before creating. Reuse what already exists:

| Category            | Real name in code                                                             |
| ------------------- | ----------------------------------------------------------------------------- |
| Compiled selectors  | `SELECTORS.IDS`, `SELECTORS.CLASSES`, `SELECTORS.ELEMENTS`, `SELECTORS.ATTRS` |
| ID constants        | `IDs` (object)                                                                |
| Class constants     | `CLASSES` (object)                                                            |
| Attribute constants | `ATTRIBUTES` (object)                                                         |
| Element constants   | `ELEMENTS` (object)                                                           |
| DOM cache with TTL  | `DOMHelpers.get(key, getter, ttlMs)`                                          |
| Playback controller | `PlaybackController`                                                          |
| Async storage       | `StorageAsync` / `Storage`                                                    |
| Context resolver    | `RouteContextResolver`                                                        |

### 2.3 Explicit prohibitions

| Prohibited                                   | Alternative                                                 |
| -------------------------------------------- | ----------------------------------------------------------- |
| `var`                                        | `const` / `let`                                             |
| Execute suggested commit in console          | Only propose it in a code block                             |
| Direct HTML injection                        | `setInnerHTML()` (TrustedTypes compliant)                   |
| DOM access without cache                     | `DOMHelpers.get()` with TTL 0–250ms                         |
| More than 1 save/second                      | Throttle via `minSecondsBetweenSaves`                       |
| Storing DOM elements in `Map`/`Set`          | `WeakMap`                                                   |
| `MINIPLAYER_SELECTORS` or `SHORTS_SELECTORS` | Don't exist; use `SELECTORS.IDS`, `SELECTORS.CLASSES`, etc. |
| `domQueryCache`                              | Don't exist; use `DOMHelpers.get()`                         |
| `innerHTML =`                                | `setInnerHTML()` only                                       |

Modifying `translations.json` is strictly prohibited under any circumstances.
If you need to add translations, do so only in `FALLBACK_TRANSLATIONS` inside `youtube-playback-plox.user.js`.

---

## 3. Architecture - Component Map

```
youtube-playback-plox.user.js
│
├── THRESHOLDS                  ← Global constant values
│
├── Utility Layer
│     ├── sanitizeHTML(str)     ← Sanitize strings for HTML (decode + escape)
│     ├── getSafeUrl(url)       ← Anti-XSS URL validation
│     ├── formatTime(seconds)   ← Format to MM:SS
│     ├── parseTimeToSeconds()  ← Parse "1:23" to seconds
│     ├── setInnerHTML(el, html)← TrustedTypes-compliant DOM injection
│     ├── createElement(tag, {children, html, className, styles, attributes, props, onClickEvent, ...events})
│     ├── debounce(fn, delayMs)
│     ├── delay(ms)
│     └── SVG_ICONS             ← Central SVG icon pool
│
├── DisposableStore             ← Lifecycle tracking
│     ├── GlobalDisposables     ← Script-wide listeners (cleaned on unload)
│     ├── ModalDisposables      ← Saved Videos modal listeners
│     └── addDisposableListener(target, event, handler, options?, store?)
│         NOTE: Without explicit store, defaults to GlobalDisposables
│
├── StorageAsync / Storage      ← Persistence (IndexedDB + fallback GM_*)
│     └── RULE: always await on get/set/keys/del
│
├── DOMHelpers                  ← DOM elements cache (TTL 125ms default)
│     ├── getWatchPlayer()
│     ├── getShortsPlayer()
│     ├── getMiniplayerElementActive()
│     ├── getMiniplayerPlayer()
│     ├── getInlinePreviewPlayer()
│     ├── getInlinePreviewPlayerVideo()
│     ├── get(key, getter, ttlMs)  ← Generic lookup with cache
│     ├── removeExact(key)
│     └── clear(prefix?)
│
├── AdDetector                  ← Blocks saving during ads
│     ├── isNodeWithinAdContainer(node)
│     ├── findVisibleAdUi(root)
│     └── isVideoIdAnAd(videoId)  ← Reverse search by videoId
│
├── RouteContextResolver        ← Determines real video context
│     ├── resolveContext(videoEl, preferredContext)  ← Scoring system
│     ├── canProcessContext(videoEl, context)
│     └── isContextLocked(videoEl, expectedContext)  ← Final validation
│
│   Session safety pipeline:
├── EventPreFilter              ← Discards invalid events before processing
├── FailSafeManager             ← Detects loops/errors and activates safe mode
├── SessionTelemetry            ← Structured logging of routing decisions
├── SessionFallbackManager      ← Watchdog for sessions that don't start
│
├── activeProcessingSessions    ← Map<HTMLVideoElement, Session>
│     NOTE: Intentionally a Map (not WeakMap) - requires
│     iteration in stopAllSessions(), FailSafeManager, and navigation.
│     Explicit cleanup via SessionOrchestrator.finalizeSession().
│
├── SessionOrchestrator         ← Session state machine
│     │   States: idle→starting→active→inAd/transitioning→stopping→finalized
│     ├── startSession(videoEl, context, videoId, player, source)
│     ├── finalizeSession(videoEl, reason)
│     └── handoffSession(videoEl, toVideoId, reason, mode)
│
├── VideoObserverManager        ← Central orchestrator for video detection
│     ├── init(forceBootstrap, preserveMiniplayer, skipCleanup)
│     ├── bootstrap(force)       ← Initial DOM scan
│     ├── enqueueVideo(videoEl, type, source)
│     ├── enqueueWithResolver(videoEl, preferredType, source)
│     ├── requeueMiniplayer(videoEl)
│     └── waitForAdClear(videoEl, type)
│
├── startProcessingSession()    ← Starts polling session for a video
│     ⚠️ MANDATORY PATTERN: See "Sessions with async operations" section
│     After any internal await, verify:
│     1. activeProcessingSessions.get(videoEl) === sessionRef
│     2. !sessionRef.isFinalized
│     3. sessionRef.intervalId = intervalId  (register BEFORE Object.assign)
│
├── PlaybackController          ← Central point for saving and resuming
│     ├── saveStatus(player, videoEl, type, videoId, videoInfo, options)
│     └── resume(player, videoId, videoEl, savedData, type, cachedVideoInfo)
│
├── PlaybackDisplayManager      ← Shorts visual display, syncFixedTime, syncSavedState
│
├── getCascadedVideoInfo()      ← Metadata (Waterfall: API → YTHelper → DOM)
│     Level 1: player.getPlayerResponse() / getVideoData() / microformat
│     Level 2: YTHelper global
│     Level 3: DOM fallbacks + fetch
│
├── showFloatingToast(message, duration?, options?) ← User notifications
│
├── VirtualScroller             ← Virtualized video list (modal)
│     ├── updateItems(items)
│     ├── destroy()
│     └── ResizeObserver integration for grid mode
│
├── GitHub Backup System        ← Remote backup to Gist or private repo
│     ├── backupToGitHubGist(data, modeSettings, isManual)
│     ├── backupToGithubRepository(data, modeSettings, isManual)
│     ├── performRemoteBackup(type, isManual, settingsOverride)
│     └── checkGitHubBackup()    ← Auto-backup trigger (5 min interval)
│
└── YTHelper / youtubeHelperApi ← Global instance of YouTube-Helper-API.js
```

**Correct selector naming:**

```
SELECTORS.IDS.MOVIE_PLAYER          → '#movie_player'
SELECTORS.IDS.SHORTS_PLAYER         → '#shorts-player'
SELECTORS.ELEMENTS.MINIPLAYER_ELEMENT → 'ytd-miniplayer'
SELECTORS.CLASSES.MINIPLAYER_VISIBLE  → '.ytdMiniplayerComponentVisible'
SELECTORS.ATTRS.MINIPLAYER_ACTIVE     → '[miniplayer-is-active]'
```

---

## 4. Session Lifecycle

```
VideoObserverManager detects <video> with src
        ↓
EventPreFilter.shouldDrop() - discards if invalid
        ↓
RouteContextResolver.canProcessContext() - validates context
        ↓
AdDetector.isNodeWithinAdContainer() - discards if ad
        ↓
enqueueVideo(videoEl, type)
        ↓
processBatch() → process[Watch|Shorts|Miniplayer|Preview]Video()
        ↓
SessionOrchestrator.startSession() - creates session with unique token
        ↓
startProcessingSession() - resume + setInterval for saving
        ↓
PlaybackController.saveStatus() every N seconds
        ↓
SessionOrchestrator.finalizeSession() when navigating/changing video
```

---

## 5. Coding Standards (ES2025+)

**Syntax:** arrow functions, `const`/`let`, `??`, `?.`  
FORBIDDEN: `var`

**Performance:**

- DOM: `DOMHelpers.get(key, getter, ttlMs)` - never access DOM in loops without caching. Use TTL=0 for one-shot existence checks (e.g., `showLoadingState`), 125–5000ms for stable elements.
- Throttle: minimum 1s between saves (configurable in settings)
- UI: `requestAnimationFrame` for visual changes
- I/O: `async/await` without blocking main thread

**Memory safety:**

- `WeakMap` for data associated with DOM elements when you DON'T need
  to iterate over them (e.g. `_adContainerCache`, `playerVideoIdCache`,
  `seekPlayListeners`, `recentResumeAttempts`).
- `Map` when you need to iterate, filter, or clean in bulk
  (e.g. `activeProcessingSessions` - sessions require iteration
  in `stopAllSessions()`, `FailSafeManager`, and navigation detection).
  In these cases, memory cleanup is explicit responsibility
  of `SessionOrchestrator.finalizeSession()` and `stopAllSessions()`.
- NEVER use `Map` with DOM elements as keys if you don't need
  iteration - in that case always use `WeakMap`.
- `AbortController` in sessions (field `session.abortController`)
- `DisposableStore` for clean, grouped lifecycle tracking. Use:
  - `.clear()` to flush and execute registered disposables while keeping the store active (ideal for view resets/transitions).
  - `.dispose()` to flush disposables and permanently deactivate the store (ideal for final cleanups).
- `cleanupAll()` / `closeModalVideos()` when navigating (cleans listeners)

**Safe HTML:** always `setInnerHTML(element, html)` - never `.innerHTML =`

**JSDoc:** in all public functions and helpers

### Error handling conventions

- Use `logWarn(module, message, error?)` for expected/recoverable errors (e.g., JSON.parse fallbacks, observer lifecycle, best-effort cleanup).
- Use `logError(module, message, error)` for unexpected errors that should not occur during normal operation.
- First parameter is always the module name (e.g., `'Storage'`, `'AdDetector'`, `'SessionTick'`).
- Empty catch blocks are only acceptable for best-effort cleanup operations (e.g., `GM_deleteValue`, observer `disconnect()`). All other catches must at minimum log with `logWarn`.

### Pattern: Sessions with internal async operations

When `startProcessingSession` does an `await` internally (e.g. `getCascadedVideoInfo`), the state can change during the wait. Always verify after any await:

1. `activeProcessingSessions.get(videoEl) === sessionRef` - confirms the session was not replaced by a more recent one.
2. `!sessionRef.isFinalized` - confirms it was not explicitly terminated (e.g. by navigation cleanup).
3. Register `sessionRef.intervalId` immediately upon creating the interval, not at the end of setup, so `finalizeSession` can always clean it.
4. Always use the session checks above. Navigation guards based on counters (`navIdAtStart !== globalNavigationId`) are not reliable - these variables were eliminated in favor of direct session reference checks.

---

## 6. Workflow

### Before modifying

- [ ] Read current version in script → note it
- [ ] Search in code if function/selector already exists (section 2.2 and 3)
- [ ] Evaluate impact on SPA transitions (Watch ↔ Miniplayer ↔ Shorts)

### During editing

- [ ] JSDoc in new or modified functions
- [ ] Separate configuration from logic
- [ ] Descriptive names - forbidden: `foo`, `bar`, `tmp`, `x`

### After editing

- [ ] Update `changelog.md` in the section matching `@version`
- [ ] Document edge-cases in `docs/gotchas.md`
- [ ] Verify stability in SPA transitions

### After significant structural changes

If you added/renamed/removed a MARK section, a class,
or a relevant IIFE module:

- [ ] Run `node ./scripts/generate-structure.mjs`

### Commit message (OBLIGATORY at the end)

Propose in code block, **FORBIDDEN to execute:**

```
<type>: concise description in English

- Detail point 1
- Detail point 2
```

Prefixes (Conventional Commits): `feat:` `fix:` `style:` `refactor:` `perf:` `test:` `docs:` `chore:`

---

## 7. Task Status (multi-step tasks)

For any task with more than one file or more than 3 changes,
maintain `docs/estado_tarea.md` to allow handoff between AI agents:

```markdown
## Objective

- [ ] Confirmed: ...
- [ ] Inferred: ...

## Technical Decisions

| Decision | Justification |
| -------- | ------------- |
| ...      | ...           |

## Progress

- [x] Step completed
- [ ] Step pending

## Risks

- ...
```

---

## 8. Quick Reference

| I need...                        | Use...                                            |
| -------------------------------- | ------------------------------------------------- |
| Save video progress              | `PlaybackController.saveStatus()`                 |
| Resume video from saved time     | `PlaybackController.resume()`                     |
| Video metadata (cascaded)        | `getCascadedVideoInfo()`                          |
| Detect if node is ad             | `AdDetector.isNodeWithinAdContainer()`            |
| Find visible ad UI               | `AdDetector.findVisibleAdUi(root)`                |
| Read/write user data             | `Storage.get()` / `Storage.set()` with `await`    |
| Check video context              | `RouteContextResolver.isContextLocked()`          |
| Access DOM with cache            | `DOMHelpers.get(key, getter, ttlMs?)`             |
| Clear DOM cache                  | `DOMHelpers.clear(prefix?)` or `removeExact(key)` |
| Get Watch player                 | `DOMHelpers.getWatchPlayer()`                     |
| Get Shorts player                | `DOMHelpers.getShortsPlayer()`                    |
| Get Miniplayer player            | `DOMHelpers.getMiniplayerPlayer()`                |
| Get Inline Preview player        | `DOMHelpers.getInlinePreviewPlayer()`             |
| Get Inline Preview video         | `DOMHelpers.getInlinePreviewPlayerVideo()`        |
| Re-queue video in observer       | `VideoObserverManager.enqueueWithResolver()`      |
| Finalize session manually        | `SessionOrchestrator.finalizeSession()`           |
| Show toast to user               | `showFloatingToast(message, duration?, options?)` |
| Create DOM element               | `createElement(tag, options)`                     |
| Safe HTML injection              | `setInnerHTML(element, html)`                     |
| Sanitize HTML                    | `sanitizeHTML(str)`                               |
| Validate URL (anti-XSS)          | `getSafeUrl(url, allowedPrefixes?)`               |
| Format time to MM:SS             | `formatTime(seconds)`                             |
| Parse "1:23" to seconds          | `parseTimeToSeconds(timeStr)`                     |
| Log error                        | `logError(module, message, error)`                |
| Log warning                      | `logWarn(module, message, error?)`                |
| Add event listener with cleanup  | `addDisposableListener(target, event, handler, options?, store?)` |
| Create disposable store          | `new DisposableStore()`                           |
| Debounce a function              | `debounce(fn, delayMs)`                           |
| Async delay                      | `delay(ms)`                                       |
| Threshold constants              | `THRESHOLDS.MIN_SAVE_INTERVAL_MS` etc.            |
| SVG icons                        | `SVG_ICONS.{name}`                                |
