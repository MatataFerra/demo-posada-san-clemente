// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://demo-posada-san-clemente.vercel.app',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
});
