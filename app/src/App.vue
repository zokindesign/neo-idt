<script setup lang="ts">
// App.vue — 四阶段流程壳（探究→定义→测试 + 项目管理）
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDataPackStore, useProjectStore } from '@/stores'
import ExploreView from '@/views/ExploreView.vue'
import DefineView from '@/views/DefineView.vue'
import AuditView from '@/views/AuditView.vue'
import { cloudEnabled, currentUser, signIn, signUp, signOut, ensureOrg } from '@/lib/supabase'
import { wpEnabled, wpGlobals, wpSession, wpLoadProjects } from '@/lib/wp'
import { desktopEnabled } from '@/lib/desktop'

const { t, locale } = useI18n()
const dataPack = useDataPackStore()
const projectStore = useProjectStore()

const stage = ref<'projects' | 'explore' | 'define' | 'audit'>('projects')
const sel = ref<string[]>([])
const excl = ref<[string, string][]>([])
const boundaryDoc = ref<any>(null)
const projProfile = ref<any>(null)

// 认证（仅云模式）
const user = ref<any>(null)
const wpUser = ref<any>(null)
const updateMsg = ref<string | null>(null)
const email = ref(''), password = ref('')
const authMsg = ref('')
async function refreshUser() { user.value = cloudEnabled ? await currentUser() : null }
async function doSignIn() { try { await signIn(email.value, password.value); await refreshUser(); await ensureOrg(); authMsg.value = '' } catch (e: any) { authMsg.value = e.message } }
async function doSignUp() { try { await signUp(email.value, password.value); authMsg.value = t('auth.signUp') + ' ✓'; await refreshUser() } catch (e: any) { authMsg.value = e.message } }
async function doSignOut() { await signOut(); user.value = null }

// 语言切换
const lang = computed({ get: () => locale.value, set: (v: string) => { locale.value = v; localStorage.setItem('lang', v) } })

onMounted(async () => {
  locale.value = localStorage.getItem('lang') || 'zh-CN'
  await dataPack.loadLatest()
  await projectStore.loadAll()

  // 桌面模式：双击 .inclb 启动 → 直接进审计视图打开该边界文档
  if (desktopEnabled) {
    try {
      const { invoke } = await import('@tauri-apps/api/core')
      const content = await invoke<string | null>('get_startup_file')
      if (content) {
        try { boundaryDoc.value = JSON.parse(content); stage.value = 'audit' } catch { console.warn('启动文件不是合法 JSON') }
      }
    } catch (e) { console.warn('启动文件读取失败', e) }
    // 自动更新：静默检查 → 有新版下载安装 → 重启（离线/端点未部署时静默失败）
    try {
      const { check } = await import('@tauri-apps/plugin-updater')
      const update = await check()
      if (update?.available) {
        updateMsg.value = `发现新版本 ${update.version}，正在下载…`
        await update.downloadAndInstall()
        const { relaunch } = await import('@tauri-apps/plugin-process')
        await relaunch()
      }
    } catch (e) { console.warn('更新检查跳过（离线或端点未部署）', e) }
  }

  // WP 模式：拉会话 + 合并服务器项目列表
  if (wpEnabled) {
    try {
      const s = await wpSession()
      wpUser.value = s
      const serverProjects = await wpLoadProjects()
      const localIds = new Set(projectStore.projects.map((p: any) => p.id))
      for (const sp of serverProjects) {
        if (!localIds.has(sp.id)) projectStore.projects.push(sp)
      }
    } catch (e) { console.warn('WP 会话/项目列表拉取失败', e) }
  }
  await refreshUser()
})

// ---------- 阶段流转 ----------
function toDefine(payload: any) {
  sel.value = payload.selected
  excl.value = payload.excluded
  projProfile.value = payload.profile
  stage.value = 'define'
}
function toAudit(doc: any) {
  boundaryDoc.value = doc
  stage.value = 'audit'
}
async function openProject(p: any) {
  projectStore.setCurrent(p)
  projProfile.value = p.profile
  const { getBoundariesByProject } = await import('@/lib/db')
  const docs = await getBoundariesByProject(p.id)
  if (docs.length) boundaryDoc.value = docs[0].doc
  stage.value = 'explore'
}
function newProject() {
  stage.value = 'explore'; sel.value = []; excl.value = []; boundaryDoc.value = null
  projectStore.setCurrent(null)
}

