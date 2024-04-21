import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-icon';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon(), vue()],
  site: 'https://honokiyuto.github.io',
  base: '/dachscafe-lgtm-site'
});