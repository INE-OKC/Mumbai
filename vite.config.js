import { defineConfig } from "vite";
import { resolve } from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tailwindcss from "tailwindcss";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "src/index.jsx",
      },
    },
  },

  plugins: [reactRefresh(), tailwindcss()],
});
