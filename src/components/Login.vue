<script setup>
import { ref } from 'vue'
import { authStore } from '../store/store';
import { useRouter } from 'vue-router';
const router = useRouter();

const auth = authStore();

const email = ref('')
const password = ref('')
const error = ref('')

const submitForm = () => {
    const data = auth.login(email.value, password.value)
    if (data == 'error') {
        error.value = 'Email and Password is not match!'
    } else {
        router.push({ path:"/dashboard" })
    }
};

</script>

<template>
    <div class="login_page">
        <p>{{ error }}</p>
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" v-model="email" id="exampleInputEmail1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
            </div>
            <p>Don't Have an account <RouterLink to="/registation" class="nav-link">Register Now</RouterLink></p>
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
p a{
    text-decoration: underline;
    display: inline;
}
</style>
