function addAndRemoveElements(arr) {    // 100/100

    let result = [];
    let commands = {
        add: (number) => { result.push(number) },
        remove: (number) => { result.pop() }
    }

    for (let i = 0; i < arr.length; i++) {
        commands[arr[i]](i + 1);
    }

    if (result.length !== 0) {
        return result.join('\n')
    } else {
        return result = `Empty`
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
