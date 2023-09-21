function pascalOrCamelCase(text, type) {    // FOR HOME USE     // 100/100

  //let textElement = document.getElementById('text').value;
  //let typeElement = document.getElementById('naming-convention').value;
  let result = '';

  if (type == 'Camel Case') {
    // "this is an example"
    let textArr = text
      .split(' ')
      .forEach((x, i) => {
        if (i == 0) {
          result += x.toLowerCase();
        } else {
          let firstChar = x[0];
          result += firstChar.toUpperCase();
          for (let j = 1; j < x.length; j++) {
            let otherChars = x[j];
            result += otherChars.toLowerCase();
          }
        }
      });

  } else if (type == 'Pascal Case') {
    // "this is an example"
    let textArr = text
      .split(' ')
      .forEach((x, i) => {

        let firstChar = x[0];
        result += firstChar.toUpperCase();

        for (let j = 1; j < x.length; j++) {
          let otherChars = x[j];
          result += otherChars.toLowerCase();
        }
      });

  } else {
    result = 'Error!';
  }

  console.log(result)
}

pascalOrCamelCase("this is an example", "Camel Case");
console.log('---');
pascalOrCamelCase("secOND eXamPLE", "Pascal Case");
console.log('---');
pascalOrCamelCase("Invalid Input", "Another Case");

