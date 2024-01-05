// 100/100
import java.util.Scanner;

public class Zoo {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double dogsFood = 2.50;
        int catsFood = 4;
        int dogsPackages = Integer.parseInt(scan.nextLine());
        int catsPackages = Integer.parseInt(scan.nextLine());
        double sum = dogsFood * dogsPackages + catsFood * catsPackages;
        System.out.printf("%.2f lv.", sum);
    }
}
