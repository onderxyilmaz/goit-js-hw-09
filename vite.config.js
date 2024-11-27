import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/goit-js-hw-09/',  
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        gallery: resolve(__dirname, 'src/01-gallery.html'),
        form: resolve(__dirname, 'src/02-form.html')
      }
    }
  }
});