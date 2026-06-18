import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        shader1: resolve(__dirname, 'shader-1/index.html'),
        shader2: resolve(__dirname, 'shader-2/index.html'),
      },
    },
  },
})
