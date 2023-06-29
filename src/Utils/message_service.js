import * as urls from "./urls.js";
import axios from "axios";
import * as jose from 'jose';


export async function TakeUserId() {

    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    return UserId;
}

// Take messages
export async function TakeMessages() {

    let responseData;
    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    await axios.get(urls.serverURL + '/message/' + UserId, {
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

// Create message
export async function CreateMessage(message) {

    let responseData;
    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    await axios.post(urls.serverURL + '/message/' + UserId, {

        "message": String(message),
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

// Update message
export async function UpdateMessage(messageId, newAllowed) {

    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    for (let i = 0; i < newAllowed.length; i++) {

        await axios.put(urls.serverURL + '/message/' + UserId, {
            "message_id": messageId,
            "new_user_id": newAllowed[i],
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
    }


    return false;
}