<template>
    <input type="text" v-model="nom" placeholder="name"/>
    <input type="text" v-model="email" placeholder="email"/>
    <input type="text" v-model="password" placeholder="password"/>
    <button @click="register({nom, email, password})">S'inscrire</button>
</template>

<script>
import {mapActions} from "vuex";
export default {
    name: "Register",
    data() {
        return {
            nom: "",
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