package P06_PREP_MID_EXAM;

import java.util.Scanner;

public class E_06_01_BlackFlag_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int days = Integer.parseInt(scanner.nextLine());
        int dailyPlunder = Integer.parseInt(scanner.nextLine());
        double expectedPlunder = Integer.parseInt(scanner.nextLine());

        double totalGain = 0;

        for (int i = 1; i <= days; i++) {
            totalGain += dailyPlunder;

            if (i % 3 == 0) {
                totalGain += 0.5 * dailyPlunder;
            }

            if (i % 5 == 0) {
                totalGain *= 0.7;
            }
        }

        if (totalGain >= expectedPlunder) {
            System.out.printf("Ahoy! %.2f plunder gained.\n", totalGain);
        } else {
            double notEnough = (totalGain / expectedPlunder) * 100;
            System.out.printf("Collected only %.2f%% of the plunder.", notEnough);
        }
    }
}

// 100/100