function sortNumbers(a, b, c) {

    let one = Number.MIN_SAFE_INTEGER;
    let two;
    let three;
    let waiting;

    if (a > one) {
        one = a;
        two = b;
        three = c;
    }

    if (b > one) {
        one = b;
        two = a;
        three = c;
    }

    if (c > one) {
        one = c;
        two = a;
        three = b;
    }

    if (three > two) {
        waiting = two;
        two = three;
        three = waiting;
    }

    console.log(one);
    console.log(two);
    console.log(three);

}
sortNumbers(2, 1, 3);




