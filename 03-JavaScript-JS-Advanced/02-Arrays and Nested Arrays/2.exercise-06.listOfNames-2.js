function listOfNames(arr) {    // 100/100

    arr
        .sort((a, b) => a.localeCompare(b))
        .forEach((value, i) => console.log(`${i + 1}.${value}`));
}

listOfNames(["John", "Bob", "Christina", "Ema"]);

