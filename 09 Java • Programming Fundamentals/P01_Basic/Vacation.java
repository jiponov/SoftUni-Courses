package P01_Basic;

import java.util.Scanner;

public class Vacation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int group = Integer.parseInt(scanner.nextLine());
        String type = scanner.nextLine();
        String day = scanner.nextLine();

        double price = 0.0;

        if (type.equals("Students")) {
            double sumGroup = 0.0;

            if (day.equals("Friday")) {
                sumGroup = group * 8.45;
            } else if (day.equals("Saturday")) {
                sumGroup = group * 9.80;
            } else if (day.equals("Sunday")) {
                sumGroup = group * 10.46;
            }

            if (group >= 30) {
                sumGroup *= 0.85;
            }

            price += sumGroup;

        } else if (type.equals("Business")) {
            double sumGroup = 0.0;

            if (group >= 100) {
                group -= 10;
            }

            if (day.equals("Friday")) {
                sumGroup = group * 10.90;
            } else if (day.equals("Saturday")) {
                sumGroup = group * 15.60;
            } else if (day.equals("Sunday")) {
                sumGroup = group * 16;
            }

            price += sumGroup;

        } else if (type.equals("Regular")) {
            double sumGroup = 0.0;

            if (day.equals("Friday")) {
                sumGroup = group * 15;
            } else if (day.equals("Saturday")) {
                sumGroup = group * 20;
            } else if (day.equals("Sunday")) {
                sumGroup = group * 22.50;
            }

            if (group >= 10 && group <= 20) {
                sumGroup *= 0.95;
            }

            price += sumGroup;
        }

        System.out.printf("Total price: %.2f", price);
    }
}

// 100/100