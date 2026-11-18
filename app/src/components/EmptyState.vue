<script setup lang="ts">
// N+3-① 组件集：空状态（统一文案 + 语义）
defineProps<{ text: string; hint?: string }>()
</script>

<template>
  <div class="empty-state" role="status">
    <p class="empty-text">{{ text }}</p>
    <p v-if="hint" class="empty-hint">{{ hint }}</p>
  </div>
</template>
