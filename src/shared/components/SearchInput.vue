<template>
  <n-input
    v-model:value="localValue"
    :placeholder="placeholder"
    clearable
    @clear="onClear"
    size="large"
    round
  >
    <template #suffix><n-icon :size="16" :component="SearchIcon" /></template
  ></n-input>
</template>

<script setup lang="ts" name="BaseSearchInput">
import { defineProps, defineEmits, computed } from 'vue'
import { NInput } from 'naive-ui'
import SearchIcon from '@/assets/icons/SearchIcon.vue'

type Props = {
  modelValue: string
  placeholder?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'clear'): void
}>()

const localValue = computed({
  get: () => props.modelValue,
  set: (val: string) => emit('update:modelValue', val),
})

function onClear() {
  emit('update:modelValue', '')
  emit('clear')
}
</script>
