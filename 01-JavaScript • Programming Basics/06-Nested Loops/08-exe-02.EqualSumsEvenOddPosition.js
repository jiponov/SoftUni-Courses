function solve(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let result = "";

    for (let i = num1; i <= num2; i++) {
        let even = 0;
        let odd = 0;
        let currentNum = i + "";    //asString

        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum[j]);
            if (j % 2 == 0) {
                even += currentDigit;
            } else {
                odd += currentDigit;
            }
        }

        if (even == odd) {
            result += currentNum + " ";
        }
    }

    console.log(result);

}
solve(["100000", "100050"]);


