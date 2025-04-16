<template>
  <n-card
    class="cursor-pointer hover:shadow-lg transition-shadow duration-300"
    @click="handleClick"
  >
    <template #header>
      <h2 class="text-xl font-bold">{{ post.title }}</h2>
    </template>
    <p class="text-gray-700">{{ post.body }}</p>
  </n-card>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { IPost } from '@/types/post'

const props = defineProps<{ post: IPost }>()
const emit = defineEmits<{
  (event: 'select', postId: number): void
}>()

function handleClick(): void {
  emit('select', props.post.id)
}
</script>

<style scoped>
/* Дополнительные локальные стили можно добавить при необходимости */
</style>
