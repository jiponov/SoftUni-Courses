// 100/100 !!!
class ArtGallery {

    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { 'picture': 200, 'photo': 50, 'item': 250 };
        this.listOfArticles = [];
        this.guests = [];
    }


    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();

        if (!this.possibleArticles[articleModel]) {
            throw new Error('This article model is not included in this gallery!');
        }

        const article = this.listOfArticles.find(x => x.articleName === articleName && x.articleModel === articleModel);

        if (article) {
            article.quantity += quantity;
        } else {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }


    inviteGuest(guestName, personality) {
        if (this.guests.find(x => x.guestName === guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let points = 50;

        if (personality === 'Vip') {
            points = 500;
        } else if (personality === 'Middle') {
            points = 250;
        }

        this.guests.push({ guestName, points, purchaseArticle: 0 });
        return `You have successfully invited ${guestName}!`;
    }


    buyArticle(articleModel, articleName, guestName) {
        articleModel = articleModel.toLowerCase();

        const article = this.listOfArticles.find(x => x.articleName === articleName && x.articleModel === articleModel);

        if (!article) {
            throw new Error('This article is not found.');
        }

        if (article.quantity == 0) {
            return `The ${articleName} is not available.`;
        }

        const guest = this.guests.find(x => x.guestName === guestName);

        if (!guest) {
            return 'This guest is not invited.';
        }

        if (guest.points < this.possibleArticles[articleModel]) {
            return 'You need to more points to purchase the article.';
        }

        guest.points -= this.possibleArticles[articleModel];
        article.quantity--;
        guest.purchaseArticle++;

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }


    showGalleryInfo(criteria) {
        const output = [];
        if (criteria === 'article') {
            output.push('Articles information:');
            this.listOfArticles.forEach(x => output.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`));
        } else {
            output.push('Guests information:');
            this.guests.forEach(x => output.push(`${x.guestName} - ${x.purchaseArticle}`));
        }
        return output.join('\n');
    }
}


const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

// Articles information:
//  picture - Mona Liza - 3
//  item - Ancient vase - 1
//  Guests information:
//  John - 1
//  Peter - 1


// INPUT 1 • addArticle()
// const artGalleryEXAMPLE1 = new ArtGallery('Curtis Mayfield');

// console.log(artGalleryEXAMPLE1.addArticle('picture', 'Mona Liza', 3));
// console.log(artGalleryEXAMPLE1.addArticle('Item', 'Ancient vase', 2));
// console.log(artGalleryEXAMPLE1.addArticle('PICTURE', 'Mona Liza', 1));

// console.log(artGalleryEXAMPLE1);

/* OUTPUT 1
Successfully added article Mona Liza with a new quantity- 3.
Successfully added article Ancient vase with a new quantity- 2.
Successfully added article Mona Liza with a new quantity- 1.

ArtGallery {
  creator: 'Curtis Mayfield',
  possibleArticles: { picture: 200, photo: 50, item: 250 },
  listOfArticles: [
    { articleModel: 'picture', articleName: 'Mona Liza', quantity: 7 },
    { articleModel: 'item', articleName: 'Ancient vase', quantity: 4 },
    { articleModel: 'picture', articleName: 'Mona Liza', quantity: 2 }
  ],
  guests: []
}
*/

// -----------------------------------------------------------------------------------------------

// INPUT 2 • inviteGuest ()
// const artGalleryEXAMPLE2 = new ArtGallery('Curtis Mayfield');
// console.log(artGalleryEXAMPLE2.inviteGuest('John', 'Vip'));
// console.log(artGalleryEXAMPLE2.inviteGuest('Peter', 'Middle'));
// console.log(artGalleryEXAMPLE2.inviteGuest('John', 'Middle'));             // OKAY е като хвърля ГРЕШКА с ctrl+F5 (това е идеята, хвърля THROW) !!!!!!!

/* OUTPUT 2
 You have successfully invited John!
 You have successfully invited Peter!
 John has already been invited.                                     ---> Error: John has already been invited.
*/

// -----------------------------------------------------------------------------------------------

// INPUT 3 • buyArticle()
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

/* OUTPUT 3
John successfully purchased the article worth 200 points.
Peter successfully purchased the article worth 250 points.
This article is not found.
*/

// -----------------------------------------------------------------------------------------------

