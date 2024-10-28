package P05_Polymorphism.EXE_01_Vehicles;

import java.text.DecimalFormat;


public abstract class Vehicle {

    private double fuel;
    private double consumption;


    public Vehicle(double fuel, double consumption) {
        this.fuel = fuel;
        this.consumption = consumption;
    }


    public String drive(double driveDistance) {

        String message;

        double requiredFuel = driveDistance * this.getConsumption();


        // Може ли превозното средтсво да измине това разстояние
        if (requiredFuel <= this.getFuel()) {
            DecimalFormat df = new DecimalFormat("#.##");
            message = String.format("%s travelled %s km", this.getClass().getSimpleName(), df.format(driveDistance));

            this.setFuel(this.getFuel() - requiredFuel);    // Намалям кол. гориво


        } else {   // Ако не може:
            message = String.format("%s needs refueling", this.getClass().getSimpleName());
        }


        return message;
    }


    public abstract void refuel(double refill);


    public double getFuel() {
        return fuel;
    }

    public void setFuel(double fuel) {
        this.fuel = fuel;
    }

    public double getConsumption() {
        return consumption;
    }

    public void setConsumption(double consumption) {
        this.consumption = consumption;
    }


    public String toString() {
        return String.format("%s: %.2f", this.getClass().getSimpleName(), this.getFuel());
    }
}