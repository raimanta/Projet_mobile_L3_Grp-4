<template>
    <router-link to="/">Home</router-link>
    <div v-if="this.token!=''">
        <p>Vous etes connecte !</p>
        <button @click="disconnectFct()">Se deconnecter</button>
        <button @click="showUserFct()">Afficher l'utilisateur</button>
        <div v-if="showUser">
            <p>Nom : {{ this.user.name }}</p>
            <p>email : {{ this.user.email }}</p>
        </div>
    </div>
    <div v-else>
        <p>Vous n'etes pas connecte !</p>
        <Login/>
        <br/>
        <Register/>
        <br/>
    </div>
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
    data(){
        return {
            showUser: false,
        }
    },
    computed: {
        ...mapGetters('account', ['token', 'user'])
    },
    methods: {
        ...mapActions('account', ['connect', 'getUser', 'disconnect']),
        showUserFct(){
            this.showUser = true
            this.getUser(this.token)
        },
        disconnectFct(){
            this.showUser = false
            this.disconnect()
        }
    },
    mounted(){
        console.log(this.token)
    }
}
</script>

<style>

</style>