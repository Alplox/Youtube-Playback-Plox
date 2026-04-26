[README on English](README.md)

<div align="center">
  <div>
    <img src="https://raw.githubusercontent.com/Alplox/StartpagePlox/refs/heads/main/assets/favicon/android-chrome-512x512.png" alt="YouTube Playback Plox Logo" width="110px" height="110px" style="border-radius: 20px;">
  </div>

  <h1 style="margin-top: 10px;">YouTube Playback Plox</h1>

  <h2>Guarda y reanuda automáticamente el progreso de reproducción de videos en YouTube sin necesidad de iniciar sesión.</h2>

  <div style="display:flex; justify-content: center; align-items: center; gap: 10px">
    <a href="https://greasyfork.org/es/scripts/553387-youtube-playback-plox"><img alt="GreasyFork Version" src="https://img.shields.io/badge/dynamic/regex?url=https%3A%2F%2Fraw.githubusercontent.com%2FAlplox%2FYoutube-Playback-Plox%2Frefs%2Fheads%2Fmain%2Fyoutube-playback-plox.meta.js&search=%40version%5Cs%2B(%5B%5E%5Cs%5D%2B)&label=GreasyFork"/></a>
    <a href="https://github.com/Alplox/Youtube-Playback-Plox/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/badge/LICENSE-MIT-green"/></a>
  </div>

  <br>

  <p>
    <a href="#why-youtube-playback-plox">¿Por qué YPP?</a>
    ◆ <a href="#quick-start">Inicio Rápido</a>
    ◆ <a href="#features">Características</a>
    ◆ <a href="#screenshots">Capturas de Pantalla</a>
    ◆ <a href="#translations">Traducciones</a>
    ◆ <a href="#license">Licencia</a>
  </p>
</div>

<div id="why-youtube-playback-plox"></div>

## ¿Por qué YouTube Playback Plox?

**YouTube Playback Plox** es un userscript que recuerda automáticamente el punto exacto donde dejaste un video en YouTube, para que puedas retomarlo más tarde sin necesidad de una cuenta o iniciar sesión.

- **Privacidad Absoluta** - Para quienes no quieren depender del historial de YouTube. No se requiere cuenta de Google.
- **Memoria Persistente** - Para quienes usen navegadores con bloqueadores o sin historial persistente.
    - ⚠️ **Advertencia:** Borrar "Cookies y datos del sitio" en tu navegador eliminará permanentemente todo el progreso de los videos guardados localmente. ¡Siempre exporta tus datos primero cuando uses esta opción!
- **Capacidades de Sincronización en la Nube** - Sincronización entre dispositivos a través de GitHub usando Repositorios Privados o Gists Secretos.

---

<div id="quick-start"></div>

## Inicio Rápido

> **Requisitos**: Necesitas una extensión de gestor de scripts instalada en tu navegador.

1- **Instalar un Gestor de Scripts**

   - [Violentmonkey](https://violentmonkey.github.io/) - [GitHub](https://github.com/violentmonkey/violentmonkey)
   - [ScriptCat](https://scriptcat.org/en) - [GitHub](https://github.com/scriptscat/scriptcat)
   - [Firemonkey](https://addons.mozilla.org/en-US/firefox/addon/firemonkey/) - [GitHub](https://github.com/erosman/firemonkey).

2- **Instalar el Script**

   📥 **[Haz clic aquí para instalar](https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/youtube-playback-plox.user.js)** o descárgalo directamente desde [GreasyFork](https://greasyfork.org/es/scripts/553387-youtube-playback-plox).

Luego de la instalación, tus videos comenzarán a rastrearse correctamente. Accede al modal de videos guardados directamente dentro de la barra de progreso de YouTube.

---

<div id="features"></div>

## Características

- 🔐 **100% Privado y Local:** Funciona sin cuenta de Google; todo se almacena localmente usando `IndexedDB` en tu navegador.
- 🕒 **Auto-Guardado Inteligente:** Guarda el tiempo y reanuda automáticamente desde ese punto cuando regresas, gracias a detectores aislados por contexto. Activa el seguimiento individualmente en la configuración para:
    - `Regular Videos`
    - `Miniplayer`
    - `Shorts` (desactivado por defecto)
    - `Live streams` (desactivado por defecto)
    - `Previews on home` (desactivado por defecto)
- 🔖 **Opción de Guardado Manual:** Guardar el tiempo de reproducción actual presionando un botón cuando quieras.
- 🛑 **Anti-Ads:** Previene el guardado de tiempos y reproducciones falsas durante los anuncios. (El script no bloquea anuncios. Usa [uBlock Origin](https://github.com/gorhill/uBlock) para bloquear anuncios).
- ⚡ **Rendimiento Rápido:** Emplea "Virtual Scrolling" en el modal de videos guardados para manejar instantáneamente listas de miles de videos sin consumir memoria adicional.
- 🔔 **Notificaciones UI:** Mensajes nativos y discretos en la barra del reproductor que muestran cuándo se está reanudando o guardando un video.
- **Gestor de Videos Avanzado:** Modal completo con playlists, miniaturas precargadas, autores, porcentajes vistos y tiempo restante.
    - ⏱ Establece un "tiempo de inicio fijo" por video para comenzar siempre desde un punto predecible (ideal para saltar intros).
    - 📦 Exporta/Importa tu respaldo a bases de datos JSON o SQLite (100% compatible con FreeTube).
    - 🔍 **Filtros Avanzados:** Filtra videos por: `título`, `autor`, `tipo`, `duración`, `fecha`, `porcentaje visto`, `tiempo restante`, y más.
    - 🔀 Crea `playlists` públicas de YouTube sobre la marcha a partir de tus videos vistos.
    - 🔗 Desvincula videos de listas de reproducción arbitrarias en solo 1 click.
    - 🛡 Establece un estado de "protegido" para evitar que los videos se eliminen accidentalmente.
- ☁️ **Opción de Sincronización en la Nube:** Sincroniza tus videos guardados con tu cuenta de GitHub, ya sea a través de Gist (Secreto) o Repositorio (Privado). (Se puede habilitar en la configuración, deshabilitado por defecto)

---

<div id="screenshots"></div>

## Capturas de Pantalla

<div align="center">
  <img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0.0.9-9_ejemplo-alerta-guardado-automatico.png" alt="Ejemplo de alerta de tiempo guardado" width="750">
</div>
<br>
<div align="center">
  <img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0.0.9-9_ejemplo-modal-videos.png" alt="Ejemplo de modal para ver videos guardados" width="750">
</div>
<br>
<div align="center">
  <img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0.0.9-9_ejemplo-modal-configuraciones.png" alt="Ejemplo de modal de configuración" width="750">
</div>
<br>
<div align="center">
  <img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0.0.9-9_ejemplo-crear-playlist.png" alt="Ejemplo de creación de playlist" width="750">
</div>

---

<div id="translations"></div>

## Traducciones Globales

La configuración y la interfaz de usuario están completamente traducidas a más de 50 idiomas nativos. 

¿Quieres ayudar, colaborar o corregir la traducción del script? Puedes hacerlo desde [aquí](https://github.com/Alplox/Youtube-Playback-Plox/blob/main/translations.json).

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

## Licencia

Este proyecto está licenciado bajo la **Licencia MIT** - ver el archivo [LICENSE](./LICENSE) para más detalles.

## Reconocimientos

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

> **Notice**: Este proyecto no está afiliado con Google o YouTube.

<div align="center">
  <p>
    <strong>Hecho con ❤️ por Alplox</strong><br>
  </p>
</div>