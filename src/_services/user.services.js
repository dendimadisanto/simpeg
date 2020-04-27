import config from '../config/config';
import { authHeader } from '../_helpers';

export const userServices = {
    login,
    getUsers,
    logout
}

function login(email, password){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    }

    return fetch(`${config.base_url}/login`, requestOptions).then(handleResponse)
}

function logout(){
    const requestOptions = {
        method: 'POST',
        headers : authHeader()
    }

    return fetch(`${config.base_url}/logout`, requestOptions).then(handleResponse)
}

function getUsers(token){
    const requestOptions = {
        method: 'GET',
        headers : authHeader()
    }

    return fetch(`${config.base_url}/users/login`,requestOptions).then(handleResponse);
}

function handleResponse(response){
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        data.success = response.ok;
        return data;
    })
}

