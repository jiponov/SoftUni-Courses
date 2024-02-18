function sortNumbers(a, b, c) {

    if ((a >= b) && (a >= c)) {
        if (b >= c) {
            console.log(a);
            console.log(b);
            console.log(c);
        }
        else {
            console.log(a);
            console.log(c);
            console.log(b);
        }
    }
    else if ((b >= a) && (b >= c)) {
        if (a >= c) {
            console.log(b);
            console.log(a);
            console.log(c);
        }
        else {
            console.log(b);
            console.log(c);
            console.log(a);
        }
    }
    else if ((c >= a) && (c >= b)) {
        if (a >= b) {
            console.log(c);
            console.log(a);
            console.log(b);
        }
        else {
            console.log(c);
            console.log(b);
            console.log(a);
        }
    }
}
sortNumbers(2, 1, 3);





