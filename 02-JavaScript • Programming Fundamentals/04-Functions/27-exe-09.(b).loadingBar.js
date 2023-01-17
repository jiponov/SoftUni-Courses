
function loadingBar(n) {
    let str = '';
    let newN = (n / 10);
    for (i = 0; i < 10; i++) {
        if (i < newN) {
            str += '%';
        } else {
            str += '.'
        }
    }
    if (n != 100) {
        console.log(`${n}% [${str}]`);
        console.log(`Still loading...`);
    } else {
        console.log(`${n}% Complete!`);
        console.log(`[${str}]`);
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);