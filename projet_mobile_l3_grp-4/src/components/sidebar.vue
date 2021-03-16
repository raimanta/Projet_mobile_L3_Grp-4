<template>
    SIDEBAR :
    <ul>
        <li v-for="list in lists" :key="list.id">
            <router-link :to="{path: '/todo/'+list.id}">{{ list.name }}</router-link>
            <button @click="suppList({idList: list.id, token: this.$store.state.account.token})">Delete List</button>
        </li>
    </ul>
    <input type="text" v-model="newList">
    <button @click="addList({nom: newList, token: this.$store.state.account.token}), newList=''">Ajouter la liste</button>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'Sidebar',
    data(){
        return {
            newList: "",
        }
    },
    methods: {
        ...mapActions('todolist', [
            'addList',
            'suppList'
        ])
    },
    computed: {
        ...mapGetters('todolist', [
            'lists'
        ]),
        ...mapGetters('account', [
            'token'
        ]),
    },
    created() {
        this.$store.dispatch("todolist/loadTodos", this.$store.state.account.token);
    }
}
</script>
