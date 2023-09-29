import {ref, reactive} from 'vue'
import { defineStore } from "pinia";

const authStore = defineStore('auth', () => {
    
    const auth = JSON.parse(localStorage.getItem('auth')) || false
    const isAuthenticated = ref(auth)
    
    const login = (email, password) => {
        const userData = JSON.parse(localStorage.getItem('userData')) || null
        const userEmail = userData?.email;
        const userPass = userData?.password;
        if (userEmail == email && userPass == password) {
            localStorage.setItem('auth', JSON.stringify(true))
            isAuthenticated.value = true
        } else {
            return 'error'
        }
    }
    
    const logout = () => {
        localStorage.setItem('auth', JSON.stringify(false))
        isAuthenticated.value = false
    }
    return {isAuthenticated, login, logout}
})

export {authStore}