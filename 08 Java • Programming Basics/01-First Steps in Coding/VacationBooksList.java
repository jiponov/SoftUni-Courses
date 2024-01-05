// 100/100
import java.util.Scanner;

public class VacationBooksList {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int pagesBook = Integer.parseInt(scan.nextLine());
        int readPagesPerHour = Integer.parseInt(scan.nextLine());
        int days = Integer.parseInt(scan.nextLine());

        int time = pagesBook / readPagesPerHour;
        int neededHoursPerDay = time / days;

        System.out.println(neededHoursPerDay);
    }
}
