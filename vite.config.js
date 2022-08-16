import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    open: true,
  },
  build: {
    rollupOptions: {
      input: { index: './index.html' },
    },
  },
})
