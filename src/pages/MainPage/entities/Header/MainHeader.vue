<template>
  <header
    class="w-full flex gap-4 justify-between items-center p-4 grow-0 bg-white shrink-0 rounded-b-lg shadow-sm"
  >
    <n-text tag="h1" class="w-100 text-2xl font-bold! leading-none uppercase">Список постов</n-text>
    <SearchInput v-model:modelValue="query" placeholder="Поиск постов..." @clear="onClear" />
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NText } from 'naive-ui'
import { usePostsStore } from '@/stores/postsStore'
import SearchInput from '@/shared/components/inputs/SearchInput.vue'

const postsStore = usePostsStore()

const query = computed<string>({
  get: () => postsStore.searchQuery,
  set: (val) => postsStore.setSearchQuery(val),
})

function onClear() {
  postsStore.setSearchQuery('')
}
</script>
