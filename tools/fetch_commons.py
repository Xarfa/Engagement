# -*- coding: utf-8 -*-
"""Search Wikimedia Commons for freely licensed photos (PD/CC0/CC BY/CC BY-SA)
and download candidates for the Engagement stories. One-off sourcing helper.
Run: python tools/fetch_commons.py  (uses the local proxy if direct fails)
"""
import json
import os
import re
import urllib.request

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "tools", "commons-cache")
PROXY = "http://127.0.0.1:7897"
OK_LICENSES = ("Public domain", "CC0", "CC BY", "CC BY-SA")

QUERIES = [
    "united nations flag",
    "united nations meeting room",
    "lecture hall audience event",
    "trade fair exhibition stand hall",
    "business people exhibition booth",
    "TEDx event stage",
    "conference speaker stage audience",
    "World Congress of Soil Science",
    "simultaneous interpretation booth",
    "video conference laptop screen",
    "soil profile monolith",
    "world map projection room",
]


def opener():
    ops = []
    try:
        ops.append(urllib.request.build_opener(urllib.request.ProxyHandler({})))
    except Exception:
        pass
    ops.append(urllib.request.build_opener(urllib.request.ProxyHandler(
        {"https": PROXY, "http": PROXY})))
    return ops


def fetch(url, timeout=30):
    last = None
    for op in opener():
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "engagement-site-builder/1.0"})
            return op.open(req, timeout=timeout).read()
        except Exception as e:
            last = e
    raise last


def strip_html(s):
    return re.sub(r"<[^>]+>", "", s or "").strip()


def search(query):
    url = ("https://commons.wikimedia.org/w/api.php?action=query&generator=search"
           "&gsrsearch=" + urllib.request.quote("filetype:bitmap " + query) +
           "&gsrlimit=6&gsrnamespace=6&prop=imageinfo&iiprop=url|extmetadata"
           "&iiurlwidth=1200&format=json")
    d = json.loads(fetch(url))
    out = []
    for p in d.get("query", {}).get("pages", {}).values():
        ii = p.get("imageinfo", [{}])[0]
        md = ii.get("extmetadata", {})
        lic = md.get("LicenseShortName", {}).get("value", "")
        if not any(lic.startswith(x) for x in OK_LICENSES):
            continue
        out.append({
            "title": p["title"].replace("File:", ""),
            "license": lic,
            "artist": strip_html(md.get("Artist", {}).get("value", "?"))[:60],
            "url": ii.get("thumburl") or ii.get("url"),
        })
    return out


def main():
    os.makedirs(OUT, exist_ok=True)
    mpath = os.path.join(OUT, "manifest.json")
    prev = {}
    if os.path.exists(mpath):
        try:
            prev = json.load(open(mpath, encoding="utf-8"))
        except Exception:
            prev = {}
    manifest = dict(prev)
    for q in QUERIES:
        if len(prev.get(q, [])) >= 2:
            print("[SKIP]", q, flush=True)
            continue
        key = re.sub(r"[^a-z0-9]+", "-", q.lower()).strip("-")[:40]
        try:
            hits = search(q)
        except Exception as e:
            print("[FAIL]", q, "->", str(e)[:100], flush=True)
            continue
        manifest[q] = []
        for i, h in enumerate(hits[:3]):
            fn = "%s--%d.jpg" % (key[:28], i)
            try:
                raw = fetch(h["url"])
                with open(os.path.join(OUT, fn), "wb") as f:
                    f.write(raw)
                h["file"] = fn
                manifest[q].append(h)
                print("[OK] %-28s %d. %s (%s, %s) %.0fKB" % (key[:28], i, h["title"][:42], h["license"], h["artist"][:18], len(raw) / 1024), flush=True)
            except Exception as e:
                print("[DLFAIL]", h["title"][:40], str(e)[:80], flush=True)
    with open(mpath, "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=1)
    print("manifest ->", mpath, flush=True)


if __name__ == "__main__":
    main()
