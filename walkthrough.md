# Walkthrough — Instant Inline Autoplay Script Deployment

## 1. Problem:
- In some browser sessions (especially with strict browser policies or cached DOM states), deferred JavaScript meant the video was evaluated as unstarted before script execution, resulting in the browser pausing on the poster frame.

## 2. Solution Implemented:
- **Synchronous Inline Autoplay Script**:
  - Embedded an immediate inline execution script directly inside the `.hero-corsopay-video-bg` DOM node so it runs in **0ms** as the HTML parser encounters the `<video>` tag.
  - Guarantees `muted = true`, `defaultMuted = true`, and `volume = 0` are registered before the browser can block it.
  - Multi-event fallbacks (`loadeddata`, `canplay`, `DOMContentLoaded`, and passive window touch/scroll/pointer interaction).
- **Cache Busted**: Bumped to `style.css?v=7.9` and `main.js?v=6.3`.
- **Pushed to `main`**.
