import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { peerDependencies } from './package.json';

export default defineConfig({
  plugins: [react(), svgr(), vanillaExtractPlugin()],
  resolve: {
    alias: [
      { find: /^assets\//, replacement: '/src/assets/' },
      { find: /^components\//, replacement: '/src/components/' },
      { find: /^config\//, replacement: '/src/config/' },
      { find: /^context\//, replacement: '/src/context/' },
      { find: /^hooks\//, replacement: '/src/hooks/' },
      { find: /^icons\//, replacement: '/src/icons/' },
      { find: /^stories\//, replacement: '/src/stories/' },
      { find: /^styles\//, replacement: '/src/styles/' },
      { find: /^icons\//, replacement: '/src/icons/' },
      { find: /^utils\//, replacement: '/src/utils/' },
    ],
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        dir: 'dist',
        sourcemap: true,
        // preserveModules: true,
        // preserveModulesRoot: 'src',
      },
      plugins: [dts({ rollupTypes: true, tsconfigPath: './tsconfig.lib.json' })],
    },
  },
});
