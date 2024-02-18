function pascalOrCamelCase() {    // 100/100

  let textElement = document.getElementById('text').value;
  let typeElement = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');

  let output = '';

  if (typeElement == 'Camel Case') {
    // "this is an example"
    for (let i = 0; i < textElement.length; i++) {
      if (textElement[i] == ' ') {
        output += (textElement[i + 1].toUpperCase());
        i++;
      } else {
        output += textElement[i].toLowerCase();
      }
    }


  } else if (typeElement == 'Pascal Case') {
    output += textElement[0].toUpperCase();

    for (let i = 1; i < textElement.length; i++) {
      if (textElement[i] === ' ') {
        output += textElement[i + 1].toUpperCase();
        i++;
      } else {
        output += textElement[i].toLowerCase();
      }
    }

    
  } else {
    output = 'Error!';
  }

  //console.log(output)
  resultElement.textContent = output;
}

// pascalOrCamelCase("this is an example", "Camel Case");
// console.log('---');
// pascalOrCamelCase("secOND eXamPLE", "Pascal Case");
// console.log('---');
// pascalOrCamelCase("Invalid Input", "Another Case");