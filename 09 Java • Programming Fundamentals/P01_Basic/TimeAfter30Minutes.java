package P01_Basic;

import java.util.Scanner;

public class TimeAfter30Minutes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int hour = Integer.parseInt(scanner.nextLine());
        int minutes = Integer.parseInt(scanner.nextLine());

        int totalMinutes = hour * 60 + minutes;
        int totalMinutesBack = totalMinutes + 30;

        int outputHour = totalMinutesBack / 60;
        int outputMinutes = totalMinutesBack % 60;

        if (outputHour > 23) {
            outputHour = 0;
        }

        System.out.printf("%d:%02d", outputHour, outputMinutes);
    }
}

// 100/100