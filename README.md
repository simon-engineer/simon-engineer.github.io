# simon-engineer.github.io

My personal website, built with [Astro](https://astro.build) and deployed to
GitHub Pages. Live at **https://simon-engineer.github.io**.

## Develop

Requires Node 20+ (this repo pins it via `.nvmrc`).

```bash
nvm use          # or: nvm install
npm install
npm run dev      # http://localhost:4321
```

## Edit content

| What | Where |
| --- | --- |
| Name, role, tagline, links, expertise, education, experience | `src/data/site.ts` |
| About / homepage prose | `src/pages/index.astro` |
| Projects list | `src/data/projects.ts` |
| Publications, patents, DOE programs | `src/data/research.ts` |
| Global colors & type | `src/styles/global.css` |

## Deploy

Push to `main` — the GitHub Actions workflow in `.github/workflows/deploy.yml`
builds the site and publishes it to GitHub Pages automatically.

**One-time setup:** in the repo **Settings → Pages**, set **Source** to
**GitHub Actions**.

## Build locally

```bash
npm run build    # outputs to dist/
npm run preview  # serve the production build
```
