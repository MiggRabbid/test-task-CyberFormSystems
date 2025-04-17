<template>
  <n-pagination
    v-model:page="localPage"
    v-model:page-size="localPageSize"
    :page-count="pageCount"
    show-size-picker
    :page-sizes="pageSizes"
    page-slot-align="right"
  />
</template>

<script setup name="BasePagination" lang="ts">
import { defineProps, defineEmits, computed } from 'vue'

type PageSizeOption = { label: string; value: number }

const props = defineProps<{
  page: number
  pageSize: number
  pageCount: number
  pageSizes: PageSizeOption[]
}>()

const emit = defineEmits<{
  (e: 'update:page', value: number): void
  (e: 'update:pageSize', value: number): void
}>()

const localPage = computed<number>({
  get: () => props.page,
  set: (val) => emit('update:page', val),
})

const localPageSize = computed<number>({
  get: () => props.pageSize,
  set: (val) => emit('update:pageSize', val),
})
</script>
