<template>
    <input type="text" v-model="email"/>
    <input type="text" v-model="password"/>
    <button @click="connect({email, password})">Se connecter</button>
</template>

<script>
import {mapActions} from "vuex";
export default {
    name: "Login",
    data() {
        return {
            email: "bill@bill.com",
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