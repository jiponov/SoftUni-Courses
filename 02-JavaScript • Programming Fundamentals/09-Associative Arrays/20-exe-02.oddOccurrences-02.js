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

    // filter only word that occur and odd number of times
    let filtered = Object
        .entries(result)
        .filter(([word, count]) => count % 2 == 1)
        .map(entry => entry[0])
        .join(' ');


    // print list of words
    console.log(filtered)
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');