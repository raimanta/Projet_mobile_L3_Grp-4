export function suppTodo(state, id){
    for(let index in state.todos){
        if(state.todos[index].id==id){
            state.todos.splice(index,1);
            return;
        }
    }
}

export function changeFilter(state, int){
    if(int==1){
        state.filter="all";
    }
    else if(int==2){
        state.filter="notDone";
    }
    else if(int==3){
        state.filter="done";
    }
}

export function deleteDone(state){
    let ids = [];
    for(let index in state.todos){
        if(state.todos[index].completed){
            ids.push(state.todos[index].id);
        }
    }
    for(let id in ids){
        suppTodo(state, ids[id]);
    }
}

export function addTodo(state, nom){
    state.todos.push({
        id: state.id,
        name: nom,
        completed: false
    });
    state.id++;
}

export function checkTodos(state, boolean){
    state.todos.forEach(todo => {
        todo.completed = !boolean;
    });
}

export function modifyTodo(state, id){
    for(let index in state.todos){
        if(state.todos[index].id==id){
            state.todos[index].name = state.todos[index].modify;
            return;
        }
    }
}