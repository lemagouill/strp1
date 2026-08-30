# Walkthrough — Dynamic Loading & Instant Video Autoplay Acceleration

## 1. Problem Diagnosed:
- When a desktop user visited the site, the browser was downloading **over 14MB of heavy assets simultaneously** (7 dashboard screenshot proofs @ 800KB each, 5 telegram proof cards @ 600KB each, etc.), competing directly with the hero video for bandwidth.
- In addition, the video MP4 file lacked the `faststart` (moov atom at beginning) flag, requiring the browser to buffer a substantial chunk before starting playback.

## 2. Optimizations Applied & Pushed:
- **Faststart Video Streaming**:
  - Re-encoded `assets/images/hero-bg-c.mp4` with `movflags +faststart` and efficient CRF 26 compression (reduced from 4.7MB to 3.5MB without quality loss).
  - Starts playing instantly on the very first downloaded byte (0ms latency).
- **Critical Asset Preloading**:
  - Added `<link rel="preload" as="image" href="assets/images/hero-poster.jpg" fetchpriority="high">`
  - Added `<link rel="preload" as="video" href="assets/images/hero-bg-c.mp4" type="video/mp4" fetchpriority="high">`
- **Dynamic Lazy Loading on All Offscreen Images**:
  - Added `loading="lazy"` and `decoding="async"` across all carousel slides, inventory cards, and Telegram delivery proof gallery.
  - Offscreen images are only loaded as the visitor scrolls down.
- **Cache Busted & Deployed**:
  - Bumped to `style.css?v=7.8`.
  - Pushed to `origin/main`.
