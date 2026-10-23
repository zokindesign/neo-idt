<script setup lang="ts">
// views/AuditView.vue — F5 审计清单生成器（三层拆分 + 逐项状态机 + 验收报告）
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDataPackStore } from '@/stores'
import { useBoundaryStore } from '@/stores'
import { saveOrDownload } from '@/lib/desktop'

const props = defineProps<{ boundaryDoc: any }>()
const { t } = useI18n()
const dataPack = useDataPackStore()
const boundaryStore = useBoundaryStore()

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
  let md = `# 包容性验收报告\n\n边界文档：${props.boundaryDoc.boundary_id}\n任务：${props.boundaryDoc.task_ref}\n生成：${new Date().toISOString()}\n\n`
  md += `## 完成度\n\n${done.value}/${total.value}（仅统计，无加权总分）\n\n`
  const sections: [string, any[]][] = [
    [`## 自动检测（${t('audit.layer.auto')}）`, layers.value.auto],
    [`## 人工审计（${t('audit.layer.audit')}）`, layers.value.audit],
    [`## 用户测试（${t('audit.layer.user-test')}，${t('audit.userTestHint')}）`, layers.value.userTest],
    [`## 文字承诺`, layers.value.textOnly],
  ]
  for (const [title, items] of sections) {
    if (!items.length) continue
    md += `\n${title}\n\n| 指标 | 档位 | 承诺值 | 状态 | 备注 |\n|---|---|---|---|---|\n`
    for (const it of items) {
      const key = it.metric_id || `${it.factor_id}:text`
      const s = stateOf(key)
      md += `| ${it.metric_name || it.factor_id} | ${it.target_tier} | ${it.target_value} | ${t(`audit.status.${s.status}`)} | ${s.note.replace(/\n/g, ' ') || '—'} |\n`
    }
  }
  const fails = Object.entries(states.value).filter(([, s]) => s.status === 'fail')
  if (fails.length) {
    md += `\n## 未通过项\n\n`
    for (const [key] of fails) md += `- ${key}\n`
  }
  md += `\n> 逐项状态报告。本报告不含任何加权总分（PD-4）。\n`
  saveOrDownload('acceptance-report.md', md, 'text/markdown')
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

    <p v-if="!boundaryDoc" class="hint">{{ t('audit.boundaryMissing') }}</p>

    <template v-if="boundaryDoc">
      <div class="progress card">
        <strong>{{ t('audit.progress', { done: done, total: total }) }}</strong>
        <div class="bar" role="progressbar" :aria-valuenow="done" :aria-valuemax="total" aria-valuemin="0">
          <div class="fill" :style="{ width: total ? (done / total * 100) + '%' : '0%' }"></div>
        </div>
      </div>

      <section v-for="sec in [
          ['auto', layers.auto, 'audit.autoHint'],
          ['audit', layers.audit, ''],
          ['user-test', layers.userTest, 'audit.userTestHint'],
          ['text', layers.textOnly, ''],
        ]" :key="sec[0]" class="card">
        <h3 v-if="sec[0] !== 'text'">{{ t(`audit.layer.${sec[0]}`) }}（{{ (sec[1] as any[]).length }}）</h3>
        <h3 v-else>{{ t('define.textCommitment') }}（{{ (sec[1] as any[]).length }}）</h3>
        <p v-if="sec[2]" class="small hint">{{ t(sec[2]) }}</p>

        <div v-for="it in sec[1]" :key="it.metric_id || it.factor_id" class="audit-row">
          <div class="audit-head">
            <strong>{{ it.metric_name || it.factor_id }}</strong>
            <span class="badge">{{ it.target_tier }}</span>
            <span class="badge ev">{{ it.target_value }}</span>
          </div>
          <p v-if="it.metric?.measurement_method" class="small desc">{{ it.metric.measurement_method }}</p>
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
        <button v-if="layers.auto.length" @click="downloadAutoJson">axe JSON</button>
        <button class="primary" @click="exportReport">{{ t('audit.report') }}</button>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
export default { name: 'AuditView' }
</script>
