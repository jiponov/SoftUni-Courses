import { html } from '../lib.js';
import { getAllBooks } from '../api/data.js';


const dashboardTemplate = (books) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <ul class="other-books-list">
        ${books.length == 0
        ? html`<p class="no-books">No books in database!</p>`
        : books.map(bookCard)}
    </ul>
</section>`;


const bookCard = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}"></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>`


export async function dashboardPage(ctx) {
    const books = await getAllBooks();
    console.log(books);

    ctx.render(dashboardTemplate(books));
}