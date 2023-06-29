import * as urls from "./urls.js";
import axios from "axios";
import * as jose from 'jose';

// Take event
export async function TakeEvent(date) {

    let responseData;
    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    await axios.get(urls.serverURL + '/calendar/' + UserId + "/" + date, {
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

// Create event
export async function CreateEvent(date, title) {

    let responseData;
    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    await axios.post(urls.serverURL + '/calendar/' + UserId + '/' + date, {

        "title": String(title),
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

// Delete element list
export async function DeleteEvent(calendarId) {

    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    await axios.delete(urls.serverURL + '/calendar/' + UserId + '/' + calendarId, {
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