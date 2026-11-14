"""Trace a raster logo (RGBA, background removed) into a single-colour SVG.

Usage: python -I tools/logo_to_svg.py <in.png> <out.svg> [fill]
The alpha channel is the mask; colour is discarded. Output keeps the
original pixel size as viewBox with fill applied to one combined path
(holes rely on potrace winding + default nonzero fill rule).
"""
import sys

import numpy as np
import potrace
from PIL import Image

src, dst = sys.argv[1], sys.argv[2]
fill = sys.argv[3] if len(sys.argv) > 3 else "#ffffff"
SCALE = 4  # supersample for smoother curves

im = Image.open(src).convert("RGBA")
big = im.getchannel("A").resize((im.width * SCALE, im.height * SCALE), Image.LANCZOS)
# potracer traces the False (black) region — the emblem is where alpha is on,
# so hand it an inverted map: True = paper, False = ink.
mask = np.asarray(big) < 128

path = potrace.Bitmap(mask).trace(turdsize=5, alphamax=1.0, opttolerance=0.2)

def pt(p, n=2):
    return f"{p.x / SCALE:.{n}f} {p.y / SCALE:.{n}f}"

parts = []
for curve in path:
    d = [f"M{pt(curve.start_point)}"]
    for seg in curve.segments:
        if seg.is_corner:
            d.append(f"L{pt(seg.c)}L{pt(seg.end_point)}")
        else:
            d.append(f"C{pt(seg.c1)} {pt(seg.c2)} {pt(seg.end_point)}")
    d.append("Z")
    parts.append("".join(d))

svg = (
    f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {im.width} {im.height}">'
    f'<path fill="{fill}" d="{"".join(parts)}"/></svg>'
)
with open(dst, "w", encoding="utf-8") as f:
    f.write(svg)
print(f"written {dst} curves={len(parts)} bytes={len(svg)}")
