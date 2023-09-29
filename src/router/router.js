import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Registation from '../components/Registation.vue'
import Dashboard from '../components/Dashboard.vue'
import { authStore } from '../store/store';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, meta: { requiresAuth: false } },
    { path: '/registation', component: Registation, meta: { requiresAuth: false } },
    { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const auth = authStore()
    if(to.meta.requiresAuth && !auth.isAuthenticated){
        next('/login')
    } else if(to.meta.requiresAuth == false && auth.isAuthenticated){
        next('/')
    } else{
        next()
    }
})

export default router