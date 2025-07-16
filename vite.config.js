import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/mood-tracker-frontend/', // match your repo name
  plugins: [react()],
  build: {
    outDir: 'docs', // 👈 THIS IS THE KEY
  },
});
