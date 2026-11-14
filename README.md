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
| `js/data.js` | All stories — visible and hidden — in English and German + UI strings (`SITE.i18n`) |
| `js/app.js` | Language switch, grid, search, story rendering, scroll reveal, cover drift, socials |
| `css/site.css` | Design system and layouts (tokens at the top) |
| `css/fonts.css` | Self-hosted EB Garamond + Instrument Sans (no Google CDN) |
| `assets/logo-masthead.png` | The RATTRY / ENGAGEMENT lockup artwork |
| `assets/byline-avatar.png` | Story byline avatar (self-hosted — never hotlink GitHub) |
| `assets/visitors.js` | Dot-matrix visitor-cities world map (revived from wffp) |
| `assets/stories/<slug>/` | `cover.jpg` (+`cover-960.jpg`), `fig-N.jpg` figures, `logo-*.png` marks per story |
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

Story images come from three sources:

- **Owner-supplied material** — the real screenshots, handbook pages and artwork from
  each engagement's source folder (e.g. the ATOX story). Marks baked into supplied
  cover art can be cleaned with a YuRen image edit (see "Adding a story").
- **Wikimedia Commons** (freely licensed — PD/CC0/CC BY/CC BY-SA). Credits appear in the
  figure captions where the license requires them (`tools/fetch_commons.py` searches and
  records license + author).
- **AI-generated placeholders** (YuRen API, documentary style, no faces, no logos —
  `tools/gen_images.py`). These are **not photos of the real events**; they back the five
  hidden example stories. Replace them with real, permission-cleared photographs, same
  filenames:

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
  slug: "atox-ai4climate-hackathon",
  category: "Volunteer",          // Volunteer / Leadership / Engagement / Classes
  date: "2026-11-12",             // ISO start date, used for sorting; labels via Intl
  location: { en: "Online", de: "Online" },
  hidden: true,                   // optional — drops the story from grid, search and story pages
  logos: {                        // optional — see "Adding a story"
    card: { file: "logo-atox.png", alt: "ATOX" },                        // white mark, top-centre of the home card
    hero: [ { file: "logo-cop31.png", alt: "COP31 Türkiye", w: 200 } ]   // bottom-left of the cover; bottom-up order; w = % of column
  },
  figures: [                      // any number; spread across the paragraphs
    { file: "fig-1.jpg", ratio: "1000/1413", en: "Caption.", de: "Bildunterschrift.", credit: "…" }
  ],
  en: { title: "…", summary: "…", body: ["…"], quote: { text: "…", by: "…" } },
  de: { title: "…", summary: "…", body: ["…"], quote: { text: "…", by: "…" } }
}
```

`figure.ratio` (e.g. `"1000/1413"`) keeps portrait documents and screenshots
un-cropped — without it the frame is a 4:3 landscape and `object-fit: cover`
slices tall images. Captions are concise EN/DE lines describing what the image
shows. With more than two figures the renderer spreads them evenly over the
paragraph boundaries instead of stacking them all at the end.

## Adding a story — the working paradigm (fixed 2026-11-14, ATOX story)

Each engagement lives in a dated source folder at the repo root
(`YYYY.MM.DD[~DD] <name>/`, git-ignored via `20*/`) holding the owner's raw
material: `content.md`, a cover image, photos/screenshots, logos. One commit
publishes one engagement:

1. **Assets** → `assets/stories/<slug>/`: `cover.jpg` (1536w) + `cover-960.jpg`
   from the cover image, `fig-N.jpg` for the story figures, `logo-*.png` for the
   marks (owner supplies them white and background-removed when possible).
2. **Data** → one object in `js/data.js` (schema above). Body text comes from
   `content.md` **verbatim** — fix small grammar/spelling only, add or remove
   nothing, and report anything major to the owner. The title comes from
   `content.md` when the owner writes one. The `de` blocks are a full
   translation under the same rule.
3. **Logos**: `logos.card` = white organiser mark overlaid top-centre on the
   home card (≈34% card width, ~7.5% from the top). `logos.hero` = marks
   stacked at the bottom-left of the story cover, listed BOTTOM-UP (first
   entry renders lowest); per-logo `w` (% of the column, default 100) scales
   each mark individually.
4. **Cover cleanup**: marks baked into a supplied cover (corner logos,
   "organized by" lines) are removed with a YuRen image edit
   (`/v1/images/edits`, `gpt-image-2.5`): letterbox the cover onto a
   1536×1024 black canvas to preserve its aspect ratio, send an opaque mask
   with transparent rectangles over the marks, then crop the letterbox bars
   back off. Generate two candidates and let the owner pick one.
5. **Verify before pushing** (local server + browser with cache disabled):
   the first screen shows ≥30–40% of the first card row, cover logos stay
   clear of text baked into the artwork, EN + DE both render, then commit and
   push.

### Logo lessons (from the ATOX story)

- Two marks of very different aspect ratios (a wide wordmark vs an emblem)
  never balance visually: same-width, same-height and equal-area all read as
  mismatched. When in doubt, ask the owner — the ATOX story ended up showing
  COP31 **alone** at ~2× column width, which is what the owner chose.
- The global `img { max-width: 100% }` silently caps any logo beyond the
  column width; `.story-hero-logos img` carries `max-width: none` so `w > 100`
  actually renders.
- Keep logos clear of text baked into the cover artwork (date lines, credits)
  — clean the cover or resize the mark instead of overlapping.

## Preview / deploy

```bash
python -m http.server 8765     # then open http://localhost:8765
```

Push to `main` → GitHub Pages serves the repo root (`.nojekyll` present). Check status:
`gh api repos/Xarfa/Engagement/pages/builds/latest --jq '{status, commit: .commit[:7]}'`.

**Cache gotcha:** GitHub Pages sends `Cache-Control: max-age=600` for JS/CSS —
a plain F5 can serve stale files for up to 10 minutes. Whenever `js/data.js`,
`js/app.js` or `css/site.css` change, bump the `?v=` param on their includes in
**both** `index.html` and `story.html` so returning visitors pick up the new
version on a normal refresh. When auditing locally, disable the browser cache
or you will judge stale files.

## Legal / content checklist

- [x] No Exposure CSS/JS copied; layout patterns and measured values only
- [x] GT Walsheim font files not embedded (Instrument Sans stand-in; Adobe slot ready)
- [x] Volunteer titles accurate — `Online Volunteer` ≠ `UN Volunteer`; org logos appear
      only as per-story card/cover overlays (see "Adding a story"), never in the masthead
- [ ] Replace the AI placeholder photos of the five hidden example stories with real,
      permission-cleared photographs
- [x] Footer keeps "views are my own" framing (`© Rattry Wu · Nanjing, China`)
