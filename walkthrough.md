# Walkthrough — Hero Video Brightness & Fullscreen Height (100vh)

## 1. Video Clarity & Brightness Overhaul (`assets/css/style.css`):
- **Drastically lightened overlay filter**:
  - Replaced the heavy dark overlay with a subtle, radiant gradient (`rgba(6, 9, 16, 0.08) - 0.35`) that lets the video motion shine through brightly.
  - Enhanced video rendering filters: `brightness(1.1) contrast(1.08) saturate(1.25)`.
- **Text & Heading Legibility**:
  - Added clean text-shadows so all text and typography remain legible over the brighter video.

## 2. Fullscreen Screen Fitting (100vh / 100dvh):
- Configured `.hero-corsopay` with:
  - `min-height: 100vh` and dynamic viewport `min-height: 100dvh`.
  - `display: flex; align-items: center; justify-content: center;`
  - Perfectly fills the entire screen when the visitor lands on the site.

## 3. GitHub Push (`lemagouill/strp1`):
- Pushed commit directly to GitHub: [https://github.com/lemagouill/strp1.git](https://github.com/lemagouill/strp1.git).
