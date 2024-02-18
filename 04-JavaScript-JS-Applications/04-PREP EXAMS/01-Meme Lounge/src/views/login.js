import { html } from '../lib.js';
import { login } from '../api/data.js';
import { notify } from '../notify.js';


const loginTemplate = (onSubmit) => html`
<section id="login">
    <form @submit=${onSubmit} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>
`;


export function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);                // върху submit бутона таргета

        const email = formData.get('email').trim();                 // name="email"  атрибута от htmla-a
        const password = formData.get('password').trim();           // name="password"  атрибута от htmla-a

        if (email == '' || password == '') {
            return notify('All fields are required!');
        }

        await login(email, password);                               // за ERROR грешката го направихме вече в api.js и тук ще се покаже ако има грешка и надолу няма да се изпълнява кода
        ctx.updateUserNav();
        ctx.page.redirect('/memes');                                // редирект към страницата /memes СЛЕД като сте направили УСПЕШЕН опит за LOGIN с имейл & парола
    }
}