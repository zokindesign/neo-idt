<script setup lang="ts">
// views/DefineView.vue — F3 边界定义器（指标×三档阈值 → 边界文档 JSON）
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDataPackStore } from '@/stores'
import { useBoundaryStore } from '@/stores'
import { cloudEnabled, cloudUpsertBoundary } from '@/lib/supabase'
import { wpEnabled, wpSaveBoundary } from '@/lib/wp'
import { saveOrDownload } from '@/lib/desktop'

const props = defineProps<{ selected: string[]; excluded: [string, string][]; projectId?: string; projectProfile?: any; loadedDoc?: any }>()
const emit = defineEmits(['go-audit'])
const { t } = useI18n()
const dataPack = useDataPackStore()
const boundaryStore = useBoundaryStore()

// commitments: { factorId: { metricId: { tier, rationale } } }
const commitments = ref<Record<string, Record<string, { tier: string; rationale: string }>>>({})
const textCommitments = ref<Record<string, string>>({})

// 从已加载文档恢复
if (props.loadedDoc) {
  for (const c of props.loadedDoc.commitments || []) {
    if (c.metric_id) {
      commitments.value[c.factor_id] ??= {}
      commitments.value[c.factor_id][c.metric_id] = { tier: c.target_tier, rationale: c.rationale || '' }
    } else if (c.text) {
      textCommitments.value[c.factor_id] = c.text
    }
  }
}

const factors = computed(() =>
  (props.selected || []).map(id => dataPack.getFactor(id)).filter(Boolean)
)
const metricsOf = (fid: string) => dataPack.getMetrics(fid) || []

const tierOptions = ['minimum', 'good', 'excellent']
function defaultTier(metric: any): string {
  // 产品需求文档 §3.2：A 级证据默认 minimum；B/C 默认 good；D 默认 good
  return metric.evidence_grade === 'A' ? 'minimum' : 'good'
}
function setTier(fid: string, m: any, tier: string) {
  commitments.value[fid] ??= {}
  commitments.value[fid][m.id] = { tier, rationale: commitments.value[fid]?.[m.id]?.rationale || '' }
}

// 已配置档位的指标数
const configuredCount = computed(() => {
  let n = 0
  for (const fid of Object.keys(commitments.value)) n += Object.keys(commitments.value[fid]).length
  return n
})

// CNF 冲突提示（MVP 文本展示）
const conflicts = computed(() => {
  const list: { id: string; description: string }[] = []
  const pack: any = dataPack.pack
  for (const r of (pack?.rules?.other || [])) {
    if (r.type === 'conflict' && props.selected.includes(r.factor_a) && props.selected.includes(r.factor_b)) {
      list.push({ id: r.id, description: r.description })
    }
  }
  return list
})

// ---------- 边界文档生成（B.5 schema v1） ----------
function buildDoc() {
  const out: any[] = []
  for (const fid of props.selected) {
    const per = commitments.value[fid] || {}
    for (const mid of Object.keys(per)) {
      const m = (dataPack.getMetrics(fid) || []).find(x => x.id === mid)
      out.push({
        factor_id: fid,
        metric_id: mid,
        metric_name: m?.name,
        target_tier: per[mid].tier,
        target_value: m?.thresholds?.[per[mid].tier] || '',
        rationale: per[mid].rationale,
        evidence: m?.evidence_grade || '',
      })
    }
    if (textCommitments.value[fid]) {
      out.push({ factor_id: fid, metric_id: null, metric_name: null, target_tier: 'text', target_value: textCommitments.value[fid], rationale: '', evidence: '' })
    }
  }
  return {
    boundary_id: props.projectId ? `b-${props.projectId}` : `b-${crypto.randomUUID()}`,
    task_ref: props.projectProfile?.name || props.projectProfile?.domain || '',
    version: '1.0',
    generated_at: new Date().toISOString(),
    commitments: out,
    excluded_factors: (props.excluded || []).map(([fid, reason]) => ({ factor_id: fid, reason })),
  }
}

const generated = ref<any>(null)
async function generate() {
  const doc = buildDoc()
  generated.value = doc
  // 本地存（Dexie）
  const payload = {
    id: doc.boundary_id, projectId: props.projectId || doc.boundary_id,
    doc, version: 1, approvalStatus: 'draft',
    createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
  }
  boundaryStore.saveBoundary(payload)
  // 云同步（Supabase：触发器自动落版本快照）
  if (cloudEnabled && props.projectId) {
    try {
      const orgRow = await import('@/lib/supabase').then(m => m.sb?.from('org_members').select('org_id').limit(1))
      const orgId = orgRow?.data?.[0]?.org_id
      if (orgId) await cloudUpsertBoundary(orgId, props.projectId, doc)
    } catch (e) { console.warn('云同步失败（本地已保存）', e) }
  }
  // WP 同步（PHP 端写审计日志 + 版本快照触发器）
  if (wpEnabled && props.projectId) {
    try {
      await wpSaveBoundary(props.projectId, doc)
    } catch (e) { console.warn('WP 边界文档同步失败（本地已保存）', e) }
  }
}

