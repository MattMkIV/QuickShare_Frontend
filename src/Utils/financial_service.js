import * as urls from "./urls.js";
import axios from "axios";
import * as jose from 'jose';


export async function TakeIncome() {

    let responseData;
    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    await axios.get(urls.serverURL + '/income/' + UserId, {
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


export async function TakeExpense() {

    let responseData;
    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    await axios.get(urls.serverURL + '/expense/' + UserId, {
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


export async function AddIncome(incomeInfo) {

    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    console.log(imageBase64);

    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    await axios.post(urls.serverURL + '/income/' + UserId, {

        'name': ,
        'category': ,
        'data': ,
        'amount': ,
        'method': ,
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
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

    return false;
}


export async function AddExpenses(expenseInfo) {

    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    console.log(imageBase64);

    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    await axios.post(urls.serverURL + '/expense/' + UserId, {

        'title': ,
        'category': ,
        'data': ,
        'amount': ,
        'method': ,
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
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

    return false;
}