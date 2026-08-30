# Walkthrough — Comprehensive Meta Pixel & CAPI Contact Tracking on All Buttons

## 1. Goal:
- Ensure that **every single contact button, CTA, and action link** across the entire website triggers the official Meta Pixel `Contact` standard event and the Meta Conversions API (CAPI) direct server-side pipeline.

## 2. Universal Click Capture:
- Expanded selector in `assets/js/main.js` to automatically bind:
  - All `.btn` buttons (`.btn--primary`, `.btn--accent`, `.btn--frosted`, `.btn--ghost`, `.btn--lg`, `.btn--block`, `a.btn`, `button.btn`).
  - All Telegram direct buttons and floating badges (`a[href*="t.me"]`, `.floating-telegram`).
  - All mobile and desktop sticky navigation CTA buttons (`.sticky-cta a`, `.nav__cta`, `.brand__cta`).
  - All internal action links (`a[href*="contact"]`, `a[href*="sell"]`, `a[href*="browse"]`, `a[href*="accounts"]`).
  - All form submissions (`button[type="submit"]`).
- Automatic context extraction:
  - If a user clicks on an account card (e.g. Stripe USA $82k @ $2,450), the event sends `content_name: "Stripe USA Account — $82,000 Processed ($2,450)"`, `value: 2450`, `currency: "USD"`.
  - Sends dual-stream deduplicated events (`fbq('track', 'Contact', ...)` + direct Meta Graph CAPI API POST).
- **All Pages Updated to `main.js?v=7.1`**.
