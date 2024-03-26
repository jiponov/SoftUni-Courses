package P12_PREP_FINAL_EXAM;
// 100/100
// MAPS

import java.util.*;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.TreeMap;

public class E_03_03_NeedForSpeed3_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        // car | mileage,fuel
        Map<String, List<Integer>> cars = new LinkedHashMap<>();


        for (int i = 0; i < n; i++) {
            String line = scanner.nextLine();
            String car = line.split("\\|")[0];
            int mileage = Integer.parseInt(line.split("\\|")[1]);
            int fuel = Integer.parseInt(line.split("\\|")[2]);

            cars.put(car, new ArrayList<>());
            cars.get(car).add(mileage);
            cars.get(car).add(fuel);
        }


        String input = scanner.nextLine();
        while (!input.equals("Stop")) {
            String command = input.split(" : ")[0];
            String car = input.split(" : ")[1];

            if (command.equals("Drive")) {
                int dist = Integer.parseInt(input.split(" : ")[2]);
                int requiredFuel = Integer.parseInt(input.split(" : ")[3]);

                int mileageCar = cars.get(car).get(0);
                int fuelCar = cars.get(car).get(1);
                int fuelLeftInCar = Math.abs(fuelCar - requiredFuel);
                int mileageIncreasedTo = mileageCar + dist;

                if (fuelCar >= requiredFuel) {
                    cars.get(car).set(0, mileageIncreasedTo);
                    cars.get(car).set(1, fuelLeftInCar);
                    System.out.printf("%s driven for %d kilometers. %d liters of fuel consumed.\n", car, dist, requiredFuel);
                } else {
                    System.out.println("Not enough fuel to make that ride");
                }

                mileageCar = cars.get(car).get(0);
                if (mileageCar >= 100000) {
                    cars.remove(car);
                    System.out.printf("Time to sell the %s!\n", car);
                }


            } else if (command.equals("Refuel")) {
                int newFuelToRefill = Integer.parseInt(input.split(" : ")[2]);

                int fuelCar = cars.get(car).get(1);
                int refillValue = fuelCar + newFuelToRefill;
                int refillResult = 0;

                if (refillValue > 75) {
                    refillResult = 75 - fuelCar;
                    cars.get(car).set(1, 75);
                    System.out.printf("%s refueled with %d liters\n", car, refillResult);
                } else {
                    cars.get(car).set(1, refillValue);
                    System.out.printf("%s refueled with %d liters\n", car, newFuelToRefill);
                }


            } else if (command.equals("Revert")) {
                int kilometers = Integer.parseInt(input.split(" : ")[2]);

                int mileageCar = cars.get(car).get(0);
                int mileageLeftCar = mileageCar - kilometers;

                if (mileageLeftCar < 10000) {
                    mileageLeftCar = 10000;
                    cars.get(car).set(0, mileageLeftCar);

                    input = scanner.nextLine();
                    continue;
                }

                cars.get(car).set(0, mileageLeftCar);
                System.out.printf("%s mileage decreased by %d kilometers\n", car, kilometers);
            }

            input = scanner.nextLine();
        }


        for (Map.Entry<String, List<Integer>> entry : cars.entrySet()) {
            System.out.printf("%s -> Mileage: %d kms, Fuel in the tank: %d lt.\n", entry.getKey(), entry.getValue().get(0), entry.getValue().get(1));
        }
    }
}