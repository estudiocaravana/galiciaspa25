// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: import.meta.env.PROD
    ? "https://estudiocaravana.github.io/galiciaspa25/"
    : undefined,
});
