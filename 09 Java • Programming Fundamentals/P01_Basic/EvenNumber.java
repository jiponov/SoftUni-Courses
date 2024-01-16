package P01_Basic;

import java.util.Scanner;

public class EvenNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        while (!input.isEmpty()) {                  // input.length() > 0
            int num = Integer.parseInt(input);

            if (num % 2 == 0) {
                System.out.printf("The number is: %d%n", Math.abs(num));
            } else {
                System.out.printf("Please write an even number.%n");
            }

            input = scanner.nextLine();
        }
    }
}

// 100/100