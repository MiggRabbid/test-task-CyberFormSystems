<template>
  <n-card
    class="cursor-pointer hover:shadow-lg transition-shadow duration-300 rounded-lg!"
    @click="handleClick"
  >
    <div class="flex gap-4">
      <n-tag :bordered="false" round>{{ post.id }}</n-tag>
      <n-text tag="h3" strong class="text-xl font-bold">{{ post.title }}</n-text>
    </div>
    <n-divider class="my-4!" />
    <n-text class="text-gray-700">{{ post.body }}</n-text>
  </n-card>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { NCard, NText } from 'naive-ui'
import type { IPost } from '@/types/post'

const props = defineProps<{ post: IPost }>()

const emit = defineEmits<{
  (event: 'select', postId: number): void
}>()

function handleClick(): void {
  emit('select', props.post.id)
}
</script>
