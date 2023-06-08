import { defineConfig } from "vite";
import { resolve } from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "src/index.jsx",
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/path/to/src/scss/_Abraham.scss";`,
      },
    },
  },
  plugins: [reactRefresh()],
  resolve: {
    fallback: {
      zlib: false,
    },
    alias: {
      crypto: "crypto-browserify",
      os: "os-browserify/browser",
    },
  },
});
