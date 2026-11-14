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

## Non-obvious gotchas

- `assets/stories/**` images are **AI placeholders** (YuRen API, see `tools/gen_images.py`)
  — not real event photos. Real photos replace them by filename; no code change needed.
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
  volunteer titles stay accurate (`Online Volunteer` ≠ `UN Volunteer`), no org logos.
- Bilingual (EN/DE): every story carries `en` and `de` blocks in `js/data.js`; UI strings
  live in `SITE.i18n`; the header switch stores `localStorage("engagement-lang")` and
  reloads. Never hotlink GitHub assets; date labels come from `Intl` (no `dateLabel`).
