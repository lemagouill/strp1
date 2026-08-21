# Walkthrough — Buy & Sell Button Spacing Fix

Separated the `Buy` and `Sell` header CTA buttons for balanced visual breathing room:

## 1. Added Header Action Container Gap (`assets/css/style.css`):
- Configured `.header__actions` with `display: flex; align-items: center; gap: 0.75rem;`.
- Refined `.header__cta` with `padding: 0.52rem 1.15rem; font-size: 0.88rem; border-radius: 8px;`.
- **Result**: The `Buy` (ghost) and `Sell` (green accent) buttons now have clear, distinct separation.

## 2. Global Cache-Buster `?v=3.9`:
- Updated cache busters for all stylesheets to `v=3.9`.

## 3. GitHub Push (`lemagouill/strp1`):
- Pushed commit directly to GitHub: [https://github.com/lemagouill/strp1.git](https://github.com/lemagouill/strp1.git).
