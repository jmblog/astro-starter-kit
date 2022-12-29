import { defineConfig } from 'astro/config';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Your final, deployed URL
  site: 'https://www.my-site.dev',
  // The base path to deploy to
  base: '/foo',
  integrations: [sitemap()],
});
