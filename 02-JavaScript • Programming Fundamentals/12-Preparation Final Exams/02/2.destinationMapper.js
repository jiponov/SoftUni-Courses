function destinationMapper(text) {          // 100/100
    'use strict'

    let pattern = /(?<symbol>\=|\/)(?<word>[A-Z]{1}[A-Za-z]{2,})\1/g;
    let match = pattern.exec(text);

    let collection = [];
    //console.log(match)
    //console.log(match.groups)
    while (match != null) {
        let word = match.groups.word;
        collection.push(word);

        match = pattern.exec(text);
    }
    //console.log(match)
    //console.log(collection)

    let points = collection
        .map(el => el.length)
        .reduce((a, v) => a + v, 0)

    console.log(`Destinations: ${collection.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log('-------');
destinationMapper("ThisIs some InvalidInput");