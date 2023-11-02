function calculator() {     // 100/100

    let input1;
    let input2;
    let result;

    function init(selector1, selector2, resultSelector) {
        input1 = document.querySelector(selector1);
        input2 = document.querySelector(selector2);
        result = document.querySelector(resultSelector);
    }

    function add() {
        result.value = Number(input1.value) + Number(input2.value);

    }

    function subtract() {
        result.value = Number(input1.value) - Number(input2.value);
    }


    return {
        init,
        add,
        subtract,
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');

// console.log(calculate);     // връща ни обект
// от обекта calculate който се вика с метод с точка .add() или subtract() се изпълнява функцията




