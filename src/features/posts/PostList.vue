<template>
  <div class="p-4">
    <n-spin v-if="postsStore.isLoading" class="flex justify-center items-center h-64" />

    <n-space v-else vertical size="large">
      <PostItem
        v-for="post in postsStore.paginatedPosts"
        :key="post.id"
        :post="post"
        @select="handlePostSelect"
      />
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { usePostsStore } from '@/stores/postsStore'
import PostItem from '@/features/posts/components/PostItem.vue'

const postsStore = usePostsStore()

onMounted(() => {
  if (!postsStore.posts.length) {
    postsStore.fetchPosts()
  }
})

function handlePostSelect(postId: number): void {
  postsStore.fetchPostById(postId)
}
</script>

<style scoped></style>
