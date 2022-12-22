function commonElements(arr1, arr2) {

    let arr1L = arr1.length;
    let arr2L = arr2.length;
    for (let i = 0; i < arr1L; i++) {
        let match;
        for (let j = 0; j < arr2L; j++)
            if (arr1[i] === arr2[j]) {
                match = arr1[i];
                console.log(match);
            }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);
