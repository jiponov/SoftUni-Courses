function wordOccurrences(input) {
    let words = {};

    for (let el of input) {
        if (!words.hasOwnProperty(el)) {
            words[el] = 0
        }
        words[el]++;
    }

    let sorted = Object
        .entries(words)
        .sort((a, b) => b[1] - a[1])
        .forEach(([key, value]) => console.log(`${key} -> ${value} times`));
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
console.log('---');
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
