import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'
// import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES  // この行を追加
  ? "TouchNumb"            // この行を追加
  : "./",                     // この行を追加
  // base: process.env.NODE_ENV === 'production' ? '/github-pages-test/' : './',
  plugins: [vue()],
  // resolve: {
  //   alias: {
  //     '@': resolve(__dirname, 'src')
  //   }
  // }  
})
