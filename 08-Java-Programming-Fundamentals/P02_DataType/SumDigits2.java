package P02_DataType;

import java.util.Scanner;

public class SumDigits2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());
        int sum = 0;

        // Повтарям: числото > 0
        // 1. Взимаме последната цифра от числото (числото % 10)
        // 2. Прибавяме последната цифра към сумата (sum += lastDigit)
        // 3. Премахваме последната цифра от числото (числото / 10)

        while (num > 0) {
            int lastDigit = num % 10;
            sum += lastDigit;
            num /= 10;
        }

        System.out.println(sum);
    }
}

// 100/100