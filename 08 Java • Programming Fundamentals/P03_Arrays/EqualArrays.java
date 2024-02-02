package P03_Arrays;

import java.util.Arrays;
import java.util.Scanner;

public class EqualArrays {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 1 Array
        int[] firstArr = Arrays
                .stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt)      // OR: .mapToInt(e -> Integer.parseInt(e))
                .toArray();

        // 2 Array
        String input = scanner.nextLine();
        String[] splittedInput = input.split(" ");
        int[] secondArr = new int[splittedInput.length];

        for (int i = 0; i < splittedInput.length; i++) {
            secondArr[i] = Integer.parseInt(splittedInput[i]);
        }

        int sum = 0;
        boolean areIdentical = true;

        for (int i = 0; i < firstArr.length; i++) {
            sum += firstArr[i];
            if (firstArr[i] != secondArr[i]) {
                System.out.printf("Arrays are not identical. Found difference at %d index.", i);
                areIdentical = false;
                break;
            }
        }

        if (areIdentical) {
            System.out.printf("Arrays are identical. Sum: %d", sum);
        }
    }
}

// 100/100