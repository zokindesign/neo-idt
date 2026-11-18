import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'
import './style.css'
import App from './App.vue'
// i18n 单一事实源：i18n/index.ts（zh-CN 根文件 + locales/ 四语言，eager 加载）
// 注意：不要在这里自建 createI18n——曾因双实例导致 locales/*.ts 全部惰性、
// EN 走了过期的根目录 en.ts（N+1-⑤ 修复）
import { i18n } from './i18n'

// N+3-①：把 PrimeVue 主色映射到项目主色（violet）。
// 动机（axe 实测）：Aura 默认 primary = emerald-400，白字对比度仅 2.53:1（AA 不达标）；
// 改用 -500 档 violet（白字 5.0:1），hover/active 走 -600/-700。
const InclPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd', 400: '#a78bfa',
      500: '#7c3aed', 600: '#6d28d9', 700: '#5b21b6', 800: '#4c1d95', 900: '#3b0f7a', 950: '#2e1065',
    },
  },
})

// 挂载点：WP 插件用唯一 ID（避免与主题 id="app" 冲突）；独立/桌面版用 #app
const wpMount = document.getElementById('incl-tool-app')
const mountEl = wpMount || document.getElementById('app')
if (mountEl) {
  createApp(App)
    .use(createPinia())
    .use(i18n)
    // UI 栈（N+1-⑥，决议 5 = PrimeVue 4）：design token 三层架构（primitive/semantic/
    // component）与本项目 token 需求同构；darkModeSelector 默认 'system'，与桌面版
    // 「主题跟随系统」一致；WP 宿主样式隔离在 N+3 前必须实测。
    .use(PrimeVue, { theme: { preset: InclPreset } })
    .mount(mountEl)
} else {
  console.error('[InclusiveDesign] 未找到挂载点（#incl-tool-app 或 #app）——WP 站点请确认 shortcode 已渲染')
}
