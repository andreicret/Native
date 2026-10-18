# Native
Native fiki page — built with [Astro](https://astro.build) on top of the [Astroship](https://github.com/surjithctly/astroship) template.

Live: https://andreicret.github.io/Native/

## Edit content
- Team: `src/content/team/*.md` (photos go in `public/team/`)
- Sections: `src/components/{hero,problem,solution,market,metrics,business}.astro`

## Run locally
```bash
pnpm install
pnpm dev
```

Every push to `main` is deployed to GitHub Pages by `.github/workflows/deploy.yml`.
