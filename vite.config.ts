import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages: set VITE_BASE=/repository-name/ or use base: './'
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || "./",
});
