import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    port: 3001,
    host: true,
  },
});
