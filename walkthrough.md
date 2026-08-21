# Walkthrough — CorsoVault Logo Update & Size Increase

Updated the official logo graphic and increased its display size for crisp brand recognition:

## 1. Updated Transparent Logo Graphic (`assets/images/logo.png`):
- Processed the official **Corsovault** visual asset (origami symbol + bold typography).
- Re-encoded with transparent alpha masking to blend into header surfaces and blur overlays.

## 2. Enlarged Display Dimensions (`assets/css/style.css`):
- Increased `.brand__logo-img` height on desktop from `32px` to **`44px`** (with up to `220px` max-width).
- Set mobile height to **`36px`** for balanced proportions with the navigation burger.
- Cleaned out redundant pills so the pure logo asset is displayed.

## 3. Global Cache-Buster `?v=3.8`:
- Updated cache busters for all stylesheets to `v=3.8`.

## 4. GitHub Push (`lemagouill/strp1`):
- Pushed commit directly to GitHub: [https://github.com/lemagouill/strp1.git](https://github.com/lemagouill/strp1.git).
