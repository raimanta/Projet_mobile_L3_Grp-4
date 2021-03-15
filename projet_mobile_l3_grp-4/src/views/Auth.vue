<template>
    <Login/>
    <br/>
    <Register/>
    <br/>
    <button @click="getUser(token)">GetUser</button>
</template>

<script>
import Login from '../components/login'
import Register from '../components/register.vue'
import {mapActions, mapGetters} from "vuex"
export default {
    components: {
        Login,
        Register
    },
    computed: {
        ...mapGetters('account', ['token'])
    },
    methods: {
        ...mapActions('account', ['connect', 'getUser'])
    },
    mounted: function(){
        
    }
}
</script>

<style>

</style>