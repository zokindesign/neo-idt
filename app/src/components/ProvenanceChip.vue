<script setup lang="ts">
// N+3-① 组件集：因素来源徽章（规则命中/关系引入/情境命中/权重推断）
// prov: 'l1' | 'l2' | 'facet' | 'inferred'（与 ruleEngine L3Row.provenance 同源）
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
defineProps<{ prov: string }>()
</script>

<template>
  <span class="badge prov" :class="'prov-' + prov">{{ t('l3.prov.' + prov) }}</span>
</template>
