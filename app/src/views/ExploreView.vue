<script setup lang="ts">
// views/ExploreView.vue — F1 任务描述器 + F2 因素推荐器
import { ref, computed, reactive, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDataPackStore } from '@/stores'
import { useProjectStore } from '@/stores'
import { evaluateActRules } from '@/lib/ruleEngine'

const { t, tm } = useI18n()
const dataPack = useDataPackStore()
const projectStore = useProjectStore()

// vue-i18n 关键坑：t() 对对象型消息返回"键名"（如 'profile.domainOptions'）而非内容，
// v-for 遍历字符串会逐字符渲染成单字符选项。对象型下拉/多选组必须用 tm() 取原始对象。
function opt(key: string): Record<string, string> {
  const m = tm(key) as any
  return m && typeof m === 'object' && !Array.isArray(m) ? m : {}
}

const profile = reactive({
  name: '',
  domain: 'digital',
  taskCategory: '',
  device: { type: '' },
  interaction: { mode: '' },
  audience: [] as string[],
  scenario: [] as string[],
  task: { category: '' },
})
// ACT 规则读 task.category / device.type / interaction.mode —— 表单直接映射
watch(() => profile.taskCategory, v => { profile.task.category = v })

const recommendations = ref<any[]>([])
const submitted = ref(false)

// F2：规则求值（安全子集解释器，无 eval）
function runRecommend() {
  const rules = dataPack.actRules || []
  const activated = evaluateActRules(rules, {
    domain: profile.domain,
    task: { category: profile.taskCategory },
    device: { type: profile.device.type },
    interaction: { mode: profile.interaction.mode },
  })
  recommendations.value = activated
  submitted.value = true
  save()
}

// 选择状态（探索阶段的产出 → 定义阶段消费）
const selected = ref<Set<string>>(new Set())
const excluded = ref<Map<string, string>>(new Map())  // factorId → reason

function toggle(factorId: string) {
  if (selected.value.has(factorId)) selected.value.delete(factorId)
  else { selected.value.add(factorId); excluded.value.delete(factorId) }
}
function exclude(factorId: string, reason: string) {
  excluded.value.set(factorId, reason)
  selected.value.delete(factorId)
}

// 全因素浏览器
const browseOpen = ref(false)
const dimFilter = ref('ALL')
const search = ref('')
const allFactors = computed(() => dataPack.factors || [])
const filteredFactors = computed(() => allFactors.value.filter(f => {
  if (dimFilter.value !== 'ALL' && f.dimension !== dimFilter.value) return false
  if (search.value && !(f.name.includes(search.value) || f.name_en?.toLowerCase().includes(search.value.toLowerCase()))) return false
  return true
}))
const dimensions = ['WHO', 'WHERE', 'WHEN', 'WHAT', 'WHICH', 'WHY', 'HOW', 'RUL']

async function save() {
  if (!projectStore.current) {
    await projectStore.create({ ...profile })
  } else {
    projectStore.current.profile = { ...profile }
    await projectStore.update(projectStore.current)
  }
}

const factorById = computed(() => {
  const m: Record<string, any> = {}
  for (const f of allFactors.value) m[f.id] = f
  return m
})
</script>

