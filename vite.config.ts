import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), svgr(), vanillaExtractPlugin()],
  resolve: {
    alias: [
      { find: /^assets\//, replacement: '/src/assets/' },
      { find: /^config\//, replacement: '/src/config/' },
      { find: /^context\//, replacement: '/src/context/' },
      { find: /^hooks\//, replacement: '/src/hooks/' },
      { find: /^icons\//, replacement: '/src/icons/' },
      { find: /^stories\//, replacement: '/src/stories/' },
      { find: /^styles\//, replacement: '/src/styles/' },
      { find: /^utils\//, replacement: '/src/utils/' },
    ],
  },
});
