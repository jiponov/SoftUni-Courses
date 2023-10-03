function deleteFromTable() {        // 100/100

    let inputElement = document.querySelector('input[name="email"]');
    let tdElements = document.querySelectorAll('table tr td:nth-of-type(2)');       // document.querySelectorAll("#customers tr td:nth-child(2)");

    let resultElement = document.getElementById('result');

    let tdAsArray = Array.from(tdElements);                             // 2* алтернатива
    for (let el of tdAsArray) {
        if (el.textContent == inputElement.value) {
            el.parentNode.remove();                                     // 1*
            resultElement.textContent = 'Deleted.';
        } else {
            resultElement.textContent = 'Not found.';
        }
    }
}

