# ShockImpact Aerial — Website Redesign

A rebuild of [shockimpactaerial.org](https://shockimpactaerial.org/), a drone survey and aerial imaging company operating across West Africa. Same content, same services, sharper execution — Material Design principles, a live telemetry HUD, and copy that doesn't read like a template.

## Why this exists

The original site buried strong content (10 years in business, real client testimonials, genuine service depth) under generic template styling. This redesign keeps every real fact and re-presents it with an identity that actually fits a drone company.

## Preview

Open `index.html` in any browser — no build step, no dependencies to install.

## What's inside

| File | Purpose |
|---|---|
| `index.html` | Full single-page site: hero, about, services, gallery, process, testimonials, quote form |
| `styles.css` | Design system — tokens, layout, components |
| `script.js` | Ripple buttons, telemetry readout, form handling, mobile nav, back-to-top |

## Design notes

- **Palette** — deep navy (`#0B1E33`) + aviation orange (`#FF5A1F`) against a cool off-white. No cream, no terracotta, no near-black-plus-neon-green — deliberately avoided the AI-default look.
- **Type** — Space Grotesk for headlines, Inter for body copy, IBM Plex Mono for data and telemetry readouts.
- **Signature element** — a live-feeling flight telemetry strip (altitude, GPS coordinates, battery, signal) under the hero. It's decorative, but it's the one thing on this page that could only belong to a drone company.
- **Process section** — the six-step client workflow is shown as a numbered flight log, because it's an actual sequence, not decoration for decoration's sake.
- Fully responsive down to mobile, keyboard-focus visible on all interactive elements, `prefers-reduced-motion` respected.

## Stack

Plain HTML, CSS and JavaScript. No frameworks, no build tools, no npm install. Fonts load from Google Fonts; images are referenced from the original site's asset CDN.

## Running locally

```bash
git clone <this-repo>
cd shockimpact-aerial-redesign
open index.html
```

Or serve it properly:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Status

Concept redesign — not yet wired to a real backend. The quote form currently confirms client-side only; hook it up to your mail service or form handler of choice (Formspree, a serverless function, etc.) before going live.

## License

Content and imagery belong to Shock Impact Productions Limited. Code in this repo is free to reuse and adapt.
