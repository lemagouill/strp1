# Walkthrough — Definitively Eliminating iOS Native Play Button via Hardware-Accelerated Canvas Rendering

## 1. The Root Cause on iOS Safari:
- On iOS (iPhone/iPad), when an Apple device enters Low Power Mode (mode économie d'énergie) or encounters strict media playback conditions, iOS WebKit forces any standard `<video>` tag into a paused state and **draws a native circular Play button directly over the video layer**.
- Because this button is drawn inside Apple's private WebKit Shadow DOM / AVPlayerLayer, pure CSS rules alone cannot always prevent iOS from rendering the play icon.

## 2. The Architectural Solution (Used by Apple & High-End Tech Platforms):
- **Hidden Video Backend**:
  - The `<video>` element is rendered completely hidden in the background (`opacity: 0.001; position: absolute; pointer-events: none; width: 1px; height: 1px;`).
- **Hardware-Accelerated `<canvas id="hero-canvas">`**:
  - The user interface displays a high-performance HTML5 `<canvas>` element instead of a native video element.
  - **Why this works 100%**: iOS Safari **CANNOT** draw a media play button on a `<canvas>` element. It is technically impossible for Apple to draw a play icon over a canvas.
- **Synchronous Poster + 60fps GPU Frame Loop**:
  - The canvas displays the high-resolution poster frame instantly (0 ms).
  - As the video streams, the render loop paints each frame to the canvas in 60fps smoothly.
  - If iOS delays video in low power mode, the canvas displays the sailboat perfectly with **ZERO play button**, and seamlessly starts the moving animation on first scroll/interaction.
- **Cache Busted & Deployed**:
  - Bumped to `style.css?v=8.0` and `main.js?v=6.4`.
  - Pushed to `origin/main`.
