package P03_Arrays;

import java.util.Arrays;
import java.util.Scanner;

public class TopIntegers2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = Arrays
                .stream(scanner.nextLine().split(" "))
                .mapToInt(e -> Integer.parseInt(e))
                .toArray();


        for (int i = 0; i <= numbers.length - 1; i++) {
            int number = numbers[i];

            if (i == numbers.length - 1) {
                System.out.print(number);
                break;
            }

            boolean isBigger = false;

            for (int k = i + 1; k <= numbers.length - 1; k++) {
                if (number > numbers[k]) {
                    isBigger = true;
                } else {
                    isBigger = false;
                    break;
                }
            }

            if (isBigger) {
                System.out.print(number + " ");
            }
        }
    }
}

// 100/100