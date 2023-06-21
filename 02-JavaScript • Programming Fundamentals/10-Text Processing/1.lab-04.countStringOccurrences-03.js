function countStringOccurrences(text, word) {         // Hints:  Split the sentence into words and create a counter that stores how many times the searched word occurs.

    let tokens = text.split(' ');
    //console.log(tokens)

    let counterArr = tokens.filter(x => x == word);
    //console.log(counterArr);
    console.log(counterArr.length);
}
countStringOccurrences(
    'This is a word and it also is a sentence',
    'is'
);