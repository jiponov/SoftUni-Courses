import { page, render } from './lib.js';
import { homePage } from './views/home.js';

/* debug */
// import-ирай всичко (*) от api.js файла тук като го преименуваш на api променлива
import * as api from './api/data.js';               //  OR  './api/api.js';      OR  './api/data.js';  
import { memesPage } from './views/memes.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './api/api.js';
import { getUserData } from './util.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { profilePage } from './views/profile.js';
window.api = api;                                   //  така тестваме в Console на CHROME ;

const root = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage);
page('/memes', memesPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/profile', profilePage);


updateUserNav()
page.start();


function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root)    // content е върнатия темплейт от homeTemplate + root-a в main го СЛОЖИ този темплейт
    ctx.updateUserNav = updateUserNav;                  // updateUserNav() трябва да е НАЛИЧНА в КОНТЕКСТА за да може МОДУЛИТЕ (login и register) да я викат

    next();
}


function onLogout() {
    logout();                                           // това идва от  export const logout = api.logout;  от api.js   ИЛИ  api.logout();  ОТ import * as api from './api/data.js';
    updateUserNav();
    page.redirect('/');
}


function updateUserNav() {
    const userData = getUserData();

    if (userData) {                                 // ако има userData ЩЕ ПОКАЖЕ БУТОНИТЕ за USER, ако не - ще покаже за НЕ-USER бутоните
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
        document.querySelector('.user span').textContent = `Welcome, ${userData.email}`;        // съхранили сме в api.js LOGIN и REGISTER userData-та
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }
}

