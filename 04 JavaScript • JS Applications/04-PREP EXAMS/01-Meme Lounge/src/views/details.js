import { html } from '../lib.js';
import { deleteById, getMemeById } from '../api/data.js';
import { getUserData } from '../util.js';


const detailsTemplate = (meme, isOwner, onDelete) => html`
<section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="${meme.imageUrl}">
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>

            <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            ${isOwner ?
            html`<a class="button warning" href="/edit/${meme._id}">Edit</a>
            <button @click=${onDelete} class="button danger">Delete</button>`
            : null}

        </div>
    </div>
</section>`;


export async function detailsPage(ctx) {
    console.log(ctx);
    console.log(ctx.params);

    const meme = await getMemeById(ctx.params.id);
    console.log(meme);

    const userData = getUserData();
    const isOwner = userData && meme._ownerId == userData.id;

    console.log(userData);
    console.log(meme);
    console.log(isOwner);


    ctx.render(detailsTemplate(meme, isOwner, onDelete));


    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this meme FOREVER?');       // confirm - ЗАДАВАМЕ въпрос към ПОТРЕБИТЕЛЯ : искаш ли?
        if (choice) {                                           // ако КЛИКНЕ да потвърждавам - ИЗТРИВАМЕ мемето
            await deleteById(ctx.params.id)
            ctx.page.redirect('/memes');                        // ако след AWAITa всичко е наред и се изпълни ТО ПРЕНАСОЧИ към memes адреса ALL MEMES
        }
    }
}