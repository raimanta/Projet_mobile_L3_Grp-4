export function connect({commit}, payload/*=> name, password*/){
    commit("connect", payload);
}

export function register({commit}, payload/*=> name, password*/){
    commit("register", payload);
}