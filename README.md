# iamnasib.github.io

Personal portfolio of **Nasib Farooq** — AI Engineer.

Built with React + Vite + Tailwind CSS v4. Designed as an engineer's
working notebook: warm paper, ink, one red-pencil accent, a margin rule,
numbered entries with margin notes, and hand-drawn SVG system diagrams.
Set in Newsreader and IBM Plex Mono.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Editing content

All site content (bio, projects, skills, links) lives in a single file:

```
src/data/content.js
```

Edit that file to update text — no need to touch the components.

To update the CV, replace `public/Nasib_Farooq_CV.pdf`.

## Social / SEO assets

`public/og-image.png` and `public/apple-touch-icon.png` are generated
from `scripts/gen-assets.mjs`:

```bash
node scripts/gen-assets.mjs
```

Re-run after changing the name or intro so the share card stays in sync.
The script renders with locally installed fonts, so install Newsreader and
IBM Plex Mono first (e.g. the `.woff` files from `@fontsource/newsreader`
and `@fontsource/ibm-plex-mono` copied into `~/.fonts`).


## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds
the site and deploys it to GitHub Pages.

> **One-time setup:** In the repo's **Settings → Pages**, set
> **Source** to **GitHub Actions**.

## Structure

```
index.html              Vite entry
src/
  main.jsx              React root
  App.jsx               Section composition
  index.css            Paper/ink theme, margin rule, entry grid, figure styles
  data/content.js      ← all editable content
  components/
    Entry.jsx          Shared layout: margin note + writing
    Masthead, Intro    Top bar, name, contents
    CaseStudies.jsx    §1 CELIA, §2 CANDI
    Diagrams.jsx       Inline SVG system diagrams (Fig. 1, Fig. 2)
    Platform, Side, WorkLog, Toolbox, Contact, Footer
scripts/gen-assets.mjs  Generates og-image.png + apple-touch-icon.png
public/                favicon, OG image, CV, robots.txt, sitemap.xml, .nojekyll
```
