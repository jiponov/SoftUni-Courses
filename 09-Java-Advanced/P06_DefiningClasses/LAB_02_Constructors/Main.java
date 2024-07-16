package P06_DefiningClasses.LAB_02_Constructors;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int carCount = Integer.parseInt(scanner.nextLine());

        for (int i = 1; i <= carCount; i++) {
            String[] token = scanner.nextLine().split(" ");

            Car currentCar = new Car();

            if (token.length == 3) {
                currentCar = new Car(token[0], token[1], Integer.parseInt(token[2]));
            } else {
                currentCar = new Car(token[0]);
            }

            System.out.println(currentCar.toString());
        }
    }
}