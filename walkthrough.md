# Walkthrough — Live Instant Autoplay for Hero Video

## 1. Problem Identified:
- When using a hidden 1px video with canvas fallback, modern browser autoplay policies (Chrome/Safari) detected the video element as offscreen/invisible tracking media and blocked automated playback until a user scroll event occurred.

## 2. Solution Implemented:
- **Restored Native Full-Size Video Element with Hardware Autoplay**:
  - Full-size `<video class="hero-bg-video" autoplay loop muted playsinline webkit-playsinline>` is rendered directly in the hero background (`width: 100%; height: 100%; object-fit: cover;`).
  - Browsers immediately recognize it as a visible, muted background element and grant instant autoplay right at 0ms upon initial visit without waiting for any scroll or click.
  - Added multi-event triggers (`loadedmetadata`, `loadeddata`, `canplay`, `pageshow`, `focus`) so it starts playing immediately on page load.
- **Cache Busted & Deployed**:
  - Bumped to `style.css?v=8.1` and `main.js?v=6.5`.
  - Pushed directly to `origin/main`.
