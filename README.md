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

## Security

This being a security portfolio, the site practices what it preaches — defense-in-depth across the application, the edge, and DNS:

**Application**
- **Strict Content-Security-Policy** on every page (`default-src 'self'`, `object-src 'none'`, `base-uri 'self'`, `frame-ancestors 'none'`). The only external origin allowed is Google Fonts. Build-time hashes are generated for inline scripts/styles, so the policy can't drift out of sync with the code.
- **No dynamic HTML sinks** — fully static, data-driven from `src/data/`; no `set:html`, no `eval`, no user input.
- All outbound links use `rel="noopener noreferrer"`; CSP-compatible syntax highlighting (Prism, not inline-style Shiki).
- Reproducible, lockfile-pinned CI installs; dependency tree kept on supported, regularly-updated releases with a clean `npm audit`.

**Edge (Cloudflare)**
- Origin served only through Cloudflare (origin IP not exposed), full HTTPS with HTTP→HTTPS redirect.
- **TLS 1.2 minimum** (legacy TLS 1.0/1.1 refused), **HSTS**, and `X-Content-Type-Options: nosniff`.

**DNS / email**
- **DNSSEC** enabled end-to-end (validated chain of trust).
- **CAA** records restricting which CAs may issue certificates.
- **SPF + DMARC** configured to protect the domain against email spoofing.

> **For contributors:** the CSP lives under `security.csp` in `astro.config.mjs`. Adding a new external resource (script, image CDN, embed, font, etc.) requires adding its origin to the matching directive there, or the browser will block it.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which runs `npm ci` for a reproducible install, builds the site, and publishes `dist/` to GitHub Pages. Custom domain: `rathgeberj.dev`.

To build locally:

```sh
npm run build      # → dist/
```
