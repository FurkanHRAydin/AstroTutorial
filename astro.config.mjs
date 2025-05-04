// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://grand-brioche-800892.netlify.app/",
  integrations: [preact()]
});