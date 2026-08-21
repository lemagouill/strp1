# Walkthrough — New Logo Asset Integration

Updated the platform with the newly uploaded logo:

## 1. New Logo Asset (`assets/images/logo.png`):
- Imported the high-contrast **Corsovault** visual graphic.
- Applied clean edge anti-aliasing with transparent alpha channel.
- Tightly cropped to exact visible bounding box (`281x84`) with 0px wasted margin space.

## 2. Refined Dimensions (`assets/css/style.css`):
- Desktop height: **`44px`** (with up to `240px` max-width).
- Mobile height: **`38px`** (with up to `190px` max-width).
- Footer height: **`48px`**.

## 3. Global Cache-Buster `?v=4.5`:
- Updated cache busters for all stylesheets to `v=4.5`.

## 4. GitHub Push (`lemagouill/strp1`):
- Pushed commit directly to GitHub: [https://github.com/lemagouill/strp1.git](https://github.com/lemagouill/strp1.git).
