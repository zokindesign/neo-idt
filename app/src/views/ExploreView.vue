<script setup lang="ts">
// views/ExploreView.vue — F1 任务描述器 + F2 因素推荐器
import { ref, computed, reactive, watch, nextTick, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDataPackStore } from '@/stores'
import { useProjectStore } from '@/stores'
import { isZhLocale, kbField, namePair, needsLangNote } from '@/lib/kbtext'
import { evaluateActRules, evaluateExpression, computeL2Closure, computeL3Scores } from '@/lib/ruleEngine'
// N+1-⑥ UI 栈冒烟验证（决议 5 = PrimeVue 4/5）：确认主题注入与组件渲染链路；
// 描述器分步重写（N+1-② UI 部分）时将整体替换
import Button from 'primevue/button'
// N+3-① 组件集
import EvidenceChip from '@/components/EvidenceChip.vue'
import ProvenanceChip from '@/components/ProvenanceChip.vue'
import ScoreBar from '@/components/ScoreBar.vue'
import ProvenancePanel from '@/components/ProvenancePanel.vue'

// FIX-P0-01：打开既有项目时回填描述器答案与上轮选择（App 传入）
const props = defineProps<{
  initialProfile?: any
  initialSelected?: string[]
  initialExcluded?: [string, string][]
}>()

const { t, te, locale } = useI18n()
const dataPack = useDataPackStore()
const projectStore = useProjectStore()

// ---------- canonical profile（契约：schema/profile.schema.json）----------
// 字段与取值由契约锁定；表单结构由 descriptor.yaml 驱动；本组件不再手写选项清单。
const profile = reactive<any>({
  schema_version: '1.0',
  name: '',
  domain: 'digital',
  task: {
    category: '',
    collaboration: undefined,
    step_count: undefined,
    has_hard_deadline: undefined,
    deadline: undefined,
    estimated_duration: undefined,
    has_payment_confirmation: undefined,
  },
  device: { type: '' },
  interaction: { mode: '' },
  environment: { contexts: [] as string[] },
  audience: [] as string[],
})

// ---------- descriptor（数据包下发，结构即数据）----------
const stages = computed<any[]>(() => dataPack.pack?.descriptor?.stages || [])

function getVal(path: string): any {
  return path.split('.').reduce((o: any, k) => (o == null ? undefined : o[k]), profile)
}
function setVal(path: string, v: any) {
  const parts = path.split('.')
  let o: any = profile
  for (let i = 0; i < parts.length - 1; i++) {
    if (o[parts[i]] == null) o[parts[i]] = {}
    o = o[parts[i]]
  }
  o[parts[parts.length - 1]] = v
}

// applies_when 与规则条件共用同一求值器（条件语言单一来源，N+1-③）
function visible(q: any): boolean {
  if (!q.applies_when) return true
  try { return evaluateExpression(q.applies_when, profile) } catch { return true }
}
function stageVisible(s: any): boolean {
  return (s.questions || []).some((q: any) => visible(q))
}

// implies：选中写入、离开回滚（契约 description 的回滚义务在此兑现）
const appliedImplies = reactive<Record<string, { path: string; prev: any }[]>>({})
function applyImplies(q: any, val: any) {
  for (const rec of appliedImplies[q.id] || []) setVal(rec.path, rec.prev)
  appliedImplies[q.id] = []
  const o = (q.options || []).find((x: any) => String(x.value) === String(val))
  if (!o?.implies) return
  for (const [p, v] of Object.entries(o.implies)) {
    appliedImplies[q.id].push({ path: p, prev: getVal(p) })
    setVal(p, v)
  }
}

// 问题变为不可见时清空其值（防隐藏字段残留参与求值，如关掉 has_hard_deadline 后的 deadline）
function resetVal(q: any) {
  if (q.type === 'multi') {
    const cur = getVal(q.path)
    if (Array.isArray(cur) && cur.length) setVal(q.path, [])
  } else if (q.type === 'number' || q.type === 'boolean') {
    setVal(q.path, undefined)
  } else {
    setVal(q.path, '')
  }
}
watch(profile, () => {
  for (const s of stages.value) {
    for (const q of s.questions || []) {
      if (!visible(q)) resetVal(q)
    }
  }
}, { deep: true })

