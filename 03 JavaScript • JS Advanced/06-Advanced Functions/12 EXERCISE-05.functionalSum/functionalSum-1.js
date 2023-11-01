function add(start) {       // 100/100

    let sum = 0;

    function inner(num) {
        sum += num;
        return inner;
    }

    inner.toString = () => {
        return sum;
    }

    return inner(start);
}

console.log(add(1)(6)(-3).toString());
//console.log(add(1).toString());       
