// Loads the site's typefaces from their Fontsource packages and turns
// text into SVG path data, so generated images never depend on fonts
// being installed on the machine that renders them.
import opentype from 'opentype.js'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const modules = join(__dirname, '..', 'node_modules', '@fontsource')

function load(pkg, file) {
  const buf = readFileSync(join(modules, pkg, 'files', file))
  return opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength))
}

export const fonts = {
  serif: load('newsreader', 'newsreader-latin-400-normal.woff'),
  serifItalic: load('newsreader', 'newsreader-latin-400-italic.woff'),
  serifBold: load('newsreader', 'newsreader-latin-600-normal.woff'),
  serifBoldItalic: load('newsreader', 'newsreader-latin-600-italic.woff'),
  mono: load('ibm-plex-mono', 'ibm-plex-mono-latin-400-normal.woff'),
}

export const PAPER = '#f3efe6'
export const INK = '#1d1b17'
export const SOFT = '#5d574c'
export const RULE = '#d5cdbb'
export const ACCENT = '#b3391b'

// Serialise opentype.js path commands to SVG path data. opentype.js 2.0's
// own toPathData() intermittently emits "NaN" for valid coordinates, so
// this writes the numbers directly.
export function pathData(path, places = 2) {
  const n = (v) => {
    if (!Number.isFinite(v)) throw new Error(`non-finite coordinate: ${v}`)
    return +v.toFixed(places)
  }
  return path.commands
    .map((c) => {
      switch (c.type) {
        case 'M': case 'L': return `${c.type}${n(c.x)} ${n(c.y)}`
        case 'Q': return `Q${n(c.x1)} ${n(c.y1)} ${n(c.x)} ${n(c.y)}`
        case 'C': return `C${n(c.x1)} ${n(c.y1)} ${n(c.x2)} ${n(c.y2)} ${n(c.x)} ${n(c.y)}`
        case 'Z': return 'Z'
        default: throw new Error(`unknown path command ${c.type}`)
      }
    })
    .join('')
}

// A run of text as an SVG <path>. anchor: 'start' | 'end'. Returns the
// element and the x where the run ends, so runs can be chained.
export function text(font, str, x, y, size, fill, anchor = 'start') {
  const width = font.getAdvanceWidth(str, size)
  const startX = anchor === 'end' ? x - width : x
  const d = pathData(font.getPath(str, startX, y, size))
  return { svg: `<path d="${d}" fill="${fill}"/>`, end: startX + width }
}
