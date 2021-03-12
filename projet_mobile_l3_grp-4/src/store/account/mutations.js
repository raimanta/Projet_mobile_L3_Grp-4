export function connect(state, payload){
    let name = payload.name;
    let password = payload.password;
    console.log(name+"  "+password);
}

export function register(state, payload){
    let name = payload.name;
    let password = payload.password;
    console.log(name+"  "+password);
}