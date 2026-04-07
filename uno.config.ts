import { defineConfig, presetUno, presetIcons, presetWebFonts } from 'unocss';

export default defineConfig({
  presets: [
    presetUno({ dark: 'class' }),
    presetIcons(),
    presetWebFonts({
      fonts: {
        sans: { name: 'Inter', weights: ['400', '500', '600', '700'] },
        mono: 'JetBrains Mono',
      },
    }),
  ],
  theme: {
    colors: {
      primary: '#003D7C',
      accent:  '#EF7C00',
      muted:   '#64748b',
    },
  },
});
