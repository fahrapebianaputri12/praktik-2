// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Ganti 'nama-repo' dengan NAMA REPOSITORY Anda di GitHub
  base: "/nama-repo/", //
  plugins: [react()],
})