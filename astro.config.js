import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    port: 8080,
  },
  integrations: [mdx()],
})
