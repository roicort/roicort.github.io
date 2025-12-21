// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import umami from "@yeskunall/astro-umami";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://roicort.github.io",
  integrations: [
    mdx(), sitemap(), pagefind(), icon(),
    umami({
      endpointUrl: "https://analytics.up.railway.app",
      id: "8b83e7b8-d4fb-4f8b-b46e-545b85448b99",
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Space Grotesk",
        cssVariable: "--font-sans",
      },
      {
        provider: fontProviders.fontsource(),
        name: "IBM Plex Mono",
        cssVariable: "--font-mono",
      },
    ],
  },
});
