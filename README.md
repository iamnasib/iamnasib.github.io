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

To change the profile photo, replace `public/profile-placeholder.svg`
with your image and update `profile.photo` in `src/data/content.js`.

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
  components/          Nav, Hero, About, Projects, Skills, Contact, Footer
public/                favicon, profile image, .nojekyll
```
