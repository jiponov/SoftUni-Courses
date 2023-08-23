function phoneShop(inputArr) {      // 100/100

    let phoneList = inputArr.shift().split(', ');
    //console.log(phoneList)

    let index = 0;
    let commands = inputArr[index++];
    while (commands !== 'End') {
        let currentArr = commands.split(' - ');
        let operation = currentArr.shift();
        let phoneModel = currentArr.shift();

        if (operation == 'Add') {
            let phoneAsElArr = phoneModel.split(' ');
            //console.log(phoneAsElArr)
            if (!phoneList.includes(phoneAsElArr[0])) {
                phoneList.push(phoneAsElArr[0]);
            }

        } else if (operation == 'Remove') {
            let phoneAsElArr = phoneModel.split(' ');
            let indexOfPhoneModel = phoneList.indexOf(phoneModel)
            //console.log(indexOfPhoneModel)
            if (phoneList.includes(phoneAsElArr[0])) {
                phoneList.splice(indexOfPhoneModel, 1);
            }

        } else if (operation == 'Bonus phone') {
            let resultArr = phoneModel.split(':');
            if (phoneList.includes(resultArr[0])) {
                let indexOfOldPhone = phoneList.indexOf(resultArr[0]);
                phoneList.splice(indexOfOldPhone + 1, 0, resultArr[1]);
            }

        } else if (operation == 'Last') {
            let phoneAsElArr = phoneModel.split(' ');
            let indexOfPhoneModel = phoneList.indexOf(phoneModel);
            if (phoneList.includes(phoneAsElArr[0])) {
                let takeElementArr = phoneList.splice(indexOfPhoneModel, 1);
                //let elementAsArrEl = takeElement.split(' ');
                phoneList.push(takeElementArr[0]);
            }
        }

        commands = inputArr[index++];
    }

    console.log(phoneList.join(', '))
}

phoneShop((["SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End"]));
console.log('---')
phoneShop(["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"]);
console.log('---')
phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End"]);