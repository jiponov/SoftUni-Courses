function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let finalHeight = 0;
    for (let i = base; i > 0; i -= 2) {
        finalHeight++;
        if (i < 3) {
            gold = (i * i) * increment;
        } else if (finalHeight % 5 === 0) {
            stone += ((i - 2) * (i - 2)) * increment;
            lapis += (i * 4 - 4) * increment;
        } else {
            marble += (i * 4 - 4) * increment;
            stone += ((i - 2) * (i - 2)) * increment;
        }
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(finalHeight * increment)}`);
}
thePyramidOfKingDjoser(11, 1);