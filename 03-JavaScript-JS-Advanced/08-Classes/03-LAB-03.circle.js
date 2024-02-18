class Circle {      // 100/100

    constructor(radius) {
        this.radius = radius;                       // c.radius
    }


    get diameter() {                                // property of object 'c' instance      -       getter method   c.diameter
        return this.radius * 2;
    }

    set diameter(value) {                           // property of object 'c' instance      -       setter method
        this.radius = value / 2;
    }


    get area() {                                    // c.area
        return this.radius ** 2 * Math.PI;
    }
}


let c = new Circle(2);
console.log(c)
console.log(Array.from(c))              // NO
console.log(typeof c)
console.log(Object.entries(c))
console.log(Object.entries(c)[0])       // [ 'radius', 2 ]
console.log(Object.entries(c)[0][0])    // radius
console.log(Object.entries(c)[0][1])    // 2

console.log(`Radius: ${c.radius}`);             // Radius: 2
console.log(`Diameter: ${c.diameter}`);         // Diameter: 4
console.log(`Area: ${c.area}`);                 // Area: 12.566370614359172


c.diameter = 1.6;

console.log(`Radius: ${c.radius}`);             // Radius: 0.8
console.log(`Diameter: ${c.diameter}`);         // Diameter: 1.6
console.log(`Area: ${c.area}`);                 // Area: 2.0106192982974678






