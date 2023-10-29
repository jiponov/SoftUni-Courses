function argumentInfo() {       // 100/100

    const types = {};

    const params = Array.from(arguments);
    // Do NOT print anything for types that do not appear in the list of arguments.

    for (let el of params) {
        const type = typeof el;
        console.log(`${type}: ${el}`);

        if (types[type] == undefined) {
            types[type] = 0;
        }
        types[type]++;
    }

    let output = Object                         // SORT
        .entries(types)
        .sort((a, b) => b[1] - a[1])            // If two types have the same count, use order of appearance. 
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

