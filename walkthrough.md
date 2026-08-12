# Walkthrough — Double Dot Badge Fix (StripeVault)

Fixed the visual bug causing two duplicate green dots in `.eyebrow` badges:

- **CSS Update (`assets/css/style.css`)**: Centralized glowing pulse animation inside `.eyebrow::before`.
- **HTML Markup Cleanup (`index.html`, `contact.html`)**: Removed redundant `<span class="pulse-dot"></span>` elements so only a single, perfectly positioned glowing green dot appears.
