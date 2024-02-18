function argumentInfo() {       // 100/100

    const collection = {};

    const params = Array
        .from(arguments)
        .forEach((x) => {
            const type = typeof x;
            console.log(`${typeof x}: ${x}`);

            if (!collection[type]) {         // DO WE HAVE IT
                collection[type] = 0;
            }
            collection[type]++;
        });

    let output = Object
        .entries(collection)
        .sort((a, b) => {                      // SORT
            return b[1] - a[1];
        })
        .forEach(([key, value]) => console.log(`${key} = ${value}`));
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

