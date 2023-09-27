<script setup>
import { ref } from 'vue'
// import { useRegistrationStore } from '../store/store';

const name = ref('');
const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMassage = ref('');

// const registrationStore = useRegistrationStore();

const submitForm = () => {
    if ( password.value !== confirmPassword.value) {
        errorMassage.value = 'Password are not match!'
        return
    }

    const userData = {
        name: name.value,
        username: username.value,
        email: email.value,
        password: password.value,
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    name.value = ''
    username.value = ''
    email.value = ''
    password.value = ''
    confirmPassword.value = ''
    errorMassage.value = ''
};
</script>

<template>
    <div class="registation_page">
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="name" required />
            </div>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" v-model="username" required />
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="email" required />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" v-model="password" required />
            </div>
            <div class="mb-3">
                <label for="confirm-password" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirm-password" v-model="confirmPassword" required />
            </div>
            <div class="mb-3">
                <p>{{ errorMassage }}</p>
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary">Register</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.registation_page {
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
