import { defineConfig } from 'astro/config';
//import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), solidJs(), mdx()],
  adapter: cloudflare()
});

/*
export default defineConfig({
  output: "server",
  integrations: [tailwind(), solidJs(), ndx()],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
});
*/