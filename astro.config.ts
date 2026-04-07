import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro';

export default defineConfig({
  site: 'https://minhtringuyennn.github.io',
  base: '/KhoiGroupWebsite',
  integrations: [UnoCSS({ injectReset: true })],
});
