import java.util.Scanner;

// 100/100
public class FruitShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String fruit = scanner.nextLine();
        String day = scanner.nextLine();
        double num = Double.parseDouble(scanner.nextLine());

        if (fruit.equals("banana")) {
            if (day.equals("Monday") || day.equals("Tuesday") || day.equals("Wednesday") || day.equals("Thursday") || day.equals("Friday")) {
                System.out.printf("%.2f", num * 2.50);
            } else if (day.equals("Saturday") || day.equals("Sunday")) {
                System.out.printf("%.2f", num * 2.70);
            } else {
                System.out.println("error");
            }
        } else if (fruit.equals("apple")) {
            if (day.equals("Monday") || day.equals("Tuesday") || day.equals("Wednesday") || day.equals("Thursday") || day.equals("Friday")) {
                System.out.printf("%.2f", num * 1.20);
            } else if (day.equals("Saturday") || day.equals("Sunday")) {
                System.out.printf("%.2f", num * 1.25);
            } else {
                System.out.println("error");
            }
        } else if (fruit.equals("orange")) {
            if (day.equals("Monday") || day.equals("Tuesday") || day.equals("Wednesday") || day.equals("Thursday") || day.equals("Friday")) {
                System.out.printf("%.2f", num * 0.85);
            } else if (day.equals("Saturday") || day.equals("Sunday")) {
                System.out.printf("%.2f", num * 0.90);
            } else {
                System.out.println("error");
            }
        } else if (fruit.equals("grapefruit")) {
            if (day.equals("Monday") || day.equals("Tuesday") || day.equals("Wednesday") || day.equals("Thursday") || day.equals("Friday")) {
                System.out.printf("%.2f", num * 1.45);
            } else if (day.equals("Saturday") || day.equals("Sunday")) {
                System.out.printf("%.2f", num * 1.60);
            } else {
                System.out.println("error");
            }
        } else if (fruit.equals("kiwi")) {
            if (day.equals("Monday") || day.equals("Tuesday") || day.equals("Wednesday") || day.equals("Thursday") || day.equals("Friday")) {
                System.out.printf("%.2f", num * 2.70);
            } else if (day.equals("Saturday") || day.equals("Sunday")) {
                System.out.printf("%.2f", num * 3.00);
            } else {
                System.out.println("error");
            }
        } else if (fruit.equals("pineapple")) {
            if (day.equals("Monday") || day.equals("Tuesday") || day.equals("Wednesday") || day.equals("Thursday") || day.equals("Friday")) {
                System.out.printf("%.2f", num * 5.50);
            } else if (day.equals("Saturday") || day.equals("Sunday")) {
                System.out.printf("%.2f", num * 5.60);
            } else {
                System.out.println("error");
            }
        } else if (fruit.equals("grapes")) {
            if (day.equals("Monday") || day.equals("Tuesday") || day.equals("Wednesday") || day.equals("Thursday") || day.equals("Friday")) {
                System.out.printf("%.2f", num * 3.85);
            } else if (day.equals("Saturday") || day.equals("Sunday")) {
                System.out.printf("%.2f", num * 4.20);
            } else {
                System.out.println("error");
            }
        } else {
            System.out.println("error");
        }
    }
}