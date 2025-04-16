<template>
  <n-card>
    <template #header>
      <h2 class="text-xl font-semibold">Комментарии ({{ comments.length }})</h2>
    </template>
    <n-list>
      <n-list-item
        v-for="comment in comments"
        :key="comment.id"
        class="w-full! flex flex-col space-y-1 py-4"
        wi
      >
        <div class="w-full flex flex-col gap-1">
          <n-text tag="p" strong depth="3" class="text-md font-bold">{{ comment?.email }}</n-text>
          <n-text tag="p" strong class="text-xl font-bold">{{ comment?.name }}</n-text>
        </div>
        <n-divider class="my-4!" />
        <div class="w-full flex flex-col gap-4 py-2">
          <n-text tag="p" class="text-gray-700">{{ comment?.body }}</n-text>
        </div>
      </n-list-item>
    </n-list>
  </n-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NCard, NText, NDivider, NList, NListItem } from 'naive-ui'
import { usePostsStore } from '@/stores'
import type { TypeComments } from '@/types/comments'

const postsStore = usePostsStore()
const comments = computed((): TypeComments => postsStore.comments)
</script>
