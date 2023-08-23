function censoredWords(text, word) {      // Find all occurrences       
    let symbol = '*';
    let wordL = word.length;

    while (text.includes(word)) {
        text = text.replace(word, symbol.repeat(wordL));
    }

    console.log(text)
}
censoredWords('A small sentence with some words', 'small');
// censoredWords('Find the hidden word', 'hidden');
censoredWords('A small sentence small with some small words', 'small');