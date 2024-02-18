import { getUserData, setUserData, clearUserData } from '../util.js';
import { notify } from '../notify.js';

const hostname = 'http://localhost:3030';


async function request(url, options) {                               // функция която да извършва всички заявки
    try {
        const response = await fetch(hostname + url, options);      // hostname + url  => това е конкатенация, съединяват се двата стринга и дава целия URL АДРЕС

        if (response.ok == false) {                                 // OR   if (response.ok != true) {
            if (response.status == 403) {                           // 403 Forbidden Error – you don't have permission to access this resource is an HTTP status code that occurs when the web server understands the request but can't provide additional access.
                clearUserData();
            }
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {                               // 204 No Content: the server successfully processed the client's request, and that the server is not returning any content.
            return response;
        } else {
            return response.json();
        }

        /* OR this:
        try {
            return await response.json();
        } catch(err) {
            return response;
        }
        */
    } catch (err) {
        //alert(err.message);
        notify(err.message);
        throw err;
    }
}


function createOptions(method = 'get', data) {                      // options - това е options който го създаваме за горната функ. "request(url,options)".
    const options = {
        method,
        headers: {}
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if (userData) {                                                 // OR   if (userData != null) {
        options.headers['X-Authorization'] = userData.token;
    }

    return options;
}


export async function get(url) {
    return request(url, createOptions());
}

export async function post(url, data) {
    return request(url, createOptions('post', data));
}

export async function put(url, data) {
    return request(url, createOptions('put', data));
}

export async function del(url) {                       // не може delete да се казва защото е специална дума в javascript, затова е DEL името
    return request(url, createOptions('delete'));
}


export async function login(email, password) {          // !!! ВСЯКА НОВА ЗАДАЧА може да има други входни ПАРАМЕТРИ
    const result = await post('/users/login', { email, password });         // The service expects a body with the following shape:  { email, password }
    console.log(result);

    const userData = {                                  // !!! ВСЯКА НОВА ЗАДАЧА може да има други userData данни ... ПРОВЕРКА ВСЕКИ път тука спрямо условие на exam-a!!!
        username: result.username,
        email: result.email,
        id: result._id,
        gender: result.gender,
        token: result.accessToken
    };

    console.log(userData);

    setUserData(userData);

    return result;
}

export async function register(username, email, password, gender) {         // !!! ВСЯКА НОВА ЗАДАЧА може да има други входни ПАРАМЕТРИ
    const result = await post('/users/register', { username, email, password, gender });        // The service expects a body with the following shape:  { username, email, password, gender }
    console.log(result);

    const userData = {                                  // !!! ВСЯКА НОВА ЗАДАЧА може да има други userData данни ... ПРОВЕРКА!
        username: result.username,                      // userData - същото ИНФО като в login горе ^
        email: result.email,
        id: result._id,
        gender: result.gender,
        token: result.accessToken
    };

    console.log(userData);

    setUserData(userData);

    return result;
}

export async function logout() {
    get('/users/logout');     // НЕ ни интересува РЕЗУЛТАТА от ЗАЯВКАТА -> затова няма await и ЧИСТИМ данните на следващия ред
    clearUserData();
}