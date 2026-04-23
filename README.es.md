[README in English](README.md)

# 🔴 YouTube Playback Plox

Guarda y retoma automáticamente el progreso de videos en YouTube sin necesidad de iniciar sesión.

## Descripción

**YouTube Playback Plox** es un userscript que recuerda automáticamente el punto exacto donde dejaste un video en YouTube, para que puedas retomarlo después sin necesidad de tener una cuenta o iniciar sesión.

Ideal para quienes:

- No quieren depender del historial de YouTube.
- Usan navegadores con bloqueadores o sin cookies persistentes.
- Quieren una experiencia más privada.
- No poseen cuenta de Google.

## ✨ Características

- 🔐 **100% Privado y Local:** Funciona sin cuenta de Google; todo se guarda utilizando `IndexedDB` en tu navegador.
- 🕒 **Guardado automático e inteligente:** Guarda el tiempo y reanuda automáticamente el progreso al volver gracias a detectores aislados por contexto. Desactívalos individualmente desde las opciones:
    - `Videos Regulares`
    - `Miniplayer` 
    - `Shorts` (desactivado por defecto)
    - `Directos` (desactivado por defecto)
    - `Previsualizaciones en inicio` (desactivado por defecto)
- 🔖 **Opción de guardado manual** Guarda el tiempo actual del video con solo presionar un botón en el momento que desees. (Se puede activar desde las opciones, por defecto está desactivado)
- 🛑 **Anti-Ads:** Evita guardar falsos tiempos e identificadores durante los anuncios. (el script no bloquea anuncios)
- ⚡ **Rápido Rendimiento:** Modal de videos guardados reforzado con "Virtual Scrolling" para manejar listas de miles de vídeos al instante y sin consumir memoria extra.
- 🔔 **Notificaciones UI:** Mensajes nativos en la barra del reproductor informando su restauración y guardado sin estorbar tu visión. (Se puede desactivar desde las opciones, por defecto están activadas)
- 🟢 **Botón flotante:** Acceso rápido a la configuración. (Se puede desactivar desde las opciones, por defecto está desactivado)
- 🗂 **Gestor de Videos Avanzado:** Modal completo con lista de reproducciones, miniaturas pre-cargadas, autores, porcentajes vistos y tiempo restante.
    - ⏱ Fija un "tiempo de inicio" por cada video para comenzar siempre desde un punto predecible (ideal para saltar intros).
    - 🔗 Desvincula videos de listas de reproducción arbitrarias en solo 1 click.
    - 📦 Importa/Exporta tu copia de seguridad a JSON o Bases de Datos SQLite (100% Compatible con FreeTube).
    - 📊 Observa cuanta cuota de almacenamiento disponible queda en tu navegador.
    - 🔍 **Filtros Avanzados:** Filtra videos por: `título`, `autor`, `tipo`, `duración`, `fecha`, `porcentaje visto`, `tiempo restante`, y más.
    - 🔀 Crea `playlists` de YouTube públicas sobre la marcha con tus videos guardados.
    - 🛡 Establece un estado de "protección" para evitar que los videos sean borrados accidentalmente en la lista.
- 🌍 **Soporte Global:** Opciones e interfaz completamente traducidas a más de 50 idiomas nativos.
- ☁️ **Opción de sincronización en la nube:** Sincroniza tus videos guardados con tu cuenta de GitHub, ya sea mediante Gist (Secreto) o Repositorio (Privado). (Se puede activar desde las opciones, por defecto está desactivado)

## 🛠️ Requisitos

Necesitas un gestor de scripts de usuario como:

- [Violentmonkey](https://violentmonkey.github.io/) - [GitHub](https://github.com/violentmonkey/violentmonkey)
- [ScriptCat](https://scriptcat.org/en) - [GitHub](https://github.com/scriptscat/scriptcat)
- [Firemonkey](https://addons.mozilla.org/en-US/firefox/addon/firemonkey/) - [GitHub](https://github.com/erosman/firemonkey)

## 📦 Instalación

1. Instala un gestor de userscripts (ver arriba)
2. 📥 [Haz clic aquí para instalar el script](https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/youtube-playback-plox.user.js) o [Ir a Greasyfork](https://greasyfork.org/es/scripts/553387-youtube-playback-plox)

## ¿Cómo funciona?

Este script escucha los eventos del reproductor de YouTube para guardar el tiempo de reproducción cada cierto intervalo o al salir de la página. Cuando visitas nuevamente el mismo video, detecta el ID y busca el último progreso guardado para hacer que el video se reanude automáticamente desde ese punto.

## Privacidad

Toda la información se almacena por defecto localmente en tu navegador. **No se envía ningún dato a servidores externos.**

Esta regla no se aplica a la función de sincronización en la nube.

## 📸 Capturas de pantalla

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0.0.9-9_ejemplo-alerta-guardado-automatico.png" alt="Ejemplo de alerta de tiempo guardado">

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0.0.9-9_ejemplo-modal-videos.png" alt="Ejemplo de modal para ver videos guardados">

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0.0.9-9_ejemplo-modal-configuraciones.png" alt="Ejemplo de modal de configuraciones">

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0.0.9-9_ejemplo-crear-playlist.png" alt="Ejemplo de creación de playlist">

## 🌐 Lenguajes Disponibles

¿Quieres ayudar, colaborar o corregir la traducción del script? Puedes hacerlo desde [aquí](https://github.com/Alplox/Youtube-Playback-Plox/blob/main/translations.json).

| Bandera | Código | Lenguaje |
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

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

## Agradecimientos

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

## Nota

Este proyecto no está afiliado con Google o YouTube.

## Traducciones README

- [English](README.md)
- [Spanish](README.es.md)