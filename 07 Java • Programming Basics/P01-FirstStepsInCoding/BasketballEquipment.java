// 100/100
import java.util.Scanner;

public class BasketballEquipment {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int taxAnnual = Integer.parseInt(scanner.nextLine());
        double shoes = 0.6 * taxAnnual;
        double equipment = 0.8 * shoes;
        double ball = 0.25 * equipment;
        double accessories = 0.2 * ball;

        double price = taxAnnual + shoes + equipment + ball + accessories;
        System.out.printf("%.2f", price);
    }
}