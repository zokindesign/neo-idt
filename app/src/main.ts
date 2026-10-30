import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'
import zhCN from './i18n/zh-CN'
import en from './i18n/en'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages: { 'zh-CN': zhCN, en },
})

// 挂载点：WP 插件用唯一 ID（避免与主题 id="app" 冲突）；独立/桌面版用 #app
const wpMount = document.getElementById('incl-tool-app')
const mountEl = wpMount || document.getElementById('app')
if (mountEl) {
  createApp(App).use(createPinia()).use(i18n).mount(mountEl)
} else {
  console.error('[InclusiveDesign] 未找到挂载点（#incl-tool-app 或 #app）——WP 站点请确认 shortcode 已渲染')
}
