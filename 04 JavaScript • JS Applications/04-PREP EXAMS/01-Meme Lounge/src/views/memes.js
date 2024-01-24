import { html } from '../lib.js';
import { getAllMemes } from '../api/data.js'


//<!-- Display : All memes in database ( If any ) -->        
//<!-- Display : If there are no memes in database --> 
const memesTemplate = (memes) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        ${memes.length == 0 
            ? html`<p class="no-memes">No memes in database.</p>`
            : memes.map(memeCard)}               
    </div>
</section>`;


// малкото memeCard (ПРИЕМА едното МЕМЕ) и ВРЪЩА=> малкия ТЕМПЛЕЙТ
const memeCard = (meme) => html`            
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${meme.title}</p>
            <img class="meme-image" alt="meme-img" src="${meme.imageUrl}">
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${meme._id}">Details</a>
        </div>
    </div>
</div>`;


export async function memesPage(ctx) {
    const memes = await getAllMemes();                  // Масива с МЕМЕТА
    console.log(memes);
    ctx.render(memesTemplate(memes));                   // за ТЕСТ на меметата:  ctx.render(memesTemplate([1,2,3,4]));
}