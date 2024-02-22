package P04_Methods;

import java.util.Scanner;

public class Orders {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String product = scanner.nextLine();
        int quantity = Integer.parseInt(scanner.nextLine());

        printPrice(product, quantity);

    }

    public static void printPrice(String product, int quantity) {

        if (product.equals("coffee")) {
            System.out.printf("%.2f", quantity * 1.50);
        } else if (product.equals("water")) {
            System.out.printf("%.2f", quantity * 1.00);
        } else if (product.equals("coke")) {
            System.out.printf("%.2f", quantity * 1.40);
        } else if (product.equals("snacks")) {
            System.out.printf("%.2f", quantity * 2.00);
        }
    }
}

// 100/100