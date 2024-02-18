function sumTable() {    // 100/100   
    let rowsTD = document.querySelectorAll('table tr td');
    let rowsArray = Array.from(rowsTD);
    let sum = 0;
    //console.log(rowsArray)
    for (let i = 0; i < rowsArray.length - 1; i++) {
        const cost = rowsArray[i].textContent
        if (!isNaN(cost)) {
            sum += Number(cost);
        }

    }

    let resultElement = document.getElementById('sum');
    resultElement.textContent = sum;
}

