function argumentInfo() {       // 100/100

    const collection = {};

    const params = Array
        .from(arguments)
        .forEach((x) => {
            const type = typeof x;
            console.log(`${typeof x}: ${x}`);

            if (!collection.hasOwnProperty(type)) {             // DO WE HAVE IT
                collection[type] = 1;
            } else {
                collection[type]++;
            }
        });

    let output = Object                                          // SORT
        .keys(collection)
        .sort((a, b) => collection[b] - collection[a])
        .forEach((key) => console.log(`${key} = ${collection[key]}`));
}

argumentInfo(
    'cat',
    42,
    function () {
        console.log('Hello world!');
    }
);

/* OUTPUT:

string: cat
number: 42
function: function () { console.log('Hello world!'); }
string = 1
number = 1
function = 1

*/

