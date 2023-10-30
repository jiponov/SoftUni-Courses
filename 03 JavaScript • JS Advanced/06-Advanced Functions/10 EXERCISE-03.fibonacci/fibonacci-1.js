function fibonacci() { // 100/100
    // OR: let [a,b] = [0,1];
    let a = 0;
    let b = 1;

    // 0, 1, 1, 2, 3, 5, 8, 13
    return () => {                  // arrow function
        let c = a + b;
        a = b;
        b = c;
        return a;
    }
}

let fib = fibonacci();


console.log(fib());     // 1
console.log(fib());     // 1
console.log(fib());     // 2
console.log(fib());     // 3
console.log(fib());     // 5
console.log(fib());     // 8
console.log(fib());     // 13
