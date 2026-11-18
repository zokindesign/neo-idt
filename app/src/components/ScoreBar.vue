<script setup lang="ts">
// N+3-① 组件集：相关度分数条 + 百分比（来源着色）
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps<{ pct: number; prov: string }>()
</script>

<template>
  <span class="score-bar" :title="t('l3.score', { pct: props.pct })" role="img"
        :aria-label="t('l3.score', { pct: props.pct })">
    <span :style="{ width: props.pct + '%' }" :class="'bar-' + prov"></span>
  </span>
  <!-- FIX-P1-05：行内不再显示精确百分比（伪精度）；精确值在 L4 解释面板 -->
</template>
