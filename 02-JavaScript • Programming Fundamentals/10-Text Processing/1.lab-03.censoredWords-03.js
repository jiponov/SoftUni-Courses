function censoredWords(text, word) {      // Find all occurrences       
    let tokens = text.split(word);
    console.log(tokens)

    let result = tokens.join('*'.repeat(word.length));
    console.log(result);
}
censoredWords('A small sentence with some words', 'small');
// censoredWords('Find the hidden word', 'hidden');
censoredWords('A small sentence small with some small words', 'small');