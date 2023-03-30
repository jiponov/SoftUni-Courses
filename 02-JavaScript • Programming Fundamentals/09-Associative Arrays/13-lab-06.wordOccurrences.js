function wordOccurrences(inputArr) {
    let wordsObj = {};

    for (let i = 0; i < inputArr.length; i++) {
        let word = inputArr[i];
        let counter = 0;
        if (wordsObj.hasOwnProperty(word)) {
            continue;                                   // когато вече сме я ползвали тази дума, затова continue на следващата
        }
        for (let j = 0; j < inputArr.length; j++) {
            let currWord = inputArr[j];
            if (word == currWord) {
                counter++;
            }
        }
        wordsObj[word] = counter;
    }

    let sorted = Object.entries(wordsObj).sort((a, b) => b[1] - a[1]);
    sorted.map(el => console.log(`${el[0]} -> ${el[1]} times`));
    //console.log(sorted)   --МАСИВ ОТ МАСИВИ
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);