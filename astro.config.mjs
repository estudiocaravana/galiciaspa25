// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://estudiocaravana.github.io",
  base: "/galiciaspa25/",
  vite: {
    plugins: [tailwindcss()],
  },
});
