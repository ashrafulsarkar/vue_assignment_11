<script setup>
import { ref } from 'vue'
import { authStore } from '../store/store';
import { useRouter } from 'vue-router';
const router = useRouter();

const auth = authStore();

const logout = () => {
  auth.logout()
  router.push({ path: "/login" })
}

</script>

<template>
  <ul>
    <li><RouterLink to="/" class="nav-link text-white">Home</RouterLink></li>
    <li v-if="auth.isAuthenticated"><RouterLink to="/dashboard" class="nav-link text-white">Dashboard</RouterLink></li>
    <li v-if="!auth.isAuthenticated"><RouterLink to="/login" class="nav-link text-white">Login</RouterLink></li>
    <li v-if="auth.isAuthenticated"><span @click="logout" class="nav-link text-white">LogOut</span></li>
  </ul>
</template>

<style scoped>
ul{
    padding-top: 20px;
}
ul li{
    list-style: none;
    padding: 8px 0;
}
ul li span{
  display: block;
  cursor: pointer;
}
</style>
