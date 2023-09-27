<script setup>
import { ref } from 'vue'


</script>

<template>
    <div class="login_page">
        <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<style scoped>
.login_page{
    max-width: 50%;
    margin: auto;
    margin-top: 60px;
    padding: 20px;
    box-shadow: 0 0 20px 1px #bdbdbd75;
    border-radius: 10px;
}
.login_page button {
    width: 100%;
}
</style>
