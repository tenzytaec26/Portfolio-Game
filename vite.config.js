import { defineConfig } from 'vite';

export default defineConfig({
  // Use relative paths so the build works from a subdirectory
  base: './',
  build: {
    // Emit straight into your site’s static folder
    outDir: '/Portfolio-Game/',
  },
});