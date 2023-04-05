function oddOccurrences(input) {
    // convert input to array
    let words = input.split(' ');
    let result = {};

    // for every element of input array
    for (let word of words) {
        // -- count word as lowercase: case-insensitive by task condition
        word = word.toLocaleLowerCase();
        if (result.hasOwnProperty(word)) {
            result[word]++;
        } else {
            result[word] = 1;
        }
    }

    let output = [];

    for (let word in result) {
        if (result[word] % 2 == 1) {
            output.push(word);
        }
    }
    console.log(output.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');