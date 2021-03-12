<template>
    <input type="text" v-model="name"/>
    <input type="text" v-model="password"/>
    <button @click="connect({name, password})">Se connecter</button>
</template>

<script>
import {mapActions} from "vuex";
export default {
    name: "Login",
    data() {
        return {
            name: "",
            password: ""
        }
    },
    methods: {
        ...mapActions("account", ['connect'])
    }
}
</script>

<style>

</style>