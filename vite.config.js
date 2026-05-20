import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        catalogue: resolve(__dirname, 'catalogue.html'),
        panier: resolve(__dirname, 'panier.html'),
        checkout: resolve(__dirname, 'checkout.html'),
        faq: resolve(__dirname, 'faq.html'),
      },
    },
  },
})
