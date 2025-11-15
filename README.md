# 🔴 YouTube Playback Plox

Save and resume automatically video playback progress on YouTube without needing to log in.

## Description

**YouTube Playback Plox** is a userscript that automatically remembers the exact point where you left a video on YouTube, so you can resume it later without needing an account or logging in.

Ideal for those who:

- Don't want to depend on YouTube's history.
- Use browsers with blockers or without persistent cookies.
- Want a more private experience.

## ✨ Features

- 🔐 Works without Google account; everything is stored locally in your browser.
- 🕒 Saves the time and automatically resumes from that point when you return to the same video.
    - `Videos`
        - `Miniplayer`
    - `Shorts` (by default disabled)
    - `Live streams` (by default disabled)
    - `Previews on home` (by default disabled)
- 🛑 Stops saving during ads.
- 🔔 Integrated messages in the player bar showing when it has been resumed or progress is being saved.
- 🟢 Floating button for quick access to settings.
- 🗂 Modal with list of saved videos, thumbnails, author, percentage watched and remaining time.
    - ⏱ Set a "fixed start time" per video to always start from a specific point.
    - 📦 Export/Import all saved data to a JSON or DB (Compatible with Freetube history).
    - 🔀 Create public playlists from watched videos.

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

## 🛠️ Requirements

You need a userscript manager like:

- [Violentmonkey](https://violentmonkey.github.io/)
- [Tampermonkey](https://www.tampermonkey.net/)
- [Greasemonkey](https://www.greasespot.net/)

## 📦 Installation

1. Install a userscript manager (see above)
2. 📥 [Click here to install the script](https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/youtube-playback-plox.user.js) or [Go to Greasyfork](https://greasyfork.org/es/scripts/553387-youtube-playback-plox)

## How it works?

This script listens to the events of the YouTube player to save the playback time at certain intervals or when leaving the page. When you visit the same video again, it detects the ID and searches for the last saved progress to automatically resume the video from that point.

## Privacy

All information is stored locally in your browser. **No data is sent to external servers.**

## 📸 Screenshots

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0-0-7_ejemplo-alerta-guardado.png" alt="Example of alert time saved">

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0-0-7_ejemplo-modal-videos.png" alt="Example of modal to view saved videos">

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0-0-7_ejemplo-modal-config.png" alt="Example of configuration modal">

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0-0-7_ejemplo-crear-playlist.png" alt="Example of playlist creation">


## 📄 License

This project is under the MIT license. Consult the file [LICENSE](./LICENSE) for more details.