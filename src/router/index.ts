import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage/MainPage.vue'
import PostPage from '@/pages/PostPage/PostPage.vue'

const routes = [
  { path: '/', name: 'MainPage', component: MainPage },
  { path: '/post/:id', name: 'PostDetails', component: PostPage, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
