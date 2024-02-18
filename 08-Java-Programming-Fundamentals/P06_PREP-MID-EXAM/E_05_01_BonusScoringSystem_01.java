package P06_PREP_MID_EXAM;
// 100/100

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class E_05_01_BonusScoringSystem_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int students = Integer.parseInt(scanner.nextLine());
        int lectures = Integer.parseInt(scanner.nextLine());
        int additionalBonus = Integer.parseInt(scanner.nextLine());
        double maxBonus = 0;
        int studentAttendanceWinner = 0;

        int counter = 0;

        while (students != counter) {
            counter++;

            int attendance = Integer.parseInt(scanner.nextLine());
            double currentBonus = (attendance * 1.0 / lectures) * (5 + additionalBonus);

            if (currentBonus > maxBonus) {
                maxBonus = currentBonus;
                studentAttendanceWinner = attendance;
            }
        }

        System.out.printf("Max Bonus: %.0f.\n", Math.ceil(maxBonus));
        System.out.printf("The student has attended %d lectures.", studentAttendanceWinner);
    }
}