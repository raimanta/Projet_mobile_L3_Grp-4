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
        <button @click="addTodo({idList, nom:newTodo, token: this.$store.state.account.token}, newTodo='' )">Ajouter todo</button>
    </div>

    <ul>
        <li v-bind:class="{ complet: todo.completed }" class="todo" v-for="todo in getFilteredTodos(filters)" :key="todo.id">
            <input type="checkbox" @change="completeTodo({idList: idList, idTodo: todo.id, nom: todo.name, completed: todo.completed?0:1, token: this.$store.state.account.token }, newTodo='')"/>
            {{ todo.name }} : {{ aFaire(todo.completed) }}
            <div>
                <button class="bouton" @click="suppTodo({idList: idList, idTodo:todo.id, token: this.$store.state.account.token})">Delete</button>
                <input type="text" v-model="changeTodo[todo.id]"/>
                <button @click="modifyTodo({idList:idList, idTodo:todo.id, nom:changeTodo[todo.id], completed: todo.completed, token: this.$store.state.account.token})">Modifier la Todo</button>
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
            'completeTodo',
            'loadTodo'
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
        ]),
        routeId(){
            let route = this.$router.currentRoute.path
            let res;
            let i = 1;
            for(;;){
                let lastInt = parseInt(route.splice(-1))
                if(isNaN(lastInt)){
                    break;
                }
                res =+ i*lastInt;
                i++;
            }
            return res;
        }
    },
    created() {
        this.$store.dispatch("todolist/loadTodo", {idList: this.idList, token:this.$store.state.account.token});
    },
    watch: {
        '$route' (){
            //changer le idList, passer le param de la route
            this.$store.dispatch("todolist/loadTodo", {idList: this.$router.currentRoute._value.params.id, token:this.$store.state.account.token});
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
