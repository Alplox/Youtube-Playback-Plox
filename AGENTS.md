
# AGENTS.md - YouTube Playback Plox

> Lee este archivo completo antes de modificar cualquier código.
> Todas las reglas son mandatorias.

---

## 1. ¿Qué hace este proyecto?

Userscript de **archivo único** (~16,000 líneas) que guarda y reanuda la
posición de reproducción en YouTube sin login. Cubre: videos regulares,
Shorts, Miniplayer e Inline Previews (hover en el Home).

Archivo principal: `youtube-playback-plox.user.js`
Dependencia externa: `YouTube-Helper-API.js` (vía `@require`)

---

## 2. Reglas Absolutas

### 2.1 Versión - Fuente de Verdad
- El campo `@version` en el encabezado del script (línea ~114) es la
  **única** autoridad. NUNCA lo incrementes ni inventes.
- Si hay desincronía entre script y `changelog.md`: registra cambios en
  changelog bajo la versión actual del script, sin tocar `@version`.

### 2.2 Un solo archivo - Sin duplicados
Busca antes de crear. Reutiliza lo existente:

| Categoría | Nombre real en código |
|---|---|
| Selectores compilados | `S.IDS`, `S.CLASSES`, `S.ELEMENTS`, `S.ATTR` |
| Constantes de IDs | `IDs` (objeto) |
| Constantes de clases | `CLASSES` (objeto) |
| Constantes de atributos | `ATTRIBUTES` (objeto) |
| Constantes de elementos | `ELEMENTS` (objeto) |
| Cache de DOM con TTL | `DOMHelpers.get(key, getter, ttlMs)` |
| Controlador de reproducción | `PlaybackController` |
| Almacenamiento async | `StorageAsync` / `Storage` |
| Resolver de contexto | `RouteContextResolver` |

### 2.3 Prohibiciones explícitas

| Prohibido | Alternativa |
|---|---|
| `var` | `const` / `let` |
| Ejecutar el commit sugerido en consola | Solo proponerlo en bloque de código |
| Inyección HTML directa | `setInnerHTML()` (TrustedTypes compliant) |
| Acceso DOM sin cache | `DOMHelpers.get()` con TTL 100–250ms |
| Guardados más frecuentes de 1/segundo | Throttle vía `minSecondsBetweenSaves` |
| Almacenar elementos DOM en `Map`/`Set` | `WeakMap` |
| `MINIPLAYER_SELECTORS` o `SHORTS_SELECTORS` | No existen; usar `S.IDS`, `S.CLASSES`, etc. |
| `domQueryCache` | No existe; usar `DOMHelpers.get()` |
| Modificar `translations.json` | Limitarse a solo modificar `const FALLBACK_TRANSLATIONS`|

---

## 3. Arquitectura - Mapa de Componentes

