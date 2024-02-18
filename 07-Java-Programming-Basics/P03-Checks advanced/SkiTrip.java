import java.util.Scanner;

// 100/100
public class SkiTrip {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int days = Integer.parseInt(scanner.nextLine());
        String room = scanner.nextLine();
        String feedback = scanner.nextLine();

        double priceWithDiscount = 0;
        double total = 0;
        int nights = days - 1;


        if (room.equals("room for one person")) {
            priceWithDiscount = nights * 18;

        } else if (room.equals("apartment")) {
            if (nights < 10) {
                priceWithDiscount = nights * 25 * 0.70;
            } else if (nights >= 10 && nights <= 15) {
                priceWithDiscount = nights * 25 * 0.65;
            } else if (days > 15) {
                priceWithDiscount = nights * 25 * 0.50;
            }

        } else if (room.equals("president apartment")) {
            if (nights < 10) {
                priceWithDiscount = nights * 35 * 0.90;
            } else if (nights >= 10 && nights <= 15) {
                priceWithDiscount = nights * 35 * 0.85;
            } else if (days > 15) {
                priceWithDiscount = nights * 35 * 0.80;
            }
        }

        if ("positive".equals(feedback)) {
            total = priceWithDiscount * 1.25;
        } else if ("negative".equals(feedback)) {
            total = priceWithDiscount * 0.90;
        }

        System.out.printf("%.2f", total);
    }
}