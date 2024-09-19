import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/", // Base for development mode
  };

  if (command === "build") {
    // This is the build mode
    config.base = "./"; // Use relative base for production
  }

  return config;
});
