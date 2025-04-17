<template>
  <HeaderContainer>
    <n-text tag="h1" class="w-100 text-2xl font-bold! leading-none uppercase">Список постов</n-text>
    <SearchInput v-model:modelValue="query" placeholder="Поиск постов..." @clear="onClear" />
  </HeaderContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NText } from 'naive-ui'
import { usePostsStore } from '@/stores'
import SearchInput from '@/shared/components/SearchInput.vue'
import HeaderContainer from '@/shared/layouts/HeaderContainer.vue'

const postsStore = usePostsStore()

const query = computed<string>({
  get: () => postsStore.searchQuery,
  set: (val) => postsStore.setSearchQuery(val),
})

function onClear() {
  postsStore.setSearchQuery('')
}
</script>
