import * as urls from "./urls.js";
import axios from "axios";
import * as jose from 'jose';


export async function TakeNote() {

    let responseData;
    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    await axios.get(urls.serverURL + '/note/' + UserId, {
    }, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    }).then(response => {
        responseData = response.data;
    }).catch(function (error) {
        if (error.request) {
            console.log("Errore 500: errore server");
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Errore:', error.message);
        }
    });
    return responseData;
}

// Update Note
export async function UpdateNote(title, body, newUser, noteId) {

    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    await axios.put(urls.serverURL + '/note/' + UserId, {

        "new_user_id": newUser,
        "note_id": noteId,
        "title": title.toString(),
        "body": body.toString(),
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
                return true;
            } else if (responseStatus === 409) {
                console.log("Errore 409: Conflict! Utente gia registrato");
                return true;
            }

        } else if (error.request) {
            console.log("Errore 500: Errore server");
            return true;
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Errore:', error.message);
            return true;
        }
    });

    return false;
}

// Create Note
export async function CreateNote(title, body) {

    let responseData;
    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    await axios.post(urls.serverURL + '/note/' + UserId, {

        "title": title.toString(),
        "body": body.toString(),
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => {
        responseData = response.data;
    }).catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            let responseStatus = parseInt(error.response.status);
            if (responseStatus === 401 || responseStatus === 400) {
                console.log("Errore 401 or 400: Bad Request");
                console.log(error);
                return [true];
            } else if (responseStatus === 409) {
                console.log("Errore 409: Conflict! Utente gia registrato");
                return [true];
            }

        } else if (error.request) {
            console.log("Errore 500: Errore server");
            return [true];
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Errore:', error.message);
            return [true];
        }
    });

    return [false, responseData];
}

// Update Note
export async function DeleteNote(noteId) {

    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    await axios.delete(urls.serverURL + '/note/' + UserId, {
        data: {
            "note_id": noteId,
        },
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
                return true;
            } else if (responseStatus === 409) {
                console.log("Errore 409: Conflict! Utente gia registrato");
                return true;
            }

        } else if (error.request) {
            console.log("Errore 500: Errore server");
            return true;
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Errore:', error.message);
            return true;
        }
    });

    return false;
}
