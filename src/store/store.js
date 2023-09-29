import {ref, reactive} from 'vue'
import { defineStore } from "pinia";
import { useRouter } from 'vue-router';
const router = useRouter();

// import { router } from '../router/router';

const authStore = defineStore('auth', () => {
    
    const auth = JSON.parse(localStorage.getItem('auth')) || false
    const isAuthenticated = ref(auth)

    const userData = JSON.parse(localStorage.getItem('userData')) || null
    
    const name = ref(userData.name)
    const userName = name.value

    const login = (email, password) => {
        const userEmail = userData.email;
        const userPass = userData.password;
        if (userEmail == email && userPass == password) {
            localStorage.setItem('auth', JSON.stringify(true))
            isAuthenticated.value = true

            
        } else {
            return 'error'
        }
    }

    
    
    const logout = () => {
        localStorage.setItem('auth', JSON.stringify(false))
        name.value = ''
        isAuthenticated.value = false
        // store.router.push({ path: "/" })
        router.push({ path: "/" });
    }
    return {isAuthenticated, userName, login, logout}
})

export {authStore}