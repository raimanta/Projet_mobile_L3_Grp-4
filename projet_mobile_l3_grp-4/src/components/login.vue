<template>
    <input type="text" placeholder="mail" v-model="email"/>
    <input type="text" placeholder="password" v-model="password"/>
    <button @click="connect({email, password})">Se connecter</button>
</template>

<script>
import {mapActions} from "vuex";
export default {
    name: "Login",
    data() {
        return {
            email: "mateo@mateo.com",
            password: "123456"
        }
    },
    methods: {
        ...mapActions("account", ['connect'])
    }
}
</script>

<style>

</style>