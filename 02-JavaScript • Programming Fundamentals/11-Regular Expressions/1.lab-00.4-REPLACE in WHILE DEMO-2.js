let text = 'Peter: 123 Mark: 123';
let replacement = '999';
let pattern = /\d{3}/g;

let output = text.replace(pattern, replacement);

console.log(output);