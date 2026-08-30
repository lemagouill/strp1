# Walkthrough — iOS Safari Native Video Play Button Removal & Autoplay Fix

## 1. Root Cause:
- On iPhones (especially with Low Power Mode / battery icon yellow, as visible in the screenshot), iOS Safari automatically blocks autoplay for `<video>` elements and displays a giant native WebKit play button overlay (`::-webkit-media-controls-start-playback-button`).

## 2. Fixes Applied & Pushed:
- **CSS Suppression**:
  - Completely removed and disabled all WebKit media controls and start playback overlays via CSS (`display: none !important; opacity: 0; pointer-events: none;`).
- **Bulletproof Autoplay Handler**:
  - Added programmatic muted autoplay in JavaScript (`muted = true; defaultMuted = true; play()`).
  - Added passive interaction triggers (`touchstart`, `scroll`, `visibilitychange`) to ensure instant silent autoplay with zero user interruption even in Low Power Mode.
- **Cache Busted & Deployed**:
  - Bumped to `style.css?v=7.7` & `main.js?v=6.2`.
  - Pushed to `origin/main`.
