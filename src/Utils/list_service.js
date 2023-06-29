import * as urls from "./urls.js";
import axios from "axios";
import * as jose from 'jose';

// Take all list, for user
export async function TakeList() {

    let responseData;
    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    await axios.get(urls.serverURL + '/list/' + UserId, {
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

// Take list element for specific list
export async function TakeListElement(listId) {

    let responseData;
    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    await axios.get(urls.serverURL + '/list/element/' + listId, {
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

// Update element list
export async function UpdateListElement(listId, listElementId, doCurrent, description) {

    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    await axios.put(urls.serverURL + '/list/element/' + listId, {

        "list_element_id": listElementId,
        "description": description,
        "do": doCurrent,
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

// Delete element list
export async function DeleteListElement(listId, listElementId) {

    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    await axios.delete(urls.serverURL + '/list/element/' + listId, {
        data: {
            "list_element_id": listElementId,
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

// Update list
export async function UpdateList(listId, titleList, newUserId) {

    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    await axios.put(urls.serverURL + '/list/' + UserId, {

        "list_id": listId,
        "title": titleList,
        "new_user_id": newUserId,
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

// Create new list element
export async function CreateElementList(listId, description) {

    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    await axios.post(urls.serverURL + '/list/element/' + listId, {

        "description": description,
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

// Delete list
export async function DeleteList(listId) {

    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    await axios.delete(urls.serverURL + '/list/' + UserId, {
        data: {
            "list_id": listId,
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

// Create List
export async function CreateList(title) {

    let responseData;
    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    await axios.post(urls.serverURL + '/list/' + UserId, {

        "title": title.toString(),
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


