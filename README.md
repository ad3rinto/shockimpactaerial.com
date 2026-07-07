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

## Adding photos

The site loads real photography from an `assets/` folder in the project root. Create it and drop in files with these **exact names**:

| Filename | Slot | Suggested search terms |
|---|---|---|
| `assets/about-drone-operator.jpg` | About section | "drone pilot remote controller field" |
| `assets/service-mapping.jpg` | Mapping & surveying card | "aerial land survey topography" |
| `assets/service-photogrammetry.jpg` | Photogrammetry card | "3D terrain model drone mapping" |
| `assets/service-inspection.jpg` | Infrastructure inspection card | "transmission tower drone inspection" |
| `assets/service-realestate.jpg` | Real estate card | "aerial real estate property photography" |
| `assets/gallery-inspection-team.jpg` | Work gallery | "drone survey team on site" |
| `assets/gallery-commercial.jpg` | Work gallery | "commercial building aerial view" |
| `assets/gallery-construction.jpg` | Work gallery | "construction site aerial drone" |

**Where to get free, commercial-use-safe images:**
- [Unsplash](https://unsplash.com/) — search the terms above, download, rename
- [Pexels](https://pexels.com/) — same approach, good drone/aerial category
- Or better: swap in your own flight footage stills — nothing sells the service like real client work

No file in a slot? The page won't break — it shows a clean "Photo pending" placeholder instead of a broken image icon, so you can ship now and backfill photography later.



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
