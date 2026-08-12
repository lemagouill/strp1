# Handover — online business marketplace

Static multi-page site, no dependencies: no framework, no CDN, no remote fonts, zero network requests.
Open `index.html` directly, or deploy the folder as-is to Netlify, Vercel, Cloudflare Pages, GitHub
Pages or any shared host.

## Files

```
index.html          Home — Buy / Sell hero, deal spec, both sides, what transfers, listings, FAQ
browse.html         Listings grid with a working category filter
sell.html           Free-valuation intake form
how-it-works.html   Seller flow, buyer diligence, transfer checklist, fees
faq.html            Full FAQ — payment account questions first
contact.html        General enquiry form
legal.html          Legal notice + privacy (#privacy)
terms.html          Terms of service
robots.txt
sitemap.xml
assets/css/style.css
assets/js/main.js   Mobile menu, reveal, category filter, form validation
```

## The one thing that makes or breaks this business

The site is written around a distinction you must keep consistent everywhere, because it is what
separates a legitimate marketplace from account trading:

- **Share deal** — the buyer acquires the company. The legal entity is unchanged, so the payment
  account stays attached to it. The new beneficial owners and representative **must be declared to
  the provider**, which re-runs verification. Approval is theirs alone, it takes time, and the
  account can be restricted while under review.
- **Asset deal** — the buyer acquires assets only. The seller's company keeps its account, and the
  buyer onboards their own. Saved card details can usually be migrated between accounts through the
  provider's PCI-compliant process.
- **Never listed** — a payment account on its own, with no operating business behind it.

Every listing states which structure applies. Clause 8 of `terms.html`, the "What actually moves"
section on the home page, and the first FAQ block all say the same thing. If you edit one, edit all
three, and never promise that provider approval is automatic.

## Before you run ads

### 1. Identity
- [ ] Replace the `Handover` name and `deals@example.com` everywhere.
- [ ] Replace `https://www.example.com` in the `canonical` tags, `robots.txt` and `sitemap.xml`.
- [ ] Don't put "Stripe" in your company name or domain — trademark, and a standard ad rejection.

### 2. Listings — the biggest risk on this site
`browse.html` and the home page ship with **six example listings**, flagged with a visible notice.
They are format placeholders, not real businesses.

- [ ] Delete them and publish only real inventory. Invented revenue figures on a live marketplace are
      not a design placeholder problem, they are a misrepresentation problem.
- [ ] Keep the metric set (MRR, annual profit, multiple, age) and the deal-structure badge — buyers
      compare on exactly those four numbers.
- [ ] Remove the `.notice` block once real listings are in.

The category filter in `assets/js/main.js` reads the first `.tag` in each card, so it keeps working
as you add listings — just match the chip labels in `browse.html` to your category names.

### 3. Numbers you must set yourself
- [ ] Home metrics strip (`14 days`, `2.4×–4×`, `Escrow`, `0 €`) — real figures or delete the block.
- [ ] The success-fee percentage in `how-it-works.html#fees` and clause 6 of `terms.html`. Vague
      pricing is a common reason ad reviewers reject a marketplace.
- [ ] Name your actual escrow provider. "A licensed third party" is fine as placeholder copy, not as
      a live claim.

### 4. Forms
Both forms ship with `action="REPLACE_WITH_YOUR_ENDPOINT"`. While the value contains `REPLACE`, the
submit button opens a pre-filled email instead — fine for testing, not for production. Point it at a
form handler (Formspree, Basin, Web3Forms, Netlify Forms) or your own endpoint; the script POSTs
`FormData` and expects a 2xx. A honeypot field (`website`) is already in place.

### 5. Legal — required by Google Ads and Meta Ads
- [ ] Fill in every bracketed placeholder in `legal.html` and `terms.html`.
- [ ] **Check whether you need a licence.** Introducing buyers and sellers of companies falls under
      business-brokerage or intermediation rules in some countries. Confirm your status before you
      advertise, not after.
- [ ] Have a lawyer review the terms — clause 3 (excluded transactions) and clause 8 (payment
      accounts) are the two that protect you.
- [ ] The site sets **no cookies** as shipped. Adding Analytics, the Meta pixel or a Google Ads tag
      means you need a consent banner blocking trackers until acceptance, and section 8 of
      `legal.html` rewritten.

### 6. What gets a marketplace banned
- Never imply you sell payment accounts, or that an account transfers automatically.
- Never imply affiliation with Stripe, and don't use its logo or brand purple in creatives.
- Keep the non-affiliation paragraph in the footer and the "We do not sell standalone payment
  accounts" line — those are the first things a reviewer reads.
- Don't publish guaranteed returns or "risk-free" language. You are selling businesses, and
  businesses fail.

### 7. Conversion tracking (optional)
`main.js` fires `gtag('event', 'generate_lead')` after a successful submit if `gtag` is present. Add
your tag to the `<head>` of `sell.html` and `contact.html` — after handling consent.

## Run locally

```bash
cd "path/to/folder"
python3 -m http.server 8000
# then open http://localhost:8000
```

## Design notes

- **Logo**: inline SVG, no image file. A notched block in `currentColor` plus a detached accent chip
  (`.brand__chip`) — a piece passing from one side to the other. It inherits the surrounding colour,
  so it turns white in the footer automatically. Same shape redrawn in the favicon data URI.
- Product direction: tight system sans for headings, monospace for labels, metrics, prices and
  badges; 1px panels, small radii, one accent (`--accent`).
- Two-colour CTA pair throughout: **Buy** in ink, **Sell** in accent green. Header, hero, mobile
  menu and the sticky mobile bar all use the same pairing.
- Mobile-first, breakpoints at 560 / 700 / 768 / 960 / 1000px.
- Accessibility: skip link, `aria-expanded` on the menu, visible focus rings, `<details>` FAQ that
  works without JavaScript, animations off under `prefers-reduced-motion`.
- To restyle everything, change `--accent` and the neutral scale at the top of `style.css`.
