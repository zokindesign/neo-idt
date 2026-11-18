<script setup lang="ts">
// views/DefineView.vue — F3 边界定义器（指标×三档阈值 → 边界文档 JSON）
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import EmptyState from '@/components/EmptyState.vue'
import EvidenceChip from '@/components/EvidenceChip.vue'
import ProvenancePanel from '@/components/ProvenancePanel.vue'
import { useDataPackStore } from '@/stores'
import { useBoundaryStore } from '@/stores'
import { kbField, namePair, needsLangNote, thrField } from '@/lib/kbtext'
import { cloudEnabled, cloudUpsertBoundary } from '@/lib/supabase'
import { wpEnabled, wpSaveBoundary } from '@/lib/wp'
import { saveOrDownload } from '@/lib/desktop'

const props = defineProps<{ selected: string[]; excluded: [string, string][]; projectId?: string; projectProfile?: any; loadedDoc?: any }>()
// FIX-X-03：生成即通过 'generated' 上报文档，让外壳立刻解锁审计步
const emit = defineEmits(['go-audit', 'generated'])
const { t, te, locale } = useI18n()
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
// N+3-③ 预览辅助：因素名解析 + 排除理由本地化（与 L4 面板同规则）
// FIX-i18n-01：名称按界面语言取词（zh 双语 / en·ja·ko 英文主显）
const factorName = (id: string) => namePair(dataPack.getFactor(id), locale.value)[0] || id
const factorEn = (id: string) => namePair(dataPack.getFactor(id), locale.value)[1] || ''
// FIX-i18n-01：指标名/说明/阈值同样按界面语言取词（注册表已含 *_en）
const langNote = computed(() => needsLangNote(locale.value))
const mName = (m: any) => namePair(m, locale.value)[0]
const mEn = (m: any) => namePair(m, locale.value)[1] || ''
const mDesc = (m: any) => kbField(m, 'description', locale.value)
// FIX-i18n-02：阈值取词统一走 thrField（覆盖层 → thresholds_en → thresholds）
function mThr(m: any, tier: string): string {
  return thrField(m, tier, locale.value) || '—'
}
// FIX-P1-01：i18n 缺失时回退原始值——绝不让键名（如 factortypeMap.constraint）出现在界面
function typeLabel(t2: string): string {
  const k = `factor.typeMap.${t2}`
  return te(k) ? t(k) : t2
}
// FIX-P1-01：task_ref 若为领域枚举，界面显示本地化名（文档内仍保留原始规范值）
function taskRefLabel(): string {
  const tr = generated.value?.task_ref || ''
  const k = `profile.domainOptions.${tr}`
  return tr && te(k) ? t(k) : (tr || '—')
}
function excludedReason(reason: string): string {
  const k = `recommend.excludeReasonOptions.${reason}`
  return reason && te(k) ? t(k) : (reason || '—')
}

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

// FIX-P0-02：已选但未配置档位的因素（有指标须至少一档；无指标须有文字承诺）
// 这些因素不能静默消失——它们在文档中如实记为「未评估因素」
const unassessed = computed(() => {
  const out: { id: string; name: string; en: string }[] = []
  for (const f of factors.value) {
    const hasTier = Object.keys(commitments.value[f.id] || {}).length > 0
    const hasText = !!(textCommitments.value[f.id] || '').trim()
    // FIX-i18n-01：未评估因素列表也按界面语言取词
    if (!hasTier && !hasText) out.push({ id: f.id, name: factorName(f.id), en: factorEn(f.id) })
  }
  return out
})

