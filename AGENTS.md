# AGENTS.md — project memory for coding agents (stepcode / zcode / …)

**Engagement — Rattry Wu.** Personal editorial archive (volunteering / leadership /
activities / classes). Static HTML+CSS+JS, no framework, no build step.
Live: https://xarfa.github.io/Engagement/ · Repo: github.com/Xarfa/Engagement (push `main` = deploy).
Working copy: `D:\联合国\Engagement` (moved here 2026-11-14 from D:\Arborist\engagement-site).
A stale stepcode scaffold also exists at
`E:\Arborist\Work Files\26.11.13 wffp portfolio website\engagement` — deprecated, do not edit.

## Current state (2026-11-14, commit 1c1d65c)

- **Design system:** white paper + ink `#111` + single UN sky-blue accent `#009EDB`
  (deep `#0083C1`, small-text `#0072A8`). No gold/cream/red anywhere.
- **Masthead:** owner's logo artwork `assets/logo-masthead.png` (RATTRY / ENGAGEMENT,
  600px wide, centered — source AI file on the owner's desktop, "未标题-1_画板 1.ai") →
  two-line generalized intro (no real project names — owner asked to 泛化;
  text ends "…community classrooms.") → black CONTACT ME button →
  `xarfa.github.io/Engagement` → visitor map. First screen must show ≥30–40% of the
  first card row (owner's rule; it was 0% once and the owner called it 狗屎 — re-measure
  `card.getBoundingClientRect().top` after any masthead change).
- **Contact form:** `#contact` section, FormSubmit → `2234545188@qq.com` (email + message).
  FormSubmit needs one-time activation per target address (owner still owes the click).
- **Visitor map:** `assets/visitors.js` — dot-matrix world, backend
  `wffp-visitors.pages.dev` (`/ping`, `/cities`), accent recolored to UN blue, 420px wide,
  city-name list hidden (`.v-cities{display:none}` — owner wants dots only).
- **Story pages:** 100svh cover → H1 (caps 40px/3px) → italic deck 27px → category kicker
  BELOW the deck → bottom author group (80px GitHub avatar + white ring, "By" EB Garamond,
  name bold sans, serif date · location). Body: EB Garamond 18/1.52, single 582px column,
  21px paragraph gaps, scroll reveal at 500ms/10px/scale .99.
- **Cards:** square, 1200px container, titles `max-width:10.5em` (Instrument Sans's `0` is
  wide — `ch` units are unusable in this font), 26px→24px cap.
- **Fonts:** `--sans: "gt-walsheim"(Adobe Fonts kit pending — owner has Adobe CC) →
  "Instrument Sans"(self-hosted) → Helvetica`. Serif: EB Garamond (self-hosted).
  Kit link goes where "Adobe Fonts" is marked in index.html / story.html.

## Story-commit paradigm (fixed 2026-11-14 with the ATOX story)

Owner drops a dated source folder `YYYY.MM.DD[~DD] <名称>/` into the repo root
(untracked; ignored via `20*/`). One commit per engagement:

1. **Assets** → `assets/stories/<slug>/` (short kebab-case slug): `cover.jpg`
   (1536w) + `cover-960.jpg` from the folder's cover image; `fig-N.jpg` figures;
   `logo-*.png` — owner supplies logos white and background-removed when possible.
