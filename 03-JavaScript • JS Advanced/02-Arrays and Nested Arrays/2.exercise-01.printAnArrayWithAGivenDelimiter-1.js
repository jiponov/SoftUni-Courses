function printAnArrayWithAGivenDelimiter(inputArr, delimiter) {    // 100/100
    let resultStr = "";

    for (let i = 0; i < inputArr.length; i++) {
        let current = inputArr[i];
        resultStr += current;

        if (i != inputArr.length - 1) {
            resultStr += delimiter;
        }
    }

    console.log(resultStr);
}

printAnArrayWithAGivenDelimiter([
    'One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-');
console.log('-------');
printAnArrayWithAGivenDelimiter([
    'How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_');
