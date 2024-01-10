import java.util.Scanner;

// 100/100
public class OnTimeForTheExam {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int examHour = Integer.parseInt(scanner.nextLine());
        int examMinutes = Integer.parseInt(scanner.nextLine());
        int arriveHour = Integer.parseInt(scanner.nextLine());
        int arriveMinutes = Integer.parseInt(scanner.nextLine());
        int examTime = examHour * 60 + examMinutes;
        int arriveTime = arriveHour * 60 + arriveMinutes;
        String output1 = "";
        String output2 = "";

        if (arriveTime <= examTime && arriveTime >= examTime - 30) {
            output1 = "On time";
            int difference = examTime - arriveTime;
            if (difference < 60) {
                output2 = String.format("%d minutes before the start", difference);
            }

        } else if (arriveTime < examTime - 30) {
            output1 = "Early";
            int difference = examTime - arriveTime;
            if (difference < 60) {
                output2 = String.format("%d minutes before the start", difference);
            } else {
                int hours = difference / 60;
                int minutes = difference % 60;
                output2 = String.format("%d:%02d hours before the start", hours, minutes);
            }

        } else if (arriveTime > examTime) {
            output1 = "Late";
            int difference = arriveTime - examTime;
            if (difference < 60) {
                output2 = String.format("%d minutes after the start", difference);
            } else {
                int hours = difference / 60;
                int minutes = difference % 60;
                output2 = String.format("%d:%02d hours after the start", hours, minutes);
            }
        }

        System.out.println(output1);
        System.out.println(output2);
    }
}
