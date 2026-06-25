import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rathgeberj.dev',
  output: 'static',
  markdown: {
    // Prism uses CSS classes (CSP-compatible) instead of Shiki's inline styles.
    // The site renders no code blocks today; this keeps it CSP-safe if it ever does.
    syntaxHighlight: 'prism',
  },
  security: {
    // Emits a <meta http-equiv="content-security-policy"> with auto-generated
    // hashes for Astro's inline scripts/styles — recomputed every build, so it
    // never goes stale. Google Fonts is the only external origin we allow.
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self' https://fonts.gstatic.com",
        "base-uri 'self'",
        "object-src 'none'",
        "frame-ancestors 'none'",
      ],
      styleDirective: {
        resources: ["'self'", 'https://fonts.googleapis.com'],
      },
    },
  },
  vite: {
    // Tailwind v4 is wired in as a Vite plugin; global.css owns the
    // `@import "tailwindcss"` and `@config` so base styles stay in one place.
    plugins: [tailwindcss()],
  },
});
