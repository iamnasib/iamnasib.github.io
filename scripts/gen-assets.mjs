// One-off asset generator: renders the social OG image and apple-touch-icon
// to PNG using sharp, so they don't depend on web fonts at scrape time.
// Needs Newsreader and IBM Plex Mono installed locally (fontconfig).
// Run: node scripts/gen-assets.mjs   (outputs into /public)
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pub = join(__dirname, '..', 'public')

const PAPER = '#f3efe6'
const INK = '#1d1b17'
const SOFT = '#5d574c'
const RULE = '#d5cdbb'
const ACCENT = '#b3391b'
const SERIF = 'Newsreader, Georgia, serif'
const MONO = 'IBM Plex Mono, monospace'

// ── OG image (1200×630), a notebook page ────────────────────
const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  ${Array.from({ length: 13 }, (_, i) => `<line x1="0" y1="${70 + i * 44}" x2="1200" y2="${70 + i * 44}" stroke="${RULE}" stroke-opacity="0.55"/>`).join('')}
  <line x1="190" y1="0" x2="190" y2="630" stroke="${ACCENT}" stroke-opacity="0.5" stroke-width="2"/>

  <text x="160" y="118" text-anchor="end" font-family="${MONO}" font-size="20" fill="${ACCENT}">§0</text>
  <text x="160" y="146" text-anchor="end" font-family="${MONO}" font-size="16" fill="${SOFT}">Srinagar</text>

  <text x="232" y="250" font-family="${SERIF}" font-size="124" fill="${INK}">Nasib <tspan font-style="italic">Farooq</tspan></text>

  <text x="236" y="340" font-family="${SERIF}" font-size="38" fill="${INK}">AI engineer. I build voice agents and</text>
  <text x="236" y="388" font-family="${SERIF}" font-size="38" fill="${INK}">retrieval systems for hiring.</text>

  <text x="236" y="490" font-family="${MONO}" font-size="20" fill="${SOFT}">CELIA · CANDI · ConnectiumAI</text>
  <text x="236" y="560" font-family="${MONO}" font-size="20" fill="${ACCENT}">iamnasib.github.io</text>
</svg>`

// ── apple-touch-icon (180×180) ──────────────────────────────
const touch = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="${PAPER}"/>
  <line x1="14" y1="0" x2="14" y2="64" stroke="${ACCENT}" stroke-opacity="0.55" stroke-width="2"/>
  <path d="M22 48 L22 16 L27 16 L44 38 L44 16 L49 16 L49 48 L44 48 L27 26 L27 48 Z" fill="${INK}"/>
</svg>`

await sharp(Buffer.from(og)).png().toFile(join(pub, 'og-image.png'))
await sharp(Buffer.from(touch)).png().toFile(join(pub, 'apple-touch-icon.png'))
console.log('Generated og-image.png (1200x630) and apple-touch-icon.png (180x180)')
