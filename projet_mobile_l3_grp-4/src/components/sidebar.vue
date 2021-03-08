<template>
    <ul>
        <li v-for="list in liste" :key="list.id">
            {{ list.name }}
        </li>
    </ul>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
    name: 'Sidebar',
    methods: {
        ...mapActions('todolist', [

        ]),
    },
    computed: {
        ...mapGetters('todolist', [
            'liste'
        ]),
    }
}
</script>
