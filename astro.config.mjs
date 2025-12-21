// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import umami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
  site: "https://roicort.github.io",
  integrations: [
    mdx(),
    sitemap(),
    umami({
      endpointUrl: "https://analytics.up.railway.app",
      id: "8b83e7b8-d4fb-4f8b-b46e-545b85448b99",
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
