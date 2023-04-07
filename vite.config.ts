import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { svgstore } from './src/vite_plugins/svgstore';

// https://vitejs.dev/config/
export default defineConfig({
  // base:'/mangosteen--3/dist/',
  plugins: [
    vue(),
    vueJsx({
      transformOn:true,
      mergeProps:true
    }),
    svgstore(),
  ],
  server: {
    port: 9999 // 更改为所需的端口号
  },
})
