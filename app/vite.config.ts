import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // 固定文件名：WP 插件以 plugin_url 硬编码 enqueue（缓存击穿用 ?ver=INCL_TOOL_VERSION）
        entryFileNames: 'incl-app.js',
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: (info) => (info.names?.[0]?.endsWith('.css') ? 'incl-app.css' : 'assets/[name][extname]'),
      },
    },
  },
})
