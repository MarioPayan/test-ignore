// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://LaCasaDelPoeta.github.io',
  base: '/hogar',
  integrations: [tailwind()],
  // Optimización de imágenes
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});