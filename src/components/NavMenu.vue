<script setup>
import { ref } from 'vue'


</script>

<template>
  <ul>
    <li><RouterLink to="/" class="nav-link text-white">Home</RouterLink></li>
    <li><RouterLink to="/dashboard" class="nav-link text-white">Dashboard</RouterLink></li>
    <li><RouterLink to="/login" class="nav-link text-white">Login</RouterLink></li>
    <li><RouterLink to="/registation" class="nav-link text-white">Registation</RouterLink></li>
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
</style>
