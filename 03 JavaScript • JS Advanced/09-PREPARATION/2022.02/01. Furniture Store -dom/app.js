window.addEventListener('load', solve);

// 100/100
function solve() {
    // SELECT buttons and main elements
    const modelEle = document.getElementById('model');
    const yearlEle = document.getElementById('year');
    const textareaEle = document.getElementById('description');
    const priceEle = document.getElementById('price');
    const addBtnEle = document.getElementById('add');

    // SET buttons
    addBtnEle.disabled = false;

    // GET elements
    const furnitureListElement = document.getElementById('furniture-list');
    const totalPriceElement = document.getElementsByClassName('total-price')[0]       // OR: const totalPriceElement = document.querySelector('.total-price'); 


    // AddEventListener
    addBtnEle.addEventListener('click', (e) => {
        e.preventDefault();

        let modelValue = modelEle.value;
        let yearValue = Number(yearlEle.value);
        let textareaValue = textareaEle.value;
        let priceValue = Number(priceEle.value);
        const formArr = [modelValue, yearValue, textareaValue, priceValue];

        // OR: if (!modelValue || yearValue <= 0 || !textareaValue || priceValue <= 0) {return};
        // OR: if (modelValue && yearValue > 0 && textareaValue && priceValue > 0) {
        if ((formArr.every(x => x != '')) && (priceValue > 0) && (yearValue > 0)) {

            const rowElementINFO = document.createElement('tr');
            const TDModel = document.createElement('td');
            const TDPrice = document.createElement('td');
            const TDButtons = document.createElement('td');
            const moreBtnElement = document.createElement('button');
            const buyBtnElement = document.createElement('button');
            const rowElementHIDE = document.createElement('tr');
            const TDYear = document.createElement('td');
            const TDDescription = document.createElement('td');

            rowElementINFO.className = 'info';                              // OR:  rowElementINFO.classList.add('info');   
            TDModel.textContent = modelValue;
            TDPrice.textContent = priceValue.toFixed(2);

            moreBtnElement.className = 'moreBtn';
            moreBtnElement.textContent = 'More Info';

            buyBtnElement.className = 'buyBtn';
            buyBtnElement.textContent = 'Buy it';

            rowElementHIDE.className = 'hide';
            TDYear.textContent = `Year: ${yearValue}`;
            TDDescription.textContent = `Description: ${textareaValue}`;
            TDDescription.setAttribute('colspan', 3);

            TDButtons.appendChild(moreBtnElement);
            TDButtons.appendChild(buyBtnElement);

            rowElementINFO.appendChild(TDModel);
            rowElementINFO.appendChild(TDPrice);
            rowElementINFO.appendChild(TDButtons);
            rowElementHIDE.appendChild(TDYear);
            rowElementHIDE.appendChild(TDDescription);

            furnitureListElement.appendChild(rowElementINFO);
            furnitureListElement.appendChild(rowElementHIDE);

            modelEle.value = '';
            yearlEle.value = '';
            textareaEle.value = '';
            priceEle.value = '';

            //moreBtnElement.style.display = 'none';    //buyBtnElement.style.display = 'inline'; 

            moreBtnElement.addEventListener('click', (e) => {
                if (moreBtnElement.textContent == 'More Info') {
                    moreBtnElement.textContent = 'Less Info';
                    rowElementHIDE.style.display = 'contents';
                } else {
                    moreBtnElement.textContent = 'More Info';
                    rowElementHIDE.style.display = 'none';
                }
            });

            buyBtnElement.addEventListener('click', (e) => {
                //furnitureListElement.innerHTML = '';          NO! --- така дава 88/100 обаче...
                rowElementINFO.remove();
                rowElementHIDE.remove();
                let totalPriceVALUE = Number(totalPriceElement.textContent);
                totalPriceElement.textContent = Number((totalPriceVALUE + priceValue)).toFixed(2)
            });
        }
    });
}