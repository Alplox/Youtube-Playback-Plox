# 🔴 YouTube Playback Plox

Guarda y retoma automáticamente el progreso de videos en YouTube sin necesidad de iniciar sesión.

## Descripción

**YouTube Playback Plox** es un userscript que recuerda automáticamente el punto exacto donde dejaste un video en YouTube, para que puedas retomarlo después sin necesidad de tener una cuenta o iniciar sesión.

Ideal para quienes:

- No quieren depender del historial de YouTube.
- Usan navegadores con bloqueadores o sin cookies persistentes.
- Quieren una experiencia más privada.

## ✨ Características

- 🕒 Guarda el tiempo actual del video al cerrar la pestaña o navegar.
- 🔁 Retoma automáticamente desde ese punto cuando vuelves al mismo video.
- 🔐 Funciona sin cuenta de Google; todo se almacena localmente en tu navegador.
- 💾 Almacena localmente el progreso mediante funciones de Tampermonkey/Greasemonkey.
- 🟢 Botón flotante para acceso rápido.
- 🔔 Mensajes integrados en la barra del reproductor mostrando cuándo se ha retomado o se está guardando progreso.
- ⏱ Establecer un "tiempo de inicio fijo" por video para que siempre comience desde un punto concreto.
- 🗂 Modal con lista de videos guardados, miniaturas, autor, porcentaje visto y tiempo restante.
- 📦 Exporta/Importa todos los datos guardados a un JSON.

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

<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0-0-2_ejemplo-alerta-retomado.png" alt="Ejemplo de alerta tiempo cargado">
<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0-0-2_ejemplo-tiempo-guardado.png" alt="Ejemplo de notificacion tiempo guardado">
<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0-0-2_ejemplo-tiempo-fijo.png" alt="Ejemplo de alerta tiempo fijo cargado">
<img src="https://raw.githubusercontent.com/Alplox/Youtube-Playback-Plox/refs/heads/main/imagenes/v0-0-2_ejemplo-modal-videos.png" alt="Ejemplo de modal visualizar videos guardados">

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.
