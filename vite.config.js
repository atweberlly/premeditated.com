const customPortNumber = 8080

/** @type {import('vite').UserConfig} */
export default {
  server: {
    host: '0.0.0.0',
    port: customPortNumber,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
      },
    },
  },
  preview: {
    port: customPortNumber,
  },
}
