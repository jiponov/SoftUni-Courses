let text = 'Today is 2015-05-11';
let regexp = /\d{4}-\d{2}-\d{2}/g;

let hasMatch = regexp.test(text);

console.log(hasMatch); // true


/*
Validating String by Pattern
*/