```
youtube-playback-plox.user.js
│
├── StorageAsync / Storage      ← Persistencia (IndexedDB + fallback GM_*)
│     └── REGLA: siempre await en get/set/keys/del
│
├── DOMHelpers                  ← Cache de elementos DOM (TTL 125ms por defecto)
│     ├── getWatchPlayer()
│     ├── getShortsPlayer()
│     ├── getMiniplayerElementActive()
│     ├── getInlinePreviewPlayer()
│     └── get(key, getter, ttlMs)  ← Lookup genérico con cache
│
├── AdDetector                  ← Bloquea guardado durante anuncios
│     ├── isNodeWithinAdContainer(node)
│     ├── findVisibleAdUi(root)
│     └── isVideoIdAnAd(videoId)  ← Búsqueda inversa por videoId
│
├── RouteContextResolver        ← Determina contexto real del video
│     ├── resolveContext(videoEl, preferredContext)  ← Sistema de scoring
│     ├── canProcessContext(videoEl, context)
│     └── isContextLocked(videoEl, expectedContext)  ← Validación final
|
│   Pipeline de seguridad de sesiones:
├── EventPreFilter              ← Descarta eventos inválidos antes de procesar
├── FailSafeManager             ← Detecta loops/errores y activa safe mode
├── SessionTelemetry            ← Logging estructurado de decisiones de routing
├── SessionFallbackManager      ← Watchdog para sesiones que no arrancan
|
├── activeProcessingSessions    ← Map<HTMLVideoElement, Session>
│     NOTA: Es Map (no WeakMap) intencionalmente - requiere
│     iteración en stopAllSessions(), FailSafeManager y navegación.
│     Limpieza explícita vía SessionOrchestrator.finalizeSession().
|
├── SessionOrchestrator         ← Máquina de estados de sesiones
│     │   Estados: idle→starting→active→inAd/transitioning→stopping→finalized
│     ├── startSession(videoEl, context, videoId, player, source)
│     ├── finalizeSession(videoEl, reason)
│     └── handoffSession(videoEl, toVideoId, reason, mode)
│
├── VideoObserverManager        ← Orquestador central de detección de videos
│     ├── init(forceBootstrap, preserveMiniplayer, skipCleanup)
│     ├── bootstrap(force)       ← Escaneo inicial del DOM
│     ├── enqueueVideo(videoEl, type, source)
│     ├── enqueueWithResolver(videoEl, preferredType, source)
│     └── requeueMiniplayer(videoEl)
│
├── startProcessingSession()    ← Inicia sesión de polling para un video
│     ⚠️  PATRÓN OBLIGATORIO: Ver sección "Sesiones con operaciones async"
│     Después de cualquier await interno, verificar:
│     1. activeProcessingSessions.get(videoEl) === sessionRef
│     2. !sessionRef.isFinalized
│     3. sessionRef.intervalId = intervalId  (registrar ANTES del Object.assign)
|
├── PlaybackController          ← Punto central de guardado y reanudación
│     ├── saveStatus(player, videoEl, type, videoId, videoInfo, options)
│     └── resume(player, videoId, videoEl, savedData, type, cachedVideoInfo)
│
├── getCascadedVideoInfo()      ← Metadatos (Waterfall: API → YTHelper → DOM)
│     Nivel 1: player.getPlayerResponse() / getVideoData() / microformat
│     Nivel 2: YTHelper global
│     Nivel 3: DOM fallbacks + fetch
│
└── YTHelper / youtubeHelperApi ← Instancia global de YouTube-Helper-API.js
```

**Selectores de nombres correctos:**
```
S.IDS.MOVIE_PLAYER          → '#movie_player'
S.IDS.SHORTS_PLAYER         → '#shorts-player'
S.ELEMENTS.MINIPLAYER_ELEMENT → 'ytd-miniplayer'
S.CLASSES.MINIPLAYER_COMPONENT_VISIBLE → '.ytdMiniplayerComponentVisible'
S.ATTR.MINIPLAYER_ACTIVE_ATTR → '[miniplayer-is-active]'
```

---

## 4. Ciclo de vida de una sesión

```
VideoObserverManager detecta <video> con src
        ↓
EventPreFilter.shouldDrop() - descarta si es inválido
        ↓
RouteContextResolver.canProcessContext() - valida contexto
        ↓
AdDetector.isNodeWithinAdContainer() - descarta si es anuncio
        ↓
enqueueVideo(videoEl, type)
        ↓
processBatch() → process[Watch|Shorts|Miniplayer|Preview]Video()
        ↓
SessionOrchestrator.startSession() - crea sesión con token único
        ↓
startProcessingSession() - resume + setInterval de guardado
        ↓
PlaybackController.saveStatus() cada N segundos
        ↓
SessionOrchestrator.finalizeSession() al navegar/cambiar video
```

---

## 5. Estándares de Código (ES2025+)

**Sintaxis:** arrow functions, `const`/`let`, `??`, `?.`  
PROHIBIDO: `var`

**Rendimiento:**
- DOM: `DOMHelpers.get(key, getter, ttlMs)` - nunca acceder al DOM en loops sin cachear
- Throttle: mínimo 1s entre guardados (configurable en settings)
- UI: `requestAnimationFrame` para cambios visuales
- I/O: `async/await` sin bloquear hilo principal

**Seguridad de memoria:**
- `WeakMap` para datos asociados a elementos DOM cuando NO necesitas
  iterar sobre ellos (ej: `_adContainerCache`, `playerVideoIdCache`,
  `seekPlayListeners`, `recentResumeAttempts`).
- `Map` cuando necesitas iterar, filtrar o limpiar en bulk
  (ej: `activeProcessingSessions` - las sesiones requieren iteración
  en `stopAllSessions()`, `FailSafeManager` y detección de navegación).
  En estos casos, la limpieza de memoria es responsabilidad explícita
  de `SessionOrchestrator.finalizeSession()` y `stopAllSessions()`.
- NUNCA usar `Map` con elementos DOM como clave si no necesitas
  iteración - en ese caso siempre `WeakMap`.
