import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gflux.fr',
  integrations: [tailwind()],
  output: 'static',
});
