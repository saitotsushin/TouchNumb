import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'
// import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // base: process.env.NODE_ENV === 'production' ? '/github-pages-test/' : './',
  plugins: [vue()],
  // resolve: {
  //   alias: {
  //     '@': resolve(__dirname, 'src')
  //   }
  // }  
})
