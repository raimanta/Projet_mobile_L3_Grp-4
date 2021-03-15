export const getFilteredTodos = (state) => (idList, filter) => {
        console.log("first todo = "+state.lists[0].todos)
        console.log(idList)
        if(filter=="done"){
            return state.lists.find(list => list.id==idList).todos.filter(todo => todo.completed);
        }

        if(filter=="notDone"){
            return state.lists.find(list => list.id==idList).todos.filter(todo => !todo.completed);
        }
        //plus de correspondance entre idList et son emplacement dans le tableau de lists
        return state.lists.find(list => list.id==idList).todos;
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

export const numberNotDone = (state) => (idList) => {
    return state.lists[idList].todos.filter(todo => !todo.completed).length;
}

export function lists(state){
    return state.lists
}
