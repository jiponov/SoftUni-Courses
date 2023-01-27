function listOfProducts(inputArr) {
    let sortedArr = inputArr.sort();
    let output = "";
    for (let i = 0; i < sortedArr.length; i++) {
        output += `${i + 1}.${sortedArr[i]}\n`;
    }
    console.log(output);
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
console.log('-----');
listOfProducts(['Watermelon', 'Banana', 'Apples']);