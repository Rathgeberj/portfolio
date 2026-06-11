# Portfolio Website Spec — rathgeberj.dev
**For Claude Code**

---

## Project Overview

Build a personal portfolio website for Jeffrey Rathgeber Jr., a computer science graduate and cybersecurity master's student with hands-on IT/security experience. The site will be used in job applications targeting cybersecurity and IT infrastructure roles.

The site should feel like a personal OS desktop — intuitive enough for non-technical recruiters to navigate freely, but with a clear terminal/hacker aesthetic that signals deep technical fluency. Think: you've been given access to someone's machine and are exploring their profile through a custom OS interface.

---

## Tech Stack

- **Framework:** Astro (static site generator — fast, SEO-friendly, easy to maintain)
- **Styling:** Tailwind CSS
- **Fonts:** JetBrains Mono or Fira Code (monospace, used throughout)
- **Deployment target:** Netlify (connected to `rathgeberj.dev`)
- **Version control:** GitHub (new repo, to be initialized in local folder)

---

## Design System

### Color Palette
| Role | Value |
|------|-------|
| Background | `#0a0a0a` (near-black) |
| Surface / cards | `#111111` or `#141414` |
| Border / subtle lines | `#1f1f1f` or `#2a2a2a` |
| Primary text | `#e0e0e0` (light grey, not pure white) |
| Green accent (success, active, primary highlights) | `#00ff41` or `#39ff14` (matrix green) |
| Red accent (secondary highlights, "errors", in-progress indicators) | `#ff3131` or `#ff4444` |
| Muted / secondary text | `#666666` or `#888888` |
| Cursor / blink elements | Green, animated |

### Typography
- All text: monospace font (JetBrains Mono)
- Section labels styled like terminal comments: `// EXPERIENCE` or `[EXPERIENCE]`
- Timestamps/dates: muted color, smaller size
- Use `>` prompt character as a decorative bullet/list marker throughout

### UI Patterns
- Panels/cards with subtle green or grey borders, slight glow on hover
- Blinking cursor (`|`) on the hero name or tagline
- Fake terminal prompt in hero: `jeff@rathgeberj:~$`
- Subtle scanline or noise texture overlay on background (CSS only, lightweight)
- Smooth page/section transitions
- On hover: green border glow on interactive cards
- Section headers styled as terminal commands or comments
- "Status" indicators (green dot = active/current, grey dot = past, red dot = in-progress/pursuing)

### Accessibility & Usability
- All sections clearly labeled and clickable without needing to understand the terminal metaphor
- Mobile responsive — panels stack vertically on small screens
- Keyboard navigable
- No fake CLI input required from user — navigation is click/tap based

---

## Site Architecture

### Pages / Routes
```
/                   → Landing Dashboard (OS-style home)
/experience         → Work Experience
/education          → Education
/projects           → Projects Index
/projects/[slug]    → Individual Project Detail Page
/certifications     → Certifications
/competencies       → Core Competencies
/organizations      → Organizations & Community
/interests          → Personal Interests
/contact            → Contact
```

All pages share a persistent navigation element styled as a taskbar or top terminal bar.

---

## Page Specifications

---

### 1. Landing Page (`/`) — The Dashboard

The first impression. Feels like booting into a personal OS or landing on a server dashboard.

**Layout:**
- Top bar: fake OS/terminal title bar with `jeff@rathgeberj.dev` and a blinking cursor. Can include fake "uptime" or "last login" timestamp.
- Left column (roughly 1/3): Profile panel
  - Placeholder profile photo (circular, with a subtle green ring border)
  - Name: `Jeffrey Rathgeber Jr.`
  - Title/tagline (typewriter animation cycling through): `Cybersecurity Engineer`, `Graduate Researcher`, `Systems Thinker`, or similar — placeholder, to be updated
  - One-paragraph bio placeholder (2–3 sentences)
  - Quick links: GitHub icon, LinkedIn icon, Email icon
