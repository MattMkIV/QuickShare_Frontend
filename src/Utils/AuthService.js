import axios from "axios";
import * as urls from "./urls.js";
import * as jose from 'jose';

//Register new user 
export async function registerNewUser(userInfo) {

    let isError = false;

    if (userInfo.Nome && userInfo.Cognome && userInfo.Username && userInfo.Email && userInfo.Password && userInfo.ConfirmPassword) {

        if (userInfo.Password === userInfo.ConfirmPassword) {
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

//Check JWT
export async function checkJwt() {
    const jwt = localStorage.getItem("jwt");
    let jwtError = false;

    if (jwt) {
        console.log("JWT presente.");

        const claims = jose.decodeJwt(jwt);
        const actualTime = parseInt(Date.now() / 1000);

        if (actualTime > claims.exp) {
            console.log("Scaduto");

            let jwtRefresh = localStorage.getItem("jwtRefresh");
            await axios.post(urls.serverURL + '/api/token/refresh/', {
                "refresh": jwtRefresh,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => { localStorage.removeItem("jwt"); localStorage.setItem("jwt", response.data.access); })
                .catch(function (error) {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        let responseStatus = parseInt(error.response.status);
                        if (responseStatus === 401) {
                            console.log("Errore 401: Utente o password errati");
                            jwtError = true;
                        }

                    } else if (error.request) {
                        console.log("Errore 500: errore server");
                        jwtError = true;
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Errore:', error.message);
                        jwtError = true;
                    }
                });
        }

    } else jwtError = true;

    return jwtError;
}

//Do Login
export async function doLogin(username, password) {

    let isError = false;

    if (username && password) {

        await axios.post(urls.serverURL + '/api/token/', {
            "username": username,
            "password": password,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => { localStorage.setItem("jwt", response.data.access); localStorage.setItem("jwtRefresh", response.data.refresh); })
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

//Take user info, 1 parameter
export async function TakeUserInfo(userId) {

    let responseData;
    let jwt = localStorage.getItem("jwt");

    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    await axios.get(urls.serverURL + '/user/info/' + userId, {
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

//Take user info from JWT
export async function TakeUserInfoFromJwt() {

    let responseData;
    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    await axios.get(urls.serverURL + '/user/info/' + UserId, {
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

//Take user info by email
export async function TakeUserInfoByEmail(userEmail) {

    let responseData;
    let jwt = localStorage.getItem("jwt");

    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    await axios.get(urls.serverURL + '/user/info/email/' + userEmail, {
    }, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    }).then(response => {
        responseData = response.data[0];
    }).catch(function (error) {
        if (error.request) {
            console.log("Errore 500: errore server");
            return true;
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Errore:', error.message);
            return true;
        }
    });

    return responseData;
}

//Take user info of allowed
export async function TakeUserInfoAll(allowed) {

    const responseData = [];
    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    for (let i = 0; i < allowed.length; i++) {

        await axios.get(urls.serverURL + '/user/info/' + allowed[i], {
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            responseData.push(response.data[0]);
        }).catch(function (error) {
            if (error.request) {
                console.log("Errore 500: errore server");
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Errore:', error.message);
            }
        });
    }

    return responseData;
}