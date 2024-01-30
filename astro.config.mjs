import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    output: "server",
    integrations: [
        tailwind(),
        mdx(),
        icon({
            include: {
                "material-symbols": ["sunny-outline-rounded", "dark-mode-outline-rounded", "location-on-outline-rounded", "phone-android-outline-rounded", "school-outline-rounded", "mail-outline-rounded", "sim-card-download-outline-rounded"]
            },
            iconDir: "src/assets/icons",
        })
    ],
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
