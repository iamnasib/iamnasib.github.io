// The "NF" monogram (upright N, italic F, like the name on the site),
// traced from Newsreader so the favicon needs no fonts to display.
import { fonts, pathData, PAPER, INK, ACCENT } from './type.mjs'

export function monogramSvg({ size = 64, rounded = true } = {}) {
  const fontSize = 100
  const n = fonts.serifBold.getPath('N', 0, 0, fontSize)
  const nAdvance = fonts.serifBold.getAdvanceWidth('N', fontSize)
  const f = fonts.serifBoldItalic.getPath('F', nAdvance - 6, 0, fontSize)

  const a = n.getBoundingBox()
  const b = f.getBoundingBox()
  const box = { x1: Math.min(a.x1, b.x1), y1: Math.min(a.y1, b.y1), x2: Math.max(a.x2, b.x2), y2: Math.max(a.y2, b.y2) }
  const w = box.x2 - box.x1
  const h = box.y2 - box.y1

  // Fit the letters into the area right of the margin rule.
  const area = { x: 13, y: 8, w: 49, h: 48 }
  const scale = Math.min(area.w / w, area.h / h)
  const tx = area.x + (area.w - w * scale) / 2 - box.x1 * scale
  const ty = area.y + (area.h - h * scale) / 2 - box.y1 * scale

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${size}" height="${size}">
  <rect width="64" height="64"${rounded ? ' rx="12"' : ''} fill="${PAPER}"/>
  <line x1="7.5" y1="0" x2="7.5" y2="64" stroke="${ACCENT}" stroke-width="3"/>
  <g transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${scale.toFixed(4)})" fill="${INK}">
    <path d="${pathData(n, 1)}"/>
    <path d="${pathData(f, 1)}"/>
  </g>
</svg>
`
}
