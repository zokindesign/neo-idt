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
import { LOCALE_DISPLAY } from '@/i18n/config'
import StageStepper from '@/components/StageStepper.vue'

const { t, te, locale } = useI18n()
const dataPack = useDataPackStore()
const projectStore = useProjectStore()

const stage = ref<'projects' | 'explore' | 'define' | 'audit'>('projects')
// FIX-P0-01：视图重建令牌。只在「新建项目/打开项目」时递增——
// 不能用 current.id 作 key：首次提交会 create() 出项目 id，导致视图被销毁重建、表单状态丢失
const viewToken = ref(0)
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
const lang = computed({ get: () => locale.value, set: (v: string) => { locale.value = v; localStorage.setItem('lang', v); document.documentElement.lang = v } })

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
  // FIX-P0-01：选择集与答案落回项目记录，「打开」时据此恢复
  projectStore.saveSelection(payload.selected, payload.excluded, payload.profile).catch((e: any) => console.warn('选择集保存失败', e))
  stage.value = 'define'
}
function toAudit(doc: any) {
  boundaryDoc.value = doc
  stage.value = 'audit'
}
// FIX-X-03：定义页一生成文档就同步到外壳——审计步立即解锁（此前须先点「Audit →」回传，
// 造成「文档已生成、步进器却仍标锁定」的自相矛盾）。不切阶段，仅登记文档。
function onGenerated(doc: any) {
  if (doc) boundaryDoc.value = doc
}
// FIX-P0-01：完整恢复工作现场——答案、档位/理由、已选因素、步进器状态
async function openProject(p: any) {
  projectStore.setCurrent(p)
  projProfile.value = p.profile || null
  const { getBoundariesByProject } = await import('@/lib/db')
  const docs = await getBoundariesByProject(p.id)
  boundaryDoc.value = docs.length ? docs[0].doc : null
  const savedSel: string[] = p.selection?.selected || []
  const savedExcl: [string, string][] = p.selection?.excluded || []
  if (!savedSel.length && boundaryDoc.value) {
    // 旧数据回退：从边界文档推导（承诺 + 未评估 = 曾在场；排除单列）
    const doc = boundaryDoc.value
    const ids = new Set<string>()
    for (const c of doc.commitments || []) ids.add(c.factor_id)
    for (const u of doc.unassessed_factors || []) ids.add(u.factor_id)
    sel.value = [...ids]
    excl.value = (doc.excluded_factors || []).map((e: any) => [e.factor_id, e.reason] as [string, string])
  } else {
    sel.value = [...savedSel]
    excl.value = [...savedExcl]
  }
  viewToken.value++   // 切项目 → 重建视图，避免残留上一个项目的表单状态
  stage.value = 'explore'
}
function newProject() {
  stage.value = 'explore'; sel.value = []; excl.value = []; boundaryDoc.value = null
  projProfile.value = null
  projectStore.setCurrent(null)
  viewToken.value++
}
// FIX-P1-07：删除护栏（两步确认，避免误删项目）
const confirmDeleteId = ref<string | null>(null)
function doDelete(id: string) {
  projectStore.remove(id)
  confirmDeleteId.value = null
}

// FIX-P2-04：顶部 Cloud/Supabase 提示可关闭并记住（不再每页常驻占用首屏）
const hintDismissed = ref(localStorage.getItem('incl-cloud-hint') === '1')
function dismissHint() {
  hintDismissed.value = true
  localStorage.setItem('incl-cloud-hint', '1')
}

// FIX-P2-03：示例任务一键载入（空状态引导，避免首次用户面对空白表单）
async function loadExample() {
  const example = {
    schema_version: '1.0',
    // FIX-i18n-01：标记为示例项目——列表显示时按当前界面语言渲染名称，
    // 换语言后仍随语言变化（存储值只作回退，不把创建时的语言固化进 UI）
    is_example: true,
    name: t('project.exampleName'),
    domain: 'digital',
    task: { category: 'health', collaboration: false, step_count: 8, has_payment_confirmation: true },
    device: { type: 'kiosk' },
    interaction: { mode: 'touch' },
    environment: { contexts: ['time-pressure', 'public-space'] },
    audience: ['elderly', 'general-public'],
  }
  const proj = await projectStore.create(example)
  projProfile.value = example
  stage.value = 'explore'
  viewToken.value++
  return proj
}

const packMeta = computed(() => (dataPack.pack as any)?.meta || {})

// FIX-P1-01：项目列表不裸露领域枚举（i18n 缺失时回退原始值，绝不显示键名）
function domainLabel(d: string): string {
  if (!d) return t('common.none')
  const k = `profile.domainOptions.${d}`
  return te(k) ? t(k) : d
}

function onStep(id: string) {
  stage.value = id as typeof stage.value
}

// N+3-②：四阶段步进器状态（完成/锁定由流程产物决定，不只靠颜色表达）
const steps = computed(() => [
  { id: 'projects', label: t('nav.projects'), done: projectStore.projects.length > 0 },
  { id: 'explore', label: t('nav.explore'), done: sel.value.length > 0 },
  // FIX-P0-01：锁定条件与完成条件不得互相矛盾（有边界文档即视为可回访定义阶段）
  { id: 'define', label: t('nav.define'), locked: !sel.value.length && !boundaryDoc.value, done: !!boundaryDoc.value },
  { id: 'audit', label: t('nav.audit'), locked: !boundaryDoc.value },
])
</script>

