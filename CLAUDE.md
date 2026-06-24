# CLAUDE.md — rathgeberj.dev Portfolio

## Project Summary
Personal cybersecurity portfolio for Jeffrey Rathgeber Jr.
Framework: Astro + Tailwind CSS
Deployment: GitHub Actions → GitHub Pages (rathgeberj.dev)

## Design Principles
- Terminal/OS desktop aesthetic — dark, purple-on-black UI with green matrix rain background, monospace throughout
- Intuitive navigation for non-technical users — no CLI input required
- All content data-driven from src/data/ — never hardcode content in components
- Mobile responsive at all breakpoints

## Color Tokens (use these, do not invent new colors)
- Background: #0a0a0a
- Surface: #111111
- Surface accent-tinted (solid highlight for current/in-progress cards): #1f0f29 — Tailwind token `terminal.surface-accent`
- Border: #1f1f1f
- Text primary: #e0e0e0
- Purple accent (ALL UI: headers, borders, glows, links, nav highlights, status dots, typewriter): #9d00ff — Tailwind token `terminal.accent`
- Matrix rain green (MatrixRain background canvas ONLY, never for UI): #00ff41 — Tailwind token `terminal.rain`
- Red accent (errors, in-progress states; muted, no glow): #cc0000 — Tailwind token `terminal.red`
- Muted text: #666666

## Font
- JetBrains Mono everywhere (import from Google Fonts)

## Content Philosophy
- All project data lives in src/data/projects.ts
- All cert data lives in src/data/certifications.ts
- Adding new content = editing a data file only, never a component
- Placeholder text clearly marked with [PLACEHOLDER] or [TBD] comments

## Key Behaviors
- Projects support two modes: summary card (index) and full detail page ([slug].astro)
- Certifications support "earned" and "in-progress" status states
- Experience entries support "current" and "past" status states
- Nav shows current route as terminal breadcrumb

## Deployment
- `npm run build` → dist/
- Push to `main` → GitHub Actions builds and publishes to GitHub Pages (`.github/workflows/deploy.yml`)
- Domain: rathgeberj.dev