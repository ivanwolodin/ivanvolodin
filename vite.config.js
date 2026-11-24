import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },     // как в CRA, по умолчанию у Vite 5173
  build: { outDir: 'dist' }, // чтобы папка называлась build, а не dist
})
