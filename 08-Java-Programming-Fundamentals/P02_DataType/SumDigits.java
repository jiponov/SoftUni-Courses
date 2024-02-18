package P02_DataType;

import java.util.Scanner;

public class SumDigits {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());

        int sum = 0;
        String numAsString = "" + num;

        for (int i = 0; i < numAsString.length(); i++) {
            int currentNum = Integer.parseInt(numAsString.charAt(i) + "");
            sum += currentNum;
        }

        System.out.println(sum);
    }
}

// 100/100