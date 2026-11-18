<script setup lang="ts">
// N+3-⑤ 数据溯源面板：一个因素的「知识从哪来」——证据链 / 标准锚点 / 研究文献 / 指标与测量 / facet 证据 / 来源卡
// 数据全部来自数据包（因素卡 refs/evidence_note + 指标卡测量字段 + 标准注册表），不发明映射
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDataPackStore } from '@/stores'
import EvidenceChip from '@/components/EvidenceChip.vue'
import { isZhLocale, kbField, namePair } from '@/lib/kbtext'

const props = defineProps<{ factorId: string }>()
const { t, locale } = useI18n()
const dataPack = useDataPackStore()

// FIX-i18n-01：面板内全部数据层文本按界面语言取词
const pName = (m: any) => namePair(m, locale.value)[0]
const pEn = (m: any) => namePair(m, locale.value)[1] || ''
const pField = (m: any, k: string) => kbField(m, k, locale.value)
const joinList = (arr: any[]) => (arr || []).join(isZhLocale(locale.value) ? '、' : ', ')

const factor = computed(() => dataPack.getFactor(props.factorId))
const metrics = computed(() => dataPack.getMetrics(props.factorId))
const facets = computed(() => {
  const f = factor.value
  if (!f?.facets?.length) return []
  const all: any[] = dataPack.pack?.facets || []
  return f.facets.map((fid: string) => all.find((x: any) => x.id === fid)).filter(Boolean)
})

// STD-XXX:clause → 标准注册表行（注册表缺失时诚实降级为原始 ID）
function parseRef(ref: string): { stdId: string; clause: string } {
  const i = ref.indexOf(':')
  return i === -1 ? { stdId: ref, clause: '' } : { stdId: ref.slice(0, i), clause: ref.slice(i + 1) }
}
const stdRefs = computed(() => {
  const refs: string[] = factor.value?.refs?.standards || []
  return refs.map((r: string) => {
    const { stdId, clause } = parseRef(r)
    const std = dataPack.getStandards([stdId])[0] || null
    return { raw: r, clause, std }
  })
})
const research = computed(() => factor.value?.refs?.research || [])

// FIX-P1-01：来源卡只露文件名（去目录与扩展名），完整路径放 title——避免向用户暴露内部结构
function cardLabel(path: string): string {
  if (!path) return '—'
  const base = path.split(/[\\/]/).pop() || path
  return base.replace(/\.md$/, '')
}
</script>

<template>
  <div v-if="factor" class="prov-panel">
    <!-- 证据链 -->
    <div class="prov-sec">
      <div class="prov-head">{{ t('prov.evidence') }}</div>
      <p class="prov-line">
        <!-- FIX-i18n-02：证据说明按界面语言取词 -->
        <EvidenceChip :grade="factor.evidence" :note="pField(factor, 'evidence_note')" />
        <span>{{ pField(factor, 'evidence_note') || '—' }}</span>
      </p>
    </div>

    <!-- 标准锚点 -->
    <div v-if="stdRefs.length" class="prov-sec">
      <div class="prov-head">{{ t('prov.standards', { n: stdRefs.length }) }}</div>
      <ul class="prov-list">
        <li v-for="r in stdRefs" :key="r.raw">
          <template v-if="r.std">
            <a :href="r.std.url" target="_blank" rel="noopener noreferrer"
               :title="`${r.std.code} — ${r.std.title}`">
              {{ r.std.code }}<template v-if="r.clause"> · {{ t('prov.clause') }} {{ r.clause }}</template>
            </a>
            <span class="prov-std"> — {{ r.std.title }} <em class="en">({{ r.std.org }} · {{ r.std.edition }})</em></span>
          </template>
          <template v-else>{{ r.raw }}</template>
        </li>
      </ul>
    </div>

    <!-- 研究文献 -->
    <div v-if="research.length" class="prov-sec">
      <div class="prov-head">{{ t('prov.research', { n: research.length }) }}</div>
      <ol class="prov-list">
        <li v-for="(ref, i) in research" :key="i">{{ ref }}</li>
      </ol>
    </div>

    <!-- 指标与测量 -->
    <div v-if="metrics.length" class="prov-sec">
      <div class="prov-head">{{ t('prov.metricsTitle', { n: metrics.length }) }}</div>
      <div v-for="m in metrics" :key="m.id" class="prov-metric">
        <p class="prov-line">
          <EvidenceChip :grade="m.evidence_grade" />
          <strong>{{ pName(m) }}</strong> <em v-if="pEn(m)" class="en">{{ pEn(m) }}</em>
        </p>
        <dl>
          <dt>{{ t('prov.method') }}</dt><dd>{{ pField(m, 'measurement_method') || '—' }}</dd>
          <dt>{{ t('prov.dataSource') }}</dt><dd>{{ joinList(m.data_source) || '—' }}</dd>
          <dt>{{ t('prov.limitations') }}</dt><dd>{{ pField(m, 'limitations') || '—' }}</dd>
        </dl>
      </div>
    </div>

    <!-- facet 证据（继承说明如实展示） -->
    <div v-if="facets.length" class="prov-sec">
      <div class="prov-head">{{ t('prov.facets', { n: facets.length }) }}</div>
      <ul class="prov-list">
        <li v-for="fc in facets" :key="fc.id">
          <EvidenceChip :grade="fc.evidence" :note="pField(fc, 'evidence_note')" />
          {{ pName(fc) }} <em v-if="pEn(fc)" class="en">{{ pEn(fc) }}</em>
          <span class="prov-std"> — {{ pField(fc, 'evidence_note') }}</span>
        </li>
      </ul>
    </div>

    <!-- 来源卡（FIX-P1-01：只显示文件名，内部目录路径降级为悬停提示） -->
    <p class="prov-src">
      <span class="prov-head">{{ t('prov.sourceCard') }}</span>
      <code :title="factor.source_file">{{ cardLabel(factor.source_file) }}</code>
    </p>
  </div>
</template>
