package P04_Methods;

import java.util.Scanner;

public class MathOperations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double number1 = Double.parseDouble(scanner.nextLine());
        String command = scanner.nextLine();
        double number2 = Double.parseDouble(scanner.nextLine());

        result(number1, command, number2);
    }

    private static void result(double number1, String command, double number2) {
        double result = 0;

        if (command.equals("+")) {
            result = number1 + number2;
        } else if (command.equals("-")) {
            result = number1 - number2;
        } else if (command.equals("*")) {
            result = number1 * number2;
        } else if (command.equals("/")) {
            result = number1 / number2;
        }

        System.out.printf("%.0f", result);
    }
}
// 100/100