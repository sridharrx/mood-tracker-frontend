import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: '/mood-tracker-frontend/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve('./index.html') // Simplified path resolution
      }
    }
  },
  plugins: [react()],
  publicDir: 'public'
});