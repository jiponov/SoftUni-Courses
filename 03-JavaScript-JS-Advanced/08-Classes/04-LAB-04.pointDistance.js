// 100/100      Submit the class definition as is, without wrapping it in any function.
class Point {                                           // Write a JS class that represents a Point. 

    constructor(x, y) {                                 // It has x and y coordinates as properties, that are set through the constructor
        this.x = x;
        this.y = y;
    }

    static distance(point1, point2) {                   // static method for finding the distance between two points, called distance()
        let a = Math.abs(point1.x - point2.x);          // The distance() method should receive two Point objects as parameters.
        let b = Math.abs(point1.y - point2.y);

        let distC = Math.sqrt(a ** 2 + b ** 2);         // Питагор a2 + b2 = c2
        return distC;                                   // The distance() method should return a number, the distance between the two-point parameters
    }
}


// check with examples:
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
let checkDistance = Point.distance(p1, p2);
console.log(checkDistance);                             // 5


console.log(p1.x)
console.log(p2.y)