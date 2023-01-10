function addAndSubtract(a, b, c) {              // function hoisting in action!
    let sumAB = sum(a, b);
    let finalResult = subtract(sumAB, c);

    console.log(finalResult);

    //console.log(sumAB);
    //console.log(subtract(sumAB, c));    

    function sum(a, b) {
        return a + b;
    }

    function subtract(sumAB, cNum) {
        return sumAB - cNum;
    }

}
addAndSubtract(23, 6, 10);

