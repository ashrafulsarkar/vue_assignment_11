<script setup>
import { ref } from 'vue'


</script>

<template>
    <div class="registation_page">
        <form>
        <div class="mb-3">
            <label for="exampleInputUserName" class="form-label">User Name</label>
            <input type="text" class="form-control" id="exampleInputUserName">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="exampleInputPassword2">
        </div>
        <button type="submit" class="btn btn-primary">Registation</button>
        </form>
    </div>
</template>

<style scoped>
.registation_page{
    max-width: 50%;
    margin: auto;
    margin-top: 60px;
    padding: 20px;
    box-shadow: 0 0 20px 1px #bdbdbd75;
    border-radius: 10px;
}
.registation_page button {
    width: 100%;
}
</style>