2. **Story data** in `js/data.js`: `slug` / `category` / `date` (= start date) /
   `location` / `figures` (concise EN+DE captions the agent writes from what each
   image shows; optional `ratio: "w/h"` keeps portrait documents un-cropped) /
   `en` + `de` blocks / `logos`. Body text = owner's content.md VERBATIM: fix small
   grammar/spelling only, no additions or deletions, report anything major. The
   German translation of the owner's text is part of every commit. Title comes from
   content.md when the owner writes one. Figure extras (InnoFair 2026 story):
   `at: N` pins a figure after the Nth paragraph (1-based) instead of the even
   spread, and `privacy: true` renders it frosted — blurred with a "private" pill
   until the pointer approaches / keyboard focus / tap (touch); styles in
   `.fig-privacy` (site.css), strings `privacy_*` in SITE.i18n. NOTE: the fig-frame
   placeholder rules must stay scoped as `.fig-frame > span`, or they hide the veil.
   CERTIFICATES (owner rule, final 2026-11-15 — it reversed an earlier "no
   effects" call the same day): certificates are private figures exactly like
   group photos — always `privacy: true`, plus `center: true` (82% centred so
   the reveal reads big). PRIVACY RULE v2 (owner, 2026-11-15, supersedes the
   earlier per-story-call note and the TEDx group-photos-public decision): ANY
   figure with a detectable face goes `privacy: true` — automatic, never a
   per-story judgement. A Haar-cascade pass (frontal + profile + mirrored
   profile, OpenCV) over every visible story's figures flipped 17 more
   (InnoFair 6, TEDx 9, blind-school 2); visually verified false positives
   (empty dusk exterior, emblem plaque, corridor with backs only) stayed
   public — confirm borderline detections by eye before flipping. The cascade
   also MISSES faces: small webcam tiles in dark frames (ATOX fig-4/5) read 0
   and had to be flipped by eye — after the pass, glance at every remaining
   public figure for missed faces before pushing. Rerun the
   pass on every story update. The
   volunteer-credits slide (a roster of names) went private, and so did the
   owner's own portrait at the theme wall, which the owner moved to the very
   end of the figure run. Brighten
   certificate scans when the owner marks the
   source file 调亮 — but NEVER shift the hue: `ImageOps.autocontrast` cooled
   the paper tone and the owner rejected it, as did a plain RGB Brightness
   lift (too subtle to register). The accepted recipe works on the YCbCr
   luminance channel only — `Y' = (Y-128)*1.18 + 140`, Cb/Cr untouched
   (contrast + brightness in one pass, original colour preserved). Cache-bust
   changed figure images via a query param in `file` (e.g. `fig-8.jpg?v=3`) —
   the ?v= bumps only cover js/css.
3. **Logos**: `logos.card` = white organiser mark overlaid top-centre on the home
   card (owner's marker ≈34% card width; card-logo top is 5% since the InnoFair
   story — taller square marks otherwise run into 3-line titles; optional `w` = % of
   card width for square emblems — at 34% they run into 3–4 line titles, blind-school
   emblem uses 22; optional `top` = % of card height for WIDE wordmarks — a 34%-wide
   wordmark is only ~9% tall, so its optical centre sits far above the square
   emblems' centre at top 5%: ATOX uses `top: 11.5` so all three visible cards'
   logo centres align at ~16%). `logos.hero` = logos stacked at the bottom-left of
   the story cover, listed BOTTOM-UP (first entry renders lowest); sized to stay
   clear of text baked into the cover art. Optional per-logo `w` (% of column,
   default 100). LESSON (ATOX story): two marks of very different aspect ratios
   (wide wordmark vs emblem) never balance cleanly — same-width, same-height and
   optical-area all read as 悬殊 to the owner; when in doubt ask, or fall back to
   the single mark the owner picks (ATOX ended with COP31 alone). CSS: `.card-logo`,
   `.story-hero-logos`.
4. **Hiding** a story: `hidden: true` on its data object — dropped from grid,
   search and story pages without deleting data/assets. The five 2026-11-14
   example stories are hidden this way.
5. **Verify** locally (`python -m http.server` + ego-browser, cache disabled):
   first-screen card ratio ≥30–40%, hero logos clear of baked cover text,
   EN + DE reload both fine. Then one commit, push via proxy.
6. **Cache-busting**: when `js/data.js`, `js/app.js` or `css/site.css` change,
   bump the `?v=` param on their includes in index.html AND story.html
   (GitHub Pages sends max-age=600 — without the bump, returning visitors see
   the old version on plain F5 for up to 10 minutes).

## Non-obvious gotchas

- `assets/stories/**` images for the five hidden example stories are **AI
  placeholders** (YuRen API, see `tools/gen_images.py`) — not real event photos.
  Real stories (e.g. ATOX) commit their owner-supplied assets into
  `assets/stories/<slug>/` directly.
- `tools/gen_og.py` / `tools/gen_images.py` regenerate og.png / placeholder photos;
  paths are repo-relative.
- `ch` CSS units misbehave with Instrument Sans (wide `0`) — use `em`.
- Chrome heuristic-caches CSS/JS from `python -m http.server`; in ego-browser disable
  cache via `Network.setCacheDisabled` or you will audit stale files.
- GitHub push from this machine needs the local proxy (`127.0.0.1:7897`) alive; it
  sometimes dies — `git -c http.proxy=http://127.0.0.1:7897 push origin main`, retry.
- Never hotlink GitHub resources (`github.com/*.png`, avatars) — they fail for visitors
  in China and the element silently stays invisible. The byline avatar is self-hosted at
  `assets/byline-avatar.png` (240×240, fetched from avatars.githubusercontent.com).
- Search overlay is a combobox (aria-activedescendant); don't reintroduce focusable
  `role="option"` anchors or Enter-on-close-button traps fixed in e1fffd5/2f46fac.
- Owner's text rules: generalized masthead copy only (no project names on the homepage),
  volunteer titles stay accurate (`Online Volunteer` ≠ `UN Volunteer`). Org logos appear
  only as per-story card/cover overlays (see story-commit paradigm), never in the masthead.
- Bilingual (EN/DE): every story carries `en` and `de` blocks in `js/data.js`; UI strings
  live in `SITE.i18n`; the header switch stores `localStorage("engagement-lang")` and
  reloads. Never hotlink GitHub assets; date labels come from `Intl` (no `dateLabel`).
