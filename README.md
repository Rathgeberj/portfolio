# rathgeberj.dev

Personal cybersecurity portfolio for Jeffrey Rathgeber Jr. — terminal/OS desktop aesthetic, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages at [rathgeberj.dev](https://rathgeberj.dev).

## Setup

```sh
npm install
```

## Development

```sh
npm run dev        # dev server at http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## Project Structure

```
src/
├── pages/          # routes (one .astro file per page)
├── components/     # Nav, cards, panels, etc.
├── layouts/        # BaseLayout.astro — shared head, nav, fonts
├── data/           # ALL site content lives here (see below)
└── styles/         # global.css — design system
```

## Editing Content

All content is data-driven. To add or update content, edit the files in `src/data/` — never the components:

| File | Content |
|------|---------|
| `projects.ts` | Projects (entries with `deepDive` get a detail page at `/projects/[slug]`) |
| `experience.ts` | Work experience timeline |
| `education.ts` | Degrees |
| `certifications.ts` | Certs (`earned` / `in-progress` status) |
| `competencies.ts` | Skill groups |
| `organizations.ts` | Memberships & community |
| `interests.ts` | Personal interests |

Placeholder content is marked with `[PLACEHOLDER]` or `[TBD]`.

## Design System

Color tokens, fonts, and animations are defined in `tailwind.config.mjs` (under `terminal.*`) and `src/styles/global.css`. Use the existing tokens — do not invent new colors. Reusable patterns: `.panel`, `.panel-interactive`, `.section-label`, `.prompt-list`, `.status-dot-{accent,grey,red}`, `.tag-badge`, `.cursor-blink`, `.scanlines`.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and publishes `dist/` to GitHub Pages. Custom domain: `rathgeberj.dev`.

To build locally:

```sh
npm run build      # → dist/
```
