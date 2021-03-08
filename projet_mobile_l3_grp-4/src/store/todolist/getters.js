export const getFilteredTodos = (state) => (idList) => {
        if(state.filter=="done"){
            return state.lists[idList].todos.filter(todo => todo.completed);
        }

        if(state.filter=="notDone"){
            return state.lists[idList].todos.filter(todo => !todo.completed);
        }

        return state.lists[idList].todos;
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

export function liste(state){
    console.log("fonction")
    return state.lists
}
