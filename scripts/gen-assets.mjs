// Asset generator: the favicon set and the social share image.
// All text is traced to SVG paths from the site's own fonts (type.mjs),
// so the output never depends on fonts installed on this machine.
// Run: node scripts/gen-assets.mjs   (outputs into /public)
import sharp from 'sharp'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { monogramSvg } from './monogram.mjs'
import { fonts, text, PAPER, INK, SOFT, RULE, ACCENT } from './type.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pub = join(__dirname, '..', 'public')

// Rasterise an SVG sharply at an exact pixel size.
const raster = (svg, px) =>
  sharp(Buffer.from(svg), { density: (72 * px * 4) / 64 }).resize(px, px).png().toBuffer()

// ── Favicons ────────────────────────────────────────────────
writeFileSync(join(pub, 'favicon.svg'), monogramSvg())

// favicon.ico holding PNG-encoded 16px and 32px images.
const sizes = [16, 32]
const pngs = await Promise.all(sizes.map((s) => raster(monogramSvg(), s)))
const header = Buffer.alloc(6 + 16 * sizes.length)
header.writeUInt16LE(0, 0) // reserved
header.writeUInt16LE(1, 2) // type: icon
header.writeUInt16LE(sizes.length, 4)
let offset = header.length
sizes.forEach((s, i) => {
  const e = 6 + i * 16
  header.writeUInt8(s, e) // width
  header.writeUInt8(s, e + 1) // height
  header.writeUInt16LE(1, e + 4) // colour planes
  header.writeUInt16LE(32, e + 6) // bits per pixel
  header.writeUInt32LE(pngs[i].length, e + 8)
  header.writeUInt32LE(offset, e + 12)
  offset += pngs[i].length
})
writeFileSync(join(pub, 'favicon.ico'), Buffer.concat([header, ...pngs]))

// iOS applies its own rounded mask, so the touch icon is square.
writeFileSync(join(pub, 'apple-touch-icon.png'), await raster(monogramSvg({ rounded: false }), 180))

// ── OG image (1200×630), a notebook page ────────────────────
const nasib = text(fonts.serif, 'Nasib ', 232, 250, 124, INK)
const farooq = text(fonts.serifItalic, 'Farooq', nasib.end, 250, 124, INK)

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  ${Array.from({ length: 13 }, (_, i) => `<line x1="0" y1="${70 + i * 44}" x2="1200" y2="${70 + i * 44}" stroke="${RULE}" stroke-opacity="0.55"/>`).join('')}
  <line x1="190" y1="0" x2="190" y2="630" stroke="${ACCENT}" stroke-opacity="0.5" stroke-width="2"/>

  ${text(fonts.mono, '§0', 160, 118, 20, ACCENT, 'end').svg}
  ${text(fonts.mono, 'Srinagar', 160, 146, 16, SOFT, 'end').svg}

  ${nasib.svg}
  ${farooq.svg}

  ${text(fonts.mono, 'NOW', 236, 336, 18, ACCENT).svg}
  ${text(fonts.serif, 'Senior Bubble Developer, ', 340, 338, 38, INK).svg}
  ${text(fonts.serifItalic, 'Hotsourced', 340 + fonts.serif.getAdvanceWidth('Senior Bubble Developer, ', 38), 338, 38, INK).svg}
  ${text(fonts.mono, 'BEFORE', 236, 392, 18, SOFT).svg}
  ${text(fonts.serif, 'AI Engineer, ', 340, 394, 32, SOFT).svg}
  ${text(fonts.serifItalic, 'Vings Technologies', 340 + fonts.serif.getAdvanceWidth('AI Engineer, ', 32), 394, 32, SOFT).svg}

  ${text(fonts.mono, 'CELIA · CANDI · ConnectiumAI', 236, 490, 20, SOFT).svg}
  ${text(fonts.mono, 'iamnasib.github.io', 236, 560, 20, ACCENT).svg}
</svg>`

await sharp(Buffer.from(og)).png().toFile(join(pub, 'og-image.png'))
console.log('Generated favicon.svg, favicon.ico, apple-touch-icon.png and og-image.png')
