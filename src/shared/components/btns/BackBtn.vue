<template>
  <n-button :icon-placement="props.iconPlacement">
    <template #icon>
      <n-icon>
        <BackIcon />
      </n-icon>
    </template>
    {{ props.btnText }}
  </n-button>
</template>

<script setup lang="ts" name="BackBtn">
import { defineProps } from 'vue'
import { NButton, NIcon } from 'naive-ui'
import BackIcon from '@/assets/icons/BackIcon.vue'
type Props = {
  btnText: string
  iconPlacement?: 'left' | 'right'
  placeholder?: string
}

const props = defineProps<Props>()
</script>
