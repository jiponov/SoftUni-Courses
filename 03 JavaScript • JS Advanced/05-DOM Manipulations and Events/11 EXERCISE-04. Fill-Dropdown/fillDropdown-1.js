function fillDropdown() {    // 100/100
    // DOM elements
    const textElement = document.querySelector('input[id="newItemText"]');     // const textElement = document.getElementById('newItemText');    OR  .querySelector('#newItemText');
    const valueElement = document.querySelector('input[id="newItemValue"]');   // const valueElement = document.getElementById('newItemValue');  OR  .querySelector('#newItemValue');
    // create new DOM element
    const optionElement = document.createElement('option');
    // append new element to parent and add values to element + clear fields at the end
    if (textElement.value != '' && valueElement.value != '') {
        optionElement.textContent = textElement.value;
        optionElement.value = valueElement.value;
        const selectorElement = document.querySelector('div > select');
        selectorElement.appendChild(optionElement);

        textElement.value = '';
        valueElement.value = '';
    }
}

