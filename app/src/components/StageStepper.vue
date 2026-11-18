<script setup lang="ts">
// N+3-①/② 组件集：四阶段步进器
// - 语义：ol + aria-current="step"；完成态/当前态/锁定态可辨（不只靠颜色）
// - 锁定阶段用 aria-disabled 而非 disabled，保留键盘可达与读屏解释
export interface Step {
  id: string
  label: string
  locked?: boolean
  done?: boolean
}
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps<{ steps: Step[]; current: string }>()
const emit = defineEmits<{ (e: 'select', id: string): void }>()

function onSelect(s: Step) {
  if (!s.locked) emit('select', s.id)
}
</script>

<template>
  <nav class="stages" :aria-label="t('nav.stages')">
    <ol class="stepper">
      <li v-for="(s, i) in props.steps" :key="s.id"
          class="step" :class="{ active: s.id === props.current, done: s.done, locked: s.locked }">
        <button type="button"
                :aria-current="s.id === props.current ? 'step' : undefined"
                :aria-disabled="s.locked ? 'true' : undefined"
                @click="onSelect(s)">
          <span class="step-index" aria-hidden="true">{{ s.done ? '✓' : i + 1 }}</span>
          <span class="step-label">{{ s.label }}</span>
        </button>
      </li>
    </ol>
  </nav>
</template>
