// 100/100
import java.util.Scanner;

public class GodzillaVsKong {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double budget = Double.parseDouble(scanner.nextLine());
        int numberWorkers = Integer.parseInt(scanner.nextLine());
        double priceForWorker = Double.parseDouble(scanner.nextLine());

        double decor = budget * 0.10;
        double priceClothes = numberWorkers * priceForWorker;

        if (numberWorkers > 150) {
            double priceClothesDiscount = priceClothes - priceClothes * 0.10;
            double priceMovie = priceClothesDiscount + decor;
            if (priceMovie <= budget) {
                double moneyLeft = budget - priceMovie;
                System.out.println("Action!");
                System.out.printf("Wingard starts filming with %.2f leva left.", moneyLeft);
            } else if (priceMovie > budget) {
                double noMoney = priceMovie - budget;
                System.out.println("Not enough money!");
                System.out.printf("Wingard needs %.2f leva more.", noMoney);
            }

        } else if (numberWorkers < 150) {
            double priceMovie = priceClothes + decor;
            if (priceMovie <= budget) {
                double moneyLeft = budget - priceMovie;
                System.out.println("Action!");
                System.out.printf("Wingard starts filming with %.2f leva left.", moneyLeft);
            } else if (priceMovie > budget) {
                double noMoney = priceMovie - budget;
                System.out.println("Not enough money!");
                System.out.printf("Wingard needs %.2f leva more.", noMoney);
            }
        }
    }
}
