package P05_Polymorphism.EXE_02_VehiclesExtension;

public class Car extends Vehicle {

    public Car(double fuelQuantity, double fuelCostPerKm, double tankCapacity) {
        super(fuelQuantity, fuelCostPerKm + 0.9, tankCapacity);
    }
}