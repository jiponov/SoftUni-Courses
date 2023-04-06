function oddOccurrences(input) {

    let storage = {};

    let myArr = input.toLocaleLowerCase().split(' ').forEach(el => {
        if (!storage.hasOwnProperty(el)) {
            storage[el] = 0;
        }
        storage[el]++;
    })

    console.log(Object
        .entries(storage)
        .filter(entry => entry[1] % 2 == 1)
        .map(entry => entry[0])
        .join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');