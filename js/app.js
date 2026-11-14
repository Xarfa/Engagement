/* Engagement — Rattry Wu
   Static, data-driven, no framework. */
(function () {
  "use strict";

  var STORIES = (window.ENGAGEMENTS || []).slice().sort(function (a, b) {
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

  function fullDate(iso) {
    var d = new Date(iso + "T12:00:00");
    return new Intl.DateTimeFormat("en-US", {
      month: "long", day: "numeric", year: "numeric"
    }).format(d);
  }

  function storyHref(s) { return "story.html?slug=" + encodeURIComponent(s.slug); }

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
    var late = i >= 6; // below the fold: scroll-reveal instead of load-stagger
    return '' +
      '<a class="card' + (late ? ' reveal-sr' : ' reveal') + '" href="' + storyHref(s) + '" style="--i:' + i + '" ' +
        'aria-label="' + esc(s.title) + ' — ' + esc(s.dateLabel) + '">' +
        '<div class="card-photo">' +
          '<img alt="" width="1536" height="1024" loading="lazy" decoding="async" ' +
            'srcset="' + slug + '/cover-960.jpg 960w, ' + slug + '/cover.jpg 1536w" ' +
            'sizes="(min-width: 700px) 448px, 92vw" data-cover="' + slug + '/cover-960.jpg">' +
        "</div>" +
        '<div class="card-scrim" aria-hidden="true"></div>' +
        '<div class="card-body">' +
          '<h2 class="card-title">' + esc(s.title) + "</h2>" +
          '<p class="card-deck">' + esc(s.summary) + "</p>" +
          '<span class="card-date">' + esc(s.dateLabel) + "</span>" +
        "</div>" +
      "</a>";
  }

  function initHome() {
    var grid = $("#storyGrid");
    if (!grid) return;

    grid.innerHTML = STORIES.map(cardMarkup).join("");
    $$(".card", grid).forEach(function (card) {
      var img = $("img[data-cover]", card);
      attachImage(card, img, img.getAttribute("data-cover"));
    });

    /* below-fold cards reveal on scroll with the story-body rhythm */
    var late = $$(".card.reveal-sr", grid);
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

  /* ---------------- search ---------------- */

  var searchState = { open: false, active: -1, lastFocus: null };

  function buildSearch() {
    var el = document.createElement("div");
    el.className = "search";
    el.id = "searchPanel";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.setAttribute("aria-labelledby", "searchTitle");
    el.innerHTML = '' +
      '<div class="search-inner">' +
        '<div class="search-top">' +
          '<div>' +
            '<label class="search-label" id="searchTitle" for="searchInput">Search the archive</label>' +
            '<input class="search-input" id="searchInput" type="search" autocomplete="off" ' +
              'spellcheck="false" placeholder="Try “leadership”, “kitchen”…" ' +
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
        '<p class="search-hint"><kbd>/</kbd> to open · <kbd>↑</kbd><kbd>↓</kbd> to move · <kbd>Esc</kbd> to close</p>' +
      "</div>";
    document.body.appendChild(el);
    return el;
  }

  function normalize(str) {
    return String(str || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function scoreStory(s, q) {
    var score = 0;
    var t = normalize(s.title), c = normalize(s.category), m = normalize(s.summary),
        b = normalize((s.body || []).join(" ")), l = normalize(s.location), r = normalize(s.role);
    if (!q) return 1;
    if (t.indexOf(q) !== -1) score += 8;
    if (c.indexOf(q) !== -1) score += 5;
    if (m.indexOf(q) !== -1) score += 4;
    if (l.indexOf(q) !== -1) score += 3;
    if (r.indexOf(q) !== -1) score += 2;
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
    var summary = s.summary || "";
    if (!q) return summary;
    if (normalize(summary).indexOf(q) !== -1) return summary;

    var body = (s.body || []).join(" ");
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

    var years = STORIES.map(function (s) { return s.date.slice(0, 4); }).sort();
    var span = years.length ? years[0] + "—" + years[years.length - 1] : "";
    count.textContent = q
      ? results.length + (results.length === 1 ? " engagement" : " engagements") + " for “" + q + "”"
      : results.length + " engagements" + (span ? " · " + span : "");

    if (input) input.setAttribute("aria-expanded", results.length ? "true" : "false");

    if (!results.length) {
      list.innerHTML = "";
      if (empty) {
        empty.hidden = false;
        empty.innerHTML = 'Nothing under <strong>“' + esc(q) + "”</strong> yet. " +
          "Try a category, a place, or a word from a story.";
      }
      return;
    }
    if (empty) empty.hidden = true;

    list.innerHTML = results.map(function (s, i) {
      return '<a class="search-result" role="option" id="searchResult-' + i + '" aria-selected="false" ' +
        'tabindex="-1" href="' + storyHref(s) + '" data-i="' + i + '">' +
        '<span class="search-num">' + pad(i + 1) + "</span>" +
        "<span>" +
          '<span class="search-title">' + mark(s.title, q) + "</span>" +
          '<span class="search-meta">' + esc(s.category) + " · " + esc(s.location) + " · " +
            mark(snippet(s, q), q) + "</span>" +
        "</span>" +
        '<span class="search-date">' + esc(s.dateLabel) + "</span>" +
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
    el.setAttribute("aria-hidden", "true");
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

  function renderBody(s, idx) {
    var ps = (s.lead ? [s.lead] : []).concat(s.body || []);
    var out = [];
    var quoteAt = ps.length > 3 ? 2 : 1;
    var figAt = ps.length > 4 ? 3 : ps.length - 1;
    var figVariant = (idx || 0) % 2 === 0 ? "variant-center" : "variant-left";

    ps.forEach(function (text, i) {
      out.push("<p>" + esc(text) + "</p>");
      if (i === quoteAt - 1 && s.quote) {
        out.push('<blockquote><p>“' + esc(s.quote.text) + "”</p>" +
          (s.quote.by ? "<cite>" + esc(s.quote.by) + "</cite>" : "") + "</blockquote>");
      }
      if (i === figAt - 1 && s.figure) {
        var url = "assets/stories/" + s.slug + "/body.jpg";
        out.push('<figure class="' + figVariant + '"><div class="fig-frame" data-fig="' + url + '">' +
          "<span>Photo</span>" +
          '<img alt="" width="1600" height="1067" loading="lazy" decoding="async" data-alt="' + esc(s.figure.caption || s.title) + '">' +
          "</div><figcaption>" + esc(s.figure.caption || "") + "</figcaption></figure>");
      }
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
        '<p class="story-end-label" style="display:block;margin-bottom:14px">404 — Not found</p>' +
        '<h1 class="story-next-title" style="font-size:clamp(28px,4vw,48px)">This engagement does not exist.</h1>' +
        '<p style="margin:24px auto 0;max-width:520px;font-style:italic;color:var(--mute)">It may have been renamed, or the link is incomplete.</p>' +
        '<p style="margin-top:28px"><a class="head-link" href="index.html">← Back to all engagements</a></p></section>';
      document.title = "Not found — Engagement";
      return;
    }

    var s = STORIES[idx];
    var next = STORIES[(idx + 1) % STORIES.length];

    document.title = s.title + " — Engagement · Rattry Wu";
    var meta = $('meta[name="description"]');
    if (meta) meta.setAttribute("content", s.summary);
    var ogTitle = $('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", s.title + " — Engagement");
    var ogDesc = $('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", s.summary);
    var canonical = $('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", window.location.href);
    var ogUrl = $('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", window.location.href);

    var hero = $("#storyHero");
    hero.innerHTML = '' +
      '<div class="story-hero-media"><img alt="" width="1536" height="1024" ' +
        'data-cover="assets/stories/' + s.slug + '/cover.jpg" data-alt="' + esc(s.title) + '"></div>' +
      '<div class="story-hero-inner">' +
        '<h1 class="story-title">' + esc(s.title) + "</h1>" +
        '<p class="story-sub">' + esc(s.summary) + "</p>" +
        '<p class="story-kicker">' + esc(s.category) + "</p>" +
      "</div>" +
      '<div class="story-byline">' +
        '<img class="byline-avatar" alt="" width="80" height="80" ' +
          'src="https://github.com/Xarfa.png" referrerpolicy="no-referrer">' +
        '<p class="byline-name"><span class="by">By</span><span class="nm">Rattry Wu</span></p>' +
        '<p class="byline-date">' + esc(fullDate(s.date)) +
          '<span class="sep">·</span>' + esc(s.location) + "</p>" +
      "</div>";
    attachImage(hero, $("img[data-cover]", hero), $("img[data-cover]", hero).getAttribute("data-cover"), "has-image", true);

    var avatar = $(".byline-avatar", hero);
    if (avatar && avatar.complete && avatar.naturalWidth > 0) hero.classList.add("has-avatar");
    else avatar.addEventListener("load", function () { hero.classList.add("has-avatar"); }, { once: true });

    $("#storyBody").innerHTML = renderBody(s, idx);

    var fig = $(".fig-frame");
    if (fig) attachImage(fig, $("img", fig), fig.getAttribute("data-fig"));

    $("#nextStory").href = storyHref(next);
    $("#nextTitle").textContent = next.title;
    $("#nextMeta").textContent = next.category + " · " + next.dateLabel;

    initReveal();
    initHeroDrift();
  }

  /* ---------------- boot ---------------- */

  function boot() {
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
