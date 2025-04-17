<template>
  <AppLoader v-if="isLoading" />

  <div v-if="!isLoading" class="h-full flex flex-col gap-4">
    <div class="flex flex-col gap-10">
      <n-card>
        <div class="flex flex-row justify-start items-start gap-4">
          <n-tag :bordered="false" round class="w-fit px-4! py-4!">
            <n-text tag="p" strong depth="3" class="text-xl font-bold">Автор</n-text>
          </n-tag>
          <div class="w-full flex flex-col gap-1">
            <n-text tag="p" strong class="text-xl font-bold">{{ user?.name }}</n-text>
            <n-text tag="p" strong depth="3" class="text-md font-bold">{{ user?.email }}</n-text>
          </div>
        </div>

        <n-divider class="my-4!" />
        <div class="w-full flex flex-col gap-4 py-2">
          <n-text tag="p" strong class="text-xl font-bold">{{ post?.title }}</n-text>

          <n-text tag="p" class="text-gray-700 text-lg!">{{ post?.body }}</n-text>
        </div>
      </n-card>
    </div>
    <CommentsList />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NCard, NText, NDivider } from 'naive-ui'
import { usePostsStore } from '@/stores'
import type { IUser } from '@/types/user'
import type { IPost } from '@/types/post'
import CommentsList from '@/features/CommentsList/CommentsList.vue'
import AppLoader from '@/shared/components/AppLoader.vue'

const postsStore = usePostsStore()
const post = computed((): IPost | null => postsStore.selectedPost)
const user = computed((): IUser => postsStore.user)
const isLoading = computed((): boolean => postsStore.isLoading)
</script>
