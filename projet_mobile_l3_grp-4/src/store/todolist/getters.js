export const getFilteredTodos = (state) => (filter) => {
    console.log("test")
    console.log(state.todo)
    if(filter=="done"){
        return state.todo.filter(todo => todo.completed);
    }

    if(filter=="notDone"){
        return state.todo.filter(todo => !todo.completed);
    }
    //plus de correspondance entre idList et son emplacement dans le tableau de lists
    return state.todo;
}

export function aFaire(){
    return function(boolean){
        return boolean ? "Finito !" : "A Faire !";
    }
}

export function check(){
    return function(boolean){
        return boolean ? "Check" : "Uncheck";
    }
}

export function filter(state){
    return state.filter;
}

export const numberNotDone = (state) => (idList) => {
    return state.lists[idList].todos.filter(todo => !todo.completed).length;
}

export function lists(state){
    return state.lists
}
