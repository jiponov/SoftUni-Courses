package P03_Arrays;

import java.util.Arrays;
import java.util.Scanner;

public class MagicSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] array = Arrays
                .stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();

        int magicNumber = Integer.parseInt(scanner.nextLine());

        for (int position = 0; position < array.length - 1; position++) {
            int firstNum = array[position];

            for (int nextPosition = position + 1; nextPosition <= array.length - 1; nextPosition++) {
                int secondNum = array[nextPosition];

                int sum = firstNum + secondNum;
                if (sum == magicNumber) {
                    System.out.print(firstNum + " " + secondNum);
                    System.out.println();
                    // OR:  System.out.printf("%d %d\n", firstNum, secondNum);
                }
            }
        }
    }
}

// 100/100