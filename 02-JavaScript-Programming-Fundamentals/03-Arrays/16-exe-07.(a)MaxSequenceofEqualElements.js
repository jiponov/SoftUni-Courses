function MaxSequenceofEqualElements(arr) {
    let maxSequence = [];
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        let currentSequence = [];

        for (let j = i; j < arrL; j++) {
            if (arr[i] === arr[j]) {
                currentSequence.push(arr[i]);
            } else {
                break;
            }
        }

        if (currentSequence.length > maxSequence.length) {
            maxSequence = currentSequence;
        }
    }

    console.log(maxSequence.join(' '))
}

MaxSequenceofEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
MaxSequenceofEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
MaxSequenceofEqualElements([4, 4, 4, 4]);
MaxSequenceofEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);