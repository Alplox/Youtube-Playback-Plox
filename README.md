[README en Español](README.es.md)

<div align="center">
  <div>
    <img src="https://raw.githubusercontent.com/Alplox/StartpagePlox/refs/heads/main/assets/favicon/android-chrome-512x512.png" alt="YouTube Playback Plox Logo" width="110px" height="110px" style="border-radius: 20px;">
  </div>

  <h1 style="margin-top: 10px;">YouTube Playback Plox</h1>

  <h2>Saves and automatically resumes the playback progress of videos on YouTube without needing to log in.</h2>

  <div style="display:flex; justify-content: center; align-items: center; gap: 10px">
    <a href="https://greasyfork.org/es/scripts/553387-youtube-playback-plox"><img alt="GreasyFork Version" src="https://img.shields.io/badge/dynamic/regex?url=https%3A%2F%2Fraw.githubusercontent.com%2FAlplox%2FYoutube-Playback-Plox%2Frefs%2Fheads%2Fmain%2Fyoutube-playback-plox.meta.js&search=%40version%5Cs%2B(%5B%5E%5Cs%5D%2B)&label=GreasyFork"/></a>
    <a href="https://github.com/Alplox/Youtube-Playback-Plox/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/badge/LICENSE-MIT-green"/></a>
  </div>

  <br>

  <p>
    <a href="#why-youtube-playback-plox">Why YPP?</a>
    ◆ <a href="#quick-start">Quick Start</a>
    ◆ <a href="#features">Features</a>
    ◆ <a href="#screenshots">Screenshots</a>
    ◆ <a href="#translations">Translations</a>
    ◆ <a href="#license">License</a>
  </p>
</div>

<div id="why-youtube-playback-plox"></div>

## Why YouTube Playback Plox?

**YouTube Playback Plox** is a userscript that automatically remembers the exact point where you left off in a YouTube video, so you can resume it later without needing an account or logging in.

- **Absolute Privacy** - For those who don't want to depend on YouTube's history. No Google account required.
- **Persistent Memory** - For those who use browsers with blockers or without persistent history.
    - ⚠️ **Warning:** Clearing "Cookies and site data" in your browser will permanently delete all saved video progress. Always export your data first when using this option!
- **Cloud Sync Capabilities** - Sync between devices through GitHub using Private Repositories or Secret Gists.

---

<div id="quick-start"></div>

## Quick Start

> **Requirements**: You need a script manager extension installed in your browser.

