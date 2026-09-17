"""Run with Python 3 and Pillow; keep original uploads outside the repository."""
import io
import json
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
IMAGES = ROOT / 'img'
manifest_path = ROOT / '_data' / 'image_variants.json'
manifest = json.loads(manifest_path.read_text()) if sys.argv[1:] and manifest_path.exists() else {}
before = after = 0

paths = [Path(arg).resolve() for arg in sys.argv[1:]] if sys.argv[1:] else IMAGES.rglob('*')
for path in sorted(paths):
    if 'responsive' in path.parts or path.suffix.lower() not in ('.jpg', '.jpeg', '.png'):
        continue
    print(f'Optimizing {path.relative_to(ROOT)}', flush=True)
    original = path.read_bytes()
    before += len(original)
    with Image.open(path) as source:
        if getattr(source, 'is_animated', False) and source.format != 'MPO':
            after += len(original)
            continue
        image = ImageOps.exif_transpose(source)
        if source.format in ('JPEG', 'MPO'):
            already_optimized = source.info.get('progressive') and max(image.size) <= 1920 and not source.getexif()
            image = image.convert('RGB')
            image.thumbnail((1920, 1920), Image.Resampling.LANCZOS)
            buffer = io.BytesIO()
            image.save(buffer, 'JPEG', quality=85, optimize=True, progressive=True)
            if already_optimized:
                buffer = io.BytesIO(original)
        else:
            buffer = io.BytesIO()
            image.save(buffer, 'PNG', compress_level=6)
        if len(buffer.getvalue()) < len(original):
            path.write_bytes(buffer.getvalue())
    with Image.open(path) as source:
        image = ImageOps.exif_transpose(source)
        width, height = image.size
        variants = []
        for target in (480, 960):
            if width <= target:
                continue
            resized = image.resize((target, round(height * target / width)), Image.Resampling.LANCZOS)
            destination = IMAGES / 'responsive' / path.relative_to(IMAGES).parent / f'{path.stem}-{path.suffix[1:]}-{target}{path.suffix}'
            destination.parent.mkdir(parents=True, exist_ok=True)
            if source.format in ('JPEG', 'MPO'):
                resized.convert('RGB').save(destination, 'JPEG', quality=82, optimize=True, progressive=True)
            else:
                resized.save(destination, 'PNG', compress_level=6)
            if destination.stat().st_size < path.stat().st_size:
                variants.append({'src': '/' + destination.relative_to(ROOT).as_posix(), 'width': target})
            else:
                destination.unlink()
        key = '/' + path.relative_to(ROOT).as_posix()
        manifest.pop(key, None)
        if variants:
            variants.append({'src': key, 'width': width})
            manifest[key] = variants
    after += path.stat().st_size

manifest_path.write_text(json.dumps(manifest, indent=2, sort_keys=True) + '\n')
print(f'Original image assets: {before / 1e6:.1f} MB -> {after / 1e6:.1f} MB')
print(f'Responsive image sets: {len(manifest)}')
