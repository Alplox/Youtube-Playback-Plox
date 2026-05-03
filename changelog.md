# 0.11.0-Plox

### Added
- Expose EVENTS constants object on public API for type-safe event handling

### Fixed
- Add Element type guards to prevent DOM method errors on non-Element objects

# 0.10.1-Plox

### Fixed
- **Playlist Detection**: Fixed a bug where `isInPlaylist` was always `false`. The flag now correctly updates based on the presence of a `playlistId`.