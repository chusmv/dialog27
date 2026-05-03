import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        supervisar: fileURLToPath(new URL('./supervisar/index.html', import.meta.url)),
        reduceTrabajoContable: fileURLToPath(
          new URL('./reduce-trabajo-contable/index.html', import.meta.url),
        ),
        automatizaContabilidad: fileURLToPath(
          new URL('./automatiza-contabilidad/index.html', import.meta.url),
        ),
        pruebaGratis: fileURLToPath(new URL('./prueba-gratis/index.html', import.meta.url)),
      },
    },
  },
  server: {
    host: 'localhost',
    port: 5174,
    strictPort: true,
    allowedHosts: ['.ngrok-free.dev', '.ngrok-free.app'],
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
})
