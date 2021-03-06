<template>
    {{ check(boolean) }}
    <input type="checkbox" v-model="boolean" @click="checkTodos(this.boolean)"/>
    
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
        <li v-bind:class="{ complet: todo.completed }" class="todo" v-for="todo in getFilteredTodos(filter)" :key="todo.id">
            <button class="bouton" v-on:click="suppTodo(todo.id)">Delete</button>
            <input type="checkbox" id="todo.completed" v-model="todo.completed"/>
            {{ todo.name }} : {{ aFaire(todo.completed) }}
        </li>
    </ul>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
    name: 'Todolist',
    data() {
        return {
            newTodo: '',
            boolean: false,
        }
    },
    methods: {
        ...mapActions('todolist', [
            'suppTodo',
            'changeFilter',
            'deleteDone',
            'addTodo',
            'checkTodos'
        ]),
    },
    computed: {
        ...mapGetters('todolist', ['getFilteredTodos', 'aFaire', 'check', 'filter']),
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