<template>

    <input type="checkbox" id="allChecked" v-model="allChecked" v-on:change="checkAll()"/>
    <ul>
        <li v-for="todo in filteredTodolist" :key="todo.id"
            v-bind:class="(!todo.completed)? 'todo' : 'completed'">

            <input type="checkbox" id="todo.completed" v-model="todo.completed"/>
            {{ todo.name }}
            <button v-on:click="suppTodo(todo.id)">-</button>
        </li>
    </ul>

    <p> {{ remainingTodo }} tâches à faire </p>
    <ul>
        <p><b>FILTRES</b></p>
        <a href="." @click.prevent="unload" @click="filter='all'">     <li>Toutes </li></a>
        <a href="." @click.prevent="unload" @click="filter='finish'">   <li>Faites </li></a>
        <a href="." @click.prevent="unload" @click="filter='remaining'"><li>À faire</li></a>
    </ul>

    <button v-show="suppTodoButton" v-on:click="suppAllChecked">Supprimer les tâches faites</button>

</template>

<script>
export default {
    name: 'Todolist',
    data() {
          return {
            filter : "all",
            allChecked : false,
            nbTodos : 4,
            todos: [
              {
                id: 1,
                name : 'tache 1',
                completed : false
              },
              {
                id: 2,
                name : 'tache 2',
                completed: true
              },
              {
                id: 3,
                name : 'tache 3',
                completed : false
              },
              {
                id: 4,
                name : 'tache 4',
                completed: true
              }
            ],
            newTodo: '',
          }
    },
    methods:{
        suppTodo(id){
            this.todos.splice(id-1, 1)
            for(let i=id-1; i<this.todos.length; i++){ this.todos[i].id -= 1 }
        },
        checkAll(){
            for(let i=0; i<this.todos.length; i++){
                this.todos[i].completed = this.allChecked
            }
        },
        suppAllChecked(){
            for(let i=0; i<this.todos.length; i++){
                if(this.todos[i].completed){
                    this.suppTodo((i+1))
                    i--
                }
            }
        },
    },
    props:{},
    computed:{
        remainingTodo(){
            let result = 0
            for(let i=0; i<this.todos.length; i++){
                if(!this.todos[i].completed) result++
            }
            return(result)
        },
        filteredTodolist(){
            let filteredlist
            filteredlist = this.todos
            if(this.filter === "remaining") filteredlist = this.todos.filter(todo => !todo.completed )
            if(this.filter === "finish"   ) filteredlist = this.todos.filter(todo =>  todo.completed )

            return(filteredlist)
        },
        suppTodoButton(){
            return( this.remainingTodo >= 0 && this.remainingTodo < this.todos.length )
        }

    }
}
</script>

<style scoped>
    li.todo {
    color:red
    }
    li.completed {
    color:green
    }
</style>
