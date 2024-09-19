import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/", // Base for development mode
  };

  if (command === "build") {
    // Use the base folder when building for GitHub Pages
    config.base = "/portfolio/"; // Specify your repo name for GitHub Pages
  }

  return config;
});
