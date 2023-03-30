function wordOccurrences(input) {
    let words = {};

    for (let el of input) {
        if (!words.hasOwnProperty(el)) {
            words[el] = 0
        }
        words[el]++;
    }

    let entries = Object.entries(words);
    let sorted = entries.sort((a, b) => {
        return b[1] - a[1];
    });

    for (let [word, times] of sorted) {
        console.log(`${word} -> ${times} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
console.log('---');
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
