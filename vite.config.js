import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allow access from the local network
    port: 5173,       // Ensure this port matches the one you're using
  },
})
