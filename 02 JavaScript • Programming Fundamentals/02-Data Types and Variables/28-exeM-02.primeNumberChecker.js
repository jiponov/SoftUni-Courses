function primeNumberChecker(num) {
    let prime = false;
    if (num >= 2) {
        prime = true;
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                prime = false;
                break;
            }
        }
    }

    console.log(prime);
}
primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);

