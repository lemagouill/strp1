# Walkthrough — Logo Margin Crop & Size Enlargement

Fixed the logo sizing by removing all invisible dead margins from the image file and boosting display dimensions:

## 1. Zero-Margin Exact Crop (`assets/images/logo.png`):
- **Problem Identified**: The PNG had 37px top, 21px bottom, and 48px left of blank empty margins inside the file itself, which shrunk the visible logo text by over 60%.
- **Fix**: Cropped the PNG tightly to exact `181x50` visible pixels with zero empty padding.

## 2. Increased Render Dimensions (`assets/css/style.css`):
- Header logo height: **`42px`** (desktop) / **`36px`** (mobile).
- Footer logo height: **`46px`**.
- **Result**: The logo now renders significantly larger, sharper, and bolder across both the top header and footer.

## 3. Global Cache-Buster `?v=4.0`:
- Updated cache busters to `v=4.0` across the website.

## 4. GitHub Push (`lemagouill/strp1`):
- Pushed commit directly to GitHub: [https://github.com/lemagouill/strp1.git](https://github.com/lemagouill/strp1.git).
