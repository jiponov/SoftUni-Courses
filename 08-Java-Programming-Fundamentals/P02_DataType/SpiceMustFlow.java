package P02_DataType;

import java.util.Scanner;

public class SpiceMustFlow {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int startingYield = Integer.parseInt(scanner.nextLine());
        int total = 0;
        int days = 0;

        while (startingYield >= 100) {
            total += startingYield;
            startingYield -= 10;
            total -= 26;
            days++;

            if (startingYield < 100) {
                total -= 26;
            }
        }

        System.out.println(days);
        System.out.println(total);
    }
}

// 100/100