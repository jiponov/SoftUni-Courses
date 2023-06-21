function countStringOccurrences(str, word) {         // Hints:  Split the sentence into words and create a counter that stores how many times the searched word occurs.

    let textArr = str.split(' ');

    let counter = 0;
    for (let el of textArr) {
        if (el === word) {
            counter++;
        }
    }

    console.log(counter);
}
countStringOccurrences(
    'This is a word and it also is a sentence',
    'is'
);