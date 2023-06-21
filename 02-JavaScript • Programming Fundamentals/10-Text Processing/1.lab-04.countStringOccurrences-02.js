function countStringOccurrences(text, word) {         // Hints:  Split the sentence into words and create a counter that stores how many times the searched word occurs.
    let counter = 0;
    let tokens = text.split(' ');
    //console.log(tokens)

    for (let token of tokens) {
        if (token == word) {
            counter++;
        }
    }
    console.log(counter)
}
countStringOccurrences(
    'This is a word and it also is a sentence',
    'is'
);