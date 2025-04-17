<template>
  <MainHeader />
  <MainContainer>
    <PostList />
  </MainContainer>
  <MainFooter />
</template>

<script setup lang="ts">
import MainHeader from './entities/Header/MainHeader.vue'
import MainContainer from '@/shared/layouts/MainContainer.vue'
import PostList from '@/features/PostList/PostList.vue'
import MainFooter from './entities/Footer/MainFooter.vue'
</script>
