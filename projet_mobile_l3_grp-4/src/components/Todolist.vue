<template>
    <h2>{{ nom(id) }}</h2>
    {{todos}}
    <div id="inputAdd">
        
        <br/>
        <input type="text" v-model="newTodo" placeholder="Ajouter une tache"/>
        <button id="buttonChange" @click="addTodo({idList: id, nom:newTodo, token: this.token}, newTodo='')">Ajouter</button>
    </div>

    <ul>
        <li v-bind:class="{ complet: todo.completed }" class="todo" v-for="todo in getFilteredTodos(filter)" :key="todo.id">
            <img v-if="!todo.completed" @click="completeTodo({idList: id, idTodo: todo.id, nom: todo.name, completed: todo.completed?0:1, token: this.token})" src="../assets/circle.svg"/>
            <img v-else @click="completeTodo({idList: id, idTodo: todo.id, nom: todo.name, completed: todo.completed?0:1, token: this.token})" src="../assets/check-circle.svg"/>
            <p v-if="!visibilityTodo[todo.id]">{{ todo.name }}</p>
            <input v-if="visibilityTodo[todo.id]" type="text" v-model="changeTodo[todo.id]"/>
            <button id="buttonChange" v-if="visibilityTodo[todo.id]" @click="modifyTodo({idList: id, idTodo:todo.id, nom:changeTodo[todo.id], completed: todo.completed, token: this.token}, changeTodo[todo.id]='', changeVisibility(todo.id))">Modifier la Todo</button>
            <img @click="changeVisibility(todo.id)" src="../assets/pencil-square.svg"/>
            <img class="link" id="deleteImg" src="../assets/trash.svg" @click="suppTodo({idList: id, idTodo:todo.id, token: this.token})"/>
        </li>
    </ul>

    <button @click="changeFilter(1)">Toutes</button>
    <button @click="changeFilter(2)">A faire</button>
    <button @click="changeFilter(3)">Faites</button>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'Todolist',
    props: {
        idList: Number
    },
    data() {
        return {
            newTodo: '',
            changeTodo: [],
            visibilityTodo: [],
            filter: "all",
            id: this.$router.currentRoute._value.params.id,
            todos: ""
        }
    },
    methods: {
        ...mapActions('todolist', [
            'suppTodo',
            'addTodo',
            'modifyTodo',
            'loadTodo',
            'updateTodo',
            'completeTodo'
        ]),
        changeFilter(int){
            if(int==1){
                this.filter="all";
            }
            else if(int==2){
                this.filter="notDone";
            }
            else if(int==3){
                this.filter="done";
            }
        },
        changeVisibility(id){
            this.visibilityTodo[id] = !this.visibilityTodo[id]
        }
    },
    computed: {
        ...mapGetters('todolist', [
            'getFilteredTodos',
            'aFaire',
            'nom'
        ]),
        ...mapGetters('account', [
            'token'
        ])
    },
    created() {
        this.$store.dispatch("todolist/loadTodo", {idList: this.idList, token: this.token});
    },
    watch: {
        '$route' (){
            //on recupere les todos stockees dans le localStorage, puis on les update avec le get via axios.
            this.id = this.$router.currentRoute._value.params.id
            if(this.id!=undefined){
                this.updateTodo(this.id)
                this.$store.dispatch("todolist/loadTodo", {idList: this.id, token: this.token});
            }
        }
    }
}
</script>

<style>
html {
    background-color: #F5F5F5;
}
h2 {
    text-align: center;
}
input{
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    outline: none;
    background-color: white;
}
.todo{
    color: black;
    display: flex;
    padding: 20px;
}
.complet{
    color: gray;
    text-decoration: line-through;
}
p{
    margin: 0;
}
#inputAdd {
    margin-left: 35px;
    height: 60px;
}
#buttonChange {
    background-color: white;
    text-decoration: none;
}
</style>
