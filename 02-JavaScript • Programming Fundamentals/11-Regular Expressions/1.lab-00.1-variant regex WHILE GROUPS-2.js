let text = 'Today is 2015-05-11';
let pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g;      // Using the Exec() Method

let match = pattern.exec(text);

while (match != null) {
    console.log(match);
    console.log(typeof match);  // object
    console.log(match.length);  // 4
    console.log(match[0]);      // 2015-05-11
    console.log(match[1]);      // 2015
    console.log(match[2]);      // 05
    console.log(match[3]);      // 11
    console.log(match[4]);      // undefined

    console.log(`-------`);

    console.log(match.groups.year);     // 2015
    console.log(match.groups.month);    // 05
    console.log(match.groups.day);      // 11

    match = pattern.exec(text);
}
