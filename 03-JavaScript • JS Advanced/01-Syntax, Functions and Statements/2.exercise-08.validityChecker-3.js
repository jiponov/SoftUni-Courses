function validityChecker(x1, y1, x2, y2) {    // 100/100

    let a = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    if (a % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }


    let b = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    if (b % 1 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }


    let c = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    if (c % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

validityChecker(3, 0, 0, 4);
console.log('-------');
validityChecker(2, 1, 1, 1);