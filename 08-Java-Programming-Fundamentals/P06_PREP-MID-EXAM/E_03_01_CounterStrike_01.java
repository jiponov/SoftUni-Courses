package P06_PREP_MID_EXAM;

import java.util.Scanner;

public class E_03_01_CounterStrike_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int initialEnergy = Integer.parseInt(scanner.nextLine());

        int wins = 0;

        String line = scanner.nextLine();
        while (!line.equals("End of battle")) {
            int neededEnemyDist = Integer.parseInt(line);
            int attackEnergy = neededEnemyDist;

            if (initialEnergy - attackEnergy < 0) {
                System.out.printf("Not enough energy! Game ends with %d won battles and %d energy", wins, initialEnergy);
                return;
            }

            initialEnergy -= attackEnergy;
            wins++;

            if (wins % 3 == 0) {
                initialEnergy += wins;
            }

            line = scanner.nextLine();
        }

        System.out.printf("Won battles: %d. Energy left: %d", wins, initialEnergy);
    }
}

// 100/100