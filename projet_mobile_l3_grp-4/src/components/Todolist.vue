<template>
    id = {{idList}}
    <p>Nombre de todo restantes : {{ numberNotDone(idList) }}</p>
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
        <button @click="addTodo({idList, nom:newTodo})">Ajouter todo</button>
    </div>

    <ul>
        <li v-bind:class="{ complet: todo.completed }" class="todo" v-for="todo in getFilteredTodos(idList)" :key="todo.id">
            <input type="checkbox" id="todo.completed" v-model="todo.completed"/>
            {{ todo.name }} : {{ aFaire(todo.completed) }}
            <div>
                <button class="bouton" @click="suppTodo({idList, idTodo:todo.id})">Delete</button>
                <input type="text" v-model="todo.modify"/>
                <button @click="modifyTodo({idList, idTodo:todo.id})">Modifier la Todo</button>
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
            checked: false
        }
    },
    methods: {
        ...mapActions('todolist', [
            'suppTodo',
            'changeFilter',
            'deleteDone',
            'addTodo',
            'checkTodos',
            'modifyTodo'
        ])
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