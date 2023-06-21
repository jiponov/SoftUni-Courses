function countStringOccurrences(text, word) {
    word = ` ${word} `;
    text = ` ${text} `;

    let counter = 0;
    let index = 0;
    let found = text.indexOf(word);

    while (found != -1) {
        counter++;
        index = found + 1;
        found = text.indexOf(word, index);
    }

    console.log(counter)
}

countStringOccurrences(
    'This is a word and it also is a sentence',
    'is'
);