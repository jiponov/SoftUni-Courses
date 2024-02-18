package P06_PREP_MID_EXAM;
// 100/100

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class E_02_01_SoftUniReception_01 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int employeeEfficiency1 = Integer.parseInt(scanner.nextLine());
        int employeeEfficiency2 = Integer.parseInt(scanner.nextLine());
        int employeeEfficiency3 = Integer.parseInt(scanner.nextLine());
        int students = Integer.parseInt(scanner.nextLine());

        int answeredStudentsPerHour = employeeEfficiency1 + employeeEfficiency2 + employeeEfficiency3;
        int hours = 0;

        while (students > 0) {
            hours++;
            if (hours % 4 == 0) {
                continue;
            }

            students -= answeredStudentsPerHour;
        }

        System.out.printf("Time needed: %dh.", hours);
    }
}