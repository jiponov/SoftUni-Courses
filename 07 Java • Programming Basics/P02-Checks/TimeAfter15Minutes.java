// 100/100

import java.util.Scanner;

public class TimeAfter15Minutes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int hours = Integer.parseInt(scanner.nextLine());
        int minutes = Integer.parseInt(scanner.nextLine());
        minutes = minutes + 15;

        if (minutes >= 60) {
            minutes -= 60;
            hours += 1;

            if (hours > 24) {
                hours = hours % 24;
            } else if (hours >= 24) {
                hours -= 24;
            }
        }

        //System.out.println(hours + ":" +minutes);
        System.out.printf("%d:%02d", hours, minutes);
    }
}
