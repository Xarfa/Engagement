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
    { name: "Xiaohongshu", file: "xiaohongshu.svg", href: "", off: true },
    { name: "LinkedIn", file: "linkedin.svg", href: "", off: true },
    { name: "Cnblogs", file: "cnblogs.ico", href: "https://www.cnblogs.com/FibonacciHeap", off: false }
  ];

  function socialMarkup() {
    return SOCIALS.map(function (s) {
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

  function attachImage(frame, img, url, doneClass) {
    if (!frame || !img || !url) return;
    var probe = new window.Image();
    probe.onload = function () {
      img.src = url;
      img.alt = img.getAttribute("data-alt") || "";
      frame.classList.add(doneClass || "has-image");
    };
    probe.src = url;
  }

  /* ---------------- home ---------------- */

  function cardMarkup(s, i) {
    var cover = "assets/stories/" + s.slug + "/cover.jpg";
    return '' +
      '<a class="card reveal" href="' + storyHref(s) + '" style="--i:' + i + '" ' +
        'aria-label="' + esc(s.title) + ' — ' + esc(s.category) + ', ' + esc(s.dateLabel) + '">' +
        '<div class="card-photo">' +
          '<img alt="" loading="lazy" data-alt="' + esc(s.title) + '" data-cover="' + cover + '">' +
        '</div>' +
        '<span class="card-index">' + pad(i + 1) + "</span>" +
        '<span class="card-photo-note">Photo</span>' +
        '<div class="card-body">' +
          '<h2 class="card-title">' + esc(s.title) + "</h2>" +
          '<p class="card-category">' + esc(s.category) + "</p>" +
          '<span class="card-date">' + esc(s.dateLabel) + "</span>" +
          '<div class="card-rule" aria-hidden="true"></div>' +
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
              'spellcheck="false" placeholder="Try “leadership”, “kitchen”, “Oxford”…">' +
          "</div>" +
          '<button class="search-close" type="button" aria-label="Close search">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">' +
              '<path d="M5 5l14 14M19 5L5 19"/></svg>' +
          "</button>" +
        "</div>" +
        '<p class="search-count" id="searchCount" aria-live="polite"></p>' +
        '<div class="search-results" id="searchResults"></div>' +
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
    var results = matchList(q);
    searchState.active = -1;

    count.textContent = q
      ? results.length + (results.length === 1 ? " engagement" : " engagements") + " for “" + q + "”"
      : results.length + " engagements · 2024—2026";

    if (!results.length) {
      list.innerHTML = '<p class="search-empty">Nothing under <strong>“' + esc(q) + '”</strong> yet. ' +
        "Try a category, a place, or a word from a story.</p>";
      return;
    }

    list.innerHTML = results.map(function (s, i) {
      return '<a class="search-result" href="' + storyHref(s) + '" data-i="' + i + '">' +
        '<span class="search-num">' + pad(i + 1) + "</span>" +
        "<span>" +
          '<span class="search-title">' + mark(s.title, q) + "</span>" +
          '<span class="search-meta">' + esc(s.category) + " — " + esc(s.location) + " · " +
            mark(snippet(s, q), q) + "</span>" +
        "</span>" +
        '<span class="search-date">' + esc(s.dateLabel) + "</span>" +
      "</a>";
    }).join("");
  }

  function setActive(i) {
    var items = $$(".search-result", $("#searchResults"));
    if (!items.length) return;
    i = (i + items.length) % items.length;
    searchState.active = i;
    items.forEach(function (el, n) { el.classList.toggle("is-active", n === i); });
    items[i].scrollIntoView({ block: "nearest" });
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
    if (sbw > 0) document.body.style.paddingRight = sbw + "px";
    document.body.classList.add("is-locked");
    el.classList.add("is-open");
    el.setAttribute("aria-hidden", "false");
    setExpanded(true);
    var input = $("#searchInput");
    input.value = "";
    renderResults("");
    window.setTimeout(function () { input.focus(); }, 60);
  }

  function closeSearch() {
    if (!searchState.open) return;
    var el = $("#searchPanel");
    searchState.open = false;
    el.classList.remove("is-open");
    el.setAttribute("aria-hidden", "true");
    setExpanded(false);
    document.body.classList.remove("is-locked");
    document.body.style.paddingRight = "";
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
      if (e.key === "ArrowDown") { e.preventDefault(); setActive(searchState.active + 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setActive(searchState.active - 1); }
      else if (e.key === "Enter") {
        var list = $$(".search-result");
        var pick = searchState.active >= 0 ? list[searchState.active] : list[0];
        if (pick) { e.preventDefault(); window.location.href = pick.getAttribute("href"); }
      }
    }
    input.addEventListener("keydown", move);
    el.addEventListener("keydown", function (e) {
      if (e.target !== input) move(e);
    });

    $("#searchResults").addEventListener("mouseover", function (e) {
      var item = e.target.closest(".search-result");
      if (!item) return;
      setActive(Number(item.getAttribute("data-i")));
    });

    document.addEventListener("keydown", function (e) {
      var tag = (e.target.tagName || "").toUpperCase();
      var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(tag) || e.target.isContentEditable;
      if (e.key === "Escape" && searchState.open) { closeSearch(); return; }
      if ((e.key === "/" && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        openSearch();
      }
      if (!searchState.open || e.key !== "Tab") return;
      var focusables = [$(".search-input", el), $(".search-close", el)].concat($$(".search-result", el));
      var first = focusables[0], last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  /* ---------------- story ---------------- */

  function renderBody(s) {
    var ps = s.body || [];
    var out = [];
    var quoteAt = ps.length > 3 ? 2 : 1;
    var figAt = ps.length > 4 ? 3 : ps.length - 1;

    ps.forEach(function (text, i) {
      out.push("<p>" + esc(text) + "</p>");
      if (i === quoteAt - 1 && s.quote) {
        out.push('<blockquote><p>“' + esc(s.quote.text) + "”</p>" +
          (s.quote.by ? "<cite>" + esc(s.quote.by) + "</cite>" : "") + "</blockquote>");
      }
      if (i === figAt - 1 && s.figure) {
        var url = "assets/stories/" + s.slug + "/body.jpg";
        out.push('<figure><div class="fig-frame" data-fig="' + url + '">' +
          "<span>Photo</span>" +
          '<img alt="" loading="lazy" data-alt="' + esc(s.figure.caption || s.title) + '">' +
          "</div><figcaption>" + esc(s.figure.caption || "") + "</figcaption></figure>");
      }
    });
    return out.join("");
  }

  function initStory() {
    var root = $("#storyPage");
    if (!root) return;

    var slug = new URLSearchParams(window.location.search).get("slug");
    var idx = STORIES.findIndex(function (s) { return s.slug === slug; });

    if (idx === -1) {
      root.innerHTML = '<section class="story-main" style="text-align:center;padding-top:120px">' +
        '<p class="masthead-kicker">404 — Not found</p>' +
        '<h1 class="story-next-title" style="font-size:clamp(28px,4vw,48px)">This engagement does not exist.</h1>' +
        '<p class="story-standfirst" style="margin-top:24px">It may have been renamed, or the link is incomplete.</p>' +
        '<p><a class="head-link" href="index.html">← Back to all engagements</a></p></section>';
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

    var hero = $("#storyHero");
    hero.innerHTML = '' +
      '<div class="story-hero-frame" aria-hidden="true"></div>' +
      '<span class="story-hero-note">Photo — replace</span>' +
      '<div class="story-hero-media"><img alt="" data-cover="assets/stories/' + s.slug + '/cover.jpg" ' +
        'data-alt="' + esc(s.title) + '"></div>' +
      '<div class="story-hero-inner">' +
        '<p class="story-kicker">' + esc(s.category) + "</p>" +
        '<h1 class="story-title">' + esc(s.title) + "</h1>" +
        '<p class="story-sub">' + esc(s.summary) + "</p>" +
        '<p class="story-byline"><span>By Rattry Wu</span><span>' + esc(fullDate(s.date)) +
          "</span><span>" + esc(s.location) + "</span></p>" +
      "</div>" +
      '<span class="story-scroll">Read</span>';
    attachImage(hero, $("img[data-cover]", hero), $("img[data-cover]", hero).getAttribute("data-cover"));

    var kicker = $("#storyMetaLine");
    if (kicker) kicker.textContent = s.category + " · " + s.role + " · " + s.location;

    $("#storyLead").textContent = s.lead;
    $("#storyBody").innerHTML = renderBody(s);

    var fig = $(".fig-frame");
    if (fig) attachImage(fig, $("img", fig), fig.getAttribute("data-fig"));

    $("#nextStory").href = storyHref(next);
    $("#nextTitle").textContent = next.title;
    $("#nextMeta").textContent = next.category + " · " + next.dateLabel;
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