// ---------- 导出（桌面 = 原生保存对话框；Web = Blob 下载） ----------
function exportJson() {
  if (generated.value) saveOrDownload('boundary-doc.json', JSON.stringify(generated.value, null, 2), 'application/json', ['json', 'inclb'])
}
function exportMd() {
  if (!generated.value) return
  const d = generated.value
  let md = `# 包容性边界文档\n\n任务：${d.task_ref}\n生成：${d.generated_at}\n版本：${d.version}\n\n## 承诺清单\n\n`
  md += '| 因素 | 指标 | 档位 | 承诺值 | 理由 | 证据 |\n|---|---|---|---|---|---|\n'
  for (const c of d.commitments) {
    md += `| ${c.factor_id} | ${c.metric_name || '（文字承诺）'} | ${c.target_tier} | ${c.target_value} | ${c.rationale || '—'} | ${c.evidence || '—'} |\n`
  }
  if (d.excluded_factors?.length) {
    md += `\n## 排除因素\n\n| 因素 | 理由 |\n|---|---|\n`
    for (const e of d.excluded_factors) md += `| ${e.factor_id} | ${e.reason} |\n`
  }
  md += `\n> 本文档为设计承诺清单，不含任何加权总分（PD-4）。\n`
  saveOrDownload('boundary-doc.md', md, 'text/markdown')
}
</script>

<template>
  <div class="view">
    <h1>{{ t('define.title') }}</h1>
    <p class="subtitle">{{ t('define.subtitle') }}</p>

    <p v-if="!factors.length" class="hint">{{ t('define.emptyHint') }}</p>

    <div v-for="f in factors" :key="f.id" class="card factor-block">
      <h3>
        <span class="badge dim">{{ f.dimension }}</span>
        {{ f.name }} <em class="en">{{ f.name_en }}</em>
        <span class="badge type">{{ t(`factor.typeMap.${f.type}`) }}</span>
      </h3>

      <div v-if="metricsOf(f.id).length">
        <p class="small">{{ t('define.metricCount', { n: metricsOf(f.id).length }) }}</p>
        <div v-for="m in metricsOf(f.id)" :key="m.id" class="metric-row">
          <div class="metric-head">
            <strong>{{ m.name }}</strong>
            <span class="badge">{{ t('audit.layer.' + m.category) }}</span>
            <span class="badge ev">{{ t('define.evidenceGrade') }} {{ m.evidence_grade }}</span>
          </div>
          <p class="small desc">{{ m.description }}</p>
          <div class="tiers">
            <label v-for="tier in tierOptions" :key="tier" class="tier" :class="{ chosen: commitments[f.id]?.[m.id]?.tier === tier }">
              <input type="radio" :name="`${f.id}-${m.id}`" :checked="commitments[f.id]?.[m.id]?.tier === tier"
                     @change="setTier(f.id, m, tier)" />
              <span class="tier-name">{{ t(`define.tiers.${tier}`) }}</span>
              <span class="tier-val">{{ m.thresholds?.[tier] || '—' }}</span>
              <small class="tier-hint">{{ t(`define.tierHint.${tier}`) }}</small>
            </label>
          </div>
          <input class="rationale" :placeholder="t('define.rationalePh')"
                 :value="commitments[f.id]?.[m.id]?.rationale || ''"
                 @input="commitments[f.id] ??= {}; commitments[f.id][m.id] ??= { tier: defaultTier(m), rationale: '' }; commitments[f.id][m.id].rationale = ($event.target as HTMLInputElement).value" />
        </div>
      </div>
      <div v-else>
        <p class="small">{{ t('define.noMetric') }}</p>
        <input class="rationale" v-model="textCommitments[f.id]" :placeholder="t('define.textCommitment')" />
      </div>
    </div>

    <div v-if="conflicts.length" class="card warn">
      <h3>⚠ 冲突提示（CNF）</h3>
      <p v-for="c in conflicts" :key="c.id" class="small">{{ c.id }}：{{ c.description }}</p>
    </div>

    <div class="actions">
      <button class="primary" :disabled="!factors.length" @click="generate">
        {{ t('define.generateDoc') }}（{{ configuredCount }}）
      </button>
      <template v-if="generated">
        <button @click="exportJson">{{ t('define.exportJson') }}</button>
        <button @click="exportMd">{{ t('define.exportMd') }}</button>
        <button class="primary" @click="$emit('go-audit', generated)">{{ t('nav.audit') }} →</button>
      </template>
    </div>
    <p v-if="generated" class="ok">✓ {{ t('define.generated') }}（{{ generated.commitments.length }} 项承诺）</p>
  </div>
</template>

<script lang="ts">
export default { name: 'DefineView' }
</script>

