function solve(inputArr1, inputArr2) {

    let sum = 0;

    for (let i = 0; i < inputArr1.length; i++) {
        if (inputArr1[i] !== inputArr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        } else {
            sum += Number(inputArr1[i]);
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`);

}

solve(['10', '20', '30'], ['10', '20', '30']);
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
solve(['1'], ['10']);