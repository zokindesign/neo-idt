// lib/db.ts — Dexie 封装（单用户本地存储，MVP 可用；SaaS 版后续换 Supabase）
import Dexie from 'dexie'
import type { Table } from 'dexie'

interface DataPack {
  id?: number
  hash: string
  data: any
  savedAt: Date
}

interface Project {
  id?: string
  name: string
  profile: any
  // FIX-P0-01：探索阶段的选择集（本地附加字段，用于「打开」恢复工作现场）
  selection?: { selected: string[]; excluded: [string, string][] }
  createdAt: string
  updatedAt: string
  synced: boolean
}

interface BoundaryDoc {
  id?: string
  projectId: string
  organizationId?: string
  doc: any
  version: number
  // FIX-P1-08：版本历史——重新生成不再覆盖旧版本（附加字段，旧记录兼容）
  revisions?: { version: number; generated_at: string; doc: any }[]
  approvalStatus: string
  createdAt: Date
  updatedAt: Date
}

interface AuditItem {
  id?: string
  boundaryId: string
  metricId: string
  status: 'pending' | 'pass' | 'fail' | 'partial'
  note: string
  evidenceLinks: string[]
  updatedAt: Date
}

class AppDB extends Dexie {
  dataPacks!: Table<DataPack>
  projects!: Table<Project>
  boundaryDocs!: Table<BoundaryDoc>
  auditItems!: Table<AuditItem>

  constructor() {
    super('InclusiveDesignDB')
    this.version(1).stores({
      dataPacks: '++id, hash, savedAt',
      projects: 'id, name, createdAt, updatedAt, synced',
      boundaryDocs: 'id, projectId, organizationId, version, updatedAt',
      auditItems: 'id, boundaryId, metricId, status, updatedAt'
    })
  }
}

export const db = new AppDB()

// FIX-P0-01：写入前转纯对象。
// 结构化克隆拒绝 Vue/Pinia 的 reactive Proxy（Chrome 报
// "DataCloneError: #<Object> could not be cloned"），而 store 里的对象几乎都是代理
// ——该错误只在 console.warn 里，会静默丢写。所有落库路径统一走 plain()。
function plain<T>(v: T): T {
  return JSON.parse(JSON.stringify(v)) as T
}

// --- DataPack ---
export async function savePack(pack: any) {
  const hash = hashPack(pack)
  await db.dataPacks.put({ hash, data: plain(pack), savedAt: new Date() })
}

export async function loadPack(): Promise<any | null> {
  const record = await db.dataPacks.orderBy('savedAt').last()
  return record?.data || null
}

function hashPack(pack: any): string {
  const str = JSON.stringify(pack)
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i)
    h |= 0
  }
  return Math.abs(h).toString(16).padStart(8, '0')
}

// --- Projects ---
export async function getAllProjects(): Promise<Project[]> {
  return await db.projects.toArray()
}

export async function saveProject(proj: Project) {
  await db.projects.put(plain(proj))
}

export async function deleteProject(id: string) {
  await db.projects.delete(id)
}

// --- Boundary Docs ---
export async function saveBoundary(doc: BoundaryDoc) {
  await db.boundaryDocs.put(plain(doc))
}

export async function getBoundary(id: string): Promise<BoundaryDoc | undefined> {
  return await db.boundaryDocs.get(id)
}

export async function getBoundariesByProject(projectId: string): Promise<BoundaryDoc[]> {
  return await db.boundaryDocs.where('projectId').equals(projectId).toArray()
}

// --- Audit Items ---
export async function saveAuditItem(item: AuditItem) {
  await db.auditItems.put(plain(item))
}

export async function getAuditItems(boundaryId: string): Promise<AuditItem[]> {
  return await db.auditItems.where('boundaryId').equals(boundaryId).toArray()
}