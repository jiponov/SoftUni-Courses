package P07_MY_MID_EXAM;
// 100/100 jiponov

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class E_20240218_01_ExperienceGaining {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double neededExperience = Double.parseDouble(scanner.nextLine());
        int battles = Integer.parseInt(scanner.nextLine());

        int counterBattles = 0;
        double gainedTotalExperience = 0;

        while (battles > 0) {
            String input = scanner.nextLine();
            battles--;
            counterBattles++;
            int inputAsInt = Integer.parseInt(input);

            double currentExpBattle = (double) inputAsInt;

            if (counterBattles % 3 == 0) {
                currentExpBattle *= 1.15;
            }

            if (counterBattles % 5 == 0) {
                currentExpBattle *= 0.90;
            }

            if (counterBattles % 15 == 0) {
                currentExpBattle *= 1.05;
            }

            gainedTotalExperience += currentExpBattle;

            if (gainedTotalExperience >= neededExperience) {
                System.out.printf("Player successfully collected his needed experience for %d battles.\n", counterBattles);
                return;
            }
        }

        double diff = neededExperience - gainedTotalExperience;
        System.out.printf("Player was not able to collect the needed experience, %.2f more needed.\n", diff);
    }
}