function wordsUppercase(text) {    // 100/100

    const words = text
        .match(/\w+/g)
        .join(', ')
        .toUpperCase();

    console.log(words);
}

wordsUppercase('Hi, how are you?');
console.log('-------');
wordsUppercase('hello');