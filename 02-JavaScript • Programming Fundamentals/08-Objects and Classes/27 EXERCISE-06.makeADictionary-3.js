function makeADictionary(arr) {

    let dictionary = {};

    for (let text of arr) {
        let parsedText = JSON.parse(text);
        dictionary = Object.assign(dictionary, parsedText)
    }
    let sorted = Object.keys(dictionary);
    sorted.sort((a, b) => a.localeCompare(b));

    for (let obj of sorted) {
        let values = dictionary[obj];
        console.log(`Term: ${obj} => Definition: ${values}`);
    }
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);