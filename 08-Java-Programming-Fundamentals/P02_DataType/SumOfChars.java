package P02_DataType;

import java.util.Scanner;

public class SumOfChars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        byte n = Byte.parseByte(scanner.nextLine());
        int sum = 0;

        for (int i = 1; i <= n; i++) {
            String input = scanner.nextLine();
            char inputAsChar = input.charAt(0);
            int inputAsAsciiCode = (int) inputAsChar;
            sum += inputAsAsciiCode;
        }

        System.out.printf("The sum equals: %d", sum);
    }
}

// 100/100