function countStringOccurrences(text, word) {         // Hints:  Split the sentence into words and create a counter that stores how many times the searched word occurs.

    word = ` ${word} `;
    text = ` ${text} `;     // в началото и в края няма space
    let counter = 0;

    let index = 0;

    while (text.indexOf(word, index) != -1) {
        counter++;
        index = text.indexOf(word, index) + 1;
    }

    console.log(counter);
}
countStringOccurrences(
    'This is a word and it also is a sentence',
    'is'
);