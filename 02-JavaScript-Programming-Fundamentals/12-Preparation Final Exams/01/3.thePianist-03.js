function thePianist(input) {          // 100/100

    const catalog = {};

    const numOfPieces = Number(input.shift());
    for (let i = 0; i < numOfPieces; i++) {
        const [piece, composer, key] = input.shift().split('|');
        catalog[piece] = { composer, key };
    }

    const actions = {
        'Add': addPiece,
        'Remove': removePiece,
        'ChangeKey': changePiece,
        'Stop': printResult
    };

    for (const line of input) {
        const [command, ...rest] = line.split('|');
        const action = actions[command];
        if (action !== undefined) { action(rest); };
    }

    function addPiece(line) {
        const [piece, composer, key] = line;
        if (catalog.hasOwnProperty(piece)) {
            console.log(`${piece} is already in the collection!`);
        } else {
            catalog[piece] = { composer, key };
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        }
    }

    function removePiece(line) {
        const [piece] = line;
        if (catalog.hasOwnProperty(piece)) {
            delete catalog[piece];
            console.log(`Successfully removed ${piece}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    function changePiece(line) {
        const [piece, newKey] = line;
        if (catalog.hasOwnProperty(piece)) {
            catalog[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    function printResult() {
        const sorted = Object.entries(catalog).sort((a, b) => {
            return a[0].localeCompare(b[0]) || a[1].composer.localeCompare(b[1].composer);
        });
        sorted.forEach(collection => {
            console.log(`${collection[0]} -> Composer: ${collection[1].composer}, Key: ${collection[1].key}`);
        });
        return;
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);

console.log('-------');

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);

