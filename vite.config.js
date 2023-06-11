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
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },

  plugins: [reactRefresh(), tailwindcss()],
});
