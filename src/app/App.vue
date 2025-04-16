<template>
  <header
    class="w-full flex justify-end items-center p-4 grow-0 bg-white shrink-0 rounded-b-lg shadow-sm"
  >
    <div class="wrapper">App</div>
  </header>

  <MainPage />

  <PaginationFooter />
</template>

<script setup lang="ts">
import MainPage from '../pages/MainPage.vue'
import PaginationFooter from '@/entities/PaginationFooter.vue'
</script>

<style scoped></style>
