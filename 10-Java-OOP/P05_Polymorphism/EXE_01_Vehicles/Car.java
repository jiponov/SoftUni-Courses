package P05_Polymorphism.EXE_01_Vehicles;

public class Car extends Vehicle {

    public Car(double fuel, double consumption) {
        super(fuel, consumption + 0.9);
    }


    @Override
    public void refuel(double refill) {
        this.setFuel(this.getFuel() + refill);
    }
}