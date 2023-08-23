function solve(input) {

    let index = 0;
    let groups = Number(input[index]);
    index++;

    let musala = 0;
    let monblan = 0;
    let kili = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 0; i < groups; i++) {

        let people = Number(input[index]);
        index++;

        if (people <= 5) {
            musala += people;
        } else if (people >= 6 && people <= 12) {
            monblan += people;
        } else if (people >= 13 && people <= 25) {
            kili += people;
        } else if (people >= 26 && people <= 40) {
            k2 += people;
        } else if (people >= 41) {
            everest += people;
        }
    }
    let totalPeople = musala + monblan + kili + k2 + everest;

    console.log(`${((musala / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((monblan / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((kili / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((k2 / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((everest / totalPeople) * 100).toFixed(2)}%`);

}
solve(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);

/*

function solve(input) {

    let index = 0;
    let groupCount = Number(input[index]);
    index++;

    let people = 0;

    let musala = 0;
    let monblan = 0;
    let kili = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 0; i < groupCount; i++) {
        let currentGroupCount = Number(input[index]);
        index++;

        people += currentGroupCount;

        if (currentGroupCount <= 5) {
            musala += currentGroupCount;
        } else if (currentGroupCount >= 6 && currentGroupCount <= 12) {
            monblan += currentGroupCount;
        } else if (currentGroupCount >= 13 && currentGroupCount <= 25) {
            kili += currentGroupCount;
        } else if (currentGroupCount >= 26 && currentGroupCount <= 40) {
            k2 += currentGroupCount;
        } else if (currentGroupCount >= 41) {
            everest += currentGroupCount;
        }
    }

    let musalaPercent = musala / people * 100;
    let monblanPercent = monblan / people * 100;
    let kiliPercent = kili / people * 100;
    let k2Percent = k2 / people * 100;
    let everestPercent = everest / people * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kiliPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);

}
solve(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);

*/
