// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import { NodePackageImporter } from "sass-embedded";

// https://astro.build/config
export default defineConfig({
  site: "https://deadhandmedia.com",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  experimental: {
    svg: true,
  },
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
