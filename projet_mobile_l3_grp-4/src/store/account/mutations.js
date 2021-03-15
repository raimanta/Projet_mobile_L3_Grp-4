export function connect(state, response){
    console.log(response);
    state.token = response.data.token;
}

export function getUser(state, response){
    console.log(response)
}