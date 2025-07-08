import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        terser({
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
        }),
      ],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use './src/styles/mixins' as *;`,
      },
    },
  },
  plugins: [svelte()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
});
