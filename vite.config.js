import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from https://emhw0930.github.io/ethan-site/
export default defineConfig({
  base: "/ethan-site/",
  plugins: [react()],
});
