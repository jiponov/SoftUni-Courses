function shoppingList(input) {          // 100/100
    let list = input.shift().split('!');

    while (input[0] != undefined) {
        let command = input.shift().split(' ');
        let operation = command[0];
        if (command == 'Go Shopping!') {
            break;
        }


        if (operation == 'Urgent') {
            let item = command[1];
            if (!list.includes(item)) {
                list.unshift(item);
            }


        } else if (operation == 'Unnecessary') {
            let item = command[1];
            if (list.includes(item)) {
                let itemIndex = list.indexOf(item);
                list.splice(itemIndex, 1);
            }


        } else if (operation == 'Correct') {
            let oldItem = command[1];
            let newItem = command[2];
            let oldItemIndex = list.indexOf(oldItem);
            let newItemIndex = list.indexOf(newItem);

            if (list.includes(oldItem)) {
                list.splice(oldItemIndex, 1, newItem);
            }


        } else if (operation == 'Rearrange') {
            let item = command[1];
            if (list.includes(item)) {
                let itemIndex = list.indexOf(item);
                list.splice(itemIndex, 1);
                list.push(item);
            }
        }
    }

    console.log(`${list.join(', ')}`);
}

shoppingList([
    "Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);
console.log('-------');
shoppingList([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);

