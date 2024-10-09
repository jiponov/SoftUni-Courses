package P03_Inheritance.EXE_04_NeedForSpeed;

public class SportCar extends Car {

    public SportCar(double fuel, int horsePower) {
        super(fuel, horsePower);
        setFuelConsumption(10);
    }
}



/*
вариант 2


private static final double DEFAULT_FUEL_CONSUMPTION = 10;

public SportCar(double fuel, int horsePower) {
        super(fuel, horsePower);
        this.setFuelConsumption(DEFAULT_FUEL_CONSUMPTION);
    }


*/