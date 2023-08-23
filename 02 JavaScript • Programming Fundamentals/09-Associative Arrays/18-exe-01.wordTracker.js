function wordTracker(input) {

    let storage = {};

    let words = input.shift().split(' ').forEach(element => {
        storage[element] = 0;
    });

    for (let el of input) {
        if (storage.hasOwnProperty(el)) {
            storage[el]++;
        }
    }

    let output = Object.entries(storage).sort((a, b) => b[1] - a[1]).forEach(element => {
        console.log(`${element[0]} - ${element[1]}`);
    });
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
console.log('-----');
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);

