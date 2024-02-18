// 100/100

import java.util.Scanner;

public class Shopping {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double budget = Double.parseDouble(scanner.nextLine());
        int countVideoCards = Integer.parseInt(scanner.nextLine());
        int countCPU = Integer.parseInt(scanner.nextLine());
        int countRamMemory = Integer.parseInt(scanner.nextLine());

        double sumVideoCards = countVideoCards * 250;

        double priceCPU = 0.35 * sumVideoCards;
        double sumCPU = countCPU * priceCPU;

        double priceRam = 0.1 * sumVideoCards;
        double sumRam = countRamMemory * priceRam;

        double totalPrice = sumVideoCards + sumCPU + sumRam;

        if (countVideoCards > countCPU) {
            totalPrice = totalPrice - 0.15 * totalPrice;
        }

        if (budget >= totalPrice) {
            double leftMoney = budget - totalPrice;
            System.out.printf("You have %.2f leva left!", leftMoney);
        } else {
            double needMoney = totalPrice - budget;
            System.out.printf("Not enough money! You need %.2f leva more!", needMoney);
        }
    }
}
