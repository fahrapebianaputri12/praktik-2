// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/praktik-2-deployment/", //
  plugins: [react()],
})