// ---------- 标签：i18n 优先（5 语言），descriptor 兜底 ----------
const QKEY: Record<string, string> = {
  Q_PROJECT: 'profile.name', Q_DOMAIN: 'profile.domain',
  Q_TASK_CATEGORY: 'profile.taskCategory', Q_COLLAB: 'profile.collaboration',
  Q_STEP_COUNT: 'profile.stepCount', Q_HAS_DEADLINE: 'profile.hasHardDeadline',
  Q_DEADLINE: 'profile.deadline', Q_ESTIMATED: 'profile.estimatedDuration',
  Q_DEVICE: 'profile.device', Q_INTERACTION: 'profile.interaction',
  Q_SCENARIO: 'profile.scenario', Q_AUDIENCE: 'profile.audience',
}
const OPTKEY: Record<string, string> = {
  Q_DOMAIN: 'profile.domainOptions', Q_TASK_CATEGORY: 'profile.taskCategoryOptions',
  Q_DEVICE: 'profile.deviceOptions', Q_INTERACTION: 'profile.interactionOptions',
  Q_SCENARIO: 'profile.scenarioOptions', Q_AUDIENCE: 'profile.audienceOptions',
}
// FIX-i18n-01：数据层取词（descriptor 阶段标题 / 因素与 facet 名称）
// 阶段标题：i18n 优先（5 语言全量）→ descriptor title_en（en/ja/ko）→ title（zh）
function stageTitle(s: any): string {
  const k = `profile.stages.${s?.id}`
  if (s?.id && te(k)) return t(k)
  return isZhLocale(locale.value) ? (s?.title || s?.id || '') : (s?.title_en || s?.title || s?.id || '')
}
function stageTitleEn(s: any): string {
  return isZhLocale(locale.value) && s?.title_en && s.title_en !== stageTitle(s) ? s.title_en : ''
}
function fName(f: any): string {
  return namePair(f, locale.value)[0]
}
function fEn(f: any): string {
  const [, sec] = namePair(f, locale.value)
  return sec || ''
}
// FIX-i18n-02：证据说明按界面语言取词（覆盖层 → 卡片原文）
function fEv(f: any): string {
  return kbField(f, 'evidence_note', locale.value)
}
function facetDef(fc: any): string {
  return kbField(fc, 'definition', locale.value)
}
// 模板里 locale 已自动解包，需在脚本层取 .value
function cnfDesc(c: any): string {
  return kbField(c, 'description', locale.value)
}
const langNote = computed(() => needsLangNote(locale.value))
// FIX-i18n-01：标点随语言（中文全角、其他语言半角）
const sepColon = computed(() => (isZhLocale(locale.value) ? '：' : ': '))
const sepDash = computed(() => (isZhLocale(locale.value) ? '——' : '—'))
function qlabel(q: any): string {
  const k = QKEY[q.id]
  if (k && te(k)) return t(k)
  return q.label || q.id
}
function olabel(q: any, val: any): string {
  const k = OPTKEY[q.id]
  if (k) {
    const key = `${k}.${val}`
    if (te(key)) return t(key)
  }
  const o = (q.options || []).find((x: any) => String(x.value) === String(val))
  return o?.label ?? String(val)
}

const recommendations = ref<any[]>([])
const submitted = ref(false)

// N+1-⑤：覆盖数字一律从数据包实测生成（手写数字漂移是审计教训 #3）
const actRulesCount = computed(() => (dataPack.actRules || []).length)
const actFactorCount = computed(() => new Set((dataPack.actRules || []).flatMap((r: any) => r.activates || [])).size)
const factorsTotal = computed(() => dataPack.pack?.meta?.factorsCount || allFactors.value.length)

// F2：规则求值（安全子集解释器，无 eval）——整个 canonical profile 直传引擎
function runRecommend() {
  const rules = dataPack.actRules || []
  recommendations.value = evaluateActRules(rules, profile)
  submitted.value = true
  save()
  // 提交后滚到结果区（即时跳转，不用 smooth——尊重前庭障碍用户的 reduced-motion）
  nextTick(() => document.querySelector('.results')?.scrollIntoView({ block: 'start' }))
}

