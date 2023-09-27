import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Registation from '../components/Registation.vue'
import Dashboard from '../components/Dashboard.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/registation', component: Registation },
    { path: '/dashboard', component: Dashboard },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router