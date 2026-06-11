# CLAUDE.md — rathgeberj.dev Portfolio

## Project Summary
Personal cybersecurity portfolio for Jeffrey Rathgeber Jr.
Framework: Astro + Tailwind CSS
Deployment: Netlify → rathgeberj.dev

## Design Principles
- Terminal/OS desktop aesthetic — dark, green-on-black, monospace throughout
- Intuitive navigation for non-technical users — no CLI input required
- All content data-driven from src/data/ — never hardcode content in components
- Mobile responsive at all breakpoints

## Color Tokens (use these, do not invent new colors)
- Background: #0a0a0a
- Surface: #111111
- Border: #1f1f1f
- Text primary: #e0e0e0
- Green accent: #00ff41
- Red accent: #ff3131
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
- Deploy dist/ to Netlify
- Domain: rathgeberj.dev (to be connected post-build)