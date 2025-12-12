[English version](README.md)

# 🔴 YouTube Playback Plox

Guarda y retoma automáticamente el progreso de videos en YouTube sin necesidad de iniciar sesión.

## Descripción

**YouTube Playback Plox** es un userscript que recuerda automáticamente el punto exacto donde dejaste un video en YouTube, para que puedas retomarlo después sin necesidad de tener una cuenta o iniciar sesión.

Ideal para quienes:

- No quieren depender del historial de YouTube.
- Usan navegadores con bloqueadores o sin cookies persistentes.
- Quieren una experiencia más privada.

## ✨ Características

- 🔐 Funciona sin cuenta de Google; todo se almacena localmente en tu navegador.
- 🕒 Guarda el tiempo y retoma automáticamente desde ese punto cuando vuelves al mismo video.
    - `Videos`
        - `Miniplayer`
    - `Shorts` (por defecto desactivado)
    - `Transmisiones en directo` (por defecto desactivado)
    - `Previsualizaciones en inicio` (por defecto desactivado)
- 🛑 Detiene guardado durante anuncios.
- 🔔 Mensajes integrados en la barra del reproductor mostrando cuándo se ha retomado o se está guardando progreso.
- 🟢 Botón flotante para acceso rápido a configuraciones.
- 🗂 Modal con lista de videos guardados, miniaturas, autor, porcentaje visto y tiempo restante.
    - ⏱ Establecer un "tiempo de inicio fijo" por video para que siempre comience desde un punto concreto.
    - 📦 Exporta/Importa todos los datos guardados a un JSON o DB (Compatible con historial de Freetube).
    - 🔀 Crea playlists públicas a partir de videos vistos.

## 🌐 Lenguajes Disponibles

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

## 🛠️ Requisitos

Necesitas un gestor de scripts de usuario como:

- [Violentmonkey](https://violentmonkey.github.io/)
- [Tampermonkey](https://www.tampermonkey.net/)
- [Greasemonkey](https://www.greasespot.net/)

## 📦 Instalación

1. Instala un gestor de userscripts (ver arriba)
2. 📥 [Haz clic aquí para instalar el script](https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/youtube-playback-plox.user.js) o [Ir a Greasyfork](https://greasyfork.org/es/scripts/553387-youtube-playback-plox)

## ¿Cómo funciona?

Este script escucha los eventos del reproductor de YouTube para guardar el tiempo de reproducción cada cierto intervalo o al salir de la página. Cuando visitas nuevamente el mismo video, detecta el ID y busca el último progreso guardado para hacer que el video se reanude automáticamente desde ese punto.

## Privacidad

Toda la información se almacena localmente en tu navegador. **No se envía ningún dato a servidores externos.**

## 📸 Capturas de pantalla

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0-0-7_ejemplo-alerta-guardado.png" alt="Ejemplo de alerta de tiempo guardado">

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0-0-7_ejemplo-modal-videos.png" alt="Ejemplo de modal para ver videos guardados">

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0-0-7_ejemplo-modal-config.png" alt="Ejemplo de modal de configuración">

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0-0-7_ejemplo-crear-playlist.png" alt="Ejemplo de creación de playlist">

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

## Agradecimientos

- [YouTube Helper API](https://greasyfork.org/es/scripts/549881-youtube-helper-api) - [MIT](https://spdx.org/licenses/MIT.html)

## Nota

Este proyecto no está afiliado con Google o YouTube.

## Traducciones

- [English](README.md)
- [Spanish](README.es.md)