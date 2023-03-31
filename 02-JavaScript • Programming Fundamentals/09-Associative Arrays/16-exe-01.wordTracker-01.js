function wordTracker(inputArr) {

    // parse input - take first element and split
    let words = inputArr.shift().split(' ');
    let result = {};

    for (let word of words) {
        result[word] = 0;
    }
    //console.log(result);

    // for each remaining element
    for (let word of inputArr) {
        // -- if element is we're looking for, add 1 to count
        if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    }
    //console.log(result);

    // convert result to array
    let sorted = Object.entries(result);

    // sort by value
    sorted.sort((a, b) => {
        return b[1] - a[1];
    });
    //console.log(sorted)


    // sorted.sort((a, b) => {
    //     console.log(a, b);

    //     return 0;
    // });


    // print result
    for (let word of sorted) {
        console.log(word[0], '-', word[1]);
    }

    // print result - 2-ри начин
    /* for (let [word, count] of sorted) {
        console.log(word, '-', count);
    } */
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
// wordTracker([
//     'is the',
//     'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
// );