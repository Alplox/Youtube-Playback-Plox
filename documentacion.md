# Documentación: YouTube Helper API (v0.10.x-Plox)

* Originalmente creado por: [ElectroKnight22](https://greasyfork.org/es/scripts/549881-youtube-helper-api)

YouTube Helper API es una librería diseñada para simplificar la creación de UserScripts en YouTube. Actúa como una capa intermedia (Middleware) que extrae, normaliza y protege el acceso a los datos del reproductor y la página, eliminando las complejidades de las Single Page Applications (SPA) y los cambios frecuentes en el DOM de YouTube.

---

## 🏗️ Arquitectura y Operación

La API opera como un **Singleton** global inyectado en la ventana del navegador.

- **Namespace:** `window.__YT_HELPER_API__`
- **Estado de Inicialización:** Puedes verificar `window.__YT_HELPER_API__.status === 'initialized'`.
- **Acceso:** Mediante la instancia `window.__YT_HELPER_API__.instance`.

### ¿Cómo permite operar?
1. **Abstracción del DOM:** No necesitas buscar selectores complejos; la API te entrega objetos limpios.
2. **Protección via Proxy:** Proporciona un `apiProxy` que envuelve al reproductor de YouTube, permitiendo llamadas seguras que fallan con "no-ops" en lugar de crashear el script si el reproductor no está listo.
3. **Manejo de SPA:** Detecta automáticamente cambios de video sin recarga de página y dispara eventos consistentes.

---

## 🎬 Tipos de Videos Soportados

La API clasifica y soporta los siguientes contenidos:

| Tipo | Descripción |
| :--- | :--- |
| **Video (`video`)** | Videos estándar de la página `/watch`. |
| **Shorts (`shorts`)** | Videos verticales en la sección `/shorts`. |
| **Live (`live`)** | Emisiones en directo (parcialmente soportado según metadatos disponibles). |
| **Previews (`preview`)** | Videos que se reproducen automáticamente al pasar el cursor en Home o Búsqueda. |

---

## 📊 Datos Proporcionados (Snapshot)

Cada vez que un video está listo o cambia el estado, la API emite un `snapshot` con la siguiente estructura:

### 1. Objeto [video]
- `id`: ID único del video.
- `title`: Título completo.
- `channel` / `channelId`: Nombre e ID del creador.
- `thumbnails`: Array de objetos con URLs de miniaturas.
- `lengthSeconds`: Duración total.
- `viewCount` / `likeCount`: Estadísticas actuales.
- `isCurrentlyLive`: Booleano para directos.
- `isFamilySafe`: Booleano de clasificación.
- `isInPlaylist` / `playlistId`: Información sobre si el video pertenece a una lista.
- `playingLanguage` / `isAutoDubbed`: Soporte para cambio de idioma y doblaje por IA de YouTube.

### 2. Objeto [player]
- `isFullscreen` / `isTheater`: Estado de la interfaz.
- `isPlayingAds`: Detecta si hay un anuncio activo (pre-roll, mid-roll).
- `videoElement`: Referencia al elemento `<video>` (limpiado en snapshots externos por seguridad).

### 3. Objeto [page]
- [type]: Contexto actual ([watch], `shorts`, `embed`, `home`, `results`, etc.).

---

## 🔔 Sistema de Eventos

La API utiliza un `EventTarget` centralizado (`api.eventTarget`) para notificar cambios:

- **`yt-helper-api-ready`**: Se dispara cuando un video nuevo ha cargado y todos sus metadatos están listos.
- **`yt-helper-api-current-video-play` / `pause`**: Notifica cambios en el estado de reproducción.
- **`yt-helper-api-ad-detected`**: Se activa inmediatamente al detectar el inicio o fin de un anuncio.
- **`yt-helper-api-chat-state-updated`**: Útil para directos, indica si el chat está colapsado.
- **`yt-helper-api-playback-language-updated`**: Notifica cuando el usuario cambia el idioma del audio (Doblaje).

---

## 🌍 Escenarios de Uso

1. **Navegación SPA:** Ideal para scripts que necesitan rastrear el progreso del usuario mientras este salta de video en video en una playlist o en Shorts sin recargar la pestaña.
2. **Control de Anuncios:** Permite pausar lógicas de guardado o análisis mientras un anuncio está en pantalla.
3. **Análisis de Metadatos:** Útil para herramientas que extraen información del canal o calidad del video de forma estructurada.
4. **Sincronización Multi-reproductor:** Maneja correctamente el mini-reproductor (PIP interno de YT) y las previsualizaciones en el Home simultáneamente.

---

> [!IMPORTANT]
> **Seguridad de Memoria:** La API implementa limpieza automática de referencias DOM en los snapshots compartidos para evitar que los scripts "consumidores" bloqueen la recolección de basura (Garbage Collection) de YouTube. 🚀🔒
