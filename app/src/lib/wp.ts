// lib/wp.ts — WordPress 后端适配器（cookie 认证 + X-WP-Nonce + REST）
// 注入点：wp_localize_script('incl-app', 'INCL_WP', {...})（见插件主文件）
// 与 supabase.ts 平行：App 按 cloudEnabled / wpEnabled / local 三态选择

export interface InclWPGlobals {
  rest: string
  nonce: string
  datapackUrl: string
  loggedIn: boolean
  homeUrl: string
  logoutUrl: string
  user: { id: number; name: string }
}

export const wpGlobals = (typeof window !== 'undefined' ? (window as any).INCL_WP : undefined) as InclWPGlobals | undefined
export const wpEnabled = !!wpGlobals?.rest

async function call(path: string, init: RequestInit = {}): Promise<any> {
  const res = await fetch(wpGlobals!.rest + path, {
    ...init,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'X-WP-Nonce': wpGlobals!.nonce,
      ...(init.headers || {}),
    },
  })
  const data = await res.json().catch(() => null)
  if (!res.ok) {
    const msg = data?.message || `HTTP ${res.status}`
    throw new Error(msg)
  }
  return data
}

// ---------- 会话 ----------
export interface WPUser { logged_in: boolean; user: { id: number; name: string } | null; role: string | null; can_write: boolean; login_url: string; org_name: string }
export const wpSession = (): Promise<WPUser> => call('session')

// ---------- 项目 ----------
export async function wpLoadProjects(): Promise<any[]> {
  const rows = await call('projects')
  return rows.map((r: any) => ({
    id: r.id, name: r.name, profile: r.profile,
    createdAt: r.created_at, updatedAt: r.updated_at, synced: true,
  }))
}
export const wpCreateProject = (name: string, profile: any) =>
  call('projects', { method: 'POST', body: JSON.stringify({ name, profile }) })
export const wpUpdateProject = (id: string, name: string, profile: any) =>
  call(`projects/${id}`, { method: 'PUT', body: JSON.stringify({ name, profile }) })
export const wpDeleteProject = (id: string) => call(`projects/${id}`, { method: 'DELETE' })

// ---------- 边界文档 ----------
export const wpLoadBoundary = (projectId: string) => call(`projects/${projectId}/boundary`)
export const wpSaveBoundary = (projectId: string, doc: any) =>
  call(`projects/${projectId}/boundary`, { method: 'PUT', body: JSON.stringify({ doc }) })

// ---------- 审计（只读，owner/admin） ----------
export const wpLoadAudit = () => call('audit')
