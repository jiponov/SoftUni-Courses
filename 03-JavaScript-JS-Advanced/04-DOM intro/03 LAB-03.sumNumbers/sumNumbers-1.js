function sumNumbers() {    // 100/100   
    const num1Element = document.getElementById('num1');
    const num2Element = document.querySelector('input#num2');
    const sumElement = document.querySelector('input#sum');
    const num1AsNumber = Number(num1Element.value);
    const num2AsNumber = Number(num2Element.value);
    const calc = num1AsNumber + num2AsNumber;
    sumElement.value = calc;
}