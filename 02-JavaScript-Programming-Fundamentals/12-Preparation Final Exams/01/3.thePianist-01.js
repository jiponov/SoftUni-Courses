function thePianist(input) {          // 100/100

    let nPieces = Number(input.shift());
    let compositions = [];

    for (let i = 0; i < nPieces; i++) {
        let current = input.shift();
        compositions.push(current);
    }

    let collection = {};
    for (let el of compositions) {
        let [piece, composer, key] = el.split('|');

        collection[piece] = {
            composer,
            key,
        };
    }

    while (input[0] != undefined) {
        if (input[0] == 'Stop') {
            break;
        }

        let line = input.shift().split('|');
        let operation = line.shift();

        if (operation == 'Add') {
            let [piece, composer, key] = line;

            if (!collection.hasOwnProperty(piece)) {
                collection[piece] = {
                    composer,
                    key,
                }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);

            } else {
                console.log(`${piece} is already in the collection!`);
            }


        } else if (operation == 'Remove') {
            let piece = line.shift();

            if (collection.hasOwnProperty(piece)) {
                delete collection[piece];
                console.log(`Successfully removed ${piece}!`);

            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }


        } else if (operation == 'ChangeKey') {
            let piece = line.shift();
            let newKey = line.shift();

            if (collection.hasOwnProperty(piece)) {
                collection[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);

            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    for (let el in collection) {
        console.log(`${el} -> Composer: ${collection[el].composer}, Key: ${collection[el].key}`);
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

