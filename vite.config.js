import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // ← Asegúrate de tener esto

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()  // ← Y esto
  ],
  base: '/MindfulnessWebpage/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})