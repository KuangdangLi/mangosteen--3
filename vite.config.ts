import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/mangosteen--3/dist/',
  plugins: [vue()],
  server: {
    port: 9999 // 更改为所需的端口号
  }
})
