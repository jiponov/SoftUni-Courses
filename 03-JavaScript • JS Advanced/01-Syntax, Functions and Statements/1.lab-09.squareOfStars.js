function squareOfStars(size = 5) {    // 100/100

    for (let i = 0; i < size; i++) {
        if (typeof size == 'number') {
            console.log('* '.repeat(size).trimEnd());
        }
    }
}

squareOfStars(1);
console.log('-------');
squareOfStars(2);
console.log('-------');
squareOfStars(5);
console.log('-------');
squareOfStars(7);
console.log('-------');
squareOfStars();

