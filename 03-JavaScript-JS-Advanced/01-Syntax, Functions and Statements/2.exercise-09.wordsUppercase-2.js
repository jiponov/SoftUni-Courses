function wordsUppercase(text) {    // 100/100

    let result = text.match(/\w+/g)
    result = result.map(el => el.toUpperCase())
    console.log(result.join(', '));
}

wordsUppercase('Hi, how are you?');
console.log('-------');
wordsUppercase('hello');