package P02_DataType;

import java.util.Scanner;

public class SpecialNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        for (int i = 1; i <= n; i++) {
            int currentNumber = i;
            int sum = 0;

            while (currentNumber > 0) {            // (currentNumber != 0)
                sum += currentNumber % 10;
                currentNumber = currentNumber / 10;
            }

            if (sum == 5 || sum == 7 || sum == 11) {
                System.out.printf("%d -> True%n", i);
                // System.out.println(i + " -> True");
            } else {
                System.out.printf("%d -> False%n", i);
                // System.out.println(i + " -> False");
            }
        }
    }
}

// 100/100