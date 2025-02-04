import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        styles: resolve(__dirname, './src/scss/index.css'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const extType = info[info.length - 1];

          if (/woff|woff2|ttf/.test(extType)) {
            return mode === "production" ? '/dist/src/fonts/[name][extname]' : 'fonts/[name][extname]';
          }

          return '/dist/css/[name]-generated[extname]';
        }
      }
    }
  }
})
