import { page, render } from './lib.js';
import * as api from './api/data.js';
import { getUserData } from './util.js';
import { dashboardPage } from './views/dashboard.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { profileBooksPage } from './views/profileBooks.js';

window.api = api;

const root = document.getElementById('site-content');
const logout = document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', dashboardPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/my-books', profileBooksPage);


updateUserNav();
page.start();


function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root)
    ctx.updateUserNav = updateUserNav;

    next();
}

function updateUserNav() {
    const userData = getUserData();

    if (userData) {                                 // ако има userData ЩЕ ПОКАЖЕ БУТОНИТЕ за USER, ако не - ще покаже за НЕ-USER бутоните
        document.querySelector('#user').style.display = 'inline-block';
        document.querySelector('#guest').style.display = 'none';
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;        // съхранили сме в api.js LOGIN и REGISTER userData-та
    } else {
        document.querySelector('#user').style.display = 'none';
        document.querySelector('#guest').style.display = 'inline-block';
    }
}

function onLogout() {
    api.logout();                                       // това идва от  export const logout = api.logout;  от api.js   ИЛИ  api.logout();  ОТ import * as api from './api/data.js';
    updateUserNav();
    page.redirect('/');
}