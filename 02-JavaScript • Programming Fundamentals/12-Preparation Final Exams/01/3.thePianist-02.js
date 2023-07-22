function thePianist(input) {          // 100/100

    let numberOfPieces = Number(input.shift());
    let colection = {};

    for (let i = 0; i < numberOfPieces; i++) {
        let [piece, composer, key] = input.shift().split('|');
        colection[piece] = {
            composer,
            key
        }
    }

    let command = input.shift();

    while (command != 'Stop') {

        command = command.split('|');
        let operation = command.shift();

        if (operation == 'Add') {

            let piece = command[0];
            let composer = command[1];
            let key = command[2];

            if (!colection.hasOwnProperty(piece)) {
                colection[piece] = {
                    composer,
                    key
                }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);

            } else {
                console.log(`${piece} is already in the collection!`);
            }

        } else if (operation == 'Remove') {
            let piece = command[0];

            if (colection.hasOwnProperty(piece)) {
                delete colection[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        } else if (operation == 'ChangeKey') {
            let piece = command[0];
            let newKey = command[1];

            if (colection.hasOwnProperty(piece)) {
                colection[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        command = input.shift();
    }

    for (let piece in colection) {
        console.log(`${piece} -> Composer: ${colection[piece].composer}, Key: ${colection[piece].key}`);
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