// CNF 冲突提示（MVP 文本展示；N+2-② 起读 pack.l2Rules——此前 rules.other 从未存在，面板是死代码）
const conflicts = computed(() => {
  const list: { id: string; description: string }[] = []
  const pack: any = dataPack.pack
  for (const r of (pack?.l2Rules || [])) {
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
    // FIX-P0-02：附加字段（additive-only）——已选但尚未配置的因素显式留痕，
    // 使文档能区分「忘记配」与「有意排除」；旧消费者忽略此字段即可
    unassessed_factors: unassessed.value.map(u => ({ factor_id: u.id, reason: 'not-configured' })),
  }
}

const generated = ref<any>(null)
// FIX-P1-08：版本历史（重新生成不再覆盖旧版本）
const previousRevisions = ref<{ version: number; generated_at: string; doc: any }[]>([])
async function generate() {
  const doc = buildDoc()
  generated.value = doc
  // 本地存（Dexie）——先读取既有记录，把当前版本留档为历史
  const { getBoundary } = await import('@/lib/db')
  const prev = await getBoundary(doc.boundary_id).catch(() => undefined)
  const revisions = [...(prev?.revisions || [])]
  if (prev?.doc) {
    revisions.unshift({
      version: prev.version || 1,
      generated_at: prev.doc.generated_at || '',
      doc: prev.doc,
    })
    if (revisions.length > 10) revisions.length = 10   // 上限 10 版，避免无限膨胀
  }
  previousRevisions.value = revisions
  const payload = {
    id: doc.boundary_id, projectId: props.projectId || doc.boundary_id,
    doc, version: (prev?.version || 0) + 1, revisions, approvalStatus: 'draft',
    createdAt: prev?.createdAt || new Date().toISOString(), updatedAt: new Date().toISOString(),
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
  // FIX-X-03：文档已落库，上报外壳——审计步立即解锁，不必先点「Audit →」回传
  emit('generated', doc)
}

// ---------- 导出（桌面 = 原生保存对话框；Web = Blob 下载） ----------
function exportJson() {
  if (generated.value) saveOrDownload('boundary-doc.json', JSON.stringify(generated.value, null, 2), 'application/json', ['json', 'inclb'])
}
// FIX-i18n-01：导出文档此前整篇硬编码中文——导出的系统信息必须与界面语言一致
const metricNameFor = (factorId: string, metricId?: string) => {
  const m = (dataPack.getMetrics(factorId) || []).find((x: any) => x.id === metricId)
  return m ? namePair(m, locale.value)[0] : ''
}
function exportMd() {
  if (!generated.value) return
  const d = generated.value
  let md = `# ${t('export.boundaryTitle')}\n\n${t('export.boundaryTask')}：${taskRefLabel()}\n`
    + `${t('export.boundaryGenerated')}：${d.generated_at}\n${t('export.boundaryVersion')}：${d.version}\n\n`
    + `## ${t('export.boundaryCommitments')}\n\n`
  md += `${t('export.colHead')}\n|---|---|---|---|---|---|\n`
  for (const c of d.commitments) {
    const name = metricNameFor(c.factor_id, c.metric_id) || c.metric_name || t('export.textCommitment')
    // FIX-i18n-06：目标值走注册表取词（thrField），快照只作回退——否则非 zh 界面导出的目标值恒为简体中文
    const m = metricsOf(c.factor_id).find((x: any) => x.id === c.metric_id)
    const target = thrField(m, c.target_tier, locale.value) || c.target_value || '—'
    md += `| ${factorName(c.factor_id)} | ${name} | ${t(`define.tiers.${c.target_tier}`)} | ${target} | ${c.rationale || '—'} | ${c.evidence || '—'} |\n`
  }
  if (d.excluded_factors?.length) {
    md += `\n## ${t('export.excludedTitle')}\n\n${t('export.colExcluded')}\n|---|---|\n`
    for (const e of d.excluded_factors) md += `| ${factorName(e.factor_id)} | ${excludedReason(e.reason)} |\n`
  }
  // FIX-P0-02：未评估因素如实列出（不静默省略）
  if (d.unassessed_factors?.length) {
    md += `\n## ${t('export.unassessedTitle')}\n\n${t('export.unassessedNote')}\n\n${t('export.colUnassessed')}\n|---|---|\n`
    for (const u of d.unassessed_factors) md += `| ${factorName(u.factor_id)} | ${t('export.unassessedStatus')} |\n`
  }
  md += `\n${t('export.pd4Boundary')}\n`
  saveOrDownload('boundary-doc.md', md, 'text/markdown')
}
</script>

<template>
  <div class="view">
    <h1>{{ t('define.title') }}</h1>
    <p class="subtitle">{{ t('define.subtitle') }}</p>
    <!-- FIX-i18n-01：ja/ko 界面下知识库内容以英文回退，此处同样明示覆盖范围 -->
    <p v-if="langNote" class="small field-hint">{{ t('kb.langNote') }}</p>

    <EmptyState v-if="!factors.length" :text="t('define.emptyHint')" />

    <div v-for="f in factors" :key="f.id" class="card factor-block">
      <h2>
        <span class="badge dim">{{ f.dimension }}</span>
        {{ factorName(f.id) }} <em v-if="factorEn(f.id)" class="en">{{ factorEn(f.id) }}</em>
        <span class="badge type">{{ typeLabel(f.type) }}</span>
      </h2>

      <div v-if="metricsOf(f.id).length">
        <p class="small">{{ t('define.metricCount', { n: metricsOf(f.id).length }) }}</p>
        <div v-for="m in metricsOf(f.id)" :key="m.id" class="metric-row">
          <div class="metric-head">
            <strong>{{ mName(m) }}</strong>
            <em v-if="mEn(m)" class="en">{{ mEn(m) }}</em>
            <span class="badge">{{ t('audit.layer.' + m.category) }}</span>
            <span class="badge ev">{{ t('define.evidenceGrade') }} {{ m.evidence_grade }}</span>
          </div>
          <p class="small desc">{{ mDesc(m) }}</p>
          <div class="tiers">
            <label v-for="tier in tierOptions" :key="tier" class="tier" :class="{ chosen: commitments[f.id]?.[m.id]?.tier === tier }">
              <input type="radio" :name="`${f.id}-${m.id}`" :checked="commitments[f.id]?.[m.id]?.tier === tier"
                     @change="setTier(f.id, m, tier)" />
              <span class="tier-name">{{ t(`define.tiers.${tier}`) }}</span>
              <span class="tier-val">{{ mThr(m, tier) }}</span>
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

      <!-- N+3-⑤ 数据溯源：每个因素块可展开其证据链/标准锚点/文献/指标测量 -->
      <details class="prov-details">
        <summary>{{ t('prov.title') }}</summary>
        <ProvenancePanel :factor-id="f.id" />
      </details>
    </div>

    <div v-if="conflicts.length" class="card warn">
      <h2>{{ t('define.conflictTitle') }}</h2>
      <p v-for="c in conflicts" :key="c.id" class="small">{{ c.id }}：{{ c.description }}</p>
    </div>

    <!-- FIX-P0-02：已选未配置的因素必须可见（不能静默消失） -->
    <div v-if="unassessed.length" class="card warn unassessed-card">
      <h2>{{ t('define.unassessedN', unassessed.length) }}</h2>
      <p class="small">{{ t('define.unassessedNote') }}</p>
      <ul class="unassessed-list">
        <li v-for="u in unassessed" :key="u.id">{{ u.name }} <em v-if="u.en" class="en">{{ u.en }}</em></li>
      </ul>
    </div>

    <div class="actions">
      <!-- FIX-P0-03：0 项承诺不得生成"成功"的空文档 -->
      <button class="primary" :disabled="!factors.length || configuredCount === 0" @click="generate">
        {{ t('audit.layerCount', { layer: t('define.generateDoc'), n: configuredCount }) }}
      </button>
      <template v-if="generated">
        <button @click="exportJson">{{ t('define.exportJson') }}</button>
        <button @click="exportMd">{{ t('define.exportMd') }}</button>
        <button class="primary" @click="$emit('go-audit', generated)">{{ t('nav.audit') }} →</button>
      </template>
    </div>
    <p v-if="factors.length && configuredCount === 0" class="small gen-hint">{{ t('define.generateDisabledHint') }}</p>
    <p v-if="generated" class="ok">✓ {{ t('audit.layerCount', { layer: t('define.generated'), n: t('define.generatedN', { n: generated.commitments.length }) }) }}</p>

    <!-- N+3-③ 边界文档预览：结构化视图（导出前的可读形态），原始 JSON 折叠 -->
    <section v-if="generated" class="card preview" :aria-label="t('define.previewTitle')">
      <h2>{{ t('define.previewTitle') }}</h2>
      <p class="small meta">
        {{ t('define.previewMeta', { task: taskRefLabel(), version: generated.version, time: new Date(generated.generated_at).toLocaleString() }) }}
        <!-- FIX-P1-01：不裸露完整 UUID，短号 + 悬停显示全量 -->
        <span class="badge dim" :title="generated.boundary_id">{{ generated.boundary_id.slice(0, 12) }}…</span>
      </p>

      <table v-if="generated.commitments.length" class="preview-table">
        <caption>{{ t('define.commitmentsN', generated.commitments.length) }}</caption>
        <thead>
          <tr>
            <th scope="col">{{ t('define.colFactor') }}</th>
            <th scope="col">{{ t('define.colMetric') }}</th>
            <th scope="col">{{ t('define.colTier') }}</th>
            <th scope="col">{{ t('define.colValue') }}</th>
            <th scope="col">{{ t('define.colRationale') }}</th>
            <th scope="col">{{ t('define.colEvidence') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in generated.commitments" :key="c.factor_id + '|' + (c.metric_id || 'text')">
            <td>{{ factorName(c.factor_id) }} <em v-if="factorEn(c.factor_id)" class="en">{{ factorEn(c.factor_id) }}</em></td>
            <td>{{ c.metric_name || t('define.textCommit') }}</td>
            <td>{{ c.target_tier === 'text' ? '—' : t(`define.tiers.${c.target_tier}`) }}</td>
            <td>{{ c.target_value || '—' }}</td>
            <td>{{ c.rationale || '—' }}</td>
            <td><EvidenceChip :grade="c.evidence" /></td>
          </tr>
        </tbody>
      </table>
      <p v-else class="small">{{ t('define.noCommitments') }}</p>

      <div v-if="generated.excluded_factors?.length" class="excluded-block">
        <strong>{{ t('define.excludedN', { n: generated.excluded_factors.length }) }}</strong>
        <ul>
          <li v-for="e in generated.excluded_factors" :key="e.factor_id">
            {{ factorName(e.factor_id) }} — {{ excludedReason(e.reason) }}
          </li>
        </ul>
      </div>

      <!-- FIX-P0-02：未评估因素（与文档 unassessed_factors 字段一致） -->
      <div v-if="generated.unassessed_factors?.length" class="excluded-block unassessed-block">
        <strong>{{ t('define.unassessedN', generated.unassessed_factors.length) }}</strong>
        <ul>
          <li v-for="u in generated.unassessed_factors" :key="u.factor_id">
            {{ factorName(u.factor_id) }} — {{ t('define.reasonNotConfigured') }}
          </li>
        </ul>
      </div>

      <!-- FIX-P1-08：版本历史（可分辨前后两版的规模差异） -->
      <div v-if="previousRevisions.length" class="history-block">
        <strong>{{ t('define.historyN', { n: previousRevisions.length }) }}</strong>
        <ul>
          <li v-for="r in previousRevisions" :key="r.version + r.generated_at">
            {{ t('define.historyRow', {
              version: r.version,
              time: r.generated_at ? new Date(r.generated_at).toLocaleString() : '—',
              c: (r.doc?.commitments || []).length,
              u: (r.doc?.unassessed_factors || []).length,
            }) }}
          </li>
        </ul>
      </div>

      <details class="raw-json">
        <summary>{{ t('define.rawJson') }}</summary>
        <pre><code>{{ JSON.stringify(generated, null, 2) }}</code></pre>
      </details>

      <p class="small pd4">{{ t('define.pd4Note') }}</p>
    </section>
  </div>
</template>

<script lang="ts">
export default { name: 'DefineView' }
</script>

