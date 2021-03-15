export function loadTodos(state, data){
    console.log(data)
    state.lists = data;
}

//ListTodo
export function addList(state, nom){
    state.lists.push({
        id: state.lists.length,
        name: nom,
        todos : [],
    });
}

export function suppList(state, idList){
    state.lists.splice(idList,1);

    for(let i=idList; i<state.lists.length; i++){
        state.lists[i].id--;
    }
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
    state.lists.find(list => list.id==payload.idList).todos.find(todo => todo.id==payload.idTodo).completed = payload.completed
}

//Todo
export function addTodo(state, payload){
    let idList = payload.idList;
    let nom = payload.nom;

    if(!isList(state, idList)) return;
    
    state.lists.find(list => list.id==idList).todos.push({
        id: state.lists.find(list => list.id==idList).todos.length,
        name: nom,
        completed: false
    });
}

export function suppTodo(state, payload){
    let idList = payload.idList;
    let idTodo = payload.idTodo;

    if(!isInList(state, idList, idTodo)) return; 
    
    state.lists[idList].todos.splice(idTodo,1);

    for(let i=idTodo; i<state.lists[idList].todos.length; i++){
        state.lists[idList].todos[i].id--;
    }
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
    let idList = payload.idList;
    let idTodo = payload.idTodo;
    let nom = payload.nom;

    //if(! isInList(state, idList, idTodo)) return;

    state.lists.find(list => list.id==idList).todos.find(todo => todo.id==idTodo).name = nom;
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
