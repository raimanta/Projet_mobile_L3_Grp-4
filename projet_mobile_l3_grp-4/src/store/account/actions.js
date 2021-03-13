import axios from 'axios';

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