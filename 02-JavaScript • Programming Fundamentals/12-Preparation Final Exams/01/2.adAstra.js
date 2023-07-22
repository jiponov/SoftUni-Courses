function adAstra(input) {          // 100/100
    'use strict'
    let text = input.shift();
    let pattern = /([\#\|])(?<nameItem>[A-Za-z\s]+)\1(?<dateExpire>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;

    let collection = [];
    let totalCaloriesFood = 0;
    let match = pattern.exec(text);

    while (match != null) {
        let name = match.groups.nameItem;
        let date = match.groups.dateExpire;
        let calories = Number(match.groups.calories);

        totalCaloriesFood += calories;
        collection.push(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`);

        match = pattern.exec(text);
    }
    //console.log(collection)
    let foodLast = Math.floor(totalCaloriesFood / 2000);
    
    console.log(`You have food to last you for: ${foodLast} days!`);
    collection.forEach(el => console.log(el));
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
console.log('-------');
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
console.log('-------');
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);
