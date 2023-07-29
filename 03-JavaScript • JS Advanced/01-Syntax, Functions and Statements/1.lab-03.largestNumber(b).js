function largestNumber(a, b, c) {    // 100/100

    let result;

    if (a >= b && a >= c) {
        result = a;
    } else if (b >= a && b >= c) {
        result = b;
    } else {
        result = c;
    }

    console.log('The largest number is ' + result + '.');
}

largestNumber(5, -3, 16);
console.log('-------');
largestNumber(-3, -5, -22.5);

/*

•	Write a function that receives three number arguments.
•	Declare a variable named result that will keep the result.
•	Make several checks to find out the largest of the three numbers. Start with num1.
•	Do the same for the others.
•	Print the result on the console.

*/