import { defineConfig } from 'astro/config';
//import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), solidJs()],
  adapter: cloudflare()
});

/*
export default defineConfig({
  output: "server",
  integrations: [tailwind(), solidJs()],
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
