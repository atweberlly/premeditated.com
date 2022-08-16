import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      entry: './src/index.js',
      minify: true,
    }),
  ],
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
