package P03_Arrays;

import java.util.Scanner;

public class DayOfWeek {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // array of strings holding the day names
        String[] week = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};

        int day = Integer.parseInt(scanner.nextLine());

        if (day >= 1 && day <= 7) {
            System.out.printf("%s", week[day - 1]);
        } else {
            System.out.println("Invalid day!");
        }
    }
}

// 100/100