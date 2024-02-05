package P03_Arrays;

import java.util.Scanner;

public class Train {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        int[] wagons = new int[n];

        for (int i = 0; i < n; i++) {
            int wagon = Integer.parseInt(scanner.nextLine());
            wagons[i] = wagon;
        }

        int sum = 0;

        for (int value : wagons) {
            System.out.print(value + " ");
            sum += value;
        }

        System.out.println();
        System.out.println(sum);
    }
}

// 100/100