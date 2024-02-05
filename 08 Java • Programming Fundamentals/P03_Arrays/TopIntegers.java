package P03_Arrays;

import java.util.Arrays;
import java.util.Scanner;

public class TopIntegers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = Arrays
                .stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt)     // OR:  .mapToInt(e -> Integer.parseInt(e))
                .toArray();

        for (int i = 0; i < numbers.length - 1; i++) {
            int currentNumber = numbers[i];
            boolean isTopInteger = true;

            for (int nextPosition = i + 1; nextPosition < numbers.length; nextPosition++) {
                int nextNumber = numbers[nextPosition];

                if (nextNumber >= currentNumber) {
                    isTopInteger = false;
                    break;
                }
            }

            if (isTopInteger) {
                System.out.print(currentNumber + " ");
            }
        }

        System.out.println(numbers[numbers.length - 1]);
    }
}

// 100/100