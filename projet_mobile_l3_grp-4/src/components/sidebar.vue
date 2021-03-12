<template>
    SIDEBAR :
    <ul>
        <li v-for="list in liste" :key="list.id">
            <router-link :to="{path: '/todo/'+list.id}">{{ list.name }}  {{list.numberNotDone}}</router-link>
        </li>
    </ul>
    <input type="text" v-model="newList">
    <button @click="addList(newList)">Ajouter la liste</button>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
    name: 'Sidebar',
    data(){
        return {
            newList: ""
        }
    },
    methods: {
        ...mapActions('todolist', [
            'addList'
        ]),
    },
    computed: {
        ...mapGetters('todolist', [
            'liste'
        ]),
    }
}
</script>
