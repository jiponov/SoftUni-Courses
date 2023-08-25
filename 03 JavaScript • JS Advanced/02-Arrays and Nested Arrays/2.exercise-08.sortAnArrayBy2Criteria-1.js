function sortAnArrayBy2Criteria(arr) {    // 100/100

    arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    });

    arr.forEach(x => console.log(x));
}

sortAnArrayBy2Criteria([
    'alpha',
    'beta',
    'gamma']);
console.log('-------');
sortAnArrayBy2Criteria([
    'Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);
console.log('-------');
sortAnArrayBy2Criteria([
    'test',
    'Deny',
    'omen',
    'Default']);
