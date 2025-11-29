import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-site.netlify.app', // замените после деплоя
  trailingSlash: 'always',
  build: {
    format: 'file'
  }
});
