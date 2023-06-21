function printCharacters(str) {
    let strL = str.length;
    for (let i = 0; i < strL; i++) {
        console.log(str[i]);            // или  console.log(str.charAt(i));
    }
}
printCharacters('AWord');
console.log('-------------------------------')
printCharacters('Sentence');