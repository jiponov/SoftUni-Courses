package P05_Polymorphism.EXE_02_VehiclesExtension;

public class Truck extends Vehicle {

    public Truck(double fuelQuantity, double fuelCostPerKm, double tankCapacity) {
        super(fuelQuantity, fuelCostPerKm + 1.6, tankCapacity);
    }

    @Override
    public void refuel(double fuelToRefill) {
        // Тук вече зная колко реално ще заредя на Truck
        double totalFuelToRefill = fuelToRefill * 0.95;
        super.refuel(totalFuelToRefill);
    }
}