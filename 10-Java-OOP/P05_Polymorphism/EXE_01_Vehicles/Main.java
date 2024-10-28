package P05_Polymorphism.EXE_01_Vehicles;

import java.util.Scanner;


public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String[] carDetails = scanner.nextLine().split("\\s+");
        String[] truckDetails = scanner.nextLine().split("\\s+");

        // Car 30.4 0.4
        double carFuel = Double.parseDouble(carDetails[1]);
        double carConsumption = Double.parseDouble(carDetails[2]);

        // Truck 99.34 0.9
        double truckFuel = Double.parseDouble(truckDetails[1]);
        double truckConsumption = Double.parseDouble(truckDetails[2]);

        Car car = new Car(carFuel, carConsumption);
        Truck truck = new Truck(truckFuel, truckConsumption);

        // 5
        int n = Integer.parseInt(scanner.nextLine());


        for (int i = 0; i < n; i++) {

            // Drive Car 500
            // Refuel Truck 10.300
            String[] tokens = scanner.nextLine().split("\\s+");
            String command = tokens[0];
            String vehicleType = tokens[1];
            double number = Double.parseDouble(tokens[2]);


            switch (command) {

                case "Drive":
                    if (vehicleType.equals("Car")) {
                        System.out.println(car.drive(number));
                    } else {
                        System.out.println(truck.drive(number));
                    }
                    break;

                case "Refuel":
                    if (vehicleType.equals("Car")) {
                        car.refuel(number);
                    } else {
                        truck.refuel(number);
                    }
                    break;
            }
        }


        System.out.println(car.toString());
        System.out.println(truck.toString());
    }
}