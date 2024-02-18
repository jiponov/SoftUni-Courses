function sortAnArrayBy2Criteria(arr) {    // 100/100

    console.log(
        arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join("\n"));
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
