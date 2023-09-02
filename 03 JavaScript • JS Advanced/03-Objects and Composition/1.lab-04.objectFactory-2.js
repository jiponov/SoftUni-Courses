function objectFactory(lib, list) {    // 100/100
    // for every order in list
    // - create object
    // - copy template props
    // - for every element in parts
    // -- compose function from library into object
    // - store object
    // return result

    const result = [];

    for (let order of list) {
        const object = Object.assign({}, order.template);

        const parts = order.parts;
        for (let part of parts) {
            object[part] = lib[part]
            //console.log(part)
            //console.log(lib[part])
        }

        result.push(object)
    }

    return result;
}


const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

const products = objectFactory(library, orders);

console.log(products);


// example
// products[3].play('Rick Astley', 'Never Gonna Give You Up')               // artist, track

