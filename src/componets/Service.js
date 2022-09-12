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

function create(body) {
    const config = getToken();
    const promise = axios.post(`${BASE_URL}/habits`, body, config);
    return promise;
}

/* function getHabits() {
  const config = getToken();
  const promise = axios.get(`${BASE_URL}/habits`, config);
  return promise;
}

function deleteHabits(id) {
  const config = getToken();
  const promise = axios.delete(`${BASE_URL}/habits/${id}`, config);
  return promise;
}

function getToday() {
  const config = getToken();
  const promise = axios.get(`${BASE_URL}/habits/today`, config);
  return promise;
}

function checkHabit(id, op_url) {
  const config = getToken();
  const promise = axios.post(`${BASE_URL}/habits/${id}/${op_url}`, {}, config);
  return promise;
}

function getHistory() {
  const config = getToken();
  const promise = axios.get(`${BASE_URL}/habits/history/daily`, config);
  return promise;
}
 */
export { singUp, create, setToken,
  getToken, login};