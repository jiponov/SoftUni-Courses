// 100/100
import java.util.Scanner;

public class Shop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String product = scanner.nextLine();
        String city = scanner.nextLine();
        double quantity = Double.parseDouble(scanner.nextLine());

        double output = 0.0;

        if (city.equals("Sofia")) {
            if (product.equals("coffee")) {
                output = quantity * 0.50;
            } else if (product.equals("water")) {
                output = quantity * 0.80;
            } else if (product.equals("beer")) {
                output = quantity * 1.20;
            } else if (product.equals("sweets")) {
                output = quantity * 1.45;
            } else if (product.equals("peanuts")) {
                output = quantity * 1.60;
            }

        } else if (city.equals("Plovdiv")) {
            if (product.equals("coffee")) {
                output = quantity * 0.40;
            } else if (product.equals("water")) {
                output = quantity * 0.70;
            } else if (product.equals("beer")) {
                output = quantity * 1.15;
            } else if (product.equals("sweets")) {
                output = quantity * 1.30;
            } else if (product.equals("peanuts")) {
                output = quantity * 1.50;
            }
        } else if (city.equals("Varna")) {
            if (product.equals("coffee")) {
                output = quantity * 0.45;
            } else if (product.equals("water")) {
                output = quantity * 0.70;
            } else if (product.equals("beer")) {
                output = quantity * 1.10;
            } else if (product.equals("sweets")) {
                output = quantity * 1.35;
            } else if (product.equals("peanuts")) {
                output = quantity * 1.55;
            }
        }

        System.out.printf("%f", output);
    }
}
