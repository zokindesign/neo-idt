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

// --- DataPack ---
export async function savePack(pack: any) {
  const hash = hashPack(pack)
  await db.dataPacks.put({ hash, data: pack, savedAt: new Date() })
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
  await db.projects.put(proj)
}

export async function deleteProject(id: string) {
  await db.projects.delete(id)
}

// --- Boundary Docs ---
export async function saveBoundary(doc: BoundaryDoc) {
  await db.boundaryDocs.put(doc)
}

export async function getBoundary(id: string): Promise<BoundaryDoc | undefined> {
  return await db.boundaryDocs.get(id)
}

export async function getBoundariesByProject(projectId: string): Promise<BoundaryDoc[]> {
  return await db.boundaryDocs.where('projectId').equals(projectId).toArray()
}

// --- Audit Items ---
export async function saveAuditItem(item: AuditItem) {
  await db.auditItems.put(item)
}

export async function getAuditItems(boundaryId: string): Promise<AuditItem[]> {
  return await db.auditItems.where('boundaryId').equals(boundaryId).toArray()
}