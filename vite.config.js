import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@utils': '/src/utils',
      '@pages': '/src/pages',
      '@hooks': '/src/hooks',
      '@api': '/src/api',
    },
  },
  plugins: [react()],
});