- Right column (roughly 2/3): Section panel grid
  - Grid of clickable "module" cards, each representing a section:
    - `[EXPERIENCE]` — with a one-line preview (e.g., most recent role)
    - `[EDUCATION]` — with a one-line preview (e.g., current degree)
    - `[PROJECTS]` — with a one-line preview (e.g., project count or featured project name)
    - `[CERTIFICATIONS]` — with a one-line preview
    - `[CORE COMPETENCIES]` — with a one-line preview (e.g., a few skill tags)
    - `[ORGANIZATIONS]` — with a one-line preview
    - `[INTERESTS]` — with a one-line preview
    - `[CONTACT]` — with email/links preview
  - Each card has a subtle green-glowing border on hover and navigates to the corresponding page on click
- Bottom status bar (optional): scrolling fake log line, e.g. `> Loading modules... OK | System: ONLINE | Last updated: [date]`

---

### 2. Experience (`/experience`)

**Layout:** Vertical timeline, most recent first.

**Each entry includes:**
- Job title (green, prominent)
- Organization name
- Date range (with status dot: green = current, grey = past)
- Location
- Bullet points of responsibilities/achievements styled with `>` prompt characters

**Placeholder Entries (from resume — to be updated with more detail later):**

```
IT Infrastructure Intern — [Company Name TBD]
June 2026 – Present | New York, NY
> Auditing Microsoft 365 platforms and IAM environments using custom scripts
> Developing workflow to assess safety and security of third-party MCP servers
> Writing PowerShell and Python scripts to automate helpdesk operations and improve visibility
> [More details to be added]

IT/Cybersecurity Instructor — I'Raise Girls & Boys International
April 2025 – Present | New York, NY
> Design engaging lessons and technical workshops on IT & Cybersecurity fundamentals
> Tailor instruction to diverse learning styles
> Collaborate with staff to support student success

Head of R&D — New York University, General Engineering Department
2021 – 2024 | New York, NY
> Administered technical workshops and provided implementation & security guidance
> Ensured alignment with broader security architecture standards within a lab environment
> Identified opportunities to automate remediation of recurring security issues
> Coordinated with internal departments and third-party vendors

Research Intern — PROOF Collective (Divergence)
July – August 2023 | Remote
> Researched and evaluated capabilities of circom for zero-knowledge proofing on a blockchain
> Implemented simple elliptic curve–based verification on the Ethereum blockchain
```

---

### 3. Education (`/education`)

**Layout:** Cards, most recent first.

**Each entry includes:**
- Degree & field
- Institution (with subtle logo placeholder or initials badge)
- Date range
- Status dot (green = in progress, grey = completed)
- Optional: relevant coursework, honors, notes

**Placeholder Entries:**

```
M.S. Cybersecurity — New York University, Tandon School of Engineering
2026 – 2027 (Expected) | In Progress ●

B.S. Computer Science, Minor: Mathematics — New York University, Tandon School of Engineering
2020 – 2024 | Completed ●
```

---

### 4. Projects (`/projects`) — Index Page

**Layout:** Grid of project cards. Each card is a "file" or "process" in the OS metaphor.

**Card includes:**
- Project name
- Short 1–2 line description
- Tags (e.g., `[security]`, `[AI]`, `[networking]`, `[cryptography]`, `[full-stack]`)
- Date
- A "DEEP DIVE AVAILABLE" badge on projects with full detail pages
- Click → navigates to `/projects/[slug]`

**Two display modes per card:**
- **Summary mode** (default): name, tags, 1–2 line description
- **Detail mode** (`/projects/[slug]`): full writeup with sections (Overview, Design Considerations, Technologies Used, Outcomes/Takeaways, Links if applicable)

**Placeholder Projects (from resume):**

