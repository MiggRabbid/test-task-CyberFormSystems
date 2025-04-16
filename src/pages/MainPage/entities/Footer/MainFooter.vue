<template>
  <div
    class="w-full flex justify-end items-center p-4 grow-0 bg-white shrink-0 rounded-t-lg shadow-lg"
  >
    <Pagination
      v-model:page="page"
      v-model:page-size="pageSize"
      :page-count="totalPages"
      :page-sizes="pageSizes"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePostsStore } from '@/stores/postsStore'
import Pagination from '@/shared/components/Pagination/AppPagination.vue'
import { pageSizes } from '@/shared/config/pagination.config'

const postsStore = usePostsStore()

const page = computed<number>({
  get: () => postsStore.currentPage,
  set: (val) => postsStore.setCurrentPage(val),
})

const pageSize = computed<number>({
  get: () => postsStore.postsPerPage,
  set: (val) => postsStore.setPostsPerPage(val as 10 | 15 | 20),
})

const totalPages = computed<number>(() => postsStore.totalPages)
</script>
