function listOfItems() {    // 100/100
    // select elements
    let ulElement = document.querySelector('ul');
    let inputElement = document.querySelector('input[type="text"]');
       
    // create new element
    let liElement = document.createElement('li');
    // set content to new element
    liElement.textContent = inputElement.value;
    // append new item to parent
    ulElement.appendChild(liElement);     
    // clear input field
    inputElement.value = '';

    //console.log(ulElement);
}

