function rectangle(width, height, color) {    // 100/100
    // compose the object
    const rectangle = {
        width: Number(width),
        height: Number(height),
        color: color.replace(color[0], color[0].toUpperCase()),

        // create calcArea func
        calcArea() {
            return width * height;
        },
    };

    // return the newly composed object 
    return rectangle;
}

let rect = new rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());



