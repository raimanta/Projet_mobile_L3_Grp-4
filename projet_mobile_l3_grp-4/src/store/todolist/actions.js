export function suppTodo({commit}, id){
    console.log(id);
    commit("suppTodo", id);
}

export function deleteDone({commit}){
    commit("deleteDone");
}

export function changeFilter({commit}, int){
    console.log(int);
    commit("changeFilter", int);
}