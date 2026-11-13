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

Photos are detected automatically — no code edit needed. Drop files here:

```
assets/stories/<slug>/cover.jpg    # card + hero (square or portrait crop works best)
assets/stories/<slug>/body.jpg     # the 4:3 figure inside the story
```

The slug is the `slug` field in `js/data.js`, for example:

```
assets/stories/the-hour-before-dinner/cover.jpg
assets/stories/the-hour-before-dinner/body.jpg
```

Until a file exists, the site shows the paper placeholder with the tiny **PHOTO** mark. Refresh after uploading. Recommended: 1600px wide, JPEG quality 80.

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

- Type: EB Garamond for reading, Hanken Grotesk for caps and metadata.
- Hero: 94svh dark cover, uppercase title at `clamp(32px, 5.7vw, 76px)`, 3px-equivalent tracking.
- Story body: two columns on desktop, one on mobile; justified serif at 18px / 1.72.
- Search: `/` or ⌘K to open; live match across title, category, place, role and body; ↑↓ + Enter.
- Motion: one card fade-up, one hero image settle; everything is disabled under `prefers-reduced-motion`.
