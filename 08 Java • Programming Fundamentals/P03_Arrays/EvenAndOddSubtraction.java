package P03_Arrays;

import java.util.Arrays;
import java.util.Scanner;

public class EvenAndOddSubtraction {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // To read the array
        int[] numbers = Arrays
                .stream(scanner.nextLine().split(" "))
                .mapToInt(x -> Integer.parseInt(x))
                .toArray();

        int evenSum = 0;
        int oddSum = 0;

        // Iterate through all elements in the array
        // Check the current number – even or odd
        for (int el : numbers) {
            if (el % 2 == 0) {
                evenSum += el;
            } else {
                oddSum += el;
            }
        }

        int diff = evenSum - oddSum;
        System.out.println(diff);
    }
}

// 100/100