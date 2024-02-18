package P01_Basic;

import java.util.Scanner;

public class VendingMachine {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        double sum = 0.0;

        while (!input.equals("Start")) {
            double coin = Double.parseDouble(input);
            if (coin == 0.1 || coin == 0.2 || coin == 0.5 || coin == 1 || coin == 2) {
                sum += coin;
            } else {
                System.out.printf("Cannot accept %.2f\n", coin);
            }

            input = scanner.nextLine();
        }

        String text = scanner.nextLine();

        while (!text.equals("End")) {
            if (text.equals("Nuts")) {
                if (sum >= 2.0) {
                    sum -= 2.0;
                    System.out.printf("Purchased %s\n", text);
                } else {
                    System.out.println("Sorry, not enough money");
                }
            } else if (text.equals("Water")) {
                if (sum >= 0.7) {
                    sum -= 0.7;
                    System.out.printf("Purchased %s\n", text);
                } else {
                    System.out.println("Sorry, not enough money");
                }
            } else if (text.equals("Crisps")) {
                if (sum >= 1.5) {
                    sum -= 1.5;
                    System.out.printf("Purchased %s\n", text);
                } else {
                    System.out.println("Sorry, not enough money");
                }
            } else if (text.equals("Soda")) {
                if (sum >= 0.8) {
                    sum -= 0.8;
                    System.out.printf("Purchased %s\n", text);
                } else {
                    System.out.println("Sorry, not enough money");
                }
            } else if (text.equals("Coke")) {
                if (sum >= 1.0) {
                    sum -= 1.0;
                    System.out.printf("Purchased %s\n", text);
                } else {
                    System.out.println("Sorry, not enough money");
                }
            } else {
                System.out.println("Invalid product");
            }

            text = scanner.nextLine();
        }

        System.out.printf("Change: %.2f\n", sum);
    }
}

// 100/100