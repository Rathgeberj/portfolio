// Prefixes root-relative paths with the configured Astro base so links and
// asset URLs work wherever the site is served from (e.g. GitHub Pages at
// /portfolio). BASE_URL may or may not carry a trailing slash depending on
// config, so normalize it off before joining.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** '/projects' → '/portfolio/projects' (and '/' → '/portfolio/'). */
export const withBase = (path: string): string => `${base}${path}`;

/** Inverse of withBase, for comparing Astro.url.pathname against logical routes. */
export const stripBase = (pathname: string): string =>
  pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
