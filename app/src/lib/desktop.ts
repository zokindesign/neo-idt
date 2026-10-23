// lib/desktop.ts — Tauri 2 桌面适配器（Windows 11 原生壳）
// 检测：Tauri 2 注入 window.__TAURI_INTERNALS__
// 增量能力：原生保存对话框 + 真实文件系统写入（vs 浏览器 Blob 下载）
// Web/WP/SaaS 模式下此模块的动态 chunk 永不加载（guard 保护），零开销

export const desktopEnabled =
  typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window

/**
 * 桌面：原生另存为对话框 → 写文件；Web：Blob 下载回退。
 * extensions 可选：桌面保存对话框的过滤器扩展名（如 ['json','inclb']——.inclb 注册了文件关联可双击打开）。
 * 用户取消对话框时静默返回（不视为错误）。
 */
export async function saveOrDownload(name: string, content: string, mime: string, extensions?: string[]): Promise<void> {
  if (desktopEnabled) {
    const { save } = await import('@tauri-apps/plugin-dialog')
    const { writeTextFile } = await import('@tauri-apps/plugin-fs')
    const ext = extensions || [name.split('.').pop() || 'txt']
    const path = await save({
      defaultPath: name,
      filters: [{ name, extensions: ext }],
    })
    if (!path) return // 用户取消
    await writeTextFile(path, content)
    return
  }
  // 浏览器回退
  const blob = new Blob([content], { type: mime })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = name
  a.click()
  URL.revokeObjectURL(a.href)
}
