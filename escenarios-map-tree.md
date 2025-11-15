YouTube
│
├── 🏠 Homepage
│   ├── ▶️ Abrir video individual
│   │   ├── Reproduce en reproductor principal
│   │   ├── Agregar a playlist / Mix
│   │   │   └── Cambia al modo Playlist (contexto Mix)
│   │   ├── Ir a Home → Miniplayer inactivo
│   │   ├── Ir a Shorts → Reproduce Short (video se pausa o pasa a miniplayer)
│   │   └── Abrir video sugerido → reemplaza reproducción actual 
│   │
│   ├── 🎵 Abrir video miembro de Playlist / Mix
│   │   ├── Reproduce en contexto Playlist / Mix
│   │   │   ├── Siguiente / Anterior → mantiene contexto Playlist / Mix
│   │   │   ├── Ir a Home → Miniplayer activo (Playlist / Mix continúa)
│   │   │   ├── Ir a Shorts → Short reproduce + miniplayer activo
│   │   │   └── Abrir video fuera del Playlist / Mix → Playlist / Mix se cierra
│   │
│   ├── 📺 Ir a Shorts
│   │   ├── Reproduce Short
│   │   │   ├── Deslizar → siguiente Short
│   │   │   ├── Abrir enlace a video normal → Página de video (modo estándar)
│   │   │   └── Regresar → vuelve al Short anterior
│   │   └── Si hay miniplayer activo → sigue reproduciendo en segundo plano
│   │
│   ├── 🔎 Buscar contenido
│   │   ├── Seleccionar video individual → Página de video
│   │   └── Seleccionar playlist / Mix → Página de playlist
│   │
│   └── 🧭 Desde canal
│       ├── Abrir video / Short / Playlist desde pestaña del canal
│       ├── Navegar entre pestañas (Videos, Shorts, En vivo, Comunidad)
│       └── Regresar a Home → activa miniplayer si procede 
│
├── 🎬 Página de Video (Video normal)
│   ├── ▶️ Reproducir video
│   │   ├── Reproduce video actual
│   │   ├── Abrir “Siguiente” sugerido → Nuevo video (miniplayer se reinicia)
│   │   ├── Click en logo de YouTube → Regreso a Homepage
│   │   │   └── Activa miniplayer con video actual
│   │   ├── Ir a Shorts → Reproduce Short (mantiene miniplayer activo)
│   │   └── Agregar video a Mix → Redirige a Playlist tipo Mix
│   │   └── Pantalla completa / teatro / PIP → cambia modo visual
│   │   └── Enviar a TV / Chromecast → control remoto activo 
│   │
│   ├── 📜 Abrir playlist asociada (si forma parte de una)
│   │   └── Cambia vista a Playlist
│   │
│   ├── 🔗 Navegar a otro video (descripción / comentarios / comunidad)
│   │   ├── Nuevo video → reemplaza reproducción actual
│   │   ├── Enlace a Short → Página de Shorts
│   │   └── Enlace a Playlist → Página de Playlist
│   │
│   └── 💬 Interacción en tiempo real
│       ├── Activar subtítulos, velocidad, calidad
│       ├── Guardar / “Ver más tarde”
│       └── Compartir (copiar enlace, abrir externo) 
│
├── 🎵 Página de Playlist / Mix
│   ├── Reproduce primer video del Playlist / Mix
│   │   ├── Siguiente / Anterior → mantiene contexto del Playlist / Mix
│   │   ├── Ir a Home → Miniplayer activo (Playlist / Mix continúa)
│   │   ├── Abrir Shorts → Miniplayer sigue activo
│   │   ├── Abrir video fuera del Playlist / Mix → se cierra el contexto
│   │   └── Cerrar miniplayer → Playlist / Mix finaliza
│   │   └── Enviar a TV / Chromecast → controla desde app
│   └── Playlist “Ver más tarde” → se comporta igual que una Mix 
│
├── 📱 Página de Shorts
│   ├── Reproduce Short (pantalla vertical)
│   │   ├── Deslizar → siguiente / anterior Short
│   │   ├── Abrir enlace a video estándar → Página de Video
│   │   ├── Abrir enlace a playlist / Mix → Página de Playlist
│   │   ├── Regresar → Short anterior o interfaz Shorts
│   │   ├── Si hay miniplayer activo → continúa reproduciendo dual (Short + Video; ambos visibles y controlables)
│   │   │   ├── 🎛️ Interacción dual:
│   │   │   │   ├── Short reproduce con audio principal
│   │   │   │   ├── Miniplayer (video/playlist) puede pausarse o cambiarse
│   │   │   │   ├── Se puede cambiar el video del miniplayer desde sugerencias o búsqueda
│   │   │   │   ├── Se puede cerrar el miniplayer sin salir de Shorts
│   │   │   │   └── Si se abre un nuevo video desde Shorts → reemplaza el miniplayer activo 
│   │   └── Abrir Home → Shorts se detiene, miniplayer (si existe) sigue
│   │
│   └── Iniciar reproducción desde notificación / enlace directo
│       ├── Abre Short directamente
│       ├── Deslizar hacia arriba → siguientes Shorts
│       └── Click en logo YouTube → Home (sin miniplayer)
│
├── 🔴 Transmisión en Vivo (Live)
│   ├── Página tipo “Live” con chat activo
│   ├── Pausa al cambiar a Home (según dispositivo)
│   ├── Al volver → retoma en tiempo real
│   ├── Abrir otro video → corta transmisión
│   ├── Playlist con Live → chat deshabilitado en miniplayer
│   ├── Se puede enviar a miniplayer
│   ├── Ir a Home → Miniplayer con live (chat se cierra, live sigue)
│   ├── Ir a Shorts → Live en miniplayer + Short con audio principal
│   ├── Finaliza el live → pasa a "Replay" (nuevo contexto: video archivado)
│
├── 🌍 Enlaces externos y embebidos
│   ├── Enlace desde app o red social
│   │   ├── Video normal / Playlist / Short → abre su respectiva página
│   │   ├── Si hay miniplayer activo → se reemplaza o pausa
│   │   └── En navegador → sin persistencia de miniplayer
│   └── Video embebido (iframe en otra web)
│       ├── Reproduce inline
│       ├── Click en título → Página de video
│       ├── Sin acceso a miniplayer
│       └── Autoplay según permisos del navegador
│
├── 🔔 Historial, Notificaciones y Ver más tarde
│   ├── Desde notificación → abre video / Short / Playlist
│   ├── Desde historial → Página de video
│   ├── “Ver más tarde” → Playlist dedicada
│   └── Miniplayer puede seguir activo al regresar al Home
│ 
└── ⚙️ Estados Globales
    ├── 🎛️ Miniplayer
    │   ├── Activo al volver al Home / Search / Shorts / desde un video o playlist
    │   ├── Persistente al navegar entre Home, Shorts y Búsqueda
    │   ├── Puede coexistir con Shorts (reproducción dual)
    │   ├── Su contenido puede cambiarse desde Shorts sin abandonar la vista
    │   ├── Cerrado al abrir video nuevo fuera del contexto
    │   ├── Cerrado al abrir video nuevo fuera del contexto o manualmente
    │   ├── Cerrar → detiene reproducción
    │   └── Mantiene playlist / Mix si el video proviene de ella
    │
    ├── ⏸️ Pausa / Reanudación
    │   ├── Cambiar pestaña → reproducción sigue (según dispositivo)
    │   ├── Minimizar app → audio puede seguir (según plan Premium)
    │   └── Reabrir → continúa desde el punto anterior
    │   └── Cerrar app → guarda progreso
    │
    ├── 🔁 Cambios de contexto
    │   ├── De Video → Home → Miniplayer (activo)
    │   ├── De Home → Shorts → mantiene miniplayer (dual)
    │   ├── De Shorts → Video →  se detiene
    │   ├── De Playlist → Home → Miniplayer mantiene contexto
    │   └── De Shorts + Miniplayer → cambio de video en miniplayer posible 
    │
    └── ⚠️ Estados de Error
        ├── Video no disponible (eliminado, privado, región)
        │   ├── En Playlist → salta al siguiente
        │   ├── En Autoplay → salta al siguiente
        │   └── En Miniplayer → se detiene (muestra error)
        ├── Sin conexión → Modo offline (solo Premium + descargas)
        │   ├── Reproduce descargas
        │   └── Miniplayer solo con descargas
        └── Error de red → intenta reconectar (3 intentos) → pausa