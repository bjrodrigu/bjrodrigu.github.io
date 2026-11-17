"""Make WebP copies of the project images at two widths.

Run from the repo root after adding or changing a JPG in public/images:
    python3 scripts/optimize_images.py
Each images/<name>.jpg gets images/<name>-700.webp and images/<name>-1400.webp.
The JPG stays as the fallback for browsers without WebP.
"""
from pathlib import Path

from PIL import Image

WIDTHS = (700, 1400)
folder = Path(__file__).resolve().parent.parent / "public" / "images"

for jpg in sorted(folder.glob("*.jpg")):
    with Image.open(jpg) as im:
        im = im.convert("RGB")
        for w in WIDTHS:
            h = round(im.height * w / im.width)
            out = folder / f"{jpg.stem}-{w}.webp"
            im.resize((w, h), Image.LANCZOS).save(out, "WEBP", quality=80, method=6)
            print(f"{out.name}: {out.stat().st_size // 1024} KB")
