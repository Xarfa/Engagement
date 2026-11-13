# Engagement — Rattry Wu

A quiet editorial blog for volunteering, leadership, engagement and international classes.

Live: **https://xarfa.github.io/Engagement/**

Hand-built HTML + CSS + a little vanilla JavaScript. No framework, no build step, no tracking.

## Structure

| Path | What |
|---|---|
| `index.html` | Home — search, contact, three-column archive |
| `story.html` | Story template, read by `?slug=` |
| `js/data.js` | All six stories: title, category, date, copy, captions |
| `js/app.js` | Grid, search overlay, story rendering, image auto-detect |
| `css/site.css` | Design system and layouts |
| `assets/fonts/` | Self-hosted EB Garamond + Hanken Grotesk (no Google CDN) |
| `assets/icons/` | Xiaohongshu, LinkedIn, Cnblogs marks |

## Add your photographs

The images currently in the repo are **AI-generated placeholders** (YuRen API, documentary style, no faces) — they make the layout read like the finished site, but they are not real photos of these events.

Photos are detected automatically — no code edit needed. Replace the placeholders by dropping real files here:

```
assets/stories/<slug>/cover.jpg    # card + hero (landscape works best)
assets/stories/<slug>/body.jpg     # the 4:3 figure inside the story
```

The slug is the `slug` field in `js/data.js`, for example:

```
assets/stories/the-hour-before-dinner/cover.jpg
assets/stories/the-hour-before-dinner/body.jpg
```

Refresh after uploading. Recommended: 1600px wide, JPEG quality 80. If a file is missing, the card falls back to a quiet neutral wash, so nothing breaks.

## Edit the text

Open `js/data.js`. Each entry looks like this:

```js
{
  slug: "the-hour-before-dinner",
  title: "The Hour Before Dinner",
  category: "Volunteer",            // Volunteer / Leadership / Engagement / Classes
  date: "2025-10-18",               // used for sorting
  dateLabel: "October 2025",        // shown on the card
  location: "Nanjing, China",
  role: "Volunteer teacher",
  summary: "One sentence under the title.",
  lead: "The standfirst paragraph.",
  quote: { text: "…", by: "…" },
  figure: { caption: "Caption for body.jpg" },
  body: ["Paragraph one.", "Paragraph two.", "…"]
}
```

Add an entry to add a card; remove one to delete it. The first card is the newest by `date`.

## Links

- CONTACT: `mailto:2234545188@qq.com` (in `index.html` and `story.html`)
- Xiaohongshu / LinkedIn: intentionally inactive for now — set `href` and `off: false` in the `SOCIALS` array in `js/app.js`
- Cnblogs: https://www.cnblogs.com/FibonacciHeap

## Preview locally

```bash
python -m http.server 8080
# open http://localhost:8080
```

## Deploy

Push to `main`. GitHub Pages serves the repository root. `.nojekyll` keeps the `assets/` paths untouched.

## Design notes

Layout and typography follow the measured specs of the UN Volunteers × Exposure reference (`research/unv-exposure/analysis.md` in the wffp workspace):

- Palette: white paper, near-black ink, one UN sky-blue accent `#009EDB` (no gold, no cream, no red).
- Masthead: left-aligned uppercase wordmark in UN blue at `clamp(50px, 9vw, 128px)`, weight 700, tight tracking; EB Garamond intro below.
- Feed: 3-column square cards (2 under 920px, 1 under 640px), 16px gutters, 24px margins, 1440px container; card title 24px uppercase white on a bottom scrim, EB Garamond italic deck, caps date.
- Story: 100svh cover, uppercase title `clamp(27px, 4.6vw, 40px)` with 3px tracking, italic 24px deck; single reading column of max 700px (582px on small screens), EB Garamond 18px / 1.52.
- Search: `/` or ⌘K to open; live match across title, category, place, role and body; ↑↓ + Enter; Esc closes.
- Motion: staggered card fade-up, wordmark line-rise, hero image settle; everything is disabled under `prefers-reduced-motion`.
