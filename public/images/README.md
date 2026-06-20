# Image slots

Drop real photography into the folders below, then point the matching `image`
field in [`lib/content.ts`](../../lib/content.ts) at the file. Until a real file
exists, the site renders premium gradient placeholders automatically.

| Folder       | Used by            | Suggested shot                                    | content.ts field    |
| ------------ | ------------------ | ------------------------------------------------- | ------------------- |
| `hero/`      | Hero section       | Uniformed technician servicing an AC in a villa   | `hero.image`        |
| `about/`     | About section      | Founder / team portrait                           | `about.image`       |
| `snagging/`  | Snagging sections  | Inspector documenting defects with a tablet       | `snagging.image`    |
| `services/`  | Service cards/pages| Close-ups of AC, duct, coil and maintenance work  | (wire up as needed) |

## Recommended formats

- Use `.jpg` for photographs, `.webp`/`.avif` for best performance (Next.js will
  also auto-serve AVIF/WebP from `next/image`).
- Hero: ~2000px wide. Cards: ~1200px wide. Keep files under ~400KB where possible.

## Open Graph image

The social share image is generated dynamically at `/opengraph-image`
(see [`app/opengraph-image.tsx`](../../app/opengraph-image.tsx)) — no file needed.
