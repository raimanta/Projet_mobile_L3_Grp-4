<template>
    {{ check(this.x) }}
    <input type="checkbox" v-model="x" @click="checkTodos(x)"/>
    
    <div>
        Filtrer :
        <button v-on:click="changeFilter(1)">Toutes</button>
        <button v-on:click="changeFilter(2)">A faire</button>
        <button v-on:click="changeFilter(3)">Faites</button>
    </div>
    <br/>
    <div>
        <button v-on:click="deleteDone()">Supprimer les taches finies</button>
    </div>
    <br/>
    <div>
        <input type="text" v-model="newTodo" placeholder="nom de la todo"/>
        <button v-on:click="addTodo(this.newTodo)">Ajouter todo</button>
    </div>

    <ul>
        <li v-bind:class="{ complet: todo.completed }" class="todo" v-for="todo in filtered_todos" :key="todo.id">
            <button class="bouton" v-on:click="suppTodo(todo.id)">Delete</button>
            <input type="checkbox" id="todo.completed" v-model="todo.completed"/>
            {{ todo.name }} : {{ aFaire(todo.completed) }}
        </li>
    </ul>
</template>

<script>
import { mapGetters} from "vuex";
export default {
    name: 'Todolist',
    props: {
        
    },
    data() {
        return {
            todos: [
            {
                id: 1,
                name : 'Courses',
                completed : false
            },
            {
                id: 2,
                name : 'CV',
                completed: true
            },
            {
                id: 3,
                name : 'Lettre de motivation',
                completed: true
            },
            {
                id: 4,
                name : 'Reussir sa vie',
                completed: true
            }
            ]
            ,
            newTodo: '',
            filter: 'all',
            x: true,
            id: 5,
        }
    },
    methods: {
        suppTodo: function(id){
            for(let index in this.todos){
                if(this.todos[index].id==id){
                    this.todos.splice(index,1);
                    return;
                }
            }
        },
        addTodo: function(nom){
            this.todos[this.todos.length] = {
                id: this.id,
                name: nom,
                completed: false
            }
            this.id++;
        },
        checkTodos: function(boolean){
            for(let index in this.todos){
                if(boolean){
                    this.todos[index].completed=true;
                }
                else {
                    this.todos[index].completed=false;
                }
            }
        },
        changeFilter: function(int){
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
        deleteDone: function(){
            let ids = [];
            for(let index in this.todos){
                if(this.todos[index].completed){
                    ids.push(this.todos[index].id);
                }
            }
            for(let id in ids){
                this.suppTodo(ids[id]);
            }
        }
    },
    computed: {
        ...mapGetters('todolist', ['getFilteredTodos', 'aFaire', 'check']),
        filtered_todos(){
            return this.getFilteredTodos(this.filter);
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