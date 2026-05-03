# 0.11.1

### Fixed
- **Singleton Namespace Isolation**: Fixed potential compatibility issues where the first loaded version would monopolize the global namespace. Now each exact version (`0.10.1`, `0.10.2`, `0.11.1`) has its own isolated instance via `__YT_HELPER_API_x_x_x__` namespace, allowing multiple library versions to coexist without conflicts. https://greasyfork.org/es/scripts/549881-youtube-helper-api/discussions/315501#

# 0.11.0-Plox

### Added
- Expose EVENTS constants object on public API for type-safe event handling

### Fixed
- Add Element type guards to prevent DOM method errors on non-Element objects

# 0.10.1-Plox

### Fixed
- **Playlist Detection**: Fixed a bug where `isInPlaylist` was always `false`. The flag now correctly updates based on the presence of a `playlistId`.