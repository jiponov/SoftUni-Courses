function makeADictionary(inputArr) {

    let myObj = {};

    for (let jsonLine of inputArr) {
        let currentObj = JSON.parse(jsonLine);
        Object.entries(currentObj).forEach(([key, value]) => {
            myObj[key] = value;
        })
    }
    //console.log(inputArr)   // един масив от json strings с objects вътре
    //console.log(myObj)      // един обект с key и value свойства

    let keysArr = Object.keys(myObj);
    //console.log(keysArr)     // масив от keys
    keysArr.sort((a, b) => {
        return a.localeCompare(b);
    })

    for (let key of keysArr) {
        console.log(`Term: ${key} => Definition: ${myObj[key]}`);
    }
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);