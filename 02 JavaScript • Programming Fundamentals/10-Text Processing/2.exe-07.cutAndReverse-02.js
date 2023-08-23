function cutAndReverse(text) {
    let middle = text.length / 2;

    let first = text
        .substring(0, middle)
        .split("")              // прави го на МАСИВ от букви елементи
        .reverse()              // обръща го масива
        .join("");              // връща го пак на стринг

    let second = text
        .substring(middle)
        .split("")              // прави го на МАСИВ от букви елементи
        .reverse()
        .join("");

    console.log(first);
    console.log(second);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');