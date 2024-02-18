window.addEventListener("load", solve);

// 100/100
function solve() {

    // Selecting DOM elements
    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.querySelector('#last-name');
    const ageElement = document.querySelector('label input[type="number"]');
    const dishDescriptionElement = document.querySelector('#task');
    const genderElement = document.querySelector('#genderSelect');

    const btnSubmit = document.getElementById('form-btn');    // input field: type=button
    const btnClear = document.getElementById('clear-btn');    // button

    const ulProgressElement = document.getElementById('in-progress');
    const counterElement = document.querySelector('#message span');
    const ulFinishedElement = document.getElementById('finished');


    // GET/SET content
    btnSubmit.disabled = false;   // input field
    btnClear.disabled = false;    // button


    // Traversing DOM; Creating elements; Adding/Removing to/from DOM; Events (event handler functions)
    btnSubmit.addEventListener('click', (e) => {
        const firstNameValue = firstNameElement.value;
        const lastNameValue = lastNameElement.value;
        const ageValue = ageElement.value;
        const dishDescriptionValue = dishDescriptionElement.value;
        const genderValue = genderElement.value;
        let counterValue = Number(counterElement.textContent);

        if (!firstNameValue || !lastNameValue || !ageValue || !dishDescriptionValue) {
            return;
        }

        const liElement = document.createElement('li');
        const articleElement = document.createElement('article');
        const h4Element = document.createElement('h4');
        const pGenderAgeElement = document.createElement('p');
        const pDishDescrElement = document.createElement('p');
        const btnEdit = document.createElement('button');
        const btnComplete = document.createElement('button');

        h4Element.textContent = `${firstNameValue} ${lastNameValue}`;
        pGenderAgeElement.textContent = `${genderValue}, ${ageValue}`;
        pDishDescrElement.textContent = `Dish description: ${dishDescriptionValue}`;
        btnEdit.textContent = 'Edit';
        btnComplete.textContent = 'Mark as complete';

        liElement.className = 'each-line';
        btnEdit.className = 'edit-btn';
        btnComplete.className = 'complete-btn';
        counterValue++;
        counterElement.textContent = counterValue;

        articleElement.appendChild(h4Element);
        articleElement.appendChild(pGenderAgeElement);
        articleElement.appendChild(pDishDescrElement);
        liElement.appendChild(articleElement);
        liElement.appendChild(btnEdit);
        liElement.appendChild(btnComplete);
        ulProgressElement.appendChild(liElement);

        firstNameElement.value = '';
        lastNameElement.value = '';
        ageElement.value = '';
        dishDescriptionElement.value = '';


        btnEdit.addEventListener('click', (e) => {
            firstNameElement.value = firstNameValue;
            lastNameElement.value = lastNameValue;
            ageElement.value = ageValue;
            dishDescriptionElement.value = dishDescriptionValue;
            genderElement.value = genderValue;

            liElement.remove();
            counterValue--;
            counterElement.textContent = counterValue;
        });

        btnComplete.addEventListener('click', (e) => {
            ulFinishedElement.appendChild(liElement);
            counterValue--;
            counterElement.textContent = counterValue;
            btnEdit.remove();
            btnComplete.remove();
        });

        btnClear.addEventListener('click', (e) => {
            ulFinishedElement.innerHTML = '';
        });
    });
}