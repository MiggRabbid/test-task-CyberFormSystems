<template>
  <div><n-text type="primary"> MainPage </n-text></div>
</template>

<script setup lang="ts">
import { api } from '@/api/api'

api
  .getAllPosts()
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
</script>

<style scoped></style>
