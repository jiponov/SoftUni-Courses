import java.util.Scanner;

// 100/100
public class DayFromWeek {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());
        String day;

        if (num == 1) {
            day = "Monday";
        } else if (num == 2) {
            day = "Tuesday";
        } else if (num == 3) {
            day = "Wednesday";
        } else if (num == 4) {
            day = "Thursday";
        } else if (num == 5) {
            day = "Friday";
        } else if (num == 6) {
            day = "Saturday";
        } else if (num == 7) {
            day = "Sunday";
        } else {
            day = "Error";
        }

        System.out.println(day);
    }
}
