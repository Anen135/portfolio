import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Change "portfolio" to your GitHub repository name if deploying to
// https://yourusername.github.io/REPO_NAME/
// Leave as "/" if deploying to https://yourusername.github.io/
export default defineConfig({
  plugins: [react()],
  base: "/", // ← update to "/your-repo-name/" for project pages
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "esbuild",
  },
});
