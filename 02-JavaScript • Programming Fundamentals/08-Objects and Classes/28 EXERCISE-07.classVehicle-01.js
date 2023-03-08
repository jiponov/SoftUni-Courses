function classVehicle() {
    // copy за judge от тук
    class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.fuel = fuel;
            this.parts.quality = this.parts.engine * this.parts.power;
        }

        drive(lostFuel) {
            return this.fuel -= lostFuel;
        }
    }

  
    let parts = { engine: 6, power: 100 };
    let vehicle = new Vehicle('van', 's8', parts, 200);
    vehicle.drive(100);
    vehicle.drive(50);

    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);

}
classVehicle();