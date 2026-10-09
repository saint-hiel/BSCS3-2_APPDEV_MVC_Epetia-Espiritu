import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

// Bundle JavaScript dependencies and compile Tailwind for the ASP.NET static host.
export default defineConfig({
  plugins: [tailwindcss()],
  base: "./",
  build: {
    outDir: fileURLToPath(new URL("./wwwroot-built", import.meta.url)),
    emptyOutDir: true,
    rollupOptions: {
      input: fileURLToPath(new URL("./wwwroot/js/site.js", import.meta.url)),
      output: {
        entryFileNames: "js/site.js",
        chunkFileNames: "js/[name]-[hash].js",
        assetFileNames: (asset) =>
          asset.names.some((name) => name.endsWith(".css"))
            ? "css/site.css"
            : "lib/[name]-[hash][extname]",
      },
    },
  },
});
