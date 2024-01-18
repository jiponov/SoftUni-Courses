package P01_Basic;

import java.util.Scanner;

public class StrongNumber {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        int sumOfFactorials = 0;

        for (int i = 0; i <= input.length() - 1; i++) {

            int digit = Integer.parseInt(input.charAt(i) + "");

            // Calculate Factorial
            int factorial = 1;
            for (int j = 2; j <= digit; j++) {
                factorial *= j;
            }

            // Add current Factorial to the SUM
            sumOfFactorials += factorial;
        }

        int number = Integer.parseInt(input);

        if (number == sumOfFactorials) {
            System.out.println("yes");
        } else {
            System.out.println("no");
        }
    }
}

// 100/100