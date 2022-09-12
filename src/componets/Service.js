import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function setToken(token, setUser) {
    localStorage.setItem('mywallet', JSON.stringify({token:token}));

    setUser({token})
}  

function getToken() {
    const auth = JSON.parse(localStorage.getItem('mywallet'))
    if(!auth){
        return false
    }
    const config = {
        headers: {
        Authorization: `Bearer ${auth.token}`
        }
    };

    return config;
}

function singUp(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
}

function login(body) {
    const promise = axios.post(`${BASE_URL}/sign-in`, body);
    return promise;
}

function getMyWallet(body) {
    const config = getToken();
    const promise = axios.get(`${BASE_URL}/mywallet`, body, config);
    return promise;
}

function newTransaction(body) {
    const config = getToken();
    const promise = axios.post(`${BASE_URL}/mywallet`, body, config);
    return promise;
}

/* function updateTransaction(body) {
    const config = getToken();
    const promise = axios.put(`${BASE_URL}/mywallet`, body, config);
    return promise;
}

function deleteTransaction(body) {
    const config = getToken();
    const promise = axios.delete(`${BASE_URL}/mywallet`, body, config);
    return promise;
} */

export { singUp, getMyWallet, newTransaction, setToken,
  getToken, login, /* updateTransaction, deleteTransaction */};