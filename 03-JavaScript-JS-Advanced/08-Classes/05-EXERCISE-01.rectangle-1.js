class Rectangle {       // 100/100                      // Submit the class definition as is, without wrapping it in any function.
    constructor(width, height, color) {                 // properties, which are set from the constructor
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {                                        // calcArea() method, that calculates and returns the rectangle’s area.
        return this.width * this.height;
    }
}


let exampleRect = new Rectangle(4, 5, 'Red');

console.log(exampleRect.width);                         // 4
console.log(exampleRect.height);                        // 5
console.log(exampleRect.color);                         // Red
console.log(exampleRect.calcArea());                    // 20