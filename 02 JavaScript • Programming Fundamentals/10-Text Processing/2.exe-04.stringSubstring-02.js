function stringSubstring(word, text) {

    // split text into tokens
    let tokens = text.split(' ');

    // for each token

    // - if token equal word (case-insensitive) -> print and END program
    if (tokens.map(t => t.toLocaleLowerCase()).includes(word)) {
        return console.log(word)
    }

    // print failure
    console.log(`${word} not found!`);
}
stringSubstring('javascript',
    'JavaScript is the best programming language');
console.log('---')
stringSubstring('python',
    'JavaScript is the best programming language');