// ---------- N+3-② 分步渲染：descriptor 的 stage 一次一步；applies_when 折叠仍驱动可见集合 ----------
const stepIdx = ref(0)
const visibleStages = computed(() => stages.value.filter(stageVisible))
watch(() => visibleStages.value.length, (n) => {
  if (stepIdx.value > n - 1) stepIdx.value = Math.max(0, n - 1)
})
const curStage = computed(() => visibleStages.value[stepIdx.value] || null)
const isLastStep = computed(() => stepIdx.value >= visibleStages.value.length - 1)
// 必填门禁：当前步存在必填且为空 → 下一步禁用（契约 required 字段驱动）
const curMissing = computed(() => {
  for (const q of curStage.value?.questions || []) {
    if (!visible(q) || !q.required) continue
    const v = getVal(q.path)
    if (v == null || v === '' || (Array.isArray(v) && !v.length)) return q
  }
  return null
})

// ---------- 表单事件 ----------
function setSingle(q: any, e: Event) {
  const v = (e.target as HTMLSelectElement).value
  setVal(q.path, v)
  applyImplies(q, v)
}
function setBool(q: any, e: Event) {
  setVal(q.path, (e.target as HTMLInputElement).checked)
}
function setNum(q: any, e: Event) {
  const raw = (e.target as HTMLInputElement).value
  setVal(q.path, raw === '' ? undefined : Number(raw))
}
function setText(q: any, e: Event) {
  setVal(q.path, (e.target as HTMLInputElement).value)
}
function toggleMulti(q: any, val: string, e: Event) {
  const checked = (e.target as HTMLInputElement).checked
  const cur = (getVal(q.path) as string[]) || []
  const next = checked ? [...new Set([...cur, val])] : cur.filter((v: string) => v !== val)
  setVal(q.path, next)
}

// N+2-②：L2 关系闭包——种子 = L1 激活 ∪ 用户勾选；闭包结果随勾选实时传播
const l2Result = computed(() => computeL2Closure(
  dataPack.pack?.l2Rules || [], profile,
  [...recommendations.value.map(r => r.factorId), ...selected.value]
))

// 选择状态（探索阶段的产出 → 定义阶段消费）
const selected = ref<Set<string>>(new Set(props.initialSelected || []))
const excluded = ref<Map<string, string>>(new Map(props.initialExcluded || []))  // factorId → reason

function toggle(factorId: string) {
  if (selected.value.has(factorId)) selected.value.delete(factorId)
  else { selected.value.add(factorId); excluded.value.delete(factorId) }
}
function exclude(factorId: string, reason: string) {
  excluded.value.set(factorId, reason)
  selected.value.delete(factorId)
}

// N+2-①：facet 查询（P1 试点 WHO-F-001）——展示并入 L4 解释面板
const facetsById = computed<Record<string, any>>(() => {
  const m: Record<string, any> = {}
  for (const fc of dataPack.pack?.facets || []) m[fc.id] = fc
  return m
})
function facetsOf(factorId: string): any[] {
  const f = factorById.value[factorId]
  return (f?.facets || []).map((fid: string) => facetsById.value[fid]).filter(Boolean)
}

// 过滤（L3 排序视图用）
const dimFilter = ref('ALL')
const search = ref('')
const allFactors = computed(() => dataPack.factors || [])
const dimensions = ['WHO', 'WHERE', 'WHEN', 'WHAT', 'WHICH', 'WHY', 'HOW', 'RUL']

