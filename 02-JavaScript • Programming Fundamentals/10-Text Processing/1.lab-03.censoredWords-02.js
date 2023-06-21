function censoredWords(text, word) {      // Find all occurrences       
    let find = text.indexOf(word)
    //console.log(find)

    let symbol = '*';
    let wordL = word.length;
    //console.log(wordL)

    let result = text.replaceAll(word, symbol.repeat(wordL));               // replaceAll
    console.log(result);
}
censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');