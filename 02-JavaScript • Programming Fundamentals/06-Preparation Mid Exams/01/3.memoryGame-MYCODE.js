function memoryGame(input) {          // 100/100
    let elements = input.shift().split(' ');
    let moves = 0;

    while (input[0] != 'end') {
        moves++;
        let line = input.shift().split(' ');
        let indexA = Number(line[0]);
        let indexB = Number(line[1]);

        let elA = elements[indexA];
        let elB = elements[indexB];

        if (indexA == indexB || indexA < 0 || indexA > elements.length - 1 || indexB < 0 || indexB > elements.length - 1) {
            let insertEl = `-${moves}a`;
            elements.splice((elements.length / 2), 0, insertEl, insertEl);
            console.log(`Invalid input! Adding additional elements to the board`);
            continue;
        }


        if (elA == elB) {
            elements.splice(indexA, 1);

            indexB = elements.indexOf(elB);
            elements.splice(indexB, 1);

            console.log(`Congrats! You have found matching elements - ${elA}!`);

            if (elements.length <= 0) {
                return console.log(`You have won in ${moves} turns!`);
            }

        } else if (elA != elB) {
            console.log(`Try again!`);
        }
    }


    if (elements.length > 0) {
        console.log(`Sorry you lose :(
        ${elements.join(' ').trim()}`);
    }
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);
console.log('-------');
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);
console.log('-------');
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);