// i18n/index.ts — 统一导出与实例创建
// 单一事实源：i18n 实例创建、语言加载、工具函数

import { createI18n } from 'vue-i18n'
import {
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  FALLBACK_LOCALE,
  DATETIME_FORMATS,
  NUMBER_FORMATS,
  LOCALE_DISPLAY,
  type Locale,
  type Namespace,
} from './config'

const localeModules = import.meta.glob<{ default: Record<string, any> }>('./locales/*.ts', { eager: true })

const messages: Record<string, Record<string, any>> = {}
for (const [path, module] of Object.entries(localeModules)) {
  const locale = path.match(/([a-z-]+)\.ts$/)?.[1]
  if (locale && module.default) {
    messages[locale] = module.default
  }
}

for (const locale of SUPPORTED_LOCALES) {
  if (!messages[locale]) {
    console.warn(`[i18n] 语言包缺失: ${locale}，回退到 zh-CN`)
    messages[locale] = messages['zh-CN'] || {}
  }
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: DEFAULT_LOCALE,
  fallbackLocale: FALLBACK_LOCALE,
  fallbackRoot: true,
  fallbackWarn: false,
  missingWarn: false,
  silentTranslationWarn: true,
  fallbackFormat: false,
  silentFallbackWarn: true,
  messages,
  datetimeFormats: (window as any).__DATETIME_FORMATS__ || {},
  numberFormats: (window as any).__NUMBER_FORMATS__ || {},
})

;(window as any).__DATETIME_FORMATS__ = DATETIME_FORMATS
;(window as any).__NUMBER_FORMATS__ = NUMBER_FORMATS

const g = i18n.global as any

export async function setLocale(locale: string): Promise<void> {
  if (!SUPPORTED_LOCALES.includes(locale as Locale)) {
    console.warn(`[i18n] 不支持的语言: ${locale}`)
    return
  }
  if (!messages[locale]) {
    try {
      const module = await import(`./locales/${locale}.ts`)
      messages[locale] = module.default!
      g.setLocaleMessage(locale, module.default!)
    } catch (e) {
      console.error(`[i18n] 加载语言包失败: ${locale}`, e)
      return
    }
  }
  g.locale.value = locale
  localStorage.setItem('lang', locale)
  document.documentElement.lang = locale
  document.title = g.t('app.title')
}

export function getLocale(): string {
  return g.locale.value
}

export function getSupportedLocales() {
  return SUPPORTED_LOCALES.map(locale => ({
    code: locale,
    ...LOCALE_DISPLAY[locale],
  }))
}

export function t(key: string, args?: Record<string, any>): string {
  return g.t(key, args)
}

export function te(key: string, locale?: string): boolean {
  return g.te(key, locale)
}

export function d(value: Date | number | string, options?: Intl.DateTimeFormatOptions): string {
  return g.d(value, options ?? {})
}

export function n(value: number, options?: Intl.NumberFormatOptions): string {
  return g.n(value, options ?? {})
}

export function setupI18n(app: any): void {
  app.use(i18n)

  const saved = localStorage.getItem('lang')
  if (saved && SUPPORTED_LOCALES.includes(saved as Locale)) {
    setLocale(saved).catch(console.error)
  } else {
    const browserLang = navigator.language.toLowerCase()
    const matched = SUPPORTED_LOCALES.find(l =>
      browserLang.startsWith(l.toLowerCase().replace('-', '-'))
    )
    if (matched) {
      setLocale(matched).catch(console.error)
    }
  }
}

export type { Locale, Namespace }
export { SUPPORTED_LOCALES, DEFAULT_LOCALE, FALLBACK_LOCALE, LOCALE_DISPLAY, DATETIME_FORMATS, NUMBER_FORMATS } from './config'

export default i18n
