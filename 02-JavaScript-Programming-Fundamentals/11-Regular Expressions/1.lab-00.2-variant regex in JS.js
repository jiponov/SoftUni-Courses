let text = 'Peter: 123 Mark: 456';
let pattern = /([A-Z][a-z]+): (\d+)/g;   // pattern = regexp
let matches = text.match(pattern);       // matches МАСИВ - Returns an array of all matches (strings)

console.log(matches.length);  // 2
console.log(matches[0]);      // Peter: 123
console.log(matches[1]);      // Mark: 456
console.log(matches);         // масив с 2 елемента

/*
Checking for Matches
*/