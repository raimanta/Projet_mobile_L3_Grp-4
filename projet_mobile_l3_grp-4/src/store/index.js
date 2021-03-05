import { createStore } from 'vuex'

import account from './account';
import todolist from './todolist';

export const store = createStore({
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
