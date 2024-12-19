import { defineConfig } from "vite"
import solid from "vite-plugin-solid"

export default defineConfig({
  plugins: [solid()],
  base: "/note-oriety/",
  build: {
    rollupOptions: { output: { manualChunks: { vexflow: ["vexflow"] } } },
  },
})
