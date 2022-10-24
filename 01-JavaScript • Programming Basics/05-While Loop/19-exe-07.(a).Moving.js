function solve(input) {     

    let index = 0;
    let freeSpaceWidth = Number(input[index]);
    index++;
    let freeSpaceLength = Number(input[index]);
    index++;
    let freeSpaceHeight = Number(input[index]);
    index++;

    let command = input[index];

    let freeSpaceApartment = freeSpaceHeight * freeSpaceLength * freeSpaceWidth;
    let box = 1;

    let isHavingSpace = true;

    while (command != 'Done') {
        let boxes = Number(command);
        freeSpaceApartment -= box * boxes;

        if (freeSpaceApartment <= 0) {
            isHavingSpace = false;
            break;
        }
        index++;
        command = input[index];
    }

    if (command == 'Done') {
        if (freeSpaceApartment > 0) {
            isHavingSpace = true;
            console.log(`${freeSpaceApartment} Cubic meters left.`);
        }
    }

    if (!isHavingSpace) {
        console.log(`No more free space! You need ${Math.abs(freeSpaceApartment)} Cubic meters more.`);
    }

}
solve(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"]);

solve(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"]);