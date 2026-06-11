import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://rathgeberj.dev',
  integrations: [
    tailwind({
      // global.css handles the Tailwind directives so base styles stay in one place
      applyBaseStyles: false,
    }),
  ],
});
