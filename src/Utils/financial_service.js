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


export async function AddIncome(dataCreazione, title, price, method, category) {

    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;

    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    await axios.post(urls.serverURL + '/income/' + UserId, {

        'name': title,
        'category': category,
        'data': dataCreazione,
        'amount': price,
        'method': method,
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


export async function AddExpenses(dataCreazione, title, price, method, category) {

    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;


    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    await axios.post(urls.serverURL + '/expense/' + UserId, {

        'title': title,
        'category': category,
        'data': dataCreazione,
        'amount': price,
        'method': method,
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

function TakeNumberForString(month) {
    switch (month) {
        case 'Jan': return '01';
            break;
        case 'Feb': return '02';
            break;
        case 'Mar': return '03';
            break;
        case 'Apr': return '04';
            break;
        case 'May': return '05';
            break;
        case 'Jun': return '06';
            break;
        case 'Jul': return '07';
            break;
        case 'Aug': return '08';
            break;
        case 'Sept': return '09';
            break;
        case 'Oct': return '10';
            break;
        case 'Nov': return '11';
            break;
        case 'Dec': return '12';
            break;
    }
}

export async function TakeIncomeMonth(month) {

    let responseData;
    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;
    let monthNumber = TakeNumberForString(month);

    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    await axios.get(urls.serverURL + '/income/month/' + UserId + "/" + parseInt(monthNumber), {
        'month': parseInt(monthNumber),
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

export async function TakeExpenseMonth(month) {

    let responseData;
    let jwt = localStorage.getItem("jwt");
    let jwtDecode = jose.decodeJwt(jwt);
    let UserId = jwtDecode.user_id;
    let monthNumber = TakeNumberForString(month);

    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    await axios.get(urls.serverURL + '/expense/month/' + UserId + "/" + parseInt(monthNumber), {
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

