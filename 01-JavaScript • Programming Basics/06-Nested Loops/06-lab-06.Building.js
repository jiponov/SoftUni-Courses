function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = floors; i > 0; i--) {
        let result = "";
        for (let z = 0; z < rooms; z++) {

            if (i === floors) {
                result += "L" + i + z + " ";
            } else if (i % 2 === 0) {
                result += "O" + i + z + " ";
            } else {
                result += "A" + i + z + " ";
            }

        }
        console.log(result);
    }
}
building(["6", "4"])