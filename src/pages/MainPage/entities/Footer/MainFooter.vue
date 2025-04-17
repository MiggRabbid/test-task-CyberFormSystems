<template>
  <FooterContainer>
    <n-space justify="end" class="w-full!">
      <Pagination
        v-model:page="page"
        v-model:page-size="pageSize"
        :page-count="totalPages"
        :page-sizes="pageSizes"
      />
    </n-space>
  </FooterContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePostsStore } from '@/stores'
import Pagination from '@/shared/components/AppPagination.vue'
import { pageSizes } from '@/shared/config/pagination.config'
import FooterContainer from '@/shared/layouts/FooterContainer.vue'

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
