// vite.config.ts
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";
export default defineConfig({
  plugins: [reactRefresh()],
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
