import './styles/main.css'
import naive from 'naive-ui'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'

const app = createApp(App)

app.use(naive)
app.use(createPinia())

app.mount('#app')
