import java.util.Scanner;

public class NewHouse {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String flowersType = scanner.nextLine();
        int flowers = Integer.parseInt(scanner.nextLine());
        int budget = Integer.parseInt(scanner.nextLine());
        double price = 0.0;

        if (flowersType.equals("Roses")) {
            price = 5;
        } else if (flowersType.equals("Dahlias")) {
            price = 3.80;
        } else if (flowersType.equals("Tulips")) {
            price = 2.80;
        } else if (flowersType.equals("Narcissus")) {
            price = 3;
        } else if (flowersType.equals("Gladiolus")) {
            price = 2.50;
        }

        price = price * flowers;

        if (flowersType.equals("Roses") && flowers > 80) {
            price *= 0.9;
        } else if (flowersType.equals("Dahlias") && flowers > 90) {
            price *= 0.85;
        } else if (flowersType.equals("Tulips") && flowers > 80) {
            price *= 0.85;
        } else if (flowersType.equals("Narcissus") && flowers < 120) {
            price *= 1.15;
        } else if (flowersType.equals("Gladiolus") && flowers < 80) {
            price *= 1.2;
        }

        double sum = Math.abs(budget - price);

        if (budget >= price) {
            System.out.printf("Hey, you have a great garden with %d %s and %.2f leva left.", flowers, flowersType, sum);
        } else {
            System.out.printf("Not enough money, you need %.2f leva more.", sum);
        }
    }
}

// 100/100