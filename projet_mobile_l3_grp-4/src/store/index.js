import { createStore } from 'vuex'

import account from './account';
import todolist from './todolist';

export default createStore({
    debug : true,
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        account,
        todolist
    }
})
