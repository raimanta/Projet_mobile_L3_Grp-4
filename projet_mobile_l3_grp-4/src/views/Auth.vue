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
<<<<<<< HEAD
import {mapActions, mapGetters} from "vuex"
=======
import {mapActions} from "vuex"
>>>>>>> 6e9958f5138162be8d27646094c807ec57205ff7
export default {
    components: {
        Login,
        Register
    },
<<<<<<< HEAD
    computed: {
        ...mapGetters('account', ['token'])
    },
    methods: {
        ...mapActions('account', ['connect', 'getUser'])
    },
    mounted: function(){
        
=======
    methods: {
        ...mapActions('account', ['connect'])
    },
    mounted: function(){
        //Test pour voir si la connection fonctionne
        //this.connect({nom: 'toto@toto.com', password: 'totototo'});
>>>>>>> 6e9958f5138162be8d27646094c807ec57205ff7
    }
}
</script>

<style>

</style>