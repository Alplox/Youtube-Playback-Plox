Quick Navigation:

    1. Setup & Installation
    2. Recommended Access (apiProxy)
    3. Initialization & Events
    4. State Objects (Read-Only)
    5. Helper Utilities
    6. Vibe Coding Boilerplate

📘 YouTube Helper API — Developer Documentation

🛠️ 1. Setup & Installation

This script is a library, meant to be imported into other userscripts rather than installed directly.
1️⃣ Import the Library

Instead of guessing the URL, please check the Script Description at the very top of this page (right under the script title). There, you will find a ready-to-copy line formatted specifically for inclusion.

    Note: Please copy the line from the description to ensure you are using the correct versioning format. The version will be URL dependent and statically set. Updating to a new library version requires the @require-d URL to be changed.

It will look exactly like this:

// @require [https://update.greasyfork.org/scripts/549881/](https://update.greasyfork.org/scripts/549881/)[VERSION_ID]/YouTube%20Helper%20API.js

2️⃣ Storage Permissions (Optional)

The library features a Hybrid Storage System that adapts to your environment.

    Native JS Mode: The library uses standard browser localStorage if no @grant directives are provided or if the Greasemonkey API is unavailable at runtime (fail-safe).

        Warning: This storage is tied to the browser's site data. Clearing your browser cache or cookies will erase data saved this way.

    Greasemonkey API Mode: To use the userscript manager's native storage (which persists through cache clears), you need to grant access to the API functions. The library automatically detects and supports both the Modern (GM.*) and Legacy (GM_*) standards.

You may grant either set, or include both for maximum compatibility:

// Modern API (Asynchronous)
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.deleteValue
// @grant        GM.listValues

// Legacy API (Synchronous)
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues

🛡️ 2. Recommended Way to Access YouTube Functions: Using apiProxy
⚠️ Prefer apiProxy over direct object access

While the library exposes raw player objects (via youtubeHelperApi.player.api or .playerObject), relying on them directly to call YouTube functions is unsafe and not recommended.

The raw player object is volatile and can be null or missing methods depending on the page's load state. Accessing it directly puts your script at risk of crashing with "undefined is not a function" errors.
✅ Correct Usage (Safe)

Use the apiProxy. It intercepts calls, verifies the player is actually ready, and logs a warning instead of crashing if a method is missing.

// Safe - Checks readiness automatically
youtubeHelperApi.apiProxy.playVideo();
youtubeHelperApi.apiProxy.seekTo(10, true);

❌ Incorrect Usage (Unsafe)

Avoid accessing the .api property or the DOM element directly, as they bypass safety checks.

// Unsafe - May crash if player.api is null or methods aren't bound yet
youtubeHelperApi.player.api.playVideo();
youtubeHelperApi.player.playerObject.seekTo(10, true);
document.getElementById('movie_player').playVideo();

🚀 3. Initialization & Events

Data might not be available instantly. It is highly recommended to listen for the library's ready event to ensure the API is fully populated before running your logic.
🟢 Primary Event: yt-helper-api-ready

Fires whenever video data is populated (on initial load, navigation, or refresh).

Standard Implementation:

const { eventTarget } = youtubeHelperApi;

eventTarget.addEventListener('yt-helper-api-ready', (event) => {
    const { video, player, page } = event.detail;

    console.log(`Loaded: ${video.title} (${video.id})`);

    // Example: Only run logic on "Watch" pages
    if (page.type === 'watch') {
        // Your code here
    }
});

🔔 Event Reference
Event Name 	Payload (event.detail) 	Description
yt-helper-api-ready 	{ video, player, page, chat } 	The main event. Fires when the API is ready and data is fully populated.
yt-helper-api-update-started 	null 	Fires immediately when navigation starts, before new data is processed.
yt-helper-api-ad-detected 	{ isPlayingAds: boolean } 	Fires when an ad starts or stops.
yt-helper-api-playback-language-updated 	{ playingLanguage, originalLanguage, isAutoDubbed } 	Fires when audio tracks change (e.g. auto-dubbing).
yt-helper-api-chat-state-updated 	{ isCollapsed, container, iFrame } 	Fires when the live chat sidebar is toggled.

📊 4. State Objects (Read-Only)

These objects are updated automatically and are protected by a **Read-Only Proxy. Attempting to write to them manually will **log a warning* to the console and the operation will be ignored (the value will remain unchanged).*
🎬 youtubeHelperApi.video

