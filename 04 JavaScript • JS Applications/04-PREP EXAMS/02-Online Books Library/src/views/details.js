import { html } from '../lib.js';
import { getUserData } from '../util.js';
import { deleteById, getBookById } from '../api/data.js';


const detailsTemplate = (book, isOwner, onDelete) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <div class="actions">
            <!-- Edit/Delete buttons ( Only for creator of this book )  -->
            ${isOwner 
            ? html`
            <a class="button" href="/edit/${book._id}">Edit</a>
            <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
            : null}

            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            <a class="button" href="#">Like</a>

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`;

/*
const bookCard = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}"></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>`
*/


export async function detailsPage(ctx) {
    //console.log(ctx);
    //console.log(ctx.params);

    const book = await getBookById(ctx.params.id);
    console.log(book);

    const userData = getUserData();
    console.log(userData);
    const isOwner = userData && book._ownerId == userData.id;

    ctx.render(detailsTemplate(book, isOwner, onDelete));


    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this book FOREVER?');       
        if (choice) {                                          
            await deleteById(ctx.params.id)
            ctx.page.redirect('/');                        
        }
    }
}