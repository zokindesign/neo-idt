// lib/supabase.ts — 云同步层（可选后端；未配置时应用纯本地可用）
// 依据：ADR-006（云同步为主、本地为离线备选；开源版无配置即纯本地）
import { createClient, SupabaseClient } from '@supabase/supabase-js'

const URL = import.meta.env.VITE_SUPABASE_URL as string | undefined
const ANON = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

export const cloudEnabled = !!(URL && ANON)
export let sb: SupabaseClient | null = null
if (cloudEnabled) sb = createClient(URL!, ANON!)

// ---------- 认证 ----------
export async function signUp(email: string, password: string) {
  if (!sb) throw new Error('云未配置')
  const { data, error } = await sb.auth.signUp({ email, password })
  if (error) throw error
  return data
}
export async function signIn(email: string, password: string) {
  if (!sb) throw new Error('云未配置')
  const { data, error } = await sb.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}
export async function signOut() { if (sb) await sb.auth.signOut() }
export async function currentUser() { return sb ? (await sb.auth.getUser()).data.user : null }

// ---------- 组织 ----------
export async function ensureOrg(name?: string): Promise<string | null> {
  if (!sb) return null
  const { data, error } = await sb.rpc('bootstrap_my_org', { org_name: name || '我的团队' })
  if (error) throw error
  return data as string
}

// ---------- 项目 ----------
export async function cloudUpsertProject(orgId: string, p: any) {
  if (!sb) return
  const row = {
    id: p.id, organization_id: orgId, name: p.name,
    profile: p.profile, created_by: (await sb.auth.getUser()).data.user?.id
  }
  const { error } = await sb.from('projects').upsert(row)
  if (error) throw error
}
export async function cloudLoadProjects(orgId: string) {
  if (!sb) return []
  const { data, error } = await sb.from('projects').select('*').eq('organization_id', orgId)
  if (error) throw error
  return data || []
}

// ---------- 边界文档（触发器自动落版本快照） ----------
export async function cloudUpsertBoundary(orgId: string, projectId: string, doc: any) {
  if (!sb) return
  const me = (await sb.auth.getUser()).data.user?.id
  const existing = await sb.from('boundary_docs').select('id').eq('project_id', projectId).limit(1)
  if (existing.error) throw existing.error
  if (existing.data && existing.data.length > 0) {
    const { error } = await sb.from('boundary_docs')
      .update({ doc, created_by: me }).eq('id', existing.data[0].id)
    if (error) throw error
  } else {
    const { error } = await sb.from('boundary_docs')
      .insert({ project_id: projectId, organization_id: orgId, doc, created_by: me })
    if (error) throw error
  }
}
export async function cloudLoadBoundary(projectId: string) {
  if (!sb) return null
  const { data, error } = await sb.from('boundary_docs').select('*').eq('project_id', projectId).limit(1)
  if (error) throw error
  return data && data[0] ? data[0] : null
}
