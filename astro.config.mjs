// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import { NodePackageImporter } from "sass-embedded";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          importers: [new NodePackageImporter()],
        },
      },
    },
  },
});