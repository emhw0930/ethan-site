import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from https://emhw0930.github.io/ethan-site/
export default defineConfig({
  base: "/ethan-site/",
  plugins: [react()],
  define: {
    __BUILD_DATE__: JSON.stringify(
      new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
    ),
  },
});