```
1. Cybersecurity & AI Research Homelab [FEATURED / DEEP DIVE]
   Feb 2025 – Present
   Tags: [networking] [security] [homelab] [AI] [infrastructure]
   Summary: Self-hosted lab integrating pfSense firewall, Proxmox VE, and NAS storage.
   Detail page: Overview of architecture, design considerations, hardware choices,
   network segmentation, future plans. Individual homelab sub-projects can be added later.

2. Applied Cryptanalysis
   2022
   Tags: [cryptography] [python]
   Summary: Script using English language index of coincidence and letter frequency
   to break a poly-alphabetic substitution cipher.

3. TAG-Security Review
   2023
   Tags: [security] [open source] [assessment]
   Summary: Security assessment of Thanos software alongside the dev team,
   evaluating secure software handling access to critical data.

4. Digital Twin Security Research
   2023 – 2024
   Tags: [security] [research] [hardware] [software]
   Summary: Created a digital twin of a robotic system and identified exploitable
   hardware/software vulnerabilities that could compromise system safety.

5. Homomorphic Encryption Model
   2022
   Tags: [cryptography] [python] [encryption]
   Summary: Environment to compute over encrypted data on an external server
   without decryption using the FFHE library in Python.

6. English Premier League Projection Model
   2023
   Tags: [machine learning] [python] [data science]
   Summary: Predicted EPL final standings using KNN, XGBoost, Random Forest,
   SVM, and Neural Network models trained on historical data.

7. University Marketplace
   2023 – 2024
   Tags: [full-stack] [security] [react] [python] [mongodb]
   Summary: Secure online marketplace for college students built with Python,
   React, CSS, HTML, and MongoDB under an agile framework.
```

**Future-proofing:** The project system should be data-driven — projects defined in a content collection or data file (e.g., `src/data/projects.ts`) so new ones can be added by editing a single file without touching component code.

---

### 5. Certifications (`/certifications`)

**Layout:** Grid or list of certification cards.

**Each card includes:**
- Certification name
- Issuing organization
- Date earned (or "In Progress / Pursuing")
- Official verification link (Credly, Accredible, Coursera, etc.) — opens in new tab
- Status indicator: green dot = earned, red dot = in progress/pursuing

**Placeholder Entries:**

```
EARNED:
- Google Cybersecurity Professional Certificate V2 — Coursera
  September 2025
  [Verification link placeholder]

IN PROGRESS / PURSUING (placeholders — to be filled in):
- [Cert name] — [Org] — Pursuing ●
- [Cert name] — [Org] — Pursuing ●
- [Cert name] — [Org] — Pursuing ●
```

**Note:** Section should be easy to add to — cert data driven from a content file.

---

### 6. Core Competencies (`/competencies`)

**Layout:** Grouped tag cloud or categorized grid. Not a progress-bar skill meter — those feel outdated. Instead, group skills into domains.

**Categories and placeholder content (from resume):**

```
Languages & Scripting
> Python, C++, JavaScript, PowerShell, SQL, HTML, CSS

Operating Systems & Platforms
> Linux, Windows, macOS

Security Tools & Frameworks
> Nmap, Wireshark, Burp Suite, Kali Linux, Metasploit

Infrastructure & Networking
> TCP/IP, LAN/WAN, pfSense, Proxmox VE, VirtualBox, Virtualization

Databases
> SQL, MongoDB

Development Practices
> Software Development Life Cycle (SDLC), Agile, CI/CD, Automation

AI & Research
> Machine Learning, Artificial Intelligence, Cryptography, Zero-Knowledge Proofs
```

Each tag styled as a terminal token/badge. Hoverable with a subtle glow.

---

### 7. Organizations (`/organizations`)

**Layout:** Simple list or card grid.

**Each entry includes:**
- Organization name
- Role or membership type
- Brief description (1–2 lines)
- Link to org website (if applicable)

**Placeholder Entries:**

```
(ISC)² — Member
International nonprofit focused on cybersecurity certifications and community.

ISACA — Member
Global association for IT governance, audit, risk, and cybersecurity professionals.

OSIRIS Lab — NYU Tandon School of Engineering
On-campus cybersecurity research lab. [Role/involvement to be filled in]

Horological Society of New York — Member
One of the oldest watch collector and horological education organizations in the US.

GS9 Watch Club — Member
[Brief description to be filled in]
```

---

### 8. Personal Interests (`/interests`)

