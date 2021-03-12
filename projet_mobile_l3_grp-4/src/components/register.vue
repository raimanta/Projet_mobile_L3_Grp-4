<template>
    <input type="text" v-model="name"/>
    <input type="text" v-model="password"/>
    <button @click="register({name, password})">S'inscrire</button>
</template>

<script>
import {mapActions} from "vuex";
export default {
    name: "Register",
    data() {
        return {
            name: "",
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