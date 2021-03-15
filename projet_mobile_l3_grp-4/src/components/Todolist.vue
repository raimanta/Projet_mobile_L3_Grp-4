<template>
    id = {{idList}}
    {{ check(checked) }}
    <input type="checkbox" v-model="checked" @click="checkTodos({idList, checked})"/>

    <div>
        Filtrer :
        <button @:click="changeFilter(1)">Toutes</button>
        <button @:click="changeFilter(2)">A faire</button>
        <button @:click="changeFilter(3)">Faites</button>
    </div>
    <br/>
    <div>
        <button @click="deleteDone(idList)">Supprimer les taches finies</button>
    </div>
    <br/>
    <div>
        <input type="text" v-model="newTodo" placeholder="nom de la todo"/>
        <button @click="addTodo({idList, nom:newTodo, token: this.$store.state.account.token})">Ajouter todo</button>
    </div>

    <ul>
        <li v-bind:class="{ complet: todo.completed }" class="todo" v-for="todo in getFilteredTodos(idList, filters)" :key="todo.id">
            <input type="checkbox" @change="completeTodo({idList: idList, idTodo: todo.id, nom: todo.name, completed: todo.completed?0:1, token: this.$store.state.account.token }, newTodo='')"/>
            {{ todo.name }} : {{ aFaire(todo.completed) }}
            <div>
                <button class="bouton" @click="suppTodo({idList, idTodo:todo.id})">Delete</button>
                <input type="text" v-model="changeTodo[todo.id]"/>
                <button @click="modifyTodo({idList:idList, idTodo:todo.id, nom:changeTodo[todo.id], completed: todo.completed, token: this.$store.state.account.token}), changeTodo[todo.id]='' ">Modifier la Todo</button>
            </div>
        </li>
    </ul>

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
            checked: false,
            filters: "all"
        }
    },
    methods: {
        ...mapActions('todolist', [
            'suppTodo',
            'changeFilter',
            'deleteDone',
            'addTodo',
            'checkTodos',
            'modifyTodo',
            'completeTodo'
        ]),
        modifyFilter(int){
            if(int==1){
                this.filters="all"
            }
            else if(int==2){
                this.filters="notDone"
            }
            else if(int==3){
                this.filters="done"
            }
        }
    },
    computed: {
        ...mapGetters('todolist', [
            'getFilteredTodos',
            'aFaire',
            'check',
            'filter',
            'numberNotDone'
        ])
    },
    watch: {
        '$route' (){
            //appeler la fonction qui load les donnees ici plus tard
        }
    }
}
</script>

<style>

.todo{
    color: red;
}
.complet{
    color: green;
}
</style>