import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.TAURI_ENV_PLATFORM ? '/' : '/daggerheart-reference/',
  plugins: [
    react(),
  ],
})
