export function connect(state, response){
    console.log(response);
    state.token = response.data.token;
<<<<<<< HEAD
}

export function getUser(state, response){
    console.log(response)
=======
>>>>>>> 6e9958f5138162be8d27646094c807ec57205ff7
}