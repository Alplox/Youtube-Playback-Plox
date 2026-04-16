[Spanish version](README.es.md)

# 🔴 YouTube Playback Plox

Save and resume automatically video playback progress on YouTube without needing to log in.

## Description

**YouTube Playback Plox** is a userscript that automatically remembers the exact point where you left a video on YouTube, so you can resume it later without needing an account or logging in.

Ideal for those who:

- Don't want to depend on YouTube's history.
- Use browsers with blockers or without persistent cookies.
- Want a more private experience.

## ✨ Features

- 🔐 **100% Private and Local:** Works without a Google account; everything is stored locally using `IndexedDB` in your browser.
- ☁️ **Cloud Sync:** Sync your saved videos with your GitHub account, either via Gist (Secret) or Repository (Private). (Can be enabled in settings, disabled by default)
- 🕒 **Smart Auto-Save:** Saves the time and automatically resumes from that point when you return, thanks to context-isolated detectors. Toggle tracking individually in settings:
    - `Regular Videos`
    - `Miniplayer`
    - `Shorts` (disabled by default)
    - `Live streams` (disabled by default)
    - `Previews on home` (disabled by default)
- 🔖 **Manual Save Option:** Save the current video time by pressing a button whenever you want. (Can be enabled in settings, disabled by default)
- 🛑 **Anti-Ads:** Prevents saving false playback times and IDs during ads. (the script does not block ads)
- ⚡ **Fast Performance:** Employs "Virtual Scrolling" in the modal of saved videos to instantly handle lists of thousands of videos without consuming extra memory.
- 🔔 **UI Notifications:** Native, unobtrusive messages in the player bar showing when a video is being resumed or saved.
- 🟢 **Floating button:** Quick access to settings.
- 🗂 **Advanced Video Manager:** Full modal with playlists, pre-loaded thumbnails, authors, percentages watched and remaining time.
    - ⏱ Set a "fixed start time" per video to always start from a predictable point (ideal for skipping intros).
    - 🔗 Unlink videos from arbitrary playlists with a single click.
    - 📦 Export/Import your backup to JSON or SQLite databases (100% FreeTube compatible).
    - 📊 Observe your browser's available storage quota.
    - 🔀 Create public YouTube `playlists` on the fly from your watched videos.
- 🌍 **Global Support:** Settings and UI fully translated into 50+ native languages.

## 🛠️ Requirements

You need a userscript manager like:

- [Violentmonkey](https://violentmonkey.github.io/) - [GitHub](https://github.com/violentmonkey/violentmonkey)
- [ScriptCat](https://scriptcat.org/en) - [GitHub](https://github.com/scriptscat/scriptcat)
- [Firemonkey](https://addons.mozilla.org/en-US/firefox/addon/firemonkey/) - [GitHub](https://github.com/erosman/firemonkey)

## 📦 Installation

1. Install a userscript manager (see above)
2. 📥 [Click here to install the script](https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/youtube-playback-plox.user.js) or [Go to Greasyfork](https://greasyfork.org/es/scripts/553387-youtube-playback-plox)

## How it works?

This script listens to the events of the YouTube player to save the playback time at certain intervals or when leaving the page. When you visit the same video again, it detects the ID and searches for the last saved progress to automatically resume the video from that point.

## Privacy

All information is stored locally in your browser. **No data is sent to external servers.**

## 📸 Screenshots

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0.0.9-6_ejemplo-alerta-guardado-automatico.png" alt="Example of alert time saved">

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0.0.9-6_ejemplo-modal-videos.png" alt="Example of modal to view saved videos">

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0.0.9-6_ejemplo-modal-configuraciones.png" alt="Example of configuration modal">

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0.0.9-6_ejemplo-crear-playlist.png" alt="Example of playlist creation">

## 🌐 Languages

| Flag | Code | Language |
|:----:|:-----|:----------|
| 🇬🇧 | `en-GB` | English (UK) |
| 🇺🇸 | `en-US` | English (US) |
| 🇪🇸 | `es-ES` | Español |
| 🇪🇸 | `es-419` | Español (Latinoamérica) |
| 🇪🇸 | `ca` | Català |
| 🇫🇷 | `fr` | Français |
| 🇩🇪 | `de` | Deutsch |
| 🇮🇹 | `it` | Italiano |
| 🇵🇹 | `pt` | Português |
| 🇳🇱 | `nl` | Nederlands |
| 🇵🇱 | `pl` | Polski |
| 🇸🇪 | `sv` | Svenska |
| 🇩🇰 | `da` | Dansk |
| 🇳🇴 | `no` | Norsk |
| 🇫🇮 | `fi` | Suomi |
| 🇨🇿 | `cs` | Čeština |
| 🇸🇰 | `sk` | Slovenčina |
| 🇭🇺 | `hu` | Magyar |
| 🇷🇴 | `ro` | Română |
| 🇧🇬 | `bg` | Български |
| 🇬🇷 | `el` | Ελληνικά |
| 🇷🇸 | `sr` | Српски |
| 🇭🇷 | `hr` | Hrvatski |
| 🇸🇮 | `sl` | Slovenščina |
| 🇱🇹 | `lt` | Lietuvių |
| 🇱🇻 | `lv` | Latviešu |
| 🇺🇦 | `uk` | Українська |
| 🇷🇺 | `ru` | Русский |
| 🇹🇷 | `tr` | Türkçe |
| 🇸🇦 | `ar` | العربية |
| 🇮🇷 | `fa` | فارسی |
| 🇮🇱 | `he` | עברית |
| 🇮🇳 | `hi` | हिन्दी |
| 🇧🇩 | `bn` | বাংলা |
| 🇮🇳 | `te` | తెలుగు |
| 🇱🇰 | `ta` | தமிழ் |
| 🇮🇳 | `mr` | मराठी |
| 🇨🇳 | `zh` | 简体中文 |
| 🇹🇼 | `zh-TW` | 繁體中文 |
| 🇭🇰 | `yue` | 粵語 (Cantonese) |
| 🇭🇰 | `zh-HK` | 繁體中文 (香港) |
| 🇯🇵 | `ja` | 日本語 |
| 🇰🇷 | `ko` | 한국어 |
| 🇹🇭 | `th` | ไทย |
| 🇻🇳 | `vi` | Tiếng Việt |
| 🇮🇩 | `id` | Bahasa Indonesia |
| 🇲🇾 | `ms` | Bahasa Melayu |
| 🇵🇭 | `tl` | Filipino |
| 🇲🇲 | `my` | မြန်မာ |
| 🇰🇪 | `sw` | Kiswahili |
| 🇪🇹 | `am` | አማርኛ |
| 🇳🇬 | `ha` | Hausa |
| 🇵🇰 | `ur` | اردو |
| 🇿🇦 | `zu` | isiZulu |

## 📄 License

This project is under the MIT license. Consult the file [LICENSE](./LICENSE) for more details.

## Shoutouts

- [YouTube Helper API](https://greasyfork.org/es/scripts/549881-youtube-helper-api) - [MIT](https://spdx.org/licenses/MIT.html)

## Notice

This project is not affiliated with Google or YouTube.

## Translations README

- [English](README.md)
- [Spanish](README.es.md)