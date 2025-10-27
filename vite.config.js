import { defineConfig } from "vite";

export default defineConfig({
  base: "/Portfolio-Game/",     // critical for GitHub Pages repo path
  build: { 
    outDir: "dist", 
    emptyOutDir: true 
  }
});