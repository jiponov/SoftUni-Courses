function stringLength(a, b, c) {    // 100/100

    let aL = a.length;
    let bL = b.length;
    let cL = c.length;

    let sumL = aL + bL + cL;
    let avgL = Math.floor(sumL / 3);

    console.log(sumL);
    console.log(avgL);
}

stringLength('chocolate', 'ice cream', 'cake');
console.log('-------');
stringLength('pasta', '5', '22.3');

/*

•	Write a function that receives three string arguments.
•	Declare two variables named sumLength and averageLength that will keep the mathematical results.
•	Calculate the length of the strings using the length property.

*/