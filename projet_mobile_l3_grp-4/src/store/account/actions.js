import axios from 'axios';

export var connect = async function connect({commit}, payload/*=> email, password*/){
    let password = payload.password
    let email = payload.email
    try {
        const resp = await axios.post('http://138.68.74.39/api/login?email='+email+'&password='+password);
        commit('connect', resp)
    }
    catch(err) {
        console.error(err)
    }
        //.then(response => commit('connect', response))
        //.catch(error => console.log(error))
export function connect({commit}, payload/*=> email, password*/){
    let password = payload.password
    let email = payload.email

    axios.post('http://138.68.74.39/api/login?email='+email+'&password='+password)
        .then(response => commit('connect', response))
        .catch(error => console.log(error))
}

export function register({commit}, payload/*=> nom, email, password*/){
    let password = payload.password
    let email = payload.email
    let nom = payload.nom

    axios.post('http://138.68.74.39/api/register?name='+nom+'&email='+email+'&password='+password)
        .then(response => commit('connect', response))
        .catch(error => console.log(error))
}

export function getUser({commit}, token){
    const config = {
        headers: {Authorization : `Bearer ${token}`}
    }

    axios.get("http://138.68.74.39/api/user", config)
            .then(response => commit('getUser', response))
            .catch(error => console.log(error))
}