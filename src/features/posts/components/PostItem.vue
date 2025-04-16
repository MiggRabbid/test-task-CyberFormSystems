<template>
  <n-card
    class="cursor-pointer hover:shadow-lg transition-shadow duration-300 rounded-lg!"
    @click="navigate"
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
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { NTag, NCard, NText } from 'naive-ui'
import type { IPost } from '@/types/post'

const router = useRouter()
const props = defineProps<{ post: IPost }>()

function navigate() {
  router.push({ name: 'PostDetails', params: { id: props.post.id } })
}
</script>
