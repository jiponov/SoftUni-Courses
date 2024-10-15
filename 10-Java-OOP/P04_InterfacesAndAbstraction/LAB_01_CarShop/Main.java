package P04_InterfacesAndAbstraction.LAB_01_CarShop;
// package LAB_01_CarShop;


public class Main {

    public static void main(String[] args) {

        Car seat = new Seat("Leon", "gray", 110, "Spain");

        System.out.println(String.format(
                "%s is %s color and have %s horse power",
                seat.getModel(),
                seat.getColor(),
                seat.getHorsePower())
        );

        System.out.println(seat.toString());
    }
}

/*
OUTPUT:

Leon is gray color and have 110 horse power
This is Leon produced in Spain and have 4 tires

*/