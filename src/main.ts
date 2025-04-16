import './styles/main.css'
import { createApp } from 'vue'
import router from '@/router'
import { createPinia } from 'pinia'
import naive from 'naive-ui'

import App from '@/app/App.vue'

const app = createApp(App)

app.use(naive)
app.use(createPinia())
app.use(router)

app.mount('#app')
