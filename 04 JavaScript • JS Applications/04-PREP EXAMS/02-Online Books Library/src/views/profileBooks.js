import { html } from '../lib.js';
import { getMyBooksInProfile } from '../api/data.js';
import { getUserData } from '../util.js';


const myBooksTemplate = (books, userData) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for every user's books (if any) -->
    <ul class="my-books-list">
        ${books.length == 0
        ? html`<p class="no-books">No books in database!</p>`
        : books.map(bookCard)}
    </ul>

    <!-- Display paragraph: If the user doesn't have his own books  -->
</section>`;


const bookCard = (book) => html`            
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}"></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>`


export async function profileBooksPage(ctx) {
    const userData = getUserData();
    console.log(userData);

    const books = await getMyBooksInProfile(userData.id);
    console.log(books);
    console.log(userData.id);

    ctx.render(myBooksTemplate(books, userData));
}