function loadingBar(num) {
    let counter = num / 10;
    let isComplete = false;
    let symbol1 = '%';
    let symbol2 = '.';

    let diff1 = counter;
    let diff2 = Math.abs(diff1 - 10);

    if (num === 100) {
        isComplete = true;
    }

    if (isComplete) {
        console.log(`100% Complete!`)
    } else {
        console.log(`${num}% [${symbol1.repeat(diff1)}${symbol2.repeat(diff2)}]`);
        console.log(`Still loading...`);
    }
}

loadingBar(30);
console.log('---');
loadingBar(50);
console.log('---');
loadingBar(100);