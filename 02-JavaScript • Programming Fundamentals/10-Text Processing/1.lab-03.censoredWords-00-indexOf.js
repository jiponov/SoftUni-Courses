function censoredWords(text, word) {      // Find all occurrences       
    let symbol = '*';
    let wordL = word.length;

    while (text.indexOf(word) >= 0) {                           //  while (text.indexOf(word) != -1)                         //  while (text.indexOf(word) >= 0)
        text = text.replace(word, symbol.repeat(wordL));        //  text = text.replace(word, '*'.repeat(word.length))
    }

    console.log(text)
}
censoredWords('A small sentence with some words', 'small');
// censoredWords('Find the hidden word', 'hidden');
censoredWords('A small sentence small with some small words', 'small');