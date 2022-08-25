import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'file',
  },
  server: {
    host: true,
    port: 8080,
  },
  integrations: [vue()],
})
