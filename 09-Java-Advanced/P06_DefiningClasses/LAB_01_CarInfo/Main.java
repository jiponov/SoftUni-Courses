package P06_DefiningClasses.LAB_01_CarInfo;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int countCars = Integer.parseInt(scanner.nextLine());

        for (int i = 1; i <= countCars; i++) {
            String data = scanner.nextLine();  // "{brand} {model} {hp}"

            String brand = data.split(" ")[0];
            String model = data.split(" ")[1];
            int hp = Integer.parseInt(data.split(" ")[2]);

            Car car = new Car();  // нов празен обект

            car.setBrand(brand);
            car.setModel(model);
            car.setHorsePower(hp);

            System.out.println(car);
            // OR:
            // System.out.println(car.toString());
        }
    }
}