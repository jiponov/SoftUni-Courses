package P05_Polymorphism.EXE_01_Vehicles;

public class Truck extends Vehicle {

    public Truck(double fuel, double consumption) {
        super(fuel, consumption + 1.6);
    }


    @Override
    public void refuel(double refill) {
        double totalFuel = refill * 0.95;
        this.setFuel(this.getFuel() + totalFuel);
    }
}