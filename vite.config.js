import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hightowerventures.github.io/', // 👈 This must match your repo name
})
