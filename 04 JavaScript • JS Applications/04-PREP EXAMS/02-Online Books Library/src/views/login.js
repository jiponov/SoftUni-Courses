import { html } from '../lib.js';
import { login } from '../api/data.js';


const loginTemplate = (onSubmit) => html`
<section id="login-page" class="login">
    <form @submit=${onSubmit} id="login-form" action="" method="">
        <fieldset>
            <legend>Login Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Login">
        </fieldset>
    </form>
</section>`;


export function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);                // върху submit бутона таргета

        const email = formData.get('email').trim();                 // name="email"  атрибута от htmla-a
        const password = formData.get('password').trim();           // name="password"  атрибута от htmla-a

        if (email == '' || password == '') {
            return alert('All fields are required!');
        }

        await login(email, password);                               // за ERROR грешката го направихме вече в api.js и тук ще се покаже ако има грешка и надолу няма да се изпълнява кода
        ctx.updateUserNav();
        ctx.page.redirect('/');
    }
}