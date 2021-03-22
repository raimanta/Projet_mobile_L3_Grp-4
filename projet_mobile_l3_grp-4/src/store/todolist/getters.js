export const getFilteredTodos = (state) => (filter) => {
    if(filter=="done"){
        return state.todo.filter(todo => todo.completed);
    }

    if(filter=="notDone"){
        return state.todo.filter(todo => !todo.completed);
    }
    return state.todo;
}

export function aFaire(){
    return function(boolean){
        return boolean ? "Finito !" : "A Faire !";
    }
}

export function nom(state){
    return function(idList){
        return state.lists.filter(list => list.id==idList).name;
    }
}

export function lists(state){
    return state.lists
}
