function inventory(input) {          // 100/100

    let journal = input.shift().split(', ');

    while (input.length > 0) {
        let command = input.shift();
        if (command == 'Craft!') {
            break;
        }

        command = command.split(' - ');
        let operation = command[0];

        if (operation == 'Collect') {
            let item = command[1];
            if (!journal.includes(item)) {
                journal.push(item);
            }

        } else if (operation == 'Drop') {
            let item = command[1];
            if (journal.includes(item)) {
                let itemIndex = journal.indexOf(item);
                journal.splice(itemIndex, 1);
            }

        } else if (operation == 'Combine Items') {
            let items = command[1].split(':');
            let oldItem = items[0];
            let newItem = items[1];
            if (journal.includes(oldItem)) {
                let oldItemIndex = journal.indexOf(oldItem);
                journal.splice(oldItemIndex + 1, 0, newItem);
            }

        } else if (operation == 'Renew') {
            let item = command[1];
            if (journal.includes(item)) {
                let itemIndex = journal.indexOf(item);
                journal.splice(itemIndex, 1);
                journal.push(item);
            }
        }
    }

    console.log(`${journal.join(', ')}`);
}

inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!']);
console.log('-------');
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!']);

