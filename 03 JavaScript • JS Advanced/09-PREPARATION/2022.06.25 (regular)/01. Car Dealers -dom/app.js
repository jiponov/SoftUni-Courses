window.addEventListener("load", solve);

// 100/100 my code
function solve() {
    // SELECT
    const makeElement = document.getElementById('make');
    const modelElement = document.getElementById('model');
    const yearElement = document.getElementById('year');
    const fuelElement = document.getElementById('fuel');
    const originalCostElement = document.getElementById('original-cost');
    const sellingPriceElement = document.getElementById('selling-price');

    const btnPublish = document.getElementById('publish');

    const tableBodyElement = document.getElementById('table-body');
    const ulCarsListElement = document.getElementById('cars-list');
    const profitElement = document.getElementById('profit');
    let profitValue = Number(profitElement.textContent);

    // GET/SET
    btnPublish.disabled = false;
    let formElements = [makeElement, modelElement, yearElement, fuelElement, originalCostElement, sellingPriceElement];

    // EVENT listeners
    btnPublish.addEventListener('click', (e) => {
        e.preventDefault();

        const makeValue = makeElement.value;
        const modelValue = modelElement.value;
        const yearValue = yearElement.value;
        const fuelValue = fuelElement.value;
        let originalValue = originalCostElement.value;
        let sellingValue = sellingPriceElement.value;


        if (sellingValue < originalValue) {
            return;
        }

        if (!makeValue || !modelValue || !yearValue || !fuelValue || !originalValue || !sellingValue) {
            return;
        }

        const rowElement = document.createElement('tr');
        const tdMakeElement = document.createElement('td');
        const tdModelElement = document.createElement('td');
        const tdYearElement = document.createElement('td');
        const tdFuelElement = document.createElement('td');
        const tdOriginalPriceElement = document.createElement('td');
        const tdSellingPriceElement = document.createElement('td');
        const tdButtons = document.createElement('td');
        const btnEdit = document.createElement('button');
        const btnSell = document.createElement('button');

        rowElement.className = 'row';
        btnEdit.className = 'action-btn edit';
        btnSell.className = 'action-btn sell';

        tdMakeElement.textContent = makeValue;
        tdModelElement.textContent = modelValue;
        tdYearElement.textContent = yearValue;
        tdFuelElement.textContent = fuelValue;
        tdOriginalPriceElement.textContent = originalValue;
        tdSellingPriceElement.textContent = sellingValue;
        btnEdit.textContent = 'Edit';
        btnSell.textContent = 'Sell';


        tdButtons.appendChild(btnEdit);
        tdButtons.appendChild(btnSell);

        rowElement.appendChild(tdMakeElement);
        rowElement.appendChild(tdModelElement);
        rowElement.appendChild(tdYearElement);
        rowElement.appendChild(tdFuelElement);
        rowElement.appendChild(tdOriginalPriceElement);
        rowElement.appendChild(tdSellingPriceElement);
        rowElement.appendChild(tdButtons);

        tableBodyElement.appendChild(rowElement);


        formElements.forEach((x) => x.value = '');


        btnEdit.addEventListener('click', (e) => {
            //e.preventDefault();       --НЕ

            makeElement.value = tdMakeElement.textContent;
            modelElement.value = tdModelElement.textContent;
            yearElement.value = tdYearElement.textContent;
            fuelElement.value = tdFuelElement.textContent;
            originalCostElement.value = tdOriginalPriceElement.textContent;
            sellingPriceElement.value = tdSellingPriceElement.textContent;

            rowElement.remove();
        });

        btnSell.addEventListener('click', (e) => {
            //e.preventDefault();       --НЕ

            originalValue = Number(originalValue);
            sellingValue = Number(sellingValue);
            let diff = Math.abs(originalValue - sellingValue);

            const liElement = document.createElement('li');
            const spanMakeModelElement = document.createElement('span');
            const spanYearElement = document.createElement('span');
            const spanDiffElement = document.createElement('span');

            liElement.className = 'each-list';

            spanMakeModelElement.textContent = `${makeValue} ${modelValue}`;
            spanYearElement.textContent = yearValue;
            spanDiffElement.textContent = diff;

            rowElement.remove();

            liElement.appendChild(spanMakeModelElement);
            liElement.appendChild(spanYearElement);
            liElement.appendChild(spanDiffElement);
            ulCarsListElement.appendChild(liElement);

            profitValue += diff;
            profitElement.textContent = profitValue.toFixed(2);
        });
    });
}
