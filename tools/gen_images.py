# -*- coding: utf-8 -*-
"""Generate the AI PLACEHOLDER photos for assets/stories/<slug>/{cover,body}.jpg
via the YuRen API (key lives in the yuren-image-api skill folder, never here).

These are NOT real photos of the events - replace them with real photographs
(same filenames) when available. Run: python tools/gen_images.py
"""
import base64
import io
import json as _json
import os
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

try:
    from PIL import Image
except ImportError:
    Image = None

KEY_PATH = r"C:\Users\22345\.agents\skills\yuren-image-api\.apikey"
OUT_ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "stories")
ENDPOINT = "https://yurenapi.cn/v1/images/generations"
MODEL = "gpt-image-2.5"

STYLE = (" Documentary editorial photography, soft natural light, muted cool palette, "
         "quiet calm atmosphere, 35mm lens, shallow depth of field, photorealistic. "
         "Absolutely no legible text, no letters, no numbers, no logos, no flags, "
         "no watermarks, no recognizable faces.")

JOBS = [
    ("the-checklist-nobody-reads", "cover", "An empty university conference hall before registration opens: neat rows of empty chairs, a single lanyard and a folded sheet of paper resting on a folding table in the foreground, morning light through tall windows"),
    ("the-checklist-nobody-reads", "body", "Close-up of a folded paper checklist and a pencil on a wooden folding table, blurred conference lanyards in the background, shallow depth of field"),
    ("three-time-zones-one-seminar", "cover", "A student desk late at night lit only by a laptop screen: an open notebook with a pen, a cup of tea, a dark window with distant city lights"),
    ("three-time-zones-one-seminar", "body", "Overhead view of an open notebook with a pen beside a glowing laptop keyboard at night, a cup of tea nearby, warm lamp light mixing with cool screen light"),
    ("the-hour-before-dinner", "cover", "A small community classroom at dusk: a whiteboard with faint abstract marker strokes, plastic chairs arranged in a loose circle, warm evening light through half-drawn blinds"),
    ("the-hour-before-dinner", "body", "A whiteboard eraser and three marker pens resting on a whiteboard ledge, faint smudged abstract strokes on the board behind them, soft evening light"),
    ("field-notes-from-a-rice-terrace", "cover", "Flooded rice terraces at dawn reflecting a pale sky, a wooden measuring stick standing in the mud at the edge of a bund, thin mist over distant green hills"),
    ("field-notes-from-a-rice-terrace", "body", "Close-up of clear water reflecting the sky between terraced rice paddies, a wooden measuring stick at the water's edge, mud footprints on the bund"),
    ("a-seat-at-the-table", "cover", "A quiet meeting room after a long discussion: a long wooden table with a few loose printed pages and two chairs turned toward each other, soft window light"),
    ("a-seat-at-the-table", "body", "Two chairs facing each other across a wooden table with a glass of water and loose printed pages, soft window light, calm stillness"),
    ("six-oclock-second-serving", "cover", "A community kitchen prep counter on a winter evening: stacks of metal trays, large bowls of chopped cabbage and vegetables, steam rising from a pot on the stove"),
    ("six-oclock-second-serving", "body", "Steam rising from a large steel pot in a community kitchen, stacked metal trays and bowls of chopped vegetables beside it, warm tungsten light"),
]


def generate(slug, kind, prompt, size):
    body = _json.dumps({
        "model": MODEL, "prompt": prompt + STYLE, "size": size,
        "quality": "auto", "output_format": "png",
        "response_format": "b64_json", "n": 1,
    }).encode("utf-8")
    req = urllib.request.Request(ENDPOINT, data=body, method="POST", headers={
        "Content-Type": "application/json",
        "Authorization": "Bearer " + open(KEY_PATH).read().strip(),
    })
    with urllib.request.urlopen(req, timeout=300) as r:
        data = _json.loads(r.read().decode("utf-8"))
    raw = base64.b64decode(data["data"][0]["b64_json"])

    out_dir = os.path.join(OUT_ROOT, slug)
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, ("cover.jpg" if kind == "cover" else "body.jpg"))

    if Image is not None:
        im = Image.open(io.BytesIO(raw)).convert("RGB")
        target_w = 1600
        if im.width > target_w:
            im = im.resize((target_w, round(im.height * target_w / im.width)), Image.LANCZOS)
        im.save(out_path, "JPEG", quality=84, progressive=True, optimize=True)
    else:
        with open(out_path.replace(".jpg", ".png"), "wb") as f:
            f.write(raw)
    return out_path, os.path.getsize(out_path)


def run_job(job):
    slug, kind, prompt = job
    size = "1536x1024"
    for attempt in (1, 2):
        try:
            path, nbytes = generate(slug, kind, prompt, size)
            return (slug, kind, "OK", path, nbytes)
        except Exception as e:
            msg = str(e)
            if attempt == 1 and "size" in msg.lower():
                size = "1024x1024"
                continue
            if attempt == 1:
                time.sleep(8)
                continue
            return (slug, kind, "FAIL", msg[:200], 0)


def main():
    print("jobs:", len(JOBS), flush=True)
    ok = fail = 0
    with ThreadPoolExecutor(max_workers=3) as ex:
        futs = {ex.submit(run_job, j): j for j in JOBS}
        for fut in as_completed(futs):
            slug, kind, status, info, nbytes = fut.result()
            print("[%s] %s/%s -> %s (%.0f KB)" % (status, slug, kind, info, nbytes / 1024), flush=True)
            ok += status == "OK"
            fail += status != "OK"
    print("DONE ok=%d fail=%d" % (ok, fail), flush=True)


if __name__ == "__main__":
    main()