// ---------- N+2-③ L3 全覆盖评分 + L4 解释（决议 2/3：排序取代过滤） ----------
const l3Weights = reactive({ coverage: 1, frequency: 1, effort: 1 })
const l3Rows = computed<any[]>(() => computeL3Scores({
  factors: allFactors.value,
  l1Activated: recommendations.value,
  l2Added: l2Result.value.added,
  facets: dataPack.pack?.facets || [],
  profile,
  weights: l3Weights,
}))
const inferredCount = computed(() => l3Rows.value.filter(r => r.confidence === 'low').length)
const whyOpen = ref<Set<string>>(new Set())
// N+3-⑤ 溯源面板开关（与 L4「为什么」并列：为什么排这么前 vs 知识从哪来）
const provOpen = ref<Set<string>>(new Set())
function toggleProv(id: string) {
  const s = new Set(provOpen.value)
  if (s.has(id)) s.delete(id)
  else s.add(id)
  provOpen.value = s
}
function toggleWhy(id: string) {
  const s = new Set(whyOpen.value)
  if (s.has(id)) s.delete(id)
  else s.add(id)
  whyOpen.value = s
}
// FIX-P1-05：相关度分档（替代 1% 级伪精度——低置信行不再呈现精确百分比，
// 精确数字降级到 L4 面板并附权重说明）
function band(row: any): 'high' | 'mid' | 'low' {
  const p = row?.pct ?? 0
  return p >= 66 ? 'high' : p >= 40 ? 'mid' : 'low'
}
// FIX-P2-08：权重重置（回到等权默认）
function resetWeights() {
  l3Weights.coverage = 1
  l3Weights.frequency = 1
  l3Weights.effort = 1
}
const showAllRows = ref(false)
const filteredL3Rows = computed<any[]>(() => l3Rows.value.filter(row => {
  const f = factorById.value[row.factorId]
  if (!f) return false
  if (dimFilter.value !== 'ALL' && f.dimension !== dimFilter.value) return false
  if (search.value && !(f.name.includes(search.value) || f.name_en?.toLowerCase().includes(search.value.toLowerCase()))) return false
  return true
}))
const visibleL3Rows = computed<any[]>(() =>
  showAllRows.value ? filteredL3Rows.value : filteredL3Rows.value.slice(0, 12))

// L4 解释行（本地化在此组装；引擎只回结构化数据）
function whyLines(row: any): string[] {
  const f = factorById.value[row.factorId]
  const lines: string[] = []
  for (const rid of row.l1Rules) lines.push(t('l4.ruleHit', { rule: rid }))
  for (const v of row.l2Via) {
    lines.push(t('l4.relVia', { rule: v.rule, rel: t(`l2.rel.${v.rel}`), from: factorById.value[v.from]?.name || v.from }))
  }
  for (const fid of row.facetHits) lines.push(t('l4.facetHit', { facet: facetsById.value[fid]?.name || fid }))
  // FIX-P1-05：精确分数只在解释面板出现，并说明它不是合规结论
  lines.push(t('l4.scoreLine', { pct: row.pct }))
  lines.push(t('l4.weights', {
    c: t(`l3.wlv.${row.weights.coverage}`),
    f: t(`l3.wlv.${row.weights.frequency}`),
    e: t(`l3.wlv.${row.weights.effort}`),
  }))
  lines.push(t('l4.evidence', { grade: row.evidence, note: f ? kbField(f, 'evidence_note', locale.value) : '' }))
  if (excluded.value.has(row.factorId)) {
    lines.push(t('l4.excluded', { reason: t(`recommend.excludeReasonOptions.${excluded.value.get(row.factorId)}`) }))
  }
  return lines
}

function snapshot(): any { return JSON.parse(JSON.stringify(profile)) }

async function save() {
  if (!projectStore.current) {
    await projectStore.create(snapshot())
  } else {
    projectStore.current.profile = snapshot()
    await projectStore.update(projectStore.current)
  }
}

const factorById = computed(() => {
  const m: Record<string, any> = {}
  for (const f of allFactors.value) m[f.id] = f
  return m
})

// ---------- FIX-P0-01：恢复工作现场 ----------
// 深合并非数组对象（保存的 profile 可能缺键或结构较旧）
function mergeProfile(dst: any, src: any) {
  for (const [k, v] of Object.entries(src || {})) {
    if (v && typeof v === 'object' && !Array.isArray(v) && dst[k] && typeof dst[k] === 'object' && !Array.isArray(dst[k])) {
      mergeProfile(dst[k], v)
    } else {
      dst[k] = v
    }
  }
}
onMounted(() => {
  const p = props.initialProfile
  if (!p || typeof p !== 'object') return
  mergeProfile(profile, p)
  // 有实际答案或选择时，直接复现上次推荐结果（不滚动，避免把表单顶出视口）
  const hasAnswers = !!(p.name || p.task?.category || p.task?.step_count != null ||
    p.device?.type || p.interaction?.mode || p.environment?.contexts?.length || p.audience?.length)
  if (hasAnswers || props.initialSelected?.length) {
    recommendations.value = evaluateActRules(dataPack.actRules || [], profile)
    submitted.value = true
  }
})
</script>

