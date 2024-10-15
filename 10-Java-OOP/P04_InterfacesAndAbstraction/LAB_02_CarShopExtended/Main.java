package P04_InterfacesAndAbstraction.LAB_02_CarShopExtended;
//package LAB_02_CarShopExtended;


public class Main {
    public static void main(String[] args) {

        Sellable seat = new Seat("Leon", "Gray", 110, "Spain", 11111.1);
        Rentable audi = new Audi("A4", "Gray", 110, "Germany", 3, 99.9);


        printCarInfo(seat);
        printCarInfo(audi);


        // CarImpl car = new CarImpl("asd", "asd", 3, "asd");    // не е правилно да се вкарва въобще

        //System.out.println(audi.getPriceForDays(2));      // default method пример
        //System.out.println(audi.getPriceForDays(10));     // default method пример
        //System.out.println(Car.a());                      // static method;  достъп до статичен метод
    }


    private static void printCarInfo(Car car) {

        System.out.println(String.format(
                "%s is %s color and have %s horse power",
                car.getModel(),
                car.getColor(),
                car.getHorsePower()));

        System.out.println(car.toString());     // car.  взима от Seat class или от Audi class toString-a
    }

}
