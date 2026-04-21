[README en Español](README.es.md)

# 🔴 YouTube Playback Plox

Save and resume automatically video playback progress on YouTube without needing to log in.

## Description

**YouTube Playback Plox** is a userscript that automatically remembers the exact point where you left a video on YouTube, so you can resume it later without needing an account or logging in.

Ideal for those who:

- Don't want to depend on YouTube's history.
- Use browsers with blockers or without persistent cookies.
- Want a more private experience.
- Don't have a Google account.

## ✨ Features

- 🔐 **100% Private and Local:** Works without a Google account; everything is stored locally using `IndexedDB` in your browser.
- 🕒 **Smart Auto-Save:** Saves the time and automatically resumes from that point when you return, thanks to context-isolated detectors. Toggle tracking individually in settings:
    - `Regular Videos`
    - `Miniplayer`
    - `Shorts` (disabled by default)
    - `Live streams` (disabled by default)
    - `Previews on home` (disabled by default)
- 🔖 **Manual Save Option:** Save the current video time by pressing a button whenever you want. (Can be enabled in settings, disabled by default)
- 🛑 **Anti-Ads:** Prevents saving false playback times and IDs during ads. (the script does not block ads)
- ⚡ **Fast Performance:** Employs "Virtual Scrolling" in the modal of saved videos to instantly handle lists of thousands of videos without consuming extra memory.
- 🔔 **UI Notifications:** Native, unobtrusive messages in the player bar showing when a video is being resumed or saved. (Can be disabled in settings, enabled by default)
- 🟢 **Floating button:** Quick access to settings. (Can be disabled in settings, disabled by default)
- 🗂 **Advanced Video Manager:** Full modal with playlists, pre-loaded thumbnails, authors, percentages watched and remaining time.
    - ⏱ Set a "fixed start time" per video to always start from a predictable point (ideal for skipping intros).
    - 🔗 Unlink videos from arbitrary playlists with a single click.
    - 📦 Export/Import your backup to JSON or SQLite databases (100% FreeTube compatible).
    - 📊 Observe your browser's available storage quota.
    - 🔍 **Advance Filters:** Filter videos by: `title`, `author`, `type`, `duration`, `date`, `watched percentage`, `remaining time`, and more.
    - 🔀 Create public YouTube `playlists` on the fly from your watched videos.
    - 🛡 Set a "protect" status to prevent videos from being accidentally deleted in the list.
- 🌍 **Global Support:** Settings and UI fully translated into 50+ native languages.
- ☁️ **Cloud Sync option:** Sync your saved videos with your GitHub account, either via Gist (Secret) or Repository (Private). (Can be enabled in settings, disabled by default)

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

All information is stored by default locally in your browser. **No data is sent to external servers.**

This rule is not applied to the cloud sync feature.

## 📸 Screenshots

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0.0.9-9_ejemplo-alerta-guardado-automatico.png" alt="Example of alert time saved">

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0.0.9-9_ejemplo-modal-videos.png" alt="Example of modal to view saved videos">

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0.0.9-9_ejemplo-modal-configuraciones.png" alt="Example of configuration modal">

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0.0.9-9_ejemplo-crear-playlist.png" alt="Example of playlist creation">

## 🌐 Languages

Do you want to help, collaborate or correct the translation of the script? You can do it from [here](https://github.com/Alplox/Youtube-Playback-Plox/blob/main/translations.json).

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
- [flagpedia.net](https://flagpedia.net) - [CC0 License](https://creativecommons.org/publicdomain/zero/1.0/)
- [IconaMoon](https://github.com/dariushhpg1/IconaMoon) - [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- [Octicons](https://github.com/primer/octicons/) - [MIT](https://spdx.org/licenses/MIT.html)
- [SVG REPO (154204/world-grid)](https://www.svgrepo.com/svg/154204/world-grid) - [CC0 License](https://creativecommons.org/publicdomain/zero/1.0/)
- [SVG REPO (352421/save)](https://www.svgrepo.com/svg/352421/save) - [CC Attribution License](https://creativecommons.org/licenses/by/4.0/)
- [SVG REPO (361211/json)](https://www.svgrepo.com/svg/361211/json) - [MIT](https://spdx.org/licenses/MIT.html)
- [SVG REPO (510144/progress-0)](https://www.svgrepo.com/svg/510144/progress-0) - [MIT](https://spdx.org/licenses/MIT.html)
- [SVG REPO (510145/progress-33)](https://www.svgrepo.com/svg/510145/progress-33) - [MIT](https://spdx.org/licenses/MIT.html)
- [SVG REPO (510146/progress-66)](https://www.svgrepo.com/svg/510146/progress-66) - [MIT](https://spdx.org/licenses/MIT.html)
- [SVG REPO (510147/progress-100)](https://www.svgrepo.com/svg/510147/progress-100) - [MIT](https://spdx.org/licenses/MIT.html)
- [SVG REPO (489146/smartphone-01)](https://www.svgrepo.com/svg/489146/smartphone-01) - [PD License](https://creativecommons.org/publicdomain/zero/1.0/)
- [SVG Icons (285913/freetube)](https://svgicons.com/icon/285913/freetube) - [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)
- [Iconify (majesticons/users-line)](https://icon-sets.iconify.design/majesticons/users-line/) - [MIT](https://spdx.org/licenses/MIT.html)
- [Iconify (svg-spinners/blocks-wave)](https://icon-sets.iconify.design/svg-spinners/blocks-wave/) - [MIT](https://spdx.org/licenses/MIT.html)

## Notice

This project is not affiliated with Google or YouTube.

## Translations README

- [English](README.md)
- [Spanish](README.es.md)