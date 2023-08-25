function listOfNames(arr) {    // 100/100

    arr.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}.${arr[i]}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);

