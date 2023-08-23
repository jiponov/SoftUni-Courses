function countStringOccurrences(text, word) {

    console.log(text.split(' ').filter(el => el == word).length);
}

countStringOccurrences(
    'This is a word and it also is a sentence',
    'is'
);