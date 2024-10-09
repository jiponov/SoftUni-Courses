package P03_Inheritance.EXE_04_NeedForSpeed;

public class RaceMotorcycle extends Motorcycle {

    public RaceMotorcycle(double fuel, int horsePower) {
        super(fuel, horsePower);
        setFuelConsumption(8);
    }
}



/*
вариант 2


private static final double DEFAULT_FUEL_CONSUMPTION = 8;

public RaceMotorcycle(double fuel, int horsePower) {
        super(fuel, horsePower);
        this.setFuelConsumption(DEFAULT_FUEL_CONSUMPTION);
    }


*/


/*
вариант 3


private static final double DEFAULT_FUEL_CONSUMPTION = 8;
        super.setFuelConsumption(DEFAULT_FUEL_CONSUMPTION);



        */