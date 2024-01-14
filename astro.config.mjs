import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  output: "server",
  integrations: [tailwind(), mdx()],
  adapter: vercel({
    webAnalytics: {
      enabled: false
    },
    speedInsights: {
      enabled: false
    },
    imageService: true
  })
});
