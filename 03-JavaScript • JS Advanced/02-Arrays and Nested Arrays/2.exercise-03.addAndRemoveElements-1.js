function addAndRemoveElements(arr) {    // 100/100

    let number = 1;
    let result = [];

    for (let command of arr) {
        if (command === 'add') {
            result.push(number);
        } else {
            result.pop();
        }

        number++;
    }

    if (result.length == 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

addAndRemoveElements([
    'add',
    'add',
    'add',
    'add']);
console.log('-------');
addAndRemoveElements([
    'add',
    'add',
    'remove',
    'add',
    'add']);
console.log('-------');
addAndRemoveElements([
    'remove',
    'remove',
    'remove']);