<template>
  <div class="view">
    <h1>{{ t('profile.title') }}</h1>
    <p class="subtitle">{{ t('profile.subtitle') }}</p>

    <form class="card form" @submit.prevent="runRecommend">
      <!-- N+3-② 分步步进条（aria-current=step）；applies_when 使某步整体不可见时自动收敛 -->
      <nav v-if="visibleStages.length" class="dsteps" :aria-label="t('profile.stepNav')">
        <ol>
          <li v-for="(s, i) in visibleStages" :key="s.id">
            <button type="button" :class="{ on: i === stepIdx }"
                    :aria-current="i === stepIdx ? 'step' : undefined" @click="stepIdx = i">
              <span class="dot" aria-hidden="true">{{ i + 1 }}</span>{{ stageTitle(s) }}
            </button>
          </li>
        </ol>
      </nav>
      <p v-if="curStage" class="small step-of">{{ t('profile.stepOf', { i: stepIdx + 1, n: visibleStages.length }) }}</p>

      <!-- N+1-③：结构由 descriptor.yaml 驱动（数据包下发）；标签 i18n 优先、descriptor 兜底；
           applies_when 与 implies 由同一条件求值器执行；N+3-② 起一次只渲染当前步 -->
      <section v-if="curStage" class="stage">
        <div class="stage-head">{{ stageTitle(curStage) }} <em v-if="stageTitleEn(curStage)" class="en">{{ stageTitleEn(curStage) }}</em></div>

        <template v-for="q in curStage.questions" :key="q.id">
            <!-- 文本（single 且无选项） -->
            <label v-if="visible(q) && q.type === 'single' && !(q.options && q.options.length)">
              {{ qlabel(q) }}
              <input type="text" :placeholder="q.placeholder" :value="getVal(q.path) ?? ''"
                     @input="setText(q, $event)" />
            </label>
            <!-- 单选 -->
            <label v-else-if="visible(q) && q.type === 'single'">
              {{ qlabel(q) }}
              <select :value="getVal(q.path)" @change="setSingle(q, $event)">
                <!-- FIX-P2-05：空值文案不用「—」（曾被误读为破折号分隔符） -->
                <option v-if="!q.required" value="">{{ t('profile.selectPlaceholder') }}</option>
                <option v-for="o in q.options" :key="String(o.value)" :value="o.value">{{ olabel(q, o.value) }}</option>
              </select>
            </label>
            <!-- 数字 -->
            <label v-else-if="visible(q) && q.type === 'number'">
              {{ qlabel(q) }}
              <!-- FIX-P2-05：单位作后缀（不再拿单位当占位符）、范围以文字说明 -->
              <span class="num-wrap">
                <input type="number" :min="q.min" :max="q.max"
                       :value="getVal(q.path) ?? ''" @input="setNum(q, $event)" />
                <span v-if="q.unit" class="unit">{{ q.unit }}</span>
              </span>
              <small v-if="q.min != null || q.max != null" class="field-hint">
                {{ t('profile.rangeHint', { min: q.min ?? '—', max: q.max ?? '—', unit: q.unit || '' }) }}
              </small>
            </label>
            <!-- 布尔 -->
            <label v-else-if="visible(q) && q.type === 'boolean'" class="chip">
              <input type="checkbox" :checked="getVal(q.path) === true" @change="setBool(q, $event)" />
              {{ qlabel(q) }}
            </label>
            <!-- 多选（数组） -->
            <fieldset v-else-if="visible(q) && q.type === 'multi'">
              <legend>{{ qlabel(q) }}</legend>
              <label v-for="o in q.options" :key="String(o.value)" class="chip">
                <input type="checkbox" :value="o.value"
                       :checked="(getVal(q.path) || []).includes(o.value)"
                       @change="toggleMulti(q, o.value, $event)" />
                {{ olabel(q, o.value) }}
              </label>
            </fieldset>
          </template>
      </section>

      <div class="actions form-nav">
        <button type="button" :disabled="stepIdx === 0" @click="stepIdx--">{{ t('common.back') }}</button>
        <button v-if="!isLastStep" type="button" :disabled="!!curMissing" @click="stepIdx++">{{ t('common.next') }}</button>
        <Button v-else type="submit" :label="t('profile.submit')" />
      </div>
      <p v-if="curMissing" class="small req-hint">{{ t('profile.requiredHint', { q: qlabel(curMissing) }) }}</p>
    </form>

    <!-- F2 推荐结果 -->
    <section v-if="submitted" class="results">
      <h2>{{ t('recommend.title') }}</h2>
      <p class="subtitle">{{ t('recommend.subtitle', { n: (dataPack.actRules || []).length }) }}</p>
      <p class="hint">{{ t('recommend.manualHint', { r: actRulesCount, n: actFactorCount, total: factorsTotal, low: inferredCount }) }}</p>

      <!-- 决议 3：评分权重可调 + 界面暴露（等权默认） -->
      <div class="card weight-panel">
        <strong>{{ t('l3.weightsTitle') }}</strong>
        <div class="row">
          <label v-for="k in (['coverage', 'frequency', 'effort'] as const)" :key="k" class="weight-slider">
            {{ t('l3.w.' + k) }}
            <input type="range" min="0" max="2" step="0.5" v-model.number="l3Weights[k]" />
            <span class="badge">{{ l3Weights[k] }}</span>
            <!-- FIX-P2-08：刻度（0/1/2）+ 重置按钮，数值位置随刻度对齐 -->
            <span class="sl-ticks" aria-hidden="true"><span>0</span><span>1</span><span>2</span></span>
          </label>
        </div>
        <div class="row">
          <button class="mini" @click="resetWeights">{{ t('l3.weightsReset') }}</button>
        </div>
        <small class="hint">{{ t('l3.weightsHint') }}</small>
      </div>

      <!-- N+2-② L2 冲突提示（CNF） -->
      <div v-if="l2Result.conflicts.length" class="card warn">
        <strong>⚠ {{ t('l2.conflictTitle', { n: l2Result.conflicts.length }) }}</strong>
        <p v-for="c in l2Result.conflicts" :key="c.ruleId" class="small">
          {{ c.ruleId }}{{ sepColon }}{{ fName(factorById[c.factorA]) || c.factorA }} vs {{ fName(factorById[c.factorB]) || c.factorB }} {{ sepDash }} {{ cnfDesc(c) }}
          <em class="en">{{ t('l2.priorityNote', { rule: c.priorityRule }) }}</em>
        </p>
      </div>

      <!-- L3 全覆盖排序列表：65 因素恒在，按相关性排序（决议 2） -->
      <div class="card">
        <!-- FIX-P2-06：勾选框含义显式说明（此前无列头、无提示） -->
        <p class="small field-hint">{{ t('l3.selectHint') }}</p>
        <!-- FIX-i18n-01：ja/ko 界面下知识库内容以英文回退，明示覆盖范围（不伪造翻译） -->
        <p v-if="langNote" class="small field-hint">{{ t('kb.langNote') }}</p>
        <div class="row">
          <select v-model="dimFilter" :aria-label="t('common.search')">
            <option value="ALL">{{ t('common.all') }}</option>
            <option v-for="d in dimensions" :key="d" :value="d">{{ d }} · {{ t(`recommend.dimension.${d}`) }}</option>
          </select>
          <input v-model="search" :placeholder="t('common.search')" />
          <span class="badge">{{ t('l3.sorted', { n: filteredL3Rows.length, total: factorsTotal }) }}</span>
        </div>

        <div v-for="(row, i) in visibleL3Rows" :key="row.factorId"
             class="factor-row l3-row"
             :class="{ active: selected.has(row.factorId), excluded: excluded.has(row.factorId), lowconf: row.confidence === 'low' }">
          <!-- FIX-P1-05 信息分层：主=因素名；次=来源/证据；参考=维度/分档条；操作右置 -->
          <div class="factor-info">
            <input type="checkbox" :checked="selected.has(row.factorId)" @change="toggle(row.factorId)"
                   :aria-label="fName(factorById[row.factorId])" />
            <span class="badge rank" aria-hidden="true">#{{ i + 1 }}</span>
            <span class="fname">{{ fName(factorById[row.factorId]) }}</span>
            <em v-if="fEn(factorById[row.factorId])" class="en">{{ fEn(factorById[row.factorId]) }}</em>
            <ProvenanceChip :prov="row.provenance" />
            <EvidenceChip :grade="factorById[row.factorId]?.evidence" :note="fEv(factorById[row.factorId])" />
            <span class="row-meta">
              <span class="badge dim">{{ factorById[row.factorId]?.dimension }}</span>
              <ScoreBar :pct="row.pct" :prov="row.provenance" />
              <span class="badge band" :class="'band-' + band(row)">{{ t('l3.band.' + band(row)) }}</span>
            </span>
            <span class="row-actions">
              <!-- FIX-P1-07：排除入口从面板底部前置到行内，且可一键撤销 -->
              <template v-if="excluded.has(row.factorId)">
                <span class="badge l3-excluded">{{ t('recommend.excludedTag') }}</span>
                <button class="link" @click="toggle(row.factorId)">{{ t('recommend.undoExclude') }}</button>
              </template>
              <select v-else class="mini" :aria-label="t('recommend.excludeReason')"
                      @change="exclude(row.factorId, ($event.target as HTMLSelectElement).value)">
                <option value="">{{ t('recommend.exclude') }}…</option>
                <option value="not-applicable">{{ t('recommend.excludeReasonOptions.not-applicable') }}</option>
                <option value="defer">{{ t('recommend.excludeReasonOptions.defer') }}</option>
                <option value="low-priority">{{ t('recommend.excludeReasonOptions.low-priority') }}</option>
              </select>
              <button class="link facet-toggle" :aria-expanded="whyOpen.has(row.factorId)" @click="toggleWhy(row.factorId)">
                {{ whyOpen.has(row.factorId) ? '▾' : '▸' }} {{ t('l3.why') }}
              </button>
              <button class="link prov-toggle" :aria-expanded="provOpen.has(row.factorId)" @click="toggleProv(row.factorId)">
                {{ provOpen.has(row.factorId) ? '▾' : '▸' }} {{ t('prov.open') }}
              </button>
            </span>
          </div>
          <!-- L4 解释面板：为什么排这么前（规则/关系/facet/权重/证据/置信） -->
          <div v-if="whyOpen.has(row.factorId)" class="why-panel">
            <ul>
              <li v-for="(line, li) in whyLines(row)" :key="li">{{ line }}</li>
            </ul>
            <div v-if="facetsOf(row.factorId).length" class="facet-list">
              <div v-for="fc in facetsOf(row.factorId)" :key="fc.id" class="facet-row">
                <span class="badge dim">{{ fc.id.replace(/^FAC-/, '') }}</span>
                <span class="fname">{{ fName(fc) }} <em v-if="fEn(fc)" class="en">{{ fEn(fc) }}</em></span>
                <small>{{ facetDef(fc) }}</small>
                <small v-if="fc.applies_when" class="facet-when">{{ fc.applies_when }}</small>
              </div>
            </div>
            <small class="conf">{{ t('l3.confidence') }}: {{ t('l3.conf.' + row.confidence) }} — {{ t('l3.confHint.' + row.confidence) }}</small>
            <!-- 排除/撤销入口已前置到行内（FIX-P1-07） -->
          </div>
          <!-- N+3-⑤ 数据溯源面板：证据链/标准锚点/文献/指标测量/facet 继承/来源卡 -->
          <div v-if="provOpen.has(row.factorId)" class="why-panel prov-wrap">
            <ProvenancePanel :factor-id="row.factorId" />
          </div>
        </div>

        <button class="link" @click="showAllRows = !showAllRows">
          {{ showAllRows ? '▾' : '▸' }} {{ showAllRows ? t('l3.showLess') : t('l3.showAll', { n: filteredL3Rows.length }) }}
        </button>
      </div>

      <p v-if="selected.size > 0"><strong>{{ t('recommend.selected', { n: selected.size }) }}</strong></p>
      <div class="actions">
        <button class="primary" @click="$emit('go-define', { selected: [...selected], excluded: [...excluded.entries()], profile: snapshot() })">
          {{ t('recommend.toDefine') }}
        </button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default { name: 'ExploreView', emits: ['go-define'] }
</script>
