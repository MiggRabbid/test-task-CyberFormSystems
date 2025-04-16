<template>
  <MainHeader />
  <MainContainer>
    <PostList />
  </MainContainer>
  <MainFooter />
</template>

<script setup lang="ts">
import MainHeader from './entities/Header/MainHeader.vue'
import PostList from '@/features/posts/PostList.vue'
import MainFooter from './entities/Footer/MainFooter.vue'
import MainContainer from '@/shared/layouts/MainContainer.vue'
</script>
