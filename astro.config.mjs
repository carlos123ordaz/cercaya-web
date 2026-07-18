// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import { SITE } from './src/consts';

// https://astro.build/config
export default defineConfig({
  // `site` alimenta canonical, Open Graph y sitemap.xml. Si cambias de dominio,
  // edítalo en src/consts.ts y todo el SEO se actualiza solo.
  site: SITE.url,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      // La landing es la página que queremos posicionar; las legales, casi nada.
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '');
        if (path === '') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (path === '/soporte') {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        }
        return item;
      },
    }),
  ],
});
