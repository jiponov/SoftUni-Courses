import { html } from '../lib.js';
import { profileGetMyMemes } from '../api/data.js'
import { getUserData } from '../util.js';


const profileTemplate = (memes, userData) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${userData.gender}.png">
        <div class="user-content">
            <p>Username: ${userData.username}</p>
            <p>Email: ${userData.email}</p>
            <p>My memes count: ${memes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        <!-- Display : All created memes by this user (If any) -->

        <!-- Display : If user doesn't have own memes  
        <p class="no-memes">No memes in database.</p> -->

        ${memes.length == 0 
            ? html`<p class="no-memes">No memes in database.</p>`
            : memes.map(memeCard)} 
        
    </div>
</section>`;


const memeCard = (meme) => html`            
<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src="${meme.imageUrl}">
    <a class="button" href="/details/${meme._id}">Details</a>
</div>`;


export async function profilePage(ctx) {
    const userData = getUserData();
    console.log(userData);

    const memes = await profileGetMyMemes(userData.id);
    console.log(memes); 
    console.log(userData.id);

    ctx.render(profileTemplate(memes, userData));
}