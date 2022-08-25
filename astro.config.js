import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    port: 8080,
  },
  integrations: [vue()],
})
