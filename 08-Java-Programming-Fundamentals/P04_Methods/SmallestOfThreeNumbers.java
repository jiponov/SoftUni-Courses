package P04_Methods;

import java.util.Scanner;

public class SmallestOfThreeNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num1 = Integer.parseInt(scanner.nextLine());
        int num2 = Integer.parseInt(scanner.nextLine());
        int num3 = Integer.parseInt(scanner.nextLine());

        printResult(num1, num2, num3);
    }

    private static void printResult(int num1, int num2, int num3) {
        int result = 0;

        if (num1 < num2 && num1 < num3) {
            result = num1;
        } else if (num2 < num1 && num2 < num3) {
            result = num2;
        } else {
            result = num3;
        }

        System.out.println(result);
    }
}

// 100/100