package P03_Inheritance.EXE_04_NeedForSpeed;

public class Car extends Vehicle {

    public Car(double fuel, int horsePower) {
        // Тук реферирам към конструктора на бащиният клас
        super(fuel, horsePower);
        // Тук реферирам към метода setFuelConsumption в бащиният клас
        super.setFuelConsumption(3);
    }
}


/*
вариант 2


private static final double DEFAULT_FUEL_CONSUMPTION = 3;

public Car(double fuel, int horsePower) {
        super(fuel, horsePower);
        this.setFuelConsumption(DEFAULT_FUEL_CONSUMPTION);
    }


*/