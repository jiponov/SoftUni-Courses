let text = 'Today is 2015-05-11';
let pattern = /\d{4}-(?<month>\d{2})-\d{2}/g;      // Using the Exec() Method

let match = pattern.exec(text);

while (match != null) {
    console.log(match);
    console.log(match[0]);      // съвпадението
    console.log(match[1]);      // group

    console.log(`-------`);

    console.log(typeof match);
    console.log(typeof match.groups.month);     // group
    console.log(match.groups.month);

    match = pattern.exec(text);
}
