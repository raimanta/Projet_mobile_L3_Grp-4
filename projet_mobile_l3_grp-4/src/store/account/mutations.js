export function connect(state, response){
    console.log(response);
    state.token = response.data.token;
    localStorage.setItem('account/token', state.token)
}

export function getUser(state, response){
    console.log(response)
    state.user = response.data
    localStorage.setItem('account/user/name', state.user.name)
    localStorage.setItem('account/user/email', state.user.email)
}

export function disconnect(state){
    state.token = ""
    state.user = ""
    localStorage.setItem('account/token', "")
    localStorage.setItem('account/user/name', "")
    localStorage.setItem('account/user/email', "")
    console.log(state)
}