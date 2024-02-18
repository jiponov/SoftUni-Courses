package P01_Basic;

import java.util.Scanner;

public class PrintAndSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int start = Integer.parseInt(scanner.nextLine());
        int end = Integer.parseInt(scanner.nextLine());

        int sum = 0;

        for (int i = start; i <= end; i++) {
            sum += i;

            if (i == end) {
                System.out.printf("%d\n", i);
                break;
            }

            System.out.printf("%d ", i);
        }

        System.out.printf("Sum: %d", sum);
    }
}

// 100/100