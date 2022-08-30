import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@scripts': path.resolve(__dirname, 'src/scripts'),
      '@views': path.resolve(__dirname, 'src/views'),
    },
  },
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: false,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: false,
      },
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
  preview: {
    port: 8080,
  },
})
