import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { resolve } from "path";
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // @ 字符 路径指向
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
