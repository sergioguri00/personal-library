// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://sergioguri00.github.io",
  base: "/personal-library",
  vite: {
    plugins: [tailwindcss()],
  },
});
