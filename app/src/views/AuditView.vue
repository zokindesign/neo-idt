<script setup lang="ts">
// views/AuditView.vue — F5 审计清单生成器（三层拆分 + 逐项状态机 + 验收报告）
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDataPackStore } from '@/stores'
import { useBoundaryStore } from '@/stores'
import { kbField, namePair, needsLangNote, thrField } from '@/lib/kbtext'
import { saveOrDownload } from '@/lib/desktop'

const props = defineProps<{ boundaryDoc: any }>()
const { t, te, locale } = useI18n()
const dataPack = useDataPackStore()
const boundaryStore = useBoundaryStore()

// FIX-i18n-01：审计内容的语言取词。指标名/测量方法取注册表（en 已补全），
// 目标值取注册表 thresholds(_en)[tier]，无注册表条目时回退边界文档快照。
function mName(it: any): string {
  if (it?.metric) return namePair(it.metric, locale.value)[0]
  return it?.metric_name || it?.factor_id || ''
}
function mMethod(it: any): string {
  return kbField(it?.metric, 'measurement_method', locale.value)
}
function mTarget(it: any): string {
  const v = thrField(it?.metric, it?.target_tier, locale.value)
  return v || it?.target_value || ''   // 无注册表条目时回退边界文档快照
}
const langNote = computed(() => needsLangNote(locale.value))

// FIX-P1-01：档位不裸露原始枚举（此前审计清单显示 "minimum"）；i18n 缺失时回退原始值
function tierLabel(tier: string): string {
  if (!tier) return '—'
  const k = `define.tiers.${tier}`
  if (te(k)) return t(k)
  return tier === 'text' ? t('define.textCommit') : tier
}

interface AuditState { status: 'pending' | 'pass' | 'fail' | 'partial'; note: string; links: string }

// 逐项状态（key = metric_id 或 factor_id:text）
const states = ref<Record<string, AuditState>>({})
function stateOf(key: string): AuditState {
  if (!states.value[key]) states.value[key] = { status: 'pending', note: '', links: '' }
  return states.value[key]
}

// 三层拆分
const layers = computed(() => {
  const auto: any[] = [], audit: any[] = [], userTest: any[] = [], textOnly: any[] = []
  for (const c of props.boundaryDoc?.commitments || []) {
    if (!c.metric_id) { textOnly.push(c); continue }
    const m = (dataPack.getMetrics(c.factor_id) || []).find(x => x.id === c.metric_id)
    const item = { ...c, metric: m }
    if (m?.category === 'auto') auto.push(item)
    else if (m?.category === 'user-test') userTest.push(item)
    else audit.push(item)
  }
  return { auto, audit, userTest, textOnly }
})

const done = computed(() => Object.values(states.value).filter(s => s.status !== 'pending').length)
const total = computed(() => (props.boundaryDoc?.commitments || []).length)

function setStatus(key: string, status: AuditState['status']) { stateOf(key).status = status }
function persist() {
  // 逐项状态存本地（cloudEnabled 时亦可同步，MVP 以本地为主）
  const items = Object.entries(states.value).map(([key, s]) => ({
    id: `${props.boundaryDoc.boundary_id}:${key}`, boundaryId: props.boundaryDoc.boundary_id,
    metricId: key, status: s.status, note: s.note, evidenceLinks: s.links.split('\n').filter(Boolean),
    updatedAt: new Date().toISOString(),
  }))
  for (const it of items) boundaryStore.saveAuditItem(it)
}

// ---------- 报告导出（Markdown，无总分 PD-4） ----------
function exportReport() {
  // FIX-i18n-01：报告随界面语言生成（此前整篇硬编码中文）
  let md = `# ${t('export.auditTitle')}\n\n${t('export.auditBoundaryId')}：${props.boundaryDoc.boundary_id}\n`
    + `${t('export.boundaryTask')}：${props.boundaryDoc.task_ref}\n${t('export.boundaryGenerated')}：${new Date().toISOString()}\n\n`
  md += `## ${t('export.auditCompletionTitle')}\n\n${t('export.auditCompletion', { done: done.value, total: total.value })}\n\n`
  const sections: [string, any[]][] = [
    [`## ${t('audit.layer.auto')}`, layers.value.auto],
    [`## ${t('audit.layer.audit')}`, layers.value.audit],
    [`## ${t('audit.layer.user-test')}，${t('audit.userTestHint')}`, layers.value.userTest],
    [`## ${t('export.auditTextOnly')}`, layers.value.textOnly],
  ]
  for (const [title, items] of sections) {
    if (!items.length) continue
    // FIX-i18n-06：表头/名称/目标值走 i18n 与注册表取词（此前表头与未通过项标题硬编码中文，
    // 指标名与目标值直接用边界文档快照，非 zh 界面导出恒为简体中文）
    md += `\n${title}\n\n${t('export.colHeadAudit')}\n|---|---|---|---|---|\n`
    for (const it of items) {
      const key = it.metric_id || `${it.factor_id}:text`
      const s = stateOf(key)
      md += `| ${mName(it)} | ${tierLabel(it.target_tier)} | ${mTarget(it)} | ${t(`audit.status.${s.status}`)} | ${s.note.replace(/\n/g, ' ') || '—'} |\n`
    }
  }
  const fails = Object.entries(states.value).filter(([, s]) => s.status === 'fail')
  if (fails.length) {
    md += `\n## ${t('export.auditFails')}\n\n`
    for (const [key] of fails) md += `- ${key}\n`
  }
  md += `\n${t('export.pd4Audit')}\n`
  saveOrDownload('acceptance-report.md', md, 'text/markdown')
}

