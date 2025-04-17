<template>
  <n-card>
    <template #header>
      <h2 class="text-xl font-semibold">Комментарии ({{ comments.length }})</h2>
      <n-divider class="mb-0!" />
    </template>
    <n-list>
      <n-list-item
        v-for="(comment, index) in comments"
        :key="comment.id"
        class="w-full! flex flex-col space-y-1 py-4"
      >
        <div class="flex flex-row justify-start items-start gap-4">
          <n-tag :bordered="false" round>{{ index + 1 }}</n-tag>
          <div>
            <n-tag :bordered="false" class="w-fit gap-1">
              <n-text tag="p" strong depth="3" class="text-md font-bold">{{
                comment?.email
              }}</n-text>
            </n-tag>
            <div class="w-full! flex flex-col space-y-1 py-4">
              <n-text tag="p" strong class="text-lg font-bold">{{ comment?.name }}</n-text>
              <n-divider class="my-4!" />
              <n-text tag="p" class="text-gray-700 text-md">{{ comment?.body }}</n-text>
            </div>
          </div>
        </div>
      </n-list-item>
    </n-list>
  </n-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NCard, NText, NDivider, NList, NListItem, NTag } from 'naive-ui'
import { usePostsStore } from '@/stores'
import type { TypeComments } from '@/types/comments'

const postsStore = usePostsStore()
const comments = computed((): TypeComments => postsStore.comments)
</script>

<style scoped>
::v-deep .n-list-item__main {
  @apply w-full!;
}
</style>
