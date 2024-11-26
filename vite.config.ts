import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vitePluginDeadcodes from "vite-plugin-deadcodes";

import path from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// 国际化
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// 按需引入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

// 优化构建体积
// import { visualizer } from 'rollup-plugin-visualizer';
import ViteCompressionPlugin from "vite-plugin-compression";
import ViteImagemin from 'vite-plugin-imagemin'
import PluginCritical from 'rollup-plugin-critical';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  },
  assetsInclude: ["**/*.md"],
  plugins: [
    vitePluginDeadcodes(),
    vue(),
    vueJsx(),
    AutoImport({
      imports: [
        "vue",
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar",
          ],
        },
      ],
    }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
    VueI18nPlugin({
      include: [path.resolve(__dirname, "./src/locales/**")],
    }),
    // visualizer({
    //   emitFile: false,
    //   open: true // 是否在构建完成后自动打开生成的统计图文件
    // })
    ViteCompressionPlugin({
      algorithm: "gzip",
      ext: ".gz",
      deleteOriginFile: true,
    }),
    // ViteCompressionPlugin({
		// 	algorithm: "brotliCompress", // 压缩效果比 gzip 好，但是只支持 HTTPS
		// 	ext: ".br",
		// 	deleteOriginFile: true,
		// }),
    ViteImagemin({
      optipng: {
        optimizationLevel: 5,
      },
      gifsicle: {
        interlaced: false,
      },
      mozjpeg: {
        quality: 75,
      },
      svgo: {
        plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
      },
    }),
    PluginCritical({
      criticalUrl: 'https://desu.life/',
      criticalPages: [
        { url: '/', template: 'index' }
      ],
      criticalConfig: {
        inline: true,
        minify: true,
        width: 1920,
        height: 1080,
      }
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
