export function getFilteredTodos(state){
    return function(filter){
        if(filter=="all"){
            return state.todos;
        }
        else if(filter=="done"){
            return state.todos.filter(todo => todo.completed);
        }
        else if(filter=="notDone"){
            return state.todos.filter(todo => !todo.completed);
        }
        return null;
    }
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

export function numberNotDone(state){
    return state.todos.filter(todo => !todo.completed).length;
}