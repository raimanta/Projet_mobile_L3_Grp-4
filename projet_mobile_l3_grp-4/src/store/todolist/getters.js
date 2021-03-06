export function getFilteredTodos(state){
    return function(filter){
        if(filter=="all"){
            return state.todos;
        }
        else if(filter=="done"){
            let list = [];
            for(let index in state.todos){
                if(state.todos[index].completed){
                    list.push(state.todos[index]);
                }
            }
            return list;
        }
        else if(filter=="notDone"){
            let list = [];
            for(let index in state.todos){
                if(!state.todos[index].completed){
                    list.push(state.todos[index]);
                }
            }
            return list;
        }
        return null;
    }
}

export function aFaire(){
    return function(boolean){
        if(!boolean) return "A faire !";
        else return "Finito !";
    }
}

export function check(){
    return function(boolean){
        if(boolean) return "Check";
        else return "Uncheck";
    }    
}

export function filter(state){
    return state.filter;
}

export function boolean(state){
    return state.boolean;
}