<template>
  <div class="p-4 w-full h-full flex justify-center items-center">
    <AppLoader v-if="isLoading" />

    <div v-if="!isLoading" class="flex w-full h-full justify-center items-center">
      <n-space v-if="postsStore.paginatedPosts.length" vertical size="large">
        <PostItem v-for="post in postsStore.paginatedPosts" :key="post.id" :post="post" />
      </n-space>

      <n-card v-else class="w-full max-w-2xl mx-auto text-center text-gray-600 rounded-lg! py-10">
        <n-text tag="h4" class="text-xl font-bold! leading-none uppercase">Посты не найдены</n-text>
      </n-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NSpace, NCard, NText } from 'naive-ui'
import { computed, onMounted } from 'vue'
import { usePostsStore } from '@/stores'
import PostItem from '@/features/posts/components/PostItem.vue'
import AppLoader from '@/shared/components/Loader/AppLoader.vue'

const postsStore = usePostsStore()

onMounted(() => {
  if (!postsStore.posts.length) {
    postsStore.fetchPosts()
  }
})

const isLoading = computed(() => postsStore.isLoading)
</script>
