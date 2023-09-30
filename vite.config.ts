import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import styleImport, { VantResolve } from "vite-plugin-style-import";
import { svgstore } from "./src/vite_plugins/svgstore";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: any) {
          if (id.includes("echarts")) {
            return "echarts";
          }
          if (id.includes("mock") || id.includes("faker")) {
            return "mock";
          }
          if (id.includes("vant")) {
            return "vant";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
  base: "/dist/",
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true,
    }),
    svgstore(),
    styleImport({
      resolves: [VantResolve()],
    }), //引入vant样式
  ],
  server: {
    port: 9999, // 更改为所需的端口号
  },
});
