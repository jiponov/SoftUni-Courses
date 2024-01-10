import java.util.Scanner;

public class Journey {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double budget = Double.parseDouble(scanner.nextLine());
        String season = scanner.nextLine();
        double price = 0.0;

        if (budget <= 100) {
            System.out.println("Somewhere in Bulgaria");
            if (season.equals("summer")) {
                price = budget * 0.30;
                System.out.printf("Camp - %.2f", price);
            } else if (season.equals("winter")) {
                price = budget * 0.70;
                System.out.printf("Hotel - %.2f", price);
            }

        } else if (budget <= 1000) {
            System.out.println("Somewhere in Balkans");
            if (season.equals("summer")) {
                price = budget * 0.40;
                System.out.printf("Camp - %.2f", price);
            } else if (season.equals("winter")) {
                price = budget * 0.80;
                System.out.printf("Hotel - %.2f", price);
            }

        } else if (budget > 1000) {
            System.out.println("Somewhere in Europe");
            if (season.equals("summer")) {
                price = budget * 0.90;
                System.out.printf("Hotel - %.2f", price);
            } else if (season.equals("winter")) {
                price = budget * 0.90;
                System.out.printf("Hotel - %.2f", price);
            }
        }
    }
}

// 100/100