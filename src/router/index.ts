import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '@/pages/MainPage/MainPage.vue'
import PostPage from '@/pages/PostPage/PostPage.vue'

const routes = [
  { path: '/', name: 'MainPage', component: MainPage },
  { path: '/post/:id', name: 'PostDetails', component: PostPage },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
