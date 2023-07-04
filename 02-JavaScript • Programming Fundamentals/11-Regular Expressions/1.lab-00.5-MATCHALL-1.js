let text = 'Today is 2015-05-11 is are more Today is 2016-11-26';
let pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g;

let match = [...text.matchAll(pattern)];

console.log(match);

