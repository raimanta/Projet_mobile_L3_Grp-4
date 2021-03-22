
import axios from 'axios'

//fonctionne
export function loadTodos({commit}, token){
    const config = {
        headers: {Authorization : `Bearer ${token}`}
    }
    axios.get('http://138.68.74.39/api/todolists', config)
        .then(response => commit('loadTodos', response.data))
        .catch(() => commit('loadTodosLocal'))
}


//ListTodo
//fonctionne
export function addList({commit}, payload/*=> nom, token*/){

    const config = {
        headers: {Authorization : `Bearer ${payload.token}`}
    }

    const bodyParameters = {
        key: payload.nom
    }
    
    axios.post('http://138.68.74.39/api/todolist?name='+payload.nom, bodyParameters, config)
        .then(response => commit("addList", {nom: payload.nom, idList: response.data.id}))
        .catch(error => console.log(error))
}

export function completeTodo({commit}, payload/*idList, idTodo, nom, completed, token */){
    const config = {
        headers: {Authorization : `Bearer ${payload.token}`}
    }

    const bodyParameters = {
        key: payload.nom
    }

    axios.post('http://138.68.74.39/api/completeTodo/'+payload.idTodo+'?name='+payload.nom+'&completed='+payload.completed+'&todolist_id='+payload.idList, bodyParameters ,config)
        .then(response => {console.log("Change Todo response :"+response);commit("completeTodo", {idList: payload.idList, idTodo: payload.idTodo, completed: payload.completed})})
        .catch(error => console.log(error))
}

export function suppList({commit}, payload/*idList, token*/){
    const config = {
        headers: {Authorization : `Bearer ${payload.token}`}
    }

    console.log(payload.idList);

    axios.delete('http://138.68.74.39/api/todolist/'+payload.idList, config)
        .then(response => {console.log(response), commit("suppList", payload.idList)})
        .catch(error => console.log(error))
}

export function suppTodo({commit}, payload/*=> idList, idTodo*/){
    const config = {
        headers : {Authorization : `Bearer ${payload.token}`}
    }

    axios.delete('http://138.68.74.39/api/todo/'+payload.idTodo, config)
        .then(response => {console.log(response);commit("suppTodo", payload.idTodo)})
        .catch(error => console.log(error))
}

//Todo
export function addTodo({commit}, payload/*=> idList, nom, token*/){
    const config = {
        headers: {Authorization : `Bearer ${payload.token}`}
    }

    const bodyParameters = {
        key: payload.nom
    }

    axios.post('http://138.68.74.39/api/todo?name='+payload.nom+'&completed=0&todolist_id='+payload.idList, bodyParameters, config)
        .then(response => {console.log("todo");console.log(response);commit("addTodo", response.data)})
        .catch(error => console.log(error))
}

export function loadTodo({commit}, payload/*=> idList, token*/){
    const config = {
        headers: {Authorization : `Bearer ${payload.token}`}
    }

    axios.get('http://138.68.74.39/api/todos/'+payload.idList, config)
        .then(response => {console.log(response);commit("loadTodo", response.data)})
        .catch(() => commit("loadTodoLocal"))
}

export function modifyTodo({commit}, payload/*idList, idTodo, nom, completed, token */){
    const config = {
        headers: {Authorization : `Bearer ${payload.token}`}
    }

    const bodyParameters = {
        key: payload.nom
    }

    axios.patch('http://138.68.74.39/api/todo/'+payload.idTodo+'?name='+payload.nom+'&completed='+payload.completed+'&todolist_id='+payload.idList, bodyParameters ,config)
        .then(response => {console.log("Modify Todo response :"+response);commit("modifyTodo", {idTodo: payload.idTodo, nom: payload.nom})})
        .catch(error => console.log(error))
}

export function updateTodo({commit}, idList){
    commit("updateTodo", idList);
}