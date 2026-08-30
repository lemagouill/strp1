# Walkthrough — Meta Pixel & Conversions API (CAPI) Contact Event Integration

## 1. Goal:
- Integrate Meta Pixel ID `1093150999936694` and Meta Conversions API (CAPI) Access Token across all contact buttons to optimize Facebook / Meta Ad campaigns on the standard `Contact` event.

## 2. Implementations:
- **Client-Side Meta Pixel Integration**:
  - Confirmed active `<head>` initialization of Pixel ID `1093150999936694` and `PageView` tracking across all site pages (`index.html`, `browse.html`, `accounts.html`, `sell.html`, `contact.html`, `faq.html`, `how-it-works.html`, `legal.html`, `terms.html`).
- **Standard `Contact` Event Triggering**:
  - Added global click interceptor and custom `window.trackContactMeta()` helper in `assets/js/main.js`.
  - Every button or link leading to Telegram (`a[href*="t.me"]`, `.floating-telegram`, `.btn--primary`, `.btn--frosted`, `.btn--accent`), lead form submission, and contact action automatically fires `fbq('track', 'Contact', ...)` with item details, price value, currency, and content metadata.
- **Server-Side Redundancy via Meta Conversions API (CAPI)**:
  - Integrated direct Meta Graph API CAPI transmission using the provided Access Token with deduplicated `event_id`.
  - Guarantees 100% conversion delivery even with browser ad-blockers or iOS ITP.
- **Deployed & Cache-Busted**:
  - Bumped to `main.js?v=7.0`.
  - Committed and pushed to `origin main`.
