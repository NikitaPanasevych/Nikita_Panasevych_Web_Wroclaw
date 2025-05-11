import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  base: "/Nikita_Panasevych_Web_Wroclaw/",
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        confirmation: resolve(__dirname, "confirmation.html"),
      },
    },
  },
});
