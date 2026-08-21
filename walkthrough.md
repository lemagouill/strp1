# Walkthrough — New Corsopay Logo, Favicon & Clean Inventory

## 1. Logo & Favicon Updated (`media_1787332185655.png`):
- Cleaned and cropped the newly uploaded **Corsopay** image (silver origami mark + Corsopay typography) with full transparent alpha background.
- Saved to `assets/images/logo.png`.
- Extracted the square origami geometric mark with transparent background to `assets/images/favicon.png`, `favicon.png`, and `favicon.ico`.
- Cache busters updated to `?v=6` for favicons and `?v=5.4` for stylesheets.

## 2. Removed Filter Bar (`browse.html`):
- Completely removed the filter button chips and hint from `browse.html` so all accounts are directly listed in an uncluttered grid.

## 3. Removed Coming Soon Accounts (`browse.html`):
- Removed all "Coming Soon" placeholder account cards.
- Only real verified accounts available for sale are displayed.

## 4. GitHub Push (`lemagouill/strp1`):
- Pushed commit directly to GitHub: [https://github.com/lemagouill/strp1.git](https://github.com/lemagouill/strp1.git).
