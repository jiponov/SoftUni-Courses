function sumTable() {    // 100/100   
    let costElements = document.querySelectorAll('tr td:nth-of-type(2)');   //взимай ВТОРИЯ td на всеки ред
    let costArray = Array.from(costElements);

    let sum = costArray.reduce((a, v) => {
        let current = Number(v.textContent) || 0;   // при sum последния td ще даде NaN => и ще хване НУЛА 0 (от || ИЛИ-то)
        return a + current;
    }, 0);

    //console.log(sum)

    let resultElement = document.getElementById('sum');
    resultElement.textContent = sum;
}