// 100/100
import java.util.Scanner;

public class YardGreening {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double metersGreening = Double.parseDouble(scan.nextLine());
        double yard = metersGreening * 7.61;
        double discount = yard * 0.18;
        double finalPrice = yard * 0.82;

        System.out.printf("The final price is: %.2f lv.%n", finalPrice);
        System.out.printf("The discount is: %.2f lv.", discount);
    }
}
