import axios from 'axios';

const HOST = "192.168.0.15"
const AUTH_PROTOCOL = "https"
const AUTH_PORT = "3040"


const APP_PROTOCOL = "192.168.0.15"
const APP_PORT = "3000"

//const host = "localhost"

const AUTH_BASE_URL = `${AUTH_PROTOCOL}://${HOST}:${AUTH_PORT}`
const APP_BASE_URL = `${APP_PROTOCOL}://${HOST}:${APP_PORT}`

function expiredToken (error) {
    refreshToken()
    window.location.reload(false);
}

//function logoutAction() {
//    logoutUser()
//    window.location.reload(false);
//}

export async function getRequest(url){
    return new Promise((resolve, reject) => {
        axios.get(url, {withCredentials: true, headers: {'Content-Type': 'application/json'}})
            .then(response => { resolve(response.data) })
            .catch((error) => {
                console.log(error)
                if (error.response.data.message === "Token is expired" ) {
                    expiredToken(error)
                }
                else {
                    reject(error)
                }
            })
    });
}

export async function getRequestWithBody(url, dat){
    return new Promise((resolve, reject) => {
        axios.get(url, {withCredentials: true, headers: {'Content-Type': 'application/json'}}, dat)
            .then(response => { resolve(response.data) })
            .catch((error) => {
                if (error.response.data.message === "Token is expired" ) {
                    expiredToken(error)
                }
                else {
                    reject(error)
                }
            })
    });
}

export async function postRequest(url, data){
    return new Promise((resolve, reject) => {
        axios.post(url, data, {withCredentials: true, headers: {'Content-Type': 'application/json'}})
            .then(response => { resolve(response.data) })
            .catch((error) => {
                if (error.response && error.response.data.message === "Token is expired" ) {
                    expiredToken(error)
                }
                else {
                    reject(error)
                }
            })
    });
}

export async function postRequestW(url){
    return new Promise((resolve, reject) => {
        axios.post(url, {}, {withCredentials: true, headers: {'Content-Type': 'application/json'}})
            .then(response => { resolve(response.data) })
            .catch((error) => {
                if (error.response.data.message === "Token is expired" ) {
                    expiredToken(error)
                }
                else {
                    reject(error)
                }
            })
    });
}

export async function deleteRequest(url){
    return new Promise((resolve, reject) => {
        axios.delete(url, {withCredentials: true, headers: {'Content-Type': 'application/json'}})
            .then(response => { resolve(response.data) })
            .catch((error) => {
                if (error.response.data.message === "Token is expired" ) {
                    expiredToken(error)
                }
                else {
                    reject(error)
                }
            })
    });
}

export async function putRequest(url, data){
    return new Promise((resolve, reject) => {
        axios.put(url, data, {withCredentials: true, headers: {'Content-Type': 'application/json'}})
            .then(response => { resolve(response.data) })
            .catch((error) => {
                if (error.response.data.message === "Token is expired" ) {
                    expiredToken(error)
                }
                else {
                    reject(error)
                }
            })
    });
}

export async function postRequestRaw(url, data){
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            withCredentials: true, 
            headers: {'Content-Type': 'text/plain', 
            processData: false,
        }})
            .then(response => { resolve(response.data) })
            .catch((error) => {
                if (error.response.data.message === "Token is expired" ) {
                    expiredToken(error)
                }
                else {
                    reject(error)
                }
            })
    });
}


export function setUsername(username){
    localStorage.setItem("username", username);
}

export function getUsername(){
    return localStorage.getItem("username");
}

export function setEmail(email){
    localStorage.setItem("email", email);
}

export function setLogin(){
    localStorage.setItem("login", "true");
}

export function getLogin(){
    return localStorage.getItem("login");
}

export function setLogOut(){
    localStorage.setItem("login", "false");
}

export function isLoggedIn(){
    return getLogin();
}

export async function logoutUser(){
    logout().then(res => {
        setLogOut();
        setUsername(res.usuario);
        setEmail(res.email);
    }).catch(err => {
        console.log(err)
    })
}

export function getEmail(){
    return localStorage.getItem("email");
}

export function doesSupportStorage(){
    return (typeof(Storage) !== "undefined");
}

export async function login(username, password) {
    let usr = {
        "email": username,
        "password": password
    }
    let url = AUTH_BASE_URL + "/signin"
    return postRequest(url, usr)
}

export async function connectWs() {
    return(new WebSocket("wss://192.168.0.15:3000/ws"))

}