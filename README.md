# Native
Native fiki page — built with [Astro](https://astro.build) on top of the [Astroship](https://github.com/surjithctly/astroship) template.

Live: https://andreicret.github.io/Native/

## Edit content
- Team: `src/content/team/*.md` (photos go in `public/team/`)
- Introduction: `src/components/hero.astro`
- M1: `src/components/{problem,solution,market,competition,metrics,business}.astro`
- Other milestones: edit the `milestones` array in `src/pages/index.astro`. Fill each
	subsection's `content` string with plain text; line breaks are preserved. Empty
	strings display "Not yet documented." For richer content, render an Astro
	component for that milestone, following the existing M1 branch.

The introduction and team stay above the milestone sections. The page includes
M1-M9 and M11 from the [course milestone list](https://ocw.cs.pub.ro/courses/se/project/milestones)
(which does not list M10). Each milestone has a direct anchor (`#m1`, `#m2`, etc.).

## Run locally
```bash
pnpm install
pnpm dev
```

Every push to `main` is deployed to GitHub Pages by `.github/workflows/deploy.yml`.
