let text = 'Peter: 123 Mark: 456';
let pattern = /([A-Z][a-z]+): (\d+)/g;      // Using the Exec() Method

let match = pattern.exec(text);

while (match != null) {
    console.log(match);

    match = pattern.exec(text);
}
