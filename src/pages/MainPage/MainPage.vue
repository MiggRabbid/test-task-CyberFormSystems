<template>
  <MainHeader />
  <main class="h-full w-full overflow-y-auto">
    <PostList />
  </main>
  <MainFooter />
</template>

<script setup lang="ts">
import MainHeader from './entities/Header/MainHeader.vue'
import PostList from '@/features/posts/PostList.vue'
import MainFooter from './entities/Footer/MainFooter.vue'
</script>
