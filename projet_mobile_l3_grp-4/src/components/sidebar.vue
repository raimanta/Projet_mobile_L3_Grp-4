<template>
    
    <ul>
        <li id="list" class="text1"><router-link class="link" to="/"><p>Home ({{ getTotalTodoLeft }})</p></router-link></li>
        <li id="list" class="text1"><router-link class="link" to="/auth"><p>Account</p></router-link></li>
        <li id="list" v-for="list in lists" :key="list.id">
            <p id="text">
                <router-link class="link" :to="{path: '/todo/'+list.id}">{{ list.name }}</router-link>
                ({{ this.getTodoLeft(list.id) }})
                <img class="link" id="deleteImg" src="../assets/trash.svg" @click="suppList({idList: list.id, token: this.token})"/>
            </p>
        </li>
        <li id="list" class="addList">
            <input size="15" type="text" v-model="newList">
            <button @click="addList({nom: newList, token: this.token}), newList=''">Ajouter</button>
        </li>
    </ul>
    
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
            'lists',
            'getTodoLeft',
            'getTotalTodoLeft'
        ]),
        ...mapGetters('account', [
            'token'
        ]),
    },
    created() {
        this.$store.dispatch("todolist/loadTodos", this.token);
    }
}
</script>

<style>
#deleteImg{
    max-width: 20px;
    height: auto;
    vertical-align: baseline;
}
ul {
    list-style-type: none;
    padding: 0;
    margin-top: 0;
}
#list {
    padding: 10px;
    height: 30px;
    margin: 0 10px;
    vertical-align: middle;
    color: black;
    text-decoration: none;
    border-bottom: gray 1px solid;
    line-height: 7px;
}

#text{
    vertical-align: middle;
    margin: 0;
}
.link, .link:hover, .link:focus, .link:active {
     text-decoration: none;
     color: inherit;
}
button {
    border: none;
}
.text1{
    padding-top: 50px;
}

</style>
