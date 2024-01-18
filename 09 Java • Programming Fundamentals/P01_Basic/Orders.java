package P01_Basic;

import java.util.Scanner;

public class Orders {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int orders = Integer.parseInt(scanner.nextLine());
        double result = 0;
        double output = 0;

        for (int i = 0; i < orders; i++) {
            double pricePerCapsule = Double.parseDouble(scanner.nextLine());
            int days = Integer.parseInt(scanner.nextLine());
            double capsulesCount = Double.parseDouble(scanner.nextLine());

            result = ((days * capsulesCount) * pricePerCapsule);
            output += result;
            System.out.printf("The price for the coffee is: $%.2f%n", result);
            result = 0;
        }

        System.out.printf("Total: $%.2f", output);
    }
}

// 100/100