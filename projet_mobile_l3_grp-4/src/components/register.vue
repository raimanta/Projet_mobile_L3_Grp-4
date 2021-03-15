<template>
<<<<<<< HEAD
    <input type="text" v-model="name" placeholder="name"/>
    <input type="text" v-model="email" placeholder="email"/>
    <input type="text" v-model="password" placeholder="password"/>
=======
    <input type="text" v-model="name"/>
    <input type="text" v-model="email"/>
    <input type="text" v-model="password"/>
>>>>>>> 6e9958f5138162be8d27646094c807ec57205ff7
    <button @click="register({name, email, password})">S'inscrire</button>
</template>

<script>
import {mapActions} from "vuex";
export default {
    name: "Register",
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        ...mapActions("account", ['register'])
    }
}
</script>

<style>

</style>