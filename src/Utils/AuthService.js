import axios from "axios";
import * as urls from "./urls.js";

export async function registerNewUser(userInfo) {

    let isError = false;

    if (userInfo.Nome && userInfo.Cognome && userInfo.Username && userInfo.Email && userInfo.Password && userInfo.ConfirmPassword) {

        if (userInfo.Password === userInfo.ConfirmPassword) {
            console.log("Uguali");
            await axios.post(urls.serverURL + '/register', {

                "first_name": userInfo.Nome.toString(),
                "last_name": userInfo.Cognome.toString(),
                "username": userInfo.Username.toString(),
                "email": userInfo.Email.toString(),
                "password": userInfo.Password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    let responseStatus = parseInt(error.response.status);
                    if (responseStatus === 401 || responseStatus === 400) {
                        console.log("Errore 401 or 400: Bad Request");
                        console.log(error);
                        isError = true;
                    } else if (responseStatus === 409) {
                        console.log("Errore 409: Conflict! Utente gia registrato");
                        isError = true;
                    }

                } else if (error.request) {
                    console.log("Errore 500: Errore server");
                    isError = true;
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Errore:', error.message);
                    isError = true;
                }
            });
        } else {
            console.log("Le password inserite non corrispondono");
            isError = true;
        }
    } else {
        console.log("Non hai inserito dei dati");
        isError = true;
    }

    return isError;
}


export async function doLogin(username, password) {

    let isError = false;

    if (username && password) { //localhost:7004   francescobergonzini.ns0.it

        await axios.post(urls.serverURL + '/api/token', {
            "username": username,
            "password": password,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => { localStorage.setItem("jwt", response.data); })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    let responseStatus = parseInt(error.response.status);
                    if (responseStatus === 401) {
                        console.log("Errore 401: Utente o password errati");
                        isError = true;
                    }

                } else if (error.request) {
                    console.log("Errore 500: errore server");
                    isError = true;
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Errore:', error.message);
                    isError = true;
                }
            });
    } else {
        console.log("Non hai inserito dei dati");
        isError = true;
    }

    return isError;
}