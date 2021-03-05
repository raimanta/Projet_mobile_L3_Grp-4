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