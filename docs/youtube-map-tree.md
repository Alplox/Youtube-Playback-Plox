YouTube
│
├── 🏠 Homepage
│   ├── ▶️ Open individual video
│   │   ├── Plays in main player
│   │   ├── Add to playlist / Mix
│   │   │   └── Changes to Playlist mode (Mix context)
│   │   ├── Go to Home
│   │   │   └── Miniplayer inactive
│   │   │   └── Miniplayer auto-activate
│   │   ├── Go to Shorts → Reproduces Short (video pauses or goes to miniplayer)
│   │   └── Open suggested video → Replaces current playback 
│   │
│   ├── 🎵 Open Playlist / Mix member video
│   │   ├── Plays in Playlist / Mix context
│   │   │   ├── Next / Previous → maintains Playlist / Mix context
│   │   │   ├── Go to Home → Miniplayer active (Playlist / Mix continues)
│   │   │   ├── Go to Shorts → Short reproduces + miniplayer active
│   │   │   └── Open video outside Playlist / Mix → Playlist / Mix closes
│   │
│   ├── 📺 Go to Shorts
│   │   ├── Reproduce Short
│   │   │   ├── Swipe → siguiente Short
│   │   │   ├── Open link to normal video → Video page (standard mode)
│   │   │   └── Return → returns to previous Short
│   │   └── If there is an active miniplayer → continues playing in background
│   │
│   ├── 🔎 Search content
│   │   ├── Select individual video → Video page
│   │   └── Select playlist / Mix → Playlist page
│   │
│   └── 🧭 From channel
│       ├── Open video / Short / Playlist from channel tab
│       ├── Switch between tabs (Videos, Shorts, Live, Community)
│       └── Return to Home → activates miniplayer if procede 
│
├── 🎬 Video Page (Normal Video)
│   ├── ▶️ Play video
│   │   ├── Reproduce video actual
│   │   ├── Open suggested “Next” → New video (miniplayer resets)
│   │   ├── Click on YouTube logo → Return to Homepage
│   │   │   └── Activates miniplayer with current video
│   │   ├── Go to Shorts → Reproduces Short (maintains miniplayer active)
│   │   └── Add video to Mix → Redirects to Playlist type Mix
│   │   └── Full screen / Theater / PIP → changes visual mode
│   │   └── Send to TV / Chromecast → remote control active 
│   │
│   ├── 📜 Open associated playlist (if part of one)
│   │   └── Changes view to Playlist
│   │
│   ├── 🔗 Navigate to another video (description / comments / community)
│   │   ├── New video → replaces current playback
│   │   ├── Link to Short → Shorts page
│   │   └── Link to Playlist → Playlist page
│   │
│   └── 💬 Real-time interaction
│       ├── Activate subtitles, speed, quality
│       ├── Save / “Watch later”
│       └── Share (copy link, open external) 
│
├── 🎵 Playlist / Mix Page
│   ├── Reproduce first video del Playlist / Mix
│   │   ├── Next / Previous → maintains Playlist / Mix context
│   │   ├── Go to Home → Miniplayer active (Playlist / Mix continues)
│   │   ├── Open Shorts → Miniplayer still active
│   │   ├── Open video outside Playlist / Mix → context closes
│   │   └── Close miniplayer → Playlist / Mix ends
│   │   └── Send to TV / Chromecast → control from app
│   └── Playlist “Watch later” → behaves like a Mix 
│
├── 📱 Shorts Page
│   ├── Reproduce Short (vertical screen)
│   │   ├── Swipe → next / previous Short
│   │   ├── Open link to normal video → Video page
│   │   ├── Open link to playlist / Mix → Playlist page
│   │   ├── Return → previous Short or Shorts interface
│   │   ├── If there is an active miniplayer → continues reproducing dual (Short + Video; both visible and controllable)
│   │   │   ├── 🎛️ Dual interaction:
│   │   │   │   ├── Short reproduces with main audio
│   │   │   │   ├── Miniplayer (video/playlist) can be paused or changed
│   │   │   │   ├── Miniplayer video can be changed from suggestions or search
│   │   │   │   ├── Miniplayer can be closed without leaving Shorts
│   │   │   │   └── If a new video is opened from Shorts → replaces active miniplayer 
│   │   └── Open Home → Shorts stops, miniplayer (if exists) continues
│   │
│   └── Start playback from notification / direct link
│       ├── Open Short directly
│       ├── Swipe up → next Shorts
│       └── Click on YouTube logo → Home (without miniplayer)
│
├── 🔴 Live Streaming
│   ├── Live type page with active chat
│   ├── Pauses when switching to Home (depending on device)
│   ├── When returning → resumes in real time
│   ├── Opening another video → cuts broadcast
│   ├── Playlist with Live → chat disabled in miniplayer
│   ├── Can be sent to miniplayer
│   ├── Go to Home → Miniplayer with live (chat closes, live continues)
│   ├── Go to Shorts → Live in miniplayer + Short with main audio
│   ├── Live ends → becomes "Replay" (new context: archived video)
│
├── 🌍 External and embedded links
│   ├── Link from app or social network
│   │   ├── Video normal / Playlist / Short → opens its respective page
│   │   ├── If there is an active miniplayer → replaces or pauses
│   │   └── In browser → no miniplayer persistence
│   └── Embedded video (iframe in another website)
│       ├── Reproduces inline
│       ├── Click on title → Video page
│       ├── No access to miniplayer
│       └── Autoplay according to browser permissions
│
├── 🔔 History, Notifications and Watch Later
│   ├── From notification → opens video / Short / Playlist
│   ├── From history → Video page
│   ├── “Watch later” → Dedicated Playlist
│   └── Miniplayer can continue active when returning to Home
│ 
└── ⚙️ Global States
    ├── 🎛️ Miniplayer
    │   ├── ✅Allows activation from:
    │   │   ├── Regular videos: `/watch` (Can be started with video as such or before. That is from initial ad if key [i] is pressed)
    │   ├── ❌ Does not allow activation from:
    │   │   ├── Shorts: `/shorts`
    │   │   ├── Playlist: `/playlist`
    │   │   ├── Results: `/results`
    │   │   ├── Feeds: `/feed/subscriptions`, `/feed/trending`, `/feed/history`, `/feed/library`, `/feed/you`
    │   │   └── Channels: `/@[handle]` (includes channel trailer videos: `Tab "Principal"`)
    │   ├── Persistent when navigating between:
    │   │   ├── Home: `/`
    │   │   ├── Regular videos: `/watch`
    │   │   ├── Playlist: `/playlist`
    │   │   ├── Shorts: `/shorts` (Can coexist with Shorts; Parallel playback. But first load causes the miniplayer to pause to favor the loading and playback of the Short, the reverse happens later if the video in the miniplayer is changed)
    │   │   ├── Results: `/results`
    │   │   ├── Feeds: `/feed/subscriptions`, `/feed/trending`, `/feed/history`, `/feed/library`, `/feed/you`
    │   │   └── Channels: `/@[handle]` (All tabs)
    │   ├── Its content can be changed from Shorts without leaving the view, ONLY if video was part of a playlist or mix. Because in this way the following videos are shown to the user, otherwise if it is a single video and it ends, the user would have to return to Home to click on another one to be loaded.
    │   ├── Once open, it remains open until the user closes it manually or when it expands back to the `/watch` page of the current video.
    │   ├── Close → stops playback
    │   │   ├── Removes content from the DOM, along with the class `.ytdMiniplayerComponentVisible` which is what allows the miniplayer to remain open/visible.
    │   └── Maintains playlist / Mix if the video comes from it
    │
    ├── 🔍 Preview Player
    │   ├── Activated by hover (~1s) over thumbnails in:
    │   │   ├── Home /
    │   │   ├── Results /results
    │   │   ├── Playlist /playlist
    │   │   ├── Channel /@handle (Videos tab)
    │   │   └── /watch (suggestions sidebar)
    │   ├── Auto-inline (without hover) en:
    │   │   └── /feed/subscriptions (silent scroll autoplay)
    │   ├── Does NOT exist in:
    │   │   ├── /shorts (the Shorts player is already the "preview")
    │   │   └── /feed/history, /feed/library (static thumbs)
    │   ├── Coexistence:
    │   │   ├── + Active miniplayer → preview muted, miniplayer with audio (two videos)
    │   │   ├── + Main player (/watch sidebar) → preview muted, main player with audio
    │   │   └── Edge: user can enable preview audio manually → two simultaneous audio sources
    │   └── Destruction: cursor leaves the thumbnail → preview is destroyed immediately
    │
    ├── 🖼️ PiP — Picture in Picture
    │   ├── Is a browser/OS feature, independent layer from YouTube
    │   ├── Launched from the main player (/watch) with native button
    │   ├── Can float over ANY page, including:
    │   │   ├── /shorts → PiP + Shorts player active simultaneously
    │   │   ├── Home, feeds, channel → PiP + Miniplayer active simultaneously
    │   │   └── Other apps / desktop (if browser allows)
    │   ├── Key difference vs Miniplayer:
    │   │   ├── Miniplayer = inside YouTube, in the DOM
    │   │   └── PiP = outside YouTube, in the operating system layer
    │   ├── When returning to /watch of the video in PiP:
    │   │   └── The video resumes in the main player; PiP closes
    │   └── NOT available from Shorts player (cannot launch its own PiP)
    │
    ├── 📺 Channel Trailer
    │   ├── Only active on the "Principal" tab of /@handle
    │   ├── Condition: user not subscribed OR channel with featured video
    │   ├── Behavior:
    │   │   ├── Autoplay, muted by default
    │   │   ├── Does NOT go to miniplayer when navigating out → destroyed
    │   │   ├── Stops when changing tab within the channel
    │   │   └── If there was an active miniplayer when entering → coexist briefly
    │   └── Cannot be started or persisted as miniplayer
    │
    ├── 🎬 Sub-states of the Main Player
    │   ├── Normal → Theater → Fullscreen (visual modes, do not affect player logic)
    │   ├── Ambient mode (glow behind the player; visual only)
    │   ├── 📢 Ad state (preroll / midroll)
    │   │   ├── Blocks interaction with main video
    │   │   ├── The miniplayer CANNOT be activated during an ad
    │   │   └── Skip after 5s (if applicable) → resumes video
    │   ├── 🕐 End screen / Autoplay countdown
    │   │   ├── Countdown 5s before the next video (autoplay)
    │   │   ├── In playlist → next in the playlist
    │   │   └── Without playlist → YouTube suggestion
    │   └── 🔴 Premiere countdown
    │       ├── Scheduled video: shows countdown until premiere time
    │       └── When starting → transition to main player in Live mode
    │
    ├── ⏸️ Pause / Resume
    │   ├── Changing tabs → playback continues (depending on device)
    │   ├── Minimize app → audio may continue (depending on Premium plan)
    │   └── Reopen → continues from the previous point
    │   └── Close app → saves progress
    │
    ├── 🔁 Context changes
    │   ├── From /watch → Home → Miniplayer (active)
    │   ├── From Home → Shorts → Miniplayer maintained (dual)
    │   ├── From Shorts → /watch →  stops
    │   ├── From Playlist → Home → Miniplayer maintains context
    │   └── From Shorts + Miniplayer → change video in miniplayer possible
    │
    └── ⚠️ Error states
        ├── Video unavailable (deleted, private, region)
        │   ├── In Playlist → skips to next
        │   ├── In Autoplay → skips to next
        │   └── In Miniplayer → stops (shows error)
        ├── No connection → Offline mode (Premium + downloads only)
        │   ├── Plays downloads
        │   └── Miniplayer only with downloads
        └── Network error → tries to reconnect (3 attempts) → pauses