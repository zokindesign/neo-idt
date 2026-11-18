<script setup lang="ts">
// N+3-① 组件集：证据等级徽章（A/B/C/D，token 着色：#ev-a ~ #ev-d，白字 AA 达标）
// FIX-i18n-03：aria-label 随界面语言（曾硬编码英文 `evidence ${grade}`）
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
defineProps<{ grade?: string | null; note?: string | null }>()
</script>

<template>
  <span v-if="grade" class="badge ev" :class="'ev-' + grade" :title="note || ''"
        :aria-label="t('l3.evidenceChip', { grade })">{{ grade }}</span>
</template>
