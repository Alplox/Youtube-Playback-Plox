# Documentación: YouTube Helper API (Modificado)

* Originalmente creado por: [ElectroKnight22](https://greasyfork.org/es/scripts/549881-youtube-helper-api)
* Modificado por: [Alplox](https://github.com/Alplox)

YouTube Helper API es una librería diseñada para simplificar la creación de UserScripts en YouTube. Actúa como una capa intermedia (Middleware) que extrae, normaliza y protege el acceso a los datos del reproductor y la página, eliminando las complejidades de las Single Page Applications (SPA) y los cambios frecuentes en el DOM de YouTube.

---

## 🏗️ Arquitectura y Operación

La API opera como un **Singleton versionado** global inyectado en la ventana del navegador. Cada versión exacta (`0.10.1`, `0.11.1`, etc.) tiene su propia instancia aislada para evitar conflictos entre scripts que usan diferentes versiones de la librería.

- **Namespace:** `window.__YT_HELPER_API_x_x_x__` (ej: `__YT_HELPER_API_0_11_1__`)
- **Estado de Inicialización:** Puedes verificar `window.__YT_HELPER_API_0_11_1__.status === 'initialized'`.
- **Acceso:** Mediante la instancia `window.__YT_HELPER_API_0_11_1__.instance`.
- **Versión:** La instancia expone `.version` con la versión exacta cargada.

### Aislamiento de Versiones
Diferentes versiones de la librería coexisten sin interferir entre sí:
- `0.10.1` → `window.__YT_HELPER_API_0_10_1__`
- `0.10.2` → `window.__YT_HELPER_API_0_10_2__` (instancia separada)
- `0.11.1` → `window.__YT_HELPER_API_0_11_1__` (instancia separada)

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

Cada vez que un video está listo o cambia el estado, la API emite un `snapshot` con la siguiente estructura. La disponibilidad de ciertos campos varía según el tipo de contenido y qué datos expone YouTube en cada contexto:

### Disponibilidad de Datos por Tipo de Video

| Campo | Watch | Shorts | Live | Preview | Descripción |
|-------|:-----:|:------:|:----:|:-------:|-------------|
| `id` | ✅ | ✅ | ✅ | ✅ | ID único del video (siempre disponible) |
| `title` | ✅ | ✅ | ✅ | ⚠️ | Título del video (puede estar truncado en previews) |
| `channel` | ✅ | ✅ | ✅ | ⚠️ | Nombre del canal (puede no estar disponible en previews) |
| `channelId` | ✅ | ✅ | ✅ | ❌ | ID del canal del creador |
| `thumbnails` | ✅ | ✅ | ✅ | ✅ | Array de URLs de miniaturas en diferentes resoluciones |
| `lengthSeconds` | ✅ | ✅ | ✅* | ✅ | Duración en segundos (*Live en directo: 0) |
| `viewCount` | ✅ | ❌ | ✅ | ❌ | **Número de vistas (NO disponible en Shorts)** |
| `likeCount` | ✅ | ⚠️ | ✅ | ❌ | Likes (aproximado, varía por tipo) |
| `isCurrentlyLive` | ❌ | ❌ | ✅ | ❌ | `true` si es transmisión en directo activa |
| `isLiveOrVodContent` | ✅ | ❌ | ✅ | ❌ | Indica si el contenido es live o fue live |
| `isFamilySafe` | ✅ | ✅ | ✅ | ❌ | Clasificación de contenido familiar |
| `uploadDate` | ✅ | ⚠️ | ✅ | ❌ | Fecha de subida (ISO string) |
| `publishDate` | ✅ | ⚠️ | ✅ | ❌ | Fecha de publicación pública |
| `description` | ✅ | ✅ | ✅ | ❌ | Descripción completa del video |
| `isInPlaylist` / `playlistId` | ✅ | ❌ | ✅ | ❌ | Información de playlist actual |
| `playingLanguage` | ✅ | ✅ | ✅ | ❌ | Idioma de audio actual (para doblajes) |
| `isAutoDubbed` | ✅ | ❌ | ❌ | ❌ | Si el audio es doblaje automático por IA |

**Leyenda:** ✅ Disponible | ⚠️ Parcial/Variable | ❌ No disponible

### Detalle de Objetos

#### 1. Objeto `video`
Datos extraídos del `playerResponse` de YouTube:
- **Fuente:** `playerResponse.videoDetails` y `playerResponse.microformat.playerMicroformatRenderer`
- **Limitaciones Shorts:** YouTube no expone `viewCount` ni `channelId` consistentemente en el reproductor de Shorts. Para obtener estos datos se requeriría hacer scraping adicional de la página o llamadas a la API interna de YouTube.
- **Limitaciones Preview:** Los previews inline solo proporcionan datos básicos (ID, título, miniaturas). La mayoría de metadatos requieren navegar al video completo.

#### 2. Objeto `player`
Estado del reproductor y controles:
- `isFullscreen` / `isTheater` / `isMiniplayer`: Modos de visualización
- `isPlayingAds`: Detección de anuncios activos
- `videoElement`: Referencia al elemento `<video>` DOM (limpiado en snapshots por seguridad)
- `realCurrentProgress`: Tiempo actual de reproducción en segundos
- `isTimeSpecified`: Si la URL incluye parámetro `?t=`

#### 3. Objeto `page`
Contexto de navegación:
- `type`: `watch`, `shorts`, `embed`, `home`, `results`, `playlist`, `channel`
- `isIframe`: Si el reproductor está en un iframe embed
- `isMobile`: Detección de interfaz móvil

---

## 🔔 Sistema de Eventos

La API utiliza un `EventTarget` centralizado (`api.eventTarget`) para notificar cambios:

- **`yt-helper-api-ready`**: Video nuevo cargado con todos sus metadatos listos. Contiene `detail` con snapshot del estado.
- **`yt-helper-api-update-started`**: Inicio del proceso de actualización de datos del video.
- **`yt-helper-api-current-video-play`**: El video comenzó a reproducirse.
- **`yt-helper-api-current-video-pause`**: El video fue pausado.
- **`yt-helper-api-current-video-seeking`**: Usuario inició una búsqueda (seek) en la línea de tiempo.
- **`yt-helper-api-current-video-seeked`**: Búsqueda completada, video listo en nueva posición.
- **`yt-helper-api-current-video-ended`**: Video llegó al final.
- **`yt-helper-api-current-video-volumechange`**: Cambio de volumen o estado de mute.
- **`yt-helper-api-ad-detected`**: Detectado inicio/fin de anuncio. `detail.isPlayingAds` indica estado. Falla en shorts.
- **`yt-helper-api-chat-state-updated`**: Estado del chat cambió (colapsado/expandido). Solo para directos.
- **`yt-helper-api-playback-language-updated`**: Usuario cambió el idioma de audio (doblaje).
- **`yt-helper-api-detected-iframe`**: El script está ejecutándose en un iframe embed.

### Uso con Constantes (Type-Safe)

En lugar de hardcodear strings, usa las constantes expuestas en `youtubeHelperApi.EVENTS`:

```javascript
// ✅ Recomendado: Evita typos y habilita autocomplete
api.eventTarget.addEventListener(api.EVENTS.API_READY, (e) => {
    console.log('Video listo:', e.detail.video.id);
});

// ❌ No recomendado: String hardcodeado propenso a errores
api.eventTarget.addEventListener('yt-helper-ready', handler); // typo!
```

**Constantes disponibles:**
- `api.EVENTS.API_READY`
- `api.EVENTS.API_UPDATE_STARTED`
- `api.EVENTS.AD_DETECTED`
- `api.EVENTS.VIDEO_PLAY` / `VIDEO_PAUSE` / `VIDEO_SEEKING` / `VIDEO_SEEKED` / `VIDEO_ENDED` / `VIDEO_VOLUMECHANGE`
- `api.EVENTS.VIDEO_LANGUAGE_UPDATED`
- `api.EVENTS.CHAT_STATE_UPDATED`
- `api.EVENTS.IFRAME_DETECTED`

---

## 🌍 Escenarios de Uso

1. **Navegación SPA:** Ideal para scripts que necesitan rastrear el progreso del usuario mientras este salta de video en video en una playlist o en Shorts sin recargar la pestaña.
2. **Control de Anuncios:** Permite pausar lógicas de guardado o análisis mientras un anuncio está en pantalla.
3. **Análisis de Metadatos:** Útil para herramientas que extraen información del canal o calidad del video de forma estructurada.
4. **Sincronización Multi-reproductor:** Maneja correctamente el mini-reproductor (PIP interno de YT) y las previsualizaciones en el Home simultáneamente.

---

> [!IMPORTANT]
> **Seguridad de Memoria:** La API implementa limpieza automática de referencias DOM en los snapshots compartidos para evitar que los scripts "consumidores" bloqueen la recolección de basura (Garbage Collection) de YouTube. 🚀🔒
