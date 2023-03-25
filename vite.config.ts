import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import cloudflare from 'solid-start-cloudflare-pages';

export default defineConfig({
  plugins: [solidPlugin({ adapter: cloudflare({}) })],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
