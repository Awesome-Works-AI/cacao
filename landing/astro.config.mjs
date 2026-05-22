import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://awesome-works-ai.github.io',
  base: '/cacao',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
