// One-off asset generator: renders the social OG image and apple-touch-icon
// to PNG using sharp, so they don't depend on web fonts at scrape time.
// Run: node scripts/gen-assets.mjs   (outputs into /public)
import sharp from 'sharp'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pub = join(__dirname, '..', 'public')

// ── OG image (1200×630) ─────────────────────────────────────
const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="28%" cy="40%" r="75%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="#0b0f0e" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.4" fill="#10b981" fill-opacity="0.08"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="#0b0f0e"/>
  <rect width="1200" height="630" fill="url(#dots)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="6" y="6" width="1188" height="618" rx="20" fill="none" stroke="#1e2724" stroke-width="2"/>

  <!-- terminal prompt line -->
  <text x="80" y="150" font-family="DejaVu Sans Mono, monospace" font-size="26" fill="#9aa6a2">
    <tspan fill="#10b981">$</tspan> whoami
  </text>

  <!-- name -->
  <text x="78" y="270" font-family="DejaVu Sans, sans-serif" font-size="104" font-weight="bold" fill="#e5e7eb">Nasib Farooq</text>

  <!-- role -->
  <text x="82" y="345" font-family="DejaVu Sans Mono, monospace" font-size="42" fill="#34d399">AI Engineer</text>

  <!-- tagline -->
  <text x="82" y="420" font-family="DejaVu Sans, sans-serif" font-size="30" fill="#9aa6a2">I build production AI systems that listen, reason, and decide.</text>

  <!-- stack chips -->
  <g font-family="DejaVu Sans Mono, monospace" font-size="22" fill="#9aa6a2">
    <rect x="80"  y="500" width="150" height="44" rx="9" fill="#0f1513" stroke="#1e2724"/>
    <text x="100" y="528">Pipecat</text>
    <rect x="248" y="500" width="170" height="44" rx="9" fill="#0f1513" stroke="#1e2724"/>
    <text x="268" y="528">LangGraph</text>
    <rect x="436" y="500" width="110" height="44" rx="9" fill="#0f1513" stroke="#1e2724"/>
    <text x="456" y="528">RAG</text>
    <rect x="564" y="500" width="150" height="44" rx="9" fill="#0f1513" stroke="#1e2724"/>
    <text x="584" y="528">FastAPI</text>
  </g>

  <!-- url -->
  <text x="1120" y="585" text-anchor="end" font-family="DejaVu Sans Mono, monospace" font-size="22" fill="#10b981">iamnasib.github.io</text>
</svg>`

// ── apple-touch-icon (180×180), geometric N ─────────────────
const touch = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#0b0f0e"/>
  <rect x="1.5" y="1.5" width="61" height="61" rx="12.5" fill="none" stroke="#10b981" stroke-opacity="0.45" stroke-width="1.5"/>
  <path d="M18 46 L18 18 L22 18 L42 38 L42 18 L46 18 L46 46 L42 46 L22 26 L22 46 Z" fill="#10b981"/>
</svg>`

await sharp(Buffer.from(og)).png().toFile(join(pub, 'og-image.png'))
await sharp(Buffer.from(touch)).png().toFile(join(pub, 'apple-touch-icon.png'))
console.log('Generated og-image.png (1200x630) and apple-touch-icon.png (180x180)')
