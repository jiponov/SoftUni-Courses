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
    let filtered = Object.entries(result).filter(([word, count]) => {
        if (count % 2 == 1) {
            return true;
        } else {
            return false;
        }
    });
    //console.log(filtered)    //-> връща масив от масиви key-value (entries)

    // print list of words
    console.log(filtered.map(entry => entry[0]).join(' '));
    //console.log(filtered.map(entry => entry[0]));     // връща масив от Keys     
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');