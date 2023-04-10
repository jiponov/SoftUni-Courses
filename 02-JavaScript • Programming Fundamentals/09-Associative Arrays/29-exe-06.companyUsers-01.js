function companyUsers(inputArr) {

    let result = {};

    for (let el of inputArr) {
        let token = el.split(' -> ');
        //console.log(token);
        let name = token[0];
        let id = token[1];
        if (!result.hasOwnProperty(name)) {
            result[name] = new Set();
            result[name].add(id)
        }
        result[name].add(id)
    }
    console.log(result);    

    let sorted = Object
        .keys(result)
        .sort((a, b) => a.localeCompare(b))

    for (let el of sorted) {
        console.log(`${el}`);
        for (let subEl of result[el]) {
            console.log(`-- ${subEl}`);
        }
    }
    // 2-ри начин
    // let entries = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));
    // for (let [company, ids] of entries) {
    //     console.log(company);
    //     for (let id of ids) {
    //         console.log(`-- ${id}`);
    //     }
    // }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);

//console.log('-------');

