function pascalOrCamelCase() {    // 100/100

  let textElement = document.getElementById('text').value;
  let typeElement = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');

  let output = '';

  if (typeElement == 'Camel Case') {
    // "this is an example"
    let textArr = textElement
      .split(' ')
      .forEach((x, i) => {
        if (i == 0) {
          output += x.toLowerCase();
        } else {
          let firstChar = x[0];
          output += firstChar.toUpperCase();
          for (let j = 1; j < x.length; j++) {
            let otherChars = x[j];
            output += otherChars.toLowerCase();
          }
        }
      });

  } else if (typeElement == 'Pascal Case') {
    // "this is an example"
    let textArr = textElement
      .split(' ')
      .forEach((x, i) => {

        let firstChar = x[0];
        output += firstChar.toUpperCase();

        for (let j = 1; j < x.length; j++) {
          let otherChars = x[j];
          output += otherChars.toLowerCase();
        }
      });

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