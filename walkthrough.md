# Walkthrough — Proof Screenshots Uniform Dimensions

## 1. Pixel-Perfect Identical Dimensions (`index.html` & `assets/css/style.css`):
- **Image File Resampling**: All 5 Telegram delivery screenshot files have been resampled to exactly **490 × 1024 px** using native macOS `sips`.
- **CSS Container Strict Ratio**:
  - `aspect-ratio: 490 / 1024`
  - `align-items: stretch`
  - `object-fit: cover`
  - Every single card and screenshot is now strictly identical in width, height, and alignment across all screens.

## 2. GitHub Push (`lemagouill/strp1`):
- Pushed commit directly to GitHub: [https://github.com/lemagouill/strp1.git](https://github.com/lemagouill/strp1.git).
