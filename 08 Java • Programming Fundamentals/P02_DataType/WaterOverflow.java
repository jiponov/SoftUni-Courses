package P02_DataType;

import java.util.Scanner;

public class WaterOverflow {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int spilledWater = 0;
        int n = Integer.parseInt(scanner.nextLine());

        for (int i = 1; i <= n; i++) {
            int liters = Integer.parseInt(scanner.nextLine());
            spilledWater += liters;
            if (spilledWater > 255) {
                System.out.println("Insufficient capacity!");
                spilledWater -= liters;
            }
        }

        System.out.printf("%d", spilledWater);
    }
}

// 100/100