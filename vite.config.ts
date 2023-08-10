// vite.config.ts
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (file) => {
          return `assets/*.{css}`;
        },
        entryFileNames: (file) => {
          return "assets/*.{js}";
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src/"),
      },
    ],
  },
  server: {
    port: 3000,
  },
});
