import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vitePluginDeadcodes from 'vite-plugin-deadcodes'

import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude:['**/*.md'],
  plugins: [
    vitePluginDeadcodes(),
    vue(),
    vueJsx(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    }),
    VueI18nPlugin({
      include: [path.resolve(__dirname, './src/locales/**')],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
