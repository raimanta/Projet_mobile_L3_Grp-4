<template>
    <Login/>
    <br/>
    <Register/>
</template>

<script>
import Login from '../components/login'
import Register from '../components/register.vue'
import {mapActions} from "vuex"
export default {
    components: {
        Login,
        Register
    },
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