function rounding(a, b) {

    if (b <= 15) {
        console.log(parseFloat(a.toFixed(b)));
    }
    else {
        console.log(parseFloat(a.toFixed(15)));
    }
}
rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);