// FIX-P2-09：证据包导出——把"结论 + 判定状态 + 知识库版本"打成一个可归档文件，
// 使报告可被第三方复核（PD-4：只含计数与逐项状态，无加权总分）
function exportEvidencePack() {
  const pk: any = dataPack.pack || {}
  const payload = {
    schema: 'incl-evidence-pack/1.0',
    exported_at: new Date().toISOString(),
    data_pack: { version: pk.version, generatedAt: pk.generatedAt, meta: pk.meta || {} },
    boundary_document: props.boundaryDoc,
    audit_states: states.value,
  }
  saveOrDownload(
    `evidence-pack-${props.boundaryDoc?.boundary_id || 'doc'}.json`,
    JSON.stringify(payload, null, 2),
    'application/json'
  )
}

function downloadAutoJson() {
  // auto 层导出给 axe 类工具（结构化输入）
  const items = layers.value.auto.map(it => ({
    metric_id: it.metric_id, factor_id: it.factor_id, target_tier: it.target_tier,
    target_value: it.target_value, measurement: it.metric?.measurement_method || '',
  }))
  saveOrDownload('auto-checklist.json', JSON.stringify({ boundary: props.boundaryDoc.boundary_id, items }, null, 2), 'application/json')
}
</script>

<template>
  <div class="view">
    <h1>{{ t('audit.title') }}</h1>
    <p class="subtitle">{{ t('audit.subtitle') }}</p>
    <!-- FIX-i18n-01：ja/ko 界面下知识库内容以英文回退 -->
    <p v-if="langNote" class="small field-hint">{{ t('kb.langNote') }}</p>

    <p v-if="!boundaryDoc" class="hint">{{ t('audit.boundaryMissing') }}</p>

    <template v-if="boundaryDoc">
      <div class="progress card">
        <strong>{{ t('audit.progress', { done: done, total: total }) }}</strong>
        <!-- N+3-④：progressbar 必须有可访问名（axe aria-progressbar-name） -->
        <div class="bar" role="progressbar" :aria-valuenow="done" :aria-valuemax="total" aria-valuemin="0"
             :aria-label="t('audit.progress', { done: done, total: total })">
          <div class="fill" :style="{ width: total ? (done / total * 100) + '%' : '0%' }"></div>
        </div>
      </div>

      <section v-for="sec in [
          ['auto', layers.auto, 'audit.autoHint'],
          ['audit', layers.audit, ''],
          ['user-test', layers.userTest, 'audit.userTestHint'],
          ['text', layers.textOnly, ''],
        ]" :key="sec[0]" class="card">
        <!-- FIX-i18n-01：计数括号随语言（中文/日文全角，英/韩半角） -->
        <h2 v-if="sec[0] !== 'text'">{{ t('audit.layerCount', { layer: t(`audit.layer.${sec[0]}`), n: (sec[1] as any[]).length }) }}</h2>
        <h2 v-else>{{ t('audit.layerCount', { layer: t('define.textCommitment'), n: (sec[1] as any[]).length }) }}</h2>
        <p v-if="sec[2]" class="small hint">{{ t(sec[2]) }}</p>
        <!-- FIX-P1-06：提示中承诺的导出动作必须可达（此前 downloadAutoJson 已实现却无按钮调用）；空层说明原因 -->
        <div v-if="sec[0] === 'auto' && (sec[1] as any[]).length" class="row">
          <button @click="downloadAutoJson">{{ t('audit.exportAuto') }}</button>
        </div>
        <p v-else-if="sec[0] === 'auto'" class="small">{{ t('audit.autoEmpty') }}</p>

        <div v-for="it in sec[1]" :key="it.metric_id || it.factor_id" class="audit-row">
          <div class="audit-head">
            <!-- FIX-i18n-01：指标名/测量方法按界面语言取词（注册表 name_en 已全量、
                 measurement_method_en 已补全）；边界文档里的中文快照仅作回退 -->
            <strong>{{ mName(it) }}</strong>
            <span class="badge">{{ tierLabel(it.target_tier) }}</span>
            <span class="badge ev">{{ mTarget(it) }}</span>
          </div>
          <p v-if="mMethod(it)" class="small desc">{{ mMethod(it) }}</p>
          <div class="status-btns" role="group" :aria-label="t('common.confirm')">
            <button v-for="st in ['pass', 'fail', 'partial']" :key="st"
                    :class="{ chosen: stateOf(it.metric_id || it.factor_id + ':text').status === st }"
                    @click="setStatus(it.metric_id || it.factor_id + ':text', st as any)">
              {{ t(`audit.status.${st}`) }}
            </button>
          </div>
          <textarea class="note" rows="1" :placeholder="t('audit.note')"
                    v-model="stateOf(it.metric_id || it.factor_id + ':text').note"></textarea>
          <textarea class="note" rows="1" :placeholder="t('audit.evidenceLink')"
                    v-model="stateOf(it.metric_id || it.factor_id + ':text').links"></textarea>
        </div>
      </section>

      <div class="actions">
        <button @click="persist">{{ t('common.save') }}</button>
        <!-- FIX-P2-09：证据包（边界文档 + 审计状态 + 数据包版本）＝可归档的自证材料 -->
        <button @click="exportEvidencePack">{{ t('audit.exportPack') }}</button>
        <button class="primary" @click="exportReport">{{ t('audit.report') }}</button>
      </div>
      <!-- FIX-P1-06 勘误：原先此处有硬编码「axe JSON」按钮调用 downloadAutoJson，
           位置远离对应提示且标签无 i18n；已改为「自动检测」卡片内的本地化导出按钮 -->
      <p class="small field-hint">{{ t('audit.exportPackHint') }}</p>
    </template>
  </div>
</template>

<script lang="ts">
export default { name: 'AuditView' }
</script>
