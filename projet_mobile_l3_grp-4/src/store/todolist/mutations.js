export function loadTodos(state, data){
    state.lists = data;
    localStorage.setItem('todolist/lists', JSON.stringify(data));
}

export function loadTodosLocal(state){
    state.lists = JSON.parse(localStorage.getItem('todolist/lists'));
}

export function loadTodo(state, data){
    state.todo = data;
    localStorage.setItem('todolist/todo', JSON.stringify(data))
}

export function loadTodoLocal(state){
    state.todo =  JSON.parse(localStorage.getItem('todolist/todo'));
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
    state.lists.splice(state.lists.findIndex(list => list.id==idList),1);
    localStorage.setItem('todolist/lists', JSON.stringify(state.lists));
}

export function completeTodo(state, payload){
    state.todo.find(todo => todo.id==payload.idTodo).completed = payload.completed
    state.lists.find(list => payload.idList==list.id).todos.find(todo => todo.id==payload.idTodo).completed = payload.completed
    localStorage.setItem('todolist/todo', JSON.stringify(state.todo))
}

export function addTodo(state, data){
    const todo = {
        id: data.id,
        todolist_id: data.todolist_id,
        name: data.name,
        completed: 0,
    }
    state.todo.push(todo)
    state.lists.find(list => list.id==data.todolist_id).todos.push(todo);
    localStorage.setItem('todolist/todo', JSON.stringify(state.todo))
}

export function suppTodo(state, payload){
    let index = state.todo.findIndex(todo => todo.id==payload.idTodo)
    state.todo.splice(index, 1);
    state.lists.find(list => list.id==payload.idList).todos.splice(index, 1);
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