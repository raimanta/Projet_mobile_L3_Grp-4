export const getFilteredTodos = (state) => (filter) => {
    if(filter=="done"){
        return state.todo.filter(todo => todo.completed);
    }

    if(filter=="notDone"){
        return state.todo.filter(todo => !todo.completed);
    }
    return state.todo;
}

export function nom(state){
    return function(idList){
        return state.lists.find(list => list.id==idList).name;
    }
}

export function lists(state){
    return state.lists
}

export const getTodoLeft = (state) => (idList) => {
    return state.lists.find(list => idList==list.id).todos.filter(todo => !todo.completed).length;
}

export function getTotalTodoLeft(state, getters) {
    let total = 0
    for(let i in state.lists){
        total += getters.getTodoLeft(state.lists[i].id)
    }
    return total
}