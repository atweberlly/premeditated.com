import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import pages from 'vite-plugin-pages'

export default defineConfig({
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
    pages({
      dirs: [
        { dir: 'src/pages', baseRoute: '' },
        { dir: 'src/components', baseRoute: 'components' },
      ],
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
  preview: {
    port: 8080,
  },
})
