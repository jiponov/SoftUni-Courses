function money(input) {
    let dogsFood = Number(input[0]);
    let catsFood = Number(input[1]);
    let expenses = (dogsFood * 2.5) + (catsFood * 4);
    console.log(`${expenses} lv.`);
}
money(['13', '9']);