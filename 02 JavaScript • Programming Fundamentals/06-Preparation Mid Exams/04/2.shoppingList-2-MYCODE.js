function shoppingList(input) {              // 100/100

    let list = input.shift().split('!');
    let index = 0;
    let command = input[index++];

    while (command != 'Go Shopping!') {
        let currentLine = command.split(' ');
        let operation = currentLine.shift();

        if (operation == 'Urgent') {
            let item = currentLine[0];
            if (!list.includes(item)) {
                list.unshift(item);
            }

        } else if (operation == 'Unnecessary') {
            let item = currentLine[0];
            if (list.includes(item)) {
                let itemIndex = list.indexOf(item);
                list.splice(itemIndex, 1);
            }

        } else if (operation == 'Correct') {
            let itemOld = currentLine[0];
            let itemNew = currentLine[1];
            if (list.includes(itemOld)) {
                let itemIndexOld = list.indexOf(itemOld);
                list.splice(itemIndexOld, 1, itemNew);
            }

        } else if (operation == 'Rearrange') {
            let item = currentLine[0];
            if (list.includes(item)) {
                let itemIndex = list.indexOf(item);
                let remove = list.splice(itemIndex, 1);
                list.push(remove);
            }
        }

        command = input[index++];
    }


    console.log(list.join(', '));
}

shoppingList([
    "Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
]);
console.log('----------------------------------------------------------------------------');
shoppingList([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
]);



