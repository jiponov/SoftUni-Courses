package P02_DataType;

import java.util.Scanner;

public class IntegerOperations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num1 = Integer.parseInt(scanner.nextLine());
        int num2 = Integer.parseInt(scanner.nextLine());
        int num3 = Integer.parseInt(scanner.nextLine());
        int num4 = Integer.parseInt(scanner.nextLine());

        // ((n1 + n2) / n3) * n4
        int res = ((num1 + num2) / num3) * num4;
        System.out.printf("%d", res);
    }
}

// 100/100