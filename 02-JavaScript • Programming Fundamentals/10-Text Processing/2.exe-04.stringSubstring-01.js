function stringSubstring(word, text) {

    // split text into tokens
    let tokens = text.split(' ');

    // for each token
    for (let token of tokens) {
        // - if token equal word (case-insensitive) -> print and END program
        if (word.toLocaleLowerCase() == token.toLocaleLowerCase()) {     // сравняваме думите като ги превръщаме с МАЛКИ БУКВИ и ДВЕТЕ ДУМИ (може и двете с големи също UpperCase)
            return console.log(word);
        }
    }

    // print failure
    console.log(`${word} not found!`);
}
stringSubstring('javascript',
    'JavaScript is the best programming language');
console.log('---')
stringSubstring('python',
    'JavaScript is the best programming language');
