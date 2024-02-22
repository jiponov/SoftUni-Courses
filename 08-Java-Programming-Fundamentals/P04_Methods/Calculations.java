package P04_Methods;

import java.util.Scanner;

public class Calculations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


        String operation = scanner.nextLine();   //"add", "multiply", "subtract", "divide"
        int firstNumber = Integer.parseInt(scanner.nextLine());
        int secondNumber = Integer.parseInt(scanner.nextLine());

        executeOperation(operation, firstNumber, secondNumber);
    }

    private static void executeOperation(String operation, int firstNumber, int secondNumber) {
        if (operation.equals("add")) {
            sumAndPrint(firstNumber, secondNumber);
        } else if (operation.equals("multiply")) {
            multiplyAndPrint(firstNumber, secondNumber);
        } else if (operation.equals("subtract")) {
            subtractAndPrint(firstNumber, secondNumber);
        } else if (operation.equals("divide")) {
            divideAndPrint(firstNumber, secondNumber);
        }
    }

    // метод, който събира две цели числа и отпечтва сумата
    public static void sumAndPrint(int n1, int n2) {
        System.out.println(n1 + n2);
    }

    // метод, който умножава две цели числа и отпечатва произведението
    public static void multiplyAndPrint(int n1, int n2) {
        System.out.println(n1 * n2);
    }

    // метод, който изважда две цели числа и отпечатва разлика
    public static void subtractAndPrint(int n1, int n2) {
        int diff = n1 - n2;
        System.out.println(diff);
    }

    // метод, който дели две цели числа и отпечатва частно
    public static void divideAndPrint(int n1, int n2) {
        System.out.println(n1 / n2);
    }
}

// 100/100