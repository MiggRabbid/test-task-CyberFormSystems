<template>
  <FooterContainer>
    <n-space justify="start" class="w-full!">
      <BackBtn btn-text="Назад" icon-placement="left" @click="navigate" />
    </n-space>
  </FooterContainer>
</template>

<script setup lang="ts">
import { NSpace } from 'naive-ui'
import { useRouter } from 'vue-router'
import FooterContainer from '@/shared/layouts/FooterContainer.vue'
import BackBtn from '@/shared/components/BackBtn.vue'

const router = useRouter()

function navigate() {
  router.push({ name: 'MainPage' })
}
</script>
