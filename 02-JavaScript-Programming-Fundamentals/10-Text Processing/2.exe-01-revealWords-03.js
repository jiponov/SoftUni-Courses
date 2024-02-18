function revealWords(words, text) {
    text = ` ${text} `;
    // parse target words
    words = words.split(', ');
    //console.log(words)

    // for each word
    for (let word of words) {
        // find asterisks line with matching length and replace it
        let match = ` ${'*'.repeat(word.length)} `;                     // match e:  great И learning  ВСЕ ПОЛЗВАМЕ word.length
        //console.log(match)
        word = ` ${word} `;                                             //  ВСЕ ПОЛЗВАМЕ word пак -> играем в цикъла само с target думата и сменяме в ТЕКСТА накрая
        //console.log(word)
        text = text.replace(match, word);
        //console.log(text)
    }

    //print result
    console.log(text.trim())

}
// revealWords(
//     'great',
//     'softuni is ***** place for learning new programming languages'
// );
// console.log('---')
revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
);

// console.log()