- `AbortController` en sesiones (campo `session.abortController`)
- `cleanupAll()` / `closeModalVideos()` al navegar (limpia listeners)

**HTML seguro:** siempre `setInnerHTML(element, html)` - nunca `.innerHTML =`

**JSDoc:** en todas las funciones públicas y helpers

### Patrón: Sesiones con operaciones async internas

Cuando `startProcessingSession` hace `await` internamente (ej: `getCascadedVideoInfo`), el estado puede cambiar durante la espera. Siempre verificar después de cualquier await:

1. `activeProcessingSessions.get(videoEl) === sessionRef` - confirma que la sesión no fue reemplazada por otra más reciente.
2. `!sessionRef.isFinalized` - confirma que no fue terminada explícitamente (ej: por limpieza de navegación).
3. Registrar `sessionRef.intervalId` inmediatamente al crear el interval, no al final del setup, para que `finalizeSession` siempre pueda limpiarlo.
4. El check `navIdAtStart !== globalNavigationId` NO es suficiente para miniplayer porque esa excepción es intencionalmente permisiva. Siempre usar los checks de sesión indicados arriba.

---

## 6. Flujo de Trabajo

### Antes de modificar
- [ ] Leer versión actual en el script → anotarla
- [ ] Buscar en el código si ya existe la función/selector (sección 2.2 y 3)
- [ ] Evaluar impacto en transiciones SPA (Watch ↔ Miniplayer ↔ Shorts)

### Durante la edición
- [ ] JSDoc en funciones nuevas o modificadas
- [ ] Configuración separada de lógica
- [ ] Nombres descriptivos - prohibido `foo`, `bar`, `tmp`, `x`

### Después de editar
- [ ] Actualizar `changelog.md` en la sección que coincide con `@version`
- [ ] Documentar edge-cases en `docs/gotchas.md`
- [ ] Verificar estabilidad en transiciones SPA

### Después de cambios estructurales significativos
Si añadiste/renombraste/eliminaste una sección MARK, una clase,
o un módulo IIFE relevante:
- [ ] Ejecutar `node ./scripts/generate-structure.mjs`

### Mensaje de commit (OBLIGATORIO al finalizar)
Propón en bloque de código, **PROHIBIDO ejecutarlo:**

```
feat: descripción concisa en inglés
```

Prefijos (Conventional Commits): `feat:` `fix:` `style:` `refactor:` `perf:` `test:` `docs:` `chore:`

---

## 7. Estado de Tarea (tareas multi-paso)

Para cualquier tarea con más de un archivo o más de 3 cambios,
mantener `docs/estado_tarea.md`:

```markdown
## Objetivo
- [ ] Confirmado: ...
- [ ] Inferido: ...

## Decisiones Técnicas
| Decisión | Justificación |
|---|---|
| ... | ... |

## Progreso
- [x] Paso completado
- [ ] Paso pendiente

## Riesgos
- ...
```

---

## 8. Referencia Rápida

| Necesito... | Usar... |
|---|---|
| Guardar progreso de video | `PlaybackController.saveStatus()` |
| Reanudar video en tiempo guardado | `PlaybackController.resume()` |
| Metadatos del video (cascada) | `getCascadedVideoInfo()` |
| Detectar si nodo es anuncio | `AdDetector.isNodeWithinAdContainer()` |
| Encontrar UI de anuncio visible | `AdDetector.findVisibleAdUi(root)` |
| Leer/escribir datos del usuario | `Storage.get()` / `Storage.set()` con `await` |
| Verificar contexto del video | `RouteContextResolver.isContextLocked()` |
| Acceder al DOM con cache | `DOMHelpers.get(key, getter, ttlMs?)` |
| Obtener player de Watch | `DOMHelpers.getWatchPlayer()` |
| Obtener player de Shorts | `DOMHelpers.getShortsPlayer()` |
| Obtener player de Miniplayer | `DOMHelpers.getMiniplayerPlayer()` |
| Re-encolar video en observador | `VideoObserverManager.enqueueWithResolver()` |
| Finalizar sesión manualmente | `SessionOrchestrator.finalizeSession()` |
| Mostrar toast al usuario | `showFloatingToast(message, duration?, options?)` |
| Crear elemento DOM | `createElement(tag, options)` |
| Escapar HTML | `escapeHTML(str)` |
| Formatear tiempo a MM:SS | `formatTime(seconds)` |
| Parsear "1:23" a segundos | `parseTimeToSeconds(timeStr)` |
