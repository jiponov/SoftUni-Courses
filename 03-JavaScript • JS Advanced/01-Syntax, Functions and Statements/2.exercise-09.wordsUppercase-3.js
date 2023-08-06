function wordsUppercase(text) {    // 100/100

    let regex = /\w+/g;
    let match = regex.exec(text);
    let result = [];

    while (match != null) {
        result.push(match[0].toUpperCase());
        match = regex.exec(text);
    }
    console.log(result.join(", "));
}

wordsUppercase('Hi, how are you?');
console.log('-------');
wordsUppercase('hello');