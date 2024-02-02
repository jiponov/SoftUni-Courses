package P03_Arrays;

import java.util.Arrays;
import java.util.Scanner;

public class ReverseArrayOfStrings {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String[] input = scanner.nextLine().split(" ");
        for (int i = 0; i < input.length / 2; i++) {
            int otherIndex = input.length - 1 - i;
            String waitingValue = input[i];
            input[i] = input[otherIndex];
            input[otherIndex] = waitingValue;
        }

        // System.out.println(Arrays.toString(input));
        System.out.println(String.join(" ", input));

        /*
        OR:

        for (int i = 0; i < input.length; i++) {
            System.out.print(input[i] + " ");
        }

        */
    }
}

// 100/100