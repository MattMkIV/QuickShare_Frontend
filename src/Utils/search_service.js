import * as urls from "./urls.js";
import axios from "axios";
import * as jose from 'jose';

// Search function
export async function Search(searchText, type) {
    let responseData;
    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    switch (String(type)) {
        case 'notes' : {
            await axios.get(urls.serverURL + '/search/notes/' + UserId + '/' + searchText, {
                'text': searchText,
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
            break;
        }

        case 'lists' : {
            await axios.get(urls.serverURL + '/search/lists/' + UserId + '/' + searchText, {
                'text': searchText,
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
            break;
        }

        case 'events' : {
            await axios.get(urls.serverURL + '/search/events/' + UserId + '/' + searchText, {
                'text': searchText,
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
            break;
        }
        default : {
            break;
        }
    }
    return responseData;

}