1- **Install a Script Manager**

   - [Violentmonkey](https://violentmonkey.github.io/) - [GitHub](https://github.com/violentmonkey/violentmonkey)
   - [ScriptCat](https://scriptcat.org/en) - [GitHub](https://github.com/scriptscat/scriptcat)
   - [Firemonkey](https://addons.mozilla.org/en-US/firefox/addon/firemonkey/) - [GitHub](https://github.com/erosman/firemonkey).

2- **Install the Script**

   📥 **[Click here to install](https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/youtube-playback-plox.user.js)** or download it directly from [GreasyFork](https://greasyfork.org/es/scripts/553387-youtube-playback-plox).

After installation, your videos will start tracking correctly. Access the saved videos modal directly within the YouTube progress bar.

---

<div id="features"></div>

## Features

- 🔐 **100% Private and Local:** Works without a Google account; everything is stored locally using `IndexedDB` in your browser.
- 🕒 **Smart Auto-Save:** Automatically saves the time and resumes from that point when you return, thanks to context-isolated detectors. Enable tracking individually in the settings for:
    - `Regular Videos`
    - `Miniplayer`
    - `Shorts` (disabled by default)
    - `Live streams` (disabled by default)
    - `Previews on home` (disabled by default)
- 🔖 **Manual Save Option:** Save the current playback time by pressing a button whenever you want.
- 🛑 **Anti-Ads:** Prevents the saving of times and false plays during ads. (The script does not block ads. Use [uBlock Origin](https://github.com/gorhill/uBlock) to block ads).
- ⚡ **Fast Performance:** Uses "Virtual Scrolling" in the saved videos modal to instantly handle lists of thousands of videos without consuming additional memory.
- 🔔 **UI Notifications:** Native and discreet messages in the player bar that show when a video is being resumed or saved.
- **Advanced Video Manager:** Complete modal with playlists, preloaded thumbnails, authors, percentages viewed, and remaining time.
    - ⏱ Set a "fixed start time" per video to always start from a predictable point (ideal for skipping intros).
    - 📦 Export/Import your backup to JSON or SQLite databases (100% compatible with FreeTube).
    - 🔍 **Advanced Filters:** Filter videos by: `title`, `author`, `type`, `duration`, `date`, `percentage viewed`, `remaining time`, and more.
    - 🔀 Create public YouTube `playlists` on the fly from your viewed videos.
    - 🔗 Unlink videos from arbitrary playlists in just 1 click.
    - 🛡 Set a "protected" state to prevent videos from being accidentally deleted.
- ☁️ **Cloud Sync Option:** Sync your saved videos with your GitHub account, either through Gist (Secret) or Repository (Private). (Can be enabled in the configuration, disabled by default)

---

<div id="screenshots"></div>

## Screenshots

<div align="center">
  <img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/images/v0.0.9-9_ejemplo-alerta-guardado-automatico.png" alt="Example of alert time saved" width="750">
</div>
<br>
<div align="center">
  <img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/images/v0.0.9-9_ejemplo-modal-videos.png" alt="Example of modal to view saved videos" width="750">
</div>
<br>
<div align="center">
  <img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/images/v0.0.9-9_ejemplo-modal-configuraciones.png" alt="Example of configuration modal" width="750">
</div>
<br>
<div align="center">
  <img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/images/v0.0.9-9_ejemplo-crear-playlist.png" alt="Example of playlist creation" width="750">
</div>

---

<div id="translations"></div>

## Global Translations

Settings and UI are fully translated into 50+ native languages. 

Do you want to help, collaborate or correct the translation of the script? You can do it from [here](https://github.com/Alplox/Youtube-Playback-Plox/blob/main/translations.json).

| Language | Code | | Language | Code |
|:----------|:-----|---|:----------|:-----|
| 🇬🇧 English (UK) | `en-GB` | | 🇺🇸 English (US) | `en-US` |
| 🇪🇸 Español | `es-ES` | | 🇪🇸 Español (Latam) | `es-419` |
| 🇪🇸 Català | `ca` | | 🇫🇷 Français | `fr` |
| 🇩🇪 Deutsch | `de` | | 🇮🇹 Italiano | `it` |
| 🇵🇹 Português | `pt` | | 🇳🇱 Nederlands | `nl` |
| 🇵🇱 Polski | `pl` | | 🇸🇪 Svenska | `sv` |
| 🇩🇰 Dansk | `da` | | 🇳🇴 Norsk | `no` |
| 🇫🇮 Suomi | `fi` | | 🇨🇿 Čeština | `cs` |
| 🇸🇰 Slovenčina | `sk` | | 🇭🇺 Magyar | `hu` |
| 🇷🇴 Română | `ro` | | 🇧🇬 Български| `bg` |
| 🇬🇷 Ελληνικά | `el` | | 🇷🇸 Српски| `sr` |
| 🇭🇷 Hrvatski | `hr` | | 🇸🇮 Slovenščina | `sl` |
| 🇱🇹 Lietuvių | `lt` | | 🇱🇻 Latviešu | `lv` |
| 🇺🇦 Українська | `uk` | | 🇷🇺 Русский | `ru` |
| 🇹🇷 Türkçe | `tr` | | 🇸🇦 العربية | `ar` |
| 🇮🇷 فارسی | `fa` | | 🇮🇱 עברית | `he` |
| 🇮🇳 हिन्दी | `hi` | | 🇧🇩 বাংলা | `bn` |
| 🇮🇳 తెలుగు | `te` | | 🇱🇰 தமிழ் | `ta` |
| 🇮🇳 मराठी | `mr` | | 🇨🇳 简体中文 | `zh` |
| 🇹🇼 繁體中文 | `zh-TW` | | 🇭🇰 粵語 | `yue` |
| 🇭🇰 繁體中文 (HK) | `zh-HK` | | 🇯🇵 日本語 | `ja` |
| 🇰🇷 한국어 | `ko` | | 🇹🇭 ไทย | `th` |
| 🇻🇳 Tiếng Việt | `vi` | | 🇮🇩 Indonesia | `id` |
| 🇲🇾 Melayu | `ms` | | 🇵🇭 Filipino | `tl` |
| 🇲🇲 မြန်မာ | `my` | | 🇰🇪 Kiswahili | `sw` |

---

<div id="license"></div>

## License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

## Acknowledgments

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
- [SVG REPO (345233/translate)](https://www.svgrepo.com/svg/345233/translate) - [MIT](https://spdx.org/licenses/MIT.html)
- [SVG Icons (285913/freetube)](https://svgicons.com/icon/285913/freetube) - [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)
- [Iconify (svg-spinners/blocks-wave)](https://icon-sets.iconify.design/svg-spinners/blocks-wave/) - [MIT](https://spdx.org/licenses/MIT.html)

> **Notice**: This project is not affiliated with Google or YouTube.

<div align="center">
  <p>
    <strong>Built with ❤️ by Alplox</strong><br>
  </p>
</div>