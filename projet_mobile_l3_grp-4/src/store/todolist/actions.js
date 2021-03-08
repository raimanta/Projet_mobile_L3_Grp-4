//ListTodo
export function addList({commit}, nom){
    commit("addTodo", nom);
}

export function suppList({commit}, idList){
    commit("addTodo", idList);
}

//filter
export function changeFilter({commit}, int){
    commit("changeFilter", int);
}

//Todo
export function addTodo({commit}, payload/*=> idList, nom*/){
    commit("addTodo", payload);
}

export function suppTodo({commit}, payload/*=> idList, idTodo*/){
    commit("suppTodo", payload);
}

export function deleteDone({commit}, idList){
    console.log(idList)
    commit("deleteDone", idList);
}

export function checkTodos({commit}, payload/*=> idList, checked*/){
    commit("checkTodos", payload);
}

export function modifyTodo({commit}, payload/*=> idList, idTodo*/){
    commit("modifyTodo", payload);
}