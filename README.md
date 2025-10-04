# YouTube Playback Plox

Guarda y retoma automáticamente el progreso de videos en YouTube sin necesidad de iniciar sesión.

## Descripción

**YouTube Playback Plox** es un userscript que recuerda automáticamente el punto exacto donde dejaste un video en YouTube, para que puedas retomarlo después sin necesidad de tener una cuenta o iniciar sesión.

Ideal para quienes:

- No quieren depender del historial de YouTube.
- Usan navegadores con bloqueadores o sin cookies persistentes.
- Quieren una experiencia más privada.

## Características

- 🕒 Guarda el tiempo actual del video al cerrar la pestaña o navegar.
- 🔁 Retoma automáticamente desde ese punto cuando vuelves al mismo video.
- 🔐 Funciona sin cuenta de Google.
- 🌐 Compatible con:
  - `youtube.com`
  - `youtu.be`
  - `youtube-nocookie.com`
- 💾 Almacena localmente el progreso mediante funciones de Tampermonkey/Greasemonkey.

## 🛠️ Requisitos

Necesitas un gestor de scripts de usuario como:

- [Violentmonkey](https://violentmonkey.github.io/)
- [Tampermonkey](https://www.tampermonkey.net/)
- [Greasemonkey](https://www.greasespot.net/)

## 📥 Instalación

1. Instala un gestor de userscripts (ver arriba)
2. [Haz clic aquí para instalar el script](https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/youtube-playback-plox.user.js)

## ¿Cómo funciona?

Este script escucha los eventos del reproductor de YouTube para guardar el tiempo de reproducción cada cierto intervalo o al salir de la página. Cuando visitas nuevamente el mismo video, detecta el ID y busca el último progreso guardado para hacer que el video se reanude automáticamente desde ese punto.

## Privacidad

Toda la información se almacena localmente en tu navegador. **No se envía ningún dato a servidores externos.**

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.
