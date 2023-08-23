function revealWords(words, text) {         // решение с МАСИВ
    'use strict'
    words = words.split(', ');
    text = text.split(' ');
    let output = [];

    for (let el of text) {
        let replaced = false;

        for (let word of words) {
            if (el == '*'.repeat(word.length)) {
                output.push(word);
                replaced = true;
            }
        }

        if (replaced == false) {
            output.push(el);
        }
    }

    console.log(output.join(' '));
}

revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
);

