window.addEventListener('load', solution);

// за JUDGE SOFTUNI:  Предаваме само от function solution() надолу, БЕЗ window.addEventListener


function solution() {                // 100/100

  // SELECT all buttons DOM elements and other main elements
  const submitButton = document.getElementById('submitBTN');
  const editButton = document.getElementById('editBTN');
  const continueButton = document.getElementById('continueBTN');
  const blockMain = document.getElementById('block');
  const previewUL = document.getElementById('infoPreview');

  // SET buttons by default (default-нато поведение на бутоните)
  submitButton.disabled = false;
  editButton.disabled = true;
  continueButton.disabled = true;


  // GET elements by input and label 
  const inputValues = Array.from(document.getElementById('form').querySelectorAll('input'));
  inputValues.pop();                                                // премахваме последния елемент понеже е button submitBTN а не input поле  

  const labelTexts = Array.from(document.getElementById('form').querySelectorAll('label'));

  //console.log(inputValues);
  //console.log(labelTexts);


  submitButton.addEventListener('click', (e) => {                   // ако се кликне на бутона
    //console.log(e.target);

    if (inputValues[0].value && inputValues[1].value != '') {       // Full Name && Email

      for (let i = 0; i < inputValues.length; i++) {
        const liElement = document.createElement('li');
        liElement.textContent = `${labelTexts[i].textContent} ${inputValues[i].value}`;
        previewUL.appendChild(liElement);
      }

      inputValues.forEach(x => x.value = '');                        // зачистваме полетата

      e.target.disabled = true;                                       // submitButton е това, но заради addEventListener губи референция и трябва с target
      editButton.disabled = false;
      continueButton.disabled = false;
    }
  });


  editButton.addEventListener('click', (e) => {

    const liItems = Array.from(previewUL.childNodes);

    for (let i = 0; i < inputValues.length; i++) {
      inputValues[i].value = liItems[i].textContent.split(': ')[1];      // получаваме масив и искаме втория елемент след двете точки и freespace..
      liItems[i].remove();
    }

    submitButton.disabled = false;
    editButton.disabled = true;
    continueButton.disabled = true;
  });


  continueButton.addEventListener('click', (e) => {

    blockMain.innerHTML = '';                                   // чистим HTML id=block елемента ЦЕЛИЯ;  removing everything inside of the “block” <div> 
    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';
    blockMain.appendChild(h3);
  });

}