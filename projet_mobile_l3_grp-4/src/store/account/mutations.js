export function connect(state, response){
    state.token = response.data.token;
    localStorage.setItem('account/token', state.token)
}

export function connectLocal(state){
    state.token = localStorage.getItem('account/token');
}

export function getUser(state, response){
    state.user = response.data
    localStorage.setItem('account/user', state.user)
}

export function getUserLocal(state){
    state.user = localStorage.getItem('account/user');
}

export function disconnect(state){
    state.token = ""
    state.user = ""
    localStorage.setItem('account/token', "")
    localStorage.setItem('account/user', "")
}