<template>
  <PostHeader />

  <MainContainer><OpenPost /></MainContainer>

  <PostFooter />
</template>

<script setup lang="ts">
import { onBeforeUnmount, onBeforeMount } from 'vue'
import { usePostsStore } from '@/stores'
import PostHeader from './entities/Header/PostHeader.vue'
import MainContainer from '@/shared/layouts/MainContainer.vue'
import PostFooter from './entities/Footer/PostFooter.vue'
import { useRoute } from 'vue-router'
import OpenPost from '@/entities/Post/OpenPost.vue'

const route = useRoute()
const postsStore = usePostsStore()
const postId = Number(route.params.id)

onBeforeMount(() => {
  postsStore.fetchPostById(postId)
})

onBeforeUnmount(() => {
  postsStore.clearUserAndComments()
})
</script>
