const portNumber = 8080

/** @type {import('vite').UserConfig} */
export default {
  server: {
    host: '0.0.0.0',
    port: portNumber,
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
    port: portNumber,
  },
}
