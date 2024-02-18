function solve(input) {

    let index = 0;
    let sizeCakeLength = Number(input[index]);
    index++;
    let sizeCakeWidth = Number(input[index]);
    index++;

    let piecesCake = sizeCakeLength * sizeCakeWidth;

    let command = input[index];

    while (command != 'STOP') {
        let currentTake = Number(command);

        if (piecesCake > 0) {
            piecesCake -= currentTake;
            
            if (piecesCake <= 0) {
                let lackingPieces = Math.abs(piecesCake);
                console.log(`No more cake left! You need ${lackingPieces} pieces more.`)
                break;
            }
        }
        index++;
        command = input[index];
    }

    if (command == 'STOP' && piecesCake > 0) {
        console.log(`${piecesCake} pieces are left.`);
    }
}
solve(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"]);

solve(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"]);