import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://eMDi94.github.io',
  base: '/homepage',
  integrations: [react(), tailwind()]
});