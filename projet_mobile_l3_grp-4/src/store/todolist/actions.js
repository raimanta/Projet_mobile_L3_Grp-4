export function suppTodo({commit}, id){
    commit("suppTodo", id);
}

export function deleteDone({commit}){
    commit("deleteDone");
}

export function changeFilter({commit}, int){
    commit("changeFilter", int);
}

export function addTodo({commit}, nom){
    commit("addTodo", nom);
}

export function checkTodos({commit}, boolean){
    commit("checkTodos", boolean);
}

export function modifyTodo({commit}, id){
    commit("modifyTodo", id);
}