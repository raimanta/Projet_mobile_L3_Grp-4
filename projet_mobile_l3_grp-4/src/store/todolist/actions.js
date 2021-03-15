
import axios from 'axios'

//fonctionne
export function loadTodos({commit}, token){
    const config = {
        headers: {Authorization : `Bearer ${token}`}
    }
    axios.get('http://138.68.74.39/api/todolists', config)
        .then(response => {console.log(response.data);commit('loadTodos', response.data)})
        .catch(error => console.log(error))
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
        .then(response => {console.log(response);commit("addList", payload.nom)})
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

//pas dans le projet final
export function suppList({commit}, idList){
    commit("addTodo", idList);
}

//filter
export function changeFilter({commit}, int){
    commit("changeFilter", int);
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
        .then(response => {console.log(response);commit("addTodo", {nom: payload.nom, idList: payload.idList})})
        .catch(error => console.log(error))
}

export function loadTodo({commit}, payload/*=> idList, token*/){
    const config = {
        headers: {Authorization : `Bearer ${payload.token}`}
    }

    axios.get('http://138.68.74.39/api/todos/'+payload.idList, config)
        .then(response => commit("loadTodo", {response: response.data, idList: payload.idList}))
        .catch(error => console.log(error))
}

export function suppTodo({commit}, payload/*=> idList, idTodo*/){
    commit("suppTodo", payload);
}

export function deleteDone({commit}, idList){
    console.log(idList)
    commit("deleteDone", idList);
}

export function checkTodos({commit}, payload/*=> idList, checked*/){
    commit("checkTodos", payload);
}

export function modifyTodo({commit}, payload/*idList, idTodo, nom, completed, token */){
    const config = {
        headers: {Authorization : `Bearer ${payload.token}`}
    }

    const bodyParameters = {
        key: payload.nom
    }

    axios.patch('http://138.68.74.39/api/todo/'+payload.idTodo+'?name='+payload.nom+'&completed='+payload.completed+'&todolist_id='+payload.idList, bodyParameters ,config)
        .then(response => {console.log("Modify Todo response :"+response);commit("modifyTodo", {idList: payload.idList, idTodo: payload.idTodo, nom: payload.nom})})
        .catch(error => console.log(error))
}