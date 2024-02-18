function addDelete() {      // 100/100

    let ulElement = document.querySelector('#items');
    let inputElement = document.getElementById('newItemText');

    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    ulElement.appendChild(liElement);
    inputElement.value = '';


    // create ''delete'' button
    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    button.addEventListener('click', removeElement);     // ('click', () => console.log('clicked'))     ; с ламбда функция


    function removeElement(e) {
        const parent = e.target.parentNode;
        parent.remove();
    }

    liElement.appendChild(button);
}