<template>
  <HeaderContainer>
    <n-space class="flex justify-start items-center gap-4">
      <n-text tag="h1" class="w-fit! text-2xl font-bold! leading-none uppercase">Пост №</n-text>
      <n-tag :bordered="false" round size="large" strong class="text-2xl! font-bold!">{{
        postId
      }}</n-tag></n-space
    >
  </HeaderContainer>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { NText, NTag, NSpace } from 'naive-ui'
import HeaderContainer from '@/shared/layouts/HeaderContainer.vue'

const router = useRoute()
const postId = Number(router.params.id)
</script>
