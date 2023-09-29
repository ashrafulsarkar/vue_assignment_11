import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router/router'

const pinia = createPinia()

// pinia.use(({ store }) => {
//     store.$router = markRaw(router)
// });

createApp(App).use(pinia).use(router).mount('#app')




// const app = createApp(App);
// // const pinia = createPinia();

// pinia.use(({ store }) => {
//   store.$router = markRaw(router)
// });
// app.use(router).mount('#app')