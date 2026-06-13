# iamnasib.github.io

Personal portfolio of **Nasib Farooq** — AI Engineer.

Built with React + Vite + Tailwind CSS v4. Dark "emerald-on-slate" theme.

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

Re-run after changing the name/role/tagline so the share card stays in sync.

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
  index.css            Theme + Tailwind
  data/content.js      ← all editable content
  hooks/useReveal.js   Scroll-reveal animation
  components/          Nav, Hero, About, Projects, Experience, Skills, Contact, Footer
scripts/gen-assets.mjs  Generates og-image.png + apple-touch-icon.png
public/                favicon, OG image, CV, robots.txt, sitemap.xml, .nojekyll
```
