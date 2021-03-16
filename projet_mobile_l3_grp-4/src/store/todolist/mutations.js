export function loadTodos(state, data){
    console.log(data)
    state.lists = data;
}

export function loadTodo(state, data){
    console.log("Data loadTodo = ");
    console.log(data);
    state.todo = data;
}

//ListTodo
export function addList(state, payload){
    state.lists.push({
        id: payload.idList,
        name: payload.nom,
        todos : [],
    });
}

export function suppList(state, idList){
    console.log(idList)
    console.log(state.lists.findIndex(list => {console.log(list.id);list.id==idList}));
    state.lists.splice(state.lists.findIndex(list => list.id==idList),1);
}

//filter
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

export function completeTodo(state, payload){
    state.todo.find(todo => todo.id==payload.idTodo).completed = payload.completed
}

//Todo
export function addTodo(state, data){
    state.todo.push({
        id: data.id,
        todolist_id: data.todolist_id,
        name: data.name,
        completed: 0,
    })
}

export function suppTodo(state, idTodo){
    state.todo.splice(state.todo.findIndex(todo => todo.id==idTodo),1);
}

export function deleteDone(state, idList){
    if(!isList(state, idList)) return;
    for(let i in state.lists[idList].todos){
        if(state.lists[idList].todos[i].completed){

            suppTodo(state,{idList, idTodo:i});
        }
    }
}

export function checkTodos(state, payload){
    let idList = payload.idList;
    let checked = payload.checked;
    
    if(!isList(state, idList)) return;
    console.log( checked );
    state.lists[idList].todos.forEach(todo => {
        todo.completed = !checked;
    });
}

export function modifyTodo(state, payload){
    let idTodo = payload.idTodo;
    let nom = payload.nom;

    //if(! isInList(state, idList, idTodo)) return;

    state.todo.find(todo => todo.id==idTodo).name = nom;
}

//Fonction utile
export function isList(state, idList){
    for(let i in state.lists)
        if(state.lists[i].id==idList) return true;
    
    return false;
}

export function isInList(state, idList, idTodo){
    if(! isList(state, idList)) return false;

    for(let i in state.lists[idList].todos){
        if(state.lists[idList].todos[i].id==idTodo) return true;
    }
    return false;
}
