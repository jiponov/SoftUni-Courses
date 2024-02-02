package P03_Arrays;

import java.util.Scanner;

public class PrintNumbersInReverseOrder {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        // array of an integer with n size
        int[] numbers = new int[n];

        // Read n numbers using for loop and fill the array
        for (int i = 0; i < numbers.length; i++) {
            int inputNum = Integer.parseInt(scanner.nextLine());
            numbers[i] = inputNum;
        }

        // Print the array in reversed order
        for (int i = numbers.length - 1; i >= 0; i--) {
            System.out.print(numbers[i]);

            if (i != 0) {
                System.out.print(" ");
            }
        }
    }
}

// 100/100