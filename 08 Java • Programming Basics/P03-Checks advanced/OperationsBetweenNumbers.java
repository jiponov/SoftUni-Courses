import java.util.Scanner;

public class OperationsBetweenNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num1 = Integer.parseInt(scanner.nextLine());
        int num2 = Integer.parseInt(scanner.nextLine());
        String symbol = scanner.nextLine();
        double output = 0;

        if ("+".equals(symbol)) {
            output = num1 + num2;
            if (output % 2 == 0) {
                System.out.printf("%d %s %d = %.0f - even", num1, symbol, num2, output);
            } else {
                System.out.printf("%d %s %d = %.0f - odd", num1, symbol, num2, output);
            }

        } else if ("-".equals(symbol)) {
            output = num1 - num2;
            if (output % 2 == 0) {
                System.out.printf("%d %s %d = %.0f - even", num1, symbol, num2, output);
            } else {
                System.out.printf("%d %s %d = %.0f - odd", num1, symbol, num2, output);
            }

        } else if ("*".equals(symbol)) {
            output = num1 * num2;
            if (output % 2 == 0) {
                System.out.printf("%d %s %d = %.0f - even", num1, symbol, num2, output);
            } else {
                System.out.printf("%d %s %d = %.0f - odd", num1, symbol, num2, output);
            }

        } else if ("/".equals(symbol)) {
            output = (double) num1 / num2;
            if (num2 > 0) {
                System.out.printf("%d %s %d = %.2f", num1, symbol, num2, output);

            } else if (num2 == 0) {
                System.out.printf("Cannot divide %d by zero", num1);
            }

        } else if ("%".equals(symbol)) {
            output = (double) num1 % num2;
            if (num2 > 0) {
                System.out.printf("%d %s %d = %.0f", num1, symbol, num2, output);
            } else if (num2 == 0) {
                System.out.printf("Cannot divide %d by zero", num1);
            }
        }
    }
}

// 100/100
