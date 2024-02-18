function arrayManipulator(nums, commands) {

    for (let i = 0; i < commands.length; i++) {
        let currentValues = commands[i].split(' ');
        let currentCommand = currentValues.shift();

        currentValues = currentValues.map(Number);
        let sumPairs = 0;
        let pairsOfSumNums = [];

        if (currentCommand === 'add') {
            let indexToAdd = currentValues[0];
            let elementToAdd = currentValues[1];
            nums.splice(indexToAdd, 0, elementToAdd);

        } else if (currentCommand === 'addMany') {
            let indexToAddMany = currentValues.shift();
            nums.splice(indexToAddMany, 0, ...currentValues);

        } else if (currentCommand === 'contains') {
            console.log(nums.indexOf(currentValues[0]));

        } else if (currentCommand === 'remove') {
            let indexToRemove = currentValues[0];
            nums.splice(indexToRemove, 1);

        } else if (currentCommand === 'shift') {
            for (let i = 0; i < currentValues[0]; i++) {
                nums.push(nums.shift());
            }

        } else if (currentCommand === 'sumPairs') {
            if (nums.length % 2 !== 0) {
                nums.push(0);
            }
            for (let i = 0; i < nums.length; i += 2) {
                sumPairs = nums[i] + nums[i + 1];
                pairsOfSumNums.push(sumPairs);
            }
            nums = [...pairsOfSumNums];

        } else if (currentCommand === 'print') {
            console.log(`[ ${nums.join(', ')} ]`);
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);