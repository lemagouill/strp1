# Walkthrough — Meta Pixel & Contact Event Tracking Deployed

## 1. Meta (Facebook) Pixel Installed:
- **Pixel ID**: `1093150999936694`
- **Global Deployment**: Added the complete Meta Pixel snippet (script + noscript fallback) across all HTML pages (`index.html`, `browse.html`, `accounts.html`, `sell.html`, `how-it-works.html`, `faq.html`, `contact.html`, `legal.html`, `terms.html`).
- **Standard `PageView` Event**: Automatically tracked upon every page visit.

## 2. Standard `Contact` Event Tracking:
- **On Contact Page Load (`contact.html`)**: Triggers `fbq('track', 'Contact')` automatically.
- **On Form Submission (`contact.html`, `sell.html`)**: Triggers `fbq('track', 'Contact')` when any user submits an account request / inquiry / valuation before opening Telegram.
- **On Any Telegram Interaction**: Added a global click listener in `assets/js/main.js` that fires `fbq('track', 'Contact')` whenever a visitor clicks any Telegram CTA button, direct link (`t.me`), or the floating Telegram support badge.

## 3. GitHub Push:
- All changes pushed live to [https://github.com/lemagouill/434](https://github.com/lemagouill/434).