Metadata regarding the currently loaded video.

    🆔 id (string): The YouTube Video ID.
    🏷️ title (string): The video title.
    📺 channel (string): The channel name.
    👤 channelId (string): The unique channel ID.
    📝 rawDescription (string): The video description.
    ⏱️ lengthSeconds (number): Total duration in seconds.
    👁️ viewCount (number): Total view count.
    👍 likeCount (number): Total like count.
    📅 uploadDate (Date|null): JavaScript Date object of the upload time.
    📅 publishDate (Date|null): JavaScript Date object of the publish time.
    🔴 isCurrentlyLive (boolean): true if the video is strictly a live stream occurring right now.
    📹 isLiveOrVodContent (boolean): true if the content is a livestream or a VOD (archive) of a previous stream.
    ⏮️ wasStreamedOrPremiered (boolean): true if the video was originally broadcast live or premiered.
    🛡️ isFamilySafe (boolean): true if the content is marked as family-safe.
    🖼️ thumbnails (Array): Array of thumbnail objects containing URL, width, and height.
    🗣️ playingLanguage (object|string): The currently active audio track object.
    🌍 originalLanguage (object): The original language track object (if available).
    🤖 isAutoDubbed (boolean): true if the current audio track is an AI-generated auto-dub.
    ⏳ realCurrentProgress (number): Video playback time (ignores ad time).
    🔗 isTimeSpecified (boolean): true if the URL contains a timestamp (e.g., &t=50s).
    🎵 playlistId (string): The ID of the current playlist, if one is active.

⏯️ youtubeHelperApi.player

