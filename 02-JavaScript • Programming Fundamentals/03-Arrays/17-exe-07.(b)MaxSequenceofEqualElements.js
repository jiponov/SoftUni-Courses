function solve(arr) {
    let longestSequence = [];
    let leftMostIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        currentEl = Number(arr[i]);
        let currentSequence = [currentEl];
        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = Number(arr[j]);
            if (nextEl === currentEl) {
                currentSequence.push(nextEl)
            } else {
                break;
            }
        }
        if (currentSequence.length > longestSequence.length) {
            longestSequence = [];
            for (let j = 0; j < currentSequence.length; j++) {
                longestSequence.push(currentSequence[j]);
            }
        } else if (currentSequence.length === longestSequence.length) {
            if (i < leftMostIndex) {
                leftMostIndex = i;
            }
        }
    }
    console.log(longestSequence.join(' '));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);