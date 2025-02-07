import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
     tailwindcss(),
    react()],
    server: {
      port: process.env.PORT || 3000, // Use Render's dynamic port
      host: '0.0.0.0', // Required for Render
      strictPort: true,
      allowedHosts: ['.onrender.com'], // Allow all Render subdomains
    },
    preview: {
      port: process.env.PORT || 3000,
      host: '0.0.0.0',
      allowedHosts: ['.onrender.com'],
    },
})