**Layout:** Light, casual — a brief human moment. Small cards or a simple styled list. Keep it concise.

**Placeholder content:**

```
♟ Chess
⚽ Soccer
📚 Reading
⌚ Horology & Watch Collecting
[Add more as desired]
```

Style: same terminal aesthetic but slightly warmer/lighter tone. A short 2–3 sentence intro like:
`> Beyond the terminal, a few things that keep the mind sharp and the curiosity alive.`

---

### 9. Contact (`/contact`)

**Layout:** Simple, clean. Styled like a terminal output block.

**Content:**

```
> jeff@rathgeberj.dev (placeholder — to be replaced with real preferred email)
> linkedin.com/in/rathgeberjr
> github.com/[username — to be filled in]
> rathgeberj.dev
```

Optional: a simple non-JS contact form (name, email, message) that submits via Netlify Forms (free, no backend needed). Can be added or skipped.

---

## Navigation

A persistent **top navigation bar** styled as a terminal title bar or OS menu bar:

```
jeff@rathgeberj:~$  [~] [exp] [edu] [projects] [certs] [skills] [orgs] [interests] [contact]
```

- Active page highlighted in green
- On mobile: collapses to a hamburger menu that opens a full-screen nav overlay
- Current "path" shown like a terminal breadcrumb: `~/projects/homelab`

---

## File & Content Structure

```
/
├── src/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── experience.astro
│   │   ├── education.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── certifications.astro
│   │   ├── competencies.astro
│   │   ├── organizations.astro
│   │   ├── interests.astro
│   │   └── contact.astro
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── StatusBar.astro
│   │   ├── ProjectCard.astro
│   │   ├── CertCard.astro
│   │   ├── ExperienceEntry.astro
│   │   ├── SkillTag.astro
│   │   └── ProfilePanel.astro
│   ├── data/
│   │   ├── projects.ts        ← All project data lives here
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   ├── certifications.ts
│   │   ├── organizations.ts
│   │   └── competencies.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── styles/
│       └── global.css
├── public/
│   ├── favicon.ico            ← Terminal-style favicon (e.g., `>_`)
│   └── images/
│       └── profile-placeholder.jpg
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── CLAUDE.md                  ← Claude Code instructions (see below)
└── README.md
```

---

## CLAUDE.md Contents

Claude Code should find a `CLAUDE.md` in the project root with the following:

```markdown
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
```

---

## Animations & Micro-interactions

Keep these subtle and performant — CSS only where possible:

- Blinking cursor on hero tagline (`@keyframes blink`)
- Typewriter cycling animation on the subtitle/title line
- Hover glow on cards (`box-shadow: 0 0 8px #00ff41`)
- Smooth fade or slide-in on page load (one-time, not looping)
- Green dot pulse animation on "current" status indicators
- Optional: subtle scanline overlay on hero section only

No heavy JS animation libraries — keep the site fast.

---

## GitHub Setup Instructions (for Claude Code)

1. Initialize git in the project root: `git init`
2. Create a `.gitignore` that excludes `node_modules/`, `dist/`, `.env`
3. Make an initial commit with all scaffolded files
4. Instructions for the user to connect to their GitHub remote:
   ```
   git remote add origin https://github.com/[username]/rathgeberj-dev.git
   git branch -M main
   git push -u origin main
   ```

---

## Out of Scope (for now)

- Blog / writeup section (scaffold can be added later)
- CMS integration
- Authentication
- Dark/light mode toggle (dark mode only)
- Real contact form backend (Netlify Forms is sufficient)
- Hosting setup (to be done after site is built and pushed to GitHub)

---

## Success Criteria

When complete, Claude Code should produce a site where:

1. All pages render without errors
2. All navigation links work correctly
3. All placeholder content is clearly marked `[PLACEHOLDER]` or `[TBD]`
4. The site is visually consistent with the design system on all pages
5. The project detail page works for at least the Homelab project as a demo
6. The site builds successfully with `npm run build`
7. `README.md` includes setup, development, and deployment instructions