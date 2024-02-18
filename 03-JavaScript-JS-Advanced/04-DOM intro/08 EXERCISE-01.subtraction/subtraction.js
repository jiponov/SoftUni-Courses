function subtraction() {    // 100/100

    const firstNumElement = document.getElementById('firstNumber');
    const secondNumElement = document.getElementById('secondNumber');
    const resultElement = document.getElementById('result');

    const firstNum = Number(firstNumElement.value);
    const secondNum = Number(secondNumElement.value);
    const subtract = firstNum - secondNum;

    resultElement.textContent = subtract;
    resultElement.style.display = 'block';
}

