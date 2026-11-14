# Engagement — Rattry Wu

A quiet editorial archive for volunteering, leadership, activities and classes —
designed to sit in the same visual family as the [UN Volunteers × Exposure](https://unvolunteers.exposure.co/) site.

**Live:** https://xarfa.github.io/Engagement/

Hand-built HTML + CSS + a little vanilla JavaScript. No framework, no build step, no tracking.

## Structure

| Path | What |
|---|---|
| `index.html` | Home — masthead lockup, three-column archive, contact form, visitor map |
| `story.html` | Story template, read by `?slug=` |
| `js/data.js` | All five stories in English and German + UI strings (`SITE.i18n`) |
| `js/app.js` | Language switch, grid, search, story rendering, scroll reveal, cover drift, socials |
| `css/site.css` | Design system and layouts (tokens at the top) |
| `css/fonts.css` | Self-hosted EB Garamond + Instrument Sans (no Google CDN) |
| `assets/logo-masthead.png` | The RATTRY / ENGAGEMENT lockup artwork |
| `assets/byline-avatar.png` | Story byline avatar (self-hosted — never hotlink GitHub) |
| `assets/visitors.js` | Dot-matrix visitor-cities world map (revived from wffp) |
| `assets/stories/<slug>/` | `cover.jpg` (+`cover-960.jpg`), `fig-1.jpg`, `fig-2.jpg` per story |
| `tools/` | `gen_og.py` (og card), `gen_images.py` (AI placeholder photos), `fetch_commons.py` (Wikimedia Commons sourcing) |

## Design system (final)

- **Palette:** white paper `#fff`, ink `#111`, single UN sky-blue accent `#009EDB` (deep `#0083C1`, text-safe `#0072A8`). No gold, no cream, no red.
- **Masthead:** owner's logo artwork (`assets/logo-masthead.png`, 600px wide, centered) → one-line intro (generalized, no project names) → black `CONTACT ME` button → `xarfa.github.io/Engagement` → compact visitor map (city list hidden).
- **Cards:** square, 3 columns (2 ≤920px, 1 ≤640px), 16px gutters, 1200px container; titles clamp to 24px with a `10.5em` wrap cap (Instrument's `0` is wide — `ch` units are unusable here); italic EB Garamond deck; caps date.
- **Story:** 100svh cover → uppercase title 40px / 3px tracking → italic deck 27px → category kicker below the deck; bottom-anchored author group (80px GitHub avatar with white ring, "By" in EB Garamond + name in bold sans, serif date · location); single EB Garamond reading column 582px, 18px / 1.52, 21px paragraph gaps.
- **Socials** (`SOCIALS` in `js/app.js`, in order): Cnblogs · GitHub · ResearchGate · Xiaohongshu · Facebook · LinkedIn — LinkedIn has no public link, so it renders as an icon with a "RATTRY WU" hover/focus tag.
- **Motion:** wordmark/image entrances, card load stagger, story-body scroll reveal (IntersectionObserver, 500ms / 10px / scale .99 — the reference's measured rhythm), "cover exhale" scroll drift. Everything is disabled under `prefers-reduced-motion`.

## Typography

`--sans` stack: **gt-walsheim** (Adobe Fonts — see below) → **Instrument Sans** (self-hosted variable woff2, the closest open stand-in for GT Walsheim) → Helvetica fallbacks. Reading text: **EB Garamond** (exact match to the reference, OFL).

**GT Walsheim is a commercial typeface.** To use the real thing: at
[fonts.adobe.com](https://fonts.adobe.com) add GT Walsheim to a web project and paste the
kit `<link>` where marked in `index.html` and `story.html` (search for "Adobe Fonts").
Until then Instrument Sans serves.

## Languages (EN / DE)

The header switch (`EN · DE`) swaps all UI strings and story content. The choice is
stored in `localStorage("engagement-lang")` (first visit follows the browser language).
German is a full translation of the UI and every story; images, links and the contact
form are shared between languages. To edit translations, change the `de` blocks in
`js/data.js` and `SITE.i18n` — the switcher reloads the page after storing.

## Photos — sources and placeholders

Story images come from two sources:

- **Wikimedia Commons** (freely licensed — PD/CC0/CC BY/CC BY-SA). Credits appear in the
  figure captions where the license requires them (`tools/fetch_commons.py` searches and
  records license + author).
- **AI-generated placeholders** (YuRen API, documentary style, no faces, no logos —
  `tools/gen_images.py`). These are **not photos of the real events**; replace them with
  real, permission-cleared photographs, same filenames:

```
assets/stories/<slug>/cover.jpg      # card + hero (landscape works best)
assets/stories/<slug>/cover-960.jpg  # card-size variant (regenerate or delete)
assets/stories/<slug>/fig-1.jpg      # figures inside the story (fig-2.jpg …)
```

Recommended: 1600px wide, JPEG quality 80. If a file is missing the card falls back to a
neutral wash — nothing breaks.

## Contact form

The `#contact` section posts to **FormSubmit** → `2234545188@qq.com` (fields: email +
message). A new target address must be activated once: submit the form, then click the
confirmation link FormSubmit emails to that address.

## Visitor map

`assets/visitors.js` renders a dot-matrix world map (land grid from Natural Earth) and
records **unique visitor cities only** via `wffp-visitors.pages.dev` (`/ping`), the same
backend the wffp site used. The city-name list is currently hidden (`.v-cities { display:none }`).

## Edit the content

Stories live in `js/data.js`:

```js
{
  slug: "tedx-nanjing-2026",
  category: "Volunteer",          // Volunteer / Leadership / Engagement / Classes
  date: "2026-10-25",             // ISO date, used for sorting; labels via Intl
  location: { en: "Nanjing", de: "Nanjing" },
  figures: [                      // 0-2 inline figures, placed between paragraphs
    { file: "fig-1.jpg", en: "Caption.", de: "Bildunterschrift.", credit: "…" }
  ],
  en: { title: "…", summary: "…", body: ["…"], quote: { text: "…", by: "…" } },
  de: { title: "…", summary: "…", body: ["…"], quote: { text: "…", by: "…" } }
}
```

Add an entry to add a card; remove one to delete it.

## Preview / deploy

```bash
python -m http.server 8765     # then open http://localhost:8765
```

Push to `main` → GitHub Pages serves the repo root (`.nojekyll` present). Check status:
`gh api repos/Xarfa/Engagement/pages/builds/latest --jq '{status, commit: .commit[:7]}'`.

## Legal / content checklist

- [x] No Exposure CSS/JS copied; layout patterns and measured values only
- [x] GT Walsheim font files not embedded (Instrument Sans stand-in; Adobe slot ready)
- [x] Volunteer titles accurate — `Online Volunteer` ≠ `UN Volunteer`; no org logos or endorsements
- [ ] Replace AI placeholder photos with real, permission-cleared photographs
- [x] Footer keeps "views are my own" framing (`© Rattry Wu · Nanjing, China`)