const packMeta = computed(() => (dataPack.pack as any)?.meta || {})
</script>

<template>
  <div class="shell">
    <header class="topbar">
      <h1 class="brand">{{ t('app.title') }}</h1>
      <nav class="stages">
        <button :class="{ active: stage === 'projects' }" @click="stage = 'projects'">{{ t('nav.projects') }}</button>
        <button :class="{ active: stage === 'explore' }" @click="stage = 'explore'">{{ t('nav.explore') }}</button>
        <button :disabled="!sel.length" :class="{ active: stage === 'define' }" @click="stage = 'define'">{{ t('nav.define') }}</button>
        <button :disabled="!boundaryDoc" :class="{ active: stage === 'audit' }" @click="stage = 'audit'">{{ t('nav.audit') }}</button>
      </nav>
      <div class="top-right">
        <select v-model="lang" class="mini">
          <option value="zh-CN">中文</option>
          <option value="en">EN</option>
        </select>
        <span class="badge" :class="cloudEnabled ? 'cloud' : wpEnabled ? 'cloud' : 'local'">
          {{ desktopEnabled ? t('app.desktopMode') : cloudEnabled ? t('app.cloudMode') : wpEnabled ? 'WordPress' : t('app.localMode') }}
        </span>
      </div>
    </header>

    <main>
      <section v-if="cloudEnabled && !user" class="card auth">
        <h3>{{ t('auth.signIn') }} / {{ t('auth.signUp') }}</h3>
        <div class="row">
          <input v-model="email" type="email" placeholder="email" />
          <input v-model="password" type="password" placeholder="password" />
          <button @click="doSignIn">{{ t('auth.signIn') }}</button>
          <button @click="doSignUp">{{ t('auth.signUp') }}</button>
        </div>
        <p v-if="authMsg" class="small">{{ authMsg }}</p>
      </section>
      <section v-else-if="cloudEnabled && user" class="auth-bar">
        <span class="small">{{ user.email }}</span>
        <button class="link" @click="doSignOut">{{ t('auth.signOut') }}</button>
      </section>
      <!-- WP 模式：登录走 WP 自身，只展示状态 -->
      <section v-if="wpEnabled" class="auth-bar">
        <template v-if="wpUser?.logged_in">
          <span class="small">{{ wpUser.user?.name }}（{{ wpUser.role }}）</span>
          <a class="link" :href="wpGlobals?.logoutUrl">{{ t('auth.signOut') }}</a>
        </template>
        <template v-else>
          <a class="link" :href="wpUser?.login_url || wpGlobals?.homeUrl">{{ t('auth.signIn') }} (WordPress)</a>
        </template>
      </section>
      <p v-if="!cloudEnabled && !wpEnabled" class="small hint">{{ t('auth.cloudHint') }}</p>

      <div v-if="stage === 'projects'" class="view">
        <div class="row spread">
          <h2>{{ t('project.list') }}</h2>
          <button class="primary" @click="newProject">{{ t('project.create') }}</button>
        </div>
        <p v-if="!projectStore.projects.length" class="hint">{{ t('project.empty') }}</p>
        <div v-for="p in projectStore.projects" :key="p.id" class="card proj-row">
          <div>
            <strong>{{ p.name }}</strong>
            <span class="small dim-text">{{ p.profile?.domain }} · {{ new Date(p.createdAt).toLocaleDateString() }}</span>
          </div>
          <div class="row">
            <button @click="openProject(p)">打开</button>
            <button class="danger" @click="projectStore.remove(p.id)">{{ t('common.delete') }}</button>
          </div>
        </div>
      </div>

      <ExploreView v-if="stage === 'explore'" @go-define="toDefine" />
      <DefineView v-if="stage === 'define'" :selected="sel" :excluded="excl"
                  :project-id="projectStore.current?.id" :project-profile="projProfile" @go-audit="toAudit" />
      <AuditView v-if="stage === 'audit'" :boundary-doc="boundaryDoc" />

      <p v-if="dataPack.error" class="error">{{ dataPack.error }}</p>
    </main>

    <footer class="foot">
      <span class="small">{{ packMeta.factorsCount || 0 }} factors · {{ packMeta.metricsCount || 0 }} metrics</span>
      <span v-if="updateMsg" class="small">{{ updateMsg }}</span>
      <span class="small">{{ t('footer.license') }}</span>
    </footer>
  </div>
</template>
