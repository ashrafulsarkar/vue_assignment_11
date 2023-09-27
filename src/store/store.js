// store.js
import { defineStore } from 'pinia';

export const useRegistrationStore = defineStore('registration', {
    state: () => ({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }),
    actions: {
        setName(name) {
            this.name = name;
        },
        setUsername(username) {
            this.username = username;
        },
        setEmail(email) {
            this.email = email;
        },
        setPassword(password) {
            this.password = password;
        },
        setConfirmPassword(confirmPassword) {
            this.confirmPassword = confirmPassword;
        },
        resetForm() {
            this.name = '';
            this.username = '';
            this.email = '';
            this.password = '';
            this.confirmPassword = '';
        },
        // Add a method to check if passwords match
        passwordsMatch() {
            return this.password === this.confirmPassword;
        },
    },
});