State of the player interface and DOM elements.

    🛑 isPlayingAds (boolean): true if an ad is currently interrupting content.
    🖥️ isFullscreen (boolean): true if the browser is currently in fullscreen mode.
    🎭 isTheater (boolean): true if the player is currently in theater mode.
    🎞️ videoElement (HTMLVideoElement): Direct reference to the actual <video> DOM node.
    📦 playerObject (HTMLElement): Reference to the main player container (e.g., #movie_player).
    📡 response (object): The raw ytInitialPlayerResponse object containing deep metadata.
    🔌 api (object): The raw YouTube player API (Note: Use apiProxy instead of this for safety).

🧭 youtubeHelperApi.page

Context awareness and navigation state.

    📍 type (string): 'watch', 'shorts', 'playlist', 'search', 'browse', or 'unknown'.
    📱 isMobile (boolean): true if running on m.youtube.com.
    🖼️ isIframe (boolean): true if running inside an embedded player.
    🏗️ manager (HTMLElement): The <ytd-page-manager> element (Desktop only).
    📐 watchFlexy (HTMLElement): The <ytd-watch-flexy> element (Desktop only).

💬 youtubeHelperApi.chat

State of the live chat container (if applicable).

    🙈 isCollapsed (boolean): true if the chat window is currently collapsed/hidden.
    📦 container (HTMLElement): The main container element for the chat.
    🪟 iFrame (HTMLIFrameElement): The specific iframe element loading the chat interface.

🧰 5. Helper Utilities
🐞 Debugging System

The library features an Atomic, Zero-Overhead logging system. When disabled or below the set threshold, the log functions are replaced with empty operations (no-ops) in memory, costing 0ms performance.

Default State: The debugger is disabled (false) by default. You must opt-in to see logs.
1️⃣ Configuration

// Master Switch (Must be true to see output)
youtubeHelperApi.debug.enabled = true;

// Set Threshold (0-4)
youtubeHelperApi.debug.level = 1; // Shows 'Typical' and above

2️⃣ Log Levels

You can access logs via Named Methods (recommended for readability) or Numeric Index (fastest/programmatic).
Level 	Value 	Named Method 	Color 	Description
Minimal 	0 	debug.logMinimal(msg) 	Minimal 	Critical state changes (Ready, Loaded).
Typical 	1 	debug.logTypical(msg) 	Typical 	Standard info (Quality change, Language).
Detailed 	2 	debug.logDetailed(msg) 	Detailed 	Deep state updates (Object diffs).
All 	3 	debug.logAll(msg) 	All 	Noise (Shim calls, generic events).
Overkill 	4 	debug.logOverkill(msg) 	Overkill 	High-frequency loops (TimeUpdate).
3️⃣ Usage Examples

The log object contains direct bindings to console.log, preserving the correct line number in your browser's developer console.

const { debug } = youtubeHelperApi;

// Readable Syntax
debug.logTypical("Video loaded successfully");

// Numeric Syntax (Atomic Access)
debug.log[0]("Library Initialized"); // Level 0
debug.log[4]("Frame updated");       // Level 4

🔧 Quality & Playback Control

Helpers to handle YouTube's complex quality settings and playback state.

    POSSIBLE_RESOLUTIONS: Dictionary mapping labels (e.g., 'hd1080', 'highres') to resolution integers.
    getOptimalResolution(label, usePremium): Finds the best matching internal format object for a requested label (e.g., asking for 4K on a 1080p video will return the 1080p object).
    setPlaybackResolution(label, ignoreAvailable, usePremium): Safely forces the player to switch qualities.
    reloadVideo(seconds): Reloads the current video at the specific timestamp.
    reloadToCurrentProgress(): Useful helper to "refresh" the stream at the exact current second (often fixes desync issues).

💾 Storage API

Syncs data between the Greasemonkey API (if granted) and localStorage. This allows data to persist even if the user clears their browser cache (when using Greasemonkey).

    saveToStorage(key, value): Saves JSON data.
    loadFromStorage(key, defaultValue): Loads data, returning defaultValue if null.
    loadAndCleanFromStorage(key, defaultValue): Loads data but strips any keys not present in the defaultValue structure (useful for schema updates).
    deleteFromStorage(key): Removes data from both storage layers.
    listFromStorage(): Returns an array of all keys managed by the library.

ℹ️ Environment

    gmCapabilities: Object containing environment flags:
    isModern: true if GM.* (async) API is present.
    isLegacy: true if GM_* (sync) API is present.
    features: Object indicating specifically which permissions (storage, network, menu, etc.) are currently granted to the script.

🤖 6. Vibe Coding Boilerplate

You can copy this code block when asking an AI to write a new script. It establishes the correct structure and includes a working example that logs video stats to the console.

    Note: You must manually fill in the @require URL using the link found in the Script Description at the top of this page.

// ==UserScript==
// @name         [Script Name]
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Generated by AI using YouTube Helper API
// @author       You
// @match        https://www.youtube.com/*
// @require      [INSERT LIBRARY URL FROM SCRIPT DESCRIPTION ABOVE]
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 1. Safe API Access
    const api = youtubeHelperApi;
    if (!api) return console.error('YouTube Helper API not loaded');

    // Destructure components for easier access
    const { eventTarget, apiProxy, video, player } = api;

    // Optional: Enable debug logs for development
    // api.debug.enabled = true;
    // api.debug.level = 1;

    // 2. Define your main logic
    function runDemoLogic() {
        // Guard: double-check we aren't running during an ad
        if (player.isPlayingAds) return;

        console.group('📺 [Script Demo] Video Detected');

        // Example A: Reading Metadata (Read-Only)
        console.log(`Title:     "${video.title}"`);
        console.log(`Channel:   "${video.channel}"`);
        console.log(`Duration:  ${video.lengthSeconds} seconds`);

        // Example B: Using the Safe API Proxy (Calling Functions)
        try {
            // Note: apiProxy methods map to the internal player API
            const currentVol = apiProxy.getVolume();
            console.log(`Volume:    ${currentVol}%`);
        } catch (err) {
            console.warn('Could not read volume via Proxy');
        }

        console.groupEnd();
    }

    // 3. Listen for Page Load & State Changes (The Entry Point)
    // The library fires 'yt-helper-api-ready' whenever the video data updates
    eventTarget.addEventListener('yt-helper-api-ready', (event) => {
        const { page } = event.detail;

        // Only run this logic on actual video "Watch" pages
        if (page.type === 'watch') {
            runDemoLogic();
        } else {
            console.log('Not processing page type.', page.type);
        }
    });

    // 4. Handle Ad Interruptions (Logging/Cleanup)
    eventTarget.addEventListener('yt-helper-api-ad-detected', (event) => {
        if (event.detail.isPlayingAds) {
            console.log('⛔ [Script Demo] Ad started... pausing logic.');
        } else {
            console.log('✅ [Script Demo] Ad ended.');
        }
    });

})();
