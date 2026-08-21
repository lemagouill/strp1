# Walkthrough — Navbar Link Wrapping Fixed

## 1. Strictly One-Line Navigation Bar (`assets/css/style.css`):
- Added `white-space: nowrap;` and `flex-shrink: 0;` to `.nav__link`.
- Added `flex-wrap: nowrap;` to `.nav__list`.
- Added responsive spacing rules for intermediate screen widths (960px – 1160px) to prevent any horizontal squeeze or vertical wrapping of text across all menu items.
- Bumped stylesheet cache buster to `?v=6.0` on all HTML templates.

## 2. GitHub Push (`lemagouill/strp1`):
- Pushed commit directly to GitHub: [https://github.com/lemagouill/strp1.git](https://github.com/lemagouill/strp1.git).
