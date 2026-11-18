// kbtext.ts — 知识库数据层内容的多语言取词（FIX-i18n-01）
//
// 注册表内容的语言现状（2026-11-12 如实记录）：
//   - 名称：zh（权威）+ name_en —— 全量
//   - 指标测量方法/阈值：zh + measurement_method_en / thresholds_en —— 英文已补全
//   - 因素卡正文、facet definition、文献题录、标准标题：仅中文（题录保持源语言属学术惯例）
// 规则：zh 界面 → 中文主显 + 英文次显；en/ja/ko → 英文主显（缺失时回退中文，绝不伪造翻译）。
// ja/ko 用户通过 kb.langNote 获知内容覆盖范围；补译是独立的内容工程，不在渲染层造假。

export function isZhLocale(locale: string): boolean {
  return locale.startsWith('zh')
}

/** zh-TW 特殊：数据层 zh-CN 权威源是简体，繁体走注册表 i18n 覆盖层（i18n/zh-TW.yaml），
 *  缺项回退 zh-CN。zh-CN 与其他 zh 一律直用权威源（不查覆盖层）。 */
export function isZhTW(locale: string): boolean {
  return locale === 'zh-TW'
}

/** 名称显示对：[主显名, 次显名|null]。次显名仅在 zh 界面且与主显不同时返回。 */
export function namePair(obj: any, locale: string): [string, string | null] {
  const zh = obj?.name ?? ''
  const en = obj?.name_en ?? ''
  // FIX-i18n-05：zh-TW 先查覆盖层（繁体），缺项回退 zh-CN 权威源；次显名与 zh-CN 同为英文
  if (isZhTW(locale)) {
    const twName = obj?.i18n?.['zh-TW']?.name
    if (twName) return [twName, en && en !== twName ? en : null]
    return [zh || en, en && en !== zh ? en : null]
  }
  if (isZhLocale(locale)) return [zh || en, en && en !== zh ? en : null]
  // 非 zh：覆盖层（注册表 i18n/<lang>.yaml → 包内 obj.i18n[lang]）优先，其次 en，最后 zh
  const ov = obj?.i18n?.[locale]?.name
  return [ov || en || zh, null]
}

/** 通用字段取词：覆盖层[locale] → <base>_en → <base>（zh 权威源）。 */
export function kbField(obj: any, base: string, locale: string): string {
  if (!obj) return ''
  if (isZhTW(locale)) {
    const ov = obj?.i18n?.['zh-TW']?.[base]
    return ov ?? obj[base] ?? obj[base + '_en'] ?? ''
  }
  if (isZhLocale(locale)) return obj[base] ?? obj[base + '_en'] ?? ''
  const ov = obj?.i18n?.[locale]?.[base]
  return ov ?? obj[base + '_en'] ?? obj[base] ?? ''
}

/** 三档阈值取词（threholds / thresholds_en / 覆盖层 thresholds）。 */
export function thrField(m: any, tier: string, locale: string): string {
  if (!m || !tier) return ''
  if (isZhTW(locale)) {
    const ov = m?.i18n?.['zh-TW']?.thresholds?.[tier]
    return ov ?? m?.thresholds?.[tier] ?? m?.thresholds_en?.[tier] ?? ''
  }
  if (isZhLocale(locale)) return m?.thresholds?.[tier] ?? m?.thresholds_en?.[tier] ?? ''
  const ov = m?.i18n?.[locale]?.thresholds?.[tier]
  return ov ?? m?.thresholds_en?.[tier] ?? m?.thresholds?.[tier] ?? ''
}

/** 短语数组取词（如指南的 patterns / anti_patterns）。 */
export function listField(obj: any, base: string, locale: string): string[] {
  if (!obj) return []
  if (isZhTW(locale)) {
    const ov = obj?.i18n?.['zh-TW']?.[base]
    if (Array.isArray(ov) && ov.length) return ov
    return Array.isArray(obj[base]) ? obj[base] : []
  }
  if (isZhLocale(locale)) return Array.isArray(obj[base]) ? obj[base] : []
  const ov = obj?.i18n?.[locale]?.[base]
  if (Array.isArray(ov) && ov.length) return ov
  return Array.isArray(obj[base]) ? obj[base] : []
}

/** ja/ko 界面下知识库内容以英文回退展示，需提示覆盖范围。 */
export function needsLangNote(locale: string): boolean {
  return !isZhLocale(locale) && locale !== 'en'
}
