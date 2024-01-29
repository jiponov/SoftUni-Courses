import java.util.Scanner;

public class WorkOrRelax {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String day = scanner.nextLine();
        String type;

        if (day.equals("Monday") || day.equals("Tuesday") || day.equals("Wednesday") || day.equals("Thursday") || day.equals("Friday")) {
            type = "Working day";
        } else if (day.equals("Saturday") || day.equals("Sunday")) {
            type = "Weekend";
        } else {
            type = "Error";
        }

        System.out.println(type);
    }
}

// 100/100