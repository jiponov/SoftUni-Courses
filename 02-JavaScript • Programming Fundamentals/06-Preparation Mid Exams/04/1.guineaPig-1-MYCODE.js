function guineaPig(input) {          // 100/100
    let food = Number(input.shift());
    let hay = Number(input.shift());
    let cover = Number(input.shift());
    let pigWeight = Number(input.shift());
    let days = 1;

    while (days <= 30) {
        food -= 0.3;

        if (days % 2 == 0) {
            hay -= 0.05 * food;
        }

        if (days % 3 == 0) {
            cover -= pigWeight / 3;
        }

        days++;
    }

    if (food <= 0 || hay <= 0 || cover <= 0) {
        console.log(`Merry must go to the pet store!`);
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
    }
}

guineaPig([
    "10",
    "5",
    "5.2",
    "1"]);
console.log('-------');
guineaPig([
    "1",
    "1.5",
    "3",
    "1.5"]);
console.log('-------');
guineaPig([
    "9",
    "5",
    "5.2",
    "1"]);


