<template>
  <div
    class="w-full flex justify-end items-center p-4 grow-0 bg-white shrink-0 rounded-t-lg shadow-lg"
  >
    <n-pagination
      v-model:page="page"
      v-model:page-size="pageSize"
      :page-count="postsStore.totalPages"
      show-size-picker
      :page-sizes="pageSizes"
      page-slot-align="right"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePostsStore } from '@/stores/postsStore'

const postsStore = usePostsStore()

const page = computed<number>({
  get: () => postsStore.currentPage,
  set: (val) => postsStore.setCurrentPage(val),
})

const pageSize = computed<number>({
  get: () => postsStore.postsPerPage,
  set: (val) => postsStore.setPostsPerPage(val as 10 | 15 | 20),
})

// Опции в «селекторе размера страницы»
const pageSizes = [
  { label: '10 постов', value: 10 },
  { label: '15 постов', value: 15 },
  { label: '20 постов', value: 20 },
]
</script>

<style scoped>
/* При необходимости добавьте свои Tailwind-утилиты или локальные правки */
</style>
