package P03_Arrays;

import java.util.Scanner;

public class SumEvenNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String values = scanner.nextLine();
        String[] strArr = values.split(" ");
        int[] numbersArr = new int[strArr.length];

        for (int i = 0; i < strArr.length; i++) {
            numbersArr[i] = Integer.parseInt(strArr[i]);
        }

        int sum = 0;
        for (int i = 0; i < numbersArr.length; i++) {
            if (numbersArr[i] % 2 == 0) {
                sum += numbersArr[i];
            }
        }

        System.out.println(sum);
    }
}

// 100/100