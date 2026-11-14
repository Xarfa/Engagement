# -*- coding: utf-8 -*-
"""Regenerate assets/og.png - 1200x630 LinkedIn card, UN-blue lockup, left aligned.
Run from anywhere: python tools/gen_og.py (paths are repo-relative)."""
import os

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BLUE = (0, 158, 219)
GRAY = (115, 115, 115)

img = Image.new("RGB", (W, H), (255, 255, 255))
d = ImageDraw.Draw(img)

f_top = ImageFont.truetype(r"C:\Windows\Fonts\segoeuib.ttf", 52)
f_big = ImageFont.truetype(r"C:\Windows\Fonts\segoeuib.ttf", 96)
f_small = ImageFont.truetype(r"C:\Windows\Fonts\segoeuib.ttf", 20)

x = 90
d.text((x, 150), "RATTRY", font=f_top, fill=BLUE)
d.text((x, 212), "ENGAGEMENT", font=f_big, fill=BLUE)

d.rectangle([x, 350, x + 72, 353], fill=BLUE)
d.text((x, 372), "A WRITTEN RECORD OF THE ENGAGEMENTS BEHIND MY CV", font=f_small, fill=GRAY)

out = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "og.png")
img.save(out, "PNG", optimize=True)
print("og.png written", img.size, "->", out)
