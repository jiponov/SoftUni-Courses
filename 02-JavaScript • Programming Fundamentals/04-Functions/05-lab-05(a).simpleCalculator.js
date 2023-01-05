function simpleCalculator(numOne, numTwo, operator) {
    let result = () => {
        switch (operator) {
            case 'multiply': return numOne * numTwo; break;
            case 'divide': return numOne / numTwo; break;
            case 'add': return numOne + numTwo; break;
            case 'subtract': return numOne - numTwo; break;
            default: break;
        }
    }
    console.log(result());
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');