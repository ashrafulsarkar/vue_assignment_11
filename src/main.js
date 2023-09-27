import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router/router'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