<template>
  <div class="view">
    <h1>{{ t('profile.title') }}</h1>
    <p class="subtitle">{{ t('profile.subtitle') }}</p>

    <form class="card form" @submit.prevent="runRecommend">
      <label>
        {{ t('profile.name') }}
        <input v-model="profile.name" :placeholder="t('profile.namePh')" />
      </label>

      <div class="row">
        <label>
          {{ t('profile.domain') }}
          <select v-model="profile.domain">
            <option v-for="(label, val) in opt('profile.domainOptions')" :key="val" :value="val">{{ label }}</option>
          </select>
        </label>
        <label>
          {{ t('profile.taskCategory') }}
          <select v-model="profile.taskCategory">
            <option value="">—</option>
            <option v-for="(label, val) in opt('profile.taskCategoryOptions')" :key="val" :value="val">{{ label }}</option>
          </select>
        </label>
      </div>

      <div class="row">
        <label>
          {{ t('profile.device') }}
          <select v-model="profile.device.type">
            <option value="">—</option>
            <option v-for="(label, val) in opt('profile.deviceOptions')" :key="val" :value="val">{{ label }}</option>
          </select>
        </label>
        <label>
          {{ t('profile.interaction') }}
          <select v-model="profile.interaction.mode">
            <option value="">—</option>
            <option v-for="(label, val) in opt('profile.interactionOptions')" :key="val" :value="val">{{ label }}</option>
          </select>
        </label>
      </div>

      <fieldset>
        <legend>{{ t('profile.audience') }}</legend>
        <label v-for="(label, val) in opt('profile.audienceOptions')" :key="val" class="chip">
          <input type="checkbox" :value="val" v-model="profile.audience" /> {{ label }}
        </label>
      </fieldset>

      <fieldset>
        <legend>{{ t('profile.scenario') }}</legend>
        <label v-for="(label, val) in opt('profile.scenarioOptions')" :key="val" class="chip">
          <input type="checkbox" :value="val" v-model="profile.scenario" /> {{ label }}
        </label>
      </fieldset>

      <button type="submit" class="primary">{{ t('profile.submit') }}</button>
    </form>

    <!-- F2 推荐结果 -->
    <section v-if="submitted" class="results">
      <h2>{{ t('recommend.title') }}</h2>
      <p class="subtitle">{{ t('recommend.subtitle', { n: (dataPack.actRules || []).length }) }}</p>
      <p class="hint">{{ t('recommend.manualHint') }}</p>

      <div v-if="recommendations.length" class="card">
        <strong>{{ t('recommend.activatedCount', { n: recommendations.length }) }}</strong>
        <div v-for="rec in recommendations" :key="rec.factorId" class="factor-row" :class="{ active: selected.has(rec.factorId) }">
          <div class="factor-info">
            <input type="checkbox" :checked="selected.has(rec.factorId)" @change="toggle(rec.factorId)"
                   :aria-label="factorById[rec.factorId]?.name" />
            <span class="badge dim">{{ factorById[rec.factorId]?.dimension }}</span>
            <span>{{ factorById[rec.factorId]?.name }} <em class="en">{{ factorById[rec.factorId]?.name_en }}</em></span>
          </div>
          <div class="why">
            <small>{{ t('recommend.ruleBasedOn', { rule: rec.ruleId, desc: rec.ruleDescription }) }}</small>
            <template v-if="excluded.has(rec.factorId)">
              <small class="excluded">✗ {{ t('recommend.excluded') }}（{{ t(`recommend.excludeReasonOptions.${excluded.get(rec.factorId)}`) }}）</small>
              <button class="link" @click="toggle(rec.factorId)">{{ t('recommend.include') }}</button>
            </template>
            <template v-else-if="!selected.has(rec.factorId)">
              <select class="mini" :aria-label="t('recommend.excludeReason')" @change="exclude(rec.factorId, ($event.target as HTMLSelectElement).value)">
                <option value="">{{ t('recommend.exclude') }}…</option>
                <option value="not-applicable">{{ t('recommend.excludeReasonOptions.not-applicable') }}</option>
                <option value="defer">{{ t('recommend.excludeReasonOptions.defer') }}</option>
                <option value="low-priority">{{ t('recommend.excludeReasonOptions.low-priority') }}</option>
              </select>
            </template>
          </div>
        </div>
      </div>

      <button class="link" @click="browseOpen = !browseOpen">
        {{ browseOpen ? '▾' : '▸' }} {{ t('recommend.browseAll', { n: allFactors.length }) }}
      </button>

      <div v-if="browseOpen" class="card browser">
        <div class="row">
          <select v-model="dimFilter" :aria-label="t('common.search')">
            <option value="ALL">{{ t('common.all') }}</option>
            <option v-for="d in dimensions" :key="d" :value="d">{{ d }} · {{ t(`recommend.dimension.${d}`) }}</option>
          </select>
          <input v-model="search" :placeholder="t('common.search')" />
        </div>
        <div v-for="f in filteredFactors" :key="f.id" class="factor-row" :class="{ active: selected.has(f.id), excluded: excluded.has(f.id) }">
          <div class="factor-info">
            <input type="checkbox" :checked="selected.has(f.id)" @change="toggle(f.id)" :aria-label="f.name" />
            <span class="badge dim">{{ f.dimension }}</span>
            <span>{{ f.name }} <em class="en">{{ f.name_en }}</em></span>
            <span class="badge type">{{ t(`factor.typeMap.${f.type}`) }}</span>
          </div>
        </div>
      </div>

      <p v-if="selected.size > 0"><strong>{{ t('recommend.selected', { n: selected.size }) }}</strong></p>
      <div class="actions">
        <button class="primary" @click="$emit('go-define', { selected: [...selected], excluded: [...excluded.entries()], profile: { ...profile } })">
          {{ t('recommend.toDefine') }}
        </button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default { name: 'ExploreView', emits: ['go-define'] }
</script>
