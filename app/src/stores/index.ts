import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 数据包 Store：加载/缓存/版本比对
export const useDataPackStore = defineStore('dataPack', () => {
  const pack = ref<any>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const currentHash = ref<string | null>(null)

  async function loadLatest() {
    loading.value = true
    error.value = null
    try {
      // 数据包 URL：WP 插件模式走插件目录，其余走应用自身 /data
      const wpg = (typeof window !== 'undefined' ? (window as any).INCL_WP : undefined)
      const url = wpg?.datapackUrl || '/data/data-pack-latest.json'
      const packRes = await fetch(url, { cache: 'no-store' })
      if (!packRes.ok) throw new Error(`数据包拉取失败: ${packRes.status}`)
      const freshPack: any = await packRes.json()

      // 3. 写入 IndexedDB 缓存（Dexie，见 db.ts）
      await saveToCache(freshPack)

      pack.value = freshPack
      currentHash.value = computeHash(JSON.stringify(freshPack))
    } catch (e: any) {
      error.value = e?.message || String(e)
      // 回退：尝试从 IndexedDB 读缓存
      const cached = await loadFromCache()
      if (cached) {
        pack.value = cached
        currentHash.value = computeHash(JSON.stringify(cached))
      }
    } finally {
      loading.value = false
    }
  }

  function computeHash(str: string): string {
    // 简易 hash（生产用 crypto.subtle 或构建期 hash）
    let h = 0
    for (let i = 0; i < str.length; i++) {
      h = (h << 5) - h + str.charCodeAt(i)
      h |= 0
    }
    return Math.abs(h).toString(16).padStart(8, '0')
  }

  // --- IndexedDB 交互（委托给 Dexie，见 db.ts） ---
  async function saveToCache(p: any) {
    const { savePack } = await import('@/lib/db')
    await savePack(p)
  }
  async function loadFromCache(): Promise<any | null> {
    const { loadPack } = await import('@/lib/db')
    return await loadPack()
  }

  // --- 便利 getters ---
  const factors = computed<any[]>(() => pack.value?.factors || [])
  const metricsByFactor = computed<Record<string, any[]>>(() => pack.value?.metricsByFactor || {})
  const actRules = computed<any[]>(() => pack.value?.rules || [])
  const standards = computed<any[]>(() => pack.value?.standards || [])

  function getFactor(id: string): any { return factors.value.find(f => f.id === id) }
  function getMetrics(factorId: string): any[] { return metricsByFactor.value[factorId] || [] }
  function getStandards(ids: string[]): any[] { return standards.value.filter(s => ids.includes(s.id)) }

  return { pack, loading, error, currentHash, loadLatest,
           factors, metricsByFactor, actRules, standards,
           getFactor, getMetrics, getStandards }
})

// 项目/Profile Store（本地+云同步）
export const useProjectStore = defineStore('project', () => {
  const projects = ref<any[]>([])
  const current = ref<any>(null)
  const syncing = ref(false)

  // 本地项目列表
  async function loadAll() {
    const { getAllProjects } = await import('@/lib/db')
    projects.value = await getAllProjects()
  }

  async function create(profile: any) {
    const { saveProject } = await import('@/lib/db')
    const proj = {
      id: crypto.randomUUID(),
      name: profile.name || '未命名项目',
      profile,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      synced: false
    }
    await saveProject(proj)
    // WP 同步（wpEnabled 时；失败不阻断本地，置 synced=false）
    try {
      const wp = await import('@/lib/wp')
      if (wp.wpEnabled) {
        await wp.wpCreateProject(proj.name, profile)
        proj.synced = true
      }
    } catch (e) { console.warn('WP 项目同步失败（本地已保存）', e) }
    projects.value.push(proj)
    current.value = proj
    return proj
  }

  async function update(proj: any) {
    const { saveProject } = await import('@/lib/db')
    proj.updatedAt = new Date().toISOString()
    proj.synced = false
    await saveProject(proj)
    try {
      const wp = await import('@/lib/wp')
      if (wp.wpEnabled) {
        await wp.wpUpdateProject(proj.id, proj.name, proj.profile)
        proj.synced = true
      }
    } catch (e) { console.warn('WP 项目同步失败（本地已保存）', e) }
    const idx = projects.value.findIndex(p => p.id === proj.id)
    if (idx >= 0) projects.value[idx] = proj
    if (current.value?.id === proj.id) current.value = proj
  }

  async function remove(id: string) {
    const { deleteProject } = await import('@/lib/db')
    await deleteProject(id)
    try {
      const wp = await import('@/lib/wp')
      if (wp.wpEnabled) await wp.wpDeleteProject(id)
    } catch (e) { console.warn('WP 项目删除同步失败', e) }
    projects.value = projects.value.filter(p => p.id !== id)
    if (current.value?.id === id) current.value = null
  }

  function setCurrent(proj: any) { current.value = proj }

  return { projects, current, syncing, loadAll, create, update, remove, setCurrent }
})

// 边界文档 + 审计 Store
export const useBoundaryStore = defineStore('boundary', () => {
  const docs = ref<any[]>([])
  const auditItems = ref<any[]>([])

  // 简化：直接用 Dexie（实际 SaaS 版会走 Supabase）
  async function saveBoundary(doc: any) {
    const { saveBoundary } = await import('@/lib/db')
    await saveBoundary(doc)
    const idx = docs.value.findIndex(d => d.id === doc.id)
    if (idx >= 0) docs.value[idx] = doc
    else docs.value.push(doc)
  }

  async function saveAuditItem(item: any) {
    const { saveAuditItem } = await import('@/lib/db')
    await saveAuditItem(item)
    const idx = auditItems.value.findIndex(i => i.id === item.id)
    if (idx >= 0) auditItems.value[idx] = item
    else auditItems.value.push(item)
  }

  return { docs, auditItems, saveBoundary, saveAuditItem }
})