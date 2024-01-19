import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',

  resolve: {
    alias: {
      app: resolve(__dirname, './src/app'),
      pages: resolve(__dirname, './src/pages'),
      widgets: resolve(__dirname, './src/widgets'),
      features: resolve(__dirname, './src/features'),
      entities: resolve(__dirname, './src/entities'),
      shared: resolve(__dirname, './src/shared'),
    },
  },

  server: {
    host: '0.0.0.0',
  },

  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  plugins: [react()],
});
