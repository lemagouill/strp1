# Walkthrough — New Stripe France Account Added (980€)

## 1. Goal:
- Add the new Stripe France account (€3,192 gross volume, 3 days payout, price: 980€) with its dashboard screenshot proof and full metadata.

## 2. Changes Made:
- **Asset Added**:
  - Saved screenshot `assets/images/Stripe_FR_3kEUR_2026_Payout3days.png` (clean, lightweight 167KB PNG).
- **Listings Updated**:
  - `index.html`: Added Real Card 6 (Stripe France — €3,190 Processed, Payout 3 Days, 980€, In Stock).
  - `browse.html`: Added Real Account 6 (Stripe France — €3,190 Processed, Payout 3 Days, 980€, In Stock).
- **Meta Pixel & CAPI Enhanced**:
  - Updated `assets/js/main.js` to automatically extract the currency symbol (`€` -> `EUR`, `$` -> `USD`, `£` -> `GBP`) and the exact value `980`, firing `fbq('track', 'Contact', ...)` and CAPI server-side payload with `currency: 'EUR'`, `value: 980`.
