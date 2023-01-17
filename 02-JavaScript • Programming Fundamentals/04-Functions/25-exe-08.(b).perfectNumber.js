perfectNumber = (num) => {

    let arr = []
    for (let i = 1, j = 0; i < num; i++)
        if (num % i === 0) {
            arr[j] = i
            j++
        }

    let sum = 0
    for (let i = 0; i < arr.length; i++)
        sum += arr[i]

    if (sum === num)
        console.log('We have a perfect number!')
    else
        console.log('It\'s not so perfect.')
}

perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498)