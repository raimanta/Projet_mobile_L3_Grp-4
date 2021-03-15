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
import {mapActions} from "vuex"
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
        
    methods: {
        ...mapActions('account', ['connect'])
    },
    mounted: function(){
        //Test pour voir si la connection fonctionne
        //this.connect({nom: 'toto@toto.com', password: 'totototo'});
    }
}
</script>

<style>

</style>