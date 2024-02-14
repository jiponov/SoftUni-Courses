package P06_PREP_MID_EXAM;

// 100/100

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class E_01_01_ComputerStore_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double priceWithoutTaxes = 0;
        double taxes = 0;
        double totalPrice = 0;
        String savedTypeCustomer = "";
        String input = scanner.nextLine();

        while (!input.equals("regular") && !input.equals("special")) {
            double partPrice = Double.parseDouble(input);

            input = scanner.nextLine();
            if (input.equals("regular") || input.equals("special")) {
                savedTypeCustomer = input;
            }

            if (partPrice <= 0) {
                System.out.println("Invalid price!");
                continue;
            }

            priceWithoutTaxes += partPrice;
            taxes += partPrice * 0.2;
        }

        totalPrice += priceWithoutTaxes + taxes;

        if (totalPrice == 0) {
            System.out.println("Invalid order!");
            return;
        }

        if (savedTypeCustomer.equals("special")) {
            totalPrice *= 0.9;
        }

        System.out.printf("Congratulations you've just bought a new computer!\n" +
                "Price without taxes: %.2f$\n" +
                "Taxes: %.2f$\n" +
                "-----------\n" +
                "Total price: %.2f$\n", priceWithoutTaxes, taxes, totalPrice);
    }
}