let text = 'Peter: 123 Mark: 456';
let pattern = /([A-Z][a-z]+): (\d+)/g;      // Using the Exec() Method

console.log(pattern.lastIndex);
console.log(`----------------------------------------`);

let match = pattern.exec(text);
console.log(match);
console.log(pattern.lastIndex);

console.log(`----------------------------------------`);

match = pattern.exec(text);
console.log(match);
console.log(pattern.lastIndex);

console.log(`----------------------------------------`);

match = pattern.exec(text);
console.log(match);                 // null
console.log(pattern.lastIndex);     // 0 ,превъртаме и почваме от начало (до тук сме с цикъла)