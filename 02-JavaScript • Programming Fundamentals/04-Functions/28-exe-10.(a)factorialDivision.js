function factorialDivision(a, b) {
    function factorial(number) {
        if (number == 1) {
            return 1;
        } else {
            return number * factorial(number - 1);
        }
    }

    console.log((factorial(a) / factorial(b)).toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);