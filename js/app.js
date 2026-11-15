/* Engagement — Rattry Wu
   Static, data-driven, no framework. English / German via the header switch. */
(function () {
  "use strict";

  var SITE = window.SITE || { stories: [], i18n: { en: {} }, categories: { en: {} }, defaultLang: "en" };

  /* ---------------- language ---------------- */

  var LANG_KEY = "engagement-lang";
  var LANG = "en";
  try {
    var stored = localStorage.getItem(LANG_KEY);
    if (stored === "en" || stored === "de") LANG = stored;
    else LANG = (navigator.language || "en").toLowerCase().indexOf("de") === 0 ? "de" : "en";
  } catch (e) { LANG = SITE.defaultLang || "en"; }

  var LOCALE = LANG === "de" ? "de-DE" : "en-US";

  function t(key) {
    var pack = SITE.i18n[LANG] || SITE.i18n.en;
    return pack[key] != null ? pack[key] : (SITE.i18n.en[key] != null ? SITE.i18n.en[key] : key);
  }
  function catLabel(c) {
    var pack = SITE.categories[LANG] || SITE.categories.en;
    return pack[c] || c;
  }
  function T(block) { /* per-language story block with en fallback */
    if (!block) return {};
    return block[LANG] || block.en || {};
  }

  var STORIES = (SITE.stories || []).filter(function (s) { return !s.hidden; }).sort(function (a, b) {
    return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
  });

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function fmtMonthYear(iso) {
    var d = new Date(iso + "T12:00:00");
    return new Intl.DateTimeFormat(LOCALE, { month: "long", year: "numeric" }).format(d);
  }
  function fullDate(iso) {
    var d = new Date(iso + "T12:00:00");
    return new Intl.DateTimeFormat(LOCALE, { month: "long", day: "numeric", year: "numeric" }).format(d);
  }

  function storyHref(s) { return "story.html?slug=" + encodeURIComponent(s.slug); }

  function applyChrome() {
    document.documentElement.lang = LANG;
    document.title = "Engagement — Rattry Wu";
    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-ph]").forEach(function (el) { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
    $$(".lang-switch button").forEach(function (b) {
      var on = b.getAttribute("data-lang") === LANG;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function buildLangSwitch() {
    $$(".lang-switch").forEach(function (box) {
      box.innerHTML = '<button type="button" data-lang="en" aria-label="English">EN</button>' +
        '<span aria-hidden="true">·</span>' +
        '<button type="button" data-lang="de" aria-label="Deutsch">DE</button>';
      $$("button", box).forEach(function (b) {
        b.addEventListener("click", function () {
          var l = b.getAttribute("data-lang");
          if (l === LANG) return;
          try { localStorage.setItem(LANG_KEY, l); } catch (e) {}
          location.reload();
        });
      });
    });
  }

  /* ---------------- social marks ---------------- */

  var SOCIALS = [
    { name: "Cnblogs", file: "cnblogs.ico", href: "https://www.cnblogs.com/FibonacciHeap", off: false },
    { name: "GitHub", file: "github.svg", href: "https://github.com/Xarfa", off: false },
    { name: "ResearchGate", file: "researchgate.svg", href: "https://www.researchgate.net/profile/Wu-Rattry?ev=hdr_xprf", off: false },
    { name: "Xiaohongshu", file: "xiaohongshu.svg", href: "https://www.xiaohongshu.com/user/profile/65b21361000000000e00224f", off: false },
    { name: "Facebook", file: "facebook.svg", href: "https://www.facebook.com/profile.php?id=61596610162807", off: false },
    { name: "LinkedIn", file: "linkedin.svg", tip: "Rattry Wu" }
  ];

  function socialMarkup() {
    return SOCIALS.map(function (s) {
      if (s.tip) {
        return '<span class="social is-tip" tabindex="0" role="img" aria-label="LinkedIn — ' + esc(s.tip) + '">' +
          '<img src="assets/icons/' + s.file + '" alt="" width="18" height="18">' +
          '<span class="tip">' + esc(s.tip) + "</span></span>";
      }
      var inner = '<img src="assets/icons/' + s.file + '" alt="" width="18" height="18">';
      if (s.off) {
        return '<span class="social is-off" role="img" aria-label="' + esc(s.name) +
          ' — link coming soon" title="' + esc(s.name) + ' — coming soon">' + inner + "</span>";
      }
      return '<a class="social" href="' + esc(s.href) + '" target="_blank" rel="noopener" ' +
        'aria-label="' + esc(s.name) + ' (opens in a new tab)" title="' + esc(s.name) + '">' + inner + "</a>";
    }).join("");
  }

  function paintSocials() {
    $$("[data-socials]").forEach(function (el) { el.innerHTML = socialMarkup(); });
  }

  /* ---------------- header ---------------- */

  function initHeader() {
    var head = $(".site-head");
    if (!head) return;
    var isStory = document.body.classList.contains("story-page");
    var hero = $(".story-hero");

    var onScroll = function () {
      if (isStory) {
        var threshold = hero ? Math.max(80, hero.offsetHeight - 64) : 90;
        head.classList.toggle("is-solid", window.scrollY > threshold);
      } else {
        head.classList.toggle("is-scrolled", window.scrollY > 8);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  /* ---------------- images ---------------- */

  function attachImage(frame, img, url, doneClass, priority) {
    if (!frame || !img || !url) return;
    img.setAttribute("decoding", "async");
    if (priority) img.setAttribute("fetchpriority", "high");
    var show = function () { frame.classList.add(doneClass || "has-image"); };
    img.addEventListener("load", show, { once: true });
    img.src = url;
    if (img.complete && img.naturalWidth > 0) show();
  }

  /* ---------------- home ---------------- */

  function cardMarkup(s, i) {
    var slug = "assets/stories/" + s.slug;
    var L = T(s);
    var cardLogo = s.logos && s.logos.card;
    var late = i >= 6; // below the fold: scroll-reveal instead of load-stagger
    return '' +
      '<a class="card' + (late ? ' reveal-sr' : ' reveal') + '" href="' + storyHref(s) + '" style="--i:' + i + '" ' +
        'aria-label="' + esc(L.title) + ' — ' + esc(fmtMonthYear(s.date)) + '">' +
        '<div class="card-photo">' +
          '<img alt="" width="1536" height="1024" loading="lazy" decoding="async" ' +
            'srcset="' + slug + '/cover-960.jpg 960w, ' + slug + '/cover.jpg 1536w" ' +
            'sizes="(min-width: 700px) 448px, 92vw" data-cover="' + slug + '/cover-960.jpg">' +
        "</div>" +
        '<div class="card-scrim" aria-hidden="true"></div>' +
        (cardLogo ? '<img class="card-logo" src="' + slug + '/' + esc(cardLogo.file) +
          '" alt="' + esc(cardLogo.alt || "") + '" loading="lazy" decoding="async"' +
          /* cardLogo.w = width as % of card width (34 = CSS default) — square
             emblems need less width or they run into 3–4 line titles.
             cardLogo.top = top edge as % of card height (5 = CSS default) —
             wide wordmarks sit lower so their optical centre lines up with
             the taller square emblems beside them */
          (cardLogo.w != null || cardLogo.top != null
            ? ' style="' + (cardLogo.w != null ? "width:" + cardLogo.w + "%;" : "") +
              (cardLogo.top != null ? "top:" + cardLogo.top + "%;" : "") + '"'
            : "") + '>' : "") +
        '<div class="card-body">' +
          '<h2 class="card-title">' + esc(L.title) + "</h2>" +
          '<p class="card-deck">' + esc(L.summary) + "</p>" +
          '<span class="card-date">' + esc(fmtMonthYear(s.date)) + "</span>" +
        "</div>" +
      "</a>";
  }

  function observeLate(late) {
    if (!late.length) return;
    if (!("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      late.forEach(function (t) { t.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (!entries[i].isIntersecting) continue;
        entries[i].target.classList.add("is-in");
        io.unobserve(entries[i].target);
      }
    }, { threshold: 0.01, rootMargin: "0px 0px -8% 0px" });
    late.forEach(function (t) { t.classList.add("sr"); io.observe(t); });
  }

  function initHome() {
    var grid = $("#storyGrid");
    if (!grid) return;

    grid.innerHTML = STORIES.map(cardMarkup).join("");
    $$(".card", grid).forEach(function (card) {
      var img = $("img[data-cover]", card);
      attachImage(card, img, img.getAttribute("data-cover"));
    });
    observeLate($$(".card.reveal-sr", grid));
  }

  /* ---------------- search ---------------- */

  var searchState = { open: false, active: -1, lastFocus: null, focusTimer: null };

  function buildSearch() {
    var el = document.createElement("div");
    el.className = "search";
    el.id = "searchPanel";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.setAttribute("aria-hidden", "true");
    el.setAttribute("aria-labelledby", "searchTitle");
    el.innerHTML = '' +
      '<div class="search-inner">' +
        '<div class="search-top">' +
          '<div>' +
            '<label class="search-label" id="searchTitle" for="searchInput" data-i18n="search_label"></label>' +
            '<input class="search-input" id="searchInput" type="search" autocomplete="off" ' +
              'spellcheck="false" data-i18n-ph="search_ph" ' +
              'role="combobox" aria-expanded="false" aria-controls="searchResults" aria-autocomplete="list">' +
          "</div>" +
          '<button class="search-close" type="button" aria-label="Close search">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">' +
              '<path d="M5 5l14 14M19 5L5 19"/></svg>' +
          "</button>" +
        "</div>" +
        '<p class="search-count" id="searchCount" aria-live="polite"></p>' +
        '<div class="search-results" id="searchResults" role="listbox" aria-label="Search results"></div>' +
        '<p class="search-empty" id="searchEmpty" hidden></p>' +
        '<p class="search-hint"><kbd>/</kbd> <span data-i18n="hint_open"></span> · <kbd>↑</kbd><kbd>↓</kbd> ' +
          '<span data-i18n="hint_move"></span> · <kbd>ESC</kbd> <span data-i18n="hint_close"></span></p>' +
      "</div>";
    document.body.appendChild(el);
    return el;
  }

  function normalize(str) {
    return String(str || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function scoreStory(s, q) {
    var score = 0;
    var L = T(s);
    var cat = normalize(catLabel(s.category));
    var t = normalize(L.title), m = normalize(L.summary),
        b = normalize((L.body || []).join(" ")), l = normalize(T(s.location) || "");
    if (!q) return 1;
    if (t.indexOf(q) !== -1) score += 8;
    if (m.indexOf(q) !== -1) score += 4;
    if (cat.indexOf(q) !== -1) score += 5;
    if (l.indexOf(q) !== -1) score += 3;
    if (b.indexOf(q) !== -1) score += 1;
    return score;
  }

  function matchList(q) {
    if (!q) return STORIES.slice();
    return STORIES
      .map(function (s) { return { s: s, score: scoreStory(s, q) }; })
      .filter(function (x) { return x.score > 0; })
      .sort(function (a, b) { return b.score - a.score || (a.s.date < b.s.date ? 1 : -1); })
      .map(function (x) { return x.s; });
  }

  function mark(text, q) {
    if (!q) return esc(text);
    var re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
    return String(text).split(re).map(function (part, i) {
      return i % 2 ? "<mark>" + esc(part) + "</mark>" : esc(part);
    }).join("");
  }

  function snippet(s, q) {
    var L = T(s);
    var summary = L.summary || "";
    if (!q) return summary;
    if (normalize(summary).indexOf(q) !== -1) return summary;
    var body = (L.body || []).join(" ");
    var at = body.toLowerCase().indexOf(q);
    if (at === -1) return summary;
    var start = Math.max(0, at - 50);
    if (start > 0) {
      var space = body.indexOf(" ", start);
      if (space !== -1 && space < at) start = space + 1;
    }
    var end = Math.min(body.length, at + q.length + 100);
    var next = body.indexOf(" ", end);
    if (next !== -1) end = next;
    return (start > 0 ? "…" : "") + body.slice(start, end).trim() + "…";
  }

  function renderResults(q) {
    var list = $("#searchResults");
    var count = $("#searchCount");
    var empty = $("#searchEmpty");
    var input = $("#searchInput");
    var results = matchList(q);
    searchState.active = -1;
    if (input) input.removeAttribute("aria-activedescendant");

    count.textContent = q
      ? t("count_for").replace("{n}", results.length).replace("{q}", q)
      : t("count_total").replace("{n}", results.length);

    if (input) input.setAttribute("aria-expanded", results.length ? "true" : "false");

    if (!results.length) {
      list.innerHTML = "";
      if (empty) {
        empty.hidden = false;
        empty.innerHTML = t("empty_1") + "<strong>“" + esc(q) + "”</strong>" + t("empty_2");
      }
      return;
    }
    if (empty) empty.hidden = true;

    list.innerHTML = results.map(function (s, i) {
      var L = T(s);
      return '<a class="search-result" role="option" id="searchResult-' + i + '" aria-selected="false" ' +
        'tabindex="-1" href="' + storyHref(s) + '" data-i="' + i + '">' +
        '<span class="search-num">' + pad(i + 1) + "</span>" +
        "<span>" +
          '<span class="search-title">' + mark(L.title, q) + "</span>" +
          '<span class="search-meta">' + esc(catLabel(s.category)) + " · " + esc(T(s.location) || "") + " · " +
            mark(snippet(s, q), q) + "</span>" +
        "</span>" +
        '<span class="search-date">' + esc(fmtMonthYear(s.date)) + "</span>" +
      "</a>";
    }).join("");
  }

  function setActive(i, scroll) {
    var items = $$(".search-result", $("#searchResults"));
    if (!items.length) return;
    i = (i + items.length) % items.length;
    searchState.active = i;
    items.forEach(function (el, n) {
      el.classList.toggle("is-active", n === i);
      el.setAttribute("aria-selected", n === i ? "true" : "false");
    });
    var input = $("#searchInput");
    if (input) {
      if (i >= 0) input.setAttribute("aria-activedescendant", "searchResult-" + i);
      else input.removeAttribute("aria-activedescendant");
    }
    if (scroll && items[i]) items[i].scrollIntoView({ block: "nearest" });
  }

  function setExpanded(open) {
    $$("[data-search-open]").forEach(function (b) { b.setAttribute("aria-expanded", open ? "true" : "false"); });
  }

  function openSearch() {
    if (searchState.open) return;
    var el = $("#searchPanel") || buildSearch();
    searchState.open = true;
    searchState.lastFocus = document.activeElement;
    var sbw = window.innerWidth - document.documentElement.clientWidth;
    if (sbw > 0) document.documentElement.style.setProperty("--sbw", sbw + "px");
    document.body.classList.add("is-locked");
    el.classList.add("is-open");
    el.setAttribute("aria-hidden", "false");
    setExpanded(true);
    var input = $("#searchInput");
    input.setAttribute("aria-expanded", "true");
    input.value = "";
    renderResults("");
    searchState.focusTimer = window.setTimeout(function () {
      if (searchState.open) input.focus();
    }, 60);
  }

  function closeSearch() {
    if (!searchState.open) return;
    var el = $("#searchPanel");
    searchState.open = false;
    if (searchState.focusTimer) { window.clearTimeout(searchState.focusTimer); searchState.focusTimer = null; }
    el.classList.remove("is-open");
    el.setAttribute("aria-hidden", "true");
    setExpanded(false);
    document.body.classList.remove("is-locked");
    document.documentElement.style.removeProperty("--sbw");
    var input = $("#searchInput");
    if (input) {
      input.setAttribute("aria-expanded", "false");
      input.removeAttribute("aria-activedescendant");
    }
    if (searchState.lastFocus && searchState.lastFocus.focus) searchState.lastFocus.focus();
  }

  function initSearch() {
    var el = buildSearch();
    applyChrome(); // fill the overlay strings just injected
    var input = $("#searchInput");

    $$("[data-search-open]").forEach(function (btn) {
      btn.setAttribute("aria-expanded", "false");
      btn.addEventListener("click", openSearch);
    });
    $(".search-close", el).addEventListener("click", closeSearch);
    el.addEventListener("mousedown", function (e) {
      if (e.target === el) closeSearch();
    });

    input.addEventListener("input", function () {
      renderResults(normalize(input.value));
    });

    function move(e) {
      if (e.key === "ArrowDown") { e.preventDefault(); setActive(searchState.active + 1, true); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setActive(searchState.active - 1, true); }
      else if (e.key === "Enter") {
        var list = $$(".search-result");
        var pick = searchState.active >= 0 ? list[searchState.active] : list[0];
        if (pick) { e.preventDefault(); window.location.href = pick.getAttribute("href"); }
      }
    }
    input.addEventListener("keydown", move);
    el.addEventListener("keydown", function (e) {
      if (e.target !== input && (e.key === "ArrowDown" || e.key === "ArrowUp")) move(e);
    });

    $("#searchResults").addEventListener("mouseover", function (e) {
      var item = e.target.closest(".search-result");
      if (!item) return;
      setActive(Number(item.getAttribute("data-i")), false);
    });

    document.addEventListener("keydown", function (e) {
      var tag = (e.target.tagName || "").toUpperCase();
      var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(tag) || e.target.isContentEditable;
      if (e.key === "Escape" && searchState.open) { closeSearch(); return; }
      if ((e.key === "/" && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        if (searchState.open) closeSearch(); else openSearch();
      }
      if (!searchState.open || e.key !== "Tab") return;
      var focusables = [$(".search-input", el), $(".search-close", el)];
      var first = focusables[0], last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    window.addEventListener("pageshow", function (e) {
      if (e.persisted && searchState.open) closeSearch();
    });
  }

  /* ---------------- story ---------------- */

  function renderBody(s) {
    var L = T(s);
    var ps = L.body || [];
    var figs = s.figures || [];
    var out = [];
    var quoteAt = ps.length > 3 ? 2 : 1;

    /* Figures render after a paragraph. With 1–2 figures keep the original
       placement (after ¶2, then ¶4); with more, spread them evenly over the
       paragraph boundaries — earlier paragraphs take the remainder.
       fig.at = 1-based paragraph number pins a figure to that spot explicitly.
       fig.ratio (e.g. "1000/1413") keeps portrait documents un-cropped. */
    var figSlots = {};
    var pinned = [], loose = [];
    figs.forEach(function (f) {
      if (f.at != null) pinned.push(f); else loose.push(f);
    });
    pinned.forEach(function (f) {
      var at = Math.max(1, Math.min(f.at, ps.length));
      (figSlots[at] = figSlots[at] || []).push(f);
    });
    if (figs.length === 1 && !pinned.length) {
      figSlots[Math.max(1, Math.min(2, ps.length - 1))] = [figs[0]];
    } else if (figs.length === 2 && !pinned.length) {
      var atA = Math.min(2, ps.length), atB = Math.min(4, ps.length);
      (figSlots[atA] = figSlots[atA] || []).push(figs[0]);
      (figSlots[atB] = figSlots[atB] || []).push(figs[1]);
    } else if (loose.length) {
      var per = Math.floor(loose.length / ps.length), rem = loose.length % ps.length, k = 0;
      for (var p = 1; p <= ps.length; p++) {
        var take = per + (p <= rem ? 1 : 0);
        if (!take) continue;
        figSlots[p] = (figSlots[p] || []).concat(loose.slice(k, k + take));
        k += take;
      }
    }

    var figIndex = 0;
    ps.forEach(function (text, i) {
      out.push("<p>" + esc(text) + "</p>");
      if (i === quoteAt - 1 && L.quote) {
        out.push('<blockquote><p>“' + esc(L.quote.text) + "”</p>" +
          (L.quote.by ? "<cite>" + esc(L.quote.by) + "</cite>" : "") + "</blockquote>");
      }
      (figSlots[i + 1] || []).forEach(function (fig) {
        var url = "assets/stories/" + s.slug + "/" + fig.file;
        var priv = !!fig.privacy;
        /* fig.center forces the 82% centred variant — certificates go up big
           and plain, never left-narrow or privacy-blurred */
        var variant = fig.center ? "variant-center" : (figIndex % 2 === 0 ? "variant-center" : "variant-left");
        out.push('<figure class="' + variant + (priv ? " fig-privacy" : "") + '">' +
          '<div class="fig-frame" data-fig="' + url + '"' +
            (fig.ratio ? ' style="aspect-ratio:' + fig.ratio + '"' : "") +
            (priv ? ' tabindex="0" role="button" aria-pressed="false" aria-label="' + esc(t("privacy_aria")) + '"' : "") + ">" +
            "<span>Photo</span>" +
            '<img alt="" width="1200" height="800" loading="lazy" decoding="async" ' +
              'data-alt="' + esc(T(fig) || "") + '">' +
            (priv ? '<div class="fig-veil" aria-hidden="true">' +
              '<span class="fig-veil-pill">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
              '<rect x="4.5" y="10.5" width="15" height="10" rx="2.2"></rect>' +
              '<path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7"></path></svg>' +
              '<span class="ph">' + esc(t("privacy_hint_hover")) + "</span>" +
              '<span class="pt">' + esc(t("privacy_hint_tap")) + "</span>" +
              "</span></div>" : "") +
          "</div>" +
          '<figcaption>' + esc(T(fig) || "") + (fig.credit ? ' <span class="credit">' + esc(fig.credit) + "</span>" : "") + "</figcaption>" +
          "</figure>");
        figIndex++;
      });
    });
    return out.join("");
  }

  /* Scroll reveal at the reference's measured rhythm: 500ms / 10px / scale .99.
     Class is only added when the observer will actually run, so no-JS never hides content. */
  function initReveal() {
    var targets = $$(".story-body > p, .story-body > blockquote, .story-body > figure, .story-end");
    if (!targets.length) return;
    if (!("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach(function (t) { t.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (!entries[i].isIntersecting) continue;
        entries[i].target.classList.add("is-in");
        io.unobserve(entries[i].target);
      }
    }, { threshold: 0.01, rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (t) { t.classList.add("sr"); io.observe(t); });
  }

  /* "Cover exhale": the still cover sinks and swells slightly as the reader
     scrolls into the body — rAF-throttled, transform-only, reduced-motion guarded. */
  function initHeroDrift() {
    var media = $(".story-hero-media"), hero = $(".story-hero");
    if (!media || !hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var queued = false;
    var paint = function () {
      queued = false;
      var h = hero.offsetHeight || 1, y = Math.min(window.scrollY, h), p = y / h;
      media.style.transform = "translate3d(0," + (y * 0.22).toFixed(1) + "px,0) scale(" + (1 + p * 0.06).toFixed(4) + ")";
    };
    var onScroll = function () { if (!queued) { queued = true; requestAnimationFrame(paint); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    paint();
  }

  function initStory() {
    var root = $("#storyPage");
    if (!root) return;

    var slug = new URLSearchParams(window.location.search).get("slug");
    var idx = STORIES.findIndex(function (s) { return s.slug === slug; });

    if (idx === -1) {
      document.body.classList.add("is-plain");
      root.innerHTML = '<section class="story-main" style="text-align:center;padding-top:120px">' +
        '<p class="story-end-label" style="display:block;margin-bottom:14px">404</p>' +
        '<h1 class="story-next-title" style="font-size:clamp(28px,4vw,48px)">' + t("err_title") + "</h1>" +
        '<p style="margin:24px auto 0;max-width:520px;font-style:italic;color:var(--mute)">' + t("err_body") + "</p>" +
        '<p style="margin-top:28px"><a class="head-link" href="index.html">← ' + t("err_back") + "</a></p></section>";
      document.title = "Not found — Engagement";
      return;
    }

    var s = STORIES[idx];
    var L = T(s);
    var next = STORIES[(idx + 1) % STORIES.length];
    var LN = T(next);

    document.title = L.title + " — Engagement · Rattry Wu";
    var meta = $('meta[name="description"]');
    if (meta) meta.setAttribute("content", L.summary);
    var ogTitle = $('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", L.title + " — Engagement");
    var ogDesc = $('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", L.summary);
    var canonical = $('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", window.location.href.split("?")[0]);
    var ogUrl = $('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", window.location.href.split("?")[0]);

    var hero = $("#storyHero");
    var heroLogos = (s.logos && s.logos.hero) || [];
    hero.innerHTML = '' +
      '<div class="story-hero-media"><img alt="" width="1536" height="1024" ' +
        'data-cover="assets/stories/' + s.slug + '/cover.jpg" data-alt="' + esc(L.title) + '"></div>' +
      (heroLogos.length
        ? '<div class="story-hero-logos">' + heroLogos.map(function (lg) {
            /* lg.w = width as % of the column: equal-AREA optical balance across
               marks of different aspect ratios (100 = column width) */
            var w = lg.w != null ? lg.w : 100;
            return '<img src="assets/stories/' + s.slug + '/' + esc(lg.file) + '" alt="' + esc(lg.alt || "") + '" style="width:' + w + '%">';
          }).join("") + "</div>"
        : "") +
      '<div class="story-hero-inner">' +
        '<h1 class="story-title">' + esc(L.title) + "</h1>" +
        '<p class="story-sub">' + esc(L.summary) + "</p>" +
        '<p class="story-kicker">' + esc(catLabel(s.category)) + "</p>" +
      "</div>" +
      '<div class="story-byline">' +
        '<img class="byline-avatar" alt="" width="80" height="80" src="assets/byline-avatar.png">' +
        '<p class="byline-name"><span class="by">' + esc(t("by")) + '</span><span class="nm">Rattry Wu</span></p>' +
        '<p class="byline-date">' + esc(fullDate(s.date)) +
          '<span class="sep">·</span>' + esc(T(s.location) || "") + "</p>" +
      "</div>";
    attachImage(hero, $("img[data-cover]", hero), $("img[data-cover]", hero).getAttribute("data-cover"), "has-image", true);

    var avatar = $(".byline-avatar", hero);
    if (avatar && avatar.complete && avatar.naturalWidth > 0) hero.classList.add("has-avatar");
    else if (avatar) avatar.addEventListener("load", function () { hero.classList.add("has-avatar"); }, { once: true });
    if (avatar) avatar.addEventListener("error", function () { avatar.style.display = "none"; }, { once: true });

    $("#storyBody").innerHTML = renderBody(s);

    $$(".fig-frame", root).forEach(function (f) {
      attachImage(f, $("img", f), f.getAttribute("data-fig"));
    });

    /* Private figures: frosted until the reader's pointer approaches the
       frame — or it is focused (keyboard) / tapped (touch). */
    $$(".fig-privacy .fig-frame", root).forEach(function (f) {
      var set = function (open) {
        f.classList.toggle("is-open", open);
        f.setAttribute("aria-pressed", open ? "true" : "false");
      };
      f.addEventListener("pointerenter", function (e) { if (e.pointerType !== "touch") set(true); });
      f.addEventListener("pointerleave", function () { set(false); });
      f.addEventListener("focus", function () { set(true); });
      f.addEventListener("blur", function () { set(false); });
      f.addEventListener("click", function () {
        if (window.matchMedia("(hover: none)").matches) set(!f.classList.contains("is-open"));
      });
    });

    $("#nextStory").href = storyHref(next);
    $("#nextTitle").textContent = LN.title;
    $("#nextMeta").textContent = catLabel(next.category) + " · " + fmtMonthYear(next.date);

    initReveal();
    initHeroDrift();
  }

  /* ---------------- boot ---------------- */

  function boot() {
    buildLangSwitch();
    applyChrome();
    paintSocials();
    initHeader();
    initSearch();
    initHome();
    initStory();
    var year = $("#footYear");
    if (year) year.textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
