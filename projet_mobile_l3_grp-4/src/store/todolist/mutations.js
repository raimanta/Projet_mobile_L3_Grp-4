export function loadTodos(state, data){
    state.lists = data;
    for(let i in data){
        localStorage.setItem('todolist/lists/'+data[i].id, JSON.stringify(data[i]))
        for(let j in data[i].todos){
            localStorage.setItem('todolist/lists/'+data[i].id+'/todos/'+data[i].todos[j].id, JSON.stringify(data[i].todos[j]))
        }
    }
}

export function loadTodo(state, data){
    console.log(data);
    state.todo = data;
    localStorage.setItem('todolist/todo', JSON.stringify(data))
}

export function addList(state, payload){
    let list = {
        id: payload.idList,
        name: payload.nom,
        todos : [],
    }
    state.lists.push(list);
    localStorage.setItem('todolist/lists/'+payload.idList, JSON.stringify(list))
}

export function suppList(state, idList){
    console.log(idList)
    console.log(state.lists.findIndex(list => {console.log(list.id);list.id==idList}));
    state.lists.splice(state.lists.findIndex(list => list.id==idList),1);
    localStorage.removeItem('todolist/lists/'+idList)
}

export function completeTodo(state, payload){
    state.todo.find(todo => todo.id==payload.idTodo).completed = payload.completed
    localStorage.setItem('todolist/todo', JSON.stringify(state.todo))
}

export function addTodo(state, data){
    state.todo.push({
        id: data.id,
        todolist_id: data.todolist_id,
        name: data.name,
        completed: 0,
    })
    localStorage.setItem('todolist/todo', JSON.stringify(state.todo))
}

export function suppTodo(state, idTodo){
    state.todo.splice(state.todo.findIndex(todo => todo.id==idTodo),1);
    localStorage.setItem('todolist/todo', JSON.stringify(state.todo))
}

export function modifyTodo(state, payload){
    state.todo.find(todo => todo.id==payload.idTodo).name = payload.nom;
    localStorage.setItem('todolist/todo', JSON.stringify(state.todo))
}

export function updateTodo(state, idList){
    state.todo = state.lists.find(list => list.id==idList).todos
    localStorage.setItem('todolist/todo', JSON.stringify(state.todo))
}

//Puisque on accede pas aux todo depuis le todolist/list, on actualise pas directement dans le localStorage
//cela se fera automatiquement lors du chargement.