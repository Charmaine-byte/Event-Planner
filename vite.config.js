import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Event-Planner/', // 👈 MUST match repo name exactly (case-sensitive)
})