<template>
  <div class="shell">
    <header class="topbar">
      <h1 class="brand">{{ t('app.title') }}</h1>
      <!-- N+3-①/②：四阶段步进器（语义 ol + aria-current；锁定态 aria-disabled 保留键盘可达） -->
      <StageStepper :steps="steps" :current="stage" @select="onStep" />
      <div class="top-right">
        <select v-model="lang" class="mini" :aria-label="t('common.language') || 'Language'">
          <option v-for="(disp, code) in LOCALE_DISPLAY" :key="code" :value="code">{{ disp.flag }} {{ disp.native }}</option>
        </select>
        <span class="badge" :class="cloudEnabled ? 'cloud' : wpEnabled ? 'cloud' : 'local'">
          {{ desktopEnabled ? t('app.desktopMode') : cloudEnabled ? t('app.cloudMode') : wpEnabled ? 'WordPress' : t('app.localMode') }}
        </span>
      </div>
    </header>

    <main>
      <section v-if="cloudEnabled && !user" class="card auth">
        <h2>{{ t('auth.signIn') }} / {{ t('auth.signUp') }}</h2>
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
          <span class="small">{{ t('auth.roleFormat', { name: wpUser.user?.name, role: wpUser.role }) }}</span>
          <a class="link" :href="wpGlobals?.logoutUrl">{{ t('auth.signOut') }}</a>
        </template>
        <template v-else>
          <a class="link" :href="wpUser?.login_url || wpGlobals?.homeUrl">{{ t('auth.signIn') }} (WordPress)</a>
        </template>
      </section>
      <!-- FIX-P2-04：提示可关闭（记住状态） -->
      <p v-if="!cloudEnabled && !wpEnabled && !hintDismissed" class="small hint">
        {{ t('auth.cloudHint') }}
        <button class="link hint-dismiss" :aria-label="t('common.dismiss')" :title="t('common.dismiss')"
                @click="dismissHint">✕</button>
      </p>

      <div v-if="stage === 'projects'" class="view">
        <div class="row spread">
          <h2>{{ t('project.list') }}</h2>
          <button class="primary" @click="newProject">{{ t('project.create') }}</button>
        </div>
        <!-- FIX-P2-03：空状态给出下一步（新建 + 示例任务一键载入） -->
        <p v-if="!projectStore.projects.length" class="hint">
          {{ t('project.empty') }}
          <button class="link" @click="loadExample">{{ t('project.exampleLoad') }}</button>
        </p>
        <div v-for="p in projectStore.projects" :key="p.id" class="card proj-row">
          <div>
            <!-- FIX-i18n-01：示例项目名按当前界面语言渲染（存储名作回退） -->
            <strong>{{ p.profile?.is_example ? t('project.exampleName') : p.name }}</strong>
            <span class="small dim-text">{{ domainLabel(p.profile?.domain) }} · {{ new Date(p.createdAt).toLocaleDateString() }}</span>
          </div>
          <!-- FIX-P1-07：删除为不可逆操作，改为行内两步确认（此前直连 remove，无任何护栏） -->
          <div class="row">
            <template v-if="confirmDeleteId === p.id">
              <span class="small del-confirm">{{ t('project.confirmDelete', { name: p.profile?.is_example ? t('project.exampleName') : p.name }) }}</span>
              <button class="danger" @click="doDelete(p.id)">{{ t('common.confirm') }}</button>
              <button @click="confirmDeleteId = null">{{ t('common.cancel') }}</button>
            </template>
            <template v-else>
              <button @click="openProject(p)">{{ t('project.open') }}</button>
              <button class="danger" @click="confirmDeleteId = p.id">{{ t('common.delete') }}</button>
            </template>
          </div>
        </div>
      </div>

      <!-- FIX-P0-01：key 保证切换项目时重建视图（不残留上一个项目的表单状态）；
           打开项目时把答案/选择传回，恢复工作现场 -->
      <ExploreView v-if="stage === 'explore'" :key="'x-' + viewToken"
                   :initial-profile="projProfile" :initial-selected="sel" :initial-excluded="excl"
                   @go-define="toDefine" />
      <DefineView v-if="stage === 'define'" :key="'d-' + viewToken"
                  :selected="sel" :excluded="excl"
                  :project-id="projectStore.current?.id" :project-profile="projProfile"
                  :loaded-doc="boundaryDoc" @go-audit="toAudit" @generated="onGenerated" />
      <AuditView v-if="stage === 'audit'" :boundary-doc="boundaryDoc" />

      <p v-if="dataPack.error" class="error">{{ dataPack.error }}</p>
    </main>

    <footer class="foot">
      <!-- FIX-P2-02：页脚不再中英混排硬编码计数 -->
      <span class="small">{{ t('footer.pack', { f: packMeta.factorsCount || 0, m: packMeta.metricsCount || 0 }) }}</span>
      <span v-if="updateMsg" class="small">{{ updateMsg }}</span>
      <span class="small">{{ t('footer.license') }}</span>
    </footer>
  </div>
</template>
