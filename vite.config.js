import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// User GitHub Pages site (iamnasib.github.io) serves from root, so base is '/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
