import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // ...other aliases
    },
    // Add or update the assetsInclude option
    assetsInclude: ['src/assets/**'],
  },
})



