import java.util.Scanner;

public class FishingBoat {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int budget = Integer.parseInt(scanner.nextLine());
        String season = scanner.nextLine();
        int workers = Integer.parseInt(scanner.nextLine());
        double price = 0.0;

        if (season.equals("Spring")) {
            price = 3000;
        } else if (season.equals("Summer") || season.equals("Autumn")) {
            price = 4200;
        } else if (season.equals("Winter")) {
            price = 2600;
        }

        if (workers <= 6) {
            price *= 0.90;
        } else if (workers <= 11) {
            price *= 0.85;
        } else {
            price *= 0.75;
        }

        if (workers % 2 == 0 && !season.equals("Autumn")) {
            price *= 0.95;
        }

        double diff = Math.abs(budget - price);

        if (budget >= price) {
            System.out.printf("Yes! You have %.2f leva left.", diff);
        } else {
            System.out.printf("Not enough money! You need %.2f leva.", diff);
        }
    }
}

// 100/100