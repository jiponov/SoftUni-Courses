function formatTheText() {    // 100/100

    let inputElement = document.getElementById('input');
    // Also, every sentence must have at least 1 character
    let textArr = inputElement.value.split('.').filter(x => x != '');   // ако има точки ще остане елемент '' в масива, затова филтър
    // може и textArr.map(x => x + ".")
    let resultDiv = document.getElementById('output');
    //console.log(textArr)

    while (textArr.length > 0) {
        let text = textArr.splice(0, 3).join('. ') + '.';
        let p = document.createElement('p');    // 1 
        p.textContent = text;                   // 2
        resultDiv.appendChild(p);               // 3
        // горните 1,2,3 работят заедно
    }
}