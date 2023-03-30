function schoolGrades(input) {

    let result = new Map();

    // for every entry
    for (let line of input) {
        // --parse and convert numbers
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        // --ensure grades array always exists
        if (result.has(name) == false) {
            result.set(name, []);
        }

        // --find existing grades and add new grades
        let existing = result.get(name);
        for (let grade of grades) {
            existing.push(grade);
        }
    }

    // sort by student name
    let sorted = Array.from(result);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    // print result
    for (let [name, grades] of sorted) {
        let average = 0;
        for (let grade of grades) {
            average += grade;
        }
        average /= grades.length;

        console.log(`${name}: ${average.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);